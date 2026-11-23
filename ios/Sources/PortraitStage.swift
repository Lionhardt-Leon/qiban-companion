import SwiftUI
import WebKit

struct PortraitSelection:Identifiable {let id:String;let name:String;let model:[String:Any]}
final class PortraitScheme:NSObject,WKURLSchemeHandler {
    let library=PortraitLibrary()
    func webView(_ webView:WKWebView,start task:WKURLSchemeTask) {
        do {
            guard let url=task.request.url,url.scheme=="companion-portrait",url.host=="local" else{throw URLError(.badURL)}
            let file:URL,mime:String
            if ["/index.html","/host.js"].contains(url.path),let root=Bundle.main.resourceURL?.appendingPathComponent("WebAssets/stage2d") {file=root.appendingPathComponent(url.lastPathComponent);mime=url.path.hasSuffix(".js") ? "application/javascript":"text/html"}
            else {let path=String(url.path.dropFirst("/presentation-data/".count));guard url.path.hasPrefix("/presentation-data/"),PortraitLibrary.dataPath(path) else{throw URLError(.badURL)};file=library.directory.appendingPathComponent(path).standardizedFileURL;guard file.path.hasPrefix(library.directory.path+"/") else{throw URLError(.badURL)};mime=["png":"image/png","jpg":"image/jpeg","jpeg":"image/jpeg","webp":"image/webp","json":"application/json"][file.pathExtension] ?? "text/plain"}
            guard (try file.resourceValues(forKeys:[.fileSizeKey]).fileSize ?? Int.max)<=20*1024*1024 else{throw URLError(.dataLengthExceedsMaximum)}
            let data=try Data(contentsOf:file,options:.mappedIfSafe),response=HTTPURLResponse(url:url,statusCode:200,httpVersion:"HTTP/1.1",headerFields:["Content-Type":mime,"Content-Length":String(data.count),"Access-Control-Allow-Origin":"*","Cache-Control":"no-store"])!
            task.didReceive(response);task.didReceive(data);task.didFinish()
        }catch{task.didFailWithError(error)}
    }
    func webView(_ webView:WKWebView,stop task:WKURLSchemeTask){}
}

@MainActor private final class PortraitMessageHandler: NSObject, WKScriptMessageHandler {
    weak var stage: PortraitStage?
    init(_ stage: PortraitStage) { self.stage = stage }
    func userContentController(_ controller: WKUserContentController, didReceive message: WKScriptMessage) {
        stage?.userContentController(controller,didReceive:message)
    }
}

@MainActor final class PortraitStage:NSObject,ObservableObject,WKScriptMessageHandler,WKNavigationDelegate {
    let library=PortraitLibrary()
    @Published var models:[PortraitSelection]=[]
    @Published var selectedID=UserDefaults.standard.string(forKey:"portraitSelection") ?? ""
    @Published var ready=false
    @Published var error:String?
    @Published var activeAction:String?
    private(set) var interactionRevision=0
    private var view:WKWebView?
    private var hostReady = false
    private var loadRequest: (selectionID: String, token: String)?
    private var paused=true
    var selected:PortraitSelection? {models.first{$0.id==selectedID} ?? models.first}
    var name:String {selected?.name ?? "官方 2D 角色"}
    var modelKey:String {"portrait:"+(selected?.id ?? "none")}
    var actions:[String] {ready ? (selected?.model["animations"] as? [String] ?? []) : []}
    var bodyState:BodyState {BodyState(lastResult:"当前为官方剧情 2D 动态立绘，只支持素材已有的表情和动画。不能执行 3D 肢体、服饰切换或离屏动作。")}
    override init(){super.init();refresh()}
    func refresh(){do{models=try (library.catalog()["models"] as? [[String:Any]] ?? []).map{PortraitSelection(id:$0["id"] as! String,name:$0["name"] as! String,model:$0)};if !models.contains(where:{$0.id==selectedID}){selectedID=models.first?.id ?? ""};error=nil}catch{self.error=error.localizedDescription}}
    func makeView()->WKWebView {
        if let view=view{return view}
        let config=WKWebViewConfiguration();config.setURLSchemeHandler(PortraitScheme(),forURLScheme:"companion-portrait");config.userContentController.add(PortraitMessageHandler(self),name:"qibanStage")
        let view=WKWebView(frame:.zero,configuration:config);view.navigationDelegate=self;view.isOpaque=false;view.backgroundColor = .clear;view.scrollView.isScrollEnabled=false;view.scrollView.contentInsetAdjustmentBehavior = .never
        self.view=view;view.load(URLRequest(url:URL(string:"companion-portrait://local/index.html")!));return view
    }
    func select(_ id: String) {
        guard models.contains(where: { $0.id == id }) else { return }
        selectedID = id
        UserDefaults.standard.set(id, forKey: "portraitSelection")
        interactionRevision += 1
        resetLoad()
        load()
    }

    func reloadAfterImport() {
        refresh()
        if let selected { select(selected.id) }
        else { resetLoad() }
    }

    private func resetLoad() {
        loadRequest = nil
        ready = false
        activeAction = nil
    }

