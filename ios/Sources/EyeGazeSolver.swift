import simd

/// Per-eye pivot conversion from Eye.cs, followed by GazeToCameraAnimationJob's FromTo rotation.
enum EyeGazeSolver {
    static func world(local: [simd_float4x4], nodes: [SkeletonMotion.Node]) -> [simd_float4x4] {
        var result = local
        for i in nodes.indices { if let p = nodes[i].parent { result[i] = result[p] * local[i] } }
        return result
    }

    static func apply(eyes: [CharacterPackage.EyeBinding], nodes: [SkeletonMotion.Node],
                      local: inout [simd_float4x4], world: inout [simd_float4x4], target: SIMD3<Float>) {
        for eye in eyes {
            let origin = SIMD3(world[eye.node].columns.3.x, world[eye.node].columns.3.y, world[eye.node].columns.3.z)
            let pivot = SIMD3(world[eye.pivot].columns.3.x, world[eye.pivot].columns.3.y, world[eye.pivot].columns.3.z)
            let distance = simd_length(target - pivot)
            if distance < 0.000001 { continue }
            let point = pivot + (target - pivot) / distance * eye.pivotToPupil
            let desired = point - origin
            if simd_length_squared(desired) < 0.000000001 { continue }
            let direction = simd_normalize(desired)
            let basis = simd_float3x3(columns: (
                simd_normalize(SIMD3(world[eye.node].columns.0.x, world[eye.node].columns.0.y, world[eye.node].columns.0.z)),
                simd_normalize(SIMD3(world[eye.node].columns.1.x, world[eye.node].columns.1.y, world[eye.node].columns.1.z)),
                simd_normalize(SIMD3(world[eye.node].columns.2.x, world[eye.node].columns.2.y, world[eye.node].columns.2.z))))
            let inEye = basis.transpose * direction
            let forward = SIMD3(eye.forward[0], eye.forward[1], eye.forward[2])
            let correction = simd_float4x4(simd_quatf(from: forward, to: simd_normalize(inEye)))
            local[eye.node] = local[eye.node] * correction
            world = Self.world(local: local, nodes: nodes)
        }
    }
}
