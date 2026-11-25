import Foundation
import CryptoKit
import OnnxRuntimeBindings
import QibanG2P

// MARK: - Track B1: Ultra-Fast Non-Autoregressive VITS-Lite Manifest & Package Library

struct FastVoiceManifest: Codable {
    struct Voice: Codable, Identifiable, Equatable {
        let id: String
        let title: String
        let language: String
        let directory: String
    }
    let schema: String
    let id: String
    let title: String
    let voices: [Voice]
    let files: [String: VoiceManifest.File]

    func validate() throws {
        guard schema == "qiban-fast-voice/1",
              !id.isEmpty, id.count <= 120, title.count <= 120,
              (1...16).contains(voices.count),
              Set(voices.map(\.id)).count == voices.count,
              files.count <= 2048 else {
            throw CompanionError.message("不是当前版本支持的极速轻量化语音包（qiban-fast-voice/1）。")
        }
        for voice in voices {
            guard !voice.id.isEmpty, voice.id.count <= 120, voice.title.count <= 120,
                  ["zh", "ja"].contains(voice.language),
                  VoiceManifest.safePath(voice.directory),
                  files[voice.directory + "/fast_config.json"] != nil,
                  files[voice.directory + "/model.onnx"] != nil else {
                throw CompanionError.message("极速语音包缺少 \(voice.title) 的配置文件或 model.onnx。")
            }
        }
        var total: Int64 = 0
        for (path, file) in files {
            guard VoiceManifest.safePath(path), path != "manifest.json",
                  file.bytes >= 0, file.bytes <= 256 * 1024 * 1024,
                  file.sha256.count == 64, file.sha256.allSatisfy({ $0.isHexDigit }) else {
                throw CompanionError.message("极速语音包文件索引无效。")
            }
            total += file.bytes
        }
        guard total <= 600_000_000 else {
            throw CompanionError.message("极速语音包超过 600MB 上限。")
        }
    }
}

struct FastVoiceConfig: Codable {
    let sampleRate: Int
    let frontend: String           // "qiban_g2p" or "lexicon"
    let addBlank: Bool?
    let blankId: Int64?
    let noiseScale: Float?
    let noiseScaleW: Float?
    let lengthScale: Float?
    let speakerId: Int64?
    let useScalesVector: Bool?     // true: single [3] tensor "scales", false: 3 separate [1] tensors
    let inputX: String?
    let inputLengths: String?
    let inputScales: String?
    let inputSid: String?
    let outputAudio: String?
    let vocabSize: Int?
    let phoneMap: [String: Int64]? // optional remap from qiban_g2p ID -> VITS token ID

    func validate() throws {
        guard [16000, 22050, 24000, 32000, 44100].contains(sampleRate),
              ["qiban_g2p", "lexicon"].contains(frontend) else {
            throw CompanionError.message("极速语音配置参数无效。")
        }
    }
}

struct FastVoicePackageLibrary {
    let directory: URL
    var current: URL { directory.appendingPathComponent("current", isDirectory: true) }

