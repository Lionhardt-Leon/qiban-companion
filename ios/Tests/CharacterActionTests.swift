import XCTest
import simd
import SceneKit
@testable import QibanCompanion

final class CharacterActionTests: XCTestCase {
    private func encoded(_ values: [Float]) -> String { values.withUnsafeBufferPointer { Data(buffer: $0) }.base64EncodedString() }
    private func action() -> CharacterAction {
        CharacterAction(id: "wave", name: "挥手", fps: 1, frameCount: 2,
            rotations: [.init(node: 0, values: encoded([0,0,0,1, 0,0,sqrt(0.5),sqrt(0.5)]))],
            positions: [.init(node: 0, values: encoded([0,0,0, 2,0,0]))], scales: [],
            morphs: [.init(name: "Face.jawOpen", values: encoded([0,1]))])
    }
    func testActionSamplesRotationsPositionsAndMorphsTogether() throws {
        let library = try CharacterActionLibrary(actions: [action()], nodeCount: 1, morphNames: ["Face.jawOpen"])
        let pose = try library.pose(id: "wave", time: 0.5, base: [matrix_identity_float4x4])
        XCTAssertEqual(pose.local[0][3].x, 1, accuracy: 0.00001)
        XCTAssertEqual(pose.local[0][0].y, sqrt(0.5), accuracy: 0.00001)
        XCTAssertEqual(pose.morphs["Face.jawOpen"]!, 0.5, accuracy: 0.00001)
        XCTAssertThrowsError(try library.pose(id: "missing", time: 0, base: [matrix_identity_float4x4]))
        XCTAssertThrowsError(try CharacterActionLibrary(actions: [action()], nodeCount: 0, morphNames: ["Face.jawOpen"]))
    }
    func testDirectorEntersStopsAndEndsWithoutQueueing() {
        var director = ActionDirector()
        director.play(id: "hello", duration: 5, now: 10)
        XCTAssertEqual(director.sample(now: 10)?.enter, 0)
        XCTAssertEqual(director.sample(now: 11)?.enter, 1)
        let old = director.sample(now: 11)!.token
        director.play(id: "Yes", duration: 3, now: 11)
        XCTAssertNotEqual(director.sample(now: 11)?.token, old)
        director.cancel(now: 12)
        XCTAssertEqual(director.sample(now: 12.125)?.exit, 0.5)
        XCTAssertNil(director.sample(now: 12.25))
        director.play(id: "hello", duration: 1, now: 20)
        XCTAssertNil(director.sample(now: 21))
    }
    func testPoseInterruptStartsFromCurrentPoseAndReturnsToIdle() throws {
        var package = CharacterPackage(characterPackageVersion: 3, name: "actions", parts: [], textures: [:])
        package.motion = .init(fps: 30, frameCount: 1, nodes: [.init(name: "root", parent: nil,
            matrix: [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1])], tracks: [])
        let clip = action()
        package.actions = [CharacterAction(id: clip.id, name: clip.name, fps: clip.fps, frameCount: clip.frameCount,
            rotations: clip.rotations, positions: clip.positions, scales: [], morphs: [])]
        let player = try SkeletonPlayer(package: package, scene: SCNScene())
        try player.apply(sample: 0, blink: 0, mouth: 0, smile: 0, action: .init(id: "wave", token: 1, time: 0.5, enter: 1, exit: 0))
        XCTAssertEqual(player.posedWorld[0][3].x, 1, accuracy: 0.00001)
        try player.apply(sample: 0, blink: 0, mouth: 0, smile: 0, action: .init(id: "wave", token: 2, time: 0, enter: 0, exit: 0))
        XCTAssertEqual(player.posedWorld[0][3].x, 1, accuracy: 0.00001)
        try player.apply(sample: 0, blink: 0, mouth: 0, smile: 0, action: .init(id: "wave", token: 2, time: 0.5, enter: 1, exit: 1))
        XCTAssertEqual(player.posedWorld[0][3].x, 0, accuracy: 0.00001)
    }
    func testImmediateStopOnlyAcceptsDirectCommands() {
        XCTAssertTrue(DialogueMotion.isStopRequest("停止跳舞！"))
        XCTAssertTrue(DialogueMotion.isStopRequest(" stop "))
        XCTAssertFalse(DialogueMotion.isStopRequest("他说停下，然后就走了"))
        XCTAssertFalse(DialogueMotion.isStopRequest("不要停止跳舞"))
    }
}
