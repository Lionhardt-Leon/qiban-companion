// Original-media renderer on the reference table's 1600 × 900 coordinate plane.
// The imported theme supplies images/audio only. No imported program is executed.
import {card,face,label,makePlay,beats,legalMoves,titles} from './engine.mjs';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rect=(l,t,r,b)=>`left:${l*100}%;top:${t*100}%;width:${(r-l)*100}%;height:${(b-t)*100}%`;
const at=(content,l,t,r,b,cls='')=>`<div class="placed ${cls}" style="${rect(l,t,r,b)}">${content}</div>`;
const image=(url,cls='',style='')=>url?`<img class="${cls}" src="${esc(url)}" style="${style}" alt="" draggable="false">`:'';
let theme=null;
const cache=new Map(),tints=new Map();
export const originalTheme=()=>theme;
export function setOriginalTheme(themes=[]){const next=themes.find(t=>t.id==='p5-original'&&t.revision===1);if(theme?.images?.table_bg!==next?.images?.table_bg){cache.clear();tints.clear();}theme=next||null;}
const art=key=>theme?.images?.[key]||'';
const sprite=(key,cls='',style='')=>image(art(key),cls,style);
async function load(url){if(!url)return null;if(!cache.has(url))cache.set(url,(async()=>{const i=new Image();i.src=url;await i.decode();return i;})().catch(()=>null));return cache.get(url);}
export function portraitHTML(c,mood='Neutral',cls='figure',blink=true){
  const open=c.stateLayers?.[mood]||c.layers||[c.states?.[mood]||c.portrait||c.avatar].filter(Boolean),closed=blink&&c.blinkLayers?.[mood];
  if(!open.length)return `<span class="${cls} no-portrait">${esc(c.glyph||c.name?.[0]||'')}</span>`;
  const frame=(urls,kind)=>`<span class="portrait-frame ${kind}">${urls.map(url=>image(url)).join('')}</span>`;
  return `<span class="${cls} p5-portrait ${closed?'blinks':''}" role="img" aria-label="${esc(c.name)}">${frame(open,'eyes-open')}${closed?frame(closed,'eyes-closed'):''}</span>`;
}
function mood(v,i){return v.phase==='finished'?(v.order[0]===i?'Win':'Lose'):v.fallen===i?'Lose':v.players[i].status==='PASS'?'Pass':v.lastActor===i?'Play':v.current===i?'Thinking':'Neutral';}
const level=(n,rank)=>rank<0?3:n===3?[5,3,1][rank]:[5,4,2,1][rank];
export const playName=p=>p.doubleJoker?'双 Joker':`${['','单张','对子','三张','革命'][p.count]} ${p.joker?'Joker':face(p.rank)}`;
function badge(v,i,self,getCharacter){
  const p=v.players[i],finished=v.order.includes(i),fallen=v.fallen===i,active=v.current===i&&v.phase==='playing'&&!fallen;
  const rank=fallen?v.players.length-1:finished?v.order.indexOf(i):v.previous.indexOf(i),n=level(v.players.length,rank),Y=y=>self ? .25+.75*y:y;
  let action=active?'● 当前行动':p.status==='PASS'?'PASS':p.lastAction?.type==='play'?'刚才 · '+playName(p.lastAction.play):v.lastActor===i&&v.lastPlay?'刚才 · '+playName(v.lastPlay):p.status==='等待'?'':p.status;
  if(v.autoPlay?.[i])action='自动托管';
  let html=at(`<span class="rank-ink ${active?'active':''}" style="--mask:url('${esc(art('seat_level'+n+'_base'))}')"></span>${sprite('seat_level'+n,'rank-frame')}`,0,self ? .25:0,1,1);
  if(self)html+=at(sprite('player_title'),.03,0,.88,.37);
  html+=at('',.47,Y(.075),.99,Y(.24),'name-strip')+at(esc(p.name),.5,Y(.075),.96,Y(.24),'seat-name');
  if(!finished&&!fallen)html+=at(sprite('remaining_caption'),.21,Y(.39),.91,Y(.64));
  html+=at(finished||fallen?`第 ${v.order.indexOf(i)>=0?v.order.indexOf(i)+1:v.players.length} 名`:String(p.count),finished||fallen ? .23:.365,Y(finished||fallen ? .36:.33),finished||fallen ? .91:.7,Y(finished||fallen ? .66:.68),`seat-count ${finished||fallen?'finished':''} ${p.count<=2&&!finished&&!fallen?'few':''}`);
  if(fallen)html+=at('一落千丈',.1,Y(.79),1,Y(.96),'fallen-caption');
  else if(finished&&p.count===0)html+=at(sprite('fx_out'),.18,Y(.71),.96,Y(.94));
  else if(action==='PASS'&&!active)html+=at(sprite('seat_pass'),.64,Y(.68),1.12,Y(.97));
  else if(!finished)html+=at(esc(action),.14,Y(.78),.98,Y(.94),'seat-action');
  if(self)html+=at(`<button class="avatar-change" data-do="selfCharacter" aria-label="更换你的角色">${portraitHTML(getCharacter(i),mood(v,i),'self-avatar')}</button>`,.91,.08,1.1,.31);
  return html;
}
const region=(i,three)=>three?(i===1?'0% 0%,31% 0%,43% 30%,38% 55%,22% 65%,0% 54%':'100% 0%,69% 0%,57% 30%,62% 55%,78% 65%,100% 54%'):
  i===1?'0% 0%,25% 0%,39% 33%,40% 53%,25% 65.5%,0% 53%':i===2?'28% 0%,90% 0%,89% 20%,66% 40%,50% 49%,40% 27%':'100% 11%,100% 70%,73% 74.5%,62% 62%,65% 47%,88% 28%';
