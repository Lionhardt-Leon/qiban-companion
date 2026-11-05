import Foundation

struct APISettings: Codable {
    var endpoint = ""
    var model = ""
    var persona = "你是一位温柔、自然的中文 AI 伴侣。认真倾听，回复简洁，不编造共同经历。"
    var temperature = 0.7
}

struct Message: Codable, Identifiable {
    var id = UUID()
    var role: String
    var content: String
    var createdAt = Date()
}

struct JournalEntry: Codable, Identifiable {
    var id = UUID()
    var text: String
    var createdAt = Date()
}

struct LocalArchive: Codable {
    var schemaVersion = 1
    var settings = APISettings()
    var messages: [Message] = []
    var memories = ""
    var diary: [JournalEntry] = []

    func validate() throws {
        guard schemaVersion == 1 else { throw CompanionError.message("备份版本暂不支持，原数据未变更。") }
        guard messages.count <= 100_000, diary.count <= 100_000,
              messages.allSatisfy({ ["user", "assistant"].contains($0.role) }),
              Set(messages.map(\.id)).count == messages.count,
              Set(diary.map(\.id)).count == diary.count,
              settings.temperature.isFinite, (0...2).contains(settings.temperature) else {
            throw CompanionError.message("备份内容无效，原数据未变更。")
        }
    }
}

enum CompanionError: LocalizedError {
    case message(String)
    var errorDescription: String? {
        switch self { case .message(let text): return text }
    }
}
