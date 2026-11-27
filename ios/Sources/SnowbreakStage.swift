import SwiftUI
import WebKit
import Compression

struct SnowbreakLibrary {
    static let maxPackageBytes = 1024 * 1024 * 1024 // 1 GB compressed (ready for interactive rooms)
    static let maxDecodedBytes = 1536 * 1024 * 1024 // 1.5 GB decoded
    static let supportedCharacters = ["Enya","Fenny","Katya","Cherno","Longyan","Nerida","Mia","Clarina","HeimdallQ"]
    let directory: URL
    init(directory: URL? = nil) {
        self.directory = directory ?? FileManager.default.urls(for:.applicationSupportDirectory,in:.userDomainMask)[0]
            .appendingPathComponent(AppIdentity.storageNamespace+"/SnowbreakLibrary",isDirectory:true)
        for deprecated in ["Augusta.snowbreak","Qingxiao.snowbreak"] {
            try? FileManager.default.removeItem(at: self.directory.appendingPathComponent(deprecated))
        }
    }
    var current: URL { directory.appendingPathComponent("current.snowbreak") }
    var universalMotionsURL: URL { directory.appendingPathComponent("universal-motions.json") }
    var hasUniversalMotions: Bool { FileManager.default.fileExists(atPath: universalMotionsURL.path) }
    func savedFile(_ id:String)->URL {
        let safe = Self.supportedCharacters.contains(id) ? id : "Enya"
        return directory.appendingPathComponent("\(safe).snowbreak")
    }
    var savedCharacters:[String] {Self.supportedCharacters.filter{FileManager.default.fileExists(atPath:savedFile($0).path)}}
    var hasCurrent: Bool { FileManager.default.fileExists(atPath:current.path) }
    func loadUniversalMotionsObject() -> [String:Any]? {
        guard let data = try? Data(contentsOf: universalMotionsURL),
              let obj = try? JSONSerialization.jsonObject(with: data) as? [String:Any] else { return nil }
        return obj
    }
    func saveUniversalMotions(_ data: Data) throws -> [String:Any] {
        guard (16...16*1024*1024).contains(data.count),
              let incoming = try? JSONSerialization.jsonObject(with: data) as? [String:Any],
              let schema = incoming["schema"] as? String,
              schema.hasPrefix("companion-upper-body-transfer/"),
              let incomingClips = incoming["clips"] as? [[String:Any]], !incomingClips.isEmpty else {
            throw CompanionError.message("请选择有效的通用动作包（.qmotion）。")
        }
        var merged = loadUniversalMotionsObject() ?? incoming
        var existingClips = (merged["clips"] as? [[String:Any]]) ?? []
        var byID: [String: [String:Any]] = [:]
        var order: [String] = []
        for clip in existingClips {
            if let id = clip["id"] as? String { byID[id] = clip; if !order.contains(id) { order.append(id) } }
        }
        for clip in incomingClips {
            if let id = clip["id"] as? String { byID[id] = clip; if !order.contains(id) { order.append(id) } }
        }
        merged["schema"] = incoming["schema"]
        merged["sourceCharacter"] = incoming["sourceCharacter"] ?? "UniversalMMD"
        merged["targetCharacter"] = "Universal"
        merged["stance"] = incoming["stance"] ?? "standing"
        merged["clips"] = order.compactMap { byID[$0] }
        try FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
        let encoded = try JSONSerialization.data(withJSONObject: merged)
        try encoded.write(to: universalMotionsURL, options: [.atomic, .completeFileProtection])
        return merged
    }
    func stage(_ data: Data) throws -> URL {
        guard (22...Self.maxPackageBytes).contains(data.count), data.prefix(4) == Data([0x50,0x4b,3,4]) else {
            throw CompanionError.message("请选择完整的角色 .snowbreak 素材包（不超过 1 GB）。")
        }
        try FileManager.default.createDirectory(at:directory,withIntermediateDirectories:true)
        let url = directory.appendingPathComponent("staged-\(UUID().uuidString).snowbreak")
        try data.write(to:url,options:[.atomic,.completeFileProtection]); return url
    }
    /// Zero-copy file staging for large packages (up to 1 GB): verifies magic header without loading file into RAM.
    func stageFile(_ sourceURL: URL) throws -> URL {
        let size = try sourceURL.resourceValues(forKeys:[.fileSizeKey]).fileSize ?? Int.max
        guard (22...Self.maxPackageBytes).contains(size) else {
            throw CompanionError.message("请选择完整的角色 .snowbreak 素材包（不超过 1 GB）。")
        }
        let handle = try FileHandle(forReadingFrom: sourceURL)
        defer { try? handle.close() }
        let header = handle.readData(ofLength: 4)
        guard header == Data([0x50,0x4b,3,4]) else {
            throw CompanionError.message("文件不是有效的 .snowbreak ZIP 资源包。")
        }
        try FileManager.default.createDirectory(at:directory,withIntermediateDirectories:true)
        let dst = directory.appendingPathComponent("staged-\(UUID().uuidString).snowbreak")
        if FileManager.default.fileExists(atPath: dst.path) { try? FileManager.default.removeItem(at: dst) }
        try FileManager.default.copyItem(at: sourceURL, to: dst)
        try? FileManager.default.setAttributes([.protectionKey: FileProtectionType.complete], ofItemAtPath: dst.path)
        return dst
    }
    private func copyReplacing(from src: URL, to dst: URL) throws {
        let tmp = dst.deletingLastPathComponent().appendingPathComponent(".tmp-\(UUID().uuidString)-\(dst.lastPathComponent)")
        defer { try? FileManager.default.removeItem(at: tmp) }
        try FileManager.default.copyItem(at: src, to: tmp)
        try? FileManager.default.setAttributes([.protectionKey: FileProtectionType.complete], ofItemAtPath: tmp.path)
        if FileManager.default.fileExists(atPath: dst.path) {
            _ = try FileManager.default.replaceItemAt(dst, withItemAt: tmp)
        } else {
            try FileManager.default.moveItem(at: tmp, to: dst)
        }
    }
    func commit(_ staged: URL,characterID:String = "Enya") throws {
        guard Self.supportedCharacters.contains(characterID) else{throw CompanionError.message("不支持的角色标识。")}
        guard staged.deletingLastPathComponent().standardizedFileURL == directory.standardizedFileURL,
              staged.lastPathComponent.hasPrefix("staged-") else { throw CompanionError.message("角色暂存路径无效。") }
        try copyReplacing(from: staged, to: savedFile(characterID))
        try copyReplacing(from: staged, to: current)
        try? FileManager.default.removeItem(at:staged)
    }
    func ensureSavedCopy(for characterID: String) throws {
        guard hasCurrent, !savedCharacters.contains(characterID) else { return }
        try copyReplacing(from: current, to: savedFile(characterID))
    }
}