async function tintPark(n){
  if(tints.has(n))return tints.get(n);
  const promise=(async()=>{const i=await load(art('park'));if(!i)return '';const canvas=document.createElement('canvas');canvas.width=i.naturalWidth;canvas.height=i.naturalHeight;const ctx=canvas.getContext('2d',{willReadFrequently:true});ctx.drawImage(i,0,0);const pixels=ctx.getImageData(0,0,canvas.width,canvas.height),rgb=n===1?[255,20,46]:n===2?[255,220,0]:[0,223,189];for(let j=0;j<pixels.data.length;j+=4){const k=.78+pixels.data[j]/255*.64;for(let c=0;c<3;c++)pixels.data[j+c]=Math.min(255,Math.round(rgb[c]*k));pixels.data[j+3]=255;}ctx.putImageData(pixels,0,0);return canvas.toDataURL('image/png');})();tints.set(n,promise);return promise;
}
function cardArt(id){const c=card(id);return art(id===53?'wonder':id===52?'joker':['Clubs','Diamonds','Hearts','Spades'][c.suit]+'_'+c.rank);}
function cardMarkup(id,selectable=false,selected=false,style=''){
  const tag=selectable?'button':'span';return `<${tag} class="p5-card card ${selected?'select':''}" ${selectable?`data-card="${id}" aria-label="${esc(label(id))}" aria-pressed="${selected}"`:''} style="${style}">${image(cardArt(id))}${selectable?'<span class="selection-mark">✓</span>':''}</${tag}>`;
}
function fan(hand,selected,interact){
  const h=193.5,w=h*.6703297,area=1456,offsets=[0];let gap=0;
  for(let i=1;i<hand.length;i++){if(card(hand[i-1]).rank!==card(hand[i]).rank)gap+=8;offsets.push(gap);}
  const step=hand.length<2?0:Math.max(1,Math.min(w+4,(area-w-20-gap)/(hand.length-1))),left=(area-w-step*(hand.length-1)-gap)/2;
  return `<div class="fan-hand hand ${interact?'can-interact':''}" aria-label="你的手牌" style="${rect(.075,.79,.985,1.025)}">${hand.map((id,j)=>{const bend=hand.length===1?0:j/(hand.length-1)*2-1;return cardMarkup(id,true,selected.has(id),`--x:${left+j*step+offsets[j]}px;--y:${7+bend*bend*9}px;--angle:${bend*.07}rad;--cw:${w}px;--ch:${h}px`);}).join('')}</div>`;
}
const actionButton=(id,key,text,disabled,primary=false)=>`<button data-do="${id}" class="table-action ${primary?'primary-action':''}" aria-label="${esc(text)}" title="${esc(text)}" ${disabled?'disabled':''}>${sprite(key)}<span class="a11y-text">${esc(text)}</span></button>`;
function clock(seconds){return `<span class="turn-clock" aria-label="剩余行动时间">${sprite('clock')}<b class="countdown">${seconds??15}</b></span>`;}
export function tableHTML(v,{getCharacter,selected,busy=false,online=false,roomCode='',connected=1,auto=false,seconds=15,pending=false,presenting=false,ready=false,canNext=true}){
  const me=v.seat,own=v.players[me],myTurn=v.phase==='playing'&&v.current===me,needExchange=v.phase==='exchange'&&v.exchangeCount&&!v.exchangeSubmitted,others=Array.from({length:v.players.length-1},(_,n)=>(me+n+1)%v.players.length);
  const hand=[...own.hand].sort((a,b)=>{const A=card(a),B=card(b);return (A.suit===4?99:v.revolution?18-A.rank:A.rank)-(B.suit===4?99:v.revolution?18-B.rank:B.rank)||a-b;});
  let valid=false,feedback='',moves=[];const out=v.order.includes(me)||v.fallen===me,canAct=(myTurn||needExchange)&&!busy&&!presenting&&!auto&&!out;
  if(needExchange){valid=selected.size===v.exchangeCount;feedback=`请选择 ${v.exchangeCount} 张回赠牌${v.exchangeSubmitted?' · 已确认':''}`;}
  else if(myTurn){try{if(selected.size){const p=makePlay([...selected]);valid=beats(p,v.table,v.revolution);feedback=`已选 ${[...selected].map(label).join('、')} · ${valid?'可以出牌':'无法压过场上的牌'}`;}else {moves=legalMoves({...v,players:v.players.map((p,i)=>({...p,hand:i===me?p.hand:[]}))},me);if(!moves.length)feedback='没有可接的牌 · 点击 PASS 或按 P 过牌';}}catch(e){feedback=e.message;}}
  const later=!canAct&&v.phase==='playing'&&!out&&!pending&&!myTurn;
  let html=`<main class="board p5-table ${v.phase==='finished'?'round-finished':''}">${sprite('table_bg','table-pattern')}`;
  others.forEach((i,j)=>{const visual=v.players.length===3?j*2+1:j+1,positions=v.players.length===3?(j===0?[.015,.19,.36,.62]:[.67,.19,1.01,.62]):j===0?[.015,.22,.34,.64]:j===1?[.46,.025,.755,.46]:[.72,.27,1.03,.67];html+=`<section class="comic-sector sector-${visual}" data-park="${visual}" style="clip-path:polygon(${region(visual,v.players.length===3)})">${sprite('park','sector-park')}${at(portraitHTML(getCharacter(i),mood(v,i)),...positions,'seat-portrait')}</section>`;});
  others.forEach((i,j)=>{const positions=others.length===2?(j===0?[.025,.14,.22,.385]:[.775,.14,.97,.385]):j===0?[.025,.14,.22,.385]:j===1?[.335,.095,.53,.34]:[.775,.14,.97,.385];html+=at(badge(v,i,false,getCharacter),...positions,'comic-badge opponent-seat');});
  html+=at(`第 ${String(v.round).padStart(2,'0')} 局 · ${online?esc(roomCode):'单机'} · 在线 ${connected}/${v.players.length}`,.17,.018,.6,.065,'readable room-info');
  html+=at(online?'已连接 · 手机牌桌':'本机对局 · 自动存档',.54,.083,.8,.125,'readable network-status');
  html+=at(`<button data-do="scores" class="header-button">积分 · ${own.score*10} 分</button>`,.61,.018,.72,.068,'control-layer');
  if(v.phase!=='finished'&&!out)html+=at(`<button data-do="auto" class="header-button ${auto?'auto-on':''}">${auto?'接管操作':'自动托管'}</button>`,.73,.018,.83,.068,'control-layer');
  html+=at('<button data-do="home" class="table-tool tool-text" aria-label="返回大厅">←</button>',.015,.012,.075,.08,'control-layer');
  html+=at('<button data-do="rules" class="table-tool tool-text" aria-label="规则速查">?</button>',.085,.012,.145,.08,'control-layer');
  html+=at(`<button data-do="logs" class="table-tool" aria-label="牌局动态">${sprite('tool_journal')}</button>`,.84,.012,.9,.08,'control-layer');
  html+=at(`<button data-do="options" class="table-tool" aria-label="声音设置">${sprite('tool_settings')}</button>`,.91,.012,.97,.08,'control-layer');
  html+=at(v.revolution?'革命：2 < A < … < 3':'3 < 4 < … < A < 2',.17,.08,.33,.125,'readable order-status');
  if(v.revolution)html+=at(sprite('revolution_tag'),.025,.47,.2,.57);
  if(v.phase==='finished')html+=resultsHTML(v,getCharacter,online);
  else if(v.phase==='exchange')html+=at(`<div class="exchange-panel">${sprite('fx_exchange')}<strong>${v.players.length===3?'首末名交换 1 张':'首末换 2 张 · 中间换 1 张'}</strong><span>${needExchange?'选择要回赠的手牌':v.exchangeSubmitted?'已确认回赠，等待其他玩家':'按上局名次同时交换手牌'}</span><small>确认后由上局大贫民先手</small></div>`,.29,.35,.77,.6);
  else {const p=v.table||v.lastPlay,review=!v.table&&!!v.lastPlay;html+=at(p?`<div class="pile ${review?'cleared-review':''}"><div class="pile-caption">${review?'上手回顾 · 已清场 · ':''}${esc(v.players[v.leader>=0?v.leader:v.lastActor]?.name)} · ${esc(playName(p))}</div><div class="pile-cards">${p.ids.map(id=>cardMarkup(id)).join('')}</div></div>`:`<span class="free-lead">${myTurn?'自由领出':''}</span>`,.365,.38,.685,.6,'table-center');}
  html+=at(badge(v,me,true,getCharacter),.015,.565,.205,.825,'comic-badge self-seat');
  let status=pending?'网络未确认 · 点击重试':auto?'自动托管中 · 点击右上「接管操作」':out?'本局已出局 · 正在观战':v.phase==='finished'?'本局结束':feedback|| (presenting?'正在展示出牌':needExchange?`请选择 ${v.exchangeCount} 张回赠牌`:v.phase==='exchange'?'等待其他玩家换牌':myTurn?'轮到你出牌':`等待 ${v.players[v.current]?.name||''} 出牌`);
  if(v.phase!=='finished')html+=at(esc(status),later&&!feedback ? .435:.27,later&&!feedback ? .65:.595,.84,later&&!feedback ? .72:.64,`readable turn-status ${valid?'valid':''} ${feedback&&!valid?'feedback':''}`);
  if(later)html+=at(clock(seconds),.365,.64,.425,.73);
  else if(v.phase!=='finished'&&!out)html+=at(`<div class="original-actions">${v.phase==='playing'?actionButton('pass','pass','不出 / PASS',!canAct||!v.table):''}${clock(seconds)}${actionButton('hint','hint','提示',!canAct||v.phase!=='playing')}${actionButton(needExchange?'exchange':'play',needExchange?'confirm':'play',needExchange?'确认换牌':'出牌',!canAct||!valid,true)}</div>`,.255,.645,.79,.743,'actions-layer');
  if(v.phase==='finished')html+=at(`<div class="original-actions">${online&&v.seat!==v.host?`<button data-do="readyRoom" class="menu-button">${ready?'取消准备':'准备下一局'}</button>`:actionButton('next','next','下一局',!canNext,true)}<button data-do="home" class="menu-button">返回大厅</button></div>`,.255,.645,.79,.77,'actions-layer');
  if(v.phase!=='finished')html+=at(`<button data-do="clear" class="cancel-selection" ${selected.size?'':'hidden'}>取消选择</button>`,.84,.69,.97,.748,'control-layer selection-control');
  if(pending)html+=at('<button data-do="retry" class="menu-button">重试刚才的操作</button>',.35,.74,.7,.795);
  else html+=at(canAct&&!feedback?'轻点 / 滑动选牌 · 双击同点数 · H 提示':'',.25,.757,.97,.787,'hand-help');
  html+=fan(hand,selected,canAct);
  return html+'</main>';
}
function resultsHTML(v,getCharacter,online){const n=v.players.length;return `<section class="original-results">${sprite('table_bg','result-pattern')}${sprite('result_burst','result-burst')}<div class="result-cards" style="${rect(.54-n*.075,.15,.54+n*.075,.6)}">${v.order.map((i,rank)=>`<article class="result-card ${i===v.seat?'is-self':''}">${sprite('result_card','result-card-bg')}${at(portraitHTML(getCharacter(i),mood(v,i),'result-portrait',false),.035,.13,.965,.8)}${sprite('result_border','result-card-border')}${at(sprite('identity'+level(n,rank)),.015,.015,.93,.22)}${at(sprite('result_name'),.025,.73,.975,.88)}${at(esc(v.players[i].name),.09,.735,.93,.875,'result-player-name')}${i===v.seat?at(sprite('result_self'),.64,.62,.98,.75):''}${v.fallen===i?at('一落千丈',.04,.22,.96,.32,'fallen-caption'):''}${at(`本局 +${(n-1-rank)*10}<br>累计 ${v.players[i].score*10} 分`,.045,.875,.955,1,'result-score')}</article>`).join('')}</div></section>`;}
export function titleHTML(content,{joker,riko,subtitle='',stats=''}){return `<main class="title-screen">${sprite('table_bg','table-pattern')}${sprite('lobby_bg','lobby-backdrop')}${at('PERSONA / PRIVATE CARD CLUB',.055,.06,.55,.11,'club-caption')}${at('TYCOON',.065,.17,.54,.34,'tycoon-title')}${at('大富豪 · 夺回你的出牌权',.065,.34,.55,.4,'title-subtitle')}${at(portraitHTML(joker,'Neutral','title-portrait'),.015,.42,.36,.89)}${at(portraitHTML(riko,'Neutral','title-portrait'),.3,.46,.57,.89)}${at('3 / 4 PLAYERS　 ·　 54 CARDS',.06,.87,.55,.91,'club-caption')}${at(esc(stats),.06,.915,.55,.95,'title-stats')}${at('栖伴 0.30.1 · P5 Tycoon 原版界面',.06,.957,.55,.985,'title-version')}<section class="title-pane" style="${rect(.55,.045,.965,.955)}"><h1>${esc(subtitle||'即刻入席')}</h1>${content}</section><button data-do="exitGame" class="companion-return">‹ 返回陪伴</button></main>`;}
export function missingThemeHTML(native){return `<main class="theme-required"><div><div class="club-caption">P5 TYCOON</div><h1>导入原版视听包</h1><p>牌面、人物身份框、背景、按钮、表情与音效<br>都从原版素材载入。</p><button class="primary" data-do="importArt">导入 P5-Tycoon-Original-v1.qcards</button><p class="hint">已有的尘白立绘、自定义角色与牌局存档会继续保留。<br>旧版的 P5 立绘包只含人物，需要用完整视听包更新。</p><button class="secondary" data-do="exitGame">返回陪伴</button></div></main>`;}
export function fitOriginalStage(){const viewport=document.querySelector('#viewport'),stage=document.querySelector('#stage');if(!viewport||!stage)return;const ratio=Math.min(viewport.clientWidth/1600,viewport.clientHeight/900);stage.style.setProperty('--table-scale',ratio);document.body.classList.toggle('portrait-device',innerHeight>innerWidth);}
export async function mountOriginalTable(){fitOriginalStage();const token=theme;for(const el of document.querySelectorAll('[data-park]')){const url=await tintPark(Number(el.dataset.park));if(theme===token&&el.isConnected&&url)el.querySelector('.sector-park').src=url;}}

