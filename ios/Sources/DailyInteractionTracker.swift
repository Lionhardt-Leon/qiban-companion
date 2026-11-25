import Foundation
import SwiftUI

struct DailyInteractionRecord: Codable, Equatable, Identifiable {
    var id: String { "\(dateKey)|\(cardKey)" }
    var dateKey: String            // yyyy-MM-dd
    var cardKey: String            // PersonaCard UUID or "default"
    var characterName: String
    var callCount: Int = 0
    var callSeconds: Int = 0
    var touchCount: Int = 0
    var touchBreakdown: [String: Int] = [:]
    var homeMessageCount: Int = 0
    var chatMessageCount: Int = 0
    var recentHighlights: [String] = []
    var diaryGeneratedAt: Date? = nil
    var updatedAt: Date = Date()

    var totalMessages: Int { homeMessageCount + chatMessageCount }
    var hasInteractions: Bool { callSeconds > 0 || callCount > 0 || touchCount > 0 || totalMessages > 0 }
    var callMinutes: Int { max(callSeconds > 0 ? 1 : 0, Int(round(Double(callSeconds) / 60.0))) }

    var summaryLine: String {
        var parts: [String] = []
        if callCount > 0 || callSeconds > 0 {
            parts.append("通话 \(max(1, callCount)) 次（约 \(callMinutes) 分钟）")
        }
        if touchCount > 0 {
            let topTouches = touchBreakdown.sorted { $0.value > $1.value }.prefix(3).map { "\($0.key)\($0.value)次" }.joined(separator: "、")
            parts.append("触碰 \(touchCount) 次" + (topTouches.isEmpty ? "" : "（\(topTouches)）"))
        }
        if totalMessages > 0 {
            parts.append("对话 \(totalMessages) 轮")
        }
        return parts.isEmpty ? "今天还没有互动记录" : parts.joined(separator: " · ")
    }
}

@MainActor
final class DailyInteractionTracker: ObservableObject {
    static let shared = DailyInteractionTracker()

    @Published private(set) var records: [String: DailyInteractionRecord] = [:]
    @Published private(set) var generating = false
    @Published var autoDiaryEnabled: Bool {
        didSet { UserDefaults.standard.set(autoDiaryEnabled, forKey: Self.autoKey) }
    }

