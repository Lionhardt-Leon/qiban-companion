import XCTest
import SceneKit
import simd
@testable import QibanCompanion

final class EmbodimentTests: XCTestCase {
    private func fixture() -> (HumanoidRig,[simd_float4x4]) {
        var nodes: [SkeletonMotion.Node] = [], local: [simd_float4x4] = []
        @discardableResult func add(_ name:String,_ parent:Int?,_ xyz:SIMD3<Float>) -> Int {
            var m = matrix_identity_float4x4; m[3] = SIMD4(xyz,1)
            let values = (0..<4).flatMap { r in (0..<4).map { c in m[c][r] } }
            nodes.append(.init(name:name,parent:parent,matrix:values)); local.append(m); return nodes.count-1
        }
        let root = add("Root_M",nil,SIMD3(0,0.9,0))
        let chest = add("Chest_M",root,SIMD3(0,0.4,0))
        add("Head_M",chest,SIMD3(0,0.25,0))
        for side in ["L","R"] {
            let x:Float = side == "L" ? -1 : 1
            let shoulder = add("Shoulder_"+side,chest,SIMD3(x*0.2,0.1,0))
            let elbow = add("Elbow_"+side,shoulder,SIMD3(0,-0.3,0.02))
            add("Wrist_"+side,elbow,SIMD3(0,-0.3,-0.02))
            let hip = add("Hip_"+side,root,SIMD3(x*0.07,0,0))
            let knee = add("Knee_"+side,hip,SIMD3(0,-0.4,0.04))
            add("Ankle_"+side,knee,SIMD3(0,-0.4,-0.04))
            add("titForPhysics_"+side,chest,SIMD3(x*0.06,0,0.08))
            add("buttocksForPhysics_"+side,root,SIMD3(x*0.06,0,-0.08))
        }
        return (HumanoidRig(nodes:nodes,rest:local),local)
    }

    func testFourLimbIKPreservesLengthsAndReachesTargets() {
        let (rig,rest) = fixture()
        XCTAssertEqual(rig.limbs.count,4)
        for (_,limb) in rig.limbs {
            var local = rest
            let start = HumanoidRig.position(rig.restWorld[limb.upper])
            let target = start + SIMD3<Float>(limb.side*0.12,-0.35,0.18)
            rig.solve(limb,target:target,local:&local)
            let w = rig.world(local)
            let a = HumanoidRig.position(w[limb.upper]), b = HumanoidRig.position(w[limb.middle]), c = HumanoidRig.position(w[limb.end])
            XCTAssertLessThan(simd_distance(c,target),0.001)
            XCTAssertEqual(simd_distance(a,b),simd_distance(start,HumanoidRig.position(rig.restWorld[limb.middle])),accuracy:0.0001)
            XCTAssertEqual(simd_distance(b,c),simd_distance(HumanoidRig.position(rig.restWorld[limb.middle]),HumanoidRig.position(rig.restWorld[limb.end])),accuracy:0.0001)
            let orientation = simd_quatf(limb.isLeg ? w[limb.end] : local[limb.end])
            let original = simd_quatf(limb.isLeg ? rig.restWorld[limb.end] : rest[limb.end])
            XCTAssertEqual(abs(simd_dot(orientation.vector,original.vector)),1,accuracy:0.0001)
        }
    }

    func testNeutralKeyframePreservesAnimatedPoseWithRotatedBoneAxes() {
        let (rig,rest) = fixture()
        var animated = rest
        rig.rotateWorld(node:rig.named["Shoulder_L"]!,rotation:simd_quatf(angle:0.15,axis:rig.forward),local:&animated)
        let before = animated
        rig.pose(.init(time:0,leftHand:[0,0,0],rightHand:[0,0,0],leftFoot:[0,0,0],rightFoot:[0,0,0],head:[0,0,0],torso:[0,0,0]),local:&animated)
        XCTAssertEqual(animated,before,"Neutral keyframes must not force animated limbs back to the bind pose")
        var basis = Array(repeating:matrix_identity_float4x4,count:rest.count)
        for side in ["L","R"] {
            let sign:Float = side == "L" ? 1 : -1
            for name in ["Shoulder_","Elbow_","Wrist_"] {
                basis[rig.named[name+side]!] = simd_float4x4(simd_quatf(angle:sign * .pi/2,axis:SIMD3(0,0,1)))
            }
        }
        let rotated = rest.indices.map { i in
            (rig.nodes[i].parent.map { simd_inverse(basis[$0]) } ?? matrix_identity_float4x4) * rest[i] * basis[i]
        }
        let rebound = HumanoidRig(nodes:rig.nodes,rest:rotated)
        for side in ["L","R"] {
            var local = rotated
            let wrist = rebound.named["Wrist_"+side]!
            let pose = side == "L" ? MotionPlan.Pose(time:1,leftHand:[-0.2,1,0.25]) : MotionPlan.Pose(time:1,rightHand:[0.2,1,0.25])
            rebound.pose(pose,local:&local)
            XCTAssertEqual(local[wrist],rotated[wrist],"A raised arm must not counter-rotate its wrist")
        }
    }

