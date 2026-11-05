import {sha256Hex} from '../puppet2d/sha256.js';
import {inspectTexture} from '../../texture-format.js';
import {decodeAnimation} from './animation-codec.js';
const LIMITS={geometry:20,animation:32,texture:16,audio:8,config:2};
// readAsset resolves an opaque local ID; manifests never choose a URL or path.
export function createVerifiedAssetAdapter(readAsset){
  if(typeof readAsset!=='function')throw new Error('Local asset reader required');
  return {
    async loadAsset(descriptor,{signal}={}){
      const checkAbort=()=>{if(signal?.aborted)throw new DOMException('Asset load aborted','AbortError');};
      checkAbort();
      if(!/^[a-f0-9]{64}$/.test(descriptor.assetId)||!Object.hasOwn(LIMITS,descriptor.kind))throw new Error('Invalid asset descriptor');
      const raw=await readAsset(descriptor.assetId,{signal});checkAbort();
      const bytes=raw instanceof Uint8Array?raw:raw instanceof ArrayBuffer?new Uint8Array(raw):null;
      if(!bytes||!bytes.length||bytes.length>LIMITS[descriptor.kind]*1024*1024)throw new Error('Asset size/type limit');
      if(await sha256Hex(bytes)!==descriptor.assetId)throw new Error('Asset integrity mismatch');checkAbort();
      let data=null;
      if(descriptor.kind==='geometry'){
        const view=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);
        if(bytes.length<20||view.getUint32(0,true)!==0x46546c67||view.getUint32(4,true)!==2||view.getUint32(8,true)!==bytes.length)throw new Error('Invalid GLB');
        const length=view.getUint32(12,true);
        if(view.getUint32(16,true)!==0x4e4f534a||length>bytes.length-20)throw new Error('Invalid GLB JSON');
        const json=JSON.parse(new TextDecoder().decode(bytes.subarray(20,20+length)));
        if((json.buffers||[]).some(b=>b.uri)||(json.images||[]).some(i=>i.uri))throw new Error('External GLB resource rejected');
      }else if(descriptor.kind==='audio'){
        const text=new TextDecoder('ascii');if(bytes.length<12||text.decode(bytes.subarray(0,4))!=='RIFF'||text.decode(bytes.subarray(8,12))!=='WAVE')throw new Error('Invalid local WAV');
      }else if(descriptor.kind==='texture'){
        data=inspectTexture(bytes);
      }else if(descriptor.kind==='animation'||descriptor.kind==='config'){
        data=JSON.parse(new TextDecoder().decode(bytes));
        if(descriptor.kind==='animation')data=decodeAnimation(data);
      }
      return {kind:descriptor.kind,bytes,data};
    },
    disposeAsset(asset){asset.bytes=null;asset.data=null;}
  };
}
