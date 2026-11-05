import * as THREE from 'three';
// Raycast the current skinned triangles, then test their actual texture alpha.
// Bone proximity is deliberately not treated as a semantic body-part label.
export function createSurfacePicker(root,camera,canvas,occluder=null){
  const ray=new THREE.Raycaster(),alphaCache=new WeakMap();
  function visible(mesh){for(let p=mesh;p;p=p.parent)if(!p.visible)return false;return true;}
  function alphaAt(map,uv){
    if(!map||!uv)return 1;let entry=alphaCache.get(map);
    if(!entry){try{const image=map.image,cv=document.createElement('canvas');cv.width=image.width;cv.height=image.height;const ctx=cv.getContext('2d',{willReadFrequently:true});ctx.drawImage(image,0,0);const rgba=ctx.getImageData(0,0,cv.width,cv.height).data,alpha=new Uint8Array(cv.width*cv.height);for(let i=0;i<alpha.length;i++)alpha[i]=rgba[i*4+3];entry={width:cv.width,height:cv.height,data:alpha};alphaCache.set(map,entry);cv.width=cv.height=1;}catch{return null;}}
    const p=uv.clone();map.transformUv(p);const x=Math.min(entry.width-1,Math.max(0,Math.floor(p.x*entry.width))),y=Math.min(entry.height-1,Math.max(0,Math.floor(p.y*entry.height)));
    return entry.data[y*entry.width+x]/255;
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
      return {mesh:mesh.userData.snowbreakSurfaceKey,triangle:hit.faceIndex,uv:hit.uv?.toArray()||null,point:hit.point.toArray(),distance:hit.distance,alphaVerified:alpha!==null,material:mesh.userData.snowbreakMaterialName};
    }
    return null;
  };
}

export const SURFACE_REGIONS={head:'头部',face:'脸部',chest:'胸部',abdomen:'腹部',back:'背部',arm:'手臂',hand:'手',left_hand:'左手',right_hand:'右手',leg:'腿部',foot:'脚'};
export function surfaceKey(hit){if(!hit||typeof hit.mesh!=='string'||!Number.isInteger(hit.triangle)||hit.triangle<0)return null;return hit.mesh+':'+hit.triangle;}
export function classifySurface(hit,labels){
  const key=surfaceKey(hit),value=key&&labels[key],id=typeof value==='string'?value:value?.id;
  if(!hit?.alphaVerified||!Object.hasOwn(SURFACE_REGIONS,id))return null;
  const anatomy=id==='left_hand'?{group:'hand',side:'left'}:id==='right_hand'?{group:'hand',side:'right'}:{group:id};
  if(typeof value==='string')return {id,label:SURFACE_REGIONS[id],...anatomy,confidence:1,source:'manual-skinned-triangle'};
  if(value?.source!=='vision-reviewed'||value.visible!==true||!Number.isFinite(value.confidence)||value.confidence<.7||value.confidence>1)return null;
  return {id,label:SURFACE_REGIONS[id],...anatomy,confidence:value.confidence,source:'vision-reviewed-skinned-triangle'};
}