    func testBreathingDoesNotScaleHeadOrArmBones() {
        let (rig,rest) = fixture(); let dynamics = BodyDynamics(); var local = rest
        let before = rig.world(rest)
        dynamics.apply(frame:.init(elapsed:1.1,delta:1/60,settings:.init(breathing:true,physics:false,strength:0)),rig:rig,local:&local)
        let after = rig.world(local)
        for name in ["Chest_M","Head_M","Shoulder_L","Wrist_R"] {
            let i = rig.named[name]!
            for c in 0..<3 { XCTAssertEqual(simd_length(before[i][c]),simd_length(after[i][c]),accuracy:0.000001) }
        }
    }

    func testSmallOffsetDoesNotPopNearlyStraightElbowsAtNeutral() {
        let (rig,rest) = fixture()
        for amount:Float in [-0.0001,0.0001] {
            var local = rest
            rig.pose(.init(time:1,leftHand:[0,amount,0]),local:&local)
            let wrist = rig.named["Wrist_L"]!, elbow = rig.named["Elbow_L"]!
            XCTAssertLessThan(simd_distance(HumanoidRig.position(rig.world(local)[wrist]),HumanoidRig.position(rig.restWorld[wrist])),0.0002)
            let dot = min(Float(1),abs(simd_dot(simd_quatf(local[elbow]).vector,simd_quatf(rest[elbow]).vector)))
            XCTAssertLessThan(2*acos(dot)*180/Float.pi,0.5)
        }
    }

    func testUnreachableTargetsClampWithoutStretchAndFootDoesNotGoBelowFloor() {
        let (rig,rest) = fixture(); var local = rest
        let hand = rig.limbs["leftHand"]!
        rig.solve(hand,target:SIMD3(100,100,100),local:&local)
        let w = rig.world(local)
        XCTAssertLessThan(simd_distance(HumanoidRig.position(w[hand.end]),HumanoidRig.position(w[hand.upper])),0.61)
        local = rest
        rig.pose(.init(time:1,leftFoot:[0,-0.35,0]),local:&local)
        let foot = rig.limbs["leftFoot"]!.end
        XCTAssertGreaterThanOrEqual(rig.world(local)[foot][3].y,rig.restWorld[foot][3].y-0.001)
    }

