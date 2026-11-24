import Foundation
import zlib

struct CharacterStickerItem: Codable, Identifiable, Equatable {
    let id: String
    var label: String
    let file: String
    let originalName: String
    let mime: String
    let size: Int
    var tags: [String] = []
    var details: String = ""
    var background: String = ""
    var usage: String = ""
    var analyzed: Bool = false

    init(
        id: String,
        label: String,
        file: String,
        originalName: String,
        mime: String,
        size: Int,
        tags: [String] = [],
        details: String = "",
        background: String = "",
        usage: String = "",
        analyzed: Bool = false
    ) {
        self.id = id
        self.label = label
        self.file = file
        self.originalName = originalName
        self.mime = mime
        self.size = size
        self.tags = tags
        self.details = details
        self.background = background
        self.usage = usage
        self.analyzed = analyzed
    }

    private enum CodingKeys: String, CodingKey {
        case id, label, file, originalName, mime, size, tags, details, background, usage, analyzed
    }

    init(from decoder: Decoder) throws {
        let c = try decoder.container(keyedBy: CodingKeys.self)
        id = try c.decode(String.self, forKey: .id)
        label = try c.decode(String.self, forKey: .label)
        file = try c.decode(String.self, forKey: .file)
        originalName = try c.decodeIfPresent(String.self, forKey: .originalName) ?? file
        mime = try c.decodeIfPresent(String.self, forKey: .mime) ?? "image/png"
        size = try c.decodeIfPresent(Int.self, forKey: .size) ?? 0
        tags = try c.decodeIfPresent([String].self, forKey: .tags) ?? []
        details = try c.decodeIfPresent(String.self, forKey: .details) ?? ""
        background = try c.decodeIfPresent(String.self, forKey: .background) ?? ""
        usage = try c.decodeIfPresent(String.self, forKey: .usage) ?? ""
        analyzed = try c.decodeIfPresent(Bool.self, forKey: .analyzed) ?? false
    }
}

struct CharacterStickerPack: Codable, Equatable {
    var enabled: Bool = true
    var items: [CharacterStickerItem] = []
}

struct StickerVisionResult: Equatable {
    let label: String
    let tags: [String]
    let details: String
    let background: String
    let usage: String
}

struct CharacterStickerLibrary {
    static let maxPerCharacter = 500
    static let maxImageBytes = 20 * 1024 * 1024
    static let maxZipBytes: UInt64 = 1024 * 1024 * 1024 // 1 GB
    static let imageMimes: [String: String] = [
        "png": "image/png",
        "jpg": "image/jpeg",
        "jpeg": "image/jpeg",
        "webp": "image/webp",
        "gif": "image/gif"
    ]

    let directory: URL

    init(directory: URL? = nil) {
        self.directory = directory ?? FileManager.default
            .urls(for: .applicationSupportDirectory, in: .userDomainMask)[0]
            .appendingPathComponent(AppIdentity.storageNamespace)
            .appendingPathComponent("ChatModule", isDirectory: true)
            .appendingPathComponent("stickers", isDirectory: true)
    }

    func folder(for cardID: UUID) -> URL {
        directory.appendingPathComponent(cardID.uuidString, isDirectory: true)
    }

    private func manifestURL(for cardID: UUID) -> URL {
        folder(for: cardID).appendingPathComponent("manifest.json")
    }

    func load(for cardID: UUID) -> CharacterStickerPack {
        let url = manifestURL(for: cardID)
        guard let data = try? Data(contentsOf: url),
              var pack = try? JSONDecoder().decode(CharacterStickerPack.self, from: data) else {
            return CharacterStickerPack()
        }
        let dir = folder(for: cardID)
        pack.items = pack.items.filter { item in
            Self.safeFileName(item.file) && FileManager.default.fileExists(atPath: dir.appendingPathComponent(item.file).path)
        }
        return pack
    }

    func save(_ pack: CharacterStickerPack, for cardID: UUID) throws {
        let dir = folder(for: cardID)
        try FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
        let data = try JSONEncoder().encode(pack)
        try data.write(to: manifestURL(for: cardID), options: [.atomic, .completeFileProtection])
    }

    func imageData(stickerID: String, for cardID: UUID) throws -> (item: CharacterStickerItem, data: Data) {
        let pack = load(for: cardID)
        guard let item = pack.items.first(where: { $0.id == stickerID }), Self.safeFileName(item.file) else {
            throw CompanionError.message("找不到指定的表情包文件。")
        }
        let data = try Data(contentsOf: folder(for: cardID).appendingPathComponent(item.file))
        return (item, data)
    }

