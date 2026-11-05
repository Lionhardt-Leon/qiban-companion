export function inspectTexture(bytes){
 const v=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);let width,height,mime;
 if(bytes.length>=33&&v.getUint32(0)===0x89504e47&&v.getUint32(4)===0x0d0a1a0a&&v.getUint32(8)===13&&v.getUint32(12)===0x49484452){
  width=v.getUint32(16);height=v.getUint32(20);mime='image/png';
 }else if(bytes.length>=26&&v.getUint32(0)===0x52494646&&v.getUint32(8)===0x57454250&&v.getUint32(4,true)+8===bytes.length){
  let encoded,canvas,at=12;
  while(at<bytes.length){
   if(at+8>bytes.length)throw new Error('Truncated WebP chunk');
   const type=v.getUint32(at),size=v.getUint32(at+4,true),start=at+8;
   if(start+size>bytes.length)throw new Error('WebP chunk outside asset');
   if(type===0x414e494d||type===0x414e4d46)throw new Error('Animated textures are not supported');
   if(type===0x56503858){
    if(size!==10||(bytes[start]&2))throw new Error('Invalid WebP canvas');
    const u24=i=>bytes[i]|bytes[i+1]<<8|bytes[i+2]<<16;canvas=[u24(start+4)+1,u24(start+7)+1];
   }
   if(type===0x5650384c){
    if(encoded||size<5||bytes[start]!==0x2f)throw new Error('Invalid lossless WebP');
    const bits=v.getUint32(start+1,true);if(bits>>>29)throw new Error('Unknown WebP version');
    encoded=[(bits&0x3fff)+1,((bits>>>14)&0x3fff)+1];
   }
   at=start+size+(size&1);
  }
  if(at!==bytes.length||!encoded||canvas&&canvas.some((n,i)=>n!==encoded[i]))throw new Error('Lossless WebP size mismatch');
  [width,height]=encoded;mime='image/webp';
 }else throw new Error('Texture must be PNG or lossless WebP');
 if(!width||!height||width>4096||height>4096)throw new Error('Texture dimensions exceed limit');
 return {width,height,mime};
}
