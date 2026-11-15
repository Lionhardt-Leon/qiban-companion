import XCTest

final class ServiceRoutingUITests:XCTestCase {
    private func visible(_ element:XCUIElement,in app:XCUIApplication)->Bool {
        guard element.exists,element.isHittable else{return false}
        let frame=element.frame,viewport=app.frame.insetBy(dx:8,dy:85)
        return frame.width>0 && frame.height>0 && viewport.contains(CGPoint(x:frame.midX,y:frame.midY))
    }
    private func reveal(_ element:XCUIElement,in app:XCUIApplication,up:Bool=true) {
        // SwiftUI can advertise an offscreen row as hittable while its cover is
        // replacing the previous page. Wait for layout, then scroll in content.
        for _ in 0..<7 {
            let ready=XCTNSPredicateExpectation(predicate:NSPredicate{_,_ in self.visible(element,in:app)},object:element)
            if XCTWaiter.wait(for:[ready],timeout:1) == .completed{return}
            let start=app.coordinate(withNormalizedOffset:CGVector(dx:0.5,dy:up ? 0.73:0.35))
            let end=app.coordinate(withNormalizedOffset:CGVector(dx:0.5,dy:up ? 0.35:0.73))
            start.press(forDuration:0.05,thenDragTo:end)
        }
        XCTAssertTrue(visible(element,in:app),"Expected a visible control: \(element)")
    }
    func testIndependentServiceSaveReopensAndSurvivesMainSettingsSave() {
        continueAfterFailure=false
        let app=XCUIApplication();app.launchArguments=["--ui-character-import-fixture","--ui-dialogue-fixture"];app.launch()
        XCTAssertTrue(app.buttons["设置"].waitForExistence(timeout:15));app.buttons["设置"].tap()
        let api=app.buttons["模型与自定义 API"]
        reveal(api,in:app);api.tap()
        let services=app.buttons["independentServices"]
        XCTAssertTrue(services.waitForExistence(timeout:10));reveal(services,in:app);services.tap()
        XCTAssertTrue(app.buttons["service-vision"].waitForExistence(timeout:10));app.buttons["service-vision"].tap()
        XCTAssertTrue(app.buttons["serviceDeepSeekPreset"].waitForExistence(timeout:5));app.buttons["serviceDeepSeekPreset"].tap()
        let enabled=app.switches["serviceEnabled"];if enabled.value as? String != "1" {enabled.tap()}
        let save=app.buttons["saveService"];reveal(save,in:app);save.tap()
        XCTAssertTrue(app.staticTexts["serviceNotice"].waitForExistence(timeout:5));XCTAssertTrue(app.staticTexts["serviceNotice"].label.contains("已保存"))
        let shot=XCTAttachment(screenshot:app.screenshot());shot.name="Independent-vision-service-saved";shot.lifetime = .keepAlways;add(shot)
        app.navigationBars.buttons.element(boundBy:0).tap();app.navigationBars.buttons.element(boundBy:0).tap()
        let mainSave=app.buttons["保存设置"];reveal(mainSave,in:app);mainSave.tap()
        XCTAssertTrue(app.buttons["已保存"].waitForExistence(timeout:5))
        reveal(services,in:app,up:false);services.tap();XCTAssertTrue(app.buttons["service-vision"].waitForExistence(timeout:5));app.buttons["service-vision"].tap()
        XCTAssertTrue(app.switches["serviceEnabled"].waitForExistence(timeout:5));XCTAssertEqual(app.switches["serviceEnabled"].value as? String,"1")
        XCTAssertTrue((app.textFields["serviceEndpoint"].value as? String ?? "").contains("api.deepseek.com"))
        XCTAssertEqual(app.textFields["serviceModel"].value as? String,"deepseek-flash")
        app.navigationBars.buttons.element(boundBy:0).tap()
        XCTAssertTrue(app.buttons["service-tts"].exists);XCTAssertTrue(app.buttons["service-asr"].exists)
        let overview=XCTAttachment(screenshot:app.screenshot());overview.name="Independent-service-overview";overview.lifetime = .keepAlways;add(overview)
    }
}
