import SwiftUI
import SceneKit
import simd

@MainActor final class CompanionStage: ObservableObject {
    @Published private(set) var scene: SCNScene?
    @Published private(set) var name = "我的伙伴"
    @Published private(set) var loading = false
    @Published private(set) var error: String?
    @Published private(set) var backgrounds: [String: UIImage] = [:]
    @Published private(set) var actions: [CharacterAction] = []
    @Published private(set) var activeAction: String?
    @Published private(set) var touchStatus: String?
    @Published private(set) var supportsProcedural = false
    var dialogueActions: [String] { actions.map(\.id) + (supportsProcedural ? ["procedural"] : []) }
    private(set) var interactionRevision = 0
    private var director = ActionDirector()
    private var procedural = ProceduralDirector()
    private var dynamicsSettings = EmbodimentPreferences.dynamics()
    private var gazeTarget:SIMD3<Float>?
    private var gazeUntil:TimeInterval=0
    private var touchGazeUntil:TimeInterval=0
    func gaze(x:CGFloat,y:CGFloat,touch:Bool=false) {
        let now=ProcessInfo.processInfo.systemUptime
        if !touch,now<touchGazeUntil{return};if touch{touchGazeUntil=now+1.6}
        guard let scene=scene,let camera=scene.rootNode.childNodes.first(where:{$0.camera != nil}),let model=scene.rootNode.childNodes.first(where:{$0.camera == nil}) else{return}
        let point=camera.convertPosition(SCNVector3(Float(max(-1,min(1,x)))*displayHeight*0.15,Float(max(-1,min(1,y)))*displayHeight*0.15,0),to:model)
        gazeTarget=SIMD3(point.x,point.y,point.z);gazeUntil=now+1.6
    }
    private var elapsed = 0.0
    private var lastTouchTime = -10.0
    private var loaded: LoadedCharacter?
    private var stamp: Date?
    private var playback: Task<Void, Never>?
    private var displayBase = matrix_identity_float4x4
    private var displayCenter = SIMD3<Float>.zero
    private var displayHeight:Float = 1
    private var presentation = ScenePresentation.load()
    func setPresentation(_ value:ScenePresentation) {
        presentation = value.validated()
        scene?.rootNode.childNodes.first(where:{$0.camera == nil})?.simdTransform = presentation.transform(base:displayBase,center:displayCenter,height:displayHeight)
    }

    func refresh() async {
        let library = CharacterLibrary()
        guard library.hasCurrent, !loading else { return }
        let modified = try? library.currentURL.resourceValues(forKeys: [.contentModificationDateKey]).contentModificationDate
        if scene != nil, modified == stamp { return }
        stop()
        loading = true; error = nil
        defer { loading = false }
        do {
            let result = try await Task.detached(priority: .userInitiated) {
                try CharacterLoader.load(url: library.currentURL)
            }.value
            let cameras = result.scene.rootNode.childNodes.filter { $0.camera != nil }
            if let camera = cameras.first, let model = result.scene.rootNode.childNodes.first(where: { $0.camera == nil }) {
                let bounds = model.boundingBox
                let height = max(bounds.max.y - bounds.min.y, 0.1)
                camera.camera?.usesOrthographicProjection = true
                camera.camera?.orthographicScale = Double(height) * 0.43
                camera.position.y = height * 0.17
                displayBase = model.simdTransform
                displayCenter = SIMD3((bounds.min.x+bounds.max.x)/2,(bounds.min.y+bounds.max.y)/2,(bounds.min.z+bounds.max.z)/2)
                displayHeight = height
            }
            result.scene.background.contents = UIColor.clear
            var images: [String: UIImage] = [:]
            for (key, value) in result.package?.backgrounds ?? [:] {
                guard let data = Data(base64Encoded: value), data.count <= 15_000_000,
                      let image = UIImage(data: data), image.size.width <= 8192, image.size.height <= 8192 else {
                    throw CompanionError.message("场景背景无效。")
                }
                images[key] = image
            }
            loaded = result; scene = result.scene; backgrounds = images; stamp = modified
            actions = result.package?.actions ?? []
            supportsProcedural = result.skeleton?.rig.limbs.count == 4
            StageLighting.install(result.scene,settings: EmbodimentPreferences.lighting())
            name = result.name.contains("Yuki") ? "Yuki" : result.name
            setPresentation(presentation)
        } catch { self.error = error.localizedDescription }
    }

