import SceneKit
import simd

/// Immutable vertex buffers; SceneKit applies bone matrices and morph deltas on the GPU.
final class GPUSkeletonMeshes {
    let bones: [SCNNode]
    private var morphers: [(SCNMorpher, [String])] = []

    static func reflected(_ m: simd_float4x4) -> simd_float4x4 {
        let f = simd_float4x4(diagonal: SIMD4<Float>(-1, 1, 1, 1))
        return f * m * f
    }

    init(package: CharacterPackage, scene: SCNScene, rest: [simd_float4x4], bindings: [[simd_float4x4]]) throws {
        guard let model = scene.rootNode.childNodes.first(where: { $0.camera == nil }), let motion = package.motion else {
            throw CompanionError.message("缺少骨架场景。")
        }
        let originalBounds = model.boundingBox
        let root = SCNNode(); root.name = "Native skeleton"
        bones = motion.nodes.map { let n = SCNNode(); n.name = "bone:\($0.name)"; return n }
        for i in bones.indices {
            bones[i].simdTransform = Self.reflected(rest[i])
            if let parent = motion.nodes[i].parent { bones[parent].addChildNode(bones[i]) }
            else { root.addChildNode(bones[i]) }
        }
        model.addChildNode(root)
        for (partIndex, part) in package.parts.enumerated() {
            guard let skin = part.skin, let normals = skin.normals,
                  normals.count == skin.vertices.count,
                  normals.allSatisfy({ $0.count == 3 && $0.allSatisfy(\.isFinite) }),
                  let node = model.childNode(withName: part.mesh.name, recursively: true), let old = node.geometry else {
                throw CompanionError.message("GPU 蒙皮缺少原始网格或法线。")
            }
            let bounds = node.boundingBox
            var mesh = ResearchMesh(name: part.mesh.name, vertices: skin.vertices, normals: normals,
                                    uv0: part.mesh.uv0, trianglesBySubmesh: part.mesh.trianglesBySubmesh)
            mesh.uv1 = part.mesh.uv1
            let geometry = try geometryForMesh(mesh, materials: old.materials)
            let used = Set(zip(skin.weights, skin.indices).flatMap { w, ids in
                zip(w, ids).compactMap { $0.0 > 0 ? $0.1 : nil }
            }).sorted()
            guard !used.isEmpty, used.count <= 256 else { throw CompanionError.message("GPU 蒙皮有效骨骼超限。") }
            let remap = Dictionary(uniqueKeysWithValues: used.enumerated().map { ($0.element, UInt16($0.offset)) })
            let indices = zip(skin.weights, skin.indices).flatMap { w, ids in
                zip(w, ids).map { $0.0 > 0 ? remap[$0.1]! : UInt16(0) }
            }
            let weights = skin.weights.flatMap { $0 }
            let weightData = weights.withUnsafeBufferPointer { Data(buffer: $0) }
            let indexData = indices.withUnsafeBufferPointer { Data(buffer: $0) }
            let weightSource = SCNGeometrySource(data: weightData, semantic: .boneWeights, vectorCount: skin.vertices.count,
                usesFloatComponents: true, componentsPerVector: 4, bytesPerComponent: 4, dataOffset: 0, dataStride: 16)
            let indexSource = SCNGeometrySource(data: indexData, semantic: .boneIndices, vectorCount: skin.vertices.count,
                usesFloatComponents: false, componentsPerVector: 4, bytesPerComponent: 2, dataOffset: 0, dataStride: 8)
            let inverse = used.map { NSValue(scnMatrix4: SCNMatrix4(Self.reflected(bindings[partIndex][$0]))) }
            node.geometry = geometry
            node.skinner = SCNSkinner(baseGeometry: geometry, bones: used.map { bones[skin.joints[$0]] },
                boneInverseBindTransforms: inverse, boneWeights: weightSource, boneIndices: indexSource)
            node.skinner?.skeleton = root
            node.boundingBox = bounds
            if !skin.morphs.isEmpty {
                let morpher = SCNMorpher(); morpher.calculationMode = .additive
                morpher.targets = try skin.morphs.map { target in
                    var delta = [SCNVector3](repeating: SCNVector3Zero, count: skin.vertices.count)
                    var normalDelta = delta
                    if let nd = target.normalDeltas {
                        guard nd.count == target.indices.count, nd.allSatisfy({ $0.count == 3 && $0.allSatisfy(\.isFinite) }) else {
                            throw CompanionError.message("表情法线增量无效。")
                        }
                    }
                    for (offset, index) in target.indices.enumerated() {
                        let d = target.deltas[offset]; delta[index] = SCNVector3(-d[0], d[1], d[2])
                        if let n = target.normalDeltas?[offset] { normalDelta[index] = SCNVector3(-n[0], n[1], n[2]) }
                    }
                    return SCNGeometry(sources: [SCNGeometrySource(vertices: delta), SCNGeometrySource(normals: normalDelta)], elements: geometry.elements)
                }
                node.morpher = morpher
                morphers.append((morpher, skin.morphs.map(\.name)))
            }
        }
        model.boundingBox = originalBounds
    }

    private func geometryForMesh(_ mesh: ResearchMesh, materials: [SCNMaterial]) throws -> SCNGeometry {
        guard let geometry = try mesh.node(materials: materials).geometry else { throw CompanionError.message("网格为空。") }
        return geometry
    }

    func update(local: [simd_float4x4], expression: [String: Float]) {
        SCNTransaction.begin(); SCNTransaction.animationDuration = 0; SCNTransaction.disableActions = true
        for i in bones.indices { bones[i].simdTransform = Self.reflected(local[i]) }
        for (morpher, names) in morphers {
            for (index, name) in names.enumerated() { morpher.setWeight(CGFloat(expression[name] ?? 0), forTargetAt: index) }
        }
        SCNTransaction.commit()
    }
}
