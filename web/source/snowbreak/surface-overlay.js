import * as THREE from 'three';
import {classifySurface} from './surface.js';
export const SURFACE_COLORS={head:0xffd166,forehead:0xffd166,hair:0xddbb66,left_cheek:0xff8fa3,right_cheek:0xff8fa3,left_shoulder:0x00bbf9,right_shoulder:0x00bbf9,face:0xff8fa3,neck:0xf4c795,chest:0xf15bb5,hips:0xb19cd9,torso:0xd9a066,waist:0xe6b566,abdomen:0xff8c42,back:0x9b5de5,arm:0x00bbf9,hand:0x00f5d4,left_hand:0x00d6b4,right_hand:0x63ffe0,leg:0x90be6d,foot:0xfee440};
export function createSurfaceOverlay(root,scene,camera){
  const group=new THREE.Group();group.visible=false;scene.add(group);const sources=new Map();root.traverse(m=>{if(m.isMesh&&m.userData.snowbreakSurfaceKey)sources.set(m.userData.snowbreakSurfaceKey,m);});
  let labels={},enabled=false,dirty=true,batches=[],count=0,truncated=false;
  function clear(){for(const batch of batches){batch.overlay.geometry.dispose();batch.overlay.material.dispose();batch.overlay.removeFromParent();}batches=[];count=0;}
  function rebuild(){
    clear();truncated=false;const entries=new Map();
    for(const [key,value] of Object.entries(labels)){
      const match=/^(surface_\d+):(\d+)$/.exec(key);if(!match)continue;const source=sources.get(match[1]),triangle=Number(match[2]);if(!source)continue;
      const geometry=source.geometry,position=geometry.getAttribute('position'),index=geometry.index,uv=geometry.getAttribute('uv');
      const region=classifySurface({mesh:match[1],triangle,alphaVerified:true},{[key]:value});
      if(!region||triangle*3+2>=(index?index.count:position.count)||(source.userData.previewMap&&!uv))continue;
      if(count>=5000){truncated=true;continue;}count++;
      const batchKey=match[1]+':'+region.id;let entry=entries.get(batchKey);if(!entry){entry={source,region:region.id,vertices:[],keys:[]};entries.set(batchKey,entry);}
      entry.keys.push(key);for(let i=0;i<3;i++)entry.vertices.push(index?index.getX(triangle*3+i):triangle*3+i);
    }
    for(const entry of entries.values()){
      const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(new Float32Array(entry.vertices.length*3),3).setUsage(THREE.DynamicDrawUsage));
      const uv=entry.source.geometry.getAttribute('uv');if(uv){const data=new Float32Array(entry.vertices.length*2);entry.vertices.forEach((v,i)=>{data[i*2]=uv.getX(v);data[i*2+1]=uv.getY(v);});geometry.setAttribute('uv',new THREE.BufferAttribute(data,2));}
      const base=entry.source.material,material=new THREE.MeshBasicMaterial({color:SURFACE_COLORS[entry.region],map:entry.source.userData.previewMap||null,transparent:true,opacity:.7,alphaTest:(base.alphaTest||(base.transparent ? .1 : 0))*.7,depthTest:true,depthWrite:false,side:base.side,polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-1,toneMapped:false});
      const overlay=new THREE.Mesh(geometry,material);overlay.frustumCulled=false;overlay.renderOrder=100;group.add(overlay);batches.push({...entry,overlay});
    }
    dirty=false;
  }
  function visible(mesh){for(let p=mesh;p;p=p.parent)if(!p.visible)return false;return true;}
  function update(){
    group.visible=enabled;if(!enabled)return;if(dirty)rebuild();root.updateWorldMatrix(true,true);
    const vertex=new THREE.Vector3(),cache=new Map();
    for(const batch of batches){const {source,overlay}=batch;overlay.visible=visible(source);if(!overlay.visible)continue;source.updateMatrixWorld(true);if(source.isSkinnedMesh)source.skeleton.update();let positions=cache.get(source);if(!positions){positions=new Map();cache.set(source,positions);}
      const attribute=overlay.geometry.getAttribute('position');batch.vertices.forEach((v,i)=>{let point=positions.get(v);if(!point){source.getVertexPosition(v,vertex).applyMatrix4(source.matrixWorld);point=vertex.toArray();positions.set(v,point);}attribute.setXYZ(i,...point);});attribute.needsUpdate=true;
    }
  }
  function snapshot(){const first=batches.find(b=>b.overlay.visible),a=first?.overlay.geometry.getAttribute('position');return {enabled,triangles:count,truncated,first:first&&a?{key:first.keys[0],vertices:[0,1,2].map(i=>new THREE.Vector3().fromBufferAttribute(a,i).toArray()),screen:[0,1,2].map(i=>new THREE.Vector3().fromBufferAttribute(a,i).project(camera).toArray())}:null};}
  function hideForCapture(fn){const previous=group.visible;group.visible=false;try{return fn();}finally{group.visible=previous;}}
  return {set(next,on=enabled){labels=next;enabled=!!on;dirty=true;if(!enabled)clear();update();return snapshot();},update,snapshot,hideForCapture,dispose(){clear();group.removeFromParent();}};
}
