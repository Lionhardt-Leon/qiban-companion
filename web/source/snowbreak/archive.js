import {inspectArchive} from '../puppet2d/archive.js';
import {validateSkinManifest,createSkinRuntime} from './skin-runtime.js';
import {createVerifiedAssetAdapter} from './asset-adapter.js';
export async function openSkinArchive(bytes){
  const info=inspectArchive(bytes,/^(manifest\.json|assets\/[a-f0-9]{64})$/,128*1024*1024,192*1024*1024);
  const {unzipSync}=await import('/vendor/addons/libs/fflate.module.js');
  const files=unzipSync(bytes);
  if(Object.values(files).reduce((n,b)=>n+b.length,0)!==info.total)throw new Error('资源包长度不一致');
  const input=JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(files['manifest.json']));
  let variants=null;
  if(input.schema==='snowbreak-collection/1'){
    if(!['Enya','Fenny'].includes(input.characterId)||!Array.isArray(input.variants)||!(input.characterId==='Fenny'?[2,4]:[4]).includes(input.variants.length))throw new Error('Invalid character collection');
    const ids=new Set();variants=input.variants.map(v=>{if(!['standing','interaction'].includes(v.mode)||!(input.characterId==='Fenny'?['normal','underwear']:['normal','nude']).includes(v.outfit)||v.id!==v.mode+'_'+v.outfit||ids.has(v.id))throw new Error('Invalid collection variant');ids.add(v.id);return {...v,manifest:validateSkinManifest(v.manifest)};});
    if(!ids.has(input.defaultVariant)||variants.some(v=>v.manifest.characterId!==input.characterId))throw new Error('Invalid collection default');
  }
  const manifests=variants?variants.map(v=>v.manifest):[validateSkinManifest(input)];
  const expected=new Set(['manifest.json',...manifests.flatMap(m=>m.resources.map(r=>'assets/'+r.assetId))]);
  if(expected.size!==info.names.size||[...expected].some(n=>!info.names.has(n)))throw new Error('缺失或多余资产');
  async function selectVariant(id){
    const selected=variants?.find(v=>v.id===id);if(variants&&!selected)throw new Error('Variant unavailable');
    const manifest=selected?.manifest||manifests[0],runtime=createSkinRuntime(createVerifiedAssetAdapter(async id=>files['assets/'+id]));
    await runtime.load(manifest);return {runtime,manifest,selection:selected?{id:selected.id,mode:selected.mode,outfit:selected.outfit}:null,variants:variants?.map(({id,mode,outfit})=>({id,mode,outfit}))||[],selectVariant};
  }
  let saved;try{saved=localStorage.getItem(input.characterId.toLowerCase()+'-collection-selection');}catch{}
  return selectVariant(variants?.some(v=>v.id===saved)?saved:input.defaultVariant);
}
