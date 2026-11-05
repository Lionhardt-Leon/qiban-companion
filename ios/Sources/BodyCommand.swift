import Foundation

enum BodyCommand:String,CaseIterable {
    case raiseLeft = "raise_left_hand",raiseRight = "raise_right_hand",raiseBoth = "raise_both_hands",lower = "lower_hands"
    case turnLeft = "turn_left",turnRight = "turn_right",turnBack = "turn_back",front = "face_front"
    case closeEyes = "close_eyes",openEyes = "open_eyes"
    var label:String {
        switch self {case .raiseLeft:return "举起左手";case .raiseRight:return "举起右手";case .raiseBoth:return "举起双手";case .lower:return "放下双手"
        case .turnLeft:return "向左转身";case .turnRight:return "向右转身";case .turnBack:return "转过身展示背面";case .front:return "转回正面"
        case .closeEyes:return "闭上眼睛";case .openEyes:return "睁开眼睛"}
    }
    static func resolve(_ input:String)->BodyCommand? {
        guard input.count <= 80,!input.contains("["),!input.contains("“"),!input.contains("「"),!input.contains("\"") else {return nil}
        var text = input.trimmingCharacters(in:.whitespacesAndNewlines.union(.punctuationCharacters))
        if let comma = text.firstIndex(where:{"，,".contains($0)}),text.distance(from:text.startIndex,to:comma)<20 {
            let prefix = String(text[..<comma]);if prefix.hasSuffix("姐姐") || prefix.hasSuffix("酱") {text = String(text[text.index(after:comma)...])}
        }
        for _ in 0..<3 {if let prefix = ["可以请你","能不能请你","能不能","可以","请你","麻烦你","请","你"].first(where:{text.hasPrefix($0)}) {text.removeFirst(prefix.count)}else{break}}
        for suffix in ["给我看看","给我看","一下好吗","一下吧","一下","好吗","好不好","可以吗","吧","吗"] {if text.hasSuffix(suffix){text.removeLast(suffix.count)}}
        let map:[String:BodyCommand] = ["举起手":.raiseRight,"举手":.raiseRight,"抬起手":.raiseRight,"抬手":.raiseRight,
            "举起左手":.raiseLeft,"抬起左手":.raiseLeft,"抬左手":.raiseLeft,"举左手":.raiseLeft,
            "举起右手":.raiseRight,"抬起右手":.raiseRight,"抬右手":.raiseRight,"举右手":.raiseRight,
            "举起双手":.raiseBoth,"双手举起来":.raiseBoth,"举双手":.raiseBoth,"放下手":.lower,"放下双手":.lower,"把手放下":.lower,
            "向左转":.turnLeft,"向左转身":.turnLeft,"左转":.turnLeft,"向右转":.turnRight,"向右转身":.turnRight,"右转":.turnRight,
            "转过身":.turnBack,"转身":.turnBack,"转过去":.turnBack,"转回来":.front,"转回正面":.front,"面向我":.front,
            "闭眼":.closeEyes,"闭上眼":.closeEyes,"闭上眼睛":.closeEyes,"睁眼":.openEyes,"睁开眼":.openEyes,"睁开眼睛":.openEyes]
        return map[text]
    }
    static func asksAppearance(_ text:String)->Bool {
        ["你穿","你现在穿","你的衣","你现在的样子","你什么样","你长什么样","看看你自己","自己的样子","自身形象"].contains{text.contains($0)}
    }
}

struct BodyState {
    var outfit = "未确认"
    var eyes = "未确认"
    var hands = "未确认"
    var facing = "未确认"
    var lastResult = "尚无动作回执"
    var summary:String {"服饰：\(outfit)；眼睛：\(eyes)；双手：\(hands)；朝向：\(facing)；执行回执：\(lastResult)"}
}