final class SnowbreakScheme: NSObject, WKURLSchemeHandler {
    struct ZipEntry {
        let offset: Int
        let compressed: Int
        let original: Int
        let method: UInt16
    }
    struct MappedArchive {
        let path: String
        let modTime: TimeInterval
        let size: Int
        let data: Data
        let total: Int
        let entries: [String: ZipEntry]
    }
    let library: SnowbreakLibrary
    private let lock = NSLock()
    private var cached: MappedArchive?
    init(library:SnowbreakLibrary) { self.library = library }
    func clearCache() { lock.lock(); cached = nil; lock.unlock() }

    private func validPackageName(_ name: String) -> Bool {
        name == "current.snowbreak" || name.range(of:"^staged-[A-Fa-f0-9-]{36}\\.snowbreak$",options:.regularExpression) != nil
    }
    private func resolvePackageFile(_ name: String) throws -> URL {
        guard validPackageName(name) else { throw URLError(.badURL) }
        let direct = library.directory.appendingPathComponent(name)
        if FileManager.default.fileExists(atPath: direct.path) { return direct }
        if name.hasPrefix("staged-"), library.hasCurrent { return library.current }
        throw URLError(.fileDoesNotExist)
    }
    private static func readU16(_ bytes: UnsafeRawBufferPointer, _ offset: Int) -> UInt16 {
        UInt16(bytes[offset]) | (UInt16(bytes[offset + 1]) << 8)
    }
    private static func readU32(_ bytes: UnsafeRawBufferPointer, _ offset: Int) -> UInt32 {
        UInt32(bytes[offset]) | (UInt32(bytes[offset + 1]) << 8) | (UInt32(bytes[offset + 2]) << 16) | (UInt32(bytes[offset + 3]) << 24)
    }
    private func openMapped(_ name: String) throws -> MappedArchive {
        let file = try resolvePackageFile(name)
        let values = try file.resourceValues(forKeys:[.fileSizeKey, .contentModificationDateKey])
        let size = values.fileSize ?? 0
        guard size >= 22, size <= SnowbreakLibrary.maxPackageBytes else { throw URLError(.dataLengthExceedsMaximum) }
        let mtime = values.contentModificationDate?.timeIntervalSince1970 ?? 0

        lock.lock()
        if let hit = cached, hit.path == file.path, hit.size == size, hit.modTime == mtime {
            lock.unlock()
            return hit
        }
        lock.unlock()

        let data = try Data(contentsOf: file, options: .mappedIfSafe)
        var entries: [String: ZipEntry] = [:]
        var totalDecoded = 0

        try data.withUnsafeBytes { raw in
            let len = raw.count
            var eocd = -1
            let minPos = max(0, len - 65557)
            var i = len - 22
            while i >= minPos {
                if Self.readU32(raw, i) == 0x06054b50 && i + 22 + Int(Self.readU16(raw, i + 20)) == len {
                    eocd = i; break
                }
                i -= 1
            }
            guard eocd >= 0, Self.readU16(raw, eocd + 4) == 0, Self.readU16(raw, eocd + 6) == 0 else {
                throw URLError(.cannotDecodeContentData)
            }
            let count = Int(Self.readU16(raw, eocd + 10))
            let start = Int(Self.readU32(raw, eocd + 16))
            let cdSize = Int(Self.readU32(raw, eocd + 12))
            guard count > 0, count <= 1024, start + cdSize == eocd, Int(Self.readU16(raw, eocd + 8)) == count else {
                throw URLError(.cannotDecodeContentData)
            }
            var pos = start
            for _ in 0..<count {
                guard pos + 46 <= eocd, Self.readU32(raw, pos) == 0x02014b50 else { throw URLError(.cannotDecodeContentData) }
                let flags = Self.readU16(raw, pos + 8)
                let method = Self.readU16(raw, pos + 10)
                let compSize = Int(Self.readU32(raw, pos + 20))
                let origSize = Int(Self.readU32(raw, pos + 24))
                let nLen = Int(Self.readU16(raw, pos + 28))
                let extraLen = Int(Self.readU16(raw, pos + 30))
                let commentLen = Int(Self.readU16(raw, pos + 32))
                let localOff = Int(Self.readU32(raw, pos + 42))
                guard pos + 46 + nLen + extraLen + commentLen <= eocd else { throw URLError(.cannotDecodeContentData) }
                let nameData = Data(bytesNoCopy: UnsafeMutableRawPointer(mutating: raw.baseAddress!.advanced(by: pos + 46)), count: nLen, deallocator: .none)
                guard let entryName = String(data: nameData, encoding: .utf8),
                      entryName == "manifest.json" || entryName.range(of:"^assets/[a-f0-9]{64}$",options:.regularExpression) != nil,
                      entries[entryName] == nil else { throw URLError(.cannotDecodeContentData) }
                guard (flags & 1) == 0, (method == 0 || method == 8), origSize <= 128*1024*1024 else { throw URLError(.cannotDecodeContentData) }
                totalDecoded += origSize
                guard totalDecoded <= SnowbreakLibrary.maxDecodedBytes else { throw URLError(.dataLengthExceedsMaximum) }
                guard localOff + 30 <= start, Self.readU32(raw, localOff) == 0x04034b50 else { throw URLError(.cannotDecodeContentData) }
                let ln = Int(Self.readU16(raw, localOff + 26))
                let le = Int(Self.readU16(raw, localOff + 28))
                let dataOff = localOff + 30 + ln + le
                guard dataOff + compSize <= start else { throw URLError(.cannotDecodeContentData) }
                entries[entryName] = ZipEntry(offset: dataOff, compressed: compSize, original: origSize, method: method)
                pos += 46 + nLen + extraLen + commentLen
            }
            guard pos == eocd, entries["manifest.json"] != nil else { throw URLError(.cannotDecodeContentData) }
        }

        let mapped = MappedArchive(path: file.path, modTime: mtime, size: size, data: data, total: totalDecoded, entries: entries)
        lock.lock(); cached = mapped; lock.unlock()
        return mapped
    }
    private func extractEntry(_ archive: MappedArchive, name: String) throws -> Data {
        guard let entry = archive.entries[name] else { throw URLError(.fileDoesNotExist) }
        if entry.original == 0 { return Data() }
        if entry.method == 0 {
            return archive.data.subdata(in: entry.offset..<(entry.offset + entry.compressed))
        }
        var out = Data(count: entry.original + 64)
        let decodedCount: Int = out.withUnsafeMutableBytes { dstBuf in
            archive.data.withUnsafeBytes { srcBuf in
                guard let dstPtr = dstBuf.bindMemory(to: UInt8.self).baseAddress,
                      let srcBase = srcBuf.bindMemory(to: UInt8.self).baseAddress else { return 0 }
                return compression_decode_buffer(dstPtr, entry.original + 64, srcBase.advanced(by: entry.offset), entry.compressed, nil, COMPRESSION_ZLIB)
            }
        }
        guard decodedCount == entry.original else { throw URLError(.cannotDecodeContentData) }
        out.count = decodedCount
        return out
    }
    func resource(_ url:URL) throws -> (Data,String) {
        guard url.scheme == "companion-snowbreak",url.host == "local",url.query == nil else { throw URLError(.badURL) }
        if ["/index.html","/host.js"].contains(url.path) {
            guard let root = Bundle.main.resourceURL?.appendingPathComponent("WebAssets") else { throw URLError(.fileDoesNotExist) }
            return (try Data(contentsOf:root.appendingPathComponent(url.lastPathComponent)),url.path.hasSuffix(".js") ? "application/javascript" : "text/html")
        }
        let comps = url.pathComponents
        // Streaming index: /pkg-index/<packageName>
        if comps.count == 3, comps[1] == "pkg-index" {
            let archive = try openMapped(comps[2])
            let manifestData = try extractEntry(archive, name: "manifest.json")
            let manifestObj = try JSONSerialization.jsonObject(with: manifestData)
            let payload: [String: Any] = ["names": Array(archive.entries.keys), "total": archive.total, "manifest": manifestObj]
            return (try JSONSerialization.data(withJSONObject: payload), "application/json")
        }
        // Streaming single asset: /pkg-entry/<packageName>/<sha256>
        if comps.count == 4, comps[1] == "pkg-entry" {
            let assetId = comps[3]
            guard assetId.range(of:"^[a-f0-9]{64}$",options:.regularExpression) != nil else { throw URLError(.badURL) }
            let archive = try openMapped(comps[2])
            let assetData = try extractEntry(archive, name: "assets/" + assetId)
            return (assetData, "application/octet-stream")
        }
        // Legacy full package route (memory-mapped, up to 1 GB)
        let name = url.lastPathComponent
        guard url.path == "/package/"+name else { throw URLError(.badURL) }
        let file = try resolvePackageFile(name)
        guard let size = try file.resourceValues(forKeys:[.fileSizeKey]).fileSize, size <= SnowbreakLibrary.maxPackageBytes else { throw URLError(.dataLengthExceedsMaximum) }
        return (try Data(contentsOf:file, options:.mappedIfSafe),"application/octet-stream")
    }
    func webView(_ webView:WKWebView,start urlSchemeTask:WKURLSchemeTask) {
        do {
            guard let url = urlSchemeTask.request.url else { throw URLError(.badURL) }
            let (data,type) = try resource(url)
            let response = HTTPURLResponse(url:url,statusCode:200,httpVersion:"HTTP/1.1",headerFields:[
                "Content-Type":type,"Content-Length":String(data.count),"Access-Control-Allow-Origin":"*","Cache-Control":"no-store"])!
            urlSchemeTask.didReceive(response);urlSchemeTask.didReceive(data);urlSchemeTask.didFinish()
        } catch { urlSchemeTask.didFailWithError(error) }
    }
    func webView(_ webView:WKWebView,stop urlSchemeTask:WKURLSchemeTask) { }
}

