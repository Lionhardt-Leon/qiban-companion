import Foundation

struct AffectDecision:Codable,Equatable {
    var emotion:String
    var intensity:Double
    var closenessDelta:Double = 0
    var reason:String = ""
    init(emotion:String,intensity:Double,closenessDelta:Double=0,reason:String=""){self.emotion=emotion;self.intensity=intensity;self.closenessDelta=closenessDelta;self.reason=reason}
    private enum CodingKeys:String,CodingKey {case emotion,intensity,closenessDelta,reason}
    init(from decoder:Decoder) throws {let c=try decoder.container(keyedBy:CodingKeys.self);let raw=try c.decode(String.self,forKey:.emotion);emotion=["平静":"calm","开心":"happy","害羞":"shy","亲近":"affectionate","好奇":"curious","难过":"sad","不自在":"uncomfortable"][raw] ?? raw.lowercased();intensity=try c.decode(Double.self,forKey:.intensity);closenessDelta=try c.decodeIfPresent(Double.self,forKey:.closenessDelta) ?? 0;reason=try c.decodeIfPresent(String.self,forKey:.reason) ?? ""}
    static let emotions=["calm","happy","shy","affectionate","curious","sad","uncomfortable"]
    func validate() throws {
        guard Self.emotions.contains(emotion),intensity.isFinite,(0...1).contains(intensity),closenessDelta.isFinite,abs(closenessDelta)<=0.1,reason.count<=160 else{throw CompanionError.message("心情状态格式无效。")}
    }
}
struct CompanionMood:Codable,Equatable {
    var emotion="calm",reason="初次见面，平静陪伴。"
    var intensity:Double=0.25,closeness:Double=0.25
    var updatedAt=Date()
    var label:String {["calm":"平静","happy":"开心","shy":"害羞","affectionate":"亲近","curious":"好奇","sad":"低落","uncomfortable":"不自在"][emotion] ?? "平静"}
    var summary:String {"心情：\(label)，强度 \(Int(intensity*100))%；亲近度 \(Int(closeness*100))%；原因：\(reason)"}
    mutating func apply(_ value:AffectDecision,now:Date=Date()) throws {try value.validate();emotion=value.emotion;intensity=value.intensity;closeness=max(0,min(1,closeness+value.closenessDelta));reason=value.reason;updatedAt=now}
    func validate() throws {guard AffectDecision.emotions.contains(emotion),intensity.isFinite,(0...1).contains(intensity),closeness.isFinite,(0...1).contains(closeness),reason.count<=160 else{throw CompanionError.message("本地心情资料无效。")}}
}

