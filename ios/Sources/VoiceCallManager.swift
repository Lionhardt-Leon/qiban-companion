import Foundation
import SwiftUI
import Combine
import AVFoundation
import UIKit

enum VoiceCallMode: String, Codable, Equatable {
    case fullPhone   // Full phone UI (or docked left/right bar), supports screen-lock keepalive
    case inAppLite   // Minimal horizontal hang-up bar over Home or GAL, hangs up on background
}

enum VoiceCallLayout: String, Codable, CaseIterable, Identifiable {
    case fullScreen
    case dockLeft
    case dockRight
    var id: String { rawValue }
    var title: String {
        switch self {
        case .fullScreen: return "全屏覆盖"
        case .dockLeft: return "缩到左侧"
        case .dockRight: return "缩到右侧"
        }
    }
}

enum VoiceCallColorPreset: String, CaseIterable, Identifiable {
    case indigo, obsidian, sakura, lavender, cocoa, forest
    var id: String { rawValue }
    var title: String {
        switch self {
        case .indigo: return "深空靛蓝"
        case .obsidian: return "静夜曜黑"
        case .sakura: return "柔雾樱粉"
        case .lavender: return "薰衣草紫"
        case .cocoa: return "暖茶可可"
        case .forest: return "松柏深绿"
        }
    }
    var colors: [Color] {
        switch self {
        case .indigo: return [Color(red: 0.12, green: 0.15, blue: 0.32), Color(red: 0.05, green: 0.06, blue: 0.14)]
        case .obsidian: return [Color(red: 0.11, green: 0.11, blue: 0.14), Color(red: 0.03, green: 0.03, blue: 0.05)]
        case .sakura: return [Color(red: 0.42, green: 0.22, blue: 0.30), Color(red: 0.16, green: 0.08, blue: 0.13)]
        case .lavender: return [Color(red: 0.27, green: 0.20, blue: 0.44), Color(red: 0.10, green: 0.08, blue: 0.20)]
        case .cocoa: return [Color(red: 0.30, green: 0.21, blue: 0.16), Color(red: 0.12, green: 0.08, blue: 0.06)]
        case .forest: return [Color(red: 0.10, green: 0.26, blue: 0.21), Color(red: 0.04, green: 0.11, blue: 0.09)]
        }
    }
}

struct VoiceCallTheme: Codable, Equatable {
    var colorPreset: String = VoiceCallColorPreset.indigo.rawValue
    var useBackgroundImage: Bool = false
    var layout: VoiceCallLayout = .fullScreen
    var speakerphone: Bool = true
    var bluetoothOnly: Bool = false
    var preferEnhancedRecognition: Bool? = nil
    var silenceSeconds: Double? = nil

    var isEnhancedRecognitionEnabled: Bool { preferEnhancedRecognition ?? true }
    var effectiveSilenceSeconds: Double { min(max(silenceSeconds ?? 1.4, 0.8), 2.5) }
    var preset: VoiceCallColorPreset { VoiceCallColorPreset(rawValue: colorPreset) ?? .indigo }

    private static let defaultsKey = "qiban.voiceCall.theme.v1"
    static func load() -> VoiceCallTheme {
        guard let data = UserDefaults.standard.data(forKey: defaultsKey),
              let value = try? JSONDecoder().decode(VoiceCallTheme.self, from: data) else {
            return VoiceCallTheme()
        }
        return value
    }
    func save() {
        if let data = try? JSONEncoder().encode(self) {
            UserDefaults.standard.set(data, forKey: Self.defaultsKey)
        }
    }
}

