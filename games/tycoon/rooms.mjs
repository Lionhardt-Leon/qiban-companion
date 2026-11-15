// Shared authoritative rooms for native phone hosting and optional Node hosting.
import {createGame,startRound,act,botAction,viewFor,RULES_VERSION} from './engine.mjs';
const text=(v,n=24)=>String(v??'').trim().slice(0,n);
const error=message=>{throw new Error(message);};
export function cleanAppearance(value={}) {
  const image=s=>{
    if(s==null||s==='')return '';
    if(typeof s!=='string'||s.length>800_000||!/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(s))error('自定义立绘须为 600KB 以内的 PNG、JPEG 或 WebP。');
    return s;
  };
  return {id:text(value.id,80), name:text(value.name)||'自定义角色', portrait:image(value.portrait), avatar:image(value.avatar)};
}
export class RoomCore {
  constructor({now=Date.now,random=Math.random,crypto,onError=()=>{}}={}) {if(!crypto)throw new Error("Secure crypto provider required");this.token=(bytes=24)=>crypto.token(bytes);this.digest=value=>crypto.hash(String(value));this.equal=(a,b)=>crypto.equal(String(a),String(b));this.rooms=new Map();this.now=now;this.random=random;this.creations=new Map();this.onError=onError;}
  prune() {for(const [code,r] of this.rooms)if(this.now()-r.touched>12*60*60*1000)this.rooms.delete(code);}
  player(r,credential) {const p=r.seats.find(p=>p&&!p.bot&&this.equal(p.token,credential));if(!p)error('座位凭证无效，请使用原设备重连。');p.seen=this.now();return p;}
  publicState(r,p) {
    r.touched=this.now();
    return {rules:RULES_VERSION,code:r.code,host:r.host,seat:p.seat,revision:r.revision,capacity:r.capacity,difficulty:r.difficulty,
      seats:r.seats.map(s=>s?{seat:s.seat,name:s.name,appearance:s.appearance,bot:s.bot,ready:s.ready,online:s.bot||this.now()-s.seen<20_000}:null),
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
        salt,password:this.digest(salt+text(input.password,64)),host:0,seats:Array(input.capacity).fill(null),game:null,touched:this.now(),revision:1,actions:new Map(),joins:new Map(),nextBotAt:0};
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
        if(r.game)error('当前牌局已开始。');p.ready=!!input.ready;break;
      case 'appearance':
        if(r.game&&r.game.phase!=='finished')error('本局结束后可更换角色。');
        p.appearance=cleanAppearance(input.appearance);p.name=text(input.name)||p.name;break;
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
        r.seats.forEach((s,i)=>{r.game.players[i].name=s.name;r.game.players[i].character=s.appearance.id;r.game.players[i].bot=s.bot;});
        startRound(r.game,this.random);break;
      case 'leave':
        if(r.game&&r.game.phase!=='finished'){p.bot=true;p.ready=true;delete p.token;r.game.players[p.seat].bot=true;}
        else r.seats[p.seat]=null;
        if(p.seat===r.host)r.host=r.seats.findIndex(s=>s&&!s.bot);
        r.revision++;r.actions.set(dedup,true);
        if(!r.seats.some(s=>s&&!s.bot))this.rooms.delete(code);
        return {left:true};
      default:error('未知房间操作。');
    }
    r.actions.set(dedup,true);if(r.actions.size>512)r.actions.delete(r.actions.keys().next().value);
    r.revision++;r.nextBotAt=this.now()+700;return {state:this.publicState(r,p)};
  }
  tick() {
    for(const r of this.rooms.values()) {
      const g=r.game;if(!g||this.now()<r.nextBotAt)continue;
      try {
        if(g.phase==='playing'&&r.seats[g.current]?.bot){act(g,g.current,botAction(g,g.current,r.difficulty,this.random));r.revision++;r.nextBotAt=this.now()+850;}
        if(g.phase==='exchange')for(let i=0;i<r.capacity;i++)if(g.phase==='exchange'&&r.seats[i]?.bot&&g.previous.indexOf(i)<(r.capacity===3?1:2)&&g.previous.indexOf(i)>=0&&!g.exchanges[i]){act(g,i,botAction(g,i,r.difficulty,this.random));r.revision++;}
      } catch(e) {this.onError(e.message);r.nextBotAt=this.now()+5000;}
    }
  }
}
