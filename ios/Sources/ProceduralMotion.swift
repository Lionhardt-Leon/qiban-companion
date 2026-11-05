import Foundation
import simd

struct MotionPlan: Codable, Equatable {
    struct Pose: Codable, Equatable {
        let time: Double
        var leftHand: [Float]? = nil
        var rightHand: [Float]? = nil
        var leftFoot: [Float]? = nil
        var rightFoot: [Float]? = nil
        var head: [Float]? = nil
        var torso: [Float]? = nil
    }
    let duration: Double
    let poses: [Pose]

    func validate() throws {
        guard duration.isFinite, (1...8).contains(duration), (2...8).contains(poses.count),
              poses.first?.time == 0, poses.last?.time == duration else { throw CompanionError.message("自由动作时长无效。") }
        var previous = -1.0
        for p in poses {
            guard p.time.isFinite, p.time > previous, (0...duration).contains(p.time) else { throw CompanionError.message("自由动作时间无效。") }
            previous = p.time
            for (v, bounds) in [(p.leftHand, [Float](arrayLiteral:1.5,2,1.5)), (p.rightHand, [Float](arrayLiteral:1.5,2,1.5)),
                                (p.leftFoot, [Float](repeating: 0.35, count: 3)), (p.rightFoot, [Float](repeating: 0.35, count: 3)),
                                (p.head, [45,25,20]), (p.torso, [20,15,15])] {
                if let v = v {
                    guard v.count == 3, zip(v, bounds).allSatisfy({ $0.isFinite && abs($0) <= $1 }) else {
                        throw CompanionError.message("自由动作目标越界。")
                    }
                }
            }
            guard (p.leftHand?[1] ?? 0) >= -0.35, (p.rightHand?[1] ?? 0) >= -0.35 else {
                throw CompanionError.message("手部目标低于活动范围。")
            }
        }
    }

    func pose(at time: Double) -> Pose {
        let t = min(duration, max(0, time))
        let index = max(0, (poses.firstIndex { $0.time >= t } ?? (poses.count - 1)) - 1)
        let a = poses[index], b = poses[min(index + 1, poses.count - 1)]
        let f = Float(min(1, max(0, (t - a.time) / max(0.001, b.time - a.time))))
        let w = f * f * (3 - 2 * f)
        func mix(_ x: [Float]?, _ y: [Float]?) -> [Float]? {
            guard x != nil || y != nil else { return nil }
            return zip(x ?? [0,0,0], y ?? [0,0,0]).map { $0 + ($1 - $0) * w }
        }
        return Pose(time: t, leftHand: mix(a.leftHand,b.leftHand), rightHand: mix(a.rightHand,b.rightHand),
                    leftFoot: mix(a.leftFoot,b.leftFoot), rightFoot: mix(a.rightFoot,b.rightFoot),
                    head: mix(a.head,b.head), torso: mix(a.torso,b.torso))
    }
}

struct ProceduralSample {
    let token: Int
    let pose: MotionPlan.Pose
    let enter: Float
    let exit: Float
}

struct ProceduralDirector {
    private var plan: MotionPlan?
    private var start = 0.0
    private var token = 0
    private var stop: Double?
    mutating func play(_ plan: MotionPlan, now: Double) throws {
        try plan.validate(); self.plan = plan; start = now; token += 1; stop = nil
    }
    mutating func cancel(now: Double) { if plan != nil, stop == nil { stop = now } }
    mutating func sample(now: Double) -> ProceduralSample? {
        guard let plan = plan else { return nil }
        let t = max(0, now - start)
        let exit = Float(max(0, (now - (stop ?? (start + plan.duration - 0.3))) / 0.3))
        guard t < plan.duration, exit < 1 else { self.plan = nil; return nil }
        return ProceduralSample(token: token, pose: plan.pose(at: t), enter: Float(min(1, t / 0.3)), exit: exit)
    }
}

