import XCTest

final class CharacterImportUITests: XCTestCase {
    func testLoadFromAppFolderThroughVisibleUI() {
        continueAfterFailure = false
        let app = XCUIApplication()
        app.launchArguments += ["--ui-character-import-fixture", "--ui-dialogue-fixture"]
        app.launch()
        XCTAssertTrue(app.descendants(matching: .any)["homeMessageInput"].waitForExistence(timeout: 10))
        XCTAssertEqual(app.tabBars.count, 0)
        app.buttons["设置"].tap()
        XCTAssertTrue(app.switches["showBackground"].waitForExistence(timeout: 10))
        let bodySettings = app.buttons["身体、触碰与光照"]
        for _ in 0..<3 {
            if bodySettings.isHittable,bodySettings.frame.midY < app.frame.maxY-70 {break}
            app.swipeUp()
        }
        bodySettings.tap()
        XCTAssertTrue(app.switches["bodyBreathing"].waitForExistence(timeout:10))
        capture("Body-and-lighting-settings")
        app.buttons["完成"].tap()
        app.buttons["设置"].tap()
        XCTAssertFalse(app.staticTexts["订阅"].exists)
        capture("Settings")
        app.buttons["manageCharacter"].tap()
        let local = app.buttons["App 文件夹"]
        XCTAssertTrue(local.waitForExistence(timeout: 10))
        local.tap()
        let file = app.buttons["UITest-Triangle.json"]
        XCTAssertTrue(file.waitForExistence(timeout: 10))
        file.tap()
        XCTAssertTrue(app.staticTexts["导入完成：UI import triangle"].waitForExistence(timeout: 20))
        XCTAssertTrue(app.staticTexts["UI import triangle"].exists)
        app.buttons["完成"].tap()
        XCTAssertTrue(app.descendants(matching: .any)["homeMessageInput"].waitForExistence(timeout: 10))
        XCTAssertTrue(app.otherElements["companionScene"].waitForExistence(timeout: 20))
        assertBackgroundVisible(app.screenshot().image)
        capture("Home-synthetic-fixture")
        let actions = app.buttons["characterActions"]
        XCTAssertTrue(actions.isEnabled)
        actions.tap()
        app.buttons["挥手打招呼"].tap()
        let active = app.buttons["activeCharacterAction"]
        XCTAssertTrue(active.waitForExistence(timeout: 5))
        active.tap()
        XCTAssertTrue(NSPredicate(format: "exists == false").evaluate(with: active) ||
            XCTWaiter.wait(for: [XCTNSPredicateExpectation(predicate: NSPredicate(format: "exists == false"), object: active)], timeout: 5) == .completed)
        actions.tap()
        app.buttons["自由动作示范：抬手"].tap()
        XCTAssertTrue(active.waitForExistence(timeout:3))
        XCTAssertTrue(active.label.contains("自由骨骼动作"))
        // The short demo may finish while XCTest resolves the transient status button.
        // Use the persistent stop command; transient stop-button behavior is covered above.
        actions.tap()
        app.buttons["停止动作"].tap()
        XCTAssertEqual(XCTWaiter.wait(for:[XCTNSPredicateExpectation(predicate:NSPredicate(format:"exists == false"),object:active)],timeout:5),.completed)
        // Fixture head + local forehead offset projected through the orthographic stage camera.
        let surface = app.otherElements["companionScene"]
        surface.coordinate(withNormalizedOffset:CGVector(dx:0.5,dy:0.285)).tap()
        // Match identifier and content in one snapshot: this receipt expires after 3s.
        let touchStatus = app.staticTexts.matching(NSPredicate(format:"identifier == %@ AND label CONTAINS %@","characterTouchStatus","额头")).firstMatch
        XCTAssertTrue(touchStatus.waitForExistence(timeout:5))
        XCTAssertTrue(app.buttons["latestCompanionReply"].waitForExistence(timeout:5))
        XCTAssertTrue(active.waitForExistence(timeout:5))
        active.tap()
        XCTAssertEqual(XCTWaiter.wait(for:[XCTNSPredicateExpectation(predicate:NSPredicate(format:"exists == false"),object:active)],timeout:5),.completed)
        let input = app.descendants(matching: .any)["homeMessageInput"]
        input.tap(); input.typeText("I am back")
        app.buttons["发送消息"].tap()
        let reply = app.buttons["latestCompanionReply"]
        let hasReply = reply.waitForExistence(timeout: 10)
        if !hasReply { print(app.debugDescription) }
        XCTAssertTrue(hasReply)
        XCTAssertEqual(reply.label, "欢迎回来。")
        XCTAssertTrue(active.waitForExistence(timeout: 5))
        XCTAssertTrue(active.label.contains("挥手打招呼"))
        XCTAssertFalse(app.staticTexts["hello"].exists)
        active.tap()
        XCTAssertEqual(XCTWaiter.wait(for: [XCTNSPredicateExpectation(predicate: NSPredicate(format: "exists == false"), object: active)], timeout: 5), .completed)
        input.tap(); input.typeText("Back again")
        app.buttons["发送消息"].tap()
        XCTAssertTrue(active.waitForExistence(timeout: 10), "A second reply with the same action must play again")
        app.terminate()
        app.launch()
        app.buttons["设置"].tap()
        app.buttons["manageCharacter"].tap()
        XCTAssertTrue(app.staticTexts["导入完成：UI import triangle"].waitForExistence(timeout: 20))
    }

    private func capture(_ name: String) {
        let attachment = XCTAttachment(screenshot: XCUIApplication().screenshot())
        attachment.name = name
        attachment.lifetime = .keepAlways
        add(attachment)
    }

    private func assertBackgroundVisible(_ image: UIImage) {
        guard let cg = image.cgImage,
              let pixel = cg.cropping(to: CGRect(x: 10, y: cg.height * 2 / 5, width: 1, height: 1)) else {
            return XCTFail("Missing screenshot pixel")
        }
        var rgba = [UInt8](repeating: 0, count: 4)
        let context = CGContext(data: &rgba, width: 1, height: 1, bitsPerComponent: 8, bytesPerRow: 4,
                                space: CGColorSpaceCreateDeviceRGB(), bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue)!
        context.draw(pixel, in: CGRect(x: 0, y: 0, width: 1, height: 1))
        for (actual, expected) in zip(rgba.prefix(3), [40, 90, 110]) {
            XCTAssertLessThan(abs(Int(actual) - expected), 10, "Background must remain visible behind the character")
        }
    }
}
