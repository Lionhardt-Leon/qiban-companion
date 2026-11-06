import * as THREE from 'three';

// Original table units are centimetres. Unknown native defaults never become
// guessed threshold comparisons. Only the explicitly serialized limits fire.
export function createSceneInteractions(root,camera,canvas,pick,config,contactSurface){
 const profiles=config?.schema==='enya-official-scenes/1'?config.profiles:[];
 if(!Array.isArray(profiles)||profiles.length>8)throw new Error('Invalid scene profiles');
 let hooks={},active=null,recover=null,saved=[],last=performance.now(),lastEvent=null,showPoints=false,lastPick=null,bedCorrections=[];
 const overlay=document.createElement('div');overlay.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:3';document.body.append(overlay);const pointLayer=document.createElement('div');overlay.append(pointLayer);const handles=new Map();
 function points(){return (profile()?.contacts||[]).map(c=>{const bone=root.getObjectByName(c.bone);if(!bone)return null;const p=pos(bone).project(camera),r=canvas.getBoundingClientRect();return {id:c.id,label:/Foot/.test(c.bone)?(c.bone.includes('-L-')?'左脚':'右脚'):/Hand/.test(c.bone)?(c.bone.includes('-L-')?'左手':'右手'):/Pelvis/.test(c.bone)?'骨盆':'头部',x:r.left+(p.x+1)*r.width/2,y:r.top+(1-p.y)*r.height/2,supportedIK:c.kind==='ik'};}).filter(Boolean);}
 const pos=b=>b.getWorldPosition(new THREE.Vector3());
 const footVertices=new Map();
 function footPoints(foot,full=false){
  if(!footVertices.has(foot.name)){const matches=[];root.traverse(mesh=>{if(!mesh.isSkinnedMesh)return;const skin=mesh.geometry.getAttribute('skinIndex'),weights=mesh.geometry.getAttribute('skinWeight');if(!skin||!weights)return;const ids=new Set(mesh.skeleton.bones.map((b,i)=>b.name===foot.name||b.name===foot.name.replace('-Foot','-Toe0')?i:-1).filter(i=>i>=0));const vertices=[];for(let i=0;i<skin.count;i++){let influence=0;for(let k=0;k<4;k++)if(ids.has(skin.getComponent(i,k)))influence+=weights.getComponent(i,k);if(influence>.45)vertices.push(i);}if(vertices.length){const positions=mesh.geometry.getAttribute('position'),probes=new Set();for(const x of [-1,0,1])for(const y of [-1,0,1])for(const z of [-1,0,1]){if(x===0&&y===0&&z===0)continue;let best=-Infinity,index=vertices[0];for(const i of vertices){const value=positions.getX(i)*x+positions.getY(i)*y+positions.getZ(i)*z;if(value>best){best=value;index=i;}}probes.add(index);}matches.push({mesh,vertices,probes:[...probes]});}});footVertices.set(foot.name,matches);}
  const points=[];for(const {mesh,vertices,probes} of footVertices.get(foot.name))for(const i of full?vertices:probes)points.push(mesh.getVertexPosition(i,new THREE.Vector3()).applyMatrix4(mesh.matrixWorld));return points;
 }
 function footRadius(foot,normal){const origin=pos(foot).dot(normal);return THREE.MathUtils.clamp(Math.max(.04,...footPoints(foot).map(p=>origin-p.dot(normal)))+.015,.055,.16);}

 const profile=()=>profiles.find(p=>p.id===(hooks.scene?.()||'main'));
 function restore(){for(const s of saved)if(s.bone.quaternion.angleTo(s.applied)<1e-6)s.bone.quaternion.copy(s.base);saved=[];}
 function pickContact(hit){
  if(!hit?.alphaVerified)return null;
  for(const contact of profile()?.contacts||[]){
   if(contact.kind!=='ik')continue;const bone=root.getObjectByName(contact.ikBone||contact.bone);if(!bone)continue;
   const point=bone.worldToLocal(new THREE.Vector3().fromArray(hit.point)),size=contact.sizeCm;
   if(Math.abs(point.x)<size.X*.01&&Math.abs(point.y)<size.Z*.01&&Math.abs(point.z)<size.Y*.01)return {contact,bone};
  }
  const names=hit.skinBones||[];
  for(const contact of profile()?.contacts||[]){if(contact.kind!=='ik')continue;const side=contact.ikBone.includes('-L-')?'L':'R';if(names.some(n=>n?.startsWith('Bip001-'+side+'-')&&/Thigh|Calf|Foot/.test(n)))return {contact,bone:root.getObjectByName(contact.ikBone)};}
  return null;
 }
 function release(cancelled=false){
  if(!active)return;const state=active;active=null;
  recover={...state,weight:1};if(canvas.hasPointerCapture(state.pointerId))canvas.releasePointerCapture(state.pointerId);
  if(!cancelled)hooks.event?.({type:'touch',region:'leg',label:state.contact.ikBone.includes('-L-')?'左腿／脚（原作触点）':'右腿／脚（原作触点）',gesture:'stroke',source:'original-scene-collision',confidence:1,completed:true});
 }
 function down(e){
  if(active||canvas.dataset.snowbreakPaused==='true'||canvas.dataset.snowbreakFrameEdit==='true'||document.querySelector('#snowSurfaceEdit')?.checked)return;
  const found=pickContact(pick(e.clientX,e.clientY));start(e,found);
 }
 function start(e,found){
  lastPick={contact:found?.contact.id,handle:e.target?.dataset?.legHandle||null};if(!found||active)return;
  const foot=found.bone,calf=foot.parent,thigh=calf?.parent;lastPick.chain=[foot,calf,thigh].map(b=>({name:b?.name,isBone:b?.isBone}));if(!thigh?.isBone||!calf?.isBone)return;
  e.preventDefault();e.stopImmediatePropagation();hooks.beforeDrag?.();recover=null;
  active={...found,foot,calf,thigh,pointerId:e.pointerId,x:e.clientX,y:e.clientY,dx:0,dy:0,offset:new THREE.Vector3(),triggered:false};canvas.setPointerCapture(e.pointerId);
  if(found.contact.voiceId)hooks.voice?.(found.contact.voiceId);
 }
 function updateHandles(){
  const contacts=(profile()?.contacts||[]).filter(c=>c.kind==='ik'),editing=canvas.dataset.snowbreakFrameEdit==='true'||canvas.dataset.snowbreakPaused==='true'||document.querySelector('#snowSurfaceEdit')?.checked;
  for(const [id,b] of handles)if(!contacts.some(c=>c.id===id)){b.remove();handles.delete(id);}
  for(const c of contacts){const bone=root.getObjectByName(c.ikBone||c.bone);if(!bone)continue;let b=handles.get(c.id);
   if(!b){b=document.createElement('button');b.dataset.legHandle=String(c.id);b.textContent=c.ikBone.includes('-L-')?'↕ 拖动左腿':'↕ 拖动右腿';b.style.cssText='position:fixed;pointer-events:auto;touch-action:none;border:1px solid #8fffc5;border-radius:22px;background:#203b32dd;color:white;font-size:12px;padding:9px;transform:translate(-50%,-50%);margin:0';b.addEventListener('pointerdown',e=>{if(!editing)start(e,{contact:c,bone});});handles.set(c.id,b);overlay.append(b);}
   const r=canvas.getBoundingClientRect(),p=pos(bone).lerp(pos(bone.parent),.5).project(camera);b.hidden=!!editing;b.style.left=THREE.MathUtils.clamp(r.left+(p.x+1)*r.width/2,55,r.right-55)+'px';b.style.top=THREE.MathUtils.clamp(r.top+(1-p.y)*r.height/2,100,r.bottom-150)+'px';
  }
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
  updateHandles();
  if(showPoints){pointLayer.replaceChildren();for(const p of points()){const el=document.createElement('span');el.textContent=p.label+(p.supportedIK?' ↕':'');el.style.cssText=`position:absolute;left:${p.x}px;top:${p.y}px;transform:translate(-50%,-50%);border:2px solid ${p.supportedIK?'#5ef0a0':'#ddd'};border-radius:20px;padding:6px;background:#222a;color:white;font-size:11px`;pointLayer.append(el);}}
  bedCorrections=[];
  if(recover){recover.weight=Math.max(0,recover.weight-dt/Math.max(.1,recover.contact.drag.DragRecoverTime||.25));if(recover.weight===0)recover=null;}
  const states=[];
  for(const contact of profile()?.contacts||[]){if(contact.kind!=='ik')continue;const state=active?.contact.id===contact.id?active:recover?.contact.id===contact.id?recover:null;
    if(state)states.push(state);else if(profile()?.id==='show_05'){const foot=root.getObjectByName(contact.ikBone);if(foot?.parent?.parent?.isBone)states.push({contact,foot,calf:foot.parent,thigh:foot.parent.parent,offset:new THREE.Vector3(),weight:0,passive:true});}
  }
  for(const s of states){
  root.updateWorldMatrix(true,true);const a=pos(s.thigh),b=pos(s.calf),c=pos(s.foot),axis=c.clone().sub(a).normalize();
  const pole=b.clone().sub(a).addScaledVector(axis,-b.clone().sub(a).dot(axis));if(pole.length()<1e-5)return;
  const target=c.clone().addScaledVector(s.offset,s===active?1:s.weight);let correction=0,radius=.055;
  if(profile()?.id==='show_05'&&contactSurface){const base=contactSurface(c);if(base&&base.clearance>-.2&&base.clearance<.4){radius=footRadius(s.foot,base.normal);for(let pass=0;pass<2;pass++){let push=0,normal=base.normal;for(const t of [.5,.75,1]){const probe=b.clone().lerp(target,t),surface=contactSurface(probe);if(surface){push=Math.max(push,(radius-surface.clearance)/t);normal=surface.normal;}}push=THREE.MathUtils.clamp(push,0,.6-correction);if(push<.0005)break;target.addScaledVector(normal,push);correction+=push;}}}
  if(correction>0)bedCorrections.push({bone:s.foot.name,correction,radius});if(s.passive&&correction<.0005)continue;
  const footWorld=s.foot.getWorldQuaternion(new THREE.Quaternion()),bases=[s.thigh,s.calf,s.foot].map(bone=>({bone,base:bone.quaternion.clone()}));
  try{
   // The source leg animation has non-uniform scale. Solve in each parent
   // frame instead of applying a uniform-scale analytical arm solver.
   const rotate=(bone,reference,limit)=>{const parent=bone.parent;parent.updateWorldMatrix(true,false);const origin=bone.position,from=parent.worldToLocal(pos(s.foot)).sub(origin),to=parent.worldToLocal(target.clone()).sub(origin);if(Math.min(from.length(),to.length())<1e-6)return;const desired=bone.quaternion.clone().premultiply(new THREE.Quaternion().setFromUnitVectors(from.normalize(),to.normalize())).normalize(),angle=reference.angleTo(desired);bone.quaternion.copy(reference).slerp(desired,Math.min(1,limit/Math.max(angle,1e-8)));root.updateWorldMatrix(true,true);};
   for(let i=0;i<12;i++){rotate(s.calf,bases[1].base,Math.PI/3);rotate(s.thigh,bases[0].base,Math.PI/4);if(pos(s.foot).distanceTo(target)<.001)break;}
   s.foot.quaternion.copy(s.foot.parent.getWorldQuaternion(new THREE.Quaternion()).invert().multiply(footWorld));for(const state of bases)saved.push({...state,applied:state.bone.quaternion.clone()});root.updateWorldMatrix(true,true);const seen=new Set();root.traverse(m=>{if(m.isSkinnedMesh&&!seen.has(m.skeleton)){m.skeleton.update();seen.add(m.skeleton);}});}catch(error){lastPick={...lastPick,error:error.message};for(const state of bases)state.bone.quaternion.copy(state.base);cancel();}
  }
 }
 for(const [name,fn] of [['pointerdown',down],['pointermove',move],['pointerup',up],['pointercancel',cancel]])canvas.addEventListener(name,fn);
 return {footMeshContacts:()=>Object.fromEntries((profile()?.contacts||[]).filter(c=>c.kind==='ik').map(c=>{const foot=root.getObjectByName(c.ikBone),values=foot?footPoints(foot,true).map(p=>contactSurface?.(p)?.clearance).filter(Number.isFinite):[];return [c.ikBone,{samples:values.length,minClearance:values.length?Math.min(...values):null}]})),configure:value=>hooks=value,hitTest:(x,y)=>pickContact(pick(x,y))?.contact.id,restore,tick,cancel,profile,points,togglePoints(){showPoints=!showPoints;if(!showPoints)pointLayer.replaceChildren();return points().length;},headReaction:()=>profile()?.contacts.find(c=>/hari|Head/.test(c.bone))?.thresholds?.[0]?.sampleId,snapshot:()=>({scene:profile()?.id,bedCorrections,lastPick,active:!!active,offset:active?[active.dx,active.dy]:null,recovering:!!recover,lastEvent}),dispose(){cancel();overlay.remove();for(const [name,fn] of [['pointerdown',down],['pointermove',move],['pointerup',up],['pointercancel',cancel]])canvas.removeEventListener(name,fn);}};
}
