import SwiftUI

struct SpeechSettingsView: View {
    @EnvironmentObject private var store: LocalStore
    @EnvironmentObject private var speech: CompanionSpeech
    @State private var draft = SpeechPreferences()
    @State private var picking = false
    @State private var notice = ""
    @State private var loaded = false

    private var choices: [VoiceManifest.Voice] {
        [
            .init(id: "system.zh", title: "系统中文（非训练音色）", language: "zh", directory: ""),
            .init(id: "system.ja", title: "系统日语（非训练音色）", language: "ja", directory: "")
        ] + speech.voices
    }

    var body: some View {
        NavigationStack {
            Form {
                if let remote = store.archive.settings.services?.tts, remote.enabled {
                    Section("当前发声来源") {
                        Text("独立 TTS：" + remote.apiProtocol.title + " · " + remote.voice)
                    }
                }
                packagesSection
                dualEngineSection
                globalSpeechSection
                symbolFilterSection
                hardwareSection
                previewSection
                Section("独立配音接口") {
                    NavigationLink("配置独立 TTS 与其他接口") { ServiceSettingsView() }
                    Text("独立 TTS 启用后，本机音色作为备用并决定中／日台词语言；实际云端音色在独立接口页面设置。")
                        .font(.caption).foregroundStyle(.secondary)
                }
                Section {
                    Text("音色设置为全局设置。更换模型或人设不会自动改用另一种声音。原作自带的互动原声片段由角色的“原声”开关单独控制，可关闭以避免与配音混用；双语角色包的原声会跟随所选语言。语言选择影响 AI 后续回复；离线合成不代表 AI 对话也改为本地运行。")
                        .font(.caption).foregroundStyle(.secondary)
                }
            }
            .navigationTitle("离线语音")
            .navigationBarTitleDisplayMode(.inline)
            .preferredColorScheme(.dark)
            .tint(Color(red: 0.71, green: 0.69, blue: 1))
        }
        .onAppear {
            if !loaded {
                draft = store.archive.settings.speech ?? SpeechPreferences()
                loaded = true
            }
        }
        .onChange(of: draft.enabled) { value in
            guard loaded, (value != false) != (store.archive.settings.speech ?? SpeechPreferences()).isEnabled else { return }
            do {
                try store.setSpeechEnabled(value != false)
                speech.stop()
                notice = value == false ? "TTS 已关闭。" : "TTS 已开启。"
            } catch {
                speech.error = error.localizedDescription
            }
        }
        .onChange(of: draft.voiceID) { id in
            if let choice = choices.first(where: { $0.id == id }) {
                draft.language = choice.language
            }
        }
        .onChange(of: speech.importing) { value in
            guard !value, speech.error == nil else { return }
            var changed = false
            if !speech.voices.isEmpty,
               !speech.voices.contains(where: { $0.id == draft.voiceID }),
               let first = speech.voices.first(where: { $0.language == "zh" }) {
                draft.voiceID = first.id
                draft.language = first.language
                draft.autoPlay = true
                changed = true
            }
            if !speech.fastVoices.isEmpty {
                if draft.fastVoiceID == nil || !speech.fastVoices.contains(where: { $0.id == draft.fastVoiceID }) {
                    draft.fastVoiceID = speech.fastVoices.first(where: { $0.language == draft.language })?.id ?? speech.fastVoices.first?.id
                    changed = true
                }
                if draft.engineMode == nil {
                    draft.engineMode = VoiceEngineMode.autoCallFast.rawValue
                    changed = true
                }
            }
            if changed { save() }
        }
        .sheet(isPresented: $picking) {
            CharacterDocumentPicker { result in
                picking = false
                do {
                    if let url = try result.get() {
                        speech.importPackage(url)
                    }
                } catch {
                    speech.error = error.localizedDescription
                }
            }
        }
    }

