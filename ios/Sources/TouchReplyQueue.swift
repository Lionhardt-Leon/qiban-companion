import Foundation

// Local feedback stays immediate. Automatic AI turns wait for the current
// reply/voice/edit operation, and old touches cannot reappear much later.
struct TouchReplyQueue {
    private struct Entry {let message:String;let time:TimeInterval}
    private var entries:[Entry]=[]
    var isEmpty:Bool {entries.isEmpty}
    var count:Int {entries.count}
    mutating func append(_ message:String,now:TimeInterval=ProcessInfo.processInfo.systemUptime){
        entries.removeAll{now-$0.time>30 || now<$0.time}
        entries.append(Entry(message:String(message.prefix(600)),time:now))
        entries=Array(entries.suffix(8))
    }
    mutating func removeAll(){entries=[]}
    mutating func drain(chatBusy:Bool,speechBusy:Bool,editing:Bool,now:TimeInterval=ProcessInfo.processInfo.systemUptime)->[String]{
        entries.removeAll{now-$0.time>30 || now<$0.time}
        guard !chatBusy,!speechBusy,!editing else{return []}
        let result=entries.map(\.message);entries=[];return result
    }
}
