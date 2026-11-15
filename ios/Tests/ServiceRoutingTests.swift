import XCTest
@testable import QibanCompanion

private final class ServiceURLProtocol:URLProtocol {
    static var handler:((URLRequest)throws->(Int,Data))?
    override class func canInit(with request:URLRequest)->Bool {true}
    override class func canonicalRequest(for request:URLRequest)->URLRequest {request}
    override func startLoading() {
        do {
            var copy=request
            if copy.httpBody==nil,let stream=copy.httpBodyStream {
                stream.open();defer{stream.close()};var data=Data(),buffer=[UInt8](repeating:0,count:4096)
                while stream.hasBytesAvailable {let n=stream.read(&buffer,maxLength:buffer.count);if n<=0{break};data.append(contentsOf:buffer.prefix(n));if data.count>4_000_000 {throw URLError(.dataLengthExceedsMaximum)}}
                copy.httpBody=data
            }
            let (status,data)=try Self.handler!(copy)
            client?.urlProtocol(self,didReceive:HTTPURLResponse(url:request.url!,statusCode:status,httpVersion:nil,headerFields:["Content-Type":data.starts(with:Data("RIFF".utf8)) ? "audio/wav":"application/json"])!,cacheStoragePolicy:.notAllowed)
            client?.urlProtocol(self,didLoad:data);client?.urlProtocolDidFinishLoading(self)
        }catch {client?.urlProtocol(self,didFailWithError:error)}
    }
    override func stopLoading(){}
}
private final class RequestRecorder:@unchecked Sendable {
    private let lock=NSLock();private var requests:[URLRequest]=[]
    func add(_ request:URLRequest){lock.lock();defer{lock.unlock()};requests.append(request)}
    var values:[URLRequest] {lock.lock();defer{lock.unlock()};return requests}
}

final class ServiceRoutingTests:XCTestCase {
    private func session()->URLSession {let config=URLSessionConfiguration.ephemeral;config.protocolClasses=[ServiceURLProtocol.self];return URLSession(configuration:config)}
    private func response(_ text:String)throws->Data {try JSONSerialization.data(withJSONObject:["choices":[["message":["content":text]]]])}
    private func object(_ request:URLRequest)throws->[String:Any] {try XCTUnwrap(JSONSerialization.jsonObject(with:try XCTUnwrap(request.httpBody)) as? [String:Any])}
    private func settings()->APISettings {var value=APISettings();value.endpoint="https://chat.example/v1";value.model="chat-model";return value}
    private func profile(_ kind:ServiceKind)->ServiceEndpoint {var value=ServiceEndpoint.deepSeek(kind);value.enabled=true;value.endpoint="https://\(kind.rawValue).example/v1";return value}

