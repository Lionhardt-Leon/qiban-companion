import * as THREE from 'three';
import {weightedAnatomy} from './anatomy.js';
// Raycast the current skinned triangles, then test their actual texture alpha.
// Bone proximity is deliberately not treated as a semantic body-part label.
export function createSurfacePicker(root,camera,canvas,occluder=null){
  const ray=new THREE.Raycaster(),alphaIds=new WeakMap(),alphaTiles=new Map();let alphaID=0;
  const alphaCanvas=document.createElement('canvas');alphaCanvas.width=alphaCanvas.height=32;
  const alphaContext=alphaCanvas.getContext('2d',{willReadFrequently:true});
  function refineTorso(anatomy,point){
    if(!['torso','leg'].includes(anatomy?.id))return anatomy;
    const find=n=>root.getObjectByName(n),pos=n=>find(n)?.getWorldPosition(new THREE.Vector3());
    const pelvis=pos('Bip001-Pelvis'),neck=pos('Bip001-Neck'),left=pos('Bip001-L-UpperArm'),right=pos('Bip001-R-UpperArm'),head=pos('Bip001-Head'),eyeL=pos('EyeJoint_L'),eyeR=pos('EyeJoint_R');
    if(!pelvis||!neck||!left||!right||!head||!eyeL||!eyeR)return anatomy;
    const height=neck.distanceTo(pelvis);if(height<1e-5)return anatomy;
    const up=neck.clone().sub(pelvis).normalize(),across=right.clone().sub(left).normalize(),forward=new THREE.Vector3().crossVectors(across,up).normalize();
    const face=eyeL.add(eyeR).multiplyScalar(.5).sub(head);const dot=face.dot(forward);if(Math.abs(dot)<height*.002)return anatomy;if(dot<0)forward.negate();
    const delta=point.clone().sub(pelvis),y=delta.dot(up)/height,z=delta.dot(forward)/height,x=Math.abs(delta.dot(across))/height;
    if(x>.7)return anatomy;
    let id=null;
    if(y>-.4&&y<.16&&z<-.025)id='hips';
    else if(anatomy.id==='torso'){
      if(y>.45&&y<.95&&z>.06)id='chest';
      else if(y>.05&&y<.46&&z>.06)id='abdomen';
      else if(y>.16&&y<.95&&z<-.06)id='back';
    }
    return id?{id,confidence:.75,source:'rig-surface-estimate'}:anatomy;
  }
  function visible(mesh){for(let p=mesh;p;p=p.parent)if(!p.visible)return false;return true;}
  function alphaAt(map,uv){
    if(!map||!uv)return 1;
    try {
      const image=map.image,w=image.width,h=image.height;if(!w||!h||!alphaContext)return null;
      const p=uv.clone();map.transformUv(p);const x=Math.min(w-1,Math.max(0,Math.floor(p.x*w))),y=Math.min(h-1,Math.max(0,Math.floor(p.y*h))),tx=Math.floor(x/32)*32,ty=Math.floor(y/32)*32;
      if(!alphaIds.has(map))alphaIds.set(map,++alphaID);const key=alphaIds.get(map)+':'+tx+':'+ty;
      let alpha=alphaTiles.get(key);
      if(!alpha){alphaContext.clearRect(0,0,32,32);alphaContext.drawImage(image,tx,ty,Math.min(32,w-tx),Math.min(32,h-ty),0,0,Math.min(32,w-tx),Math.min(32,h-ty));const rgba=alphaContext.getImageData(0,0,32,32).data;alpha=new Uint8Array(1024);for(let i=0;i<1024;i++)alpha[i]=rgba[i*4+3];alphaTiles.set(key,alpha);if(alphaTiles.size>128)alphaTiles.delete(alphaTiles.keys().next().value);}
      else {alphaTiles.delete(key);alphaTiles.set(key,alpha);}
      return alpha[(y-ty)*32+x-tx]/255;
    }catch{return null;}
  }
  return (x,y)=>{
    const rect=canvas.getBoundingClientRect();if(!Number.isFinite(x)||!Number.isFinite(y)||!rect.width||!rect.height||x<rect.left||x>rect.right||y<rect.top||y>rect.bottom)return null;
    root.updateWorldMatrix(true,true);camera.updateMatrixWorld();const meshes=[];
    root.traverse(m=>{if(m.isMesh&&visible(m)){if(m.isSkinnedMesh){m.skeleton.update();m.computeBoundingSphere();m.computeBoundingBox();}meshes.push(m);}});
    const blockers=new Set();occluder?.traverse(m=>{if(m.isMesh&&visible(m)){meshes.push(m);blockers.add(m);}});
    ray.setFromCamera(new THREE.Vector2((x-rect.left)/rect.width*2-1,-(y-rect.top)/rect.height*2+1),camera);
    for(const hit of ray.intersectObjects(meshes,false)){
      const mesh=hit.object,material=mesh.material,alpha=alphaAt(mesh.userData.previewMap,hit.uv),threshold=material.alphaTest|| (material.transparent ? 0.1 : 0);
      if(material.clippingPlanes?.some(plane=>plane.distanceToPoint(hit.point)<0))continue;
      if(alpha!==null&&alpha<threshold)continue;
      if(blockers.has(mesh))return null;
      const ids=[hit.face.a,hit.face.b,hit.face.c],vertices=ids.map(i=>mesh.getVertexPosition(i,new THREE.Vector3())),local=mesh.worldToLocal(hit.point.clone());
      const bary=THREE.Triangle.getBarycoord(local,...vertices,new THREE.Vector3());
      const influences=[],skin=mesh.geometry.getAttribute('skinIndex'),weights=mesh.geometry.getAttribute('skinWeight');
      if(mesh.isSkinnedMesh&&skin&&weights&&bary)for(let v=0;v<3;v++)for(let j=0;j<4;j++)influences.push({name:mesh.skeleton.bones[skin.getComponent(ids[v],j)]?.name,weight:weights.getComponent(ids[v],j)*bary.getComponent(v)});
      return {mesh:mesh.userData.snowbreakSurfaceKey,triangle:hit.faceIndex,barycentric:bary?.toArray(),anatomy:refineTorso(weightedAnatomy(influences),hit.point),uv:hit.uv?.toArray()||null,point:hit.point.toArray(),distance:hit.distance,alphaVerified:alpha!==null,material:mesh.userData.snowbreakMaterialName};
    }
    return null;
  };
}

