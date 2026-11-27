import SwiftUI
import ARKit
import SceneKit
import CoreImage
import ImageIO
import AVFoundation
import simd

enum ARScalePreset: String, CaseIterable {
    case tabletop
    case realScale

    var label: String {
        switch self {
        case .tabletop: return "桌面手办"
        case .realScale: return "1:1 等身"
        }
    }
    var scale: Float {
        switch self {
        case .tabletop: return 0.28
        case .realScale: return 1.0
        }
    }
}

@MainActor final class SnowbreakARController: NSObject, ObservableObject {
    @Published private(set) var active = false
    @Published private(set) var placed = false
    @Published private(set) var planeDetected = false
    @Published private(set) var roomHidden = true
    @Published private(set) var statusHint = ""
    @Published private(set) var scalePreset: ARScalePreset = .tabletop
    @Published private(set) var userScale: Float = 0.28
    @Published private(set) var userYaw: Float = 0
    @Published private(set) var heightOffset: Float = 0

    var onFrame: (([Float], [Float], Float, Float) -> Void)?
    private weak var arView: ARSCNView?
    private var anchorTransform: simd_float4x4 = matrix_identity_float4x4
    private var hasAnchor = false
    private var activeAnchor: ARAnchor?
    private var detectedPlanes: [UUID: simd_float4x4] = [:]
    private var liveSurfacePos: SIMD3<Float>?
    private var reticleNode: SCNNode?
    private var showReticle = true
    private let ciContext = CIContext(options: [.cacheIntermediates: false])
    private var generation = 0
    private var sessionRunning = false

    func attach(_ view: ARSCNView) {
        arView = view
        view.session.delegate = self
        installReticleIfNeeded(on: view)
        if active && !sessionRunning {
            runSession()
        }
    }

    func detach(_ view: ARSCNView) {
        if arView === view {
            view.session.pause()
            view.session.delegate = nil
            reticleNode?.removeFromParentNode()
            reticleNode = nil
            arView = nil
            sessionRunning = false
        }
    }

    private func installReticleIfNeeded(on view: ARSCNView) {
        guard reticleNode == nil else { return }
        let root = SCNNode()
        let ring = SCNTorus(ringRadius: 0.14, pipeRadius: 0.005)
        let ringMat = SCNMaterial()
        ringMat.diffuse.contents = UIColor.white.withAlphaComponent(0.92)
        ringMat.emission.contents = UIColor(red: 0.55, green: 0.92, blue: 1.0, alpha: 0.85)
        ring.materials = [ringMat]
        let ringNode = SCNNode(geometry: ring)

        let dot = SCNCylinder(radius: 0.018, height: 0.003)
        let dotMat = SCNMaterial()
        dotMat.diffuse.contents = UIColor(red: 0.45, green: 0.95, blue: 0.85, alpha: 0.95)
        dotMat.emission.contents = UIColor(red: 0.45, green: 0.95, blue: 0.85, alpha: 0.85)
        dot.materials = [dotMat]
        let dotNode = SCNNode(geometry: dot)

        root.addChildNode(ringNode)
        root.addChildNode(dotNode)
        root.isHidden = true
        view.scene.rootNode.addChildNode(root)
        reticleNode = root
    }

    func setShowReticle(_ visible: Bool) {
        showReticle = visible
        if !visible { reticleNode?.isHidden = true }
    }

    func start() {
        guard ARWorldTrackingConfiguration.isSupported else {
            statusHint = "当前设备不支持 ARKit 空间追踪"
            return
        }
        generation += 1
        let ticket = generation
        statusHint = "正在启动 AR 空间扫描…"
        Task {
            let allowed = await AVCaptureDevice.requestAccess(for: .video)
            guard generation == ticket else { return }
            guard allowed else {
                statusHint = "请在系统设置中允许后置主摄访问以使用 AR 模式"
                return
            }
            active = true
            placed = false
            planeDetected = false
            hasAnchor = false
            activeAnchor = nil
            detectedPlanes.removeAll()
            liveSurfacePos = nil
            userYaw = 0
            heightOffset = 0
            showReticle = true
            statusHint = "稍微低头扫一下地面或桌面，识别平面后自动贴地"
            runSession()
        }
    }