    private func load() {
        guard hostReady, let view else { return }
        guard let model = selected else { resetLoad(); return }
        guard loadRequest?.selectionID != model.id else { return }
        let token = UUID().uuidString
        loadRequest = (model.id, token)
        ready = false
        activeAction = nil
        error = nil
        var row = model.model
        row["base"] = nil
        let base = "companion-portrait://local/" + (model.model["base"] as? String ?? "")
        let message: [String: Any] = ["type":"load", "model":row, "base":base, "loadToken":token, "paused":paused]
        Task {
            guard view === self.view, loadRequest?.token == token else { return }
            do {
                _ = try await view.callAsyncJavaScript(
                    "await window.QibanPortrait.receive(message)", arguments:["message":message], in:nil, contentWorld:.page
                )
            } catch {
                guard view === self.view, loadRequest?.token == token else { return }
                resetLoad()
                self.error = error.localizedDescription
            }
        }
    }

    private func send(_ message: [String: Any]) {
        guard let view = view else { return }
        let token = loadRequest?.token
        Task {
            guard view === self.view, token == loadRequest?.token else { return }
            do {
                _ = try await view.callAsyncJavaScript("await window.QibanPortrait?.receive(message)",arguments:["message":message],in:nil,contentWorld:.page)
            } catch {
                guard view === self.view, token == loadRequest?.token else { return }
                self.error = error.localizedDescription
            }
        }
    }

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard let view, message.webView === view, message.frameInfo.isMainFrame,
              message.frameInfo.request.url?.scheme == "companion-portrait",
              message.frameInfo.request.url?.host == "local",
              let body = message.body as? [String: Any] else { return }
        switch body["type"] as? String {
        case "hostReady":
            resetLoad()
            hostReady = true
            load()
        case "ready":
            guard let request = loadRequest, request.selectionID == selected?.id,
                  body["id"] as? String == request.selectionID,
                  body["loadToken"] as? String == request.token else { return }
            ready = true
            send(["type":"pause","value":paused])
        default: break
        }
    }

    func webViewWebContentProcessDidTerminate(_ webView: WKWebView) {
        guard view === webView else { return }
        hostReady = false
        resetLoad()
        webView.reload()
    }
    func play(_ name:String){guard actions.contains(name) else{return};interactionRevision+=1;activeAction=name;send(["type":"expression","name":name,"once":true])}
    func stop(){interactionRevision+=1;activeAction=nil;send(["type":"mood","value":"neutral"])}
    func setSpeechLevel(_ value:Float){if ready{send(["type":"speechLevel","value":value])}}
    func pause(){paused=true;send(["type":"pause","value":true])}
    func resume(){paused=false;if view != nil{load();send(["type":"pause","value":false])}}
    func portrait() async throws -> CameraFrame {
        guard let view, let request = loadRequest, ready, request.selectionID == selected?.id else {
            throw CompanionError.message("2D 角色还未就绪。")
        }
        let image = try await view.takeSnapshot(configuration: nil)
        guard ready, view === self.view, request.token == loadRequest?.token,
              request.selectionID == selected?.id else {
            throw CompanionError.message("2D 角色已切换，请重新截图。")
        }
        guard let bytes = image.jpegData(compressionQuality: 0.85) else {
            throw CompanionError.message("2D 画面生成失败。")
        }
        return try CameraFrame(jpeg: bytes, source: .selfPortrait)
    }
}
struct PortraitCharacterView:UIViewRepresentable {let stage:PortraitStage;func makeUIView(context:Context)->WKWebView{stage.makeView()};func updateUIView(_ view:WKWebView,context:Context){}}

@MainActor struct PortraitImportView:View {
    @ObservedObject var stage:PortraitStage
    var onSelect:((PortraitSelection)->Bool)?
    @State private var importing=false
    @State private var busy=false
    @State private var error:String?
    var body:some View {
        ScrollView{VStack(alignment:.leading,spacing:18){Text("官方 2D 动态立绘").font(.title.bold());Text("使用本地剧情骨骼、表情和动作。导入 .qstage 素材包后，可在主页和通讯的面对面对话中使用。").foregroundStyle(.secondary)
            Button("导入 2D 素材包"){importing=true}.buttonStyle(.borderedProminent).disabled(busy)
            if busy{ProgressView("正在校验本地素材…")};if let error=error{Text(error).foregroundStyle(.red)}
            ForEach(stage.models){model in Button{if onSelect?(model) ?? true {stage.select(model.id)}}label:{HStack{Image(systemName:"person.crop.rectangle");Text(model.name);Spacer();if stage.selectedID==model.id{Image(systemName:"checkmark.circle.fill")}}.padding(15).frame(maxWidth:.infinity).background(.white.opacity(0.07),in:RoundedRectangle(cornerRadius:14))}}
            Text("2D 模式支持原作已有的表情演出，3D 互动模型仍可在设置中切回。GAL 配音沿用 App 中／日配音与 TTS。").font(.footnote).foregroundStyle(.secondary)
        }.padding(22)}.sheet(isPresented:$importing){CharacterDocumentPicker{result in importing=false;do{if let url=try result.get(){busy=true;Task{do{let library=stage.library;try await Task.detached{try library.install(url)}.value;stage.reloadAfterImport();error=nil}catch{self.error=error.localizedDescription};busy=false}}}catch{self.error=error.localizedDescription}}}
    }
}
