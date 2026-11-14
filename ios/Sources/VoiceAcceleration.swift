import Foundation
import CryptoKit
import OnnxRuntimeBindings

enum VoiceComputeMode:String,CaseIterable,Identifiable {
    case automatic,cpu,neural,gpu
    var id:String {rawValue}
    var title:String {switch self {case .automatic:return "自动（稳定优先）";case .cpu:return "CPU 兼容";case .neural:return "CPU＋神经引擎";case .gpu:return "CPU＋GPU"}}
    func accelerates(_ module:String)->Bool {(self == .neural || self == .gpu) && (module == "bert" || module == "sovits")}
    var units:String {self == .neural || self == .automatic ? "CPUAndNeuralEngine":"CPUAndGPU"}
}

// Sessions stay on the synthesis queue. Unsupported nodes remain on ORT CPU.
// Selecting ANE is permission to schedule there, not proof every node used it.
final class AcceleratedVoiceSession {
    private let env:ORTEnv,model:URL
    private var session:ORTSession?
    private(set) var backend="CPU",fallback=false,calls=0,milliseconds=0.0
    init(env:ORTEnv,model:URL,module:String,mode:VoiceComputeMode,cache:URL) throws {
        self.env=env;self.model=model
        func cpu() throws -> ORTSession {try Self.makeCPU(env:env,model:model)}
        #if targetEnvironment(simulator)
        session=try cpu()
        #else
        if mode.accelerates(module),ORTIsCoreMLExecutionProviderAvailable() {
            do {
                try FileManager.default.createDirectory(at:cache,withIntermediateDirectories:true)
                let options=try Self.options()
                try options.appendCoreMLExecutionProvider(withOptionsV2:["ModelFormat":"MLProgram","MLComputeUnits":mode.units,"RequireStaticInputShapes":"0","EnableOnSubgraphs":"0","ModelCacheDirectory":cache.path])
                session=try ORTSession(env:env,modelPath:model.path,sessionOptions:options);backend="Core ML / "+mode.units+"（可含 CPU 分图）"
            }catch {session=try cpu();fallback=true}
        }else {session=try cpu()}
        #endif
    }
    private static func options() throws -> ORTSessionOptions {let options=try ORTSessionOptions();try options.setIntraOpNumThreads(1);try options.setGraphOptimizationLevel(.all);try options.addConfigEntry(withKey:"session.intra_op.allow_spinning",value:"0");return options}
    private static func makeCPU(env:ORTEnv,model:URL) throws -> ORTSession {try ORTSession(env:env,modelPath:model.path,sessionOptions:options())}
    func run(_ inputs:[String:ORTValue],_ outputs:[String]) throws -> [String:ORTValue] {
        let start=ProcessInfo.processInfo.systemUptime
        defer {calls+=1;milliseconds+=(ProcessInfo.processInfo.systemUptime-start)*1000}
        do {guard let active=session else{throw CompanionError.message("语音计算会话已释放。")};return try active.run(withInputs:inputs,outputNames:Set(outputs),runOptions:nil)}
        catch {
            guard backend != "CPU" else{throw error}
            session=nil;session=try autoreleasepool{try Self.makeCPU(env:env,model:model)};backend="CPU";fallback=true
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
