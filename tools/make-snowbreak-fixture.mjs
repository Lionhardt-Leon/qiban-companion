import {zipSync,strToU8} from '../web/vendor/addons/libs/fflate.module.js';
import {createHash} from 'node:crypto';import fs from 'node:fs';
const parts=[],views=[],accessors=[];let length=0;
function add(array,type,count,componentType=5126){
  const bytes=Buffer.from(array.buffer),offset=length;parts.push(bytes);length+=bytes.length;
  if(length%4){const padding=Buffer.alloc(4-length%4);parts.push(padding);length+=padding.length;}
  views.push({buffer:0,byteOffset:offset,byteLength:bytes.length});
  const accessor={bufferView:views.length-1,componentType,count,type};
  if(type==='VEC3'&&accessors.length===0){accessor.min=[0,-.4,-.4];accessor.max=[0,.4,.4];}
  accessors.push(accessor);return accessors.length-1;
}
// The reused UE renderer faces GLB +X toward the camera, not GLB +Z.
const position=add(new Float32Array([0,-.4,-.4,0,.4,0,0,-.4,.4]),'VEC3',3);
const normal=add(new Float32Array([1,0,0,1,0,0,1,0,0]),'VEC3',3);
const joints=add(new Uint16Array(12),'VEC4',3,5123);
const weights=add(new Float32Array([1,0,0,0,1,0,0,0,1,0,0,0]),'VEC4',3);
const indices=add(new Uint16Array([0,1,2]),'SCALAR',3,5123);
const inverse=add(new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),'MAT4',1);
const gltf={asset:{version:'2.0'},scene:0,scenes:[{nodes:[0,1]}],nodes:[{mesh:0,skin:0},{name:'Bip001-Pelvis'}],
  meshes:[{primitives:[{attributes:{POSITION:position,NORMAL:normal,JOINTS_0:joints,WEIGHTS_0:weights},indices,material:0}]}],
  materials:[{name:'synthetic',pbrMetallicRoughness:{baseColorFactor:[.4,.7,1,1]}}],skins:[{joints:[1],inverseBindMatrices:inverse}],buffers:[{byteLength:length}],bufferViews:views,accessors};
let json=Buffer.from(JSON.stringify(gltf));json=Buffer.concat([json,Buffer.alloc((4-json.length%4)%4,32)]);
const bin=Buffer.concat(parts),header=Buffer.alloc(20),binHeader=Buffer.alloc(8);
header.writeUInt32LE(0x46546c67,0);header.writeUInt32LE(2,4);header.writeUInt32LE(28+json.length+bin.length,8);header.writeUInt32LE(json.length,12);header.writeUInt32LE(0x4e4f534a,16);
binHeader.writeUInt32LE(bin.length,0);binHeader.writeUInt32LE(0x004e4942,4);
const resources=[],files={};function resource(role,kind,bytes){const assetId=createHash('sha256').update(bytes).digest('hex');resources.push({role,kind,assetId});files['assets/'+assetId]=bytes;}
resource('body','geometry',Buffer.concat([header,json,binHeader,bin]));
const motion=new Float32Array([0,0,0,0,0,0,1,1,1,1,0,.02,0,0,0,0,1,1,1,1]);
resource('bodyAnimation','animation',strToU8(JSON.stringify({encoding:'snowbreak-f32-tracks/1',frames:2,fps:1,tracks:[{bone:'Bip001-Pelvis',values:Buffer.from(motion.buffer).toString('base64')}]})));
files['manifest.json']=strToU8(JSON.stringify({schema:'snowbreak-collection/1',characterId:'Enya',defaultVariant:'standing_normal',variants:['standing','interaction'].flatMap(mode=>['normal','nude'].map(outfit=>({id:mode+'_'+outfit,mode,outfit,manifest:{schema:'snowbreak-skin/1',characterId:'Enya',skinId:'synthetic_enya_'+mode+'_'+outfit,resources}})))}));
const bytes=zipSync(files,{level:0});
fs.writeFileSync('ios/Sources/SnowbreakFixture.swift',`#if DEBUG\nimport Foundation\nenum SnowbreakFixture {\n static var data:Data { Data(base64Encoded:"${Buffer.from(bytes).toString('base64')}")! }\n}\n#endif\n`);
