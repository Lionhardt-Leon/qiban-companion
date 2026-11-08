import SwiftUI
import WebKit

struct SnowbreakLibrary {
    let directory: URL
    init(directory: URL? = nil) {
        self.directory = directory ?? FileManager.default.urls(for:.applicationSupportDirectory,in:.userDomainMask)[0]
            .appendingPathComponent(AppIdentity.storageNamespace+"/SnowbreakLibrary",isDirectory:true)
    }
    var current: URL { directory.appendingPathComponent("current.snowbreak") }
    func savedFile(_ id:String)->URL {directory.appendingPathComponent(id == "Fenny" ? "Fenny.snowbreak":"Enya.snowbreak")}
    var savedCharacters:[String] {["Enya","Fenny"].filter{FileManager.default.fileExists(atPath:savedFile($0).path)}}
    var hasCurrent: Bool { FileManager.default.fileExists(atPath:current.path) }
    func stage(_ data: Data) throws -> URL {
        guard (22...128*1024*1024).contains(data.count), data.prefix(4) == Data([0x50,0x4b,3,4]) else {
            throw CompanionError.message("请选择完整的角色 .snowbreak 素材包（不超过128MB）。")
        }
        try FileManager.default.createDirectory(at:directory,withIntermediateDirectories:true)
        let url = directory.appendingPathComponent("staged-\(UUID().uuidString).snowbreak")
        try data.write(to:url,options:[.atomic,.completeFileProtection]); return url
    }
    func commit(_ staged: URL,characterID:String = "Enya") throws {
        guard ["Enya","Fenny"].contains(characterID) else{throw CompanionError.message("不支持的角色标识。")}
        guard staged.deletingLastPathComponent().standardizedFileURL == directory.standardizedFileURL,
              staged.lastPathComponent.hasPrefix("staged-") else { throw CompanionError.message("角色暂存路径无效。") }
        let data = try Data(contentsOf:staged)
        try data.write(to:savedFile(characterID),options:[.atomic,.completeFileProtection])
        try data.write(to:current,options:[.atomic,.completeFileProtection])
        try? FileManager.default.removeItem(at:staged)
    }
}

final class SnowbreakScheme: NSObject, WKURLSchemeHandler {
    let library: SnowbreakLibrary
    init(library:SnowbreakLibrary) { self.library = library }
    func resource(_ url:URL) throws -> (Data,String) {
        guard url.scheme == "companion-snowbreak",url.host == "local",url.query == nil else { throw URLError(.badURL) }
        if ["/index.html","/host.js"].contains(url.path) {
            guard let root = Bundle.main.resourceURL?.appendingPathComponent("WebAssets") else { throw URLError(.fileDoesNotExist) }
            return (try Data(contentsOf:root.appendingPathComponent(url.lastPathComponent)),url.path.hasSuffix(".js") ? "application/javascript" : "text/html")
        }
        let name = url.lastPathComponent
        guard url.path == "/package/"+name,
              name == "current.snowbreak" || name.range(of:"^staged-[A-Fa-f0-9-]{36}\\.snowbreak$",options:.regularExpression) != nil else { throw URLError(.badURL) }
        let file = library.directory.appendingPathComponent(name)
        guard let size = try file.resourceValues(forKeys:[.fileSizeKey]).fileSize,size <= 128*1024*1024 else { throw URLError(.dataLengthExceedsMaximum) }
        return (try Data(contentsOf:file),"application/octet-stream")
    }
    func webView(_ webView:WKWebView,start urlSchemeTask:WKURLSchemeTask) {
        do {
            guard let url = urlSchemeTask.request.url else { throw URLError(.badURL) }
            let (data,type) = try resource(url)
            let response = HTTPURLResponse(url:url,statusCode:200,httpVersion:"HTTP/1.1",headerFields:[
                "Content-Type":type,"Content-Length":String(data.count),"Access-Control-Allow-Origin":"*","Cache-Control":"no-store"])!
            urlSchemeTask.didReceive(response);urlSchemeTask.didReceive(data);urlSchemeTask.didFinish()
        } catch { urlSchemeTask.didFailWithError(error) }
    }
    func webView(_ webView:WKWebView,stop urlSchemeTask:WKURLSchemeTask) { }
}