    init(directory: URL? = nil) {
        self.directory = directory ?? FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask)[0]
            .appendingPathComponent(AppIdentity.storageNamespace)
            .appendingPathComponent("FastOfflineVoices", isDirectory: true)
    }

    func manifest() throws -> FastVoiceManifest {
        let path = current.appendingPathComponent("manifest.json")
        guard (try path.resourceValues(forKeys: [.fileSizeKey]).fileSize ?? Int.max) <= 512 * 1024 else {
            throw CompanionError.message("极速语音索引过大。")
        }
        let value = try JSONDecoder().decode(FastVoiceManifest.self, from: Data(contentsOf: path))
        try value.validate()
        return value
    }

    func importPackage(_ url: URL, progress: (Double) -> Void = { _ in }) throws -> FastVoiceManifest {
        let archive = try StoredVoiceArchive(url: url)
        let bytes = try archive.read("manifest.json", limit: 512 * 1024)
        let manifest = try JSONDecoder().decode(FastVoiceManifest.self, from: bytes)
        try manifest.validate()
        guard Set(archive.entries.map(\.path)) == Set(manifest.files.keys).union(["manifest.json"]) else {
            throw CompanionError.message("极速语音包文件与索引不一致。")
        }
        let fm = FileManager.default
        try fm.createDirectory(at: directory, withIntermediateDirectories: true)
        let staging = directory.appendingPathComponent("staging-" + UUID().uuidString, isDirectory: true)
        let prior = directory.appendingPathComponent("prior-" + UUID().uuidString, isDirectory: true)
        try fm.createDirectory(at: staging, withIntermediateDirectories: false)
        var installed = false
        defer {
            cleanTemporary(staging)
            if installed { cleanTemporary(prior) }
        }
        var done: Int64 = 0
        let total = manifest.files.values.reduce(Int64(0)) { $0 + $1.bytes }
        var reported = 0.0
        for (path, record) in manifest.files.sorted(by: { $0.key < $1.key }) {
            try Task.checkCancellation()
            guard let entry = archive.entries.first(where: { $0.path == path }), entry.size == record.bytes else {
                throw CompanionError.message("极速语音包大小索引错误。")
            }
            let target = staging.appendingPathComponent(path)
            try fm.createDirectory(at: target.deletingLastPathComponent(), withIntermediateDirectories: true)
            guard fm.createFile(atPath: target.path, contents: nil, attributes: [.protectionKey: FileProtectionType.complete]) else {
                throw CompanionError.message("无法写入极速语音文件，请检查储存空间。")
            }
            let output = try FileHandle(forWritingTo: target)
            defer { try? output.close() }
            var hash = SHA256()
            try archive.stream(entry) { data in
                try Task.checkCancellation()
                try output.write(contentsOf: data)
                hash.update(data: data)
                done += Int64(data.count)
                let value = Double(done) / Double(max(1, total))
                if value - reported >= 0.01 { progress(value); reported = value }
            }
            guard hash.finalize().map({ String(format: "%02x", $0) }).joined() == record.sha256.lowercased() else {
                throw CompanionError.message("极速语音文件校验失败：\(path)。")
            }
        }
        try bytes.write(to: staging.appendingPathComponent("manifest.json"), options: [.atomic, .completeFileProtection])
        let hadCurrent = fm.fileExists(atPath: current.path)
        if hadCurrent { try fm.moveItem(at: current, to: prior) }
        do { try fm.moveItem(at: staging, to: current) } catch {
            if hadCurrent { try? fm.moveItem(at: prior, to: current) }
            throw error
        }
        installed = true
        progress(1)
        return manifest
    }

    private func cleanTemporary(_ url: URL) {
        let root = directory.resolvingSymlinksInPath().standardizedFileURL.path + "/"
        let target = url.resolvingSymlinksInPath().standardizedFileURL
        guard target.path.hasPrefix(root), url.lastPathComponent.hasPrefix("staging-") || url.lastPathComponent.hasPrefix("prior-") else { return }
        try? FileManager.default.removeItem(at: target)
    }
}

// MARK: - Single-Shot Non-Autoregressive VITS-Lite Engine (Resident in RAM, ~0.15s–0.30s per sentence)

final class FastVoiceEngine {
    let voice: FastVoiceManifest.Voice
    let computeMode: VoiceComputeMode
    let sampleRate: Int
    private(set) var diagnostics = ""
    private let config: FastVoiceConfig
    private let env: ORTEnv
    private let session: AcceleratedVoiceSession
    private let lexicon: [String: [Int64]]?
    private let punctuationIds: [Character: Int64]

