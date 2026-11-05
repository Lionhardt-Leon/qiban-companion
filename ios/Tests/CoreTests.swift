import XCTest
import SceneKit
@testable import QibanCompanion

final class CoreTests: XCTestCase {
    func testRememberedCharacterSurvivesReloadAndInvalidImport() throws {
        let root = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        defer { try? FileManager.default.removeItem(at: root) }
        try FileManager.default.createDirectory(at: root, withIntermediateDirectories: true)
        let source = root.appendingPathComponent("source.json")
        let library = CharacterLibrary(directory: root.appendingPathComponent("library"))
        let valid = Data(#"{"name":"remembered triangle","vertices":[[0,0,0],[1,0,0],[0,1,0]],"trianglesBySubmesh":[[[0,1,2]]]}"#.utf8)
        try valid.write(to: source)
        _ = try CharacterLoader.load(url: source, remember: true, library: library)
        XCTAssertTrue(library.hasCurrent)
        XCTAssertEqual(try CharacterLoader.load(url: library.currentURL).name, "remembered triangle")
        try Data("broken".utf8).write(to: source)
        XCTAssertThrowsError(try CharacterLoader.load(url: source, remember: true, library: library))
        XCTAssertEqual(try Data(contentsOf: library.currentURL), valid)
    }

    func testCharacterLoaderAcceptsTextExtensionAndRejectsNonJSON() async throws {
        let url = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString + ".txt")
        defer { try? FileManager.default.removeItem(at: url) }
        let data = Data(#"{"name":"triangle","vertices":[[0,0,0],[1,0,0],[0,1,0]],"trianglesBySubmesh":[[[0,1,2]]]}"#.utf8)
        try data.write(to: url)
        let loaded = try await Task.detached { try CharacterLoader.load(url: url) }.value
        XCTAssertEqual(loaded.name, "triangle")
        XCTAssertNil(loaded.package)
        XCTAssertThrowsError(try CharacterLoader.decode(Data("not JSON".utf8)))
    }

    func testSkeletonRejectsParentCycleAndTruncatedTrack() {
        let identity: [Float] = [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1]
        var package = CharacterPackage(characterPackageVersion: 3, name: "test", parts: [], textures: [:])
        package.motion = SkeletonMotion(fps: 30, frameCount: 1,
            nodes: [.init(name: "cycle", parent: 0, matrix: identity)], tracks: [])
        XCTAssertThrowsError(try SkeletonPlayer(package: package, scene: SCNScene()))
        package.motion = SkeletonMotion(fps: 30, frameCount: 1,
            nodes: [.init(name: "root", parent: nil, matrix: identity)],
            tracks: [.init(node: 0, rotations: Data([0, 0, 0, 0]).base64EncodedString())])
        XCTAssertThrowsError(try SkeletonPlayer(package: package, scene: SCNScene()))
    }

    func testSparseMorphUsesBaseAndReflectsX() throws {
        let mesh = ResearchMesh(name: "face", vertices: [[1, 2, 3], [0, 0, 0]],
                                normals: nil, uv0: nil, trianglesBySubmesh: [])
        let target = MorphTarget(name: "Face.jawOpen", indices: [0], deltas: [[0.2, -0.4, 0]])
        let half = try mesh.expressionVertices(targets: [target], weights: ["Face.jawOpen": 0.5])
        XCTAssertEqual(half[0].x, -1.1, accuracy: 0.00001)
        XCTAssertEqual(half[0].y, 1.8, accuracy: 0.00001)
        let reset = try mesh.expressionVertices(targets: [target], weights: [:])
        XCTAssertEqual(reset[0].y, 2)
        XCTAssertThrowsError(try mesh.expressionVertices(targets: [target], weights: ["Face.jawOpen": 2]))
        XCTAssertThrowsError(try mesh.expressionVertices(targets: [MorphTarget(name: "bad", indices: [99], deltas: [[0, 0, 0]])], weights: [:]))
    }

    func testFaceForwardUsesConfiguredBoneAxisAndTracksParentRotation() throws {
        let identity: [Float] = [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1]
        let parent: [Float] = [1,0,0,0, 0,0,-1,0, 0,1,0,0, 0,0,0,1]
        let rotations: [Float] = [1,0,0, 0,1,0, 0,0,1, 0,-1,0, 1,0,0, 0,0,1]
        let data = rotations.withUnsafeBufferPointer { Data(buffer: $0) }
        var package = CharacterPackage(characterPackageVersion: 3, name: "face axis", parts: [], textures: [:])
        package.motion = SkeletonMotion(fps: 30, frameCount: 2,
            nodes: [.init(name: "parent", parent: nil, matrix: parent), .init(name: "head", parent: 0, matrix: identity)],
            tracks: [.init(node: 1, rotations: data.base64EncodedString())])
        package.faceDirection = .init(node: 1, axis: [0, 1, 0], upAxis: [0, 0, 1])
        let scene = SCNScene(), container = SCNNode(), node = SCNNode(geometry: SCNPlane(width: 1, height: 1))
        let material = SCNMaterial()
        material.shaderModifiers = [.surface: "#pragma arguments\nfloat characterFaceForwardX;\nfloat characterFaceUpX;\n#pragma body\n"]
        CharacterMaterialRenderer.setFaceForward(SCNVector3(0, 0, 1), on: material)
        node.geometry?.materials = [material]; container.addChildNode(node); scene.rootNode.addChildNode(container)
        let player = try SkeletonPlayer(package: package, scene: scene)
        try player.apply(frame: 0, blink: 0, mouth: 0, smile: 0)
        let first = try XCTUnwrap(material.value(forKey: "characterFaceForwardZ") as? NSNumber).floatValue
        XCTAssertEqual(first, 1, accuracy: 0.00001)
        XCTAssertEqual(try XCTUnwrap(material.value(forKey: "characterFaceUpY") as? NSNumber).floatValue, -1, accuracy: 0.00001)
        try player.apply(frame: 1, blink: 0, mouth: 0, smile: 0)
        let second = try XCTUnwrap(material.value(forKey: "characterFaceForwardX") as? NSNumber).floatValue
        XCTAssertEqual(second, 1, accuracy: 0.00001)
        XCTAssertEqual(try XCTUnwrap(material.value(forKey: "characterFaceForwardZ") as? NSNumber).floatValue, 0, accuracy: 0.00001)
        package.faceDirection = .init(node: 1, axis: [0, 0, 0])
        XCTAssertThrowsError(try SkeletonPlayer(package: package, scene: scene))
        package.faceDirection = .init(node: 1, axis: [0, 1, 0], upAxis: [0, 1, 0])
        XCTAssertThrowsError(try SkeletonPlayer(package: package, scene: scene))
    }

    func testSecondUVChannelPreservedAndMalformedCoordinatesRejected() throws {
        var mesh = ResearchMesh(name: "UV1", vertices: [[0,0,0],[1,0,0],[0,1,0]], normals: nil,
                                uv0: [[0,0],[1,0],[0,1]], trianglesBySubmesh: [[[0,1,2]]])
        mesh.uv1 = [[0.25,0.75],[0.25,0.75],[0.25,0.75]]
        XCTAssertEqual(try mesh.node().geometry?.sources(for: .texcoord).count, 2)
        mesh.uv1 = [[0,0]]
        XCTAssertThrowsError(try mesh.node())
    }

    func testGeometryRejectsOutOfRangeTriangles() throws {
        let mesh = ResearchMesh(name: "broken", vertices: [[0, 0, 0], [1, 0, 0], [0, 1, 0]],
                                normals: nil, uv0: nil, trianglesBySubmesh: [[[0, 1, 9]]])
        XCTAssertThrowsError(try mesh.node())
        let valid = ResearchMesh(name: "triangle", vertices: [[0, 0, 0], [1, 0, 0], [0, 1, 0]],
                                 normals: nil, uv0: [[0, 0], [1, 0], [0, 1]], trianglesBySubmesh: [[[0, 1, 2]]])
        XCTAssertEqual(try valid.node().geometry?.elements.count, 1)
    }

    func testCharacterPackageRejectsUnknownVersion() {
        let package = CharacterPackage(characterPackageVersion: 999, name: "future", parts: [], textures: [:])
        XCTAssertThrowsError(try package.scene())
    }

    func testEndpointNormalization() throws {
        XCTAssertEqual(try APIClient.endpoint("https://example.com").absoluteString,
                       "https://example.com/v1/chat/completions")
        XCTAssertEqual(try APIClient.endpoint("https://example.com/custom/v1/").path,
                       "/custom/v1/chat/completions")
        XCTAssertEqual(try APIClient.endpoint("https://example.com/chat/completions").path,
                       "/chat/completions")
        XCTAssertThrowsError(try APIClient.endpoint("http://example.com"))
        XCTAssertThrowsError(try APIClient.endpoint("https://user:secret@example.com/v1"))
    }

    func testBackupRoundTripAndValidation() throws {
        var source = LocalArchive()
        source.messages = [Message(role: "user", content: "你好"), Message(role: "assistant", content: "我在。")]
        source.memories = "喜欢安静的雨天"
        source.diary = [JournalEntry(text: "今天散步了")]
        let data = try JSONEncoder().encode(source)
        let restored = try JSONDecoder().decode(LocalArchive.self, from: data)
        try restored.validate()
        XCTAssertEqual(restored.messages.map(\.id), source.messages.map(\.id))
        XCTAssertEqual(restored.memories, source.memories)
        XCTAssertEqual(restored.diary.first?.text, "今天散步了")
        var future = restored
        future.schemaVersion = 999
        XCTAssertThrowsError(try future.validate())
        var malformed = restored
        malformed.messages.append(Message(role: "system", content: "unexpected"))
        XCTAssertThrowsError(try malformed.validate())
        var duplicate = restored
        duplicate.messages.append(duplicate.messages[0])
        XCTAssertThrowsError(try duplicate.validate())
    }

    func testRequestAndReplyWireFormat() throws {
        let request = ChatRequest(model: "custom", messages: [.init(role: "user", content: "你好")],
                                  temperature: 0.7, max_tokens: 1024)
        let data = try JSONEncoder().encode(request)
        let object = try XCTUnwrap(JSONSerialization.jsonObject(with: data) as? [String: Any])
        XCTAssertEqual(object["stream"] as? Bool, false)
        XCTAssertEqual(object["model"] as? String, "custom")
        XCTAssertNil(object["api_key"])
        let response = Data(#"{"choices":[{"message":{"role":"assistant","content":"你好"}}]}"#.utf8)
        XCTAssertEqual(try JSONDecoder().decode(ChatResponse.self, from: response).choices.first?.message.content, "你好")
    }
}