enum VoiceCallMediaStore {
    static var directory: URL {
        FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask)[0]
            .appendingPathComponent(AppIdentity.storageNamespace, isDirectory: true)
            .appendingPathComponent("CallTheme", isDirectory: true)
    }

    static var backgroundURL: URL { directory.appendingPathComponent("background.jpg") }

    static func avatarURL(cardKey: String) -> URL {
        let safe = cardKey.isEmpty ? "default" : cardKey.filter { $0.isLetter || $0.isNumber || $0 == "-" || $0 == "_" }
        return directory.appendingPathComponent("avatar-\(safe.isEmpty ? "default" : safe).jpg")
    }

    static func loadBackground() -> UIImage? {
        guard let data = try? Data(contentsOf: backgroundURL) else { return nil }
        return UIImage(data: data)
    }

    static func saveBackground(_ jpeg: Data) throws {
        try FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
        try jpeg.write(to: backgroundURL, options: [.atomic, .completeFileProtection])
    }

    static func clearBackground() {
        try? FileManager.default.removeItem(at: backgroundURL)
    }

    static func loadAvatar(cardKey: String) -> UIImage? {
        if let data = try? Data(contentsOf: avatarURL(cardKey: cardKey)), let img = UIImage(data: data) { return img }
        if cardKey != "default", let data = try? Data(contentsOf: avatarURL(cardKey: "default")), let img = UIImage(data: data) { return img }
        return nil
    }

    static func saveAvatar(_ jpeg: Data, cardKey: String) throws {
        try FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
        try jpeg.write(to: avatarURL(cardKey: cardKey), options: [.atomic, .completeFileProtection])
    }

    static func clearAvatar(cardKey: String) {
        try? FileManager.default.removeItem(at: avatarURL(cardKey: cardKey))
    }
}

@MainActor final class VoiceCallManager: ObservableObject {
    @Published private(set) var active = false
    @Published private(set) var mode: VoiceCallMode = .fullPhone
    @Published private(set) var characterName = "伙伴"
    @Published private(set) var cardID: UUID? = nil
    @Published private(set) var conversationID: String? = nil
    @Published private(set) var phase = ""
    @Published private(set) var elapsedSeconds = 0
    @Published private(set) var lastUserText = ""
    @Published private(set) var lastReplyText = ""
    @Published private(set) var liveTranscript = ""
    @Published private(set) var muted = false
    @Published private(set) var busy = false
    @Published private(set) var bluetoothConnected = false
    @Published private(set) var routeLabel = "扬声器"
    @Published var errorMessage: String? = nil
    @Published var showingThemeSheet = false
    @Published var theme: VoiceCallTheme = VoiceCallTheme.load() {
        didSet {
            theme.save()
            if active {
                senses.configureCallAudio(speakerphone: theme.speakerphone, bluetoothOnly: theme.bluetoothOnly, keepSessionActive: mode == .fullPhone)
                senses.updateRecognitionOptions(
                    preferEnhanced: theme.isEnhancedRecognitionEnabled,
                    silenceSeconds: theme.effectiveSilenceSeconds,
                    contextualStrings: buildContextualStrings()
                )
                refreshAudioRoute()
            }
        }
    }
    @Published private(set) var backgroundImage: UIImage? = VoiceCallMediaStore.loadBackground()
    @Published private(set) var avatarImage: UIImage? = nil

    let senses = CompanionSenses()
    let camera = RearCamera()

    private weak var store: LocalStore?
    private weak var speech: CompanionSpeech?
    private var actionsProvider: (() -> [String])?
    private var onHomeAction: ((DialogueActionEvent) -> Void)?
    private var onChatTurn: ((UUID, String, UUID, String, String?, String?, String?) -> Void)?
    private var utteranceSub: AnyCancellable?
    private var sensesStatusSub: AnyCancellable?
    private var liveTranscriptSub: AnyCancellable?
    private var routeObserver: NSObjectProtocol?
    private var timer: Timer?
    private var startedAt: Date?
    private var turnTask: Task<Void, Never>?
    private var callTicket = UUID()

    var usesRemoteASR: Bool { store?.archive.settings.services?.asr.enabled == true }

    init() {
        utteranceSub = senses.$utterance.compactMap { $0 }.sink { [weak self] event in
            Task { @MainActor [weak self] in self?.handleRecognizedSpeech(event.text) }
        }
        sensesStatusSub = senses.$status.sink { [weak self] text in
            guard let self = self, self.active, !self.busy, !text.isEmpty else { return }
            self.phase = text
        }
        liveTranscriptSub = senses.$liveTranscript.sink { [weak self] text in
            guard let self = self else { return }
            self.liveTranscript = text
        }
        routeObserver = NotificationCenter.default.addObserver(forName: AVAudioSession.routeChangeNotification, object: nil, queue: .main) { [weak self] _ in
            Task { @MainActor [weak self] in self?.refreshAudioRoute() }
        }
        refreshAudioRoute()
    }

