(() => {
  'use strict';
  if(window.top!==window.self){
    window.webkit={messageHandlers:{snowbreak:{postMessage:value=>parent.postMessage({qibanStageEvent:value},location.origin)}}};
    window.addEventListener('message',async e=>{
      if(e.origin!==location.origin||e.source!==parent||!e.data?.qibanStageCommand)return;
      const value=e.data.qibanStageCommand;
      if(value.type==='arFrame'){window.SnowbreakHost?.arFrame?.(value.proj,value.mv,value.exposure,value.warmth);return;}
      if(value.type==='androidPortrait'){
        try{window.SnowbreakHost?.receive({type:'resume'});await new Promise(resolve=>requestAnimationFrame(resolve));const dataURL=window.SnowbreakHost?.portrait();parent.postMessage({qibanPortrait:{ticket:value.ticket,dataURL}},location.origin);}
        catch(error){parent.postMessage({qibanPortrait:{ticket:value.ticket,error:error.message}},location.origin);}
        return;
      }
      window.SnowbreakHost?.receive(value);
    });return;
  }
  const waiting=new Map(),tracks=new Set();let sequence=0;if(navigator.mediaDevices?.getUserMedia){const capture=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=async options=>{const stream=await capture(options);for(const track of stream.getTracks()){tracks.add(track);track.addEventListener('ended',()=>tracks.delete(track),{once:true});}return stream;};}
  const call=(channel,body)=>new Promise((resolve,reject)=>{const id=String(++sequence);waiting.set(id,{resolve,reject});qibanAndroid.postMessage(JSON.stringify({id,channel,body}));});
  qibanAndroid.onmessage=event=>{const data=JSON.parse(event.data),pending=waiting.get(data.id);if(!pending)return;waiting.delete(data.id);if(data.error)pending.reject(Error(data.error));else pending.resolve(data.value);};
  window.QibanAndroid={call:body=>call('home',body),suspend:()=>{for(const track of tracks)track.stop();tracks.clear();document.dispatchEvent(new Event('qiban-suspend'));}};
  window.webkit={messageHandlers:Object.fromEntries(['qibanGame','qibanChat','snowbreak'].map(channel=>[channel,{postMessage:body=>call(channel,body)}]))};
  window.__qibanEmit=async(event,ack)=>{try{await window.QibanNative?.receive(event);}finally{qibanAndroid.postMessage(JSON.stringify({channel:'ack',id:ack,body:{}}));}};
})();
