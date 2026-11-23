import Foundation
import Network
import JavaScriptCore
import CryptoKit
import Security
import Darwin

@objc private protocol PhoneCardCryptoExports:JSExport {
    func randomHex(_ bytes:Int)->String
    func hashText(_ text:String)->String
    func equalText(_ a:String,_ b:String)->Bool
    func randomUnit()->Double
}
@objc private final class PhoneCardCrypto:NSObject,PhoneCardCryptoExports {
    func randomHex(_ count:Int)->String {
        var bytes=[UInt8](repeating:0,count:max(1,min(64,count)))
        guard SecRandomCopyBytes(kSecRandomDefault,bytes.count,&bytes)==errSecSuccess else{return ""}
        return bytes.map{String(format:"%02x",$0)}.joined()
    }
    func hashText(_ text:String)->String {SHA256.hash(data:Data(text.utf8)).map{String(format:"%02x",$0)}.joined()}
    func equalText(_ a:String,_ b:String)->Bool {
        let lhs=Array(SHA256.hash(data:Data(a.utf8))),rhs=Array(SHA256.hash(data:Data(b.utf8)))
        var difference:UInt8=0;for i in 0..<lhs.count{difference |= lhs[i]^rhs[i]};return difference==0
    }
    func randomUnit()->Double {
        var value:UInt32=0
        guard SecRandomCopyBytes(kSecRandomDefault,MemoryLayout<UInt32>.size,&value)==errSecSuccess else{return -1}
        return Double(value)/4294967296
    }
}

/// All JavaScriptCore work stays on the room server queue. The same source is used by Node.
private final class PhoneCardEngine {
    private let context:JSContext
    private let runtime:JSValue
    private let crypto=PhoneCardCrypto()
    init(source:URL) throws {
        guard let context=JSContext() else{throw CompanionError.message("无法启动本机牌局引擎。")}
        self.context=context
        context.setObject(crypto,forKeyedSubscript:"qibanCardCrypto" as NSString)
        context.evaluateScript(try String(contentsOf:source,encoding:.utf8),withSourceURL:source)
        guard context.exception==nil else{throw CompanionError.message("本机牌局程序载入失败。")}
        let setup="""
        (function(){
          const c=qibanCardCrypto;
          const service=new QibanRoomRuntime.RoomCore({crypto:{
            token(n){const x=c.randomHex(n);if(!x)throw Error('随机数不可用。');return x;},
            hash(s){return c.hashText(s);},equal(a,b){return c.equalText(a,b);}
          },random(){const x=c.randomUnit();if(x<0)throw Error('随机数不可用。');return x;}});
          return {request(text){try{return JSON.stringify(service.request(JSON.parse(text)));}catch(e){return JSON.stringify({error:String(e.message||e)});}},
            tick(){service.tick();},alive(code){return service.rooms.has(code);}};
        })()
        """
        guard let runtime=context.evaluateScript(setup),context.exception==nil,!runtime.isUndefined else{throw CompanionError.message("本机房间服务启动失败。")}
        self.runtime=runtime
    }
    func request(_ input:[String:Any]) throws -> [String:Any] {
        context.exception=nil
        let bytes=try JSONSerialization.data(withJSONObject:input)
        guard let value=runtime.invokeMethod("request",withArguments:[String(decoding:bytes,as:UTF8.self)])?.toString(),context.exception==nil,
              let data=value.data(using:.utf8),let result=try JSONSerialization.jsonObject(with:data) as? [String:Any] else{throw CompanionError.message("本机房间响应无效。")}
        return result
    }
    func tick(){context.exception=nil;runtime.invokeMethod("tick",withArguments:[])}
}

