import XCTest
import UIKit
@testable import QibanCompanion

private final class VisionURLProtocol: URLProtocol {
    static var handler: ((URLRequest) throws -> (Int,Data))?
    override class func canInit(with request:URLRequest) -> Bool { true }
    override class func canonicalRequest(for request:URLRequest) -> URLRequest { request }
    override func startLoading() {
        do {
            let (status,data) = try Self.handler!(request)
            client?.urlProtocol(self,didReceive:HTTPURLResponse(url:request.url!,statusCode:status,httpVersion:nil,headerFields:nil)!,cacheStoragePolicy:.notAllowed)
            client?.urlProtocol(self,didLoad:data);client?.urlProtocolDidFinishLoading(self)
        } catch { client?.urlProtocol(self,didFailWithError:error) }
    }
    override func stopLoading() {}
}

final class CameraVisionTests:XCTestCase {
    private func frame(at date:Date = Date()) throws -> CameraFrame {
        let image = UIGraphicsImageRenderer(size:CGSize(width:8,height:12)).image { context in
            UIColor.blue.setFill();context.fill(CGRect(x:0,y:0,width:8,height:12))
        }
        return try CameraFrame(jpeg:XCTUnwrap(image.jpegData(compressionQuality:0.6)),capturedAt:date)
    }
    private var settings:APISettings {
        var value = APISettings();value.endpoint = "https://example.invalid/v1";value.model = "vision-model";return value
    }
    func testCurrentFrameOnlyAttachedToLatestUserTurn() throws {
        let image = try frame()
        let history = [Message(role:"user",content:"上次的问题"),Message(role:"assistant",content:"之前的回答"),Message(role:"user",content:"现在看到了什么？")]
        let request = try APIClient.makeRequest(settings:settings,key:"test-key",history:history,memories:"",actions:["Yes"],image:image)
        let body = try XCTUnwrap(JSONSerialization.jsonObject(with:request.httpBody!) as? [String:Any])
        let turns = try XCTUnwrap(body["messages"] as? [[String:Any]])
        XCTAssertEqual(turns[1]["content"] as? String,"上次的问题")
        XCTAssertEqual(turns[2]["content"] as? String,"之前的回答")
        let content = try XCTUnwrap(turns.last?["content"] as? [[String:Any]])
        XCTAssertEqual(content.count,2);XCTAssertEqual(content[0]["text"] as? String,"现在看到了什么？")
        let part = try XCTUnwrap(content[1]["image_url"] as? [String:String])
        XCTAssertEqual(part["url"],image.dataURL);XCTAssertEqual(part["detail"],"auto")
        XCTAssertEqual(request.value(forHTTPHeaderField:"Authorization"),"Bearer test-key")
        XCTAssertTrue((turns[0]["content"] as? String)?.contains("不是连续视频") == true)
    }
    func testExpiredOversizeAndMisplacedFramesRejected() throws {
        let history = [Message(role:"user",content:"看看")]
        XCTAssertThrowsError(try APIClient.makeRequest(settings:settings,key:"",history:history,memories:"",actions:[],image:frame(at:Date().addingTimeInterval(-4))))
        XCTAssertThrowsError(try APIClient.makeRequest(settings:settings,key:"",history:[Message(role:"assistant",content:"你好")],memories:"",actions:[],image:frame()))
        XCTAssertThrowsError(try CameraFrame(jpeg:Data(repeating:0,count:524_289)))
        XCTAssertThrowsError(try CameraFrame(jpeg:Data("not a JPEG".utf8)))
    }
    func testImageReplyUsesExistingMotionProtocol() async throws {
        let configuration = URLSessionConfiguration.ephemeral;configuration.protocolClasses = [VisionURLProtocol.self]
        let session = URLSession(configuration:configuration)
        defer {session.invalidateAndCancel();VisionURLProtocol.handler = nil}
        VisionURLProtocol.handler = { _ in (200,Data(#"{"choices":[{"message":{"content":"{\"reply\":\"我看到蓝色的画面。\",\"action\":\"Yes\"}"}}]}"#.utf8)) }
        let reply = try await APIClient.reply(settings:settings,key:"",history:[Message(role:"user",content:"看看镜头")],memories:"",actions:["Yes"],image:frame(),session:session)
        XCTAssertEqual(reply.text,"我看到蓝色的画面。");XCTAssertEqual(reply.action,"Yes")
    }
    func testUnsupportedVisionReportsModelRequirementWithoutProviderBody() async throws {
        let configuration = URLSessionConfiguration.ephemeral;configuration.protocolClasses = [VisionURLProtocol.self]
        let session = URLSession(configuration:configuration)
        defer {session.invalidateAndCancel();VisionURLProtocol.handler = nil}
        VisionURLProtocol.handler = {_ in (400,Data("private-provider-body".utf8))}
        do {
            _ = try await APIClient.reply(settings:settings,key:"",history:[Message(role:"user",content:"看看")],memories:"",actions:[],image:frame(),session:session)
            XCTFail("Expected unsupported vision error")
        } catch {
            XCTAssertTrue(error.localizedDescription.contains("image_url"));XCTAssertFalse(error.localizedDescription.contains("private-provider-body"))
        }
    }
    @MainActor func testFrameNeverPersistsAndNextTextTurnDoesNotReplayIt() async throws {
        let directory = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        try FileManager.default.createDirectory(at:directory,withIntermediateDirectories:true)
        defer {try? FileManager.default.removeItem(at:directory)}
        var archive = LocalArchive();archive.settings = settings
        try JSONEncoder().encode(archive).write(to:directory.appendingPathComponent("archive-v1.json"))
        let image = try frame();var visionCalls = 0;var textCalls = 0
        let store = LocalStore(directory:directory,readKey:{""},replyProvider:{_,_,_,_,_ in
            textCalls += 1;return DialogueReply(text:"纯文字回答",action:nil)
        },visionReplyProvider:{_,_,history,_,_,actual in
            visionCalls += 1;XCTAssertEqual(actual.jpeg,image.jpeg);XCTAssertEqual(history.last?.content,"看看镜头")
            return DialogueReply(text:"看到了",action:nil)
        })
        store.send("看看镜头",image:image)
        for _ in 0..<200 {if !store.busy{break};try await Task.sleep(nanoseconds:10_000_000)}
        XCTAssertFalse(store.busy);XCTAssertEqual(visionCalls,1);XCTAssertEqual(textCalls,0)
        store.send("谢谢")
        for _ in 0..<200 {if !store.busy{break};try await Task.sleep(nanoseconds:10_000_000)}
        XCTAssertFalse(store.busy);XCTAssertEqual(visionCalls,1);XCTAssertEqual(textCalls,1)
        let exported = String(decoding:try store.export(),as:UTF8.self)
        XCTAssertFalse(exported.contains(image.jpeg.base64EncodedString()));XCTAssertFalse(exported.contains("image_url"))
        let restored = LocalStore(directory:directory,readKey:{""})
        XCTAssertEqual(restored.archive.messages.count,4)
    }
}