    func setEnabled(_ enabled: Bool, for cardID: UUID) throws -> CharacterStickerPack {
        var pack = load(for: cardID)
        pack.enabled = enabled
        try save(pack, for: cardID)
        return pack
    }

    func rename(stickerID: String, label: String, for cardID: UUID) throws -> CharacterStickerPack {
        var pack = load(for: cardID)
        let trimmed = String(label.trimmingCharacters(in: .whitespacesAndNewlines).prefix(40))
        guard !trimmed.isEmpty else { throw CompanionError.message("表情语义标签不能为空。") }
        if let index = pack.items.firstIndex(where: { $0.id == stickerID }) {
            pack.items[index].label = trimmed
            try save(pack, for: cardID)
        }
        return pack
    }

    func updateMetadata(
        stickerID: String,
        label: String? = nil,
        tags: [String]? = nil,
        details: String? = nil,
        background: String? = nil,
        usage: String? = nil,
        analyzed: Bool? = nil,
        for cardID: UUID
    ) throws -> CharacterStickerPack {
        var pack = load(for: cardID)
        guard let index = pack.items.firstIndex(where: { $0.id == stickerID }) else { return pack }
        if let label = label {
            let trimmed = String(label.trimmingCharacters(in: .whitespacesAndNewlines).prefix(40))
            if !trimmed.isEmpty { pack.items[index].label = trimmed }
        }
        if let tags = tags {
            pack.items[index].tags = Array(tags.map { String($0.trimmingCharacters(in: .whitespacesAndNewlines).prefix(24)) }.filter { !$0.isEmpty }.prefix(12))
        }
        if let details = details {
            pack.items[index].details = String(details.trimmingCharacters(in: .whitespacesAndNewlines).prefix(300))
        }
        if let background = background {
            pack.items[index].background = String(background.trimmingCharacters(in: .whitespacesAndNewlines).prefix(160))
        }
        if let usage = usage {
            pack.items[index].usage = String(usage.trimmingCharacters(in: .whitespacesAndNewlines).prefix(160))
        }
        if let analyzed = analyzed {
            pack.items[index].analyzed = analyzed
        }
        try save(pack, for: cardID)
        return pack
    }

    func remove(stickerID: String, for cardID: UUID) throws -> CharacterStickerPack {
        var pack = load(for: cardID)
        let dir = folder(for: cardID)
        if let index = pack.items.firstIndex(where: { $0.id == stickerID }) {
            let item = pack.items.remove(at: index)
            if Self.safeFileName(item.file) {
                try? FileManager.default.removeItem(at: dir.appendingPathComponent(item.file))
            }
            try save(pack, for: cardID)
        }
        return pack
    }

    func clear(for cardID: UUID) throws {
        let dir = folder(for: cardID)
        if FileManager.default.fileExists(atPath: dir.path) {
            try FileManager.default.removeItem(at: dir)
        }
    }

