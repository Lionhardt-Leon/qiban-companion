import Foundation

struct DialogueReply {
    let text: String
    let action: String?
    var motion: MotionPlan? = nil
    var spokenJapanese:String? = nil
    var affect:AffectDecision? = nil
    var hasBodyDecision=false
}

struct DialogueActionEvent {
    let id = UUID()
    let action: String
    var motion: MotionPlan? = nil
}

enum DialogueMotion {
    static let fennyScenes:[(id:String,label:String,meaning:String)] = [
        ("snowbreak_fenny_scene_01","婚礼互动 · 基础坐姿","芬妮原作婚礼基础坐姿，保持该互动场景"),
        ("snowbreak_fenny_scene_02","婚礼互动 · 双脚","芬妮原作婚礼双脚互动坐姿，保持该互动场景"),
        ("snowbreak_fenny_scene_03","婚礼互动 · 扶额","芬妮原作婚礼扶额坐姿，保持该互动场景"),
        ("snowbreak_fenny_scene_07","婚礼互动 · 待机变化一","芬妮原作婚礼互动待机变化一，保持该姿态"),
        ("snowbreak_fenny_scene_08","婚礼互动 · 待机变化二","芬妮原作婚礼互动待机变化二，保持该姿态"),
        ("snowbreak_fenny_scene_09","婚礼互动 · 待机变化三","芬妮原作婚礼互动待机变化三，保持该姿态")
    ]
    // Descriptions are trusted code, never instructions taken from an imported role package.
    static let catalog: [(id: String, meaning: String)] = [
        ("hello", "挥手打招呼、欢迎或告别"),
        ("Yes", "点头，温和认同或鼓励"),
        ("No", "摇头，否认或不同意"),
        ("Peace_hand", "比耶，庆祝或轻松合照"),
        ("f_vibe_dance_60_bpm_002", "轻柔舞蹈"),
        ("dance_90bpm", "中速舞蹈"),
        ("dance_120bpm", "快节奏舞蹈"),
        ("procedural", "自由骨骼动作，用 motion 关键帧控制四肢、头和躯干"),
        ("fenny_outfit_normal", "恢复芬妮原婚纱"),
        ("fenny_outfit_underwear", "切换已导入的芬妮婚纱内衣版，仍有内衣，不是裸体"),
        ("fenny_mode_standing", "切到芬妮看板娘站立模式，保留当前婚纱／内衣选择"),
        ("fenny_mode_interaction", "切到芬妮原作婚皮互动场景，保留当前婚纱／内衣选择"),
        ("enya_outfit_normal", "恢复恩雅正常服饰，保留当前陪伴模式"),
        ("enya_outfit_nude", "切换恩雅已有的果体版模型，保留当前陪伴模式"),
        ("enya_mode_standing", "切到看板娘站立模式，保留当前服饰"),
        ("enya_mode_interaction", "切到皮肤互动坐姿模式，保留当前服饰"),
        ("snowbreak_head", "恩雅护士已有的头部互动反应片段"),
        ("snowbreak_left", "恩雅护士已有的左手互动反应片段"),
        ("snowbreak_right", "恩雅护士已有的右手互动反应片段"),
        ("snowbreak_home_jealous", "芬妮婚皮原作吃醋反应"),
        ("snowbreak_home_marry", "芬妮婚皮原作婚礼互动"),
        ("snowbreak_home_sigh", "芬妮婚皮原作叹气"),
        ("snowbreak_home_stage", "芬妮婚皮原作主页展示"),
        ("snowbreak_home_stand", "芬妮婚皮原作站立待机"),
        ("snowbreak_home_login", "看板娘原作登录招呼"),
        ("snowbreak_home_invite", "看板娘原作邀请互动"),
        ("snowbreak_home_shy", "看板娘原作害羞反应；羞一下、害羞一点、扭捏、shy 都可选择，不需用户说动作名字"),
        ("snowbreak_home_check", "看板娘原作检查动作"),
        ("snowbreak_home_kiss", "看板娘原作亲吻动作"),
        ("snowbreak_show_02", "护士原作互动展示02"),
        ("snowbreak_show_03", "护士原作互动展示03"),
        ("snowbreak_show_04", "护士原作互动展示04"),
        ("snowbreak_show_05", "护士原作互动展示05"),
        ("snowbreak_sequence", "护士原作完整展示片段"),
        ("snowbreak_idle_01", "护士原作待机变化01"),
        ("snowbreak_idle_02", "护士原作待机变化02"),
        ("enya_yuki_hello", "恩雅学习 Yuki 的上半身挥手动作"),
        ("enya_yuki_Yes", "恩雅学习 Yuki 的点头动作"),
        ("enya_yuki_No", "恩雅学习 Yuki 的摇头动作"),
        ("enya_yuki_Peace_hand", "恩雅举手比 V 手势"),
        ("enya_yuki_dance_90bpm", "恩雅站立全身舞蹈，90 BPM，只适用于站立看板娘"),
        ("enya_yuki_dance_120bpm", "恩雅站立全身舞蹈，120 BPM，只适用于站立看板娘"),
        ("enya_yuki_f_vibe_dance_60_bpm_002", "恩雅站立全身舞蹈，60 BPM，只适用于站立看板娘")
    ] + fennyScenes.map{(id:$0.id,meaning:$0.meaning)} + BodyCommand.allCases.map{(id:$0.rawValue,meaning:$0.label+"；由播放器直接控制并提供身体状态回执")} + BodyGesture.catalog

