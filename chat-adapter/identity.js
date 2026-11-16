/* Stable native/web message identities. GPL-3.0-or-later. */
const uuid=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export const signature=message=>JSON.stringify([message.text,message.meta?.qibanSpokenJapanese,message.meta?.qibanSpokenChinese]);
export async function nativeMessageID(contactID,messageID){
  if(uuid.test(messageID))return messageID.toUpperCase();
  const data=new TextEncoder().encode('qiban-chat:message:'+contactID+':'+messageID);
  const hex=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',data)).slice(0,16),b=>b.toString(16).padStart(2,'0')).join('').toUpperCase();
  return [hex.slice(0,8),hex.slice(8,12),hex.slice(12,16),hex.slice(16,20),hex.slice(20)].join('-');
}
export async function reconcileMessages(list,contactID,mirror={}){
  const nativeIDs={...mirror.nativeIDs},seen=new Map(),result=[];
  for(const message of list){
    const nativeID=message.meta?.qibanNativeId || nativeIDs[message.id] || await nativeMessageID(contactID,message.id);
    nativeIDs[message.id]=nativeID;
    const existing=seen.get(nativeID);
    if(existing){
      // Only identities prove duplication. Equal text and timestamps do not.
      const richer=!uuid.test(message.id) && uuid.test(existing.id) ? message:existing;
      const other=richer===message ? existing:message;
      const merged={...richer,meta:{...other.meta,...richer.meta,qibanNativeId:nativeID},attachments:richer.attachments?.length ? richer.attachments : other.attachments || []};
      if(other.text!==richer.text)merged.meta.qibanRecoveredText=other.text;
      result[result.indexOf(existing)]=merged;seen.set(nativeID,merged);
    }else{const row={...message,meta:{...message.meta,qibanNativeId:nativeID}};seen.set(nativeID,row);result.push(row);}
  }
  return {messages:result,nativeIDs};
}
export function decorateIdentities(store,mirrors,userName){
  const characters=store.characters.map(card=>({...card,qibanId:card.qibanId || (mirrors[card.id] || Object.values(mirrors).find(m=>m.cardID===card.id))?.qibanId}));
  const conversations=store.conversations.map(c=>c.type==='private'&&mirrors[c.id]?.sessionID?{...c,qibanSessionId:mirrors[c.id].sessionID}:c);
  const messages={...store.messages};
  for(const conversation of store.conversations){
    const mirror=conversation.type==='private' ? (mirrors[conversation.id] || mirrors[conversation.memberIds[0]]):null;
    messages[conversation.id]=(messages[conversation.id] || []).map(message=>{
      const nativeID=message.meta?.qibanNativeId || mirror?.nativeIDs?.[message.id];
      return {...message,...(message.role==='user' ? {speakerId:'player',speakerName:userName || '你'}:{}),meta:{...message.meta,...(nativeID ? {qibanNativeId:nativeID}:{})}};
    });
  }
  return {...store,characters,conversations,messages};
}
