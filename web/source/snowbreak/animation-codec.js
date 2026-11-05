// Preserve sampled float32 values while avoiding repeated constant transforms in files.
export function decodeAnimation(data){
 if(!Number.isInteger(data?.frames)||data.frames<2||data.frames>1800||!Number.isFinite(data.fps)||data.fps<=0||data.fps>120||!Array.isArray(data.tracks)||!data.tracks.length||data.tracks.length>512)throw new Error('Invalid animation bounds');
 if(data.encoding===undefined)return data;
 if(data.encoding!=='snowbreak-f32-tracks/1')throw new Error('Unknown animation encoding');
 let decodedBytes=0;const names=new Set();
 const tracks=data.tracks.map(t=>{
  if(typeof t.bone!=='string'||!t.bone.length||t.bone.length>128||names.has(t.bone))throw new Error('Invalid compact animation bone');names.add(t.bone);
  let keys;
  if(t.constant!==undefined){
   if(t.values!==undefined||!Array.isArray(t.constant)||t.constant.length!==10||!t.constant.every(Number.isFinite))throw new Error('Invalid constant transform');
   const key=Float32Array.from(t.constant);decodedBytes+=40;keys=Array(data.frames).fill(key);
  }else{
   const size=data.frames*40;if(typeof t.values!=='string'||t.values.length!==4*Math.ceil(size/3))throw new Error('Invalid packed transform size');
   const bytes=Uint8Array.from(atob(t.values),v=>v.charCodeAt(0));if(bytes.length!==size)throw new Error('Truncated animation track');
   const values=new Float32Array(bytes.buffer);if(!values.every(Number.isFinite))throw new Error('Non-finite packed transform');decodedBytes+=size;keys=Array.from({length:data.frames},(_,i)=>values.subarray(i*10,i*10+10));
  }
  if(decodedBytes>32*1024*1024)throw new Error('Decoded animation exceeds limit');
  return {bone:t.bone,parent:t.parent,keys};
 });return {...data,tracks};
}
