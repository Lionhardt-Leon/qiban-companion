import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import {createGame,makePlay,beats,act,startRound,botAction,viewFor,restoreGame,RULES_VERSION} from '../games/tycoon/engine.mjs';
import {RoomService,createRoomServer} from '../game-server/server.mjs';
let checks=0;
const check=(name,f)=>{f();checks++;console.log('OK '+name);};
const id=(rank,suit=0)=>suit*13+rank-3;
const p=ids=>makePlay(ids);
let seed=6291;const random=()=>{seed^=seed<<13;seed^=seed>>>17;seed^=seed<<5;return (seed>>>0)/4294967296;};
const players=n=>Array.from({length:n},(_,i)=>({name:'玩家 '+i,bot:i!==0,character:'builtin-'+i}));
const fixture=hands=>{const g=createGame(players(hands.length),random);g.players.forEach((p,i)=>p.hand=[...hands[i]]);g.current=0;return g;};
check('normal strength and revolution reverse only number ranks',()=>{assert(beats(p([id(15)]),p([id(14)])));assert(!beats(p([id(15)]),p([id(14)]),true));assert(beats(p([id(3)]),p([id(15)]),true));});
check('same count and strict rank; no straights/full houses/duplicate IDs',()=>{assert(!beats(p([id(4),id(4,1)]),p([id(3)])));assert(!beats(p([id(4)]),p([id(4,1)])));assert.throws(()=>p([id(3),id(4)]));assert.throws(()=>p([52,52]));assert.throws(()=>p([0,1,2,3,4]));});
check('Joker wild, double Joker and spade 3 counter',()=>{assert.equal(p([id(4),52]).rank,4);assert(beats(p([52]),p([id(15)]),true));assert(!beats(p([53]),p([52])));assert(beats(p([39]),p([52])));assert(beats(p([52,53]),p([id(3),id(3,1)]),true));assert(!beats(p([id(3),id(3,1)]),p([52,53]),true));assert(!beats(p([39]),p([id(15)])));});
check('first deal and rotating extra cards; diamond 3 holder starts freely',()=>{const g=createGame(players(4),random);assert.deepEqual(g.players.map(p=>p.hand.length),[14,14,13,13]);assert(g.players[g.current].hand.includes(13));assert.equal(new Set(g.players.flatMap(p=>p.hand)).size,54);g.phase='finished';g.order=[0,1,2,3];startRound(g,random);assert.deepEqual(g.players.map(p=>p.hand.length),[13,14,14,13]);assert.equal(g.current,3);assert.equal(g.revolution,false);});
check('three players have 18 cards and exchange exactly one between first/last',()=>{const g=createGame(players(3),random);assert.deepEqual(g.players.map(p=>p.hand.length),[18,18,18]);g.phase='finished';g.order=[0,1,2];startRound(g,random);assert.equal(viewFor(g,0).exchangeCount,1);const before=g.players.map(p=>[...p.hand]);const tribute=[...before[2]].sort((a,b)=>(b<52?b%13+3:16)-(a<52?a%13+3:16)||a-b)[0];act(g,0,{type:'exchange',ids:[before[0][0]]});assert(g.players[0].hand.includes(tribute));assert.deepEqual(g.players[1].hand,before[1]);assert.equal(g.phase,'playing');});
check('8 cut retains turn; wrong owner and empty lead pass rejected',()=>{const g=fixture([[id(8),id(4)],[id(5),id(6)],[id(7),id(9)]]);assert.throws(()=>act(g,1,{type:'play',ids:[id(5)]}));assert.throws(()=>act(g,0,{type:'pass'}));assert.throws(()=>act(g,0,{type:'play',ids:[id(12)]}));act(g,0,{type:'play',ids:[id(8)]});assert.equal(g.current,0);assert.equal(g.table,null);});
check('quad flips after legal comparison; single/pair cannot be bombed',()=>{const cards=[0,13,26,39],g=fixture([[...cards,id(6)],[id(4),id(5)],[id(7),id(9)]]);act(g,0,{type:'play',ids:cards});assert(g.revolution);assert.equal(g.table.count,4);assert.equal(g.current,1);assert(!beats(p(cards),p([id(15)])));});
check('spade 3 counters Joker and clears; finishing cutter passes lead clockwise',()=>{const g=fixture([[52,id(6)],[39,id(4)],[id(5),id(7)]]);act(g,0,{type:'play',ids:[52]});act(g,1,{type:'play',ids:[39]});assert.equal(g.current,1);assert.equal(g.table,null);const h=fixture([[id(8)],[id(4),id(5)],[id(6),id(7)]]);act(h,0,{type:'play',ids:[id(8)]});assert.equal(h.current,1);assert.deepEqual(h.order,[0]);});
check('passes reset after new play; all active others pass clears',()=>{const g=fixture([[0,id(10)],[id(5),id(11)],[id(7),id(12)]]);act(g,0,{type:'play',ids:[0]});act(g,1,{type:'pass'});act(g,2,{type:'play',ids:[id(7)]});assert.equal(g.passes,0);act(g,0,{type:'pass'});act(g,1,{type:'pass'});assert.equal(g.table,null);assert.equal(g.current,2);});
check('previous winner falls once; finish order/score includes every seat',()=>{const g=fixture([[id(9),id(10)],[id(3)],[id(4),id(5)]]);g.previous=[0,1,2];g.current=1;act(g,1,{type:'play',ids:[id(3)]});assert.equal(g.fallen,0);assert.equal(g.phase,'finished');assert.deepEqual(g.order,[1,2,0]);assert.deepEqual(g.players.map(p=>p.score),[0,2,1]);});
check('private views exclude other hands and exchange choices',()=>{const g=createGame(players(4),random),v=viewFor(g,1);assert.equal(v.players[1].hand.length,14);assert.equal(v.players[0].hand,undefined);assert.equal(v.players[2].hand,undefined);assert(!('exchanges'in v));assert.equal(restoreGame(g).schema,RULES_VERSION);assert.throws(()=>restoreGame({...g,schema:'invalid'}));});
check('four-player exchange validates simultaneous original-hand choices',()=>{const g=createGame(players(4).map(p=>({...p,bot:false})),random);g.phase='finished';g.order=[0,1,2,3];startRound(g,random);const initial=g.players.map(p=>[...p.hand]);assert.equal(viewFor(g,0).exchangeCount,2);assert.equal(viewFor(g,1).exchangeCount,1);assert.throws(()=>act(g,0,{type:'exchange',ids:[initial[0][0]]}));act(g,0,{type:'exchange',ids:initial[0].slice(0,2)});assert.equal(g.phase,'exchange');assert.deepEqual(g.players.map(p=>p.hand),initial);assert(!('exchanges'in viewFor(g,1)));act(g,1,{type:'exchange',ids:[initial[1][0]]});assert.equal(g.phase,'playing');assert(g.players[3].hand.includes(initial[0][0]));assert(g.players[2].hand.includes(initial[1][0]));assert.equal(new Set(g.players.flatMap(p=>p.hand)).size,54);});
check('bots complete 3/4-player multi-round games without losing/duplicating cards',()=>{for(const n of [3,4]){const g=createGame(players(n).map(p=>({...p,bot:true})),random);for(let round=0;round<4;round++){let turns=0;while(g.phase==='playing'&&turns++<700){act(g,g.current,botAction(g,g.current,'hard',random));const hand=g.players.flatMap(p=>p.hand);assert.equal(hand.length,new Set(hand).size);}assert.equal(g.phase,'finished');assert.equal(new Set(g.order).size,n);if(round<3)startRound(g,random);}}});

