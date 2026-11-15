/* iOS data exchange for Fritia Online Chat. GPL-3.0-or-later. */
import {loadAppStore,saveAppStore,normalizeCharacterRecord} from './storage.js';
import {getSettings,saveSettings} from './settings.js';

const KEY='fritia_qiban_mirrors',HIDDEN='fritia_qiban_hidden_contacts',NATIVE='fritia_qiban_native_archive';
let profile=null,baseline=new Map(),seen=new Set(),timer=0,syncing=null,dirty=false;
const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key)) || fallback;}catch{return fallback;}};

export async function initQibanChat() {
  if(!window.QibanNative?.available)return;
  profile=window.QibanProfile;const hidden=new Set(read(HIDDEN,[]));
  let store=loadAppStore();const active=store.activeConversationId,mirrors=read(KEY,{});
  for(const contact of profile.contacts) {
    if(hidden.has(contact.id))continue;
    const previous=store.characters.find(item=>item.id===contact.id);
    const card=normalizeCharacterRecord({...previous,...contact,avatar:previous?.avatar || 'src/_logo/emoji/chat.svg',createdAt:previous?.createdAt || Date.now(),updatedAt:Date.now()});
    const index=store.characters.findIndex(item=>item.id===card.id);
    if(index<0)store.characters.unshift(card);else store.characters[index]=card;
    let conversation=store.conversations.find(item=>item.type==='private' && item.memberIds[0]===card.id);
    if(!conversation){conversation={id:'private:'+card.id,type:'private',title:card.name,avatar:card.avatar,memberIds:[card.id],createdAt:Date.now(),updatedAt:Date.now()};store.conversations.unshift(conversation);store.messages[conversation.id]=[];}
    let list=store.messages[conversation.id] || [];
    const signatures={...(mirrors[card.id]?.signatures || {})};
    if(mirrors[card.id]?.resetToken!==undefined && mirrors[card.id].resetToken!==contact.resetToken)list=[];
    let offset=0,more=true;
    while(more) {
      const result=await window.QibanNative.call('messages',{id:contact.qibanId,offset});
      for(const message of result.messages) {
        const existing=list.find(item=>item.id===message.id || item.meta?.qibanNativeId===message.id);
        if(existing) {
          const local=JSON.stringify([existing.text,existing.meta?.qibanSpokenJapanese]);
          if(!signatures[existing.id] || signatures[existing.id]===local)Object.assign(existing,{text:message.text,meta:{...existing.meta,...message.meta,qibanNativeId:message.id}});
          if(existing.text===message.text)signatures[existing.id]=JSON.stringify([existing.text,existing.meta?.qibanSpokenJapanese]);
        }else {list.push({...message,meta:{...message.meta,qibanNativeId:message.id}});signatures[message.id]=JSON.stringify([message.text,message.meta?.qibanSpokenJapanese]);}
      }
      offset=result.next;more=result.more;
    }
    list.sort((a,b)=>a.createdAt-b.createdAt);store.messages[conversation.id]=list;
    mirrors[card.id]={...mirrors[card.id],qibanId:contact.qibanId,resetToken:contact.resetToken,prompt:contact.prompt,ids:list.map(item=>item.id),signatures};
    baseline.set(card.id,contact.prompt);
  }
  store.activeConversationId=store.conversations.some(item=>item.id===active) ? active : store.conversations.find(item=>item.memberIds[0]===profile.activeId)?.id || store.activeConversationId;
  localStorage.setItem(KEY,JSON.stringify(mirrors));localStorage.setItem(NATIVE,profile.nativeArchive);
  configureProviders();
  saveAppStore(store);
  for(const list of Object.values(store.messages))for(const message of list)seen.add(message.id);
  document.addEventListener('fritia-next-chat-store-updated',onStore);
  document.addEventListener('qiban-speech-translated',event=>{
    let store=loadAppStore(),changed=false;
    for(const list of Object.values(store.messages))for(const message of list) {
      if(message.id===event.detail.id || event.detail.id.startsWith(message.id+':')) {
        message.meta={...message.meta,qibanSpokenJapanese:event.detail.spokenJapanese};changed=true;
        for(const item of message.attachments || [])if(item.path?.startsWith('qiban-speech:'))item.path='qiban-speech:'+encodeURIComponent(JSON.stringify({text:message.text,spokenJapanese:event.detail.spokenJapanese}));
      }
    }
    if(changed)saveAppStore(store);
  });
  document.addEventListener('submit',()=>window.QibanNative.call('stopSpeech').catch(()=>{}),true);
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
  const old=getSettings(),managed={id:'qiban-app',apiKey:'qiban-app-managed',baseUrl:'https://qiban.app/v1',model:'qiban-chat'},vision={id:'qiban-app-vision',apiKey:'qiban-app-managed',baseUrl:'https://qiban.app/vision/v1',model:'qiban-vision'};
  const previous=read('fritia_qiban_configured',false);
  const providers=[managed,vision,...old.chatProviders.filter(item=>!['qiban-app','qiban-app-vision'].includes(item.id))];
  saveSettings({...old,chatProviders:providers,defaultChatProviderId:previous ? old.defaultChatProviderId:'qiban-app',defaultImageCaptionProviderId:previous ? old.defaultImageCaptionProviderId:'qiban-app-vision',temperature:profile.temperature});
  localStorage.setItem('fritia_qiban_configured','true');
}

