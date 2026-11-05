import SceneKit
import simd

struct StageLightingSettings: Equatable {
    var azimuth: Float = 34
    var elevation: Float = 38
    var key: Float = 1
    var fill: Float = 0.7
    var warmth: Float = 0.12
    var softness: Float = 0.18
    var rim: Float = 0.12
    var direction: SIMD3<Float> {
        let a = azimuth * .pi/180, e = elevation * .pi/180
        return SIMD3(sin(a)*cos(e),sin(e),cos(a)*cos(e))
    }
}

enum StageLighting {
    static func materials(_ scene: SCNScene) -> [SCNMaterial] {
        var result: [SCNMaterial] = []
        var seen = Set<ObjectIdentifier>()
        scene.rootNode.enumerateChildNodes { node, _ in
            for m in node.geometry?.materials ?? [] where seen.insert(ObjectIdentifier(m)).inserted { result.append(m) }
        }
        return result
    }
    static func install(_ scene: SCNScene, settings: StageLightingSettings) {
        for m in materials(scene) {
            var code = m.shaderModifiers?[.surface] ?? "#pragma body\n"
            let face = code.contains("// characterFaceMaterial") || code.contains("characterFaceSDF;")
            if !code.contains("float companionLightingKey;") {
                let uniforms = """
                float companionLightingKey;
                float companionLightingFill;
                float companionLightingWarmth;
                float companionLightingSoftness;
                float companionLightingRim;
                float companionLightingX;
                float companionLightingY;
                float companionLightingZ;

                """
                if code.contains("#pragma arguments\n") {
                    code = code.replacingOccurrences(of: "#pragma arguments\n", with: "#pragma arguments\n" + uniforms)
                } else { code = "#pragma arguments\n" + uniforms + code }
                code += """

                float3 companionLight = normalize((scn_frame.viewTransform * float4(companionLightingX, companionLightingY, companionLightingZ, 0.0)).xyz);
                float3 companionNormal = normalize(_surface.normal);
                float companionDiffuse = dot(companionNormal, companionLight);
                float companionBand = smoothstep(0.08 - companionLightingSoftness, 0.08 + companionLightingSoftness, companionDiffuse);
                float3 companionTint = float3(1.0 + 0.12 * companionLightingWarmth, 1.0, 1.0 - 0.18 * companionLightingWarmth);
                float3 companionView = float3(0.0, 0.0, 1.0);
                if (abs(scn_frame.projectionTransform[3].w) < 0.5) { companionView = normalize(-_surface.position); }
                float companionEdge = pow(1.0 - clamp(abs(dot(companionNormal, companionView)), 0.0, 1.0), 3.0);
                \(face ? """
                // Face/eyes already use the original face shading. Never light their nose,
                // cheeks and chin a second time from the low-poly geometric normals.
                float companionFaceExposure = clamp(1.0 + 0.06 * (companionLightingKey - 1.0) + 0.05 * (companionLightingFill - 0.7), 0.92, 1.08);
                float3 companionFaceTint = float3(1.0 + 0.03 * companionLightingWarmth, 1.0, 1.0 - 0.04 * companionLightingWarmth);
                _surface.diffuse.rgb *= companionFaceTint * companionFaceExposure;
                """ : """
                float companionSoftShade = 1.0 - 0.22 * companionLightingKey * (1.0 - companionBand);
                float companionSoftFill = clamp(0.85 + 0.15 * companionLightingFill, 0.85, 1.05);
                _surface.diffuse.rgb *= companionTint * companionSoftFill * companionSoftShade;
                _surface.diffuse.rgb += _surface.diffuse.rgb * companionEdge * min(companionLightingRim, 0.2);
                """)

                """
                m.shaderModifiers?[.surface] = code
                if m.shaderModifiers == nil { m.shaderModifiers = [.surface: code] }
            }
        }
        update(scene,settings: settings)
    }
    static func update(_ scene: SCNScene, settings: StageLightingSettings) {
        let d = settings.direction
        for m in materials(scene) {
            for (name, v) in [("Key",settings.key),("Fill",settings.fill),("Warmth",settings.warmth),
                              ("Softness",settings.softness),("Rim",settings.rim),("X",d.x),("Y",d.y),("Z",d.z)] {
                m.setValue(NSNumber(value:v),forKey:"companionLighting"+name)
            }
            if m.shaderModifiers?[.surface]?.contains("float characterMainLightX;") == true {
                FaceSDFRenderer.setMainLight(d,on: m)
            }
        }
    }
}