    func importFiles(_ urls: [URL], for cardID: UUID) throws -> (pack: CharacterStickerPack, added: Int, skipped: Int) {
        var pack = load(for: cardID)
        let dir = folder(for: cardID)
        try FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
        var added = 0
        var skipped = 0
        var nextIndex = nextNumericIndex(in: pack.items)

        func addImage(name: String, ext: String, data: Data) throws {
            guard pack.items.count < Self.maxPerCharacter else { skipped += 1; return }
            guard !data.isEmpty, data.count <= Self.maxImageBytes, let mime = Self.imageMimes[ext] else {
                skipped += 1
                return
            }
            let id = "s\(nextIndex)"
            nextIndex += 1
            let storedFile = "\(id).\(ext)"
            let destination = dir.appendingPathComponent(storedFile)
            try data.write(to: destination, options: [.atomic, .completeFileProtection])
            let label = Self.deriveLabel(from: name, fallbackIndex: pack.items.count + 1)
            pack.items.append(CharacterStickerItem(
                id: id,
                label: label,
                file: storedFile,
                originalName: String(name.prefix(120)),
                mime: mime,
                size: data.count
            ))
            added += 1
        }

        for url in urls {
            let accessed = url.startAccessingSecurityScopedResource()
            defer { if accessed { url.stopAccessingSecurityScopedResource() } }
            let ext = url.pathExtension.lowercased()
            if ext == "zip" {
                let archive = try StickerZipArchive(url: url)
                let entries = archive.imageEntries()
                if entries.isEmpty {
                    throw CompanionError.message("压缩包中没有找到支持的表情图片（PNG / JPG / WEBP / GIF）。")
                }
                for entry in entries {
                    try Task.checkCancellation()
                    if pack.items.count >= Self.maxPerCharacter { skipped += 1; continue }
                    if entry.uncompressedSize <= 0 || entry.uncompressedSize > UInt64(Self.maxImageBytes) {
                        skipped += 1
                        continue
                    }
                    let data = try archive.extract(entry)
                    let baseName = (entry.name as NSString).lastPathComponent
                    let itemExt = (baseName as NSString).pathExtension.lowercased()
                    try addImage(name: baseName, ext: itemExt, data: data)
                }
            } else if Self.imageMimes[ext] != nil {
                let size = (try? url.resourceValues(forKeys: [.fileSizeKey]).fileSize) ?? 0
                if size <= 0 || size > Self.maxImageBytes { skipped += 1; continue }
                let data = try Data(contentsOf: url)
                try addImage(name: url.lastPathComponent, ext: ext, data: data)
            } else {
                skipped += 1
            }
        }

        guard added > 0 else {
            throw CompanionError.message(pack.items.count >= Self.maxPerCharacter ? "当前角色表情包已达上限（\(Self.maxPerCharacter) 张）。" : "未导入有效图片，请选择包含 PNG / JPG / WEBP / GIF 的表情包 .zip 或图片文件。")
        }
        try save(pack, for: cardID)
        return (pack, added, skipped)
    }

    func webSnapshot(for cardID: UUID) -> [String: Any] {
        let pack = load(for: cardID)
        let items: [[String: Any]] = pack.items.map { item in
            [
                "id": item.id,
                "label": item.label,
                "name": item.originalName,
                "mime": item.mime,
                "size": item.size,
                "tags": item.tags,
                "details": item.details,
                "background": item.background,
                "usage": item.usage,
                "analyzed": item.analyzed,
                "url": "qiban-stickers/\(cardID.uuidString)/\(item.file)"
            ]
        }
        return ["enabled": pack.enabled, "items": items]
    }

    private func nextNumericIndex(in items: [CharacterStickerItem]) -> Int {
        let maxID = items.compactMap { item -> Int? in
            guard item.id.hasPrefix("s") else { return nil }
            return Int(item.id.dropFirst())
        }.max() ?? 0
        return max(maxID + 1, items.count + 1)
    }

