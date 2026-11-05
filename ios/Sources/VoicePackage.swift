import Foundation
import CryptoKit
import zlib

struct VoiceManifest:Codable {
    struct File:Codable {let bytes:Int64;let sha256:String}
    struct Voice:Codable,Identifiable {let id:String;let title:String;let language:String;let directory:String}
    let schema:String
    let id:String
    let title:String
    let frontendRevision:String
    let voices:[Voice]
    let files:[String:File]
    static func safePath(_ value:String)->Bool {
        !value.isEmpty && !value.hasPrefix("/") && !value.contains("\\") && !value.contains(":") && !value.contains("\0") && value.split(separator:"/",omittingEmptySubsequences:false).allSatisfy{!$0.isEmpty && $0 != "." && $0 != ".."}
    }
    func validate() throws {
        guard schema == "qiban-offline-voice/1",!id.isEmpty,id.count<=120,title.count<=120,
              frontendRevision == "384a2f995c48ef1903373ac8814569a8925779ba",
              voices.count==2,Set(voices.map(\.id)).count==2,Set(voices.map(\.language))==Set(["zh","ja"]),files.count<=2048 else {throw CompanionError.message("不是当前版本支持的中／日离线语音包。")}
        for voice in voices {
            guard !voice.id.isEmpty,voice.id.count<=120,voice.title.count<=120,voice.directory == "voices/"+voice.language else {throw CompanionError.message("音色映射无效。")}
            for file in ["config.json","conditioning.json","reference_bert.bin","prompt_semantic.bin","refer_spec.bin","gpt_encoder.onnx","gpt_step.onnx","sovits.onnx"] {
                guard files[voice.directory+"/"+file] != nil else {throw CompanionError.message("语音包缺少 \(voice.language) 的 \(file)。")}
            }
        }
        guard files["shared/bert.onnx"] != nil,files["shared/tokenizer.json"] != nil,files.keys.contains(where:{$0.hasPrefix("resources/")}) else {throw CompanionError.message("语音包缺少共用模型或字典。")}
        var total:Int64=0
        for (path,file) in files {
            guard Self.safePath(path),path != "manifest.json",file.bytes>=0,file.bytes<=768*1024*1024,file.sha256.count==64,file.sha256.allSatisfy({$0.isHexDigit}) else {throw CompanionError.message("语音包文件索引无效。")}
            total += file.bytes
        }
        guard total<=3_000_000_000 else {throw CompanionError.message("语音包超过3GB上限。")}
    }
}