// Selection changes no game state. Keep decoded images, tinted backgrounds,
// animation canvas and pointer listeners mounted on mobile WebViews.
export function updateOriginalSelection(view,options){
  const board=document.querySelector('.p5-table'),hand=board?.querySelector('.fan-hand');if(!hand)return false;
  const buttons=[...hand.querySelectorAll('[data-card]')],ids=view.players[view.seat].hand;
  if(buttons.length!==ids.length||buttons.some(b=>!ids.includes(Number(b.dataset.card))))return false;
  const fragment=document.createElement('template');fragment.innerHTML=tableHTML(view,options);
  for(const button of buttons){const yes=options.selected.has(Number(button.dataset.card));button.classList.toggle('select',yes);button.setAttribute('aria-pressed',String(yes));}
  for(const id of ['play','exchange','hint','pass','clear']){const selector=`[data-do="${id}"]`,old=board.querySelector(selector),next=fragment.content.querySelector(selector);if(old&&next){old.disabled=next.disabled;old.hidden=next.hidden;}}
  for(const selector of ['.turn-status','.hand-help']){const old=board.querySelector(selector),next=fragment.content.querySelector(selector);if(old&&next){old.textContent=next.textContent;old.className=next.className;old.style.cssText=next.style.cssText;}}
  return true;
}

