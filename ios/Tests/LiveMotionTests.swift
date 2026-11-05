import XCTest
import SceneKit
import simd
import UIKit
@testable import QibanCompanion

final class LiveMotionTests: XCTestCase {
    private let identity: [Float] = [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1]

    func testTimelinePreservesSpeedAndContinuesPastClipEnd() {
        var motion = SkeletonMotion(fps: 30, frameCount: 1201, nodes: [], tracks: [])
        motion.loop = true
        XCTAssertEqual(motion.sample(at: 1.5), 45)
        XCTAssertEqual(motion.sample(at: 40.5), 15)
        XCTAssertEqual(motion.sample(at: 400.5), 15)
        motion.loop = false
        XCTAssertEqual(motion.sample(at: 40.5), 1200)
    }

    func testQuaternionInterpolationPreservesRotationLength() throws {
        let values: [Float] = [1,0,0, 0,1,0, 0,0,1, 0,-1,0, 1,0,0, 0,0,1]
        let data = values.withUnsafeBufferPointer { Data(buffer: $0) }
        var package = CharacterPackage(characterPackageVersion: 3, name: "slerp", parts: [], textures: [:])
        package.motion = SkeletonMotion(fps: 30, frameCount: 2,
            nodes: [.init(name: "root", parent: nil, matrix: identity)], tracks: [.init(node: 0, rotations: data.base64EncodedString())])
        let player = try SkeletonPlayer(package: package, scene: SCNScene())
        try player.apply(sample: 0.5, blink: 0, mouth: 0, smile: 0)
        XCTAssertEqual(player.posedWorld[0][0][0], sqrt(0.5), accuracy: 0.00001)
        XCTAssertEqual(player.posedWorld[0][0][1], sqrt(0.5), accuracy: 0.00001)
        XCTAssertThrowsError(try player.apply(sample: .nan, blink: 0, mouth: 0, smile: 0))
    }

    func testEyesUseSeparateForwardAxesAndUpdateWithHeadAndTarget() {
        var local = [matrix_identity_float4x4, matrix_identity_float4x4, matrix_identity_float4x4,
                     matrix_identity_float4x4, matrix_identity_float4x4]
        local[1].columns.3 = SIMD4(-0.04, 0, 0, 1)
        local[2].columns.3 = SIMD4(0.04, 0, 0, 1)
        local[3].columns.3 = SIMD4(-0.04, 0, -0.01, 1)
        local[4].columns.3 = SIMD4(0.04, 0, -0.01, 1)
        let nodes = (0..<5).map { SkeletonMotion.Node(name: "n\($0)", parent: $0 == 0 ? nil : 0, matrix: identity) }
        let eyes: [CharacterPackage.EyeBinding] = [
            .init(node: 1, pivot: 3, forward: [0.2, 0, sqrt(0.96)], eyeToPupil: 0.03, pivotToPupil: 0.04),
            .init(node: 2, pivot: 4, forward: [-0.2, 0, sqrt(0.96)], eyeToPupil: 0.03, pivotToPupil: 0.04)]
        let original = local
        for target in [SIMD3<Float>(0, 0, 2), SIMD3<Float>(0.3, 0.1, 2)] {
            local = original
            local[0] = simd_float4x4(simd_quatf(angle: 0.3, axis: SIMD3(0, 1, 0)))
            var world = EyeGazeSolver.world(local: local, nodes: nodes)
            EyeGazeSolver.apply(eyes: eyes, nodes: nodes, local: &local, world: &world, target: target)
            for eye in eyes {
                let origin = SIMD3(world[eye.node][3].x, world[eye.node][3].y, world[eye.node][3].z)
                let pivot = SIMD3(world[eye.pivot][3].x, world[eye.pivot][3].y, world[eye.pivot][3].z)
                let desired = simd_normalize(pivot + simd_normalize(target - pivot) * eye.pivotToPupil - origin)
                let actual = world[eye.node] * SIMD4(eye.forward[0], eye.forward[1], eye.forward[2], 0)
                XCTAssertGreaterThan(simd_dot(simd_normalize(SIMD3(actual.x, actual.y, actual.z)), desired), 0.99999)
            }
        }
    }

