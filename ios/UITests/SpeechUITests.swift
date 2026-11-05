import XCTest

final class SpeechUITests:XCTestCase {
    func testGlobalSpeechSettingsSaveAndReopenWithoutVoicePackage() {
        continueAfterFailure=false
        let app=XCUIApplication();app.launchArguments=["--ui-character-import-fixture","--ui-dialogue-fixture"];app.launch()
        XCTAssertTrue(app.buttons["设置"].waitForExistence(timeout:15));app.buttons["设置"].tap()
        let entry=app.buttons["离线语音与中／日配音"]
        for _ in 0..<5 {if entry.isHittable {break};app.swipeUp()}
        XCTAssertTrue(entry.exists);entry.tap()
        XCTAssertTrue(app.buttons["importVoicePackage"].waitForExistence(timeout:10))
        let toggle=app.switches["speechAutoPlay"];XCTAssertTrue(toggle.exists)
        for _ in 0..<2 {
            if toggle.value as? String == "1" {break}
            toggle.coordinate(withNormalizedOffset:CGVector(dx:0.85,dy:0.5)).tap()
            let enabled=XCTNSPredicateExpectation(predicate:NSPredicate(format:"value == %@","1"),object:toggle)
            if XCTWaiter.wait(for:[enabled],timeout:3) == .completed {break}
        }
        XCTAssertEqual(toggle.value as? String,"1","Switch frame: \(toggle.frame)")
        app.buttons["speechVoicePicker"].tap();app.buttons["系统日语（非训练音色）"].tap()
        XCTAssertEqual(toggle.value as? String,"1")
        let save=app.buttons["saveSpeechSettings"]
        for _ in 0..<3 {if save.isHittable {break};app.swipeUp()}
        save.tap();XCTAssertTrue(app.staticTexts["speechSettingsNotice"].waitForExistence(timeout:5))
        let shot=XCTAttachment(screenshot:app.screenshot());shot.name="Offline-speech-settings";shot.lifetime = .keepAlways;add(shot)
        app.buttons["完成"].tap();app.buttons["设置"].tap()
        for _ in 0..<5 {if entry.isHittable {break};app.swipeUp()};entry.tap()
        XCTAssertTrue(app.switches["speechAutoPlay"].waitForExistence(timeout:10));XCTAssertEqual(app.switches["speechAutoPlay"].value as? String,"1")
        XCTAssertTrue(app.buttons["speechVoicePicker"].label.contains("系统日语"))
    }
}
