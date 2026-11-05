import XCTest
import UIKit
import SceneKit
@testable import QibanCompanion

final class NativeRenderingTests: XCTestCase {
    @MainActor func testNativeToonLightingRespondsToDirectionFillAndWarmth() throws {
        let scene = SCNScene(), box = SCNNode(geometry:SCNBox(width:1,height:1,length:0.2,chamferRadius:0))
        let material = SCNMaterial(); material.lightingModel = .constant; material.diffuse.contents = UIColor(white:0.5,alpha:1)
        box.geometry?.materials = [material]; scene.rootNode.addChildNode(box)
        let camera = SCNNode(); camera.camera = SCNCamera(); camera.position.z = 3; scene.rootNode.addChildNode(camera)
        StageLighting.install(scene,settings:.init(azimuth:0,elevation:0,key:1,fill:0.3,warmth:0,softness:0.1,rim:0))
        let front = try pixel(scene:scene)
        StageLighting.update(scene,settings:.init(azimuth:180,elevation:0,key:1,fill:0.3,warmth:0,softness:0.1,rim:0))
        let dark = try pixel(scene:scene)
        StageLighting.update(scene,settings:.init(azimuth:180,elevation:0,key:1,fill:1,warmth:0,softness:0.1,rim:0))
        let fill = try pixel(scene:scene)
        StageLighting.update(scene,settings:.init(azimuth:0,elevation:0,key:1,fill:0.3,warmth:1,softness:0.1,rim:0))
        let warm = try pixel(scene:scene)
        XCTAssertGreaterThan(Int(front[0]),Int(dark[0])+5)
        XCTAssertLessThan(Int(front[0])-Int(dark[0]),30,"Body shade should remain soft rather than carving the silhouette")
        XCTAssertGreaterThan(Int(fill[0]),Int(dark[0])+3)
        XCTAssertGreaterThan(Int(warm[0]),Int(warm[2])+8)
        let shader = material.shaderModifiers?[.surface]
        StageLighting.install(scene,settings:.init())
        XCTAssertEqual(material.shaderModifiers?[.surface],shader)
    }

