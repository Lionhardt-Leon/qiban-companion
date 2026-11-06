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
    static let mappings:[String:[String]]=[
        "greet":["snowbreak_home_login","hello","gesture_wave_right"],"farewell":["hello","gesture_wave_right"],
        "shy":["snowbreak_home_shy","gesture_shy"],"kiss":["snowbreak_home_kiss"],"invite":["snowbreak_home_invite","gesture_open_arms"],
        "comfort":["gesture_nod","Yes"],"nod":["gesture_nod","Yes"],"shake_head":["gesture_shake","No"],
        "wave_left":["gesture_wave_left"],"wave_right":["gesture_wave_right","hello"],"open_arms":["gesture_open_arms"]]
    static func resolve(_ intent:String,actions:[String])->String? {let key=["招呼":"greet","告别":"farewell","害羞":"shy","羞一下":"shy","亲吻":"kiss","亲亲":"kiss","邀请":"invite","安慰":"comfort","点头":"nod","摇头":"shake_head","展开双臂":"open_arms"][intent] ?? intent.lowercased();return mappings[key]?.first(where:{actions.contains($0)})}
    static func inferredIntent(_ affect:AffectDecision?)->String? {guard let a=affect,a.intensity>=0.45 else{return nil};return ["shy":"shy","affectionate":"invite","curious":"nod"][a.emotion]}
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