    func stop() {
        generation += 1
        active = false
        placed = false
        planeDetected = false
        hasAnchor = false
        activeAnchor = nil
        detectedPlanes.removeAll()
        liveSurfacePos = nil
        heightOffset = 0
        statusHint = ""
        sessionRunning = false
        reticleNode?.isHidden = true
        arView?.session.pause()
    }

    func pauseSession() {
        sessionRunning = false
        arView?.session.pause()
    }

    func resumeSessionIfActive() {
        guard active else { return }
        runSession()
    }

    private func runSession() {
        guard let view = arView, ARWorldTrackingConfiguration.isSupported else { return }
        let config = ARWorldTrackingConfiguration()
        config.planeDetection = [.horizontal]
        config.isLightEstimationEnabled = true
        config.environmentTexturing = .automatic
        // Do not hijack AVAudioSession so Voice Call and TTS continue smoothly in AR.
        config.providesAudioData = false
        view.session.run(config, options: [.resetTracking, .removeExistingAnchors])
        sessionRunning = true
    }

    func setScalePreset(_ preset: ARScalePreset) {
        scalePreset = preset
        userScale = preset.scale
    }

    func adjustScale(factor: Float) {
        userScale = min(2.4, max(0.10, userScale * factor))
    }

    func adjustYaw(radians: Float) {
        userYaw += radians
    }

    func adjustHeight(delta: Float) {
        heightOffset = min(1.5, max(-1.5, heightOffset + delta))
    }

    func snapToDetectedFloor() {
        heightOffset = 0
        guard let frame = arView?.session.currentFrame else { return }
        let camY = frame.camera.transform.columns.3.y
        if let planeY = bestDetectedPlaneY(cameraY: camY, preferFloor: scalePreset == .realScale) {
            var pos = SIMD3<Float>(anchorTransform.columns.3.x, planeY, anchorTransform.columns.3.z)
            if !hasAnchor, let live = liveSurfacePos {
                pos = SIMD3<Float>(live.x, planeY, live.z)
            }
            commitAnchor(at: pos)
            statusHint = "已自动吸附到识别平面"
        } else if let view = arView {
            let centerLow = CGPoint(x: view.bounds.midX, y: view.bounds.height * 0.68)
            _ = placeAtScreenPoint(centerLow)
        }
    }

    func setRoomHidden(_ hidden: Bool) {
        roomHidden = hidden
    }

    func resetPlacement() {
        if let old = activeAnchor { arView?.session.remove(anchor: old) }
        activeAnchor = nil
        hasAnchor = false
        placed = false
        userYaw = 0
        heightOffset = 0
        showReticle = true
        statusHint = "对准地面或桌面点击放置，或点上方「确认放置」"
    }

    func confirmCurrentPlacement() {
        if let live = liveSurfacePos {
            commitAnchor(at: live)
            return
        }
        placeInFront()
    }

    @discardableResult
    func placeAtScreenPoint(_ point: CGPoint) -> Bool {
        guard let view = arView else { return false }
        for target in [ARRaycastQuery.Target.existingPlaneGeometry, .estimatedPlane] {
            if let query = view.raycastQuery(from: point, allowing: target, alignment: .horizontal),
               let hit = view.session.raycast(query).first {
                let pos = SIMD3<Float>(hit.worldTransform.columns.3.x, hit.worldTransform.columns.3.y, hit.worldTransform.columns.3.z)
                commitAnchor(at: pos)
                return true
            }
        }
        placeInFront()
        return true
    }

