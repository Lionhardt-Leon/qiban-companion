export async function createOriginalVoice(asset){
  if(asset?.kind!=='audio')throw new Error('Missing original voice');
  const url=URL.createObjectURL(new Blob([asset.bytes],{type:'audio/wav'})),audio=new Audio();audio.preload='auto';
  try{await new Promise((resolve,reject)=>{const timer=setTimeout(()=>{cleanup();reject(new Error('Voice metadata timeout'));},10000);const cleanup=()=>{clearTimeout(timer);audio.removeEventListener('loadedmetadata',loaded);audio.removeEventListener('error',failed);};const loaded=()=>{cleanup();resolve();},failed=()=>{cleanup();reject(new Error('Voice decode failed'));};audio.addEventListener('loadedmetadata',loaded);audio.addEventListener('error',failed);audio.src=url;audio.load();});
    if(!Number.isFinite(audio.duration)||audio.duration<=0)throw new Error('Invalid voice duration');
    return {audio,dispose(){audio.pause();audio.removeAttribute('src');audio.load();URL.revokeObjectURL(url);}};
  }catch(e){audio.removeAttribute('src');audio.load();URL.revokeObjectURL(url);throw e;}
}

export async function createOriginalVoiceCatalog(runtime){
  const config=runtime.getAsset('voiceCatalog')?.data,catalog=runtime.getAsset('sampleCatalog')?.data;
  if(config?.schema==='snowbreak-voice-catalog/2')return createBilingualVoiceCatalog(runtime,config,catalog);
  if(config?.schema!=='snowbreak-voice-catalog/1'||config.characterId!==runtime.current.characterId||config.originalSyncVerified!==false||!Array.isArray(config.samples)||!config.samples.length||config.samples.length>24||!['snowbreak-sample-catalog/1','snowbreak-sample-catalog/2'].includes(catalog?.schema)||config.defaultId!==catalog.defaultId||!/^[a-f0-9]{64}$/.test(config.sourceTableSha256)||config.sourceTableSha256!==catalog.sourceTableSha256)throw new Error('Invalid voice catalog');
  const ids=new Set(),entries=[];
  for(const item of config.samples){
    const sample=catalog.samples.find(s=>s.id===item.id),asset=runtime.getAsset(item.assetRole);
    if(ids.has(item.id)||!sample||sample.sourceShowElementId!==item.sourceShowElementId||asset?.kind!=='audio'||item.language!=='Chinese'||item.originalSyncVerified!==false||!Number.isInteger(item.eventId)||item.eventId<=0||!Number.isInteger(item.voiceCharacterId)||item.voiceCharacterId<=0||typeof item.voiceId!=='string'||item.voiceId.length>64)throw new Error('Voice sample identity mismatch');
    ids.add(item.id);entries.push({id:item.id,asset});
  }
  if(config.events!==undefined){if(!Array.isArray(config.events)||config.events.length>24)throw new Error('Invalid interaction voice events');for(const item of config.events){const asset=runtime.getAsset(item.assetRole);if(ids.has(item.id)||asset?.kind!=='audio'||!Number.isInteger(item.eventId)||item.eventId<=0||item.language!=='Chinese')throw new Error('Invalid interaction voice');ids.add(item.id);entries.push({id:item.id,asset});}}
  if(!ids.has(config.defaultId))throw new Error('Missing default voice');
  const results=await Promise.allSettled(entries.map(item=>createOriginalVoice(item.asset))),voices=new Map(),failures=[];
  for(let i=0;i<results.length;i++){const result=results[i];if(result.status==='fulfilled')voices.set(entries[i].id,result.value);else failures.push(entries[i].id);}
  return {get audio(){return voices.get(config.defaultId)?.audio||null;},getAudio:id=>voices.get(id)?.audio||null,failures,
    snapshot:()=>({available:[...voices.keys()],failures:[...failures],originalSyncVerified:false}),
    dispose(){for(const voice of voices.values())voice.dispose();voices.clear();}};
}

