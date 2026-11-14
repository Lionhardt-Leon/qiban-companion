import XCTest
import OnnxRuntimeBindings
@testable import QibanCompanion

final class RuntimeStabilityTests:XCTestCase {
    func testLinkedFrontendContainsNativeMemorySafetyFixes() {
        XCTAssertGreaterThanOrEqual(OfflineVoiceEngine.frontendSafetyRevision,3)
    }
    func testAcceptedLegSemanticsRespectCapabilitiesAndRefusal()throws {
        let actions=["raise_left_leg","raise_right_leg","spread_legs","lower_legs"]
        for (phrase,id) in [("把左腿抬起来","raise_left_leg"),("抬起右腿","raise_right_leg"),("分开双腿","spread_legs"),("放下腿","lower_legs")] {
            let raw=try JSONSerialization.data(withJSONObject:["reply":"好，我会调整姿势。","decision":"accept","action":phrase])
            XCTAssertEqual(try DialogueMotion.parse(String(decoding:raw,as:UTF8.self),actions:actions).action,id)
        }
        XCTAssertEqual(try DialogueMotion.parse(#"{"reply":"好。","decision":"accept","intent":"lift_left_leg"}"#,actions:actions).action,"raise_left_leg")
        XCTAssertNil(try DialogueMotion.parse(#"{"reply":"不想抬。","decision":"refuse","action":"raise_left_leg"}"#,actions:actions).action)
        XCTAssertNil(try DialogueMotion.parse(#"{"reply":"无法做到。","decision":"accept","action":"raise_left_leg"}"#,actions:[]).action)
        XCTAssertNil(try DialogueMotion.parse("她抬起了左腿。",actions:actions).action)
    }
    func testTensorStageSnapshotOwnsMemoryAcrossPoolAndSourceMutation()throws {
        let snapshot=try autoreleasepool {()->VoiceTensorSnapshot in
            var values:[Float]=[1,2,3,4]
            let backing=values.withUnsafeBufferPointer{NSMutableData(data:Data(buffer:$0))}
            let value=try ORTValue(tensorData:backing,elementType:.float,shape:[2,2])
            let copy=try VoiceTensorSnapshot(value)
            backing.resetBytes(in:NSRange(location:0,length:backing.length));values=[]
            return copy
        }
        XCTAssertEqual(snapshot.shape,[2,2]);XCTAssertEqual(snapshot.data.count,16)
        XCTAssertEqual(snapshot.data.withUnsafeBytes{$0.loadUnaligned(as:Float.self)},1)
        let restored=try ORTValue(tensorData:NSMutableData(data:snapshot.data),elementType:.float,shape:[2,2])
        XCTAssertEqual(try restored.tensorTypeAndShapeInfo().shape.map(\.intValue),[2,2])
    }
    func testAutomaticVoicePolicyAndFiniteAudioDoNotCreateUnsafeDefaults()throws {
        XCTAssertFalse(SpeechPreferences().acceleration.accelerates("bert"));XCTAssertFalse(SpeechPreferences().acceleration.accelerates("sovits"))
        XCTAssertTrue(VoiceComputeMode.neural.accelerates("bert"));XCTAssertTrue(VoiceComputeMode.gpu.accelerates("sovits"))
        XCTAssertFalse(VoiceComputeMode.gpu.accelerates("step"))
        XCTAssertEqual(SpeechWAV.encode([.nan,.infinity,-.infinity,0]).count,52)
        XCTAssertTrue(SpeechPreferences.sentences(String(repeating:"陪伴",count:200)).allSatisfy{$0.count<=32})
    }
}