    func placeInFront(distance: Float? = nil) {
        guard let frame = arView?.session.currentFrame else { return }
        let cam = frame.camera.transform
        let camPos = SIMD3<Float>(cam.columns.3.x, cam.columns.3.y, cam.columns.3.z)
        var forward = SIMD3<Float>(-cam.columns.2.x, 0, -cam.columns.2.z)
        let len = simd_length(forward)
        if len > 0.001 { forward /= len } else { forward = SIMD3<Float>(0, 0, -1) }
        let dist = distance ?? (scalePreset == .realScale ? 1.65 : 0.72)
        let fallbackY = camPos.y - (scalePreset == .realScale ? 1.45 : 0.42)
        let targetY = bestDetectedPlaneY(cameraY: camPos.y, preferFloor: scalePreset == .realScale) ?? fallbackY
        let pos = SIMD3<Float>(camPos.x + forward.x * dist, targetY, camPos.z + forward.z * dist)
        commitAnchor(at: pos)
    }

    private func bestDetectedPlaneY(cameraY: Float, preferFloor: Bool) -> Float? {
        let ys = detectedPlanes.values.map { $0.columns.3.y }.filter { $0 < cameraY - 0.12 && $0 > cameraY - 2.4 }
        guard !ys.isEmpty else { return nil }
        if preferFloor {
            return ys.min()
        }
        // Tabletop mode prefers the closest horizontal surface below camera (desk/bed), falling back to floor.
        return ys.max()
    }

    private func commitAnchor(at worldPos: SIMD3<Float>) {
        guard let view = arView, let frame = view.session.currentFrame else { return }
        let camPos = SIMD3<Float>(frame.camera.transform.columns.3.x, frame.camera.transform.columns.3.y, frame.camera.transform.columns.3.z)
        let yaw = atan2(camPos.x - worldPos.x, camPos.z - worldPos.z)
        let transform = Self.translationMatrix(worldPos) * Self.rotationYMatrix(yaw)
        if let old = activeAnchor { view.session.remove(anchor: old) }
        let anchor = ARAnchor(name: "QibanCharacterAnchor", transform: transform)
        view.session.add(anchor: anchor)
        activeAnchor = anchor
        anchorTransform = transform
        hasAnchor = true
        placed = true
        userYaw = 0
        heightOffset = 0
        statusHint = ""
    }

    func captureFrame() -> CameraFrame? {
        guard active, let view = arView, let frame = view.session.currentFrame else { return nil }
        let orientation = view.window?.windowScene?.interfaceOrientation ?? .portrait
        let exifOrientation: CGImagePropertyOrientation
        switch orientation {
        case .landscapeLeft: exifOrientation = .down
        case .landscapeRight: exifOrientation = .up
        case .portraitUpsideDown: exifOrientation = .left
        default: exifOrientation = .right
        }
        let source = CIImage(cvPixelBuffer: frame.capturedImage).oriented(exifOrientation)
        let maxDim = max(source.extent.width, source.extent.height)
        let scale = maxDim > 0 ? min(1.0, 1024.0 / maxDim) : 1.0
        let scaled = source.transformed(by: CGAffineTransform(scaleX: scale, y: scale))
        guard let cg = ciContext.createCGImage(scaled, from: scaled.extent) else { return nil }
        let image = UIImage(cgImage: cg)
        guard let jpeg = image.jpegData(compressionQuality: 0.65), jpeg.count <= 524_288 else { return nil }
        return try? CameraFrame(jpeg: jpeg)
    }

