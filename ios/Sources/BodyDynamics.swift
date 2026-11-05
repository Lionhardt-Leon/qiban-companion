import Foundation
import simd

struct BodyDynamicsSettings: Equatable {
    var breathing = true
    var physics = true
    var strength: Float = 0.65
}

struct EmbodimentFrame {
    let elapsed: Double
    let delta: Double
    let settings: BodyDynamicsSettings
    var procedural: ProceduralSample? = nil
}

struct DampedSpring {
    var offset = SIMD3<Float>.zero
    var velocity = SIMD3<Float>.zero
    mutating func step(delta: Double, acceleration: SIMD3<Float>, limit: Float) {
        guard delta.isFinite, delta > 0, delta <= 0.15, acceleration.x.isFinite,
              acceleration.y.isFinite, acceleration.z.isFinite, limit > 0 else {
            offset = .zero; velocity = .zero; return
        }
        let steps = max(1, Int(ceil(delta * 120)))
        let dt = Float(delta) / Float(steps)
        for _ in 0..<steps {
            velocity += (acceleration - offset * 160 - velocity * 14) * dt
            offset += velocity * dt
            if simd_length(offset) > limit {
                offset = simd_normalize(offset) * limit
                let normal = simd_normalize(offset)
                velocity -= normal * max(0, simd_dot(velocity,normal))
            }
            if simd_length(velocity) > 1 { velocity = simd_normalize(velocity) }
        }
    }
}

/// Native secondary motion on the original weighted physics bones, not vertex scaling.
final class BodyDynamics {
    private struct State {
        var spring = DampedSpring()
        var anchor: SIMD3<Float>?
        var velocity = SIMD3<Float>.zero
        var acceleration = SIMD3<Float>.zero
    }
    private var states: [Int: State] = [:]
    private var pendingRegion: String?
    private var reactionStart: Double?
    private var previousElapsed: Double?

    func touch(region: String, at elapsed: Double) { pendingRegion = region; reactionStart = elapsed }
    func reset() { states = [:]; pendingRegion = nil; reactionStart = nil; previousElapsed = nil }

    func apply(frame: EmbodimentFrame, rig: HumanoidRig, local: inout [simd_float4x4]) {
        if let previous = previousElapsed, frame.elapsed < previous { reset() }
        previousElapsed = frame.elapsed
        let size = rig.scale
        if frame.settings.breathing, let chest = rig.named["Chest_M"] {
            let breath = Float(sin(frame.elapsed * 2 * .pi / 4.4))
            let w = rig.world(local)
            let parent = rig.nodes[chest].parent.map { w[$0] } ?? matrix_identity_float4x4
            let d = simd_inverse(parent) * SIMD4<Float>(0, breath * 0.0025 * size, 0, 0)
            local[chest][3] += SIMD4(d.x,d.y,d.z,0)
            // Translation only: scaling this parent also scales the neck, face and arms.
        }
        if let start = reactionStart, let head = rig.named["Head_M"] {
            let t = frame.elapsed - start
            if t >= 0, t < 1 {
                let weight = Float(sin(t * .pi))
                rig.rotateWorld(node: head, rotation: simd_quatf(angle: 0.045 * weight, axis: rig.forward), local: &local)
            }
        }
        guard frame.settings.physics else { states = [:]; pendingRegion = nil; return }
        let strength = min(1.5, max(0, frame.settings.strength.isFinite ? frame.settings.strength : 0))
        let baseWorld = rig.world(local)
        for name in ["titForPhysics_L","titForPhysics_R","buttocksForPhysics_L","buttocksForPhysics_R",
                     "buttocksForPhysics_DownL","buttocksForPhysics_DownR"] {
            guard let node = rig.named[name], let parent = rig.nodes[node].parent else { continue }
            var state = states[node] ?? State()
            let anchor = HumanoidRig.position(baseWorld[node])
            let dt = Float(min(0.15, max(0.001, frame.delta)))
            if frame.delta > 0.15 || frame.delta <= 0 { state = State() }
            if let previous = state.anchor {
                let velocity = (anchor - previous) / dt
                var acceleration = (velocity - state.velocity) / dt
                if simd_length(acceleration) > 30 * size { acceleration = simd_normalize(acceleration) * 30 * size }
                state.acceleration += (acceleration - state.acceleration) * min(1, dt*12)
                state.velocity = velocity
            }
            state.anchor = anchor
            if strength == 0 { state.spring = DampedSpring() }
            if let region = pendingRegion,
               (region == "chest" && name.hasPrefix("tit")) || (region == "hips" && name.hasPrefix("buttocks")) {
                state.spring.velocity += (rig.forward * -0.035 + rig.up * 0.02) * size * strength
            }
            state.spring.step(delta: frame.delta, acceleration: -state.acceleration * 0.16 * strength,
                              limit: 0.006 * size * max(0.001,strength))
            let d = simd_inverse(baseWorld[parent]) * SIMD4(state.spring.offset, 0)
            local[node][3] += SIMD4(d.x,d.y,d.z,0)
            states[node] = state
        }
        pendingRegion = nil
    }
}
