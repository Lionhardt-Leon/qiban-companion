import Foundation
import CryptoKit
import ImageIO

/// Data-only art libraries. Executable files, URLs, traversal and oversized images are rejected.
struct CardArtManifest:Codable {
    struct Character:Codable {let id:String;let name:String;let group:String;let portrait:String;let avatar:String?;let states:[String:String]?;let layers:[String]?;let stateLayers:[String:[String]]?}
    let schema:String;let id:String;let title:String;let characters:[Character];let files:[String:String]
}
struct CardArtImportResult:Sendable {
    let title:String;let characters:Int;let images:Int
}
struct CardGameLibrary {
    private let base=FileManager.default.urls(for:.applicationSupportDirectory,in:.userDomainMask)[0]
        .appendingPathComponent(AppIdentity.storageNamespace).appendingPathComponent("CardGame",isDirectory:true)
    var artRoot:URL {base.appendingPathComponent("art",isDirectory:true)}
    private var stateFile:URL {base.appendingPathComponent("state.json")}
    func state() throws -> String? {
        guard FileManager.default.fileExists(atPath:stateFile.path) else{return nil}
        let size=try stateFile.resourceValues(forKeys:[.fileSizeKey]).fileSize ?? Int.max
        guard size<=40*1024*1024 else{throw CompanionError.message("牌桌存档超过40MB。")}
        return try String(contentsOf:stateFile,encoding:.utf8)
    }
    func persist(_ value:String) throws {
        guard value.utf8.count<=40*1024*1024,let data=value.data(using:.utf8),let object=try JSONSerialization.jsonObject(with:data) as? [String:Any],object["preferences"] is [String:Any] else{throw CompanionError.message("牌桌存档无效或超过40MB。")}
        try FileManager.default.createDirectory(at:base,withIntermediateDirectories:true)
        try data.write(to:stateFile,options:[.atomic,.completeFileProtection])
    }
    private static func validID(_ id:String)->Bool {!id.isEmpty && id.count<=80 && id.allSatisfy{$0.isASCII && ($0.isLetter || $0.isNumber || $0=="-" || $0=="_")}}
    private static func imagePath(_ path:String)->Bool {VoiceManifest.safePath(path) && path.hasPrefix("images/") && ["png","jpg","jpeg","webp"].contains(URL(fileURLWithPath:path).pathExtension.lowercased())}
    func catalog() throws -> [[String:Any]] {
        guard FileManager.default.fileExists(atPath:artRoot.path) else{return []}
        var result:[[String:Any]]=[]
        for folder in try FileManager.default.contentsOfDirectory(at:artRoot,includingPropertiesForKeys:nil).sorted(by:{$0.lastPathComponent<$1.lastPathComponent}) where !folder.lastPathComponent.hasPrefix(".") {
            guard let bytes=try? Data(contentsOf:folder.appendingPathComponent("catalog.json")),let manifest=try? JSONDecoder().decode(CardArtManifest.self,from:bytes),Self.validID(manifest.id) else{continue}
            for c in manifest.characters {
                let path:(String)->String={"art/"+manifest.id+"/"+$0}
                var row:[String:Any]=["id":manifest.id+"/"+c.id,"name":c.name,"group":c.group,"portrait":path(c.portrait)]
                if let avatar=c.avatar{row["avatar"]=path(avatar)}
                if let states=c.states{row["states"]=states.mapValues(path)}
                if let layers=c.layers{row["layers"]=layers.map(path)}
                if let layers=c.stateLayers{row["stateLayers"]=layers.mapValues{$0.map(path)}}
                result.append(row)
            }
        }
        return result
    }
    func install(_ url:URL,progress:(@Sendable(Int,Int)->Void)?=nil) throws -> CardArtImportResult {
        let access=url.startAccessingSecurityScopedResource();defer{if access{url.stopAccessingSecurityScopedResource()}}
        guard (try url.resourceValues(forKeys:[.fileSizeKey]).fileSize ?? Int.max)<=500*1024*1024 else{throw CompanionError.message("立绘包超过500MB。")}
        let archive=try StoredVoiceArchive(url:url)
        let manifestData=try archive.read("catalog.json",limit:2_000_000)
        let manifest=try JSONDecoder().decode(CardArtManifest.self,from:manifestData)
        guard manifest.schema=="qiban-card-art/1",Self.validID(manifest.id),manifest.characters.count<=200,!manifest.characters.isEmpty,
              manifest.files.count+1==archive.entries.count,manifest.files.count<=1800,
              Set(manifest.characters.map(\.id)).count==manifest.characters.count else{throw CompanionError.message("立绘包索引无效。")}
        for c in manifest.characters {
            var paths=[c.portrait];paths += [c.avatar].compactMap{$0};paths += Array((c.states ?? [:]).values)
            paths += c.layers ?? [];paths += Array((c.stateLayers ?? [:]).values).flatMap{$0}
            guard Self.validID(c.id),!c.name.isEmpty,c.name.count<=80,c.group.count<=40,
                  paths.allSatisfy({Self.imagePath($0) && manifest.files[$0] != nil}),
                  (c.states?.count ?? 0)<=12,(c.layers?.count ?? 0)<=12,(c.stateLayers?.count ?? 0)<=12,(c.stateLayers ?? [:]).values.allSatisfy({$0.count<=12}) else{throw CompanionError.message("立绘角色记录无效。")}
        }
        try FileManager.default.createDirectory(at:artRoot,withIntermediateDirectories:true)
        let stage=artRoot.appendingPathComponent(".stage-"+UUID().uuidString,isDirectory:true)
        try FileManager.default.createDirectory(at:stage,withIntermediateDirectories:true);defer{try? FileManager.default.removeItem(at:stage)}
        var total:Int64=0
        var completed=0
        for entry in archive.entries where entry.path != "catalog.json" {
            total+=entry.size
            guard Self.imagePath(entry.path),entry.size<=20*1024*1024,total<=500*1024*1024,let expected=manifest.files[entry.path] else{throw CompanionError.message("立绘包只允许有限大小的图片。")}
            let bytes=try archive.read(entry.path,limit:20*1024*1024)
            guard SHA256.hash(data:bytes).map({String(format:"%02x",$0)}).joined()==expected,
                  let source=CGImageSourceCreateWithData(bytes as CFData,nil),let info=CGImageSourceCopyPropertiesAtIndex(source,0,nil) as? [CFString:Any],
                  let width=info[kCGImagePropertyPixelWidth] as? Int,let height=info[kCGImagePropertyPixelHeight] as? Int,
                  width>0,height>0,width<=12000,height<=12000,width*height<=32_000_000 else {throw CompanionError.message("立绘图片损坏或像素超过限制。")}
            let file=stage.appendingPathComponent(entry.path);try FileManager.default.createDirectory(at:file.deletingLastPathComponent(),withIntermediateDirectories:true)
            try bytes.write(to:file,options:[.atomic,.completeFileProtection])
            completed+=1;progress?(completed,manifest.files.count)
        }
        try manifestData.write(to:stage.appendingPathComponent("catalog.json"),options:[.atomic,.completeFileProtection])
        let current=artRoot.appendingPathComponent(manifest.id,isDirectory:true),backup=artRoot.appendingPathComponent(".previous-"+UUID().uuidString,isDirectory:true)
        let existed=FileManager.default.fileExists(atPath:current.path)
        if existed{try FileManager.default.moveItem(at:current,to:backup)}
        do{try FileManager.default.moveItem(at:stage,to:current)}catch{if existed{try? FileManager.default.moveItem(at:backup,to:current)};throw error}
        if existed{try? FileManager.default.removeItem(at:backup)}
        return CardArtImportResult(title:manifest.title,characters:manifest.characters.count,images:manifest.files.count)
    }
}
