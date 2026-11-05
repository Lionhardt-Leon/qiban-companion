import SceneKit
import UIKit
import simd

struct CharacterTouch {
    let region: String
    let label: String
    let kind: String
    var message: String { "[触碰互动] 用户\(kind)了你的\(label)。请根据你的人设、当前关系和上下文自然回应这次触碰，并选择合适的动作。" }
}

struct TouchRegion {
    let id: String
    let label: String
    let a: SIMD3<Float>
    let b: SIMD3<Float>
    let radius: Float
}

enum CharacterTouchResolver {
    static func regions(rig: HumanoidRig, world: [simd_float4x4]) -> [TouchRegion] {
        var result: [TouchRegion] = []
        func point(_ name: String) -> SIMD3<Float>? { rig.named[name].map { HumanoidRig.position(world[$0]) } }
        func sphere(_ id: String, _ label: String, _ center: SIMD3<Float>, _ r: Float) {
            result.append(TouchRegion(id: id, label: label, a: center, b: center, radius: r*rig.scale))
        }
        if let head = point("Head_M") {
            // Follow the current head orientation, including imported actions and procedural poses.
            let index = rig.named["Head_M"]!
            let rest = rig.restWorld[index]
            func axis(_ value: SIMD3<Float>) -> SIMD3<Float> {
                let v = world[index] * simd_inverse(rest) * SIMD4(value,0)
                let xyz = SIMD3(v.x,v.y,v.z)
                return simd_length(xyz) > 0.001 ? simd_normalize(xyz) : value
            }
            let up = axis(rig.up), front = axis(rig.forward), right = axis(rig.right), s = rig.scale
            let forehead = head + up * (0.09*s) + front * (0.065*s)
            let cheek = head + up * (0.025*s) + front * (0.07*s)
            let cheekOffset = right * (0.042*s)
            sphere("forehead","额头",forehead,0.045)
            sphere("hair","头顶",head + up * (0.16*s),0.065)
            sphere("leftCheek","左脸颊",cheek - cheekOffset,0.037)
            sphere("rightCheek","右脸颊",cheek + cheekOffset,0.037)
        }
        if let chest = point("Chest_M") { sphere("chest","胸口",chest + rig.up*0.025*rig.scale + rig.forward*0.10*rig.scale,0.11) }
        if let root = point("Root_M"), let chest = point("Chest_M") {
            sphere("abdomen","腹部",simd_mix(root,chest,SIMD3(repeating:0.45)) + rig.forward*0.07*rig.scale,0.10)
            sphere("hips","髋部",root - rig.up*0.07*rig.scale,0.12)
        }
        for (key, limb) in rig.limbs {
            let side = limb.side < 0 ? "左" : "右"
            let p = HumanoidRig.position(world[limb.upper]), m = HumanoidRig.position(world[limb.middle]), e = HumanoidRig.position(world[limb.end])
            sphere(key, side + (limb.isLeg ? "脚" : "手"), e, limb.isLeg ? 0.07 : 0.055)
            result.append(TouchRegion(id: key+"Limb", label: side + (limb.isLeg ? "腿" : "手臂"), a: p, b: m, radius: 0.055*rig.scale))
            result.append(TouchRegion(id: key+"Limb", label: side + (limb.isLeg ? "腿" : "手臂"), a: m, b: e, radius: 0.055*rig.scale))
        }
        return result
    }

    static func resolve(point: CGPoint, regions: [TouchRegion], project: (SIMD3<Float>) -> SCNVector3) -> TouchRegion? {
        var best: (TouchRegion, CGFloat)?
        for region in regions {
            let a = project(region.a), b = project(region.b)
            guard a.z >= 0, a.z <= 1, b.z >= 0, b.z <= 1 else { continue }
            let edge = project(region.a + SIMD3(0,region.radius,0))
            let edgeX = project(region.a + SIMD3(region.radius,0,0))
            let radius = CGFloat(max(hypot(edge.x-a.x,edge.y-a.y),hypot(edgeX.x-a.x,edgeX.y-a.y)))
            guard radius > 1 else { continue }
            let start = CGPoint(x: CGFloat(a.x),y: CGFloat(a.y)), end = CGPoint(x: CGFloat(b.x),y: CGFloat(b.y))
            let dx = end.x-start.x, dy = end.y-start.y
            let t = min(1,max(0,((point.x-start.x)*dx+(point.y-start.y)*dy)/max(0.001,dx*dx+dy*dy)))
            let score = hypot(point.x-start.x-t*dx,point.y-start.y-t*dy)/radius
            if score <= 1, best == nil || score < best!.1 { best = (region,score) }
        }
        return best?.0
    }
}
