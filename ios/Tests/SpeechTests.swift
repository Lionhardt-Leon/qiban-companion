import XCTest
import CryptoKit
import zlib
import OnnxRuntimeBindings
@testable import QibanCompanion

final class SpeechTests:XCTestCase {
    @MainActor func testSpeechPreferencesPersistAcrossResetAndReload() throws {
        let directory=FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString);defer{try? FileManager.default.removeItem(at:directory)}
        let store=LocalStore(directory:directory)
        var preferences=SpeechPreferences();preferences.autoPlay=true;preferences.voiceID="enya.ja";preferences.language="ja"
        try store.saveSpeech(preferences);try store.restartConversation()
        XCTAssertEqual(store.archive.settings.speech,preferences)
        XCTAssertEqual(LocalStore(directory:directory).archive.settings.speech,preferences)
    }
    func testOnDeviceRuntimeExecutesSyntheticGraph() throws {
        let url=FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString+".onnx");defer{try? FileManager.default.removeItem(at:url)}
        try XCTUnwrap(Data(base64Encoded:"CAk6TgoOCgF4CgF5EgF6IgNBZGQSCXN5bnRoZXRpY1oPCgF4EgoKCAgBEgQKAggCWg8KAXkSCgoICAESBAoCCAJiDwoBehIKCggIARIECgIIAkIECgAQFA==")).write(to:url)
        let env=try ORTEnv(loggingLevel:.warning),options=try ORTSessionOptions()
        let session=try ORTSession(env:env,modelPath:url.path,sessionOptions:options)
        func tensor(_ samples:[Float]) throws -> ORTValue {try samples.withUnsafeBufferPointer{try ORTValue(tensorData:NSMutableData(data:Data(buffer:$0)),elementType:.float,shape:[2])}}
        let output=try session.run(withInputs:["x":tensor([1,2]),"y":tensor([3,4])],outputNames:Set(["z"]),runOptions:nil)
        let bytes=try XCTUnwrap(output["z"]).tensorData() as Data
        let values=bytes.withUnsafeBytes{[$0.loadUnaligned(as:Float.self),$0.loadUnaligned(fromByteOffset:4,as:Float.self)]}
        XCTAssertEqual(values,[4,6])
    }
    func testJapaneseDialogueKeepsTranslationAndSpokenTextSeparate() throws {
        let reply=try DialogueMotion.parse(#"{"reply":"欢迎回来。","speech_ja":"おかえりなさい。","decision":"accept","action":"hello"}"#,actions:["hello"])
        XCTAssertEqual(reply.text,"欢迎回来。");XCTAssertEqual(reply.action,"hello")
        let message=Message(role:"assistant",content:reply.text,spokenJapanese:reply.spokenJapanese)
        var preferences=SpeechPreferences();preferences.language="ja"
        XCTAssertEqual(try preferences.text(for:message),"おかえりなさい。")
        XCTAssertThrowsError(try preferences.text(for:Message(role:"assistant",content:"只有中文")))
        let restored=try JSONDecoder().decode(Message.self,from:JSONEncoder().encode(message))
        XCTAssertEqual(restored.spokenJapanese,message.spokenJapanese)
        preferences.language="zh";XCTAssertEqual(try preferences.text(for:restored),"欢迎回来。")
    }
    func testJapanesePromptIsOptInAndPreferencesSurviveBackup() throws {
        var settings=APISettings()
        XCTAssertFalse(try PersonaPrompt.compose(settings:settings,memories:"",actions:[],hasImage:false).contains("【日配与中文显示】"))
        var context=CompanionContext();context.speechLanguage="ja";settings.runtimeContext=context
        XCTAssertTrue(try PersonaPrompt.compose(settings:settings,memories:"",actions:[],hasImage:false).contains("speech_ja"))
        var preferences=SpeechPreferences();preferences.voiceID="enya.ja";preferences.language="ja";preferences.autoPlay=true;settings.speech=preferences
        XCTAssertEqual(try JSONDecoder().decode(APISettings.self,from:JSONEncoder().encode(settings)).speech,preferences)
        XCTAssertNil(try JSONDecoder().decode(APISettings.self,from:Data(#"{"endpoint":"","model":"","persona":"保留","temperature":0.7}"#.utf8)).speech)
        preferences.speed = .nan;XCTAssertThrowsError(try preferences.validate())
    }
    func testSpeechStripsNarrationAndBoundsSentenceLength() {
        XCTAssertEqual(SpeechPreferences.clean("（挥手）**你好。** (smile)"),"你好。")
        let parts=SpeechPreferences.sentences(String(repeating:"好",count:150))
        XCTAssertEqual(parts.joined(),String(repeating:"好",count:150));XCTAssertTrue(parts.allSatisfy{$0.count<=48})
    }
    func testManifestRejectsTraversalAndIncompleteVoices() throws {
        let digest=SHA256.hash(data:Data()).map{String(format:"%02x",$0)}.joined()
        var files:[String:VoiceManifest.File]=[:]
        let names=["config.json","conditioning.json","reference_bert.bin","prompt_semantic.bin","refer_spec.bin","gpt_encoder.onnx","gpt_step.onnx","sovits.onnx"]
        for language in ["zh","ja"] {for name in names {files["voices/\(language)/\(name)"] = .init(bytes:0,sha256:digest)}}
        for name in ["shared/bert.onnx","shared/tokenizer.json","resources/empty.dict"] {files[name] = .init(bytes:0,sha256:digest)}
        let voices=["zh","ja"].map{VoiceManifest.Voice(id:"enya."+$0,title:$0,language:$0,directory:"voices/"+$0)}
        func manifest(_ records:[String:VoiceManifest.File])->VoiceManifest {VoiceManifest(schema:"qiban-offline-voice/1",id:"test",title:"test",frontendRevision:"384a2f995c48ef1903373ac8814569a8925779ba",voices:voices,files:records)}
        XCTAssertNoThrow(try manifest(files).validate())
        files["../outside"] = .init(bytes:0,sha256:digest);XCTAssertThrowsError(try manifest(files).validate());files.removeValue(forKey:"../outside")
        files.removeValue(forKey:"voices/ja/sovits.onnx");XCTAssertThrowsError(try manifest(files).validate())
        for path in ["/tmp/file","a/../b","a\\b","a//b","a:thing"] {XCTAssertFalse(VoiceManifest.safePath(path))}
    }
    func testCancellationAndWAVHeader() throws {
        let token=SpeechCancellation();XCTAssertNoThrow(try token.check());token.cancel();XCTAssertThrowsError(try token.check())
        let wav=SpeechWAV.encode([0,0.5,-0.5]);XCTAssertEqual(String(data:wav.prefix(4),encoding:.ascii),"RIFF");XCTAssertEqual(wav.count,50)
    }
    private func zip(_ files:[String:Data])->Data {
        var data=Data(),central=Data()
        func number<T:FixedWidthInteger>(_ value:T,_ output:inout Data){var n=value.littleEndian;withUnsafeBytes(of:&n){output.append(contentsOf:$0)}}
        for (path,body) in files.sorted(by:{$0.key<$1.key}) {
            let name=Data(path.utf8),offset=UInt32(data.count)
            let crc=body.withUnsafeBytes{UInt32(crc32(0,$0.bindMemory(to:Bytef.self).baseAddress,uInt(body.count)))}
            number(UInt32(0x04034b50),&data);number(UInt16(20),&data);number(UInt16(0),&data);number(UInt16(0),&data);number(UInt32(0),&data);number(crc,&data);number(UInt32(body.count),&data);number(UInt32(body.count),&data);number(UInt16(name.count),&data);number(UInt16(0),&data);data.append(name);data.append(body)
            number(UInt32(0x02014b50),&central);number(UInt16(20),&central);number(UInt16(20),&central);number(UInt16(0),&central);number(UInt16(0),&central);number(UInt32(0),&central);number(crc,&central);number(UInt32(body.count),&central);number(UInt32(body.count),&central);number(UInt16(name.count),&central)
            for _ in 0..<4 {number(UInt16(0),&central)};number(UInt32(0),&central);number(offset,&central);central.append(name)
        }
        let start=UInt32(data.count);data.append(central);number(UInt32(0x06054b50),&data);number(UInt16(0),&data);number(UInt16(0),&data);number(UInt16(files.count),&data);number(UInt16(files.count),&data);number(UInt32(central.count),&data);number(start,&data);number(UInt16(0),&data);return data
    }
    func testStreamImportRejectsBadCRCAndRetainsPreviousPackageOnHashFailure() throws {
        let root=FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        try FileManager.default.createDirectory(at:root,withIntermediateDirectories:true);defer{try? FileManager.default.removeItem(at:root)}
        let url=root.appendingPathComponent("voice.qvoice"),library=VoicePackageLibrary(directory:root.appendingPathComponent("library"))
        var payload:[String:Data]=[:]
        for language in ["zh","ja"] {for name in ["config.json","conditioning.json","reference_bert.bin","prompt_semantic.bin","refer_spec.bin","gpt_encoder.onnx","gpt_step.onnx","sovits.onnx"] {payload["voices/\(language)/\(name)"]=Data("synthetic".utf8)}}
        payload["shared/bert.onnx"]=Data("fake".utf8);payload["shared/tokenizer.json"]=Data("{}".utf8);payload["resources/empty.dict"]=Data()
        let files=payload.mapValues{VoiceManifest.File(bytes:Int64($0.count),sha256:SHA256.hash(data:$0).map{String(format:"%02x",$0)}.joined())}
        let voices=["zh","ja"].map{VoiceManifest.Voice(id:"test."+$0,title:$0,language:$0,directory:"voices/"+$0)}
        let manifest=VoiceManifest(schema:"qiban-offline-voice/1",id:"fixture",title:"Fixture",frontendRevision:"384a2f995c48ef1903373ac8814569a8925779ba",voices:voices,files:files)
        payload["manifest.json"]=try JSONEncoder().encode(manifest);try zip(payload).write(to:url)
        XCTAssertEqual(try library.importPackage(url).id,"fixture")
        payload["voices/zh/sovits.onnx"]=Data("corrupted".utf8);try zip(payload).write(to:url)
        XCTAssertThrowsError(try library.importPackage(url));XCTAssertEqual(try library.manifest().id,"fixture")
        XCTAssertEqual(try Data(contentsOf:library.current.appendingPathComponent("voices/zh/sovits.onnx")),Data("synthetic".utf8))
        var corrupt=zip(["test":Data("data".utf8)]);corrupt[34] ^= 1;try corrupt.write(to:url)
        let reader=try StoredVoiceArchive(url:url);XCTAssertThrowsError(try reader.read("test",limit:10))
        try zip(["../outside":Data()]).write(to:url);XCTAssertThrowsError(try StoredVoiceArchive(url:url))
    }
}
