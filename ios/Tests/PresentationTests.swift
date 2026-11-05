import XCTest
import simd
@testable import QibanCompanion
final class PresentationTests:XCTestCase {
    func testPresentationValidationAndCenteredDisplayTransform() {
        let neutral = ScenePresentation()
        let center = SIMD3<Float>(0,1,0)
        XCTAssertEqual(neutral.transform(base:matrix_identity_float4x4,center:center,height:2),matrix_identity_float4x4)
        var edit = neutral;edit.scale=2;edit.yaw=90;edit.stretchX=1.2
        let transformed = edit.transform(base:matrix_identity_float4x4,center:center,height:2)*SIMD4(center,1)
        XCTAssertLessThan(simd_length(transformed-SIMD4(center,1)),0.0001,"Display transform should pivot around the model center")
        edit.scale=100;edit.pitch=120;edit.stretchY=0
        XCTAssertEqual(edit.validated().scale,4);XCTAssertEqual(edit.validated().pitch,65);XCTAssertEqual(edit.validated().stretchY,0.65)
        edit.x = .nan;XCTAssertEqual(edit.validated(),neutral)
    }
    func testEnyaLearnedActionsAreCapabilityFiltered() throws {
        let ids=["enya_yuki_hello","enya_yuki_Yes","enya_yuki_No"]
        XCTAssertEqual(DialogueMotion.allowed(ids),ids)
        XCTAssertEqual(try DialogueMotion.parse(#"{"reply":"你好","action":"enya_yuki_hello"}"#,actions:ids).action,"enya_yuki_hello")
        XCTAssertNil(try DialogueMotion.parse(#"{"reply":"好","action":"enya_yuki_hello"}"#,actions:["hello"]).action)
    }
    func testExtendedEnyaActionsCannotRunOutsideTheSelectedCharacterCapability() throws {
        let ids=["enya_yuki_Peace_hand","enya_yuki_dance_90bpm","enya_yuki_dance_120bpm","enya_yuki_f_vibe_dance_60_bpm_002"]
        XCTAssertEqual(DialogueMotion.allowed(ids),ids)
        for id in ids {
            let json="{\"reply\":\"好呀\",\"action\":\"\(id)\"}"
            XCTAssertEqual(try DialogueMotion.parse(json,actions:ids).action,id)
            XCTAssertNil(try DialogueMotion.parse(json,actions:["hello"]).action)
            XCTAssertNil(try DialogueMotion.parse(json,actions:["snowbreak_head"]).action)
        }
    }
    func testHomeOriginalActionsAreCapabilityScoped() throws {
        let ids=["snowbreak_home_login","snowbreak_home_invite","snowbreak_home_shy","snowbreak_home_check","snowbreak_home_kiss"]
        XCTAssertEqual(DialogueMotion.allowed(ids),ids)
        for id in ids {
            let json="{\"reply\":\"好\",\"action\":\"\(id)\"}"
            XCTAssertEqual(try DialogueMotion.parse(json,actions:ids).action,id)
            XCTAssertNil(try DialogueMotion.parse(json,actions:["snowbreak_head"]).action)
        }
    }

}
