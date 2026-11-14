import Foundation

enum VoiceBreadcrumb {
    private static var url:URL {FileManager.default.urls(for:.cachesDirectory,in:.userDomainMask)[0].appendingPathComponent("speech-last-stage.json")}
    static func record(voice:String,stage:String,state:String){
        let item:[String:String]=["voice":String(voice.prefix(120)),"stage":stage,"state":state,"time":ISO8601DateFormatter().string(from:Date())]
        if let data=try? JSONSerialization.data(withJSONObject:item,options:[.sortedKeys]){try? data.write(to:url,options:.atomic)}
    }
    static var previousStatus:String? {
        guard let data=try? Data(contentsOf:url),data.count<4096,let item=(try? JSONSerialization.jsonObject(with:data)) as? [String:String],item["state"]=="running" else{return nil}
        return "上次本机合成未正常结束，停留阶段："+(item["stage"] ?? "未知")+"。可先选择自动（稳定优先）后端。"
    }
}
