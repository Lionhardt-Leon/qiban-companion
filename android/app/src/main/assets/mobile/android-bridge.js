(() => {
  'use strict';
  if(window.top!==window.self){window.webkit={messageHandlers:{snowbreak:{postMessage:value=>parent.postMessage({qibanStageEvent:value},location.origin)}}};window.addEventListener('message',e=>{if(e.origin===location.origin&&e.source===parent&&e.data?.qibanStageCommand)window.SnowbreakHost?.receive(e.data.qibanStageCommand);});return;}
  const waiting=new Map();let sequence=0;
  const call=(channel,body)=>new Promise((resolve,reject)=>{const id=String(++sequence);waiting.set(id,{resolve,reject});qibanAndroid.postMessage(JSON.stringify({id,channel,body}));});
  qibanAndroid.onmessage=event=>{const data=JSON.parse(event.data),pending=waiting.get(data.id);if(!pending)return;waiting.delete(data.id);if(data.error)pending.reject(Error(data.error));else pending.resolve(data.value);};
  window.QibanAndroid={call:body=>call('home',body),suspend:()=>document.dispatchEvent(new Event('qiban-suspend'))};
  window.webkit={messageHandlers:Object.fromEntries(['qibanGame','qibanChat','snowbreak'].map(channel=>[channel,{postMessage:body=>call(channel,body)}]))};
  window.__qibanEmit=async(event,ack)=>{try{await window.QibanNative?.receive(event);}finally{qibanAndroid.postMessage(JSON.stringify({channel:'ack',id:ack,body:{}}));}};
})();
