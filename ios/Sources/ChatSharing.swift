import Foundation
import CryptoKit

struct ChatSharedMessage:Decodable {
    let id:String
    let role:String
    let text:String
    let createdAt:Double
    let spokenJapanese:String?
    let spokenChinese:String?
}

struct ChatContactChange:Decodable {
    let id:String
    let qibanId:String?
    let name:String
    let prompt:String
    let examples:String
    let promptEdited:Bool
    let messages:[ChatSharedMessage]
    let removedIds:[String]
}

enum ChatIdentifiers {
    static func uuid(_ key:String)->UUID {
        if let id=UUID(uuidString:key){return id}
        let bytes=Array(SHA256.hash(data:Data(("qiban-chat:"+key).utf8)).prefix(16))
        return UUID(uuid:(bytes[0],bytes[1],bytes[2],bytes[3],bytes[4],bytes[5],bytes[6],bytes[7],bytes[8],bytes[9],bytes[10],bytes[11],bytes[12],bytes[13],bytes[14],bytes[15]))
    }
}

extension LocalStore {
    func prepareChatSharing() throws {
        guard storageReady else {throw CompanionError.message("本地存储未就绪，无法打开通讯模块。")}
        if archive.settings.personas==nil {
            var next=archive;let library=PersonaLibrary.migrating(next.settings.persona)
            next.settings.personas=library;next.schemaVersion=2;next.personaSessionKey=library.defaultCardID?.uuidString
            try commit(next)
        }
    }
    func chatContactSnapshot(_ card:PersonaCard)->[String:Any] {
        var settings=archive.settings;var library=settings.personas!
        library.defaultCardID=card.id;library.modelBindings["native"]=card.id;settings.personas=library
        let rendered=(try? PersonaPrompt.character(settings:settings,context:CompanionContext())) ?? card.description
        let session=chatSession(card.id)
        return ["id":archive.chatContactOrigins?[card.id.uuidString] ?? "qiban_"+card.id.uuidString,"qibanId":card.id.uuidString,"name":card.name,"description":card.title,
                "prompt":rendered,"examples":"","source":"qiban","tags":["App人设"],
                "memories":session.memories,"resetToken":archive.chatResetTokens?[card.id.uuidString] ?? "0"]
    }
    func chatBootstrap() throws -> [String:Any] {
        try prepareChatSharing();let library=archive.settings.personas!
        let global="【App系统提示词】\n"+library.systemPrompt+"\n【用户人设】\n称呼："+library.userName+"\n"+library.userDescription
        let status="\n【本App当前界面】现在是文字通讯模式，模型场景暂停；没有执行新的骨骼或触碰动作。不要把文字描写当作身体已执行。用户随时可以回到模型陪伴页面。"
        let preferences=archive.settings.speech ?? SpeechPreferences()
        return ["contacts":library.cards.map{chatContactSnapshot($0)},"speechFormat":SpokenDialogue.textInstruction,"globalPrompt":global+status,"bodyNotice":status,
                "userName":library.userName.isEmpty ? "你":library.userName,"language":preferences.language,"autoPlay":preferences.autoPlay,
                "model":archive.settings.model,"temperature":archive.settings.temperature,
                "configured":!archive.settings.endpoint.isEmpty && !archive.settings.model.isEmpty,
                "searchEnabled":archive.settings.services?.search.enabled==true,
                "activeId":archive.chatContactOrigins?[(currentCard?.id ?? library.defaultCardID!).uuidString] ?? "qiban_"+(currentCard?.id ?? library.defaultCardID!).uuidString,
                "nativeArchive":String(decoding:try export(),as:UTF8.self)]
    }
    private func chatSession(_ id:UUID)->PersonaConversation {
        if archive.personaSessionKey==id.uuidString {return PersonaConversation(messages:archive.messages,memories:archive.memories,diary:archive.diary)}
        return archive.personaConversations?[id.uuidString] ?? PersonaConversation()
    }
    func chatMessages(cardID:String,offset:Int)->[String:Any] {
        guard let id=UUID(uuidString:cardID),archive.settings.personas?.cards.contains(where:{$0.id==id})==true else{return ["messages":[],"more":false]}
        let list=chatSession(id).messages;let start=max(0,min(list.count,offset)),end=min(list.count,start+200)
        let user=archive.settings.personas?.userName ?? "你"
        let name=archive.settings.personas?.cards.first(where:{$0.id==id})?.name ?? "伙伴"
        let speaker=archive.chatContactOrigins?[id.uuidString] ?? "qiban_"+id.uuidString
        let result:[[String:Any]]=list[start..<end].map {message in
            var row:[String:Any]=["id":message.id.uuidString,"role":message.role,"text":message.displayContent,"createdAt":message.createdAt.timeIntervalSince1970*1000,
                                  "speakerId":message.role=="user" ? "player":speaker,"speakerName":message.role=="user" ? user:name,"status":"sent"]
            var meta:[String:String]=[:]
            if let japanese=message.resolvedSpokenJapanese {meta["qibanSpokenJapanese"]=japanese}
            if let chinese=message.resolvedSpokenChinese {meta["qibanSpokenChinese"]=chinese}
            if !meta.isEmpty {row["meta"]=meta}
            return row
        }
        return ["messages":result,"more":end<list.count,"next":end]
    }
    func syncChatContact(_ change:ChatContactChange) throws -> [String:Any] {
        guard !busy,change.messages.count<=300,change.removedIds.count<=300,change.name.count<=120,
              Set(change.messages.map(\.id)).count==change.messages.count,
              change.prompt.count<=PersonaLimits.promptCharacters,change.examples.count<=PersonaLimits.fieldCharacters,
              change.messages.allSatisfy({["user","assistant"].contains($0.role) && $0.id.count<=100 && $0.text.count<=100_000 && $0.createdAt.isFinite && ($0.spokenJapanese?.count ?? 0)<=100_000 && ($0.spokenChinese?.count ?? 0)<=100_000}) else{throw CompanionError.message("通讯同步内容无效或本体正在回复，请稍后再试。")}
        try prepareChatSharing();var next=archive;var library=next.settings.personas!
        let id=change.qibanId.flatMap(UUID.init(uuidString:)) ?? ChatIdentifiers.uuid("contact:"+change.id)
        let index=library.cards.firstIndex{$0.id==id}
        if change.qibanId != nil,index==nil{return ["linked":false,"reason":"该人设已从本体删除，通讯中的历史副本仍保留。"]}
        if index==nil,library.cards.count>=50{return ["linked":false,"reason":"本体人设库已满，通讯角色仍保留在通讯模块中。"]}
        var card=index.map{library.cards[$0]} ?? PersonaCard();card.id=id
        if card.name != change.name {card.name=change.name;card.title=change.name}
        if index==nil || change.promptEdited {
            guard change.prompt.count<=PersonaLimits.fieldCharacters else {throw CompanionError.message("修改后的角色提示词超过本体单字段100万字，请在本体人设页拆分保存。")}
            card.description=change.prompt;card.personality="";card.scenario="";card.systemRules="";card.replyRules=""
            card.examples=change.examples
        }
        if let index=index {library.cards[index]=card}else{library.cards.append(card)}
        next.settings.personas=library;next.schemaVersion=2
        if next.chatContactOrigins==nil {next.chatContactOrigins=[:]};next.chatContactOrigins?[id.uuidString]=change.id
        var session=chatSession(id)
        let removed=Set(change.removedIds.map{ChatIdentifiers.uuid("message:"+change.id+":"+$0)})
        let removedNative=Set(change.removedIds.compactMap(UUID.init(uuidString:)))
        session.messages.removeAll{removed.contains($0.id) || removedNative.contains($0.id)}
        var positions=Dictionary(uniqueKeysWithValues:session.messages.enumerated().map{($0.element.id,$0.offset)})
        for item in change.messages {
            let messageID=UUID(uuidString:item.id) ?? ChatIdentifiers.uuid("message:"+change.id+":"+item.id)
            var message=Message(id:messageID,role:item.role,content:item.text,spokenJapanese:item.spokenJapanese,spokenChinese:item.spokenChinese,createdAt:Date(timeIntervalSince1970:item.createdAt/1000))
            if let position=positions[messageID] {message.sources=session.messages[position].sources;session.messages[position]=message}
            else {positions[messageID]=session.messages.count;session.messages.append(message)}
        }
        session.messages.sort{$0.createdAt<$1.createdAt}
        if next.personaSessionKey==id.uuidString {next.messages=session.messages}
        else {if next.personaConversations==nil {next.personaConversations=[:]};next.personaConversations?[id.uuidString]=session}
        try commit(next)
        let messageIDs=Dictionary(uniqueKeysWithValues:change.messages.map{($0.id,(UUID(uuidString:$0.id) ?? ChatIdentifiers.uuid("message:"+change.id+":"+$0.id)).uuidString)})
        return ["linked":true,"qibanId":id.uuidString,"messageIDs":messageIDs]
    }
    func saveChatPersonas(_ library:PersonaLibrary) throws {
        guard !busy else{throw CompanionError.message("请先等待本体回复完成。")};try library.validate()
        var next=archive;next.settings.personas=library;next.schemaVersion=2;try commit(next)
    }
}
