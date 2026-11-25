import Foundation
import CryptoKit
import OnnxRuntimeBindings

enum VoiceEngineMode:String,CaseIterable,Identifiable {
    case highQuality,fastLite,autoCallFast
    var id:String {rawValue}
    var title:String {
        switch self {
        case .highQuality: return "高保真（GPT-SoVITS 方案A加速）"
        case .fastLite: return "极速轻量（VITS-Lite 方案B1）"
        case .autoCallFast: return "智能双轨（通话极速／聊天高保真）"
        }
    }
}

enum VoiceComputeMode:String,CaseIterable,Identifiable {
    case automatic,cpu,neural,gpu
    var id:String {rawValue}
    var title:String {switch self {case .automatic:return "自动（多线程加速）";case .cpu:return "CPU 兼容";case .neural:return "CPU＋神经引擎";case .gpu:return "CPU＋GPU"}}
    func accelerates(_ module:String)->Bool {(self == .neural || self == .gpu) && (module == "bert" || module == "sovits" || module == "vits_lite")}
    var units:String {self == .neural || self == .automatic ? "CPUAndNeuralEngine":"CPUAndGPU"}
    var threadCount:Int {
        let cores=ProcessInfo.processInfo.activeProcessorCount
        if ProcessInfo.processInfo.isLowPowerModeEnabled {return min(2,max(1,cores))}
        if self == .cpu {return min(2,max(1,cores))}
        return min(4,max(2,cores/2))
    }
}

// Sessions stay on the synthesis queue. Unsupported nodes remain on ORT CPU.
// Selecting ANE is permission to schedule there, not proof every node used it.
final class AcceleratedVoiceSession {
    private let env:ORTEnv,model:URL
    private var session:ORTSession?
    private let mode:VoiceComputeMode
    private(set) var backend="CPU",fallback=false,calls=0,milliseconds=0.0
    init(env:ORTEnv,model:URL,module:String,mode:VoiceComputeMode,cache:URL) throws {
        self.env=env;self.model=model;self.mode=mode
        let threads=mode.threadCount
        func cpu() throws -> ORTSession {try Self.makeCPU(env:env,model:model,threads:threads)}
        #if targetEnvironment(simulator)
        session=try cpu();backend="CPU(\(threads)T)"
        #else
        if mode.accelerates(module),ORTIsCoreMLExecutionProviderAvailable() {
            do {
                try FileManager.default.createDirectory(at:cache,withIntermediateDirectories:true)
                let options=try Self.options(threads:threads)
                try options.appendCoreMLExecutionProvider(withOptionsV2:["ModelFormat":"MLProgram","MLComputeUnits":mode.units,"RequireStaticInputShapes":"0","EnableOnSubgraphs":"0","ModelCacheDirectory":cache.path])
                session=try ORTSession(env:env,modelPath:model.path,sessionOptions:options);backend="Core ML / "+mode.units+"（\(threads)T）"
            }catch {session=try cpu();backend="CPU(\(threads)T)";fallback=true}
        }else {session=try cpu();backend="CPU(\(threads)T)"}
        #endif
    }
    private static func options(threads:Int) throws -> ORTSessionOptions {let options=try ORTSessionOptions();try options.setIntraOpNumThreads(Int32(max(1,threads)));try options.setGraphOptimizationLevel(.all);try options.addConfigEntry(withKey:"session.intra_op.allow_spinning",value:"0");return options}
    private static func makeCPU(env:ORTEnv,model:URL,threads:Int) throws -> ORTSession {try ORTSession(env:env,modelPath:model.path,sessionOptions:options(threads:threads))}
    func run(_ inputs:[String:ORTValue],_ outputs:[String]) throws -> [String:ORTValue] {
        let start=ProcessInfo.processInfo.systemUptime
        defer {calls+=1;milliseconds+=(ProcessInfo.processInfo.systemUptime-start)*1000}
        do {guard let active=session else{throw CompanionError.message("语音计算会话已释放。")};return try active.run(withInputs:inputs,outputNames:Set(outputs),runOptions:nil)}
        catch {
            guard !backend.hasPrefix("CPU") else{throw error}
            let threads=mode.threadCount
            session=nil;session=try autoreleasepool{try Self.makeCPU(env:env,model:model,threads:threads)};backend="CPU(\(threads)T)";fallback=true
            return try session!.run(withInputs:inputs,outputNames:Set(outputs),runOptions:nil)
        }
    }
    func resetMetrics(){calls=0;milliseconds=0}
    var summary:String {backend+(fallback ? " · 已回退":"")+String(format:" · %.0f ms / %d次",milliseconds,calls)}
    static func cacheDirectory(root:URL) throws -> URL {
        let manifest=try Data(contentsOf:root.appendingPathComponent("manifest.json"));guard manifest.count<=512*1024 else{throw CompanionError.message("语音索引过大。")}
        let digest=SHA256.hash(data:manifest).map{String(format:"%02x",$0)}.joined()
        return FileManager.default.urls(for:.cachesDirectory,in:.userDomainMask)[0].appendingPathComponent("VoiceCoreML-1.24.2/"+digest,isDirectory:true)
    }
}
