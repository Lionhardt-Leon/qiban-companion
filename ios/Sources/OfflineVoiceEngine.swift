import Foundation
import OnnxRuntimeBindings
import QibanG2P

final class SpeechCancellation:@unchecked Sendable {
    private let lock=NSLock();private var stopped=false
    func cancel(){lock.lock();stopped=true;lock.unlock()}
    func check() throws {lock.lock();let value=stopped;lock.unlock();if value {throw CancellationError()}}
}

struct VoiceConditioning:Codable {
    let referencePhones:[Int64]
    let referenceText:String
    let referenceBertShape:[Int]
    let promptShape:[Int]
    let spectrogramShape:[Int]
    let sampleRate:Int
    let semanticRate:Int
    let cacheLimit:Int
    func validate() throws {
        guard !referencePhones.isEmpty,referencePhones.count<=500,referencePhones.allSatisfy({(0..<732).contains($0)}),
              referenceBertShape==[1024,referencePhones.count],promptShape.count==2,promptShape[0]==1,(1...500).contains(promptShape[1]),
              spectrogramShape.count==3,spectrogramShape[0]==1,spectrogramShape[1]==1025,(1...1500).contains(spectrogramShape[2]),sampleRate==32000,semanticRate==25,cacheLimit==768 else {throw CompanionError.message("语音参考特征不兼容。")}
    }
}

struct VoicePhones:Decodable {
    var ids:[Int64]?
    var word2ph:[Int]?
    var text:String?
    var error:String?
}

final class VoiceWordPiece {
    private let vocabulary:[String:Int64]
    init(url:URL) throws {
        guard (try url.resourceValues(forKeys:[.fileSizeKey]).fileSize ?? Int.max)<4*1024*1024,
              let json=try JSONSerialization.jsonObject(with:Data(contentsOf:url)) as? [String:Any],let model=json["model"] as? [String:Any],let vocab=model["vocab"] as? [String:Any] else {throw CompanionError.message("语音分词字典无效。")}
        vocabulary=vocab.compactMapValues{($0 as? NSNumber)?.int64Value}
        guard vocabulary["[CLS]"] != nil,vocabulary["[SEP]"] != nil,vocabulary["[UNK]"] != nil else {throw CompanionError.message("语音分词特殊符号缺失。")}
    }
    // Character offsets preserve alignment between BERT tokens and G2P word2ph.
    func encode(_ text:String)->(ids:[Int64],characterTokens:[Int]) {
        let chars=Array(text.unicodeScalars);var ids=[vocabulary["[CLS]"]!],mapping=Array(repeating:0,count:chars.count),index=0
        func letter(_ c:Unicode.Scalar)->Bool {(65...90).contains(c.value)||(97...122).contains(c.value)||(48...57).contains(c.value)}
        while index<chars.count {
            if CharacterSet.whitespacesAndNewlines.contains(chars[index]) {index+=1;continue}
            var end=index+1
            if letter(chars[index]) {while end<chars.count,letter(chars[end]) {end+=1}}
            let word=String(String.UnicodeScalarView(chars[index..<end])).lowercased();let letters=Array(word);var start=0,parts:[(Int64,Int,Int)]=[]
            while start<letters.count {
                var stop=letters.count;var found:(Int64,Int,Int)?
                while stop>start {
                    let token=(start>0 ? "##":"")+String(letters[start..<stop])
                    if let id=vocabulary[token] {found=(id,start,stop);break};stop-=1
                }
                guard let value=found else {parts=[(vocabulary["[UNK]"]!,0,letters.count)];break}
                parts.append(value);start=value.2
            }
            for part in parts {
                let tokenIndex=ids.count;ids.append(part.0)
                for offset in part.1..<part.2 where index+offset<end {mapping[index+offset]=tokenIndex}
            }
            index=end
        }
        ids.append(vocabulary["[SEP]"]!);return(ids,mapping)
    }
}