struct SnowbreakTouchEvent {
    let id = UUID(); let label:String;var gesture="tap";var confidence=1.0;var source="manual-skinned-triangle"
    var message:String {
        let kind=["tap":"轻触","double_tap":"连续轻触","long_press":"按住","stroke":"抚摸","drag":"划过"][gesture] ?? "触碰"
        return "[屏幕触碰] 用户\(kind)了你的\(label)。识别来源：\(source)，置信度\(Int(confidence*100))%。这是模型表面事件，不代表现实触觉；具体部位未确认时不能自行猜测。请按人设决定回应或拒绝，额外动作只在你接受时选择。"
    }
}

@MainActor final class SnowbreakStage: NSObject, ObservableObject, WKScriptMessageHandler, WKNavigationDelegate {
    @Published private(set) var characterID="Enya"
    var characterName:String {characterID == "Fenny" ? "芬妮婚皮":"恩雅护士"}
    var modelKey:String {characterID.lowercased()}
    @Published private(set) var savedCharacters:[String]=[]
    @Published private(set) var ready = false
    @Published private(set) var isEditing=false
    @Published private(set) var error: String?
    @Published private(set) var notice: String?
    @Published private(set) var activeAction: String?
    @Published private(set) var actions: [String] = []
    @Published private(set) var touch: SnowbreakTouchEvent?
    private(set) var interactionRevision = 0
    let library:SnowbreakLibrary
    private weak var webView:WKWebView?
    private var pageReady = false
    private var paused = false
    private var needsRenderRecovery=false
    private var lastRenderRecovery=Date.distantPast
    private var staged:URL?
    private var nonce = UUID().uuidString
    @Published private(set) var companionMode = "standing"
    @Published private(set) var companionOutfit = "normal"
    @Published private(set) var variantIDs:[String] = []
    @Published private(set) var bodyActions:[String] = []
    @Published private(set) var bodyState = BodyState()
    var outfitLabel:String {companionOutfit == "underwear" ? "婚纱内衣版":companionOutfit == "nude" ? "果体版":characterID == "Fenny" ? "原婚纱":"正常服饰"}
    var dialogueActions:[String] {
        guard ready else{return []}
        var result=actions+bodyActions
        if characterID == "Fenny" {
            for outfit in ["normal","underwear"] where variantIDs.contains(companionMode+"_"+outfit){result.append("fenny_outfit_"+outfit)}
            if ["standing","interaction"].allSatisfy({variantIDs.contains($0+"_"+companionOutfit)}){result += ["fenny_mode_standing","fenny_mode_interaction"]}
        }else if variantIDs.count == 4 {result += ["enya_outfit_normal","enya_outfit_nude","enya_mode_standing","enya_mode_interaction"]}
        return result
    }
    func refreshBodyState() async {
        guard ready else {bodyState = BodyState(lastResult:"模型未就绪或正在切换");return}
        guard let webView = webView,let result = try? await webView.evaluateJavaScript("window.SnowbreakHost.inspect()"),let value = result as? [String:Any] else {return}
        updateBody(value)
    }
    private func updateBody(_ value:[String:Any]) {
        bodyState = BodyState(outfit:companionOutfit == "nude" ? "当前已加载果体版模型，没有穿衣":companionOutfit == "underwear" ? "当前加载芬妮婚纱内衣版，穿有胸衣、手套、袜饰，保留头纱与装饰，不是裸体":companionOutfit == "normal" ? "当前已加载"+(characterID == "Fenny" ? "芬妮原婚纱":"恩雅护士正常服饰")+"模型":"服饰未确认",
            eyes:value["eyes"] as? String ?? "未确认",hands:value["hands"] as? String ?? "未确认",facing:value["facing"] as? String ?? "未确认",lastResult:(value["lastResult"] as? String ?? "无回执")+((value["interactionScene"] as? String).map{"；保持互动场景："+$0} ?? ""))
    }
    func executeBody(_ command:BodyCommand,automatic:Bool = false) async -> Bool {
        guard ready,!paused,!(automatic && isEditing),bodyActions.contains(command.rawValue) else {return false}
        if !automatic {interactionRevision += 1}
        send(["type":"body","id":command.rawValue,"automatic":automatic]);try? await Task.sleep(nanoseconds:850_000_000)
        await refreshBodyState();return ready && !paused
    }
    func portrait() async throws -> CameraFrame {
        guard ready,!paused,let webView = webView,let text = try await webView.evaluateJavaScript("window.SnowbreakHost.portrait()") as? String,
              let segment = text.split(separator:",").last,let data = Data(base64Encoded:String(segment)) else {throw CompanionError.message("尚未获取到自身模型画面。")}
        return try CameraFrame(jpeg:data,source:.selfPortrait)
    }
    func selectVariant(mode:String? = nil,outfit:String? = nil) {
        let id=(mode ?? companionMode)+"_"+(outfit ?? companionOutfit)
        guard ready,variantIDs.contains(id) else { return }
        interactionRevision += 1;activeAction = nil;ready = false;send(["type":"variant","id":id])
    }

