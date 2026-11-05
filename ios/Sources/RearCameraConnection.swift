import AVFoundation

protocol RearVideoConnection: AnyObject {
    var isVideoOrientationSupported: Bool { get }
    var videoOrientation: AVCaptureVideoOrientation { get set }
    var isVideoMirroringSupported: Bool { get }
    var automaticallyAdjustsVideoMirroring: Bool { get set }
    var isVideoMirrored: Bool { get set }
}
extension AVCaptureConnection: RearVideoConnection {}

enum RearCameraConnection {
    static func configure(_ connection: RearVideoConnection) {
        if connection.isVideoOrientationSupported { connection.videoOrientation = .portrait }
        if connection.isVideoMirroringSupported {
            // AVFoundation raises an Objective-C exception if automatic mirroring is still enabled.
            connection.automaticallyAdjustsVideoMirroring = false
            connection.isVideoMirrored = false
        }
    }
}
