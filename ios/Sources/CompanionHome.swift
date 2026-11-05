import SwiftUI
import SceneKit

private enum HomeSheet: String, Identifiable {
    case settings, character, api, history, diary, memory, embodiment, snowbreak, persona
    var id: String { rawValue }
}

struct CompanionHome: View {
    @EnvironmentObject private var store: LocalStore
    @Environment(\.scenePhase) private var scenePhase
    @StateObject private var stage = CompanionStage()
    @StateObject private var snowbreak = SnowbreakStage()
    @StateObject private var senses = CompanionSenses()
    @StateObject private var camera = RearCamera()
    @State private var preparingSend = false
    @State private var photoPicker = false
    @State private var imageFilePicker = false
    @State private var attachedImage:CameraFrame?
    @State private var directlyControlledUser:UUID?
    @State private var showingBodyState = false
    @AppStorage("selfAppearanceImagePolicy") private var selfAppearanceImagePolicy = "questions"
    @AppStorage("characterEngine") private var engine = "native"
    @State private var sheet: HomeSheet?
    @State private var draft = ""
    @State private var pendingMotionRevision: Int?
    @State private var nativeEditing = false
    @State private var nativeRotating = false
    @State private var nativePresentation = ScenePresentation.load()
    @AppStorage("showSceneBackground") private var showBackground = true
    @AppStorage("sceneBackgroundName") private var backgroundName = "Morning_BG"
    @AppStorage("touchAI") private var touchAI = true
    @AppStorage("snowbreakVoice") private var snowbreakVoice = true
    private var isSnowbreak:Bool { engine == "snowbreak" }
    private var availableActions:[String] { isSnowbreak ? snowbreak.dialogueActions : stage.dialogueActions }
    private var currentRevision:Int { isSnowbreak ? snowbreak.interactionRevision : stage.interactionRevision }
    private var activeAction:String? { isSnowbreak ? snowbreak.activeAction : stage.activeAction }
    private var modelKey:String {isSnowbreak ? "enya":"native"}
    private var modelLabel:String {isSnowbreak ? "恩雅护士":stage.name}
    private func companionContext(_ origin:String) -> CompanionContext {
        CompanionContext(modelKey:modelKey,modelName:modelLabel,
                         mode:isSnowbreak ? (snowbreak.companionMode == "standing" ? "看板娘站立":"皮肤互动坐姿"):"本地角色展示",
                         activeAction:activeAction ?? "待机",origin:origin,bodyStatus:(isSnowbreak ? snowbreak.bodyState:stage.bodyState).summary)
    }
    private func stopAction() { if isSnowbreak { snowbreak.stop() } else { stage.stopAction() } }
    private func resumeStage() {
        store.activateCompanion(modelKey)
        if isSnowbreak { stage.stop();snowbreak.resume() }
        else { snowbreak.pause();Task { await stage.refresh();stage.start() } }
    }

