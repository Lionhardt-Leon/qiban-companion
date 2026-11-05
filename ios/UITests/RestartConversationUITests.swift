import XCTest

final class RestartConversationUITests:XCTestCase {
    func testCancelPreservesChatAndConfirmStartsEmpty() {
        continueAfterFailure = false
        let app = XCUIApplication();app.launchArguments += ["--ui-character-import-fixture","--ui-dialogue-fixture"];app.launch()
        let input = app.descendants(matching:.any)["homeMessageInput"]
        XCTAssertTrue(input.waitForExistence(timeout:15));input.tap();input.typeText("旧的上下文");app.buttons["发送消息"].tap()
        XCTAssertTrue(app.buttons["latestCompanionReply"].waitForExistence(timeout:10))
        app.buttons["设置"].tap();app.buttons["restartConversation"].tap();app.buttons["取消"].tap();app.buttons["返回陪伴"].tap()
        XCTAssertTrue(app.buttons["latestCompanionReply"].waitForExistence(timeout:10))
        app.buttons["设置"].tap();app.buttons["restartConversation"].tap()
        XCTAssertTrue(app.buttons["清除聊天和记忆"].waitForExistence(timeout:5))
        let shot = XCTAttachment(screenshot:app.screenshot());shot.name = "Restart-confirmation";shot.lifetime = .keepAlways;add(shot)
        app.buttons["清除聊天和记忆"].tap();app.buttons["返回陪伴"].tap()
        XCTAssertTrue(input.waitForExistence(timeout:10));XCTAssertFalse(app.buttons["latestCompanionReply"].exists)
    }
}
