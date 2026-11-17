import Foundation
import CryptoKit
import ImageIO

struct PortraitAsset:Codable,Identifiable {
    var id:String
    let name:String
    let directory:String
    let renderer:String
    let skeleton:String
    let atlas:String
    let textures:[String]
    let idle:String
    let animations:[String]
    let expressions:[String:String]
    let aliases:[String]?
    let poster:String?
}
struct PortraitScene:Codable,Identifiable {var id:String;let name:String;var path:String}
private struct PortraitManifest:Codable {let schema:String;let id:String;let title:String;let models:[PortraitAsset];let scenes:[PortraitScene]?;let files:[String:String]}

struct PortraitLibrary {
    let directory:URL
    init(){directory=FileManager.default.urls(for:.applicationSupportDirectory,in:.userDomainMask)[0].appendingPathComponent(AppIdentity.storageNamespace).appendingPathComponent("Portraits",isDirectory:true)}
    static func validID(_ s:String)->Bool{s.range(of:"^[A-Za-z0-9_-]{1,80}$",options:.regularExpression) != nil}
    static func dataPath(_ s:String)->Bool{VoiceManifest.safePath(s) && s.range(of:"^[A-Za-z0-9_./-]+\\.(json|atlas|png|jpe?g|webp)$",options:.regularExpression) != nil}
    func catalog() throws -> [String:Any] {
        guard FileManager.default.fileExists(atPath:directory.path) else{return ["models":[],"scenes":[]]}
        var models:[[String:Any]]=[],scenes:[[String:Any]]=[]
        for folder in try FileManager.default.contentsOfDirectory(at:directory,includingPropertiesForKeys:nil).sorted(by:{$0.lastPathComponent<$1.lastPathComponent}) where Self.validID(folder.lastPathComponent) {
            guard let bytes=try? Data(contentsOf:folder.appendingPathComponent("stage.json")),let m=try? JSONDecoder().decode(PortraitManifest.self,from:bytes) else{continue}
            for asset in m.models {var row=try JSONSerialization.jsonObject(with:JSONEncoder().encode(asset)) as! [String:Any];row["id"]=m.id+"/"+asset.id;row["base"]="presentation-data/"+m.id+"/"+asset.directory+"/";models.append(row)}
            for scene in m.scenes ?? [] {scenes.append(["id":m.id+"/"+scene.id,"name":scene.name,"path":"presentation-data/"+m.id+"/"+scene.path])}
        }
        return ["models":models,"scenes":scenes]
    }
    func install(_ url:URL) throws {
        let access=url.startAccessingSecurityScopedResource();defer{if access{url.stopAccessingSecurityScopedResource()}}
        guard (try url.resourceValues(forKeys:[.fileSizeKey]).fileSize ?? Int.max)<=512*1024*1024 else{throw CompanionError.message("2D 素材包超过512MB。")}
        let archive=try StoredVoiceArchive(url:url),bytes=try archive.read("stage.json",limit:2*1024*1024),m=try JSONDecoder().decode(PortraitManifest.self,from:bytes)
        guard m.schema=="qiban-stage/1",Self.validID(m.id),m.title.count<=100,!m.models.isEmpty,m.models.count<=100,m.files.count<=1500,m.files.count+1==archive.entries.count,Set(m.models.map(\.id)).count==m.models.count else{throw CompanionError.message("2D 素材包索引无效。")}
        for model in m.models {
            let names=[model.skeleton,model.atlas]+model.textures+[model.poster].compactMap{$0}
            guard Self.validID(model.id),!model.name.isEmpty,model.name.count<=80,model.renderer=="spine-json",VoiceManifest.safePath(model.directory),!model.textures.isEmpty,model.textures.count<=8,model.animations.count<=200,model.expressions.count<=50,names.allSatisfy({Self.dataPath(model.directory+"/"+$0) && m.files[model.directory+"/"+$0] != nil}) else{throw CompanionError.message("2D 角色或图页记录无效。")}
        }
        guard (m.scenes?.count ?? 0)<=100,(m.scenes ?? []).allSatisfy({Self.validID($0.id) && $0.name.count<=80 && Self.dataPath($0.path) && m.files[$0.path] != nil}) else{throw CompanionError.message("2D 场景记录无效。")}
        try FileManager.default.createDirectory(at:directory,withIntermediateDirectories:true)
        let staging=directory.appendingPathComponent(".stage-"+UUID().uuidString,isDirectory:true)
        try FileManager.default.createDirectory(at:staging,withIntermediateDirectories:true);defer{try? FileManager.default.removeItem(at:staging)}
        var total:Int64=0
        for entry in archive.entries where entry.path != "stage.json" {
            total+=entry.size
            guard Self.dataPath(entry.path),entry.size<=20*1024*1024,total<=512*1024*1024,let expected=m.files[entry.path],expected.range(of:"^[a-f0-9]{64}$",options:.regularExpression) != nil else{throw CompanionError.message("2D 素材只允许有限大小的图片、骨骼 JSON 和图集。")}
            let data=try archive.read(entry.path,limit:20*1024*1024)
            guard SHA256.hash(data:data).map({String(format:"%02x",$0)}).joined()==expected else{throw CompanionError.message("2D 文件校验失败。")}
            if ["png","jpg","jpeg","webp"].contains(URL(fileURLWithPath:entry.path).pathExtension) {
                guard let source=CGImageSourceCreateWithData(data as CFData,nil),let info=CGImageSourceCopyPropertiesAtIndex(source,0,nil) as? [CFString:Any],let w=info[kCGImagePropertyPixelWidth] as? Int,let h=info[kCGImagePropertyPixelHeight] as? Int,w>0,h>0,w<=8192,h<=8192,w*h<=32*1024*1024 else{throw CompanionError.message("2D 图页尺寸无效。")}
            }
            let target=staging.appendingPathComponent(entry.path);try FileManager.default.createDirectory(at:target.deletingLastPathComponent(),withIntermediateDirectories:true);try data.write(to:target,options:[.atomic,.completeFileProtection])
        }
        try bytes.write(to:staging.appendingPathComponent("stage.json"),options:[.atomic,.completeFileProtection])
        let target=directory.appendingPathComponent(m.id,isDirectory:true),old=directory.appendingPathComponent(".previous-"+UUID().uuidString,isDirectory:true),exists=FileManager.default.fileExists(atPath:target.path)
        if exists{try FileManager.default.moveItem(at:target,to:old)}
        do{try FileManager.default.moveItem(at:staging,to:target)}catch{if exists{try? FileManager.default.moveItem(at:old,to:target)};throw error}
        if exists{try? FileManager.default.removeItem(at:old)}
    }
}