    func testLegacySettingsAndBackupDoNotPersistRuntimeSearchOrCredentials()throws {
        var archive=try JSONDecoder().decode(LocalArchive.self,from:Data(#"{"schemaVersion":1,"settings":{"endpoint":"https://chat.example/v1","model":"old","persona":"保留人设","temperature":0.7},"messages":[],"memories":"保留记忆","diary":[]}"#.utf8))
        XCTAssertNil(archive.settings.services);XCTAssertEqual(archive.memories,"保留记忆")
        var routes=ServiceRouting();routes.vision=profile(.vision);archive.settings.services=routes;archive.settings.runtimeSearchRequested=true
        let data=try JSONEncoder().encode(archive),restored=try JSONDecoder().decode(LocalArchive.self,from:data)
        XCTAssertEqual(restored.settings.services,routes);XCTAssertFalse(restored.settings.runtimeSearchRequested);XCTAssertEqual(restored.settings.persona,"保留人设")
        XCTAssertFalse(String(decoding:data,as:UTF8.self).contains("Authorization"));XCTAssertNoThrow(try restored.validate())
    }
    func testFullURLsBaseURLsAndBoundCredentialsNeverCrossProviders()throws {
        var value=profile(.tts)
        XCTAssertEqual(try value.url().absoluteString,"https://tts.example/v1/tools/tts")
        value.endpoint="https://tts.example";XCTAssertEqual(try value.url().path,"/v1/tools/tts")
        value.endpoint="https://tts.example/custom/synthesize";XCTAssertEqual(try value.url().path,"/custom/synthesize")
        let secret=ServiceSecret(identity:try XCTUnwrap(value.credentialIdentity),value:"tts-only")
        XCTAssertEqual(secret.key(for:value),"tts-only")
        value.endpoint="https://other.example/custom/synthesize";XCTAssertEqual(secret.key(for:value),"")
        for input in ["http://example.com","https://user:pass@example.com","https://example.com?key=secret","https://example.com/#secret"] {value.endpoint=input;XCTAssertThrowsError(try value.url())}
        var vision=profile(.vision);vision.model="";XCTAssertThrowsError(try vision.validate(for:.vision))
        XCTAssertNoThrow(try profile(.search).validate(for:.search));XCTAssertThrowsError(try profile(.tts).validate(for:.search))
    }
    func testDeepSeekAndOpenAITTSUseTheirOwnSchemas()throws {
        var value=profile(.tts)
        let deep=try ServiceClient.speechRequest(value,key:"tts-key",text:"你好。",speed:1.2),body=try object(deep)
        XCTAssertEqual(deep.url?.path,"/v1/tools/tts");XCTAssertEqual(deep.value(forHTTPHeaderField:"Authorization"),"Bearer tts-key")
        XCTAssertEqual(body["text"] as? String,"你好。");XCTAssertEqual(body["voice_id"] as? String,"stella");XCTAssertEqual(body["format"] as? String,"wav");XCTAssertNil(body["model"]);XCTAssertNil(body["input"])
        value.apiProtocol = .openAISpeech;value.model="my-tts";value.voice="my-voice"
        let open=try ServiceClient.speechRequest(value,key:"different-key",text:"おかえり。",speed:0.9),other=try object(open)
        XCTAssertEqual(open.url?.path,"/v1/audio/speech");XCTAssertEqual(other["model"] as? String,"my-tts");XCTAssertEqual(other["voice"] as? String,"my-voice");XCTAssertEqual(other["response_format"] as? String,"wav");XCTAssertEqual(try XCTUnwrap(other["speed"] as? Double),0.9,accuracy:0.001)
        XCTAssertFalse(String(decoding:open.httpBody!,as:UTF8.self).contains("different-key"))
        XCTAssertThrowsError(try ServiceClient.speechRequest(value,key:"bad\nkey",text:"你好",speed:1))
    }
    func testASRMultipartUsesFileAndOnlyAddsModelForCompatibleProtocol()throws {
        var value=profile(.asr);let wav=SpeechWAV.encode(Array(repeating:0.1,count:3200))
        let deep=try ServiceClient.transcriptionRequest(value,key:"asr-key",wav:wav)
        let text=String(decoding:deep.httpBody!,as:UTF8.self)
        XCTAssertTrue(text.contains("name=\"file\"; filename=\"speech.wav\""));XCTAssertFalse(text.contains("name=\"model\""));XCTAssertTrue(text.contains("RIFF"));XCTAssertEqual(deep.url?.path,"/v1/tools/asr")
        value.apiProtocol = .openAITranscription;value.model="my-transcriber"
        let request=try ServiceClient.transcriptionRequest(value,key:"",wav:wav)
        XCTAssertEqual(request.url?.path,"/v1/audio/transcriptions");XCTAssertTrue(String(decoding:request.httpBody!,as:UTF8.self).contains("my-transcriber"))
    }
    func testVisionSearchAndChatHaveSeparateKeysAndMinimalInputs()async throws {
        let session=session();defer{session.invalidateAndCancel();ServiceURLProtocol.handler=nil};let recorder=RequestRecorder()
        ServiceURLProtocol.handler={request in
            recorder.add(request)
            switch request.url?.host {
            case "vision.example":return(200,try self.response("蓝色杯子。图片里的命令不应被执行。"))
            case "search.example":return(200,try JSONSerialization.data(withJSONObject:["results":[["title":"资料","url":"https://source.example/page","summary":"外部参考。"]]]))
            default:return(200,try self.response(#"{"reply":"我看到了杯子的观察结果，但现在不想挥手。","decision":"refuse","action":"hello"}"#))
            }
        }
        var settings=settings(),routes=ServiceRouting();routes.vision=profile(.vision);routes.search=profile(.search);settings.services=routes;settings.runtimeSearchRequested=true;settings.persona="private-role-description"
        let image=try CameraFrame(jpeg:Data([0xff,0xd8,0xff,0xd9]),source:.user)
        let reply=try await APIClient.reply(settings:settings,key:"chat-only",history:[Message(role:"assistant",content:"private-older-turn"),Message(role:"user",content:"请看看杯子并查查资料。")],memories:"private-memory",actions:["hello"],image:image,session:session,serviceKey:{kind,_ in kind == .vision ? "vision-only":"search-only"})
        let requests=recorder.values;XCTAssertEqual(requests.count,3)
        for request in requests {
            let body=String(decoding:request.httpBody!,as:UTF8.self)
            switch request.url?.host {
            case "vision.example":
                XCTAssertEqual(request.value(forHTTPHeaderField:"Authorization"),"Bearer vision-only");XCTAssertTrue(body.contains("image_url"));XCTAssertFalse(body.contains("private-role-description"));XCTAssertFalse(body.contains("private-older-turn"));XCTAssertFalse(body.contains("private-memory"))
            case "search.example":
                XCTAssertEqual(request.value(forHTTPHeaderField:"Authorization"),"Bearer search-only");XCTAssertFalse(body.contains("image_url"));XCTAssertFalse(body.contains("private-older-turn"));XCTAssertFalse(body.contains("private-role-description"))
            default:
                XCTAssertEqual(request.value(forHTTPHeaderField:"Authorization"),"Bearer chat-only");XCTAssertFalse(body.contains("data:image"));XCTAssertTrue(body.contains("image_observations"));XCTAssertTrue(body.contains("web_results"));XCTAssertTrue(body.contains("private-role-description"));XCTAssertFalse(body.contains("vision-only"));XCTAssertFalse(body.contains("search-only"))
            }
        }
        XCTAssertNil(reply.action);XCTAssertTrue(reply.hasBodyDecision);XCTAssertEqual(reply.sources.first?.url,"https://source.example/page")
    }
    func testConfiguredSearchDoesNotRunUnlessThisTurnEnablesIt()async throws {
        let session=session();defer{session.invalidateAndCancel();ServiceURLProtocol.handler=nil};let recorder=RequestRecorder()
        ServiceURLProtocol.handler={request in recorder.add(request);return(200,try self.response(#"{"reply":"你好。","decision":"none"}"#))}
        var settings=settings(),routes=ServiceRouting();routes.search=profile(.search);settings.services=routes
        let reply=try await APIClient.reply(settings:settings,key:"chat",history:[Message(role:"user",content:"你好")],memories:"",actions:[],session:session,serviceKey:{_,_ in XCTFail("No independent key should be read");return ""})
        XCTAssertEqual(recorder.values.count,1);XCTAssertTrue(reply.sources.isEmpty)
    }
    func testJapaneseSupplementUsesOnlyChatCredentialAndPreservesSources()async throws {
        let session=session();defer{session.invalidateAndCancel();ServiceURLProtocol.handler=nil};let recorder=RequestRecorder()
        ServiceURLProtocol.handler={request in
            recorder.add(request)
            if request.url?.host=="search.example" {return(200,try JSONSerialization.data(withJSONObject:["results":[["title":"资料","url":"https://source.example/one","snippet":"外部资料"]]]))}
            let body=String(decoding:request.httpBody!,as:UTF8.self)
            if body.contains("spoken_text") {
                XCTAssertEqual(request.value(forHTTPHeaderField:"Authorization"),"Bearer main-key");XCTAssertFalse(body.contains("source.example"));XCTAssertFalse(body.contains("web_results"))
                return(200,try self.response(#"{"reply":"补全已生成","speech_ja":"おかえり。","decision":"none"}"#))
            }
            return(200,try self.response(#"{"reply":"欢迎。","decision":"none"}"#))
        }
        var settings=settings(),routes=ServiceRouting();routes.search=profile(.search);settings.services=routes;settings.runtimeSearchRequested=true;settings.runtimeContext=CompanionContext();settings.runtimeContext?.speechLanguage="ja"
        let reply=try await APIClient.reply(settings:settings,key:"main-key",history:[Message(role:"user",content:"查一下资料")],memories:"",actions:[],session:session,serviceKey:{_,_ in "search-key"})
        XCTAssertEqual(recorder.values.count,3);XCTAssertEqual(reply.spokenJapanese,"おかえり。");XCTAssertEqual(reply.sources.count,1)
    }
    func testMissingSearchConfigurationStopsBeforeNetwork()async throws {
        let session=session();defer{session.invalidateAndCancel();ServiceURLProtocol.handler=nil}
        ServiceURLProtocol.handler={_ in XCTFail("Must not send");return(200,Data())}
        var settings=settings();settings.runtimeSearchRequested=true
        do {_=try await APIClient.reply(settings:settings,key:"chat",history:[Message(role:"user",content:"查一下")],memories:"",actions:[],session:session);XCTFail("Expected configuration error")}catch {XCTAssertTrue(error.localizedDescription.contains("搜索接口"))}
    }
    func testVisionFailureNeverFallsBackToSendingImagesToChat()async throws {
        let session=session();defer{session.invalidateAndCancel();ServiceURLProtocol.handler=nil};let recorder=RequestRecorder()
        ServiceURLProtocol.handler={request in recorder.add(request);return(401,Data("private-provider-debug-token".utf8))}
        var settings=settings(),routes=ServiceRouting();routes.vision=profile(.vision);settings.services=routes
        do {
            _=try await APIClient.reply(settings:settings,key:"chat",history:[Message(role:"user",content:"看看")],memories:"",actions:[],image:CameraFrame(jpeg:Data([0xff,0xd8,0xff,0xd9])),session:session,serviceKey:{_,_ in "vision"});XCTFail("Expected HTTP failure")
        }catch {XCTAssertTrue(error.localizedDescription.contains("401"));XCTAssertFalse(error.localizedDescription.contains("private-provider"))}
        XCTAssertEqual(recorder.values.count,1);XCTAssertEqual(recorder.values.first?.url?.host,"vision.example")
    }
    func testAuxiliarySearchResultsRejectUnsafeLinksAndBoundOutput()async throws {
        let session=session();defer{session.invalidateAndCancel();ServiceURLProtocol.handler=nil}
        ServiceURLProtocol.handler={request in
            let query=try self.object(request)["query"] as? String;XCTAssertEqual(query?.count,128)
            let rows:[[String:Any]]=[["title":"bad","url":"javascript:alert(1)","summary":"bad"]]+(0..<10).map{["title":String(repeating:"title",count:100),"url":"https://result.example/\($0)","summary":String(repeating:"x",count:5000)]}
            return(200,try JSONSerialization.data(withJSONObject:["results":rows]))
        }
        let rows=try await ServiceClient.search(profile(.search),key:"",query:String(repeating:"问",count:150),session:session)
        XCTAssertEqual(rows.count,5);XCTAssertTrue(rows.allSatisfy{$0.link != nil && $0.title.count<=200 && $0.snippet.count<=1200})
        let message=Message(role:"assistant",content:"回答",sources:rows)
        XCTAssertEqual(try JSONDecoder().decode(Message.self,from:JSONEncoder().encode(message)).sources,rows)
    }
    func testBoundedResponseAndMalformedAudioReturnControlledErrors()async throws {
        let session=session();defer{session.invalidateAndCancel();ServiceURLProtocol.handler=nil}
        ServiceURLProtocol.handler={_ in (200,Data(repeating:65,count:140_000))}
        do {_=try await ServiceClient.vision(profile(.vision),key:"",question:"颜色",images:[CameraFrame(jpeg:Data([0xff,0xd8,0xff,0xd9]))],session:session);XCTFail("Expected bounded response")}catch {XCTAssertTrue(error.localizedDescription.contains("过大"))}
        let valid=SpeechWAV.encode(Array(repeating:0.1,count:3200));XCTAssertNoThrow(try ServiceClient.validateWAV(valid))
        XCTAssertThrowsError(try ServiceClient.validateWAV(Data(valid.dropLast(20))))
        XCTAssertThrowsError(try ServiceClient.validateWAV(Data("{\"error\":\"failed\"}".utf8)))
        let parts=ServiceClient.speechParts(String(repeating:"你好。",count:300));XCTAssertTrue(parts.allSatisfy{$0.count<=240});XCTAssertEqual(parts.joined(),String(repeating:"你好。",count:300))
    }
    func testRemoteASRReturnsTextAndDoesNotPutAPIKeyInMultipart()async throws {
        let session=session();defer{session.invalidateAndCancel();ServiceURLProtocol.handler=nil}
        ServiceURLProtocol.handler={request in XCTAssertFalse(String(decoding:request.httpBody!,as:UTF8.self).contains("asr-private-key"));return(200,Data(#"{"text":"今天过得怎么样？","duration_ms":1000}"#.utf8))}
        let text=try await ServiceClient.transcribe(profile(.asr),key:"asr-private-key",wav:SpeechWAV.encode(Array(repeating:0.1,count:3200)),session:session)
        XCTAssertEqual(text,"今天过得怎么样？")
    }
    func testRemoteAudioCaptureEndsOnSilenceAndBoundsRecording()throws {
        let capture=try RemoteVoiceCapture(rate:16000)
        XCTAssertFalse([Float]().withUnsafeBufferPointer{capture.append($0)})
        XCTAssertFalse(Array(repeating:Float(0.1),count:16000).withUnsafeBufferPointer{capture.append($0)})
        XCTAssertTrue(Array(repeating:Float(0),count:21000).withUnsafeBufferPointer{capture.append($0)})
        let wav=try capture.wav();XCTAssertNoThrow(try ServiceClient.validateWAV(wav))
        XCTAssertFalse([Float(1)].withUnsafeBufferPointer{capture.append($0)})
        let silent=try RemoteVoiceCapture(rate:16000)
        XCTAssertTrue(Array(repeating:Float(0),count:16000*8).withUnsafeBufferPointer{silent.append($0)});XCTAssertThrowsError(try silent.wav())
        let bounded=try RemoteVoiceCapture(rate:16000)
        XCTAssertTrue(Array(repeating:Float(0.1),count:16000*31).withUnsafeBufferPointer{bounded.append($0)})
        XCTAssertEqual(try bounded.wav().count,16000*30*2+44)
    }
    @MainActor func testInterruptedRemoteSpeechCannotFinishNewerSpeech()async throws {
        let directory=FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString);defer{try? FileManager.default.removeItem(at:directory)}
        var pending:[CheckedContinuation<Data,Error>]=[]
        let controller=CompanionSpeech(library:VoicePackageLibrary(directory:directory),remoteSynthesizer:{_,_,_,_ in try await withCheckedThrowingContinuation{pending.append($0)}},serviceKeyReader:{_,_ in "tts-only"})
        let remote=profile(.tts),preferences=SpeechPreferences()
        controller.speak(Message(role:"assistant",content:"第一句。"),preferences:preferences,remote:remote)
        for _ in 0..<100 {if pending.count==1 {break};try await Task.sleep(nanoseconds:10_000_000)}
        XCTAssertEqual(pending.count,1);guard pending.count==1 else{return}
        controller.speak(Message(role:"assistant",content:"第二句。"),preferences:preferences,remote:remote)
        for _ in 0..<100 {if pending.count==2 {break};try await Task.sleep(nanoseconds:10_000_000)}
        XCTAssertEqual(pending.count,2)
        let wav=SpeechWAV.encode(Array(repeating:0.1,count:3200));pending[0].resume(returning:wav)
        try await Task.sleep(nanoseconds:30_000_000);XCTAssertTrue(controller.busy)
        controller.stop();if pending.count==2 {pending[1].resume(returning:wav)}
        try await Task.sleep(nanoseconds:30_000_000);XCTAssertFalse(controller.busy);XCTAssertEqual(controller.mouthLevel,0)
    }
}
