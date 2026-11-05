import XCTest
@testable import QibanCompanion

final class RestartConversationTests:XCTestCase {
    private func directory(_ archive:LocalArchive) throws -> URL {
        let path = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        try FileManager.default.createDirectory(at:path,withIntermediateDirectories:true)
        try JSONEncoder().encode(archive).write(to:path.appendingPathComponent("archive-v1.json"))
        return path
    }
    @MainActor func testResetOnlyCurrentCardAndSurvivesSwitchAndReload() throws {
        var archive = LocalArchive();var library = PersonaLibrary.migrating("保留人设")
        let first = library.cards[0].id;let second = PersonaCard();library.cards.append(second)
        archive.schemaVersion = 2;archive.settings.personas = library;archive.personaSessionKey = first.uuidString
        archive.messages = [Message(role:"assistant",content:"旧聊天")];archive.memories = "旧记忆";archive.diary = [JournalEntry(text:"保留日记")]
        archive.personaConversations = [second.id.uuidString:PersonaConversation(messages:[Message(role:"user",content:"另一张卡")],memories:"另一张记忆",diary:[])]
        let path = try directory(archive);defer{try? FileManager.default.removeItem(at:path)}
        let store = LocalStore(directory:path);try store.restartConversation()
        XCTAssertTrue(store.archive.messages.isEmpty);XCTAssertTrue(store.archive.memories.isEmpty)
        XCTAssertEqual(store.archive.diary.first?.text,"保留日记");XCTAssertEqual(store.archive.settings.personas,library)
        XCTAssertEqual(store.archive.personaConversations?[second.id.uuidString]?.memories,"另一张记忆")
        try store.savePersonas(library,selected:second.id,modelKey:"native")
        XCTAssertEqual(store.archive.messages.first?.content,"另一张卡")
        try store.savePersonas(library,selected:first,modelKey:"native")
        let loaded = LocalStore(directory:path)
        XCTAssertTrue(loaded.archive.messages.isEmpty);XCTAssertTrue(loaded.archive.memories.isEmpty)
        XCTAssertEqual(loaded.archive.diary.first?.text,"保留日记")
        let snapshot = try XCTUnwrap(FileManager.default.contentsOfDirectory(at:path,includingPropertiesForKeys:nil).first{$0.lastPathComponent.hasPrefix("before-new-conversation-")})
        XCTAssertEqual(try JSONDecoder().decode(LocalArchive.self,from:Data(contentsOf:snapshot)).messages.first?.content,"旧聊天")
    }
    @MainActor func testResetCancelsLateReplyAndNewRequestHasNoOldContext() async throws {
        var archive = LocalArchive();archive.settings.endpoint = "https://example.invalid/v1";archive.settings.model = "fixture"
        archive.messages = [Message(role:"assistant",content:"历史台词")];archive.memories = "历史记忆"
        let path = try directory(archive);defer{try? FileManager.default.removeItem(at:path)}
        var pending:CheckedContinuation<DialogueReply,Error>?;var calls = 0;var received:[Message] = [];var memories = ""
        let store = LocalStore(directory:path,readKey:{""},replyProvider:{_,_,history,memory,_ in
            calls += 1
            if calls == 1 {return try await withCheckedThrowingContinuation{pending = $0}}
            received = history;memories = memory;return DialogueReply(text:"新的回复",action:nil)
        })
        store.send("即将丢弃的请求")
        for _ in 0..<200 {if pending != nil{break};try await Task.sleep(nanoseconds:10_000_000)}
        XCTAssertTrue(store.busy);XCTAssertNotNil(pending)
        try store.restartConversation();XCTAssertFalse(store.busy)
        pending?.resume(returning:DialogueReply(text:"迟到的旧回复",action:"hello"))
        try await Task.sleep(nanoseconds:30_000_000)
        XCTAssertTrue(store.archive.messages.isEmpty);XCTAssertNil(store.dialogueAction)
        store.send("全新的问题")
        for _ in 0..<200 {if !store.busy{break};try await Task.sleep(nanoseconds:10_000_000)}
        XCTAssertEqual(received.map(\.content),["全新的问题"]);XCTAssertEqual(memories,"")
        XCTAssertEqual(store.archive.messages.last?.content,"新的回复")
    }
}