/// A real phone-hosted room listener. The static WKWebView origin remains loopback-only.
final class PhoneCardRoomServer:@unchecked Sendable {
    static let shared=PhoneCardRoomServer()
    static let serviceType="_qiban-cards._tcp"
    private let queue=DispatchQueue(label:"qiban.cards.phone-room")
    private var listener:NWListener?
    private var engine:PhoneCardEngine?
    private var timer:DispatchSourceTimer?
    private var clients:[UUID:NWConnection]=[:]
    private var credential:[String:Any]?
    private var roomCode=""
    private var hostName=""
    private var port:UInt16=0
    private let instance=UUID().uuidString
    func start(source:URL,input:[String:Any],port requestedPort:UInt16=0,advertise:Bool=true) async throws -> [String:Any] {
        try await withCheckedThrowingContinuation{(done:CheckedContinuation<[String:Any],Error>) in queue.async{
            do {
                if let credential=self.credential,let engine=self.engine {
                    let state=try engine.request(["op":"state","code":self.roomCode,"token":credential["token"] ?? ""])
                    guard state["error"]==nil else{throw CompanionError.message("手机上已有房间，请先关闭原房间。")}
                    var result=state;result["token"]=credential["token"];result["hostInfo"]=self.infoValue();done.resume(returning:result);return
                }
                let engine=try PhoneCardEngine(source:source);var request=input;request["op"]="create"
                let result=try engine.request(request)
                if let error=result["error"] as? String{throw CompanionError.message(error)}
                guard let state=result["state"] as? [String:Any],let code=state["code"] as? String,let token=result["token"] as? String else{throw CompanionError.message("本机房间没有返回座位。")}
                self.engine=engine;self.roomCode=code;self.hostName=String((input["name"] as? String ?? "房主").prefix(24));self.credential=["token":token]
                let parameters=NWParameters(tls:nil,tcp:NWProtocolTCP.Options());parameters.includePeerToPeer=true
                let listener=try NWListener(using:parameters,on:NWEndpoint.Port(rawValue:requestedPort)!)
                if advertise{listener.service=NWListener.Service(name:"Qiban-"+code+"-"+String(self.instance.prefix(8)),type:Self.serviceType,domain:nil,txtRecord:NWTXTRecord(["id":self.instance,"room":code,"name":self.hostName,"version":"1"]))}
                self.listener=listener
                var answered=false
                listener.stateUpdateHandler={[weak self] state in
                    guard let self=self else{return}
                    if case .ready=state,!answered {
                        answered=true;self.port=listener.port?.rawValue ?? requestedPort
                        self.startTimer();var result=result;result["hostInfo"]=self.infoValue();done.resume(returning:result)
                    }else if case .failed(let error)=state,!answered{answered=true;self.stopValue();done.resume(throwing:error)}
                    else if case .cancelled=state,!answered{answered=true;self.stopValue();done.resume(throwing:CancellationError())}
                }
                listener.newConnectionHandler={[weak self] client in self?.accept(client)}
                listener.start(queue:self.queue)
                self.queue.asyncAfter(deadline:.now()+10){if !answered{answered=true;self.stopValue();done.resume(throwing:CompanionError.message("手机开房超时，请允许本地网络权限后重试。"))}}
            }catch{self.stopValue();done.resume(throwing:error)}
        }}
    }
    func info() async -> [String:Any] {await withCheckedContinuation{done in queue.async{done.resume(returning:self.infoValue())}}}
    func request(_ input:[String:Any]) async throws -> [String:Any] {
        try await withCheckedThrowingContinuation{done in queue.async{
            do{guard let engine=self.engine,input["code"] as? String==self.roomCode,input["op"] as? String != "create" else{throw CompanionError.message("本机房间已关闭，请重新创建。")};done.resume(returning:try engine.request(input))}
            catch{done.resume(throwing:error)}
        }}
    }
    private func infoValue()->[String:Any] {[
        "hosting":listener != nil,"code":roomCode,"name":hostName,"port":Int(port),"id":instance,
        "addresses":Self.addresses(port:port),"localAddress":"http://127.0.0.1:\(port)"
    ]}
    func stop() async {await withCheckedContinuation{done in queue.async{self.stopValue();done.resume()}}}
    private func stopValue(){listener?.stateUpdateHandler=nil;listener?.cancel();listener=nil;timer?.cancel();timer=nil;clients.values.forEach{$0.cancel()};clients.removeAll();engine=nil;credential=nil;roomCode="";port=0}
    private func startTimer(){let timer=DispatchSource.makeTimerSource(queue:queue);timer.schedule(deadline:.now()+0.2,repeating:0.2);timer.setEventHandler{[weak self] in self?.engine?.tick()};self.timer=timer;timer.resume()}
    private func accept(_ client:NWConnection){
        guard clients.count<24 else{client.cancel();return};let id=UUID();clients[id]=client;client.start(queue:queue)
        queue.asyncAfter(deadline:.now()+12){[weak self] in if self?.clients[id] != nil{self?.close(client,id)}}
        read(client,id:id,data:Data())
    }
    private func close(_ client:NWConnection,_ id:UUID){client.cancel();clients.removeValue(forKey:id)}
    private func read(_ client:NWConnection,id:UUID,data:Data){
        client.receive(minimumIncompleteLength:1,maximumLength:65536){[weak self] part,_,complete,error in
            guard let self=self else{return};var data=data;if let part=part{data.append(part)}
            guard error==nil,data.count<=1_720_000 else{self.close(client,id);return}
            if let range=data.range(of:Data("\r\n\r\n".utf8)){
                guard range.lowerBound<=16384 else{self.close(client,id);return}
                let lines=String(decoding:data[..<range.lowerBound],as:UTF8.self).components(separatedBy:"\r\n")
                let headers=Self.headers(lines)
                let length=Int(headers["content-length"] ?? "0") ?? -1
                guard length>=0,length<=1_700_000,headers["transfer-encoding"]==nil else{self.send(client,id:id,status:"400 Bad Request",object:["error":"无效请求长度。"]);return}
                if data.count-range.upperBound>=length{self.respond(client,id:id,lines:lines,headers:headers,body:Data(data[range.upperBound..<range.upperBound+length]));return}
            }else if data.count>16384{self.close(client,id);return}
            if complete{self.close(client,id)}else{self.read(client,id:id,data:data)}
        }
    }
    private static func headers(_ lines:[String])->[String:String]{
        var result:[String:String]=[:];for line in lines.dropFirst(){let pair=line.split(separator:":",maxSplits:1);if pair.count==2{result[pair[0].lowercased()]=pair[1].trimmingCharacters(in:.whitespaces)}};return result
    }
    private func respond(_ client:NWConnection,id:UUID,lines:[String],headers:[String:String],body:Data){
        let first=(lines.first ?? "").split(separator:" ")
        guard first.count==3,headers["origin"]==nil else{send(client,id:id,status:"403 Forbidden",object:["error":"请从栖伴 App 加入房间。"]);return}
        if first[0]=="GET",first[1]=="/health"{send(client,id:id,status:"200 OK",object:["name":"Qiban Phone Room","rules":"qiban-tycoon/1"]);return}
        guard first[0]=="POST",first[1]=="/api",headers["content-type"]?.hasPrefix("application/json")==true,
              let object=(try? JSONSerialization.jsonObject(with:body)) as? [String:Any] else{send(client,id:id,status:"400 Bad Request",object:["error":"请使用手机牌桌连接。"]);return}
        guard object["op"] as? String != "create",object["code"] as? String == roomCode else{send(client,id:id,status:"403 Forbidden",object:["error":"房间号无效，手机房间只能在房主本机创建。"]);return}
        do{guard let engine=engine else{throw CompanionError.message("手机房间已关闭。")};send(client,id:id,status:"200 OK",object:try engine.request(object))}
        catch{send(client,id:id,status:"400 Bad Request",object:["error":error.localizedDescription])}
    }
    private func send(_ client:NWConnection,id:UUID,status:String,object:[String:Any]){
        let body=(try? JSONSerialization.data(withJSONObject:object)) ?? Data("{}".utf8)
        var response=Data("HTTP/1.1 \(status)\r\nContent-Type: application/json; charset=utf-8\r\nContent-Length: \(body.count)\r\nConnection: close\r\nCache-Control: no-store\r\n\r\n".utf8);response.append(body)
        client.send(content:response,completion:.contentProcessed{[weak self] _ in self?.close(client,id)})
    }
    private static func addresses(port:UInt16)->[[String:String]] {
        guard port>0 else{return []};var first:UnsafeMutablePointer<ifaddrs>?
        guard getifaddrs(&first)==0 else{return []};defer{freeifaddrs(first)}
        var rows:[[String:String]]=[],node=first
        while let current=node{defer{node=current.pointee.ifa_next}
            guard let address=current.pointee.ifa_addr,address.pointee.sa_family==UInt8(AF_INET),current.pointee.ifa_flags&UInt32(IFF_LOOPBACK)==0 else{continue}
            let interface=String(cString:current.pointee.ifa_name)
            guard interface.hasPrefix("en") || interface.hasPrefix("bridge") || interface.hasPrefix("utun") else{continue}
            var buffer=[CChar](repeating:0,count:Int(NI_MAXHOST))
            guard getnameinfo(address,socklen_t(address.pointee.sa_len),&buffer,socklen_t(buffer.count),nil,0,NI_NUMERICHOST)==0 else{continue}
            let ip=String(cString:buffer);if ip.hasPrefix("169.254."){continue}
            rows.append(["label":interface.hasPrefix("en") || interface.hasPrefix("bridge") ? "Wi-Fi／热点":"VPN／UU","url":"http://\(ip):\(port)"])
        }
        return rows.sorted{($0["label"]=="Wi-Fi／热点" ? 0:1)<($1["label"]=="Wi-Fi／热点" ? 0:1)}
    }
}

