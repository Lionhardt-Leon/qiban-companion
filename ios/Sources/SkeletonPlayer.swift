import Foundation
import SceneKit
import simd

struct SkeletonMotion: Decodable {
    struct Node: Decodable { let name: String; let parent: Int?; let matrix: [Float] }
    struct Track: Decodable { let node: Int; let rotations: String }
    let fps: Int
    let frameCount: Int
    let nodes: [Node]
    let tracks: [Track]
    var loop: Bool? = nil

    func sample(at elapsed: Double) -> Double {
        let value = max(0, elapsed) * Double(fps)
        return loop == true && frameCount > 1 ? value.truncatingRemainder(dividingBy: Double(frameCount - 1)) : min(Double(frameCount - 1), value)
    }
}

struct SkinBinding: Decodable {
    let vertices: [[Float]]
    let weights: [[Float]]
    let indices: [[Int]]
    let joints: [Int]
    let bindMatrices: [[Float]]
    let morphs: [MorphTarget]
    var normals: [[Float]]? = nil
}

/// Bone pose sampling with native GPU skinning; old packages retain the CPU compatibility path.
final class SkeletonPlayer {
    let motion: SkeletonMotion
    private let package: CharacterPackage
    private let scene: SCNScene
    private let rest: [simd_float4x4]
    private let tracks: [(Int, [Float])]
    private let bindings: [[simd_float4x4]]
    private let rotations: [(Int, [simd_quatf])]
    private var gpu: GPUSkeletonMeshes?
    private let actions: CharacterActionLibrary
    let rig: HumanoidRig
    private let dynamics = BodyDynamics()
    private let proceduralPlayer = ProceduralPosePlayer()
    private var lastLocal: [simd_float4x4]?
    private var transitionLocal: [simd_float4x4]?
    private var actionToken: Int?
    private(set) var posedWorld: [simd_float4x4] = []
    var usesGPUSkinning: Bool { gpu != nil }

    private static func matrix(_ values: [Float]) throws -> simd_float4x4 {
        guard values.count == 16, values.allSatisfy(\.isFinite) else {
            throw CompanionError.message("骨架矩阵无效。")
        }
        return simd_float4x4(columns: (
            SIMD4(values[0], values[4], values[8], values[12]),
            SIMD4(values[1], values[5], values[9], values[13]),
            SIMD4(values[2], values[6], values[10], values[14]),
            SIMD4(values[3], values[7], values[11], values[15])))
    }

