import * as THREE from 'three';
// Small visual surface spring, not a replacement for a full soft-body solver.
export function createSenses(root,camera,canvas){
 let target=new THREE.Vector2(),current=new THREE.Vector2(),until=0,last=0,pressed=false,velocity=0,offset=0,active=false,enabled=true,held=false,touchUntil=0;
 const center={value:new THREE.Vector3()},displacement={value:new THREE.Vector3()},radius={value:.065},direction=new THREE.Vector3();
 const eyes=[],bases=new Map();root.traverse(m=>{
  if(m.isBone&&/^EyeJoint_[LR]$/.test(m.name))eyes.push(m);
  if(!m.isSkinnedMesh||!['skin','cloth-or-room'].includes(m.material?.userData.profile))return;
  const material=m.material,previous=material.onBeforeCompile,cache=material.customProgramCacheKey.bind(material);
  material.onBeforeCompile=shader=>{previous(shader);Object.assign(shader.uniforms,{senseCenter:center,senseOffset:displacement,senseRadius:radius});shader.vertexShader='uniform vec3 senseCenter;uniform vec3 senseOffset;uniform float senseRadius;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>',`#include <project_vertex>\nvec3 senseWorld=(modelMatrix*vec4(transformed,1.0)).xyz;float senseWeight=exp(-dot(senseWorld-senseCenter,senseWorld-senseCenter)/(senseRadius*senseRadius));mvPosition.xyz+=(viewMatrix*vec4(senseOffset*senseWeight,0.0)).xyz;gl_Position=projectionMatrix*mvPosition;`);};material.customProgramCacheKey=()=>cache()+'-surface-spring-v1';material.needsUpdate=true;
 });
 function gaze(x,y,source='camera'){if(source==='camera'&&(held||performance.now()<touchUntil))return;if(!Number.isFinite(x)||!Number.isFinite(y))return;target.set(THREE.MathUtils.clamp(x,-1,1),THREE.MathUtils.clamp(y,-1,1));until=performance.now()+1600;}
 function pointer(e){if(canvas.dataset.snowbreakFrameEdit==='true'||canvas.dataset.snowbreakPaused==='true')return;const r=canvas.getBoundingClientRect();touchUntil=performance.now()+1600;gaze((e.clientX-r.left)/r.width*2-1,1-(e.clientY-r.top)/r.height*2,'touch');}
 function touch(hit){if(!enabled||!hit?.alphaVerified||!Array.isArray(hit.point)||!/body0[0-3]/.test(hit.material||''))return false;center.value.fromArray(hit.point);camera.getWorldDirection(direction);pressed=true;active=true;velocity=0;offset=0;return true;}
 const down=e=>{held=true;pointer(e);};const release=()=>{pressed=false;held=false;touchUntil=performance.now()+1000;};canvas.addEventListener('pointerdown',down);canvas.addEventListener('pointermove',pointer);canvas.addEventListener('pointerup',release);canvas.addEventListener('pointercancel',release);
 function tick(now=performance.now()){
  const dt=Math.min(.04,Math.max(0,(now-last)/1000));last=now;if(now>until)target.set(0,0);current.lerp(target,1-Math.exp(-dt*12));
  const up=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,1),right=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,0);
  for(const eye of eyes){bases.set(eye,eye.quaternion.clone());const parent=new THREE.Matrix4().extractRotation(eye.parent.matrixWorld),delta=new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromAxisAngle(up,current.x*.07).multiply(new THREE.Quaternion().setFromAxisAngle(right,-current.y*.05))),local=parent.clone().invert().multiply(delta).multiply(parent);eye.quaternion.premultiply(new THREE.Quaternion().setFromRotationMatrix(local)).normalize();eye.updateWorldMatrix(false,true);}
  if(active){const steps=Math.max(1,Math.ceil(dt*120)),h=dt/steps;for(let i=0;i<steps;i++){velocity+=((pressed?.0025:0)-offset)*180*h-velocity*15*h;offset=THREE.MathUtils.clamp(offset+velocity*h,-.004,.004);}displacement.value.copy(direction).multiplyScalar(offset);if(!pressed&&Math.abs(offset)+Math.abs(velocity)<.00001){active=false;offset=velocity=0;displacement.value.set(0,0,0);}}
  const skeletons=new Set();if(eyes.length)root.traverse(m=>{if(m.isSkinnedMesh&&!skeletons.has(m.skeleton)){m.skeleton.update();skeletons.add(m.skeleton);}});
 }
 function restore(){for(const [eye,q] of bases)eye.quaternion.copy(q);bases.clear();}
 return {gaze,touch,tick,restore,reset(){restore();pressed=active=false;offset=velocity=0;displacement.value.set(0,0,0);target.set(0,0);current.set(0,0);},snapshot:()=>({eyes:eyes.length,gaze:current.toArray(),offset,pressed,active}),dispose(){for(const [name,fn] of [['pointerdown',down],['pointermove',pointer],['pointerup',release],['pointercancel',release]])canvas.removeEventListener(name,fn);}};
}
