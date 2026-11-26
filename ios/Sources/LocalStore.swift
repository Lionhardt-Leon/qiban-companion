import Foundation
import SwiftUI
import Security

enum APIKeyStore {
    private static var service:String { AppIdentity.keychainService }
    struct MainSecret: Codable {
        let endpoint: String
        let value: String
        func key(for address: String) -> String {
            APIKeyStore.identity(address) == endpoint ? value : ""
        }
    }

    static func identity(_ address: String) -> String? {
        guard let url = try? APIClient.endpoint(address),
              var parts = URLComponents(url:url,resolvingAgainstBaseURL:false),
              let host = parts.host else { return nil }
        parts.scheme = "https"
        parts.host = host.lowercased()
        if parts.port == 443 { parts.port = nil }
        return parts.url?.absoluteString
    }

    // An invalid UTF-8 prefix distinguishes bound records from legacy text.
    private static let mainFormat = Data([0xff, 0x51, 0x01])

    static func read(forSavedEndpoint address: String) throws -> String {
        var query = base
        query[kSecReturnData as String] = true
        query[kSecMatchLimit as String] = kSecMatchLimitOne
        var result: CFTypeRef?
        let status = SecItemCopyMatching(query as CFDictionary, &result)
        if status == errSecItemNotFound { return "" }
        guard status == errSecSuccess, let data = result as? Data else {
            throw CompanionError.message("无法读取钥匙串密钥，请解锁设备后重试。")
        }
        if data.starts(with:mainFormat) {
            let record = try JSONDecoder().decode(MainSecret.self,from:Data(data.dropFirst(mainFormat.count)))
            return record.key(for:address)
        }
        guard let legacy = String(data:data,encoding:.utf8) else { throw CompanionError.message("主接口凭据格式无效。") }
        guard identity(address) != nil else { return "" }
        try write(legacy, for:address)
        return legacy
    }
    private static var base: [String: Any] {
        [kSecClass as String: kSecClassGenericPassword, kSecAttrService as String: service,
         kSecAttrAccount as String: "chat-api"]
    }
    static func write(_ key: String, for address: String) throws {
        let status: OSStatus
        if key.isEmpty {
            status = SecItemDelete(base as CFDictionary)
            if status == errSecItemNotFound { return }
        } else {
            guard let endpoint=identity(address), key.utf8.count<=8192,
                  !key.contains("\n"), !key.contains("\r") else {throw CompanionError.message("主接口密钥或地址无效。")}
            let encoded = mainFormat + (try JSONEncoder().encode(MainSecret(endpoint:endpoint,value:key)))
            let attributes: [String: Any] = [kSecValueData as String: encoded,
                kSecAttrAccessible as String: kSecAttrAccessibleWhenUnlockedThisDeviceOnly]
            let updated = SecItemUpdate(base as CFDictionary, attributes as CFDictionary)
            if updated == errSecItemNotFound {
                status = SecItemAdd(base.merging(attributes) { _, new in new } as CFDictionary, nil)
            } else { status = updated }
        }
        guard status == errSecSuccess else { throw CompanionError.message("密钥保存失败（\(status)）。") }
    }
    static func serviceSecret(_ kind:ServiceKind) throws -> ServiceSecret? {
        var query=base;query[kSecAttrAccount as String]="feature-api-"+kind.rawValue
        query[kSecReturnData as String]=true;query[kSecMatchLimit as String]=kSecMatchLimitOne
        var item:CFTypeRef?;let status=SecItemCopyMatching(query as CFDictionary,&item)
        if status==errSecItemNotFound{return nil}
        guard status==errSecSuccess,let data=item as? Data,let record=try? JSONDecoder().decode(ServiceSecret.self,from:data) else {throw CompanionError.message("无法读取独立接口密钥，请解锁设备后重试。")}
        return record
    }
    static func read(kind:ServiceKind,profile:ServiceEndpoint) throws -> String {try serviceSecret(kind)?.key(for:profile) ?? ""}
    static func write(kind:ServiceKind,secret:ServiceSecret?) throws {
        var query=base;query[kSecAttrAccount as String]="feature-api-"+kind.rawValue
        let status:OSStatus
        if let secret=secret {
            guard secret.value.count<=8192,!secret.value.contains("\n"),!secret.value.contains("\r") else {throw CompanionError.message("独立接口密钥格式无效。")}
            let attributes:[String:Any]=[kSecValueData as String:try JSONEncoder().encode(secret),kSecAttrAccessible as String:kSecAttrAccessibleWhenUnlockedThisDeviceOnly]
            let updated=SecItemUpdate(query as CFDictionary,attributes as CFDictionary)
            status=updated==errSecItemNotFound ? SecItemAdd(query.merging(attributes){_,new in new} as CFDictionary,nil):updated
        }else {status=SecItemDelete(query as CFDictionary)}
        guard status==errSecSuccess || status==errSecItemNotFound else {throw CompanionError.message("独立接口密钥保存失败。")}
    }
    static func readPresetKey(id:UUID) throws -> String {
        var query=base;query[kSecAttrAccount as String]="api-preset-"+id.uuidString
        query[kSecReturnData as String]=true;query[kSecMatchLimit as String]=kSecMatchLimitOne
        var item:CFTypeRef?;let status=SecItemCopyMatching(query as CFDictionary,&item)
        if status==errSecItemNotFound {return ""}
        guard status==errSecSuccess,let data=item as? Data,let text=String(data:data,encoding:.utf8) else {throw CompanionError.message("无法读取预设密钥，请解锁设备后重试。")}
        return text
    }
    static func writePresetKey(_ key:String,id:UUID) throws {
        var query=base;query[kSecAttrAccount as String]="api-preset-"+id.uuidString
        let status:OSStatus
        if key.isEmpty {
            status=SecItemDelete(query as CFDictionary)
        } else {
            guard key.utf8.count<=8192,!key.contains("\n"),!key.contains("\r") else {throw CompanionError.message("预设密钥格式无效。")}
            let attributes:[String:Any]=[kSecValueData as String:Data(key.utf8),kSecAttrAccessible as String:kSecAttrAccessibleWhenUnlockedThisDeviceOnly]
            let updated=SecItemUpdate(query as CFDictionary,attributes as CFDictionary)
            status=updated==errSecItemNotFound ? SecItemAdd(query.merging(attributes){_,new in new} as CFDictionary,nil):updated
        }
        guard status==errSecSuccess || status==errSecItemNotFound else {throw CompanionError.message("预设密钥保存失败。")}
    }
    static func deletePresetKey(id:UUID) throws {
        var query=base;query[kSecAttrAccount as String]="api-preset-"+id.uuidString
        let status=SecItemDelete(query as CFDictionary)
        guard status==errSecSuccess || status==errSecItemNotFound else {throw CompanionError.message("删除预设密钥失败。")}
    }
}

