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
            guard let japanese=message.spokenJapanese,!japanese.trimmingCharacters(in:.whitespacesAndNewlines).isEmpty else {throw CompanionError.message("这条回复没有日文原话，已保留中文显示。请在日配模式下重新发送，接口需按提示返回 speech_ja。")}
            raw=japanese
        }else {raw=message.content}
        return Self.clean(raw)
    }
    static func clean(_ text:String) -> String {
        var value=text
        for pattern in [#"```[\s\S]*?```"#,#"（[^（）]*）"#,#"\([^()]*\)"#,#"https?://\S+"#] {
            value=value.replacingOccurrences(of:pattern,with:"",options:.regularExpression)
        }
        value=value.replacingOccurrences(of:#"[*_`#>]"#,with:"",options:.regularExpression)
        return value.trimmingCharacters(in:.whitespacesAndNewlines)
    }
    static func sentences(_ input:String) -> [String] {
        var result:[String]=[],part=""
        for c in input {
            part.append(c)
            if "。！？!?\n".contains(c) || part.count>=48 || part.count>=22 && "，、,；;".contains(c) {
                if !part.trimmingCharacters(in:.whitespacesAndNewlines).isEmpty {result.append(part)};part=""
            }
        }
        if !part.trimmingCharacters(in:.whitespacesAndNewlines).isEmpty {result.append(part)}
        return result
    }
}
