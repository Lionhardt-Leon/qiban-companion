import Foundation
import SwiftUI
import Security

enum APIKeyStore {
    private static var service:String { AppIdentity.keychainService }
    static func read() throws -> String {
        var query = base
        query[kSecReturnData as String] = true
        query[kSecMatchLimit as String] = kSecMatchLimitOne
        var result: CFTypeRef?
        let status = SecItemCopyMatching(query as CFDictionary, &result)
        if status == errSecItemNotFound { return "" }
        guard status == errSecSuccess, let data = result as? Data,
              let key = String(data: data, encoding: .utf8) else {
            throw CompanionError.message("无法读取钥匙串密钥，请解锁设备后重试。")
        }
        return key
    }
    private static var base: [String: Any] {
        [kSecClass as String: kSecClassGenericPassword, kSecAttrService as String: service,
         kSecAttrAccount as String: "chat-api"]
    }
    static func write(_ key: String) throws {
        let status: OSStatus
        if key.isEmpty {
            status = SecItemDelete(base as CFDictionary)
            if status == errSecItemNotFound { return }
        } else {
            let attributes: [String: Any] = [kSecValueData as String: Data(key.utf8),
                kSecAttrAccessible as String: kSecAttrAccessibleWhenUnlockedThisDeviceOnly]
            let updated = SecItemUpdate(base as CFDictionary, attributes as CFDictionary)
            if updated == errSecItemNotFound {
                status = SecItemAdd(base.merging(attributes) { _, new in new } as CFDictionary, nil)
            } else { status = updated }
        }
        guard status == errSecSuccess else { throw CompanionError.message("密钥保存失败（\(status)）。") }
    }
}

@MainActor final class LocalStore: ObservableObject {
    typealias ReplyProvider = (APISettings, String, [Message], String, [String]) async throws -> DialogueReply
    typealias VisionReplyProvider = (APISettings, String, [Message], String, [String], CameraFrame) async throws -> DialogueReply
    @Published private(set) var archive = LocalArchive()
    @Published private(set) var busy = false
    @Published var error: String?
    @Published private(set) var storageReady = false
    @Published private(set) var dialogueAction: DialogueActionEvent?
    private let directory: URL
    private let file: URL
    private var requestTask: Task<Void, Never>?
    private var requestID: UUID?
    private var availableActions: [String] = []
    private let replyProvider: ReplyProvider
    private let visionReplyProvider: VisionReplyProvider
    private var pendingImage: CameraFrame?
    private var context = CompanionContext()
    private let readKey: () throws -> String

