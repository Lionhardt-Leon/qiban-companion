/* iOS data exchange for Fritia Online Chat. GPL-3.0-or-later. */
import {loadAppStore,saveAppStore,normalizeCharacterRecord} from './storage.js';
import {getSettings,saveSettings} from './settings.js';
import {signature,reconcileMessages,decorateIdentities} from './qiban_identity.js';

const KEY='fritia_qiban_mirrors',HIDDEN='fritia_qiban_hidden_contacts',NATIVE='fritia_qiban_native_archive';
let profile=null,seen=new Set(),timer=0,syncing=null,dirty=false,applyingIdentities=false;
const playKey=message=>message.id+':'+(message.meta?.qibanRevision || 0);
const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key)) || fallback;}catch{return fallback;}};

export async function initQibanChat() {
  if(!window.QibanNative?.available)return;
  profile=window.QibanProfile;const hidden=new Set(read(HIDDEN,[]));
  const userName=document.getElementById('qiban-user-name');if(userName)userName.textContent=profile.userName || '你';
  window.QibanNative.reconcileStore=store=>decorateIdentities(store,read(KEY,{}),profile.userName);
  window.QibanNative.markMessageRemoved=(conversationID,messageID)=>{
    const store=loadAppStore(),conversation=store.conversations.find(item=>item.id===conversationID);
    if(conversation?.type!=='private')return;
    const mirrors=read(KEY,{}),id=conversation.memberIds[0],old=mirrors[conversationID] || mirrors[id] || {},message=(store.messages[conversationID] || []).find(item=>item.id===messageID);
    const nativeID=message?.meta?.qibanNativeId || old.nativeIDs?.[messageID] || messageID;
    mirrors[conversationID]={...old,deletedNativeIDs:[...new Set([...(old.deletedNativeIDs || []),nativeID])],pendingRemovedIDs:[...new Set([...(old.pendingRemovedIDs || []),nativeID])]};localStorage.setItem(KEY,JSON.stringify(mirrors));
  };
  let store=loadAppStore();const active=store.activeConversationId,mirrors=read(KEY,{});
  for(const contact of profile.contacts) {
    if(hidden.has(contact.id))continue;
    const previous=store.characters.find(item=>item.id===contact.id);
    const card=normalizeCharacterRecord({...previous,...contact,avatar:previous?.avatar || 'src/_logo/emoji/chat.svg',createdAt:previous?.createdAt || Date.now(),updatedAt:Date.now()});
    const index=store.characters.findIndex(item=>item.id===card.id);
    if(index<0)store.characters.unshift(card);else store.characters[index]=card;
    const sessions=contact.sessions?.length?contact.sessions:[{id:crypto.randomUUID(),title:'原有对话',active:true}];
    for(let sessionIndex=0;sessionIndex<sessions.length;sessionIndex++) {
    const session=sessions[sessionIndex];
    let conversation=store.conversations.find(item=>item.type==='private'&&item.memberIds[0]===card.id&&item.qibanSessionId===session.id);
    if(!conversation&&sessionIndex===0)conversation=store.conversations.find(item=>item.type==='private'&&item.memberIds[0]===card.id&&!item.qibanSessionId);
    if(!conversation){const id=session.externalID || (sessionIndex===0?'private:'+card.id:'private:'+session.id);conversation={id,type:'private',title:card.name,avatar:card.avatar,memberIds:[card.id],createdAt:session.createdAt||Date.now(),updatedAt:session.updatedAt||Date.now()};store.conversations.unshift(conversation);store.messages[id]=[];}
    conversation.qibanSessionId=session.id;
    if(!conversation.qibanThreadTitle || conversation.qibanThreadTitle==='新对话' || conversation.qibanThreadTitle===mirrors[conversation.id]?.sessionTitle)conversation.qibanThreadTitle=session.title||'原有对话';
    if(!mirrors[conversation.id]&&sessionIndex===0&&mirrors[card.id])mirrors[conversation.id]={...mirrors[card.id]};
    const reconciled=await reconcileMessages(store.messages[conversation.id] || [],card.id,mirrors[conversation.id]);
    let list=reconciled.messages;const nativeIDs=reconciled.nativeIDs;
    const signatures={...(mirrors[conversation.id]?.signatures || {})};
    if(mirrors[conversation.id]?.resetToken!==undefined && mirrors[conversation.id].resetToken!==(session.resetToken||contact.resetToken||'0')) {
      list=[];
      const memory=read('fritia_long_term_memory',null);
      if(memory) {
        const removed=new Set((memory.memories || []).filter(item=>item.scope==='private:'+card.id).map(item=>item.id));
        memory.memories=(memory.memories || []).filter(item=>!removed.has(item.id));
        memory.edges=(memory.edges || []).filter(item=>item.scope!=='private:'+card.id && !(item.sourceMemoryIds || []).some(id=>removed.has(id)));
        memory.deletedIds=[...new Set([...(memory.deletedIds || []),...removed])];
        localStorage.setItem('fritia_long_term_memory',JSON.stringify(memory));
      }
    }
    let offset=0,more=true;
    while(more) {
      const result=await window.QibanNative.call('messages',{id:contact.qibanId,sessionID:session.id,offset});
      for(const message of result.messages) {
        if((mirrors[conversation.id]?.deletedNativeIDs || []).includes(message.id))continue;
        const existing=list.find(item=>item.id===message.id || item.meta?.qibanNativeId===message.id);
        if(existing) {
          const local=JSON.stringify([existing.text,existing.meta?.qibanSpokenJapanese,existing.meta?.qibanSpokenChinese]);
          if(!signatures[existing.id] || signatures[existing.id]===local)Object.assign(existing,{text:message.text,meta:{...existing.meta,...message.meta,qibanNativeId:message.id}});
          if(existing.text===message.text)signatures[existing.id]=JSON.stringify([existing.text,existing.meta?.qibanSpokenJapanese,existing.meta?.qibanSpokenChinese]);
        }else {list.push({...message,meta:{...message.meta,qibanNativeId:message.id}});signatures[message.id]=JSON.stringify([message.text,message.meta?.qibanSpokenJapanese,message.meta?.qibanSpokenChinese]);}
      }
      offset=result.next;more=result.more;
    }
    list.sort((a,b)=>a.createdAt-b.createdAt);store.messages[conversation.id]=list;
    mirrors[conversation.id]={...mirrors[conversation.id],qibanId:contact.qibanId,cardID:card.id,sessionID:session.id,sessionTitle:conversation.qibanThreadTitle,resetToken:(session.resetToken||contact.resetToken||'0'),prompt:contact.prompt,name:contact.name,ids:list.map(item=>item.id),signatures,nativeIDs};
  }
    }
  store.activeConversationId=store.conversations.some(item=>item.id===active) ? active : store.conversations.find(item=>item.memberIds[0]===profile.activeId)?.id || store.activeConversationId;
  localStorage.setItem(KEY,JSON.stringify(mirrors));localStorage.setItem(NATIVE,profile.nativeArchive);
  configureProviders();
  saveAppStore(store);
  for(const list of Object.values(store.messages))for(const message of list)seen.add(playKey(message));
  document.addEventListener('fritia-next-chat-store-updated',onStore);
  document.addEventListener('qiban-speech-translated',event=>{
    let store=loadAppStore(),changed=false;
    for(const list of Object.values(store.messages))for(const message of list) {
      if(message.id===event.detail.id || event.detail.id.startsWith(message.id+':')) {
        message.meta={...message.meta};
        if(event.detail.spokenJapanese)message.meta.qibanSpokenJapanese=event.detail.spokenJapanese;
        if(typeof event.detail.spokenChinese==='string')message.meta.qibanSpokenChinese=event.detail.spokenChinese;
        changed=true;
        for(const item of message.attachments || [])if(item.path?.startsWith('qiban-speech:'))item.path='qiban-speech:'+encodeURIComponent(JSON.stringify({text:message.text,spokenJapanese:event.detail.spokenJapanese,spokenChinese:event.detail.spokenChinese}));
      }
    }
    if(changed)saveAppStore(store);
  });
  document.addEventListener('submit',()=>window.QibanNative.stopAllSpeech().catch(()=>{}),true);
  window.QibanNative.markDeletedContact=id=>{const hidden=new Set(read(HIDDEN,[]));hidden.add(id);localStorage.setItem(HIDDEN,JSON.stringify([...hidden]));};
  window.QibanNative.flush=flush;
  window.QibanNative.restoreSnapshot=async()=>{
    const archive=localStorage.getItem(NATIVE);if(archive)await window.QibanNative.call('restoreNativeArchive',{archive});
    await synchronize();await window.QibanNative.flushStorage();
  };
  window.QibanNative.refreshNativeSnapshot=async()=>{
    const result=await window.QibanNative.call('nativeArchive');localStorage.setItem(NATIVE,result.archive);await window.QibanNative.flushStorage();
  };
}