// One instance lives on the synthesis queue. The UI never runs neural inference.
final class OfflineVoiceEngine {
    let voice:VoiceManifest.Voice
    let computeMode:VoiceComputeMode
    private(set) var diagnostics=""
    private let env:ORTEnv
    private let encoder:AcceleratedVoiceSession,step:AcceleratedVoiceSession,vocoder:AcceleratedVoiceSession
    private let bert:AcceleratedVoiceSession?
    private let tokenizer:VoiceWordPiece?
    private let condition:VoiceConditioning
    private let referenceBert:[Float]
    private let prompt:ORTValue,spectrogram:ORTValue
    private let vocabularySize=732
    init(root:URL,voice:VoiceManifest.Voice,computeMode:VoiceComputeMode = .automatic) throws {
        self.voice=voice;self.computeMode=computeMode
        let path=root.appendingPathComponent(voice.directory)
        let data=try Data(contentsOf:path.appendingPathComponent("conditioning.json"));guard data.count<=128*1024 else {throw CompanionError.message("语音参考索引过大。")}
        condition=try JSONDecoder().decode(VoiceConditioning.self,from:data);try condition.validate()
        referenceBert=try Self.floats(Self.feature(path.appendingPathComponent("reference_bert.bin"),bytes:1024*condition.referencePhones.count*4))
        prompt=try Self.tensor(Self.feature(path.appendingPathComponent("prompt_semantic.bin"),bytes:condition.promptShape[1]*8),.int64,condition.promptShape)
        spectrogram=try Self.tensor(Self.feature(path.appendingPathComponent("refer_spec.bin"),bytes:1025*condition.spectrogramShape[2]*4),.float,condition.spectrogramShape)
        let resources=root.appendingPathComponent("resources").path,config=path.appendingPathComponent("config.json").path
        guard resources.withCString({resource in config.withCString{qiban_g2p_initialize(resource,$0)}})==1 else {throw CompanionError.message("中／日语音字典未就绪，请重新导入完整语音包。")}
        env=try ORTEnv(loggingLevel:.warning)
        let cache=try AcceleratedVoiceSession.cacheDirectory(root:root)
        encoder=try AcceleratedVoiceSession(env:env,model:path.appendingPathComponent("gpt_encoder.onnx"),module:"encoder",mode:computeMode,cache:cache.appendingPathComponent(voice.language+"-encoder"))
        step=try AcceleratedVoiceSession(env:env,model:path.appendingPathComponent("gpt_step.onnx"),module:"step",mode:computeMode,cache:cache.appendingPathComponent(voice.language+"-step"))
        vocoder=try AcceleratedVoiceSession(env:env,model:path.appendingPathComponent("sovits.onnx"),module:"sovits",mode:computeMode,cache:cache.appendingPathComponent(voice.language+"-sovits"))
        if voice.language=="zh" {
            bert=try AcceleratedVoiceSession(env:env,model:root.appendingPathComponent("shared/bert.onnx"),module:"bert",mode:computeMode,cache:cache.appendingPathComponent("bert"))
            tokenizer=try VoiceWordPiece(url:root.appendingPathComponent("shared/tokenizer.json"))
        }else {bert=nil;tokenizer=nil}
    }
    private static func feature(_ url:URL,bytes:Int) throws -> Data {
        guard bytes>0,bytes<=16*1024*1024,(try url.resourceValues(forKeys:[.fileSizeKey]).fileSize)==bytes else {throw CompanionError.message("语音参考特征长度错误。")};return try Data(contentsOf:url)
    }
    private static func tensor(_ data:Data,_ type:ORTTensorElementDataType,_ shape:[Int]) throws -> ORTValue {
        try ORTValue(tensorData:NSMutableData(data:data),elementType:type,shape:shape.map{NSNumber(value:$0)})
    }
    private static func tensor(_ array:[Int64],_ shape:[Int]) throws -> ORTValue {try array.withUnsafeBufferPointer{try tensor(Data(buffer:$0),.int64,shape)}}
    private static func tensor(_ array:[Float],_ shape:[Int]) throws -> ORTValue {try array.withUnsafeBufferPointer{try tensor(Data(buffer:$0),.float,shape)}}
    private static func floats(_ data:Data) throws -> [Float] {
        guard data.count%4==0 else {throw CompanionError.message("语音浮点特征无效。")}
        return data.withUnsafeBytes{bytes in stride(from:0,to:bytes.count,by:4).map{bytes.loadUnaligned(fromByteOffset:$0,as:Float.self)}}
    }
    private static func integers(_ value:ORTValue) throws -> [Int64] {
        let data=try value.tensorData() as Data;guard data.count%8==0 else {throw CompanionError.message("语音语义输出类型无效。")}
        return data.withUnsafeBytes{bytes in stride(from:0,to:bytes.count,by:8).map{bytes.loadUnaligned(fromByteOffset:$0,as:Int64.self)}}
    }
    private func run(_ session:AcceleratedVoiceSession,_ inputs:[String:ORTValue],_ outputs:[String]) throws -> [String:ORTValue] {
        try session.run(inputs,outputs)
    }
    private func phones(_ text:String) throws -> (ids:[Int64],features:[Float]) {
        let data=try text.withCString {textPointer in try voice.language.withCString {languagePointer -> Data in
            guard let result=qiban_g2p_process(textPointer,languagePointer) else {throw CompanionError.message("文字转音素失败。")};defer{qiban_g2p_free(result)};return Data(String(cString:result).utf8)
        }}
        let parsed=try JSONDecoder().decode(VoicePhones.self,from:data)
        guard parsed.error==nil,let ids=parsed.ids,!ids.isEmpty,ids.count<=400,ids.allSatisfy({$0>=0 && $0<Int64(vocabularySize)}),let normalized=parsed.text else {throw CompanionError.message("这句台词无法转换为有效音素，请缩短后重试。")}
        guard voice.language=="zh",let bert=bert,let tokenizer=tokenizer else {return(ids,Array(repeating:0,count:1024*ids.count))}
        let encoded=tokenizer.encode(normalized),count=encoded.ids.count
        guard count<=512,let counts=parsed.word2ph,counts.count==encoded.characterTokens.count,counts.allSatisfy({(0...12).contains($0)}),counts.reduce(0,+)==ids.count else {throw CompanionError.message("文字与音素无法对齐，请换一种表述。")}
        let output=try run(bert,["input_ids":Self.tensor(encoded.ids,[1,count]),"attention_mask":Self.tensor(Array(repeating:Int64(1),count:count),[1,count]),"token_type_ids":Self.tensor(Array(repeating:Int64(0),count:count),[1,count])],["hidden_states"])
        guard let hidden=output["hidden_states"] else {throw CompanionError.message("文字语义模型没有输出。")}
        let values=try Self.floats(hidden.tensorData() as Data);guard values.count==count*1024 else {throw CompanionError.message("文字语义特征维度不兼容。")}
        var result=Array(repeating:Float(0),count:1024*ids.count);var position=0
        for (character,repeats) in counts.enumerated() {
            let token=encoded.characterTokens[character]
            for channel in 0..<1024 {for offset in 0..<repeats {result[channel*ids.count+position+offset]=values[token*1024+channel]}}
            position+=repeats
        }
        return(ids,result)
    }
    func synthesize(_ text:String,speed:Float,cancellation:SpeechCancellation) throws -> [Float] {
        let started=ProcessInfo.processInfo.systemUptime
        for session in [bert,encoder,step,vocoder].compactMap({$0}) {session.resetMetrics()}
        try cancellation.check();let target=try phones(text);try cancellation.check()
        let referenceCount=condition.referencePhones.count,n=target.ids.count,allCount=referenceCount+n
        var feature:[Float]=[];feature.reserveCapacity(1024*allCount)
        for channel in 0..<1024 {feature.append(contentsOf:referenceBert[channel*referenceCount..<(channel+1)*referenceCount]);feature.append(contentsOf:target.features[channel*n..<(channel+1)*n])}
        let output=try run(encoder,["phoneme_ids":Self.tensor(condition.referencePhones+target.ids,[1,allCount]),"prompts":prompt,"bert_feature":Self.tensor(feature,[1,1024,allCount])],["topk_values","topk_indices","k_cache","v_cache","x_len","y_len"])
        guard var k=output["k_cache"],var v=output["v_cache"],let x=output["x_len"],let y=output["y_len"] else {throw CompanionError.message("语义生成器输出不完整。")}
        guard let xCount=try Self.integers(x).first,let yCount=try Self.integers(y).first,(0...768).contains(xCount),(0...768).contains(yCount) else {throw CompanionError.message("语义长度输出无效。")}
        let used=xCount+yCount;let maxSteps=min(375,condition.cacheLimit-Int(used)-2)
        guard maxSteps>=25 else {throw CompanionError.message("这句台词过长，请拆成短句。")}
        var tokens:[Int64]=[],current=try sample(output,history:[],allowEnd:false),ended=false
        for index in 0..<maxSteps {
            try cancellation.check()
            if current==1024 {ended=true;break};tokens.append(current)
            let next=try run(step,["samples":Self.tensor([current],[1,1]),"k_cache":k,"v_cache":v,"idx":Self.tensor([Int64(index)],[1]),"x_len":x,"y_len":y],["topk_values","topk_indices","k_cache_new","v_cache_new"])
            guard let nk=next["k_cache_new"],let nv=next["v_cache_new"] else {throw CompanionError.message("语义缓存输出不完整。")};k=nk;v=nv
            current=try sample(next,history:tokens,allowEnd:tokens.count>=5)
        }
        guard ended,tokens.count>=5 else {throw CompanionError.message("这一句的语音生成未正常结束，请缩短后重试。")}
        try cancellation.check()
        let pcm=try run(vocoder,["pred_semantic":Self.tensor(tokens,[1,1,tokens.count]),"text_seq":Self.tensor(target.ids,[1,n]),"refer_spec":spectrogram,"speed":Self.tensor([speed],[1])],["audio"])
        guard let value=pcm["audio"] else {throw CompanionError.message("声码器没有输出声音。")}
        let samples=try Self.floats(value.tensorData() as Data)
        guard !samples.isEmpty,samples.count<=32000*20,samples.allSatisfy(\.isFinite),samples.contains(where:{abs($0)>0.0001}) else {throw CompanionError.message("生成的音频无效。")}
        let elapsed=ProcessInfo.processInfo.systemUptime-started,duration=Double(samples.count)/32000
        diagnostics="本段合成 "+String(format:"%.2fs / 音频 %.2fs · RTF %.2f",elapsed,duration,elapsed/max(duration,0.001))+"\n"+[bert.map{"BERT："+$0.summary},"编码："+encoder.summary,"逐步生成："+step.summary,"声码器："+vocoder.summary].compactMap{$0}.joined(separator:"\n")
        return samples
    }
    private func sample(_ output:[String:ORTValue],history:[Int64],allowEnd:Bool) throws -> Int64 {
        guard let rawValues=output["topk_values"],let rawIDs=output["topk_indices"] else {throw CompanionError.message("语义采样输出缺失。")}
        let values=try Self.floats(rawValues.tensorData() as Data),ids=try Self.integers(rawIDs)
        guard values.count==ids.count,!ids.isEmpty,ids.count<=1025 else {throw CompanionError.message("语义采样维度错误。")}
        let previous=Set(history);let choices=zip(ids,values).filter{(0...1024).contains($0.0) && (allowEnd || $0.0 != 1024) && $0.1.isFinite}.map {id,value -> (Int64,Float) in
            let adjusted=previous.contains(id) ? (value<0 ? value*1.35:value/1.35):value;return(id,adjusted/0.8)
        }.sorted{$0.1>$1.1}.prefix(15)
        guard let maximum=choices.first?.1 else {throw CompanionError.message("语义采样没有有效候选。")}
        let weights=choices.map{Double(exp($0.1-maximum))};let total=weights.reduce(0,+);var draw=Double.random(in:0..<max(total,Double.leastNonzeroMagnitude))
        for (choice,weight) in zip(choices,weights) {draw-=weight;if draw<=0{return choice.0}}
        return choices.last!.0
    }
}