struct HumanoidRig {
    struct Limb { let upper: Int; let middle: Int; let end: Int; let isLeg: Bool; let side: Float }
    let nodes: [SkeletonMotion.Node]
    let restWorld: [simd_float4x4]
    let named: [String: Int]
    let limbs: [String: Limb]
    let right: SIMD3<Float>
    let up = SIMD3<Float>(0,1,0)
    let forward: SIMD3<Float>
    let scale: Float

    init(nodes: [SkeletonMotion.Node], rest: [simd_float4x4]) {
        self.nodes = nodes
        restWorld = Self.world(nodes: nodes, local: rest)
        named = Dictionary(grouping: nodes.indices, by: { nodes[$0].name }).compactMapValues { $0.count == 1 ? $0[0] : nil }
        var limbs: [String: Limb] = [:]
        for (key, a,b,c,leg,side) in [("leftHand","Shoulder_L","Elbow_L","Wrist_L",false,Float(-1)),
            ("rightHand","Shoulder_R","Elbow_R","Wrist_R",false,Float(1)),
            ("leftFoot","Hip_L","Knee_L","Ankle_L",true,Float(-1)),
            ("rightFoot","Hip_R","Knee_R","Ankle_R",true,Float(1))] {
            if let u = named[a], let m = named[b], let e = named[c], nodes[m].parent == u, nodes[e].parent == m,
               simd_distance(Self.position(restWorld[u]), Self.position(restWorld[m])) > 0.01,
               simd_distance(Self.position(restWorld[e]), Self.position(restWorld[m])) > 0.01 {
                limbs[key] = Limb(upper: u, middle: m, end: e, isLeg: leg, side: side)
            }
        }
        self.limbs = limbs
        var axis = SIMD3<Float>(1,0,0)
        if let l = named["Shoulder_L"], let r = named["Shoulder_R"] {
            let delta = Self.position(restWorld[r]) - Self.position(restWorld[l]); axis = SIMD3(delta.x, 0, delta.z)
        }
        right = simd_length(axis) > 0.001 ? simd_normalize(axis) : SIMD3(1,0,0)
        forward = simd_normalize(simd_cross(right, SIMD3(0,1,0)))
        if let head = named["Head_M"], let foot = named["Ankle_L"] {
            scale = min(3, max(0.2, (restWorld[head][3].y - restWorld[foot][3].y) / 1.43))
        } else { scale = 1 }
    }

    static func position(_ m: simd_float4x4) -> SIMD3<Float> { SIMD3(m[3].x,m[3].y,m[3].z) }
    static func world(nodes: [SkeletonMotion.Node], local: [simd_float4x4]) -> [simd_float4x4] {
        var result = local
        for i in nodes.indices { if let p = nodes[i].parent { result[i] = result[p] * local[i] } }
        return result
    }
    func world(_ local: [simd_float4x4]) -> [simd_float4x4] { Self.world(nodes: nodes, local: local) }

    func rotateWorld(node: Int, rotation: simd_quatf, local: inout [simd_float4x4]) {
        let w = world(local), p = Self.position(w[node])
        var around = simd_float4x4(rotation); around[3] = SIMD4(p - rotation.act(p), 1)
        let desired = around * w[node]
        local[node] = nodes[node].parent.map { simd_inverse(w[$0]) * desired } ?? desired
    }

