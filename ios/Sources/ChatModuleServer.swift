import Foundation
import Network

/// Serves a verified, user-imported static module only on the loopback address.
/// The stable origin keeps IndexedDB across app restarts; the path is private
/// to this server lifetime and cannot be guessed by another web page.
final class ChatModuleServer:@unchecked Sendable {
    private let queue=DispatchQueue(label:"qiban.chat.static")
    private var listener:NWListener?
    private var clients:[UUID:NWConnection]=[:]
    private let root:URL
    private let bindPort:UInt16
    private let artRoot:URL?
    let token=UUID().uuidString
    static let port:UInt16=49157
    var pageURL:URL {URL(string:"http://127.0.0.1:\(bindPort)/\(token)/index.html")!}
    init(root:URL,port:UInt16=ChatModuleServer.port,artRoot:URL?=nil){self.root=root.standardizedFileURL;self.bindPort=port;self.artRoot=artRoot?.standardizedFileURL}
    func start() async throws {
        try await withCheckedThrowingContinuation { (continuation:CheckedContinuation<Void,Error>) in
            queue.async {
                do {
                    let parameters=NWParameters(tls:nil,tcp:NWProtocolTCP.Options())
                    parameters.requiredLocalEndpoint = .hostPort(host:"127.0.0.1",port:NWEndpoint.Port(rawValue:self.bindPort)!)
                    let listener=try NWListener(using:parameters);self.listener=listener
                    var answered=false
                    listener.stateUpdateHandler={state in
                        if case .ready=state,!answered {answered=true;continuation.resume()}
                        else if case .failed(let error)=state,!answered {answered=true;continuation.resume(throwing:error)}
                        else if case .cancelled=state,!answered {answered=true;continuation.resume(throwing:CancellationError())}
                    }
                    listener.newConnectionHandler={[weak self] connection in self?.accept(connection)}
                    listener.start(queue:self.queue)
                }catch{continuation.resume(throwing:error)}
            }
        }
    }
    func stop(){queue.async{self.listener?.cancel();self.listener=nil;for client in self.clients.values{client.cancel()};self.clients.removeAll()}}
    private func accept(_ client:NWConnection) {
        let id=UUID();clients[id]=client;client.start(queue:queue)
        read(client,id:id,header:Data())
    }
    private func read(_ client:NWConnection,id:UUID,header:Data) {
        client.receive(minimumIncompleteLength:1,maximumLength:8192){[weak self] data,_,complete,error in
            guard let self=self else{return};var header=header;if let data=data{header.append(data)}
            guard header.count<=16384,error==nil else{self.close(client,id);return}
            if header.range(of:Data("\r\n\r\n".utf8)) != nil {self.respond(client,id:id,header:header)}
            else if complete {self.close(client,id)}else{self.read(client,id:id,header:header)}
        }
    }
    private func close(_ client:NWConnection,_ id:UUID){client.cancel();clients.removeValue(forKey:id)}
    private func respond(_ client:NWConnection,id:UUID,header:Data) {
        let text=String(decoding:header,as:UTF8.self),lines=text.components(separatedBy:"\r\n")
        let request=(lines.first ?? "").split(separator:" ")
        var status="404 Not Found",body=Data("Not found".utf8),mime="text/plain; charset=utf-8"
        if request.count==3,["GET","HEAD"].contains(String(request[0])),
           lines.contains(where:{$0.lowercased()=="host: 127.0.0.1:\(bindPort)"}),
           let path=String(request[1]).components(separatedBy:"?").first?.removingPercentEncoding,
           path.hasPrefix("/"+token+"/") {
            let relative=String(path.dropFirst(token.count+2))
            if VoiceManifest.safePath(relative) {
                let base=relative.hasPrefix("art/") ? (artRoot ?? root):root
                let name=relative.hasPrefix("art/") && artRoot != nil ? String(relative.dropFirst(4)):relative
                let file=base.appendingPathComponent(name).standardizedFileURL
                if file.path.hasPrefix(base.path+"/"),let size=try? file.resourceValues(forKeys:[.fileSizeKey]).fileSize,size<=64*1024*1024,
                   let data=try? Data(contentsOf:file,options:.mappedIfSafe) {body=data;status="200 OK";mime=Self.mime(file.pathExtension)}
            }
        }
        // WebKit asks for byte ranges before it will play/seek local AAC media.
        var rangeHeader=""
        if status=="200 OK",let range=lines.first(where:{$0.lowercased().hasPrefix("range:")}) {
            let value=range.dropFirst(6).trimmingCharacters(in:.whitespaces)
            let pieces=value.hasPrefix("bytes=") ? String(value.dropFirst(6)).split(separator:"-",omittingEmptySubsequences:false):[]
            let size=body.count
            if pieces.count==2,!pieces[0].isEmpty,let start=Int(pieces[0]),let end=pieces[1].isEmpty ? size-1:Int(pieces[1]),start>=0,start<size,end>=start {
                let last=min(end,size-1);body=body.subdata(in:start..<(last+1));status="206 Partial Content"
                rangeHeader="Content-Range: bytes \(start)-\(last)/\(size)\r\n"
            } else if pieces.count==2,pieces[0].isEmpty,let suffix=Int(pieces[1]),suffix>0,size>0 {
                let start=max(0,size-suffix);body=body.subdata(in:start..<size);status="206 Partial Content"
                rangeHeader="Content-Range: bytes \(start)-\(size-1)/\(size)\r\n"
            } else {body=Data();status="416 Range Not Satisfiable";rangeHeader="Content-Range: bytes */\(size)\r\n"}
        }
        let csp="default-src 'self'; script-src 'self' 'wasm-unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; media-src 'self' data: blob: https:; connect-src 'self'; worker-src 'self' blob:; object-src 'none'; frame-src 'none'"
        var response=Data("HTTP/1.1 \(status)\r\nContent-Type: \(mime)\r\nContent-Length: \(body.count)\r\nAccept-Ranges: bytes\r\n\(rangeHeader)Connection: close\r\nCache-Control: no-store\r\nX-Content-Type-Options: nosniff\r\nContent-Security-Policy: \(csp)\r\n\r\n".utf8)
        if request.first != "HEAD" {response.append(body)}
        client.send(content:response,completion:.contentProcessed{[weak self] _ in self?.close(client,id)})
    }
    private static func mime(_ ext:String)->String {
        ["html":"text/html; charset=utf-8","js":"text/javascript; charset=utf-8","mjs":"text/javascript; charset=utf-8","css":"text/css; charset=utf-8","json":"application/json; charset=utf-8","svg":"image/svg+xml","png":"image/png","jpg":"image/jpeg","jpeg":"image/jpeg","webp":"image/webp","ico":"image/x-icon","mp3":"audio/mpeg","m4a":"audio/mp4","wav":"audio/wav","txt":"text/plain; charset=utf-8","md":"text/plain; charset=utf-8","woff2":"font/woff2","pdf":"application/pdf" ][ext.lowercased()] ?? "application/octet-stream"
    }
}
