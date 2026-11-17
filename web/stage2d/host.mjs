import {PortraitPlayer} from './player.mjs';
const send=data=>parent!==window?parent.postMessage({source:'qiban-stage2d',...data},location.origin):window.webkit?.messageHandlers?.qibanStage?.postMessage(data);
const player=new PortraitPlayer(document.querySelector('canvas'),{onStatus:text=>{document.querySelector('#status').textContent=text;},onReady:data=>send({type:'ready',...data})});
window.QibanPortrait={player,async receive(m){if(m.type==='load')await player.load(m.model,m.base);else if(m.type==='speechLevel')player.level(m.value);else if(m.type==='expression')player.expression(m.name,m.once);else if(m.type==='mood')player.mood(m.value);else if(m.type==='pause')player.pause(m.value);}};
addEventListener('message',e=>{if(e.source===parent&&e.origin===location.origin)window.QibanPortrait.receive(e.data?.qibanStageCommand||e.data).catch(err=>send({type:'error',message:err.message}));});
document.addEventListener('visibilitychange',()=>player.pause(document.hidden));send({type:'hostReady'});
