import SwiftUI
import AVFoundation
import Speech
import SoundAnalysis

struct SenseTextEvent { let id=UUID();let text:String }

@MainActor final class CompanionSenses:NSObject,ObservableObject,SNResultsObserving {
    @Published var status=""
    @Published private(set) var listening=false
    @Published private(set) var environment=false
    @Published private(set) var conversation=false
    @Published private(set) var utterance:SenseTextEvent?
    @Published private(set) var sound:SenseTextEvent?
    private var engine:AVAudioEngine?
    private var speechTask:SFSpeechRecognitionTask?,request:SFSpeechAudioBufferRecognitionRequest?,analyzer:SNAudioStreamAnalyzer?
    private var silence:DispatchWorkItem?,generation=0,tapInstalled=false,lastSound:TimeInterval=0
    private var lastSoundIdentifier=""
    private var recognizer:SFSpeechRecognizer?
    private var resumeAmbientAfterPlayback=false
    override init(){super.init()}
    func toggleVoice(){if conversation {stop()}else{conversation=true;Task{await startAudio(ambient:false)}}}
    func toggleEnvironment(){if environment {stop()}else{stop();Task{await startAudio(ambient:true)}}}
    private func startAudio(ambient:Bool) async {
        stopAudio();let ticket=generation
        let granted=await withCheckedContinuation { continuation in AVAudioSession.sharedInstance().requestRecordPermission {continuation.resume(returning:$0)} }
        guard ticket==generation else{return};guard granted else{status="请在系统设置允许麦克风";conversation=false;return}
        if !ambient {
            let authorization=await withCheckedContinuation { continuation in SFSpeechRecognizer.requestAuthorization {continuation.resume(returning:$0)} }
            guard ticket==generation else{return};recognizer=SFSpeechRecognizer(locale:Locale(identifier:"zh-CN"))
            guard authorization == .authorized,recognizer?.supportsOnDeviceRecognition == true else{status="当前设备或中文语音资源不支持本机识别，请检查系统语音资源";conversation=false;return}
        }
        do{
            let audio=AVAudioSession.sharedInstance();try audio.setCategory(.playAndRecord,mode:.voiceChat,options:[.defaultToSpeaker,.allowBluetooth]);try audio.setActive(true)
            let engine=AVAudioEngine();self.engine=engine;let input=engine.inputNode;try? input.setVoiceProcessingEnabled(true);let format=input.outputFormat(forBus:0)
            guard format.sampleRate>0,format.channelCount>0 else{throw CompanionError.message("麦克风暂不可用")}
            let recognition=SFSpeechAudioBufferRecognitionRequest();recognition.requiresOnDeviceRecognition=true;recognition.shouldReportPartialResults=true
            if !ambient {
                request=recognition;speechTask=recognizer?.recognitionTask(with:recognition){[weak self] result,error in
                    Task{@MainActor in guard let self=self,self.generation==ticket else{return}
                        if let result=result {let text=result.bestTranscription.formattedString;self.status=text;self.silence?.cancel();let work=DispatchWorkItem{[weak self] in Task{@MainActor in self?.finishUtterance(text,ticket:ticket)}};self.silence=work;if result.isFinal{work.perform()}else{DispatchQueue.main.asyncAfter(deadline:.now()+1.2,execute:work)}}
                        else if let error=error {self.stopAudio();self.status=error.localizedDescription;self.conversation=false}
                    }
                }
            }
            let stream=ambient ? SNAudioStreamAnalyzer(format:format):nil
            if let stream=stream {try stream.add(SNClassifySoundRequest(classifierIdentifier:.version1),withObserver:self)}
            analyzer=stream
            input.installTap(onBus:0,bufferSize:1024,format:format){buffer,time in
                if ambient {stream?.analyze(buffer,atAudioFramePosition:time.sampleTime)}else{recognition.append(buffer)}
            };tapInstalled=true;engine.prepare();try engine.start();listening=true;environment=ambient;status=ambient ? "正在本机识别环境声音" : "正在聆听，说完后会自动发送"
        }catch{stopAudio();conversation=false;status=error.localizedDescription}
    }
    private func finishUtterance(_ text:String,ticket:Int){guard ticket==generation,!text.trimmingCharacters(in:.whitespacesAndNewlines).isEmpty else{return};stopAudio();utterance=SenseTextEvent(text:text);status="等待回复…"}
    private func stopAudio(){generation+=1;silence?.cancel();silence=nil;engine?.stop();if tapInstalled{engine?.inputNode.removeTap(onBus:0);tapInstalled=false};engine=nil;request?.endAudio();speechTask?.cancel();speechTask=nil;request=nil;analyzer?.removeAllRequests();analyzer=nil;listening=false;environment=false;try? AVAudioSession.sharedInstance().setActive(false,options:.notifyOthersOnDeactivation)}
    func prepareReply(){if conversation{stopAudio();status="等待回复…"}}
    func preparePlayback(){
        resumeAmbientAfterPlayback = resumeAmbientAfterPlayback || environment
        if conversation || environment {stopAudio();status="正在朗读回复…"}
    }
    func resumeAfterPlayback(){
        let ambient=resumeAmbientAfterPlayback && !conversation;resumeAmbientAfterPlayback=false
        let ticket=generation
        if conversation || ambient {Task{guard ticket==generation else{return};await startAudio(ambient:ambient)}}
    }
    func replyFailed(){if conversation{stop();status="AI回复失败，请检查接口后重试"}}
    func stop(){resumeAmbientAfterPlayback=false;conversation=false;stopAudio();status=""}
    func suspend(){stop()}
    nonisolated func request(_ request:SNRequest,didProduce result:SNResult){
        guard let result=result as? SNClassificationResult,let best=result.classifications.first,best.confidence>=0.85 else{return}
        let names=["clapping":"拍手","laughter":"笑声","dog":"犬吠","dog_bark":"犬吠","doorbell":"门铃","knock":"敲击"]
        let name=names[best.identifier] ?? String(best.identifier.prefix(80))
        Task{@MainActor in guard self.environment,Date.timeIntervalSinceReferenceDate-self.lastSound>12,(best.identifier != self.lastSoundIdentifier || Date.timeIntervalSinceReferenceDate-self.lastSound>60) else{return};self.lastSoundIdentifier=best.identifier;self.lastSound=Date.timeIntervalSinceReferenceDate;self.sound=SenseTextEvent(text:"附近的声音分类结果可能是\(name)，置信度\(Int(best.confidence*100))%。仅根据这条声音线索自然回应，不要声称知道声源位置或看到了现场。");self.status="可能听到：\(name)"}
    }
    nonisolated func request(_ request:SNRequest,didFailWithError error:Error){Task{@MainActor in if self.environment{self.stop();self.status=error.localizedDescription}}}
    nonisolated func requestDidComplete(_ request:SNRequest){}
}
