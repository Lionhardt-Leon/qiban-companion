import Foundation
import simd

struct CharacterAction: Decodable, Identifiable {
    struct Track: Decodable { let node: Int; let values: String }
    struct Morph: Decodable { let name: String; let values: String }
    let id: String
    let name: String
    let fps: Int
    let frameCount: Int
    let rotations: [Track]
    let positions: [Track]
    let scales: [Track]
    let morphs: [Morph]
    var duration: Double { Double(frameCount - 1) / Double(fps) }
}

struct ActionSample {
    let id: String
    let token: Int
    let time: Double
    let enter: Float
    let exit: Float
}

struct ActionDirector {
    private(set) var id: String?
    private var token = 0
    private var start = 0.0
    private var duration = 0.0
    private var stop: Double?
    mutating func play(id: String, duration: Double, now: Double) {
        self.id = id; self.duration = duration; start = now; stop = nil; token += 1
    }
    mutating func cancel(now: Double) { if id != nil, stop == nil { stop = now } }
    mutating func sample(now: Double) -> ActionSample? {
        guard let id = id else { return nil }
        let elapsed = max(0, now - start)
        let exit = max(0, (now - (stop ?? (start + duration - 0.25))) / 0.25)
        guard elapsed < duration, exit < 1 else { self.id = nil; return nil }
        return ActionSample(id: id, token: token, time: elapsed, enter: Float(min(1, elapsed / 0.25)), exit: Float(exit))
    }
}

final class CharacterActionLibrary {
    private struct Clip {
        let descriptor: CharacterAction
        let rotations: [(Int, [Float])]
        let positions: [(Int, [Float])]
        let scales: [(Int, [Float])]
        let morphs: [(String, [Float])]
    }
    private var clips: [String: Clip] = [:]

    init(actions: [CharacterAction], nodeCount: Int, morphNames: Set<String>) throws {
        guard actions.count <= 32, Set(actions.map(\.id)).count == actions.count else { throw CompanionError.message("动作库数量或标识无效。") }
        for action in actions {
            guard !action.id.isEmpty, (1...60).contains(action.fps), (2...10_000).contains(action.frameCount),
                  action.rotations.count <= 256, action.positions.count <= 256, action.scales.count <= 256, action.morphs.count <= 64 else {
                throw CompanionError.message("动作轨道规模无效。")
            }
            func decode(_ text: String, width: Int) throws -> [Float] {
                guard let bytes = Data(base64Encoded: text), [width * 4, width * action.frameCount * 4].contains(bytes.count) else { throw CompanionError.message("动作轨道长度无效。") }
                var values = [Float](repeating: 0, count: bytes.count / 4)
                _ = values.withUnsafeMutableBytes { bytes.copyBytes(to: $0) }
                guard values.allSatisfy({ $0.isFinite && abs($0) <= 10000 }) else { throw CompanionError.message("动作轨道数值无效。") }
                return values
            }
            func tracks(_ items: [CharacterAction.Track], width: Int) throws -> [(Int, [Float])] {
                guard Set(items.map(\.node)).count == items.count, items.allSatisfy({ (0..<nodeCount).contains($0.node) }) else { throw CompanionError.message("动作骨骼绑定无效。") }
                return try items.map { track in
                    let values = try decode(track.values, width: width)
                    if width == 4 {
                        for i in stride(from: 0, to: values.count, by: 4) {
                            let norm = values[i..<i+4].reduce(Float(0)) { $0 + $1 * $1 }
                            guard abs(norm - 1) < 0.02 else { throw CompanionError.message("动作旋转无效。") }
                        }
                    }
                    return (track.node, values)
                }
            }
            let morphs = try action.morphs.map { track -> (String, [Float]) in
                guard morphNames.contains(track.name) else { throw CompanionError.message("动作引用了未知表情。") }
                let values = try decode(track.values, width: 1)
                guard values.allSatisfy({ (0...1).contains($0) }) else { throw CompanionError.message("动作表情范围无效。") }
                return (track.name, values)
            }
            clips[action.id] = Clip(descriptor: action, rotations: try tracks(action.rotations, width: 4),
                positions: try tracks(action.positions, width: 3), scales: try tracks(action.scales, width: 3), morphs: morphs)
        }
    }

    func pose(id: String, time: Double, base: [simd_float4x4]) throws -> (local: [simd_float4x4], morphs: [String: Float]) {
        guard let clip = clips[id], time.isFinite, time >= 0 else { throw CompanionError.message("动作或播放时间无效。") }
        let value = min(Double(clip.descriptor.frameCount - 1), time * Double(clip.descriptor.fps))
        let frame = Int(value), next = min(frame + 1, clip.descriptor.frameCount - 1), fraction = Float(value - Double(frame))
        func vector(_ values: [Float], width: Int, frame: Int) -> SIMD4<Float> {
            let offset = values.count == width ? 0 : frame * width
            var result = SIMD4<Float>(repeating: 0)
            for i in 0..<width { result[i] = values[offset + i] }; return result
        }
        var local = base
        for (node, values) in clip.scales {
            let scale = simd_mix(vector(values, width: 3, frame: frame), vector(values, width: 3, frame: next), SIMD4(repeating: fraction))
            for column in 0..<3 {
                let old = SIMD3(local[node][column].x, local[node][column].y, local[node][column].z)
                local[node][column] = SIMD4(simd_normalize(old) * scale[column], 0)
            }
        }
        for (node, values) in clip.rotations {
            let a = simd_quatf(vector: vector(values, width: 4, frame: frame)), b = simd_quatf(vector: vector(values, width: 4, frame: next))
            let rotation = simd_float3x3(simd_slerp(a, b, fraction))
            for column in 0..<3 {
                let length = simd_length(SIMD3(local[node][column].x, local[node][column].y, local[node][column].z))
                local[node][column] = SIMD4(rotation[column] * length, 0)
            }
        }
        for (node, values) in clip.positions {
            let p = simd_mix(vector(values, width: 3, frame: frame), vector(values, width: 3, frame: next), SIMD4(repeating: fraction))
            local[node][3] = SIMD4(p.x, p.y, p.z, 1)
        }
        var morphs: [String: Float] = [:]
        for (name, values) in clip.morphs {
            morphs[name] = values.count == 1 ? values[0] : values[frame] + (values[next] - values[frame]) * fraction
        }
        return (local, morphs)
    }

    static func blend(_ a: [simd_float4x4], _ b: [simd_float4x4], weight: Float) -> [simd_float4x4] {
        if weight >= 1 { return b }; if weight <= 0 { return a }
        return zip(a, b).map { left, right in
            func parts(_ m: simd_float4x4) -> (simd_quatf, SIMD3<Float>) {
                var rotation = simd_float3x3(columns: (SIMD3(m[0].x,m[0].y,m[0].z), SIMD3(m[1].x,m[1].y,m[1].z), SIMD3(m[2].x,m[2].y,m[2].z)))
                let scales = SIMD3(simd_length(rotation[0]), simd_length(rotation[1]), simd_length(rotation[2]))
                for i in 0..<3 { rotation[i] /= max(scales[i], 0.000001) }
                return (simd_quatf(rotation), scales)
            }
            let l = parts(left), r = parts(right)
            var m = simd_float4x4(simd_slerp(l.0, r.0, weight))
            let scale = simd_mix(l.1, r.1, SIMD3(repeating: weight))
            for i in 0..<3 { m[i] *= scale[i] }
            m[3] = simd_mix(left[3], right[3], SIMD4(repeating: weight)); return m
        }
    }
}