@MainActor final class LocalStore: ObservableObject {
    typealias ReplyProvider = (APISettings, String, [Message], String, [String]) async throws -> DialogueReply
    typealias VisionReplyProvider = (APISettings, String, [Message], String, [String], CameraFrame) async throws -> DialogueReply
    @Published private(set) var archive = LocalArchive()
    @Published private(set) var busy = false
    @Published var error: String?
    @Published private(set) var storageReady = false
    @Published private(set) var behaviorStatus="等待本轮行为决定"
    @Published private(set) var dialogueAction: DialogueActionEvent?
    @Published private(set) var replyForSpeech:Message?
    @Published private(set) var conversationID = UUID()
    private let directory: URL
    private let file: URL
    private var requestTask: Task<Void, Never>?
    private var requestID: UUID?
    private var availableActions: [String] = []
    private let replyProvider: ReplyProvider
    private let visionReplyProvider: VisionReplyProvider
    private var pendingImage: CameraFrame?
    private var pendingExtraImages:[CameraFrame] = []
    private var pendingSearch=false
    private var context = CompanionContext()
    private let injectedKey: (() throws -> String)?
    func mainKey() throws -> String {
        if let injectedKey {return try injectedKey()}
        return try APIKeyStore.read(forSavedEndpoint:archive.settings.endpoint)
    }

