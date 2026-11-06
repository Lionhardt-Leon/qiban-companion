import Foundation

struct APISettings: Codable {
    var endpoint = ""
    var model = ""
    var persona = "你是一位温柔、自然的中文 AI 伴侣。认真倾听，回复简洁，不编造共同经历。"
    var temperature = 0.7
    var personas:PersonaLibrary? = nil
    var speech:SpeechPreferences? = nil
    var runtimeContext:CompanionContext? = nil
    var runtimeImages:[CameraFrame] = []
    private enum CodingKeys:String,CodingKey {case endpoint,model,persona,temperature,personas,speech}
}

struct Message: Codable, Identifiable {
    var id = UUID()
    var role: String
    var content: String
    var spokenJapanese:String? = nil
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
    var personaConversations:[String:PersonaConversation]? = nil
    var personaSessionKey:String? = nil
    var moods:[String:CompanionMood]? = nil

    func validate() throws {
        guard (moods?.count ?? 0)<=64,(moods ?? [:]).keys.allSatisfy({$0.count<=80}) else{throw CompanionError.message("心情资料过多。")};for mood in (moods ?? [:]).values {try mood.validate()}
        try settings.personas?.validate()
        try settings.speech?.validate()
        let saved = Array((personaConversations ?? [:]).values)
        guard saved.count <= 51,
              saved.reduce(messages.count,{$0+$1.messages.count}) <= 100_000,
              saved.reduce(diary.count,{$0+$1.diary.count}) <= 100_000,
              saved.allSatisfy({session in
                  session.messages.allSatisfy({["user","assistant"].contains($0.role)}) &&
                  Set(session.messages.map(\.id)).count == session.messages.count && Set(session.diary.map(\.id)).count == session.diary.count
              }) else {throw CompanionError.message("角色独立对话资料无效或超过保存上限。")}
        guard [1,2].contains(schemaVersion),schemaVersion == 2 || (settings.personas == nil && personaConversations == nil && personaSessionKey == nil) else { throw CompanionError.message("备份版本暂不支持，原数据未变更。") }
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
