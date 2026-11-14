import * as THREE from 'three';
import {ContactSpring} from '../body/contact-spring.js';
// Small visual surface spring, not a replacement for a full soft-body solver.
export function createSenses(root,camera,canvas){
 let target=new THREE.Vector2(),current=new THREE.Vector2(),until=0,last=0,pressed=false,velocity=0,offset=0,active=false,enabled=true,held=false,touchUntil=0;
 const channels=[],meshes=new Map(),centers={value:Array.from({length:4},()=>new THREE.Vector3())},offsets={value:Array.from({length:4},()=>new THREE.Vector3())},radii={value:[.05,.05,.05,.05]},direction=new THREE.Vector3();let contact=null;
 root.traverse(m=>{if(m.isMesh&&m.userData.snowbreakSurfaceKey)meshes.set(m.userData.snowbreakSurfaceKey,m);});
 function anchor(channel){const hit=channel.hit,mesh=meshes.get(hit.mesh);if(!mesh||!hit.barycentric)return new THREE.Vector3().fromArray(hit.point);const index=mesh.geometry.index,p=new THREE.Vector3();for(let j=0;j<3;j++){const i=index?index.getX(hit.triangle*3+j):hit.triangle*3+j;p.addScaledVector(mesh.getVertexPosition(i,new THREE.Vector3()),hit.barycentric[j]);}return mesh.localToWorld(p);}
 const eyes=[],bases=new Map(),skinSkeletons=new Set();root.traverse(m=>{
  if(m.isSkinnedMesh)skinSkeletons.add(m.skeleton);
  if(m.isBone&&/^EyeJoint_[LR]$/.test(m.name))eyes.push(m);
  if(!m.isSkinnedMesh||!['skin','cloth-or-room'].includes(m.material?.userData.profile))return;
  const material=m.material,previous=material.onBeforeCompile,cache=material.customProgramCacheKey.bind(material);
  material.onBeforeCompile=shader=>{previous(shader);Object.assign(shader.uniforms,{senseCenters:centers,senseOffsets:offsets,senseRadii:radii});shader.vertexShader='uniform vec3 senseCenters[4];uniform vec3 senseOffsets[4];uniform float senseRadii[4];\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>',`#include <project_vertex>
vec3 senseWorld=(modelMatrix*vec4(transformed,1.0)).xyz;
for(int senseI=0;senseI<4;senseI++){vec3 senseDelta=senseWorld-senseCenters[senseI];float senseWeight=exp(-dot(senseDelta,senseDelta)/(senseRadii[senseI]*senseRadii[senseI]));mvPosition.xyz+=(viewMatrix*vec4(senseOffsets[senseI]*senseWeight,0.0)).xyz;}
gl_Position=projectionMatrix*mvPosition;`);};material.customProgramCacheKey=()=>cache()+'-surface-spring-v2';material.needsUpdate=true;
 });
 function gaze(x,y,source='camera'){if(source==='camera'&&(held||performance.now()<touchUntil))return;if(!Number.isFinite(x)||!Number.isFinite(y))return;target.set(THREE.MathUtils.clamp(x,-1,1),THREE.MathUtils.clamp(y,-1,1));until=performance.now()+1600;}
 function pointer(e){if(canvas.dataset.snowbreakFrameEdit==='true'||canvas.dataset.snowbreakPaused==='true')return;const r=canvas.getBoundingClientRect();touchUntil=performance.now()+1600;gaze((e.clientX-r.left)/r.width*2-1,1-(e.clientY-r.top)/r.height*2,'touch');}
 function touch(hit,region){
  if(!enabled||!hit?.alphaVerified||!Array.isArray(hit.point)||!meshes.has(hit.mesh))return false;
  contact?.spring.release();const id=region?.id||hit.anatomy?.id||'body';
  const previous=channels.find(c=>!c.spring.pressed&&c.region===id&&anchor(c).distanceTo(new THREE.Vector3().fromArray(hit.point))<.04);
  if(previous){contact=previous;contact.hit=hit;}else {if(channels.length===4)channels.shift();contact={hit,region:id,spring:new ContactSpring(id),direction:camera.getWorldDirection(new THREE.Vector3())};channels.push(contact);}
  contact.spring.press();pressed=active=true;return true;
 }
 const down=e=>{held=true;pointer(e);};const release=()=>{pressed=false;held=false;contact?.spring.release();contact=null;touchUntil=performance.now()+1000;};canvas.addEventListener('pointerdown',down);canvas.addEventListener('pointermove',pointer);canvas.addEventListener('pointerup',release);canvas.addEventListener('pointercancel',release);canvas.addEventListener('lostpointercapture',release);
 function tick(now=performance.now()){
  const dt=Math.min(.04,Math.max(0,(now-last)/1000));last=now;if(now>until)target.set(0,0);current.lerp(target,1-Math.exp(-dt*12));
  const up=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,1),right=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,0);
  for(const eye of eyes){const base=eye.quaternion.clone();const parent=new THREE.Matrix4().extractRotation(eye.parent.matrixWorld),delta=new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromAxisAngle(up,current.x*.07).multiply(new THREE.Quaternion().setFromAxisAngle(right,-current.y*.05))),local=parent.clone().invert().multiply(delta).multiply(parent);eye.quaternion.premultiply(new THREE.Quaternion().setFromRotationMatrix(local)).normalize();eye.updateWorldMatrix(false,true);bases.set(eye,{base,applied:eye.quaternion.clone()});}
  for(let i=channels.length-1;i>=0;i--){channels[i].spring.step(dt);if(!channels[i].spring.active)channels.splice(i,1);}
  offset=0;velocity=0;active=channels.length>0;
  for(let i=0;i<4;i++){const c=channels[i];offsets.value[i].set(0,0,0);if(!c)continue;centers.value[i].copy(anchor(c));radii.value[i]=c.spring.profile.radius;offsets.value[i].copy(c.direction).multiplyScalar(c.spring.offset);if(Math.abs(c.spring.offset)>Math.abs(offset))offset=c.spring.offset;velocity+=Math.abs(c.spring.velocity);}
  if(eyes.length)for(const skeleton of skinSkeletons)skeleton.update();
 }
 function restore(){for(const [eye,q] of bases)if(eye.quaternion.angleTo(q.applied)<.000001)eye.quaternion.copy(q.base);bases.clear();}
 return {gaze,touch,tick,restore,reset(){restore();pressed=active=held=false;touchUntil=0;offset=velocity=0;channels.length=0;contact=null;for(const value of offsets.value)value.set(0,0,0);target.set(0,0);current.set(0,0);},snapshot:()=>({eyes:eyes.length,gaze:current.toArray(),offset,pressed,active,contacts:channels.map(c=>({region:c.region,offset:c.spring.offset,velocity:c.spring.velocity,pressed:c.spring.pressed,center:anchor(c).toArray()}))}),dispose(){for(const [name,fn] of [['pointerdown',down],['pointermove',pointer],['pointerup',release],['pointercancel',release],['lostpointercapture',release]])canvas.removeEventListener(name,fn);}};
}
