import SwiftUI
import UniformTypeIdentifiers

@main struct QibanCompanionApp: App {
    @StateObject private var store = LocalStore()
    @StateObject private var speech = CompanionSpeech()
    init() {
        #if DEBUG
        if ProcessInfo.processInfo.arguments.contains("--ui-enya-fixture") {
            let library = SnowbreakLibrary()
            try? FileManager.default.createDirectory(at:library.directory,withIntermediateDirectories:true)
            try? SnowbreakFixture.data.write(to:library.current,options:.atomic)
            UserDefaults.standard.set("snowbreak",forKey:"characterEngine")
        } else if ProcessInfo.processInfo.arguments.contains("--ui-character-import-fixture") {
            UserDefaults.standard.set("native",forKey:"characterEngine")
        }
        if ProcessInfo.processInfo.arguments.contains("--ui-dialogue-fixture") {
            let directory = FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask)[0]
                .appendingPathComponent("UITestDialogue", isDirectory: true)
            try? FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
            var archive = LocalArchive()
            archive.settings.endpoint = "https://example.invalid/v1"; archive.settings.model = "ui-fixture"
            try? JSONEncoder().encode(archive).write(to: directory.appendingPathComponent("archive-v1.json"), options: .atomic)
            _store = StateObject(wrappedValue: LocalStore(directory: directory, readKey: { "" },
                replyProvider: { _, _, history, _, actions in
                    try await Task.sleep(nanoseconds: 200_000_000)
                    let input=history.last?.content ?? ""
                    let command=BodyCommand.resolve(input)?.rawValue ?? "hello"
                    if input == "拒绝抬手" {return try DialogueMotion.parse(#"{"reply":"我不想抬起来。","decision":"refuse","action":"raise_right_hand"}"#,actions:actions)}
                    let data=try JSONSerialization.data(withJSONObject:["reply":"欢迎回来。","decision":"accept","action":command])
                    return try DialogueMotion.parse(String(decoding:data,as:UTF8.self),actions:actions)
                }))
        }
        if ProcessInfo.processInfo.arguments.contains("--ui-character-import-fixture") {
            UserDefaults.standard.removeObject(forKey:"nativePresentation")
            let fixture = Data(#"{"characterPackageVersion":2,"name":"UI import triangle","parts":[{"mesh":{"name":"UI import triangle","vertices":[[0,0,0],[1,0,0],[0,1,0]],"trianglesBySubmesh":[[[0,1,2]]]},"materials":[{"name":"fixture"}]}],"textures":{},"backgrounds":{"Morning_BG":"iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAAEklEQVR4nGPUiMpjYGBgYgADAAskAPQif5QoAAAAAElFTkSuQmCC"}}"#.utf8)
            var testData = fixture
            if var json = (try? JSONSerialization.jsonObject(with: fixture)) as? [String: Any],
               var parts = json["parts"] as? [[String: Any]] {
                let identity: [Float] = [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1]
                let position: [Float] = [0.2, 0, 0]
                let bytes = position.withUnsafeBufferPointer { Data(buffer: $0) }.base64EncodedString()
                var rootMatrix = identity; rootMatrix[3] = 0.5; rootMatrix[7] = 0.42
                var bind = identity; bind[3] = -0.5; bind[7] = -0.42
                var nodes: [[String:Any]] = [["name":"Root_M","matrix":rootMatrix]]
                @discardableResult func bone(_ name:String,_ parent:Int,_ x:Float,_ y:Float,_ z:Float = 0) -> Int {
                    var m = identity; m[3] = x; m[7] = y; m[11] = z
                    nodes.append(["name":name,"parent":parent,"matrix":m]); return nodes.count-1
                }
                let chest = bone("Chest_M",0,0,0.25)
                bone("Head_M",chest,0,0.14)
                for side in ["L","R"] {
                    let sign:Float = side == "L" ? -1 : 1
                    let shoulder = bone("Shoulder_"+side,chest,sign*0.12,0.04)
                    let elbow = bone("Elbow_"+side,shoulder,sign*0.02,-0.15)
                    bone("Wrist_"+side,elbow,sign*0.01,-0.14,0.01)
                    let hip = bone("Hip_"+side,0,sign*0.06,-0.03)
                    let knee = bone("Knee_"+side,hip,0,-0.15,0.02)
                    bone("Ankle_"+side,knee,0,-0.15,-0.02)
                }
                parts[0]["skin"] = ["vertices": [[0,0,0],[1,0,0],[0,1,0]], "normals": Array(repeating: [0,0,1], count: 3),
                    "weights": Array(repeating: [1,0,0,0], count: 3), "indices": Array(repeating: [0,0,0,0], count: 3),
                    "joints": [0], "bindMatrices": [bind], "morphs": []]
                json["parts"] = parts; json["characterPackageVersion"] = 3
                json["motion"] = ["fps": 30, "frameCount": 601, "loop": true, "nodes": nodes, "tracks": []]
                json["actions"] = [["id": "hello", "name": "挥手打招呼", "fps": 30, "frameCount": 601,
                    "rotations": [], "positions": [["node": 0, "values": bytes]], "scales": [], "morphs": []]]
                testData = (try? JSONSerialization.data(withJSONObject: json)) ?? fixture
            }
            if let directory = try? LocalCharacterFiles.directory() {
                try? testData.write(to: directory.appendingPathComponent("UITest-Triangle.json"), options: .atomic)
            }
        }
        #endif
    }
    var body: some Scene {
        WindowGroup {
            RootView().environmentObject(store).environmentObject(speech)
                .alert("提示", isPresented: Binding(get: { store.error != nil }, set: { if !$0 { store.error = nil } })) {
                    Button("知道了") { store.error = nil }
                } message: { Text(store.error ?? "") }
        }
    }
}

struct RootView: View {
    var body: some View {
        CompanionHome().tint(.white)
    }
}

struct ConversationView: View {
    @EnvironmentObject private var store: LocalStore
    @EnvironmentObject private var speech:CompanionSpeech
    @State private var draft = ""
    var body: some View {
        NavigationStack {
            VStack(spacing: 0) {
                HStack(spacing: 12) {
                    Image(systemName: "sparkles").font(.title).foregroundStyle(.indigo)
                    VStack(alignment: .leading, spacing: 4) {
                        Text("陪伴 · 开发预览").font(.headline)
                        Text("角色与动画迁移中，当前支持文字对话。")
                            .font(.caption).foregroundStyle(.secondary)
                    }
                    Spacer()
                }.padding().background(Color.indigo.opacity(0.07))
                ScrollViewReader { proxy in
                    ScrollView {
                        LazyVStack(alignment: .leading, spacing: 16) {
                            if store.archive.messages.isEmpty {
                                Text("在设置中连接你的 API，再聊聊今天的事。")
                                    .foregroundStyle(.secondary).padding(.vertical, 32)
                            }
                            ForEach(store.archive.messages) { message in
                                VStack(alignment: .leading, spacing: 5) {
                                    Text(message.role == "user" ? "你" : "伴侣").font(.caption).foregroundStyle(.secondary)
                                    Text(message.content).textSelection(.enabled)
                                    if let japanese=message.spokenJapanese {
                                        Text(japanese).font(.caption).foregroundStyle(.secondary).textSelection(.enabled)
                                    }
                                    if message.role=="assistant" {
                                        Button {speech.speak(message,preferences:store.archive.settings.speech ?? SpeechPreferences())} label:{Label("朗读",systemImage:"speaker.wave.2")}.font(.caption)
                                    }
                                }
                                .padding(12).frame(maxWidth: .infinity, alignment: .leading)
                                .background(message.role == "user" ? Color.indigo.opacity(0.09) : Color.secondary.opacity(0.07))
                                .clipShape(RoundedRectangle(cornerRadius: 14)).id(message.id)
                            }
                            if store.busy { ProgressView("正在回复…") }
                        }.padding()
                    }
                    .onChange(of: store.archive.messages.count) { _ in
                        if let last = store.archive.messages.last { proxy.scrollTo(last.id, anchor: .bottom) }
                    }
                }
                if store.busy {
                    Button("停止回复") { store.cancel() }.padding(8)
                } else if store.archive.messages.last?.role == "user" {
                    Button("重新请求回复") { store.retry() }.padding(8)
                }
                HStack(alignment: .bottom) {
                    TextField("想说点什么…", text: $draft, axis: .vertical)
                        .lineLimit(1...5).textFieldStyle(.roundedBorder)
                    Button {
                        let before = store.archive.messages.count
                        store.send(draft)
                        if store.archive.messages.count > before { draft = "" }
                    } label: { Image(systemName: "arrow.up.circle.fill").font(.title) }
                    .accessibilityLabel("发送")
                    .disabled(store.busy || !store.storageReady || draft.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty)
                }.padding()
            }.navigationTitle("陪伴").navigationBarTitleDisplayMode(.inline)
                .toolbar {RestartConversationButton()}
        }
    }
}

struct RestartConversationButton:View {
    @EnvironmentObject private var store:LocalStore
    @State private var confirming = false
    var onReset:() -> Void = {}
    var body:some View {
        Button {confirming = true} label:{Label("重新开始对话",systemImage:"arrow.counterclockwise")}
            .accessibilityIdentifier("restartConversation")
            .confirmationDialog("重新开始当前角色的对话？",isPresented:$confirming,titleVisibility:.visible) {
                Button("清除聊天和记忆",role:.destructive) {
                    do {try store.restartConversation();onReset()} catch {store.error = error.localizedDescription}
                }
                Button("取消",role:.cancel) {}
            } message:{Text("清除当前角色的聊天上下文和记忆，并停止正在生成的回复。保留人设、日记、模型、API 设置及其他角色记录；本机自动保留恢复快照。")}
    }
}

struct MemoryView: View {
    @EnvironmentObject private var store: LocalStore
    @State private var text = ""
    var body: some View {
        NavigationStack {
            Form {
                Section {
                    TextEditor(text: $text).frame(minHeight: 220)
                    Button("保存记忆") {
                        do { try store.saveMemories(text) } catch { store.error = error.localizedDescription }
                    }.disabled(!store.storageReady)
                } header: { Text("希望她记住的事") } footer: {
                    Text("保存的记忆会随对话发送给你配置的 API。当前由你手动编辑，不会自动提取。最多注入约 12000 字的人设与记忆。")
                }
            }.navigationTitle("记忆")
                .onAppear { text = store.archive.memories }
        }
    }
}

struct DiaryView: View {
    @EnvironmentObject private var store: LocalStore
    @State private var draft = ""
    var body: some View {
        NavigationStack {
            List {
                Section("写下今天") {
                    TextEditor(text: $draft).frame(minHeight: 110)
                    Button("保存日记") {
                        do { try store.addDiary(draft); draft = "" }
                        catch { store.error = error.localizedDescription }
                    }.disabled(!store.storageReady || draft.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty)
                }
                Section("本地日记") {
                    ForEach(store.archive.diary) { entry in
                        VStack(alignment: .leading, spacing: 8) {
                            Text(entry.createdAt, style: .date).font(.caption).foregroundStyle(.secondary)
                            Text(entry.text).textSelection(.enabled)
                        }.padding(.vertical, 6)
                    }
                }
            }.navigationTitle("日记")
        }
    }
}

struct BackupDocument: FileDocument {
    static var readableContentTypes: [UTType] { [.json] }
    var data: Data
    init(data: Data) { self.data = data }
    init(configuration: ReadConfiguration) throws { data = configuration.file.regularFileContents ?? Data() }
    func fileWrapper(configuration: WriteConfiguration) throws -> FileWrapper { FileWrapper(regularFileWithContents: data) }
}

struct SettingsView: View {
    @EnvironmentObject private var store: LocalStore
    @State private var settings = APISettings()
    @State private var key = ""
    @State private var keyReady = false
    @State private var exporting = false
    @State private var importing = false
    @State private var backup = BackupDocument(data: Data())
    @State private var pendingImport: Data?
    @State private var saved = false

    var body: some View {
        NavigationStack {
            Form {
                Section {
                    TextField("HTTPS 接口地址", text: $settings.endpoint)
                        .keyboardType(.URL).textInputAutocapitalization(.never).autocorrectionDisabled()
                    SecureField("API Key（本地服务可留空）", text: $key)
                        .textInputAutocapitalization(.never).autocorrectionDisabled()
                    TextField("模型名称", text: $settings.model)
                        .textInputAutocapitalization(.never).autocorrectionDisabled()
                    Slider(value: $settings.temperature, in: 0...2, step: 0.1)
                    Text("温度：\(settings.temperature, specifier: "%.1f")").font(.caption)
                } header: { Text("自定义 API") } footer: {
                    Text("支持 OpenAI 兼容的 Chat Completions。填写完整接口路径或以 /v1 结尾的地址；当前仅支持 HTTPS。密钥保存在本机钥匙串，不包含在备份中。")
                }
                Section {Text("系统提示词、用户身份、AI 角色卡与身体能力，请在主页设置 → 人设与陪伴中管理。 ").font(.footnote).foregroundStyle(.secondary)}
                Section {
                    Button(saved ? "已保存" : "保存设置") {
                        do { try store.saveSettings(settings, key: key); saved = true }
                        catch { store.error = error.localizedDescription }
                    }.disabled(store.busy || !store.storageReady || !keyReady)
                }
                Section {
                    Button("导出本地备份") {
                        do { backup = BackupDocument(data: try store.export()); exporting = true }
                        catch { store.error = error.localizedDescription }
                    }.disabled(!store.storageReady)
                    Button("从备份恢复") { importing = true }.disabled(store.busy || !store.storageReady)
                } header: { Text("数据") } footer: {
                    Text("备份包含聊天、记忆、日记、人设和接口地址，不含密钥。恢复前自动保留当前资料快照。备份文件为明文，请妥善保管。")
                }
                Section {
                    Text("仅在发起对话时连接你配置的服务。最近最多 30 条消息及人设、记忆用于上下文；日记不会自动发送。没有官方登录或自动更新。")
                        .font(.footnote).foregroundStyle(.secondary)
                }
            }.navigationTitle("设置")
                .onAppear {
                    settings = store.archive.settings
                    do { key = try APIKeyStore.read(); keyReady = true }
                    catch { keyReady = false; store.error = error.localizedDescription }
                }
                .onChange(of: settings.endpoint) { _ in saved = false }
                .onChange(of: settings.model) { _ in saved = false }
                .onChange(of: key) { _ in saved = false }
                .onChange(of: settings.persona) { _ in saved = false }
                .onChange(of: settings.temperature) { _ in saved = false }
                .fileExporter(isPresented: $exporting, document: backup, contentType: .json, defaultFilename: "companion-backup") { result in
                    if case .failure(let error) = result { store.error = error.localizedDescription }
                }
                .fileImporter(isPresented: $importing, allowedContentTypes: [.json]) { result in
                    do {
                        let url = try result.get()
                        let granted = url.startAccessingSecurityScopedResource()
                        defer { if granted { url.stopAccessingSecurityScopedResource() } }
                        let size = try url.resourceValues(forKeys: [.fileSizeKey]).fileSize ?? 0
                        guard size <= 50_000_000 else { throw CompanionError.message("备份超过 50MB。") }
                        pendingImport = try Data(contentsOf: url)
                    } catch { store.error = error.localizedDescription }
                }
                .confirmationDialog("恢复将替换当前聊天、记忆、日记和设置。接口地址改变时会清除旧密钥，需重新填写。", isPresented: Binding(
                    get: { pendingImport != nil }, set: { if !$0 { pendingImport = nil } })) {
                    Button("确认恢复", role: .destructive) {
                        guard let data = pendingImport else { return }
                        do {
                            try store.restore(data)
                            settings = store.archive.settings
                            key = try APIKeyStore.read()
                            saved = false
                        }
                        catch { store.error = error.localizedDescription }
                        pendingImport = nil
                    }
                    Button("取消", role: .cancel) { pendingImport = nil }
                }
        }
    }
}
