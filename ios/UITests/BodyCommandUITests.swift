import XCTest

final class BodyCommandUITests:XCTestCase {
    func testExplicitHandAndTurnCommandsReachActualNativePoseAndPhotoPickerOpens() {
        continueAfterFailure = false
        let app = XCUIApplication();app.launchArguments += ["--ui-character-import-fixture","--ui-dialogue-fixture"];app.launch()
        XCTAssertTrue(app.buttons["设置"].waitForExistence(timeout:15));app.buttons["设置"].tap();app.buttons["manageCharacter"].tap()
        XCTAssertTrue(app.buttons["App 文件夹"].waitForExistence(timeout:10));app.buttons["App 文件夹"].tap()
        app.buttons["UITest-Triangle.json"].tap();XCTAssertTrue(app.staticTexts["导入完成：UI import triangle"].waitForExistence(timeout:20));app.buttons["完成"].tap()
        let input = app.descendants(matching:.any)["homeMessageInput"]
        XCTAssertTrue(input.waitForExistence(timeout:10));input.tap();input.typeText("拒绝抬手");app.buttons["发送消息"].tap()
        XCTAssertTrue(app.buttons["latestCompanionReply"].waitForExistence(timeout:10));XCTAssertTrue(app.buttons["latestCompanionReply"].label.contains("我不想抬起来"))
        app.buttons["characterActions"].tap();app.buttons["查看当前身体状态"].tap()
        XCTAssertTrue(app.staticTexts.matching(NSPredicate(format:"label CONTAINS %@","未测到举手")).firstMatch.waitForExistence(timeout:8));capture(app,"AI拒绝不执行动作");app.buttons["关闭"].tap()
        XCTAssertTrue(input.waitForExistence(timeout:10));input.tap();input.typeText("举起手");app.buttons["发送消息"].tap()
        XCTAssertTrue(app.buttons["latestCompanionReply"].waitForExistence(timeout:10))
        app.buttons["characterActions"].tap();app.buttons["查看当前身体状态"].tap()
        XCTAssertTrue(app.staticTexts.matching(NSPredicate(format:"label CONTAINS %@","右手实际抬起")).firstMatch.waitForExistence(timeout:8));capture(app,"实际举手与身体实况");app.buttons["关闭"].tap()
        input.tap();input.typeText("转过身");app.buttons["发送消息"].tap()
        app.buttons["characterActions"].tap();app.buttons["查看当前身体状态"].tap()
        XCTAssertTrue(app.staticTexts.matching(NSPredicate(format:"label CONTAINS %@","背向镜头")).firstMatch.waitForExistence(timeout:8));capture(app,"实际转身与身体实况");app.buttons["关闭"].tap()
        app.buttons["图片与自身形象"].tap();app.buttons["从相册发送图片"].tap()
        let english = app.buttons["Cancel"],chinese = app.buttons["取消"]
        XCTAssertTrue(english.waitForExistence(timeout:10) || chinese.waitForExistence(timeout:3));(english.exists ? english:chinese).tap()
        XCTAssertTrue(input.waitForExistence(timeout:10));XCTAssertFalse(app.otherElements["pendingChatImage"].exists)
    }
    private func capture(_ app:XCUIApplication,_ name:String) {let shot = XCTAttachment(screenshot:app.screenshot());shot.name = name;shot.lifetime = .keepAlways;add(shot)}
}
