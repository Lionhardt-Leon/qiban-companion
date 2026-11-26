import Foundation
import CryptoKit

enum ChatModuleInfo {
    static let source = "https://github.com/QingchenWait/Fritia_Online_CHAT"
    static let revision = "7dfa8044dfef79c6c2876f69607c079218e723fb"
    static let packageSHA256 = "4414bfa7f6437ea628635c13a1c4ea19514eb09a48894981de050097192bcb1c"
}

struct ChatModuleManifest:Decodable {
    let schema:String
    let revision:String
    let files:[String:String]
}

struct ChatModuleLibrary {
    let directory:URL
    struct CapacityError: LocalizedError {
        var errorDescription: String? { "通讯记录超过容量，请先导出恢复副本。" }
    }
    private static let stateLock = NSLock()
    private let stateLimit: Int
    private static let publicationLock = NSLock()

    init(directory: URL? = nil, stateLimit: Int = 128 * 1024 * 1024) {
        self.stateLimit = stateLimit
        self.directory = directory ?? FileManager.default.urls(for:.applicationSupportDirectory,in:.userDomainMask)[0]
            .appendingPathComponent(AppIdentity.storageNamespace).appendingPathComponent("ChatModule",isDirectory:true)
    }
    var current:URL {directory.appendingPathComponent("current",isDirectory:true)}
    var site:URL {current.appendingPathComponent("site",isDirectory:true)}
    var installed:Bool {
        FileManager.default.fileExists(atPath:site.appendingPathComponent("index.html").path) &&
        (try? String(contentsOf:current.appendingPathComponent("package.sha256"),encoding:.utf8))==ChatModuleInfo.packageSHA256
    }
    private var stateDirectory:URL {directory.appendingPathComponent("state",isDirectory:true)}
    private struct StateRecord: Codable { let key: String; let value: String }

    private func filesAndBytes() throws -> ([URL], Int) {
        let fm = FileManager.default
        guard fm.fileExists(atPath:stateDirectory.path) else { return ([],0) }
        let files = try fm.contentsOfDirectory(at:stateDirectory,includingPropertiesForKeys:[.fileSizeKey])
            .filter { $0.pathExtension == "json" }
        var bytes = 0
        for file in files { bytes += try file.resourceValues(forKeys:[.fileSizeKey]).fileSize ?? 0 }
        return (files,bytes)
    }
    private func protectedRecord(_ file: URL) throws -> (StateRecord, Data?) {
        // Older writers limited the unescaped UTF-8 value. JSON escapes can use six bytes.
        guard let size = try file.resourceValues(forKeys:[.fileSizeKey]).fileSize,
              size <= 6 * 64 * 1024 * 1024 + 4096 else { throw CapacityError() }
        let record = try JSONDecoder().decode(StateRecord.self,from:Data(contentsOf:file,options:.mappedIfSafe))
        let value = try ChatModuleVault.protect(record.value,key:record.key)
        guard value != record.value else { return (record,nil) }
        let safe = StateRecord(key:record.key,value:value)
        return (safe,try JSONEncoder().encode(safe))
    }
    func state() throws -> [String:String] {
        Self.stateLock.lock(); defer { Self.stateLock.unlock() }
        let (files,bytes) = try filesAndBytes()
        guard bytes <= stateLimit else { throw CapacityError() }
        var total = bytes
        var result: [String:String] = [:]
        for file in files {
            let (record,updated) = try protectedRecord(file)
            if let updated {
                let previous = try file.resourceValues(forKeys:[.fileSizeKey]).fileSize ?? 0
                total += updated.count - previous
                guard total <= stateLimit else { throw CapacityError() }
                try updated.write(to:file,options:[.atomic,.completeFileProtection])
            }
            result[record.key] = record.value
        }
        return result
    }
    @discardableResult func persist(key:String,value:String?) throws -> String? {
        guard (key.hasPrefix("fritia_") || key.hasPrefix("fritia-")), key.count<=200,
              (value?.utf8.count ?? 0)<=64*1024*1024 else { throw CapacityError() }
        let name=SHA256.hash(data:Data(key.utf8)).map{String(format:"%02x",$0)}.joined()+".json"
        let file = stateDirectory.appendingPathComponent(name)
        let safeValue = try value.map { try ChatModuleVault.protect($0,key:key) }
        let encoded = try safeValue.map { try JSONEncoder().encode(StateRecord(key:key,value:$0)) }
        Self.stateLock.lock(); defer { Self.stateLock.unlock() }
        let fm = FileManager.default
        if let encoded {
            let (_,total) = try filesAndBytes()
            let old = fm.fileExists(atPath:file.path) ? try file.resourceValues(forKeys:[.fileSizeKey]).fileSize ?? 0 : 0
            guard total - old + encoded.count <= stateLimit || (total > stateLimit && encoded.count < old)
                else { throw CapacityError() }
            try fm.createDirectory(at:stateDirectory,withIntermediateDirectories:true)
            try encoded.write(to:file,options:[.atomic,.completeFileProtection])
        } else if fm.fileExists(atPath:file.path) { try fm.removeItem(at:file) }
        return safeValue
    }

