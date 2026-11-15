/* Message operations shared by the mobile UI and focused checks. GPL-3.0-or-later. */
export function clearSpeech(message){
  const meta={...message.meta};
  for(const key of ['qibanSpokenChinese','qibanSpokenJapanese','voiceReply','ttsText','voiceReplyFailed','ttsError','reasoning'])delete meta[key];
  return {...message,meta,attachments:(message.attachments || []).filter(item=>item.source!=='tts-reply' && !item.path?.startsWith('qiban-speech:'))};
}
export function editMessage(store,conversationID,messageID,text){
  const original=(store.messages[conversationID] || []).find(item=>item.id===messageID);
  if(!original)throw new Error('消息已删除，请重新选择。');
  if(!text.trim() && !(original.attachments || []).some(item=>item.source!=='tts-reply'))throw new Error('消息内容不能为空。');
  if(text.length>100000)throw new Error('消息超过10万字。');
  const changed={...clearSpeech(original),text:text.trim(),status:'sent'};changed.meta.qibanEditedAt=Date.now();
  return {...store,messages:{...store.messages,[conversationID]:store.messages[conversationID].map(item=>item.id===messageID ? changed:item)}};
}
export function deleteMessage(store,conversationID,messageID){
  return {...store,messages:{...store.messages,[conversationID]:(store.messages[conversationID] || []).filter(item=>item.id!==messageID)}};
}
export function regenerationPlan(store,conversationID,messageID){
  const conversation=store.conversations.find(item=>item.id===conversationID),list=store.messages[conversationID] || [],index=list.findIndex(item=>item.id===messageID);
  if(!conversation || index<0)throw new Error('这条消息已不存在。');
  const selected=list[index];let userIndex=index,target=null;
  if(selected.role==='user'){
    for(let i=index+1;i<list.length && list[i].role!=='user';i++)if(list[i].role==='assistant'){target=list[i];break;}
  }else if(selected.role==='assistant'){
    target=selected;while(userIndex>=0 && list[userIndex].role!=='user')userIndex--;
  }else throw new Error('系统消息不能重新生成。');
  if(userIndex<0)throw new Error('找不到这条回复对应的用户消息。');
  // The selected user's *saved* text is the request, never a cached composer
  // value or the old reply. Later rows remain visible but are not model input.
  const user=list[userIndex],prefixEnd=selected.role==='assistant' ? index:userIndex+1;
  return {conversation,user,target,insertIndex:userIndex+1,history:list.slice(0,prefixEnd),speakerID:target?.speakerId || conversation.memberIds[0]};
}
export function applyRegenerated(store,conversationID,plan,message){
  const list=[...(store.messages[conversationID] || [])];
  if(plan.target){const index=list.findIndex(item=>item.id===plan.target.id);if(index<0)throw new Error('待刷新的消息已被删除。');list[index]=message;}
  else {const userIndex=list.findIndex(item=>item.id===plan.user.id);if(userIndex<0)throw new Error('原消息已被删除。');list.splice(userIndex+1,0,message);}
  return {...store,messages:{...store.messages,[conversationID]:list}};
}
export function invalidateMessageMemory(memory,ids){
  if(!memory || !Array.isArray(memory.memories))return memory;
  const changed=new Set(ids),removed=new Set(memory.memories.filter(item=>item.source!=='manual' && (item.sourceMessageIds || []).some(id=>changed.has(id))).map(item=>item.id));
  if(!removed.size)return memory;
  const removedEdges=(memory.edges || []).filter(item=>(item.sourceMemoryIds || []).some(id=>removed.has(id)));
  return {...memory,updatedAt:Date.now(),memories:memory.memories.filter(item=>!removed.has(item.id)),edges:(memory.edges || []).filter(item=>!removedEdges.includes(item)),deletedIds:[...new Set([...(memory.deletedIds || []),...removed,...removedEdges.map(item=>item.id)])]};
}
export function restrictMemoryReferences(result,memory,ids){
  if(!Array.isArray(ids))return result;
  const allowed=new Set(ids),byID=new Map((memory.memories || []).map(item=>[item.id,item]));
  const usable=item=>item && (item.source==='manual' || !(item.sourceMessageIds || []).length || item.sourceMessageIds.every(id=>allowed.has(id)));
  return {...result,memories:result.memories.filter(usable),edges:result.edges.filter(item=>(item.sourceMemoryIds || []).every(id=>usable(byID.get(id))))};
}
const drafts=new Set();
export function createDraft(store,conversationID,history){const token=crypto.randomUUID();drafts.add(token);return {...structuredClone(store),__qibanDraft:token,messages:{...structuredClone(store.messages),[conversationID]:structuredClone(history)}};}
export function isDraft(store){return drafts.has(store?.__qibanDraft);}
export function keepDraft(source,normalized){if(!isDraft(source))return false;normalized.__qibanDraft=source.__qibanDraft;return true;}
export function endDraft(store){drafts.delete(store.__qibanDraft);}
