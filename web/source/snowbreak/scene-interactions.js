import * as THREE from 'three';

// Original table units are centimetres. Unknown native defaults never become
// guessed threshold comparisons. Only the explicitly serialized limits fire.
export function createSceneInteractions(root,camera,canvas,pick,config){
 const profiles=config?.schema==='enya-official-scenes/1'?config.profiles:[];
 if(!Array.isArray(profiles)||profiles.length>8)throw new Error('Invalid scene profiles');
 let hooks={},active=null,recover=null,saved=[],last=performance.now(),lastEvent=null,showPoints=false,lastPick=null;
 const overlay=document.createElement('div');overlay.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:3';document.body.append(overlay);
 function points(){return (profile()?.contacts||[]).map(c=>{const bone=root.getObjectByName(c.bone);if(!bone)return null;const p=pos(bone).project(camera),r=canvas.getBoundingClientRect();return {id:c.id,label:/Foot/.test(c.bone)?(c.bone.includes('-L-')?'左脚':'右脚'):/Hand/.test(c.bone)?(c.bone.includes('-L-')?'左手':'右手'):/Pelvis/.test(c.bone)?'骨盆':'头部',x:r.left+(p.x+1)*r.width/2,y:r.top+(1-p.y)*r.height/2,supportedIK:c.kind==='ik'};}).filter(Boolean);}
 const pos=b=>b.getWorldPosition(new THREE.Vector3());
 const profile=()=>profiles.find(p=>p.id===(hooks.scene?.()||'main'));
 function restore(){for(const s of saved)if(s.bone.quaternion.angleTo(s.applied)<1e-6)s.bone.quaternion.copy(s.base);saved=[];}
 function pickContact(hit){
  if(!hit?.alphaVerified)return null;
  for(const contact of profile()?.contacts||[]){
   if(contact.kind!=='ik')continue;const bone=root.getObjectByName(contact.ikBone||contact.bone);if(!bone)continue;
   const point=bone.worldToLocal(new THREE.Vector3().fromArray(hit.point)),size=contact.sizeCm;
   if(Math.abs(point.x)<size.X*.01&&Math.abs(point.y)<size.Z*.01&&Math.abs(point.z)<size.Y*.01)return {contact,bone};
  }
  return null;
 }
 function release(cancelled=false){
  if(!active)return;const state=active;active=null;
  recover={...state,weight:1};if(canvas.hasPointerCapture(state.pointerId))canvas.releasePointerCapture(state.pointerId);
  if(!cancelled)hooks.event?.({type:'touch',region:'leg',label:state.contact.ikBone.includes('-L-')?'左腿／脚（原作触点）':'右腿／脚（原作触点）',gesture:'stroke',source:'original-scene-collision',confidence:1,completed:true});
 }
 function down(e){
  if(active||canvas.dataset.snowbreakPaused==='true'||canvas.dataset.snowbreakFrameEdit==='true'||document.querySelector('#snowSurfaceEdit')?.checked)return;
  const found=pickContact(pick(e.clientX,e.clientY));lastPick={contact:found?.contact.id};if(!found)return;
  const foot=found.bone,calf=foot.parent,thigh=calf?.parent;lastPick.chain=[foot,calf,thigh].map(b=>({name:b?.name,isBone:b?.isBone}));if(!thigh?.isBone||!calf?.isBone)return;
  e.stopImmediatePropagation();hooks.beforeDrag?.();recover=null;
  active={...found,foot,calf,thigh,pointerId:e.pointerId,x:e.clientX,y:e.clientY,dx:0,dy:0,offset:new THREE.Vector3(),triggered:false};canvas.setPointerCapture(e.pointerId);
  if(found.contact.voiceId)hooks.voice?.(found.contact.voiceId);
 }
 function compare(value,limit,type){if(type?.endsWith('::Less'))return value<limit;if(type?.endsWith('::Greater'))return value>limit;return null;}
 function move(e){
  if(active?.pointerId!==e.pointerId)return;e.stopImmediatePropagation();const s=active,r=canvas.getBoundingClientRect(),d=s.contact.drag;
  const dx=(e.clientX-s.x)/Math.max(1,r.width)*(d.ScreenPercentToWorld?.X||0),dy=(e.clientY-s.y)/Math.max(1,r.height)*(d.ScreenPercentToWorld?.Y||0);
  s.dx=THREE.MathUtils.clamp(dx,-(d.WorldSpaceLmitLeftUp?.X||0),d.WorldSpaceLimit?.X||0);s.dy=THREE.MathUtils.clamp(dy,-(d.WorldSpaceLmitLeftUp?.Y||0),d.WorldSpaceLimit?.Y||0);
  const right=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,0),up=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,1);s.offset.copy(right).multiplyScalar(s.dx*.01).addScaledVector(up,-s.dy*.01);
  for(const trigger of s.contact.thresholds||[]){
   const results=[compare(s.dx,trigger.limit.X,trigger.xCompare),compare(s.dy,trigger.limit.Y,trigger.yCompare)].filter(v=>v!==null);
   if(!s.triggered&&results.length&&results.every(Boolean)){s.triggered=true;lastEvent={sampleId:trigger.sampleId,dx:s.dx,dy:s.dy,source:'serialized-drag-threshold'};release();hooks.reaction?.(trigger.sampleId);break;}
  }
 }
 function up(e){if(active?.pointerId===e.pointerId){e.stopImmediatePropagation();release();}}
 function cancel(){release(true);recover=null;restore();}
 function tick(){
  const now=performance.now(),dt=Math.min(.05,(now-last)/1000);last=now;
  if(showPoints){overlay.replaceChildren();for(const p of points()){const el=document.createElement('span');el.textContent=p.label+(p.supportedIK?' ↕':'');el.style.cssText=`position:absolute;left:${p.x}px;top:${p.y}px;transform:translate(-50%,-50%);border:2px solid ${p.supportedIK?'#5ef0a0':'#ddd'};border-radius:20px;padding:6px;background:#222a;color:white;font-size:11px`;overlay.append(el);}}
  let s=active||recover;if(!s)return;
  if(!active){s.weight=Math.max(0,s.weight-dt/Math.max(.1,s.contact.drag.DragRecoverTime||.25));if(s.weight===0){recover=null;return;}}
  root.updateWorldMatrix(true,true);const a=pos(s.thigh),b=pos(s.calf),c=pos(s.foot),axis=c.clone().sub(a).normalize();
  const pole=b.clone().sub(a).addScaledVector(axis,-b.clone().sub(a).dot(axis));if(pole.length()<1e-5)return;
  const target=c.clone().addScaledVector(s.offset,active?1:s.weight),footWorld=s.foot.getWorldQuaternion(new THREE.Quaternion()),bases=[s.thigh,s.calf,s.foot].map(bone=>({bone,base:bone.quaternion.clone()}));
  try{
   // The source leg animation has non-uniform scale. Solve in each parent
   // frame instead of applying a uniform-scale analytical arm solver.
   const rotate=(bone,reference,limit)=>{const parent=bone.parent;parent.updateWorldMatrix(true,false);const origin=bone.position,from=parent.worldToLocal(pos(s.foot)).sub(origin),to=parent.worldToLocal(target.clone()).sub(origin);if(Math.min(from.length(),to.length())<1e-6)return;const desired=bone.quaternion.clone().premultiply(new THREE.Quaternion().setFromUnitVectors(from.normalize(),to.normalize())).normalize(),angle=reference.angleTo(desired);bone.quaternion.copy(reference).slerp(desired,Math.min(1,limit/Math.max(angle,1e-8)));root.updateWorldMatrix(true,true);};
   for(let i=0;i<12;i++){rotate(s.calf,bases[1].base,Math.PI/3);rotate(s.thigh,bases[0].base,Math.PI/4);if(pos(s.foot).distanceTo(target)<.001)break;}
   s.foot.quaternion.copy(s.foot.parent.getWorldQuaternion(new THREE.Quaternion()).invert().multiply(footWorld));for(const state of bases)saved.push({...state,applied:state.bone.quaternion.clone()});root.updateWorldMatrix(true,true);const seen=new Set();root.traverse(m=>{if(m.isSkinnedMesh&&!seen.has(m.skeleton)){m.skeleton.update();seen.add(m.skeleton);}});}catch(error){lastPick={...lastPick,error:error.message};for(const state of bases)state.bone.quaternion.copy(state.base);cancel();}
 }
 for(const [name,fn] of [['pointerdown',down],['pointermove',move],['pointerup',up],['pointercancel',cancel]])canvas.addEventListener(name,fn);
 return {configure:value=>hooks=value,hitTest:(x,y)=>pickContact(pick(x,y))?.contact.id,restore,tick,cancel,profile,points,togglePoints(){showPoints=!showPoints;if(!showPoints)overlay.replaceChildren();return points().length;},headReaction:()=>profile()?.contacts.find(c=>/hari|Head/.test(c.bone))?.thresholds?.[0]?.sampleId,snapshot:()=>({scene:profile()?.id,lastPick,active:!!active,offset:active?[active.dx,active.dy]:null,recovering:!!recover,lastEvent}),dispose(){cancel();overlay.remove();for(const [name,fn] of [['pointerdown',down],['pointermove',move],['pointerup',up],['pointercancel',cancel]])canvas.removeEventListener(name,fn);}};
}
