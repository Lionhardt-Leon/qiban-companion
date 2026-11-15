import Foundation

enum ServiceKind:String,CaseIterable,Identifiable {
    case vision,search,tts,asr
    var id:String {rawValue}
    var title:String {switch self {case .vision:return "图片与镜头识别";case .search:return "联网搜索";case .tts:return "语音合成 TTS";case .asr:return "语音识别 ASR"}}
    var icon:String {switch self {case .vision:return "photo";case .search:return "globe";case .tts:return "speaker.wave.2";case .asr:return "waveform"}}
    var defaultSummary:String {switch self {case .vision:return "跟随主对话接口";case .search:return "关闭";case .tts:return "使用本机音色";case .asr:return "使用本机识别"}}
    var protocols:[ServiceProtocol] {switch self {case .vision:return [.chatVision];case .search:return [.deepSeekSearch];case .tts:return [.deepSeekTTS,.openAISpeech];case .asr:return [.deepSeekASR,.openAITranscription]}}
}

enum ServiceProtocol:String,Codable,CaseIterable,Identifiable {
    case chatVision,deepSeekSearch,deepSeekTTS,openAISpeech,deepSeekASR,openAITranscription
    var id:String {rawValue}
    var title:String {switch self {case .chatVision:return "Chat Completions 识图";case .deepSeekSearch:return "DeepSeek 兼容搜索";case .deepSeekTTS:return "DeepSeek TTS";case .openAISpeech:return "OpenAI 兼容 TTS";case .deepSeekASR:return "DeepSeek ASR";case .openAITranscription:return "OpenAI 兼容 ASR"}}
    var path:String {switch self {case .chatVision:return "chat/completions";case .deepSeekSearch:return "tools/search";case .deepSeekTTS:return "tools/tts";case .openAISpeech:return "audio/speech";case .deepSeekASR:return "tools/asr";case .openAITranscription:return "audio/transcriptions"}}
    var needsModel:Bool {[ServiceProtocol.chatVision,.openAISpeech,.openAITranscription].contains(self)}
}

struct ServiceEndpoint:Codable,Equatable {
    var enabled=false
    var endpoint=""
    var model=""
    var voice="stella"
    var apiProtocol:ServiceProtocol
    init(_ kind:ServiceKind){apiProtocol=kind.protocols[0]}
    func url() throws -> URL {
        guard var parts=URLComponents(string:endpoint.trimmingCharacters(in:.whitespacesAndNewlines)),parts.scheme?.lowercased()=="https",let host=parts.host,!host.isEmpty,parts.user==nil,parts.password==nil,parts.query==nil,parts.fragment==nil else {throw CompanionError.message("独立接口请填写 HTTPS 地址，密钥单独填写。")}
        parts.scheme="https";parts.host=host.lowercased()
        let path=parts.path.trimmingCharacters(in:CharacterSet(charactersIn:"/"))
        if path.isEmpty {parts.path="/v1/"+apiProtocol.path}
        else if path=="v1" || path.hasSuffix("/v1") {parts.path="/"+path+"/"+apiProtocol.path}
        guard let url=parts.url else {throw CompanionError.message("独立接口地址无效。")}
        return url
    }
    var credentialIdentity:String? {guard let address=try? url() else{return nil};return apiProtocol.rawValue+"|"+address.absoluteString}
    func validate(for kind:ServiceKind) throws {
        guard kind.protocols.contains(apiProtocol),endpoint.count<=4096,model.count<=160,voice.count<=160,!model.contains("\n"),!model.contains("\r"),!voice.contains("\n"),!voice.contains("\r") else {throw CompanionError.message("独立接口协议或字段无效。")}
        guard enabled else{return}
        _=try url()
        if apiProtocol.needsModel && model.trimmingCharacters(in:.whitespacesAndNewlines).isEmpty {throw CompanionError.message("请填写此独立接口的模型名称。")}
        if kind == .tts && voice.trimmingCharacters(in:.whitespacesAndNewlines).isEmpty {throw CompanionError.message("请填写云端音色名称或 ID。")}
    }
    static func deepSeek(_ kind:ServiceKind)->Self {
        var value=Self(kind);value.endpoint="https://api.deepseek.com/v1/"+value.apiProtocol.path
        if kind == .vision {value.model="deepseek-flash"}
        return value
    }
}

struct ServiceRouting:Codable,Equatable {
    var vision=ServiceEndpoint(.vision),search=ServiceEndpoint(.search),tts=ServiceEndpoint(.tts),asr=ServiceEndpoint(.asr)
    subscript(_ kind:ServiceKind)->ServiceEndpoint {
        get {switch kind {case .vision:return vision;case .search:return search;case .tts:return tts;case .asr:return asr}}
        set {switch kind {case .vision:vision=newValue;case .search:search=newValue;case .tts:tts=newValue;case .asr:asr=newValue}}
    }
    func validate() throws {for kind in ServiceKind.allCases {try self[kind].validate(for:kind)}}
}

struct ServiceSecret:Codable {
    let identity:String
    let value:String
    func key(for profile:ServiceEndpoint)->String {identity==profile.credentialIdentity ? value:""}
}

struct WebCitation:Codable,Equatable,Identifiable {
    let title:String,url:String,snippet:String
    var id:String {url}
    var link:URL? {guard let value=URL(string:url),["https","http"].contains(value.scheme?.lowercased() ?? ""),value.host != nil,value.user==nil,value.password==nil else{return nil};return value}
}
