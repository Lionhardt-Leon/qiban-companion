import Foundation

/// Ephemeral request attachment; deliberately separate from the Codable chat archive.
struct CameraFrame {
    let jpeg: Data
    let capturedAt: Date
    init(jpeg: Data, capturedAt: Date = Date()) throws {
        guard jpeg.count >= 4, jpeg.count <= 524_288,
              jpeg.starts(with: [0xff,0xd8]), jpeg.suffix(2) == Data([0xff,0xd9]) else {
            throw CompanionError.message("相机图片无效或超过 512KB，请重新取景。")
        }
        self.jpeg = jpeg; self.capturedAt = capturedAt
    }
    var dataURL: String { "data:image/jpeg;base64," + jpeg.base64EncodedString() }
    func isFresh(at date: Date = Date()) -> Bool {
        let age = date.timeIntervalSince(capturedAt)
        return age >= -0.5 && age <= 3
    }
}
