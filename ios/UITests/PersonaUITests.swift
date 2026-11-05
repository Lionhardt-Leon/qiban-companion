import XCTest

final class PersonaUITests:XCTestCase {
    func testEditApplyAndReopenPersonaThroughSettings() {
        continueAfterFailure = false
        let app = XCUIApplication()
        app.launchArguments += ["--ui-character-import-fixture","--ui-dialogue-fixture"]
        app.launch()
        XCTAssertTrue(app.buttons["设置"].waitForExistence(timeout:15));app.buttons["设置"].tap()
        let entry = app.buttons["人设与陪伴"]
        for _ in 0..<4 {if entry.isHittable{break};app.swipeUp()}
        XCTAssertTrue(entry.waitForExistence(timeout:5));entry.tap()
        let name = app.textFields["personaNameInput"]
        XCTAssertTrue(name.waitForExistence(timeout:10));name.tap();name.typeText("测试")
        app.buttons["savePersona"].tap()
        XCTAssertTrue(app.staticTexts["personaNotice"].waitForExistence(timeout:5))
        XCTAssertTrue(app.staticTexts["personaNotice"].label.contains("已保存"))
        let attachment = XCTAttachment(screenshot:app.screenshot());attachment.name = "Persona-editor";attachment.lifetime = .keepAlways;add(attachment)
        app.buttons["完成"].firstMatch.tap()
        XCTAssertTrue(app.buttons["设置"].waitForExistence(timeout:10));app.buttons["设置"].tap()
        for _ in 0..<4 {if entry.isHittable{break};app.swipeUp()}
        entry.tap();XCTAssertTrue(name.waitForExistence(timeout:10))
        XCTAssertTrue((name.value as? String)?.contains("测试") == true)
        app.buttons["身体能力"].tap()
        let body = XCTAttachment(screenshot:app.screenshot());body.name = "Persona-body-capabilities";body.lifetime = .keepAlways;add(body)
    }
}