    init(directory: URL? = nil, readKey: (() throws -> String)? = nil,
         replyProvider: @escaping ReplyProvider = { settings, key, history, memories, actions in
             try await APIClient.reply(settings: settings, key: key, history: history, memories: memories, actions: actions)
         }, visionReplyProvider: @escaping VisionReplyProvider = { settings,key,history,memories,actions,image in
             try await APIClient.reply(settings:settings,key:key,history:history,memories:memories,actions:actions,image:image)
         }) {
        self.injectedKey = readKey
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

    func commit(_ value: LocalArchive) throws {
        guard storageReady else { throw CompanionError.message("本地存储未就绪，未覆盖原数据。") }
        var next=value
        if let owner=next.personaSessionKey,let id=next.activeSessionIDs?[owner],let index=next.conversationSessions?.firstIndex(where:{$0.id==id}) {
            next.conversationSessions?[index].mood=next.moods?[owner]
            if let last=next.messages.last{next.conversationSessions?[index].updatedAt=last.createdAt}
            if next.conversationSessions?[index].title=="新对话",let first=next.messages.first(where:{$0.role=="user"}){next.conversationSessions?[index].title=String(first.displayContent.prefix(36))}
        }
        try next.validate()
        let data = try JSONEncoder().encode(next)
        try data.write(to: file, options: [.atomic, .completeFileProtection])
        archive = next
    }

    private var moodKey:String {currentCard?.id.uuidString ?? "model:"+context.modelKey}
    var mood:CompanionMood {archive.moods?[moodKey] ?? CompanionMood()}
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
    @discardableResult func activatePortrait(id: String, name: String) -> Bool {
        let key = "portrait:" + id
        guard PersonaLibrary.validModelKey(key) else { return false }
        var next = archive
        var library = next.settings.personas ?? PersonaLibrary.migrating(next.settings.persona)
        let bindingChanged = library.modelBindings[key] == nil
        if bindingChanged {
            if let existing = library.cards.first(where: { $0.name == name }) {
                library.modelBindings[key] = existing.id
            } else {
                guard library.cards.count < 50 else {
                    error = "人设卡已满，请先在设置中整理。"
                    return false
                }
                var card = PersonaCard()
                card.title = name + " · 2D"
                card.name = name
                card.description = "你是" + name + "，通过屏幕上的2D剧情立绘与用户面对面。遵守用户已设置的人设；不编造共同经历，动作以素材支持的内容为准。"
                library.cards.append(card)
                library.modelBindings[key] = card.id
            }
            next.schemaVersion = max(next.schemaVersion, 2)
            next.settings.personas = library
        }
        guard let card = library.card(for: key) else { return false }
        let conversationChanged = next.personaSessionKey != card.id.uuidString
        if bindingChanged || conversationChanged {
            // Legacy chat belongs to the migrated default persona, even if a new role is selected first.
            if next.personaSessionKey == nil { next.personaSessionKey = library.defaultCardID?.uuidString }
            switchConversation(&next, to: card.id.uuidString)
            do { try commit(next) }
            catch {
                self.error = error.localizedDescription
                return false
            }
        }
        if conversationChanged || context.modelKey != key { cancel() }
        context.modelKey = key
        return true
    }
    func activateCompanion(_ modelKey:String) {
        guard PersonaLibrary.validModelKey(modelKey) else {return}
        if context.modelKey != modelKey {cancel()}
        if ["fenny","augusta","qingxiao"].contains(modelKey),archive.settings.personas?.modelBindings[modelKey] == nil {
            var next=archive;var library=next.settings.personas ?? PersonaLibrary.migrating(next.settings.persona)
            var card=PersonaCard()
            if modelKey == "fenny" {
                card.title="芬妮 · 婚皮";card.name="芬妮"
                card.description="你通过屏幕上的芬妮婚皮模型陪伴用户。当前服饰、姿势和动作结果以应用每轮提供的身体状态为准；婚纱内衣版仍穿有内衣，不是裸体。不要把其他角色的身份、服饰或经历当作自己的。"
            } else if modelKey == "augusta" {
                card.title="奥古斯塔";card.name="奥古斯塔"
                card.description="你通过屏幕上的奥古斯塔 3D 模型陪伴用户。当前姿势和动作结果以应用每轮提供的身体状态为准。不要把其他角色的身份、服饰或经历当作自己的。"
            } else {
                card.title="清宵";card.name="清宵"
                card.description="你通过屏幕上的清宵 3D 模型陪伴用户。当前姿势和动作结果以应用每轮提供的身体状态为准。不要把其他角色的身份、服饰或经历当作自己的。"
            }
            library.cards.append(card);library.modelBindings[modelKey]=card.id
            if next.personaSessionKey == nil {next.personaSessionKey=library.defaultCardID?.uuidString}
            next.schemaVersion=max(next.schemaVersion,2);next.settings.personas=library
            do {try commit(next)}catch{self.error=error.localizedDescription;return}
        }
        if let card = archive.settings.personas?.card(for:modelKey),archive.personaSessionKey != card.id.uuidString {
            cancel();var next = archive;switchConversation(&next,to:card.id.uuidString)
            do {try commit(next)} catch {self.error = error.localizedDescription;return}
        }
        context.modelKey = modelKey
    }
    func savePersonas(_ library:PersonaLibrary,selected:UUID,modelKey:String) throws {
        guard !busy,storageReady else {throw CompanionError.message("请等待当前回复完成后保存人设。")}
        guard PersonaLibrary.validModelKey(modelKey),library.cards.contains(where:{$0.id == selected}) else {throw CompanionError.message("角色卡或伙伴映射无效。")}
        var library = library;library.modelBindings[modelKey] = selected;try library.validate()
        var next = archive;next.schemaVersion = max(next.schemaVersion,2);next.settings.personas = library
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
        guard storageReady else {throw CompanionError.message("本地资料未就绪。")}
        guard !busy else { throw CompanionError.message("请等待当前回复完成。") }
        _ = try APIClient.endpoint(settings.endpoint)
        guard !settings.model.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty else {
            throw CompanionError.message("请填写模型名称。")
        }
        let oldKey = try APIKeyStore.read(forSavedEndpoint:archive.settings.endpoint)
        try APIKeyStore.write(key, for:settings.endpoint)
        var next = archive
        next.settings = settings
        next.settings.services=archive.settings.services
        do { try commit(next) } catch {
            try? APIKeyStore.write(oldKey, for:archive.settings.endpoint)
            throw error
        }
    }

    func saveService(_ kind:ServiceKind,profile:ServiceEndpoint,key:String) throws {
        guard !busy,storageReady else {throw CompanionError.message("请等待当前回复完成后保存接口。")}
        try profile.validate(for:kind)
        let old=try APIKeyStore.serviceSecret(kind),key=key.trimmingCharacters(in:.whitespacesAndNewlines)
        let secret=profile.credentialIdentity.map{ServiceSecret(identity:$0,value:key)}
        try APIKeyStore.write(kind:kind,secret:secret)
        var next=archive;var services=next.settings.services ?? ServiceRouting();services[kind]=profile;next.settings.services=services
        do {try commit(next)}catch {try? APIKeyStore.write(kind:kind,secret:old);throw error}
    }

    func send(_ text: String, actions: [String] = [], image: CameraFrame? = nil, images:[CameraFrame] = [],context suppliedContext:CompanionContext? = nil,search:Bool=false) {
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
            let key = try mainKey()
            if let image = image, !image.isFresh() { throw CompanionError.message("相机画面已过期，请重新取景。") }
            var next = archive
            next.messages.append(Message(role: "user", content: text))
            try commit(next)
            if !context.origin.contains("触碰") && !context.origin.contains("环境") {
                DailyInteractionTracker.shared.recordChatTurn(cardID: currentCard?.id, characterName: currentCard?.name ?? context.modelName, isCommunications: false, userText: text)
            }
            availableActions = DialogueMotion.allowed(actions)
            pendingImage = image
            pendingExtraImages = images
            pendingSearch=search
            beginReply(key: key)
        } catch { self.error = error.localizedDescription }
    }

