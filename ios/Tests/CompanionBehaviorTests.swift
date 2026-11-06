import XCTest
@testable import QibanCompanion

final class CompanionBehaviorTests:XCTestCase {
    func testAcceptedMoodBindsRealActionAndRefusalNeverDoes() throws {
        let accepted=try DialogueMotion.parse(#"{"reply":"有点不好意思呢。","decision":"accept","action":"none","affect":{"emotion":"shy","intensity":0.7}}"#,actions:["snowbreak_home_shy","gesture_shy"])
        XCTAssertEqual(accepted.action,"snowbreak_home_shy");XCTAssertTrue(accepted.hasBodyDecision)
        let refused=try DialogueMotion.parse(#"{"reply":"现在不想。","decision":"refuse","intent":"kiss","affect":{"emotion":"shy","intensity":0.8}}"#,actions:["snowbreak_home_kiss","gesture_shy"])
        XCTAssertNil(refused.action);XCTAssertTrue(refused.hasBodyDecision)
        XCTAssertNil(try DialogueMotion.parse(#"{"reply":"这里没有对应动作。","decision":"accept","intent":"kiss"}"#,actions:["gesture_nod"]).action)
        XCTAssertNil(try DialogueMotion.parse("文字里说亲吻不会直接执行。",actions:["snowbreak_home_kiss"]).action)
    }
    func testMoodBoundsAndSpeechGenerationIdentity() throws {
        var mood=CompanionMood();try mood.apply(.init(emotion:"affectionate",intensity:0.8,closenessDelta:0.05,reason:"喜欢这次交流"));XCTAssertEqual(mood.closeness,0.3,accuracy:0.00001)
        XCTAssertThrowsError(try mood.apply(.init(emotion:"unknown",intensity:1)))
        XCTAssertThrowsError(try mood.apply(.init(emotion:"happy",intensity:1.2)))
        XCTAssertThrowsError(try mood.apply(.init(emotion:"happy",intensity:0.5,closenessDelta:1)))
        let message=UUID(),conversation=UUID(),pending=WaitingBodyAction(event:.init(action:"gesture_shy"),messageID:message,conversationID:conversation,revision:4)
        XCTAssertTrue(pending.matches(messageID:message,conversationID:conversation,revision:4))
        XCTAssertFalse(pending.matches(messageID:UUID(),conversationID:conversation,revision:4))
        XCTAssertFalse(pending.matches(messageID:message,conversationID:UUID(),revision:4))
        XCTAssertFalse(pending.matches(messageID:message,conversationID:conversation,revision:5))
    }
    @MainActor func testMoodPersistsAndFreshConversationResetsIt() async throws {
        let directory=FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString);try FileManager.default.createDirectory(at:directory,withIntermediateDirectories:true);defer{try? FileManager.default.removeItem(at:directory)}
        var archive=LocalArchive();archive.settings.endpoint="https://example.invalid";archive.settings.model="test";try JSONEncoder().encode(archive).write(to:directory.appendingPathComponent("archive-v1.json"))
        let store=LocalStore(directory:directory,readKey:{""},replyProvider:{_,_,_,_,actions in try DialogueMotion.parse(#"{"reply":"欢迎回来。","decision":"accept","intent":"greet","affect":{"emotion":"happy","intensity":0.6,"closenessDelta":0.03}}"#,actions:actions)})
        store.send("你好",actions:["snowbreak_home_login"],context:CompanionContext(modelKey:"enya"))
        for _ in 0..<100 {if !store.busy {break};try await Task.sleep(nanoseconds:10_000_000)}
        XCTAssertEqual(store.mood.emotion,"happy");XCTAssertEqual(store.dialogueAction?.action,"snowbreak_home_login")
        let reopened=LocalStore(directory:directory,readKey:{""});reopened.activateCompanion("enya");XCTAssertEqual(reopened.mood.emotion,"happy")
        try reopened.restartConversation();XCTAssertEqual(reopened.mood.emotion,"calm");XCTAssertTrue(reopened.archive.messages.isEmpty)
    }
    func testPlainReplyGetsOneBodyDecisionWithoutChangingItsText() async throws {
        let config=URLSessionConfiguration.ephemeral;config.protocolClasses=[BehaviorURLProtocol.self];let session=URLSession(configuration:config);defer{session.invalidateAndCancel();BehaviorURLProtocol.handler=nil}
        var calls=0;BehaviorURLProtocol.handler={request in
            calls+=1;let body=try XCTUnwrap(JSONSerialization.jsonObject(with:request.httpBody!) as? [String:Any]);let turns=try XCTUnwrap(body["messages"] as? [[String:Any]])
            if calls==2 {XCTAssertEqual(turns.count,2);XCTAssertFalse(String(describing:turns).contains("older-private-turn"));XCTAssertEqual(body["max_tokens"] as? Int,512)}
            let reply=calls==1 ? "别笑我呀。" : #"{"reply":"决定已生成","decision":"accept","intent":"shy","affect":{"emotion":"shy","intensity":0.7}}"#
            return try JSONSerialization.data(withJSONObject:["choices":[["message":["content":reply]]]])
        }
        var settings=APISettings();settings.endpoint="https://example.invalid";settings.model="test"
        let result=try await APIClient.reply(settings:settings,key:"",history:[Message(role:"user",content:"older-private-turn"),Message(role:"user",content:"逗逗你")],memories:"",actions:["gesture_shy"],session:session)
        XCTAssertEqual(calls,2);XCTAssertEqual(result.text,"别笑我呀。");XCTAssertEqual(result.action,"gesture_shy");XCTAssertTrue(result.hasBodyDecision)
    }
    func testExplicitRefusalDoesNotCallRepair() async throws {
        let config=URLSessionConfiguration.ephemeral;config.protocolClasses=[BehaviorURLProtocol.self];let session=URLSession(configuration:config);defer{session.invalidateAndCancel();BehaviorURLProtocol.handler=nil}
        var calls=0;BehaviorURLProtocol.handler={_ in calls+=1;return try JSONSerialization.data(withJSONObject:["choices":[["message":["content":#"{"reply":"不想这样。","decision":"refuse","intent":"kiss"}"#]]]])}
        var settings=APISettings();settings.endpoint="https://example.invalid";settings.model="test"
        let result=try await APIClient.reply(settings:settings,key:"",history:[Message(role:"user",content:"亲吻")],memories:"",actions:["snowbreak_home_kiss"],session:session)
        XCTAssertEqual(calls,1);XCTAssertNil(result.action)
    }
}
private final class BehaviorURLProtocol:URLProtocol {
    static var handler:((URLRequest)throws->Data)?
    override class func canInit(with request:URLRequest)->Bool {true}
    override class func canonicalRequest(for request:URLRequest)->URLRequest {request}
    override func startLoading(){do{var value=request;if value.httpBody==nil,let stream=value.httpBodyStream {stream.open();defer{stream.close()};var body=Data(),buffer=[UInt8](repeating:0,count:4096);while stream.hasBytesAvailable {let n=stream.read(&buffer,maxLength:buffer.count);if n<=0 {break};body.append(contentsOf:buffer.prefix(n));if body.count>256_000 {break}};value.httpBody=body};let data=try Self.handler!(value);client?.urlProtocol(self,didReceive:HTTPURLResponse(url:request.url!,statusCode:200,httpVersion:nil,headerFields:nil)!,cacheStoragePolicy:.notAllowed);client?.urlProtocol(self,didLoad:data);client?.urlProtocolDidFinishLoading(self)}catch{client?.urlProtocol(self,didFailWithError:error)}}
    override func stopLoading(){}
}