struct VoicePackageLibrary {
    let directory:URL
    var current:URL {directory.appendingPathComponent("current",isDirectory:true)}
    init(directory:URL?=nil) {
        self.directory=directory ?? FileManager.default.urls(for:.applicationSupportDirectory,in:.userDomainMask)[0].appendingPathComponent(AppIdentity.storageNamespace).appendingPathComponent("OfflineVoices",isDirectory:true)
    }
    func manifest() throws -> VoiceManifest {
        let path=current.appendingPathComponent("manifest.json")
        guard (try path.resourceValues(forKeys:[.fileSizeKey]).fileSize ?? Int.max)<=512*1024 else {throw CompanionError.message("语音索引过大。")}
        let value=try JSONDecoder().decode(VoiceManifest.self,from:Data(contentsOf:path));try value.validate();return value
    }
    func importPackage(_ url:URL,progress:(Double)->Void = {_ in}) throws -> VoiceManifest {
        let archive=try StoredVoiceArchive(url:url)
        let bytes=try archive.read("manifest.json",limit:512*1024)
        let manifest=try JSONDecoder().decode(VoiceManifest.self,from:bytes);try manifest.validate()
        guard Set(archive.entries.map(\.path))==Set(manifest.files.keys).union(["manifest.json"]) else {throw CompanionError.message("语音包文件与索引不一致。")}
        let fm=FileManager.default;try fm.createDirectory(at:directory,withIntermediateDirectories:true)
        let staging=directory.appendingPathComponent("staging-"+UUID().uuidString,isDirectory:true)
        let prior=directory.appendingPathComponent("prior-"+UUID().uuidString,isDirectory:true)
        try fm.createDirectory(at:staging,withIntermediateDirectories:false)
        var installed=false
        defer {cleanTemporary(staging);if installed {cleanTemporary(prior)}}
        var done:Int64=0;let total=manifest.files.values.reduce(Int64(0)){$0+$1.bytes};var reported=0.0
        for (path,record) in manifest.files.sorted(by:{$0.key<$1.key}) {
            try Task.checkCancellation()
            guard let entry=archive.entries.first(where:{$0.path==path}),entry.size==record.bytes else {throw CompanionError.message("语音包大小索引错误。")}
            let target=staging.appendingPathComponent(path);try fm.createDirectory(at:target.deletingLastPathComponent(),withIntermediateDirectories:true)
            guard fm.createFile(atPath:target.path,contents:nil,attributes:[.protectionKey:FileProtectionType.complete]) else {throw CompanionError.message("无法写入离线语音文件，请检查储存空间。")}
            let output=try FileHandle(forWritingTo:target);defer{try? output.close()}
            var hash=SHA256()
            try archive.stream(entry) {data in
                try Task.checkCancellation();try output.write(contentsOf:data);hash.update(data:data);done+=Int64(data.count)
                let value=Double(done)/Double(max(1,total));if value-reported>=0.01 {progress(value);reported=value}
            }
            guard hash.finalize().map({String(format:"%02x",$0)}).joined()==record.sha256.lowercased() else {throw CompanionError.message("语音文件校验失败：\(path)。原语音包未替换。")}
        }
        try bytes.write(to:staging.appendingPathComponent("manifest.json"),options:[.atomic,.completeFileProtection])
        let hadCurrent=fm.fileExists(atPath:current.path)
        if hadCurrent {try fm.moveItem(at:current,to:prior)}
        do {try fm.moveItem(at:staging,to:current)} catch {
            if hadCurrent {try? fm.moveItem(at:prior,to:current)}
            throw error
        }
        installed=true;progress(1);return manifest
    }
    private func cleanTemporary(_ url:URL) {
        let root=directory.resolvingSymlinksInPath().standardizedFileURL.path+"/"
        let target=url.resolvingSymlinksInPath().standardizedFileURL
        guard target.path.hasPrefix(root),url.lastPathComponent.hasPrefix("staging-") || url.lastPathComponent.hasPrefix("prior-") else {return}
        try? FileManager.default.removeItem(at:target)
    }
}