    // Recovery does not load the whole workspace and leaves the source directory intact.
    func exportStateRecords(to output: URL) throws {
        Self.stateLock.lock(); defer { Self.stateLock.unlock() }
        try FileManager.default.createDirectory(at:output,withIntermediateDirectories:true)
        for file in try filesAndBytes().0 {
            try autoreleasepool {
                let (_,safe) = try protectedRecord(file)
                let target = output.appendingPathComponent(file.lastPathComponent)
                if let safe { try safe.write(to:target,options:[.atomic,.completeFileProtection]) }
                else { try FileManager.default.copyItem(at:file,to:target) }
            }
        }
    }
    func install(_ url:URL) throws {
        let access=url.startAccessingSecurityScopedResource();defer{if access{url.stopAccessingSecurityScopedResource()}}
        let input=try FileHandle(forReadingFrom:url);defer{try? input.close()}
        var hash=SHA256(),bytes=0
        while let data=try input.read(upToCount:1024*1024),!data.isEmpty {
            bytes+=data.count;guard bytes<=200*1024*1024 else{throw CompanionError.message("对话模块超过200MB。")};hash.update(data:data)
        }
        let digest=hash.finalize().map{String(format:"%02x",$0)}.joined()
        guard digest==ChatModuleInfo.packageSHA256 else {throw CompanionError.message("请导入随本版 App 提供的 .qchat 模块，文件摘要不匹配，原模块未改变。")}
        let archive=try StoredVoiceArchive(url:url)
        let manifest=try JSONDecoder().decode(ChatModuleManifest.self,from:archive.read("module.json",limit:1_000_000))
        guard manifest.schema=="qiban-chat-module/1",manifest.revision==ChatModuleInfo.revision,
              manifest.files.count+1==archive.entries.count,manifest.files["site/index.html"] != nil else {throw CompanionError.message("对话模块索引无效。")}
        try FileManager.default.createDirectory(at:directory,withIntermediateDirectories:true)
        let stage=directory.appendingPathComponent("staging-"+UUID().uuidString,isDirectory:true)
        try FileManager.default.createDirectory(at:stage,withIntermediateDirectories:true)
        defer{try? FileManager.default.removeItem(at:stage)}
        for entry in archive.entries where entry.path != "module.json" {
            guard VoiceManifest.safePath(entry.path),let expected=manifest.files[entry.path],entry.size<=64*1024*1024 else {throw CompanionError.message("对话模块文件索引无效。")}
            let target=stage.appendingPathComponent(entry.path);try FileManager.default.createDirectory(at:target.deletingLastPathComponent(),withIntermediateDirectories:true)
            FileManager.default.createFile(atPath:target.path,contents:nil)
            let output=try FileHandle(forWritingTo:target);var partHash=SHA256()
            do {try archive.stream(entry){data in try output.write(contentsOf:data);partHash.update(data:data)};try output.close()}
            catch {try? output.close();throw error}
            guard partHash.finalize().map({String(format:"%02x",$0)}).joined()==expected else{throw CompanionError.message("对话模块文件损坏。")}
        }
        try ChatModuleInfo.packageSHA256.write(to:stage.appendingPathComponent("package.sha256"),atomically:true,encoding:.utf8)
        try replaceCurrent(with: stage)
    }

    func replaceCurrent(with stage: URL) throws {
        Self.publicationLock.lock()
        defer { Self.publicationLock.unlock() }
        let files = FileManager.default
        let previous = directory.appendingPathComponent("previous-" + UUID().uuidString, isDirectory: true)
        let hadCurrent = files.fileExists(atPath: current.path)
        if hadCurrent { try files.moveItem(at: current, to: previous) }
        do { try files.moveItem(at: stage, to: current) }
        catch {
            if hadCurrent { try? files.moveItem(at: previous, to: current) }
            throw error
        }
        prunePreviousModules(preferred: hadCurrent ? previous : nil)
    }

    private func prunePreviousModules(preferred: URL?) {
        let files = FileManager.default
        guard let candidates = try? files.contentsOfDirectory(
            at: directory, includingPropertiesForKeys: [.isDirectoryKey, .isSymbolicLinkKey, .creationDateKey]
        ) else { return }
        let versions = candidates.compactMap { url -> (URL, Date)? in
            let name = url.lastPathComponent
            guard name.hasPrefix("previous-"), UUID(uuidString: String(name.dropFirst("previous-".count))) != nil,
                  let properties = try? url.resourceValues(forKeys: [.isDirectoryKey, .isSymbolicLinkKey, .creationDateKey]),
                  properties.isDirectory == true, properties.isSymbolicLink == false,
                  files.fileExists(atPath: url.appendingPathComponent("site/index.html").path),
                  let marker = try? String(contentsOf: url.appendingPathComponent("package.sha256"), encoding: .utf8),
                  marker.count == 64, marker.allSatisfy({ $0.isHexDigit }) else { return nil }
            return (url, properties.creationDate ?? .distantPast)
        }
        let keep = versions.first(where: { $0.0 == preferred })?.0
            ?? versions.max(by: { $0.1 < $1.1 })?.0
        for (url, _) in versions where url != keep {
            try? files.removeItem(at: url)
        }
    }
}
