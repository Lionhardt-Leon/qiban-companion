import Foundation
import SwiftUI

struct ConversationSession:Codable,Identifiable {
    var id=UUID().uuidString
    var personaKey:String
    var title="新对话"
    var createdAt=Date()
    var updatedAt=Date()
    var externalID:String?
    var mood:CompanionMood?
}

extension LocalArchive {
    mutating func prepareConversationSessions() {
        var sessions=conversationSessions ?? []
        var active=activeSessionIDs ?? [:]
        let keys=Set((settings.personas?.cards.map{$0.id.uuidString} ?? [])+Array((personaConversations ?? [:]).keys)+[personaSessionKey].compactMap{$0})
        for key in keys where active[key]==nil {
            let old=key==personaSessionKey ? PersonaConversation(messages:messages,memories:memories,diary:diary):personaConversations?[key] ?? PersonaConversation()
            let first=ConversationSession(id:ChatIdentifiers.uuid("session:"+key+":default").uuidString,personaKey:key,title:old.messages.isEmpty ? "新对话":"原有对话",createdAt:old.messages.first?.createdAt ?? Date(),updatedAt:old.messages.last?.createdAt ?? Date(),mood:moods?[key])
            sessions.append(first);active[key]=first.id
        }
        conversationSessions=sessions;activeSessionIDs=active;sessionHistories=sessionHistories ?? [:];schemaVersion=3
    }
    func sessionContents(_ id:String)->PersonaConversation {
        guard let meta=conversationSessions?.first(where:{$0.id==id}) else{return PersonaConversation()}
        if activeSessionIDs?[meta.personaKey]==id {
            if meta.personaKey==personaSessionKey{return PersonaConversation(messages:messages,memories:memories,diary:diary)}
            return personaConversations?[meta.personaKey] ?? PersonaConversation()
        }
        return sessionHistories?[id] ?? PersonaConversation()
    }
    mutating func setSessionContents(_ value:PersonaConversation,id:String) {
        guard let index=conversationSessions?.firstIndex(where:{$0.id==id}),let meta=conversationSessions?[index] else{return}
        if activeSessionIDs?[meta.personaKey]==id {
            if meta.personaKey==personaSessionKey {messages=value.messages;memories=value.memories;diary=value.diary}
            else {if personaConversations==nil{personaConversations=[:]};personaConversations?[meta.personaKey]=value}
        } else {if sessionHistories==nil{sessionHistories=[:]};sessionHistories?[id]=value}
        conversationSessions?[index].updatedAt=max(value.messages.last?.createdAt ?? Date(),meta.createdAt)
    }
    mutating func selectSession(_ id:String) throws {
        prepareConversationSessions()
        guard let meta=conversationSessions?.first(where:{$0.id==id}) else{throw CompanionError.message("找不到这段对话，原记录已保留。")}
        let key=meta.personaKey
        guard activeSessionIDs?[key] != id else{return}
        let restored=sessionContents(id)
        if let previous=activeSessionIDs?[key] {
            sessionHistories?[previous]=sessionContents(previous)
            if let index=conversationSessions?.firstIndex(where:{$0.id==previous}){conversationSessions?[index].mood=moods?[key]}
        }
        activeSessionIDs?[key]=id;sessionHistories?.removeValue(forKey:id)
        if moods==nil{moods=[:]};moods?[key]=meta.mood ?? CompanionMood()
        setSessionContents(restored,id:id)
    }
    mutating func createSession(personaKey:String,title:String="新对话",externalID:String?=nil)->String {
        prepareConversationSessions()
        let meta=ConversationSession(personaKey:personaKey,title:String(title.prefix(120)),externalID:externalID)
        conversationSessions?.append(meta);sessionHistories?[meta.id]=PersonaConversation()
        return meta.id
    }
}

extension LocalStore {
    var currentSession:ConversationSession? {guard let key=archive.personaSessionKey,let id=archive.activeSessionIDs?[key] else{return nil};return archive.conversationSessions?.first{$0.id==id}}
    var currentSessions:[ConversationSession] {(archive.conversationSessions ?? []).filter{$0.personaKey==archive.personaSessionKey}.sorted{$0.updatedAt>$1.updatedAt}}
    func prepareSessionBrowser() throws {try prepareChatSharing();var next=archive;next.prepareConversationSessions();try commit(next)}
    func newConversation(title:String="新对话") throws {
        try prepareSessionBrowser();guard let key=archive.personaSessionKey else{throw CompanionError.message("请先选择当前角色。")}
        cancel();var next=archive;let id=next.createSession(personaKey:key,title:title);try next.selectSession(id);try commit(next);invalidateConversationPlayback()
    }
    func chooseConversation(_ id:String) throws {
        guard archive.conversationSessions?.first(where:{$0.id==id})?.personaKey==archive.personaSessionKey else{throw CompanionError.message("这段对话属于另一个角色。")}
        cancel();var next=archive;try next.selectSession(id);try commit(next);invalidateConversationPlayback()
    }
    func renameConversation(_ id:String,title:String) throws {
        let title=title.trimmingCharacters(in:.whitespacesAndNewlines)
        guard !title.isEmpty,title.count<=120,let index=archive.conversationSessions?.firstIndex(where:{$0.id==id}) else{throw CompanionError.message("对话名称应为1～120字。")}
        var next=archive;next.conversationSessions?[index].title=title;try commit(next)
    }
    private func invalidateConversationPlayback(){resetConversationIdentity()}
}

struct ConversationSessionsView:View {
    @EnvironmentObject private var store:LocalStore
    @EnvironmentObject private var speech:CompanionSpeech
    @Environment(\.dismiss) private var dismiss
    @State private var renaming:ConversationSession?
    @State private var title=""
    var body:some View {
        NavigationStack {
            List {
                Button {perform{try store.newConversation();dismiss()}} label:{Label("开启新对话",systemImage:"plus.bubble")}
                ForEach(store.currentSessions){session in
                    Button {perform{try store.chooseConversation(session.id);dismiss()}} label:{
                        HStack {
                            VStack(alignment:.leading,spacing:6){Text(session.title).foregroundStyle(.primary);Text(store.archive.sessionContents(session.id).messages.last?.displayContent ?? "还没有消息").lineLimit(2).font(.caption).foregroundStyle(.secondary);Text(session.updatedAt,style:.date).font(.caption2).foregroundStyle(.secondary)}
                            Spacer();if session.id==store.currentSession?.id{Image(systemName:"checkmark.circle.fill")}
                        }
                    }.contextMenu{Button("重命名"){title=session.title;renaming=session}}
                }
            }.navigationTitle("历史对话").toolbar{ToolbarItem(placement:.confirmationAction){Button("完成"){dismiss()}}}
                .task{do{try store.prepareSessionBrowser()}catch{store.error=error.localizedDescription}}
                .alert("重命名对话",isPresented:Binding(get:{renaming != nil},set:{if !$0{renaming=nil}})){TextField("名称",text:$title);Button("保存"){if let session=renaming{do{try store.renameConversation(session.id,title:title)}catch{store.error=error.localizedDescription}};renaming=nil};Button("取消",role:.cancel){renaming=nil}}
        }
    }
    private func perform(_ action:()throws->Void){speech.stop();do{try action()}catch{store.error=error.localizedDescription}}
}
