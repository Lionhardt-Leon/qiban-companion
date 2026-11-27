// Frame pacing and framebuffer budget; source textures are never resampled here.
const MODE_ALIAS={performance:'quality',balanced:'adaptive',powersave:'battery'};
export function normalizeRenderMode(mode){return MODE_ALIAS[mode]||(['adaptive','quality','battery'].includes(mode)?mode:'adaptive');}
export function createRenderBudget({now=()=>performance.now()}={}){
 let mode='adaptive',thermal='nominal',lowPower=false,scale=1,last=0,start=0,frames=0,total=0,samples=0,fps=0,slow=0,fast=0,changes=0;
 const target=()=>{
  if(mode==='quality')return thermal==='critical'?30:60;
  if(mode==='battery')return thermal==='critical'?20:30;
  return thermal==='critical'?20:lowPower||thermal==='serious'?30:60;
 };
 function ratio(w,h,dpr){
  const cap=mode==='quality'?6000000:mode==='battery'?1400000:3000000;
  const budget=mode==='quality'?(thermal==='critical'?2000000:cap):(thermal==='critical'?1000000:thermal==='serious'?1600000:cap);
  const s=mode==='quality'?1:scale;
  return Math.max(.5,Math.min(dpr||1,3,Math.sqrt(budget/Math.max(1,w*h)))*s);
 }
 function configure(value={}){
  if(value.mode){mode=normalizeRenderMode(value.mode);if(mode==='quality')scale=1;}
  if(value.thermal&&['nominal','fair','serious','critical'].includes(value.thermal))thermal=value.thermal;
  if(typeof value.lowPower==='boolean')lowPower=value.lowPower;
  last=0;start=0;frames=0;slow=fast=0;return snapshot();
 }
 function begin(t=now()){
  const interval=1000/target();
  if(last&&t-last<interval-.75)return false;
  if(last&&t-last<1000){total+=t-last;samples++;}last=t;frames++;
  if(!start)start=t;
  if(t-start>=2000){fps=frames*1000/(t-start);if(mode==='adaptive'){
    slow=fps<target()*.78?slow+1:0;fast=fps>target()*.94?fast+1:0;
    if(slow>=2&&scale>.65){scale=Math.max(.65,scale-.1);slow=0;changes++;}
    else if(fast>=4&&scale<1){scale=Math.min(1,scale+.05);fast=0;changes++;}
   }start=t;frames=0;
  }return true;
 }
 function snapshot(){return {mode,thermal,lowPower,targetFPS:target(),fps:Math.round(fps*10)/10,meanFrameMs:samples?Math.round(total/samples*10)/10:0,scale,changes};}
 return {begin,configure,ratio,snapshot,resetClock(){last=0;start=0;frames=0;}};
}