enum CompanionBehavior {
    static func greeting(actions:[String],mode:String)->String? {guard let action=resolve("greet",actions:actions),!(mode == "interaction" && action.hasPrefix("gesture_")) else{return nil};return action}
    static let mappings:[String:[String]]=[
        "raise_left_leg":["raise_left_leg"],"raise_right_leg":["raise_right_leg"],"spread_legs":["spread_legs"],"lower_legs":["lower_legs"],"lift_left_leg":["raise_left_leg"],"lift_right_leg":["raise_right_leg"],"抬左腿":["raise_left_leg"],"抬右腿":["raise_right_leg"],"把腿分开":["spread_legs"],
        "greet":["snowbreak_home_login","hello","gesture_wave_right"],"farewell":["hello","gesture_wave_right"],
        "shy":["snowbreak_home_shy","gesture_shy"],"kiss":["snowbreak_home_kiss"],"invite":["snowbreak_home_invite","gesture_open_arms"],
        "comfort":["gesture_nod","Yes"],"nod":["gesture_nod","Yes"],"shake_head":["gesture_shake","No"],
        "wave_left":["gesture_wave_left"],"wave_right":["gesture_wave_right","hello"],"open_arms":["gesture_open_arms"]]
    static func resolve(_ intent:String,actions:[String])->String? {
        let trimmed = intent.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !trimmed.isEmpty else { return nil }
        let aliases:[String:String] = [
            "招呼":"greet","打招呼":"greet","欢迎":"greet","告别":"farewell",
            "害羞":"shy","羞一下":"shy","害羞一点":"shy","脸红":"shy","blush":"shy","haixiu":"shy",
            "亲吻":"kiss","亲亲":"kiss","邀请":"invite","安慰":"comfort",
            "点头":"nod","摇头":"shake_head","展开双臂":"open_arms","张开双臂":"open_arms",
            "吃惊":"surprised","惊讶":"surprised","震惊":"surprised","吓一跳":"surprised","shocked":"surprised","surprise":"surprised","jingya":"surprised",
            "开心":"happy","高兴":"happy","微笑":"happy","笑":"happy","大笑":"happy","smile":"happy","laugh":"happy","excited":"happy","xiao":"happy","kaixin":"happy",
            "悲伤":"sad","难过":"sad","伤心":"sad","哭":"sad","哭泣":"sad","委屈":"sad","cry":"sad","beishang":"sad","kuqi":"sad",
            "生气":"angry","愤怒":"angry","不满":"angry","发火":"angry","mad":"angry","furious":"angry","shengqi":"angry","fennu":"angry",
            "思考":"thinking","疑惑":"thinking","困惑":"thinking","认真":"thinking","严肃":"thinking","confused":"thinking","serious":"thinking","curious":"thinking","sikao":"thinking","yansu":"thinking",
            "困扰":"troubled","担心":"troubled","苦笑":"troubled","叹气":"troubled","焦虑":"troubled","worried":"troubled","sigh":"troubled","anxious":"troubled","uncomfortable":"troubled","kunrao":"troubled",
            "得意":"proud","骄傲":"proud","调侃":"proud","smug":"proud","teasing":"proud","deyi":"proud",
            "眨眼":"wink","抛媚眼":"wink"
        ]
        let lower = trimmed.lowercased()
        let key = aliases[trimmed] ?? aliases[lower] ?? lower
        if let direct = mappings[key]?.first(where:{actions.contains($0)}) { return direct }
        let portraitEntries = actions.compactMap { id in DialogueMotion.portraitActionInfo(id).map { (id: id, info: $0) } }
        guard !portraitEntries.isEmpty else { return nil }
        func pick(intents:[String]) -> String? {
            for target in intents {
                if let dynamic = portraitEntries.first(where: { $0.info.intent == target && !$0.info.isStand }) { return dynamic.id }
                if let steady = portraitEntries.first(where: { $0.info.intent == target }) { return steady.id }
            }
            return nil
        }
        if let exactToken = portraitEntries.first(where: { $0.info.token == lower && !$0.info.isStand }) ?? portraitEntries.first(where: { $0.info.token == lower }) {
            return exactToken.id
        }
        if let meaningMatch = portraitEntries.first(where: { $0.info.meaning.localizedCaseInsensitiveContains(trimmed) && !$0.info.isStand }) ?? portraitEntries.first(where: { $0.info.meaning.localizedCaseInsensitiveContains(trimmed) }) {
            return meaningMatch.id
        }
        switch key {
        case "greet","invite","farewell": return pick(intents: ["greet","happy"])
        case "comfort","nod": return pick(intents: ["happy"])
        case "shake_head": return pick(intents: ["troubled","angry"])
        case "surprised","happy","sad","angry","thinking","troubled","proud","wink","shy": return pick(intents: [key])
        default: return nil
        }
    }
    static func inferredIntent(_ affect:AffectDecision?)->String? {guard let a=affect,a.intensity>=0.45 else{return nil};return ["shy":"shy","affectionate":"invite","curious":"nod","happy":"happy","sad":"sad","uncomfortable":"troubled"][a.emotion]}
}

struct SpeechPlaybackStart {let id=UUID();let messageID:UUID}
struct WaitingBodyAction {
    let event:DialogueActionEvent
    let messageID:UUID
    let conversationID:UUID
    let revision:Int
    func needsSpeechStart(speechBusy:Bool,started:SpeechPlaybackStart?)->Bool {speechBusy && started?.messageID != messageID}
    func matches(messageID:UUID,conversationID:UUID,revision:Int)->Bool {self.messageID==messageID && self.conversationID==conversationID && self.revision==revision}
}
