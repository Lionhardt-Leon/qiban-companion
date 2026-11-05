import XCTest
import UIKit
import ImageIO
@testable import QibanCompanion

final class ImageBodyTests:XCTestCase {
    private func image(_ source:CameraFrame.Source = .user) throws -> CameraFrame {
        let picture = UIGraphicsImageRenderer(size:CGSize(width:8,height:12)).image{UIColor.red.setFill();$0.fill(CGRect(x:0,y:0,width:8,height:12))}
        return try ChatImage.prepare(XCTUnwrap(picture.pngData()),source:source)
    }
    func testSelectedPhotoDownsamplesAndDoesNotExpireLikeLiveCamera() throws {
        let picture = UIGraphicsImageRenderer(size:CGSize(width:2200,height:1100)).image{UIColor.blue.setFill();$0.fill(CGRect(x:0,y:0,width:2200,height:1100))}
        let value = try ChatImage.prepare(XCTUnwrap(picture.pngData()))
        let source = try XCTUnwrap(CGImageSourceCreateWithData(value.jpeg as CFData,nil))
        let decoded = try XCTUnwrap(CGImageSourceCreateImageAtIndex(source,0,nil))
        XCTAssertLessThanOrEqual(max(decoded.width,decoded.height),1024)
        XCTAssertTrue(value.isFresh(at:Date().addingTimeInterval(600)))
        XCTAssertThrowsError(try ChatImage.prepare(Data("not an image".utf8)))
        XCTAssertThrowsError(try ChatImage.prepare(Data(repeating:0,count:20_000_001)))
    }
    func testUserAndSelfImagesHaveSeparateSourcesAndOnlyCurrentTurnGetsImages() throws {
        var settings = APISettings();settings.endpoint = "https://example.invalid/v1";settings.model = "vision"
        let user = try image(),portrait = try image(.selfPortrait)
        settings.runtimeImages = [portrait];settings.runtimeContext = CompanionContext(modelKey:"enya",bodyStatus:"服饰：果体版；眼睛：已闭合；朝向：背向镜头")
        let request = try APIClient.makeRequest(settings:settings,key:"",history:[Message(role:"assistant",content:"上一轮"),Message(role:"user",content:"你和这张照片有什么不同？")],memories:"",actions:["open_eyes"],image:user)
        let json = try XCTUnwrap(JSONSerialization.jsonObject(with:request.httpBody!) as? [String:Any])
        let turns = try XCTUnwrap(json["messages"] as? [[String:Any]])
        let system = try XCTUnwrap(turns.first?["content"] as? String)
        for text in ["用户发送的图片","你自己的模型截图","服饰：果体版","已闭合","背向镜头"] {XCTAssertTrue(system.contains(text),text)}
        XCTAssertEqual(turns[1]["content"] as? String,"上一轮")
        let parts = try XCTUnwrap(turns.last?["content"] as? [[String:Any]])
        XCTAssertEqual(parts.filter{$0["type"] as? String == "image_url"}.count,2)
        XCTAssertTrue((parts[2]["text"] as? String)?.contains("自己") == true)
        let encoded = String(decoding:try JSONEncoder().encode(settings),as:UTF8.self)
        XCTAssertFalse(encoded.contains("runtimeImages"));XCTAssertFalse(encoded.contains(user.jpeg.base64EncodedString()))
    }
    func testTooManyAttachmentsAndStaleLiveFramesAreRejected() throws {
        var settings = APISettings();settings.endpoint = "https://example.invalid";settings.model = "vision"
        let photo = try image();settings.runtimeImages = [photo,photo,photo]
        XCTAssertThrowsError(try APIClient.makeRequest(settings:settings,key:"",history:[Message(role:"user",content:"看看")],memories:"",actions:[],image:photo))
        let old = try CameraFrame(jpeg:photo.jpeg,capturedAt:Date().addingTimeInterval(-10))
        settings.runtimeImages = []
        XCTAssertThrowsError(try APIClient.makeRequest(settings:settings,key:"",history:[Message(role:"user",content:"看看")],memories:"",actions:[],image:old))
    }
    func testDirectCommandsDoNotExecuteNegationQuotationOrStories() {
        for (text,command) in [("举起手",BodyCommand.raiseRight),("恩雅姐姐，举起左手",.raiseLeft),("你可以举起双手吗",.raiseBoth),("转过身",.turnBack),("请闭上眼睛好吗",.closeEyes),("睁开眼睛",.openEyes)] {XCTAssertEqual(BodyCommand.resolve(text),command,text)}
        for text in ["不要举起手","别闭上眼睛","她说：举起手","如果你转过身会怎样","我想起她举起手的样子","“转过身”","[触碰互动] 闭眼"] {XCTAssertNil(BodyCommand.resolve(text),text)}
        XCTAssertTrue(BodyCommand.asksAppearance("你现在穿什么衣服？"))
    }
    func testChineseBodyActionAliasesStillRespectActualCapabilityWhitelist() throws {
        XCTAssertEqual(try DialogueMotion.parse(#"{"reply":"好。","decision":"accept","action":"转身"}"#,actions:["turn_back"]).action,"turn_back")
        XCTAssertNil(try DialogueMotion.parse(#"{"reply":"好。","decision":"accept","action":"闭眼"}"#,actions:["turn_back"]).action)
        XCTAssertEqual(try DialogueMotion.parse(#"{"reply":"好。","decision":"accept","action":"举起手"}"#,actions:["raise_right_hand"]).action,"raise_right_hand")
    }
}
