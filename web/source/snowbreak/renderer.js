import {createSceneInteractions} from './scene-interactions.js';
import {createSenses} from './senses.js';
import {createEmbodiedActions} from '../../embodied-actions.js';
import {quietIdleTrack} from '../../idle-stability.js';
import {characterMaterial,installCharacterLights} from '../../character-materials.js';
import {createLearnedMotions} from '../../learned-motions.js';
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {rotatorToGLBQuaternion} from './coordinates.js';
import {createSurfacePicker} from './surface.js';
import {createArmPreview} from './arm-ik.js';
import {createSurfaceOverlay} from './surface-overlay.js';
import {createLocalScene} from './scene.js';
import {validateTouchBindings} from './touch-reactions.js';
import {createMorphCurves} from './morph-curves.js';
import {cueMorphTargetNamesPlugin} from './gltf-morph-names.js';
export async function createSnowbreakRenderer(canvas,runtime){
  const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
  const scene=new THREE.Scene(),group=new THREE.Group(),characterGroup=new THREE.Group(),camera=new THREE.PerspectiveCamera(32,1,.01,100);group.rotation.y=-Math.PI/2;scene.add(group);group.add(characterGroup);
  const lighting=installCharacterLights(scene,renderer);
  let senses,sceneInteractions;let root,faceRoot,localScene,surfaceOverlay,framingBounds=null,sceneEnvelope=null,framingEvidence=null,activeFramingHash=null,disposed=false,onFrame=null,sampleTime=0;const bindings=[],geometries=new Set(),materials=new Set(),textures=new Set(),maps=new Map(),normalMaps=new Map(),states=new Map();
  const bodyBoneSet=new Set(),framingByClip=new Map();const rootLock=runtime.getAsset('rootMotionPolicy')?.data;
  let lastSkeletonUpdates=0,surfaceSequence=0,resizeCount=0,fitCount=0;let viewport=null,cachedBounds=null;
  let frame={scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1},autoYaw=0,bodyYaw=0,facingReference=null;
  function orient(){group.rotation.set(THREE.MathUtils.degToRad(frame.pitch),-Math.PI/2+autoYaw+THREE.MathUtils.degToRad(frame.yaw),THREE.MathUtils.degToRad(frame.roll));characterGroup.rotation.set(THREE.MathUtils.degToRad(modelFrame.pitch),THREE.MathUtils.degToRad(modelFrame.yaw+bodyYaw),THREE.MathUtils.degToRad(modelFrame.roll));group.updateMatrixWorld(true);}
  let modelFrame={scale:1,x:0,y:0,depth:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1};
  function setModelFrame(value){
    const next={...modelFrame,...value};if(Object.values(next).some(v=>!Number.isFinite(v)))throw new Error('Invalid character placement');
    for(const k of ['x','y','depth'])next[k]=THREE.MathUtils.clamp(next[k],-1.5,1.5);next.scale=THREE.MathUtils.clamp(next.scale,.3,4);next.yaw=THREE.MathUtils.clamp(next.yaw,-180,180);next.pitch=THREE.MathUtils.clamp(next.pitch,-65,65);next.roll=THREE.MathUtils.clamp(next.roll,-45,45);next.stretchX=next.stretchY=1;modelFrame=next;
    // Placement is independent of the room and the camera. Convert view axes
    // into the shared scene frame, then move only the character wrapper.
    group.updateWorldMatrix(true,false);camera.updateMatrixWorld();const offset=new THREE.Vector3(next.x,next.y,next.depth).applyQuaternion(camera.quaternion),inverse=group.matrixWorld.clone().invert();characterGroup.position.copy(offset.transformDirection(inverse).multiplyScalar(Math.hypot(next.x,next.y,next.depth)));characterGroup.scale.setScalar(next.scale);orient();return {...modelFrame};
  }
  function setFrame(next){
    const value={...frame,...next};for(const k of ['scale','x','y','yaw','pitch','roll','stretchX','stretchY'])if(!Number.isFinite(value[k]))throw new Error('Invalid framing');
    frame={scale:THREE.MathUtils.clamp(value.scale,.3,4),x:THREE.MathUtils.clamp(value.x,-1.5,1.5),y:THREE.MathUtils.clamp(value.y,-1.5,1.5),yaw:((value.yaw+180)%360+360)%360-180,pitch:THREE.MathUtils.clamp(value.pitch,-65,65),roll:THREE.MathUtils.clamp(value.roll,-45,45),stretchX:THREE.MathUtils.clamp(value.stretchX,.65,1.5),stretchY:THREE.MathUtils.clamp(value.stretchY,.65,1.5)};
    orient();fit();return {...frame};
  }
  function correctFacing(){if(!facingReference)return;group.rotation.y=-Math.PI/2;group.updateMatrixWorld(true);const q=facingReference.bone.getWorldQuaternion(new THREE.Quaternion()),v=facingReference.axis.clone().applyQuaternion(q);if(Math.hypot(v.x,v.z)>.1)autoYaw=facingReference.heading-Math.atan2(v.x,v.z);orient();}
  function faceViewer(){frame.yaw=0;correctFacing();fit();return {...frame};}
  function prepareMeshes(part){part.traverse(m=>{if(m.isBone)m.userData.bindLocalQuaternion=m.quaternion.toArray();if(!m.isMesh)return;geometries.add(m.geometry);for(const old of Array.isArray(m.material)?m.material:[m.material]){materials.add(old);for(const v of Object.values(old))if(v?.isTexture)textures.add(v);}
    const name=m.material.name,map=maps.get(name)||null,state=states.get(name)||{};m.userData.snowbreakSurfaceKey='surface_'+surfaceSequence++;m.userData.snowbreakMaterialName=name;m.userData.previewMap=map;
    if(state.transparent!==undefined&&typeof state.transparent!=='boolean')throw new Error('Invalid transparent override');if(state.renderOrder!==undefined&&(!Number.isInteger(state.renderOrder)||Math.abs(state.renderOrder)>100))throw new Error('Invalid material sorting');
    m.renderOrder=state.renderOrder||0;m.material=characterMaterial(name,map,normalMaps.get(name),state);materials.add(m.material);m.castShadow=m.isSkinnedMesh&&!state.transparent;m.receiveShadow=m.material.userData.profile==='cloth-or-room';});}
  function firstPose(part,clip){if(!clip)return;const tracks=new Map(clip.tracks.map(t=>[t.bone,t]));part.traverse(b=>{if(!b.isBone)return;const k=tracks.get(b.name)?.keys?.[0];if(!k||k.length!==10||!k.every(Number.isFinite))throw new Error('骨骼初始姿态缺失');b.position.fromArray(k);b.quaternion.fromArray(k,3);b.scale.fromArray(k,7);});}
  function bindClip(part,clip,target=bindings,upperOnly=false){if(!clip)return;const tracks=new Map(clip.tracks.map(t=>[t.bone,t]));if(tracks.size!==clip.tracks.length)throw new Error('Duplicate animation bones');part.traverse(b=>{if(!b.isBone||(part===root&&!bodyBoneSet.has(b))||(upperOnly&&!/^Bip001-(Spine[0-9]*|Neck|Head|[LR]-(Clavicle|UpperArm|Forearm|Hand|Finger[0-9]*))$/.test(b.name)))return;const track=tracks.get(b.name);if(upperOnly&&!track)return;if(!track||track.keys.length!==clip.frames||track.keys.some(k=>k.length!==10||!k.every(Number.isFinite)||Math.abs(k.slice(3,7).reduce((s,v)=>s+v*v,0)-1)>.05))throw new Error('Invalid bone animation');target.push({bone:b,track,clip});});}
  function dispose(){if(disposed)return;disposed=true;removeEventListener('resize',fit);renderer.setAnimationLoop(null);surfaceOverlay?.dispose();senses?.dispose();sceneInteractions?.dispose();lighting.dispose();for(const x of geometries)x.dispose();for(const x of materials)x.dispose();for(const x of textures)x.dispose();root?.removeFromParent();localScene?.root?.removeFromParent();renderer.dispose();}
  function fit(){if(disposed||!root)return;fitCount++;const w=canvas.clientWidth||innerWidth,h=canvas.clientHeight||innerHeight,ratio=Math.min(devicePixelRatio||1,3);
    if(!viewport||viewport.w!==w||viewport.h!==h||viewport.ratio!==ratio){renderer.setPixelRatio(ratio);renderer.setSize(w,h,false);viewport={w,h,ratio};resizeCount++;}camera.aspect=w/h;
    group.updateMatrixWorld(true);
    if(!framingBounds&&!cachedBounds){root.traverse(m=>{if(m.isSkinnedMesh){m.skeleton.update();m.computeBoundingBox();}});cachedBounds=new THREE.Box3().setFromObject(root).applyMatrix4(group.matrixWorld.clone().invert());}
    const box=(sceneEnvelope||framingBounds||cachedBounds).clone().applyMatrix4(group.matrixWorld),size=box.getSize(new THREE.Vector3()),c=box.getCenter(new THREE.Vector3());
    lighting.frame(box);
    const t=Math.tan(THREE.MathUtils.degToRad(16));let distance=Math.max(size.y/(2*t),size.x/(2*t*camera.aspect))*1.25+size.z;
    if(framingBounds){distance=0;for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z])distance=Math.max(distance,z-c.z+Math.max(Math.abs(x-c.x)/(t*camera.aspect),Math.abs(y-c.y)/t)*1.12);}
    camera.position.copy(c).add(new THREE.Vector3(0,0,distance));camera.lookAt(c);camera.zoom=sceneEnvelope?1.05:frame.scale;camera.setViewOffset(w,h,sceneEnvelope?0:-frame.x*w,sceneEnvelope?0:-frame.y*h,w,h);camera.updateProjectionMatrix();
    camera.projectionMatrix.elements[0]*=frame.stretchX;camera.projectionMatrix.elements[5]*=frame.stretchY;camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();localScene?.updateView(camera,c);
  }
  try{
  if(rootLock&&(rootLock.schema!=='snowbreak-home-root-lock/1'||rootLock.bone!=='Bip001'||!Array.isArray(rootLock.reference)||rootLock.reference.length!==2||!rootLock.reference.every(v=>Number.isFinite(v)&&Math.abs(v)<10)))throw new Error('Invalid home root motion policy');
    const config=runtime.getAsset('materials')?.data;
    if(config){
      if(config.schema!=='snowbreak-material-preview/1'||config.originalShaderVerified!==false||!Array.isArray(config.materials)||config.materials.length>64)throw new Error('Invalid material preview');
      const loaded=new Map();
      for(const item of config.materials){
        if(typeof item.name!=='string'||item.name.length>256||states.has(item.name))throw new Error('Invalid material identity');
        const state=item.renderState||{};if(state.alphaCutoff!==undefined&&(!Number.isFinite(state.alphaCutoff)||state.alphaCutoff<0||state.alphaCutoff>1))throw new Error('Invalid material alpha');
        if(state.doubleSided!==undefined&&typeof state.doubleSided!=='boolean')throw new Error('Invalid material sidedness');states.set(item.name,state);
        if(!item.diffuseAssetId)continue;
        const resource=runtime.getAsset('texture_'+item.diffuseAssetId);if(resource?.kind!=='texture')throw new Error('Missing local diffuse texture');
        let texture=loaded.get(item.diffuseAssetId);
        if(!texture){const url=URL.createObjectURL(new Blob([resource.bytes],{type:resource.data?.mime||'image/png'}));try{texture=await new THREE.TextureLoader().loadAsync(url);}finally{URL.revokeObjectURL(url);}const limit=localStorage.getItem('snowTextureLimit')==='2048'?2048:4096;if(texture.image.width>limit||texture.image.height>limit){const image=document.createElement('canvas'),ratio=Math.min(limit/texture.image.width,limit/texture.image.height);image.width=Math.round(texture.image.width*ratio);image.height=Math.round(texture.image.height*ratio);image.getContext('2d').drawImage(texture.image,0,0,image.width,image.height);texture.image=image;texture.needsUpdate=true;}texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=renderer.capabilities.getMaxAnisotropy();texture.flipY=false;loaded.set(item.diffuseAssetId,texture);textures.add(texture);}
        maps.set(item.name,texture);
        if(item.normalAssetId){
          if(!/^[a-f0-9]{64}$/.test(item.normalAssetId)||config.normalConvention!=='unreal-directx-green-down')throw new Error('Invalid normal texture declaration');
          const normalResource=runtime.getAsset('texture_'+item.normalAssetId);if(normalResource?.kind!=='texture')throw new Error('Missing original normal texture');
          let normal=loaded.get('normal:'+item.normalAssetId);
          if(!normal){const url=URL.createObjectURL(new Blob([normalResource.bytes],{type:normalResource.data?.mime||'image/png'}));try{normal=await new THREE.TextureLoader().loadAsync(url);}finally{URL.revokeObjectURL(url);}normal.flipY=false;normal.colorSpace=THREE.NoColorSpace;normal.anisotropy=renderer.capabilities.getMaxAnisotropy();loaded.set('normal:'+item.normalAssetId,normal);textures.add(normal);}
          normalMaps.set(item.name,normal);
        }
      }
    }
    const asset=runtime.getAsset('body');if(!asset)throw new Error('缺少身体模型');
    const bounds=runtime.getAsset('framingBounds')?.data;
    if(bounds){
      const validVector=v=>Array.isArray(v)&&v.length===3&&v.every(x=>Number.isFinite(x)&&Math.abs(x)<=100);
      if(bounds.schema!=='snowbreak-framing-bounds/1'||bounds.coordinateSchema!=='matching-glb-xzy-metres-reflection-v2'||bounds.bodySha256!==runtime.current.resources.find(r=>r.role==='body')?.assetId||!validVector(bounds.min)||!validVector(bounds.max)||bounds.min.some((v,i)=>v>=bounds.max[i])||!Number.isInteger(bounds.evaluatedFrames)||bounds.evaluatedFrames<1)throw new Error('Invalid framing envelope');
      framingBounds=new THREE.Box3(new THREE.Vector3(...bounds.min),new THREE.Vector3(...bounds.max));framingEvidence=bounds;
      if(bounds.clips){if(!Array.isArray(bounds.clips)||bounds.clips.length>16)throw new Error('Invalid clip envelopes');for(const item of bounds.clips){if(!/^[a-f0-9]{64}$/.test(item.sourceSha256)||framingByClip.has(item.sourceSha256)||!validVector(item.min)||!validVector(item.max)||item.min.some((v,i)=>v>=item.max[i]))throw new Error('Invalid clip envelope');framingByClip.set(item.sourceSha256,new THREE.Box3(new THREE.Vector3(...item.min),new THREE.Vector3(...item.max)));}}
    }
    root=(await new GLTFLoader().register(cueMorphTargetNamesPlugin).parseAsync(asset.bytes.slice().buffer,'')).scene;characterGroup.add(root);
    prepareMeshes(root);root.traverse(b=>{if(b.isBone)bodyBoneSet.add(b);});
    const clip=runtime.getAsset('bodyAnimation')?.data;activeFramingHash=clip?.generatorMetadata?.sourceSha256||null;
    firstPose(root,clip);
    bindClip(root,clip);
    const attachment=runtime.getAsset('faceAttachment')?.data;
    if(attachment){
      if(attachment.schema!=='snowbreak-face-attachment/1'||attachment.candidateOnly!==true||attachment.originalAssemblyVerified!==false||attachment.boneName!=='Bip001-Head'||attachment.socketName!=='socket_face01')throw new Error('Invalid face attachment candidate');
      const parent=root.getObjectByName(attachment.boneName),position=attachment.relativeLocationCm;
      if(!parent?.isBone||!position||![position.X,position.Y,position.Z].every(x=>Number.isFinite(x)&&Math.abs(x)<100))throw new Error('Invalid socket parent or position');
      const face=runtime.getAsset('face');if(!face)throw new Error('Missing face geometry');
      faceRoot=(await new GLTFLoader().register(cueMorphTargetNamesPlugin).parseAsync(face.bytes.slice().buffer,'')).scene;prepareMeshes(faceRoot);firstPose(faceRoot,runtime.getAsset('faceAnimation')?.data);
      const faceClip=runtime.getAsset('faceAnimation')?.data;if(!faceClip||!clip||faceClip.frames!==clip.frames||faceClip.fps!==clip.fps)throw new Error('Face/body sample timing mismatch');bindClip(faceRoot,faceClip);
      const socket=new THREE.Group();socket.position.set(position.X*.01,position.Z*.01,position.Y*.01);socket.quaternion.fromArray(rotatorToGLBQuaternion(attachment.relativeRotationDegrees));parent.add(socket);socket.add(faceRoot);if(attachment.defaultVisible!==undefined&&typeof attachment.defaultVisible!=='boolean')throw new Error('Invalid face visibility');faceRoot.visible=attachment.defaultVisible===true;
    }
    localScene=await createLocalScene(runtime,group,prepareMeshes);renderer.localClippingEnabled=!!localScene.hasCutaway;
    const morphCurves=createMorphCurves(runtime.getAsset('morphCurves')?.data,runtime,faceRoot);
    const skeletons=[];root.traverse(m=>{if(m.isSkinnedMesh&&!skeletons.includes(m.skeleton))skeletons.push(m.skeleton);if(m.isSkinnedMesh)m.frustumCulled=false;});
    const duration=clip?(clip.frames-1)/clip.fps:0,q0=new THREE.Quaternion(),q1=new THREE.Quaternion();
    let standbyDuration=0,standbyLabel='D待机',startAsStandby=false,poseMode='sample',standbyBindings=[];
    const transition=runtime.getAsset('stateTransition')?.data;
    if(transition){
      const legacy=transition.schema==='snowbreak-state-preview/1'&&transition.show==='Sc01_Hand_A_D'&&transition.fromState==='A'&&transition.toState==='D';
      const generic=transition.schema==='snowbreak-standby-preview/1'&&transition.characterId===runtime.current.characterId&&Number.isInteger(transition.standbyConfigId)&&transition.standbyConfigId>0&&Number.isInteger(transition.sourceSkinId)&&/^[a-f0-9]{64}$/.test(transition.sourceTableSha256)&&typeof transition.label==='string'&&transition.label.length<=40&&typeof transition.startAsStandby==='boolean';
      const standing=transition.schema==='snowbreak-standby-preview/2'&&transition.stance==='standing'&&transition.characterId===runtime.current.characterId&&transition.sourceBodySha256===runtime.getAsset('standbyBody')?.data.generatorMetadata?.sourceSha256&&transition.startAsStandby===true;
      if((!legacy&&!generic&&!standing)||transition.nativeInitializationVerified!==false)throw new Error('Invalid destination state preview');
      if(generic||standing){standbyLabel=transition.label;startAsStandby=transition.startAsStandby;}
      const body=runtime.getAsset('standbyBody')?.data,face=runtime.getAsset('standbyFace')?.data;
      if(!body||!face||body.frames!==face.frames||body.fps!==face.fps)throw new Error('Standby clip timing mismatch');
      const bodyTracks=new Map(body.tracks.map(t=>[t.bone,t])),faceTracks=new Map(face.tracks.map(t=>[t.bone,t]));
      standbyBindings=bindings.map(b=>{const c=b.clip===clip?body:face,track=(b.clip===clip?bodyTracks:faceTracks).get(b.bone.name);if(!track||track.keys.length!==c.frames||track.keys.some(k=>k.length!==10||!k.every(Number.isFinite)||Math.abs(k.slice(3,7).reduce((n,x)=>n+x*x,0)-1)>.05))throw new Error('Invalid standby bone');return {bone:b.bone,track:bodyBoneSet.has(b.bone)?quietIdleTrack(track):track,clip:c};});standbyDuration=(body.frames-1)/body.fps;
    }
    let selectedBindings=bindings,selectedDuration=duration,selectedId='default',activeOverlay=null;
    const samples=new Map([['default',{bindings,duration,label:'原始动画样本'}]]),catalog=runtime.getAsset('sampleCatalog')?.data;
    if(catalog){
      if(!['snowbreak-sample-catalog/1','snowbreak-sample-catalog/2'].includes(catalog.schema)||catalog.characterId!==runtime.current.characterId||catalog.originalInteractionVerified!==false||!Array.isArray(catalog.samples)||!catalog.samples.length||catalog.samples.length>24||!/^[a-f0-9]{64}$/.test(catalog.sourceTableSha256))throw new Error('Invalid sample catalog');samples.clear();
      for(const item of catalog.samples){
        if(typeof item.id!=='string'||!/^[a-zA-Z0-9_-]{1,64}$/.test(item.id)||samples.has(item.id)||typeof item.label!=='string'||item.label.length>64||(catalog.schema.endsWith('/1')&&(!Number.isInteger(item.sourceShowElementId)||item.sourceShowElementId<1)))throw new Error('Invalid sample identity');
        const body=runtime.getAsset(item.bodyRole),face=runtime.getAsset(item.faceRole);
        if(body?.kind!=='animation'||face?.kind!=='animation'||((body.data.frames!==face.data.frames||body.data.fps!==face.data.fps)&&!(item.independentFaceTiming===true&&Number.isInteger(item.sourceShowElementId)&&item.sourceShowElementId>0)))throw new Error('Sample body/face mismatch');
        if(catalog.schema.endsWith('/2')&&item.sourceBodySha256!==(body.data.generatorMetadata?.sourceSha256||runtime.current.resources.find(r=>r.role===item.bodyRole)?.assetId))throw new Error('Sample source mismatch');
        let list=bindings;if(item.bodyRole!=='bodyAnimation'||item.faceRole!=='faceAnimation'){list=[];bindClip(root,body.data,list,item.overlay==='upper-body');if(!faceRoot)throw new Error('Sample requires face');bindClip(faceRoot,face.data,list);}
        samples.set(item.id,{bindings:list,duration:Math.max((body.data.frames-1)/body.data.fps,(face.data.frames-1)/face.data.fps),overlay:item.overlay==='upper-body',label:item.label,sourceShowElementId:item.sourceShowElementId,sceneFraming:item.sceneFraming===true,sourceSha256:body.data.generatorMetadata?.sourceSha256,sceneOf:item.sceneOf});
      }
      const initial=samples.get(catalog.defaultId);if(!initial||initial.bindings!==bindings)throw new Error('Default sample must reference primary clip');selectedId=catalog.defaultId;
    }
    const touchBindings=validateTouchBindings(catalog);
    function selectSample(id){const sample=samples.get(id);if(!sample)throw new Error('Unknown sample');activeOverlay=sample.overlay?(poseMode==='sample'&&activeOverlay?activeOverlay:{bindings:poseMode==='standby'?standbyBindings:selectedBindings,duration:poseMode==='standby'?standbyDuration:selectedDuration,time:sampleTime,envelope:sceneEnvelope}):null;selectedId=id;selectedBindings=sample.bindings;selectedDuration=sample.duration;const frameSample=samples.get(sample.sceneOf)||sample;const nextEnvelope=sample.overlay?activeOverlay.envelope:frameSample.sceneFraming?framingByClip.get(frameSample.sourceSha256):null;if(sample.sceneFraming&&!nextEnvelope)throw new Error('Scene framing envelope missing');const refit=sceneEnvelope!==nextEnvelope;sceneEnvelope=nextEnvelope;seek(0);if(refit)fit();return {id,label:sample.label,duration:sample.duration};}
    function seek(seconds,list=selectedBindings,length=selectedDuration){if(disposed||!Number.isFinite(seconds))return;const overlay=activeOverlay&&list===selectedBindings?activeOverlay:null;if(overlay&&overlay.duration>0)seek((overlay.time+seconds)%overlay.duration,overlay.bindings,overlay.duration);const previousMode=poseMode;activeFramingHash=list[0]?.clip?.generatorMetadata?.sourceSha256||null;poseMode=list===standbyBindings&&standbyDuration>0?'standby':'sample';sampleTime=Math.max(0,Math.min(length,seconds));for(const {bone,track,clip:c} of list){const f=sampleTime*c.fps,lo=Math.min(Math.floor(f),c.frames-1),hi=Math.min(lo+1,c.frames-1),t=f-lo,a=track.keys[lo],b=track.keys[hi];if(!overlay||!bodyBoneSet.has(bone))bone.position.set(THREE.MathUtils.lerp(a[0],b[0],t),THREE.MathUtils.lerp(a[1],b[1],t),THREE.MathUtils.lerp(a[2],b[2],t));bone.quaternion.copy(q0.fromArray(a,3).slerp(q1.fromArray(b,3),t));if(!overlay||!bodyBoneSet.has(bone))bone.scale.set(THREE.MathUtils.lerp(a[7],b[7],t),THREE.MathUtils.lerp(a[8],b[8],t),THREE.MathUtils.lerp(a[9],b[9],t));}morphCurves.apply(list.find(binding=>!bodyBoneSet.has(binding.bone))?.clip,sampleTime);if(rootLock){root.position.x=root.position.z=0;group.updateMatrixWorld(true);const point=root.getObjectByName(rootLock.bone).getWorldPosition(new THREE.Vector3()).applyMatrix4(root.matrixWorld.clone().invert());root.position.x=rootLock.reference[0]-point.x;root.position.z=rootLock.reference[1]-point.z;}group.updateMatrixWorld(true);lastSkeletonUpdates=skeletons.length;for(const skeleton of skeletons)skeleton.update();}
    group.updateMatrixWorld(true);const facingBone=root.getObjectByName('Bip001-Pelvis')||root.getObjectByName('Bip001');
    if(facingBone){const q=facingBone.getWorldQuaternion(new THREE.Quaternion());const axis=[new THREE.Vector3(1,0,0),new THREE.Vector3(0,1,0),new THREE.Vector3(0,0,1)].sort((a,b)=>{const av=a.clone().applyQuaternion(q),bv=b.clone().applyQuaternion(q);return Math.hypot(bv.x,bv.z)-Math.hypot(av.x,av.z);})[0];const v=axis.clone().applyQuaternion(q);facingReference={bone:facingBone,axis,heading:Math.atan2(v.x,v.z)};}
    surfaceOverlay=createSurfaceOverlay(root,scene,camera);
    const embodiment=createEmbodiedActions(root,yaw=>{bodyYaw=yaw;orient();},()=>frame.yaw+modelFrame.yaw);
    const pickSurface=createSurfacePicker(root,camera,canvas,localScene.root);sceneInteractions=createSceneInteractions(root,camera,canvas,pickSurface,runtime.getAsset('sceneInteractions')?.data,localScene.contactSurface);senses=createSenses(root,camera,canvas);fit();await renderer.compileAsync(scene,camera);addEventListener('resize',fit);renderer.setAnimationLoop(()=>{if(canvas.dataset.snowbreakPaused==='true')return;embodiment.restore();sceneInteractions.restore();senses.restore();onFrame?.();embodiment.tick();sceneInteractions.tick();senses.tick();surfaceOverlay.update();renderer.render(scene,camera);});
    const materialState=()=>{const result=[];root.traverse(m=>{if(m.isMesh)result.push({name:m.userData.snowbreakMaterialName,textured:!!m.userData.previewMap,normalMapped:!!m.material.normalMap,diffuseSize:m.material.map?[m.material.map.image.width,m.material.map.image.height]:null,normalSize:m.material.normalMap?[m.material.normalMap.image.width,m.material.normalMap.image.height]:null,anisotropy:m.material.map?.anisotropy||0,profile:m.material.userData.profile,alphaTest:m.material.alphaTest});});return result;};
    const setTexturePreview=enabled=>root.traverse(m=>{if(m.isMesh){m.material.map=enabled?m.userData.previewMap:null;m.material.color.set(m.material.map?0xffffff:0xcac7c3);m.material.needsUpdate=true;}});
    const faceCandidateState=()=>({available:!!faceRoot,visible:!!faceRoot?.visible,originalAssemblyVerified:false});
    const showFaceCandidate=visible=>{if(faceRoot){faceRoot.visible=!!visible;fit();}return faceCandidateState();};
    const drawSnapshot=(ctx,w,h)=>{if(disposed)throw new Error('Renderer disposed');surfaceOverlay.hideForCapture(()=>{renderer.render(scene,camera);ctx.drawImage(canvas,0,0,w,h);});};
    const armPreview=createArmPreview(root),leftArmPreview=createArmPreview(root,{side:'left'});const learned=createLearnedMotions(root,camera,runtime.getAsset('learnedMotions')?.data,transition?.stance);
    return {projectedBone:name=>{const p=root.getObjectByName(name)?.getWorldPosition(new THREE.Vector3()).project(camera),r=canvas.getBoundingClientRect();return p?[r.left+(p.x+1)*r.width/2,r.top+(1-p.y)*r.height/2]:null;},modelDragScale:()=>{const distance=Math.max(.05,root.getObjectByName('Bip001-Pelvis').getWorldPosition(new THREE.Vector3()).sub(camera.position).dot(camera.getWorldDirection(new THREE.Vector3()))),height=2*distance*Math.tan(THREE.MathUtils.degToRad(camera.fov/2))/camera.zoom;return {x:height*camera.aspect/frame.stretchX,y:height/frame.stretchY};},furnitureContacts:names=>Object.fromEntries(names.map(n=>{const bone=root.getObjectByName(n);return [n,bone?localScene.contactSurface?.(bone.getWorldPosition(new THREE.Vector3())):null]})),setModelFrame,modelFrameState:()=>({...modelFrame}),placementState:()=>({model:characterGroup.matrixWorld.toArray(),room:localScene.root?.matrixWorld.toArray(),camera:camera.matrixWorld.toArray()}),embodiment,sceneInteractions,sensesState:senses.snapshot,setGaze:senses.gaze,senseTouch:senses.touch,resetSenses:senses.reset,postureState:()=>Object.fromEntries(['Bip001-Pelvis','Bip001-Head','Bip001-L-Thigh','Bip001-L-Calf','Bip001-L-Foot','Bip001-R-Thigh','Bip001-R-Calf','Bip001-R-Foot'].map(n=>[n,root.getObjectByName(n)?.getWorldPosition(new THREE.Vector3()).toArray()])),presentationDefault:runtime.getAsset('presentationDefault')?.data,lightingState:lighting.snapshot,setLighting:lighting.set,boneWorldPoints:names=>Object.fromEntries(names.slice(0,32).map(name=>[name,root.getObjectByName(name)?.getWorldPosition(new THREE.Vector3()).toArray()])),bonePoseState:()=>{const out=[];root.traverse(b=>{if(b.isBone)out.push({name:b.name,position:b.position.toArray(),quaternion:b.quaternion.toArray(),scale:b.scale.toArray()});});return out;},cameraState:()=>({position:camera.position.toArray(),projection:camera.projectionMatrix.toArray()}),learnedOptions:learned.available,applyLearnedMotion:learned.apply,learnedDiagnostics:learned.snapshot,presentationDiagnostics:()=>({resizeCount,fitCount}),touchBindings:()=>touchBindings.map(b=>({...b,gestures:[...b.gestures]})),setRoomVisible:localScene.setRoomVisible,setSceneCutaway:localScene.setCutaway,sceneState:localScene.snapshot,setSceneVisible:localScene.setVisible,morphState:morphCurves.snapshot,framingEnvelopeState:()=>({precomputed:!!framingBounds,evaluatedFrames:framingEvidence?.evaluatedFrames||0,perClip:framingByClip.size,activeSource:activeFramingHash}),resourceState:()=>({sourceTextures:textures.size,drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,geometries:renderer.info.memory.geometries,textures:renderer.info.memory.textures}),setSurfaceLabels:surfaceOverlay.set,surfaceOverlayState:surfaceOverlay.snapshot,armPreview,leftArmPreview,dispose,pickSurface,drawSnapshot,faceViewer,setFrame,frameState:()=>({...frame}),displayOnly:true,originalShaderVerified:false,originalInteractionVerified:false,materialState,setTexturePreview,faceCandidateState,showFaceCandidate,selectSample,sampleOptions:()=>[...samples].map(([id,s])=>({id,label:s.label,duration:s.duration,sourceShowElementId:s.sourceShowElementId})),get duration(){return selectedDuration},seek,standbyDuration,standbyLabel,startAsStandby,seekStandby:s=>{if(sceneEnvelope){sceneEnvelope=null;fit();}if(standbyDuration>0)seek(s%standbyDuration,standbyBindings,standbyDuration);},setFrameHandler:fn=>onFrame=fn,sampleState:()=>({lastSkeletonUpdates,sampleId:selectedId,time:sampleTime,poseMode,standbyDuration,nativeInitializationVerified:false,viewYaw:group.rotation.y,autoYaw,bodyBones:bindings.filter(x=>x.clip===clip).length,faceBones:bindings.filter(x=>x.clip!==clip).length,hand:root.getObjectByName('Bip001-R-Hand')?.getWorldPosition(new THREE.Vector3()).toArray()})};
  }catch(e){dispose();throw e;}
}