    init(root: URL, voice: FastVoiceManifest.Voice, computeMode: VoiceComputeMode = .automatic, sharedResourcesRoot: URL? = nil) throws {
        self.voice = voice
        self.computeMode = computeMode
        let path = root.appendingPathComponent(voice.directory, isDirectory: true)
        let configData = try Data(contentsOf: path.appendingPathComponent("fast_config.json"))
        guard configData.count <= 256 * 1024 else { throw CompanionError.message("极速语音配置文件过大。") }
        let decoded = try JSONDecoder().decode(FastVoiceConfig.self, from: configData)
        try decoded.validate()
        self.config = decoded
        self.sampleRate = decoded.sampleRate

        if decoded.frontend == "qiban_g2p" {
            let localResources = root.appendingPathComponent("resources", isDirectory: true)
            let resourcesDir = FileManager.default.fileExists(atPath: localResources.path) ? localResources : sharedResourcesRoot
            guard let resDir = resourcesDir else {
                throw CompanionError.message("极速语音包缺少文字前端字典（resources）。")
            }
            let g2pConfig = path.appendingPathComponent("config.json").path
            let ok = resDir.path.withCString { r in g2pConfig.withCString { c in qiban_g2p_initialize(r, c) } }
            guard ok == 1 else { throw CompanionError.message("极速语音文字前端初始化失败。") }
            self.lexicon = nil
            self.punctuationIds = [:]
        } else {
            let lexURL = path.appendingPathComponent("lexicon.json")
            let lexData = try Data(contentsOf: lexURL)
            guard lexData.count <= 16 * 1024 * 1024 else { throw CompanionError.message("极速语音词典过大。") }
            struct LexiconFile: Decodable {
                let entries: [String: [Int64]]
                let punctuation: [String: Int64]?
            }
            let parsed = try JSONDecoder().decode(LexiconFile.self, from: lexData)
            self.lexicon = parsed.entries
            var punct: [Character: Int64] = [:]
            for (k, v) in parsed.punctuation ?? [:] {
                if let ch = k.first { punct[ch] = v }
            }
            self.punctuationIds = punct
        }

        self.env = try ORTEnv(loggingLevel: .warning)
        let cacheRoot = try AcceleratedVoiceSession.cacheDirectory(root: root)
        let modelURL = path.appendingPathComponent("model.onnx")
        self.session = try AcceleratedVoiceSession(
            env: env,
            model: modelURL,
            module: "vits_lite",
            mode: computeMode,
            cache: cacheRoot.appendingPathComponent("fast-" + voice.id)
        )
    }

    func synthesize(_ text: String, speed: Float, cancellation: SpeechCancellation) throws -> [Float] {
        let started = ProcessInfo.processInfo.systemUptime
        try cancellation.check()
        session.resetMetrics()

        var ids = try textToPhoneIds(text)
        if config.addBlank ?? true {
            let blank = config.blankId ?? 0
            var interleaved: [Int64] = [blank]
            interleaved.reserveCapacity(ids.count * 2 + 1)
            for id in ids {
                interleaved.append(id)
                interleaved.append(blank)
            }
            ids = interleaved
        }
        guard !ids.isEmpty, ids.count <= 900 else {
            throw CompanionError.message("极速语音音素长度无效，请拆成短句。")
        }

        try cancellation.check()
        let xName = config.inputX ?? "x"
        let lenName = config.inputLengths ?? "x_length"
        let outName = config.outputAudio ?? "y"
        let clampedSpeed = max(0.7, min(1.3, speed.isFinite ? speed : 1.0))
        let lengthScale = (config.lengthScale ?? 1.0) / clampedSpeed
        let noiseScale = config.noiseScale ?? 0.667
        let noiseScaleW = config.noiseScaleW ?? 0.8

        var inputs: [String: ORTValue] = [
            xName: try Self.tensor(ids, [1, ids.count]),
            lenName: try Self.tensor([Int64(ids.count)], [1])
        ]
        if config.useScalesVector ?? true {
            inputs[config.inputScales ?? "scales"] = try Self.tensor([noiseScale, lengthScale, noiseScaleW], [3])
        } else {
            inputs["noise_scale"] = try Self.tensor([noiseScale], [1])
            inputs["length_scale"] = try Self.tensor([lengthScale], [1])
            inputs["noise_scale_w"] = try Self.tensor([noiseScaleW], [1])
        }
        if let sid = config.speakerId {
            inputs[config.inputSid ?? "sid"] = try Self.tensor([sid], [1])
        }

        let output = try autoreleasepool {
            try session.run(inputs, [outName])
        }
        try cancellation.check()
        guard let audioTensor = output[outName] else {
            throw CompanionError.message("极速语音模型未输出音频。")
        }
        let samples = try Self.floats(audioTensor.tensorData() as Data)
        guard !samples.isEmpty, samples.count <= sampleRate * 25, samples.allSatisfy(\.isFinite) else {
            throw CompanionError.message("极速语音生成的音频无效。")
        }
        let elapsed = ProcessInfo.processInfo.systemUptime - started
        let duration = Double(samples.count) / Double(sampleRate)
        diagnostics = "方案B1 极速轻量 VITS-Lite（常驻单次推理）\n本段合成 " +
            String(format: "%.2fs / 音频 %.2fs · RTF %.2f", elapsed, duration, elapsed / max(duration, 0.001)) +
            "\n" + session.summary
        return samples
    }