    func solve(_ limb: Limb, target: SIMD3<Float>, local: inout [simd_float4x4]) {
        var w = world(local)
        let start = Self.position(w[limb.upper]), joint = Self.position(w[limb.middle]), end = Self.position(w[limb.end])
        let originalEnd = w[limb.end]
        let a = simd_distance(start,joint), b = simd_distance(joint,end)
        let delta = target - start
        guard simd_length(delta) > 0.0001 else { return }
        if simd_distance(target,end) < 0.00001 { return }
        let direction = simd_normalize(delta)
        let d = min((a+b)*0.9995, max(abs(a-b)+0.001, simd_length(delta)))
        let x = (a*a - b*b + d*d) / (2*d)
        let y = sqrt(max(0, a*a - x*x))
        // Transport the existing elbow/knee plane with the limb's swing. A fixed world pole
        // flipped elbows even for a neutral keyframe on rigs whose local axes are mirrored.
        let oldDirection = simd_normalize(end-start)
        var reference = joint-start-oldDirection*simd_dot(joint-start,oldDirection)
        if simd_length(reference) < 0.001 * scale {
            reference = forward + (limb.isLeg ? SIMD3<Float>.zero : right * limb.side * 0.25)
        }
        let pole = simd_quatf(from:oldDirection,to:direction).act(reference)
        var bend = pole - direction * simd_dot(pole,direction)
        if simd_length(bend) < 0.001 { bend = up - direction * simd_dot(up,direction) }
        guard simd_length(bend) > 0.001 else { return }
        let desiredJoint = start + direction*x + simd_normalize(bend)*y
        let desiredEnd = start + direction*d
        rotateWorld(node: limb.upper, rotation: simd_quatf(from: simd_normalize(joint-start), to: simd_normalize(desiredJoint-start)), local: &local)
        w = world(local)
        let j = Self.position(w[limb.middle]), e = Self.position(w[limb.end])
        rotateWorld(node: limb.middle, rotation: simd_quatf(from: simd_normalize(e-j), to: simd_normalize(desiredEnd-j)), local: &local)
        // Hands inherit the forearm with their existing local orientation. World-locking
        // the hand forced an equal opposite rotation into the wrist during every arm lift.
        if limb.isLeg {
            let updated = world(local)
            var desired = originalEnd
            desired[3] = updated[limb.end][3]
            local[limb.end] = simd_inverse(updated[limb.middle]) * desired
        }
    }

    func pose(_ pose: MotionPlan.Pose, local: inout [simd_float4x4]) {
        for (key, angles) in [("Chest_M",pose.torso),("Head_M",pose.head)] {
            if let node = named[key], let angles = angles, angles.contains(where: { abs($0) > 0.00001 }) {
                let q = simd_quatf(angle: angles[0] * .pi/180, axis: up) *
                    simd_quatf(angle: angles[1] * .pi/180, axis: right) * simd_quatf(angle: angles[2] * .pi/180, axis: forward)
                rotateWorld(node: node, rotation: q, local: &local)
            }
        }
        let baseline = world(local)
        for (key, offset) in [("leftHand",pose.leftHand),("rightHand",pose.rightHand),("leftFoot",pose.leftFoot),("rightFoot",pose.rightFoot)] {
            guard let limb = limbs[key], let offset = offset, offset.contains(where: { abs($0) > 0.00001 }) else { continue }
            let length = simd_distance(Self.position(restWorld[limb.upper]),Self.position(restWorld[limb.middle])) +
                simd_distance(Self.position(restWorld[limb.middle]),Self.position(restWorld[limb.end]))
            var target = Self.position(baseline[limb.end]) + (right*offset[0] + up*offset[1] + forward*offset[2])*length
            if limb.isLeg { target.y = max(Self.position(restWorld[limb.end]).y, target.y) }
            solve(limb, target: target, local: &local)
        }
    }
}

final class ProceduralPosePlayer {
    private var token: Int?
    private var transition: [simd_float4x4]?
    private var last: [simd_float4x4]?
    func apply(_ sample: ProceduralSample?, rig: HumanoidRig, local: inout [simd_float4x4]) {
        if let sample = sample {
            if sample.token != token { token = sample.token; transition = last ?? local }
            let base = local
            rig.pose(sample.pose, local: &local)
            local = CharacterActionLibrary.blend(transition ?? base, local, weight: sample.enter)
            local = CharacterActionLibrary.blend(local, base, weight: sample.exit)
        } else { token = nil; transition = nil }
        last = local
    }
}
