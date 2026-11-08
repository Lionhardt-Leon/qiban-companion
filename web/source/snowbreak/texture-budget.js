// Estimate RGBA8 plus the mip chain before decoding. Keep source files intact.
export function planTextureBudget(config,runtime,requested=4096){
 const limit=requested===2048?2048:4096,budgetBytes=(runtime.current.characterId==='Fenny'?256:320)*(limit===2048?.5:1)*1024**2,entries=new Map();
 for(const m of config?.materials||[])for(const [field,normal] of [['diffuseAssetId',false],['normalAssetId',true]]){
  const id=m[field];if(!id)continue;const key=(normal?'normal:':'')+id,info=runtime.getAsset('texture_'+id)?.data;
  if(!info||![info.width,info.height].every(n=>Number.isInteger(n)&&n>0&&n<=4096))throw new Error('Missing texture dimensions');
  const prop=/^(ma_|house_)/i.test(m.name),priority=normal?10:prop?5:/head|face|eye/i.test(m.name)?1000:/hair/i.test(m.name)?80:50;
  const cap=Math.min(limit,normal||prop?1024:4096),existing=entries.get(key);
  if(existing){existing.priority=Math.max(existing.priority,priority);existing.cap=Math.max(existing.cap,cap);continue;}
  entries.set(key,{key,id,normal,width:info.width,height:info.height,cap,priority});
 }
 function size(e){const scale=Math.min(1,e.cap/Math.max(e.width,e.height));return [Math.max(1,Math.round(e.width*scale)),Math.max(1,Math.round(e.height*scale))];}
 const bytes=e=>{const [w,h]=size(e);return w*h*4*4/3;},total=()=>[...entries.values()].reduce((n,e)=>n+bytes(e),0);
 while(total()>budgetBytes){const candidates=[...entries.values()].filter(e=>e.cap>512&&Math.max(e.width,e.height)>512).map(e=>({e,saving:bytes(e)-bytes({...e,cap:e.cap/2})})).filter(x=>x.saving>0).sort((a,b)=>a.e.priority/a.saving-b.e.priority/b.saving);if(!candidates.length)throw new Error('Texture memory budget exceeded');candidates[0].e.cap/=2;}
 return {limitFor:(id,normal=false)=>entries.get((normal?'normal:':'')+id)?.cap||1024,snapshot:()=>({requestedLimit:limit,budgetMiB:budgetBytes/1024**2,estimatedMiB:Math.round(total()/1024**2*10)/10,textures:[...entries.values()].map(e=>({id:e.id,normal:e.normal,source:[e.width,e.height],size:size(e)}))})};
}