    init(directory: URL? = nil, readKey: @escaping () throws -> String = APIKeyStore.read,
         replyProvider: @escaping ReplyProvider = { settings, key, history, memories, actions in
             try await APIClient.reply(settings: settings, key: key, history: history, memories: memories, actions: actions)
         }, visionReplyProvider: @escaping VisionReplyProvider = { settings,key,history,memories,actions,image in
             try await APIClient.reply(settings:settings,key:key,history:history,memories:memories,actions:actions,image:image)
         }) {
        self.readKey = readKey
        self.replyProvider = replyProvider
        self.visionReplyProvider = visionReplyProvider
        self.directory = directory ?? FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask)[0]
            .appendingPathComponent(AppIdentity.storageNamespace, isDirectory: true)
        file = self.directory.appendingPathComponent("archive-v1.json")
        do {
            try FileManager.default.createDirectory(at: self.directory, withIntermediateDirectories: true)
            if FileManager.default.fileExists(atPath: file.path) {
                let loaded = try JSONDecoder().decode(LocalArchive.self, from: Data(contentsOf: file))
                try loaded.validate()
                archive = loaded
            }
            storageReady = true
        } catch {
            self.error = "本地资料读取失败，已停止写入以保留原文件：\(error.localizedDescription)"
        }
    }

    private func commit(_ next: LocalArchive) throws {
        guard storageReady else { throw CompanionError.message("本地存储未就绪，未覆盖原数据。") }
        try next.validate()
        let data = try JSONEncoder().encode(next)
        try data.write(to: file, options: [.atomic, .completeFileProtection])
        archive = next
    }

    var currentCard:PersonaCard? {archive.settings.personas?.card(for:context.modelKey)}
    private func switchConversation(_ next:inout LocalArchive,to key:String) {
        guard next.personaSessionKey != key else {return}
        if next.personaSessionKey == nil {
            // The first structured card inherits the pre-upgrade conversation without copying or erasing it.
            next.personaSessionKey = key;return
        }
        var sessions = next.personaConversations ?? [:]
        sessions[next.personaSessionKey!] = PersonaConversation(messages:next.messages,memories:next.memories,diary:next.diary)
        let restored = sessions.removeValue(forKey:key) ?? PersonaConversation()
        next.messages = restored.messages;next.memories = restored.memories;next.diary = restored.diary
        next.personaSessionKey = key;next.personaConversations = sessions
    }
    func activateCompanion(_ modelKey:String) {
        guard ["native","enya"].contains(modelKey) else {return}
        if let card = archive.settings.personas?.card(for:modelKey),archive.personaSessionKey != card.id.uuidString {
            cancel();var next = archive;switchConversation(&next,to:card.id.uuidString)
            do {try commit(next)} catch {self.error = error.localizedDescription;return}
        }
        context.modelKey = modelKey
    }
    func savePersonas(_ library:PersonaLibrary,selected:UUID,modelKey:String) throws {
        guard !busy,storageReady else {throw CompanionError.message("请等待当前回复完成后保存人设。")}
        guard ["native","enya"].contains(modelKey),library.cards.contains(where:{$0.id == selected}) else {throw CompanionError.message("角色卡或伙伴映射无效。")}
        var library = library;library.modelBindings[modelKey] = selected;try library.validate()
        var next = archive;next.schemaVersion = 2;next.settings.personas = library
        // New cards must start empty even when chosen on the very first migration save.
        if next.personaSessionKey == nil {next.personaSessionKey = library.defaultCardID?.uuidString}
        var checkContext = context;checkContext.modelKey = modelKey
        _ = try PersonaPrompt.character(settings:next.settings,context:checkContext)
        if let card = library.card(for:context.modelKey) {switchConversation(&next,to:card.id.uuidString)}
        try commit(next)
    }
    func insertGreeting(_ index:Int) throws {
        guard !busy,archive.messages.isEmpty,let card = currentCard,card.firstMessages.indices.contains(index) else {throw CompanionError.message("开场白仅在当前角色的空对话中使用。")}
        let library = archive.settings.personas!
        let user = card.userName.isEmpty ? (library.userName.isEmpty ? "你":library.userName):card.userName
        let text = PersonaPrompt.substitute(card.firstMessages[index],char:card.name,user:user)
        var next = archive;next.messages.append(Message(role:"assistant",content:text));try commit(next)
    }

    func saveSettings(_ settings: APISettings, key: String) throws {
        guard !busy else { throw CompanionError.message("请等待当前回复完成。") }
        _ = try APIClient.endpoint(settings.endpoint)
        guard !settings.model.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty else {
            throw CompanionError.message("请填写模型名称。")
        }
        let oldKey = try APIKeyStore.read()
        try APIKeyStore.write(key)
        var next = archive
        next.settings = settings
        do { try commit(next) } catch {
            try? APIKeyStore.write(oldKey)
            throw error
        }
    }

    func send(_ text: String, actions: [String] = [], image: CameraFrame? = nil, context suppliedContext:CompanionContext? = nil) {
        let text = text.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !text.isEmpty, !busy else { return }
        do {
            if let suppliedContext = suppliedContext {
                activateCompanion(suppliedContext.modelKey)
                guard context.modelKey == suppliedContext.modelKey else {throw CompanionError.message("当前角色人设切换失败，请检查本地存储。")}
                context = suppliedContext
            } else {context.origin = "文字对话"}
            guard text.count <= 8_000 else { throw CompanionError.message("单条消息请控制在 8000 字以内。") }
            _ = try APIClient.endpoint(archive.settings.endpoint)
            guard !archive.settings.model.isEmpty else { throw CompanionError.message("请先配置模型。") }
            let key = try readKey()
            if let image = image, !image.isFresh() { throw CompanionError.message("相机画面已过期，请重新取景。") }
            var next = archive
            next.messages.append(Message(role: "user", content: text))
            try commit(next)
            availableActions = DialogueMotion.allowed(actions)
            pendingImage = image
            beginReply(key: key)
        } catch { self.error = error.localizedDescription }
    }

    func retry() {
        guard !busy, archive.messages.last?.role == "user" else { return }
        do {
            guard pendingImage == nil else { throw CompanionError.message("含镜头画面的请求请重新发送，以便附带最新画面。") }
            beginReply(key: try readKey())
        }
        catch { self.error = error.localizedDescription }
    }

    private func beginReply(key: String) {
        error = nil
        busy = true
        dialogueAction = nil
        let id = UUID()
        requestID = id
        let snapshot = archive
        var settings = snapshot.settings;settings.runtimeContext = context
        let actions = availableActions
        let image = pendingImage
        requestTask = Task {
            defer { if requestID == id { busy = false; requestTask = nil; requestID = nil } }
            do {
                let reply: DialogueReply
                if let image = image { reply = try await visionReplyProvider(settings,key,snapshot.messages,snapshot.memories,actions,image) }
                else { reply = try await replyProvider(settings, key, snapshot.messages, snapshot.memories, actions) }
                try Task.checkCancellation()
                guard requestID == id else { return }
                var next = archive
                next.messages.append(Message(role: "assistant", content: reply.text))
                try commit(next)
                pendingImage = nil
                let action = DialogueMotion.isStopRequest(snapshot.messages.last?.content ?? "") ? "stop" : reply.action
                if let action = action, action == "stop" || actions.contains(action) {
                    dialogueAction = DialogueActionEvent(action: action, motion: action == "procedural" ? reply.motion : nil)
                }
            } catch is CancellationError { }
            catch let failure as URLError where failure.code == .cancelled { }
            catch { if requestID == id { self.error = error.localizedDescription } }
        }
    }

    func cancel() {
        requestTask?.cancel(); requestID = nil; requestTask = nil; busy = false; dialogueAction = nil; pendingImage = nil
    }
    func discardCameraFrame() { pendingImage = nil }
    func saveMemories(_ text: String) throws {
        var next = archive; next.memories = text; try commit(next)
    }
    func addDiary(_ text: String) throws {
        guard !text.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty else { return }
        var next = archive; next.diary.insert(JournalEntry(text: text), at: 0); try commit(next)
    }
    func export() throws -> Data { try JSONEncoder().encode(archive) }
    func restore(_ data: Data) throws {
        guard !busy else { throw CompanionError.message("请先停止当前回复再恢复备份。") }
        guard data.count <= 50_000_000 else { throw CompanionError.message("备份超过 50MB。") }
        let restored = try JSONDecoder().decode(LocalArchive.self, from: data)
        try restored.validate()
        let snapshot = directory.appendingPathComponent("before-restore-\(UUID().uuidString).json")
        try export().write(to: snapshot, options: [.atomic, .completeFileProtection])
        // An imported endpoint must not inherit a credential intended for another service.
        let endpointChanged = restored.settings.endpoint != archive.settings.endpoint
        var oldKey = ""
        if endpointChanged {
            oldKey = try APIKeyStore.read()
            try APIKeyStore.write("")
        }
        do { try commit(restored) } catch {
            if endpointChanged { try? APIKeyStore.write(oldKey) }
            throw error
        }
    }
}
