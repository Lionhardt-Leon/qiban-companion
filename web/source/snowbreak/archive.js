import {inspectArchive} from '../puppet2d/archive.js';
import {validateSkinManifest,createSkinRuntime} from './skin-runtime.js';
import {createVerifiedAssetAdapter} from './asset-adapter.js';
export async function openSkinArchive(bytes){
  const info=inspectArchive(bytes,/^(manifest\.json|assets\/[a-f0-9]{64})$/,256*1024*1024,384*1024*1024);
  const {inflateSync}=await import('/vendor/addons/libs/fflate.module.js');
  function readEntry(name){
    const entry=info.entries.get(name);if(!entry)throw new Error('缺少资源：'+name);
    const slice=bytes.subarray(entry.offset,entry.offset+entry.compressed);
    const out=entry.method===0?slice.slice():inflateSync(slice);
    if(out.length!==entry.original)throw new Error('资源包长度不一致');
    return out;
  }
  const input=JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(readEntry('manifest.json')));
  let variants=null;
  if(input.schema==='snowbreak-collection/1'){
    if(!/^[A-Za-z0-9_-]{1,64}$/.test(input.characterId)||!Array.isArray(input.variants)||![1,2,4].includes(input.variants.length))throw new Error('Invalid character collection');
    const ids=new Set();variants=input.variants.map(v=>{if(!['standing','interaction'].includes(v.mode)||!['normal','nude','underwear','lv2'].includes(v.outfit)||v.id!==v.mode+'_'+v.outfit||ids.has(v.id))throw new Error('Invalid collection variant');ids.add(v.id);return {...v,manifest:validateSkinManifest(v.manifest)};});
    if(!ids.has(input.defaultVariant)||variants.some(v=>v.manifest.characterId!==input.characterId))throw new Error('Invalid collection default');
  }
  const manifests=variants?variants.map(v=>v.manifest):[validateSkinManifest(input)];
  const expected=new Set(['manifest.json',...manifests.flatMap(m=>m.resources.map(r=>'assets/'+r.assetId))]);
  if(expected.size!==info.names.size||[...expected].some(n=>!info.names.has(n)))throw new Error('缺失或多余资产');
  async function selectVariant(id){
    const selected=variants?.find(v=>v.id===id);if(variants&&!selected)throw new Error('Variant unavailable');
    const manifest=selected?.manifest||manifests[0],runtime=createSkinRuntime(createVerifiedAssetAdapter(async assetId=>readEntry('assets/'+assetId)));
    await runtime.load(manifest);return {runtime,manifest,selection:selected?{id:selected.id,mode:selected.mode,outfit:selected.outfit}:null,variants:variants?.map(({id,mode,outfit})=>({id,mode,outfit}))||[],selectVariant};
  }
  let saved;try{saved=localStorage.getItem(input.characterId.toLowerCase()+'-collection-selection');}catch{}
  return selectVariant(variants?.some(v=>v.id===saved)?saved:input.defaultVariant);
}
