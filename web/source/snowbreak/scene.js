import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

export function sceneTransform(value){
  const valid=(a,n,limit)=>Array.isArray(a)&&a.length===n&&a.every(x=>Number.isFinite(x)&&Math.abs(x)<=limit);
  if(!value||!valid(value.position,3,1000)||!valid(value.quaternion,4,1.01)||!valid(value.scale,3,20)||value.scale.some(x=>x<.001)||Math.abs(value.quaternion.reduce((n,x)=>n+x*x,0)-1)>.001)throw new Error('Invalid scene transform');
  return new THREE.Matrix4().compose(new THREE.Vector3(...value.position),new THREE.Quaternion(...value.quaternion).normalize(),new THREE.Vector3(...value.scale));
}

export async function createLocalScene(runtime,parent,prepare){
  const config=runtime.getAsset('localScene')?.data;
  if(!config)return {root:null,setVisible(){},setRoomVisible(){},setCutaway(){},updateView(){},snapshot:()=>({available:false,originalSceneVerified:false})};
  if(!['snowbreak-local-scene/1','snowbreak-local-scene/2'].includes(config.schema)||config.characterId!==runtime.current.characterId||config.originalSceneVerified!==false||!/^[a-f0-9]{64}$/.test(config.sourceMapSha256)||!Array.isArray(config.objects)||!config.objects.length||config.objects.length>16)throw new Error('Invalid local scene');
  const inverse=sceneTransform(config.characterWorld).invert(),root=new THREE.Group(),room=new THREE.Group(),ids=new Set(),items=[],cutawayMaterials=[],furnitureMeshes=[];
  const anchors=new Map();let activeAnchor=null;
  if(config.schema==='snowbreak-local-scene/2'){
    if(!Array.isArray(config.anchors)||!config.anchors.length||config.anchors.length>16)throw new Error('Invalid scene anchors');
    for(const a of config.anchors){if(typeof a.id!=='string'||!/^[a-zA-Z0-9_-]{1,64}$/.test(a.id)||anchors.has(a.id)||!Number.isFinite(a.viewYawDegrees)||Math.abs(a.viewYawDegrees)>180)throw new Error('Invalid scene anchor');anchors.set(a.id,{inverse:sceneTransform(a.characterWorld).invert(),viewYawDegrees:a.viewYawDegrees});}
    if(!anchors.has(config.defaultAnchorId))throw new Error('Missing default scene anchor');
  }
  root.add(room);const cutPlane=new THREE.Plane();let cutaway=true;
  for(const item of config.objects){
    const asset=runtime.getAsset(item.assetRole);
    if(typeof item.id!=='string'||!/^[a-zA-Z0-9_-]{1,96}$/.test(item.id)||ids.has(item.id)||asset?.kind!=='geometry')throw new Error('Invalid scene object');
    if((item.group!==undefined&&!['room','furniture'].includes(item.group))||(item.cutaway!==undefined&&typeof item.cutaway!=='boolean'))throw new Error('Invalid scene display group');
    ids.add(item.id);
    const matrix=inverse.clone().multiply(sceneTransform(item.world)),part=(await new GLTFLoader().parseAsync(asset.bytes.slice().buffer,'')).scene;
    let triangles=0;part.traverse(m=>{if(m.isSkinnedMesh)throw new Error('Animated scene needs a separate binding');if(m.isMesh)triangles+=(m.geometry.index?.count||m.geometry.attributes.position.count)/3;});
    const holder=new THREE.Group();holder.name=item.id;holder.matrixAutoUpdate=false;holder.matrix.copy(matrix);holder.add(part);(item.group==='room'?room:root).add(holder);prepare(part);
    part.traverse(m=>{if(m.isMesh){if(item.group==='room')m.material.side=THREE.FrontSide;if(item.cutaway){m.material.clippingPlanes=[cutPlane];if(config.schema==='snowbreak-local-scene/2'&&item.group==='furniture')m.material.side=THREE.DoubleSide;cutawayMaterials.push(m.material);}if(item.group==='room'||item.cutaway)m.material.needsUpdate=true;}});
    if(item.group!=='room')part.traverse(mesh=>{if(mesh.isMesh)furnitureMeshes.push(mesh);});
    items.push({id:item.id,assetRole:item.assetRole,group:item.group||'furniture',cutaway:!!item.cutaway,triangles,matrix:matrix.toArray(),holder,world:sceneTransform(item.world)});
  }
  parent.add(root);root.updateMatrixWorld(true);
  // Character framing can put the camera outside a closed room. Clip only the
  // foreground walls/curtains, keeping source meshes/transforms, floor, bed and character.
  // Recompute on camera/framing changes; no per-frame vertex scan is needed.
  function updateView(camera,focus){
    if(!cutawayMaterials.length)return;
    const towards=camera.position.clone().sub(focus),distance=towards.length();if(distance<.001)return;
    towards.divideScalar(distance);const point=focus.clone().addScaledVector(towards,Math.min(config.schema==='snowbreak-local-scene/2'?.08:.65,distance*.5));
    cutPlane.setFromNormalAndCoplanarPoint(towards.negate(),point);
  }
  function setCutaway(value){const next=!!value;if(next===cutaway)return;cutaway=next;for(const material of cutawayMaterials){material.clippingPlanes=cutaway?[cutPlane]:null;material.needsUpdate=true;}}
  const heights=new Map(),ray=new THREE.Raycaster(),up=new THREE.Vector3(0,1,0);
  function setAnchor(id){
    if(!anchors.size)return null;const anchor=anchors.get(id);if(!anchor)throw new Error('Unknown source scene anchor');
    if(activeAnchor!==id){activeAnchor=id;for(const item of items){item.holder.matrix.copy(anchor.inverse).multiply(item.world);item.matrix=item.holder.matrix.toArray();}root.updateWorldMatrix(true,true);heights.clear();}
    return anchor.viewYawDegrees;
  }
  if(anchors.size)setAnchor(config.defaultAnchorId);
  function contactSurface(worldPoint){
    if(!root.visible)return null;root.updateWorldMatrix(true,true);const point=root.worldToLocal(worldPoint.clone()),key=Math.round(point.x/.015)+':'+Math.round(point.z/.015);let height=heights.get(key);
    if(height===undefined){const box=new THREE.Box3().setFromObject(root).applyMatrix4(root.matrixWorld.clone().invert()),origin=root.localToWorld(new THREE.Vector3(point.x,box.max.y+.3,point.z)),direction=up.clone().transformDirection(root.matrixWorld).negate();ray.set(origin,direction);height=null;
      for(const hit of ray.intersectObjects(furnitureMeshes,false)){const normal=hit.face?.normal.clone().transformDirection(hit.object.matrixWorld);if(normal&&Math.abs(normal.dot(direction))>.65){height=root.worldToLocal(hit.point.clone()).y;break;}}
      heights.set(key,height);if(heights.size>512)heights.delete(heights.keys().next().value);
    }
    return height===null?null:{clearance:point.y-height,normal:up.clone().transformDirection(root.matrixWorld),height};
  }
  return {root,contactSurface,setAnchor,hasCutaway:cutawayMaterials.length>0,updateView,setRoomVisible:value=>{room.visible=!!value;},setCutaway,setVisible:value=>{root.visible=!!value;},snapshot:()=>({available:true,visible:root.visible,activeAnchor,roomAvailable:room.children.length>0,roomVisible:room.visible,cutawayAvailable:cutawayMaterials.length>0,cutaway,clipPlane:[...cutPlane.normal.toArray(),cutPlane.constant],objects:items.map(({holder,world,...x})=>({...x,matrix:[...x.matrix]})),originalSceneVerified:false})};
}