    @ViewBuilder
    private var packagesSection: some View {
        Section("离线语音包（高保真 + 极速双轨共存）") {
            LabeledContent("高保真语音包") {
                Text(speech.packageName.isEmpty ? "未导入" : speech.packageName)
                    .foregroundStyle(speech.packageName.isEmpty ? Color.secondary : Color.primary)
                    .accessibilityIdentifier("speechPackageStatus")
            }
            LabeledContent("极速轻量语音包") {
                Text(speech.fastPackageName.isEmpty ? "未导入（可选）" : speech.fastPackageName)
                    .foregroundStyle(speech.fastPackageName.isEmpty ? Color.secondary : Color.mint)
            }
            Button("导入语音包（.qvoice 高保真／极速轻量）") { picking = true }
                .disabled(speech.importing || store.busy)
                .accessibilityIdentifier("importVoicePackage")
            if speech.importing {
                ProgressView(value: speech.importProgress) {
                    Text("导入并校验 \(Int(speech.importProgress * 100))%")
                }
            }
            Text("自动识别语音包类型：高保真 GPT-SoVITS 包与极速轻量化 VITS-Lite 包分别独立存放，导入极速包不会覆盖现有高保真语音包。")
                .font(.caption).foregroundStyle(.secondary)
        }
    }

    @ViewBuilder
    private var dualEngineSection: some View {
        Section("双引擎与极速加速（方案 A + 方案 B1）") {
            Picker("合成引擎模式", selection: Binding(
                get: { draft.effectiveEngineMode.rawValue },
                set: { draft.engineMode = $0 }
            )) {
                ForEach(VoiceEngineMode.allCases) { mode in
                    Text(mode.title).tag(mode.rawValue)
                }
            }
            if !speech.fastVoices.isEmpty {
                Picker("极速轻量音色", selection: Binding(
                    get: { draft.fastVoiceID ?? speech.fastVoices.first(where: { $0.language == draft.language })?.id ?? speech.fastVoices.first?.id ?? "" },
                    set: { draft.fastVoiceID = $0 }
                )) {
                    ForEach(speech.fastVoices) { v in
                        Text("\(v.title)（\(v.language == "ja" ? "日语" : "中文")）").tag(v.id)
                    }
                }
            }
            Toggle("方案A · 常驻内存加速缓存（提速 65%+）", isOn: Binding(
                get: { draft.isResidentCacheEnabled },
                set: { draft.residentCache = $0 }
            ))
            Toggle("方案A · 极速中文（跳过 351MB BERT）", isOn: Binding(
                get: { draft.isSkipChineseBertEnabled },
                set: { draft.skipChineseBert = $0 }
            ))
            Text("方案 A 对现有 GPT-SoVITS 零重训直接提速：开启多线程 + 模型常驻缓存 + 首句短切 + 通话预热（实测提速 68%，内存紧张时自动释放）；方案 B1 导入极速轻量包后可实现 0.2 秒级即刻出声，推荐选择「智能双轨」。修改后请点下方「保存语音设置」。")
                .font(.caption).foregroundStyle(.secondary)
        }
    }

    @ViewBuilder
    private var globalSpeechSection: some View {
        Section("全局配音") {
            Toggle("启用 TTS 语音", isOn: Binding(get: { draft.isEnabled }, set: { draft.enabled = $0 }))
                .accessibilityIdentifier("speechEnabled")
            Text(draft.isEnabled ? "控制陪伴与通讯模式的所有 TTS 配音。" : "TTS 已关闭，保留文字对话；可随时重新开启。")
                .font(.caption).foregroundStyle(.secondary)
            Picker(store.archive.settings.services?.tts.enabled == true ? "本机备用音色／语言" : "音色", selection: $draft.voiceID) {
                ForEach(choices) { voice in Text(voice.title).tag(voice.id) }
                if !choices.contains(where: { $0.id == draft.voiceID }) {
                    Text("尚未导入的音色：" + draft.voiceID).tag(draft.voiceID)
                }
            }
            .accessibilityIdentifier("speechVoicePicker")
            Button { draft.autoPlay.toggle() } label: {
                HStack {
                    Text("自动朗读 AI 回复")
                    Spacer()
                    Label(draft.autoPlay ? "已开启" : "已关闭", systemImage: draft.autoPlay ? "checkmark.circle.fill" : "circle")
                        .foregroundStyle(draft.autoPlay ? Color.green : Color.secondary)
                }
                .frame(maxWidth: .infinity, alignment: .leading)
                .contentShape(Rectangle())
            }
            .buttonStyle(.plain)
            .disabled(!draft.isEnabled)
            .accessibilityValue(draft.autoPlay ? "1" : "0")
            .accessibilityIdentifier("speechAutoPlay")
            Text(draft.language == "ja"
                ? "角色说日语，聊天显示中文译文；日文原话可在聊天记录中查看。需要 AI 接口返回日文原话；不会把中文台词当作日语强读。"
                : "角色说中文。选择训练音色后，文字对话和语音通话使用同一套配音。")
                .font(.caption).foregroundStyle(.secondary)
            Slider(value: $draft.speed, in: 0.7...1.3) { Text("语速") }
            Text("语速 \(draft.speed, specifier: "%.2f")×").font(.caption)
            Slider(value: $draft.volume, in: 0...1) { Text("音量") }
            VStack(alignment: .leading, spacing: 8) {
                Button("保存语音设置") { save() }
                    .disabled(store.busy || speech.importing)
                    .accessibilityIdentifier("saveSpeechSettings")
                if !notice.isEmpty {
                    Text(notice).font(.caption).accessibilityIdentifier("speechSettingsNotice")
                }
            }
        }
    }

