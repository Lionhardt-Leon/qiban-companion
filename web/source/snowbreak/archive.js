import {inspectArchive} from '../puppet2d/archive.js';
import {validateSkinManifest,createSkinRuntime} from './skin-runtime.js';
import {createVerifiedAssetAdapter} from './asset-adapter.js';
function parseCollection(input,expectedNames){
  let variants=null;
  if(input.schema==='snowbreak-collection/1'||input.schema==='snowbreak-chibi-collection/1'){
    const isChibiCol=input.schema==='snowbreak-chibi-collection/1';
    if(!/^[A-Za-z0-9_-]{1,64}$/.test(input.characterId)||!Array.isArray(input.variants)||(isChibiCol?(input.variants.length<1||input.variants.length>16):![1,2,4].includes(input.variants.length)))throw new Error('Invalid character collection');
    const ids=new Set();variants=input.variants.map(v=>{
      const validOutfit=isChibiCol?/^[a-z0-9_]{1,32}$/.test(v.outfit):['normal','nude','underwear','lv2'].includes(v.outfit);
      const validMode=isChibiCol?v.mode==='standing':['standing','interaction'].includes(v.mode);
      if(!validMode||!validOutfit||v.id!==v.mode+'_'+v.outfit||ids.has(v.id))throw new Error('Invalid collection variant');
      ids.add(v.id);return {...v,manifest:validateSkinManifest(v.manifest)};
    });
    if(!ids.has(input.defaultVariant)||variants.some(v=>v.manifest.characterId!==input.characterId))throw new Error('Invalid collection default');
  }
  const manifests=variants?variants.map(v=>v.manifest):[validateSkinManifest(input)];
  const expected=new Set(['manifest.json',...manifests.flatMap(m=>m.resources.map(r=>'assets/'+r.assetId))]);
  if(expected.size!==expectedNames.size||[...expected].some(n=>!expectedNames.has(n)))throw new Error('缺失或多余资产');
  return {variants,manifests};
}
export async function openStreamingSkinArchive(packageName,baseOrigin='companion-snowbreak://local'){
  const indexRes=await fetch(baseOrigin+'/pkg-index/'+encodeURIComponent(packageName));
  if(!indexRes.ok){const err=new Error('流式角色包索引读取失败');err.status=indexRes.status;throw err;}
  const index=await indexRes.json();
  if(!Array.isArray(index.names)||!index.manifest||typeof index.total!=='number'||index.total>1536*1024*1024)throw new Error('角色包索引格式或大小非法');
  const input=index.manifest;
  const {variants,manifests}=parseCollection(input,new Set(index.names));
  async function readRemoteAsset(assetId){
    const res=await fetch(baseOrigin+'/pkg-entry/'+encodeURIComponent(packageName)+'/'+assetId);
    if(!res.ok)throw new Error('资源读取失败：'+assetId.slice(0,12));
    return new Uint8Array(await res.arrayBuffer());
  }
  async function selectVariant(id){
    const selected=variants?.find(v=>v.id===id);if(variants&&!selected)throw new Error('Variant unavailable');
    const manifest=selected?.manifest||manifests[0],runtime=createSkinRuntime(createVerifiedAssetAdapter(readRemoteAsset));
    await runtime.load(manifest);return {runtime,manifest,selection:selected?{id:selected.id,mode:selected.mode,outfit:selected.outfit,...(selected.label?{label:selected.label}:{})}:null,variants:variants?.map(({id,mode,outfit,label})=>({id,mode,outfit,...(label?{label}:{})}))||[],selectVariant};
  }
  let saved;try{saved=localStorage.getItem(input.characterId.toLowerCase()+'-collection-selection');}catch{}
  return selectVariant(variants?.some(v=>v.id===saved)?saved:input.defaultVariant);
}
export async function openSkinArchive(bytes){
  const info=inspectArchive(bytes,/^(manifest\.json|assets\/[a-f0-9]{64})$/,1024*1024*1024,1536*1024*1024);
  const {inflateSync}=await import('/vendor/addons/libs/fflate.module.js');
  function readEntry(name){
    const entry=info.entries.get(name);if(!entry)throw new Error('缺少资源：'+name);
    const slice=bytes.subarray(entry.offset,entry.offset+entry.compressed);
    const out=entry.method===0?slice.slice():inflateSync(slice);
    if(out.length!==entry.original)throw new Error('资源包长度不一致');
    return out;
  }
  const input=JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(readEntry('manifest.json')));
  const {variants,manifests}=parseCollection(input,info.names);
  async function selectVariant(id){
    const selected=variants?.find(v=>v.id===id);if(variants&&!selected)throw new Error('Variant unavailable');
    const manifest=selected?.manifest||manifests[0],runtime=createSkinRuntime(createVerifiedAssetAdapter(async assetId=>readEntry('assets/'+assetId)));
    await runtime.load(manifest);return {runtime,manifest,selection:selected?{id:selected.id,mode:selected.mode,outfit:selected.outfit,...(selected.label?{label:selected.label}:{})}:null,variants:variants?.map(({id,mode,outfit,label})=>({id,mode,outfit,...(label?{label}:{})}))||[],selectVariant};
  }
  let saved;try{saved=localStorage.getItem(input.characterId.toLowerCase()+'-collection-selection');}catch{}
  return selectVariant(variants?.some(v=>v.id===saved)?saved:input.defaultVariant);
}