// Pointer capture keeps a slide gesture on the original overlapping fan. The
// selected hand is committed once, so a redraw cannot drop the held pointer.
export function bindOriginalFan({getSelected,getView,canInteract,commit,sound}){
  const el=document.querySelector('.fan-hand');if(!el)return;let gesture=null,lastTap=null;
  const buttons=[...el.querySelectorAll('[data-card]')];
  const show=ids=>buttons.forEach(b=>{const yes=ids.has(Number(b.dataset.card));b.classList.toggle('select',yes);b.setAttribute('aria-pressed',String(yes));});
  const hit=e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)*1456/r.width;let found=-1;buttons.forEach((b,i)=>{const a=parseFloat(b.style.getPropertyValue('--x'));if(x>=a&&x<=a+parseFloat(b.style.getPropertyValue('--cw')))found=i;});return found;};
  el.onpointerdown=e=>{if(!canInteract()||e.button>0)return;const i=hit(e);if(i<0)return;e.preventDefault();el.setPointerCapture(e.pointerId);const selected=getSelected(),set=new Set(selected),id=Number(buttons[i].dataset.card),add=!set.has(id),v=getView(),max=v.phase==='exchange'?v.exchangeCount:4;gesture={pointer:e.pointerId,start:i,last:i,x:e.clientX,y:e.clientY,set,before:new Set(selected),add,max,dragged:false,visited:new Set()};if(lastTap&&lastTap.id===id&&performance.now()-lastTap.time<320){const rank=card(id).rank;gesture.set=new Set(v.players[v.seat].hand.filter(n=>card(n).rank===rank).slice(0,max));gesture.visited.add(i);lastTap=null;}else{paint(i);lastTap={id,time:performance.now()};}show(gesture.set);};
  function paint(index){if(gesture.visited.has(index))return;gesture.visited.add(index);const id=Number(buttons[index].dataset.card);if(gesture.add){if(gesture.set.size<gesture.max)gesture.set.add(id);}else gesture.set.delete(id);}
  el.onpointermove=e=>{if(!gesture||gesture.pointer!==e.pointerId)return;if(!canInteract()){cancel();return;}if(Math.hypot(e.clientX-gesture.x,e.clientY-gesture.y)<4&&!gesture.dragged)return;gesture.dragged=true;const i=hit(e);if(i<0)return;const step=i>=gesture.last?1:-1;for(let j=gesture.last;j!==i+step;j+=step)paint(j);gesture.last=i;show(gesture.set);};
  el.onpointerup=e=>{if(!gesture||gesture.pointer!==e.pointerId)return;const value=gesture.set;gesture=null;sound();commit(value);};
  function cancel(){if(!gesture)return;show(gesture.before);gesture=null;}
  el.onpointercancel=cancel;el.onlostpointercapture=cancel;
}

