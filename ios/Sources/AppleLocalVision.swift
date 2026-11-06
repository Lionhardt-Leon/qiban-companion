import Foundation
import Vision

struct AppleVisionObservation:Sendable {
    let text:String,labels:[String],milliseconds:Double
    var summary:String {"本机图像观察（不代表完整场景理解）\n文字："+(text.isEmpty ? "未发现清晰文字":text)+"\n可能类别："+(labels.isEmpty ? "没有足够可信的类别":labels.joined(separator:"、"))+String(format:"\n耗时 %.0f ms · Apple Vision 自动调度",milliseconds)}
}
enum AppleLocalVision {
    static func analyze(_ jpeg:Data) async throws -> AppleVisionObservation {
        guard jpeg.count>=4,jpeg.count<=524288,jpeg.starts(with:[0xff,0xd8]) else{throw CompanionError.message("本机识图需要有效的 JPEG 画面。")}
        return try await Task.detached(priority:.userInitiated){
            let start=ProcessInfo.processInfo.systemUptime
            let ocr=VNRecognizeTextRequest();ocr.recognitionLevel = .accurate;ocr.recognitionLanguages=["zh-Hans","en-US","ja-JP"];ocr.usesLanguageCorrection=true
            let handler=VNImageRequestHandler(data:jpeg,options:[:]);try handler.perform([ocr])
            let classifier=VNClassifyImageRequest();try? handler.perform([classifier])
            let text=String((ocr.results ?? []).prefix(30).compactMap{$0.topCandidates(1).first?.string}.joined(separator:"\n").prefix(1200))
            let labels=(classifier.results ?? []).filter{$0.confidence>=0.25}.prefix(5).map{$0.identifier+String(format:" %.0f%%",$0.confidence*100)}
            return AppleVisionObservation(text:text,labels:labels,milliseconds:(ProcessInfo.processInfo.systemUptime-start)*1000)
        }.value
    }
}