let now=1000;const service=new RoomService({now:()=>now,random});
const host=service.request({op:'create',capacity:3,name:'秦天',password:'friends',requestId:'create-1'}),code=host.state.code;
const hostInput={code,token:host.token};
check('create retry is idempotent and returns same private seat',()=>{const again=service.request({op:'create',capacity:3,name:'秦天',password:'friends',requestId:'create-1'});assert.equal(again.token,host.token);assert.equal(service.rooms.size,1);});
check('wrong room password and bad artwork are rejected',()=>{assert.throws(()=>service.request({op:'join',code,password:'bad',requestId:'bad'}));assert.throws(()=>service.request({op:'join',code,password:'friends',requestId:'badArt',appearance:{portrait:'https://untrusted/image.png'}}));});
const friend=service.request({op:'join',code,password:'friends',requestId:'join-1',name:'朋友'});
check('join retry does not consume a second seat and tokens remain private',()=>{const again=service.request({op:'join',code,password:'friends',requestId:'join-1'});assert.equal(again.token,friend.token);assert.equal(again.state.seats.filter(Boolean).length,2);assert(!JSON.stringify(again.state).includes(host.token));assert(!JSON.stringify(again.state).includes(friend.token));});
function cmd(op,extra={},auth=hostInput){const r=service.request({op:'state',...auth}).state;return service.request({op,...auth,revision:r.revision,actionId:'a-'+random(),...extra});}
check('only host starts and all humans must ready',()=>{assert.throws(()=>cmd('start',{fillBots:true},{code,token:friend.token}));assert.throws(()=>cmd('start',{fillBots:true}));cmd('ready',{ready:true},{code,token:friend.token});});
check('invalid bot art cannot partially fill room seats',()=>{const c=service.request({op:'create',capacity:4,requestId:'atomic-start'});assert.throws(()=>service.request({op:'start',code:c.state.code,token:c.token,revision:c.state.revision,actionId:'bad-fill',fillBots:true,botProfiles:[null,{name:'正常',appearance:{id:'test',name:'正常'}},{name:'坏图',appearance:{portrait:'https://bad/image'}},null]}));assert.equal(service.rooms.get(c.state.code).seats.filter(Boolean).length,1);assert.equal(service.rooms.get(c.state.code).game,null);});
const started=cmd('start',{fillBots:true,botProfiles:[null,null,{name:'恩雅',appearance:{id:'test-enya',name:'恩雅'}}]});
check('authoritative game uses selected bot roles and exposes only caller hand',()=>{assert(started.state.seats[2].bot);assert.equal(started.state.seats[2].appearance.name,'恩雅');assert.equal(started.state.game.players[2].name,'恩雅');assert(started.state.game.players[0].hand);assert(!started.state.game.players[1].hand);const theirs=service.request({op:'state',code,token:friend.token}).state;assert(theirs.game.players[1].hand);assert(!theirs.game.players[0].hand);});
check('action retry returns current state without executing twice',()=>{const r=service.rooms.get(code),g=r.game;g.current=0;const action=botAction(g,0,'normal',random),request={op:'act',...hostInput,action,actionId:'unique-retry',revision:r.revision};const first=service.request(request),revision=first.state.revision;const twice=service.request(request);assert(twice.duplicate);assert.equal(twice.state.revision,revision);assert.throws(()=>service.request({...request,actionId:'stale'}));});
check('disconnect/reconnect keeps original seat and cannot use someone else token',()=>{now+=25_000;const v=service.request({op:'state',...hostInput}).state;assert(!v.seats[friend.state.seat].online);const joined=service.request({op:'state',code,token:friend.token}).state;assert(joined.seats[friend.state.seat].online);assert.throws(()=>service.request({op:'state',code,token:'invalid'}));});
check('leaving active room transfers host and AI takes the released seat',()=>{cmd('leave');const r=service.rooms.get(code);assert(r.seats[0].bot);assert.equal(r.host,1);assert.throws(()=>service.request({op:'state',...hostInput}));assert.equal(r.game.players[0].bot,true);});

