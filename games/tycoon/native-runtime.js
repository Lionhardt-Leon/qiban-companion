// Generated from engine.mjs and rooms.mjs by tools/build-card-native.py.
(function(){
"use strict";
// Independently implemented turn engine. No network, clock, artwork or UI dependency.
const RULES_VERSION = 'qiban-tycoon/1';
const SUITS = ['♣', '♦', '♥', '♠', '★'];
const face = rank => ({11:'J',12:'Q',13:'K',14:'A',15:'2',16:'JOKER'}[rank] || String(rank));
const card = id => Number.isInteger(id) && id >= 0 && id < 54 ?
  {id, suit:id < 52 ? Math.floor(id / 13) : 4, rank:id < 52 ? id % 13 + 3 : 16} : null;
const label = id => { const c = card(id); return c ? (c.suit === 4 ? 'JOKER' : SUITS[c.suit] + face(c.rank)) : '?'; };
const titles = n => n === 3 ? ['大富豪','平民','大贫民'] : ['大富翁','富翁','贫民','大贫民'];
const fail = message => { throw new Error(message); };
const clone = x => JSON.parse(JSON.stringify(x));
function makePlay(ids) {
  if (!Array.isArray(ids) || ids.length < 1 || ids.length > 4 || new Set(ids).size !== ids.length) fail('请选择 1～4 张不同的手牌。');
  const cards = ids.map(card); if (cards.some(c => !c)) fail('牌编号无效。');
  const ranks = [...new Set(cards.filter(c => c.suit !== 4).map(c => c.rank))];
  if (ranks.length > 1) fail('只支持同点数牌组；没有顺子或三带二。');
  return {ids:[...ids], count:ids.length, rank:ranks[0] || 16,
    joker:ids.length === 1 && cards[0].suit === 4,
    doubleJoker:ids.length === 2 && cards.every(c => c.suit === 4),
    spadeThree:ids.length === 1 && ids[0] === 39,
    cut:cards.some(c => c.suit !== 4 && c.rank === 8)};
}
function beats(play, table, revolution = false) {
  if (!table) return true;
  if (play.count !== table.count || table.doubleJoker) return false;
  if (play.doubleJoker) return true;
  if (table.joker) return play.spadeThree;
  if (play.joker) return true;
  return revolution ? play.rank < table.rank : play.rank > table.rank;
}
const active = (g, seat) => seat >= 0 && seat < g.players.length && seat !== g.fallen && !g.order.includes(seat) && g.players[seat].hand.length > 0;
const next = (g, seat) => { for (let step = 1; step <= g.players.length; step++) {const s = (seat + step + g.players.length) % g.players.length; if (active(g,s)) return s;} return -1; };
const log = (g, text) => {g.log.push(text); if (g.log.length > 160) g.log.shift();};
const gift = (g, seat) => { const i = g.previous.indexOf(seat); return g.players.length === 3 ? (i === 0 ? 1 : 0) : (i === 0 ? 2 : i === 1 ? 1 : 0); };
function createGame(players, random = Math.random) {
  if (![3,4].includes(players?.length)) fail('牌局需要 3 或 4 个座位。');
  const g = {schema:RULES_VERSION, players:players.map((p,i) => ({name:String(p.name || `玩家 ${i+1}`).slice(0,24), character:p.character || '', bot:!!p.bot, hand:[], status:'等待', score:0})),
    round:0, phase:'finished', order:[], previous:[], table:null, lastPlay:null, lastActor:-1, current:-1, leader:-1,
    fallen:-1, revolution:false, passes:0, exchanges:{}, log:[], revision:0};
  return startRound(g,random);
}
function startRound(g, random = Math.random) {
  if (g.phase !== 'finished') fail('本局尚未结束。');
  if (g.round > 0) g.previous = [...g.order];
  g.round++; g.order=[]; g.table=null; g.lastPlay=null; g.lastActor=-1; g.leader=-1;
  g.fallen=-1; g.revolution=false; g.passes=0; g.exchanges={}; g.log=[];
  const deck=Array.from({length:54},(_,i)=>i);
  for (let i=53;i>0;i--) {const j=Math.floor(random()*(i+1)); [deck[i],deck[j]]=[deck[j],deck[i]];}
  g.players.forEach(p=>{p.hand=[];p.status='等待';p.lastAction=null;});
  deck.forEach((id,i)=>g.players[(i+g.round-1)%g.players.length].hand.push(id));
  g.players.forEach(p=>p.hand.sort((a,b)=>a%13-b%13 || a-b));
  g.current=g.previous.length ? g.previous.at(-1) : g.players.findIndex(p=>p.hand.includes(13));
  g.phase=g.previous.length ? 'exchange' : 'playing';
  log(g,`第 ${g.round} 局 · ${g.players.length} 人 · 54 张牌`);
  if (g.phase==='exchange') { for(let i=0;i<g.players.length;i++) if (g.players[i].bot && gift(g,i)) g.exchanges[i]=weakest(g.players[i].hand,gift(g,i)); finishExchange(g); }
  else log(g,`${g.players[g.current].name}先手（持方块 3，首手自由）`);
  g.revision++; return g;
}
function weakest(hand,n) {return [...hand].sort((a,b)=>card(a).rank-card(b).rank || a-b).slice(0,n);}
function finishExchange(g) {
  const high=g.previous.filter(s=>gift(g,s)); if (high.some(s=>!g.exchanges[s])) return;
  const transfers=[];
  for (const s of high) {const rank=g.previous.indexOf(s), low=g.previous[g.players.length-1-rank], n=gift(g,s);
    const tribute=[...g.players[low].hand].sort((a,b)=>card(b).rank-card(a).rank || a-b).slice(0,n);
    transfers.push([s,low,g.exchanges[s]],[low,s,tribute]);}
  // Select all cards from original hands before moving any card.
  for (const [from,,ids] of transfers) g.players[from].hand=g.players[from].hand.filter(id=>!ids.includes(id));
  for (const [,to,ids] of transfers) g.players[to].hand.push(...ids);
  g.exchanges={};g.phase='playing';log(g,'换牌完成：低名次交出最强牌，高名次回赠所选牌。');
  log(g,`${g.players[g.current].name}先手（上局最后一名）`);
}
function clear(g, reason) {
  g.current=active(g,g.leader)?g.leader:next(g,g.leader);g.table=null;g.leader=-1;g.passes=0;
  g.players.forEach(p=>{if(p.status==='PASS')p.status='等待';});log(g,reason);
}
function finish(g, seat) {
  g.order.push(seat);g.players[seat].status=`第 ${g.order.length} 名`;
  log(g,`${g.players[seat].name}出完手牌，第 ${g.order.length} 名`);
  if (g.order.length===1 && g.previous.length && seat!==g.previous[0]) {
    g.fallen=g.previous[0];g.players[g.fallen].status='都落ち';log(g,`${g.players[g.fallen].name}未卫冕，一落千丈，直接最后一名。`);
  }
}
function complete(g) {
  const remaining=g.players.map((_,i)=>i).filter(i=>active(g,i));if(remaining.length>1)return false;
  g.order.push(...remaining);if(g.fallen>=0)g.order.push(g.fallen);
  g.order.forEach((seat,rank)=>{g.players[seat].status=titles(g.players.length)[rank];g.players[seat].score+=g.players.length-1-rank;});
  g.phase='finished';g.current=-1;log(g,'本局结束，可以继续下一局。');return true;
}
function act(g, seat, action) {
  if (!Number.isInteger(seat) || !g.players[seat]) fail('座位无效。');
  if (action?.type==='exchange') {
    const ids=action.ids,n=gift(g,seat);
    if(g.phase!=='exchange'||!n||g.exchanges[seat])fail('当前无需回赠，或已提交。');
    if(!Array.isArray(ids)||ids.length!==n||new Set(ids).size!==n||ids.some(id=>!g.players[seat].hand.includes(id)))fail(`请选择 ${n} 张自己的牌回赠。`);
    g.exchanges[seat]=[...ids];finishExchange(g);g.revision++;return g;
  }
  if(g.phase!=='playing'||g.current!==seat||!active(g,seat))fail('还没轮到你。');
  if(action?.type==='pass') {
    if(!g.table)fail('领出时不能 PASS。');g.passes++;g.players[seat].status='PASS';g.players[seat].lastAction={type:'pass'};log(g,`${g.players[seat].name}：PASS`);
    const others=g.players.filter((_,i)=>active(g,i)&&i!==g.leader).length;
    if(g.passes>=others)clear(g,'其他在场玩家全部 PASS，重新领出。');else g.current=next(g,seat);
  } else if(action?.type==='play') {
    const play=makePlay(action.ids);if(play.ids.some(id=>!g.players[seat].hand.includes(id)))fail('只能出自己的手牌。');
    if(!beats(play,g.table,g.revolution))fail(g.table?.joker?'单张 Joker 只能由黑桃 3 反制。':'牌型张数须相同，且点数必须更强。');
    const counter=play.spadeThree && g.table?.joker;
    g.players[seat].hand=g.players[seat].hand.filter(id=>!play.ids.includes(id));
    g.table=play;g.lastPlay=play;g.lastActor=seat;g.leader=seat;g.passes=0;
    g.players.forEach(p=>{if(p.status==='PASS')p.status='等待';});g.players[seat].status=play.ids.map(label).join(' ');g.players[seat].lastAction={type:'play',play};
    log(g,`${g.players[seat].name}：${g.players[seat].status}`);
    if(play.count===4){g.revolution=!g.revolution;log(g,g.revolution?'革命！3 最大，2 最小；Joker 仍最大。':'反革命！恢复正常牌力。');}
    if(!g.players[seat].hand.length)finish(g,seat);
    if(!complete(g)) {if(play.cut||counter)clear(g,counter?'黑桃 3 反制 Joker，立即清场。':'8 切，立即清场。');else g.current=next(g,seat);}
  } else fail('不支持的出牌操作。');
  g.revision++;return g;
}
// Enumerate actual card subsets, including wild Jokers, rather than rank guesses.
function legalMoves(g,seat) {
  if(g.phase!=='playing'||g.current!==seat)return [];
  const hand=g.players[seat].hand, result=[],visit=(at,ids)=>{
    if(ids.length){try{const p=makePlay(ids);if(beats(p,g.table,g.revolution))result.push(p);}catch{}}
    if(ids.length===4)return;
    for(let i=at;i<hand.length;i++){const rank=ids.map(card).find(c=>c.suit!==4)?.rank,c=card(hand[i]);if(rank&&c.suit!==4&&c.rank!==rank)continue;visit(i+1,[...ids,hand[i]]);}
  };visit(0,[]);return result;
}
function botAction(g,seat,difficulty='normal',random=Math.random) {
  if(g.phase==='exchange')return {type:'exchange',ids:weakest(g.players[seat].hand,gift(g,seat))};
  const moves=legalMoves(g,seat);if(!moves.length)return {type:'pass'};
  const hand=g.players[seat].hand, finish=moves.find(p=>p.count===hand.length);if(finish)return {type:'play',ids:finish.ids};
  if(difficulty==='easy')return {type:'play',ids:moves[Math.floor(random()*moves.length)].ids};
  const urgent=g.players.some((p,i)=>i!==seat&&active(g,i)&&p.hand.length<=2);
  const score=p=>{
    const left=hand.filter(id=>!p.ids.includes(id)), groups=new Set(left.filter(id=>card(id).suit!==4).map(id=>card(id).rank)).size;
    const strength=p.joker||p.doubleJoker?22:g.revolution?18-p.rank:p.rank;
    let n=p.count*7-groups*22-strength*(urgent?0.1:1.2)-p.ids.filter(id=>card(id).suit===4).length*(urgent?2:16);
    if(p.cut)n+=left.length<=4?45:4;
    if(difficulty==='hard'){if(!g.table&&g.players.some((p,i)=>i!==seat&&active(g,i)&&p.hand.length===1)&&p.count>1)n+=35;
      if(p.count===4)n+=left.reduce((sum,id)=>sum+(g.revolution?card(id).rank-9:9-card(id).rank),0)*2;
      if(urgent)n+=strength*3;}
    return n;
  };
  moves.sort((a,b)=>score(b)-score(a));return {type:'play',ids:moves[0].ids};
}
function viewFor(g,seat) {
  const v=clone(g);v.players.forEach((p,i)=>{p.count=p.hand.length;if(i!==seat)delete p.hand;});
  // Other players' exchange selections are private until exchange completes.
  v.exchangeCount=g.phase==='exchange'?gift(g,seat):0;
  v.exchangeSubmitted=!!g.exchanges[seat];delete v.exchanges;v.seat=seat;return v;
}
function restoreGame(value) {
  const g=clone(value);if(g.schema!==RULES_VERSION||![3,4].includes(g.players?.length)||!['playing','exchange','finished'].includes(g.phase))fail('单机存档版本无效。');
  const ids=g.players.flatMap(p=>p.hand);if(ids.some(id=>!card(id))||new Set(ids).size!==ids.length||g.order.some(i=>!g.players[i]))fail('单机存档牌组损坏。');return g;
}

// Shared authoritative rooms for native phone hosting and optional Node hosting.

const text=(v,n=24)=>String(v??'').trim().slice(0,n);
const error=message=>{throw new Error(message);};
function cleanAppearance(value={}) {
  const image=s=>{
    if(s==null||s==='')return '';
    if(typeof s!=='string'||s.length>800_000||!/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(s))error('自定义立绘须为 600KB 以内的 PNG、JPEG 或 WebP。');
    return s;
  };
  return {id:text(value.id,80), name:text(value.name)||'自定义角色', portrait:image(value.portrait), avatar:image(value.avatar)};
}
class RoomCore {
  constructor({now=Date.now,random=Math.random,crypto,onError=()=>{}}={}) {if(!crypto)throw new Error("Secure crypto provider required");this.token=(bytes=24)=>crypto.token(bytes);this.digest=value=>crypto.hash(String(value));this.equal=(a,b)=>crypto.equal(String(a),String(b));this.rooms=new Map();this.now=now;this.random=random;this.creations=new Map();this.onError=onError;}
  prune() {for(const [code,r] of this.rooms)if(this.now()-r.touched>12*60*60*1000)this.rooms.delete(code);}
  player(r,credential) {const p=r.seats.find(p=>p&&!p.bot&&this.equal(p.token,credential));if(!p)error('座位凭证无效，请使用原设备重连。');p.seen=this.now();return p;}
  syncClock(r){const g=r.game;if(!g)return;const key=`${g.round}/${g.revision}/${g.phase}/${g.current}`;if(r.turnKey!==key){r.turnKey=key;r.turnDeadline=this.now()+15000;}if(g.phase==='finished'&&r.finishedRound!==g.round){r.finishedRound=g.round;r.seats.forEach((s,i)=>{if(s)s.ready=s.bot||i===r.host;});}}
  publicState(r,p) {
    r.touched=this.now();this.syncClock(r);
    return {rules:RULES_VERSION,code:r.code,host:r.host,seat:p.seat,revision:r.revision,capacity:r.capacity,difficulty:r.difficulty,
      seats:r.seats.map(s=>s?{seat:s.seat,name:s.name,appearance:s.appearance,bot:s.bot,ready:s.ready,online:s.bot||this.now()-s.seen<20_000}:null),
      autoPlay:r.autoPlay||Array(r.capacity).fill(false),turnRemaining:r.game?Math.max(0,Math.ceil((r.turnDeadline-this.now())/1000)):15,
      game:r.game?viewFor(r.game,p.seat):null};
  }
  request(input={}) {
    this.prune();const op=input.op;
    if(op==='create') {
      if(this.rooms.size>=100)error('房间服务已满。');
      const requestId=text(input.requestId,100);if(!requestId)error('缺少创建请求编号。');
      const old=this.creations.get(requestId);if(old&&this.rooms.has(old.code)){const r=this.rooms.get(old.code),p=this.player(r,old.token);return {token:p.token,state:this.publicState(r,p)};}
      if(![3,4].includes(input.capacity))error('请选择 3 人或 4 人牌桌。');
      let code;do{code=this.token(4).slice(0,6).toUpperCase();}while(this.rooms.has(code));
      const salt=this.token(),r={code,capacity:input.capacity,difficulty:['easy','normal','hard'].includes(input.difficulty)?input.difficulty:'normal',
        salt,password:this.digest(salt+text(input.password,64)),host:0,seats:Array(input.capacity).fill(null),autoPlay:Array(input.capacity).fill(false),game:null,touched:this.now(),revision:1,actions:new Map(),joins:new Map(),nextBotAt:0};
      const p={seat:0,name:text(input.name)||'房主',appearance:cleanAppearance(input.appearance),bot:false,ready:true,token:this.token(),seen:this.now()};
      r.seats[0]=p;this.rooms.set(code,r);this.creations.set(requestId,{code,token:p.token});
      if(this.creations.size>200)this.creations.delete(this.creations.keys().next().value);
      return {token:p.token,state:this.publicState(r,p)};
    }
    const code=text(input.code,6).toUpperCase(),r=this.rooms.get(code);if(!r)error('房间不存在或已结束。');
    if(op==='join') {
      if(!this.equal(r.password,this.digest(r.salt+text(input.password,64))))error('房间密码不正确。');
      const requestId=text(input.requestId,100);if(!requestId)error('缺少加入请求编号。');
      if(r.joins.has(requestId)){const p=this.player(r,r.joins.get(requestId));return {token:p.token,state:this.publicState(r,p)};}
      if(r.game)error('牌局已经开始，请等待下一场或使用原设备重连。');
      const seat=r.seats.findIndex(s=>!s);if(seat<0)error('房间已满。');
      const p={seat,name:text(input.name)||`玩家 ${seat+1}`,appearance:cleanAppearance(input.appearance),bot:false,ready:false,token:this.token(),seen:this.now()};
      r.seats[seat]=p;r.joins.set(requestId,p.token);r.revision++;
      return {token:p.token,state:this.publicState(r,p)};
    }
    const p=this.player(r,input.token);
    if(op==='state')return {state:this.publicState(r,p)};
    const actionId=text(input.actionId,100);if(!actionId)error('缺少操作编号。');
    const dedup=p.token+':'+actionId;if(r.actions.has(dedup))return {state:this.publicState(r,p),duplicate:true};
    if(input.revision!==r.revision)error('牌桌已更新，请同步后重试。');
    switch(op) {
      case 'ready':
        if(r.game&&r.game.phase!=='finished')error('当前牌局已开始。');p.ready=!!input.ready;break;
      case 'appearance':
        p.appearance=cleanAppearance(input.appearance);p.name=text(input.name)||p.name;
        if(r.game){r.game.players[p.seat].name=p.name;r.game.players[p.seat].character=p.appearance.id;}break;
      case 'auto':
        if(!r.game||r.game.phase==='finished')error('当前无需托管。');r.autoPlay[p.seat]=!!input.enabled;break;
      case 'start':
        if(p.seat!==r.host)error('只有房主可以开局。');if(r.game)error('已有牌局。');
        if(r.seats.filter(s=>s&&!s.bot).some(s=>!s.ready))error('请等待所有玩家准备。');
        if(r.seats.some(s=>!s)&&!input.fillBots)error('座位未满；可选择用电脑补齐。');
        const seats=r.seats.map((s,i)=>{if(s)return s;const profile=Array.isArray(input.botProfiles)?input.botProfiles[i]:null;
          return {seat:i,name:text(profile?.name)||`电脑 ${i+1}`,appearance:profile?cleanAppearance(profile.appearance):{id:'builtin-'+i,name:'电脑',portrait:'',avatar:''},bot:true,ready:true,seen:this.now()};});
        r.seats=seats;
        r.game=createGame(r.seats.map(s=>({name:s.name,bot:s.bot,character:s.appearance.id})),this.random);break;
      case 'act':if(!r.game)error('牌局尚未开始。');act(r.game,p.seat,input.action);break;
      case 'next':
        if(p.seat!==r.host)error('请由房主开始下一局。');if(!r.game||r.game.phase!=='finished')error('本局尚未结束。');
        if(r.seats.some((s,i)=>s&&!s.bot&&i!==r.host&&!s.ready))error('请等待所有玩家准备下一局。');
        r.seats.forEach((s,i)=>{r.game.players[i].name=s.name;r.game.players[i].character=s.appearance.id;r.game.players[i].bot=s.bot;});
        startRound(r.game,this.random);break;
      case 'leave':
        // After the first deal, scores and exchanges belong to fixed seat indices.
        if(r.game){p.bot=true;p.ready=true;delete p.token;r.game.players[p.seat].bot=true;}
        else r.seats[p.seat]=null;
        if(p.seat===r.host)r.host=r.seats.findIndex(s=>s&&!s.bot);
        r.revision++;r.actions.set(dedup,true);
        if(!r.seats.some(s=>s&&!s.bot))this.rooms.delete(code);
        return {left:true};
      default:error('未知房间操作。');
    }
    r.actions.set(dedup,true);if(r.actions.size>512)r.actions.delete(r.actions.keys().next().value);
    r.revision++;r.nextBotAt=this.now()+1700;return {state:this.publicState(r,p)};
  }
  tick() {
    for(const r of this.rooms.values()) {
      const g=r.game;if(!g||this.now()<r.nextBotAt)continue;this.syncClock(r);
      try {
        if(g.phase==='playing'){
          const seat=g.current,timeout=this.now()>=r.turnDeadline;
          if(r.seats[seat]?.bot||r.autoPlay[seat]||timeout){if(timeout&&!r.seats[seat]?.bot)r.autoPlay[seat]=true;act(g,seat,botAction(g,seat,r.difficulty,this.random));r.revision++;r.nextBotAt=this.now()+1700;this.syncClock(r);}
        }
        if(g.phase==='exchange')for(let i=0;i<r.capacity;i++)if(g.phase==='exchange'&&(r.seats[i]?.bot||r.autoPlay[i]||this.now()>=r.turnDeadline)&&g.previous.indexOf(i)<(r.capacity===3?1:2)&&g.previous.indexOf(i)>=0&&!g.exchanges[i]){if(!r.seats[i]?.bot&&this.now()>=r.turnDeadline)r.autoPlay[i]=true;act(g,i,botAction(g,i,r.difficulty,this.random));r.revision++;this.syncClock(r);}
      } catch(e) {this.onError(e.message);r.nextBotAt=this.now()+5000;}
    }
  }
}

globalThis.QibanRoomRuntime={RoomCore,RULES_VERSION};
})();