    private func buildContextualStrings() -> [String] {
        var terms: [String] = []
        func add(_ raw: String?) {
            let v = (raw ?? "").trimmingCharacters(in: .whitespacesAndNewlines)
            if !v.isEmpty && v.count <= 24 && !terms.contains(v) { terms.append(v) }
        }
        add(characterName)
        if let personas = store?.archive.settings.personas {
            add(personas.userName)
            if let cardID = cardID, let card = personas.cards.first(where: { $0.id == cardID }) {
                add(card.name)
                add(card.title)
                add(card.userName)
            }
            for card in personas.cards.prefix(20) { add(card.name) }
        }
        return Array(terms.prefix(32))
    }

    func commitCurrentSpeechNow() {
        guard active, !busy else { return }
        senses.commitNow()
    }

    deinit {
        if let obs = routeObserver { NotificationCenter.default.removeObserver(obs) }
    }

    var currentCardKey: String { cardID?.uuidString ?? "default" }

    var formattedDuration: String {
        let m = elapsedSeconds / 60
        let s = elapsedSeconds % 60
        return String(format: "%02d:%02d", m, s)
    }

    func refreshAudioRoute() {
        let outputs = AVAudioSession.sharedInstance().currentRoute.outputs
        let bt = outputs.first { [.bluetoothHFP, .bluetoothA2DP, .bluetoothLE, .headphones, .usbAudio, .carAudio].contains($0.portType) }
        bluetoothConnected = bt != nil
        if let bt = bt {
            routeLabel = "蓝牙/耳机 · \(bt.portName)"
        } else if theme.bluetoothOnly {
            routeLabel = "未连蓝牙（已防外放）"
        } else {
            routeLabel = theme.speakerphone ? "免提扬声器" : "听筒"
        }
    }

    func reloadMedia() {
        backgroundImage = VoiceCallMediaStore.loadBackground()
        avatarImage = VoiceCallMediaStore.loadAvatar(cardKey: currentCardKey)
    }

    func start(
        mode: VoiceCallMode,
        store: LocalStore,
        speech: CompanionSpeech,
        cardID: UUID? = nil,
        characterName: String? = nil,
        conversationID: String? = nil,
        actionsProvider: (() -> [String])? = nil,
        onHomeAction: ((DialogueActionEvent) -> Void)? = nil,
        onChatTurn: ((UUID, String, UUID, String, String?, String?, String?) -> Void)? = nil
    ) {
        if active { hangUp() }
        guard !store.archive.settings.endpoint.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty,
              !store.archive.settings.model.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty else {
            store.error = "请先在设置中配置对话模型 API，再发起语音通话。"
            return
        }
        self.store = store
        self.speech = speech
        self.mode = mode
        self.cardID = cardID ?? store.currentCard?.id
        self.characterName = (characterName?.isEmpty == false ? characterName! : nil) ?? store.currentCard?.name ?? "伙伴"
        self.conversationID = conversationID
        self.actionsProvider = actionsProvider
        self.onHomeAction = onHomeAction
        self.onChatTurn = onChatTurn
        self.callTicket = UUID()
        self.active = true
        self.muted = false
        self.busy = false
        self.errorMessage = nil
        self.lastUserText = ""
        self.lastReplyText = ""
        self.startedAt = Date()
        self.elapsedSeconds = 0
        self.phase = "正在接通，准备聆听…"
        reloadMedia()
        refreshAudioRoute()

        speech.stop()
        speech.prewarm(preferences: store.archive.settings.speech ?? SpeechPreferences(), inCall: true)
        timer?.invalidate()
        timer = Timer.scheduledTimer(withTimeInterval: 1, repeats: true) { [weak self] _ in
            Task { @MainActor [weak self] in
                guard let self = self, self.active, let start = self.startedAt else { return }
                self.elapsedSeconds = max(0, Int(Date().timeIntervalSince(start)))
                self.refreshAudioRoute()
            }
        }
        senses.startVoice(
            remote: store.archive.settings.services?.asr,
            speakerphone: theme.speakerphone,
            bluetoothOnly: theme.bluetoothOnly,
            keepSessionActive: mode == .fullPhone,
            preferEnhancedRecognition: theme.isEnhancedRecognitionEnabled,
            silenceSeconds: theme.effectiveSilenceSeconds,
            contextualStrings: buildContextualStrings()
        )
    }

