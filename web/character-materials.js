import * as THREE from 'three';

// Local rendering profiles, not a reconstruction of the unavailable UE shader.
export function characterMaterial(name,map,normal,state){
 const eye=/eye01/.test(name),face=/face01/.test(name),hair=/hair01/.test(name);
 const skin=/body00(?:_ma)?_inst|face01/.test(name);
 const shared={color:map?0xffffff:0xcac7c3,map,transparent:!!state.transparent,depthWrite:!state.transparent,alphaTest:map?(state.alphaCutoff||0):0,side:state.doubleSided===false?THREE.FrontSide:THREE.DoubleSide};
 let material;
 if(eye)material=new THREE.MeshBasicMaterial(shared);
 else {
  material=new THREE.MeshPhysicalMaterial({...shared,normalMap:normal||null,normalScale:new THREE.Vector2(face?.22:.48,face?-.22:-.48),roughness:hair?.42:skin?.68:.6,metalness:0,clearcoat:hair?.22:0,clearcoatRoughness:.48,envMapIntensity:hair?.6:skin?.25:.35});
  if(face||skin){
   material.onBeforeCompile=shader=>{
    // Broad, soft facial lighting avoids a faceted nose/chin under a single key.
    shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>\nnormal=normalize(mix(normal,vec3(0.0,0.0,1.0),${face?'0.72':'0.18'}));`);
   };
   material.customProgramCacheKey=()=>face?'enya-soft-face-v1':'enya-soft-skin-v1';
  }
 }
 if(state.transparent){material.polygonOffset=true;material.polygonOffsetFactor=-.5;material.polygonOffsetUnits=-.5;}
 material.userData.profile=eye?'eye':face?'soft-face':hair?'hair':skin?'skin':'cloth-or-room';
 return material;
}

export function installCharacterLights(scene,renderer){
 renderer.outputColorSpace=THREE.SRGBColorSpace;
 renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
 const hemi=new THREE.HemisphereLight(0xfff4eb,0xa1aec4,1.4);scene.add(hemi);
 const key=new THREE.DirectionalLight(0xfff2e6,1.9);key.position.set(-2,4,5);scene.add(key);
 scene.add(key.target);key.castShadow=true;key.shadow.mapSize.set(1024,1024);key.shadow.bias=-.00015;key.shadow.normalBias=.008;key.shadow.radius=2;
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
 const fill=new THREE.DirectionalLight(0xdfeaff,1.0);fill.position.set(3,2,4);scene.add(fill);
 const rim=new THREE.DirectionalLight(0xeee5ff,.9);rim.position.set(1,3,-4);scene.add(rim);
 // Local studio reflection, built once. It adds broad highlights, never texture detail.
 const studio=new THREE.Scene();studio.background=new THREE.Color(.18,.18,.2);
 const panelGeometry=new THREE.PlaneGeometry(1,1),panelMaterials=[];
 for(const [position,scale,color,intensity] of [[[-4,4,5],[5,7],0xffeee1,3],[[5,2,3],[4,6],0xe3edff,2],[[0,5,-4],[6,3],0xffe8f0,2]]){
  const material=new THREE.MeshBasicMaterial({color,side:THREE.DoubleSide});material.color.multiplyScalar(intensity);panelMaterials.push(material);
  const panel=new THREE.Mesh(panelGeometry,material);panel.position.fromArray(position);panel.scale.set(scale[0],scale[1],1);panel.lookAt(0,1,0);studio.add(panel);
 }
 const generator=new THREE.PMREMGenerator(renderer),environment=generator.fromScene(studio,.08,.1,30);generator.dispose();panelGeometry.dispose();for(const m of panelMaterials)m.dispose();scene.environment=environment.texture;
 let shadowCap=2048;
 function resizeShadow(size){if(key.shadow.mapSize.x===size)return;key.shadow.mapSize.set(size,size);key.shadow.map?.dispose();key.shadow.map=null;key.shadow.needsUpdate=true;}
 let state={exposure:1.05,warmth:.5,reflection:1,shadows:true,shadowSize:1024,key:1.9,fill:1,rim:.9};
 function set(next){
  const value={...state,...next};if(![value.exposure,value.warmth,value.reflection].every(Number.isFinite)||typeof value.shadows!=='boolean'||value.exposure<.65||value.exposure>1.45||value.warmth<0||value.warmth>1||value.reflection<0||value.reflection>1.5)throw new Error('Invalid lighting settings');
  if(![512,1024,2048].includes(value.shadowSize)||![value.key,value.fill,value.rim].every(v=>Number.isFinite(v)&&v>=0&&v<=3))throw new Error('Invalid light quality');
  resizeShadow(Math.min(value.shadowSize,shadowCap));
  state={exposure:value.exposure,warmth:value.warmth,reflection:value.reflection,shadows:value.shadows,shadowSize:value.shadowSize,key:value.key,fill:value.fill,rim:value.rim};key.intensity=state.key;fill.intensity=state.fill;rim.intensity=state.rim;renderer.toneMappingExposure=state.exposure;renderer.shadowMap.enabled=state.shadows;
  key.color.set(0xe9f1ff).lerp(new THREE.Color(0xffe4c7),state.warmth);scene.environmentIntensity=state.reflection;return {...state};
 }
 function frame(box){const center=box.getCenter(new THREE.Vector3()),radius=Math.max(1.5,box.getSize(new THREE.Vector3()).length()*.7);key.target.position.copy(center);key.position.copy(center).add(new THREE.Vector3(-2,4,5).normalize().multiplyScalar(radius*3));Object.assign(key.shadow.camera,{left:-radius,right:radius,top:radius,bottom:-radius,near:.1,far:radius*6});key.shadow.camera.updateProjectionMatrix();key.target.updateMatrixWorld();}
 return {set,frame,setBudget(value){shadowCap=value.thermal==='critical'?512:value.thermal==='serious'||value.lowPower?1024:2048;resizeShadow(Math.min(state.shadowSize,shadowCap));},snapshot:()=>({...state,environment:true,shadowMapSize:key.shadow.mapSize.x}),dispose(){scene.environment=null;environment.dispose();key.shadow.dispose();key.target.removeFromParent();for(const light of [hemi,key,fill,rim])light.removeFromParent();}};
}
