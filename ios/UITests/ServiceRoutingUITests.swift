import XCTest

final class ServiceRoutingUITests:XCTestCase {
    private var runningApp:XCUIApplication?
    override func tearDown() {
        if let app=runningApp {
            let shot=XCTAttachment(screenshot:app.screenshot());shot.name="Independent-service-final-screen";shot.lifetime = .keepAlways;add(shot)
            let hierarchy=XCTAttachment(string:app.debugDescription);hierarchy.name="Independent-service-synthetic-hierarchy";hierarchy.lifetime = .keepAlways;add(hierarchy)
        }
        super.tearDown()
    }
    private func visible(_ element:XCUIElement,in app:XCUIApplication)->Bool {
        guard element.exists,element.isHittable else{return false}
        let frame=element.frame,viewport=app.windows.firstMatch.frame.insetBy(dx:8,dy:85)
        return frame.width>0 && frame.height>0 && viewport.contains(CGPoint(x:frame.midX,y:frame.midY))
    }
    private func reveal(_ element:XCUIElement,in app:XCUIApplication,up:Bool=true) {
        // Use the presented window, whose bounds exclude offscreen SwiftUI
        // content. Querying the application frame can include that content.
        let window=app.windows.firstMatch
        for _ in 0..<7 {
            if visible(element,in:app){return}
            let direction:Bool
            if element.exists {print("Service UI control \(element.identifier): \(element.frame); window: \(window.frame)");direction=element.frame.midY<window.frame.minY+85 ? false:up}
            else {direction=up}
            if direction {window.swipeUp()}else{window.swipeDown()}
        }
        XCTAssertTrue(visible(element,in:app),"Expected a visible control: \(element)")
    }
    func testIndependentServiceSaveReopensAndSurvivesMainSettingsSave() {
        continueAfterFailure=false
        let app=XCUIApplication();runningApp=app;app.launchArguments=["--ui-character-import-fixture","--ui-dialogue-fixture"];app.launch()
        XCTAssertTrue(app.buttons["设置"].waitForExistence(timeout:15));app.buttons["设置"].tap()
        let api=app.buttons["模型与自定义 API"]
        for _ in 0..<5 {if api.isHittable{break};app.swipeUp()};api.tap()
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
