// Independently implemented turn engine. No network, clock, artwork or UI dependency.
export const RULES_VERSION = 'qiban-tycoon/1';
export const SUITS = ['♣', '♦', '♥', '♠', '★'];
export const face = rank => ({11:'J',12:'Q',13:'K',14:'A',15:'2',16:'JOKER'}[rank] || String(rank));
export const card = id => Number.isInteger(id) && id >= 0 && id < 54 ?
  {id, suit:id < 52 ? Math.floor(id / 13) : 4, rank:id < 52 ? id % 13 + 3 : 16} : null;
export const label = id => { const c = card(id); return c ? (c.suit === 4 ? 'JOKER' : SUITS[c.suit] + face(c.rank)) : '?'; };
export const titles = n => n === 3 ? ['大富豪','平民','大贫民'] : ['大富翁','富翁','贫民','大贫民'];
const fail = message => { throw new Error(message); };
const clone = x => JSON.parse(JSON.stringify(x));
export function makePlay(ids) {
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
export function beats(play, table, revolution = false) {
  if (!table) return true;
  if (play.count !== table.count || table.doubleJoker) return false;
  if (play.doubleJoker) return true;
  if (table.joker) return play.spadeThree;
  if (play.joker) return true;
  return revolution ? play.rank < table.rank : play.rank > table.rank;
}
export const active = (g, seat) => seat >= 0 && seat < g.players.length && seat !== g.fallen && !g.order.includes(seat) && g.players[seat].hand.length > 0;
const next = (g, seat) => { for (let step = 1; step <= g.players.length; step++) {const s = (seat + step + g.players.length) % g.players.length; if (active(g,s)) return s;} return -1; };
const log = (g, text) => {g.log.push(text); if (g.log.length > 160) g.log.shift();};
const gift = (g, seat) => { const i = g.previous.indexOf(seat); return g.players.length === 3 ? (i === 0 ? 1 : 0) : (i === 0 ? 2 : i === 1 ? 1 : 0); };
export function createGame(players, random = Math.random) {
  if (![3,4].includes(players?.length)) fail('牌局需要 3 或 4 个座位。');
  const g = {schema:RULES_VERSION, players:players.map((p,i) => ({name:String(p.name || `玩家 ${i+1}`).slice(0,24), character:p.character || '', bot:!!p.bot, hand:[], status:'等待', score:0})),
    round:0, phase:'finished', order:[], previous:[], table:null, lastPlay:null, lastActor:-1, current:-1, leader:-1,
    fallen:-1, revolution:false, passes:0, exchanges:{}, log:[], revision:0};
  return startRound(g,random);
}
export function startRound(g, random = Math.random) {
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
export function act(g, seat, action) {
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
export function legalMoves(g,seat) {
  if(g.phase!=='playing'||g.current!==seat)return [];
  const hand=g.players[seat].hand, result=[],visit=(at,ids)=>{
    if(ids.length){try{const p=makePlay(ids);if(beats(p,g.table,g.revolution))result.push(p);}catch{}}
    if(ids.length===4)return;
    for(let i=at;i<hand.length;i++){const rank=ids.map(card).find(c=>c.suit!==4)?.rank,c=card(hand[i]);if(rank&&c.suit!==4&&c.rank!==rank)continue;visit(i+1,[...ids,hand[i]]);}
  };visit(0,[]);return result;
}
export function botAction(g,seat,difficulty='normal',random=Math.random) {
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
export function viewFor(g,seat) {
  const v=clone(g);v.players.forEach((p,i)=>{p.count=p.hand.length;if(i!==seat)delete p.hand;});
  // Other players' exchange selections are private until exchange completes.
  v.exchangeCount=g.phase==='exchange'?gift(g,seat):0;
  v.exchangeSubmitted=!!g.exchanges[seat];delete v.exchanges;v.seat=seat;return v;
}
export function restoreGame(value) {
  const g=clone(value);if(g.schema!==RULES_VERSION||![3,4].includes(g.players?.length)||!['playing','exchange','finished'].includes(g.phase))fail('单机存档版本无效。');
  const ids=g.players.flatMap(p=>p.hand);if(ids.some(id=>!card(id))||new Set(ids).size!==ids.length||g.order.some(i=>!g.players[i]))fail('单机存档牌组损坏。');return g;
}