// Exercise the release bundles too. Device-level protocol coverage lives in check-mobile-interop.
const roomRuntimes = [['Node', RoomService]];
for (const [platform, path] of [
  ['iOS', '../games/tycoon/native-runtime.js'],
  ['Android', '../android/app/src/main/assets/game/room-runtime.js']
]) {
  const sandbox = {};
  runInNewContext(readFileSync(new URL(path, import.meta.url), 'utf8'), sandbox);
  roomRuntimes.push([platform, sandbox.QibanRoomRuntime.RoomCore]);
}
for (const [platform, Runtime] of roomRuntimes) {
  for (const capacity of [3, 4]) {
    for (const leavingSeat of [0, 1]) {
      check(`${platform} ${capacity} seats continue after seat ${leavingSeat} leaves at settlement`, () => {
        let clock = 0, sequence = 0;
        const service = new Runtime({now: () => clock, random, crypto: {
          token: () => (++sequence).toString(16).padStart(8, '0'), hash: String, equal: (a,b) => a === b
        }});
        const host = service.request({op:'create', capacity, requestId:'host'});
        const code = host.state.code;
        const guest = service.request({op:'join', code, requestId:'guest'});
        const tokens = [host.token, guest.token];
        const room = service.rooms.get(code);
        const move = (seat, op, options={}) => service.request({
          code, token:tokens[seat], revision:room.revision, actionId:String(++sequence), op, ...options
        });
        move(1, 'ready', {ready:true});
        move(0, 'start', {fillBots:true});
        function advanceUntil(phase) {
          for (let i = 0; room.game.phase !== phase && i < 1000; i++) {
            clock += 20_000;
            service.tick();
          }
          assert.equal(room.game.phase, phase);
        }
        advanceUntil('finished');
        const order = [...room.game.order], scores = Array.from(room.game.players, p => p.score);
        const survivor = 1 - leavingSeat;
        move(leavingSeat, 'leave');
        assert.throws(() => service.request({op:'state', code, token:tokens[leavingSeat]}));
        assert.equal(room.host, survivor);
        const next = move(survivor, 'next').state;
        assert.equal(next.game.round, 2);
        assert.equal(next.seats[leavingSeat].bot, true);
        assert.equal(next.game.players[leavingSeat].bot, true);
        assert.equal(next.seat, survivor);
        assert.deepEqual([...next.game.previous], order);
        assert.deepEqual(Array.from(next.game.players, p => p.score), scores);
        advanceUntil('playing');
        assert.equal(new Set(room.game.players.flatMap(p=>p.hand)).size, 54);
        move(survivor, 'leave');
        assert.equal(service.rooms.has(code), false);
      });
    }
  }
}

