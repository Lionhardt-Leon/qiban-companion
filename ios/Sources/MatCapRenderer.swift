import SceneKit
import UIKit

/// Recovered view-dependent MatCap lobes (Android variants 46/56), composed on the current base pass.
enum MatCapRenderer {
    static func enabled(_ source: CharacterPackage.Part.Material) -> Bool {
        source.keywords?.contains("_ADDITIVE_MATCAP") == true || source.keywords?.contains("_ALPHA_BLEND_MATCAP") == true
    }

    static func configure(_ material: SCNMaterial, source: CharacterPackage.Part.Material,
                          images: [String: UIImage]) throws -> (arguments: String, body: String) {
        var arguments = ""
        let f = source.floats ?? [:]
        func number(_ key: String, _ fallback: Float) throws -> String {
            let value = f[key] ?? fallback
            guard value.isFinite, abs(value) <= 64 else { throw CompanionError.message("MatCap 参数无效。") }
            return String(value)
        }
        func tint(_ key: String) throws -> String {
            let c = source.colors?[key]
            let values: [Float] = [c?.r ?? 1, c?.g ?? 1, c?.b ?? 1]
            guard values.allSatisfy({ $0.isFinite && (0...16).contains($0) }) else { throw CompanionError.message("MatCap 颜色无效。") }
            return "float3(\(values.map { String($0) }.joined(separator: ",")))"
        }
        func bind(_ property: String, _ uniform: String) throws {
            guard let input = source.textureInputs?[property], let key = input.texture, let image = images[key] else {
                throw CompanionError.message("MatCap 缺少 \(property) 贴图。")
            }
            material.setValue(SCNMaterialProperty(contents: try FaceSDFRenderer.texture(image, sRGB: input.sRGB ?? false)), forKey: uniform)
            arguments += "texture2d<float> \(uniform);\n"
        }
        var code = """
        constexpr sampler characterMatCapSampler(coord::normalized, address::repeat, filter::linear);
        float3 characterMCNormal = normalize((scn_frame.inverseViewTransform * float4(_surface.normal, 0.0)).xyz);
        float3 characterMCView = normalize(scn_frame.inverseViewTransform[2].xyz);
        if (abs(scn_frame.projectionTransform[3].w) < 0.5) {
            characterMCView = normalize((scn_frame.inverseViewTransform * float4(normalize(-_surface.position), 0.0)).xyz);
        }
        float3 characterMCUp = normalize(scn_frame.inverseViewTransform[1].xyz);
        // Evaluate the original Unity basis before its asymmetric U sign, then flip PNG V.
        characterMCNormal.x = -characterMCNormal.x;
        characterMCView.x = -characterMCView.x;
        characterMCUp.x = -characterMCUp.x;
        float3 characterMCRight = normalize(cross(characterMCUp, characterMCView));
        float3 characterMCVertical = cross(characterMCView, characterMCRight);
        float2 characterMCUV = float2(0.5 - 0.5 * dot(characterMCRight, characterMCNormal),
                                     0.5 - 0.5 * dot(characterMCVertical, characterMCNormal));
        float3 characterMCBase = _surface.diffuse.rgb / max(characterSourceAlpha, 0.00001);

        """
        if source.keywords?.contains("_ALPHA_BLEND_MATCAP") == true {
            try bind("_AlphaBlendMatCap", "characterBlendMatCap")
            try bind("_AlphaBlendMatCapMask", "characterBlendMatCapMask")
            code += """
            float characterMCBlendMask = characterBlendMatCapMask.sample(characterMatCapSampler, _surface.diffuseTexcoord).g;
            \((f["_AlphaBlendMatCapMaskInvert"] ?? 0) != 0 ? "characterMCBlendMask = 1.0 - characterMCBlendMask;" : "")
            float3 characterMCBlend = characterBlendMatCap.sample(characterMatCapSampler, characterMCUV).rgb * \(try tint("_AlphaBlendMatCapTint"));
            characterMCBase = mix(characterMCBase, characterMCBlend, characterMCBlendMask * \(try number("_AlphaBlendMatCapStrength", 1)));

            """
        }
        if source.keywords?.contains("_ADDITIVE_MATCAP") == true {
            try bind("_AdditiveMatCap", "characterAddMatCap")
            try bind("_AdditiveMatCapMask", "characterAddMatCapMask")
            let start = f["_AdditiveMatCapMaskRemapStart"] ?? 0, end = f["_AdditiveMatCapMaskRemapEnd"] ?? 1
            guard start.isFinite, end.isFinite, end > start, (end - start).isFinite else { throw CompanionError.message("MatCap 遮罩范围无效。") }
            code += """
            float characterMCAddMask = characterAddMatCapMask.sample(characterMatCapSampler, _surface.diffuseTexcoord).g;
            characterMCAddMask = clamp((characterMCAddMask - \(start)) / \(end - start), 0.0, 1.0);
            float3 characterMCAdd = pow(abs(characterAddMatCap.sample(characterMatCapSampler, characterMCUV).rgb), float3(abs(1.0 + \(try number("_AdditiveMatCapExtractBrightArea", 0))))) * \(try tint("_AdditiveMatCapTint"));
            characterMCAdd *= mix(float3(1.0), characterMCBase, \(try number("_AdditiveMatCapMixWithBaseMapColor", 0.5)));
            characterMCAdd *= characterMCAddMask * \(try number("_AdditiveMatCapIntensity", 1));
            characterMCBase += characterMCAdd;
            _surface.diffuse.a = clamp(_surface.diffuse.a + dot(characterMCAdd, float3(0.212672904, 0.715152204, 0.072175004)), 0.0, 1.0);

            """
        }
        code += "_surface.diffuse.rgb = characterMCBase * characterSourceAlpha;\n"
        return (arguments, code)
    }
}