    var body: some View {
        ZStack {
            background.ignoresSafeArea()
            if isSnowbreak {
                SnowbreakCharacterView(stage:snowbreak).id("snowbreak-renderer").ignoresSafeArea().accessibilityIdentifier("snowbreakScene")
                if let error = snowbreak.error {
                    VStack { Text(error);Button("返回原伙伴") { engine = "native" } }.padding(24).background(.ultraThinMaterial,in:RoundedRectangle(cornerRadius:20))
                } else if !snowbreak.ready { ProgressView("正在加载恩雅…").accessibilityIdentifier("snowbreakLoading") }
            } else if let scene = stage.scene {
                ImmersiveCharacterView(scene: scene, backgroundImage: selectedBackground, showBackground: showBackground,
                    onTouch:nativeEditing ? nil : handleTouch,onEdit:nativeEditing ? editNativeGesture : nil,onView:stage.attachSnapshotView).id("native-renderer").ignoresSafeArea()
                    .accessibilityElement(children: .ignore)
                    .accessibilityLabel(stage.name).accessibilityIdentifier("companionScene")
            } else {
                VStack(spacing: 18) {
                    if stage.loading { ProgressView("正在唤醒伙伴…") }
                    else {
                        Image(systemName: "person.crop.circle").font(.system(size: 64))
                        Text(stage.error ?? "把你的伙伴带到这里").multilineTextAlignment(.center)
                        Button("导入伙伴") { sheet = .character }.buttonStyle(.borderedProminent)
                    }
                }.foregroundStyle(.white).padding(32)
            }
            VStack {
                HStack(alignment: .top) {
                    VStack(spacing: 12) {
                        circle("gearshape", label: "设置") { sheet = .settings }
                        Menu {
                            Menu("身体控制") {
                                ForEach(BodyCommand.allCases.filter{availableActions.contains($0.rawValue)},id:\.rawValue){command in
                                    Button(command.label){Task{await performBody(command)}}
                                }
                            }
                            Button("查看当前身体状态"){showingBodyState = true}
                            Button(senses.environment ? "停止环境聆听" : "环境声音反馈（本机）") { senses.toggleEnvironment() }
                            if isSnowbreak {
                                if snowbreak.variantIDs.count == 4 {
                                    Section("陪伴模式") {
                                        Button(snowbreak.companionMode == "standing" ? "✓ 看板娘（站立）" : "看板娘（站立）") { snowbreak.selectVariant(mode:"standing") }
                                        Button(snowbreak.companionMode == "interaction" ? "✓ 皮肤互动（坐姿）" : "皮肤互动（坐姿）") { snowbreak.selectVariant(mode:"interaction") }
                                    }
                                    Section("服饰") {
                                        Button(snowbreak.companionOutfit == "normal" ? "✓ 正常服饰" : "正常服饰") { snowbreak.selectVariant(outfit:"normal") }
                                        Button(snowbreak.companionOutfit == "nude" ? "✓ 果体版" : "果体版") { snowbreak.selectVariant(outfit:"nude") }
                                    }
                                }
                                ForEach(snowbreak.actions,id:\.self) { id in
                                    Button(["snowbreak_home_login":"看板娘 · 登录招呼","snowbreak_home_invite":"看板娘 · 邀请","snowbreak_home_shy":"看板娘 · 害羞","snowbreak_home_check":"看板娘 · 检查","snowbreak_home_kiss":"看板娘 · 亲吻","snowbreak_show_02":"互动展示 02","snowbreak_show_03":"互动展示 03","snowbreak_show_04":"互动展示 04","snowbreak_show_05":"互动展示 05","snowbreak_sequence":"完整展示片段","snowbreak_idle_01":"互动待机变化 01","snowbreak_idle_02":"互动待机变化 02","snowbreak_head":"头部原作反应","snowbreak_left":"左手原作反应","snowbreak_right":"右手原作反应","enya_yuki_hello":"学习 Yuki · 挥手","enya_yuki_Yes":"学习 Yuki · 点头","enya_yuki_No":"学习 Yuki · 摇头","enya_yuki_Peace_hand":"学习 Yuki · 比 V","enya_yuki_dance_90bpm":"站立舞蹈 · 90 BPM","enya_yuki_dance_120bpm":"站立舞蹈 · 120 BPM","enya_yuki_f_vibe_dance_60_bpm_002":"站立舞蹈 · 60 BPM"][id] ?? id) { snowbreak.play(id,withVoice:snowbreakVoice) }
                                }
                                Button("精细触碰表面标注") { snowbreak.editTouch() }
                                Button("展示编辑：移动 / 旋转 / 缩放") { snowbreak.editFrame() }
                                Button("采光与材质") { snowbreak.editLighting() }
                            } else {
                            ForEach(stage.actions) { action in Button(action.name) { stage.playAction(action.id) } }
                            if stage.supportsProcedural { Button("自由动作示范：抬手") { stage.demoMotion() } }
                            Button("展示编辑：移动 / 旋转 / 缩放") { stage.stopAction();nativeEditing.toggle() }
                            }
                            Button("停止动作") { stopAction() }
                        } label: {
                            Image(systemName: "figure.dance").font(.system(size: 22)).foregroundStyle(.white)
                                .frame(width: 46, height: 46).background(.ultraThinMaterial, in: Circle())
                                .overlay(Circle().stroke(.white.opacity(0.23)))
                        }.accessibilityLabel("动作").accessibilityIdentifier("characterActions").disabled(availableActions.isEmpty)
                    }
                    Spacer()
                    VStack(spacing: 2) {
                        Text("栖伴").font(.system(size: 24, weight: .semibold, design: .rounded))
                        Text("LOCAL").font(.system(size: 8, weight: .medium)).tracking(3).opacity(0.6)
                    }.padding(.top, 8)
                    Spacer()
                    VStack(alignment:.trailing,spacing: 12) {
                        circle("person.crop.circle", label: "日记") { sheet = .diary }
                        Menu {
                            Button("从相册发送图片"){senses.suspend();photoPicker = true}
                            Button("从文件发送图片"){senses.suspend();imageFilePicker = true}
                            Button("附上自身模型画面"){Task{do{attachedImage = try await ownPortrait()}catch{store.error = error.localizedDescription}}}
                            Picker("自身形象输入",selection:$selfAppearanceImagePolicy) {
                                Text("仅身体状态文字").tag("off")
                                Text("问及外观时附模型画面").tag("questions")
                                Text("每轮附模型画面（需识图 API）").tag("always")
                            }
                        } label:{Image(systemName:"photo.badge.plus").font(.system(size:22)).foregroundStyle(.white).frame(width:46,height:46).background(.ultraThinMaterial,in:Circle())}
                            .accessibilityLabel("图片与自身形象").disabled(preparingSend)
                        if camera.enabled, let session = camera.session {
                            VStack(spacing:6) {
                                RearCameraPreview(session:session).frame(width:112,height:164)
                                    .background(.black).clipShape(RoundedRectangle(cornerRadius:18))
                                    .overlay(alignment:.topLeading) { Text("后置主摄 · 1×").font(.system(size:9)).padding(5).background(.black.opacity(0.5),in:Capsule()).padding(5) }
                                    .accessibilityLabel("后置主摄实时预览").accessibilityIdentifier("rearCameraPreview")
                                Button("看看镜头") { send("看看镜头里的内容，告诉我你看到了什么。") }
                                    .font(.caption).padding(7).background(.ultraThinMaterial,in:Capsule())
                                    .disabled(store.busy || preparingSend).accessibilityIdentifier("analyzeCameraFrame")
                            }
                        }
                    }.frame(width:46,alignment:.trailing)
                }.padding(.horizontal, 18).padding(.top, 8)
                Spacer()
            }
        }
        .preferredColorScheme(.dark)
        .sheet(isPresented:$showingBodyState) {
            BodyStatusInspector {
                if isSnowbreak {await snowbreak.refreshBodyState()}
                return (isSnowbreak ? snowbreak.bodyState:stage.bodyState).summary
            }
        }
        .sheet(isPresented:$photoPicker) {ChatPhotoPicker {result in photoPicker = false;do{if let image = try result.get(){attachedImage = image}}catch{store.error = error.localizedDescription}}}
        .sheet(isPresented:$imageFilePicker) {
            CharacterDocumentPicker {result in
                imageFilePicker = false
                do {
                    guard let url = try result.get() else{return}
                    let access = url.startAccessingSecurityScopedResource();defer{if access{url.stopAccessingSecurityScopedResource()}}
                    guard (try url.resourceValues(forKeys:[.fileSizeKey]).fileSize ?? Int.max)<=20_000_000 else {throw CompanionError.message("图片超过20MB。")}
                    attachedImage = try ChatImage.prepare(Data(contentsOf:url))
                }catch{store.error = error.localizedDescription}
            }
        }
        .safeAreaInset(edge: .bottom, spacing: 0) { composer }
        .fullScreenCover(item: $sheet, onDismiss: {
            resumeStage()
        }) { destination in
            switch destination {
            case .settings:
                homeSettings
            case .character: withClose { CharacterPreview() }
            case .api: withClose { SettingsView() }
            case .history: withClose { ConversationView() }
            case .diary: withClose { DiaryView() }
            case .memory: withClose { MemoryView() }
            case .embodiment: withClose { EmbodimentSettingsView() }
            case .snowbreak: withClose { SnowbreakImportView(stage:snowbreak) }
            case .persona: PersonaView(modelKey:modelKey,modelName:modelLabel,actions:availableActions,onClose:{sheet = nil})
            }
        }
        .onChange(of: sheet) { if $0 != nil { camera.stop();senses.suspend();stage.stop();snowbreak.pause() } }
        .onChange(of:camera.enabled) { value in if !value { store.discardCameraFrame() } }
        .onChange(of:senses.utterance?.id) { _ in
            guard let event=senses.utterance,!store.busy else{return};send(event.text,origin:"语音转录")
        }
        .onChange(of:senses.sound?.id) { _ in
            guard let event=senses.sound,!store.busy,!store.archive.settings.endpoint.isEmpty else{return}
            store.send("[环境聆听] "+event.text,actions:availableActions,context:companionContext("环境声音分类"));pendingMotionRevision=currentRevision
        }
        .onChange(of:store.archive.messages.last?.id) { _ in
            if let last=store.archive.messages.last,last.role == "assistant" {senses.speak(last.content)}
        }
        .onChange(of:store.busy) { value in if !value,store.error != nil {senses.replyFailed()} }
        .onChange(of: store.dialogueAction?.id) { _ in
            guard let event = store.dialogueAction else { return }
            if let direct = directlyControlledUser,store.archive.messages.dropLast().last?.id == direct {pendingMotionRevision = nil;return}
            if sheet == nil, scenePhase == .active,
               pendingMotionRevision == currentRevision {
                if isSnowbreak { snowbreak.play(event.action,withVoice:false,automatic:true) }
                else { stage.performDialogueAction(event.action,motion:event.motion) }
            }
            pendingMotionRevision = nil
        }
        .onChange(of:snowbreak.touch?.id) { _ in
            guard isSnowbreak,sheet == nil,scenePhase == .active,touchAI,!store.busy,
                  !store.archive.settings.endpoint.isEmpty,let touch = snowbreak.touch else { return }
            store.send("[触碰互动] 用户触碰了你的\(touch.label)，请根据已确认的触碰部位和上下文自然回应。",actions:availableActions,context:companionContext("已确认的屏幕触碰"))
            pendingMotionRevision = currentRevision
        }
        .onChange(of:engine) { _ in pendingMotionRevision = nil;nativeEditing = false;resumeStage() }
        .onChange(of:nativePresentation) { value in stage.setPresentation(value);value.save() }
        .onChange(of:showBackground) { value in snowbreak.sceneVisible(value) }
        .onChange(of:snowbreak.ready) { ready in if ready { snowbreak.sceneVisible(showBackground);snowbreak.setVoice(snowbreakVoice) } }
        .onChange(of:snowbreakVoice) { value in snowbreak.setVoice(value) }
        .task { resumeStage() }
        .onDisappear { camera.stop();senses.suspend();stage.stop();snowbreak.pause() }
        .onChange(of: scenePhase) { phase in
            if phase == .active, sheet == nil { resumeStage() } else { camera.stop();senses.suspend();stage.stop();snowbreak.pause() }
        }
    }

