import Foundation
import CryptoKit

enum ChatModuleInfo {
    static let source = "https://github.com/QingchenWait/Fritia_Online_CHAT"
    static let revision = "7dfa8044dfef79c6c2876f69607c079218e723fb"
    static let packageSHA256 = "a0cda9faf529c6c063cd141cb309d4e799a422d17efbcae2ce5acf0b42ae888e"
}

struct ChatModuleManifest:Decodable {
    let schema:String
    let revision:String
    let files:[String:String]
}

struct ChatModuleLibrary {
    let directory:URL
    init() {
        directory=FileManager.default.urls(for:.applicationSupportDirectory,in:.userDomainMask)[0]
            .appendingPathComponent(AppIdentity.storageNamespace).appendingPathComponent("ChatModule",isDirectory:true)
    }
    var current:URL {directory.appendingPathComponent("current",isDirectory:true)}
    var site:URL {current.appendingPathComponent("site",isDirectory:true)}
    var installed:Bool {FileManager.default.fileExists(atPath:site.appendingPathComponent("index.html").path)}
    private var stateDirectory:URL {directory.appendingPathComponent("state",isDirectory:true)}
    func state() throws -> [String:String] {
        guard FileManager.default.fileExists(atPath:stateDirectory.path) else{return [:]}
        var result:[String:String]=[:],bytes=0
        for file in try FileManager.default.contentsOfDirectory(at:stateDirectory,includingPropertiesForKeys:[.fileSizeKey]) where file.pathExtension=="json" {
            let data=try Data(contentsOf:file);bytes+=data.count
            guard bytes<=128*1024*1024 else{throw CompanionError.message("通讯文字存储超过128MB，请先导出存档。")}
            let record=try JSONDecoder().decode(StateRecord.self,from:data);result[record.key]=record.value
        }
        return result
    }
    private struct StateRecord:Codable {let key:String;let value:String}
    func persist(key:String,value:String?) throws {
        guard (key.hasPrefix("fritia_") || key.hasPrefix("fritia-")),key.count<=200,(value?.utf8.count ?? 0)<=64*1024*1024 else {throw CompanionError.message("通讯存储键或单条内容超过限制。")}
        try FileManager.default.createDirectory(at:stateDirectory,withIntermediateDirectories:true)
        let name=SHA256.hash(data:Data(key.utf8)).map{String(format:"%02x",$0)}.joined()+".json"
        let file=stateDirectory.appendingPathComponent(name)
        if let value=value {try JSONEncoder().encode(StateRecord(key:key,value:value)).write(to:file,options:[.atomic,.completeFileProtection])}
        else if FileManager.default.fileExists(atPath:file.path) {try FileManager.default.removeItem(at:file)}
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
        let previous=directory.appendingPathComponent("previous-"+UUID().uuidString,isDirectory:true)
        let hadCurrent=installed
        if hadCurrent {try FileManager.default.moveItem(at:current,to:previous)}
        do {try FileManager.default.moveItem(at:stage,to:current)}
        catch {if hadCurrent{try? FileManager.default.moveItem(at:previous,to:current)};throw error}
    }
}