    private func package(gpu: Bool) throws -> CharacterPackage {
        var root = identity; root[3] = 0.1
        var bone = identity; bone[3] = 0.2
        var inverse = identity; inverse[3] = -0.3
        let rotations: [Float] = [1,0,0, 0,1,0, 0,0,1, 0,-1,0, 1,0,0, 0,0,1]
        let data = rotations.withUnsafeBufferPointer { Data(buffer: $0) }
        var skin: [String: Any] = ["vertices": [[-0.4,-0.4,0],[0.4,-0.4,0],[0,0.4,0]],
            "weights": Array(repeating: [1,0,0,0], count: 3), "indices": Array(repeating: [260,0,0,0], count: 3),
            "joints": Array(repeating: 1, count: 261), "bindMatrices": Array(repeating: inverse, count: 261),
            "morphs": [["name": "Face.jawOpen", "indices": [2], "deltas": [[0.15,0,0]], "normalDeltas": [[0,0,0]]]]]
        if gpu { skin["normals"] = Array(repeating: [0,0,1], count: 3) }
        let json: [String: Any] = ["characterPackageVersion": 3, "name": "GPU comparison", "textures": [:],
            "parts": [["mesh": ["name": "triangle", "vertices": [[-0.4,-0.4,0],[0.4,-0.4,0],[0,0.4,0]],
                                 "normals": Array(repeating: [0,0,1], count: 3), "trianglesBySubmesh": [[[0,1,2]]]],
                       "materials": [["name": "blue", "cull": 0, "surfaceType": 0, "colors": ["_BaseColor": ["r": 0,"g": 0,"b": 1,"a": 1]]]], "skin": skin]],
            "motion": ["fps": 30, "frameCount": 2, "nodes": [["name": "root", "matrix": root], ["name": "bone", "parent": 0, "matrix": bone]],
                       "tracks": [["node": 1, "rotations": data.base64EncodedString()]]]]
        return try JSONDecoder().decode(CharacterPackage.self, from: JSONSerialization.data(withJSONObject: json))
    }

    @MainActor private func pixels(_ scene: SCNScene, name: String) throws -> [UInt8] {
        let renderer = SCNRenderer(device: nil, options: nil)
        renderer.scene = scene; renderer.pointOfView = scene.rootNode.childNodes.first { $0.camera != nil }
        let image = renderer.snapshot(atTime: 0, with: CGSize(width: 128, height: 128), antialiasingMode: .none)
        let attachment = XCTAttachment(image: image); attachment.name = name; attachment.lifetime = .keepAlways; add(attachment)
        var result = [UInt8](repeating: 0, count: 128 * 128 * 4)
        let cg = try XCTUnwrap(image.cgImage)
        let context = try XCTUnwrap(CGContext(data: &result, width: 128, height: 128, bitsPerComponent: 8,
            bytesPerRow: 512, space: CGColorSpaceCreateDeviceRGB(), bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue))
        context.draw(cg, in: CGRect(x: 0, y: 0, width: 128, height: 128)); return result
    }

    @MainActor func testNativeGPUSkinningMatchesCPUAtFractionalPoseAndMorph() throws {
        let gpu = try package(gpu: true), cpu = try package(gpu: false)
        let gs = try gpu.scene(), cs = try cpu.scene()
        let gp = try SkeletonPlayer(package: gpu, scene: gs), cp = try SkeletonPlayer(package: cpu, scene: cs)
        XCTAssertTrue(gp.usesGPUSkinning)
        let node = try XCTUnwrap(gs.rootNode.childNode(withName: "triangle", recursively: true))
        XCTAssertEqual(node.skinner?.bones.count, 1)
        let geometry = node.geometry
        for sample in [0.0, 0.5, 1.0] {
            try gp.apply(sample: sample, blink: 0, mouth: 0.5, smile: 0)
            try cp.apply(sample: sample, blink: 0, mouth: 0.5, smile: 0)
            let g = try pixels(gs, name: "GPU skin pose \(sample)"), c = try pixels(cs, name: "CPU reference pose \(sample)")
            let mismatch = zip(g, c).filter { abs(Int($0.0) - Int($0.1)) > 4 }.count
            print("NATIVE_GPU_CPU_MISMATCH sample=\(sample) components=\(mismatch)")
            XCTAssertLessThan(mismatch, 80, "GPU skin, bind matrices, reflection and morph must agree with CPU reference")
            XCTAssertTrue(node.geometry === geometry)
        }
        for i in 0..<120 { try gp.apply(sample: Double(i % 60) / 60, blink: 0, mouth: 0, smile: 0) }
        XCTAssertTrue(node.geometry === geometry)
    }