/// Bonjour discovers phone rooms, including peer-to-peer interfaces supported by iOS.
final class PhoneCardRoomBrowser:@unchecked Sendable {
    private let queue=DispatchQueue(label:"qiban.cards.discovery")
    private var browser:NWBrowser?
    private var endpoints:[String:NWEndpoint]=[:]
    private var rows:[[String:String]]=[]
    private var changed:(([[String:String]],String?)->Void)?
    private var waiters:[UUID:(String,CheckedContinuation<NWEndpoint,Error>)]=[:]
    func start(changed:@escaping([[String:String]],String?)->Void){queue.async{self.changed=changed;self.begin();changed(self.rows,nil)}}
    func stop() {
        queue.async {
            self.changed=nil
            let pending=self.waiters
            self.waiters.removeAll()
            self.stopIfIdle()
            for item in pending.values {item.1.resume(throwing:CancellationError())}
        }
    }
    private func stopIfIdle() {
        guard changed == nil, waiters.isEmpty else {return}
        let old=browser
        browser=nil;rows=[];endpoints.removeAll()
        old?.cancel()
    }
    private func begin(){
        guard browser==nil else{return};let parameters=NWParameters.tcp;parameters.includePeerToPeer=true
        let browser=NWBrowser(for:.bonjourWithTXTRecord(type:PhoneCardRoomServer.serviceType,domain:nil),using:parameters);self.browser=browser
        browser.browseResultsChangedHandler={[weak self,weak browser] results,_ in
            guard let self=self,let browser=browser,self.browser === browser else{return};var endpoints:[String:NWEndpoint]=[:];var rows:[[String:String]]=[]
            for result in results{guard case .bonjour(let record)=result.metadata,let id=record["id"],let code=record["room"],record["version"]=="1" else{continue}
                endpoints[id]=result.endpoint;rows.append(["id":id,"code":code,"name":record["name"] ?? "附近的伙伴"])
            }
            self.endpoints=endpoints
            self.rows=rows.sorted{($0["code"] ?? "")<($1["code"] ?? "")};self.changed?(self.rows,nil)
            let ready=self.waiters.filter{self.endpoints[$0.value.0] != nil};for (id,item) in ready{self.waiters.removeValue(forKey:id);item.1.resume(returning:self.endpoints[item.0]!)}
            self.stopIfIdle()
        }
        browser.stateUpdateHandler={[weak self,weak browser] state in
            guard let self, let browser, self.browser === browser, case .failed(let error)=state else{return}
            self.browser=nil;browser.cancel()
            self.rows=[];self.endpoints.removeAll()
            let pending=self.waiters;self.waiters.removeAll()
            for item in pending.values {item.1.resume(throwing:error)}
            self.changed?([],"无法发现附近房间。请在 iOS 设置中允许“本地网络”，或使用房主分享的地址。")
        }
        browser.start(queue:queue)
    }
    func endpoint(_ id:String) async throws -> NWEndpoint {
        try await withCheckedThrowingContinuation{done in queue.async{
            if let endpoint=self.endpoints[id]{done.resume(returning:endpoint);return}
            self.begin();let ticket=UUID();self.waiters[ticket]=(id,done)
            self.queue.asyncAfter(deadline:.now()+8) {
                if let pending=self.waiters.removeValue(forKey:ticket) {
                    pending.1.resume(throwing:CompanionError.message("未找到原手机房间。请让房主保持 App 前台，并连接同一 Wi-Fi／热点。"))
                    self.stopIfIdle()
                }
            }
        }}
    }
}

