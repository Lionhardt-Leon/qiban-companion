import * as THREE from 'three';
import {solveArm,ARM_PREVIEW_LIMITS} from './source/snowbreak/arm-ik.js';
export function createEmbodiedActions(root,setYaw,frameYaw=()=>0){
 const chains={};for(const [side,l] of [['left','L'],['right','R']]){
  const upper=root.getObjectByName(`Bip001-${l}-UpperArm`),lower=root.getObjectByName(`Bip001-${l}-Forearm`),hand=root.getObjectByName(`Bip001-${l}-Hand`);
  if(upper?.isBone&&lower?.parent===upper&&hand?.parent===lower)chains[side]={upper,lower,hand};
 }
 const head=root.getObjectByName('Bip001-Head'),eyes=[],skeletons=new Set();root.traverse(m=>{if(m.isSkinnedMesh)skeletons.add(m.skeleton);});
 root.traverse(m=>{if(m.isMesh&&m.morphTargetInfluences)for(const n of ['L_Eye_close','R_Eye_close']){const i=m.morphTargetDictionary?.[n];if(Number.isInteger(i))eyes.push({mesh:m,index:i,name:n});}});
 const available=['turn_left','turn_right','turn_back','face_front'];
 if(head&&chains.left)available.push('raise_left_hand');if(head&&chains.right)available.push('raise_right_hand');
 if(head&&chains.left&&chains.right)available.push('raise_both_hands','lower_hands');
 if(eyes.some(e=>e.name==='L_Eye_close')&&eyes.some(e=>e.name==='R_Eye_close'))available.push('close_eyes','open_eyes');
 let held=new Set(),closed=false,yaw=0,goalYaw=0,last=performance.now(),lastResult='尚无动作回执';
 const weights={left:0,right:0};let eyeWeight=0;const saved=[],savedEyes=[];let actual={left:false,right:false};
 function restore(){for(const s of saved)if(s.bone.quaternion.angleTo(s.applied)<1e-6)s.bone.quaternion.copy(s.base);saved.length=0;for(const e of savedEyes)if(Math.abs(e.mesh.morphTargetInfluences[e.index]-e.applied)<1e-6)e.mesh.morphTargetInfluences[e.index]=e.base;savedEyes.length=0;}
 function command(id){
  if(!available.includes(id))throw new Error('当前模型不支持该身体指令');
  if(id==='raise_left_hand')held.add('left');if(id==='raise_right_hand')held.add('right');if(id==='raise_both_hands')held=new Set(['left','right']);if(id==='lower_hands')held.clear();
  if(id==='close_eyes')closed=true;if(id==='open_eyes')closed=false;
  if(id==='turn_left')goalYaw+=90;if(id==='turn_right')goalYaw-=90;if(id==='turn_back')goalYaw=180-frameYaw();if(id==='face_front')goalYaw=-frameYaw();
  lastResult='已接收：'+id;return snapshot();
 }
 function tick(){
  const now=performance.now(),dt=Math.min(.25,(now-last)/1000);last=now;const blend=1-Math.exp(-9*dt);
  yaw+=(goalYaw-yaw)*blend;setYaw(yaw);actual={left:false,right:false};root.updateWorldMatrix(true,true);
  for(const side of ['left','right']){
   weights[side]+=((held.has(side)?1:0)-weights[side])*blend;const w=weights[side],c=chains[side];if(!c||!head||w<.001)continue;
   const pos=b=>b.getWorldPosition(new THREE.Vector3()),h=pos(head),a=pos(c.upper),length=a.distanceTo(pos(c.lower))+pos(c.lower).distanceTo(pos(c.hand));
   const outward=a.clone().sub(h);outward.y=0;if(outward.length()<1e-6)continue;outward.normalize();
   const target=h.clone().addScaledVector(outward,length*.45);target.y+=length*.18;
   const pole=a.clone().addScaledVector(outward,length);pole.y-=length*.35;
   const bases=[c.upper,c.lower,c.hand].map(b=>({bone:b,base:b.quaternion.clone()}));
   try{
    solveArm(c.upper,c.lower,c.hand,target,pole,ARM_PREVIEW_LIMITS);
    for(const [i,s] of bases.entries()){
     const desired=s.bone.quaternion.clone(),limit=THREE.MathUtils.degToRad([100,140,60][i]),angle=s.base.angleTo(desired);
     s.bone.quaternion.copy(s.base).slerp(desired,w*Math.min(1,limit/Math.max(angle,1e-8))).normalize();
     saved.push({...s,applied:s.bone.quaternion.clone()});s.bone.updateWorldMatrix(false,true);
    }
    actual[side]=pos(c.hand).y>a.y+length*.25;
   }catch(error){for(const s of bases)s.bone.quaternion.copy(s.base);lastResult='举手失败：'+error.message;held.delete(side);}
  }
  eyeWeight+=((closed?1:0)-eyeWeight)*blend;
  for(const e of eyes){const base=e.mesh.morphTargetInfluences[e.index]||0,applied=THREE.MathUtils.lerp(base,closed?1:0,eyeWeight);savedEyes.push({...e,base,applied});e.mesh.morphTargetInfluences[e.index]=applied;}
  root.updateWorldMatrix(true,true);for(const skeleton of skeletons)skeleton.update();
 }
 function snapshot(){const eyeValue=eyes.length?eyes.reduce((n,e)=>n+(e.mesh.morphTargetInfluences[e.index]||0),0)/eyes.length:0,shown=yaw+frameYaw();return {available:[...available],eyes:eyes.length?(eyeValue>.95?'已闭合':eyeValue<.1?'睁开或自然眨眼':'半闭或眨眼'):'未绑定闭眼形态',
   hands:actual.left&&actual.right?'双手抬起':actual.left?'左手抬起':actual.right?'右手抬起':held.size?'正在抬手或受关节限制':'未保持举手',
   facing:Math.abs(yaw-goalYaw)>2?'正在转身':Math.abs(((shown%360)+360)%360-180)<3?'背向镜头':Math.abs(shown%360)<3?'面向镜头':`相对正面转向${Math.round(shown)}度`,yaw:shown,lastResult};}
 function reset(){restore();held.clear();closed=false;weights.left=weights.right=eyeWeight=0;yaw=goalYaw=0;setYaw(0);lastResult='已停止并复位';}
 return {command,tick,restore,snapshot,reset};
}
