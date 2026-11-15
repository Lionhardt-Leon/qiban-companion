import SwiftUI
import AVFoundation

struct ServiceSettingsView:View {
    @EnvironmentObject private var store:LocalStore
    var body:some View {
        Form {
            Section {Text("主对话继续负责角色、人设和动作决定。下面各项可分别使用不同服务和密钥。")}
            Section("按功能配置") {
                ForEach(ServiceKind.allCases) {kind in
                    let profile=(store.archive.settings.services ?? ServiceRouting())[kind]
                    NavigationLink {ServiceEndpointEditor(kind:kind)} label:{
                        HStack(spacing:12) {
                            Image(systemName:kind.icon).foregroundStyle(.indigo).frame(width:28)
                            VStack(alignment:.leading,spacing:4) {
                                Text(kind.title)
                                Text(profile.enabled ? profile.apiProtocol.title:kind.defaultSummary).font(.caption).foregroundStyle(.secondary)
                            }
                            Spacer()
                            if profile.enabled {Image(systemName:"checkmark.circle.fill").foregroundStyle(.green)}
                        }.padding(.vertical,5)
                    }.accessibilityIdentifier("service-"+kind.rawValue)
                }
            }
            Section {Text("未启用独立接口时，识图沿用主对话接口；搜索关闭；语音合成与识别使用原来的本机方案。云端接口需要符合所选协议，具体模型和音色由服务商提供。") .font(.footnote).foregroundStyle(.secondary)}
        }.navigationTitle("独立功能接口").navigationBarTitleDisplayMode(.inline)
    }
}

