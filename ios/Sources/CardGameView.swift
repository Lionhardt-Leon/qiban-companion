import SwiftUI
import WebKit

@MainActor final class CardGameController:NSObject,ObservableObject,WKScriptMessageHandlerWithReply,WKNavigationDelegate {
    static let port:UInt16=49158
    @Published var error:String?
    @Published var ready=false
    @Published var importing=false
    @Published var importingBusy=false
    private(set) var webView:WKWebView?
    private var server:ChatModuleServer?
    private let library=CardGameLibrary()
    private let store:LocalStore
    private var lifecycle=UUID()
    private var networkTasks:[UUID:Task<Void,Never>]=[:]
    private var suspended=false
    private let redirects=CardGameNoRedirect()
    init(store:LocalStore){self.store=store;super.init()}
    func start() async {
        guard webView==nil else{return}
        do {
            guard let root=Bundle.main.url(forResource:"tycoon",withExtension:nil) else{throw CompanionError.message("本版缺少牌桌程序。")}
            let server=ChatModuleServer(root:root,port:Self.port,artRoot:library.artRoot);self.server=server;try await server.start()
            let content=WKUserContentController();content.addScriptMessageHandler(self,contentWorld:.page,name:"qibanGame")
            let config=WKWebViewConfiguration();config.userContentController=content;config.websiteDataStore = .default()
            let view=WKWebView(frame:.zero,configuration:config);view.navigationDelegate=self;view.isOpaque=false;view.backgroundColor = .black
            webView=view;view.load(URLRequest(url:server.pageURL));objectWillChange.send()
        }catch{self.error=error.localizedDescription}
    }
    func dispose(){lifecycle=UUID();networkTasks.values.forEach{$0.cancel()};networkTasks.removeAll();webView?.configuration.userContentController.removeScriptMessageHandler(forName:"qibanGame",contentWorld:.page);webView?.stopLoading();webView=nil;server?.stop();server=nil}
    func suspend(_ flag:Bool){suspended=flag;if flag{networkTasks.values.forEach{$0.cancel()};networkTasks.removeAll()};webView?.evaluateJavaScript(flag ? "window.QibanCards?.suspend()":"window.QibanCards?.resume()")}
    func install(_ url:URL){
        guard !importingBusy else{return};importingBusy=true
        Task {defer{importingBusy=false};do{let library=self.library;try await Task.detached{try library.install(url)}.value;webView?.evaluateJavaScript("void window.QibanCards?.reloadArt()",completionHandler:nil)}
            catch{self.error=error.localizedDescription}}
    }
    func userContentController(_ userContentController:WKUserContentController,didReceive message:WKScriptMessage,replyHandler:@escaping(Any?,String?)->Void){
        guard message.frameInfo.isMainFrame,let url=message.frameInfo.request.url,let server=server,url.host=="127.0.0.1",url.port==Int(Self.port),url.path.hasPrefix("/"+server.token+"/"),
              let body=message.body as? [String:Any],let command=body["command"] as? String else{replyHandler(nil,"牌桌仅接受本地主页面请求。");return}
        let ticket=lifecycle,id=UUID()
        let task=Task {defer{networkTasks.removeValue(forKey:id)}
            do{let value=try await execute(command,body:body);guard lifecycle==ticket else{replyHandler(nil,"牌桌已关闭。");return};replyHandler(value,nil)}
            catch{replyHandler(nil,error.localizedDescription)}}
        if command=="request"{networkTasks[id]=task}
    }
    private func execute(_ command:String,body:[String:Any]) async throws -> Any {
        switch command {
        case "ready":ready=true;return ["ok":true]
        case "bootstrap":
            let personas=store.archive.settings.personas
            let names=Array(Set(([personas?.userName ?? ""]+(personas?.cards.map(\.userName) ?? [])).filter{!$0.isEmpty})).sorted()
            return ["state":try library.state() as Any? ?? NSNull(),"characters":try library.catalog(),"personas":names.map{["name":$0]}]
        case "catalog":return ["characters":try library.catalog()]
        case "persist":guard let text=body["value"] as? String else{throw CompanionError.message("缺少牌桌存档。")};try library.persist(text);return ["ok":true]
        case "importArt":importing=true;return ["ok":true]
        case "request":
            guard !suspended,networkTasks.count<=4,let address=body["url"] as? String,address.utf8.count<=2048,let url=URL(string:address),
                  ["http","https"].contains(url.scheme?.lowercased() ?? ""),url.host != nil,url.user==nil,url.password==nil,url.query==nil,url.fragment==nil,url.path.hasSuffix("/api"),
                  let key=body["key"] as? String,key.count<=4096,!key.contains("\r"),!key.contains("\n"),let object=body["body"] as? [String:Any] else{throw CompanionError.message("房间服务地址或请求无效。")}
            let bytes=try JSONSerialization.data(withJSONObject:object);guard bytes.count<=1_700_000 else{throw CompanionError.message("联机图片或请求过大。")}
            var request=URLRequest(url:url);request.httpMethod="POST";request.httpBody=bytes;request.timeoutInterval=12
            request.setValue("application/json",forHTTPHeaderField:"Content-Type");request.setValue(key,forHTTPHeaderField:"X-Qiban-Server-Key")
            let config=URLSessionConfiguration.ephemeral;config.urlCache=nil;config.httpCookieStorage=nil;config.timeoutIntervalForRequest=12;config.timeoutIntervalForResource=15
            let session=URLSession(configuration:config,delegate:redirects,delegateQueue:nil);defer{session.invalidateAndCancel()}
            let (data,response)=try await session.data(for:request);try Task.checkCancellation()
            guard data.count<=8*1024*1024,let http=response as? HTTPURLResponse else{throw CompanionError.message("房间服务响应过大或无效。")}
            guard let result=(try? JSONSerialization.jsonObject(with:data)) as? [String:Any] else{throw CompanionError.message("地址没有返回牌桌服务的数据，请检查端口与路径。")}
            if !(200..<300).contains(http.statusCode){return ["error":result["error"] as? String ?? "服务返回 \(http.statusCode)"]}
            return result
        default:throw CompanionError.message("不支持的牌桌操作。")
        }
    }
    func webView(_ webView:WKWebView,decidePolicyFor navigationAction:WKNavigationAction,decisionHandler:@escaping(WKNavigationActionPolicy)->Void){
        guard let url=navigationAction.request.url,let server=server,url.host=="127.0.0.1",url.port==Int(Self.port),url.path.hasPrefix("/"+server.token+"/"),navigationAction.targetFrame?.isMainFrame==true else{decisionHandler(.cancel);return};decisionHandler(.allow)
    }
    func webView(_ webView:WKWebView,didFailProvisionalNavigation navigation:WKNavigation!,withError error:Error){if (error as NSError).code != NSURLErrorCancelled{self.error=error.localizedDescription}}
}
private final class CardGameNoRedirect:NSObject,URLSessionTaskDelegate,@unchecked Sendable {
    func urlSession(_ session:URLSession,task:URLSessionTask,willPerformHTTPRedirection response:HTTPURLResponse,newRequest request:URLRequest,completionHandler:@escaping(URLRequest?)->Void){completionHandler(nil)}
}
@MainActor struct CardGameView:View {
    @StateObject private var controller:CardGameController
    @Environment(\.scenePhase) private var scenePhase
    let onClose:()->Void
    init(store:LocalStore,onClose:@escaping()->Void){_controller=StateObject(wrappedValue:CardGameController(store:store));self.onClose=onClose}
    var body:some View {
        VStack(spacing:0){
            HStack{Button(action:onClose){Label("陪伴",systemImage:"chevron.left")};Spacer();Text("游戏").font(.headline);Spacer();Button("导入立绘"){controller.importing=true}.disabled(controller.importingBusy)}.padding(.horizontal,18).padding(.vertical,10)
            if let view=controller.webView{CardGameSurface(view:view)}else if controller.error==nil{ProgressView("正在摆好牌桌…").frame(maxWidth:.infinity,maxHeight:.infinity)}
            if controller.importingBusy{ProgressView("正在校验并导入立绘…").padding(8)}
            if let error=controller.error{HStack{Text(error).font(.caption);Button("关闭提示"){controller.error=nil}}.padding(12).foregroundStyle(.red)}
        }.background(Color(red:0.08,green:0.09,blue:0.11)).preferredColorScheme(.dark).tint(.white)
        .task{await controller.start()}.onDisappear{controller.dispose()}.onChange(of:scenePhase){controller.suspend($0 == .background)}
        .sheet(isPresented:$controller.importing){CharacterDocumentPicker{result in controller.importing=false;do{if let url=try result.get(){controller.install(url)}}catch{controller.error=error.localizedDescription}}}
    }
}
private struct CardGameSurface:UIViewRepresentable {let view:WKWebView;func makeUIView(context:Context)->WKWebView{view};func updateUIView(_ uiView:WKWebView,context:Context){}}
