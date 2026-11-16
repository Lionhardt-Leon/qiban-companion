/* Mobile message editing, deletion and regeneration. GPL-3.0-or-later. */
import {saveAppStore,createId} from './storage.js';
import {completePrivateMessageReply,requestCharacterReply} from './chat_engine.js';
import {completeToolPrivateMessageReply} from './tool_chat_engine.js';
import {getSelectedMcpClientIds} from './mcp_tools.js';
import {recordLongTermMemoryTurn} from './long_term_memory.js';
import {clearSpeech,editMessage,deleteMessage,regenerationPlan,applyRegenerated,invalidateMessageMemory,restrictMemoryReferences,createDraft,isDraft,keepDraft,endDraft} from './qiban_message_ops.js';

let hooks=null,active=false,modal=null;
const notify=text=>window.QibanNative.notice(text);
export function initQibanMessageActions(context){
  if(!window.QibanNative?.available)return;
  hooks=context;
  window.QibanNative.isDraftStore=isDraft;window.QibanNative.saveDraftStore=keepDraft;
  window.QibanNative.memoryIDs=store=>isDraft(store)?Object.values(store.messages).flat().map(item=>item.id):(store.messages[store.activeConversationId]||[]).map(item=>item.id);
  window.QibanNative.limitMemory=restrictMemoryReferences;
  window.QibanNative.applyIdentityUpdates=()=>saveAppStore(hooks.getStore());
  document.addEventListener('qiban-stop-web-speech',()=>hooks.stopPlayback());
  document.addEventListener('qiban-tts-state',()=>hooks.refresh());
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeModal();});
}
function busy(){return active || hooks?.isBusy();}
function assertIdle(){if(busy())throw new Error('请等待当前回复或工具调用完成，再编辑、删除或刷新消息。');}
function persist(store){return saveAppStore(store);}
function invalidate(ids){
  const key='fritia_long_term_memory',raw=localStorage.getItem(key);if(!raw)return;
  try{const before=JSON.parse(raw),after=invalidateMessageMemory(before,ids);if(after!==before){localStorage.setItem(key,JSON.stringify(after));document.dispatchEvent(new CustomEvent('fritia-long-term-memory-updated'));}}
  catch(error){throw new Error('相关记忆无法读取，未修改消息：'+error.message);}
}
function current(conversationID,messageID){return (hooks.getStore().messages[conversationID] || []).find(item=>item.id===messageID);}
export function decorateQibanMessage(row,message,conversation){
  if(!hooks || !conversation || !['user','assistant'].includes(message.role))return;
  const meta=row.querySelector('.message-meta');if(!meta)return;
  meta.classList.add('qiban-message-meta');
  const controls=document.createElement('span');controls.className='qiban-message-controls';
  const refresh=document.createElement('button');refresh.type='button';refresh.className='qiban-message-refresh';refresh.dataset.messageId=message.id;
  refresh.title=message.role==='user' ? '用这条消息重新请求回复':'重新生成这条回复';refresh.setAttribute('aria-label',refresh.title);
  refresh.textContent=message.meta?.qibanRegenerating ? '…':'↻';refresh.disabled=busy() || message.status==='typing';
  refresh.addEventListener('click',()=>regenerate(conversation.id,message.id).catch(error=>notify(error.message)));
  const more=document.createElement('button');more.type='button';more.className='qiban-message-more';more.textContent='⋯';more.title='编辑或删除消息';more.setAttribute('aria-label',more.title);
  more.addEventListener('click',()=>openActions(conversation.id,message.id));controls.append(refresh,more);meta.appendChild(controls);
  let timer=0,start=null,suppress=false;
  const cancel=()=>{clearTimeout(timer);timer=0;};
  row.addEventListener('pointerdown',event=>{
    if(document.getElementById('app')?.classList.contains('is-conversation-management') || event.button>0)return;
    if(event.target.closest('a,input,textarea,summary,.qiban-message-controls'))return;
    start={x:event.clientX,y:event.clientY};cancel();timer=setTimeout(()=>{suppress=true;openActions(conversation.id,message.id);},500);
  });
  row.addEventListener('pointermove',event=>{if(start && Math.hypot(event.clientX-start.x,event.clientY-start.y)>10)cancel();});
  for(const name of ['pointerup','pointercancel','pointerleave'])row.addEventListener(name,cancel);
  row.addEventListener('click',event=>{if(suppress){event.preventDefault();event.stopImmediatePropagation();suppress=false;}},true);
  row.addEventListener('contextmenu',event=>{if(!document.getElementById('app')?.classList.contains('is-conversation-management')){event.preventDefault();cancel();openActions(conversation.id,message.id);}});
}
function closeModal(){modal?.remove();modal=null;}
function makeModal(title){
  closeModal();const overlay=document.createElement('div');overlay.className='qiban-message-overlay';
  const panel=document.createElement('section');panel.className='qiban-message-dialog';panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true');panel.setAttribute('aria-label',title);
  const heading=document.createElement('h3');heading.textContent=title;panel.appendChild(heading);overlay.appendChild(panel);
  overlay.addEventListener('click',event=>{if(event.target===overlay)closeModal();});document.body.appendChild(overlay);modal=overlay;return panel;
}
function button(label,action,className=''){
  const node=document.createElement('button');node.type='button';node.textContent=label;node.className=className;node.addEventListener('click',()=>Promise.resolve().then(action).catch(error=>notify(error.message)));return node;
}
function openActions(conversationID,messageID){
  const message=current(conversationID,messageID);if(!message)return;
  const panel=makeModal('消息操作');
  panel.append(button('编辑消息',()=>openEditor(conversationID,messageID)),button('删除这条消息',async()=>{
    assertIdle();await window.QibanNative.stopAllSpeech();
    const latest=hooks.getStore();window.QibanNative.markMessageRemoved?.(conversationID,messageID);invalidate([messageID]);persist(deleteMessage(latest,conversationID,messageID));closeModal();notify('已删除这条消息。');
  },'is-destructive'),button('取消',closeModal));
}
function openEditor(conversationID,messageID){
  assertIdle();const message=current(conversationID,messageID);if(!message)return;
  const original=message.text || '',panel=makeModal(message.role==='user' ? '编辑我的消息':'编辑 AI 回复');
  const input=document.createElement('textarea');input.value=original;input.maxLength=100000;input.className='qiban-message-editor';input.setAttribute('aria-label','消息内容');panel.appendChild(input);
  const hint=document.createElement('p');hint.textContent='保存后可继续聊天，或点击消息下方的 ↻ 重新生成。';panel.appendChild(hint);
  panel.append(button('保存修改',async()=>{
    assertIdle();if(current(conversationID,messageID)?.text!==original)throw new Error('这条消息已变化，请重新打开编辑。');
    const next=editMessage(hooks.getStore(),conversationID,messageID,input.value);await window.QibanNative.stopAllSpeech();invalidate([messageID]);persist(next);closeModal();notify('已保存修改。');
  },'is-primary'),button('取消',closeModal));setTimeout(()=>{input.focus();input.setSelectionRange(input.value.length,input.value.length);},0);
}
async function regenerate(conversationID,messageID){
  assertIdle();const originalStore=hooks.getStore(),plan=regenerationPlan(originalStore,conversationID,messageID);
  const character=originalStore.characters.find(item=>item.id===plan.speakerID);if(!character)throw new Error('找不到这条回复对应的角色。');
  const id=plan.target?.id || createId('msg'),base=clearSpeech(plan.target || {id,role:'assistant',speakerId:character.id,speakerName:character.name,text:'',attachments:[],createdAt:plan.user.createdAt+0.1,status:'sent'});
  const draft=createDraft(originalStore,conversationID,plan.history);let completed=false;
  active=true;hooks.changeBusy(1);
  const effectivePlan={...plan,target:plan.target || {id}};
  try{
    await window.QibanNative.stopAllSpeech();invalidate(plan.target ? [plan.target.id]:[]);
    const placeholder={...base,meta:{...base.meta,qibanRegenerating:true}};
    persist(applyRegenerated(hooks.getStore(),conversationID,plan,placeholder));
    const runtime=hooks.chatSettings(plan.conversation.type==='group' ? 'group:'+conversationID:character.id);
    const accept=generated=>{
      if(completed || generated?.status!=='sent')return;
      completed=true;
      const reply={...generated,id,createdAt:base.createdAt,meta:{...base.meta,...generated.meta,qibanRegenerating:false,qibanRevision:(base.meta?.qibanRevision || 0)+1,qibanRepliedTo:plan.user.id}};
      persist(applyRegenerated(hooks.getStore(),conversationID,effectivePlan,reply));
      recordLongTermMemoryTurn({source:plan.conversation.type==='group' ? 'roundtable':'private',publicScope:plan.conversation.type==='group',characterId:character.id,characterName:character.name,userText:plan.user.text,assistantText:reply.text,sourceMessageIds:[plan.user.id,id]});
    };
    if(plan.conversation.type==='group'){
      const result=await requestCharacterReply({store:draft,conversation:plan.conversation,character,userText:plan.user.text,userMessage:plan.user,mode:'roundtable',chatSettings:runtime.settings,reasoningEffort:runtime.reasoningEffort});
      accept({...base,text:typeof result==='string' ? result:result.text,status:'sent',meta:{}});
    }else{
      const clients=getSelectedMcpClientIds(conversationID);
      const run=clients.length ? completeToolPrivateMessageReply:completePrivateMessageReply;
      await run({store:draft,conversation:plan.conversation,character,text:plan.user.text,userMessage:plan.user,selectedClientIds:clients,chatSettings:runtime.settings,reasoningEffort:runtime.reasoningEffort,voiceReplyEnabled:plan.conversation.voiceReplyEnabled===true && window.QibanNative.ttsEnabled(),onStore:store=>{
        const candidate=(store.messages[conversationID] || []).filter(item=>!plan.history.some(old=>old.id===item.id)).at(-1);accept(candidate);
      }});
    }
    if(!completed)throw new Error('重新生成未完成，已保留原回复。');
  }catch(error){
    if(!completed){
      const latest=hooks.getStore();persist(plan.target ? applyRegenerated(latest,conversationID,effectivePlan,base):deleteMessage(latest,conversationID,id));
    }
    throw error;
  }finally{endDraft(draft);active=false;hooks.changeBusy(-1);hooks.refresh();}
}
