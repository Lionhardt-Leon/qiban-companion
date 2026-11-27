import * as THREE from 'three';

export function createLearnedMotions(root,camera,config,stance,extraConfig=null){
 const catalogs=[config,extraConfig].filter(Boolean);
 if(!catalogs.length)return {available:()=>[],apply(){},snapshot:()=>({available:false})};
 const validCatalog=cat=>['companion-upper-body-transfer/1','companion-upper-body-transfer/2','companion-upper-body-transfer/3'].includes(cat.schema)&&['Yuki','UniversalMMD','SnowbreakAR'].includes(cat.sourceCharacter)&&/^[A-Za-z0-9_-]{1,64}$/.test(cat.targetCharacter)&&Array.isArray(cat.clips)&&cat.clips.length<=24;
 for(const cat of catalogs){
  if(!validCatalog(cat))throw new Error('Invalid learned motion catalog');
  if(cat.schema.endsWith('/3')&&cat.targetCharacter!=='Universal'&&(cat.stance!=='standing'||stance!=='standing'))throw new Error('Standing motion requires standing source');
 }
 const standing=stance==='standing';
 const get=name=>{const hits=[];root.traverse(b=>{if(b.isBone&&b.name===name)hits.push(b);});if(hits.length!==1)throw new Error('Learned motion bone missing/ambiguous: '+name);return hits[0];};
 const opt=name=>{const hits=[];root.traverse(b=>{if(b.isBone&&b.name===name)hits.push(b);});return hits.length===1?hits[0]:null;};
 const head=opt('Bip001-Head')||opt('Bone_head');if(!head)return {available:()=>[],apply(){},snapshot:()=>({available:false})};
 const chest=opt('Bip001-Spine3')||opt('Bip001-Spine2')||opt('Bip001-Spine');if(!chest)return {available:()=>[],apply(){},snapshot:()=>({available:false})};
 const chains={};
 for(const [key,side] of [['left','L'],['right','R']]){
  const upper=opt(`Bip001-${side}-UpperArm`),lower=opt(`Bip001-${side}-Forearm`),hand=opt(`Bip001-${side}-Hand`);
  if(!upper||!lower||!hand||lower.parent!==upper||hand.parent!==lower)return {available:()=>[],apply(){},snapshot:()=>({available:false})};
  chains[key]={upper,lower,hand};
 }
 const pos=b=>b.getWorldPosition(new THREE.Vector3());
 root.updateWorldMatrix(true,true);
 let sign=1;
 const initialRight=pos(chains.right.upper).sub(pos(chains.left.upper)).normalize();
 const initialUp=pos(head).sub(pos(chest)).normalize();
 if(new THREE.Vector3().crossVectors(initialRight,initialUp).dot(camera.position.clone().sub(pos(chest)))<0)sign=-1;
 const clips=new Map();
 for(const cat of catalogs){
  const catStanding=cat.schema.endsWith('/3')&&cat.stance==='standing';
  const isUniversal=cat.targetCharacter==='Universal';
  for(const c of cat.clips){
   const allowedId=['yuki_hello','yuki_Yes','yuki_No','yuki_Peace_hand','yuki_dance_90bpm','yuki_dance_120bpm','yuki_f_vibe_dance_60_bpm_002'].includes(c.id)||/^(mmd|ar)_[a-zA-Z0-9_-]{1,48}$/.test(c.id);
   if(!allowedId||clips.has(c.id)||!Number.isInteger(c.frames)||c.frames<2||c.frames>1800||!Number.isFinite(c.fps)||c.fps<=0||c.fps>60)throw new Error('Invalid learned clip');
   const channels={};for(const [key,value] of Object.entries(c.channels||{})){
    const width=/^(left|right)(Curl[0-4]_[0-2]|Spread[0-4])$/.test(key)?1:['headDelta','chestDelta',...(catStanding?['pelvisDelta','leftFootDelta','rightFootDelta']:[])].includes(key)?4:(['leftUpper','leftLower','rightUpper','rightLower','rightHandWidth','rightHandForward','leftHandWidth','leftHandForward',...(catStanding?['leftThigh','rightThigh','leftCalf','rightCalf']:[])].includes(key)||/^(left|right)Finger[0-4]_[0-2]$/.test(key))?3:0;
    if(!width||typeof value!=='string')throw new Error('Invalid learned channel');
    const data=Uint8Array.from(atob(value),ch=>ch.charCodeAt(0));if(data.byteLength!==c.frames*width*4)throw new Error('Learned channel truncated');
    const values=new Float32Array(data.buffer);if(!values.every(Number.isFinite))throw new Error('Non-finite learned pose');
    if(width===1&&values.some(v=>v<-.31||v>1.11))throw new Error('Invalid learned finger angle');
    for(let i=0;width>1&&i<c.frames;i++){let length=0;for(let k=0;k<width;k++)length+=values[i*width+k]**2;if(Math.abs(length-1)>.01)throw new Error('Invalid learned direction/quaternion');}
    channels[key]={values,width};
   }
   if(!channels.headDelta)throw new Error('Missing learned head reference');
   const isMmd=c.id.startsWith('mmd_')||c.id.startsWith('ar_'),dance=c.id.includes('dance')||isMmd;
   const expectedKind=dance?(catStanding?'standing-dance':'seated-dance'):c.id==='yuki_Peace_hand'?'peace':c.id==='yuki_hello'?'greeting':'head',arms=dance?['left','right']:expectedKind==='head'?[]:['right'];
   if(!cat.schema.endsWith('/1')&&(c.motionKind!==expectedKind||JSON.stringify(c.arms)!==JSON.stringify(arms)))throw new Error('Invalid learned action capability');
   if(dance&&!standing&&!isUniversal)continue;
   const kind=dance?(standing&&catStanding?'standing-dance':'seated-dance'):expectedKind;
   if(kind==='standing-dance'&&['pelvisDelta','leftThigh','rightThigh','leftCalf','rightCalf','leftFootDelta','rightFootDelta'].some(k=>!channels[k]))throw new Error('Missing standing body channels');
   clips.set(c.id,{...c,kind,arms,channels,duration:(c.frames-1)/c.fps});
  }
 }
 const digitsBySide=Object.fromEntries([['left','L'],['right','R']].map(([side,letter])=>[side,Array.from({length:5},(_,i)=>[opt(`Bip001-${letter}-Finger${i}`),opt(`Bip001-${letter}-Finger${i}1`),opt(`Bip001-${letter}-Finger${i}2`)])]));
 const pelvis=standing?opt('Bip001-Pelvis'):null;
 const legs=standing?Object.fromEntries([['left','L'],['right','R']].map(([side,l])=>[side,{thigh:opt(`Bip001-${l}-Thigh`),calf:opt(`Bip001-${l}-Calf`),foot:opt(`Bip001-${l}-Foot`),toe:opt(`Bip001-${l}-Toe0`)}])):{};
 const hasFullLegs=!!pelvis&&Object.values(legs).every(l=>l.thigh&&l.calf&&l.foot&&l.calf.parent===l.thigh&&l.foot.parent===l.calf);
 let diagnostics={available:true,mappedArmBones:4,mappedHeadBones:1,limited:0,legWrites:0,fingerWrites:0};
 function basis(){
  const right=pos(chains.right.upper).sub(pos(chains.left.upper)).normalize(),up=pos(head).sub(pos(chest));up.addScaledVector(right,-up.dot(right)).normalize();
  const front=new THREE.Vector3().crossVectors(right,up).multiplyScalar(sign).normalize();
  return {right,up,front,vector:v=>right.clone().multiplyScalar(v[0]).addScaledVector(up,v[1]).addScaledVector(front,v[2])};
 }
 const solved=new Map();let lastClip=null,lastTime=-1;
 function apply(id,time,weight,options={}){
  const clip=clips.get(id);if(!clip||weight<=0)return;const fullBody=clip.kind==='standing-dance'&&hasFullLegs,amplitude=fullBody&&Number.isFinite(options.amplitude)?THREE.MathUtils.clamp(options.amplitude,.5,1.2):1;diagnostics.fingerWrites=0;diagnostics.armWrites=0;diagnostics.chestWrites=0;diagnostics.workspaceAdjusted=0;
  if(id!==lastClip||time<=lastTime||time-lastTime>.2)solved.clear();lastClip=id;lastTime=time;
  root.updateWorldMatrix(true,true);let body=basis();const f=THREE.MathUtils.clamp(time*clip.fps,0,clip.frames-1),lo=Math.floor(f),hi=Math.min(lo+1,clip.frames-1),t=f-lo;
  function channel(key){const c=clip.channels[key];if(!c)return null;
   if(fullBody&&c.width===1)return [THREE.MathUtils.lerp(c.values[lo],c.values[hi],t)];
   if(fullBody&&c.width===3)return new THREE.Vector3().fromArray(c.values,lo*3).lerp(new THREE.Vector3().fromArray(c.values,hi*3),t).normalize().toArray();
   if(c.width===1){let sum=0;for(const offset of [-2,-1,0,1,2]){const sample=THREE.MathUtils.clamp(f+offset,0,clip.frames-1),a=Math.floor(sample),b=Math.min(a+1,clip.frames-1);sum+=(c.values[a]+(c.values[b]-c.values[a])*(sample-a))*(offset===0?.4:Math.abs(offset)===1?.2:.1);}return [sum];}
   if(c.width===4)return new THREE.Quaternion().fromArray(c.values,lo*4).slerp(new THREE.Quaternion().fromArray(c.values,hi*4),t).normalize().toArray();
   const result=new THREE.Vector3();
   for(const offset of [-2,-1,0,1,2]){const sample=THREE.MathUtils.clamp(f+offset,0,clip.frames-1),a=Math.floor(sample),b=Math.min(a+1,clip.frames-1);result.add(new THREE.Vector3().fromArray(c.values,a*3).lerp(new THREE.Vector3().fromArray(c.values,b*3),sample-a).multiplyScalar(offset===0?.4:Math.abs(offset)===1?.2:.1));}
   return result.normalize().toArray();
  }
  function bounded(bone,reference,desired,max,strength=weight){const angle=reference.angleTo(desired),limit=THREE.MathUtils.degToRad(max);if(angle>limit)diagnostics.limited++;bone.quaternion.copy(reference).slerp(desired,strength*Math.min(amplitude,limit/Math.max(angle,1e-8))).normalize();}
  function aim(bone,child,direction,max,strength=weight){
    bone.parent.updateWorldMatrix(true,false);
    const reference=bone.quaternion.clone(),transported=reference.clone();
    const from=(child?child.position.clone():new THREE.Vector3(1,0,0)).multiply(bone.scale).applyQuaternion(transported).normalize();
    const to=direction.clone().transformDirection(bone.parent.matrixWorld.clone().invert());
    const desired=new THREE.Quaternion().setFromUnitVectors(from,to).multiply(transported).normalize();
    solved.set(bone,desired.clone());
    bounded(bone,reference,desired,max,strength);bone.updateWorldMatrix(false,true);
   }
  function applyDelta(bone,h,limit,strength){
   const b=new THREE.Matrix4().makeBasis(body.right,body.up,body.front),delta=new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion(...h));
   const worldDelta=b.clone().multiply(delta).multiply(b.clone().invert());bone.parent.updateWorldMatrix(true,false);
   const parent=new THREE.Matrix4().extractRotation(bone.parent.matrixWorld),localDelta=parent.clone().invert().multiply(worldDelta).multiply(parent);
   const reference=bone.quaternion.clone(),desired=new THREE.Quaternion().setFromRotationMatrix(localDelta).multiply(reference).normalize();bounded(bone,reference,desired,limit,strength);bone.updateWorldMatrix(false,true);
  }
  const groundUp=new THREE.Vector3(0,1,0).transformDirection(root.parent.matrixWorld),ground=fullBody?Math.min(...Object.values(legs).map(l=>pos(l.foot).dot(groundUp))):0;
  diagnostics.legWrites=0;diagnostics.groundCorrection=0;diagnostics.sourceTime=time;diagnostics.sourceFrame=f;diagnostics.sourceFPS=clip.fps;diagnostics.amplitude=amplitude;diagnostics.sourceBPM=fullBody?(id.includes('90bpm')?90:id.includes('120bpm')?120:60):null;
  if(fullBody){applyDelta(pelvis,channel('pelvisDelta'),30,weight);body=basis();}
  const chestMotion=channel('chestDelta');if(chestMotion){applyDelta(chest,chestMotion,fullBody?35:10,weight*(fullBody?1:.35));body=basis();diagnostics.chestWrites=1;}
  if(fullBody){
   for(const [side,leg] of Object.entries(legs)){
    if(leg.calf.parent!==leg.thigh||leg.foot.parent!==leg.calf)throw new Error('Standing leg hierarchy mismatch');
    aim(leg.thigh,leg.calf,body.vector(channel(side+'Thigh')),110,weight);aim(leg.calf,leg.foot,body.vector(channel(side+'Calf')),150,weight);applyDelta(leg.foot,channel(side+'FootDelta'),45,weight);diagnostics.legWrites+=3;
   }
   const correction=THREE.MathUtils.clamp(ground-Math.min(...Object.values(legs).map(l=>pos(l.foot).dot(groundUp))),-.18,.18);
   const point=pos(pelvis),inverse=pelvis.parent.matrixWorld.clone().invert(),offset=point.clone().addScaledVector(groundUp,correction).applyMatrix4(inverse).sub(point.clone().applyMatrix4(inverse));pelvis.position.add(offset);pelvis.updateWorldMatrix(false,true);diagnostics.groundCorrection=correction;
  }
  function seatedDirections(chain,upper,lower,side){
   const shoulder=pos(chain.upper),l1=pos(chain.lower).distanceTo(shoulder),l2=pos(chain.hand).distanceTo(pos(chain.lower));
   const elbow=shoulder.clone().addScaledVector(body.vector(upper),l1),goal=elbow.clone().addScaledVector(body.vector(lower),l2),origin=pos(chest),relative=goal.clone().sub(origin);
   let x=relative.dot(body.right),y=relative.dot(body.up),z=relative.dot(body.front);const before=[x,y,z];
   y=THREE.MathUtils.clamp(y,-.16,.60);
   // Keep wrist targets in front of the seated torso; this is a conservative
   // workspace, not a cloth/mesh collision simulation.
   const mask=(1-THREE.MathUtils.smoothstep(Math.abs(x),.16,.28))*THREE.MathUtils.smoothstep(y,-.42,-.32)*(1-THREE.MathUtils.smoothstep(y,.18,.32));z+=Math.max(0,.23-z)*mask;
   goal.copy(origin).addScaledVector(body.right,x).addScaledVector(body.up,y).addScaledVector(body.front,z);
   const away=goal.clone().sub(pos(head));if(away.length()<.14)goal.copy(pos(head)).add(away.length()>.001?away.setLength(.14):body.front.clone().multiplyScalar(.14));
   if(before[1]!==y||before[2]!==z)diagnostics.workspaceAdjusted++;
   const axis=goal.clone().sub(shoulder),distance=THREE.MathUtils.clamp(axis.length(),Math.abs(l1-l2)+.015,(l1+l2)*.98);axis.normalize();goal.copy(shoulder).addScaledVector(axis,distance);
   const outward=body.right.clone().multiplyScalar(side==='right'?1:-1),pole=outward.clone().addScaledVector(body.front,.3).addScaledVector(body.up,.2);pole.addScaledVector(axis,-pole.dot(axis));
   if(pole.length()<.0001)pole.copy(body.front).addScaledVector(axis,-body.front.dot(axis));pole.normalize();
   const along=(l1*l1-l2*l2+distance*distance)/(2*distance),height=Math.sqrt(Math.max(0,l1*l1-along*along));
   const targetElbow=shoulder.clone().addScaledVector(axis,along).addScaledVector(pole,height);
   return {upper:targetElbow.clone().sub(shoulder).normalize(),lower:goal.sub(targetElbow).normalize()};
  }
  for(const side of clip.arms){
   const chain=chains[side],digits=digitsBySide[side],upper=channel(side+'Upper'),lower=channel(side+'Lower');if(!upper||!lower)continue;
   const armWeight=['greeting','peace'].includes(clip.kind)?weight*THREE.MathUtils.smoothstep(lower[1],-1,1):weight*(fullBody?1:.72);
   const directions=clip.kind==='seated-dance'?seatedDirections(chain,upper,lower,side):{upper:body.vector(upper),lower:body.vector(lower)};
   aim(chain.upper,chain.lower,directions.upper,120,armWeight);aim(chain.lower,chain.hand,directions.lower,170,armWeight);diagnostics.armWrites+=2;
   const widthChannel=channel(side+'HandWidth'),forwardChannel=channel(side+'HandForward');
   const hasHandDigits=digits[1]?.[0]&&digits[2]?.[0]&&digits[4]?.[0];
   function handFrame(){const width=pos(digits[1][0]).sub(pos(digits[4][0])).normalize(),forward=pos(digits[2][0]).sub(pos(chain.hand));forward.addScaledVector(width,-forward.dot(width)).normalize();return new THREE.Matrix4().makeBasis(width,forward,new THREE.Vector3().crossVectors(width,forward).normalize());}
   if(!widthChannel||!forwardChannel||!hasHandDigits)continue;
   root.updateWorldMatrix(true,true);const width=body.vector(widthChannel).normalize(),forward=body.vector(forwardChannel);forward.addScaledVector(width,-forward.dot(width)).normalize();
   const desiredFrame=new THREE.Matrix4().makeBasis(width,forward,new THREE.Vector3().crossVectors(width,forward).normalize()),worldDelta=desiredFrame.multiply(handFrame().invert()),hand=chain.hand;
   const parent=new THREE.Matrix4().extractRotation(hand.parent.matrixWorld),localDelta=parent.clone().invert().multiply(worldDelta).multiply(parent),reference=hand.quaternion.clone(),desired=new THREE.Quaternion().setFromRotationMatrix(localDelta).multiply(reference).normalize();
   bounded(hand,reference,desired,clip.kind==='greeting'?110:clip.kind==='seated-dance'?75:110,armWeight*(clip.kind==='seated-dance'?.7:1));hand.updateWorldMatrix(false,true);
   for(let digit=0;digit<5;digit++)for(let segment=0;segment<3;segment++){
    const bone=digits[digit]?.[segment];if(!bone)continue;
    const value=channel(`${side}Finger${digit}_${segment}`);if(!value)continue;
    const direction=new THREE.Vector3(...value).normalize(),previous=segment?new THREE.Vector3(...channel(`${side}Finger${digit}_${segment-1}`)).normalize():new THREE.Vector3(0,1,0);
    let curl=THREE.MathUtils.clamp(Math.atan2(-direction.z,Math.max(.1,direction.y))-Math.atan2(-previous.z,Math.max(.1,previous.y)),-.15,digit===0?.45:1.1),spread=segment===0&&digit!==0?THREE.MathUtils.clamp(Math.atan2(direction.x,direction.y),-.3,.3):0;
    const exportedCurl=channel(`${side}Curl${digit}_${segment}`),exportedSpread=channel(`${side}Spread${digit}`);if(exportedCurl)curl=exportedCurl[0];if(segment===0&&digit!==0&&exportedSpread)spread=exportedSpread[0];
    if(clip.kind==='peace'){curl=digit===1||digit===2?.02:digit===0?.4:.95;if(segment===0)spread=digit===1?.14:digit===2?-.08:0;}
    const sign=side==='left'?-1:1,base=bone.quaternion.clone(),bind=new THREE.Quaternion().fromArray(bone.userData.bindLocalQuaternion||base.toArray());
    const target=bind.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1),spread*sign)).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),curl*sign));bone.quaternion.copy(base).slerp(target,weight).normalize();diagnostics.fingerWrites++;
   }
  }
  const h=channel('headDelta');if(h){
   const b=new THREE.Matrix4().makeBasis(body.right,body.up,body.front),delta=new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion(...h));
   const worldDelta=b.clone().multiply(delta).multiply(b.clone().invert());
   head.parent.updateWorldMatrix(true,false);
   const parent=new THREE.Matrix4().extractRotation(head.parent.matrixWorld);
   const localDelta=parent.clone().invert().multiply(worldDelta).multiply(parent);
   const original=head.quaternion.clone(),desired=new THREE.Quaternion().setFromRotationMatrix(localDelta).multiply(original).normalize();
   bounded(head,original,desired,40);
  }
  root.updateWorldMatrix(true,true);const updated=new Set();root.traverse(m=>{if(m.isSkinnedMesh&&!updated.has(m.skeleton)){m.skeleton.update();updated.add(m.skeleton);}});
 }
 return {available:()=>[...clips.values()].map(c=>({id:c.id,label:c.label,duration:c.duration,arms:[...c.arms],kind:c.kind})),apply,snapshot:()=>{root.updateWorldMatrix(true,true);const body=basis(),chain=chains.right;return {...diagnostics,parentDeterminant:chain.upper.parent.matrixWorld.determinant(),rightUpper:pos(chain.lower).sub(pos(chain.upper)).normalize().toArray(),rightLower:pos(chain.hand).sub(pos(chain.lower)).normalize().toArray(),handHeight:pos(chain.hand).sub(pos(chain.lower)).dot(body.up)};}};
}
