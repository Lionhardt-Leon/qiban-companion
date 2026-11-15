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
        if let spoken=message.resolvedSpokenChinese,Self.clean(spoken).isEmpty {return ""}
        let raw:String
        if language == "ja" {
            guard let japanese=message.resolvedSpokenJapanese,!japanese.trimmingCharacters(in:.whitespacesAndNewlines).isEmpty else {
                if (message.resolvedSpokenChinese.map{Self.clean($0)} ?? SpokenDialogue.dialogue(message.displayContent)).isEmpty {return ""}
                throw CompanionError.message("这条回复没有可用的日文台词。新回复会自动尝试补全日文；旧记录可在日配模式下重新发送。")
            }
            raw=japanese
        }else {
            if let spoken=message.resolvedSpokenChinese {return Self.clean(spoken)}
            return SpokenDialogue.dialogue(message.displayContent)
        }
        return Self.clean(raw)
    }
    static func clean(_ text:String) -> String {
        SpokenDialogue.explicit(text)
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
