import Foundation

/// Ephemeral request attachment; deliberately separate from the Codable chat archive.
struct CameraFrame {
    enum Source:String {case camera,user,selfPortrait
        var label:String {switch self {case .camera:return "后置主摄当前画面";case .user:return "用户发送的图片";case .selfPortrait:return "你自己的模型当前画面（不是用户照片）"}}
    }
    let jpeg: Data
    let capturedAt: Date
    let source:Source
    init(jpeg: Data, capturedAt: Date = Date(),source:Source = .camera) throws {
        guard jpeg.count >= 4, jpeg.count <= 524_288,
              jpeg.starts(with: [0xff,0xd8]), jpeg.suffix(2) == Data([0xff,0xd9]) else {
            throw CompanionError.message("相机图片无效或超过 512KB，请重新取景。")
        }
        self.jpeg = jpeg; self.capturedAt = capturedAt;self.source = source
    }
    var dataURL: String { "data:image/jpeg;base64," + jpeg.base64EncodedString() }
    func isFresh(at date: Date = Date()) -> Bool {
        if source != .camera {return true}
        let age = date.timeIntervalSince(capturedAt)
        return age >= -0.5 && age <= 3
    }
}