    func start() {
        guard playback == nil, let loaded = loaded else { return }
        dynamicsSettings = EmbodimentPreferences.dynamics()
        StageLighting.update(loaded.scene,settings: EmbodimentPreferences.lighting())
        loaded.skeleton?.resetDynamics()
        elapsed = 0; lastTouchTime = -10
        playback = Task {
            let start = ProcessInfo.processInfo.systemUptime
            var deadline = start
            var previous = start
            do {
                while !Task.isCancelled {
                    let elapsed = ProcessInfo.processInfo.systemUptime - start
                    self.elapsed = elapsed
                    let now = ProcessInfo.processInfo.systemUptime
                    let delta = now - previous; previous = now
                    let blinkPhase = elapsed.truncatingRemainder(dividingBy: 4.2)
                    let blink = Float(max(0, 1 - abs(blinkPhase - 4) / 0.09))
                    let action = director.sample(now: ProcessInfo.processInfo.systemUptime)
                    let freeMotion = procedural.sample(now: now)
                    if action == nil, freeMotion == nil, activeAction != nil { activeAction = nil }
                    if elapsed - lastTouchTime > 3, touchStatus != nil { touchStatus = nil }
                    if let skeleton = loaded.skeleton {
                        try skeleton.apply(sample: skeleton.motion.sample(at: elapsed), blink: blink, mouth: 0, smile: 0, gazeTarget:now<gazeUntil ? gazeTarget:nil,action: action,
                            embodiment: EmbodimentFrame(elapsed: elapsed, delta: delta, settings: dynamicsSettings, procedural: freeMotion))
                    } else if let package = loaded.package {
                        try package.applyExpression(to: loaded.scene, blink: blink, mouth: 0, smile: 0)
                    }
                    let interval = loaded.skeleton?.usesGPUSkinning == true ? 1.0 / 60 : 1.0 / 30
                    deadline = max(deadline + interval, ProcessInfo.processInfo.systemUptime)
                    let delay = max(0.001, deadline - ProcessInfo.processInfo.systemUptime)
                    try await Task.sleep(nanoseconds: UInt64(delay * 1_000_000_000))
                }
            } catch is CancellationError { }
            catch { self.error = error.localizedDescription }
        }
    }
    func playAction(_ id: String, automatic: Bool = false) {
        guard let action = actions.first(where: { $0.id == id }), loaded?.skeleton != nil else { return }
        if !automatic { interactionRevision += 1 }
        procedural.cancel(now: ProcessInfo.processInfo.systemUptime)
        director.play(id: id, duration: action.duration, now: ProcessInfo.processInfo.systemUptime)
        activeAction = action.name
    }
    func stopAction() {
        interactionRevision += 1
        director.cancel(now: ProcessInfo.processInfo.systemUptime); procedural.cancel(now: ProcessInfo.processInfo.systemUptime)
    }
    func performDialogueAction(_ id: String, motion: MotionPlan? = nil) {
        if id == "stop" { stopAction() }
        else if id == "procedural", supportsProcedural, let motion = motion {
            do {
                try procedural.play(motion,now:ProcessInfo.processInfo.systemUptime)
                director.cancel(now:ProcessInfo.processInfo.systemUptime); activeAction = "自由骨骼动作"
            } catch { self.error = error.localizedDescription }
        }
        else { playAction(id, automatic: true) }
    }
    func demoMotion() {
        guard supportsProcedural else { return }
        interactionRevision += 1
        let plan = MotionPlan(duration:4,poses:[.init(time:0,leftHand:[0,0,0]),
            .init(time:1.5,leftHand:[-0.3,0.85,0.35],head:[0,0,8]),.init(time:4,leftHand:[0,0,0],head:[0,0,0])])
        performDialogueAction("procedural",motion:plan)
    }
    func touch(in view: SCNView, point: CGPoint, kind: String) -> CharacterTouch? {
        guard elapsed - lastTouchTime > 1.5, let skeleton = loaded?.skeleton, !skeleton.posedWorld.isEmpty,
              let model = scene?.rootNode.childNodes.first(where: { $0.camera == nil }) else { return nil }
        let regions = CharacterTouchResolver.regions(rig:skeleton.rig,world:skeleton.posedWorld)
        let hit = CharacterTouchResolver.resolve(point:point,regions:regions) { source in
            view.projectPoint(model.convertPosition(SCNVector3(-source.x,source.y,source.z),to:nil))
        }
        guard let hit = hit else { return nil }
        interactionRevision += 1; lastTouchTime = elapsed
        touchStatus = "\(kind)了\(hit.label)"
        skeleton.receiveTouch(region:hit.id,elapsed:elapsed)
        if UserDefaults.standard.object(forKey:"touchHaptics") as? Bool ?? true { UIImpactFeedbackGenerator(style:.light).impactOccurred() }
        return CharacterTouch(region:hit.id,label:hit.label,kind:kind)
    }
    func stop() {
        interactionRevision += 1; playback?.cancel(); playback = nil; director = ActionDirector()
        procedural = ProceduralDirector(); activeAction = nil; touchStatus = nil
    }
}