    private var background: some View {
        GeometryReader { proxy in
            if showBackground, let image = stage.backgrounds[backgroundName] ?? stage.backgrounds.values.first {
                Image(uiImage: image).resizable().scaledToFill()
                    .frame(width: proxy.size.width, height: proxy.size.height).clipped()
            } else {
                LinearGradient(colors: showBackground ? [Color(red: 0.2, green: 0.16, blue: 0.23), Color(red: 0.06, green: 0.04, blue: 0.1)] : [.black, .black],
                               startPoint: .topLeading, endPoint: .bottomTrailing)
            }
        }
    }

    private var selectedBackground: UIImage? {
        stage.backgrounds[backgroundName] ?? stage.backgrounds.sorted(by: { $0.key < $1.key }).first?.value
    }

    private var composer: some View {
        VStack(spacing: 10) {
            if let image = attachedImage,let thumbnail = UIImage(data:image.jpeg) {
                HStack(spacing:12){Image(uiImage:thumbnail).resizable().scaledToFit().frame(width:64,height:64);Text(image.source.label+"\n发送时交给当前识图 API，不写入备份").font(.caption);Spacer();Button("移除"){attachedImage = nil}}
                    .padding(10).background(.ultraThinMaterial,in:RoundedRectangle(cornerRadius:16)).padding(.horizontal,18).accessibilityIdentifier("pendingChatImage")
            }
            if store.archive.messages.isEmpty,let card = store.currentCard,!card.firstMessages.isEmpty {
                Menu("使用角色开场白") {
                    ForEach(card.firstMessages.indices,id:\.self){index in
                        Button(String(card.firstMessages[index].prefix(60))){do{try store.insertGreeting(index)}catch{store.error = error.localizedDescription}}
                    }
                }.font(.caption).accessibilityIdentifier("personaGreeting")
            }
            if !isSnowbreak,nativeEditing {
                NativePresentationPanel(value:$nativePresentation,rotating:$nativeRotating) { nativeEditing = false;nativePresentation.save() }
            }
            if isSnowbreak,snowbreak.ready {
                Text(snowbreak.variantIDs.count == 4 ? "恩雅 · \(snowbreak.companionMode == "standing" ? "看板娘" : "皮肤互动") · \(snowbreak.companionOutfit == "normal" ? "正常服饰" : "果体版")" : "恩雅已就绪").font(.caption2).foregroundStyle(.white.opacity(0.6)).accessibilityIdentifier("snowbreakReady")
            }
            if isSnowbreak,let notice = snowbreak.notice { Text(notice).font(.caption).foregroundStyle(.secondary).padding(.horizontal) }
            if !isSnowbreak,let status = stage.touchStatus {
                Text(status).font(.caption).padding(8).background(.ultraThinMaterial,in:Capsule())
                    .accessibilityIdentifier("characterTouchStatus")
            }
            if let action = activeAction {
                Button("正在播放：\(action) · 点击停止") { stopAction() }
                    .font(.caption).foregroundStyle(.white).padding(8)
                    .background(.ultraThinMaterial, in: Capsule()).accessibilityIdentifier("activeCharacterAction")
            }
            if let reply = store.archive.messages.last, reply.role == "assistant" {
                Button { sheet = .history } label: {
                    Text(reply.content).font(.system(size: 16)).lineLimit(5)
                        .foregroundStyle(.white).padding(14)
                        .background(.ultraThinMaterial, in: RoundedRectangle(cornerRadius: 18))
                }.accessibilityIdentifier("latestCompanionReply").padding(.horizontal, 24)
            }
            if store.busy {
                Button("正在思考… 点击停止") { store.cancel() }.font(.subheadline).foregroundStyle(.white)
            } else if store.archive.settings.endpoint.isEmpty {
                Button("在设置中连接你的 API") { sheet = .api }.font(.footnote).foregroundStyle(.white.opacity(0.8))
            }
            if !senses.status.isEmpty {Text(senses.status).font(.caption).foregroundStyle(.white).lineLimit(2)}
            if !camera.status.isEmpty {Text(camera.status).font(.caption2).foregroundStyle(.white).lineLimit(2).padding(.horizontal)}
            HStack(spacing: 8) {
                circle("paperplane", label: "发送消息", enabled: !store.busy && !preparingSend && (!draft.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty || attachedImage != nil)) { send() }
                TextField("输入消息……", text: $draft, axis: .vertical).lineLimit(1...4)
                    .foregroundStyle(.white).padding(.horizontal, 16).padding(.vertical, 14)
                    .background(.ultraThinMaterial, in: Capsule()).overlay(Capsule().stroke(.white.opacity(0.2)))
                    .accessibilityIdentifier("homeMessageInput")
                circle(camera.enabled ? "video.fill" : "video.slash", label:camera.enabled || camera.starting ? "关闭后置视频" : "开启后置视频") { camera.toggle() }
                circle(senses.conversation ? "phone.down.fill" : "mic", label:senses.conversation ? "结束语音通话" : "开始语音通话",enabled: !store.busy || senses.conversation) { if store.archive.settings.endpoint.isEmpty {sheet = .api}else{senses.toggleVoice()} }
            }.padding(.horizontal, 14)
        }.padding(.top, 28).padding(.bottom, 12)
            .background(LinearGradient(colors: [.clear, .black.opacity(0.6)], startPoint: .top, endPoint: .bottom))
    }

