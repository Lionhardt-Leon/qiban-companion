/* Thread selection uses stored records rather than clearing message arrays. */
import {saveAppStore,loadAppStore} from './storage.js';
import {createThread,listThreads,renameThread,threadOwner,threadTitle} from './qiban_session_ops.js';
let hooks=null,panel=null;
const key='fritia_qiban_selected_sessions';
const selected=()=>{try{return JSON.parse(localStorage.getItem(key))||{};}catch{return {};}};
export function initQibanSessions(context){
  if(!window.QibanNative?.available)return;hooks=context;
  window.QibanNative.currentConversation=()=>{const s=hooks.getStore();return s.conversations.find(c=>c.id===s.activeConversationId);};
  window.QibanNative.preferredConversation=(store,id)=>{const last=selected()['private:'+id];return store.conversations.find(c=>c.id===last&&c.type==='private'&&c.memberIds[0]===id);};
  window.QibanNative.resolveConversation=(store,id)=>{const base=store.conversations.find(c=>c.id===id);if(!base)return id;const last=selected()[threadOwner(base)];return store.conversations.some(c=>c.id===last&&threadOwner(c)===threadOwner(base))?last:id;};
  window.QibanNative.rememberConversation=()=>{const c=window.QibanNative.currentConversation();if(c)localStorage.setItem(key,JSON.stringify({...selected(),[threadOwner(c)]:c.id}));};
  window.QibanNative.visibleConversations=store=>{const chosen=selected(),owners=new Map();for(const c of [...store.conversations].sort((a,b)=>b.updatedAt-a.updatedAt)){const owner=threadOwner(c),previous=owners.get(owner);if(!previous || c.id===store.activeConversationId || previous.id!==store.activeConversationId&&chosen[owner]===c.id)owners.set(owner,c);}return [...owners.values()];};
  window.QibanNative.conversationSessions=async action=>{assertIdle();if(action==='new')await start();else show();};
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
}
function assertIdle(){if(!hooks||hooks.isBusy())throw Error('请等待当前回复或工具调用结束，再切换对话。');}
function close(){panel?.remove();panel=null;}
function button(text,action,cls=''){const el=document.createElement('button');el.type='button';el.textContent=text;el.className=cls;el.onclick=()=>Promise.resolve().then(action).catch(e=>window.QibanNative.notice(e.message));return el;}
async function saveAndSelect(next,id){await window.QibanNative.stopAllSpeech();hooks.replace(saveAppStore(next));hooks.select(id);window.QibanNative.rememberConversation();await window.QibanNative.flush();}
async function start(){assertIdle();await window.QibanNative.flush();const store=hooks.getStore(),c=window.QibanNative.currentConversation(),next=createThread(store,c);await saveAndSelect(next,next.activeConversationId);close();window.QibanNative.notice('已开启新对话，之前的记录保存在历史对话中。');}
function show(){assertIdle();const store=hooks.getStore(),c=window.QibanNative.currentConversation();if(!c)throw Error('请先选择角色或群聊。');close();panel=document.createElement('div');panel.className='qiban-sessions';panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true');panel.setAttribute('aria-label','历史对话');const body=document.createElement('section'),header=document.createElement('header'),title=document.createElement('strong');title.textContent='历史对话';header.append(title,button('关闭',close));body.append(header,button('＋ 开启新对话',start,'qiban-new-thread'));
  for(const item of listThreads(store,c)){const row=document.createElement('article'),choose=button('',async()=>{assertIdle();await window.QibanNative.flush();await saveAndSelect(hooks.getStore(),item.id);close();});choose.className='qiban-thread-choice';choose.dataset.conversationId=item.id;const name=document.createElement('b'),preview=document.createElement('span'),date=document.createElement('small');name.textContent=item.sessionTitle+(item.id===store.activeConversationId?' · 当前':'');preview.textContent=item.preview;date.textContent=new Date(item.updatedAt).toLocaleString()+' · '+item.messageCount+' 条';choose.append(name,preview,date);row.append(choose,button('重命名',()=>rename(item)));body.append(row);}panel.append(body);panel.onclick=e=>{if(e.target===panel)close();};document.body.append(panel);
}
function rename(item){const body=panel.querySelector('section');body.replaceChildren();const heading=document.createElement('strong');heading.textContent='重命名对话';const input=document.createElement('input');input.maxLength=120;input.value=threadTitle(hooks.getStore(),item);input.setAttribute('aria-label','对话名称');body.append(heading,input,button('保存',async()=>{assertIdle();hooks.replace(saveAppStore(renameThread(hooks.getStore(),item.id,input.value)));await window.QibanNative.flush();show();}),button('取消',show));input.focus();}
