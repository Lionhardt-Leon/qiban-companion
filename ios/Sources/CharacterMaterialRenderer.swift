import SceneKit
import UIKit

enum CharacterMaterialRenderer {
    static func setFaceForward(_ forward: SCNVector3, on material: SCNMaterial) {
        material.setValue(NSNumber(value: forward.x), forKey: "characterFaceForwardX")
        material.setValue(NSNumber(value: forward.y), forKey: "characterFaceForwardY")
        material.setValue(NSNumber(value: forward.z), forKey: "characterFaceForwardZ")
    }
    static func make(_ source: CharacterPackage.Part.Material, images: [String: UIImage], mainLightDirection: [Float]? = nil) throws -> SCNMaterial {
        let material = SCNMaterial()
        material.name = source.name
        material.isDoubleSided = source.cull == nil || source.cull == 0
        material.cullMode = source.cull == 1 ? .front : .back
        material.writesToDepthBuffer = source.depthWrite ?? true
        material.lightingModel = .constant
        if let key = source.texture {
            guard let image = images[key] else { throw CompanionError.message("缺少材质引用的贴图。") }
            material.diffuse.contents = image
        } else { material.diffuse.contents = UIColor.lightGray }
        let scale = source.scale ?? [1, 1], offset = source.offset ?? [0, 0]
        guard scale.count == 2, offset.count == 2, (scale + offset).allSatisfy(\.isFinite) else {
            throw CompanionError.message("贴图缩放或偏移无效。")
        }
        var transform = SCNMatrix4Identity
        transform.m11 = scale[0]; transform.m22 = -scale[1]
        transform.m41 = offset[0]; transform.m42 = 1 - offset[1]
        material.diffuse.contentsTransform = transform
        material.diffuse.wrapS = .repeat; material.diffuse.wrapT = .repeat
        material.diffuse.minificationFilter = .linear
        material.diffuse.magnificationFilter = .linear
        material.diffuse.mipFilter = .linear
        material.diffuse.maxAnisotropy = 8

        let surface: Int?
        if let value = source.surfaceType { surface = value }
        else if let value = source.floats?["_SurfaceType"] {
            guard value.isFinite, [Float(0), 1, 2].contains(value) else { throw CompanionError.message("材质表面类型无效。") }
            surface = Int(value)
        } else { surface = nil }
        if let surface = surface, !(0...2).contains(surface) { throw CompanionError.message("材质表面类型无效。") }
        let src = source.floats?["_SrcBlend"], dst = source.floats?["_DstBlend"]
        if src == 1 && dst == 1 { material.blendMode = .add }
        else if surface == 0 || surface == 1 || (src == 1 && dst == 0) { material.blendMode = .replace }
        else { material.blendMode = .alpha }
        material.transparencyMode = .aOne

        let tint = source.colors?["_BaseColor"]
        let rgba: [Float] = [tint?.r ?? 1, tint?.g ?? 1, tint?.b ?? 1, tint?.a ?? 1]
        guard rgba.allSatisfy({ $0.isFinite && $0 >= 0 && $0 <= 16 }), rgba[3] <= 1 else {
            throw CompanionError.message("材质颜色无效。")
        }
        var arguments = ""
        var code = "float characterSourceAlpha = _surface.diffuse.a;\n_surface.diffuse *= float4(\(rgba.map { String($0) }.joined(separator: ",")));\n"
        if source.keywords?.contains("_FACE") == true { code = "// characterFaceMaterial\n" + code }
        let clip = source.alphaClip ?? (source.keywords?.contains("_ALPHATEST_ON") ?? false)
        let override = source.alphaOverride ?? ((source.floats?["_UseAlphaOverride"] ?? 0) > 0)
        if override {
            let strength = source.floats?["_AlphaOverrideStrength"] ?? 1
            let directional = source.floats?["_ApplyAlphaOverrideOnlyWhenFaceForwardIsPointingToCamera"] ?? 0
            let start = source.floats?["_ApplyAlphaOverrideOnlyWhenFaceForwardIsPointingToCameraRemapStart"] ?? 0
            let end = source.floats?["_ApplyAlphaOverrideOnlyWhenFaceForwardIsPointingToCameraRemapEnd"] ?? 1
            guard [strength, directional, start, end].allSatisfy(\.isFinite),
                  (0...1).contains(strength), (0...1).contains(directional), end > start, (end - start).isFinite,
                  let key = source.textureInputs?["_AlphaOverrideMap"]?.texture, let image = images[key] else {
                throw CompanionError.message("透明覆盖参数或遮罩贴图无效，请导入完整材质角色包。")
            }
            let mask = SCNMaterialProperty(contents: image)
            mask.minificationFilter = .linear; mask.magnificationFilter = .linear
            material.setValue(mask, forKey: "characterAlphaMap")
            setFaceForward(SCNVector3(0, 0, 1), on: material)
            arguments = "#pragma arguments\ntexture2d<float> characterAlphaMap;\nfloat characterFaceForwardX;\nfloat characterFaceForwardY;\nfloat characterFaceForwardZ;\n"
            code += "float characterOverrideWeight = \(strength);\n"
            if directional > 0 {
                code += """
                float characterDot = dot(normalize(float3(characterFaceForwardX, characterFaceForwardY, characterFaceForwardZ)), normalize(scn_frame.inverseViewTransform[2].xyz));
                float characterQ = clamp((characterDot - \(start)) / \(end - start), 0.0, 1.0);
                characterQ *= characterQ;
                characterOverrideWeight *= 1.0 + \(directional) * (characterQ * characterQ - 1.0);

                """
            }
            code += """
            constexpr sampler characterMaskSampler(coord::normalized, address::repeat, filter::linear);
            float characterMaskGreen = characterAlphaMap.sample(characterMaskSampler, _surface.diffuseTexcoord).g;
            _surface.diffuse.a = mix(_surface.diffuse.a, characterMaskGreen, characterOverrideWeight);

            """
        }
        if clip {
            let threshold = source.cutoff ?? source.floats?["_Cutoff"] ?? 0.5
            guard threshold.isFinite, (0...1).contains(threshold) else { throw CompanionError.message("材质裁剪阈值无效。") }
            code += "if (_surface.diffuse.a < \(threshold)) { discard_fragment(); }\n"
        }
        let matcap = MatCapRenderer.enabled(source)
        if matcap {
            let effect = try MatCapRenderer.configure(material, source: source, images: images)
            if arguments.isEmpty { arguments = "#pragma arguments\n" }
            arguments += effect.arguments
            code += effect.body
        }
        // UIImage's sampled RGB is premultiplied. Replace blending needs straight RGB;
        // alpha blending keeps premultiplied RGB and also applies the tint's opacity.
        if material.blendMode == .replace || material.blendMode == .add {
            code += "_surface.diffuse.rgb /= max(characterSourceAlpha, 0.00001);\n"
        } else if override || matcap {
            code += "_surface.diffuse.rgb *= _surface.diffuse.a / max(characterSourceAlpha, 0.00001);\n"
        } else {
            code += "_surface.diffuse.rgb *= \(rgba[3]);\n"
        }
        if surface == 0 || surface == 1 { code += "_surface.diffuse.a = 1.0;\n" }
        var geometryModifier: String?
        if source.keywords?.contains("_FACE_SHADOW_GRADIENTMAP") == true {
            let face = try FaceSDFRenderer.configure(material, source: source, images: images, light: mainLightDirection)
            if arguments.isEmpty {
                arguments = "#pragma arguments\nfloat characterFaceForwardX;\nfloat characterFaceForwardY;\nfloat characterFaceForwardZ;\n"
            }
            arguments += face.arguments
            code += face.body
            arguments += "#pragma varyings\nfloat2 characterFaceUV;\n"
            geometryModifier = "#pragma varyings\nfloat2 characterFaceUV;\n#pragma body\nout.characterFaceUV = float2(_geometry.texcoords[1].x, 1.0 - _geometry.texcoords[1].y);\n"
        }
        code = arguments + (material.blendMode == .alpha ? "#pragma transparent\n" : "") + "#pragma body\n" + code
        material.shaderModifiers = [.surface: code]
        if let geometryModifier = geometryModifier { material.shaderModifiers?[.geometry] = geometryModifier }
        return material
    }
}
