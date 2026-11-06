export function motionTime(state,now){return (state.offset||0)+Math.max(0,now-state.start)/1000*(state.rate||1);}
export function retimeDance(state,rate,now){if(!state||state.kind!=='standing-dance')return;state.offset=motionTime(state,now);state.start=now;state.rate=rate;}

export function createDanceControls(onChange){
 const key='enya-dance-playback-v1';let settings={tempo:1,amplitude:1},panel=null,inputs={};
 function valid(value,low,high,fallback){return Number.isFinite(value)?Math.max(low,Math.min(high,value)):fallback;}
 function set(value){const next={tempo:valid(value.tempo,.5,1.5,settings.tempo),amplitude:valid(value.amplitude,.5,1.2,settings.amplitude)};onChange?.(next);settings=next;try{localStorage.setItem(key,JSON.stringify(settings));}catch{}for(const name of Object.keys(inputs)){inputs[name].input.value=settings[name];inputs[name].output.textContent=settings[name].toFixed(2)+'×';}}
 try{const value=JSON.parse(localStorage.getItem(key)||'{}');settings={tempo:valid(value.tempo,.5,1.5,1),amplitude:valid(value.amplitude,.5,1.2,1)};}catch{}
 function close(){if(panel)panel.hidden=true;}
 function toggle(){
  if(panel){panel.hidden=!panel.hidden;return;}
  panel=document.createElement('section');panel.style.cssText='position:fixed;top:13%;left:6%;right:6%;z-index:9;background:#24212bf5;color:white;padding:20px;border:1px solid #666;border-radius:20px;font:16px -apple-system,sans-serif';
  const title=document.createElement('h3');title.textContent='舞蹈幅度与节奏';panel.append(title);
  const hint=document.createElement('p');hint.textContent='1× 使用默认幅度和动作源原速。速度变化保持当前动作进度。';panel.append(hint);
  for(const [name,label,min,max] of [['amplitude','动作幅度',.5,1.2],['tempo','播放速度',.5,1.5]]){
   const row=document.createElement('label'),text=document.createElement('span'),output=document.createElement('output'),input=document.createElement('input');text.textContent=label+' ';output.textContent=settings[name].toFixed(2)+'×';input.type='range';input.min=min;input.max=max;input.step=.05;input.value=settings[name];input.style.cssText='display:block;width:100%;margin:14px 0';input.setAttribute('aria-label',label);input.oninput=()=>set({...settings,[name]:Number(input.value)});row.append(text,output,input);panel.append(row);inputs[name]={input,output};
  }
  for(const [label,fn] of [['恢复原速与原幅度',()=>set({tempo:1,amplitude:1})],['完成',close]]){const b=document.createElement('button');b.textContent=label;b.onclick=fn;panel.append(b);}
  document.body.append(panel);
 }
 return {get:()=>({...settings}),set,toggle,close};
}