    static func allowed(_ ids: [String]) -> [String] {
        catalog.map(\.id).filter { ids.contains($0) }
    }
    static func semanticMappings(actions:[String]) -> [(label:String,id:String)] {
        catalog.filter{actions.contains($0.id)}.map{(label:$0.meaning,id:$0.id)}
    }

    static func instruction(actions: [String]) -> String {
        let entries = catalog.filter { actions.contains($0.id) }
            .map { "\($0.id)：\($0.meaning)" }.joined(separator: "\n")
        let procedural = actions.contains("procedural") ? """
        对现有片段不能表达的动作，选择 action=procedural 并附加 motion。你可以组合不同姿态，不限于预录片段。
        motion={"duration":4,"poses":[{"time":0,"leftHand":[0,0,0]},{"time":1.5,"leftHand":[-0.3,1.0,0.3],"head":[0,0,8]},{"time":4,"leftHand":[0,0,0],"head":[0,0,0]}]}。
        duration 为1到8秒；poses为2到8帧，时间严格递增，首帧time=0，末帧time=duration。可省略不控制的部位。
        leftHand/rightHand/leftFoot/rightFoot 为相对该手脚当前待机位置的偏移，以各自整条肢体长度为1；[0,0,0]完整保留待机姿态。
        坐标x正值是角色自身右侧（观众左边），y向上，z向前；双手x/z在-1.5到1.5内，y在-0.35到2内；双脚各分量在-0.35到0.35内。
        head和torso是[左右转头角度,低头角度,侧倾角度]，单位度。head限[±45,±25,±20]；torso限[±20,±15,±15]。
        保持动作自然、幅度适中，通常以中性姿态收尾。脚底不穿地，避免双脚同时抬起和大幅交叉、穿过身体。不要声称能执行没有相应控制的手指或道具动作。
        """ : ""
        return """
        你同时控制屏幕上的伙伴。理解用户最新话语、上下文、情绪和你自己的回复，再选择至多一个合适的肢体动作。
        请只输出一个 JSON 对象：{"reply":"给用户的自然语言回复","decision":"accept或refuse或none","action":"动作ID或none或stop"}。
        先理解整句话的意图，再按人设和上下文决定是否愿意执行。举起右手、抬起右手、右手抬起来、把右手举高等可以表达同一意图，不按关键词命中执行。否定、引用、假设、询问能力、第三人称叙述不是要求立即执行。
        同意并准备执行时 decision=accept，action 给真实可用动作；拒绝时 decision=refuse、action=none，用 reply 自然解释，例如“我不想抬起来”。无动作时 decision=none。拒绝时禁止附带 motion。不要在同一轮一边拒绝一边选择执行；拒绝不会强制结束已有姿态。缺少明确 accept 的回复不会驱动新动作。
        用户可以表达情绪而不说动作名称，例如“恩雅羞一下”“能害羞一点吗”表示害羞表情；你同意时使用原作 snowbreak_home_shy（若可用），否则 gesture_shy。不要因用户没有说标准名称就只回复文字。也可在 accept 的 JSON 中返回 intent:"shy"／"nod"／"wave_left"／"wave_right"／"open_arms"，App 会将这些语义映射为当前可用动作；仍不从用户文本直接执行。
        reply 不要提及动作ID、JSON或此协议；需要的动作由播放器执行，不要仅用文字声称已执行。
        动作可选列表：
        \(entries.isEmpty ? "当前角色没有可用动作。" : entries)
        none：保持当前动作或自然待机。stop：结束正在播放的动作，回到待机。
        换装与模式切换只在用户明确请求时执行。用户说想看你不穿衣服、切换果体版时才选择 enya_outfit_nude；说穿回衣服时选择 enya_outfit_normal。否定、引用、假设和故事内容不是换装指令，不要自行脱衣或换装。不要声称模型切换是连续脱衣动画。
        可返回 affect={"emotion":"calm/happy/shy/affectionate/curious/sad/uncomfortable 中的一种","intensity":0.6,"closenessDelta":0.02,"reason":"不超过160字的内在原因"}。你依据人设、关系、上下文和真实触碰事件决定心情，不是看到单个词就反应；亲近度变化每轮最多±0.1。心情不是用户的真实心理诊断。
        可用语义 intent 统一选择：greet（招呼）、farewell（告别）、shy（害羞）、kiss（亲吻）、invite（邀请）、comfort（安慰）、nod、shake_head、wave_left、wave_right、open_arms。accept 时返回这些意图，即使 action=none，App 也会绑定到当前可用动作；害羞／亲近的 affect 在 accept 时也会绑定对应表现。想亲吻时应明确 intent=kiss；不能只在 reply 里写“亲了一下”。无可用映射时不能声称已完成。动作会与实际语音开始对齐。
        同意表现情绪时务必 decision=accept；不愿配合仍可 refuse，拒绝不会被心情强制覆盖。仅在语境适合时使用动作，不要每轮都动。用户拒绝某动作时不得执行它；要求停止时选 stop。
        难过、严肃或安慰场景不要无缘由跳舞、比耶或摇头。引用、故事中的动作词不等于用户要求你做动作。
        可以用点头配合真诚认同或鼓励；舞蹈只在用户请求或明确的轻松舞蹈语境选择。不可编造列表外动作。
        \(procedural)
        """
    }

