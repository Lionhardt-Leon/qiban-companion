import XCTest

final class RestartConversationUITests:XCTestCase {
    func testCancelPreservesChatAndNewConversationKeepsHistory() {
        continueAfterFailure = false
        let app = XCUIApplication();app.launchArguments += ["--ui-character-import-fixture","--ui-dialogue-fixture"];app.launch()
        let input = app.descendants(matching:.any)["homeMessageInput"]
        XCTAssertTrue(input.waitForExistence(timeout:15));input.tap();input.typeText("旧的上下文");app.buttons["发送消息"].tap()
        XCTAssertTrue(app.buttons["latestCompanionReply"].waitForExistence(timeout:10))
        app.buttons["设置"].tap();app.buttons["restartConversation"].tap();app.buttons["取消"].tap();app.buttons["返回陪伴"].tap()
        XCTAssertTrue(app.buttons["latestCompanionReply"].waitForExistence(timeout:10))
        app.buttons["设置"].tap();app.buttons["restartConversation"].tap()
        XCTAssertTrue(app.buttons["新建并保留当前对话"].waitForExistence(timeout:5))
        let shot = XCTAttachment(screenshot:app.screenshot());shot.name = "Restart-confirmation";shot.lifetime = .keepAlways;add(shot)
        app.buttons["新建并保留当前对话"].tap();app.buttons["返回陪伴"].tap()
        XCTAssertTrue(input.waitForExistence(timeout:10));XCTAssertFalse(app.buttons["latestCompanionReply"].exists)
        app.buttons["设置"].tap()
        app.buttons["历史对话／切换对话"].tap()
        let oldSession = app.buttons.matching(NSPredicate(format:"label CONTAINS %@ OR label CONTAINS %@", "旧的上下文", "原有对话")).firstMatch
        XCTAssertTrue(oldSession.waitForExistence(timeout:10))
        oldSession.tap()
        XCTAssertTrue(app.buttons["latestCompanionReply"].waitForExistence(timeout:10))
    }
}
