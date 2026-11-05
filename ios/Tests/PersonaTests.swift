import XCTest
@testable import QibanCompanion

final class PersonaTests:XCTestCase {
    func testLegacySettingsDecodeWithoutLosingPersonaAndRuntimeNeverExports() throws {
        let data = Data(#"{"endpoint":"https://example.invalid/v1","model":"test","persona":"旧人设不能丢失","temperature":0.7}"#.utf8)
        var settings = try JSONDecoder().decode(APISettings.self,from:data)
        XCTAssertNil(settings.personas);XCTAssertEqual(settings.persona,"旧人设不能丢失")
        settings.runtimeContext = CompanionContext(modelKey:"enya",modelName:"临时载体")
        let encoded = String(decoding:try JSONEncoder().encode(settings),as:UTF8.self)
        XCTAssertFalse(encoded.contains("runtimeContext"));XCTAssertFalse(encoded.contains("临时载体"))
        XCTAssertTrue(try PersonaPrompt.compose(settings:settings,memories:"",actions:[],hasImage:false).contains("旧人设不能丢失"))
    }
    func testPersonaLayersOverridesMacrosAndPrivateNotes() throws {
        var library = PersonaLibrary.migrating("背景")
        library.systemPrompt = "全局规则唯一";library.userName = "全局用户";library.userDescription = "全局用户描述"
        library.cards[0].name = "恩雅";library.cards[0].userName = "分析员";library.cards[0].userDescription = "角色专属用户描述"
        library.cards[0].personality = "温柔性格唯一";library.cards[0].scenario = "病房情境唯一"
        library.cards[0].examples = "{{CHAR}}：{{user}}，累了吗？";library.cards[0].notes = "绝不发往接口的备注"
        library.cards[0].firstMessages = ["绝不自动加入的开场白"]
        var settings = APISettings();settings.personas = library
        let text = try PersonaPrompt.compose(settings:settings,memories:"这是一条记忆",actions:["snowbreak_head"],hasImage:false)
        for expected in ["全局规则唯一","温柔性格唯一","病房情境唯一","角色专属用户描述","恩雅：分析员","这是一条记忆"] {XCTAssertTrue(text.contains(expected),expected)}
        for excluded in ["全局用户描述","绝不发往接口的备注","绝不自动加入的开场白"] {XCTAssertFalse(text.contains(excluded),excluded)}
        XCTAssertEqual(PersonaPrompt.substitute("{{char}} / {{user}}",char:"{{user}}",user:"小明"),"{{user}} / 小明")
    }
    func testBodyPromptFollowsActualModelAndValidActions() throws {
        var library = PersonaLibrary.migrating("默认人设")
        var enya = PersonaCard();enya.name = "恩雅";enya.title = "护士";library.cards.append(enya);library.modelBindings["enya"] = enya.id
        var settings = APISettings();settings.personas = library;settings.endpoint = "https://example.invalid/v1";settings.model = "test"
        settings.runtimeContext = CompanionContext(modelKey:"enya",modelName:"护士载体",mode:"皮肤互动坐姿",activeAction:"待机",origin:"已确认的屏幕触碰")
        let request = try APIClient.makeRequest(settings:settings,key:"",history:[Message(role:"user",content:"摸摸头")],memories:"",actions:["snowbreak_head","unknown-action"])
        let body = try XCTUnwrap(JSONSerialization.jsonObject(with:request.httpBody!) as? [String:Any])
        let turns = try XCTUnwrap(body["messages"] as? [[String:String]])
        let system = try XCTUnwrap(turns.first?["content"])
        for expected in ["你的名字是恩雅","皮肤互动坐姿","已确认的屏幕触碰","snowbreak_head","没有附带镜头图片"] {XCTAssertTrue(system.contains(expected),expected)}
        XCTAssertFalse(system.contains("unknown-action"));XCTAssertFalse(system.contains("motion={"))
        let native = try PersonaPrompt.compose(settings:settings,memories:"",actions:["procedural"],hasImage:false)
        XCTAssertTrue(native.contains("motion={"));XCTAssertTrue(native.contains("leftHand"))
        XCTAssertEqual(try DialogueMotion.parse(#"{"reply":"我抬手了","action":"procedural"}"#,actions:["snowbreak_head"]).action,nil)
    }
    func testImportOldProjectAndTavernCoreJSONWithoutExternalResources() throws {
        let old = Data(#"{"title":"旧项目角色","name":"小栞","description":"身份","personality":"害羞","scenario":"房间","first_messages":["你好{{user}}","回来啦"],"mes_example":"{{char}}: 嗯","userDesc":"专属的我","model":"vrm","voice":"external","image":"https://example.invalid/avatar.png"}"#.utf8)
        let base = PersonaLibrary.migrating("旧内容")
        let (library,id) = try PersonaTransfer.decode(old,into:base)
        let card = try XCTUnwrap(library.cards.first{$0.id == id})
        XCTAssertEqual(card.title,"旧项目角色");XCTAssertEqual(card.name,"小栞");XCTAssertEqual(card.firstMessages.count,2)
        XCTAssertEqual(card.userDescription,"专属的我");XCTAssertEqual(base.cards.count,1)
        let tavern = Data(#"{"spec":"chara_card_v2","data":{"name":"测试角色","personality":"活泼","first_mes":"初次见面","alternate_greetings":["欢迎"],"system_prompt":"卡片规则","post_history_instructions":"回复规则"}}"#.utf8)
        let (imported,newID) = try PersonaTransfer.decode(tavern,into:library)
        let importedCard = try XCTUnwrap(imported.cards.first{$0.id == newID})
        XCTAssertEqual(importedCard.firstMessages,["初次见面","欢迎"]);XCTAssertEqual(importedCard.systemRules,"卡片规则")
        let encoded = try PersonaTransfer.export(imported)
        XCTAssertFalse(String(decoding:encoded,as:UTF8.self).contains("https://example.invalid/avatar"))
        XCTAssertEqual(try PersonaTransfer.decode(encoded,into:base).0,imported)
    }
    func testInvalidLibrariesAreRejectedRatherThanSilentlyTruncated() throws {
        var library = PersonaLibrary.migrating("人设")
        library.modelBindings["unknown"] = library.cards[0].id;XCTAssertThrowsError(try library.validate())
        library.modelBindings = [:];library.cards[0].description = String(repeating:"长",count:12_001)
        XCTAssertThrowsError(try library.validate())
        XCTAssertThrowsError(try PersonaTransfer.decode(Data(repeating:0,count:2_000_001),into:PersonaLibrary.migrating("")))
    }
    @MainActor private func makeStore(provider:LocalStore.ReplyProvider? = nil) throws -> (LocalStore,URL) {
        let directory = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        try FileManager.default.createDirectory(at:directory,withIntermediateDirectories:true)
        var archive = LocalArchive();archive.settings.endpoint = "https://example.invalid/v1";archive.settings.model = "test"
        archive.messages = [Message(role:"user",content:"升级前的对话")];archive.memories = "升级前记忆"
        try JSONEncoder().encode(archive).write(to:directory.appendingPathComponent("archive-v1.json"))
        return (LocalStore(directory:directory,readKey:{""},replyProvider:provider ?? {_,_,_,_,_ in DialogueReply(text:"收到",action:nil)}),directory)
    }
    @MainActor func testFirstMigrationAndCardSessionSwitchPreserveHistoryMemoryAndDiary() throws {
        let (store,directory) = try makeStore();defer{try? FileManager.default.removeItem(at:directory)}
        var library = PersonaLibrary.migrating(store.archive.settings.persona)
        let first = library.cards[0].id
        try store.savePersonas(library,selected:first,modelKey:"native")
        XCTAssertEqual(store.archive.schemaVersion,2)
        XCTAssertEqual(store.archive.messages.first?.content,"升级前的对话");XCTAssertEqual(store.archive.memories,"升级前记忆")
        try store.addDiary("第一张卡的日记")
        var second = PersonaCard();second.title = "第二张";second.name = "另一位";library.cards.append(second)
        try store.savePersonas(library,selected:second.id,modelKey:"native")
        XCTAssertTrue(store.archive.messages.isEmpty);XCTAssertEqual(store.archive.memories,"");XCTAssertTrue(store.archive.diary.isEmpty)
        try store.saveMemories("第二张卡的记忆")
        try store.savePersonas(library,selected:first,modelKey:"native")
        XCTAssertEqual(store.archive.messages.first?.content,"升级前的对话");XCTAssertEqual(store.archive.diary.first?.text,"第一张卡的日记")
        let exported = try store.export();let archive = try JSONDecoder().decode(LocalArchive.self,from:exported);try archive.validate()
        XCTAssertEqual(archive.personaConversations?[second.id.uuidString]?.memories,"第二张卡的记忆")
    }
    @MainActor func testModelSwitchCancelsLateReplyFromOtherPersona() async throws {
        var pending:CheckedContinuation<DialogueReply,Error>?
        let (store,directory) = try makeStore(provider:{_,_,_,_,_ in try await withCheckedThrowingContinuation{pending = $0}})
        defer{try? FileManager.default.removeItem(at:directory)}
        var library = PersonaLibrary.migrating("默认")
        let first = library.cards[0].id;var second = PersonaCard();second.title = "恩雅";second.name = "恩雅";library.cards.append(second);library.modelBindings["enya"] = second.id
        try store.savePersonas(library,selected:first,modelKey:"native")
        store.send("第一张卡的问题")
        for _ in 0..<200 {if pending != nil{break};try await Task.sleep(nanoseconds:10_000_000)}
        XCTAssertTrue(store.busy);store.activateCompanion("enya");XCTAssertFalse(store.busy);XCTAssertTrue(store.archive.messages.isEmpty)
        pending?.resume(returning:DialogueReply(text:"不能串入另一张卡",action:"hello"))
        try await Task.sleep(nanoseconds:30_000_000)
        XCTAssertTrue(store.archive.messages.isEmpty);XCTAssertNil(store.dialogueAction)
        store.activateCompanion("native");XCTAssertEqual(store.archive.messages.last?.content,"第一张卡的问题")
    }
    @MainActor func testGreetingIsExplicitAndOnlyInsertedIntoEmptyConversation() throws {
        let (store,directory) = try makeStore();defer{try? FileManager.default.removeItem(at:directory)}
        var library = PersonaLibrary.migrating("默认");var card = PersonaCard();card.name = "小栞";card.firstMessages = ["{{user}}，我是{{char}}。"]
        library.userName = "小明";library.cards.append(card)
        try store.savePersonas(library,selected:library.cards[0].id,modelKey:"native")
        try store.savePersonas(library,selected:card.id,modelKey:"native")
        XCTAssertTrue(store.archive.messages.isEmpty);try store.insertGreeting(0)
        XCTAssertEqual(store.archive.messages.first?.content,"小明，我是小栞。");XCTAssertNil(store.dialogueAction)
        XCTAssertThrowsError(try store.insertGreeting(0))
    }
    @MainActor func testOversizeCombinedPromptCannotReplaceExistingSettings() throws {
        let (store,directory) = try makeStore();defer{try? FileManager.default.removeItem(at:directory)}
        var library = PersonaLibrary.migrating(String(repeating:"背",count:12_000))
        library.cards[0].personality = String(repeating:"性",count:12_000)
        library.cards[0].scenario = String(repeating:"场",count:12_000)
        try library.validate()
        XCTAssertThrowsError(try store.savePersonas(library,selected:library.cards[0].id,modelKey:"native"))
        XCTAssertNil(store.archive.settings.personas);XCTAssertEqual(store.archive.schemaVersion,1)
        XCTAssertEqual(store.archive.messages.first?.content,"升级前的对话")
    }
    @MainActor func testFirstSaveOfNewCardDoesNotInheritLegacyConversation() throws {
        let (store,directory) = try makeStore();defer{try? FileManager.default.removeItem(at:directory)}
        var library = PersonaLibrary.migrating(store.archive.settings.persona)
        let legacy = library.cards[0].id;let new = PersonaCard();library.cards.append(new)
        try store.savePersonas(library,selected:new.id,modelKey:"native")
        XCTAssertTrue(store.archive.messages.isEmpty);XCTAssertTrue(store.archive.memories.isEmpty)
        XCTAssertEqual(store.archive.personaConversations?[legacy.uuidString]?.messages.first?.content,"升级前的对话")
        try store.savePersonas(library,selected:legacy,modelKey:"native")
        XCTAssertEqual(store.archive.messages.first?.content,"升级前的对话")
    }
}