    func retry() {
        guard !busy, archive.messages.last?.role == "user" else { return }
        do {
            guard pendingImage == nil,pendingExtraImages.isEmpty else { throw CompanionError.message("含图片的请求请重新发送，以便确认图片与最新状态。") }
            beginReply(key: try mainKey())
        }
        catch { self.error = error.localizedDescription }
    }

    private func beginReply(key: String) {
        error = nil
        busy = true
        dialogueAction = nil
        replyForSpeech = nil
        let id = UUID()
        requestID = id
        let snapshot = archive
        var settings = snapshot.settings
        settings.runtimeSearchRequested=pendingSearch
        var latestContext = context;latestContext.speechLanguage = settings.speech?.language ?? "zh"
        latestContext.mood = mood.summary;settings.runtimeContext = latestContext;settings.runtimeImages = pendingExtraImages
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
                let assistant=Message(role: "assistant", content: reply.text,spokenJapanese:reply.spokenJapanese,spokenChinese:reply.spokenChinese,sources:reply.sources.isEmpty ? nil:reply.sources)
                if let affect=reply.affect {var value=mood;try value.apply(affect);if next.moods == nil {next.moods=[:]};next.moods?[moodKey]=value}
                next.messages.append(assistant)
                try commit(next)
                behaviorStatus=reply.hasBodyDecision || reply.action != nil ? (reply.action.map{"已绑定行为："+$0} ?? "本轮未选择动作") : "接口未返回有效身体决定，本轮仅显示文字"
                replyForSpeech=assistant
                pendingImage = nil
                pendingExtraImages = []
                pendingSearch=false
                let action = DialogueMotion.isStopRequest(snapshot.messages.last?.content ?? "") ? "stop" : reply.action
                if let action = action, action == "stop" || actions.contains(action) {
                    dialogueAction = DialogueActionEvent(action: action, motion: action == "procedural" ? reply.motion : nil)
                }
            } catch is CancellationError { }
            catch let failure as URLError where failure.code == .cancelled { }
            catch { if requestID == id { self.error = error.localizedDescription } }
        }
    }

    func voiceCallHistory(for cardID: UUID?) -> [Message] {
        guard let cardID = cardID else { return archive.messages }
        if archive.personaSessionKey == cardID.uuidString { return archive.messages }
        if let activeID = archive.activeSessionIDs?[cardID.uuidString] {
            return archive.sessionContents(activeID).messages
        }
        return archive.personaConversations?[cardID.uuidString]?.messages ?? archive.messages
    }
    func voiceCallMemories(for cardID: UUID?) -> String {
        guard let cardID = cardID else { return archive.memories }
        if archive.personaSessionKey == cardID.uuidString { return archive.memories }
        if let activeID = archive.activeSessionIDs?[cardID.uuidString] {
            return archive.sessionContents(activeID).memories
        }
        return archive.personaConversations?[cardID.uuidString]?.memories ?? archive.memories
    }
    func appendVoiceCallTurn(cardID: UUID?, user: Message, assistant: Message) {
        var next = archive
        if let cardID = cardID, next.personaSessionKey != cardID.uuidString,
           let activeID = next.activeSessionIDs?[cardID.uuidString] {
            var session = next.sessionContents(activeID)
            session.messages.append(user)
            session.messages.append(assistant)
            next.setSessionContents(session, id: activeID)
        } else {
            next.messages.append(user)
            next.messages.append(assistant)
        }
        try? commit(next)
        let name = archive.settings.personas?.cards.first(where: { $0.id == cardID })?.name ?? currentCard?.name ?? "伙伴"
        DailyInteractionTracker.shared.recordChatTurn(cardID: cardID ?? currentCard?.id, characterName: name, isCommunications: false, userText: user.content)
    }
    func cancel() {
        requestTask?.cancel(); requestID = nil; requestTask = nil; busy = false; dialogueAction = nil;replyForSpeech=nil; pendingImage = nil;pendingExtraImages = [];pendingSearch=false
    }
    func resetConversationIdentity(){conversationID=UUID();dialogueAction=nil;replyForSpeech=nil;error=nil}
    func discardCameraFrame() { if pendingImage?.source == .camera {pendingImage = nil};pendingExtraImages.removeAll{$0.source == .camera} }
    func saveSpeech(_ preferences:SpeechPreferences) throws {
        guard !busy else {throw CompanionError.message("请等待当前回复完成后切换配音。")}
        try preferences.validate()
        var next = archive;next.settings.speech = preferences;try commit(next)
    }
    func setSpeechEnabled(_ enabled:Bool) throws {
        guard storageReady else{throw CompanionError.message("本地存储尚未就绪。")}
        var next=archive
        var preferences=next.settings.speech ?? SpeechPreferences()
        preferences.enabled=enabled;next.settings.speech=preferences;try commit(next)
    }
    func restartConversation() throws {
        try newConversation()
    }
    func saveMemories(_ text: String) throws {
        var next = archive; next.memories = text; try commit(next)
    }
    func addDiary(_ text: String) throws {
        guard !text.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty else { return }
        var next = archive; next.diary.insert(JournalEntry(text: text), at: 0); try commit(next)
    }
    func deleteDiary(at offsets: IndexSet) throws {
        var next = archive; next.diary.remove(atOffsets: offsets); try commit(next)
    }
    static let backupByteLimit = 100 * 1024 * 1024

    static func checkBackupSize(_ bytes: Int) throws {
        guard bytes <= backupByteLimit else {
            throw CompanionError.message("备份超过 100 MiB。")
        }
    }

    func archiveData() throws -> Data { try JSONEncoder().encode(archive) }

    func export() throws -> Data {
        let data = try archiveData()
        try Self.checkBackupSize(data.count)
        return data
    }
    func restore(_ data: Data) throws {
        guard !busy else { throw CompanionError.message("请先停止当前回复再恢复备份。") }
        try Self.checkBackupSize(data.count)
        let restored = try JSONDecoder().decode(LocalArchive.self, from: data)
        try restored.validate()
        let snapshot = directory.appendingPathComponent("before-restore-\(UUID().uuidString).json")
        try archiveData().write(to: snapshot, options: [.atomic, .completeFileProtection])
        // An imported endpoint must not inherit a credential intended for another service.
        let endpointChanged = APIKeyStore.identity(restored.settings.endpoint) != APIKeyStore.identity(archive.settings.endpoint)
        var oldKey = ""
        if endpointChanged {
            oldKey = try APIKeyStore.read(forSavedEndpoint:archive.settings.endpoint)
            try APIKeyStore.write("", for:archive.settings.endpoint)
        }
        do { try commit(restored) } catch {
            if endpointChanged { try? APIKeyStore.write(oldKey, for:archive.settings.endpoint) }
            throw error
        }
    }
}