async function createBilingualVoiceCatalog(runtime,config,catalog){
  if(config.characterId!==runtime.current.characterId||config.originalSyncVerified!==false||!Number.isInteger(config.sourceSkinId)||config.sourceSkinId<=0||!Array.isArray(config.samples)||config.samples.length>64||!['snowbreak-sample-catalog/1','snowbreak-sample-catalog/2'].includes(catalog?.schema)||config.defaultId!==catalog.defaultId||!/^[a-f0-9]{64}$/.test(config.sourceTableSha256)||config.sourceTableSha256!==catalog.sourceTableSha256||!Array.isArray(config.events)||config.events.length>64)throw new Error('Invalid bilingual voice catalog');
  const groups=new Map(),identities=new Set(),assets=new Map(),voices=new Map(),failures=[];
  for(const [items,isSample] of [[config.samples,true],[config.events,false]])for(const item of items){
    const sample=catalog.samples.find(s=>s.id===item.id),asset=runtime.getAsset(item.assetRole),descriptor=runtime.current.resources.find(r=>r.role===item.assetRole);
    if(typeof item.id!=='string'||!/^[a-zA-Z0-9_-]{1,64}$/.test(item.id)||asset?.kind!=='audio'||!descriptor||!['Chinese','Japanese'].includes(item.language)||item.sourceSkinId!==config.sourceSkinId||item.originalSyncVerified!==false||!Number.isInteger(item.eventId)||item.eventId<=0||item.eventId>0xffffffff||typeof item.voiceId!=='string'||!/^[a-zA-Z0-9_-]{1,64}$/.test(item.voiceId)||!Number.isFinite(item.weight)||item.weight<=0||item.weight>1000000||(isSample&&(!sample||!Number.isInteger(item.sourceShowElementId)||item.sourceShowElementId<=0||sample.sourceShowElementId!==item.sourceShowElementId)))throw new Error('Bilingual voice identity mismatch');
    const identity=item.language+':'+item.id+':'+item.eventId;if(identities.has(identity))throw new Error('Duplicate bilingual voice choice');identities.add(identity);
    const group=item.language+':'+item.id;if(!groups.has(group))groups.set(group,[]);groups.get(group).push({hash:descriptor.assetId,weight:item.weight,eventId:item.eventId});assets.set(descriptor.assetId,asset);
  }
  if(!identities.size)throw new Error('Empty bilingual voice catalog');
  const queue=[...assets];let next=0;
  await Promise.all(Array.from({length:Math.min(4,queue.length)},async()=>{while(next<queue.length){const [hash,asset]=queue[next++];try{voices.set(hash,await createOriginalVoice(asset));}catch{failures.push(hash);}}}));
  let language='Chinese',disposed=false;
  function stop(){for(const voice of voices.values()){voice.audio.pause();voice.audio.currentTime=0;}}
  function getAudio(id){
    if(disposed)return null;const choices=(groups.get(language+':'+id)||[]).filter(c=>voices.has(c.hash)),total=choices.reduce((n,c)=>n+c.weight,0);if(!choices.length||!Number.isFinite(total)||total<=0)return null;
    let pick=Math.random()*total;for(const choice of choices){pick-=choice.weight;if(pick<0)return voices.get(choice.hash).audio;}return voices.get(choices.at(-1).hash).audio;
  }
  return {get audio(){return getAudio(config.defaultId);},getAudio,stop,failures,setLanguage(value){if(!['Chinese','Japanese'].includes(value))throw new Error('Unsupported original voice language');if(language!==value){stop();language=value;}},
    snapshot:()=>({language,available:[...groups].filter(([key,items])=>key.startsWith(language+':')&&items.some(c=>voices.has(c.hash))).map(([key])=>key.slice(language.length+1)),failures:[...failures],originalSyncVerified:false}),
    dispose(){disposed=true;for(const voice of voices.values())voice.dispose();voices.clear();}};
}
