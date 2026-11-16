import {spawn} from 'node:child_process';
import {readFile,writeFile} from 'node:fs/promises';
import {createInterface} from 'node:readline';
import {createServer} from 'node:http';
import assert from 'node:assert/strict';
import {randomBytes,createHash,timingSafeEqual,randomUUID} from 'node:crypto';
import {RoomCore} from '../games/tycoon/rooms.mjs';
import {legalMoves} from '../games/tycoon/engine.mjs';
const config=JSON.parse(await readFile(process.argv[2],'utf8'));let checks=0;
function peer(command){const child=spawn(command[0],command.slice(1),{stdio:['pipe','pipe','inherit']}),pending=[];createInterface({input:child.stdout}).on('line',line=>{const next=pending.shift();if(!next)return;try{const result=JSON.parse(line);if(result.error)next.reject(Error(result.error));else next.resolve(result.value);}catch(e){next.reject(e);}});child.on('exit',code=>{for(const p of pending.splice(0))p.reject(Error('Native peer exited '+code));});return {call:body=>new Promise((resolve,reject)=>{pending.push({resolve,reject});child.stdin.write(JSON.stringify(body)+'\n');}),close(){child.stdin.end();}};}
const android=peer(config.java),swift=config.swift?peer(config.swift):null;
const crypto={token:n=>randomBytes(n).toString('hex'),hash:s=>createHash('sha256').update(s).digest('hex'),equal:(a,b)=>timingSafeEqual(createHash('sha256').update(a).digest(),createHash('sha256').update(b).digest())};
const core=new RoomCore({crypto}),node=createServer(async(req,res)=>{try{let body='';for await(const chunk of req)body+=chunk;res.end(JSON.stringify(core.request(JSON.parse(body))));}catch(e){res.end(JSON.stringify({error:e.message}));}});await new Promise(r=>node.listen(0,'127.0.0.1',r));const nodeURL='http://127.0.0.1:'+node.address().port+'/api';
const query=async(url,body)=>{const result=await(await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)})).json();return result;};
const okay=(value,label)=>{assert(value,label);checks++;};
async function game(host,client,label){
 const hosted=host?await host.call({command:'host',body:{capacity:3,name:'手机房主',requestId:randomUUID(),difficulty:'normal',password:'friend'}}):core.request({op:'create',capacity:3,name:'Node reference',requestId:randomUUID(),password:'friend'});
 const url=host?'http://127.0.0.1:'+hosted.hostInfo.port+'/api':nodeURL,code=hosted.state.code,tokens=[hosted.token];
 const remote=body=>client.call({command:'wire',url,body});
 const send=async(body,expectError=false)=>{const result=await remote(body);if(!expectError)assert(!result.error,result.error);return result;};
 const wrong=await send({op:'join',code,name:'bad',requestId:randomUUID(),password:'wrong'},true);okay(!!wrong.error,label+' rejects incorrect password');
 for(let i=1;i<3;i++){const id=randomUUID(),input={op:'join',code,name:'移动玩家'+i,requestId:id,password:'friend'};const joined=await send(input),again=await send(input);okay(joined.token===again.token,label+' join idempotent');tokens.push(joined.token);}
 const state=async seat=>(await send({op:'state',code,token:tokens[seat]})).state;
 const mutate=async(seat,op,extra={})=>{const s=await state(seat);return send({op,code,token:tokens[seat],revision:s.revision,actionId:randomUUID(),...extra});};
 for(let i=1;i<3;i++)await mutate(i,'ready',{ready:true});
 await mutate(0,'start',{fillBots:false});let first=await state(0);okay(first.game.phase==='playing'&&first.game.players.filter(p=>Array.isArray(p.hand)&&p.hand.length>0).length===1,label+' private hand masking');
 const bad=await send({op:'state',code,token:'invalid'},true);okay(!!bad.error,label+' validates private seat credentials');
 let actions=0;for(;actions<500;actions++){const s=await state(0);if(s.game.phase==='finished')break;const seat=s.game.current,own=await state(seat),g=own.game;const moves=legalMoves(g,seat).sort((a,b)=>b.count-a.count||a.rank-b.rank),action=moves.length?{type:'play',ids:moves[0].ids}:{type:'pass'};const input={op:'act',code,token:tokens[seat],revision:own.revision,actionId:randomUUID(),action};const result=await send(input);if(actions===0){const again=await send(input);okay(again.duplicate===true&&again.state.revision===result.state.revision,label+' action retry is idempotent');const stale=await send({...input,actionId:randomUUID()},true);okay(!!stale.error,label+' rejects stale revision');}}
 okay(actions<500&&actions>0,label+' completes full shared-rule game');
 for(let i=1;i<3;i++)await mutate(i,'ready',{ready:true});await mutate(0,'next');const next=await state(0);okay(next.game.round===2&&next.game.phase==='exchange',label+' ready/next enters card exchange');
 for(let i=0;i<3;i++){const s=await state(i);if(s.game.exchangeCount&&!s.game.exchangeSubmitted)await mutate(i,'act',{action:{type:'exchange',ids:s.game.players[i].hand.slice(0,s.game.exchangeCount)}});}
 okay((await state(0)).game.phase==='playing',label+' exchange completes');okay((await state(2)).seat===2,label+' reconnect keeps original private seat');if(host)await host.call({command:'stop'});
 return {label,actions,passed:true};
}
try{
 const native=await android.call({command:'selfcheck',cases:config.cases});okay(native.passed,'production archive and spoken dialogue cases');
 const routes=[];
 if(swift){routes.push(await game(android,swift,'Android host ← iOS native client'));routes.push(await game(swift,android,'iOS host ← Android native client'));}
 else {routes.push(await game(android,{call:async x=>query(x.url,x.body)},'Android host ← shared protocol client'));routes.push(await game(null,android,'Shared reference host ← Android client'));}
 const report={nativeSessionAndSpeechChecks:native.checks,wireProtocolChecks:checks,routes,productionSwiftAndAndroid:!!swift,physicalPhones:false,uuRouting:false};await writeFile('research/mobile-native-check/report.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));
}finally{android.close();swift?.close();node.close();}
