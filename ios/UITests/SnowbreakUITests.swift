import XCTest
final class SnowbreakUITests:XCTestCase {
    func testImportYukiWhileEnyaSelectedChangesVisibleRendererAndPersists() {
        continueAfterFailure = false
        let app = XCUIApplication();app.launchArguments = ["--ui-enya-fixture","--ui-character-import-fixture"];app.launch()
        XCTAssertTrue(app.staticTexts["snowbreakReady"].waitForExistence(timeout:40))
        app.buttons["设置"].tap();app.buttons["manageCharacter"].tap()
        let folder = app.buttons["App 文件夹"]
        let enabled = XCTNSPredicateExpectation(predicate:NSPredicate(format:"exists == true AND enabled == true"),object:folder)
        XCTAssertEqual(XCTWaiter.wait(for:[enabled],timeout:20),.completed)
        folder.tap()
        let file = app.buttons["UITest-Triangle.json"]
        XCTAssertTrue(file.waitForExistence(timeout:10));file.tap()
        XCTAssertTrue(app.staticTexts["导入完成：UI import triangle"].waitForExistence(timeout:20))
        app.buttons["完成"].tap()
        XCTAssertTrue(app.otherElements["companionScene"].waitForExistence(timeout:20))
        XCTAssertFalse(app.staticTexts["snowbreakReady"].exists)
        app.buttons["设置"].tap();app.buttons["switchToSnowbreak"].tap();app.buttons["返回陪伴"].tap()
        XCTAssertTrue(app.staticTexts["snowbreakReady"].waitForExistence(timeout:40))
        app.buttons["设置"].tap();app.buttons["switchToNative"].tap();app.buttons["返回陪伴"].tap()
        XCTAssertTrue(app.otherElements["companionScene"].waitForExistence(timeout:20))
        app.terminate();app.launchArguments=[];app.launch()
        XCTAssertTrue(app.otherElements["companionScene"].waitForExistence(timeout:20))
        XCTAssertFalse(app.staticTexts["snowbreakReady"].exists)
    }
    func testEnyaRendererLivesInsideNativeHomeAndReopens() {
        let app = XCUIApplication();app.launchArguments = ["--ui-enya-fixture"];app.launch()
        XCTAssertTrue(app.staticTexts["snowbreakReady"].waitForExistence(timeout:40))
        XCTAssertTrue(app.descendants(matching:.any)["homeMessageInput"].exists)
        assertCharacterVisible(app.screenshot().image)
        let shot = XCTAttachment(screenshot:app.screenshot());shot.name = "Native-home-synthetic-Enya-WebKit";shot.lifetime = .keepAlways;add(shot)
        app.buttons["设置"].tap()
        XCTAssertTrue(app.staticTexts["恩雅护士"].firstMatch.waitForExistence(timeout:10))
        app.buttons["返回陪伴"].tap()
        XCTAssertTrue(app.staticTexts["snowbreakReady"].waitForExistence(timeout:10))
        app.terminate();app.launch()
        XCTAssertTrue(app.staticTexts["snowbreakReady"].waitForExistence(timeout:40))
    }
    func testCollectionModeAndOutfitSwitchPersist() {
        continueAfterFailure = false
        let app=XCUIApplication();app.launchArguments=["--ui-enya-fixture"];app.launch()
        let ready=app.staticTexts["snowbreakReady"]
        XCTAssertTrue(ready.waitForExistence(timeout:40))
        app.buttons["characterActions"].tap();app.buttons["皮肤互动（坐姿）"].tap()
        XCTAssertTrue(NSPredicate(format:"label CONTAINS %@","皮肤互动").evaluate(with:ready) || XCTWaiter.wait(for:[XCTNSPredicateExpectation(predicate:NSPredicate(format:"label CONTAINS %@","皮肤互动"),object:ready)],timeout:30) == .completed)
        app.buttons["characterActions"].tap();app.buttons["果体版"].tap()
        XCTAssertEqual(XCTWaiter.wait(for:[XCTNSPredicateExpectation(predicate:NSPredicate(format:"label CONTAINS %@","果体版"),object:ready)],timeout:30),.completed)
        app.terminate();app.launchArguments=[];app.launch()
        XCTAssertTrue(ready.waitForExistence(timeout:40));XCTAssertTrue(ready.label.contains("皮肤互动"));XCTAssertTrue(ready.label.contains("果体版"))
    }
    private func assertCharacterVisible(_ image:UIImage) {
        guard let cg = image.cgImage,let pixel = cg.cropping(to:CGRect(x:cg.width/2,y:cg.height/2,width:1,height:1)) else { return XCTFail("No rendered screenshot") }
        var rgba = [UInt8](repeating:0,count:4)
        let context = CGContext(data:&rgba,width:1,height:1,bitsPerComponent:8,bytesPerRow:4,space:CGColorSpaceCreateDeviceRGB(),bitmapInfo:CGImageAlphaInfo.premultipliedLast.rawValue)!
        context.draw(pixel,in:CGRect(x:0,y:0,width:1,height:1))
        XCTAssertGreaterThan(Int(rgba[0])+Int(rgba[1])+Int(rgba[2]),240,"Renderer must display geometry, not only a ready label on a blank background")
    }
}
