import SwiftUI
import WebKit
import UniformTypeIdentifiers

@MainActor struct ChatModuleView:View {
    @EnvironmentObject private var callManager: VoiceCallManager
    @StateObject private var controller:ChatModuleController
    @Environment(\.scenePhase) private var scenePhase
    @State private var importing=false
    @StateObject private var portraits=PortraitStage()
    init(store:LocalStore,speech:CompanionSpeech,appearance:String="",onClose:@escaping()->Void) {
        let controller=ChatModuleController(store:store,speech:speech,appearance:appearance);controller.onClose=onClose
        _controller=StateObject(wrappedValue:controller)
    }
    var body:some View {
        VStack(spacing:0) {
            HStack(spacing:14) {
                Button {controller.close()} label:{Label("陪伴",systemImage:"chevron.left")}
                Spacer()
                Text("通讯").font(.headline)
                Spacer()
                Button {controller.setSpeechEnabled(!controller.speechEnabled)} label:{
                    Label("TTS",systemImage:controller.speechEnabled ? "speaker.wave.2":"speaker.slash")
                }.accessibilityLabel(controller.speechEnabled ? "关闭 TTS 语音":"开启 TTS 语音").accessibilityIdentifier("chatSpeechToggle")
                Menu {
                    Button("面对面对话"){controller.openGal()}.disabled(!controller.ready)
                    Button("语音通话（电话模式）") {
                        callManager.start(
                            mode: .fullPhone,
                            store: controller.store,
                            speech: controller.speech,
                            cardID: controller.selectedCardID
                        )
                    }
                    Button("通话主题与防外放设置"){callManager.showingThemeSheet=true}
                    Divider()
                    Button("导入官方2D动态立绘"){controller.openPane(.portrait)}
                    Button("开启新对话"){controller.conversationMenu(new:true)}.disabled(!controller.ready)
                    Button("历史对话／切换对话"){controller.conversationMenu(new:false)}.disabled(!controller.ready)
                    Divider()
                    Button("系统提示词／用户与 AI 人设"){controller.openPane(.persona)}
                    Button("App 对话与独立接口"){controller.openPane(.api)}
                    Button("App 中／日配音与 TTS"){controller.openPane(.speech)}
                    Menu("通讯配音来源") {
                        Button {controller.setAppSpeech(true)} label:{Label("App 全局配音",systemImage:controller.appTTSMode ? "checkmark.circle.fill":"circle")}
                        Button {controller.setAppSpeech(false)} label:{Label("通讯 MiMO 参考语音",systemImage:controller.appTTSMode ? "circle":"checkmark.circle.fill")}
                    }.disabled(!controller.ready)
                    Button("停止朗读"){controller.stopSpeech()}
                    Button("重新打开页面"){controller.refresh()}.disabled(!controller.ready)
                    if controller.canRecoverState {Button("导出通讯记录恢复副本"){controller.exportRecoveryCopy()}}
                    Button("导入／更新 .qchat 模块"){beginImport()}
                    Link("原项目与开源授权",destination:URL(string:ChatModuleInfo.source)!)
                } label:{Image(systemName:"ellipsis.circle").font(.title3)}
            }.padding(.horizontal,16).padding(.vertical,11)
                .foregroundStyle(Color(red:0.25,green:0.27,blue:0.6)).background(.white)
            Divider()
            if controller.ready,let view=controller.webView {ChatWebSurface(view:view)}
            else {landing}
            if !controller.status.isEmpty {ProgressView(controller.status).font(.caption).padding(10)}
            if let error=controller.error {
                VStack(spacing:8){Text(error).font(.footnote).foregroundStyle(.red);Button("重新打开"){controller.error=nil;if controller.webView != nil{controller.refresh()}else{controller.reopen()}}}
                    .padding(12).frame(maxWidth:.infinity).background(.white)
            }
        }.frame(maxWidth:.infinity,maxHeight:.infinity).background(Color(red:0.96,green:0.97,blue:1)).preferredColorScheme(.light).tint(.indigo)
        .task {
            controller.onStartCall = { mode, cardID, characterName, conversationID, _, animations in
                callManager.start(
                    mode: mode,
                    store: controller.store,
                    speech: controller.speech,
                    cardID: cardID,
                    characterName: characterName,
                    conversationID: conversationID,
                    actionsProvider: animations.isEmpty ? nil : { animations },
                    onChatTurn: { userID, userText, assistantID, assistantText, spokenChinese, spokenJapanese, expressionId in
                        guard !conversationID.isEmpty else { return }
                        controller.emitCallTurn(
                            conversationID: conversationID,
                            userID: userID,
                            userText: userText,
                            assistantID: assistantID,
                            assistantText: assistantText,
                            spokenChinese: spokenChinese,
                            spokenJapanese: spokenJapanese,
                            expressionId: expressionId
                        )
                    }
                )
            }
            await controller.start()
        }
        .onDisappear{controller.dispose()}
        .onChange(of:scenePhase){ phase in
            callManager.handleScenePhase(phase)
            if phase == .background && callManager.active && callManager.mode == .fullPhone {
                controller.cancelRequests()
            } else {
                controller.suspend(phase == .background)
            }
        }
        .overlay { VoiceCallOverlay() }
        .sheet(isPresented:$importing) {CharacterDocumentPicker {result in
            importing=false
            do {if let url=try result.get(){controller.install(url)}else{controller.reopen()}}catch{controller.error=error.localizedDescription}
        }}
        .sheet(item:$controller.pane,onDismiss:{if controller.ready{controller.refresh()}}) {pane in
            Group {switch pane {
            case .portrait:PortraitImportView(stage:portraits).safeAreaInset(edge:.top){HStack{Spacer();Button("完成"){controller.pane=nil}.padding()}}
            case .api:SettingsView(onClose:{controller.pane=nil})
            case .speech:SpeechSettingsView().safeAreaInset(edge:.top){HStack{Spacer();Button("完成"){controller.pane=nil}.padding()}}
            case .persona:PersonaView(modelKey:"native",modelName:"即时通讯",actions:[],onClose:{controller.pane=nil},initialCardID:controller.selectedCardID,applyToModel:false)
            }}.preferredColorScheme(.dark).tint(Color(red:0.71,green:0.69,blue:1))
        }
        .sheet(item:$controller.exportFile,onDismiss:{controller.finishExport(saved:false)}) {file in ChatExportPicker(url:file.url){controller.finishExport(saved:$0)}}
    }
    private var landing:some View {
        ScrollView {
            VStack(alignment:.leading,spacing:22) {
                Image(systemName:"bubble.left.and.bubble.right.fill").font(.system(size:52)).foregroundStyle(.indigo)
                Text("把通讯带进陪伴").font(.largeTitle.bold())
                Text("导入本次提供的 .qchat 本地模块，打开与你截图相同的会话、角色与群聊界面。")
                Label("角色聊天 · 群聊 · 图片与附件",systemImage:"person.3")
                Label("知识库 · 长期记忆与关系图谱",systemImage:"point.3.connected.trianglepath.dotted")
                Label("远程 MCP · Skills · WebDAV 与 ZIP 存档",systemImage:"externaldrive")
                Label("共用现有人设、接口和中／日配音",systemImage:"speaker.wave.2")
                Button {importing=true} label:{Label("导入 .qchat 对话模块",systemImage:"square.and.arrow.down").font(.headline).frame(maxWidth:.infinity).padding(14)}
                    .buttonStyle(.borderedProminent).tint(.indigo).disabled(!controller.status.isEmpty)
                Text("对话程序保存在本机，聊天只连接你选择的模型或工具服务。原项目 GPLv3 授权、署名及对应源码随模块提供。iOS 使用远程 HTTP／SSE MCP，不运行电脑的 stdio／npx 进程。")
                    .font(.footnote).foregroundStyle(.secondary)
            }.padding(26)
        }
    }
    private func beginImport() {
        Task {
            do {
                if let view=controller.webView {
                    _=try await view.callAsyncJavaScript("if(window.QibanNative) await window.QibanNative.flush();",arguments:[:],in:nil,contentWorld:.page)
                    guard controller.webView === view else {return}
                }
                controller.dispose();importing=true
            }catch{controller.error=error.localizedDescription}
        }
    }
}

private struct ChatWebSurface:UIViewRepresentable {
    let view:WKWebView
    func makeUIView(context:Context)->WKWebView {view}
    func updateUIView(_ uiView:WKWebView,context:Context){}
}

private struct ChatExportPicker:UIViewControllerRepresentable {
    let url:URL
    let finished:(Bool)->Void
    func makeCoordinator()->Coordinator {Coordinator(finished)}
    func makeUIViewController(context:Context)->UIDocumentPickerViewController {
        let picker=UIDocumentPickerViewController(forExporting:[url],asCopy:true);picker.delegate=context.coordinator;return picker
    }
    func updateUIViewController(_ uiViewController:UIDocumentPickerViewController,context:Context){}
    final class Coordinator:NSObject,UIDocumentPickerDelegate {
        let finished:(Bool)->Void
        init(_ finished:@escaping(Bool)->Void){self.finished=finished}
        func documentPicker(_ controller:UIDocumentPickerViewController,didPickDocumentsAt urls:[URL]){finished(!urls.isEmpty)}
        func documentPickerWasCancelled(_ controller:UIDocumentPickerViewController){finished(false)}
    }
}
