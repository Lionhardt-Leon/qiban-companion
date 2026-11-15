import Foundation
import AVFoundation

/// Bounded per-utterance buffer shared with the audio tap, never a disk recording.
final class RemoteVoiceCapture:@unchecked Sendable {
    private let lock=NSLock()
    private var samples:[Float]=[]
    private var lastSpeech=0,total=0,hasSpeech=false,finished=false
    let rate:Int
    init(rate:Int) throws {
        guard [8000,16000,22050,24000,32000,44100,48000].contains(rate) else {throw CompanionError.message("当前麦克风采样率不支持独立语音识别。")}
        self.rate=rate;samples.reserveCapacity(rate*30)
    }
    func append(_ values:UnsafeBufferPointer<Float>)->Bool {
        lock.lock();defer{lock.unlock()}
        guard !finished else{return false}
        guard !values.isEmpty else{return false}
        let count=min(values.count,rate*30-samples.count)
        guard count>0 else{finished=true;return true}
        var energy:Float=0
        for value in values.prefix(count) {let safe=value.isFinite ? max(-1,min(1,value)):0;samples.append(safe);energy+=safe*safe}
        total+=count
        if sqrt(energy/Float(count))>0.012 {hasSpeech=true;lastSpeech=total}
        if total>=rate*30 || hasSpeech && total-lastSpeech>=rate*12/10 || !hasSpeech && total>=rate*8 {finished=true;return true}
        return false
    }
    func wav()throws->Data {
        lock.lock();defer{lock.unlock()}
        guard hasSpeech,!samples.isEmpty else {throw CompanionError.message("未检测到清晰语音，请再次点击麦克风。")}
        return SpeechWAV.encode(samples,rate:rate)
    }
}
