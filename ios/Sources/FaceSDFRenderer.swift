import SceneKit
import MetalKit
import UIKit
import simd

/// The main-light SDF visibility subgraph recovered from Android variant 41.
/// This does not replace the original renderer's complete lighting composition.
enum FaceSDFRenderer {
    static func texture(_ image: UIImage, sRGB: Bool) throws -> MTLTexture {
        guard let device = MTLCreateSystemDefaultDevice(), let cg = image.cgImage else {
            throw CompanionError.message("无法创建面部遮罩纹理。")
        }
        return try MTKTextureLoader(device: device).newTexture(cgImage: cg, options: [.SRGB: sRGB, .origin: MTKTextureLoader.Origin.topLeft])
    }

    static func configure(_ material: SCNMaterial, source: CharacterPackage.Part.Material,
                          images: [String: UIImage], light: [Float]?) throws -> (arguments: String, body: String) {
        guard let light = light, light.count == 3, light.allSatisfy(\.isFinite),
              abs(light.reduce(0) { $0 + $1 * $1 } - 1) < 0.001 else {
            throw CompanionError.message("面部阴影缺少原场景光源方向，请导入新版角色包。")
        }
        for (property, uniform) in [("_FaceMaskMap", "characterFaceMask"), ("_FaceShadowGradientMap", "characterFaceSDF"), ("_FaceShadowGradientMaskMap", "characterFaceSDFMask")] {
            guard let key = source.textureInputs?[property]?.texture, let image = images[key] else {
                throw CompanionError.message("面部阴影缺少 \(property) 贴图。")
            }
            material.setValue(SCNMaterialProperty(contents: try texture(image, sRGB: source.textureInputs?[property]?.sRGB ?? false)), forKey: uniform)
        }
        let f = source.floats ?? [:]
        let midpoint = f["_FaceShadowGradientMapFaceMidPoint"] ?? 0.5
        let offset = f["_FaceShadowGradientOffset"] ?? 0
        let softness = f["_FaceShadowGradientResultSoftness"] ?? 0.01
        let intensity = f["_FaceShadowGradientIntensity"] ?? 1
        let invert = f["_FaceMaskMapInvertColor"] ?? 0
        let tint = source.colors?["_FaceShadowTintColor"]
        let rgb: [Float] = [tint?.r ?? 1, tint?.g ?? 1, tint?.b ?? 1]
        guard ([midpoint, offset, softness, intensity, invert] + rgb).allSatisfy(\.isFinite),
              softness > 0, softness <= 1, (0...1).contains(midpoint), (0...1).contains(intensity),
              rgb.allSatisfy({ (0...16).contains($0) }) else {
            throw CompanionError.message("面部阴影参数无效。")
        }
        CharacterMaterialRenderer.setFaceForward(SCNVector3(0, 0, 1), on: material)
        setFaceUp(SCNVector3(0, 1, 0), on: material)
        setMainLight(SIMD3(light[0],light[1],light[2]), on: material)
        let arguments = """
        texture2d<float> characterFaceMask;
        texture2d<float> characterFaceSDF;
        texture2d<float> characterFaceSDFMask;
        float characterFaceUpX;
        float characterFaceUpY;
        float characterFaceUpZ;
        float characterMainLightX;
        float characterMainLightY;
        float characterMainLightZ;

        """
        let body = """
        constexpr sampler characterSDFSampler(coord::normalized, address::repeat, filter::linear);
        float3 characterForward = normalize(float3(characterFaceForwardX, characterFaceForwardY, characterFaceForwardZ));
        float3 characterUp = normalize(float3(characterFaceUpX, characterFaceUpY, characterFaceUpZ));
        // Reflecting X changes handedness: cross(up, forward) is the reflected Unity LEFT axis.
        float3 characterLeft = normalize(cross(characterUp, characterForward));
        float3 characterMainLight = normalize(float3(characterMainLightX, characterMainLightY, characterMainLightZ));
        float2 characterProjectedLight = float2(dot(characterLeft, characterMainLight), dot(characterForward, characterMainLight));
        characterProjectedLight *= rsqrt(max(dot(characterProjectedLight, characterProjectedLight), 0.0000610351562));
        float2 characterSDFUV = in.characterFaceUV;
        if (characterProjectedLight.x < 0.0) { characterSDFUV.x = 2.0 * \(midpoint) - characterSDFUV.x; }
        float characterFaceArea = characterFaceMask.sample(characterSDFSampler, _surface.diffuseTexcoord, level(0.0)).g;
        \(invert != 0 ? "characterFaceArea = 1.0 - characterFaceArea;" : "")
        float characterGradientMask = characterFaceSDFMask.sample(characterSDFSampler, in.characterFaceUV).g;
        float characterGradient = characterFaceSDF.sample(characterSDFSampler, characterSDFUV).g + \(offset);
        float characterThreshold = 0.5 - 0.5 * characterProjectedLight.y;
        float characterSDFVisibility = smoothstep(characterThreshold - \(softness), characterThreshold + \(softness), characterGradient);
        float characterFaceVisibility = 1.0 + characterFaceArea * characterGradientMask * \(intensity) * (characterSDFVisibility - 1.0);
        _surface.diffuse.rgb *= mix(float3(\(rgb.map { String($0) }.joined(separator: ","))), float3(1.0), characterFaceVisibility);

        """
        return (arguments, body)
    }

    static func setFaceUp(_ up: SCNVector3, on material: SCNMaterial) {
        material.setValue(NSNumber(value: up.x), forKey: "characterFaceUpX")
        material.setValue(NSNumber(value: up.y), forKey: "characterFaceUpY")
        material.setValue(NSNumber(value: up.z), forKey: "characterFaceUpZ")
    }
    static func setMainLight(_ light: SIMD3<Float>, on material: SCNMaterial) {
        material.setValue(NSNumber(value:light.x),forKey:"characterMainLightX")
        material.setValue(NSNumber(value:light.y),forKey:"characterMainLightY")
        material.setValue(NSNumber(value:light.z),forKey:"characterMainLightZ")
    }
}