    @MainActor func testNativeActionMovesGPUSkinnedMeshAndReturnsToIdle() throws {
        var p = try package(gpu: true)
        let values: [Float] = [0.65,0,0]
        let data = values.withUnsafeBufferPointer { Data(buffer: $0) }.base64EncodedString()
        p.actions = [.init(id: "move", name: "move", fps: 30, frameCount: 31, rotations: [],
                          positions: [.init(node: 1, values: data)], scales: [], morphs: [])]
        let scene = try p.scene(), player = try SkeletonPlayer(package: p, scene: scene)
        try player.apply(sample: 0, blink: 0, mouth: 0, smile: 0)
        let initial = try pixels(scene, name: "Action baseline")
        try player.apply(sample: 0, blink: 0, mouth: 0, smile: 0, action: .init(id: "move", token: 1, time: 0.5, enter: 1, exit: 0))
        let moved = try pixels(scene, name: "Action GPU pose")
        XCTAssertGreaterThan(zip(initial, moved).filter { $0.0 != $0.1 }.count, 200)
        try player.apply(sample: 0, blink: 0, mouth: 0, smile: 0, action: .init(id: "move", token: 1, time: 1, enter: 1, exit: 1))
        let restored = try pixels(scene, name: "Action restored idle")
        XCTAssertEqual(initial, restored)
    }

    @MainActor func testNativeProceduralIKMovesGPUWithoutChangingVertexBuffers() throws {
        var p = try package(gpu:true)
        let source = p.motion!
        var end = identity; end[3] = 0.2
        p.motion = .init(fps:30,frameCount:source.frameCount,nodes:[
            .init(name:"Shoulder_L",parent:nil,matrix:source.nodes[0].matrix),
            .init(name:"Elbow_L",parent:0,matrix:source.nodes[1].matrix),
            .init(name:"Wrist_L",parent:1,matrix:end)],tracks:source.tracks)
        let scene = try p.scene(), player = try SkeletonPlayer(package:p,scene:scene)
        let node = try XCTUnwrap(scene.rootNode.childNode(withName:"triangle",recursively:true))
        let geometry = node.geometry
        try player.apply(sample:0,blink:0,mouth:0,smile:0)
        let baseline = try pixels(scene,name:"Procedural GPU baseline")
        let pose = MotionPlan.Pose(time:1,leftHand:[-0.4,0.6,0.2])
        let settings = BodyDynamicsSettings(breathing:false,physics:false,strength:0)
        try player.apply(sample:0,blink:0,mouth:0,smile:0,embodiment:.init(elapsed:1,delta:1/60,settings:settings,
            procedural:.init(token:1,pose:pose,enter:1,exit:0)))
        let moved = try pixels(scene,name:"Procedural GPU IK pose")
        XCTAssertGreaterThan(zip(baseline,moved).filter { $0 != $1 }.count,100)
        XCTAssertTrue(node.geometry === geometry)
        try player.apply(sample:0,blink:0,mouth:0,smile:0,embodiment:.init(elapsed:2,delta:1/60,settings:settings,
            procedural:.init(token:1,pose:pose,enter:1,exit:1)))
        XCTAssertEqual(try pixels(scene,name:"Procedural GPU returned idle"),baseline)
    }

