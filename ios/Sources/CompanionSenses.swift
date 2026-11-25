import SwiftUI
import AVFoundation
import Speech
import SoundAnalysis

struct SenseTextEvent { let id=UUID();let text:String }

@MainActor final class CompanionSenses:NSObject,ObservableObject,SNResultsObserving {
    @Published var status=""
    @Published private(set) var liveTranscript=""
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
    private var remoteProfile:ServiceEndpoint?
    private var remoteCapture:RemoteVoiceCapture?
    private var remoteTask:Task<Void,Never>?
    private var speakerphone = true
    private var bluetoothOnly = false
    private var keepSessionActive = false
    private var preferEnhancedRecognition = true
    private var silenceSeconds: Double = 1.4
    private var contextualStrings: [String] = []
    private var autoRestartInCall = false
    private var forceOnDeviceFallback = false
    private var latestPartialText = ""
    override init(){super.init()}
    func configureCallAudio(speakerphone:Bool,bluetoothOnly:Bool,keepSessionActive:Bool) {
        self.speakerphone=speakerphone;self.bluetoothOnly=bluetoothOnly;self.keepSessionActive=keepSessionActive
        if conversation || listening {
            let audio=AVAudioSession.sharedInstance()
            let opts:AVAudioSession.CategoryOptions = (speakerphone && !bluetoothOnly) ? [.defaultToSpeaker,.allowBluetooth,.allowBluetoothA2DP] : [.allowBluetooth,.allowBluetoothA2DP]
            try? audio.setCategory(.playAndRecord,mode:.default,options:opts)
            try? audio.overrideOutputAudioPort((speakerphone && !bluetoothOnly) ? .speaker : .none)
        }
    }
    func updateRecognitionOptions(preferEnhanced:Bool,silenceSeconds:Double,contextualStrings:[String]) {
        self.preferEnhancedRecognition = preferEnhanced
        self.silenceSeconds = min(max(silenceSeconds, 0.8), 2.5)
        self.contextualStrings = contextualStrings
        if preferEnhanced { self.forceOnDeviceFallback = false }
    }
    func commitNow() {
        let pending = latestPartialText.trimmingCharacters(in: .whitespacesAndNewlines)
        guard conversation, !pending.isEmpty else { return }
        finishUtterance(pending, ticket: generation)
    }
    func toggleVoice(remote:ServiceEndpoint?=nil){if conversation {stop()}else{remoteProfile=remote?.enabled == true ? remote:nil;autoRestartInCall=false;conversation=true;Task{await startAudio(ambient:false)}}}
    func startVoice(
        remote:ServiceEndpoint?=nil,
        speakerphone:Bool=true,
        bluetoothOnly:Bool=false,
        keepSessionActive:Bool=false,
        preferEnhancedRecognition:Bool=true,
        silenceSeconds:Double=1.4,
        contextualStrings:[String]=[]
    ){
        self.speakerphone=speakerphone;self.bluetoothOnly=bluetoothOnly;self.keepSessionActive=keepSessionActive
        self.preferEnhancedRecognition=preferEnhancedRecognition
        self.silenceSeconds=min(max(silenceSeconds,0.8),2.5)
        self.contextualStrings=contextualStrings
        self.autoRestartInCall=true
        self.forceOnDeviceFallback=false
        remoteProfile=remote?.enabled == true ? remote:nil;conversation=true
        Task{await startAudio(ambient:false)}
    }
    func toggleEnvironment(){if environment {stop()}else{stop();Task{await startAudio(ambient:true)}}}
    private func startAudio(ambient:Bool) async {
        stopAudio();let ticket=generation
        latestPartialText = ""
        liveTranscript = ""
        let granted=await withCheckedContinuation { continuation in AVAudioSession.sharedInstance().requestRecordPermission {continuation.resume(returning:$0)} }
        guard ticket==generation else{return};guard granted else{status="请在系统设置允许麦克风";conversation=false;return}
        let remote = !ambient ? remoteProfile:nil
        var useOnDevice = !preferEnhancedRecognition || forceOnDeviceFallback
        if !ambient,remote==nil {
            let authorization=await withCheckedContinuation { continuation in SFSpeechRecognizer.requestAuthorization {continuation.resume(returning:$0)} }
            guard ticket==generation else{return};recognizer=SFSpeechRecognizer(locale:Locale(identifier:"zh-CN"))
            guard authorization == .authorized, let recognizer = recognizer else{status="请在系统设置允许语音识别";conversation=false;return}
            if useOnDevice {
                guard recognizer.supportsOnDeviceRecognition else { status="当前设备不支持本机中文离线识别，请开启高精度联网识别或配置独立 ASR";conversation=false;return }
            } else if !recognizer.isAvailable {
                if recognizer.supportsOnDeviceRecognition { useOnDevice = true }
                else { status="语音识别服务暂不可用，请检查网络或配置独立 ASR";conversation=false;return }
            }
        }
        do{
            let audio=AVAudioSession.sharedInstance()
            let opts:AVAudioSession.CategoryOptions = (speakerphone && !bluetoothOnly) ? [.defaultToSpeaker,.allowBluetooth,.allowBluetoothA2DP] : [.allowBluetooth,.allowBluetoothA2DP]
            // Half-duplex turn-based listening uses wideband .default mode without telecom voice-processing
            // bandpass distortion so Mandarin tones and character names stay crisp for speech recognition.
            try audio.setCategory(.playAndRecord,mode:.default,options:opts);try audio.setActive(true)
            try? audio.overrideOutputAudioPort((speakerphone && !bluetoothOnly) ? .speaker : .none)
            let engine=AVAudioEngine();self.engine=engine;let input=engine.inputNode;let format=input.outputFormat(forBus:0)
            guard format.sampleRate>0,format.channelCount>0 else{throw CompanionError.message("麦克风暂不可用")}
            if remote != nil {guard format.commonFormat == .pcmFormatFloat32,!format.isInterleaved else {throw CompanionError.message("当前麦克风格式不支持独立语音识别。")}}
            let recognition=SFSpeechAudioBufferRecognitionRequest()
            recognition.requiresOnDeviceRecognition = useOnDevice
            recognition.shouldReportPartialResults = true
            recognition.taskHint = .dictation
            if #available(iOS 16.0, *) { recognition.addsPunctuation = true }
            if !contextualStrings.isEmpty { recognition.contextualStrings = contextualStrings }
            let capture:RemoteVoiceCapture?
            if remote != nil {capture=try RemoteVoiceCapture(rate:Int(format.sampleRate))}else{capture=nil}
            remoteCapture=capture
            if !ambient,remote==nil {
                request=recognition;speechTask=recognizer?.recognitionTask(with:recognition){[weak self] result,error in
                    Task{@MainActor in guard let self=self,self.generation==ticket else{return}
                        if let result=result {
                            let text=result.bestTranscription.formattedString.trimmingCharacters(in:.whitespacesAndNewlines)
                            if !text.isEmpty {
                                self.latestPartialText = text
                                self.liveTranscript = text
                                self.status = text
                                self.silence?.cancel()
                                let work=DispatchWorkItem{[weak self] in Task{@MainActor in self?.finishUtterance(text,ticket:ticket)}}
                                self.silence=work
                                if result.isFinal {
                                    work.perform()
                                } else {
                                    let endsSentence = text.count >= 4 && "。？！?!".contains(text.last ?? " ")
                                    let delay = endsSentence ? min(self.silenceSeconds, 0.95) : self.silenceSeconds
                                    DispatchQueue.main.asyncAfter(deadline:.now()+delay,execute:work)
                                }
                            }
                        } else if let error=error {
                            let pending = self.latestPartialText.trimmingCharacters(in:.whitespacesAndNewlines)
                            if !pending.isEmpty {
                                self.finishUtterance(pending, ticket: ticket)
                            } else if self.autoRestartInCall && self.conversation {
                                if !useOnDevice && self.recognizer?.supportsOnDeviceRecognition == true {
                                    let desc = error.localizedDescription.lowercased()
                                    if desc.contains("network") || desc.contains("internet") || desc.contains("offline") || desc.contains("connect") {
                                        self.forceOnDeviceFallback = true
                                    }
                                }
                                self.stopAudio(deactivateSession: false)
                                let restartTicket = self.generation
                                self.status = "正在聆听，说完后会自动发送"
                                DispatchQueue.main.asyncAfter(deadline: .now() + 0.35) { [weak self] in
                                    Task { @MainActor [weak self] in
                                        guard let self = self, self.conversation, self.generation == restartTicket else { return }
                                        await self.startAudio(ambient: false)
                                    }
                                }
                            } else {
                                self.stopAudio();self.status=error.localizedDescription;self.conversation=false
                            }
                        }
                    }
                }
            }
            let stream=ambient ? SNAudioStreamAnalyzer(format:format):nil
            if let stream=stream {try stream.add(SNClassifySoundRequest(classifierIdentifier:.version1),withObserver:self)}
            analyzer=stream
            input.installTap(onBus:0,bufferSize:1024,format:format){buffer,time in
                if ambient {stream?.analyze(buffer,atAudioFramePosition:time.sampleTime)}
                else if let capture=capture,let channel=buffer.floatChannelData?[0],capture.append(UnsafeBufferPointer(start:channel,count:Int(buffer.frameLength))) {
                    Task{@MainActor [weak self] in self?.finishRemote(capture,ticket:ticket)}
                }else if capture==nil {recognition.append(buffer)}
            };tapInstalled=true;engine.prepare();try engine.start();listening=true;environment=ambient
            if ambient {
                status = "正在本机识别环境声音"
            } else if remote != nil {
                status = "独立 ASR · 正在聆听，停顿后上传"
            } else {
                status = useOnDevice ? "本机离线识别 · 正在聆听" : "高精度语音识别 · 正在聆听"
            }
        }catch{stopAudio();conversation=false;status=error.localizedDescription}
    }
    private func finishUtterance(_ text:String,ticket:Int){
        let cleaned = text.trimmingCharacters(in:.whitespacesAndNewlines)
        guard ticket==generation,!cleaned.isEmpty else{return}
        latestPartialText = ""
        liveTranscript = ""
        stopAudio(deactivateSession:false)
        utterance=SenseTextEvent(text:cleaned)
        status="等待回复…"
    }
    private func finishRemote(_ capture:RemoteVoiceCapture,ticket:Int) {
        guard ticket==generation,conversation,let profile=remoteProfile else{return}
        do {
            let wav=try capture.wav(),key=try ServiceClient.readKey(.asr,profile)
            stopAudio();let ticket=generation;status="正在通过独立 ASR 识别…"
            remoteTask=Task {
                let session=ServiceClient.session();defer{session.invalidateAndCancel();if self.generation==ticket{self.remoteTask=nil}}
                do {let text=try await ServiceClient.transcribe(profile,key:key,wav:wav,session:session);try Task.checkCancellation();guard self.generation==ticket,self.conversation else{return};self.utterance=SenseTextEvent(text:text);self.status="等待回复…"}
                catch {if self.generation==ticket,!Task.isCancelled {self.stop();self.status=error.localizedDescription}}
            }
        }catch{stop();status=error.localizedDescription}
    }
    private func stopAudio(deactivateSession:Bool=false){generation+=1;remoteTask?.cancel();remoteTask=nil;remoteCapture=nil;silence?.cancel();silence=nil;engine?.stop();if tapInstalled{engine?.inputNode.removeTap(onBus:0);tapInstalled=false};engine=nil;request?.endAudio();speechTask?.cancel();speechTask=nil;request=nil;analyzer?.removeAllRequests();analyzer=nil;listening=false;environment=false;if deactivateSession || !keepSessionActive {try? AVAudioSession.sharedInstance().setActive(false,options:.notifyOthersOnDeactivation)}}
    func prepareReply(){if conversation{stopAudio(deactivateSession:false);status="等待回复…"}}
    func preparePlayback(){
        resumeAmbientAfterPlayback = resumeAmbientAfterPlayback || environment
        if conversation || environment {stopAudio(deactivateSession:false);status="正在朗读回复…"}
    }
    func resumeAfterPlayback(){
        let ambient=resumeAmbientAfterPlayback && !conversation;resumeAmbientAfterPlayback=false
        let ticket=generation
        if conversation || ambient {Task{guard ticket==generation else{return};await startAudio(ambient:ambient)}}
    }
    func replyFailed(){if conversation{stop();status="AI回复失败，请检查接口后重试"}}
    func stop(){resumeAmbientAfterPlayback=false;keepSessionActive=false;autoRestartInCall=false;latestPartialText="";liveTranscript="";conversation=false;stopAudio(deactivateSession:true);status=""}
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