function configureProviders() {
  const old=getSettings(),managed={id:'qiban-app',apiKey:'qiban-app-managed',baseUrl:'https://qiban.app/v1',model:profile.model || 'qiban-chat'},vision={id:'qiban-app-vision',apiKey:'qiban-app-managed',baseUrl:'https://qiban.app/vision/v1',model:'qiban-vision'};
  const previous=read('fritia_qiban_configured',false);
  const providers=[managed,vision,...old.chatProviders.filter(item=>!['qiban-app','qiban-app-vision'].includes(item.id))];
  saveSettings({...old,chatProviders:providers,defaultChatProviderId:previous ? old.defaultChatProviderId:'qiban-app',defaultImageCaptionProviderId:previous ? old.defaultImageCaptionProviderId:'qiban-app-vision',temperature:profile.temperature});
  localStorage.setItem('fritia_qiban_configured','true');
}

function onStore(event) {
  const store=event.detail || loadAppStore(),toSpeak=[];
  for(const list of Object.values(store.messages))for(const message of list) {
    if(!seen.has(playKey(message)) && message.role==='user')window.QibanNative.stopAllSpeech().catch(()=>{});
    if(window.QibanNative.appSpeechEnabled() && !seen.has(playKey(message)) && message.role==='assistant' && message.status==='sent' && !message.meta?.qibanRegenerating && message.text && !message.meta?.qibanSpokenJapanese)toSpeak.push(message);
    if(message.status!=='typing')seen.add(playKey(message));
  }
  let queue=Promise.resolve();
  for(const message of toSpeak)queue=queue.then(()=>window.QibanNative.speak({id:message.id,text:message.text,spokenJapanese:message.meta?.qibanSpokenJapanese || '',spokenChinese:message.meta?.qibanSpokenChinese,automatic:true})).catch(error=>window.QibanNative.notice('App 配音：'+error.message));
  if(applyingIdentities)return;
  dirty=true;clearTimeout(timer);timer=setTimeout(()=>synchronize().catch(error=>window.QibanNative.notice('本体同步：'+error.message)),600);
}

