// Dependency-free authoritative room service and MCP Streamable HTTP endpoint.
import http from 'node:http';
import {randomBytes, randomInt, timingSafeEqual, createHash} from 'node:crypto';
import {readFileSync, writeFileSync, existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve, dirname, extname, sep} from 'node:path';
import {networkInterfaces} from 'node:os';
import {createGame, startRound, act, botAction, viewFor, RULES_VERSION} from '../games/tycoon/engine.mjs';

import {RoomCore,cleanAppearance} from '../games/tycoon/rooms.mjs';
export {cleanAppearance};
const digest=s=>createHash('sha256').update(s).digest();
const equal=(a,b)=>timingSafeEqual(digest(String(a)),digest(String(b)));
export class RoomService extends RoomCore {
  constructor(options={}) {super({...options,random:options.random||(()=>randomInt(0,0x100000000)/0x100000000),crypto:{token:(n=24)=>randomBytes(n).toString('hex'),hash:s=>digest(s).toString('hex'),equal},onError:message=>console.error('Bot turn failed:',message)});}
}
const toolDefs=[
  ['qiban_create_room','创建 3／4 人牌桌；返回私有座位凭证。','create',{requestId:{type:'string'},capacity:{type:'integer',enum:[3,4]},name:{type:'string'},password:{type:'string'}}],
  ['qiban_join_room','加入现有牌桌，返回私有座位凭证。','join',{requestId:{type:'string'},code:{type:'string'},name:{type:'string'},password:{type:'string'}}],
  ['qiban_room_state','只查看自己手牌和公开牌桌，不会提供其他玩家的手牌。','state',{code:{type:'string'},token:{type:'string'}}],
  ['qiban_room_action','准备、开始、出牌、换牌、PASS、下一局或离开；需要最新 revision 和唯一 actionId。','action',{code:{type:'string'},token:{type:'string'},revision:{type:'integer'},actionId:{type:'string'},op:{type:'string',enum:['ready','start','act','auto','next','leave']},enabled:{type:'boolean'},ready:{type:'boolean'},fillBots:{type:'boolean'},action:{type:'object',properties:{type:{enum:['play','pass','exchange']},ids:{type:'array',items:{type:'integer'}}},additionalProperties:false}}]
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