    private func circle(_ icon: String, label: String, enabled: Bool = true, action: @escaping () -> Void) -> some View {
        Button(action: action) {
            Image(systemName: icon).font(.system(size: 22, weight: .regular))
                .foregroundStyle(.white).frame(width: 46, height: 46)
                .background(.ultraThinMaterial, in: Circle()).overlay(Circle().stroke(.white.opacity(0.23)))
        }.accessibilityLabel(label).disabled(!enabled).opacity(enabled ? 1 : 0.4)
    }

    private func send(_ explicitText:String? = nil,origin:String = "文字对话") {
        guard !store.busy,!preparingSend else { return }
        let selectedImage = attachedImage
        let text = explicitText ?? (draft.trimmingCharacters(in:.whitespacesAndNewlines).isEmpty && selectedImage != nil ? (selectedImage?.source == .selfPortrait ? "这是你自己的模型画面，看看你现在的样子。":"请看看这张图片，告诉我你看到了什么。"):draft)
        guard !text.trimmingCharacters(in:.whitespacesAndNewlines).isEmpty else { return }
        preparingSend = true
        Task { @MainActor in
            defer { preparingSend = false }
            do {
                var executed:BodyCommand?
                if let command = BodyCommand.resolve(text),availableActions.contains(command.rawValue) {await performBody(command);executed = command}
                if isSnowbreak {await snowbreak.refreshBodyState()}
                var images:[CameraFrame] = []
                if let selectedImage = selectedImage {images.append(selectedImage)}
                if let frame = try await camera.frame(){images.append(frame)}
                if (selfAppearanceImagePolicy == "always" || selfAppearanceImagePolicy == "questions" && BodyCommand.asksAppearance(text)),!images.contains(where:{$0.source == .selfPortrait}) {images.append(try await ownPortrait())}
                guard sheet == nil,scenePhase == .active,!store.busy else { return }
                let before = store.archive.messages.count
                senses.prepareReply()
                let source = executed.map{origin+"；本轮已直接执行："+$0.label} ?? origin
                store.send(text, actions:availableActions, image:images.first,images:Array(images.dropFirst()),context:companionContext(source))
                if store.archive.messages.count > before {
                    directlyControlledUser = executed == nil ? nil:store.archive.messages.last?.id
                    attachedImage = nil
                    if explicitText == nil,draft == text { draft = "" }
                    if DialogueMotion.isStopRequest(text) { stopAction() }
                    pendingMotionRevision = currentRevision
                } else { senses.replyFailed() }
            } catch { store.error = error.localizedDescription;senses.replyFailed() }
        }
    }
    private func ownPortrait() async throws -> CameraFrame {if isSnowbreak{return try await snowbreak.portrait()};return try stage.portrait()}
    private func performBody(_ command:BodyCommand) async {
        if isSnowbreak {_ = await snowbreak.executeBody(command)}
        else {_ = stage.executeBody(command);try? await Task.sleep(nanoseconds:850_000_000)}
    }

