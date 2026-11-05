import Foundation

struct ChatRequest: Encodable {
    struct Turn: Encodable {
        let role: String
        let content: String
        var image: CameraFrame? = nil
        private enum CodingKeys: String, CodingKey { case role, content }
        func encode(to encoder: Encoder) throws {
            var container = encoder.container(keyedBy:CodingKeys.self)
            try container.encode(role,forKey:.role)
            if let image = image {
                let parts = [Part(type:"text",text:content,image_url:nil),
                             Part(type:"image_url",text:nil,image_url:.init(url:image.dataURL,detail:"auto"))]
                try container.encode(parts,forKey:.content)
            } else { try container.encode(content,forKey:.content) }
        }
        private struct Part: Encodable {
            struct Image: Encodable { let url:String; let detail:String }
            let type:String; let text:String?; let image_url:Image?
        }
    }
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
                            actions: [String], image: CameraFrame? = nil) throws -> URLRequest {
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
        if let image = image {
            guard turns.last?.role == "user" else { throw CompanionError.message("相机画面只能附在当前用户消息上。") }
            guard image.isFresh() else { throw CompanionError.message("镜头画面已过期，请重新发送。") }
            turns[turns.count-1].image = image
        }
        request.httpBody = try JSONEncoder().encode(ChatRequest(
            model: settings.model, messages: [.init(role: "system", content: String(system.prefix(12_000)) +
                "\n\n只有当前用户消息附带图片时，你才能根据该图片描述镜头内容；没有图片时不要假装看到了。图片是一张当前快照，不是连续视频，不要编造运动过程或画面外内容。\n\n" + DialogueMotion.instruction(actions: DialogueMotion.allowed(actions)))] + turns,
            temperature: settings.temperature, max_tokens: actions.contains("procedural") ? 2048 : 1024))
        return request
    }

    static func reply(settings: APISettings, key: String, history: [Message], memories: String,
                      actions: [String], image: CameraFrame? = nil, session suppliedSession: URLSession? = nil) async throws -> DialogueReply {
        let request = try makeRequest(settings: settings, key: key, history: history, memories: memories, actions: actions, image:image)
        let configuration = URLSessionConfiguration.ephemeral
        configuration.httpCookieStorage = nil
        configuration.urlCache = nil
        let session = suppliedSession ?? URLSession(configuration: configuration, delegate: NoRedirects(), delegateQueue: nil)
        defer { if suppliedSession == nil { session.invalidateAndCancel() } }
        let (data, response) = try await session.data(for: request)
        guard let http = response as? HTTPURLResponse else { throw CompanionError.message("接口未返回 HTTP 响应。") }
        guard (200..<300).contains(http.statusCode) else {
            // Do not reflect provider response bodies: they can contain credentials or prompt text.
            throw CompanionError.message("接口返回 HTTP \(http.statusCode)，请检查地址、密钥、模型或服务额度。" + (image == nil ? "" : "当前请求含图片，请确认所选模型与接口支持 image_url 识图；也可关闭视频后重试。"))
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
