/* Independent conversation records; GPL-3.0-or-later with the chat module. */
export const threadOwner=c=>c.type==='private'?'private:'+c.memberIds[0]:'group:'+(c.qibanThreadRoot||c.id);
export function threadTitle(store,c){const first=(store.messages[c.id]||[]).find(m=>m.role==='user'&&m.text?.trim());return c.qibanThreadTitle&&c.qibanThreadTitle!=='新对话'?c.qibanThreadTitle:first?first.text.trim().slice(0,36):'新对话';}
export function listThreads(store,conversation){return store.conversations.filter(c=>threadOwner(c)===threadOwner(conversation)).map(c=>({...c,sessionTitle:threadTitle(store,c),preview:(store.messages[c.id]||[]).at(-1)?.text||'还没有消息',messageCount:(store.messages[c.id]||[]).length})).sort((a,b)=>b.updatedAt-a.updatedAt);}
export function createThread(store,conversation,{id=crypto.randomUUID(),now=Date.now()}={}){
  if(!conversation)throw Error('请先选择要开始对话的角色或群聊。');
  if(store.conversations.length>=1000)throw Error('已达到 1000 段对话，请先导出整理。');
  const next={...conversation,id:(conversation.type==='private'?'private:':'group:')+id,createdAt:now,updatedAt:now,unread:0,qibanThreadTitle:'新对话',qibanThreadRoot:conversation.qibanThreadRoot||conversation.id,qibanSessionId:conversation.type==='private'?id:''};
  return {...store,conversations:[next,...store.conversations],messages:{...store.messages,[next.id]:[]},activeConversationId:next.id};
}
export function renameThread(store,id,title){title=String(title).trim();if(!title||title.length>120)throw Error('对话名称应为 1～120 字。');if(!store.conversations.some(c=>c.id===id))throw Error('这段对话已不存在。');return {...store,conversations:store.conversations.map(c=>c.id===id?{...c,qibanThreadTitle:title}:c)};}
