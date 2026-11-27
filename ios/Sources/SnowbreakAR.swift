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
    @Published private(set) var roomHidden = true
    @Published private(set) var statusHint = ""
    @Published private(set) var scalePreset: ARScalePreset = .tabletop
    @Published private(set) var userScale: Float = 0.28
    @Published private(set) var userYaw: Float = 0

    var onFrame: (([Float], [Float], Float, Float) -> Void)?
    private weak var arView: ARSCNView?
    private var anchorTransform: simd_float4x4 = matrix_identity_float4x4
    private var hasAnchor = false
    private var activeAnchor: ARAnchor?
    private let ciContext = CIContext(options: [.cacheIntermediates: false])
    private var generation = 0
    private var sessionRunning = false

    func attach(_ view: ARSCNView) {
        arView = view
        view.session.delegate = self
        if active && !sessionRunning {
            runSession()
        }
    }

    func detach(_ view: ARSCNView) {
        if arView === view {
            view.session.pause()
            view.session.delegate = nil
            arView = nil
            sessionRunning = false
        }
    }

    func start() {
        guard ARWorldTrackingConfiguration.isSupported else {
            statusHint = "当前设备不支持 ARKit 空间追踪"
            return
        }
        generation += 1
        let ticket = generation
        statusHint = "正在申请相机并启动 AR 空间追踪…"
        Task {
            let allowed = await AVCaptureDevice.requestAccess(for: .video)
            guard generation == ticket else { return }
            guard allowed else {
                statusHint = "请在系统设置中允许相机访问以使用 AR 模式"
                return
            }
            active = true
            placed = false
            hasAnchor = false
            activeAnchor = nil
            userYaw = 0
            statusHint = "对准桌面或地面点击放置；也可点「立即放置」"
            runSession()
        }
    }

    func stop() {
        generation += 1
        active = false
        placed = false
        hasAnchor = false
        activeAnchor = nil
        statusHint = ""
        sessionRunning = false
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

    func setRoomHidden(_ hidden: Bool) {
        roomHidden = hidden
    }

    func resetPlacement() {
        if let old = activeAnchor { arView?.session.remove(anchor: old) }
        activeAnchor = nil
        hasAnchor = false
        placed = false
        userYaw = 0
        statusHint = "点击桌面或地面重新放置，或点「立即放置」"
    }

    @discardableResult
    func placeAtScreenPoint(_ point: CGPoint) -> Bool {
        guard let view = arView else { return false }
        if let query = view.raycastQuery(from: point, allowing: .estimatedPlane, alignment: .horizontal),
           let hit = view.session.raycast(query).first {
            let pos = SIMD3<Float>(hit.worldTransform.columns.3.x, hit.worldTransform.columns.3.y, hit.worldTransform.columns.3.z)
            commitAnchor(at: pos)
            return true
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
        let dist = distance ?? (scalePreset == .realScale ? 1.55 : 0.72)
        let drop: Float = scalePreset == .realScale ? 1.15 : 0.28
        let pos = camPos + forward * dist + SIMD3<Float>(0, -drop, 0)
        commitAnchor(at: pos)
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

        let baseTransform: simd_float4x4
        if hasAnchor {
            baseTransform = anchorTransform
        } else {
            // Smooth floating preview right in front of the camera before tap-to-place.
            let cam = frame.camera.transform
            let camPos = SIMD3<Float>(cam.columns.3.x, cam.columns.3.y, cam.columns.3.z)
            var forward = SIMD3<Float>(-cam.columns.2.x, 0, -cam.columns.2.z)
            let len = simd_length(forward)
            if len > 0.001 { forward /= len } else { forward = SIMD3<Float>(0, 0, -1) }
            let dist: Float = scalePreset == .realScale ? 1.55 : 0.72
            let drop: Float = scalePreset == .realScale ? 1.10 : 0.26
            let previewPos = camPos + forward * dist + SIMD3<Float>(0, -drop, 0)
            let yaw = atan2(camPos.x - previewPos.x, camPos.z - previewPos.z)
            baseTransform = Self.translationMatrix(previewPos) * Self.rotationYMatrix(yaw)
        }

        let proj = frame.camera.projectionMatrix(for: orientation, viewportSize: size, zNear: 0.05, zFar: 50.0)
        let viewMat = frame.camera.viewMatrix(for: orientation)
        let modelMat = baseTransform * Self.rotationYMatrix(userYaw) * Self.scaleMatrix(userScale)
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