function onStore(event) {
  const store=event.detail || loadAppStore(),toSpeak=[];
  for(const list of Object.values(store.messages))for(const message of list) {
    if(!seen.has(message.id) && message.role==='user')window.QibanNative.call('stopSpeech').catch(()=>{});
    if(!seen.has(message.id) && message.role==='assistant' && message.status==='sent' && message.text && !message.meta?.qibanSpokenJapanese)toSpeak.push(message);
    if(message.status!=='typing')seen.add(message.id);
  }
  let queue=Promise.resolve();
  for(const message of toSpeak)queue=queue.then(()=>window.QibanNative.speak({id:message.id,text:message.text,spokenJapanese:message.meta?.qibanSpokenJapanese || '',automatic:true})).catch(error=>window.QibanNative.notice('App 配音：'+error.message));
  dirty=true;clearTimeout(timer);timer=setTimeout(()=>synchronize().catch(error=>window.QibanNative.notice('本体同步：'+error.message)),600);
}

async function synchronize() {
  if(syncing){dirty=true;await syncing;return synchronize();}
  dirty=false;
  syncing=(async()=>{
    const store=loadAppStore(),mirrors=read(KEY,{});
    for(const card of store.characters) {
      const conversation=store.conversations.find(item=>item.type==='private' && item.memberIds[0]===card.id);
      const list=(conversation ? store.messages[conversation.id] : []) || [];
      const valid=list.filter(item=>['user','assistant'].includes(item.role) && item.status!=='typing' && item.status!=='error');
      // Only remove a message which was previously synchronized and is now
      // absent. Unloaded native history and typing placeholders are preserved.
      const allIDs=new Set(list.map(item=>item.id)),old=mirrors[card.id] || {};
      const removed=(old.ids || []).filter(id=>!allIDs.has(id));
      const promptEdited=old.prompt!==undefined ? old.prompt!==card.prompt : !card.qibanId;
      const changed=valid.filter(item=>old.signatures?.[item.id]!==JSON.stringify([item.text,item.meta?.qibanSpokenJapanese]));
      const batches=Math.max(1,Math.ceil(changed.length/200),Math.ceil(removed.length/200));
      let linked=null;const signatures={...old.signatures};
      for(let batch=0;batch<batches;batch++) {
        const messages=changed.slice(batch*200,batch*200+200).map(item=>({id:item.id,role:item.role,text:item.text,createdAt:item.createdAt,spokenJapanese:item.meta?.qibanSpokenJapanese || null}));
        if(!messages.length && !removed.length && card.name===old.name && !promptEdited && old.qibanId)continue;
        linked=await window.QibanNative.call('syncContact',{active:store.activeConversationId===conversation?.id,contact:{id:card.id,qibanId:card.qibanId || old.qibanId || null,name:card.name,prompt:card.prompt || '',examples:card.examples || '',promptEdited,messages,removedIds:removed.slice(batch*200,batch*200+200)}});
        if(!linked.linked)break;
        for(const message of messages) {
          signatures[message.id]=JSON.stringify([message.text,message.spokenJapanese || undefined]);
          const item=valid.find(item=>item.id===message.id);if(item)item.meta={...item.meta,qibanNativeId:linked.messageIDs[message.id]};
        }
      }
      if(linked?.linked){card.qibanId=linked.qibanId;mirrors[card.id]={qibanId:card.qibanId,resetToken:old.resetToken || '0',prompt:card.prompt,name:card.name,ids:valid.map(item=>item.id),signatures};}
    }
    localStorage.setItem(KEY,JSON.stringify(mirrors));
    // Persist identity metadata without dispatching another render/sync cycle.
    localStorage.setItem('fritia_next_chat_store',JSON.stringify(store));
  })();
  try{await syncing;}finally{syncing=null;}
}

async function flush() {
  clearTimeout(timer);await synchronize();
  if(dirty)await synchronize();
  await window.QibanNative.refreshNativeSnapshot();
  await window.QibanNative.flushStorage();
}