struct ImmersiveCharacterView: UIViewRepresentable {
    let scene: SCNScene
    let backgroundImage: UIImage?
    let showBackground: Bool
    var onTouch: ((SCNView, CGPoint, String) -> Void)? = nil
    var onEdit: ((String,CGPoint,CGSize) -> Void)? = nil
    func makeCoordinator() -> Coordinator { Coordinator(onTouch:onTouch,onEdit:onEdit) }
    final class Coordinator: NSObject {
        var onTouch: ((SCNView,CGPoint,String) -> Void)?
        var onEdit: ((String,CGPoint,CGSize) -> Void)?
        init(onTouch: ((SCNView,CGPoint,String) -> Void)?,onEdit:((String,CGPoint,CGSize)->Void)?) { self.onTouch = onTouch;self.onEdit = onEdit }
        @objc func tap(_ gesture: UITapGestureRecognizer) {
            guard let view = gesture.view as? SCNView else { return }
            onTouch?(view,gesture.location(in:view),"轻触")
        }
        @objc func stroke(_ gesture: UIPanGestureRecognizer) {
            guard let view = gesture.view as? SCNView else { return }
            if let edit = onEdit,gesture.state == .changed {
                edit("drag",gesture.translation(in:view),view.bounds.size);gesture.setTranslation(.zero,in:view);return
            }
            guard onEdit == nil,gesture.state == .ended else { return }
            let movement = gesture.translation(in:view)
            guard hypot(movement.x,movement.y) > 12 else { return }
            onTouch?(view,gesture.location(in:view),"轻抚")
        }
        @objc func pinch(_ gesture:UIPinchGestureRecognizer) {
            if let view = gesture.view,gesture.state == .changed { onEdit?("pinch",CGPoint(x:gesture.scale,y:0),view.bounds.size);gesture.scale = 1 }
        }
    }
    func makeUIView(context: Context) -> SCNView {
        let view = CompanionSceneView()
        view.backgroundColor = .clear
        view.isOpaque = false
        view.antialiasingMode = .multisampling4X
        view.preferredFramesPerSecond = 60
        view.autoenablesDefaultLighting = true
        view.scene = scene
        view.pointOfView = scene.rootNode.childNodes.first { $0.camera != nil }
        view.companionBackground = showBackground ? backgroundImage : nil
        view.showCompanionBackground = showBackground
        let tap = UITapGestureRecognizer(target:context.coordinator,action:#selector(Coordinator.tap(_:)))
        let pan = UIPanGestureRecognizer(target:context.coordinator,action:#selector(Coordinator.stroke(_:)))
        tap.require(toFail:pan)
        view.addGestureRecognizer(tap); view.addGestureRecognizer(pan)
        view.addGestureRecognizer(UIPinchGestureRecognizer(target:context.coordinator,action:#selector(Coordinator.pinch(_:))))
        return view
    }
    func updateUIView(_ view: SCNView, context: Context) {
        context.coordinator.onTouch = onTouch
        context.coordinator.onEdit = onEdit
        if view.scene !== scene {
            view.scene = scene
            view.pointOfView = scene.rootNode.childNodes.first { $0.camera != nil }
        }
        if let view = view as? CompanionSceneView {
            view.companionBackground = showBackground ? backgroundImage : nil
            view.showCompanionBackground = showBackground
        }
    }
}

/// Render the background in the same surface as the character. SceneKit may clear
/// its drawable opaquely even when the containing UIView is transparent.
private final class CompanionSceneView: SCNView {
    var companionBackground: UIImage? { didSet { updateBackground() } }
    var showCompanionBackground = true { didSet { updateBackground() } }
    override func layoutSubviews() {
        super.layoutSubviews()
        updateBackground()
    }
    private func updateBackground() {
        guard let background = scene?.background else { return }
        background.contentsTransform = SCNMatrix4Identity
        guard showCompanionBackground, let image = companionBackground else {
            background.contents = showCompanionBackground ? UIColor(red: 0.16, green: 0.12, blue: 0.2, alpha: 1) : UIColor.black
            return
        }
        background.contents = image
        let size = bounds.size
        guard size.width > 0, size.height > 0 else { return }
        let imageAspect = image.size.width / image.size.height
        let viewAspect = size.width / size.height
        var transform = SCNMatrix4Identity
        if imageAspect > viewAspect {
            transform.m11 = Float(viewAspect / imageAspect)
            transform.m41 = (1 - transform.m11) / 2
        } else {
            transform.m22 = Float(imageAspect / viewAspect)
            transform.m42 = (1 - transform.m22) / 2
        }
        background.contentsTransform = transform
    }
}