    private func textToPhoneIds(_ text: String) throws -> [Int64] {
        if config.frontend == "qiban_g2p" {
            let data = try text.withCString { tp in
                try voice.language.withCString { lp -> Data in
                    guard let res = qiban_g2p_process(tp, lp) else { throw CompanionError.message("极速文字转音素失败。") }
                    defer { qiban_g2p_free(res) }
                    return Data(String(cString: res).utf8)
                }
            }
            let parsed = try JSONDecoder().decode(VoicePhones.self, from: data)
            if let err = parsed.error { throw CompanionError.message("极速前端错误：\(err)") }
            guard let rawIds = parsed.ids, !rawIds.isEmpty else {
                throw CompanionError.message("极速音素为空。")
            }
            let vocab = Int64(config.vocabSize ?? 732)
            if let map = config.phoneMap {
                return rawIds.compactMap { map[String($0)] }.filter { $0 >= 0 && $0 < vocab }
            }
            return rawIds.filter { $0 >= 0 && $0 < vocab }
        }

        guard let lex = lexicon else { throw CompanionError.message("极速语音词典未加载。") }
        let chars = Array(text)
        var result: [Int64] = []
        var i = 0
        while i < chars.count {
            let ch = chars[i]
            if ch.isWhitespace { i += 1; continue }
            if let pid = punctuationIds[ch] {
                result.append(pid)
                i += 1
                continue
            }
            var matched = false
            let maxLen = min(4, chars.count - i)
            for len in stride(from: maxLen, through: 1, by: -1) {
                let slice = String(chars[i..<(i + len)])
                if let seq = lex[slice] ?? lex[slice.lowercased()] {
                    result.append(contentsOf: seq)
                    i += len
                    matched = true
                    break
                }
            }
            if !matched { i += 1 }
        }
        guard !result.isEmpty else { throw CompanionError.message("当前台词无法映射到极速语音音素。") }
        return result
    }

    private static func tensor(_ array: [Int64], _ shape: [Int]) throws -> ORTValue {
        try array.withUnsafeBufferPointer {
            try ORTValue(tensorData: NSMutableData(data: Data(buffer: $0)), elementType: .int64, shape: shape.map { NSNumber(value: $0) })
        }
    }

    private static func tensor(_ array: [Float], _ shape: [Int]) throws -> ORTValue {
        try array.withUnsafeBufferPointer {
            try ORTValue(tensorData: NSMutableData(data: Data(buffer: $0)), elementType: .float, shape: shape.map { NSNumber(value: $0) })
        }
    }

    private static func floats(_ data: Data) throws -> [Float] {
        guard data.count % 4 == 0 else { throw CompanionError.message("极速语音输出浮点格式无效。") }
        return data.withUnsafeBytes { bytes in
            stride(from: 0, to: bytes.count, by: 4).map { bytes.loadUnaligned(fromByteOffset: $0, as: Float.self) }
        }
    }
}