struct SnowbreakTouchEvent {
    let id = UUID(); let label:String;var gesture="tap";var confidence=1.0;var source="manual-skinned-triangle";var held=false
    var message:String {
        let kind=["tap":"轻触","double_tap":"连续轻触","long_press":"按住","stroke":"抚摸","drag":"拉动／调整"][gesture] ?? "触碰"
        let holdNote = held ? "（用户自由调整完成后已松手，并保持了当前腿部姿态）" : ""
        return "[屏幕触碰] 用户\(kind)了你的\(label)\(holdNote)。识别来源：\(source)，置信度\(Int(confidence*100))%。这是模型表面事件，不代表现实触觉；具体部位未确认时不能自行猜测。请按人设决定回应或拒绝，额外动作只在你接受时选择。"
    }
}

@MainActor final class SnowbreakStage: NSObject, ObservableObject, WKScriptMessageHandler, WKNavigationDelegate {
    static func displayName(for id:String) -> String {
        switch id {
        case "Fenny": return "芬妮婚皮"
        case "Katya": return "凯茜娅 · 婚约"
        case "Cherno": return "琴诺 · 见习侍奉"
        case "Longyan": return "胧嫣 · 珠光曳影"
        case "Nerida": return "奈莉德 · 热沙激浪"
        case "Mia": return "米娅 · 星空魅影"
        case "Clarina": return "克罗瑞娜 · 绯月"
        case "HeimdallQ": return "海姆达尔 · Q版小人"
        default: return "恩雅护士"
        }
    }
    @Published private(set) var characterID="Enya"
    var characterName:String {Self.displayName(for: characterID)}
    var modelKey:String {characterID.lowercased()}
    @Published private(set) var savedCharacters:[String]=[]
    @Published private(set) var sampleLabels:[String:String]=[:]
    @Published private(set) var universalLabels:[String:String]=[:]
    @Published private(set) var ready = false
    @Published private(set) var isEditing=false
    @Published private(set) var isInteracting=false
    @Published private(set) var arModeEnabled=false
    @Published private(set) var proportionMode="normal"
    @Published private(set) var error: String?
    @Published private(set) var notice: String?
    @Published private(set) var activeAction: String?
    @Published private(set) var actions: [String] = []
    @Published private(set) var touch: SnowbreakTouchEvent?
    private(set) var interactionRevision = 0
    private var arFrameInFlight = false
    var universalARActions:[String] { actions.filter { $0.hasPrefix("universal_ar_") } }
    let library:SnowbreakLibrary
    private weak var webView:WKWebView?
    private var pageReady = false
    private var paused = false
    private var needsRenderRecovery=false
    private var lastRenderRecovery=Date.distantPast
    private var staged:URL?
    private var nonce = UUID().uuidString
    @Published private(set) var companionMode = "standing"
    @Published private(set) var companionOutfit = "normal"
    @Published private(set) var variantIDs:[String] = []
    @Published private(set) var variantLabels:[String:String] = [:]
    private var pendingPreferredVariant: String?
    @Published private(set) var bodyActions:[String] = []
    @Published private(set) var bodyState = BodyState()
    var outfitLabel:String {
        if let custom = variantLabels[companionMode + "_" + companionOutfit] { return custom }
        return companionOutfit == "underwear" ? "婚纱内衣版":companionOutfit == "nude" ? "果体版":companionOutfit == "lv2" ? "Lv2 形态":characterID == "Fenny" ? "原婚纱":"正常服饰"
    }
    var availableModes:[String] { ["standing","interaction"].filter { m in variantIDs.contains { $0.hasPrefix(m+"_") } } }
    var availableOutfits:[String] {
        if characterID == "HeimdallQ" {
            let prefix = companionMode + "_"
            return variantIDs.filter { $0.hasPrefix(prefix) }.map { String($0.dropFirst(prefix.count)) }
        }
        return ["normal","nude","underwear","lv2"].filter { o in variantIDs.contains(companionMode+"_"+o) }
    }
    var dialogueActions:[String] {
        guard ready else{return []}
        var result=actions+bodyActions
        if characterID == "Fenny" {
            for outfit in ["normal","underwear"] where variantIDs.contains(companionMode+"_"+outfit){result.append("fenny_outfit_"+outfit)}
            if ["standing","interaction"].allSatisfy({variantIDs.contains($0+"_"+companionOutfit)}){result += ["fenny_mode_standing","fenny_mode_interaction"]}
        } else if characterID == "Enya" && variantIDs.count == 4 {
            result += ["enya_outfit_normal","enya_outfit_nude","enya_mode_standing","enya_mode_interaction"]
        } else {
            if availableOutfits.count > 1 {
                for outfit in availableOutfits { result.append("snowbreak_outfit_"+outfit) }
            }
            if availableModes.count > 1 {
                for mode in availableModes { result.append("snowbreak_mode_"+mode) }
            }
        }
        return result
    }
    func refreshBodyState() async {
        guard ready else {bodyState = BodyState(lastResult:"模型未就绪或正在切换");return}
        guard let webView = webView,let result = try? await webView.evaluateJavaScript("window.SnowbreakHost.inspect()"),let value = result as? [String:Any] else {return}
        updateBody(value)
    }
    private func updateBody(_ value:[String:Any]) {
        if let available=value["available"] as? [String] {bodyActions=available.filter{BodyCommand(rawValue:$0) != nil || BodyGesture.ids.contains($0)}}
        bodyState = BodyState(outfit:companionOutfit == "nude" ? "当前已加载\(characterName)果体版模型，没有穿衣":companionOutfit == "underwear" ? "当前加载芬妮婚纱内衣版，穿有胸衣、手套、袜饰，保留头纱与装饰，不是裸体":companionOutfit == "lv2" ? "当前已加载\(characterName) Lv2 形态模型":companionOutfit == "normal" ? "当前已加载\(characterName)正常服饰模型":"当前已加载\(characterName)模型",
            eyes:value["eyes"] as? String ?? "未确认",hands:value["hands"] as? String ?? "未确认",facing:value["facing"] as? String ?? "未确认",legs:value["legs"] as? String ?? "未确认",lastResult:(value["lastResult"] as? String ?? "无回执")+((value["legResult"] as? String).flatMap{$0.isEmpty ? nil:"；"+$0} ?? "")+((value["interactionScene"] as? String).map{"；保持互动场景："+$0} ?? ""))
    }
    func executeBody(_ command:BodyCommand,automatic:Bool = false) async -> Bool {
        guard ready,!paused,!(automatic && isEditing),bodyActions.contains(command.rawValue) else {return false}
        if !automatic {interactionRevision += 1}
        send(["type":"body","id":command.rawValue,"automatic":automatic]);try? await Task.sleep(nanoseconds:850_000_000)
        await refreshBodyState();return ready && !paused
    }
    func portrait() async throws -> CameraFrame {
        guard ready,!paused,let webView = webView,let text = try await webView.evaluateJavaScript("window.SnowbreakHost.portrait()") as? String,
              let segment = text.split(separator:",").last,let data = Data(base64Encoded:String(segment)) else {throw CompanionError.message("尚未获取到自身模型画面。")}
        return try CameraFrame(jpeg:data,source:.selfPortrait)
    }
    func selectVariant(mode:String? = nil,outfit:String? = nil) {
        let nextMode = mode ?? companionMode
        let nextOutfit = outfit ?? companionOutfit
        let id = nextMode + "_" + nextOutfit
        guard ready,variantIDs.contains(id) else { return }
        companionMode = nextMode; companionOutfit = nextOutfit
        interactionRevision += 1;activeAction = nil;ready = false;send(["type":"variant","id":id])
    }

