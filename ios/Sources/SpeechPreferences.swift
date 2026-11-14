import Foundation

struct SpeechPreferences:Codable,Equatable {
    var voiceID = "system.zh"
    var language = "zh"
    var autoPlay = false
    var speed:Float = 1
    var volume:Float = 1
    var computeMode:String?
    var acceleration:VoiceComputeMode {VoiceComputeMode(rawValue:computeMode ?? "automatic") ?? .automatic}
    func validate() throws {
        guard computeMode == nil || VoiceComputeMode(rawValue:computeMode!) != nil else{throw CompanionError.message("语音加速设置无效。")}
        guard ["zh","ja"].contains(language),!voiceID.isEmpty,voiceID.count <= 120,speed.isFinite,(0.7...1.3).contains(speed),volume.isFinite,(0...1).contains(volume) else {throw CompanionError.message("语音设置无效。")}
    }
    func text(for message:Message) throws -> String {
        let raw:String
        if language == "ja" {
            guard let japanese=message.resolvedSpokenJapanese,!japanese.trimmingCharacters(in:.whitespacesAndNewlines).isEmpty else {
                if Self.clean(message.displayContent).isEmpty {return ""}
                throw CompanionError.message("这条回复没有可用的日文台词。新回复会自动尝试补全日文；旧记录可在日配模式下重新发送。")
            }
            raw=japanese
        }else {raw=message.displayContent}
        return Self.clean(raw)
    }
    static func clean(_ text:String) -> String {
        var value=text
        for pattern in [#"```[\s\S]*?```"#,#"https?://\S+"#] {
            value=value.replacingOccurrences(of:pattern,with:"",options:.regularExpression)
        }
        // Remove nested stage directions as well as single parentheses.
        for _ in 0..<16 {
            let next=value.replacingOccurrences(of:#"（[^（）]*）|\([^()]*\)"#,with:"",options:.regularExpression)
            if next==value {break};value=next
        }
        value=value.replacingOccurrences(of:#"[*_`#>]"#,with:"",options:.regularExpression)
        return hasSpeech(value) ? value.trimmingCharacters(in:.whitespacesAndNewlines):""
    }
    static func hasSpeech(_ text:String)->Bool {text.rangeOfCharacter(from:.letters.union(.decimalDigits)) != nil}
    static func sentences(_ input:String) -> [String] {
        var result:[String]=[],part=""
        for c in input {
            part.append(c)
            if "。！？!?\n".contains(c) || part.count>=32 || part.count>=18 && "，、,；;".contains(c) {
                if hasSpeech(part) {result.append(part)};part=""
            }
        }
        if hasSpeech(part) {result.append(part)}
        return result
    }
}