    func hangUp() {
        callTicket = UUID()
        turnTask?.cancel()
        turnTask = nil
        timer?.invalidate()
        timer = nil
        active = false
        busy = false
        muted = false
        phase = ""
        errorMessage = nil
        senses.stop()
        speech?.stop()
        camera.stop()
        onHomeAction = nil
        onChatTurn = nil
        actionsProvider = nil
    }

    func toggleMute() {
        guard active else { return }
        muted.toggle()
        if muted {
            senses.prepareReply()
            phase = "已静音麦克风"
        } else if !busy {
            phase = "正在聆听…"
            senses.startVoice(
                remote: store?.archive.settings.services?.asr,
                speakerphone: theme.speakerphone,
                bluetoothOnly: theme.bluetoothOnly,
                keepSessionActive: mode == .fullPhone,
                preferEnhancedRecognition: theme.isEnhancedRecognitionEnabled,
                silenceSeconds: theme.effectiveSilenceSeconds,
                contextualStrings: buildContextualStrings()
            )
        }
    }

    func toggleSpeakerphone() {
        theme.speakerphone.toggle()
        if theme.speakerphone && theme.bluetoothOnly {
            theme.bluetoothOnly = false
        }
        refreshAudioRoute()
    }

    func toggleBluetoothOnly() {
        theme.bluetoothOnly.toggle()
        if theme.bluetoothOnly {
            theme.speakerphone = false
            if !CompanionSpeech.isBluetoothOrHeadphonesConnected() {
                speech?.stop()
                phase = "未连接蓝牙耳机，已防外放"
            }
        }
        refreshAudioRoute()
    }

    func toggleVideo() {
        guard active, mode == .fullPhone else { return }
        camera.toggle()
    }

    func interruptAndListen() {
        guard active else { return }
        turnTask?.cancel()
        turnTask = nil
        busy = false
        speech?.stop()
        muted = false
        phase = "正在聆听…"
        senses.startVoice(
            remote: store?.archive.settings.services?.asr,
            speakerphone: theme.speakerphone,
            bluetoothOnly: theme.bluetoothOnly,
            keepSessionActive: mode == .fullPhone,
            preferEnhancedRecognition: theme.isEnhancedRecognitionEnabled,
            silenceSeconds: theme.effectiveSilenceSeconds,
            contextualStrings: buildContextualStrings()
        )
    }

    func handleScenePhase(_ scenePhase: ScenePhase) {
        guard active else { return }
        if scenePhase != .active {
            if mode == .inAppLite {
                hangUp()
            } else {
                // Full phone mode stays alive in background / lock screen via audio background mode.
                if camera.enabled { camera.stop() }
            }
        } else {
            refreshAudioRoute()
        }
    }