/// Small bounded HTTP client for a Bonjour service endpoint, resolved by Network.framework.
final class PhoneCardRoomRequest:@unchecked Sendable {
    private let queue=DispatchQueue(label:"qiban.cards.peer-request")
    private var client:NWConnection?
    private var completion:CheckedContinuation<[String:Any],Error>?
    private var received=Data()
    private var cancelled=false
    func run(endpoint:NWEndpoint,body:Data) async throws -> [String:Any] {
        try await withTaskCancellationHandler(operation:{try await withCheckedThrowingContinuation{done in queue.async{
            self.completion=done
            if self.cancelled{self.finish(.failure(CancellationError()));return}
            let parameters=NWParameters.tcp;parameters.includePeerToPeer=true
            let client=NWConnection(to:endpoint,using:parameters);self.client=client
            client.stateUpdateHandler={[weak self] state in
                guard let self=self else{return}
                if case .ready=state {
                    var request=Data("POST /api HTTP/1.1\r\nHost: qiban-phone\r\nContent-Type: application/json\r\nContent-Length: \(body.count)\r\nConnection: close\r\n\r\n".utf8);request.append(body)
                    client.send(content:request,completion:.contentProcessed{error in if let error=error{self.finish(.failure(error))}else{self.read()}})
                }else if case .failed(let error)=state{self.finish(.failure(error))}
            }
            client.start(queue:self.queue);self.queue.asyncAfter(deadline:.now()+12){self.finish(.failure(CompanionError.message("手机房间连接超时，请确认房主仍在 App 前台。")))}
        }}},onCancel:{self.queue.async{self.cancelled=true;self.finish(.failure(CancellationError()))}})
    }
    private func finish(_ result:Result<[String:Any],Error>){guard let done=completion else{return};completion=nil;client?.stateUpdateHandler=nil;client?.cancel();client=nil;done.resume(with:result)}
    private func read(){client?.receive(minimumIncompleteLength:1,maximumLength:65536){[weak self] data,_,complete,error in
        guard let self=self else{return};if let data=data{self.received.append(data)}
        if let error=error{self.finish(.failure(error));return}
        guard self.received.count<=8*1024*1024 else{self.finish(.failure(CompanionError.message("手机房间响应过大。")));return}
        if let range=self.received.range(of:Data("\r\n\r\n".utf8)){
            let header=String(decoding:self.received[..<range.lowerBound],as:UTF8.self)
            let line=header.components(separatedBy:"\r\n").first{$0.lowercased().hasPrefix("content-length:")}
            let length=line.flatMap{Int($0.split(separator:":",maxSplits:1).last!.trimmingCharacters(in:.whitespaces))} ?? -1
            guard range.lowerBound<=16384,length>=0,length<=8*1024*1024 else{self.finish(.failure(CompanionError.message("手机房间返回无效数据。")));return}
            if self.received.count-range.upperBound>=length {
                let body=Data(self.received[range.upperBound..<range.upperBound+length])
                if let object=(try? JSONSerialization.jsonObject(with:body)) as? [String:Any]{self.finish(.success(object))}else{self.finish(.failure(CompanionError.message("手机房间响应不是 JSON。")))};return
            }
        }
        if complete{self.finish(.failure(CompanionError.message("手机房间连接中断，请重试。")))}else{self.read()}
    }}
}
