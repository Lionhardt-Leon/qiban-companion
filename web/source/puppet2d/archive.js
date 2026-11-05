import { safeArchivePath, validatePuppetAsset, normalizeAsset } from './schema.js';
import { sha256Hex } from './sha256.js';
const LIMIT = { entries: 256, file: 32*1024*1024, total: 128*1024*1024, archive: 64*1024*1024, pixels: 64000000 };
const decoder = new TextDecoder('utf-8', { fatal:true });
export function inspectArchive(bytes, allowedPath = /^(manifest\.json|LICENSE\.txt|layers\/[a-z0-9_.-]+\.png)$/i,archiveLimit=LIMIT.archive,decodedLimit=LIMIT.total) {
  if(![LIMIT.total,192*1024*1024].includes(decodedLimit))throw new Error('资源包解压上限非法');
  if (![LIMIT.archive,128*1024*1024].includes(archiveLimit)||!(bytes instanceof Uint8Array) || bytes.length < 22 || bytes.length > archiveLimit) throw new Error('资源包大小非法');
  const d = new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);
  let eocd=-1;
  for(let i=bytes.length-22;i>=Math.max(0,bytes.length-65557);i--) if(d.getUint32(i,true)===0x06054b50 && i+22+d.getUint16(i+20,true)===bytes.length){eocd=i;break;}
  if(eocd<0 || d.getUint16(eocd+4,true) || d.getUint16(eocd+6,true)) throw new Error('不支持分卷或无效 ZIP');
  const count=d.getUint16(eocd+10,true), start=d.getUint32(eocd+16,true), size=d.getUint32(eocd+12,true);
  if(!count || count>LIMIT.entries || start+size!==eocd || d.getUint16(eocd+8,true)!==count) throw new Error('ZIP 目录或数量非法');
  const names=new Set(); let pos=start,total=0;
  for(let i=0;i<count;i++) {
    if(pos+46>eocd || d.getUint32(pos,true)!==0x02014b50) throw new Error('ZIP 目录损坏');
    const flags=d.getUint16(pos+8,true), method=d.getUint16(pos+10,true), n=d.getUint16(pos+28,true);
    const extra=d.getUint16(pos+30,true), comment=d.getUint16(pos+32,true), original=d.getUint32(pos+24,true);
    if(pos+46+n+extra+comment>eocd) throw new Error('ZIP 目录越界');
    const name=decoder.decode(bytes.subarray(pos+46,pos+46+n));
    if(!safeArchivePath(name) || names.has(name) || !allowedPath.test(name)) throw new Error('非法或重复资源路径');
    names.add(name); total+=original;
    const mode=d.getUint32(pos+38,true)>>>16;
    if((flags&1) || ![0,8].includes(method) || (mode&0xf000)===0xa000 || original>LIMIT.file || total>decodedLimit) throw new Error('加密、链接、压缩方式或解压大小不支持');
    if(name==='manifest.json' && original>1024*1024) throw new Error('manifest 过大');
    const local=d.getUint32(pos+42,true);
    if(local+30>start || d.getUint32(local,true)!==0x04034b50) throw new Error('ZIP 本地条目非法');
    const ln=d.getUint16(local+26,true),le=d.getUint16(local+28,true),compressed=d.getUint32(pos+20,true);
    if(local+30+ln+le+compressed>start || decoder.decode(bytes.subarray(local+30,local+30+ln))!==name) throw new Error('ZIP 本地目录不一致');
    pos+=46+n+extra+comment;
  }
  if(pos!==eocd || !names.has('manifest.json')) throw new Error('缺少 manifest');
  return { names, total };
}
function imageDataURL(bytes) {
  let s='';for(let i=0;i<bytes.length;i+=0x8000)s+=String.fromCharCode(...bytes.subarray(i,i+0x8000));
  return 'data:image/png;base64,'+btoa(s);
}
export async function loadPuppetArchive(bytes) {
  const info=inspectArchive(bytes);
  const { unzipSync } = await import('/vendor/addons/libs/fflate.module.js');
  const files=unzipSync(bytes);
  if(Object.values(files).reduce((a,b)=>a+b.length,0)!==info.total) throw new Error('ZIP 解压大小不一致');
  const asset=JSON.parse(decoder.decode(files['manifest.json']));
  const report=validatePuppetAsset(asset);
  if(!report.ok) throw new Error(report.errors.join('; '));
  let pixels=0;
  for(const layer of asset.layers) {
    if(!/^layers\/[a-z0-9_.-]+\.png$/i.test(layer.src) || !files[layer.src]) throw new Error('图层文件缺失');
    const data=files[layer.src], expected=asset.integrity?.[layer.src];
    if(!/^[a-f0-9]{64}$/.test(expected||'') || await sha256Hex(data)!==expected) throw new Error('图层 SHA-256 不匹配');
    const dv=new DataView(data.buffer,data.byteOffset,data.byteLength);
    if(data.length<33 || dv.getUint32(0)!==0x89504e47 || dv.getUint32(4)!==0x0d0a1a0a || dv.getUint32(12)!==0x49484452) throw new Error('PNG 头非法');
    const w=dv.getUint32(16),h=dv.getUint32(20);pixels+=w*h;
    if(!w || !h || w!==layer.w || h!==layer.h || pixels>LIMIT.pixels) throw new Error('PNG 尺寸/总像素超限');
    layer.src=imageDataURL(data);
  }
  return normalizeAsset(asset);
}