export class OriginalAudio {
  constructor(preferences){this.preferences=preferences;this.effects=new Set();this.voice=null;this.music=null;this.awake=false;this.paused=false;}
  volume(type){return this.preferences().sound===false?0:Number(this.preferences()[type]??({effects:.85,voices:.72,music:.18}[type]));}
  unlock(){this.awake=true;this.sync();}
  sync(){if(!theme?.audio?.['music/main'])return;if(!this.music||this.music.src!==new URL(theme.audio['music/main'],location.href).href){this.music?.pause();this.music=new Audio(theme.audio['music/main']);this.music.preload='none';this.music.onended=()=>{this.music.currentTime=theme.musicLoop||0;if(this.awake&&!this.paused&&this.volume('music'))this.music.play().catch(()=>{});};}this.music.volume=this.volume('music');if(this.awake&&!this.paused&&this.music.volume>0)this.music.play().catch(()=>{});else this.music.pause();this.effects.forEach(a=>{a.volume=this.volume('effects');if(!a.volume)a.pause();});if(this.voice){this.voice.volume=this.volume('voices');if(!this.voice.volume)this.voice.pause();}}
  cue(name,volume=1){const url=theme?.audio?.['sfx/'+name];if(!url||!this.awake||this.paused||!this.volume('effects'))return;const a=new Audio(url);a.volume=Math.min(1,this.volume('effects')*volume);this.effects.add(a);a.onended=a.onerror=()=>this.effects.delete(a);a.play().catch(()=>this.effects.delete(a));}
  say(c,cue){const url=c.voice&&theme?.audio?.[`voices/${c.voice}/${cue}`];if(!url||!this.awake||this.paused||!this.volume('voices'))return;this.voice?.pause();this.voice=new Audio(url);this.voice.volume=this.volume('voices');this.voice.play().catch(()=>{});}
  suspend(){this.paused=true;this.music?.pause();this.voice?.pause();this.effects.forEach(a=>a.pause());this.effects.clear();}
  resume(){this.paused=false;this.sync();}
}

