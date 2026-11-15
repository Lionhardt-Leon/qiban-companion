import XCTest

final class ServiceRoutingUITests:XCTestCase {
    func testIndependentServiceSaveReopensAndSurvivesMainSettingsSave() {
        continueAfterFailure=false
        let app=XCUIApplication();app.launchArguments=["--ui-character-import-fixture","--ui-dialogue-fixture"];app.launch()
        XCTAssertTrue(app.buttons["设置"].waitForExistence(timeout:15));app.buttons["设置"].tap()
        let api=app.buttons["模型与自定义 API"]
        for _ in 0..<5 {if api.isHittable{break};app.swipeUp()};api.tap()
        let services=app.buttons["independentServices"]
        for _ in 0..<4 {if services.isHittable{break};app.swipeUp()};XCTAssertTrue(services.exists);services.tap()
        XCTAssertTrue(app.buttons["service-vision"].waitForExistence(timeout:10));app.buttons["service-vision"].tap()
        XCTAssertTrue(app.buttons["serviceDeepSeekPreset"].waitForExistence(timeout:5));app.buttons["serviceDeepSeekPreset"].tap()
        let enabled=app.switches["serviceEnabled"];if enabled.value as? String != "1" {enabled.tap()}
        let save=app.buttons["saveService"];for _ in 0..<4 {if save.isHittable{break};app.swipeUp()};save.tap()
        XCTAssertTrue(app.staticTexts["serviceNotice"].waitForExistence(timeout:5));XCTAssertTrue(app.staticTexts["serviceNotice"].label.contains("已保存"))
        let shot=XCTAttachment(screenshot:app.screenshot());shot.name="Independent-vision-service-saved";shot.lifetime = .keepAlways;add(shot)
        app.navigationBars.buttons.element(boundBy:0).tap();app.navigationBars.buttons.element(boundBy:0).tap()
        let mainSave=app.buttons["保存设置"];for _ in 0..<4 {if mainSave.isHittable{break};app.swipeUp()};mainSave.tap()
        XCTAssertTrue(app.buttons["已保存"].waitForExistence(timeout:5))
        for _ in 0..<4 {if services.isHittable{break};app.swipeDown()};services.tap();app.buttons["service-vision"].tap()
        XCTAssertTrue(app.switches["serviceEnabled"].waitForExistence(timeout:5));XCTAssertEqual(app.switches["serviceEnabled"].value as? String,"1")
        XCTAssertTrue((app.textFields["serviceEndpoint"].value as? String ?? "").contains("api.deepseek.com"))
        XCTAssertEqual(app.textFields["serviceModel"].value as? String,"deepseek-flash")
        app.navigationBars.buttons.element(boundBy:0).tap()
        XCTAssertTrue(app.buttons["service-tts"].exists);XCTAssertTrue(app.buttons["service-asr"].exists)
        let overview=XCTAttachment(screenshot:app.screenshot());overview.name="Independent-service-overview";overview.lifetime = .keepAlways;add(overview)
    }
}