    init(package: CharacterPackage, scene: SCNScene) throws {
        guard let motion = package.motion, (1...60).contains(motion.fps),
              (1...10_000).contains(motion.frameCount), (1...2000).contains(motion.nodes.count),
              motion.tracks.count <= 128, Set(motion.tracks.map(\.node)).count == motion.tracks.count else {
            throw CompanionError.message("动画轨道规模无效。")
        }
        self.motion = motion; self.package = package; self.scene = scene
        actions = try CharacterActionLibrary(actions: package.actions ?? [], nodeCount: motion.nodes.count,
            morphNames: Set(package.parts.flatMap { $0.skin?.morphs.map(\.name) ?? [] }))
        if let eyes = package.eyes {
            guard eyes.count == 2, Set(eyes.map(\.node)).count == 2,
                  eyes.allSatisfy({ e in motion.nodes.indices.contains(e.node) && motion.nodes.indices.contains(e.pivot) && e.node != e.pivot &&
                      e.forward.count == 3 && e.forward.allSatisfy(\.isFinite) && abs(e.forward.reduce(0) { $0 + $1 * $1 } - 1) < 0.001 &&
                      e.eyeToPupil.isFinite && e.pivotToPupil.isFinite && e.eyeToPupil > 0 && e.pivotToPupil > 0 }) else {
                throw CompanionError.message("双眼视线绑定或瞳孔距离无效。")
            }
        }
        if let face = package.faceDirection {
            guard motion.nodes.indices.contains(face.node), face.axis.count == 3,
                  face.axis.allSatisfy(\.isFinite), abs(face.axis.reduce(0) { $0 + $1 * $1 } - 1) < 0.001 else {
                throw CompanionError.message("脸部朝向骨骼或轴无效。")
            }
            if let up = face.upAxis {
                guard up.count == 3, up.allSatisfy(\.isFinite), abs(up.reduce(0) { $0 + $1 * $1 } - 1) < 0.001,
                      abs(zip(face.axis, up).reduce(Float(0)) { $0 + $1.0 * $1.1 }) < 0.001 else {
                    throw CompanionError.message("脸部朝上轴必须与朝向轴正交。")
                }
            }
        }
        for (index, node) in motion.nodes.enumerated() {
            if let parent = node.parent, parent < 0 || parent >= index {
                throw CompanionError.message("骨架父节点必须排在子节点之前。")
            }
        }
        rest = try motion.nodes.map { try Self.matrix($0.matrix) }
        rig = HumanoidRig(nodes: motion.nodes, rest: rest)
        tracks = try motion.tracks.map { track in
            let count = motion.frameCount * 9
            guard track.node >= 0, track.node < motion.nodes.count,
                  let bytes = Data(base64Encoded: track.rotations), bytes.count == count * 4 else {
                throw CompanionError.message("动画轨道长度或节点无效。")
            }
            var values = [Float](repeating: 0, count: count)
            _ = values.withUnsafeMutableBytes { bytes.copyBytes(to: $0) }
            guard values.allSatisfy({ $0.isFinite && abs($0) <= 1.001 }) else {
                throw CompanionError.message("动画旋转数据无效。")
            }
            return (track.node, values)
        }
        rotations = try tracks.map { node, values in
            let frames = try (0..<motion.frameCount).map { frame -> simd_quatf in
                let i = frame * 9
                let m = simd_float3x3(rows: [SIMD3(values[i], values[i+1], values[i+2]),
                    SIMD3(values[i+3], values[i+4], values[i+5]), SIMD3(values[i+6], values[i+7], values[i+8])])
                guard abs(simd_determinant(m) - 1) < 0.01 else { throw CompanionError.message("动画旋转矩阵无效。") }
                return simd_normalize(simd_quatf(m))
            }
            return (node, frames)
        }
        var allBindings: [[simd_float4x4]] = []
        for part in package.parts {
            guard let skin = part.skin, skin.vertices.count == part.mesh.vertices.count,
                  skin.vertices.count == skin.weights.count, skin.vertices.count == skin.indices.count,
                  !skin.joints.isEmpty, skin.joints.count == skin.bindMatrices.count,
                  skin.joints.allSatisfy({ $0 >= 0 && $0 < motion.nodes.count }),
                  skin.vertices.allSatisfy({ $0.count == 3 && $0.allSatisfy { $0.isFinite && abs($0) < 1000 } }) else {
                throw CompanionError.message("蒙皮绑定或顶点数量无效。")
            }
            for (weights, indices) in zip(skin.weights, skin.indices) {
                guard weights.count == 4, indices.count == 4,
                      weights.allSatisfy({ $0.isFinite && $0 >= 0 }),
                      abs(weights.reduce(0, +) - 1) <= 0.02,
                      indices.allSatisfy({ $0 >= 0 && $0 < skin.joints.count }) else {
                    throw CompanionError.message("蒙皮权重或骨骼索引无效。")
                }
            }
            // Validate sparse morphs once before any playback.
            let local = ResearchMesh(name: part.mesh.name, vertices: skin.vertices, normals: nil, uv0: nil, trianglesBySubmesh: [])
            _ = try local.expressionVertices(targets: skin.morphs, weights: [:])
            allBindings.append(try skin.bindMatrices.map(Self.matrix))
        }
        bindings = allBindings
        if !package.parts.isEmpty && package.parts.allSatisfy({ $0.skin?.normals != nil }) {
            gpu = try GPUSkeletonMeshes(package: package, scene: scene, rest: rest, bindings: bindings)
        }
    }

    func apply(frame: Int, blink: Float, mouth: Float, smile: Float) throws {
        try apply(sample: Double(frame), blink: blink, mouth: mouth, smile: smile)
    }

    func resetDynamics() { dynamics.reset() }
    func receiveTouch(region: String, elapsed: Double) { dynamics.touch(region: region, at: elapsed) }