    @MainActor private func matcap(normalX: Double = 0.8, additive: Bool = false, greenMask: Bool = true,
                                   invert: Bool = false, strength: Float = 1, boneAngle: Float? = nil) throws -> [UInt8] {
        func texture(_ draw: (UIGraphicsImageRendererContext) -> Void) throws -> String {
            try XCTUnwrap(UIGraphicsImageRenderer(size: CGSize(width: 16, height: 16)).image(actions: draw).pngData()).base64EncodedString()
        }
        let white = try texture { c in UIColor.white.setFill(); c.fill(CGRect(x: 0, y: 0, width: 16, height: 16)) }
        let cap = try texture { c in
            if additive {
                UIColor(red: 0, green: 0, blue: 64.0 / 255, alpha: 1).setFill(); c.fill(CGRect(x: 0, y: 0, width: 16, height: 16))
            } else {
                UIColor.red.setFill(); c.fill(CGRect(x: 0, y: 0, width: 8, height: 16))
                UIColor.blue.setFill(); c.fill(CGRect(x: 8, y: 0, width: 8, height: 16))
            }
        }
        let mask = try texture { c in (greenMask ? UIColor.green : UIColor.red).setFill(); c.fill(CGRect(x: 0, y: 0, width: 16, height: 16)) }
        let property = additive ? "_AdditiveMatCap" : "_AlphaBlendMatCap"
        let inputs: [String: Any] = [property: ["texture": "cap", "scale": [1,1], "offset": [0,0], "sRGB": false],
                                     property + "Mask": ["texture": "mask", "scale": [1,1], "offset": [0,0], "sRGB": false]]
        let material: [String: Any] = ["name": "MatCap", "texture": "white", "surfaceType": 0, "cull": 0,
            "keywords": [additive ? "_ADDITIVE_MATCAP" : "_ALPHA_BLEND_MATCAP"], "textureInputs": inputs,
            "colors": ["_BaseColor": ["r": additive ? 0 : 1, "g": additive ? 0 : 1, "b": additive ? 0 : 1, "a": 1]],
            "floats": ["_AlphaBlendMatCapMaskInvert": invert ? 1 : 0, "_AlphaBlendMatCapStrength": strength,
                       "_AdditiveMatCapExtractBrightArea": 1, "_AdditiveMatCapMixWithBaseMapColor": 0, "_AdditiveMatCapIntensity": strength]]
        let vertices = [[-0.4,-0.4,0.0],[0.4,-0.4,0.0],[0.0,0.4,0.0]]
        let normals = Array(repeating: [normalX, 0, sqrt(1 - normalX * normalX)], count: 3)
        var part: [String: Any] = ["mesh": ["name": "MatCap mesh", "vertices": vertices, "normals": normals,
            "uv0": Array(repeating: [0.5,0.5], count: 3), "trianglesBySubmesh": [[[0,1,2]]]], "materials": [material]]
        var json: [String: Any] = ["characterPackageVersion": boneAngle == nil ? 2 : 3, "name": "MatCap fixture", "textures": ["white": white, "cap": cap, "mask": mask]]
        if let angle = boneAngle {
            part["skin"] = ["vertices": vertices, "normals": normals, "weights": Array(repeating: [1,0,0,0], count: 3),
                "indices": Array(repeating: [0,0,0,0], count: 3), "joints": [0], "bindMatrices": [identity], "morphs": []]
            let values: [Float] = [cos(angle),0,sin(angle), 0,1,0, -sin(angle),0,cos(angle)]
            let data = values.withUnsafeBufferPointer { Data(buffer: $0) }
            json["motion"] = ["fps": 30, "frameCount": 1, "nodes": [["name": "bone", "matrix": identity]],
                "tracks": [["node": 0, "rotations": data.base64EncodedString()]]]
        }
        json["parts"] = [part]
        let package = try JSONDecoder().decode(CharacterPackage.self, from: JSONSerialization.data(withJSONObject: json))
        let scene = try package.scene()
        scene.rootNode.childNodes.first { $0.camera != nil }?.camera?.usesOrthographicProjection = true
        scene.rootNode.childNodes.first { $0.camera != nil }?.camera?.orthographicScale = 0.7
        if boneAngle != nil { try SkeletonPlayer(package: package, scene: scene).apply(frame: 0, blink: 0, mouth: 0, smile: 0) }
        let image = try pixels(scene, name: "MatCap \(additive ? "add" : "blend") normal=\(normalX) angle=\(boneAngle ?? 0)")
        return Array(image[(64 * 128 + 64) * 4..<(64 * 128 + 64) * 4 + 3])
    }

    @MainActor func testNativeMatCapFollowsViewNormalAndGreenMask() throws {
        // normalX is in original Unity coordinates, before ResearchMesh reflects X.
        // Original MatCap U = 0.5 - 0.5 * UnityNormal.x for this front camera.
        let positive = try matcap(), negative = try matcap(normalX: -0.8)
        XCTAssertGreaterThan(positive[0], 240); XCTAssertLessThan(positive[2], 30)
        XCTAssertGreaterThan(negative[2], 240); XCTAssertLessThan(negative[0], 30)
        let unmasked = try matcap(greenMask: false)
        XCTAssertGreaterThan(unmasked[0], 240); XCTAssertGreaterThan(unmasked[2], 240)
        let inverted = try matcap(greenMask: false, invert: true)
        XCTAssertGreaterThan(inverted[0], 240); XCTAssertLessThan(inverted[2], 30)
    }

    @MainActor func testNativeMatCapBlendAndAdditivePowerMatchRecoveredFormula() throws {
        let blend = try matcap(strength: 0.5)
        XCTAssertEqual(Int(blend[2]), 188, accuracy: 4); XCTAssertGreaterThan(blend[0], 240)
        let add = try matcap(additive: true)
        let expected = (1.055 * pow(pow(64.0 / 255, 2), 1 / 2.4) - 0.055) * 255
        XCTAssertEqual(Double(add[2]), expected, accuracy: 4); XCTAssertLessThan(add[0], 10)
    }

    @MainActor func testNativeGPUSkinningUpdatesNormalsUsedByMatCap() throws {
        let positive = try matcap(normalX: 0, boneAngle: Float.pi / 6)
        let negative = try matcap(normalX: 0, boneAngle: -Float.pi / 6)
        XCTAssertGreaterThan(positive[0], 240); XCTAssertLessThan(positive[2], 30)
        XCTAssertGreaterThan(negative[2], 240); XCTAssertLessThan(negative[0], 30)
    }
}
