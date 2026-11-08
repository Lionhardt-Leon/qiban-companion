import * as THREE from 'three';

// Fit three joint angles, never a free 3D knee quaternion. Evaluate the actual
// hierarchy so inherited non-uniform source scales are preserved.
export function solveSeatedLeg(thigh,calf,foot,requested){
 if(calf.parent!==thigh||foot.parent!==calf)throw new Error('Invalid leg chain');
 const pos=b=>b.getWorldPosition(new THREE.Vector3()),bases=[thigh,calf,foot].map(b=>b.quaternion.clone());thigh.updateWorldMatrix(true,true);
 const a=pos(thigh),b=pos(calf),c=pos(foot),length=a.distanceTo(b)+b.distanceTo(c),offset=requested.clone().sub(c);
 if(![...requested.toArray(),length].every(Number.isFinite)||length<.05)throw new Error('Invalid leg target');
 offset.clampLength(0,Math.min(.16,length*.2));const target=c.clone().add(offset);
 const plane=b.clone().sub(a).cross(c.clone().sub(b));if(plane.lengthSq()<1e-8)return {accepted:false,reason:'straight-leg-pole'};plane.normalize();
 function localAxis(bone,world){const origin=pos(bone);return bone.worldToLocal(origin.clone().add(world)).sub(bone.worldToLocal(origin)).normalize();}
 const hipAxis=localAxis(thigh,plane),kneeAxis=localAxis(calf,plane),along=b.clone().sub(a).normalize(),hipSide=localAxis(thigh,new THREE.Vector3().crossVectors(plane,along).normalize());
 const nativeFlex=Math.PI-a.clone().sub(b).angleTo(c.clone().sub(b)),angles=[0,0,0],limits=[THREE.MathUtils.degToRad(22),THREE.MathUtils.degToRad(15),THREE.MathUtils.degToRad(30)];
 function evaluate(p){thigh.quaternion.copy(bases[0]).multiply(new THREE.Quaternion().setFromAxisAngle(hipAxis,p[0])).multiply(new THREE.Quaternion().setFromAxisAngle(hipSide,p[1]));calf.quaternion.copy(bases[1]).multiply(new THREE.Quaternion().setFromAxisAngle(kneeAxis,p[2]));foot.quaternion.copy(bases[2]);thigh.updateWorldMatrix(true,true);return pos(foot);}
 function valid(){const x=pos(thigh),y=pos(calf),z=pos(foot),normal=y.clone().sub(x).cross(z.clone().sub(y));const flex=Math.PI-x.clone().sub(y).angleTo(z.clone().sub(y));return normal.dot(plane)>0&&flex>=Math.min(nativeFlex,THREE.MathUtils.degToRad(5))-.001&&flex<=Math.max(nativeFlex,THREE.MathUtils.degToRad(150))+.001;}
 let best=angles.slice(),bestError=c.distanceToSquared(target);const epsilon=.001;
 for(let iteration=0;iteration<14;iteration++){
  const current=evaluate(angles),error=target.clone().sub(current);if(error.length()<.0008)break;
  const columns=angles.map((_,i)=>{const p=angles.slice();p[i]+=epsilon;return evaluate(p).sub(current).multiplyScalar(1/epsilon);});evaluate(angles);
  const normal=new THREE.Matrix3().set(...[0,1,2].flatMap(i=>[0,1,2].map(j=>columns[i].dot(columns[j])+(i===j?.002:0))));const step=new THREE.Vector3(...columns.map(v=>v.dot(error))).applyMatrix3(normal.invert());
  const proposed=angles.map((v,i)=>THREE.MathUtils.clamp(v+THREE.MathUtils.clamp(step.getComponent(i),-.12,.12),-limits[i],limits[i]));evaluate(proposed);
  if(!valid())break;const cost=pos(foot).distanceToSquared(target);if(cost>=bestError)break;best=proposed.slice();bestError=cost;angles.splice(0,3,...proposed);
 }
 evaluate(best);return {accepted:true,angles:best,offset:offset.length(),error:Math.sqrt(bestError),nativeFlex,flex:Math.PI-pos(thigh).sub(pos(calf)).angleTo(pos(foot).sub(pos(calf))),kneePlaneDot:pos(calf).sub(pos(thigh)).cross(pos(foot).sub(pos(calf))).normalize().dot(plane)};
}
