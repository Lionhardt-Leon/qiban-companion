import XCTest
import AVFoundation
@testable import QibanCompanion

/// Mirrors AVFoundation's exception precondition, without requiring a simulator camera.
private final class CameraConnectionProbe: RearVideoConnection {
    var isVideoOrientationSupported = true
    var isVideoMirroringSupported = true
    var writes: [String] = []
    var videoOrientation: AVCaptureVideoOrientation = .landscapeRight {
        didSet { XCTAssertTrue(isVideoOrientationSupported);writes.append("orientation") }
    }
    var automaticallyAdjustsVideoMirroring = true {
        didSet { XCTAssertTrue(isVideoMirroringSupported);writes.append("automatic") }
    }
    var isVideoMirrored = true {
        willSet {
            XCTAssertTrue(isVideoMirroringSupported)
            XCTAssertFalse(automaticallyAdjustsVideoMirroring,"Manual mirroring while automatic mirroring is enabled terminates the app")
        }
        didSet { writes.append("manual") }
    }
}

final class CameraConnectionTests:XCTestCase {
    func testDisablesAutomaticMirroringBeforeManualAssignmentForBothConnections() {
        for _ in 0..<2 {
            let connection = CameraConnectionProbe()
            RearCameraConnection.configure(connection)
            XCTAssertEqual(connection.videoOrientation,.portrait)
            XCTAssertFalse(connection.isVideoMirrored)
            XCTAssertEqual(connection.writes,["orientation","automatic","manual"])
            RearCameraConnection.configure(connection)
            XCTAssertFalse(connection.automaticallyAdjustsVideoMirroring)
        }
    }
    func testUnsupportedConnectionPropertiesAreNeverWritten() {
        let connection = CameraConnectionProbe()
        connection.isVideoOrientationSupported = false
        connection.isVideoMirroringSupported = false
        RearCameraConnection.configure(connection)
        XCTAssertTrue(connection.writes.isEmpty)
        connection.isVideoOrientationSupported = true
        RearCameraConnection.configure(connection)
        XCTAssertEqual(connection.writes,["orientation"])
    }
}