    private static let autoKey = "qiban.diary.auto24h.v1"
    private static var fileURL: URL {
        FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask)[0]
            .appendingPathComponent(AppIdentity.storageNamespace, isDirectory: true)
            .appendingPathComponent("daily-interactions-v1.json")
    }

    private static let dayFormatter: DateFormatter = {
        let f = DateFormatter()
        f.calendar = Calendar(identifier: .gregorian)
        f.locale = Locale(identifier: "en_US_POSIX")
        f.dateFormat = "yyyy-MM-dd"
        return f
    }()

    private init() {
        if UserDefaults.standard.object(forKey: Self.autoKey) == nil {
            self.autoDiaryEnabled = true
        } else {
            self.autoDiaryEnabled = UserDefaults.standard.bool(forKey: Self.autoKey)
        }
        load()
    }

    static func dateKey(for date: Date = Date()) -> String {
        dayFormatter.string(from: date)
    }

    private func recordKey(dateKey: String, cardKey: String) -> String {
        "\(dateKey)|\(cardKey)"
    }

    private func load() {
        guard let data = try? Data(contentsOf: Self.fileURL),
              let list = try? JSONDecoder().decode([DailyInteractionRecord].self, from: data) else {
            records = [:]
            return
        }
        var map: [String: DailyInteractionRecord] = [:]
        for r in list { map[r.id] = r }
        records = map
    }

    private func persist() {
        // Keep last 60 days to bound file size cleanly
        let cutoff = Calendar.current.date(byAdding: .day, value: -60, to: Date()) ?? Date()
        let cutoffKey = Self.dateKey(for: cutoff)
        let kept = records.values.filter { $0.dateKey >= cutoffKey }.sorted { $0.updatedAt > $1.updatedAt }
        do {
            let dir = Self.fileURL.deletingLastPathComponent()
            try FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
            let data = try JSONEncoder().encode(kept)
            try data.write(to: Self.fileURL, options: [.atomic, .completeFileProtection])
        } catch {}
    }

    private func mutate(cardID: UUID?, characterName: String, date: Date = Date(), _ block: (inout DailyInteractionRecord) -> Void) {
        let dKey = Self.dateKey(for: date)
        let cKey = cardID?.uuidString ?? "default"
        let key = recordKey(dateKey: dKey, cardKey: cKey)
        var rec = records[key] ?? DailyInteractionRecord(dateKey: dKey, cardKey: cKey, characterName: characterName.isEmpty ? "伙伴" : characterName)
        if !characterName.isEmpty { rec.characterName = characterName }
        block(&rec)
        rec.updatedAt = Date()
        records[key] = rec
        persist()
    }

    func todayRecord(cardID: UUID?, characterName: String) -> DailyInteractionRecord {
        let dKey = Self.dateKey()
        let cKey = cardID?.uuidString ?? "default"
        return records[recordKey(dateKey: dKey, cardKey: cKey)]
            ?? DailyInteractionRecord(dateKey: dKey, cardKey: cKey, characterName: characterName.isEmpty ? "伙伴" : characterName)
    }

    func recordCall(cardID: UUID?, characterName: String, seconds: Int) {
        guard seconds >= 3 else { return }
        mutate(cardID: cardID, characterName: characterName) { rec in
            rec.callCount += 1
            rec.callSeconds += seconds
        }
    }

    func recordTouch(cardID: UUID?, characterName: String, rawSummary: String) {
        let label = Self.normalizeTouchPart(rawSummary)
        mutate(cardID: cardID, characterName: characterName) { rec in
            rec.touchCount += 1
            rec.touchBreakdown[label, default: 0] += 1
        }
    }

    func recordChatTurn(cardID: UUID?, characterName: String, isCommunications: Bool, userText: String) {
        let snippet = userText.trimmingCharacters(in: .whitespacesAndNewlines)
        mutate(cardID: cardID, characterName: characterName) { rec in
            if isCommunications { rec.chatMessageCount += 1 }
            else { rec.homeMessageCount += 1 }
            if !snippet.isEmpty && !snippet.hasPrefix("[") {
                let short = String(snippet.prefix(70))
                if rec.recentHighlights.last != short {
                    rec.recentHighlights.append(short)
                    if rec.recentHighlights.count > 12 {
                        rec.recentHighlights.removeFirst(rec.recentHighlights.count - 12)
                    }
                }
            }
        }
    }

    private static func normalizeTouchPart(_ text: String) -> String {
        if text.contains("头") || text.contains("发") { return "摸头" }
        if text.contains("脸") || text.contains("颊") { return "摸脸" }
        if text.contains("手") || text.contains("指") { return "牵手" }
        if text.contains("肩") { return "拍肩" }
        if text.contains("腰") { return "拥抱/触腰" }
        if text.contains("腿") || text.contains("脚") || text.contains("足") { return "触碰腿足" }
        return "亲近互动"
    }

    // MARK: - 24-Hour Automatic & Manual AI Diary Generation

    func autoGenerateIfDue(store: LocalStore) {
        guard autoDiaryEnabled, !generating, store.storageReady else { return }
        let todayKey = Self.dateKey()
        let activeCardID = store.currentCard?.id
        let activeCardKey = activeCardID?.uuidString ?? "default"

        // Find any past day (within last 3 days) for the active character that had interactions and no diary yet,
        // OR if >24h have elapsed since the latest diary and today has interactions.
        let pastCandidates = records.values
            .filter { $0.cardKey == activeCardKey && $0.dateKey < todayKey && $0.hasInteractions && $0.diaryGeneratedAt == nil }
            .sorted { $0.dateKey < $1.dateKey }
        if let duePast = pastCandidates.last {
            Task { _ = try? await generateDiary(store: store, dateKey: duePast.dateKey) }
            return
        }
        // Also check if current day has interactions and >= 24 hours passed since last diary entry
        if let todayRec = records[recordKey(dateKey: todayKey, cardKey: activeCardKey)],
           todayRec.hasInteractions,
           todayRec.diaryGeneratedAt == nil {
            let lastDiaryDate = store.archive.diary.first?.createdAt
            if let last = lastDiaryDate, Date().timeIntervalSince(last) >= 86_400 {
                Task { _ = try? await generateDiary(store: store, dateKey: todayKey) }
            }
        }
    }

    @discardableResult
    func generateDiary(store: LocalStore, dateKey: String? = nil) async throws -> String {
        guard !generating else { throw CompanionError.message("正在生成日记，请稍候。") }
        generating = true
        defer { generating = false }

        let targetDate = dateKey ?? Self.dateKey()
        let card = store.currentCard
        let cardID = card?.id
        let cardKey = cardID?.uuidString ?? "default"
        let charName = (card?.name.isEmpty == false ? card!.name : nil) ?? "伙伴"
        let library = store.archive.settings.personas
        let userName: String = {
            if let u = card?.userName, !u.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty { return u }
            if let u = library?.userName, !u.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty { return u }
            return "你"
        }()

        let rec = records[recordKey(dateKey: targetDate, cardKey: cardKey)]
            ?? DailyInteractionRecord(dateKey: targetDate, cardKey: cardKey, characterName: charName)

        let statsLines = buildStatsReport(rec: rec, userName: userName, charName: charName)
        var diaryText: String? = nil

        // Try generating a warm character-perspective diary via configured main LLM API
        let settings = store.archive.settings
        if !settings.endpoint.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty,
           !settings.model.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty,
           let url = try? APIClient.endpoint(settings.endpoint) {
            let key = (try? store.mainKey()) ?? ""
            var request = URLRequest(url: url)
            request.httpMethod = "POST"
            request.timeoutInterval = 60
            request.setValue("application/json", forHTTPHeaderField: "Content-Type")
            if !key.isEmpty { request.setValue("Bearer " + key, forHTTPHeaderField: "Authorization") }
            let personaSnippet = [card?.description, card?.personality].compactMap { $0 }.filter { !$0.isEmpty }.joined(separator: "\n").prefix(1200)
            let sysPrompt = """
            你是「\(charName)」。请以你的第一人称口吻，写一篇今天（\(targetDate)）和「\(userName)」相处后的私人日记。
            要求：
            1. 严格基于下方提供的【真实互动统计】与【今日聊过的话题片段】来写，不要凭空编造未发生的通话时长或事件；
            2. 自然融入真实数据（比如打电话聊了多少分钟、摸头或触碰了几次、聊了什么），流露角色的真实情绪和温度；
            3. 字数控制在 120～260 字，直接输出日记正文，不要输出 JSON 或标题说明。
            角色参考：\(personaSnippet)
            """
            let turns: [ChatRequest.Turn] = [
                .init(role: "system", content: sysPrompt),
                .init(role: "user", content: statsLines)
            ]
            request.httpBody = try? JSONEncoder().encode(ChatRequest(model: settings.model, messages: turns, temperature: 0.75, max_tokens: 600))
            let session = ServiceClient.session()
            defer { session.invalidateAndCancel() }
            if let data = try? await ServiceClient.data(request, session: session, limit: 256_000, label: "AI 日记生成"),
               let parsed = try? JSONDecoder().decode(ChatResponse.self, from: data),
               let content = parsed.choices.first?.message.content?.trimmingCharacters(in: .whitespacesAndNewlines),
               !content.isEmpty {
                diaryText = content
            }
        }

        let finalBody = diaryText ?? buildFallbackDiary(rec: rec, userName: userName, charName: charName)
        let entryText = "【\(targetDate) 互动日记】\n\(finalBody)\n\n—— 统计：\(rec.summaryLine)"
        try store.addDiary(entryText)

        mutate(cardID: cardID, characterName: charName, date: Self.dayFormatter.date(from: targetDate) ?? Date()) { item in
            item.diaryGeneratedAt = Date()
        }
        return entryText
    }

    private func buildStatsReport(rec: DailyInteractionRecord, userName: String, charName: String) -> String {
        var lines: [String] = [
            "【日期】\(rec.dateKey)",
            "【用户称呼】\(userName)",
            "【角色名称】\(charName)",
            "【真实互动统计】"
        ]
        if rec.callCount > 0 || rec.callSeconds > 0 {
            lines.append("- 语音/视频通话：\(max(1, rec.callCount)) 次，累计约 \(rec.callMinutes) 分钟（\(rec.callSeconds) 秒）")
        } else {
            lines.append("- 语音/视频通话：0 次")
        }
        if rec.touchCount > 0 {
            let detail = rec.touchBreakdown.sorted { $0.value > $1.value }.map { "\($0.key) \($0.value) 次" }.joined(separator: "，")
            lines.append("- 身体触碰互动：共 \(rec.touchCount) 次（\(detail)）")
        } else {
            lines.append("- 身体触碰互动：0 次")
        }
        lines.append("- 文字对话：主页 \(rec.homeMessageCount) 轮，通讯 \(rec.chatMessageCount) 轮，合计 \(rec.totalMessages) 轮")
        if !rec.recentHighlights.isEmpty {
            lines.append("【今日聊过的话题片段】")
            for h in rec.recentHighlights { lines.append("- \(h)") }
        }
        return lines.joined(separator: "\n")
    }

    private func buildFallbackDiary(rec: DailyInteractionRecord, userName: String, charName: String) -> String {
        if !rec.hasInteractions {
            return "今天和\(userName)安静地各自忙碌了一天，希望明天能多聊一会儿。"
        }
        var sentences: [String] = []
        if rec.callSeconds > 0 {
            sentences.append("今天\(userName)和\(charName)打电话聊了约 \(rec.callMinutes) 分钟（共 \(max(1, rec.callCount)) 通）")
        }
        if rec.touchCount > 0 {
            let top = rec.touchBreakdown.sorted { $0.value > $1.value }.prefix(2).map { "\($0.key)了\($0.value)下" }.joined(separator: "、")
            sentences.append(top.isEmpty ? "还亲近互动了 \(rec.touchCount) 次" : "还\(top)")
        }
        if rec.totalMessages > 0 {
            sentences.append("一起聊了 \(rec.totalMessages) 轮话")
        }
        return sentences.joined(separator: "，") + "，是很开心的一天。"
    }
}