    private func processFrame(_ frame: ARFrame) {
        guard active, let view = arView else { return }
        let size = view.bounds.size
        guard size.width > 1, size.height > 1 else { return }
        let orientation = view.window?.windowScene?.interfaceOrientation ?? .portrait

        if let anchorID = activeAnchor?.identifier,
           let updated = frame.anchors.first(where: { $0.identifier == anchorID }) {
            anchorTransform = updated.transform
        }

        let cam = frame.camera.transform
        let camPos = SIMD3<Float>(cam.columns.3.x, cam.columns.3.y, cam.columns.3.z)

        let baseTransform: simd_float4x4
        if hasAnchor {
            baseTransform = anchorTransform
            if let reticle = reticleNode {
                reticle.isHidden = !showReticle
                if showReticle {
                    let p = anchorTransform.columns.3
                    reticle.simdPosition = SIMD3<Float>(p.x, p.y + heightOffset + 0.002, p.z)
                    let ringScale = max(0.45, min(2.0, userScale * 1.6))
                    reticle.simdScale = SIMD3<Float>(ringScale, 1, ringScale)
                }
            }
        } else {
            // Live ground raycast at lower-center where floor/table naturally sits.
            let probePoint = CGPoint(x: size.width * 0.5, y: size.height * 0.66)
            var hitPos: SIMD3<Float>?
            for target in [ARRaycastQuery.Target.existingPlaneGeometry, .estimatedPlane] {
                if let query = view.raycastQuery(from: probePoint, allowing: target, alignment: .horizontal),
                   let hit = view.session.raycast(query).first {
                    hitPos = SIMD3<Float>(hit.worldTransform.columns.3.x, hit.worldTransform.columns.3.y, hit.worldTransform.columns.3.z)
                    break
                }
            }

            let previewPos: SIMD3<Float>
            if let hit = hitPos {
                previewPos = hit
                liveSurfacePos = hit
                if !planeDetected {
                    planeDetected = true
                    statusHint = "已识别真实平面 · 点击地面/桌面或点上方「确认放置」"
                }
            } else {
                var forward = SIMD3<Float>(-cam.columns.2.x, 0, -cam.columns.2.z)
                let len = simd_length(forward)
                if len > 0.001 { forward /= len } else { forward = SIMD3<Float>(0, 0, -1) }
                let dist: Float = scalePreset == .realScale ? 1.65 : 0.72
                if let knownPlaneY = bestDetectedPlaneY(cameraY: camPos.y, preferFloor: scalePreset == .realScale) {
                    previewPos = SIMD3<Float>(camPos.x + forward.x * dist, knownPlaneY, camPos.z + forward.z * dist)
                    liveSurfacePos = previewPos
                    if !planeDetected {
                        planeDetected = true
                        statusHint = "已吸附到地面平面 · 点上方「确认放置」锁定位置"
                    }
                } else {
                    let estY = camPos.y - (scalePreset == .realScale ? 1.45 : 0.42)
                    previewPos = SIMD3<Float>(camPos.x + forward.x * dist, estY, camPos.z + forward.z * dist)
                    liveSurfacePos = nil
                }
            }

            if let reticle = reticleNode {
                reticle.isHidden = !showReticle
                reticle.simdPosition = SIMD3<Float>(previewPos.x, previewPos.y + heightOffset + 0.002, previewPos.z)
                let ringScale = max(0.45, min(2.0, userScale * 1.6))
                reticle.simdScale = SIMD3<Float>(ringScale, 1, ringScale)
            }

            let yaw = atan2(camPos.x - previewPos.x, camPos.z - previewPos.z)
            baseTransform = Self.translationMatrix(previewPos) * Self.rotationYMatrix(yaw)
        }

        let proj = frame.camera.projectionMatrix(for: orientation, viewportSize: size, zNear: 0.05, zFar: 50.0)
        let viewMat = frame.camera.viewMatrix(for: orientation)
        let modelMat = baseTransform * Self.translationMatrix(SIMD3<Float>(0, heightOffset, 0)) * Self.rotationYMatrix(userYaw) * Self.scaleMatrix(userScale)
        let mv = viewMat * modelMat

        var exposure: Float = 1.06
        var warmth: Float = 0.50
        if let light = frame.lightEstimate {
            let ambient = Float(light.ambientIntensity)
            let kelvin = Float(light.ambientColorTemperature)
            exposure = min(1.30, max(0.80, 0.84 + (ambient - 500.0) / 1400.0 * 0.36))
            warmth = min(0.85, max(0.15, (7600.0 - kelvin) / 4600.0))
        }

        onFrame?(Self.flatten(proj), Self.flatten(mv), exposure, warmth)
    }

