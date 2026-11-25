import Foundation

extension SpeechSymbolFilter {
    func validate() throws {
        guard customPairs.count <= 120 else {throw CompanionError.message("自定义朗读过滤符号过长。")}
    }
}

struct SpeechPreferences:Codable,Equatable {
    var enabled:Bool? = nil
    var isEnabled:Bool {enabled != false}
    var voiceID = "system.zh"
    var language = "zh"
    var autoPlay = false
    var speed:Float = 1
    var volume:Float = 1
    var computeMode:String?
    var symbolFilter:SpeechSymbolFilter? = nil
    var effectiveFilter:SpeechSymbolFilter {symbolFilter ?? SpeechSymbolFilter()}
    var acceleration:VoiceComputeMode {VoiceComputeMode(rawValue:computeMode ?? "automatic") ?? .automatic}
    func validate() throws {
        guard computeMode == nil || VoiceComputeMode(rawValue:computeMode!) != nil else{throw CompanionError.message("语音加速设置无效。")}
        guard ["zh","ja"].contains(language),!voiceID.isEmpty,voiceID.count <= 120,speed.isFinite,(0.7...1.3).contains(speed),volume.isFinite,(0...1).contains(volume) else {throw CompanionError.message("语音设置无效。")}
        try symbolFilter?.validate()
    }
    func text(for message:Message,inCall:Bool=false) throws -> String {
        let filter=effectiveFilter
        if let spoken=message.resolvedSpokenChinese,Self.clean(spoken,filter:filter,strictCall:inCall).isEmpty {return ""}
        let raw:String
        if language == "ja" {
            guard let japanese=message.resolvedSpokenJapanese,!japanese.trimmingCharacters(in:.whitespacesAndNewlines).isEmpty else {
                if (message.resolvedSpokenChinese.map{Self.clean($0,filter:filter,strictCall:inCall)} ?? SpokenDialogue.dialogue(message.displayContent,filter:filter,strictCall:inCall)).isEmpty {return ""}
                throw CompanionError.message("这条回复没有可用的日文台词。新回复会自动尝试补全日文；旧记录可在日配模式下重新发送。")
            }
            raw=japanese
        }else {
            if let spoken=message.resolvedSpokenChinese {return Self.clean(spoken,filter:filter,strictCall:inCall)}
            return SpokenDialogue.dialogue(message.displayContent,filter:filter,strictCall:inCall)
        }
        return Self.clean(raw,filter:filter,strictCall:inCall)
    }
    static func clean(_ text:String,filter:SpeechSymbolFilter=SpeechSymbolFilter(),strictCall:Bool=false) -> String {
        SpokenDialogue.explicit(text,filter:filter,strictCall:strictCall)
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
