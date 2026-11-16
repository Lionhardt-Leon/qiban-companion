import Foundation

struct APISettings: Codable {
    var endpoint = ""
    var model = ""
    var persona = "你是一位温柔、自然的中文 AI 伴侣。认真倾听，回复简洁，不编造共同经历。"
    var temperature = 0.7
    var personas:PersonaLibrary? = nil
    var speech:SpeechPreferences? = nil
    var services:ServiceRouting? = nil
    var runtimeContext:CompanionContext? = nil
    var runtimeImages:[CameraFrame] = []
    var runtimeSearchRequested=false
    private enum CodingKeys:String,CodingKey {case endpoint,model,persona,temperature,personas,speech,services}
}

struct Message: Codable, Identifiable {
    var id = UUID()
    var role: String
    var content: String
    var spokenJapanese:String? = nil
    var spokenChinese:String? = nil
    var sources:[WebCitation]? = nil
    var createdAt = Date()

    // Recover older messages saved before prose + JSON replies were decoded.
    // This is presentation only and never dispatches the recovered action.
    private var recoveredReply:DialogueReply? {
        guard role=="assistant",content.contains("\"reply\"") else{return nil}
        return try? DialogueMotion.parse(content,actions:[])
    }
    var displayContent:String {recoveredReply?.text ?? content}
    var resolvedSpokenChinese:String? {spokenChinese ?? recoveredReply?.spokenChinese}
    var resolvedSpokenJapanese:String? {
        if let value=spokenJapanese,!value.trimmingCharacters(in:.whitespacesAndNewlines).isEmpty {return value}
        return recoveredReply?.spokenJapanese
    }
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
    var chatResetTokens:[String:String]? = nil
    var chatContactOrigins:[String:String]? = nil
    var conversationSessions:[ConversationSession]? = nil
    var activeSessionIDs:[String:String]? = nil
    var sessionHistories:[String:PersonaConversation]? = nil

    func validate() throws {
        guard (chatResetTokens?.count ?? 0)<=100,(chatResetTokens ?? [:]).allSatisfy({$0.key.count<=80 && $0.value.count<=80}) else {throw CompanionError.message("对话重置标记无效。")}
        guard (chatContactOrigins?.count ?? 0)<=50,(chatContactOrigins ?? [:]).allSatisfy({$0.key.count<=80 && $0.value.count<=80}) else {throw CompanionError.message("通讯角色映射无效。")}
        guard (moods?.count ?? 0)<=64,(moods ?? [:]).keys.allSatisfy({$0.count<=80}) else{throw CompanionError.message("心情资料过多。")};for mood in (moods ?? [:]).values {try mood.validate()}
        try settings.personas?.validate()
        try settings.speech?.validate()
        try settings.services?.validate()
        let sessions=conversationSessions ?? [],active=activeSessionIDs ?? [:],histories=sessionHistories ?? [:]
        for session in sessions{try session.mood?.validate()}
        guard sessions.count<=1000,Set(sessions.map(\.id)).count==sessions.count,
              sessions.allSatisfy({UUID(uuidString:$0.id) != nil && !$0.personaKey.isEmpty && $0.personaKey.count<=80 && !$0.title.isEmpty && $0.title.count<=120 && ($0.externalID?.count ?? 0)<=100}),
              active.allSatisfy({key,value in sessions.contains{$0.id==value && $0.personaKey==key}}),
              histories.keys.allSatisfy({id in sessions.contains{$0.id==id} && !active.values.contains(id)}) else{throw CompanionError.message("历史对话索引无效，原资料未变更。")}
        let saved = Array((personaConversations ?? [:]).values)+Array(histories.values)
        func validSources(_ values:[Message])->Bool {values.allSatisfy{message in (message.sources?.count ?? 0)<=5 && (message.sources?.allSatisfy{$0.title.count<=200 && $0.url.count<=4096 && $0.snippet.count<=1200 && $0.link != nil} ?? true)}}
        guard validSources(messages),saved.allSatisfy({validSources($0.messages)}) else {throw CompanionError.message("联网来源资料无效。")}
        guard saved.count <= 1051,
              saved.reduce(messages.count,{$0+$1.messages.count}) <= 100_000,
              saved.reduce(diary.count,{$0+$1.diary.count}) <= 100_000,
              saved.allSatisfy({session in
                  session.messages.allSatisfy({["user","assistant"].contains($0.role)}) &&
                  Set(session.messages.map(\.id)).count == session.messages.count && Set(session.diary.map(\.id)).count == session.diary.count
              }) else {throw CompanionError.message("角色独立对话资料无效或超过保存上限。")}
        guard [1,2,3].contains(schemaVersion),(schemaVersion>=2 || (settings.personas == nil && personaConversations == nil && personaSessionKey == nil)),(schemaVersion>=3 || (conversationSessions==nil && activeSessionIDs==nil && sessionHistories==nil)) else { throw CompanionError.message("备份版本暂不支持，原数据未变更。") }
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
