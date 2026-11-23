import XCTest
@testable import QibanCompanion

final class RestartConversationTests:XCTestCase {
    private func directory(_ archive:LocalArchive) throws -> URL {
        let path = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        try FileManager.default.createDirectory(at:path,withIntermediateDirectories:true)
        try JSONEncoder().encode(archive).write(to:path.appendingPathComponent("archive-v1.json"))
        return path
    }
    @MainActor func testNewConversationPreservesHistoryAndSurvivesSwitchAndReload() throws {
        var archive = LocalArchive()
        var library = PersonaLibrary.migrating("保留人设")
        let first = library.cards[0].id
        let second = PersonaCard()
        library.cards.append(second)
        archive.schemaVersion = 2
        archive.settings.personas = library
        archive.personaSessionKey = first.uuidString
        archive.messages = [Message(role:"assistant",content:"旧聊天")]
        archive.memories = "旧记忆"
        archive.diary = [JournalEntry(text:"保留日记")]
        archive.personaConversations = [
            second.id.uuidString: PersonaConversation(messages:[Message(role:"user",content:"另一张卡")],memories:"另一张记忆",diary:[])
        ]
        let path = try directory(archive)
        defer { try? FileManager.default.removeItem(at:path) }
        let store = LocalStore(directory:path)
        try store.prepareSessionBrowser()
        let originalID = try XCTUnwrap(store.currentSession?.id)
        try store.restartConversation()
        let newID = try XCTUnwrap(store.currentSession?.id)
        XCTAssertNotEqual(originalID,newID)
        XCTAssertTrue(store.archive.messages.isEmpty)
        XCTAssertTrue(store.archive.memories.isEmpty)
        XCTAssertTrue(store.archive.diary.isEmpty)
        XCTAssertEqual(store.archive.settings.personas,library)
        XCTAssertEqual(store.archive.personaConversations?[second.id.uuidString]?.memories,"另一张记忆")
        try store.savePersonas(library,selected:second.id,modelKey:"native")
        XCTAssertEqual(store.archive.messages.first?.content,"另一张卡")
        try store.savePersonas(library,selected:first,modelKey:"native")
        let loaded = LocalStore(directory:path)
        XCTAssertEqual(loaded.currentSession?.id,newID)
        XCTAssertTrue(loaded.archive.messages.isEmpty)
        XCTAssertTrue(loaded.archive.memories.isEmpty)
        XCTAssertTrue(loaded.archive.diary.isEmpty)
        try loaded.chooseConversation(originalID)
        XCTAssertEqual(loaded.currentSession?.title,"原有对话")
        XCTAssertEqual(loaded.archive.messages.first?.content,"旧聊天")
        XCTAssertEqual(loaded.archive.memories,"旧记忆")
        XCTAssertEqual(loaded.archive.diary.first?.text,"保留日记")
        try loaded.chooseConversation(newID)
        XCTAssertEqual(loaded.currentSession?.title,"新对话")
        XCTAssertTrue(loaded.archive.messages.isEmpty)
        XCTAssertTrue(loaded.archive.memories.isEmpty)
        XCTAssertTrue(loaded.archive.diary.isEmpty)
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
