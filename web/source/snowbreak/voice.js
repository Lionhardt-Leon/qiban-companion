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
  if(config?.schema!=='snowbreak-voice-catalog/1'||config.characterId!==runtime.current.characterId||config.originalSyncVerified!==false||!Array.isArray(config.samples)||!config.samples.length||config.samples.length>8||!['snowbreak-sample-catalog/1','snowbreak-sample-catalog/2'].includes(catalog?.schema)||config.defaultId!==catalog.defaultId||!/^[a-f0-9]{64}$/.test(config.sourceTableSha256)||config.sourceTableSha256!==catalog.sourceTableSha256)throw new Error('Invalid voice catalog');
  const ids=new Set(),entries=[];
  for(const item of config.samples){
    const sample=catalog.samples.find(s=>s.id===item.id),asset=runtime.getAsset(item.assetRole);
    if(ids.has(item.id)||!sample||sample.sourceShowElementId!==item.sourceShowElementId||asset?.kind!=='audio'||item.language!=='Chinese'||item.originalSyncVerified!==false||!Number.isInteger(item.eventId)||item.eventId<=0||!Number.isInteger(item.voiceCharacterId)||item.voiceCharacterId<=0||typeof item.voiceId!=='string'||item.voiceId.length>64)throw new Error('Voice sample identity mismatch');
    ids.add(item.id);entries.push({id:item.id,asset});
  }
  if(!ids.has(config.defaultId))throw new Error('Missing default voice');
  const results=await Promise.allSettled(entries.map(item=>createOriginalVoice(item.asset))),voices=new Map(),failures=[];
  for(let i=0;i<results.length;i++){const result=results[i];if(result.status==='fulfilled')voices.set(entries[i].id,result.value);else failures.push(entries[i].id);}
  return {get audio(){return voices.get(config.defaultId)?.audio||null;},getAudio:id=>voices.get(id)?.audio||null,failures,
    snapshot:()=>({available:[...voices.keys()],failures:[...failures],originalSyncVerified:false}),
    dispose(){for(const voice of voices.values())voice.dispose();voices.clear();}};
}