    private static func flatten(_ m: simd_float4x4) -> [Float] {
        [
            m.columns.0.x, m.columns.0.y, m.columns.0.z, m.columns.0.w,
            m.columns.1.x, m.columns.1.y, m.columns.1.z, m.columns.1.w,
            m.columns.2.x, m.columns.2.y, m.columns.2.z, m.columns.2.w,
            m.columns.3.x, m.columns.3.y, m.columns.3.z, m.columns.3.w
        ]
    }

    private static func translationMatrix(_ t: SIMD3<Float>) -> simd_float4x4 {
        var m = matrix_identity_float4x4
        m.columns.3 = SIMD4<Float>(t.x, t.y, t.z, 1)
        return m
    }

    private static func rotationYMatrix(_ radians: Float) -> simd_float4x4 {
        let c = cos(radians), s = sin(radians)
        return simd_float4x4(
            SIMD4<Float>(c, 0, -s, 0),
            SIMD4<Float>(0, 1, 0, 0),
            SIMD4<Float>(s, 0, c, 0),
            SIMD4<Float>(0, 0, 0, 1)
        )
    }

    private static func scaleMatrix(_ s: Float) -> simd_float4x4 {
        simd_float4x4(
            SIMD4<Float>(s, 0, 0, 0),
            SIMD4<Float>(0, s, 0, 0),
            SIMD4<Float>(0, 0, s, 0),
            SIMD4<Float>(0, 0, 0, 1)
        )
    }
}

extension SnowbreakARController: ARSessionDelegate {
    nonisolated func session(_ session: ARSession, didAdd anchors: [ARAnchor]) {
        let planes = anchors.compactMap { $0 as? ARPlaneAnchor }.filter { $0.alignment == .horizontal }.map { ($0.identifier, $0.transform) }
        guard !planes.isEmpty else { return }
        Task { @MainActor [weak self] in
            guard let self else { return }
            for (id, t) in planes { self.detectedPlanes[id] = t }
            if !self.planeDetected { self.planeDetected = true }
        }
    }

    nonisolated func session(_ session: ARSession, didUpdate anchors: [ARAnchor]) {
        let planes = anchors.compactMap { $0 as? ARPlaneAnchor }.filter { $0.alignment == .horizontal }.map { ($0.identifier, $0.transform) }
        guard !planes.isEmpty else { return }
        Task { @MainActor [weak self] in
            guard let self else { return }
            for (id, t) in planes { self.detectedPlanes[id] = t }
        }
    }

    nonisolated func session(_ session: ARSession, didRemove anchors: [ARAnchor]) {
        let ids = anchors.map(\.identifier)
        Task { @MainActor [weak self] in
            guard let self else { return }
            for id in ids { self.detectedPlanes.removeValue(forKey: id) }
        }
    }

    nonisolated func session(_ session: ARSession, didUpdate frame: ARFrame) {
        Task { @MainActor [weak self] in
            self?.processFrame(frame)
        }
    }

    nonisolated func session(_ session: ARSession, didFailWithError error: Error) {
        let message = error.localizedDescription
        Task { @MainActor [weak self] in
            self?.statusHint = "AR 会话中断：\(message)"
        }
    }
}

struct SnowbreakARCameraView: UIViewRepresentable {
    @ObservedObject var controller: SnowbreakARController

    func makeUIView(context: Context) -> ARSCNView {
        let view = ARSCNView(frame: .zero)
        view.backgroundColor = .black
        view.autoenablesDefaultLighting = false
        view.rendersCameraGrain = false
        view.rendersMotionBlur = false
        view.isUserInteractionEnabled = false
        controller.attach(view)
        return view
    }

    func updateUIView(_ uiView: ARSCNView, context: Context) {
        controller.attach(uiView)
    }

    static func dismantleUIView(_ uiView: ARSCNView, coordinator: ()) {
        uiView.session.pause()
        uiView.session.delegate = nil
    }
}
