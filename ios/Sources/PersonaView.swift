import SwiftUI
import UniformTypeIdentifiers

struct PersonaView:View {
    @EnvironmentObject private var store:LocalStore
    let modelKey:String
    let modelName:String
    let actions:[String]
    var onClose:(()->Void)? = nil
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
                            try store.savePersonas(library,selected:selected,modelKey:modelKey)
                            library = store.archive.settings.personas!;notice = "已保存并应用到\(modelName)"
                        } catch {store.error = error.localizedDescription}
                    } label:{Label("保存并应用到当前伙伴",systemImage:"checkmark.circle.fill").font(.headline).frame(maxWidth:.infinity).padding(15)}
                        .buttonStyle(.borderedProminent).tint(.indigo).disabled(store.busy || !loaded || !store.storageReady)
                        .accessibilityIdentifier("savePersona").padding(.horizontal,20).padding(.vertical,10).background(.ultraThinMaterial)
                }
                .onAppear {
                    guard !loaded else{return}
                    library = store.archive.settings.personas ?? PersonaLibrary.migrating(store.archive.settings.persona)
                    selected = library.card(for:modelKey)?.id;loaded = true
                }
                .sheet(isPresented:$importing) {
                    CharacterDocumentPicker {result in
                        importing = false
                        do {
                            guard let url = try result.get() else{return}
                            let granted = url.startAccessingSecurityScopedResource();defer{if granted{url.stopAccessingSecurityScopedResource()}}
                            guard (try url.resourceValues(forKeys:[.fileSizeKey]).fileSize ?? 0) <= 2_000_000 else {throw CompanionError.message("角色卡 JSON 超过 2MB。")}
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
            editor("人物描述",text:card.description,hint:"身份、背景、与你的关系",id:"personaDescriptionInput")
            editor("性格与说话方式",text:card.personality,hint:"她怎样倾听、说话与表达情绪")
            editor("场景",text:card.scenario,hint:"你们目前所处的情境与关系阶段")
            editor("示例对话",text:card.examples,hint:"支持 {{char}} 与 {{user}}；示例不会当作真实聊天经历。")
            DisclosureGroup("开场白与备注") {
                editor("开场白",text:greetings,hint:"多条之间单独一行写 ---；只在空对话中手动使用。")
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
            editor("全局系统提示词",text:$library.systemPrompt,hint:"所有角色共用的语言、回复长度及相处规则",id:"personaSystemInput")
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
    private func editor(_ title:String,text:Binding<String>,hint:String,id:String = "") -> some View {
        panel(title,hint) {
            TextEditor(text:text).frame(minHeight:110).scrollContentBackground(.hidden).padding(8)
                .background(.black.opacity(0.18),in:RoundedRectangle(cornerRadius:12))
                .accessibilityLabel(title).accessibilityIdentifier(id)
            Text("\(text.wrappedValue.count) 字").font(.caption2).foregroundStyle(.secondary).frame(maxWidth:.infinity,alignment:.trailing)
        }
    }
}