    private func handleRecognizedSpeech(_ rawText: String) {
        let spoken = rawText.trimmingCharacters(in: .whitespacesAndNewlines)
        guard active, !muted, !busy, !spoken.isEmpty, let store = store, let speech = speech else { return }
        let ticket = callTicket
        busy = true
        lastUserText = spoken
        errorMessage = nil
        senses.prepareReply()
        phase = "对方正在思考…"

        turnTask = Task { @MainActor [weak self] in
            guard let self = self else { return }
            do {
                var settings = store.archive.settings
                if var personas = settings.personas, !personas.cards.isEmpty {
                    let validIDs = Set(personas.cards.map(\.id))
                    personas.modelBindings = personas.modelBindings.filter { PersonaLibrary.validModelKey($0.key) && validIDs.contains($0.value) }
                    if let cardID = self.cardID, validIDs.contains(cardID) {
                        personas.defaultCardID = cardID
                        personas.modelBindings["native"] = cardID
                    } else if personas.defaultCardID == nil || !validIDs.contains(personas.defaultCardID!) {
                        personas.defaultCardID = personas.cards.first?.id
                    }
                    settings.personas = personas
                }
                let actions = self.actionsProvider?() ?? []
                let speechPrefs = settings.speech ?? SpeechPreferences()
                var context = CompanionContext(
                    modelKey: "native",
                    modelName: self.characterName,
                    mode: self.mode == .fullPhone ? "实时语音通话" : "App 内实时轻通话",
                    origin: "实时语音通话",
                    speechLanguage: speechPrefs.language,
                    mood: store.mood.summary,
                    isVoiceCall: true
                )
                let frame = self.camera.enabled ? (try? await self.camera.frame()) : nil
                if frame != nil { context.imageSources = ["后置实时镜头画面"] }
                settings.runtimeContext = context

                let historySlice = store.voiceCallHistory(for: self.cardID)
                let userMessage = Message(role: "user", content: spoken)
                let key = try store.mainKey()
                let reply = try await APIClient.reply(
                    settings: settings,
                    key: key,
                    history: historySlice + [userMessage],
                    memories: store.voiceCallMemories(for: self.cardID),
                    actions: actions,
                    image: frame
                )
                try Task.checkCancellation()
                guard self.active, self.callTicket == ticket else { return }

                let assistantMessage = Message(
                    role: "assistant",
                    content: reply.text,
                    spokenJapanese: reply.spokenJapanese,
                    spokenChinese: reply.spokenChinese,
                    sources: reply.sources.isEmpty ? nil : reply.sources
                )
                store.appendVoiceCallTurn(cardID: self.cardID, user: userMessage, assistant: assistantMessage)
                self.lastReplyText = assistantMessage.displayContent
                if let action = reply.action {
                    self.onHomeAction?(DialogueActionEvent(action: action, motion: reply.motion))
                }
                self.onChatTurn?(
                    userMessage.id,
                    userMessage.content,
                    assistantMessage.id,
                    assistantMessage.displayContent,
                    assistantMessage.resolvedSpokenChinese,
                    assistantMessage.resolvedSpokenJapanese,
                    reply.action
                )

                self.refreshAudioRoute()
                if self.theme.bluetoothOnly && !CompanionSpeech.isBluetoothOrHeadphonesConnected() {
                    self.phase = "未连接蓝牙耳机，已拦截外放（可点文字查看）"
                    self.busy = false
                    if !self.muted {
                        self.senses.resumeAfterPlayback()
                    }
                    return
                }

                self.senses.preparePlayback()
                self.phase = "对方正在说话…"
                var callPrefs = speechPrefs
                callPrefs.enabled = true
                speech.speak(
                    assistantMessage,
                    preferences: callPrefs,
                    remote: settings.services?.tts,
                    inCall: true,
                    speakerphone: self.theme.speakerphone,
                    bluetoothOnly: self.theme.bluetoothOnly
                ) { [weak self] _ in
                    Task { @MainActor [weak self] in
                        guard let self = self, self.active, self.callTicket == ticket else { return }
                        self.busy = false
                        if !self.muted {
                            self.phase = "正在聆听…"
                            self.senses.resumeAfterPlayback()
                        }
                    }
                }
            } catch is CancellationError {
                self.busy = false
            } catch {
                guard self.active, self.callTicket == ticket else { return }
                self.busy = false
                self.errorMessage = error.localizedDescription
                self.phase = "本轮回复失败，可继续说话重试"
                if !self.muted {
                    self.senses.startVoice(
                        remote: store.archive.settings.services?.asr,
                        speakerphone: self.theme.speakerphone,
                        bluetoothOnly: self.theme.bluetoothOnly,
                        keepSessionActive: self.mode == .fullPhone,
                        preferEnhancedRecognition: self.theme.isEnhancedRecognitionEnabled,
                        silenceSeconds: self.theme.effectiveSilenceSeconds,
                        contextualStrings: self.buildContextualStrings()
                    )
                }
            }
        }
    }
}