    private var schemeHandler: SnowbreakScheme?
    private var budgetObservers: [NSObjectProtocol] = []

    init(library:SnowbreakLibrary = SnowbreakLibrary()) {
        self.library = library
        self.savedCharacters = library.savedCharacters
        super.init()
        let o1 = NotificationCenter.default.addObserver(forName: AppleHardwareBudget.modeChangedNotification, object: nil, queue: .main) { [weak self] note in
            let reload = (note.userInfo?["reloadOnTierChange"] as? Bool) ?? false
            Task { @MainActor in self?.applyHardwareBudget(reloadOnTierChange: reload) }
        }
        let o2 = NotificationCenter.default.addObserver(forName: AppleHardwareBudget.releaseMemoryNotification, object: nil, queue: .main) { [weak self] note in
            let reload = (note.userInfo?["reload"] as? Bool) ?? false
            Task { @MainActor in self?.releaseMemory(reload: reload) }
        }
        budgetObservers = [o1, o2]
    }
    deinit {
        for o in budgetObservers { NotificationCenter.default.removeObserver(o) }
    }
    func releaseMemory(reload: Bool = false) {
        schemeHandler?.clearCache()
        URLCache.shared.removeAllCachedResponses()
        send(["type":"releaseMemory","reload":reload])
    }
    func makeView() -> WKWebView {
        let configuration = WKWebViewConfiguration()
        let handler = SnowbreakScheme(library:library)
        schemeHandler = handler
        configuration.setURLSchemeHandler(handler,forURLScheme:"companion-snowbreak")
        configuration.userContentController.add(self,name:"snowbreak")
        configuration.allowsInlineMediaPlayback = true
        // User-initiated native menu actions should be able to play local original WAVs.
        configuration.mediaTypesRequiringUserActionForPlayback = []
        let view = WKWebView(frame:.zero,configuration:configuration)
        view.navigationDelegate = self;view.isOpaque = false;view.backgroundColor = .clear
        view.scrollView.isScrollEnabled = false
        webView = view;pageReady = false;ready = false;needsRenderRecovery=false
        view.load(URLRequest(url:URL(string:"companion-snowbreak://local/index.html")!));return view
    }
    @discardableResult func importFile(_ url:URL) -> Bool {
        do {
            let access = url.startAccessingSecurityScopedResource();defer { if access { url.stopAccessingSecurityScopedResource() } }
            var coordinationError:NSError?,readError:Error?,stagedURL:URL?
            NSFileCoordinator().coordinate(readingItemAt:url,options:[],error:&coordinationError) { file in
                do {
                    stagedURL = try library.stageFile(file)
                } catch { readError = error }
            }
            if let failure = coordinationError { throw failure }
            if let failure = readError { throw failure }
            guard let stagedURL = stagedURL else { throw CompanionError.message("没有读到角色包。") }
            schemeHandler?.clearCache()
            staged = stagedURL;nonce = UUID().uuidString;ready = false;error = nil
            UserDefaults.standard.set("snowbreak",forKey:"characterEngine")
            if pageReady { loadSelected() }
            return true
        } catch { self.error = error.localizedDescription;return false }
    }
    @discardableResult func importUniversalMotion(_ url:URL) -> Bool {
        do {
            let access = url.startAccessingSecurityScopedResource();defer { if access { url.stopAccessingSecurityScopedResource() } }
            var coordinationError:NSError?,readError:Error?,data:Data?
            NSFileCoordinator().coordinate(readingItemAt:url,options:[],error:&coordinationError) { file in
                do {
                    let size = try file.resourceValues(forKeys:[.fileSizeKey]).fileSize ?? Int.max
                    guard size <= 16*1024*1024 else { throw CompanionError.message("通用动作包超过16MB。") }
                    data = try Data(contentsOf:file)
                } catch { readError = error }
            }
            if let failure = coordinationError { throw failure }
            if let failure = readError { throw failure }
            guard let data = data else { throw CompanionError.message("没有读到通用动作包。") }
            let catalog = try library.saveUniversalMotions(data)
            error = nil; notice = "已导入通用动作包，所有 3D 角色均可使用。"
            if pageReady { send(["type":"universalMotions","catalog":catalog]) }
            return true
        } catch { self.error = error.localizedDescription; return false }
    }
    private func pushUniversalMotions() {
        if let catalog = library.loadUniversalMotionsObject() {
            send(["type":"universalMotions","catalog":catalog])
        }
    }
    private func loadSelected() {
        let file = staged ?? (library.hasCurrent ? library.current : nil)
        guard let file = file else { error = "请在设置中导入本地角色 .snowbreak 包。";return }
        applyHardwareBudget()
        pushUniversalMotions()
        var payload:[String:Any] = ["type":"load","url":"companion-snowbreak://local/package/"+file.lastPathComponent,"nonce":nonce]
        if let pref = pendingPreferredVariant { payload["preferredVariant"] = pref; pendingPreferredVariant = nil }
        send(payload)
    }
    private func send(_ value:[String:Any]) {
        guard pageReady,let data = try? JSONSerialization.data(withJSONObject:value),let json = String(data:data,encoding:.utf8) else { return }
        webView?.evaluateJavaScript("window.SnowbreakHost.receive(\(json))",completionHandler:nil)
    }
    func userContentController(_ userContentController:WKUserContentController,didReceive message:WKScriptMessage) {
        guard message.webView === webView,message.frameInfo.isMainFrame,
              message.frameInfo.request.url?.scheme == "companion-snowbreak",
              let body = message.body as? [String:Any],let type = body["type"] as? String else { return }
        if type == "pageReady" { pageReady = true;loadSelected();return }
        guard body["nonce"] as? String == nonce else { return }
        switch type {
        case "editing": isEditing=body["active"] as? Bool == true
        case "interacting": isInteracting=body["active"] as? Bool == true
        case "universalReady":
            let learned = body["learned"] as? [String] ?? []
            let rawUniversal = body["learnedLabels"] as? [String:String] ?? [:]
            for (k, v) in rawUniversal where k.hasPrefix("mmd_") || k.hasPrefix("ar_") {
                universalLabels["universal_" + k] = v
            }
            let existingSamples = Set(actions.filter { $0.hasPrefix("snowbreak_") }.map { String($0.dropFirst("snowbreak_".count)) })
            actions.removeAll { $0.hasPrefix("universal_") }
            for clip in learned where (clip.hasPrefix("mmd_") || clip.hasPrefix("ar_")) && !existingSamples.contains(clip) {
                actions.append("universal_" + clip)
            }
        case "ready":
            applyHardwareBudget();isEditing=false;isInteracting=false
            guard let identity=body["characterId"] as? String,SnowbreakLibrary.supportedCharacters.contains(identity) else {error="不支持的角色包。";return}
            do {
                if staged == nil { try library.ensureSavedCopy(for: identity) }
                if let staged = staged { try library.commit(staged,characterID:identity);self.staged = nil;schemeHandler?.clearCache() }
                characterID=identity;savedCharacters=library.savedCharacters
                let variants = body["variants"] as? [[String:String]] ?? []
                let allowedVariants: Set<String> = ["standing_normal","standing_nude","standing_underwear","standing_lv2","interaction_normal","interaction_nude","interaction_underwear","interaction_lv2"]
                var vIDs: [String] = []
                var vLabels: [String:String] = [:]
                for v in variants {
                    guard let id = v["id"] else { continue }
                    let ok = identity == "HeimdallQ"
                        ? id.range(of: "^standing_[a-z0-9_]{1,32}$", options: .regularExpression) != nil
                        : allowedVariants.contains(id)
                    guard ok else { continue }
                    vIDs.append(id)
                    if let lbl = v["label"], !lbl.isEmpty { vLabels[id] = lbl }
                }
                variantIDs = vIDs
                variantLabels = vLabels
                if let selected=body["selection"] as? [String:String] { companionMode=selected["mode"] ?? "standing";companionOutfit=selected["outfit"] ?? "normal" }
                else {companionMode = body["stance"] as? String == "standing" ? "standing":"interaction";companionOutfit = "normal"}
                let samples = body["samples"] as? [String] ?? []
                let rawLabels = body["sampleLabels"] as? [String:String] ?? [:]
                var labelMap: [String:String] = [:]
                for (k,v) in rawLabels { labelMap["snowbreak_" + k] = v }
                sampleLabels = labelMap
                let rawUniversal = body["learnedLabels"] as? [String:String] ?? [:]
                var uMap: [String:String] = [:]
                for (k,v) in rawUniversal where k.hasPrefix("mmd_") || k.hasPrefix("ar_") { uMap["universal_" + k] = v }
                universalLabels = uMap
                if identity == "Enya" || identity == "Fenny" {
                    actions = ["head","left","right","home_login","home_invite","home_shy","home_check","home_kiss","home_jealous","home_marry","home_sigh","home_stage","home_stand","show_02","show_03","show_04","show_05","sequence","idle_01","idle_02"].filter { samples.contains($0) }.map { "snowbreak_"+$0 }
                    if identity == "Fenny" {actions += DialogueMotion.fennyScenes.map(\.id).filter{samples.contains(String($0.dropFirst("snowbreak_".count)))}}
                } else {
                    actions = samples.filter { !$0.contains("_reaction_") && $0.range(of:"^[a-zA-Z0-9_-]{1,64}$",options:.regularExpression) != nil }.map { "snowbreak_" + $0 }
                }
                let learned = body["learned"] as? [String] ?? []
                actions += ["yuki_hello","yuki_Yes","yuki_No","yuki_Peace_hand","yuki_dance_90bpm","yuki_dance_120bpm","yuki_f_vibe_dance_60_bpm_002"].filter { learned.contains($0) && (!$0.contains("dance") || body["stance"] as? String == "standing") }.map { "enya_"+$0 }
                for clip in learned where (clip.hasPrefix("mmd_") || clip.hasPrefix("ar_")) && !samples.contains(clip) {
                    actions.append("universal_" + clip)
                }
                ready = true;error = nil;if notice?.hasPrefix("渲染已中断") == true {notice=nil}
                bodyActions = (body["bodyActions"] as? [String] ?? []).filter{BodyCommand(rawValue:$0) != nil || BodyGesture.ids.contains($0)}
                if paused { send(["type":"pause"]) }
            } catch { self.error = "角色保存失败："+error.localizedDescription }
        case "playback":
            let active = body["active"] as? Bool == true
            // Playback events are not user edits and must not invalidate a pending AI turn.
            let status = body["status"] as? String ?? ""
            let fallbackLabel = status.hasPrefix("learned:ar_") ? "AR 通用动作" : (status.hasPrefix("learned:mmd_") ? "通用动作" : (status.hasPrefix("learned:") ? "学习动作" : "\(characterName)互动"))
            activeAction = active ? String((body["label"] as? String ?? fallbackLabel).prefix(60)) : nil
        case "selfState": if let value = body["state"] as? [String:Any] {updateBody(value)}
        case "touch":
            if !paused,body["completed"] as? Bool == true,let label = body["label"] as? String,label.count <= 30 {
                let confidence=body["confidence"] as? Double ?? 1
                guard confidence.isFinite,(0...1).contains(confidence) else{return}
                interactionRevision += 1;touch = SnowbreakTouchEvent(label:label,gesture:String((body["gesture"] as? String ?? "tap").prefix(24)),confidence:confidence,source:String((body["source"] as? String ?? "manual-skinned-triangle").prefix(60)),held:body["held"] as? Bool == true)
                if UserDefaults.standard.object(forKey:"touchHaptics") as? Bool ?? true {UIImpactFeedbackGenerator(style:.light).impactOccurred()}
            }
        case "error":
            error = String((body["message"] as? String ?? "角色加载失败。").prefix(500));ready = false
            if let failed = staged { try? FileManager.default.removeItem(at:failed);staged = nil }
        case "notice": notice = String((body["message"] as? String ?? "").prefix(200))
        default: break
        }
    }
    func play(_ id:String,withVoice:Bool = true,automatic:Bool = false) {
        guard !(automatic && isEditing) else{return}
        if let plan=BodyGesture.plan(id),ready,!paused,bodyActions.contains(id),let data=try? JSONEncoder().encode(plan),let object=try? JSONSerialization.jsonObject(with:data) {
            if !automatic {interactionRevision += 1};send(["type":"gesture","id":id,"plan":object,"automatic":automatic]);return
        }
        if let command = BodyCommand(rawValue:id) {Task{_ = await executeBody(command,automatic:automatic)};return}
        if id == "stop" { stop();return }
        if ready,dialogueActions.contains(id) {
            if id.hasPrefix("fenny_outfit_"){selectVariant(outfit:String(id.dropFirst("fenny_outfit_".count)));return}
            if id.hasPrefix("fenny_mode_"){selectVariant(mode:String(id.dropFirst("fenny_mode_".count)));return}
            if id.hasPrefix("enya_outfit_") { selectVariant(outfit:String(id.dropFirst("enya_outfit_".count)));return }
            if id.hasPrefix("enya_mode_") { selectVariant(mode:String(id.dropFirst("enya_mode_".count)));return }
            if id.hasPrefix("snowbreak_outfit_") { selectVariant(outfit:String(id.dropFirst("snowbreak_outfit_".count)));return }
            if id.hasPrefix("snowbreak_mode_") { selectVariant(mode:String(id.dropFirst("snowbreak_mode_".count)));return }
        }
        guard ready,actions.contains(id) else { return }
        if !automatic { interactionRevision += 1 }
        notice = nil
        if id.hasPrefix("enya_yuki_") { send(["type":"learned","id":String(id.dropFirst("enya_".count)),"automatic":automatic]);return }
        if id.hasPrefix("universal_") { send(["type":"learned","id":String(id.dropFirst("universal_".count)),"automatic":automatic]);return }
        send(["type":"sample","id":String(id.dropFirst("snowbreak_".count)),"withVoice":withVoice,"automatic":automatic])
    }
    func stop() { interactionRevision += 1;send(["type":"stop"]);activeAction = nil }
    func pause() { paused = true;isEditing=false;isInteracting=false;interactionRevision += 1;send(["type":"pause"]);activeAction = nil }
    func resume() { paused = false;if needsRenderRecovery {recoverRenderProcess();return};applyHardwareBudget();send(["type":"resume"]) }
    func ensureRunning() { guard !paused, pageReady else { return }; if needsRenderRecovery { recoverRenderProcess(); return }; send(["type":"resume"]) }
    func applyHardwareBudget(reloadOnTierChange: Bool = false){send(["type":"hardwareBudget","mode":AppleHardwareBudget.currentMode.webMode,"thermal":AppleHardwareBudget.thermal,"lowPower":ProcessInfo.processInfo.isLowPowerModeEnabled,"reloadOnTierChange":reloadOnTierChange])}
    func editTouch() { interactionRevision += 1;send(["type":"edit"]) }
    func editModel(){interactionRevision += 1;isEditing=true;send(["type":"modelEdit"])}
    func editDance(){send(["type":"danceEdit"])}
    func officialTouchPoints(){send(["type":"officialTouchPoints"])}
    func sceneVisible(_ value:Bool) { send(["type":"scene","visible":value]) }
    func gaze(x:CGFloat,y:CGFloat) { if ready { send(["type":"gaze","x":Double(x),"y":Double(y)]) } }
    func selectCharacter(_ identity:String, preferredVariant:String? = nil){
        guard SnowbreakLibrary.supportedCharacters.contains(identity) else{return}
        if identity == characterID {
            if let pref = preferredVariant, pref.hasPrefix(companionMode + "_") {
                selectVariant(outfit: String(pref.dropFirst((companionMode + "_").count)))
            }
            return
        }
        do {let file=library.savedFile(identity);guard FileManager.default.fileExists(atPath:file.path) else{return};interactionRevision+=1;pause();paused=false;schemeHandler?.clearCache();staged=try library.stageFile(file);pendingPreferredVariant=preferredVariant;nonce=UUID().uuidString;ready=false;error=nil;loadSelected()}catch{self.error=error.localizedDescription}
    }
    func editLighting() { send(["type":"lightingEdit"]) }
    func editFrame() { interactionRevision += 1;isEditing=true;send(["type":"frameEdit"]) }
    func detach(_ view:WKWebView) {
        view.evaluateJavaScript("window.SnowbreakHost?.receive({type:'dispose'})",completionHandler:nil)
        view.stopLoading();view.navigationDelegate = nil
        view.configuration.userContentController.removeScriptMessageHandler(forName:"snowbreak")
        if webView === view { webView = nil;pageReady = false;ready = false;needsRenderRecovery=false }
    }
    func setTouchPolicy(_ value:Bool){send(["type":"touchPolicy","aiControlled":value])}
    func setDeferredFeedback(_ value:Bool){send(["type":"deferredFeedback","enabled":value])}
    func setProportionMode(_ mode:String){
        proportionMode = mode == "chibi" ? "chibi" : "normal"
        send(["type":"proportionMode","mode":proportionMode])
    }
    func setARMode(_ enabled:Bool,hideRoom:Bool = true){
        arModeEnabled = enabled
        send(["type":"arMode","enabled":enabled,"hideRoom":hideRoom])
    }
    func pushARFrame(proj:[Float],mv:[Float],exposure:Float,warmth:Float){
        guard pageReady,ready,arModeEnabled,!paused,!arFrameInFlight,let view = webView,proj.count == 16,mv.count == 16 else { return }
        arFrameInFlight = true
        let pStr = proj.map { String(format: "%.5f", $0) }.joined(separator: ",")
        let mStr = mv.map { String(format: "%.5f", $0) }.joined(separator: ",")
        let js = String(format: "window.SnowbreakHost?.arFrame([%@],[%@],%.4f,%.4f)", pStr, mStr, exposure, warmth)
        view.evaluateJavaScript(js) { [weak self] _, _ in
            Task { @MainActor in self?.arFrameInFlight = false }
        }
    }
    func setSpeechLevel(_ value:Float){if ready{send(["type":"speechLevel","value":value.isFinite ? min(1,max(0,value)):0])}}
    func setVoice(_ value:Bool) { send(["type":"voice","enabled":value]) }
    func setOriginalLanguage(_ language:String){send(["type":"voiceLanguage","language":language == "ja" ? "ja":"zh"])}
    func webView(_ webView:WKWebView,decidePolicyFor navigationAction:WKNavigationAction,decisionHandler:@escaping(WKNavigationActionPolicy)->Void) {
        let url = navigationAction.request.url
        decisionHandler(url?.scheme == "companion-snowbreak" && url?.host == "local" ? .allow : .cancel)
    }
    private func recoverRenderProcess(){
        guard needsRenderRecovery,!paused,let view=webView else{return}
        needsRenderRecovery=false
        guard Date().timeIntervalSince(lastRenderRecovery)>60 else {error="角色渲染重复中断，请关闭其他高内存应用后重新加载角色。";return}
        lastRenderRecovery=Date();pageReady=false;error=nil;notice="渲染已中断，正在恢复当前角色与互动姿势。"
        view.reload()
    }
    func webViewWebContentProcessDidTerminate(_ webView:WKWebView) {
        guard self.webView === webView else{return}
        ready=false;isEditing=false;activeAction=nil;interactionRevision+=1;needsRenderRecovery=true
        recoverRenderProcess()
    }
}

