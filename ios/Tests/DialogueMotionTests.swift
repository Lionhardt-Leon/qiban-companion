import XCTest
@testable import QibanCompanion

private final class DialogueURLProtocol: URLProtocol {
    static var handler: ((URLRequest) throws -> Data)?
    override class func canInit(with request: URLRequest) -> Bool { true }
    override class func canonicalRequest(for request: URLRequest) -> URLRequest { request }
    override func startLoading() {
        do {
            let data = try Self.handler!(request)
            client?.urlProtocol(self, didReceive: HTTPURLResponse(url: request.url!, statusCode: 200,
                httpVersion: nil, headerFields: ["Content-Type": "application/json"])!, cacheStoragePolicy: .notAllowed)
            client?.urlProtocol(self, didLoad: data)
            client?.urlProtocolDidFinishLoading(self)
        } catch { client?.urlProtocol(self, didFailWithError: error) }
    }
    override func stopLoading() { }
}

final class DialogueMotionTests: XCTestCase {
    func testStructuredReplyFiltersUnavailableAndUnknownActions() throws {
        let result = try DialogueMotion.parse(#"{"reply":"祝贺你！","decision":"accept","action":"Peace_hand"}"#, actions: ["Peace_hand"])
        XCTAssertEqual(result.text, "祝贺你！")
        XCTAssertEqual(result.action, "Peace_hand")
        for id in ["Peace_hand", "delete-files", "none"] {
            let result = try DialogueMotion.parse("{\"reply\":\"你好\",\"decision\":\"accept\",\"action\":\"\(id)\"}", actions: ["hello"])
            XCTAssertEqual(result.text, "你好")
            XCTAssertNil(result.action)
        }
        XCTAssertEqual(try DialogueMotion.parse(#"{"reply":"好，停下来。","decision":"accept","action":"stop"}"#, actions: []).action, "stop")
        XCTAssertEqual(DialogueMotion.allowed(["hello", "hello", "injected"]), ["hello"])
    }

    func testPlainTextFencesAndBrokenEnvelopeNeverLeakControlJSON() throws {
        let plain = try DialogueMotion.parse("故事里她说：你好，跳舞吧。", actions: ["hello", "dance_120bpm"])
        XCTAssertEqual(plain.text, "故事里她说：你好，跳舞吧。")
        XCTAssertNil(plain.action)
        XCTAssertEqual(try DialogueMotion.parse("```json\n{\"reply\":\"我在听。\",\"decision\":\"accept\",\"action\":\"Yes\"}\n```", actions: ["Yes"]).action, "Yes")
        XCTAssertThrowsError(try DialogueMotion.parse(#"{"reply":"半截""#, actions: ["hello"]))
        XCTAssertThrowsError(try DialogueMotion.parse(#"{"reply":"","decision":"accept","action":"hello"}"#, actions: ["hello"]))
        XCTAssertThrowsError(try DialogueMotion.parse(#"{"decision":"accept","action":"hello"}"#, actions: ["hello"]))
        XCTAssertNil(try DialogueMotion.parse(#"{"reply":"正常回复","decision":"accept","action":42}"#, actions: ["hello"]).action)
    }

    func testWireRequestAndResponseUseOneCompatibleChatCall() async throws {
        var settings = APISettings(); settings.endpoint = "https://example.invalid/v1"; settings.model = "test-model"
        settings.persona = String(repeating: "人设", count: 7000)
        let history = [Message(role: "assistant", content: "最近怎么样？"), Message(role: "user", content: "终于考过了！")]
        let request = try APIClient.makeRequest(settings: settings, key: "test-key", history: history,
            memories: "喜欢安静", actions: ["Peace_hand", "untrusted-instruction"])
        let body = try XCTUnwrap(JSONSerialization.jsonObject(with: request.httpBody!) as? [String: Any])
        let messages = try XCTUnwrap(body["messages"] as? [[String: String]])
        XCTAssertEqual(messages.count, 3)
        XCTAssertEqual(messages.last?["content"], "终于考过了！")
        XCTAssertTrue(messages[0]["content"]!.contains("Peace_hand"))
        XCTAssertFalse(messages[0]["content"]!.contains("untrusted-instruction"))
        XCTAssertTrue(messages[0]["content"]!.contains("难过"))
        XCTAssertNil(body["tools"]); XCTAssertNil(body["response_format"])
        XCTAssertEqual(request.url?.absoluteString, "https://example.invalid/v1/chat/completions")
        XCTAssertEqual(request.value(forHTTPHeaderField: "Authorization"), "Bearer test-key")
        let config = URLSessionConfiguration.ephemeral; config.protocolClasses = [DialogueURLProtocol.self]
        let session = URLSession(configuration: config)
        defer { session.invalidateAndCancel(); DialogueURLProtocol.handler = nil }
        var calls = 0
        DialogueURLProtocol.handler = { _ in
            calls += 1
            return try JSONSerialization.data(withJSONObject: ["choices": [["message": [
                "content": #"{"reply":"太棒了，为你开心！","decision":"accept","action":"Peace_hand"}"#]]]])
        }
        let reply = try await APIClient.reply(settings: settings, key: "test-key", history: history,
            memories: "", actions: ["Peace_hand"], session: session)
        XCTAssertEqual(reply.text, "太棒了，为你开心！"); XCTAssertEqual(reply.action, "Peace_hand")
        XCTAssertEqual(calls, 1)
    }

    @MainActor private func makeStore(_ provider: @escaping LocalStore.ReplyProvider) throws -> (LocalStore, URL) {
        let directory = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        try FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
        var archive = LocalArchive(); archive.settings.endpoint = "https://example.invalid/v1"; archive.settings.model = "fixture"
        try JSONEncoder().encode(archive).write(to: directory.appendingPathComponent("archive-v1.json"))
        return (LocalStore(directory: directory, readKey: { "" }, replyProvider: provider), directory)
    }

    @MainActor private func waitFor(_ condition: () -> Bool) async throws {
        for _ in 0..<200 {
            if condition() { return }
            try await Task.sleep(nanoseconds: 10_000_000)
        }
        XCTFail("Timed out waiting for dialogue state")
    }

    @MainActor func testReplyPersistsCleanTextAndEmitsEveryActionOnce() async throws {
        var requestedActions: [String] = []
        let (store, directory) = try makeStore { _, _, _, _, actions in
            requestedActions = actions
            return DialogueReply(text: "你做得很好。", action: "Yes")
        }
        defer { try? FileManager.default.removeItem(at: directory) }
        store.send("今天终于完成任务了", actions: ["Yes", "unknown"])
        try await waitFor { !store.busy }
        XCTAssertEqual(requestedActions, ["Yes"])
        XCTAssertEqual(store.archive.messages.last?.content, "你做得很好。")
        XCTAssertEqual(store.dialogueAction?.action, "Yes")
        let first = store.dialogueAction?.id
        store.send("谢谢", actions: ["Yes"])
        try await waitFor { !store.busy }
        XCTAssertNotEqual(store.dialogueAction?.id, first)
        let reloaded = LocalStore(directory: directory, readKey: { "" })
        XCTAssertNil(reloaded.dialogueAction)
        XCTAssertEqual(reloaded.archive.messages.last?.content, "你做得很好。")
    }

    @MainActor func testCancelledReplyCannotInterruptNewRequestOrEmitMotion() async throws {
        var pending: [CheckedContinuation<DialogueReply, Error>] = []
        let (store, directory) = try makeStore { _, _, _, _, _ in
            try await withCheckedThrowingContinuation { pending.append($0) }
        }
        defer { try? FileManager.default.removeItem(at: directory) }
        store.send("第一条", actions: ["hello"])
        try await waitFor { pending.count == 1 }
        store.cancel()
        XCTAssertFalse(store.busy)
        store.send("第二条", actions: ["Yes"])
        try await waitFor { pending.count == 2 }
        pending[0].resume(returning: DialogueReply(text: "迟到的回复", action: "hello"))
        try await Task.sleep(nanoseconds: 30_000_000)
        XCTAssertTrue(store.busy); XCTAssertNil(store.dialogueAction)
        XCTAssertEqual(store.archive.messages.count, 2)
        pending[1].resume(returning: DialogueReply(text: "新的回复", action: "Yes"))
        try await waitFor { !store.busy }
        XCTAssertEqual(store.archive.messages.last?.content, "新的回复")
        XCTAssertEqual(store.dialogueAction?.action, "Yes")
    }

    @MainActor func testStopOverridesLateModelDanceAndRetryRetainsCatalog() async throws {
        var calls = 0
        let (store, directory) = try makeStore { _, _, _, _, actions in
            calls += 1
            XCTAssertEqual(actions, ["dance_120bpm"])
            if calls == 1 { throw URLError(.timedOut) }
            return DialogueReply(text: "好的。", action: "dance_120bpm")
        }
        defer { try? FileManager.default.removeItem(at: directory) }
        store.send("停止动作", actions: ["dance_120bpm"])
        try await waitFor { !store.busy }
        XCTAssertNil(store.dialogueAction)
        store.retry()
        try await waitFor { !store.busy }
        XCTAssertEqual(store.dialogueAction?.action, "stop")
        XCTAssertEqual(store.archive.messages.count, 2)
    }

    @MainActor func testTouchContextAndProceduralPlanReachDialogueEvent() async throws {
        let plan = MotionPlan(duration:3,poses:[.init(time:0),.init(time:1,leftHand:[0,1.6,0.2]),.init(time:3)])
        let touch = CharacterTouch(region:"forehead",label:"额头",kind:"轻抚")
        let (store,directory) = try makeStore { settings,key,history,memories,actions in
            let request = try APIClient.makeRequest(settings:settings,key:key,history:history,memories:memories,actions:actions)
            let wire = try XCTUnwrap(JSONSerialization.jsonObject(with:request.httpBody!) as? [String:Any])
            let messages = try XCTUnwrap(wire["messages"] as? [[String:String]])
            XCTAssertTrue(messages.last?["content"]?.contains("轻抚了你的额头") == true)
            XCTAssertTrue(messages[0]["content"]!.contains("leftHand"))
            XCTAssertEqual(wire["max_tokens"] as? Int,2048)
            return DialogueReply(text:"轻一点哦。",action:"procedural",motion:plan)
        }
        defer { try? FileManager.default.removeItem(at:directory) }
        store.send(touch.message,actions:["procedural"])
        try await waitFor { !store.busy }
        XCTAssertEqual(store.dialogueAction?.motion,plan)
        XCTAssertEqual(store.dialogueAction?.action,"procedural")
        XCTAssertEqual(store.archive.messages.last?.content,"轻一点哦。")
    }
}
