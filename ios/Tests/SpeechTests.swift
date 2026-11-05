import XCTest
import CryptoKit
@testable import QibanCompanion

final class SpeechTests:XCTestCase {
    func testJapaneseDialogueKeepsTranslationAndSpokenTextSeparate() throws {
        let reply=try DialogueMotion.parse(#"{"reply":"欢迎回来。","speech_ja":"おかえりなさい。","action":"hello"}"#,actions:["hello"])
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
}
