import Foundation

enum BodyGesture {
    static let catalog:[(id:String,meaning:String)] = [
        ("gesture_nod","轻轻点头"),("gesture_shake","轻轻摇头"),
        ("gesture_tilt_left","向自身左侧歪头"),("gesture_tilt_right","向自身右侧歪头"),
        ("gesture_look_left","向自身左侧转头看看"),("gesture_look_right","向自身右侧转头看看"),
        ("gesture_bow","轻微俯身致意"),("gesture_open_arms","轻轻张开双臂"),
        ("gesture_wave_left","用左手挥手"),("gesture_wave_right","用右手挥手")]
    static var ids:[String] {catalog.map(\.id)}
    static func plan(_ id:String)->MotionPlan? {
        func head(_ vectors:[[Float]])->MotionPlan {MotionPlan(duration:3,poses:vectors.enumerated().map{.init(time:Double($0.offset)*3/Double(vectors.count-1),head:$0.element)})}
        switch id {
        case "gesture_nod":return head([[0,0,0],[0,12,0],[0,-4,0],[0,8,0],[0,0,0]])
        case "gesture_shake":return head([[0,0,0],[-18,0,0],[18,0,0],[-10,0,0],[0,0,0]])
        case "gesture_tilt_left":return head([[0,0,0],[0,0,-12],[0,0,-12],[0,0,0]])
        case "gesture_tilt_right":return head([[0,0,0],[0,0,12],[0,0,12],[0,0,0]])
        case "gesture_look_left":return head([[0,0,0],[-25,0,0],[-25,0,0],[0,0,0]])
        case "gesture_look_right":return head([[0,0,0],[25,0,0],[25,0,0],[0,0,0]])
        case "gesture_bow":return MotionPlan(duration:3,poses:[.init(time:0,head:[0,0,0],torso:[0,0,0]),.init(time:1.2,head:[0,8,0],torso:[0,10,0]),.init(time:3,head:[0,0,0],torso:[0,0,0])])
        case "gesture_open_arms":return MotionPlan(duration:4,poses:[.init(time:0,leftHand:[0,0,0],rightHand:[0,0,0]),.init(time:1.5,leftHand:[-0.55,0.4,0.12],rightHand:[0.55,0.4,0.12]),.init(time:2.5,leftHand:[-0.55,0.4,0.12],rightHand:[0.55,0.4,0.12]),.init(time:4,leftHand:[0,0,0],rightHand:[0,0,0])])
        case "gesture_wave_left","gesture_wave_right":
            let left=id.hasSuffix("left"),sign:Float=left ? -1:1
            let values:[[Float]]=[[0,0,0],[sign*0.3,0.9,0.15],[sign*0.5,0.85,0.15],[sign*0.2,0.9,0.15],[sign*0.5,0.85,0.15],[0,0,0]]
            return MotionPlan(duration:4,poses:values.enumerated().map{.init(time:Double($0.offset)*0.8,leftHand:left ? $0.element:nil,rightHand:left ? nil:$0.element)})
        default:return nil
        }
    }
}
