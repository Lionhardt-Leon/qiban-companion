import Foundation
import AVFoundation

enum SpeechWAV {
    static func encode(_ samples:[Float],rate:Int=32000)->Data {
        let pcm=samples.map{Int16(max(-1,min(1,$0))*32767).littleEndian}
        let bytes=pcm.withUnsafeBufferPointer{Data(buffer:$0)};var data=Data()
        func number<T:FixedWidthInteger>(_ value:T){var little=value.littleEndian;withUnsafeBytes(of:&little){data.append(contentsOf:$0)}}
        data.append(Data("RIFF".utf8));number(UInt32(36+bytes.count));data.append(Data("WAVEfmt ".utf8));number(UInt32(16));number(UInt16(1));number(UInt16(1));number(UInt32(rate));number(UInt32(rate*2));number(UInt16(2));number(UInt16(16));data.append(Data("data".utf8));number(UInt32(bytes.count));data.append(bytes);return data
    }
}

private final class SpeechEngineWorker:@unchecked Sendable {
    private let queue=DispatchQueue(label:"qiban.offline-speech",qos:.userInitiated)
    private var engine:OfflineVoiceEngine?
    func render(root:URL,voice:VoiceManifest.Voice,parts:[String],speed:Float,cancellation:SpeechCancellation,gate:SpeechBackpressure,chunk:@escaping(Data)->Void,finish:@escaping(Error?)->Void) {
        queue.async {
            do {
                try cancellation.check()
                if self.engine?.voice.id != voice.id {self.engine=nil;self.engine=try OfflineVoiceEngine(root:root,voice:voice)}
                guard let engine=self.engine else {throw CompanionError.message("离线语音引擎没有就绪。")}
                for text in parts {
                    try gate.acquire()
                    try cancellation.check()
                    let audio=try autoreleasepool {SpeechWAV.encode(try engine.synthesize(text,speed:speed,cancellation:cancellation))}
                    try cancellation.check();chunk(audio)
                }
                finish(nil)
            }catch {finish(error)}
        }
    }
    func unload() async {await withCheckedContinuation {continuation in queue.async{self.engine=nil;continuation.resume()}}}
}