    init(library:SnowbreakLibrary = SnowbreakLibrary()) { self.library = library;self.savedCharacters=library.savedCharacters }
    func makeView() -> WKWebView {
        let configuration = WKWebViewConfiguration()
        configuration.setURLSchemeHandler(SnowbreakScheme(library:library),forURLScheme:"companion-snowbreak")
        configuration.userContentController.add(self,name:"snowbreak")
        configuration.allowsInlineMediaPlayback = true
        // User-initiated native menu actions should be able to play local original WAVs.
        configuration.mediaTypesRequiringUserActionForPlayback = []
        let view = WKWebView(frame:.zero,configuration:configuration)
        view.navigationDelegate = self;view.isOpaque = false;view.backgroundColor = .clear
        view.scrollView.isScrollEnabled = false
        webView = view;pageReady = false;ready = false;needsRenderRecovery=false
        view.load(URLRequest(url:URL(string:"companion-snowbreak://local/index.html")!));return view
    }
    @discardableResult func importFile(_ url:URL) -> Bool {
        do {
            let access = url.startAccessingSecurityScopedResource();defer { if access { url.stopAccessingSecurityScopedResource() } }
            var coordinationError:NSError?,readError:Error?,data:Data?
            NSFileCoordinator().coordinate(readingItemAt:url,options:[],error:&coordinationError) { file in
                do {
                    let size = try file.resourceValues(forKeys:[.fileSizeKey]).fileSize ?? Int.max
                    guard size <= 128*1024*1024 else { throw CompanionError.message("角色包超过128MB。") }
                    data = try Data(contentsOf:file)
                } catch { readError = error }
            }
            if let failure = coordinationError { throw failure }
            if let failure = readError { throw failure }
            guard let data = data else { throw CompanionError.message("没有读到角色包。") }
            staged = try library.stage(data);nonce = UUID().uuidString;ready = false;error = nil
            UserDefaults.standard.set("snowbreak",forKey:"characterEngine")
            if pageReady { loadSelected() }
            return true
        } catch { self.error = error.localizedDescription;return false }
    }
    private func loadSelected() {
        let file = staged ?? (library.hasCurrent ? library.current : nil)
        guard let file = file else { error = "请在设置中导入本地角色 .snowbreak 包。";return }
        send(["type":"load","url":"companion-snowbreak://local/package/"+file.lastPathComponent,"nonce":nonce])
    }
    private func send(_ value:[String:Any]) {
        guard pageReady,let data = try? JSONSerialization.data(withJSONObject:value),let json = String(data:data,encoding:.utf8) else { return }
        webView?.evaluateJavaScript("window.SnowbreakHost.receive(\(json))",completionHandler:nil)
    }
    func userContentController(_ userContentController:WKUserContentController,didReceive message:WKScriptMessage) {
        guard message.webView === webView,message.frameInfo.isMainFrame,
              message.frameInfo.request.url?.scheme == "companion-snowbreak",
              let body = message.body as? [String:Any],let type = body["type"] as? String else { return }
        if type == "pageReady" { pageReady = true;loadSelected();return }
        guard body["nonce"] as? String == nonce else { return }
        switch type {
        case "editing": isEditing=body["active"] as? Bool == true
        case "ready":
            applyHardwareBudget();isEditing=false
            guard let identity=body["characterId"] as? String,["Enya","Fenny"].contains(identity) else {error="不支持的角色包。";return}
            do {
                if staged == nil,library.hasCurrent,!library.savedCharacters.contains(identity){try Data(contentsOf:library.current).write(to:library.savedFile(identity),options:[.atomic,.completeFileProtection])}
                if let staged = staged { try library.commit(staged,characterID:identity);self.staged = nil }
                characterID=identity;savedCharacters=library.savedCharacters
                let variants = body["variants"] as? [[String:String]] ?? []
                variantIDs = variants.compactMap { v in guard let id=v["id"],["standing_normal","standing_nude","standing_underwear","interaction_normal","interaction_nude","interaction_underwear"].contains(id) else { return nil };return id }
                if let selected=body["selection"] as? [String:String] { companionMode=selected["mode"] ?? "standing";companionOutfit=selected["outfit"] ?? "unknown" }
                else {companionMode = body["stance"] as? String == "standing" ? "standing":"interaction";companionOutfit = "unknown"}
                let samples = body["samples"] as? [String] ?? []
                actions = ["head","left","right","home_login","home_invite","home_shy","home_check","home_kiss","home_jealous","home_marry","home_sigh","home_stage","home_stand","show_02","show_03","show_04","show_05","sequence","idle_01","idle_02"].filter { samples.contains($0) }.map { "snowbreak_"+$0 }
                if identity == "Fenny" {actions += DialogueMotion.fennyScenes.map(\.id).filter{samples.contains(String($0.dropFirst("snowbreak_".count)))}}
                let learned = body["learned"] as? [String] ?? []
                actions += ["yuki_hello","yuki_Yes","yuki_No","yuki_Peace_hand","yuki_dance_90bpm","yuki_dance_120bpm","yuki_f_vibe_dance_60_bpm_002"].filter { learned.contains($0) && (!$0.contains("dance") || body["stance"] as? String == "standing") }.map { "enya_"+$0 }
                ready = true;error = nil;if notice?.hasPrefix("渲染已中断") == true {notice=nil}
                bodyActions = (body["bodyActions"] as? [String] ?? []).filter{BodyCommand(rawValue:$0) != nil || BodyGesture.ids.contains($0)}
                if paused { send(["type":"pause"]) }
            } catch { self.error = "角色保存失败："+error.localizedDescription }
        case "playback":
            let active = body["active"] as? Bool == true
            // Playback events are not user edits and must not invalidate a pending AI turn.
            let status = body["status"] as? String ?? ""
            activeAction = active ? (status.hasPrefix("learned:") ? "恩雅 · Yuki 学习动作" : String((body["label"] as? String ?? "恩雅互动").prefix(60))) : nil
        case "selfState": if let value = body["state"] as? [String:Any] {updateBody(value)}
        case "touch":
            if !paused,body["completed"] as? Bool == true,let label = body["label"] as? String,label.count <= 30 {
                let confidence=body["confidence"] as? Double ?? 1
                guard confidence.isFinite,(0...1).contains(confidence) else{return}
                interactionRevision += 1;touch = SnowbreakTouchEvent(label:label,gesture:String((body["gesture"] as? String ?? "tap").prefix(24)),confidence:confidence,source:String((body["source"] as? String ?? "manual-skinned-triangle").prefix(60)))
                if UserDefaults.standard.object(forKey:"touchHaptics") as? Bool ?? true {UIImpactFeedbackGenerator(style:.light).impactOccurred()}
            }
        case "error":
            error = String((body["message"] as? String ?? "角色加载失败。").prefix(500));ready = false
            if let failed = staged { try? FileManager.default.removeItem(at:failed);staged = nil }
        case "notice": notice = String((body["message"] as? String ?? "").prefix(200))
        default: break
        }
    }
    func play(_ id:String,withVoice:Bool = true,automatic:Bool = false) {
        guard !(automatic && isEditing) else{return}
        if let plan=BodyGesture.plan(id),ready,!paused,bodyActions.contains(id),let data=try? JSONEncoder().encode(plan),let object=try? JSONSerialization.jsonObject(with:data) {
            if !automatic {interactionRevision += 1};send(["type":"gesture","id":id,"plan":object,"automatic":automatic]);return
        }
        if let command = BodyCommand(rawValue:id) {Task{_ = await executeBody(command,automatic:automatic)};return}
        if id == "stop" { stop();return }
        if ready,dialogueActions.contains(id) {
            if id.hasPrefix("fenny_outfit_"){selectVariant(outfit:String(id.dropFirst("fenny_outfit_".count)));return}
            if id.hasPrefix("fenny_mode_"){selectVariant(mode:String(id.dropFirst("fenny_mode_".count)));return}
            if id.hasPrefix("enya_outfit_") { selectVariant(outfit:String(id.dropFirst("enya_outfit_".count)));return }
            if id.hasPrefix("enya_mode_") { selectVariant(mode:String(id.dropFirst("enya_mode_".count)));return }
        }
        guard ready,actions.contains(id) else { return }
        if !automatic { interactionRevision += 1 }
        notice = nil
        if id.hasPrefix("enya_yuki_") { send(["type":"learned","id":String(id.dropFirst("enya_".count)),"automatic":automatic]);return }
        send(["type":"sample","id":String(id.dropFirst("snowbreak_".count)),"withVoice":withVoice,"automatic":automatic])
    }
    func stop() { interactionRevision += 1;send(["type":"stop"]);activeAction = nil }
    func pause() { paused = true;isEditing=false;interactionRevision += 1;send(["type":"pause"]);activeAction = nil }
    func resume() { paused = false;if needsRenderRecovery {recoverRenderProcess();return};applyHardwareBudget();send(["type":"resume"]) }
    func applyHardwareBudget(){send(["type":"hardwareBudget","thermal":AppleHardwareBudget.thermal,"lowPower":ProcessInfo.processInfo.isLowPowerModeEnabled])}
    func editTouch() { interactionRevision += 1;send(["type":"edit"]) }
    func editModel(){interactionRevision += 1;isEditing=true;send(["type":"modelEdit"])}
    func editDance(){send(["type":"danceEdit"])}
    func officialTouchPoints(){send(["type":"officialTouchPoints"])}
    func sceneVisible(_ value:Bool) { send(["type":"scene","visible":value]) }
    func gaze(x:CGFloat,y:CGFloat) { if ready { send(["type":"gaze","x":Double(x),"y":Double(y)]) } }
    func selectCharacter(_ identity:String){
        guard ["Enya","Fenny"].contains(identity),identity != characterID else{return}
        do {let file=library.savedFile(identity);guard FileManager.default.fileExists(atPath:file.path) else{return};interactionRevision+=1;pause();paused=false;staged=try library.stage(Data(contentsOf:file));nonce=UUID().uuidString;ready=false;error=nil;loadSelected()}catch{self.error=error.localizedDescription}
    }
    func editLighting() { send(["type":"lightingEdit"]) }
    func editFrame() { interactionRevision += 1;isEditing=true;send(["type":"frameEdit"]) }
    func detach(_ view:WKWebView) {
        view.evaluateJavaScript("window.SnowbreakHost?.receive({type:'dispose'})",completionHandler:nil)
        view.stopLoading();view.navigationDelegate = nil
        view.configuration.userContentController.removeScriptMessageHandler(forName:"snowbreak")
        if webView === view { webView = nil;pageReady = false;ready = false;needsRenderRecovery=false }
    }
    func setTouchPolicy(_ value:Bool){send(["type":"touchPolicy","aiControlled":value])}
    func setSpeechLevel(_ value:Float){if ready{send(["type":"speechLevel","value":value.isFinite ? min(1,max(0,value)):0])}}
    func setVoice(_ value:Bool) { send(["type":"voice","enabled":value]) }
    func setOriginalLanguage(_ language:String){send(["type":"voiceLanguage","language":language == "ja" ? "ja":"zh"])}
    func webView(_ webView:WKWebView,decidePolicyFor navigationAction:WKNavigationAction,decisionHandler:@escaping(WKNavigationActionPolicy)->Void) {
        let url = navigationAction.request.url
        decisionHandler(url?.scheme == "companion-snowbreak" && url?.host == "local" ? .allow : .cancel)
    }
    private func recoverRenderProcess(){
        guard needsRenderRecovery,!paused,let view=webView else{return}
        needsRenderRecovery=false
        guard Date().timeIntervalSince(lastRenderRecovery)>60 else {error="角色渲染重复中断，请关闭其他高内存应用后重新加载角色。";return}
        lastRenderRecovery=Date();pageReady=false;error=nil;notice="渲染已中断，正在恢复当前角色与互动姿势。"
        view.reload()
    }
    func webViewWebContentProcessDidTerminate(_ webView:WKWebView) {
        guard self.webView === webView else{return}
        ready=false;isEditing=false;activeAction=nil;interactionRevision+=1;needsRenderRecovery=true
        recoverRenderProcess()
    }
}

