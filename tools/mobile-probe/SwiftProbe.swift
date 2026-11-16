import Foundation
import Network
enum CompanionError:LocalizedError {case message(String);var errorDescription:String?{switch self{case .message(let text):return text}}}
@main struct MobileProbe {
    static func main() async {
        let source=URL(fileURLWithPath:CommandLine.arguments[1]);
        while let line=readLine(){do{let input=try JSONSerialization.jsonObject(with:Data(line.utf8)) as! [String:Any];let command=input["command"] as! String;let body=input["body"] as? [String:Any] ?? [:];let value:[String:Any]
            switch command {
            case "host":value=try await PhoneCardRoomServer.shared.start(source:source,input:body,advertise:false)
            case "local":value=try await PhoneCardRoomServer.shared.request(body)
            case "wire":let url=URL(string:input["url"] as! String)!;let endpoint=NWEndpoint.hostPort(host:.init(url.host!),port:.init(rawValue:UInt16(url.port!))!);value=try await PhoneCardRoomRequest().run(endpoint:endpoint,body:JSONSerialization.data(withJSONObject:body))
            case "stop":await PhoneCardRoomServer.shared.stop();value=["stopped":true]
            default:throw CompanionError.message("Unknown command")
            }
            let result=try JSONSerialization.data(withJSONObject:["value":value]);FileHandle.standardOutput.write(result+Data([10]))
        }catch{let result=try! JSONSerialization.data(withJSONObject:["error":error.localizedDescription]);FileHandle.standardOutput.write(result+Data([10]))}}
        await PhoneCardRoomServer.shared.stop()
    }
}