    func apply(sample: Double, blink: Float, mouth: Float, smile: Float, gazeTarget: SIMD3<Float>? = nil, action: ActionSample? = nil,
               embodiment: EmbodimentFrame? = nil) throws {
        guard sample.isFinite, sample >= 0, sample <= Double(motion.frameCount - 1), [blink, mouth, smile].allSatisfy({ $0.isFinite && (0...1).contains($0) }) else {
            throw CompanionError.message("动画帧或表情权重越界。")
        }
        var local = rest
        let frame = Int(sample), next = min(frame + 1, motion.frameCount - 1)
        for (node, values) in rotations {
            let rotation = simd_float3x3(simd_slerp(values[frame], values[next], Float(sample - Double(frame))))
            for column in 0..<3 {
                let scale = simd_length(SIMD3(rest[node][column].x, rest[node][column].y, rest[node][column].z))
                for row in 0..<3 { local[node][column][row] = rotation[column][row] * scale }
            }
        }
        var expression: [String: Float] = ["Face.eyeBlinkLeft": blink, "Face.eyeBlinkRight": blink,
            "Face.jawOpen": mouth, "Face.mouthSmileLeft": smile, "Face.mouthSmileRight": smile]
        if let action = action {
            guard action.enter.isFinite, action.exit.isFinite, (0...1).contains(action.enter), (0...1).contains(action.exit) else { throw CompanionError.message("动作过渡权重无效。") }
            if actionToken != action.token { actionToken = action.token; transitionLocal = lastLocal ?? local }
            let pose = try actions.pose(id: action.id, time: action.time, base: local)
            let entering = CharacterActionLibrary.blend(transitionLocal ?? local, pose.local, weight: action.enter)
            local = CharacterActionLibrary.blend(entering, local, weight: action.exit)
            for (name, value) in pose.morphs { expression[name] = max(expression[name] ?? 0, value * action.enter * (1 - action.exit)) }
        } else { actionToken = nil; transitionLocal = nil }
        proceduralPlayer.apply(embodiment?.procedural, rig: rig, local: &local)
        lastLocal = local
        if let embodiment = embodiment { dynamics.apply(frame: embodiment, rig: rig, local: &local) }
        var world = local
        for index in motion.nodes.indices {
            if let parent = motion.nodes[index].parent { world[index] = world[parent] * local[index] }
        }
        if let eyes = package.eyes {
            var target = gazeTarget
            if target == nil, let model = scene.rootNode.childNodes.first(where: { $0.camera == nil }),
               let camera = scene.rootNode.childNodes.first(where: { $0.camera != nil }) {
                let position = model.convertPosition(camera.worldPosition, from: nil)
                target = SIMD3(-position.x, position.y, position.z)
            }
            if let target = target, target.x.isFinite && target.y.isFinite && target.z.isFinite {
                EyeGazeSolver.apply(eyes: eyes, nodes: motion.nodes, local: &local, world: &world, target: target)
            }
        }
        posedWorld = world
        if let face = package.faceDirection {
            let vector = world[face.node] * SIMD4(face.axis[0], face.axis[1], face.axis[2], 0)
            let displayMatrix = scene.rootNode.childNodes.first(where:{$0.camera == nil})?.simdWorldTransform ?? matrix_identity_float4x4
            let displayForward = displayMatrix * SIMD4(-vector.x,vector.y,vector.z,0)
            let forward = simd_normalize(SIMD3(displayForward.x,displayForward.y,displayForward.z))
            for material in scene.rootNode.childNodes.flatMap({ $0.childNodes }).flatMap({ $0.geometry?.materials ?? [] }) {
                if material.shaderModifiers?[.surface]?.contains("float characterFaceForwardX;") == true {
                    CharacterMaterialRenderer.setFaceForward(SCNVector3(forward.x, forward.y, forward.z), on: material)
                    if let axis = face.upAxis, material.shaderModifiers?[.surface]?.contains("float characterFaceUpX;") == true {
                        let v = world[face.node] * SIMD4(axis[0], axis[1], axis[2], 0)
                        let displayUp = displayMatrix * SIMD4(-v.x,v.y,v.z,0)
                        let up = simd_normalize(SIMD3(displayUp.x,displayUp.y,displayUp.z))
                        FaceSDFRenderer.setFaceUp(SCNVector3(up.x, up.y, up.z), on: material)
                    }
                }
            }
        }
        if let gpu = gpu { gpu.update(local: local, expression: expression); return }
        for (partIndex, part) in package.parts.enumerated() {
            guard let skin = part.skin,
                  let node = scene.rootNode.childNode(withName: part.mesh.name, recursively: true),
                  let current = node.geometry else { continue }
            let matrices = skin.joints.enumerated().map { world[$0.element] * bindings[partIndex][$0.offset] }
            var positions = skin.vertices.map { SIMD3($0[0], $0[1], $0[2]) }
            for target in skin.morphs {
                let weight = expression[target.name] ?? 0
                if weight == 0 { continue }
                for (index, delta) in zip(target.indices, target.deltas) {
                    positions[index] += SIMD3(delta[0], delta[1], delta[2]) * weight
                }
            }
            let deformed = positions.enumerated().map { index, v -> SCNVector3 in
                let point = SIMD4(v.x, v.y, v.z, Float(1))
                var result = SIMD4<Float>(repeating: 0)
                for influence in 0..<4 {
                    result += (matrices[skin.indices[index][influence]] * point) * skin.weights[index][influence]
                }
                return SCNVector3(-result.x, result.y, result.z)
            }
            let sources = [SCNGeometrySource(vertices: deformed)] + current.sources.filter { $0.semantic != .vertex }
            let geometry = SCNGeometry(sources: sources, elements: current.elements)
            geometry.materials = current.materials
            node.geometry = geometry
        }
    }
}