    func testMotionValidationAndStructuredResponseGate() throws {
        let plan = MotionPlan(duration:3,poses:[.init(time:0,leftHand:[0,0,0]),.init(time:3,leftHand:[0,0.8,0.2])])
        try plan.validate()
        XCTAssertEqual(plan.pose(at:1.5).leftHand![1],0.4,accuracy:0.0001)
        let data = try JSONSerialization.data(withJSONObject:["reply":"试着抬起手。","decision":"accept","action":"procedural",
            "motion":JSONSerialization.jsonObject(with:JSONEncoder().encode(plan))])
        let text = String(data:data,encoding:.utf8)!
        let valid = try DialogueMotion.parse(text,actions:["procedural"])
        XCTAssertEqual(valid.motion,plan)
        XCTAssertNil(try DialogueMotion.parse(text,actions:["hello"]).motion)
        XCTAssertNil(try DialogueMotion.parse(#"{"reply":"你好","decision":"accept","action":"procedural","motion":{"duration":999,"poses":[]}}"#,actions:["procedural"]).action)
        XCTAssertThrowsError(try MotionPlan(duration:2,poses:[.init(time:0,head:[200,0,0]),.init(time:2)]).validate())
        XCTAssertThrowsError(try MotionPlan(duration:2,poses:[.init(time:1),.init(time:2)]).validate())
        XCTAssertThrowsError(try MotionPlan(duration:2,poses:[.init(time:0),.init(time:2,leftFoot:[0,0.8,0])]).validate())
    }

    func testProceduralTransitionsAndStopReturnToBasePose() throws {
        let (rig,rest) = fixture(); let player = ProceduralPosePlayer(); var local = rest
        let pose = MotionPlan.Pose(time:1,leftHand:[0,0.8,0.3],head:[15,0,0])
        player.apply(.init(token:1,pose:pose,enter:0,exit:0),rig:rig,local:&local)
        XCTAssertEqual(local[rig.named["Shoulder_L"]!],rest[rig.named["Shoulder_L"]!])
        player.apply(.init(token:1,pose:pose,enter:1,exit:0),rig:rig,local:&local)
        let moved = local
        XCTAssertNotEqual(local[rig.named["Shoulder_L"]!],rest[rig.named["Shoulder_L"]!])
        local = rest
        player.apply(.init(token:2,pose:.init(time:0),enter:0,exit:0),rig:rig,local:&local)
        XCTAssertEqual(local[rig.named["Shoulder_L"]!],moved[rig.named["Shoulder_L"]!])
        local = rest
        player.apply(.init(token:2,pose:pose,enter:1,exit:1),rig:rig,local:&local)
        for (a,b) in zip(local,rest) { for c in 0..<4 { XCTAssertLessThan(simd_length(a[c]-b[c]),0.0001) } }
        var director = ProceduralDirector()
        try director.play(.init(duration:3,poses:[.init(time:0),.init(time:3)]),now:10)
        XCTAssertEqual(director.sample(now:10)?.enter,0)
        director.cancel(now:11)
        XCTAssertNil(director.sample(now:11.31))
    }

    func testSpringFrameRatesSettleAndLongPauseResets() {
        func simulate(_ fps:Int) -> DampedSpring {
            var spring = DampedSpring(); spring.velocity = SIMD3(0.05,0.08,0)
            for _ in 0..<fps { spring.step(delta:1/Double(fps),acceleration:.zero,limit:0.02) }
            return spring
        }
        let a = simulate(30), b = simulate(60), c = simulate(120)
        XCTAssertLessThan(simd_distance(a.offset,b.offset),0.00001)
        XCTAssertLessThan(simd_distance(b.offset,c.offset),0.00001)
        XCTAssertLessThan(simd_length(c.offset),0.0001)
        var spring = DampedSpring(); spring.velocity = SIMD3(repeating:100)
        spring.step(delta:0.016,acceleration:SIMD3(repeating:100),limit:0.02)
        XCTAssertLessThanOrEqual(simd_length(spring.offset),0.020001)
        spring.step(delta:3,acceleration:.zero,limit:0.02)
        XCTAssertEqual(spring.offset,.zero)
    }

    func testBreathingMovesChestAndTouchDrivesWeightedPhysicsRoots() {
        let (rig,rest) = fixture(); let body = BodyDynamics(); var local = rest
        let off = BodyDynamicsSettings(breathing:false,physics:false,strength:0.65)
        body.apply(frame:.init(elapsed:1.1,delta:1/60,settings:off),rig:rig,local:&local)
        XCTAssertEqual(local,rest)
        body.apply(frame:.init(elapsed:1.1,delta:1/60,settings:.init(breathing:true,physics:false,strength:0.65)),rig:rig,local:&local)
        XCTAssertNotEqual(local[rig.named["Chest_M"]!],rest[rig.named["Chest_M"]!])
        XCTAssertEqual(local[rig.named["Root_M"]!],rest[rig.named["Root_M"]!])
        body.reset(); body.touch(region:"chest",at:0)
        local = rest
        let settings = BodyDynamicsSettings(breathing:false,physics:true,strength:1)
        body.apply(frame:.init(elapsed:0,delta:1/60,settings:settings),rig:rig,local:&local)
        let chest = rig.named["titForPhysics_L"]!
        XCTAssertGreaterThan(simd_length(local[chest][3]-rest[chest][3]),0.00001)
        for i in 1...180 {
            local = rest
            body.apply(frame:.init(elapsed:Double(i)/60,delta:1/60,settings:settings),rig:rig,local:&local)
        }
        XCTAssertLessThan(simd_length(local[chest][3]-rest[chest][3]),0.00001)
    }

    func testTouchRegionsFollowCurrentHeadAndIgnoreBackground() {
        let (rig,rest) = fixture()
        func project(_ p:SIMD3<Float>) -> SCNVector3 { SCNVector3(200+p.x*300,600-p.y*300,0.5) }
        let original = CharacterTouchResolver.regions(rig:rig,world:rig.world(rest))
        let forehead = original.first { $0.id == "forehead" }!
        let p = project(forehead.a)
        XCTAssertEqual(CharacterTouchResolver.resolve(point:CGPoint(x:CGFloat(p.x),y:CGFloat(p.y)),regions:original,project:project)?.id,"forehead")
        XCTAssertNil(CharacterTouchResolver.resolve(point:CGPoint(x:0,y:0),regions:original,project:project))
        var local = rest
        rig.pose(.init(time:1,head:[25,10,10]),local:&local)
        let updated = CharacterTouchResolver.regions(rig:rig,world:rig.world(local)).first { $0.id == "forehead" }!
        XCTAssertGreaterThan(simd_distance(forehead.a,updated.a),0.01)
        let touch = CharacterTouch(region:"forehead",label:"额头",kind:"轻抚")
        XCTAssertTrue(touch.message.contains("轻抚了你的额头"))
        XCTAssertFalse(touch.message.contains("CGPoint"))
    }
}
