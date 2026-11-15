// Dependency-free authoritative room service and MCP Streamable HTTP endpoint.
import http from 'node:http';
import {randomBytes, randomInt, timingSafeEqual, createHash} from 'node:crypto';
import {readFileSync, writeFileSync, existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve, dirname, extname, sep} from 'node:path';
import {networkInterfaces} from 'node:os';
import {createGame, startRound, act, botAction, viewFor, RULES_VERSION} from '../games/tycoon/engine.mjs';

const text=(v,n=24)=>String(v??'').trim().slice(0,n);
const token=()=>randomBytes(24).toString('hex');
const digest=s=>createHash('sha256').update(s).digest();
const equal=(a,b)=>timingSafeEqual(digest(String(a)),digest(String(b)));
const error=message=>{throw new Error(message);};
export function cleanAppearance(value={}) {
  const image=s=>{
    if(s==null||s==='')return '';
    if(typeof s!=='string'||s.length>800_000||!/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(s))error('自定义立绘须为 600KB 以内的 PNG、JPEG 或 WebP。');
    return s;
  };
  return {id:text(value.id,80), name:text(value.name)||'自定义角色', portrait:image(value.portrait), avatar:image(value.avatar)};
}
export class RoomService {
  constructor({now=Date.now, random=()=>randomInt(0,0x100000000)/0x100000000}={}) {this.rooms=new Map();this.now=now;this.random=random;this.creations=new Map();}
  prune() {for(const [code,r] of this.rooms)if(this.now()-r.touched>12*60*60*1000)this.rooms.delete(code);}
  player(r,credential) {const p=r.seats.find(p=>p&&!p.bot&&equal(p.token,credential));if(!p)error('座位凭证无效，请使用原设备重连。');p.seen=this.now();return p;}
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
      let code;do{code=randomBytes(4).toString('hex').slice(0,6).toUpperCase();}while(this.rooms.has(code));
      const salt=token(),r={code,capacity:input.capacity,difficulty:['easy','normal','hard'].includes(input.difficulty)?input.difficulty:'normal',
        salt,password:digest(salt+text(input.password,64)).toString('hex'),host:0,seats:Array(input.capacity).fill(null),game:null,touched:this.now(),revision:1,actions:new Map(),joins:new Map(),nextBotAt:0};
      const p={seat:0,name:text(input.name)||'房主',appearance:cleanAppearance(input.appearance),bot:false,ready:true,token:token(),seen:this.now()};
      r.seats[0]=p;this.rooms.set(code,r);this.creations.set(requestId,{code,token:p.token});
      if(this.creations.size>200)this.creations.delete(this.creations.keys().next().value);
      return {token:p.token,state:this.publicState(r,p)};
    }
    const code=text(input.code,6).toUpperCase(),r=this.rooms.get(code);if(!r)error('房间不存在或已结束。');
    if(op==='join') {
      if(!equal(r.password,digest(r.salt+text(input.password,64)).toString('hex')))error('房间密码不正确。');
      const requestId=text(input.requestId,100);if(!requestId)error('缺少加入请求编号。');
      if(r.joins.has(requestId)){const p=this.player(r,r.joins.get(requestId));return {token:p.token,state:this.publicState(r,p)};}
      if(r.game)error('牌局已经开始，请等待下一场或使用原设备重连。');
      const seat=r.seats.findIndex(s=>!s);if(seat<0)error('房间已满。');
      const p={seat,name:text(input.name)||`玩家 ${seat+1}`,appearance:cleanAppearance(input.appearance),bot:false,ready:false,token:token(),seen:this.now()};
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
        for(let i=0;i<r.capacity;i++)if(!r.seats[i]){const profile=Array.isArray(input.botProfiles)?input.botProfiles[i]:null;
          r.seats[i]={seat:i,name:text(profile?.name)||`电脑 ${i+1}`,appearance:profile?cleanAppearance(profile.appearance):{id:'builtin-'+i,name:'电脑',portrait:'',avatar:''},bot:true,ready:true,seen:this.now()};}
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
      } catch(e) {console.error('Bot turn failed:',e.message);r.nextBotAt=this.now()+5000;}
    }
  }
}
const toolDefs=[
  ['qiban_create_room','创建 3／4 人牌桌；返回私有座位凭证。','create',{requestId:{type:'string'},capacity:{type:'integer',enum:[3,4]},name:{type:'string'},password:{type:'string'}}],
  ['qiban_join_room','加入现有牌桌，返回私有座位凭证。','join',{requestId:{type:'string'},code:{type:'string'},name:{type:'string'},password:{type:'string'}}],
  ['qiban_room_state','只查看自己手牌和公开牌桌，不会提供其他玩家的手牌。','state',{code:{type:'string'},token:{type:'string'}}],
  ['qiban_room_action','准备、开始、出牌、换牌、PASS、下一局或离开；需要最新 revision 和唯一 actionId。','action',{code:{type:'string'},token:{type:'string'},revision:{type:'integer'},actionId:{type:'string'},op:{type:'string',enum:['ready','start','act','next','leave']},ready:{type:'boolean'},fillBots:{type:'boolean'},action:{type:'object',properties:{type:{enum:['play','pass','exchange']},ids:{type:'array',items:{type:'integer'}}},additionalProperties:false}}]
];
const mime={'.html':'text/html; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8'};
export function createRoomServer({key='',service=new RoomService(),allowedOrigins=[],webRoot=resolve(dirname(fileURLToPath(import.meta.url)),'../games/tycoon')}={}) {
  const limits=new Map();
  const localHosts=new Set(['localhost','127.0.0.1','[::1]',...(process.env.QIBAN_GAME_PUBLIC_HOSTS||'').split(',').filter(Boolean)]);
  for(const rows of Object.values(networkInterfaces()))for(const a of rows||[])localHosts.add(a.address);
  const server=http.createServer(async(req,res)=>{
    const send=(status,value)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(value==null?'':JSON.stringify(value));};
    try {
      const host=req.headers.host||'',origin=req.headers.origin;
      // Exact same-origin or explicitly allowed origins. Native app uses URLSession.
      const requestHost=host.startsWith('[')?host.slice(0,host.indexOf(']')+1):host.split(':')[0];
      if(origin&&!allowedOrigins.includes(origin)&&(!localHosts.has(requestHost)||(origin!==`http://${host}`&&origin!==`https://${host}`))){send(403,{error:'此网页来源未获授权。'});return;}
      if(origin){res.setHeader('Access-Control-Allow-Origin',origin);res.setHeader('Vary','Origin');}
      if(req.method==='OPTIONS'){res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization, X-Qiban-Server-Key, MCP-Protocol-Version');res.setHeader('Access-Control-Allow-Methods','POST, GET, OPTIONS');send(204);return;}
      const path=new URL(req.url,'http://localhost').pathname;
      if(req.method==='GET'&&path==='/health'){send(200,{name:'Qiban Card Rooms',rules:RULES_VERSION});return;}
      if(path==='/api'||path==='/mcp') {
        const authorization=(req.headers.authorization||'').replace(/^Bearer /i,'')||req.headers['x-qiban-server-key']||'';
        if(key&&!equal(key,authorization)){send(401,{error:'房间服务访问密钥不正确。'});return;}
        if(req.method!=='POST'){res.setHeader('Allow','POST');send(405,{error:'使用 POST；本服务不提供 SSE 推送。'});return;}
        if(!String(req.headers['content-type']||'').startsWith('application/json')){send(415,{error:'需要 JSON。'});return;}
        const ip=req.socket.remoteAddress,now=Date.now();let limit=limits.get(ip);if(!limit||now-limit.start>10_000){limit={start:now,n:0};limits.set(ip,limit);}if(++limit.n>160){send(429,{error:'请求过于频繁。'});return;}
        if(limits.size>1000)for(const [id,v]of limits)if(now-v.start>10_000)limits.delete(id);
        let bytes=0,chunks=[];for await(const part of req){bytes+=part.length;if(bytes>1_700_000){send(413,{error:'请求超过大小限制。'});return;}chunks.push(part);}
        let data;try{data=JSON.parse(Buffer.concat(chunks).toString('utf8'));}catch{send(400,{error:'JSON 无效。'});return;}
        if(path==='/api'){try{send(200,service.request(data));}catch(e){send(400,{error:e.message});}return;}
        const version=req.headers['mcp-protocol-version'];if(version&&!['2025-03-26','2025-06-18','2025-11-25'].includes(version)){send(400,{error:'MCP 协议版本不支持。'});return;}
        if(data.jsonrpc!=='2.0'||typeof data.method!=='string'||Array.isArray(data)){send(400,{jsonrpc:'2.0',id:data.id??null,error:{code:-32600,message:'Invalid Request'}});return;}
        if(data.id==null){send(202);return;}
        const reply=result=>send(200,{jsonrpc:'2.0',id:data.id,result});
        if(data.method==='initialize'){reply({protocolVersion:['2025-03-26','2025-06-18','2025-11-25'].includes(data.params?.protocolVersion)?data.params.protocolVersion:'2025-06-18',capabilities:{tools:{listChanged:false}},serverInfo:{name:'qiban-card-rooms',version:'1.0.0'}});return;}
        if(data.method==='ping'){reply({});return;}
        if(data.method==='tools/list'){reply({tools:toolDefs.map(([name,description,op,properties])=>({name,description,inputSchema:{type:'object',properties,required:op==='create'?['requestId','capacity']:op==='join'?['requestId','code']:op==='state'?['code','token']:['code','token','revision','actionId','op'],additionalProperties:false}}))});return;}
        if(data.method==='tools/call'){
          const def=toolDefs.find(d=>d[0]===data.params?.name);if(!def){send(200,{jsonrpc:'2.0',id:data.id,error:{code:-32602,message:'Unknown tool'}});return;}
          try {const args=data.params.arguments||{},result=service.request({...args,op:def[2]==='action'?args.op:def[2]});reply({content:[{type:'text',text:JSON.stringify(result)}],isError:false});}
          catch(e){reply({content:[{type:'text',text:e.message}],isError:true});}return;
        }
        send(200,{jsonrpc:'2.0',id:data.id,error:{code:-32601,message:'Method not found'}});return;
      }
      if(req.method==='GET'&&(path==='/'||mime[extname(path)])) {
        const file=resolve(webRoot,path==='/'?'index.html':'.'+path);
        if(!file.startsWith(webRoot+sep)){send(403,{error:'Invalid path'});return;}
        try{const content=readFileSync(file);res.writeHead(200,{'Content-Type':mime[extname(file)],'X-Content-Type-Options':'nosniff','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; connect-src 'self'; object-src 'none'; frame-src 'none'"});res.end(content);}catch{send(404,{error:'Not found'});}return;
      }
      send(404,{error:'Not found'});
    }catch(e){if(!res.headersSent)send(400,{error:'请求未完成。'});else res.end();}
  });
  server.requestTimeout=15_000;server.headersTimeout=10_000;const timer=setInterval(()=>service.tick(),200);timer.unref();server.on('close',()=>clearInterval(timer));
  return {server,service};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  const args=process.argv.slice(2),lan=args.includes('--lan'),host=process.env.QIBAN_GAME_HOST||(lan?'0.0.0.0':'127.0.0.1'),port=Number(process.env.QIBAN_GAME_PORT||17890);
  let key=process.env.QIBAN_GAME_KEY||'';const keyIndex=args.indexOf('--key-file');
  if(keyIndex>=0){const file=resolve(args[keyIndex+1]||'.room-server-key');if(!existsSync(file))writeFileSync(file,randomBytes(18).toString('base64url'),{mode:0o600});key=readFileSync(file,'utf8').trim();console.log('访问密钥文件：'+file);}
  if(host!=='127.0.0.1'&&host!=='::1'&&!key)throw new Error('对外监听需设置 QIBAN_GAME_KEY 或 --key-file。');
  const {server}=createRoomServer({key,allowedOrigins:(process.env.QIBAN_ALLOWED_ORIGINS||'').split(',').filter(Boolean)});
  server.listen(port,host,()=>{console.log(`栖伴牌桌服务 http://127.0.0.1:${port} · MCP /mcp`);if(lan)for(const rows of Object.values(networkInterfaces()))for(const a of rows||[])if(a.family==='IPv4'&&!a.internal)console.log(`可连接地址：http://${a.address}:${port}`);console.log('Ctrl+C 关闭。房间保存在内存，重启服务会结束牌局。');});
}
