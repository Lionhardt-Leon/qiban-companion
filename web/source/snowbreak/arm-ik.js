import * as THREE from 'three';

// Two-link world-space solve. No translation, scale, finger or skeleton edits.
export function solveArm(upper,lower,hand,target,pole,{minFlex=0,maxFlex=180}={}){
  if(!Number.isFinite(minFlex)||!Number.isFinite(maxFlex)||minFlex<0||maxFlex>180||minFlex>=maxFlex)throw new Error('Invalid elbow limits');
  const pos=b=>b.getWorldPosition(new THREE.Vector3());
  upper.updateWorldMatrix(true,true);
  for(const bone of [upper,lower,hand]){
    const s=bone.getWorldScale(new THREE.Vector3());
    if(Math.min(s.x,s.y,s.z)<=0||Math.max(s.x,s.y,s.z)-Math.min(s.x,s.y,s.z)>1e-5)throw new Error('Unsupported arm scale');
  }
  const a=pos(upper),b=pos(lower),c=pos(hand),l1=a.distanceTo(b),l2=b.distanceTo(c);
  if(![...target.toArray(),...pole.toArray(),l1,l2].every(Number.isFinite)||Math.min(l1,l2)<1e-6)throw new Error('Invalid arm geometry');
  const direction=target.clone().sub(a),requested=direction.length();
  if(requested<1e-7)throw new Error('Arm target at shoulder');
  direction.normalize();
  const reach=degrees=>Math.sqrt(Math.max(0,l1*l1+l2*l2+2*l1*l2*Math.cos(THREE.MathUtils.degToRad(degrees))));
  const distance=THREE.MathUtils.clamp(requested,Math.max(Math.abs(l1-l2)+1e-6,reach(maxFlex)),Math.min(l1+l2-1e-6,reach(minFlex)));
  const bend=pole.clone().sub(a).addScaledVector(direction,-pole.clone().sub(a).dot(direction));
  if(bend.lengthSq()<1e-10)throw new Error('Ambiguous elbow pole');
  bend.normalize();
  const along=(l1*l1-l2*l2+distance*distance)/(2*distance);
  const elbow=a.clone().addScaledVector(direction,along).addScaledVector(bend,Math.sqrt(Math.max(0,l1*l1-along*along)));
  const end=a.clone().addScaledVector(direction,distance);
  function aim(bone,child,point){
    const origin=pos(bone),from=pos(child).sub(origin).normalize(),to=point.clone().sub(origin).normalize();
    const world=bone.getWorldQuaternion(new THREE.Quaternion());
    world.premultiply(new THREE.Quaternion().setFromUnitVectors(from,to));
    bone.quaternion.copy(bone.parent.getWorldQuaternion(new THREE.Quaternion()).invert().multiply(world)).normalize();
    bone.updateWorldMatrix(true,true);
  }
  aim(upper,lower,elbow);aim(lower,hand,end);
  return {requested:target.toArray(),reachable:end.toArray(),hand:pos(hand).toArray(),clamped:Math.abs(distance-requested)>1e-5,error:pos(hand).distanceTo(end),elbowFlex:THREE.MathUtils.radToDeg(Math.acos(THREE.MathUtils.clamp((distance*distance-l1*l1-l2*l2)/(2*l1*l2),-1,1)))};
}

// Preview guards relative to the imported starting pose, not anatomical calibration.
export const ARM_PREVIEW_LIMITS=Object.freeze({upper:100,lower:140,wrist:60,minFlex:8,maxFlex:145});
export function createArmPreview(root,{side='right'}={}){
  if(!['left','right'].includes(side))throw new Error('Invalid arm side');
  const prefix=side==='right'?'R':'L';
  const upper=root.getObjectByName(`Bip001-${prefix}-UpperArm`),lower=root.getObjectByName(`Bip001-${prefix}-Forearm`),hand=root.getObjectByName(`Bip001-${prefix}-Hand`),head=root.getObjectByName('Bip001-Head');
  const available=!!(upper?.isBone&&lower?.parent===upper&&hand?.parent===lower&&head?.isBone);
  let saved=null,result=null;
  const pos=b=>b.getWorldPosition(new THREE.Vector3());
  function restore(){if(saved){upper.quaternion.copy(saved.upper);lower.quaternion.copy(saved.lower);hand.quaternion.copy(saved.wrist);root.updateWorldMatrix(true,true);}saved=null;}
  function begin(){
    restore();if(!available)throw new Error('Original arm chain unavailable');root.updateWorldMatrix(true,true);
    const a=pos(upper),b=pos(lower),c=pos(hand),h=pos(head),length=a.distanceTo(b)+b.distanceTo(c);
    const outward=a.clone().sub(h);outward.y=0;if(outward.length()<1e-5)throw new Error('Ambiguous shoulder direction');outward.normalize();
    const target=h.clone().addScaledVector(outward,length*.55);target.y+=length*.15;
    const pole=a.clone().addScaledVector(outward,length);pole.y-=length*.35;
    saved={upper:upper.quaternion.clone(),lower:lower.quaternion.clone(),wrist:hand.quaternion.clone(),wristWorld:hand.getWorldQuaternion(new THREE.Quaternion()),start:c,target,pole};result=null;
  }
  function apply(progress){
    if(!Number.isFinite(progress))throw new Error('Invalid arm progress');
    if(!saved)return;upper.quaternion.copy(saved.upper);lower.quaternion.copy(saved.lower);hand.quaternion.copy(saved.wrist);root.updateWorldMatrix(true,true);
    const p=THREE.MathUtils.clamp(progress,0,1),ramp=p<.3?p/.3:p>.7?(1-p)/.3:1,w=ramp*ramp*(3-2*ramp);
    if(w<1e-6)return;
    result=solveArm(upper,lower,hand,saved.target,saved.pole,ARM_PREVIEW_LIMITS);
    const angles={},limited=[];
    function bounded(bone,reference,degrees,weight,key){
      const desired=bone.quaternion.clone(),angle=reference.angleTo(desired),limit=THREE.MathUtils.degToRad(degrees);
      if(angle>limit)limited.push(key);
      bone.quaternion.copy(reference).slerp(desired,weight*Math.min(1,limit/Math.max(angle,1e-10))).normalize();
      angles[key]=THREE.MathUtils.radToDeg(reference.angleTo(bone.quaternion));
    }
    // Blend rotations rather than changing the target/pole at the first frame.
    bounded(upper,saved.upper,ARM_PREVIEW_LIMITS.upper,w,'upper');bounded(lower,saved.lower,ARM_PREVIEW_LIMITS.lower,w,'lower');root.updateWorldMatrix(true,true);
    hand.quaternion.copy(hand.parent.getWorldQuaternion(new THREE.Quaternion()).invert().multiply(saved.wristWorld));
    bounded(hand,saved.wrist,ARM_PREVIEW_LIMITS.wrist,1,'wrist');root.updateWorldMatrix(true,true);
    result={...result,solverError:result.error,hand:pos(hand).toArray(),error:pos(hand).distanceTo(saved.target),angles,limited,weight:w};
  }
  return {begin,apply,restore,snapshot:()=>({available,active:!!saved,side:'anatomical-'+side,experimental:true,limits:ARM_PREVIEW_LIMITS,result,hand:available?pos(hand).toArray():null,wrist:available?hand.quaternion.toArray():null})};
}