    @ViewBuilder
    private var symbolFilterSection: some View {
        Section("朗读符号过滤（描写／旁白控制）") {
            Toggle("不朗读圆括号 ( ) / （ ） 内内容", isOn: filterBinding(\.skipParentheses))
            Toggle("不朗读单星号 *描写* 内内容", isOn: filterBinding(\.skipAsterisks))
            Toggle("不朗读双星号 **加粗／描写** 内内容", isOn: filterBinding(\.skipDoubleAsterisks))
            Toggle("不朗读方头括号 【 】 内内容", isOn: filterBinding(\.skipBoldBrackets))
            Toggle("不朗读方括号 [ ] 内内容", isOn: filterBinding(\.skipSquareBrackets))
            Toggle("不朗读书名号／尖括号 《 》 / < > 内内容", isOn: filterBinding(\.skipAngleBrackets))
            TextField("自定义不朗读符号对（空格分隔，如 ~~ {} 「」）", text: filterBinding(\.customPairs))
                .textInputAutocapitalization(.never)
                .autocorrectionDisabled()
            Text("开启后 TTS 朗读会自动跳过该符号内的动作／神态／心理描写；关闭则会照常朗读其中文字。通话模式下始终强制跳过描写符号，只念角色说出口的话。修改后请点击上方「保存语音设置」。")
                .font(.caption).foregroundStyle(.secondary)
        }
    }

    @ViewBuilder
    private var hardwareSection: some View {
        Section("苹果硬件加速") {
            Picker("本机合成后端", selection: Binding(get: { draft.acceleration.rawValue }, set: { draft.computeMode = $0 })) {
                ForEach(VoiceComputeMode.allCases) { Text($0.title).tag($0.rawValue) }
            }
            Text("自动模式已启用多线程加速与常驻缓存。神经引擎／GPU 可手动选择；首次编译可能较慢，部分计算仍会回退 CPU。切换后保存，再试听同一句比较。")
                .font(.caption).foregroundStyle(.secondary)
            Text(speech.diagnostics)
                .font(.caption.monospaced())
                .textSelection(.enabled)
                .accessibilityIdentifier("speechComputeMetrics")
        }
    }

    @ViewBuilder
    private var previewSection: some View {
        Section("试听") {
            Button("试听当前音色") {
                let sample = Message(role: "assistant", content: "下午好，我在这里陪着你。", spokenJapanese: "こんにちは。今日は何を話しましょうか。")
                speech.speak(sample, preferences: draft, remote: store.archive.settings.services?.tts)
            }
            .disabled(!draft.isEnabled || speech.importing || store.busy)
            .accessibilityIdentifier("previewSpeechVoice")
            Button("停止朗读") { speech.stop() }.disabled(!speech.busy)
            if !speech.status.isEmpty { Text(speech.status).font(.caption) }
            if let error = speech.error { Text(error).foregroundStyle(.red).font(.caption) }
        }
    }

    private func filterBinding<Value>(_ keyPath: WritableKeyPath<SpeechSymbolFilter, Value>) -> Binding<Value> {
        Binding(
            get: { draft.effectiveFilter[keyPath: keyPath] },
            set: { newValue in
                var f = draft.effectiveFilter
                f[keyPath: keyPath] = newValue
                draft.symbolFilter = f
            }
        )
    }

    private func save() {
        do {
            try store.saveSpeech(draft)
            speech.stop()
            notice = "已保存，全局使用所选配音。"
        } catch {
            speech.error = error.localizedDescription
        }
    }
}