@MainActor final class CompanionSpeech:NSObject,ObservableObject,AVAudioPlayerDelegate,AVSpeechSynthesizerDelegate {
    @Published private(set) var voices:[VoiceManifest.Voice]=[]
    @Published private(set) var packageName=""
    @Published private(set) var busy=false
    @Published private(set) var mouthLevel:Float=0
    private var meter:Timer?
    @Published private(set) var status=""
    @Published private(set) var importing=false
    @Published private(set) var importProgress=0.0
    @Published var error:String?
    let library:VoicePackageLibrary
    private let worker=SpeechEngineWorker()
    private var cancellation:SpeechCancellation?
    private var player:AVAudioPlayer?
    private var system:AVSpeechSynthesizer?
    private var systemUtterance:AVSpeechUtterance?
    private var queued:[Data]=[]
    private var gate:SpeechBackpressure?
    private var generation=UUID(),generationFinished=false
    private var volume:Float=1
    private var completion:((Bool)->Void)?
    override convenience init(){self.init(library:VoicePackageLibrary())}
    init(library:VoicePackageLibrary){self.library=library;super.init();reload()}
    func reload(){if let manifest=try? library.manifest(){voices=manifest.voices;packageName=manifest.title}else{voices=[];packageName=""}}
    func stop() {
        meter?.invalidate();meter=nil;mouthLevel=0
        cancellation?.cancel();cancellation=nil;generation=UUID();gate?.cancel();gate=nil;queued=[]
        player?.stop();player=nil;systemUtterance=nil;system?.stopSpeaking(at:.immediate);completion=nil;busy=false;status="";generationFinished=false
    }
    func unload() async {stop();await worker.unload()}
    func importPackage(_ url:URL) {
        guard !importing else{return};stop();importing=true;importProgress=0;error=nil
        Task {
            await worker.unload()
            do {
                let library=self.library
                _ = try await Task.detached(priority:.userInitiated) {
                    let access=url.startAccessingSecurityScopedResource();defer{if access{url.stopAccessingSecurityScopedResource()}}
                    return try library.importPackage(url) {progress in Task{@MainActor in self.importProgress=progress}}
                }.value
                reload();status="中／日离线语音包已导入，请选择音色。"
            }catch {self.error=error.localizedDescription}
            importing=false
        }
    }
    func speak(_ message:Message,preferences:SpeechPreferences,inCall:Bool=false,completion:((Bool)->Void)?=nil) {
        stop();error=nil
        do {
            guard !importing else {throw CompanionError.message("正在导入语音包，请稍候。")}
            try preferences.validate();let text=try preferences.text(for:message)
            guard !text.isEmpty else {completion?(true);return}
            let audio=AVAudioSession.sharedInstance()
            if inCall {try audio.setCategory(.playAndRecord,mode:.voiceChat,options:[.defaultToSpeaker,.allowBluetooth])}
            else {try audio.setCategory(.playback,mode:.spokenAudio,options:[])}
            try audio.setActive(true);busy=true;self.completion=completion;volume=preferences.volume
            if preferences.voiceID.hasPrefix("system.") {
                status="系统语音正在朗读…";let utterance=AVSpeechUtterance(string:text)
                utterance.voice=AVSpeechSynthesisVoice(language:preferences.language=="ja" ? "ja-JP":"zh-CN");utterance.rate=0.48*preferences.speed;utterance.volume=preferences.volume
            if system==nil {system=AVSpeechSynthesizer();system?.delegate=self};systemUtterance=utterance;system?.speak(utterance);startMeter();return
            }
            guard let voice=voices.first(where:{$0.id==preferences.voiceID && $0.language==preferences.language}) else {throw CompanionError.message("所选训练音色尚未导入，请到设置 → 离线语音导入语音包。")}
            let token=SpeechCancellation(),ticket=generation,gate=SpeechBackpressure();self.gate=gate;cancellation=token;status="正在本机合成 \(voice.title)…"
            worker.render(root:library.current,voice:voice,parts:SpeechPreferences.sentences(text),speed:preferences.speed,cancellation:token,gate:gate,chunk:{[weak self] data in
                DispatchQueue.main.async {guard let self=self,self.generation==ticket else{gate.release();return};self.queued.append(data);self.playNext()}
            },finish:{[weak self] failure in
                DispatchQueue.main.async {
                    guard let self=self,self.generation==ticket else{return}
                    if let failure=failure {if !(failure is CancellationError){self.fail(failure)};return}
                    self.generationFinished=true;if self.player==nil && self.queued.isEmpty {self.finish()}
                }
            })
        }catch {fail(error,completion:completion)}
    }
    private func playNext() {
        guard player==nil else{return}
        guard !queued.isEmpty else{if generationFinished{finish()};return}
        do {
            let audio=queued.removeFirst();player=try AVAudioPlayer(data:audio);player?.delegate=self;player?.volume=volume;player?.isMeteringEnabled=true;player?.prepareToPlay()
            guard player?.play()==true else{throw CompanionError.message("无法播放生成的语音。")};startMeter();status="离线语音正在播放…"
        }catch {fail(error)}
    }
    private func startMeter(){
        guard meter==nil else{return}
        meter=Timer.scheduledTimer(withTimeInterval:0.05,repeats:true){[weak self] _ in
            Task{@MainActor in guard let self=self else{return}
                let value:Float
                if let player=self.player,player.isPlaying {player.updateMeters();value=max(0,min(1,(pow(10,player.averagePower(forChannel:0)/20)-0.015)*4))}
                else if self.systemUtterance != nil,self.system?.isSpeaking==true {value=0.2+0.3*Float(abs(sin(Date.timeIntervalSinceReferenceDate*9)))}
                else {value=0}
                if abs(value-self.mouthLevel)>0.025 || value==0 {self.mouthLevel=value}
            }
        }
    }
    private func finish(){meter?.invalidate();meter=nil;mouthLevel=0;let callback=completion;completion=nil;systemUtterance=nil;busy=false;status="";cancellation=nil;callback?(true)}
    private func fail(_ failure:Error,completion fallback:((Bool)->Void)?=nil) {let callback=completion ?? fallback;stop();error=failure.localizedDescription;status="语音失败："+failure.localizedDescription;callback?(false)}
    nonisolated func audioPlayerDidFinishPlaying(_ player:AVAudioPlayer,successfully flag:Bool) {
        Task{@MainActor in guard self.player===player else{return};self.player=nil;self.gate?.release();if flag{self.playNext()}else{self.fail(CompanionError.message("音频播放被中断。"))}}
    }
    nonisolated func audioPlayerDecodeErrorDidOccur(_ player:AVAudioPlayer,error:Error?) {
        Task{@MainActor in guard self.player===player else{return};self.fail(error ?? CompanionError.message("音频解码失败。"))}
    }
    nonisolated func speechSynthesizer(_ synthesizer:AVSpeechSynthesizer,didFinish utterance:AVSpeechUtterance) {Task{@MainActor in if self.systemUtterance===utterance{self.finish()}}}
}