export class OriginalPresentation {
  constructor(audio,idle){this.audio=audio;this.idle=idle;this.previous=null;this.items=[];this.raf=0;this.until=0;this.calls=0;this.timers=new Set();}
  get busy(){return performance.now()<this.until;}
  reset(){this.timers.forEach(clearTimeout);this.timers.clear();cancelAnimationFrame(this.raf);this.raf=0;this.items=[];this.until=0;this.previous=null;this.clear();}
  clear(){const c=document.querySelector('#table-effects');c?.getContext('2d').clearRect(0,0,1280,720);document.body.classList.remove('presenting');}
  observe(view,getCharacter){
    const v=JSON.parse(JSON.stringify(view)),old=this.previous;this.previous=v;
    if(!old||old.round!==v.round){this.audio.cue('card-shuffle',.8);this.audio.say(getCharacter(v.seat),'start');this.add({kind:v.phase==='exchange'?'exchange':'start',duration:1.15});return;}
    if(old.revision===v.revision)return;
    const newPlay=v.lastPlay&&(old.lastActor!==v.lastActor||JSON.stringify(old.lastPlay)!==JSON.stringify(v.lastPlay));
    if(newPlay){
      const p=v.lastPlay,actor=v.lastActor,c=getCharacter(actor),counter=p.spadeThree&&old.table?.joker,cutin=!!c.cutin&&(p.count===4||counter),reverse=p.count===4&&old.revolution;
      const cue=counter?'counter':p.count===4?reverse?'reverse_revolution':'revolution':p.cut?'cut':p.joker?'joker':p.count===3?'triple':p.count===2?'pair':'play'+(1+(this.calls++%2));
      this.audio.say(c,cue);this.add({kind:'flight',duration:cutin?1.65:.93,play:p,actor,seat:v.seat,capacity:v.players.length,cutin,c,clears:!v.table});
      this.audio.cue('card-slide-'+(1+this.calls%3),.65);this.later(()=>this.audio.cue('card-place-'+(1+this.calls%4),.8),cutin?1170:450);
      const delay=cutin?1.4:.8;
      if(counter)this.add({kind:'counter',duration:1.15,delay});
      if(p.count===4)this.add({kind:reverse?'reverse':'revolution',duration:1.15,delay});
      if(p.cut)this.add({kind:'cut',duration:1.15,delay:delay+(p.count===4?1.15:0)});
    }else if(v.table===null&&old.table){this.audio.cue('clear',.7);this.add({kind:'pass',duration:1.15});}
    const passer=v.players.findIndex((p,i)=>p.status==='PASS'&&old.players[i].status!=='PASS');if(passer>=0){this.audio.say(getCharacter(passer),'pass');this.audio.cue('pass',.7);}
    if(old.phase==='exchange'&&v.phase==='playing')this.add({kind:'exchange',duration:1.15});
    if(v.fallen>=0&&old.fallen<0)this.add({kind:'fallen',duration:1.8,delay:1});
    if(v.phase==='finished'&&old.phase!=='finished'){const rank=v.order.indexOf(v.seat);this.audio.say(getCharacter(v.seat),rank===0?'win':rank===1?'runner_up':rank===v.players.length-1?'last':'lose');this.add({kind:rank===0?'win':rank===1?'placed':'lose',duration:1.8,delay:1.5});}
  }
  later(callback,ms){const id=setTimeout(()=>{this.timers.delete(id);callback();},ms);this.timers.add(id);}
  add(item){const effects={cut:'cut_by_eight',counter:'counter',revolution:'revolution',reverse:'reverse_revolution',fallen:'dropout',win:'round_win',lose:'round_lose',placed:'finish'};if(effects[item.kind])this.later(()=>this.audio.cue(effects[item.kind]),(item.delay||0)*1000);const now=performance.now();this.items.push({...item,start:now+(item.delay||0)*1000});this.until=Math.max(this.until,now+((item.delay||0)+item.duration)*1000);if(!this.raf)this.raf=requestAnimationFrame(()=>this.draw());}
  async draw(){
    const canvas=document.querySelector('#table-effects');if(!canvas){this.raf=0;return;}const ctx=canvas.getContext('2d');ctx.clearRect(0,0,1280,720);const now=performance.now();this.items=this.items.filter(i=>now<i.start+i.duration*1000);
    document.body.classList.toggle('presenting',this.items.some(i=>i.kind==='flight'&&now>=i.start));
    for(const item of this.items){const t=(now-item.start)/1000;if(t<0)continue;if(item.kind==='flight')await this.flight(ctx,item,t);else await this.effect(ctx,item.kind,t,item.duration);}
    if(this.items.length)this.raf=requestAnimationFrame(()=>this.draw());else{this.raf=0;this.until=0;this.clear();this.idle();}
  }
  async drawArt(ctx,key,x,y,h,angle=0,alpha=1){const i=await load(art(key));if(!i)return;ctx.save();ctx.globalAlpha=alpha;ctx.translate(x,y);ctx.rotate(angle);ctx.drawImage(i,-i.naturalWidth*h/i.naturalHeight/2,-h/2,i.naturalWidth*h/i.naturalHeight,h);ctx.restore();}
  async effect(ctx,kind,t,duration){
    const alpha=Math.min(t/.09,(duration-t)/.22,1),scale=1+.15*Math.exp(-t*9),x=652.8,y=288,s=720;
    if(kind==='cut'||kind==='pass'){ctx.fillStyle=`rgba(0,0,0,${alpha*.84})`;ctx.beginPath();[[0,367.2],[1280,122.4],[1280,216],[0,460.8]].forEach(([a,b],i)=>i?ctx.lineTo(a,b):ctx.moveTo(a,b));ctx.closePath();ctx.fill();await this.drawArt(ctx,kind==='cut'?'fx_cut':'fx_pass',x,y,s*.27*scale,-.08,alpha);return;}
    if(['start','counter','exchange','gameover','fallen'].includes(kind)){ctx.fillStyle=`rgba(0,0,0,${alpha*.25})`;ctx.fillRect(0,0,1280,720);await this.drawArt(ctx,'fx_'+kind,x,y,s*(kind==='fallen'?.31:.29)*scale,-.04,alpha);return;}
    if(kind==='revolution'||kind==='reverse'){ctx.fillStyle=`rgba(214,247,33,${alpha*.32})`;ctx.fillRect(0,0,1280,720);for(let i=1;i<=4;i++)await this.drawArt(ctx,'fx_crack'+i,1280*(i-.5)/4,360,720*(1+t),(i-2)*.15,alpha*Math.max(0,1-t/.55));if(kind==='revolution'){await this.drawArt(ctx,'fx_rev1',x-s*.105,y-s*.035,s*.39*scale,-.1,alpha);await this.drawArt(ctx,'fx_rev2',x+s*.13,y+s*.025,s*.34*scale,.04,alpha);}else for(let i=1;i<=4;i++)await this.drawArt(ctx,'fx_reverse'+i,x+(i-2.5)*s*.2,y,s*.28*scale,0,alpha);return;}
    if(kind==='win'){ctx.fillStyle=`rgba(255,189,10,${alpha*.3})`;ctx.fillRect(0,0,1280,720);for(let i=1;i<=3;i++){await this.drawArt(ctx,'fx_coins'+i,x+(i-2)*s*.2,y,s*.36,(i-2)*.4+t*.12,alpha);await this.drawArt(ctx,'fx_win'+i,x+(i-2)*s*.19,y+(i===2?-.02:.02)*s,s*.25*scale,(i-2)*-.1,alpha);}await this.drawArt(ctx,'fx_win4',x+s*.16,y+s*.135,s*.053,-.1,alpha);return;}
    ctx.fillStyle=`rgba(13,15,31,${alpha*.4})`;ctx.fillRect(0,0,1280,720);ctx.fillStyle=`rgba(88,18,33,${alpha*.95})`;ctx.fillRect(0,y-s*.09,1280,s*.18);ctx.globalAlpha=alpha;ctx.fillStyle='#fff2db';ctx.font='bold 46px sans-serif';ctx.textAlign='center';ctx.fillText(kind==='placed'?'第二名 · 漂亮收官':'本局落败 · 下局再战',640,y+16);ctx.globalAlpha=1;
  }
  async flight(ctx,item,t){
    if(item.cutin&&t<1.02)await this.cutIn(ctx,item,t);
    const elapsed=t-(item.cutin ? .72:0);if(elapsed<0)return;
    const visual=(item.actor-item.seat+item.capacity)%item.capacity,origin=visual===0?[640,666]:visual===1?[190,245]:visual===2&&item.capacity===4?[680,160]:[1120,280];
    for(let j=0;j<item.play.ids.length;j++){const i=await load(cardArt(item.play.ids[j]));if(!i)continue;const time=elapsed-j*.045,progress=Math.max(0,Math.min(1,(time-.09)/.36));if(time<0)continue;const w=1-Math.pow(1-progress,3),target=[672+(j-(item.play.ids.length-1)/2)*104,365],x=origin[0]+(target[0]-origin[0])*w,y=origin[1]+(target[1]-origin[1])*w-Math.sin(progress*Math.PI)*58,scale=1+Math.sin(progress*Math.PI)*.18,alpha=item.clears?Math.max(0,Math.min(1,(item.duration-t)/.28)):1;ctx.save();ctx.translate(x,y);ctx.rotate((visual===1?-.18:visual===0?0:.18)*(1-w));ctx.scale(scale,scale);ctx.globalAlpha=alpha;ctx.drawImage(i,-44,-66,88,132);ctx.restore();}
  }
  async cutIn(ctx,item,t){
    const f=item.c.cutin,visual=(item.actor-item.seat+item.capacity)%item.capacity,fromLeft=visual<=1,opened=Math.min(1,t/.15)*(1-Math.max(0,(t-.81)/.21)),alpha=Math.min(t/.06,(1.02-t)/.14,1),P=(x,y)=>[(fromLeft?x:1-x)*1280,y*720];
    const source=[[-.08,-.16],[.12,0],[.24,.16],[.245,.19],[.29,.22],[.3,.215],[1.08,1.06],[.45,.62],[.43,.615],[.28,.535],[.275,.52],[.085,.47],[.08,.455],[-.08,.43]],a=P(-.08,.1),b=P(1.08,1.06),dx=b[0]-a[0],dy=b[1]-a[1],len=Math.hypot(dx,dy),ux=dx/len,uy=dy/len;
    const points=source.map(([x,y])=>{const p=P(x,y),d=(p[0]-a[0])*ux+(p[1]-a[1])*uy;return [a[0]+ux*d+(p[0]-a[0]-ux*d)*opened,a[1]+uy*d+(p[1]-a[1]-uy*d)*opened];});
    ctx.save();ctx.globalAlpha=alpha;ctx.fillStyle='#0005';ctx.fillRect(0,0,1280,720);ctx.beginPath();points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();ctx.fillStyle='#000';ctx.fill();ctx.lineWidth=20;ctx.strokeStyle='#fff';ctx.stroke();ctx.clip();
    const angle=Math.atan2(dy,dx)-(fromLeft?0:Math.PI)-f.EyeAngle,scale=Math.min(1280*.47,720*.77)/((f.FramingWidth||f.EyeWidth)*1.55),center=P(.265,.37),layers=(t>=.4&&t<.57?item.c.blinkLayers?.Play:null)||item.c.stateLayers?.Play||item.c.layers||[item.c.states?.Play||item.c.portrait];
    ctx.translate(...center);ctx.rotate(angle);ctx.scale(scale,scale);ctx.translate(-f.EyeCenter[0],-f.EyeCenter[1]);for(const url of layers){const i=await load(url);if(i)ctx.drawImage(i,(f.Canvas[0]-i.naturalWidth)/2,(f.Canvas[1]-i.naturalHeight)/2);}ctx.restore();
  }
}
