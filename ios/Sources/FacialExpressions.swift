import Foundation
import SceneKit

struct MorphTarget: Decodable {
    let name: String
    let indices: [Int]
    let deltas: [[Float]]
    var normalDeltas: [[Float]]? = nil
}

extension ResearchMesh {
    func expressionVertices(targets: [MorphTarget], weights: [String: Float]) throws -> [SCNVector3] {
        guard targets.count <= 64, targets.reduce(0, { $0 + $1.indices.count }) <= 2_000_000,
              Set(targets.map(\.name)).count == targets.count else {
            throw CompanionError.message("表情数据数量无效。")
        }
        var positions = vertices
        guard positions.allSatisfy({ $0.count >= 3 && $0.prefix(3).allSatisfy(\.isFinite) }) else {
            throw CompanionError.message("表情基础顶点无效。")
        }
        for target in targets {
            guard target.indices.count == target.deltas.count,
                  Set(target.indices).count == target.indices.count else {
                throw CompanionError.message("表情索引与位移数量不匹配。")
            }
            let weight = weights[target.name] ?? 0
            guard weight.isFinite, (0...1).contains(weight) else {
                throw CompanionError.message("表情权重无效。")
            }
            for (index, delta) in zip(target.indices, target.deltas) {
                guard index >= 0, index < positions.count, delta.count == 3,
                      delta.allSatisfy({ $0.isFinite && abs($0) < 10 }) else {
                    throw CompanionError.message("表情顶点索引或位移无效。")
                }
                if weight != 0 {
                    for axis in 0..<3 { positions[index][axis] += delta[axis] * weight }
                }
            }
        }
        return positions.map { SCNVector3(-$0[0], $0[1], $0[2]) }
    }
}

extension CharacterPackage {
    func applyExpression(to scene: SCNScene, blink: Float, mouth: Float, smile: Float) throws {
        let weights: [String: Float] = [
            "Face.eyeBlinkLeft": blink, "Face.eyeBlinkRight": blink,
            "Face.jawOpen": mouth,
            "Face.mouthSmileLeft": smile, "Face.mouthSmileRight": smile
        ]
        for part in parts {
            guard let targets = part.morphs, !targets.isEmpty,
                  let node = scene.rootNode.childNode(withName: part.mesh.name, recursively: true),
                  let current = node.geometry else { continue }
            let positions = try part.mesh.expressionVertices(targets: targets, weights: weights)
            let sources = [SCNGeometrySource(vertices: positions)] + current.sources.filter { $0.semantic != .vertex }
            let geometry = SCNGeometry(sources: sources, elements: current.elements)
            geometry.materials = current.materials
            node.geometry = geometry
        }
    }
}
