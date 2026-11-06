import * as THREE from 'three';

// A hit is labelled in the mesh's bind pose, before animation or camera edits.
// This avoids comparing a seated/folded body to a standing screen-height rule.
export function createBindAnatomy(mesh){
 if(!mesh.isSkinnedMesh)return ()=>null;
 const bones=new Map(mesh.skeleton.bones.map((b,i)=>[b.name,new THREE.Vector3().setFromMatrixPosition(mesh.skeleton.boneInverses[i].clone().invert())]));
 const pelvis=bones.get('Bip001-Pelvis'),neck=bones.get('Bip001-Neck'),left=bones.get('Bip001-L-UpperArm'),right=bones.get('Bip001-R-UpperArm');
 if(!pelvis||!neck||!left||!right)return ()=>null;
 const height=neck.distanceTo(pelvis);if(height<.05)return ()=>null;
 const up=neck.clone().sub(pelvis).normalize(),across=right.clone().sub(left).normalize(),front=new THREE.Vector3().crossVectors(across,up).normalize();
 const toes=new THREE.Vector3();for(const side of ['L','R']){const foot=bones.get('Bip001-'+side+'-Foot'),toe=bones.get('Bip001-'+side+'-Toe0');if(foot&&toe)toes.add(toe.clone().sub(foot));}if(toes.dot(front)<0)front.negate();
 const positions=mesh.geometry.getAttribute('position');
 return (ids,bary,weighted)=>{
  if(!bary||!['torso','leg','chest','hips',undefined].includes(weighted?.id))return null;
  const rest=new THREE.Vector3();for(let i=0;i<3;i++)rest.addScaledVector(new THREE.Vector3().fromBufferAttribute(positions,ids[i]),bary.getComponent(i));
  const delta=rest.sub(pelvis),x=Math.abs(delta.dot(across))/height,y=delta.dot(up)/height,z=delta.dot(front)/height;
  if(x>.72)return null;let id=null;
  if(y>-.38&&y<-.04&&x<.23&&z>.025)id='pelvis_front';
  else if(y>-.35&&y<.18&&z<-.025)id='hips';
  else if(y>.43&&y<1.02&&z>.025&&x<.67)id='chest';
  else if(y>.10&&y<=.43&&z>.025)id=x>.48?'waist':'abdomen';
  else if(y>.16&&y<1.02&&z<-.025)id='back';
  return id?{id,confidence:.85,source:'bind-pose-surface',coordinates:[x,y,z]}:null;
 };
}