    static func parse(_ content: String, actions: [String]) throws -> DialogueReply {
        let original = content.trimmingCharacters(in: .whitespacesAndNewlines)
        var payload = original
        if payload.hasPrefix("```"), payload.hasSuffix("```"), let line = payload.firstIndex(of: "\n") {
            payload = String(payload[payload.index(after: line)..<payload.index(payload.endIndex, offsetBy: -3)])
                .trimmingCharacters(in: .whitespacesAndNewlines)
        }
        if let object = try? JSONSerialization.jsonObject(with: Data(payload.utf8)),
           let envelope = object as? [String: Any], envelope["reply"] != nil || envelope["action"] != nil {
            guard let reply = envelope["reply"] as? String,
                  !reply.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty else {
                throw CompanionError.message("模型返回的回复格式不完整，请重试。")
            }
            var raw = (envelope["action"] as? String)?.trimmingCharacters(in: .whitespacesAndNewlines)
            let japanese = (envelope["speech_ja"] as? String)?.trimmingCharacters(in:.whitespacesAndNewlines)
            guard (japanese?.count ?? 0) <= 8_000 else {throw CompanionError.message("日文语音台词过长，请重试。")}
            let spoken = japanese?.isEmpty == false ? japanese:nil
            let affect:AffectDecision?
            if let object=envelope["affect"],let data=try? JSONSerialization.data(withJSONObject:object),let parsed=try? JSONDecoder().decode(AffectDecision.self,from:data),(try? parsed.validate()) != nil {affect=parsed}else{affect=nil}
            let recognizedDecision=["accept","refuse","none"].contains(envelope["decision"] as? String ?? "")
            guard envelope["decision"] as? String == "accept" else {
                return DialogueReply(text:reply.trimmingCharacters(in:.whitespacesAndNewlines),action:nil,spokenJapanese:spoken,affect:affect,hasBodyDecision:recognizedDecision)
            }
            let intent=(envelope["intent"] as? String) ?? ((raw == nil || raw == "none") ? CompanionBehavior.inferredIntent(affect):raw) ?? ""
            let aliases:[String:[String]]=["shy":["snowbreak_home_shy","gesture_shy"],"害羞":["snowbreak_home_shy","gesture_shy"],"羞一下":["snowbreak_home_shy","gesture_shy"],"nod":["gesture_nod","Yes"],"点头":["gesture_nod","Yes"],"wave_left":["gesture_wave_left"],"wave_right":["gesture_wave_right","hello"],"open_arms":["gesture_open_arms"],"张开双臂":["gesture_open_arms"]]
            if let selected=CompanionBehavior.resolve(intent,actions:actions){raw=selected}
            else if let choices=aliases[intent],let selected=choices.first(where:{actions.contains($0)}){raw=selected}
            let id = raw.flatMap{BodyCommand.resolve($0)?.rawValue} ?? raw
            let valid = id == "stop" || allowed(actions).contains(id ?? "")
            if id == "procedural", valid {
                if let object = envelope["motion"], let data = try? JSONSerialization.data(withJSONObject: object),
                   let motion = try? JSONDecoder().decode(MotionPlan.self, from: data), (try? motion.validate()) != nil {
                    return DialogueReply(text: reply.trimmingCharacters(in: .whitespacesAndNewlines), action: id, motion: motion,spokenJapanese:spoken,affect:affect,hasBodyDecision:recognizedDecision)
                }
                return DialogueReply(text: reply.trimmingCharacters(in: .whitespacesAndNewlines), action: nil,spokenJapanese:spoken,affect:affect,hasBodyDecision:recognizedDecision)
            }
            return DialogueReply(text: reply.trimmingCharacters(in: .whitespacesAndNewlines), action: valid ? id : nil,spokenJapanese:spoken,affect:affect,hasBodyDecision:recognizedDecision)
        }
        // A provider may ignore the JSON instruction. Plain text remains usable, with no guessed motion.
        guard !original.isEmpty else { throw CompanionError.message("没有收到有效回复。") }
        if payload.hasPrefix("{"), payload.contains("\"reply\"") || payload.contains("\"action\"") {
            throw CompanionError.message("模型返回的动作格式不完整，请重试。")
        }
        return DialogueReply(text: original, action: nil)
    }

    static func isStopRequest(_ text: String) -> Bool {
        let normalized = text.trimmingCharacters(in: .whitespacesAndNewlines.union(.punctuationCharacters))
        return ["停止动作", "停止跳舞", "别跳了", "停下", "停下来", "停止", "stop"].contains(normalized.lowercased())
    }
}