    private func handleTouch(_ view: SCNView, _ point: CGPoint, _ kind: String) {
        stage.gaze(x:point.x/max(1,view.bounds.width)*2-1,y:1-point.y/max(1,view.bounds.height)*2,touch:true)
        guard sheet == nil, scenePhase == .active, let touch = stage.touch(in:view,point:point,kind:kind) else { return }
        if touchAI, !store.busy, !store.archive.settings.endpoint.isEmpty {
            let before = store.archive.messages.count
            store.send(touch.message,actions:stage.dialogueActions,context:companionContext("已确认的屏幕触碰"))
            if store.archive.messages.count > before { pendingMotionRevision = stage.interactionRevision }
        }
    }
    private func editNativeGesture(_ kind:String,_ delta:CGPoint,_ size:CGSize) {
        if kind == "pinch" { nativePresentation.scale *= Double(delta.x) }
        else if nativeRotating {
            nativePresentation.yaw += Double(delta.x/max(1,size.width))*300
            nativePresentation.pitch += Double(delta.y/max(1,size.height))*100
        } else {
            nativePresentation.x += Double(delta.x/max(1,size.height))*0.86
            nativePresentation.y -= Double(delta.y/max(1,size.height))*0.86
        }
        nativePresentation = nativePresentation.validated()
    }

