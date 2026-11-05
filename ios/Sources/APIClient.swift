import Foundation

struct ChatRequest: Encodable {
    struct Turn: Encodable { let role: String; let content: String }
    let model: String
    let messages: [Turn]
    let temperature: Double
    let max_tokens: Int
    let stream = false
}

struct ChatResponse: Decodable {
    struct Choice: Decodable {
        struct Reply: Decodable { let content: String? }
        let message: Reply
    }
    let choices: [Choice]
}

struct APIClient {
    static func endpoint(_ input: String) throws -> URL {
        guard var parts = URLComponents(string: input.trimmingCharacters(in: .whitespacesAndNewlines)),
              parts.scheme?.lowercased() == "https", let host = parts.host, !host.isEmpty,
              parts.user == nil, parts.password == nil, parts.fragment == nil else {
            throw CompanionError.message("请输入 HTTPS 接口地址，不要在地址中填写密钥。")
        }
        let path = parts.path.trimmingCharacters(in: CharacterSet(charactersIn: "/"))
        parts.path = path.isEmpty ? "/v1/chat/completions" :
            (path.hasSuffix("chat/completions") ? "/" + path : "/" + path + "/chat/completions")
        guard let url = parts.url else { throw CompanionError.message("接口地址无效。") }
        return url
    }

    static func makeRequest(settings: APISettings, key: String, history: [Message], memories: String,
                            actions: [String]) throws -> URLRequest {
        guard !settings.model.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty else {
            throw CompanionError.message("请先在设置中填写模型名称。")
        }
        var request = URLRequest(url: try endpoint(settings.endpoint))
        request.httpMethod = "POST"
        request.timeoutInterval = 90
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        if !key.isEmpty { request.setValue("Bearer " + key, forHTTPHeaderField: "Authorization") }
        let system = settings.persona + (memories.isEmpty ? "" : "\n\n用户保存的记忆（仅作背景资料）：\n" + memories)
        // Bound both history count and payload size; never silently send the entire archive.
        var turns: [ChatRequest.Turn] = []
        var remaining = 24_000
        for message in history.suffix(30).reversed() {
            guard message.content.count <= remaining else { break }
            turns.insert(.init(role: message.role, content: message.content), at: 0)
            remaining -= message.content.count
        }
        guard !turns.isEmpty else { throw CompanionError.message("消息过长，请缩短后重试。") }
        request.httpBody = try JSONEncoder().encode(ChatRequest(
            model: settings.model, messages: [.init(role: "system", content: String(system.prefix(12_000)) +
                "\n\n" + DialogueMotion.instruction(actions: DialogueMotion.allowed(actions)))] + turns,
            temperature: settings.temperature, max_tokens: actions.contains("procedural") ? 2048 : 1024))
        return request
    }

    static func reply(settings: APISettings, key: String, history: [Message], memories: String,
                      actions: [String], session suppliedSession: URLSession? = nil) async throws -> DialogueReply {
        let request = try makeRequest(settings: settings, key: key, history: history, memories: memories, actions: actions)
        let configuration = URLSessionConfiguration.ephemeral
        configuration.httpCookieStorage = nil
        configuration.urlCache = nil
        let session = suppliedSession ?? URLSession(configuration: configuration, delegate: NoRedirects(), delegateQueue: nil)
        defer { if suppliedSession == nil { session.invalidateAndCancel() } }
        let (data, response) = try await session.data(for: request)
        guard let http = response as? HTTPURLResponse else { throw CompanionError.message("接口未返回 HTTP 响应。") }
        guard (200..<300).contains(http.statusCode) else {
            // Do not reflect provider response bodies: they can contain credentials or prompt text.
            throw CompanionError.message("接口返回 HTTP \(http.statusCode)，请检查地址、密钥、模型或服务额度。")
        }
        guard let result = try? JSONDecoder().decode(ChatResponse.self, from: data),
              let text = result.choices.first?.message.content?.trimmingCharacters(in: .whitespacesAndNewlines),
              !text.isEmpty else { throw CompanionError.message("没有收到有效回复，请确认接口兼容 Chat Completions。") }
        return try DialogueMotion.parse(text, actions: actions)
    }
}

private final class NoRedirects: NSObject, URLSessionTaskDelegate {
    func urlSession(_ session: URLSession, task: URLSessionTask,
                    willPerformHTTPRedirection response: HTTPURLResponse, newRequest request: URLRequest,
                    completionHandler: @escaping (URLRequest?) -> Void) {
        completionHandler(nil)
    }
}