// Large model files are streamed, never materialized as an entire ZIP in RAM.
final class StoredVoiceArchive {
    struct Entry {let path:String;let size:Int64;let offset:UInt64;let crc:UInt32}
    let entries:[Entry]
    private let handle:FileHandle
    private let centralOffset:UInt64
    private static func number(_ data:Data,_ at:Int,_ bytes:Int)->UInt64 {data[at..<at+bytes].enumerated().reduce(UInt64(0)){$0 | UInt64($1.element)<<($1.offset*8)}}
    init(url:URL) throws {
        handle=try FileHandle(forReadingFrom:url)
        let size=try handle.seekToEnd();guard size>=22,size<=3_100_000_000 else {throw CompanionError.message("语音包大小无效。")}
        let tailSize=Int(min(size,65_557));try handle.seek(toOffset:size-UInt64(tailSize));let tail=try Self.exact(handle,tailSize)
        guard let end=(0...tailSize-22).reversed().first(where:{Self.number(tail,$0,4)==0x06054b50 && $0+22+Int(Self.number(tail,$0+20,2))==tailSize}),
              Self.number(tail,end+4,2)==0,Self.number(tail,end+6,2)==0 else {throw CompanionError.message("语音包不是支持的单卷 ZIP。")}
        let count=Int(Self.number(tail,end+10,2));let centralSize=Int(Self.number(tail,end+12,4));centralOffset=Self.number(tail,end+16,4)
        guard count>0,count<=2049,Self.number(tail,end+8,2)==UInt64(count),centralSize<=2*1024*1024,centralOffset+UInt64(centralSize)<=size-UInt64(tailSize)+UInt64(end) else {throw CompanionError.message("语音包目录无效或使用了不支持的 ZIP64。")}
        try handle.seek(toOffset:centralOffset);let central=try Self.exact(handle,centralSize);var at=0,list:[Entry]=[],seen=Set<String>()
        for _ in 0..<count {
            guard at+46<=central.count,Self.number(central,at,4)==0x02014b50 else {throw CompanionError.message("语音包目录损坏。")}
            let n=Int(Self.number(central,at+28,2)),extra=Int(Self.number(central,at+30,2)),comment=Int(Self.number(central,at+32,2));let next=at+46+n+extra+comment
            guard n>0,n<=1024,next<=central.count,Self.number(central,at+8,2)&(~UInt64(0x800))==0,Self.number(central,at+10,2)==0,
                  let path=String(data:central.subdata(in:at+46..<at+46+n),encoding:.utf8),VoiceManifest.safePath(path),seen.insert(path).inserted else {throw CompanionError.message("仅支持未压缩、未加密、路径安全的栖伴语音包。")}
            let length=Self.number(central,at+24,4)
            guard length<=768*1024*1024,length==Self.number(central,at+20,4) else {throw CompanionError.message("语音文件过大或经过压缩。")}
            list.append(Entry(path:path,size:Int64(length),offset:Self.number(central,at+42,4),crc:UInt32(Self.number(central,at+16,4))));at=next
        }
        guard at==central.count else {throw CompanionError.message("语音包目录长度不匹配。")};entries=list
    }
    deinit {try? handle.close()}
    private static func exact(_ handle:FileHandle,_ count:Int) throws -> Data {
        guard let data=try handle.read(upToCount:count),data.count==count else {throw CompanionError.message("语音包不完整。")};return data
    }
    func read(_ path:String,limit:Int) throws -> Data {
        guard let entry=entries.first(where:{$0.path==path}),entry.size<=limit else {throw CompanionError.message("语音包缺少有效索引。")}
        var result=Data();try stream(entry){result.append($0)};return result
    }
    func stream(_ entry:Entry,consume:(Data)throws->Void) throws {
        try handle.seek(toOffset:entry.offset);let local=try Self.exact(handle,30)
        guard Self.number(local,0,4)==0x04034b50,Self.number(local,6,2)&(~UInt64(0x800))==0,Self.number(local,8,2)==0 else {throw CompanionError.message("语音包文件头损坏。")}
        let n=Int(Self.number(local,26,2)),extra=Int(Self.number(local,28,2));guard n>0,n<=1024 else {throw CompanionError.message("语音文件名过长。")}
        let name=try Self.exact(handle,n);guard String(data:name,encoding:.utf8)==entry.path else {throw CompanionError.message("语音文件名与索引不一致。")}
        let start=entry.offset+30+UInt64(n+extra);guard start+UInt64(entry.size)<=centralOffset else {throw CompanionError.message("语音文件范围无效。")}
        try handle.seek(toOffset:start);var left=entry.size;var crc:UInt32=0
        while left>0 {
            let data=try Self.exact(handle,Int(min(left,1024*1024)))
            crc=data.withUnsafeBytes {UInt32(crc32(uLong(crc),$0.bindMemory(to:Bytef.self).baseAddress,uInt(data.count)))}
            try consume(data);left-=Int64(data.count)
        }
        guard crc==entry.crc else {throw CompanionError.message("语音包 CRC 校验失败。")}
    }
}