    static func deriveLabel(from filename: String, fallbackIndex: Int) -> String {
        let base = ((filename as NSString).lastPathComponent as NSString).deletingPathExtension
        let cleaned = base
            .replacingOccurrences(of: #"^\d+[\s._\-]+"#, with: "", options: .regularExpression)
            .replacingOccurrences(of: #"[_]+"#, with: " ", options: .regularExpression)
            .trimmingCharacters(in: .whitespacesAndNewlines)
        if cleaned.isEmpty { return "表情\(fallbackIndex)" }
        return String(cleaned.prefix(40))
    }

    private static func safeFileName(_ name: String) -> Bool {
        !name.isEmpty && !name.contains("/") && !name.contains("\\") && !name.contains("..") && !name.contains("\0")
    }
}

enum StickerVisionAnalyzer {
    static func analyze(
        imageData: Data,
        originalName: String,
        currentLabel: String,
        characterName: String,
        settings: APISettings,
        mainKey: String
    ) async throws -> StickerVisionResult {
        let frame = try ChatImage.prepare(imageData, source: .user)
        let hint = [currentLabel, originalName].filter { !$0.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty }.joined(separator: " / ")
        let prompt = """
        请仔细观察这张属于角色「\(characterName.isEmpty ? "当前角色" : characterName)」的聊天表情包或配图，为她建立图片内容知识档案，方便她在以后聊天中准确知道自己拥有这张图以及图里的细节。
        原始文件名／当前标签参考：\(hint.isEmpty ? "无" : hint)（如果原名本身包含服装、材质、情绪或梗等关键词，例如“蕾丝”“吃惊”“害羞”，请保留在 label 或 tags 中）。
        请只输出一个 JSON 对象，不要输出其他解释或 Markdown：
        {"label":"简洁核心标题(2-10字)","tags":["关键词1","关键词2","关键词3","关键词4"],"details":"详细描述图中人物表情、姿势、服装与材质细节、动作和文字(30-90字)","background":"描述背景环境、光线与整体氛围(15-40字)","usage":"适合在什么聊天话题或对方说什么时补发这张图(15-40字)"}
        """
        let session = ServiceClient.session()
        defer { session.invalidateAndCancel() }
        let rawText: String
        if let profile = settings.services?.vision, profile.enabled {
            let key = APIKeyStore.read(kind: .vision, profile: profile)
            rawText = try await ServiceClient.vision(profile, key: key, question: prompt, images: [frame], session: session)
        } else {
            guard !settings.endpoint.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty,
                  !settings.model.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty else {
                throw CompanionError.message("请先在设置中配置对话模型或独立识图服务，再进行 AI 识图打标。")
            }
            var request = URLRequest(url: try APIClient.endpoint(settings.endpoint))
            request.httpMethod = "POST"
            request.timeoutInterval = 90
            request.setValue("application/json", forHTTPHeaderField: "Content-Type")
            if !mainKey.isEmpty {
                request.setValue("Bearer " + mainKey, forHTTPHeaderField: "Authorization")
            }
            let turns: [ChatRequest.Turn] = [
                .init(role: "system", content: "你是精确的图像识别与标注助手，只输出合法 JSON，如实描述画面内容、服装细节、背景与氛围。"),
                .init(role: "user", content: prompt, image: frame)
            ]
            request.httpBody = try JSONEncoder().encode(ChatRequest(model: settings.model, messages: turns, temperature: 0.2, max_tokens: 700))
            let body = try await ServiceClient.data(request, session: session, limit: 128_000, label: "表情包识图")
            guard let response = try? JSONDecoder().decode(ChatResponse.self, from: body),
                  let content = response.choices.first?.message.content,
                  !content.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty else {
                throw CompanionError.message("识图接口未返回有效结果，请检查当前模型是否支持图片输入或开启独立识图服务。")
            }
            rawText = content
        }
        return parseResult(rawText, fallbackLabel: currentLabel.isEmpty ? CharacterStickerLibrary.deriveLabel(from: originalName, fallbackIndex: 1) : currentLabel)
    }

    static func parseResult(_ raw: String, fallbackLabel: String) -> StickerVisionResult {
        let trimmed = raw.trimmingCharacters(in: .whitespacesAndNewlines)
        var candidate = trimmed
        if candidate.hasPrefix("```"), let nl = candidate.firstIndex(of: "\n"), candidate.hasSuffix("```") {
            candidate = String(candidate[candidate.index(after: nl)..<candidate.index(candidate.endIndex, offsetBy: -3)]).trimmingCharacters(in: .whitespacesAndNewlines)
        }
        if let start = candidate.firstIndex(of: "{"), let end = candidate.lastIndex(of: "}"), start < end {
            let slice = String(candidate[start...end])
            if let data = slice.data(using: .utf8),
               let obj = (try? JSONSerialization.jsonObject(with: data)) as? [String: Any] {
                let label = String((obj["label"] as? String ?? "").trimmingCharacters(in: .whitespacesAndNewlines).prefix(40))
                let rawTags: [String]
                if let array = obj["tags"] as? [String] {
                    rawTags = array
                } else if let str = obj["tags"] as? String {
                    rawTags = str.components(separatedBy: CharacterSet(charactersIn: ",，、;；/|"))
                } else {
                    rawTags = []
                }
                let tags = Array(rawTags.map { String($0.trimmingCharacters(in: .whitespacesAndNewlines).prefix(24)) }.filter { !$0.isEmpty }.prefix(12))
                let details = String((obj["details"] as? String ?? "").trimmingCharacters(in: .whitespacesAndNewlines).prefix(300))
                let background = String((obj["background"] as? String ?? "").trimmingCharacters(in: .whitespacesAndNewlines).prefix(160))
                let usage = String((obj["usage"] as? String ?? "").trimmingCharacters(in: .whitespacesAndNewlines).prefix(160))
                return StickerVisionResult(
                    label: label.isEmpty ? fallbackLabel : label,
                    tags: tags,
                    details: details,
                    background: background,
                    usage: usage
                )
            }
        }
        return StickerVisionResult(
            label: fallbackLabel,
            tags: [fallbackLabel].filter { !$0.isEmpty },
            details: String(trimmed.prefix(300)),
            background: "",
            usage: ""
        )
    }
}

/// Streaming ZIP reader for user-imported sticker packs up to 1 GB (supports Stored + Deflated + UTF-8/GB18030 filenames).
final class StickerZipArchive {
    struct Entry {
        let name: String
        let method: UInt16
        let compressedSize: UInt64
        let uncompressedSize: UInt64
        let localHeaderOffset: UInt64
        let crc: UInt32
    }

    let entries: [Entry]
    private let handle: FileHandle
    private let fileSize: UInt64

    private static func uint(_ data: Data, _ at: Int, _ bytes: Int) -> UInt64 {
        data[at..<(at + bytes)].enumerated().reduce(UInt64(0)) { $0 | (UInt64($1.element) << ($1.offset * 8)) }
    }

    init(url: URL) throws {
        handle = try FileHandle(forReadingFrom: url)
        fileSize = try handle.seekToEnd()
        guard fileSize >= 22, fileSize <= CharacterStickerLibrary.maxZipBytes else {
            throw CompanionError.message("表情包压缩文件大小无效或超过 1GB 上限。")
        }
        let tailSize = Int(min(fileSize, 65_557))
        try handle.seek(toOffset: fileSize - UInt64(tailSize))
        let tail = try Self.exact(handle, tailSize)
        guard let end = (0...(tailSize - 22)).reversed().first(where: {
            Self.uint(tail, $0, 4) == 0x06054b50 && $0 + 22 + Int(Self.uint(tail, $0 + 20, 2)) == tailSize
        }) else {
            throw CompanionError.message("不是有效的 ZIP 表情包文件。")
        }
        let count = Int(Self.uint(tail, end + 10, 2))
        let centralSize = Int(Self.uint(tail, end + 12, 4))
        let centralOffset = Self.uint(tail, end + 16, 4)
        guard count > 0, count <= 10_000, centralSize <= 16 * 1024 * 1024,
              centralOffset + UInt64(centralSize) <= fileSize else {
            throw CompanionError.message("ZIP 目录无效或文件数量过多。")
        }
        try handle.seek(toOffset: centralOffset)
        let central = try Self.exact(handle, centralSize)
        var at = 0
        var parsed: [Entry] = []
        for _ in 0..<count {
            guard at + 46 <= central.count, Self.uint(central, at, 4) == 0x02014b50 else {
                throw CompanionError.message("ZIP 目录已损坏。")
            }
            let flags = UInt16(Self.uint(central, at + 8, 2))
            let method = UInt16(Self.uint(central, at + 10, 2))
            let crc = UInt32(Self.uint(central, at + 16, 4))
            let compSize = Self.uint(central, at + 20, 4)
            let uncompSize = Self.uint(central, at + 24, 4)
            let nameLen = Int(Self.uint(central, at + 28, 2))
            let extraLen = Int(Self.uint(central, at + 30, 2))
            let commentLen = Int(Self.uint(central, at + 32, 2))
            let localOffset = Self.uint(central, at + 42, 4)
            let next = at + 46 + nameLen + extraLen + commentLen
            guard next <= central.count else { throw CompanionError.message("ZIP 条目长度无效。") }
            let nameData = central.subdata(in: (at + 46)..<(at + 46 + nameLen))
            let name = Self.decodeFilename(nameData, utf8Flag: (flags & 0x0800) != 0)
            if (flags & 0x0001) == 0 && (method == 0 || method == 8) {
                parsed.append(Entry(
                    name: name,
                    method: method,
                    compressedSize: compSize,
                    uncompressedSize: uncompSize,
                    localHeaderOffset: localOffset,
                    crc: crc
                ))
            }
            at = next
        }
        entries = parsed
    }

    deinit { try? handle.close() }

    func imageEntries() -> [Entry] {
        entries.filter { entry in
            let normalized = entry.name.replacingOccurrences(of: "\\", with: "/")
            if normalized.isEmpty || normalized.hasSuffix("/") { return false }
            let parts = normalized.split(separator: "/")
            if parts.contains(where: { $0 == "__MACOSX" || $0 == ".." || $0.hasPrefix(".") }) { return false }
            guard let base = parts.last else { return false }
            if base.hasPrefix("._") || base == ".DS_Store" { return false }
            let ext = (String(base) as NSString).pathExtension.lowercased()
            return CharacterStickerLibrary.imageMimes[ext] != nil
        }
    }

    func extract(_ entry: Entry) throws -> Data {
        guard entry.localHeaderOffset + 30 <= fileSize else {
            throw CompanionError.message("ZIP 文件头偏移无效。")
        }
        try handle.seek(toOffset: entry.localHeaderOffset)
        let local = try Self.exact(handle, 30)
        guard Self.uint(local, 0, 4) == 0x04034b50 else {
            throw CompanionError.message("ZIP 本地文件头损坏。")
        }
        let nameLen = Int(Self.uint(local, 26, 2))
        let extraLen = Int(Self.uint(local, 28, 2))
        let dataOffset = entry.localHeaderOffset + 30 + UInt64(nameLen + extraLen)
        guard entry.compressedSize <= UInt64(CharacterStickerLibrary.maxImageBytes + 4096),
              dataOffset + entry.compressedSize <= fileSize else {
            throw CompanionError.message("ZIP 图片数据范围无效或单张超过 20MB 上限。")
        }
        try handle.seek(toOffset: dataOffset)
        let compressed = try Self.exact(handle, Int(entry.compressedSize))
        let output: Data
        if entry.method == 0 {
            output = compressed
        } else if entry.method == 8 {
            output = try Self.inflateRaw(compressed, expectedSize: Int(entry.uncompressedSize))
        } else {
            throw CompanionError.message("ZIP 使用了不支持的压缩方式。")
        }
        let actualCRC = output.withUnsafeBytes {
            UInt32(crc32(0, $0.bindMemory(to: Bytef.self).baseAddress, uInt(output.count)))
        }
        guard actualCRC == entry.crc else {
            throw CompanionError.message("ZIP 表情图片校验失败：\(entry.name)。")
        }
        return output
    }

    private static func decodeFilename(_ data: Data, utf8Flag: Bool) -> String {
        if utf8Flag, let utf8 = String(data: data, encoding: .utf8) { return utf8 }
        if let utf8 = String(data: data, encoding: .utf8) { return utf8 }
        let gbEncoding = String.Encoding(rawValue: CFStringConvertEncodingToNSStringEncoding(
            CFStringEncoding(CFStringEncodings.GB_18030_2000.rawValue)
        ))
        if let gb = String(data: data, encoding: gbEncoding) { return gb }
        return String(data: data, encoding: .isoLatin1) ?? ""
    }

    private static func inflateRaw(_ input: Data, expectedSize: Int) throws -> Data {
        guard expectedSize >= 0, expectedSize <= CharacterStickerLibrary.maxImageBytes else {
            throw CompanionError.message("表情包单张图片超过 20MB 上限。")
        }
        if expectedSize == 0 { return Data() }
        var stream = z_stream()
        let initStatus = inflateInit2_(&stream, -MAX_WBITS, ZLIB_VERSION, Int32(MemoryLayout<z_stream>.size))
        guard initStatus == Z_OK else {
            throw CompanionError.message("无法初始化 ZIP 解压器。")
        }
        defer { inflateEnd(&stream) }
        var output = Data(count: expectedSize)
        let status: Int32 = input.withUnsafeBytes { srcRaw in
            output.withUnsafeMutableBytes { dstRaw in
                guard let srcBase = srcRaw.bindMemory(to: Bytef.self).baseAddress,
                      let dstBase = dstRaw.bindMemory(to: Bytef.self).baseAddress else {
                    return Z_DATA_ERROR
                }
                stream.next_in = UnsafeMutablePointer(mutating: srcBase)
                stream.avail_in = uInt(input.count)
                stream.next_out = dstBase
                stream.avail_out = uInt(expectedSize)
                return inflate(&stream, Z_FINISH)
            }
        }
        guard status == Z_STREAM_END else {
            throw CompanionError.message("ZIP 表情包解压失败，请确认压缩包未加密且未损坏。")
        }
        let produced = Int(stream.total_out)
        if produced < output.count { output.count = produced }
        return output
    }

    private static func exact(_ handle: FileHandle, _ count: Int) throws -> Data {
        if count == 0 { return Data() }
        guard let data = try handle.read(upToCount: count), data.count == count else {
            throw CompanionError.message("ZIP 文件不完整。")
        }
        return data
    }
}