export const SURFACE_REGIONS={head:'头部',forehead:'额头',hair:'头发',left_cheek:'左脸颊',right_cheek:'右脸颊',left_shoulder:'左肩',right_shoulder:'右肩',face:'脸部',neck:'颈部',chest:'胸部',hips:'臀部',torso:'躯干',waist:'腰部',abdomen:'腹部',back:'背部',arm:'手臂',hand:'手',left_hand:'左手',right_hand:'右手',leg:'腿部',foot:'脚'};
export function surfaceKey(hit){if(!hit||typeof hit.mesh!=='string'||!Number.isInteger(hit.triangle)||hit.triangle<0)return null;return hit.mesh+':'+hit.triangle;}
export function classifySurface(hit,labels){
  const key=surfaceKey(hit),value=key&&labels[key],id=typeof value==='string'?value:value?.id;
  if(!hit?.alphaVerified)return null;
  if(value===undefined&&['weighted-skinned-triangle','rig-surface-estimate'].includes(hit.anatomy?.source)&&hit.anatomy.confidence>=.7&&Object.hasOwn(SURFACE_REGIONS,hit.anatomy.id))return {...hit.anatomy,label:SURFACE_REGIONS[hit.anatomy.id]+(hit.anatomy.source==='rig-surface-estimate'?'（骨骼估计）':''),group:hit.anatomy.id};
  if(!Object.hasOwn(SURFACE_REGIONS,id))return null;
  const anatomy=id==='left_hand'?{group:'hand',side:'left'}:id==='right_hand'?{group:'hand',side:'right'}:{group:id};
  if(typeof value==='string')return {id,label:SURFACE_REGIONS[id],...anatomy,confidence:1,source:'manual-skinned-triangle'};
  if(value?.source!=='vision-reviewed'||value.visible!==true||!Number.isFinite(value.confidence)||value.confidence<.7||value.confidence>1)return null;
  return {id,label:SURFACE_REGIONS[id],...anatomy,confidence:value.confidence,source:'vision-reviewed-skinned-triangle'};
}
