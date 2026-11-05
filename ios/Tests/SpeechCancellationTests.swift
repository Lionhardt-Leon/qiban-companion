import XCTest
@testable import QibanCompanion

final class SpeechCancellationTests:XCTestCase {
    func testCancelWithBorrowedSlotsCanBeDestroyedRepeatedly() throws {
        for _ in 0..<1000 {
            let queue=SpeechBackpressure();try queue.acquire();try queue.acquire()
            queue.release();queue.cancel();XCTAssertThrowsError(try queue.acquire())
        }
    }
    func testCancelWakesBlockedProducerAndOldQueueCannotRestart() throws {
        let queue=SpeechBackpressure(capacity:1);try queue.acquire()
        let exited=expectation(description:"blocked synthesis cancelled")
        DispatchQueue.global().async {
            do {try queue.acquire();XCTFail("Cancelled queue must not issue a slot")}catch {XCTAssertTrue(error is CancellationError)}
            exited.fulfill()
        }
        queue.cancel();wait(for:[exited],timeout:2);queue.release();XCTAssertThrowsError(try queue.acquire())
        let replacement=SpeechBackpressure();XCTAssertNoThrow(try replacement.acquire());replacement.cancel()
    }
    func testShyIntentComesFromAcceptedAIEnvelopeOnly() throws {
        let a=try DialogueMotion.parse(#"{"reply":"别笑我呀。","decision":"accept","intent":"shy","action":"none"}"#,actions:["snowbreak_home_shy","gesture_shy"])
        XCTAssertEqual(a.action,"snowbreak_home_shy")
        XCTAssertEqual(try DialogueMotion.parse(#"{"reply":"好嘛。","decision":"accept","intent":"shy"}"#,actions:["gesture_shy"]).action,"gesture_shy")
        XCTAssertNil(try DialogueMotion.parse(#"{"reply":"不想害羞。","decision":"refuse","intent":"shy","action":"gesture_shy"}"#,actions:["gesture_shy"]).action)
        XCTAssertNil(try DialogueMotion.parse("恩雅羞一下",actions:["gesture_shy"]).action)
    }
}
