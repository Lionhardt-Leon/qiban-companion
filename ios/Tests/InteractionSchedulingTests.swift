import XCTest
@testable import QibanCompanion

final class InteractionSchedulingTests:XCTestCase {
    func testTouchFeedbackWaitsForSpeechAndEditingThenDrainsOnce(){
        var queue=TouchReplyQueue();queue.append("摸头",now:10);queue.append("触碰手部",now:11)
        XCTAssertTrue(queue.drain(chatBusy:true,speechBusy:false,editing:false,now:12).isEmpty)
        XCTAssertTrue(queue.drain(chatBusy:false,speechBusy:true,editing:false,now:13).isEmpty)
        XCTAssertTrue(queue.drain(chatBusy:false,speechBusy:false,editing:true,now:14).isEmpty)
        XCTAssertEqual(queue.count,2)
        XCTAssertEqual(queue.drain(chatBusy:false,speechBusy:false,editing:false,now:15),["摸头","触碰手部"])
        XCTAssertTrue(queue.drain(chatBusy:false,speechBusy:false,editing:false,now:16).isEmpty)
    }
    func testOldTouchesExpireAndStopClearsPendingFeedback(){
        var queue=TouchReplyQueue();for i in 0..<12 {queue.append("touch\(i)",now:Double(i))}
        XCTAssertEqual(queue.count,8);XCTAssertEqual(queue.drain(chatBusy:false,speechBusy:false,editing:false,now:12).first,"touch4")
        queue.append("old",now:20);XCTAssertTrue(queue.drain(chatBusy:false,speechBusy:false,editing:false,now:51).isEmpty)
        queue.append("cancelled",now:52);queue.removeAll();XCTAssertTrue(queue.drain(chatBusy:false,speechBusy:false,editing:false,now:53).isEmpty)
    }
    func testSpeechCanStartBeforeOrAfterTheActionCallback(){
        let message=UUID(),pending=WaitingBodyAction(event:.init(action:"gesture_nod"),messageID:message,conversationID:UUID(),revision:1)
        XCTAssertTrue(pending.needsSpeechStart(speechBusy:true,started:nil))
        XCTAssertTrue(pending.needsSpeechStart(speechBusy:true,started:SpeechPlaybackStart(messageID:UUID())))
        XCTAssertFalse(pending.needsSpeechStart(speechBusy:true,started:SpeechPlaybackStart(messageID:message)))
        XCTAssertFalse(pending.needsSpeechStart(speechBusy:false,started:nil))
    }
    @MainActor func testModelEditingInvalidatesAnOlderBodyDecision(){
        let stage=SnowbreakStage(),revision=stage.interactionRevision,message=UUID(),conversation=UUID()
        let pending=WaitingBodyAction(event:.init(action:"gesture_shy"),messageID:message,conversationID:conversation,revision:revision)
        stage.editModel();XCTAssertTrue(stage.isEditing);XCTAssertFalse(pending.matches(messageID:message,conversationID:conversation,revision:stage.interactionRevision))
    }
}