async function synchronize() {
  dirty=true;
  if(syncing)return syncing;
  syncing=(async()=>{do{dirty=false;await syncPass();}while(dirty);})();
  try{await syncing;}finally{syncing=null;}
}
async function syncPass() {
  const store=loadAppStore(),mirrors=read(KEY,{});let linkedAny=false;
  for(const conversation of store.conversations.filter(item=>item.type==='private')) {
    const card=store.characters.find(c=>c.id===conversation.memberIds[0]);if(!card)continue;
    if(!conversation.qibanSessionId)conversation.qibanSessionId=crypto.randomUUID();
    const list=store.messages[conversation.id]||[];
    const valid=list.filter(item=>['user','assistant'].includes(item.role) && item.status!=='typing' && item.status!=='error' && !item.meta?.toolMode);
    const allIDs=new Set(list.map(item=>item.id)),old=mirrors[conversation.id] || {};
    const removed=[...new Set([...(old.ids || []).filter(id=>!allIDs.has(id)),...(old.pendingRemovedIDs || [])])];
    const promptEdited=old.prompt!==undefined ? old.prompt!==card.prompt : !card.qibanId;
    const changed=valid.filter(item=>old.signatures?.[item.id]!==signature(item));
    const batches=Math.max(1,Math.ceil(changed.length/200),Math.ceil(removed.length/200));
    let linked=null;const signatures={...old.signatures},nativeIDs={...old.nativeIDs};
    for(let batch=0;batch<batches;batch++) {
      const messages=changed.slice(batch*200,batch*200+200).map(item=>({id:item.id,role:item.role,text:item.text,createdAt:item.createdAt,spokenJapanese:item.meta?.qibanSpokenJapanese || null,spokenChinese:item.meta?.qibanSpokenChinese ?? null}));
      if(!messages.length && !removed.length && card.name===old.name && old.active===(store.activeConversationId===conversation.id) && old.sessionTitle===conversation.qibanThreadTitle && !promptEdited && old.qibanId)continue;
      linked=await window.QibanNative.call('syncContact',{active:store.activeConversationId===conversation?.id,contact:{id:card.id,sessionID:conversation.qibanSessionId,conversationID:conversation.id,sessionTitle:conversation.qibanThreadTitle&&conversation.qibanThreadTitle!=='新对话'?conversation.qibanThreadTitle:(list.find(m=>m.role==='user'&&m.text)?.text?.slice(0,36)||'新对话'),qibanId:card.qibanId || old.qibanId || null,name:card.name,prompt:card.prompt || '',examples:card.examples || '',promptEdited,messages,removedIds:removed.slice(batch*200,batch*200+200)}});
      if(!linked.linked)break;
      for(const message of messages){signatures[message.id]=JSON.stringify([message.text,message.spokenJapanese || undefined,message.spokenChinese ?? undefined]);nativeIDs[message.id]=linked.messageIDs[message.id];}
    }
    if(linked?.linked){
      const newest=read(KEY,{});newest[conversation.id]={...newest[conversation.id],qibanId:linked.qibanId,cardID:card.id,sessionID:linked.sessionID || conversation.qibanSessionId,active:store.activeConversationId===conversation.id,sessionTitle:conversation.qibanThreadTitle,resetToken:old.resetToken || '0',prompt:card.prompt,name:card.name,ids:valid.map(item=>item.id),signatures,nativeIDs,pendingRemovedIDs:(newest[conversation.id]?.pendingRemovedIDs || []).filter(id=>!removed.includes(id))};
      localStorage.setItem(KEY,JSON.stringify(newest));linkedAny=true;
    }
  }
  if(linkedAny){
    applyingIdentities=true;
    try{window.QibanNative.applyIdentityUpdates?.();}finally{applyingIdentities=false;}
  }
}

async function flush() {
  clearTimeout(timer);await synchronize();
  if(dirty)await synchronize();
  await window.QibanNative.refreshNativeSnapshot();
  await window.QibanNative.flushStorage();
}
