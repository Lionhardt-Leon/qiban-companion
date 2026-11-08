// Original unweighted UE rich curves. Unsupported curve types are rejected at
// import; no guessed eye animation or mapping to unrelated visemes is added.
export function evaluateMorphCurve(keys,time){
  if(time<=keys[0][0])return keys[0][1];
  if(time>=keys.at(-1)[0])return keys.at(-1)[1];
  let lo=0,hi=keys.length-1;
  while(hi-lo>1){const mid=(lo+hi)>>1;if(time<keys[mid][0])hi=mid;else lo=mid;}
  const a=keys[lo],b=keys[hi],dt=b[0]-a[0],t=(time-a[0])/dt;
  if(a[4]===0)return a[1];
  if(a[4]===1)return a[1]+(b[1]-a[1])*t;
  const t2=t*t,t3=t2*t;
  return (2*t3-3*t2+1)*a[1]+(t3-2*t2+t)*dt*a[3]+(-2*t3+3*t2)*b[1]+(t3-t2)*dt*b[2];
}

export function createMorphCurves(config,runtime,faceRoot){
  if(!config)return {apply(){},snapshot:()=>({available:false,originalExpressionFidelity:false})};
  if(config.schema!=='snowbreak-morph-curves/1'||config.characterId!==runtime.current.characterId||config.originalExpressionFidelity!==false||!Array.isArray(config.clips)||!config.clips.length||config.clips.length>24||!faceRoot)throw new Error('Invalid morph curve config');
  const clips=new Map(),sourceByClip=new WeakMap(),names=new Set();let totalKeys=0;
  for(const clip of config.clips){
    const resource=runtime.getAsset(clip.animationRole),descriptor=runtime.current.resources.find(r=>r.role===clip.animationRole);
    if(resource?.kind!=='animation'||clip.sourceSha256!==(resource.data.generatorMetadata?.sourceSha256||descriptor?.assetId)||!/^[a-f0-9]{64}$/.test(clip.sourceSha256)||clip.frames!==resource.data.frames||clip.fps!==resource.data.fps||!Array.isArray(clip.curves)||clip.curves.length>64)throw new Error('Morph curve animation mismatch');
    const alias=clips.get(clip.sourceSha256);
    if(alias){
      if(alias.frames!==clip.frames||alias.fps!==clip.fps||JSON.stringify(alias.curves)!==JSON.stringify(clip.curves))throw new Error('Conflicting morph curve alias');
      sourceByClip.set(resource.data,clip.sourceSha256);continue;
    }
    const unique=new Set();
    for(const curve of clip.curves){
      if(typeof curve.name!=='string'||!curve.name.length||curve.name.length>128||unique.has(curve.name)||!Array.isArray(curve.keys)||!curve.keys.length||curve.keys.length>4096)throw new Error('Invalid morph curve identity');
      unique.add(curve.name);names.add(curve.name);let previous=-Infinity;
      for(const key of curve.keys){
        // Source curves may retain negative preroll keys. They affect the
        // Hermite segment crossing t=0 and must not be shifted or discarded.
        if(!Array.isArray(key)||key.length!==5||!key.every(Number.isFinite)||key[0]<-120||key[0]>120||key[0]<=previous||Math.abs(key[1])>4||Math.abs(key[2])>1e6||Math.abs(key[3])>1e6||![0,1,2].includes(key[4]))throw new Error('Invalid morph curve key');
        previous=key[0];if(++totalKeys>100000)throw new Error('Morph curve key limit');
      }
    }
    clips.set(clip.sourceSha256,clip);sourceByClip.set(resource.data,clip.sourceSha256);
  }
  const targets=[];
  faceRoot.traverse(mesh=>{
    if(!mesh.isMesh||!mesh.morphTargetDictionary||!mesh.morphTargetInfluences)return;
    const indices=new Map();
    for(const name of names){const index=mesh.morphTargetDictionary[name];if(index!==undefined){if(!Number.isInteger(index)||index<0||index>=mesh.morphTargetInfluences.length)throw new Error('Invalid morph target index');indices.set(name,index);}}
    if(indices.size)targets.push({mesh,indices});
  });
  if([...names].some(name=>!targets.some(t=>t.indices.has(name))))throw new Error('Missing exact morph target');
  let active=null,time=0,values={};
  function apply(faceClip,seconds){
    time=seconds;active=faceClip?sourceByClip.get(faceClip)||null:null;values={};
    const clip=clips.get(active);
    for(const curve of clip?.curves||[])values[curve.name]=evaluateMorphCurve(curve.keys,seconds);
    // Clear omitted curves when changing clips (idle has fewer eye channels).
    for(const {mesh,indices} of targets)for(const [name,index] of indices)mesh.morphTargetInfluences[index]=values[name]??0;
  }
  return {apply,snapshot:()=>({available:true,clips:clips.size,targets:names.size,boundMeshes:targets.length,totalKeys,activeSource:active,time,values:{...values},weights:targets.map(({mesh,indices})=>Object.fromEntries([...indices].map(([name,index])=>[name,mesh.morphTargetInfluences[index]]))),originalExpressionFidelity:false})};
}