struct ServiceEndpointEditor:View {
    let kind:ServiceKind
    @EnvironmentObject private var store:LocalStore
    @EnvironmentObject private var speech:CompanionSpeech
    @State private var draft:ServiceEndpoint
    @State private var key=""
    @State private var notice=""
    @State private var loaded=false
    @State private var keyReady=false
    @State private var testing=false
    @State private var keyIdentity:String?
    @State private var testTask:Task<Void,Never>?
    @State private var testID=UUID()
    @State private var audio:AVAudioPlayer?
    init(kind:ServiceKind){self.kind=kind;_draft=State(initialValue:ServiceEndpoint(kind))}
    private var explanation:String {
        switch kind {
        case .vision:return "启用后，照片、后摄画面和模型截图只发给此识图接口；观察结果交给主对话模型。图片不写入聊天备份。"
        case .search:return "启用后，主页和聊天页会出现联网搜索开关。打开开关的对话才检索；仅发送当前问题的前128字，不发送完整聊天、人设或记忆。回复下方可查看来源。"
        case .tts:return "启用后，自动朗读、手动朗读和语音通话都使用此接口。仅发送清理旁白后的台词；本机恩雅音色保留，关闭独立 TTS 后继续使用。云端音色不是本机训练音色。"
        case .asr:return "启用后，语音通话将每段麦克风录音发送给此接口识别；每段最多30秒，停顿后上传，识别完成再发送文字。环境声音分类仍在本机运行。关闭后恢复本机语音识别。"
        }
    }
    var body:some View {
        Form {
            Section {
                Toggle("使用独立接口",isOn:$draft.enabled).accessibilityIdentifier("serviceEnabled")
                Text(explanation).font(.footnote).foregroundStyle(.secondary)
            }
            Section("接口配置") {
                Button("填入 DeepSeek 配置") {let enabled=draft.enabled;draft=ServiceEndpoint.deepSeek(kind);draft.enabled=enabled}
                    .accessibilityIdentifier("serviceDeepSeekPreset")
                Picker("协议",selection:$draft.apiProtocol) {ForEach(kind.protocols){Text($0.title).tag($0)}}
                TextField("完整 HTTPS 接口地址",text:$draft.endpoint).keyboardType(.URL).textInputAutocapitalization(.never).autocorrectionDisabled().accessibilityIdentifier("serviceEndpoint")
                SecureField("此功能的 API Key（可留空）",text:$key).textInputAutocapitalization(.never).autocorrectionDisabled().accessibilityIdentifier("serviceKey")
                if draft.apiProtocol.needsModel {TextField("模型名称",text:$draft.model).textInputAutocapitalization(.never).autocorrectionDisabled().accessibilityIdentifier("serviceModel")}
                if kind == .tts {TextField("云端音色 ID",text:$draft.voice).textInputAutocapitalization(.never).autocorrectionDisabled().accessibilityIdentifier("serviceVoice")}
                Text("可填写完整自定义路径，或服务根地址／以 /v1 结尾的地址。当前协议默认路径：/v1/"+draft.apiProtocol.path).font(.caption).foregroundStyle(.secondary)
                if !draft.apiProtocol.needsModel {Text("此工具协议不需要模型名称。"+(kind == .tts ? "DeepSeek 音色：stella 或 tide。":"")).font(.caption).foregroundStyle(.secondary)}
            }
            Section {
                Button("保存此功能") {
                    do {try store.saveService(kind,profile:draft,key:key);notice="已保存："+(draft.enabled ? kind.title+"使用独立接口":kind.defaultSummary);speech.stop()}
                    catch {notice=error.localizedDescription}
                }.disabled(store.busy || !store.storageReady || !keyReady || testing).accessibilityIdentifier("saveService")
                if kind != .asr {
                    Button(testing ? "正在测试…":"测试当前接口") {test()}.disabled(store.busy || !keyReady || testing).accessibilityIdentifier("testService")
                    Text("测试会调用当前填写的服务，测试本身不会启用或保存配置。") .font(.caption).foregroundStyle(.secondary)
                }
                if !notice.isEmpty {Text(notice).font(.footnote).textSelection(.enabled).accessibilityIdentifier("serviceNotice")}
            }
            Section {Text("每项密钥独立保存在本机钥匙串，按协议和地址绑定，不会借用主对话密钥，也不进入备份。修改地址或协议后请重新填写此功能的密钥。") .font(.caption).foregroundStyle(.secondary)}
        }.navigationTitle(kind.title).navigationBarTitleDisplayMode(.inline)
        .onAppear {
            guard !loaded else{return};draft=(store.archive.settings.services ?? ServiceRouting())[kind];keyIdentity=draft.credentialIdentity
            do {key=try APIKeyStore.read(kind:kind,profile:draft);keyReady=true}catch{notice=error.localizedDescription}
            loaded=true
        }
        .onChange(of:draft.credentialIdentity) {identity in
            if loaded,identity != keyIdentity {key="";keyIdentity=identity;notice="地址或协议已更改，请填写对应密钥。";testID=UUID();testTask?.cancel();testing=false;audio?.stop()}
        }
        .onDisappear {testID=UUID();testTask?.cancel();audio?.stop()}
    }
    @MainActor private func test() {
        var profile=draft;profile.enabled=true
        let key=self.key;testing=true;notice="";speech.stop();audio?.stop();testID=UUID();let ticket=testID
        testTask=Task {
            defer{if testID==ticket {testing=false}}
            let session=ServiceClient.session();defer{session.invalidateAndCancel()}
            do {
                try profile.validate(for:kind)
                switch kind {
                case .vision:
                    let image=UIGraphicsImageRenderer(size:CGSize(width:16,height:16)).jpegData(withCompressionQuality:0.8){context in UIColor.systemTeal.setFill();context.fill(CGRect(x:0,y:0,width:16,height:16))}
                    let text=try await ServiceClient.vision(profile,key:key,question:"请描述图片的主要颜色。",images:[try CameraFrame(jpeg:image,source:.user)],session:session)
                    try Task.checkCancellation();notice="识图测试返回："+String(text.prefix(300))
                case .search:
                    let results=try await ServiceClient.search(profile,key:key,query:"DeepSeek 官方文档",session:session)
                    try Task.checkCancellation();notice="搜索协议有效，返回 \(results.count) 条有效来源。"
                case .tts:
                    let data=try await ServiceClient.speech(profile,key:key,text:"你好，这是一段独立语音接口试听。",speed:1,session:session)
                    try Task.checkCancellation();try AVAudioSession.sharedInstance().setCategory(.playback,mode:.spokenAudio);try AVAudioSession.sharedInstance().setActive(true)
                    audio=try AVAudioPlayer(data:data);guard audio?.play()==true else{throw CompanionError.message("音频无法播放。")};notice="已收到有效 WAV，正在试听。"
                case .asr:break
                }
            }catch {if !Task.isCancelled {notice=error.localizedDescription}}
        }
    }
}

struct SearchToggle:View {
    @Binding var enabled:Bool
    var body:some View {
        Button {enabled.toggle()} label:{Label(enabled ? "联网搜索已开启":"联网搜索",systemImage:enabled ? "checkmark.circle.fill":"globe")}
            .font(.caption).accessibilityIdentifier("webSearchToggle").accessibilityValue(enabled ? "1":"0")
    }
}

struct CitationLinks:View {
    let sources:[WebCitation]
    var body:some View {
        if !sources.isEmpty {
            VStack(alignment:.leading,spacing:6) {
                Text("本轮检索来源").font(.caption).foregroundStyle(.secondary)
                ForEach(sources){source in if let url=source.link {Link(source.title,destination:url).font(.caption).lineLimit(2)}}
            }.accessibilityIdentifier("webSearchSources")
        }
    }
}
