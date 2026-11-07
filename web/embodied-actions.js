import * as THREE from 'three';
import {solveArm,ARM_PREVIEW_LIMITS} from './source/snowbreak/arm-ik.js';
export function createEmbodiedActions(root,setYaw,frameYaw=()=>0){
 const chains={};for(const [side,l] of [['left','L'],['right','R']]){
  const upper=root.getObjectByName(`Bip001-${l}-UpperArm`),lower=root.getObjectByName(`Bip001-${l}-Forearm`),hand=root.getObjectByName(`Bip001-${l}-Hand`);
  if(upper?.isBone&&lower?.parent===upper&&hand?.parent===lower)chains[side]={upper,lower,hand};
 }
 const head=root.getObjectByName('Bip001-Head'),eyes=[],skeletons=new Set();root.traverse(m=>{if(m.isSkinnedMesh)skeletons.add(m.skeleton);});
 root.traverse(m=>{if(m.isMesh&&m.morphTargetInfluences)for(const n of ['L_Eye_close','R_Eye_close']){const i=m.morphTargetDictionary?.[n]??m.morphTargetDictionary?.[n.replace('_Eye_','_eye_')];if(Number.isInteger(i))eyes.push({mesh:m,index:i,name:n});}});
 const available=['turn_left','turn_right','turn_back','face_front'];
 if(head&&chains.left)available.push('raise_left_hand');if(head&&chains.right)available.push('raise_right_hand');
 if(head&&chains.left&&chains.right)available.push('raise_both_hands','lower_hands');
 if(eyes.some(e=>e.name==='L_Eye_close')&&eyes.some(e=>e.name==='R_Eye_close'))available.push('close_eyes','open_eyes');
 if(head)available.push('gesture_shy','gesture_nod','gesture_shake','gesture_tilt_left','gesture_tilt_right','gesture_look_left','gesture_look_right','gesture_bow');
 if(head&&chains.left&&chains.right)available.push('gesture_open_arms','gesture_wave_left','gesture_wave_right');
 const torso=root.getObjectByName('Bip001-Spine2')||root.getObjectByName('Bip001-Spine');
 let gesture=null;
 let speechTarget=0,speechValue=0;const speechSaved=[];
 const mouthTargets=[];root.traverse(m=>{if(m.isMesh&&m.morphTargetDictionary&&m.morphTargetInfluences){const index=m.morphTargetDictionary.Viseme_A;if(Number.isInteger(index))mouthTargets.push({mesh:m,index});}});
 function playGesture(id,plan){
  if(!available.includes(id)||!id.startsWith('gesture_')||!Number.isFinite(plan?.duration)||plan.duration<1||plan.duration>8||!Array.isArray(plan.poses)||plan.poses.length<2||plan.poses.length>8)throw new Error('无效肢体动作');
  let last=-1;for(const p of plan.poses){if(p.smile!==undefined&&(!Number.isFinite(p.smile)||p.smile<0||p.smile>1))throw new Error('表情越界');if(!Number.isFinite(p.time)||p.time<=last||p.time<0||p.time>plan.duration)throw new Error('动作时间无效');last=p.time;for(const [key,limit] of [['head',[45,25,20]],['torso',[20,15,15]],['leftHand',[1.5,2,1.5]],['rightHand',[1.5,2,1.5]]])if(p[key]&&(!Array.isArray(p[key])||p[key].length!==3||p[key].some((n,i)=>!Number.isFinite(n)||Math.abs(n)>limit[i])))throw new Error('动作目标越界');}
  if(plan.poses[0].time!==0||last!==plan.duration)throw new Error('动作首尾无效');
  held.clear();gesture={id,plan,start:performance.now()};lastResult='正在执行：'+id;
 }
 function sampleGesture(now){
  if(!gesture)return null;const {plan}=gesture,t=(now-gesture.start)/1000;
  if(t>=plan.duration){lastResult='已完成：'+gesture.id;gesture=null;return null;}
  const index=Math.max(0,plan.poses.findIndex(p=>p.time>=t)-1),a=plan.poses[index],b=plan.poses[index+1];
  const f=THREE.MathUtils.clamp((t-a.time)/(b.time-a.time),0,1),w=f*f*(3-2*f),out={};
  for(const k of ['head','torso','leftHand','rightHand'])if(a[k]||b[k])out[k]=[0,1,2].map(i=>(a[k]?.[i]||0)+((b[k]?.[i]||0)-(a[k]?.[i]||0))*w);
  out.smile=(a.smile||0)+((b.smile||0)-(a.smile||0))*w;return out;
 }
 let held=new Set(),closed=false,yaw=0,goalYaw=0,last=performance.now(),lastResult='尚无动作回执';
 const weights={left:0,right:0};let eyeWeight=0;const saved=[],savedEyes=[];let actual={left:false,right:false};
 function restore(){for(const s of saved)if(s.bone.quaternion.angleTo(s.applied)<1e-6)s.bone.quaternion.copy(s.base);saved.length=0;for(const e of [...savedEyes,...speechSaved])if(Math.abs(e.mesh.morphTargetInfluences[e.index]-e.applied)<1e-6)e.mesh.morphTargetInfluences[e.index]=e.base;savedEyes.length=speechSaved.length=0;}
 function command(id){
  if(!available.includes(id))throw new Error('当前模型不支持该身体指令');
  gesture=null;
  if(id==='raise_left_hand')held.add('left');if(id==='raise_right_hand')held.add('right');if(id==='raise_both_hands')held=new Set(['left','right']);if(id==='lower_hands')held.clear();
  if(id==='close_eyes')closed=true;if(id==='open_eyes')closed=false;
  if(id==='turn_left')goalYaw+=90;if(id==='turn_right')goalYaw-=90;if(id==='turn_back')goalYaw=180-frameYaw();if(id==='face_front')goalYaw=-frameYaw();
  lastResult='已接收：'+id;return snapshot();
 }
 function tick(){
  const now=performance.now(),dt=Math.min(.25,(now-last)/1000);last=now;const blend=1-Math.exp(-9*dt);
  const pose=sampleGesture(now);
  if(pose){
   root.updateWorldMatrix(true,true);const position=b=>b.getWorldPosition(new THREE.Vector3()),pelvis=root.getObjectByName('Bip001-Pelvis');
   const up=head&&pelvis?position(head).sub(position(pelvis)).normalize():new THREE.Vector3(0,1,0);
   let front=new THREE.Vector3(0,0,1).applyQuaternion(root.getWorldQuaternion(new THREE.Quaternion()));
   const eyeL=root.getObjectByName('EyeJoint_L'),eyeR=root.getObjectByName('EyeJoint_R');
   if(head&&eyeL&&eyeR){const face=position(eyeL).add(position(eyeR)).multiplyScalar(.5).sub(position(head));face.addScaledVector(up,-face.dot(up));if(face.length()>1e-5)front=face.normalize();}
   const right=new THREE.Vector3().crossVectors(up,front).normalize();front.crossVectors(right,up).normalize();
   for(const [bone,v] of [[head,pose.head],[torso,pose.torso]])if(bone&&v){
    const base=bone.quaternion.clone(),parent=bone.parent.getWorldQuaternion(new THREE.Quaternion());
    const delta=new THREE.Quaternion().setFromAxisAngle(up,THREE.MathUtils.degToRad(-v[0])).multiply(new THREE.Quaternion().setFromAxisAngle(right,THREE.MathUtils.degToRad(v[1]))).multiply(new THREE.Quaternion().setFromAxisAngle(front,THREE.MathUtils.degToRad(v[2])));
    bone.quaternion.premultiply(parent.clone().invert().multiply(delta).multiply(parent)).normalize();saved.push({bone,base,applied:bone.quaternion.clone()});bone.updateWorldMatrix(false,true);
   }
  }
  yaw+=(goalYaw-yaw)*blend;setYaw(yaw);actual={left:false,right:false};root.updateWorldMatrix(true,true);
  const upAxis=new THREE.Vector3(0,1,0),eyeLeft=root.getObjectByName('EyeJoint_L'),eyeRight=root.getObjectByName('EyeJoint_R');
  let frontAxis=new THREE.Vector3(0,0,1).applyQuaternion(root.getWorldQuaternion(new THREE.Quaternion()));
  if(head&&eyeLeft&&eyeRight){frontAxis.copy(eyeLeft.getWorldPosition(new THREE.Vector3()).add(eyeRight.getWorldPosition(new THREE.Vector3())).multiplyScalar(.5).sub(head.getWorldPosition(new THREE.Vector3())));frontAxis.y=0;if(frontAxis.length()<1e-5)frontAxis.set(0,0,1);frontAxis.normalize();}
  for(const side of ['left','right']){
   weights[side]+=((held.has(side)?1:0)-weights[side])*blend;const handPose=pose?.[side+'Hand'];const w=handPose?THREE.MathUtils.smoothstep(Math.hypot(...handPose),0,.25):weights[side],c=chains[side];if(!c||!head||w<.001)continue;
   const pos=b=>b.getWorldPosition(new THREE.Vector3()),h=pos(head),a=pos(c.upper),length=a.distanceTo(pos(c.lower))+pos(c.lower).distanceTo(pos(c.hand));
   const outward=a.clone().sub(h);outward.y=0;if(outward.length()<1e-6)continue;outward.normalize();
   const target=h.clone().addScaledVector(outward,length*.45);target.y+=length*.18;
   if(handPose){target.copy(pos(c.hand)).addScaledVector(outward,Math.abs(handPose[0])*length);target.y+=handPose[1]*length;target.addScaledVector(frontAxis,handPose[2]*length);}
   const pole=a.clone().addScaledVector(frontAxis,length*.7).addScaledVector(outward,length*.2).addScaledVector(upAxis,-length*.2);
   const wristWorld=c.hand.getWorldQuaternion(new THREE.Quaternion());
   const bases=[c.upper,c.lower,c.hand].map(b=>({bone:b,base:b.quaternion.clone()}));
   try{
    solveArm(c.upper,c.lower,c.hand,target,pole,ARM_PREVIEW_LIMITS);
    for(const [i,bone] of [c.upper,c.lower].entries()){
     const reference=bases[i].base,desired=bone.quaternion.clone(),angle=reference.angleTo(desired),limit=THREE.MathUtils.degToRad([100,140][i]);
     bone.quaternion.copy(reference).slerp(desired,w*Math.min(1,limit/Math.max(angle,1e-8))).normalize();bone.updateWorldMatrix(false,true);
    }
    let desiredWrist=wristWorld.clone();
    const digit=n=>root.getObjectByName(`Bip001-${side==='left'?'L':'R'}-Finger${n}`),index=digit(1),middle=digit(2),pinky=digit(4);
    if(index&&middle&&pinky){
     const width=pos(index).sub(pos(pinky)).normalize(),fingers=pos(middle).sub(pos(c.hand));fingers.addScaledVector(width,-fingers.dot(width)).normalize();
     const before=new THREE.Matrix4().makeBasis(width,fingers,new THREE.Vector3().crossVectors(width,fingers).normalize());
     const along=gesture?.id==='gesture_open_arms'?outward.clone():upAxis.clone(),normal=frontAxis.clone().multiplyScalar(side==='left'?1:-1),across=new THREE.Vector3().crossVectors(along,normal).normalize();along.crossVectors(normal,across).normalize();
     const after=new THREE.Matrix4().makeBasis(across,along,new THREE.Vector3().crossVectors(across,along).normalize());
     desiredWrist=new THREE.Quaternion().setFromRotationMatrix(after.multiply(before.invert())).multiply(c.hand.getWorldQuaternion(new THREE.Quaternion()));
     const correction=desiredWrist.clone().multiply(c.hand.getWorldQuaternion(new THREE.Quaternion()).invert()),axis=pos(c.hand).sub(pos(c.lower)).normalize(),projection=new THREE.Vector3(correction.x,correction.y,correction.z).dot(axis);
     const twist=THREE.MathUtils.clamp(2*Math.atan2(projection,correction.w),-Math.PI/2,Math.PI/2)*.6*w;
     c.lower.quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(c.hand.position.clone().normalize(),twist)).normalize();c.lower.updateWorldMatrix(false,true);
    }
    const wanted=c.hand.parent.getWorldQuaternion(new THREE.Quaternion()).invert().multiply(desiredWrist),angle=bases[2].base.angleTo(wanted);
    c.hand.quaternion.copy(bases[2].base).slerp(wanted,w*Math.min(1,THREE.MathUtils.degToRad(90)/Math.max(angle,1e-8))).normalize();c.hand.updateWorldMatrix(false,true);
    for(const state of bases)saved.push({...state,applied:state.bone.quaternion.clone()});
    actual[side]=pos(c.hand).y>a.y+length*.25;
   }catch(error){for(const s of bases)s.bone.quaternion.copy(s.base);lastResult='举手失败：'+error.message;held.delete(side);}
  }
  eyeWeight+=((closed?1:0)-eyeWeight)*blend;
  for(const e of eyes){const base=e.mesh.morphTargetInfluences[e.index]||0,applied=THREE.MathUtils.lerp(base,closed?1:0,eyeWeight);savedEyes.push({...e,base,applied});e.mesh.morphTargetInfluences[e.index]=applied;}
  if(pose?.smile){root.traverse(m=>{if(!m.isMesh||!m.morphTargetInfluences)return;for(const name of ['L_Eye_smile','R_Eye_smile']){const index=m.morphTargetDictionary?.[name]??m.morphTargetDictionary?.[name.replace('_Eye_','_eye_')];if(!Number.isInteger(index))continue;const base=m.morphTargetInfluences[index]||0,applied=Math.max(base,Math.min(.5,pose.smile));speechSaved.push({mesh:m,index,base,applied});m.morphTargetInfluences[index]=applied;}});}
  speechValue+=(speechTarget-speechValue)*(1-Math.exp(-dt*(speechTarget>speechValue?24:16)));
  for(const e of mouthTargets){const base=e.mesh.morphTargetInfluences[e.index]||0,applied=Math.max(base,speechValue*.85);speechSaved.push({...e,base,applied});e.mesh.morphTargetInfluences[e.index]=applied;}
  root.updateWorldMatrix(true,true);for(const skeleton of skeletons)skeleton.update();
 }
 function snapshot(){root.updateWorldMatrix(true,true);for(const side of ['left','right']){const c=chains[side];if(!c)continue;const a=c.upper.getWorldPosition(new THREE.Vector3()),b=c.lower.getWorldPosition(new THREE.Vector3()),h=c.hand.getWorldPosition(new THREE.Vector3());actual[side]=h.y>a.y+(a.distanceTo(b)+b.distanceTo(h))*.25;}
  const eyeValue=eyes.length?eyes.reduce((n,e)=>n+(e.mesh.morphTargetInfluences[e.index]||0),0)/eyes.length:0,shown=yaw+frameYaw();return {available:[...available],eyes:eyes.length?(eyeValue>.95?'已闭合':eyeValue<.1?'睁开或自然眨眼':'半闭或眨眼'):'未绑定闭眼形态',handRaised:{...actual},
   hands:actual.left&&actual.right?'双手抬起':actual.left?'左手抬起':actual.right?'右手抬起':held.size?'正在抬手或受关节限制':'未保持举手',
   facing:Math.abs(yaw-goalYaw)>2?'正在转身':Math.abs(((shown%360)+360)%360-180)<3?'背向镜头':Math.abs(shown%360)<3?'面向镜头':`相对正面转向${Math.round(shown)}度`,yaw:shown,lastResult};}
 function reset(){restore();speechTarget=speechValue=0;gesture=null;held.clear();closed=false;weights.left=weights.right=eyeWeight=0;yaw=goalYaw=0;setYaw(0);lastResult='已停止并复位';}
 return {command,playGesture,tick,restore,snapshot,reset,setSpeechLevel:value=>{speechTarget=Number.isFinite(value)?THREE.MathUtils.clamp(value,0,1):0;},speechState:()=>({level:speechValue,targets:mouthTargets.length,weights:mouthTargets.map(t=>t.mesh.morphTargetInfluences[t.index])}),releaseHands:()=>{held.clear();gesture=null;}};
}
