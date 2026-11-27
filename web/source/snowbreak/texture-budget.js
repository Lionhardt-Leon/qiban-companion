// Estimate RGBA8 plus the mip chain before decoding. Keep source files intact.
export function planTextureBudget(config,runtime,requested=4096,profile=null){
 const isPerf=profile==='quality'||profile==='performance';
 const isBattery=profile==='battery'||profile==='powersave';
 const limit=isBattery?2048:(requested===2048?2048:4096);
 const baseMiB=isPerf?1024:isBattery?192:(profile==='adaptive'||profile==='balanced')?512:(runtime.current.characterId==='Fenny'?256:320);
 const budgetBytes=baseMiB*(limit===2048&&!isBattery?.5:1)*1024**2,entries=new Map();
 const normalCap=isPerf?2048:isBattery?512:1024;
 const propCap=isPerf?2048:isBattery?512:1024;
 for(const m of config?.materials||[]){
  if(m.renderState?.opacity===0)continue;
  for(const [field,normal] of [['diffuseAssetId',false],['normalAssetId',true]]){
   const id=m[field];if(!id)continue;const key=(normal?'normal:':'')+id,info=runtime.getAsset('texture_'+id)?.data;
   if(!info||![info.width,info.height].every(n=>Number.isInteger(n)&&n>0&&n<=4096))throw new Error('Missing texture dimensions');
   const prop=/^(ma_|house_)/i.test(m.name),priority=normal?10:prop?(isPerf?150:5):/head|face|eye/i.test(m.name)?1000:/body00/i.test(m.name)?500:/body01/i.test(m.name)?400:/hair/i.test(m.name)?120:60;
   const cap=Math.min(limit,normal?normalCap:prop?propCap:4096),existing=entries.get(key);
   if(existing){existing.priority=Math.max(existing.priority,priority);existing.cap=Math.max(existing.cap,cap);continue;}
   entries.set(key,{key,id,normal,width:info.width,height:info.height,cap,priority});
  }
 }
 function size(e){const scale=Math.min(1,e.cap/Math.max(e.width,e.height));return [Math.max(1,Math.round(e.width*scale)),Math.max(1,Math.round(e.height*scale))];}
 const bytes=e=>{const [w,h]=size(e);return w*h*4*4/3;},total=()=>[...entries.values()].reduce((n,e)=>n+bytes(e),0);
 while(total()>budgetBytes){const candidates=[...entries.values()].filter(e=>e.cap>512&&Math.max(e.width,e.height)>512).map(e=>({e,saving:bytes(e)-bytes({...e,cap:e.cap/2})})).filter(x=>x.saving>0).sort((a,b)=>a.e.priority/a.saving-b.e.priority/b.saving);if(!candidates.length)throw new Error('Texture memory budget exceeded');candidates[0].e.cap/=2;}
 return {limitFor:(id,normal=false)=>entries.get((normal?'normal:':'')+id)?.cap||1024,snapshot:()=>({requestedLimit:limit,budgetMiB:budgetBytes/1024**2,estimatedMiB:Math.round(total()/1024**2*10)/10,textures:[...entries.values()].map(e=>({id:e.id,normal:e.normal,source:[e.width,e.height],size:size(e)}))})};
}
