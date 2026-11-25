import SwiftUI
import UniformTypeIdentifiers

struct PersonaView:View {
    @EnvironmentObject private var store:LocalStore
    let modelKey:String
    let modelName:String
    let actions:[String]
    var onClose:(()->Void)? = nil
    var initialCardID:UUID? = nil
    var applyToModel=true
    @State private var library = PersonaLibrary()
    @State private var selected:UUID?
    @State private var tab = "AI 人设"
    @State private var loaded = false
    @State private var notice = ""
    @State private var importing = false
    @State private var exporting = false
    @State private var document = BackupDocument(data:Data())
    @State private var preview = false
    @State private var previewText = ""
    @State private var stickerPack = CharacterStickerPack()
    @State private var importingStickers = false
    @State private var stickerBusy = false
    @State private var stickerAnalyzeTask:Task<Void,Never>? = nil
    @State private var stickerAnalyzeProgress = ""
    @State private var editingStickerID:String? = nil
    @State private var editingStickerLabel = ""
    @State private var editingStickerDetails = ""
    @State private var editingStickerBackground = ""
    @State private var editingStickerUsage = ""
    @State private var systemPresets: [SystemRulePreset] = []
    @State private var systemPresetName = ""
    @State private var selectedSystemPresetID: UUID? = nil
    private let stickerLibrary = CharacterStickerLibrary()
    private var card:Binding<PersonaCard> {
        Binding(get:{library.cards.first{$0.id == selected} ?? PersonaCard()},set:{value in
            if let i = library.cards.firstIndex(where:{$0.id == selected}) {library.cards[i] = value}
        })
    }
    private var greetings:Binding<String> {
        Binding(get:{card.wrappedValue.firstMessages.joined(separator:"\n---\n")},set:{text in
            card.wrappedValue.firstMessages = text.components(separatedBy:"\n---\n").filter{!$0.trimmingCharacters(in:.whitespacesAndNewlines).isEmpty}
        })
    }
    var body:some View {
        NavigationStack {
            ScrollView {
                VStack(alignment:.leading,spacing:20) {
                    header
                    Picker("编辑内容",selection:$tab) {
                        ForEach(["AI 人设","用户人设","系统规则","身体能力"],id:\.self){Text($0).tag($0)}
                    }.pickerStyle(.segmented)
                    if tab == "AI 人设" {characterFields}
                    else if tab == "用户人设" {userFields}
                    else if tab == "系统规则" {systemFields}
                    else {bodyFields}
                    if !notice.isEmpty {Text(notice).font(.footnote).foregroundStyle(.mint).accessibilityIdentifier("personaNotice")}
                }.padding(20)
            }.background(Color(red:0.055,green:0.05,blue:0.075))
                .navigationTitle("人设与陪伴").navigationBarTitleDisplayMode(.inline)
                .toolbar {
                    ToolbarItem(placement:.navigationBarLeading){Button("完成"){onClose?()}}
                    ToolbarItem(placement:.navigationBarTrailing){transferMenu}
                }
                .safeAreaInset(edge:.bottom) {
                    Button {
                        do {
                            guard let selected = selected else {return}
                            if applyToModel {try store.savePersonas(library,selected:selected,modelKey:modelKey)}
                            else {try store.saveChatPersonas(library)}
                            library = store.archive.settings.personas!;notice = applyToModel ? "已保存并应用到\(modelName)":"已保存，共用于通讯和模型陪伴。"
                        } catch {store.error = error.localizedDescription}
                    } label:{Label(applyToModel ? "保存并应用到当前伙伴":"保存人设库",systemImage:"checkmark.circle.fill").font(.headline).frame(maxWidth:.infinity).padding(15)}
                        .buttonStyle(.borderedProminent).tint(.indigo).disabled(store.busy || !loaded || !store.storageReady)
                        .accessibilityIdentifier("savePersona").padding(.horizontal,20).padding(.vertical,10).background(.ultraThinMaterial)
                }
                .onAppear {
                    guard !loaded else{return}
                    library = store.archive.settings.personas ?? PersonaLibrary.migrating(store.archive.settings.persona)
                    selected = initialCardID ?? library.card(for:modelKey)?.id;loaded = true
                    systemPresets = SystemRulePresetStore.load()
                    reloadStickers()
                }
                .onChange(of:selected) { _ in stickerAnalyzeTask?.cancel(); stickerAnalyzeTask = nil; stickerAnalyzeProgress = ""; reloadStickers() }
                .onDisappear { stickerAnalyzeTask?.cancel(); stickerAnalyzeTask = nil }
                .fileImporter(isPresented:$importingStickers,allowedContentTypes:[.zip,.image],allowsMultipleSelection:true) { result in
                    guard let cardID = selected else { return }
                    switch result {
                    case .success(let urls):
                        guard !urls.isEmpty else { return }
                        stickerBusy = true
                        let lib = stickerLibrary
                        Task {
                            do {
                                let imported = try await Task.detached(priority:.userInitiated) { try lib.importFiles(urls,for:cardID) }.value
                                stickerPack = imported.pack
                                stickerBusy = false
                                notice = "已为「\(card.wrappedValue.title)」解压导入 \(imported.added) 张表情包" + (imported.skipped > 0 ? "（跳过 \(imported.skipped) 项）" : "") + "。进入通讯模块即可生效。"
                            } catch {
                                stickerBusy = false
                                store.error = error.localizedDescription
                            }
                        }
                    case .failure(let error):
                        store.error = error.localizedDescription
                    }
                }
                .sheet(isPresented:$importing) {
                    CharacterDocumentPicker {result in
                        importing = false
                        do {
                            guard let url = try result.get() else{return}
                            let granted = url.startAccessingSecurityScopedResource();defer{if granted{url.stopAccessingSecurityScopedResource()}}
                            guard (try url.resourceValues(forKeys:[.fileSizeKey]).fileSize ?? 0) <= PersonaLimits.transferBytes else {throw CompanionError.message("角色卡 JSON 超过50MB。")}
                            let value = try PersonaTransfer.decode(Data(contentsOf:url),into:library)
                            library = value.0;selected = value.1;tab = "AI 人设";notice = "已读入草稿，点击保存后生效。导入不会连接外部资源。"
                        } catch {store.error = error.localizedDescription}
                    }
                }
                .fileExporter(isPresented:$exporting,document:document,contentType:.json,defaultFilename:"qiban-personas") {result in
                    if case .failure(let error) = result {store.error = error.localizedDescription}
                }
                .sheet(isPresented:$preview) {
                    NavigationStack {ScrollView {Text(previewText).font(.system(.footnote,design:.monospaced)).textSelection(.enabled).padding()}
                        .navigationTitle("本轮提示词预览").toolbar{Button("完成"){preview = false}}}
                }
        }.preferredColorScheme(.dark)
    }
    private var header:some View {
        VStack(alignment:.leading,spacing:14) {
            HStack(spacing:14) {
                Image(systemName:"person.text.rectangle.fill").font(.system(size:34)).foregroundStyle(.indigo.opacity(0.9))
                VStack(alignment:.leading,spacing:4) {
                    Text(card.wrappedValue.title).font(.title2.bold()).accessibilityIdentifier("personaCardTitle")
                    Text("当前载体 · \(modelName)").font(.caption).foregroundStyle(.secondary)
                }
            }
            Picker("角色卡",selection:$selected) {
                ForEach(library.cards){card in Text(card.title).tag(Optional(card.id))}
            }.accessibilityIdentifier("personaCardPicker")
            HStack {
                Button {var value = PersonaCard();value.title = "新角色 \(library.cards.count+1)";library.cards.append(value);selected = value.id;notice = "新建角色将使用独立对话，保存后生效。"} label:{Label("新建",systemImage:"plus")}
                Spacer()
                Button {var value = card.wrappedValue;value.id = UUID();value.title += " 副本";library.cards.append(value);selected = value.id;notice = "已复制人设，不复制聊天与记忆。"} label:{Label("复制",systemImage:"square.on.square")}
            }.font(.subheadline).disabled(library.cards.count >= 50)
            Text("为不同伙伴保存不同角色卡。切换人设时分别保留聊天、记忆和日记；编辑草稿不会立即改变正在使用的人设。")
                .font(.caption).foregroundStyle(.secondary)
        }.padding(18).background(.white.opacity(0.045),in:RoundedRectangle(cornerRadius:22))
    }
    private var characterFields:some View {
        VStack(spacing:16) {
            panel("角色身份","名字用于 {{char}}，卡片标题方便管理。") {
                TextField("卡片标题",text:card.title).textFieldStyle(.roundedBorder).accessibilityIdentifier("personaTitleInput")
                TextField("AI 的名字 / 自称",text:card.name).textFieldStyle(.roundedBorder).accessibilityIdentifier("personaNameInput")
            }
            stickerPanel
            editor("人物描述",text:card.description,hint:"身份、背景、与你的关系",id:"personaDescriptionInput")
            editor("性格与说话方式",text:card.personality,hint:"她怎样倾听、说话与表达情绪")
            editor("场景",text:card.scenario,hint:"你们目前所处的情境与关系阶段")
            editor("示例对话",text:card.examples,hint:"支持 {{char}} 与 {{user}}；示例不会当作真实聊天经历。")
            DisclosureGroup("开场白与备注") {
                editor("开场白",text:greetings,hint:"多条之间单独一行写 ---；每条最多8000字、最多20条，只在空对话中手动使用。",limit:nil)
                editor("创作者备注",text:card.notes,hint:"仅本地管理，不发给 AI。")
            }.padding(16).background(.white.opacity(0.035),in:RoundedRectangle(cornerRadius:18))
        }
    }
    private var userFields:some View {
        VStack(spacing:16) {
            panel("全局用户身份","没有专属覆盖时，对所有角色生效。") {
                TextField("希望 AI 怎样称呼你",text:$library.userName).textFieldStyle(.roundedBorder).accessibilityIdentifier("personaUserNameInput")
            }
            editor("关于我",text:$library.userDescription,hint:"你的身份、偏好、边界与相处方式")
            DisclosureGroup("当前角色专属的「我」") {
                TextField("专属称呼，留空继承全局",text:card.userName).textFieldStyle(.roundedBorder)
                editor("专属用户人设",text:card.userDescription,hint:"留空继承全局；填写后替代全局用户描述。")
            }.padding(16).background(.white.opacity(0.035),in:RoundedRectangle(cornerRadius:18))
        }
    }
    private var systemFields:some View {
        VStack(spacing:16) {
            systemRulePresetPanel
            editor("全局系统提示词",text:$library.systemPrompt,hint:"所有角色共用的语言、回复长度及相处规则。正文单字段最多100万字，当前人设拼接最多200万字；字数不是token，实际容量取决于所选模型和接口。",id:"personaSystemInput")
            editor("当前角色补充规则",text:card.systemRules,hint:"仅针对当前角色的特殊要求")
            editor("回复补充规则",text:card.replyRules,hint:"角色卡的 post_history_instructions 在此作为系统补充规则使用。")
            Button("预览实际发送的提示词") {
                do {
                    var settings = store.archive.settings;var draft = library
                    if let selected = selected {draft.modelBindings[modelKey] = selected}
                    settings.personas = draft;settings.runtimeContext = CompanionContext(modelKey:modelKey,modelName:modelName)
                    previewText = try PersonaPrompt.compose(settings:settings,memories:"",actions:actions,hasImage:false)
                    preview = true
                } catch {store.error = error.localizedDescription}
            }.buttonStyle(.bordered).accessibilityIdentifier("previewPersonaPrompt")
        }
    }
    private var systemRulePresetPanel: some View {
        panel("系统规则管理器（一键切换提示词）", "保存多套全局系统提示词，切换风格时无需反复复制粘贴；套用后点底部「保存」即可生效。") {
            if systemPresets.isEmpty {
                Text("暂无预设。填写下方「全局系统提示词」后输入名称点「存为新预设」即可。")
                    .font(.caption).foregroundStyle(.secondary)
            } else {
                VStack(spacing: 8) {
                    ForEach(systemPresets) { preset in
                        HStack(spacing: 8) {
                            Button {
                                library.systemPrompt = preset.content
                                selectedSystemPresetID = preset.id
                                systemPresetName = preset.name
                                notice = "已套用系统规则「\(preset.name)」，点击底部保存按钮生效。"
                            } label: {
                                HStack(spacing: 8) {
                                    Image(systemName: library.systemPrompt == preset.content ? "checkmark.circle.fill" : "doc.text")
                                        .foregroundStyle(library.systemPrompt == preset.content ? Color.mint : Color.indigo)
                                    VStack(alignment: .leading, spacing: 2) {
                                        Text(preset.name).font(.subheadline.bold()).foregroundStyle(Color.primary)
                                        Text("\(preset.content.count) 字 · \(preset.content.prefix(26))")
                                            .font(.caption2).foregroundStyle(.secondary).lineLimit(1)
                                    }
                                }
                                .frame(maxWidth: .infinity, alignment: .leading)
                                .contentShape(Rectangle())
                            }
                            .buttonStyle(.plain)

                            Button(role: .destructive) {
                                do {
                                    systemPresets = try SystemRulePresetStore.delete(id: preset.id)
                                    if selectedSystemPresetID == preset.id { selectedSystemPresetID = nil }
                                    notice = "已删除系统规则预设「\(preset.name)」。"
                                } catch {
                                    store.error = error.localizedDescription
                                }
                            } label: {
                                Image(systemName: "trash").font(.caption)
                            }
                            .buttonStyle(.borderless)
                        }
                        .padding(10)
                        .background(.white.opacity(0.04), in: RoundedRectangle(cornerRadius: 12))
                    }
                }
            }
            TextField("规则预设名称（如 日常温柔 / 沉浸剧情 / 简洁口语）", text: $systemPresetName)
                .textFieldStyle(.roundedBorder)
            HStack(spacing: 10) {
                Button("存为新预设") {
                    let finalName = systemPresetName.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty
                        ? "系统规则 \(systemPresets.count + 1)" : systemPresetName
                    do {
                        systemPresets = try SystemRulePresetStore.upsert(id: nil, name: finalName, content: library.systemPrompt)
                        if let created = systemPresets.first(where: { $0.name == finalName.trimmingCharacters(in: .whitespacesAndNewlines) }) {
                            selectedSystemPresetID = created.id
                        }
                        systemPresetName = finalName
                        notice = "已保存系统规则预设「\(finalName)」。"
                    } catch {
                        store.error = error.localizedDescription
                    }
                }
                .buttonStyle(.borderedProminent)
                .disabled(library.systemPrompt.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty)

                if let sid = selectedSystemPresetID, systemPresets.contains(where: { $0.id == sid }) {
                    Button("覆盖当前预设") {
                        let finalName = systemPresetName.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty ? "已选规则" : systemPresetName
                        do {
                            systemPresets = try SystemRulePresetStore.upsert(id: sid, name: finalName, content: library.systemPrompt)
                            notice = "已更新系统规则预设「\(finalName)」。"
                        } catch {
                            store.error = error.localizedDescription
                        }
                    }
                    .buttonStyle(.bordered)
                }
            }
        }
    }
    private var bodyFields:some View {
        VStack(spacing:16) {
            editor("陪伴动作风格",text:$library.bodyStyle,hint:"描述动作频率、表达方式和边界。App 会保留必要的身体控制协议。")
            panel("当前可用的身体映射","由已加载模型决定，不能通过填写人设凭空增加骨骼能力。") {
                if actions.isEmpty {Text("尚未加载可用动作，请返回主页加载伙伴。 ").foregroundStyle(.secondary)}
                ForEach(DialogueMotion.semanticMappings(actions:actions),id:\.id){item in
                    VStack(alignment:.leading,spacing:3){Text(item.label).font(.subheadline);Text(item.id).font(.caption.monospaced()).foregroundStyle(.secondary)}
                    Divider()
                }
            }
            panel("应用自动注入的能力说明","这部分随当前载体、站立／坐姿及可用动作生成。") {
                Text(PersonaPrompt.app(context:CompanionContext(modelKey:modelKey,modelName:modelName),actions:actions,hasImage:false))
                    .font(.caption).foregroundStyle(.secondary).textSelection(.enabled)
            }
        }
    }
    private var transferMenu:some View {
        Menu {
            Button("导入角色卡 / 人设库 JSON"){importing = true}
            Button("导出人设库 JSON") {
                do {document = BackupDocument(data:try PersonaTransfer.export(library));exporting = true}
                catch {store.error = error.localizedDescription}
            }
        } label:{Image(systemName:"square.and.arrow.up.on.square")}.accessibilityLabel("人设导入导出")
    }
    private func panel<Content:View>(_ title:String,_ hint:String,@ViewBuilder content:()->Content) -> some View {
        VStack(alignment:.leading,spacing:10){Text(title).font(.headline);Text(hint).font(.caption).foregroundStyle(.secondary);content()}
            .frame(maxWidth:.infinity,alignment:.leading).padding(16).background(.white.opacity(0.035),in:RoundedRectangle(cornerRadius:18))
    }
    private func reloadStickers() {
        editingStickerID = nil
        guard let id = selected else { stickerPack = CharacterStickerPack(); return }
        stickerPack = stickerLibrary.load(for: id)
    }
    private func startStickerAnalysis(reanalyzeAll:Bool) {
        guard let cardID = selected, stickerAnalyzeTask == nil else { return }
        let targets = stickerPack.items.filter { reanalyzeAll || !$0.analyzed }
        guard !targets.isEmpty else {
            notice = "当前角色的表情包已全部完成 AI 识图打标。"
            return
        }
        let settings = store.archive.settings
        let mainKey = (try? store.mainKey()) ?? ""
        let charName = card.wrappedValue.name.isEmpty ? card.wrappedValue.title : card.wrappedValue.name
        let lib = stickerLibrary
        stickerAnalyzeProgress = "准备 AI 识图（0/\(targets.count)）…"
        stickerAnalyzeTask = Task {
            var done = 0
            var failed = 0
            var firstError = ""
            for item in targets {
                if Task.isCancelled { break }
                await MainActor.run {
                    stickerAnalyzeProgress = "AI 正在识别「\(item.label)」(\(done + 1)/\(targets.count))…"
                }
                do {
                    let loaded = try await Task.detached(priority:.userInitiated) {
                        try lib.imageData(stickerID:item.id,for:cardID)
                    }.value
                    let result = try await StickerVisionAnalyzer.analyze(
                        imageData:loaded.data,
                        originalName:loaded.item.originalName,
                        currentLabel:loaded.item.label,
                        characterName:charName,
                        settings:settings,
                        mainKey:mainKey
                    )
                    if Task.isCancelled { break }
                    let updated = try await Task.detached(priority:.userInitiated) {
                        try lib.updateMetadata(
                            stickerID:item.id,
                            label:result.label,
                            tags:result.tags,
                            details:result.details,
                            background:result.background,
                            usage:result.usage,
                            analyzed:true,
                            for:cardID
                        )
                    }.value
                    done += 1
                    await MainActor.run {
                        if selected == cardID { stickerPack = updated }
                    }
                } catch {
                    if Task.isCancelled { break }
                    failed += 1
                    if firstError.isEmpty { firstError = error.localizedDescription }
                }
            }
            await MainActor.run {
                stickerAnalyzeTask = nil
                stickerAnalyzeProgress = ""
                if selected == cardID { stickerPack = lib.load(for:cardID) }
                if done > 0 {
                    notice = "AI 识图打标完成：成功 \(done) 张" + (failed > 0 ? "，失败 \(failed) 张（\(firstError)）" : "。现在 AI 已了解这些表情包的画面细节与背景。")
                } else if !firstError.isEmpty {
                    store.error = "AI 识图打标失败：\(firstError)"
                }
            }
        }
    }
    private var stickerPanel:some View {
        let analyzedCount = stickerPack.items.filter(\.analyzed).count
        let pendingCount = stickerPack.items.count - analyzedCount
        return panel("通讯 AI 表情包（按角色独立）","支持导入最高 1GB 的表情包 .zip 或图片并自动解压到当前角色。建议导入后点击「AI 识图打标」，让 AI 真正看懂每张图的内容、细节、服装与背景；通讯时 AI 会在文字回复后自主决定是否补发一张表情包。") {
            Toggle("允许此角色在通讯中自主补发表情包",isOn:Binding(
                get:{ stickerPack.enabled },
                set:{ value in
                    guard let id = selected else { return }
                    do { stickerPack = try stickerLibrary.setEnabled(value,for:id) }
                    catch { store.error = error.localizedDescription }
                }
            )).tint(.indigo)
            HStack(spacing:10) {
                Button { importingStickers = true } label:{
                    Label(stickerBusy ? "正在解压导入…":"导入表情包 .zip / 图片",systemImage:"archivebox.fill")
                }.buttonStyle(.borderedProminent).tint(.indigo).disabled(stickerBusy || stickerAnalyzeTask != nil || selected == nil)
                if !stickerPack.items.isEmpty {
                    Button(role:.destructive) {
                        stickerAnalyzeTask?.cancel(); stickerAnalyzeTask = nil; stickerAnalyzeProgress = ""
                        guard let id = selected else { return }
                        do { try stickerLibrary.clear(for:id); stickerPack = CharacterStickerPack(); notice = "已清空当前角色的表情包。" }
                        catch { store.error = error.localizedDescription }
                    } label:{ Text("清空") }.buttonStyle(.bordered).disabled(stickerBusy)
                }
            }
            if !stickerPack.items.isEmpty {
                HStack(spacing:10) {
                    if stickerAnalyzeTask != nil {
                        Button(role:.destructive) {
                            stickerAnalyzeTask?.cancel(); stickerAnalyzeTask = nil; stickerAnalyzeProgress = ""
                        } label:{ Label("停止识图",systemImage:"stop.fill") }.buttonStyle(.bordered)
                    } else {
                        Button { startStickerAnalysis(reanalyzeAll:false) } label:{
                            Label(pendingCount > 0 ? "AI 识图打标（待识别 \(pendingCount) 张）":"AI 识图已全部完成",systemImage:"sparkles")
                        }.buttonStyle(.borderedProminent).tint(.mint).disabled(pendingCount == 0 || stickerBusy)
                        if analyzedCount > 0 {
                            Button("全部重识") { startStickerAnalysis(reanalyzeAll:true) }.buttonStyle(.bordered).disabled(stickerBusy)
                        }
                    }
                }
                if !stickerAnalyzeProgress.isEmpty {
                    HStack(spacing:8) {
                        ProgressView().controlSize(.small)
                        Text(stickerAnalyzeProgress).font(.caption).foregroundStyle(.mint)
                    }
                }
            }
            if stickerPack.items.isEmpty {
                Text("当前角色尚未导入表情包。支持直接选择最高 1GB 的「爱蜜莉雅表情包.zip」流式解压，导入后可一键让 AI 自动识图提取内容细节与背景。")
                    .font(.caption).foregroundStyle(.secondary)
            } else {
                DisclosureGroup("已导入 \(stickerPack.items.count) 张 · 已 AI 识图 \(analyzedCount)/\(stickerPack.items.count) 张（点开查看或编辑）") {
                    VStack(alignment:.leading,spacing:10) {
                        ForEach(stickerPack.items) { item in
                            VStack(alignment:.leading,spacing:6) {
                                HStack(spacing:8) {
                                    Text(item.id).font(.caption.monospaced()).foregroundStyle(.secondary).frame(width:36,alignment:.leading)
                                    Text(item.label).font(.subheadline.bold()).lineLimit(1)
                                    if item.analyzed {
                                        Text("已识图").font(.caption2).padding(.horizontal,6).padding(.vertical,2).background(.mint.opacity(0.2),in:Capsule()).foregroundStyle(.mint)
                                    }
                                    Spacer()
                                    Button(editingStickerID == item.id ? "收起":"编辑") {
                                        if editingStickerID == item.id {
                                            editingStickerID = nil
                                        } else {
                                            editingStickerID = item.id
                                            editingStickerLabel = item.label
                                            editingStickerDetails = item.details
                                            editingStickerBackground = item.background
                                            editingStickerUsage = item.usage
                                        }
                                    }.font(.caption)
                                    Button(role:.destructive) {
                                        guard let id = selected else { return }
                                        do { stickerPack = try stickerLibrary.remove(stickerID:item.id,for:id) }
                                        catch { store.error = error.localizedDescription }
                                    } label:{ Image(systemName:"trash") }.font(.caption)
                                }
                                if !item.tags.isEmpty {
                                    Text("关键词：\(item.tags.joined(separator:"、"))").font(.caption2).foregroundStyle(.indigo)
                                }
                                if !item.details.isEmpty {
                                    Text("画面细节：\(item.details)").font(.caption2).foregroundStyle(.secondary)
                                }
                                if !item.background.isEmpty {
                                    Text("背景氛围：\(item.background)").font(.caption2).foregroundStyle(.secondary)
                                }
                                if !item.usage.isEmpty {
                                    Text("适用场景：\(item.usage)").font(.caption2).foregroundStyle(.secondary)
                                }
                                if editingStickerID == item.id {
                                    VStack(alignment:.leading,spacing:6) {
                                        TextField("核心标签（如：蕾丝、吃惊）",text:$editingStickerLabel).textFieldStyle(.roundedBorder)
                                        TextField("画面内容与细节（服装/神态/动作）",text:$editingStickerDetails).textFieldStyle(.roundedBorder)
                                        TextField("背景与氛围",text:$editingStickerBackground).textFieldStyle(.roundedBorder)
                                        TextField("适用聊天场景",text:$editingStickerUsage).textFieldStyle(.roundedBorder)
                                        Button("保存此表情档案") {
                                            guard let id = selected else { return }
                                            do {
                                                stickerPack = try stickerLibrary.updateMetadata(
                                                    stickerID:item.id,
                                                    label:editingStickerLabel,
                                                    details:editingStickerDetails,
                                                    background:editingStickerBackground,
                                                    usage:editingStickerUsage,
                                                    analyzed:true,
                                                    for:id
                                                )
                                                editingStickerID = nil
                                            } catch { store.error = error.localizedDescription }
                                        }.buttonStyle(.borderedProminent).tint(.indigo)
                                    }
                                }
                            }
                            Divider()
                        }
                    }.padding(.top,6)
                }
            }
        }
    }
    private func editor(_ title:String,text:Binding<String>,hint:String,id:String = "",limit:Int? = PersonaLimits.fieldCharacters) -> some View {
        panel(title,hint) {
            TextEditor(text:text).frame(minHeight:110).scrollContentBackground(.hidden).padding(8)
                .background(.black.opacity(0.18),in:RoundedRectangle(cornerRadius:12))
                .accessibilityLabel(title).accessibilityIdentifier(id)
            Text("\(text.wrappedValue.count) 字"+(limit.map{" / 上限\($0)字"} ?? "")).font(.caption2).foregroundStyle(.secondary).frame(maxWidth:.infinity,alignment:.trailing)
        }
    }
}
