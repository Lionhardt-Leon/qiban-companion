import Foundation
import CryptoKit

// Standalone probe stubs only app identity/error; production networking, archive reader,
// ImageIO import and JavaScriptCore room engine are compiled without modification.
enum CompanionError:LocalizedError {
    case message(String)
    var errorDescription:String?{switch self{case .message(let text):return text}}
}
enum AppIdentity {static let storageNamespace="QibanNativeRoomProbe-"+UUID().uuidString}

@main struct Probe {
    static var checks=0
    static func check(_ ok:Bool,_ label:String) throws {guard ok else{throw CompanionError.message("Probe failed: "+label)};checks+=1;FileHandle.standardOutput.write(Data(("NATIVE_OK "+label+"\n").utf8))}
    static func fetch(_ url:URL,body:[String:Any]?=nil) async throws -> (Data,Int){
        var request=URLRequest(url:url);request.timeoutInterval=8
        if let body=body{request.httpMethod="POST";request.httpBody=try JSONSerialization.data(withJSONObject:body);request.setValue("application/json",forHTTPHeaderField:"Content-Type")}
        let (bytes,response)=try await URLSession.shared.data(for:request);return (bytes,(response as? HTTPURLResponse)?.statusCode ?? 0)
    }
    static func object(_ bytes:Data) throws -> [String:Any]{try JSONSerialization.jsonObject(with:bytes) as! [String:Any]}
    static func main() async throws {
        let args=CommandLine.arguments,root=URL(fileURLWithPath:args[1]),fixture=URL(fileURLWithPath:args[2]),bad=URL(fileURLWithPath:args[3])
        let library=CardGameLibrary();var progress=0
        // NSLock avoids a test-only data race in the sendable progress callback.
        let counter=Counter();let imported=try library.install(fixture){done,_ in counter.set(done)};progress=counter.value()
        try check(imported.characters==1 && imported.images==1 && progress==1,"actual ImageIO art import and progress")
        let catalog=try library.catalog();try check(catalog.count==1,"actual imported art catalog")
        var rejected=false
        do{_ = try library.install(bad)}catch{rejected=true}
        try check(rejected && (try library.catalog().count)==1,"failed import rejects unsafe entries and preserves installed art")
        let themeResult=try library.install(URL(fileURLWithPath:args[6]))
        let themes=try library.themeCatalog()
        try check(themeResult.characters==1 && themeResult.images==1 && themes.count==1,"schema 2 original theme with AAC imports alongside legacy art")
        try check((themes[0]["images"] as? [String:String])?.count==11,"original image roles exposed to native bridge")
        var downgradeRejected=false
        do{_ = try library.install(URL(fileURLWithPath:args[7]))}catch{downgradeRejected=true}
        try check(downgradeRejected && (try library.themeCatalog().count)==1,"legacy portrait re-import cannot remove an installed complete theme")
        let chat=ChatModuleServer(root:root,port:UInt16(args[4])!),game=ChatModuleServer(root:root,port:UInt16(args[5])!,artRoot:library.artRoot)
        try await chat.start();try await game.start()
        let (chatHTML,chatStatus)=try await fetch(chat.pageURL), (gameHTML,gameStatus)=try await fetch(game.pageURL)
        try check(chatStatus==200 && String(decoding:chatHTML,as:UTF8.self).contains("app.mjs"),"communications listener routes its configured port")
        try check(gameStatus==200 && String(decoding:gameHTML,as:UTF8.self).contains("app.mjs"),"game listener routes a different configured port")
        let (_,jsStatus)=try await fetch(game.pageURL.deletingLastPathComponent().appendingPathComponent("app.mjs"));try check(jsStatus==200,"actual game module served")
        let portrait=catalog[0]["portrait"] as! String
        let (png,pngStatus)=try await fetch(game.pageURL.deletingLastPathComponent().appendingPathComponent(portrait));try check(pngStatus==200 && png.prefix(4)==Data([137,80,78,71]),"imported art is reachable on game port")
        let audioPath=(themes[0]["audio"] as! [String:String])["music/main"]!
        let audioURL=game.pageURL.deletingLastPathComponent().appendingPathComponent(audioPath)
        var rangeRequest=URLRequest(url:audioURL);rangeRequest.setValue("bytes=0-1",forHTTPHeaderField:"Range")
        let (rangeBytes,rangeResponse)=try await URLSession.shared.data(for:rangeRequest)
        try check(rangeBytes.count==2 && (rangeResponse as? HTTPURLResponse)?.statusCode==206 && rangeResponse.mimeType=="audio/mp4","WebKit AAC byte range and MIME served by native listener")
        rangeRequest.setValue("bytes=999999-",forHTTPHeaderField:"Range")
        let (invalidRange,invalidResponse)=try await URLSession.shared.data(for:rangeRequest)
        try check(invalidRange.isEmpty && (invalidResponse as? HTTPURLResponse)?.statusCode==416,"unsatisfiable audio ranges return 416")
        let (_,unknown)=try await fetch(game.pageURL.deletingLastPathComponent().appendingPathComponent("missing.html"));try check(unknown==404,"missing resource stays 404")
        chat.stop();game.stop()

        let phone=PhoneCardRoomServer(),created=try await phone.start(source:root.appendingPathComponent("native-runtime.js"),input:["capacity":3,"name":"Phone Host","requestId":"native-host","password":"friends"],advertise:false)
        let first=created["state"] as! [String:Any],info=created["hostInfo"] as! [String:Any],code=first["code"] as! String,hostToken=created["token"] as! String
        let base=URL(string:info["localAddress"] as! String)!,api=base.appendingPathComponent("api")
        try check((info["port"] as! Int)>0,"phone listener chooses a real TCP port")
        let (_,health)=try await fetch(base.appendingPathComponent("health"));try check(health==200,"actual phone listener health")
        let (_,remoteCreate)=try await fetch(api,body:["op":"create","code":code,"capacity":4,"requestId":"remote-create"]);try check(remoteCreate==403,"remote callers cannot create extra phone rooms")
        let (wrongPassword,_)=try await fetch(api,body:["op":"join","code":code,"requestId":"bad-pass","password":"bad"])
        try check(try object(wrongPassword)["error"] != nil,"phone room password enforced")
        let join:[String:Any]=["op":"join","code":code,"name":"Phone Friend","requestId":"native-friend","password":"friends"]
        let (joinedBytes,joinedStatus)=try await fetch(api,body:join),joined=try object(joinedBytes),friendToken=joined["token"] as! String
        try check(joinedStatus==200 && friendToken != hostToken,"second phone obtains private seat over TCP")
        let (retryBytes,_)=try await fetch(api,body:join);try check(try object(retryBytes)["token"] as? String==friendToken,"phone join retry is idempotent")
        let stateBody:[String:Any]=["op":"state","code":code,"token":friendToken]
        let (viewBytes,_)=try await fetch(api,body:stateBody),view=try object(viewBytes)["state"] as! [String:Any]
        let ready:[String:Any]=["op":"ready","code":code,"token":friendToken,"revision":view["revision"]!,"actionId":"ready-native","ready":true]
        let (readyBytes,_)=try await fetch(api,body:ready);try check(try object(readyBytes)["error"]==nil,"friend ready over phone TCP listener")
        let hostState=try await phone.request(["op":"state","code":code,"token":hostToken])["state"] as! [String:Any]
        let started=try await phone.request(["op":"start","code":code,"token":hostToken,"revision":hostState["revision"]!,"actionId":"start-native","fillBots":true])
        try check(started["error"]==nil,"native JavaScriptCore starts shared rules with bot fill")
        let (friendGameBytes,_)=try await fetch(api,body:stateBody),friendGame=try object(friendGameBytes)["state"] as! [String:Any],g=friendGame["game"] as! [String:Any],ps=g["players"] as! [[String:Any]]
        try check(ps[1]["hand"] is [Int] && ps[0]["hand"]==nil && ps[2]["hand"]==nil,"phone response contains only caller hand")
        try check(!String(decoding:friendGameBytes,as:UTF8.self).contains(hostToken),"host token never appears in peer state")
        var turn:[String:Any]?
        for _ in 0..<50 {
            let current=try await phone.request(["op":"state","code":code,"token":hostToken])["state"] as! [String:Any],game=current["game"] as! [String:Any]
            if (game["current"] as! Int)<2{turn=current;break}
            try await Task.sleep(nanoseconds:100_000_000)
        }
        guard let turn=turn else{throw CompanionError.message("Bot did not yield a human turn")}
        let currentGame=turn["game"] as! [String:Any],seat=currentGame["current"] as! Int,token=seat==0 ? hostToken:friendToken
        let (ownBytes,_)=try await fetch(api,body:["op":"state","code":code,"token":token]),own=try object(ownBytes)["state"] as! [String:Any],ownGame=own["game"] as! [String:Any]
        let ownPlayers=ownGame["players"] as! [[String:Any]],hand=ownPlayers[seat]["hand"] as! [Int]
        let action:[String:Any]=ownGame["table"] is NSNull ? ["type":"play","ids":[hand[0]]]:["type":"pass"]
        let command:[String:Any]=["op":"act","code":code,"token":token,"revision":own["revision"]!,"actionId":"play-native","action":action]
        let (playedBytes,_)=try await fetch(api,body:command);try check(try object(playedBytes)["error"]==nil,"human acts through actual phone room HTTP")
        let (dedupBytes,_)=try await fetch(api,body:command);try check(try object(dedupBytes)["duplicate"] as? Bool==true,"phone repeated action not applied twice")
        let reconnected=try await fetch(api,body:stateBody);try check(try object(reconnected.0)["state"] != nil,"phone seat reconnect")
        await phone.stop();let stopped=await phone.info();try check(stopped["hosting"] as? Bool==false,"phone room stops and releases listener")
        print("NATIVE_PHONE_PROBE "+String(data:try JSONSerialization.data(withJSONObject:["checks":checks,"success":true,"phoneRuntime":"JavaScriptCore","transport":"native TCP","simulatorUsed":false,"UUDeviceVerified":false]),encoding:.utf8)!)
    }
}
private final class Counter:@unchecked Sendable {private let lock=NSLock();private var count=0;func set(_ n:Int){lock.lock();count=n;lock.unlock()};func value()->Int{lock.lock();defer{lock.unlock()};return count}}
