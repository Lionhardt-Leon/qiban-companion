import Foundation
import OnnxRuntimeBindings

// ORT tensorData returns borrowed storage. A stage boundary owns a real copy.
struct VoiceTensorSnapshot {
    let data:Data
    let shape:[Int]
    init(_ value:ORTValue)throws {
        let info=try value.tensorTypeAndShapeInfo(),dimensions=info.shape.map(\.intValue),raw=try value.tensorData()
        guard info.elementType == .float,(1...5).contains(dimensions.count),raw.length<=128*1024*1024 else{throw CompanionError.message("语义缓存维度超出本机限制。")}
        var count=1
        for size in dimensions {guard size>0,size<=4096,count<=32*1024*1024/size else{throw CompanionError.message("语义缓存过大。")};count*=size}
        guard raw.length==count*4 else{throw CompanionError.message("语义缓存长度错误。")}
        data=Data(bytes:raw.bytes,count:raw.length);shape=dimensions
    }
}
