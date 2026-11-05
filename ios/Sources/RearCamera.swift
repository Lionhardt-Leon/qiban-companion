import SwiftUI
import AVFoundation
import CoreImage

@MainActor final class RearCamera: ObservableObject {
    @Published private(set) var enabled = false
    @Published private(set) var starting = false
    @Published private(set) var status = ""
    @Published private(set) var session: AVCaptureSession?
    private var capture: RearCameraCapture?
    private var generation = 0

    func toggle() {
        if enabled || starting { stop(); return }
        starting = true; status = "正在开启后置主摄…"; generation += 1
        let ticket = generation
        Task {
            let allowed = await AVCaptureDevice.requestAccess(for: .video)
            guard generation == ticket else { return }
            guard allowed else { starting = false; status = "请在系统设置允许相机访问"; return }
            let worker = RearCameraCapture()
            capture = worker; session = worker.session
            worker.start { [weak self] failure in
                Task { @MainActor in
                    guard let self = self, self.generation == ticket else { return }
                    self.starting = false
                    if let failure = failure { self.stop(); self.status = failure }
                    else { self.enabled = true; self.status = "对话时发送当前画面至你的 API · 需识图模型" }
                }
            }
        }
    }
    func frame() async throws -> CameraFrame? {
        guard enabled, let capture = capture else { return nil }
        let ticket = generation
        let frame = await capture.latestFrame()
        guard enabled, generation == ticket else { throw CompanionError.message("相机已关闭，本次未发送画面。") }
        guard let frame = frame, frame.isFresh() else { throw CompanionError.message("还没有清晰的新画面，请稍等片刻再发送。") }
        return frame
    }
    func stop() {
        generation += 1; enabled = false; starting = false; status = ""
        capture?.stop(); capture = nil; session = nil
    }
}

/// Owns capture and JPEG work on one serial queue, never the main/UI thread.
private final class RearCameraCapture: NSObject, AVCaptureVideoDataOutputSampleBufferDelegate {
    let session = AVCaptureSession()
    private let queue = DispatchQueue(label: "companion.rear-camera", qos: .userInitiated)
    private let output = AVCaptureVideoDataOutput()
    private let context = CIContext(options: [.cacheIntermediates:false])
    private var latest: CameraFrame?
    private var lastSample: CFTimeInterval = 0
    private var stopped = false

    func start(completion: @escaping (String?) -> Void) {
        queue.async { [self] in
            do {
                guard let device = AVCaptureDevice.default(.builtInWideAngleCamera, for: .video, position: .back) else {
                    throw CompanionError.message("没有可用的后置主摄")
                }
                let input = try AVCaptureDeviceInput(device: device)
                session.beginConfiguration()
                session.sessionPreset = .hd1280x720
                session.automaticallyConfiguresApplicationAudioSession = false
                guard session.canAddInput(input), session.canAddOutput(output) else {
                    session.commitConfiguration(); throw CompanionError.message("无法配置后置主摄")
                }
                session.addInput(input)
                output.alwaysDiscardsLateVideoFrames = true
                output.videoSettings = [kCVPixelBufferPixelFormatTypeKey as String:kCVPixelFormatType_32BGRA]
                output.setSampleBufferDelegate(self, queue: queue); session.addOutput(output)
                if let connection = output.connection(with: .video) {
                    if connection.isVideoOrientationSupported { connection.videoOrientation = .portrait }
                    if connection.isVideoMirroringSupported { connection.isVideoMirrored = false }
                }
                if (try? device.lockForConfiguration()) != nil {
                    device.videoZoomFactor = 1
                    if device.isFocusModeSupported(.continuousAutoFocus) { device.focusMode = .continuousAutoFocus }
                    device.unlockForConfiguration()
                }
                session.commitConfiguration(); session.startRunning()
                completion(session.isRunning ? nil : "相机未能启动，请关闭其他占用相机的应用后重试")
            } catch { completion(error.localizedDescription) }
        }
    }
    func stop() { queue.async { [self] in stopped = true; latest = nil; output.setSampleBufferDelegate(nil, queue:nil); session.stopRunning() } }
    func latestFrame() async -> CameraFrame? {
        await withCheckedContinuation { continuation in queue.async { [self] in continuation.resume(returning:stopped ? nil : latest) } }
    }
    func captureOutput(_ output: AVCaptureOutput, didOutput sampleBuffer: CMSampleBuffer, from connection: AVCaptureConnection) {
        guard !stopped, CACurrentMediaTime()-lastSample >= 0.5,
              let buffer = CMSampleBufferGetImageBuffer(sampleBuffer) else { return }
        lastSample = CACurrentMediaTime()
        let source = CIImage(cvPixelBuffer:buffer)
        let scale = min(1,1024/max(source.extent.width,source.extent.height))
        let image = source.transformed(by:CGAffineTransform(scaleX:scale,y:scale))
        guard let cg = context.createCGImage(image, from:image.extent) else { return }
        let picture = UIImage(cgImage:cg)
        guard let jpeg = picture.jpegData(compressionQuality:0.65), jpeg.count <= 524_288 else { return }
        latest = try? CameraFrame(jpeg:jpeg)
    }
}

private final class CameraPreviewSurface: UIView {
    override class var layerClass: AnyClass { AVCaptureVideoPreviewLayer.self }
    var preview: AVCaptureVideoPreviewLayer { layer as! AVCaptureVideoPreviewLayer }
}

struct RearCameraPreview: UIViewRepresentable {
    let session: AVCaptureSession
    func makeUIView(context:Context) -> UIView {
        let view = CameraPreviewSurface(); view.preview.videoGravity = .resizeAspect
        view.preview.session = session; return view
    }
    func updateUIView(_ uiView:UIView,context:Context) {
        guard let view = uiView as? CameraPreviewSurface else { return }
        if view.preview.session !== session { view.preview.session = session }
        if let connection = view.preview.connection {
            if connection.isVideoOrientationSupported { connection.videoOrientation = .portrait }
            if connection.isVideoMirroringSupported { connection.isVideoMirrored = false }
        }
    }
    static func dismantleUIView(_ uiView:UIView,coordinator:()) { (uiView as? CameraPreviewSurface)?.preview.session = nil }
}