struct SnowbreakCharacterView:UIViewRepresentable {
    @ObservedObject var stage:SnowbreakStage
    func makeUIView(context:Context)->WKWebView { stage.makeView() }
    func updateUIView(_ view:WKWebView,context:Context) { }
    static func dismantleUIView(_ view:WKWebView,coordinator:()) {
        view.evaluateJavaScript("window.SnowbreakHost?.receive({type:'dispose'})",completionHandler:nil)
        view.stopLoading();view.navigationDelegate = nil
        view.configuration.userContentController.removeScriptMessageHandler(forName:"snowbreak")
    }
}

struct SnowbreakImportView:View {
    @ObservedObject var stage:SnowbreakStage
    @Environment(\.dismiss) private var dismiss
    @State private var picking = false
    @State private var local = false
    var body:some View {
        NavigationStack {
            Form {
                Section("尘白角色 · 本地移植") {
                    Text("导入本地恩雅／芬妮 .snowbreak 整合包。可用模式、动作、场景和原声由素材包决定。")
                    Button("选择角色素材包") { picking = true }.accessibilityIdentifier("importSnowbreak")
                    Button("App 文件夹") { local = true }
                    if stage.library.hasCurrent { Text("已保存角色素材，下次启动会从本机加载。") }
                    if let error = stage.error { Text(error).foregroundStyle(.red) }
                }
                Section("触碰") {
                    Text("导入后可在动作菜单切换已保存的角色、陪伴模式和服饰。显示原作触点可查看当前场景已有的触点；也可通过精细触碰表面标注补充身体分区。")
                    Text("原 App 内保存的标注不会跨 App 自动读取；模型和原始互动资源可以沿用。")
                }
            }.navigationTitle("导入尘白角色")
        }.sheet(isPresented:$picking) {
            CharacterDocumentPicker { result in
                picking = false
                if case .success(let url) = result,let url = url { choose(url) }
            }
        }.sheet(isPresented:$local) { LocalCharacterFileList(choose:choose) }
    }
    private func choose(_ url:URL) { if stage.importFile(url) { dismiss() } }
}