    @MainActor func testFaceMaterialDoesNotGetSecondGeometricNoseAndChinShadows() throws {
        let json = Data(#"{"characterPackageVersion":2,"name":"face material","textures":{},"parts":[{"mesh":{"name":"face","vertices":[[0,0,0],[1,0,0],[0,1,0]],"trianglesBySubmesh":[[[0,1,2]]]},"materials":[{"name":"face","keywords":["_FACE"],"surfaceType":0}]}]}"#.utf8)
        let package = try JSONDecoder().decode(CharacterPackage.self,from:json)
        let scene = try package.scene()
        let face = try XCTUnwrap(scene.rootNode.childNode(withName:"face",recursively:true))
        let material = try XCTUnwrap(face.geometry?.materials.first)
        face.geometry = SCNSphere(radius:0.4); face.geometry?.materials = [material]
        face.parent?.position = SCNVector3Zero
        face.position = SCNVector3Zero
        StageLighting.install(scene,settings:.init(azimuth:0,elevation:0,key:1,fill:0.7,warmth:0,softness:0.1,rim:0.5))
        let front = try pixel(scene:scene)
        StageLighting.update(scene,settings:.init(azimuth:180,elevation:0,key:1,fill:0.7,warmth:0,softness:0.1,rim:0.5))
        let back = try pixel(scene:scene)
        XCTAssertEqual(front,back,"Face style must ignore the extra geometric N dot L pass")
        XCTAssertGreaterThan(front[0],150,"Face must not be darkened by the second shadow pass")
        XCTAssertTrue(material.shaderModifiers?[.surface]?.contains("companionFaceExposure") == true)
    }
    @MainActor private func sample(v: Double = 0.75, scale: Double = 1, offset: Double = 0, shellCull: Int = 2,
                                   alpha: CGFloat = 1, fields: [String: Any] = [:], faceForward: SCNVector3? = nil) throws -> [UInt8] {
        // Synthetic texture only: top half blue iris, bottom half red diagnostic marker.
        let texture = UIGraphicsImageRenderer(size: CGSize(width: 32, height: 32)).image { context in
            UIColor.blue.withAlphaComponent(alpha).setFill(); context.fill(CGRect(x: 0, y: 0, width: 32, height: 16))
            UIColor.red.withAlphaComponent(alpha).setFill(); context.fill(CGRect(x: 0, y: 16, width: 32, height: 16))
        }
        let png = try XCTUnwrap(texture.pngData())
        let mask = UIGraphicsImageRenderer(size: CGSize(width: 32, height: 32)).image { context in
            UIColor.green.setFill(); context.fill(CGRect(x: 0, y: 0, width: 32, height: 16))
            UIColor.red.setFill(); context.fill(CGRect(x: 0, y: 16, width: 32, height: 16))
        }
        var iris: [String: Any] = ["name": "iris", "texture": "atlas", "cull": 2,
                                  "scale": [1, scale], "offset": [0, offset]]
        iris.merge(fields) { _, value in value }
        let json: [String: Any] = [
            "characterPackageVersion": 2, "name": "synthetic iris",
            "textures": ["atlas": png.base64EncodedString(), "mask": try XCTUnwrap(mask.pngData()).base64EncodedString()],
            "parts": [["mesh": ["name": "eye", "vertices": [[-1,-1,0], [1,-1,0], [0,1,0], [-1,-1,0.1], [1,-1,0.1], [0,1,0.1]],
                                   "uv0": Array(repeating: [0.5,v], count: 6),
                                   "trianglesBySubmesh": [[[0,1,2]], [[3,5,4]]]],
                       "materials": [iris, ["name": "back shell", "cull": shellCull]]]]
        ]
        let package = try JSONDecoder().decode(CharacterPackage.self, from: JSONSerialization.data(withJSONObject: json))
        let scene = try package.scene()
        if let forward = faceForward {
            let iris = try XCTUnwrap(scene.rootNode.childNode(withName: "eye", recursively: true)?.geometry?.materials.first)
            CharacterMaterialRenderer.setFaceForward(forward, on: iris)
        }
        return try pixel(scene: scene)
    }

    @MainActor private func pixel(scene: SCNScene) throws -> [UInt8] {
        let renderer = SCNRenderer(device: nil, options: nil)
        renderer.scene = scene
        renderer.pointOfView = scene.rootNode.childNodes.first { $0.camera != nil }
        let snapshot = renderer.snapshot(atTime: 0, with: CGSize(width: 128, height: 128), antialiasingMode: .none)
        let attachment = XCTAttachment(image: snapshot)
        attachment.name = "Native synthetic iris texture and culling"
        attachment.lifetime = .keepAlways
        add(attachment)
        let cg = try XCTUnwrap(snapshot.cgImage)
        var pixels = [UInt8](repeating: 0, count: 128 * 128 * 4)
        let colorSpace = CGColorSpaceCreateDeviceRGB()
        let context = try XCTUnwrap(CGContext(data: &pixels, width: 128, height: 128, bitsPerComponent: 8,
                                              bytesPerRow: 128 * 4, space: colorSpace,
                                              bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue))
        context.draw(cg, in: CGRect(x: 0, y: 0, width: 128, height: 128))
        let i = (64 * 128 + 64) * 4
        print("NATIVE_IRIS_RGB=\(pixels[i]),\(pixels[i+1]),\(pixels[i+2])")
        return Array(pixels[i..<i+3])
    }

    @MainActor func testNativeIrisTextureOrientationAndBackShellCulling() throws {
        let rgb = try sample()
        XCTAssertGreaterThan(rgb[2], 200)
        XCTAssertLessThan(rgb[0], 50)
    }

    @MainActor func testNativeTextureLowerHalfAndOriginalScaleOffset() throws {
        let bottom = try sample(v: 0.25)
        XCTAssertGreaterThan(bottom[0], 200)
        XCTAssertLessThan(bottom[2], 50)
        let transformed = try sample(v: 0.75, scale: 0.5, offset: 0.25)
        XCTAssertGreaterThan(transformed[2], 200)
        XCTAssertLessThan(transformed[0], 50)
    }

    @MainActor func testNativeDoubleSidedShellActuallyOccludesIris() throws {
        let rgb = try sample(shellCull: 0)
        XCTAssertGreaterThan(rgb[0], 80)
        XCTAssertEqual(Int(rgb[0]), Int(rgb[1]), accuracy: 2)
        XCTAssertEqual(Int(rgb[1]), Int(rgb[2]), accuracy: 2)
    }

    @MainActor func testNativeOpaqueBlendAndCutoutAreDistinct() throws {
        let opaque = try sample(alpha: 0.25, fields: ["surfaceType": 0])
        XCTAssertGreaterThan(opaque[2], 240)
        let blended = try sample(alpha: 0.25, fields: ["surfaceType": 2])
        XCTAssertLessThan(blended[2], 230)
        XCTAssertGreaterThan(blended[2], 50)
        let clipped = try sample(alpha: 0.25, fields: ["surfaceType": 0, "alphaClip": true, "cutoff": 0.5])
        XCTAssertLessThan(clipped[2], 80)
        XCTAssertEqual(Int(clipped[0]), Int(clipped[2]), accuracy: 3)
        let kept = try sample(alpha: 0.8, fields: ["surfaceType": 0, "alphaClip": true, "cutoff": 0.5])
        XCTAssertGreaterThan(kept[2], 240)
    }

    @MainActor func testNativeBaseColorActuallyTintsTexture() throws {
        let tinted = try sample(fields: ["surfaceType": 0, "colors": ["_BaseColor": ["r": 1, "g": 1, "b": 0, "a": 1]]])
        XCTAssertLessThan(tinted[2], 20)
        XCTAssertLessThan(tinted[0], 20)
    }

    private func overrideFields(strength: Float = 1, direction: Float = 0, clip: Bool = false) -> [String: Any] {
        ["surfaceType": 2, "alphaOverride": true, "alphaClip": clip, "cutoff": 0.5,
         "floats": ["_AlphaOverrideStrength": strength,
                    "_ApplyAlphaOverrideOnlyWhenFaceForwardIsPointingToCamera": direction],
         "textureInputs": ["_AlphaOverrideMap": ["texture": "mask", "scale": [1, 1], "offset": [0, 0]]]]
    }

    @MainActor func testNativeOverrideSamplesGreenChannelWithCorrectV() throws {
        let green = try sample(v: 0.75, fields: overrideFields())
        XCTAssertGreaterThan(green[2], 240)
        let red = try sample(v: 0.25, fields: overrideFields())
        XCTAssertLessThan(red[0], 60)
        XCTAssertEqual(Int(red[0]), Int(red[2]), accuracy: 3)
    }

    @MainActor func testNativeOverrideChangesPremultipliedColorAndClipsAfterOverride() throws {
        let original = try sample(v: 0.25, fields: overrideFields(strength: 0))
        let faded = try sample(v: 0.25, fields: overrideFields(strength: 0.5))
        let discarded = try sample(v: 0.25, fields: overrideFields(strength: 1, clip: true))
        XCTAssertGreaterThan(Int(original[0]), Int(faded[0]) + 15)
        XCTAssertGreaterThan(Int(faded[0]), Int(discarded[0]) + 15)
        XCTAssertEqual(Int(discarded[0]), Int(discarded[2]), accuracy: 3)
    }

    @MainActor func testNativeOverrideCameraAxisUsesFourthPowerRemap() throws {
        let fields = overrideFields(direction: 1)
        let front = try sample(v: 0.25, fields: fields, faceForward: SCNVector3(0, 0, 1))
        let side = try sample(v: 0.25, fields: fields, faceForward: SCNVector3(1, 0, 0))
        let middle = try sample(v: 0.25, fields: fields, faceForward: SCNVector3(sqrt(0.75), 0, 0.5))
        // With directionAmount=1, the recovered weight is q^4 (not 1-q^4).
        // A black mask therefore makes the front-facing layer most transparent.
        let reference = try sample(v: 0.25, fields: overrideFields(strength: 0.0625))
        XCTAssertGreaterThan(Int(side[0]), Int(middle[0]) + 3)
        XCTAssertGreaterThan(Int(middle[0]), Int(front[0]) + 15)
        for (actual, expected) in zip(middle, reference) { XCTAssertEqual(Int(actual), Int(expected), accuracy: 3) }
    }

    @MainActor private func faceSDF(u: Double = 0.25, light: [Float] = [1, 0, 0],
                                    faceMask: Bool = true, invert: Bool = false, intensity: Float = 1,
                                    constantGradient: Bool = false, gradientMaskByte: UInt8? = nil,
                                    gradientMaskSRGB: Bool = false) throws -> [UInt8] {
        func texture(_ draw: (UIGraphicsImageRendererContext) -> Void) throws -> String {
            try XCTUnwrap(UIGraphicsImageRenderer(size: CGSize(width: 16, height: 16)).image(actions: draw).pngData()).base64EncodedString()
        }
        let white = try texture { context in UIColor.white.setFill(); context.fill(CGRect(x: 0, y: 0, width: 16, height: 16)) }
        let mask = try texture { context in (faceMask ? UIColor.green : UIColor.red).setFill(); context.fill(CGRect(x: 0, y: 0, width: 16, height: 16)) }
        let gradient = try texture { context in
            if constantGradient {
                UIColor(red: 1, green: 128.0 / 255, blue: 0, alpha: 1).setFill()
                context.fill(CGRect(x: 0, y: 0, width: 16, height: 16))
            } else {
                UIColor.red.setFill(); context.fill(CGRect(x: 0, y: 0, width: 8, height: 16))
                UIColor.green.setFill(); context.fill(CGRect(x: 8, y: 0, width: 8, height: 16))
            }
        }
        let gradientMask = try texture { context in
            UIColor(red: 0, green: CGFloat(gradientMaskByte ?? 255) / 255, blue: 0, alpha: 1).setFill()
            context.fill(CGRect(x: 0, y: 0, width: 16, height: 16))
        }
        var inputs = Dictionary(uniqueKeysWithValues: [("_FaceMaskMap", "mask"), ("_FaceShadowGradientMap", "gradient"), ("_FaceShadowGradientMaskMap", "gradientMask")].map {
            ($0.0, ["texture": $0.1, "scale": [1, 1], "offset": [0, 0]] as [String: Any])
        })
        inputs["_FaceShadowGradientMaskMap"]?["sRGB"] = gradientMaskSRGB
        let material: [String: Any] = ["name": "face SDF", "texture": "white", "surfaceType": 0, "cull": 0,
            "keywords": ["_FACE_SHADOW_GRADIENTMAP"], "textureInputs": inputs,
            "floats": ["_FaceMaskMapInvertColor": invert ? 1 : 0, "_FaceShadowGradientIntensity": intensity,
                       "_FaceShadowGradientResultSoftness": constantGradient ? 0.25 : 0.01],
            "colors": ["_FaceShadowTintColor": ["r": 0, "g": 0, "b": 0, "a": 1]]]
        let json: [String: Any] = ["characterPackageVersion": 2, "name": "synthetic face SDF",
            "textures": ["white": white, "mask": mask, "gradient": gradient, "gradientMask": gradientMask],
            "mainLightDirection": light, "faceDirection": ["node": 0, "axis": [0, 0, 1], "upAxis": [0, 1, 0]],
            "parts": [["mesh": ["name": "face", "vertices": [[-1,-1,0], [1,-1,0], [0,1,0]],
                                  "uv0": Array(repeating: [0.75, 0.75], count: 3),
                                  "uv1": Array(repeating: [u, 0.75], count: 3), "trianglesBySubmesh": [[[0,1,2]]]],
                       "materials": [material]]]]
        let package = try JSONDecoder().decode(CharacterPackage.self, from: JSONSerialization.data(withJSONObject: json))
        return try pixel(scene: package.scene())
    }

    @MainActor func testNativeFaceSDFUsesSecondUVAndMirrorsByLightSide() throws {
        let shadow = try faceSDF()
        let bright = try faceSDF(u: 0.75)
        let mirrored = try faceSDF(light: [-1, 0, 0])
        XCTAssertLessThan(shadow[0], 10)
        XCTAssertGreaterThan(bright[0], 240)
        XCTAssertGreaterThan(mirrored[0], 240)
    }

    @MainActor func testNativeFaceMaskGreenInversionAndIntensityGateSDF() throws {
        for value in [try faceSDF(faceMask: false), try faceSDF(invert: true), try faceSDF(intensity: 0)] {
            XCTAssertGreaterThan(value[0], 240)
        }
    }

    @MainActor func testNativeFaceSDFSamplesLinearGreenAndProjectsLight() throws {
        let middle = try faceSDF(constantGradient: true)
        // Independent smoothstep + sRGB encoding oracle for an exact byte-128 green mask.
        let t = (128.0 / 255 - 0.25) / 0.5
        let visibility = t * t * (3 - 2 * t)
        let encoded = (1.055 * pow(visibility, 1 / 2.4) - 0.055) * 255
        XCTAssertEqual(Double(middle[0]), encoded, accuracy: 4)
        let front = try faceSDF(light: [0, 0, 1], constantGradient: true)
        let back = try faceSDF(light: [0, 0, -1], constantGradient: true)
        XCTAssertGreaterThan(front[0], 240)
        XCTAssertLessThan(back[0], 10)
    }

    @MainActor func testNativeFaceGradientMaskHonorsSourceSRGBFlag() throws {
        let linear = try faceSDF(gradientMaskByte: 128)
        let gamma = try faceSDF(gradientMaskByte: 128, gradientMaskSRGB: true)
        let encodedGreen = 128.0 / 255
        let decodedGreen = pow((encodedGreen + 0.055) / 1.055, 2.4)
        for (actual, mask) in [(linear[0], encodedGreen), (gamma[0], decodedGreen)] {
            let expected = (1.055 * pow(1 - mask, 1 / 2.4) - 0.055) * 255
            XCTAssertEqual(Double(actual), expected, accuracy: 4)
        }
        XCTAssertGreaterThan(Int(gamma[0]), Int(linear[0]) + 25)
    }
}