    private func withClose<Content: View>(@ViewBuilder content: () -> Content) -> some View {
        content().safeAreaInset(edge: .top) {
            HStack { Spacer(); Button("完成") { sheet = nil }.padding(.horizontal) }.padding(.vertical, 8)
        }
    }

    private var homeSettings: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 26) {
                circle("chevron.left", label: "返回陪伴") { sheet = nil }
                Text("设置").font(.system(size: 34, weight: .bold))
                VStack(alignment: .leading, spacing: 10) {
                    Text("我的伙伴").foregroundStyle(.secondary)
                    VStack(spacing: 16) {
                        Image(systemName: "person.crop.circle.fill").font(.system(size: 64)).foregroundStyle(.white.opacity(0.9))
                        Text(store.currentCard?.name ?? modelLabel).font(.title.bold())
                        Picker("当前伙伴",selection:$engine) {
                            Text("本地伙伴").tag("native")
                            if snowbreak.library.hasCurrent || isSnowbreak { Text("恩雅护士").tag("snowbreak") }
                        }
                        if isSnowbreak { Toggle("恩雅原声",isOn:$snowbreakVoice).tint(.green) }
                        if isSnowbreak,CharacterLibrary().hasCurrent {
                            Button("显示已保存的 Yuki / 本地伙伴") { engine = "native" }
                                .accessibilityIdentifier("switchToNative")
                        }
                        if !isSnowbreak,snowbreak.library.hasCurrent {
                            Button("显示恩雅护士") { engine = "snowbreak" }.accessibilityIdentifier("switchToSnowbreak")
                        }
                        Button { sheet = .character } label: {
                            Label("切换 / 导入伙伴", systemImage: "arrow.triangle.2.circlepath")
                                .font(.headline).foregroundStyle(.black).frame(maxWidth: .infinity).padding(14)
                                .background(.white, in: Capsule())
                        }.accessibilityIdentifier("manageCharacter")
                    }.frame(maxWidth: .infinity).padding(20).modifier(SettingsCard())
                }
                VStack(spacing: 0) {
                    Toggle(isOn: $showBackground) { Label("显示背景", systemImage: "person.and.background.dotted") }.tint(.green).padding(16).accessibilityIdentifier("showBackground")
                    Divider().padding(.leading, 50)
                    if !stage.backgrounds.isEmpty {
                        Picker("场景", selection: $backgroundName) {
                            ForEach(stage.backgrounds.keys.sorted(), id: \.self) { key in
                                Text(backgroundLabel(key)).tag(key)
                            }
                        }.padding(16)
                        Divider().padding(.leading, 50)
                    }
                    Label("画中画 · 接入中", systemImage: "pip").frame(maxWidth: .infinity, alignment: .leading).foregroundStyle(.secondary).padding(16)
                    Divider().padding(.leading, 50)
                    Label("音乐 · 接入中", systemImage: "music.note").frame(maxWidth: .infinity, alignment: .leading).foregroundStyle(.secondary).padding(16)
                }.modifier(SettingsCard())
                VStack(spacing: 0) {
                    settingsRow("导入恩雅护士（尘白）", icon:"person.crop.rectangle.stack") { sheet = .snowbreak }
                    Divider().padding(.leading,50)
                    if !isSnowbreak { settingsRow("身体、触碰与光照", icon: "sun.max") { sheet = .embodiment } }
                    else { Text("恩雅沿用旧项目的材质、原作动作与病房打光。").font(.caption).foregroundStyle(.secondary).padding(16) }
                    Divider().padding(.leading, 50)
                    settingsRow("模型与自定义 API", icon: "slider.horizontal.3") { sheet = .api }
                    Divider().padding(.leading,50)
                    settingsRow("人设与陪伴",icon:"person.text.rectangle") {sheet = .persona}
                    Divider().padding(.leading, 50)
                    settingsRow("聊天记录", icon: "bubble.left.and.bubble.right") { sheet = .history }
                    Divider().padding(.leading, 50)
                    settingsRow("记忆", icon: "heart.text.square") { sheet = .memory }
                    Divider().padding(.leading, 50)
                    settingsRow("日记", icon: "book") { sheet = .diary }
                }.modifier(SettingsCard())
                Text("本地保存 · 自定义服务\n人设、聊天与记忆随角色卡保存。语音和后置识图按需开启。")
                    .font(.footnote).foregroundStyle(.secondary)
            }.padding(20)
        }.background(Color(red: 0.06, green: 0.05, blue: 0.07)).foregroundStyle(.white)
    }

    private func backgroundLabel(_ key: String) -> String {
        ["Morning_BG": "清晨", "SunnyDay_BG": "晴天", "Night_BG": "夜晚"][key] ?? key
    }
    private func settingsRow(_ title: String, icon: String, action: @escaping () -> Void) -> some View {
        Button(action: action) {
            HStack { Label(title, systemImage: icon); Spacer(); Image(systemName: "chevron.right").foregroundStyle(.secondary) }.padding(16)
        }.foregroundStyle(.white)
    }
}

private struct SettingsCard: ViewModifier {
    func body(content: Content) -> some View {
        content.background(Color.white.opacity(0.035), in: RoundedRectangle(cornerRadius: 24))
            .overlay(RoundedRectangle(cornerRadius: 24).stroke(.white.opacity(0.09)))
    }
}

private struct BodyStatusInspector:View {
    @Environment(\.dismiss) private var dismiss
    @State private var summary = "正在读取播放器身体实况…"
    let read:() async -> String
    var body:some View {
        NavigationStack {
            ScrollView {Text(summary).frame(maxWidth:.infinity,alignment:.leading).padding(22).accessibilityIdentifier("liveBodyState")}
                .navigationTitle("播放器身体实况").navigationBarTitleDisplayMode(.inline)
                .toolbar {Button("关闭"){dismiss()}}
                .task {
                    while !Task.isCancelled {
                        summary = await read()
                        try? await Task.sleep(nanoseconds:200_000_000)
                    }
                }
        }.presentationDetents([.medium])
    }
}
