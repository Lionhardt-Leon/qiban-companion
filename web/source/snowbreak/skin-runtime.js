// Loading lifecycle only. Rendering and actions belong to the host adapter /
// existing ActionBus; this module never declares original interaction complete.
const ID=/^[a-zA-Z0-9_-]{1,96}$/;
const ASSET=/^[a-f0-9]{64}$/;
const KINDS=new Set(['geometry','animation','texture','audio','config']);
export function validateSkinManifest(input){
  if(input?.schema!=='snowbreak-skin/1'||!ID.test(input.characterId)||!ID.test(input.skinId))throw new Error('Invalid skin identity');
  if(!Array.isArray(input.resources)||!input.resources.length||input.resources.length>256)throw new Error('Invalid resource count');
  const roles=new Set();
  const resources=input.resources.map(r=>{
    if(!ID.test(r.role)||roles.has(r.role)||!ASSET.test(r.assetId)||!KINDS.has(r.kind))throw new Error('Invalid resource identity');
    roles.add(r.role);return {role:r.role,assetId:r.assetId,kind:r.kind};
  });
  if(!resources.some(r=>r.role==='body'&&r.kind==='geometry'))throw new Error('Missing body geometry');
  return {schema:input.schema,characterId:input.characterId,skinId:input.skinId,resources};
}

export function createSkinRuntime({loadAsset,disposeAsset,onDisposeError=()=>{}}){
  if(typeof loadAsset!=='function'||typeof disposeAsset!=='function')throw new Error('Asset adapter required');
  let generation=0,current=null,pending=null,disposed=false;
  async function release(resources){
    const results=await Promise.allSettled(resources.map(({asset,descriptor})=>Promise.resolve().then(()=>disposeAsset(asset,descriptor))));
    for(const result of results)if(result.status==='rejected'){try{onDisposeError(result.reason);}catch{}}
  }
  async function load(input){
    if(disposed)throw new Error('Runtime disposed');
    const manifest=validateSkinManifest(input); // Invalid selections preserve current model.
    const ticket=++generation;
    pending?.abort();const controller=new AbortController();pending=controller;
    const settled=await Promise.allSettled(manifest.resources.map(descriptor=>
      Promise.resolve().then(()=>loadAsset(descriptor,{signal:controller.signal}))));
    const loaded=settled.flatMap((r,i)=>r.status==='fulfilled'?[{asset:r.value,descriptor:manifest.resources[i]}]:[]);
    const failed=settled.find(r=>r.status==='rejected');
    if(ticket!==generation||disposed||failed){
      await release(loaded);
      if(ticket===generation)pending=null;
      if(ticket!==generation||disposed)return {accepted:false,reason:'superseded'};
      throw failed.reason;
    }
    const previous=current;
    current={manifest,resources:loaded};pending=null;
    if(previous)await release(previous.resources);
    if(ticket!==generation||disposed)return {accepted:false,reason:'superseded'};
    return {accepted:true,characterId:manifest.characterId,skinId:manifest.skinId};
  }
  async function clear(){
    generation++;pending?.abort();pending=null;
    const previous=current;current=null;if(previous)await release(previous.resources);
  }
  return {load,clear,getAsset:role=>current?.resources.find(r=>r.descriptor.role===role)?.asset,
    async dispose(){disposed=true;await clear();},
    get current(){return current?{characterId:current.manifest.characterId,skinId:current.manifest.skinId,
      resources:current.resources.map(r=>({...r.descriptor})),originalInteractionVerified:false}:null;}};
}