struct SnowbreakCharacterView:UIViewRepresentable {
    @ObservedObject var stage:SnowbreakStage
    final class Coordinator { weak var stage:SnowbreakStage? }
    func makeCoordinator()->Coordinator { Coordinator() }
    func makeUIView(context:Context)->WKWebView {
        context.coordinator.stage = stage
        return stage.makeView()
    }
    func updateUIView(_ view:WKWebView,context:Context) { context.coordinator.stage = stage }
    static func dismantleUIView(_ view:WKWebView,coordinator:Coordinator) {
        if let stage = coordinator.stage {
            stage.detach(view)
        } else {
            view.evaluateJavaScript("window.SnowbreakHost?.receive({type:'dispose'})",completionHandler:nil)
            view.stopLoading();view.navigationDelegate = nil
            view.configuration.userContentController.removeScriptMessageHandler(forName:"snowbreak")
        }
    }
}

struct SnowbreakImportView:View {
    @ObservedObject var stage:SnowbreakStage
    @Environment(\.dismiss) private var dismiss
    @State private var picking = false
    @State private var pickingMotion = false
    @State private var local = false
    var body:some View {
        NavigationStack {
            Form {
                Section("3D 角色皮肤 · 本地导入") {
                    Text("支持导入恩雅、芬妮、凯茜娅、琴诺、胧嫣、奈莉德、米娅、克罗瑞娜及「海姆达尔向前冲 Q版小人合集」等 .snowbreak 角色包。可用模式、动作、场景和原声由素材包决定。")
                    Button("选择角色皮肤包 (.snowbreak)") { picking = true }.accessibilityIdentifier("importSnowbreak")
                    Button("App 文件夹") { local = true }
                    if stage.library.hasCurrent { Text("已保存角色素材，下次启动会从本机加载。") }
                    if let error = stage.error { Text(error).foregroundStyle(.red) }
                }
                Section("通用 3D / AR 动作包") {
                    Text("导入 .qmotion 通用动作包（如奈莉德 AR 通用动作包）后，所有已导入的 3D 角色在看板娘与 AR 模式均可使用。")
                    Button("导入通用动作包 (.qmotion)") { pickingMotion = true }
                    if stage.library.hasUniversalMotions { Text("已安装通用 3D / AR 动作包。").foregroundStyle(.secondary) }
                    if let notice = stage.notice, notice.contains("通用动作") { Text(notice).foregroundStyle(.secondary) }
                }
                Section("触碰") {
                    Text("导入后可在动作菜单切换已保存的角色、陪伴模式和服饰。显示原作触点可查看当前场景已有的触点；也可通过精细触碰表面标注补充身体分区。")
                    Text("原 App 内保存的标注不会跨 App 自动读取；模型和原始互动资源可以沿用。")
                }
            }.navigationTitle("导入 3D 角色与动作")
        }.sheet(isPresented:$picking) {
            CharacterDocumentPicker { result in
                picking = false
                if case .success(let url) = result,let url = url { choose(url) }
            }
        }.sheet(isPresented:$pickingMotion) {
            CharacterDocumentPicker { result in
                pickingMotion = false
                if case .success(let url) = result,let url = url { _ = stage.importUniversalMotion(url) }
            }
        }.sheet(isPresented:$local) { LocalCharacterFileList(choose:choose) }
    }
    private func choose(_ url:URL) {
        if url.pathExtension.lowercased() == "qmotion" {
            _ = stage.importUniversalMotion(url)
        } else if stage.importFile(url) {
            dismiss()
        }
    }
}
