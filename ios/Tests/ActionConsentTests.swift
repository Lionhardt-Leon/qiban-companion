import XCTest
@testable import QibanCompanion

final class ActionConsentTests:XCTestCase {
    func testMissingRefusedAndUnknownDecisionsNeverMoveBody() throws {
        for decision in [nil,"none","refuse","accept later","true"] as [String?] {
            var json:[String:Any]=["reply":"我不想抬起来。","action":"raise_right_hand"]
            if let decision=decision {json["decision"]=decision}
            let data=try JSONSerialization.data(withJSONObject:json)
            let reply=try DialogueMotion.parse(String(decoding:data,as:UTF8.self),actions:["raise_right_hand"])
            XCTAssertNil(reply.action);XCTAssertNil(reply.motion);XCTAssertEqual(reply.text,"我不想抬起来。")
        }
    }
    func testAcceptedActionAndRefusedMotion() throws {
        XCTAssertEqual(try DialogueMotion.parse(#"{"reply":"好，慢慢抬起来。","decision":"accept","action":"raise_right_hand"}"#,actions:["raise_right_hand"]).action,"raise_right_hand")
        let refused=try DialogueMotion.parse(#"{"reply":"这次不想动。","decision":"refuse","action":"procedural","motion":{"duration":2,"poses":[{"time":0,"head":[0,0,0]},{"time":2,"head":[20,0,0]}]}}"#,actions:["procedural"])
        XCTAssertNil(refused.action);XCTAssertNil(refused.motion)
    }
    func testAllGesturePresetsAreBoundedAndReturnToRest() throws {
        XCTAssertEqual(Set(BodyGesture.ids).count,11)
        for id in BodyGesture.ids {
            let plan=try XCTUnwrap(BodyGesture.plan(id));try plan.validate()
            let last=try XCTUnwrap(plan.poses.last)
            for values in [last.head,last.torso,last.leftHand,last.rightHand] {if let values=values {XCTAssertEqual(values,[0,0,0],id)}}
        }
        XCTAssertNil(BodyGesture.plan("invented"))
    }
    func testTouchEvidencePreservesUncertaintyAndGesture() {
        let touch=SnowbreakTouchEvent(label:"身体（具体部位未确认）",gesture:"stroke",confidence:0,source:"unknown-skinned-triangle")
        XCTAssertTrue(touch.message.contains("抚摸"));XCTAssertTrue(touch.message.contains("置信度0%"));XCTAssertTrue(touch.message.contains("不能自行猜测"))
    }
    @MainActor func testRefusalPersistsWithoutPublishingMovement() async throws {
        let path=FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString);defer{try? FileManager.default.removeItem(at:path)}
        try FileManager.default.createDirectory(at:path,withIntermediateDirectories:true)
        var archive=LocalArchive();archive.settings.endpoint="https://example.invalid/v1";archive.settings.model="fixture"
        try JSONEncoder().encode(archive).write(to:path.appendingPathComponent("archive-v1.json"))
        let store=LocalStore(directory:path,readKey:{""},replyProvider:{_,_,history,_,actions in
            XCTAssertEqual(history.last?.content,"恩雅，你把右手抬起来")
            return try DialogueMotion.parse(#"{"reply":"我不想抬起来。","decision":"refuse","action":"raise_right_hand"}"#,actions:actions)
        })
        store.send("恩雅，你把右手抬起来",actions:["raise_right_hand"])
        for _ in 0..<200 {if !store.busy {break};try await Task.sleep(nanoseconds:10_000_000)}
        XCTAssertEqual(store.archive.messages.last?.content,"我不想抬起来。");XCTAssertNil(store.dialogueAction)
    }
}