const {server}=createRoomServer({key:'test-service-key'});await new Promise(r=>server.listen(0,'127.0.0.1',r));const base='http://127.0.0.1:'+server.address().port;
const post=(path,body,headers={})=>fetch(base+path,{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer test-service-key',...headers},body:JSON.stringify(body)});
try {
  let r=await fetch(base+'/api',{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'});assert.equal(r.status,401);checks++;
  r=await post('/mcp',{jsonrpc:'2.0',id:1,method:'initialize',params:{protocolVersion:'2025-06-18'}});assert.equal((await r.json()).result.protocolVersion,'2025-06-18');checks++;
  r=await post('/mcp',{jsonrpc:'2.0',method:'notifications/initialized'});assert.equal(r.status,202);checks++;
  r=await post('/mcp',{jsonrpc:'2.0',id:2,method:'tools/list'});assert.equal((await r.json()).result.tools.length,4);checks++;
  r=await post('/mcp',{jsonrpc:'2.0',id:3,method:'tools/call',params:{name:'qiban_create_room',arguments:{requestId:'mcp-1',capacity:4,name:'MCP 玩家'}}});const created=JSON.parse((await r.json()).result.content[0].text);assert.equal(created.state.seats[0].name,'MCP 玩家');checks++;
  r=await post('/api',{op:'state'},{Origin:'https://untrusted.example'});assert.equal(r.status,403);checks++;
  r=await post('/api',{op:'state'},{Origin:'http://evil.example',Host:'evil.example'});assert.equal(r.status,403);checks++;
  r=await fetch(base+'/mcp',{headers:{Authorization:'Bearer test-service-key',Accept:'text/event-stream'}});assert.equal(r.status,405);checks++;
  r=await fetch(base+'/');assert.equal(r.status,200);assert((await r.text()).includes('app.mjs'));checks++;
}finally{await new Promise(r=>server.close(r));}
check('turn clock does not extend on polling and timed-out humans enter auto play',()=>{
  let clock=1000;const s=new RoomService({now:()=>clock,random}),h=s.request({op:'create',capacity:3,name:'Host',requestId:'timer-room'});
  s.request({op:'start',code:h.state.code,token:h.token,revision:h.state.revision,actionId:'timer-start',fillBots:true});
  const r=s.rooms.get(h.state.code);r.game.current=0;r.game.table=null;r.game.revision++;s.syncClock(r);
  const deadline=r.turnDeadline;clock+=8000;const state=s.request({op:'state',code:r.code,token:h.token}).state;
  assert.equal(state.turnRemaining,7);assert.equal(r.turnDeadline,deadline);const before=r.game.players[0].hand.length;
  clock=deadline+1;s.tick();assert(r.autoPlay[0]);assert(r.game.players[0].hand.length<before);
  const rev=r.revision;s.request({op:'auto',code:r.code,token:h.token,revision:rev,actionId:'retake',enabled:false});assert.equal(r.autoPlay[0],false);
});
check('finished friends must ready again; appearance changes keep the owned hand',()=>{
  const s=new RoomService({random}),h=s.request({op:'create',capacity:3,name:'Host',requestId:'ready-again'}),code=h.state.code;
  const f=s.request({op:'join',code,password:'',name:'Friend',requestId:'ready-friend'});
  let r=s.rooms.get(code);s.request({op:'ready',code,token:f.token,revision:r.revision,actionId:'friend-ready',ready:true});
  s.request({op:'start',code,token:h.token,revision:r.revision,actionId:'start-again',fillBots:true});
  const hand=[...r.game.players[1].hand];s.request({op:'appearance',code,token:f.token,revision:r.revision,actionId:'new-role',name:'Friend',appearance:{id:'new-role',name:'New role'}});
  assert.deepEqual(r.game.players[1].hand,hand);assert.equal(r.game.players[1].character,'new-role');
  r.game.phase='finished';r.game.order=[0,1,2];r.game.revision++;s.syncClock(r);assert.equal(r.seats[1].ready,false);
  assert.throws(()=>s.request({op:'next',code,token:h.token,revision:r.revision,actionId:'too-soon'}));
  s.request({op:'ready',code,token:f.token,revision:r.revision,actionId:'friend-ready-again',ready:true});
  s.request({op:'next',code,token:h.token,revision:r.revision,actionId:'next-again'});assert.equal(r.game.round,2);
});
console.log(JSON.stringify({checks,success:true,scope:'rules, rooms, timed auto play, next-round readiness, HTTP and MCP; no phone/UU validation'}));
