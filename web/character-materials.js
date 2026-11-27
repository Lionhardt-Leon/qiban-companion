import * as THREE from 'three';

// Local rendering profiles, not a reconstruction of the unavailable UE shader.
export function characterMaterial(name,map,normal,state,orm=null){
 if(state.opacity===0){
  const hidden=new THREE.MeshBasicMaterial({visible:false,transparent:true,opacity:0,depthWrite:false});
  hidden.userData.profile='hidden';
  return hidden;
 }
 const eye=/eye01/.test(name),eyeShadow=/eye01_shadow/.test(name),eyebrow=/face01_inst_2/.test(name),face=/face01/.test(name),hair=/hair01/.test(name);
 const skin=/body00(?:_ma)?_inst|face01/.test(name);
 const surface=state.surface||'';
 const blackStocking=surface==='black-stocking';
 const whiteStocking=surface==='white-stocking';
 const stocking=blackStocking||whiteStocking;
 if(state.opacity!==undefined&&(!Number.isFinite(state.opacity)||state.opacity<0||state.opacity>1))throw new Error('Invalid material opacity');
 const shared={opacity:state.opacity??1,color:map?0xffffff:0xcac7c3,map,transparent:!!state.transparent,depthWrite:!state.transparent,alphaTest:map?(state.alphaCutoff||0):0,side:state.doubleSided===false?THREE.FrontSide:THREE.DoubleSide};
 let material;
 if(eye)material=new THREE.MeshBasicMaterial(shared);
 else {
  const nScale=face?.22:skin?.26:stocking?.32:.54;
  const props={
   ...shared,
   normalMap:normal||null,
   normalScale:new THREE.Vector2(nScale,-nScale),
  };
  if(hair){
   Object.assign(props,{roughness:.34,metalness:.04,clearcoat:.42,clearcoatRoughness:.26,sheen:.35,sheenRoughness:.45,sheenColor:new THREE.Color(0xffffff),envMapIntensity:.95});
  }else if(face){
   Object.assign(props,{roughness:.54,metalness:0,clearcoat:.14,clearcoatRoughness:.42,sheen:.22,sheenRoughness:.55,sheenColor:new THREE.Color(0xffe4d6),envMapIntensity:.45});
  }else if(skin){
   Object.assign(props,{roughness:.46,metalness:0,clearcoat:.24,clearcoatRoughness:.36,sheen:.28,sheenRoughness:.48,sheenColor:new THREE.Color(0xffe0d0),envMapIntensity:.58});
  }else if(blackStocking){
   Object.assign(props,{roughness:orm?.92:.36,metalness:orm?.35:.04,roughnessMap:orm||null,metalnessMap:orm||null,clearcoat:.34,clearcoatRoughness:.3,sheen:.68,sheenRoughness:.38,sheenColor:new THREE.Color(0x9fb2d8),envMapIntensity:.95});
  }else if(whiteStocking){
   Object.assign(props,{roughness:orm?.92:.34,metalness:orm?.2:.02,roughnessMap:orm||null,metalnessMap:orm||null,clearcoat:.36,clearcoatRoughness:.28,sheen:.72,sheenRoughness:.34,sheenColor:new THREE.Color(0xfff8ff),envMapIntensity:.95});
  }else if(orm){
   Object.assign(props,{roughness:.92,metalness:.95,roughnessMap:orm,metalnessMap:orm,clearcoat:.38,clearcoatRoughnessMap:orm,clearcoatRoughness:.78,envMapIntensity:1.15});
  }else{
   Object.assign(props,{roughness:.44,metalness:.08,clearcoat:.24,clearcoatRoughness:.36,envMapIntensity:.78});
  }
  material=new THREE.MeshPhysicalMaterial(props);
  if(face||skin){
   material.onBeforeCompile=shader=>{
    // Broad, soft facial lighting avoids a faceted nose/chin under a single key.
    shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>\nnormal=normalize(mix(normal,vec3(0.0,0.0,1.0),${face?'0.68':'0.24'}));`);
   };
   material.customProgramCacheKey=()=>face?'enya-soft-face-v2':'enya-soft-skin-v3';
  }else if(blackStocking){
   material.onBeforeCompile=shader=>{
    // View-angle Fresnel sheer black nylon depth (matches UE4 Ramp_siwa_ui):
    // grazing edges thicken to velvety black while straight-on reveals subtle warm skin tone.
    shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>\n{float siwaNdv=clamp(abs(dot(normalize(normal),normalize(vViewPosition))),0.0,1.0);float siwaCenter=pow(siwaNdv,1.55);float siwaLuma=dot(diffuseColor.rgb,vec3(0.299,0.587,0.114));vec3 siwaCenterTint=mix(diffuseColor.rgb*0.48,diffuseColor.rgb*vec3(0.56,0.45,0.43),smoothstep(0.05,0.34,siwaLuma));vec3 siwaEdgeTint=diffuseColor.rgb*vec3(0.06,0.065,0.09)+vec3(0.008,0.009,0.015);diffuseColor.rgb=mix(siwaEdgeTint,siwaCenterTint,siwaCenter);}`);
   };
   material.customProgramCacheKey=()=>'snowbreak-black-stocking-v1';
  }else if(whiteStocking){
   material.onBeforeCompile=shader=>{
    // Pearlescent white silk stocking Fresnel sheen (matches UE4 Ramp_whitesiwa).
    shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>\n{float siwaNdv=clamp(abs(dot(normalize(normal),normalize(vViewPosition))),0.0,1.0);float siwaCenter=pow(siwaNdv,1.35);vec3 siwaEdge=min(vec3(1.0),diffuseColor.rgb*1.08+vec3(0.03,0.03,0.04));vec3 siwaMid=diffuseColor.rgb*vec3(0.98,0.92,0.90);diffuseColor.rgb=mix(siwaEdge,siwaMid,siwaCenter);}`);
   };
   material.customProgramCacheKey=()=>'snowbreak-white-stocking-v1';
  }
 }
 // Never pull eye01_shadow_inst forward (causes dark blotches over closed eyelids when blinking).
 if(eyebrow){material.polygonOffset=true;material.polygonOffsetFactor=-1.5;material.polygonOffsetUnits=-1.5;}
 else if(state.transparent&&!eyeShadow){material.polygonOffset=true;material.polygonOffsetFactor=-.25;material.polygonOffsetUnits=-.25;}
 material.userData.profile=eye?'eye':face?'soft-face':hair?'hair':skin?'skin':'cloth-or-room';
 return material;
}

export function installCharacterLights(scene,renderer){
 renderer.outputColorSpace=THREE.SRGBColorSpace;
 renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
 const hemi=new THREE.HemisphereLight(0xfff5ec,0x7d8ea8,1.02);scene.add(hemi);
 const key=new THREE.DirectionalLight(0xfff2e6,2.05);key.position.set(-2,4,5);scene.add(key);
 scene.add(key.target);key.castShadow=true;key.shadow.mapSize.set(1024,1024);key.shadow.bias=-.00015;key.shadow.normalBias=.008;key.shadow.radius=2;
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
 const fill=new THREE.DirectionalLight(0xdce8ff,.85);fill.position.set(3,2,4);scene.add(fill);
 const rim=new THREE.DirectionalLight(0xf2e8ff,1.25);rim.position.set(1,3,-4);scene.add(rim);
 // Studio reflection softboxes for crisp specular luster on hair, latex, leather, silk, and metal.
 const studio=new THREE.Scene();studio.background=new THREE.Color(.12,.13,.16);
 const panelGeometry=new THREE.PlaneGeometry(1,1),panelMaterials=[];
 for(const [position,scale,color,intensity] of [[[-4,4,5],[4.5,7],0xfff3e6,5.2],[[5,2,3],[3.5,6],0xdceaff,3.6],[[0,5,-4],[6,3],0xffe6f4,4.2],[[0,6,2],[5,2],0xffffff,3.4]]){
  const material=new THREE.MeshBasicMaterial({color,side:THREE.DoubleSide});material.color.multiplyScalar(intensity);panelMaterials.push(material);
  const panel=new THREE.Mesh(panelGeometry,material);panel.position.fromArray(position);panel.scale.set(scale[0],scale[1],1);panel.lookAt(0,1,0);studio.add(panel);
 }
 const generator=new THREE.PMREMGenerator(renderer),environment=generator.fromScene(studio,.045,.1,30);generator.dispose();panelGeometry.dispose();for(const m of panelMaterials)m.dispose();scene.environment=environment.texture;
 let shadowCap=2048;
 function resizeShadow(size){if(key.shadow.mapSize.x===size)return;key.shadow.mapSize.set(size,size);key.shadow.map?.dispose();key.shadow.map=null;key.shadow.needsUpdate=true;}
 let state={exposure:1.05,warmth:.5,reflection:1,shadows:true,shadowSize:1024,key:2.05,fill:.85,rim:1.25};
 function set(next){
  const value={...state,...next};if(![value.exposure,value.warmth,value.reflection].every(Number.isFinite)||typeof value.shadows!=='boolean'||value.exposure<.65||value.exposure>1.45||value.warmth<0||value.warmth>1||value.reflection<0||value.reflection>1.5)throw new Error('Invalid lighting settings');
  if(![512,1024,2048].includes(value.shadowSize)||![value.key,value.fill,value.rim].every(v=>Number.isFinite(v)&&v>=0&&v<=3))throw new Error('Invalid light quality');
  resizeShadow(Math.min(value.shadowSize,shadowCap));
  state={exposure:value.exposure,warmth:value.warmth,reflection:value.reflection,shadows:value.shadows,shadowSize:value.shadowSize,key:value.key,fill:value.fill,rim:value.rim};key.intensity=state.key;fill.intensity=state.fill;rim.intensity=state.rim;renderer.toneMappingExposure=state.exposure;renderer.shadowMap.enabled=state.shadows;
  key.color.set(0xe9f1ff).lerp(new THREE.Color(0xffe4c7),state.warmth);scene.environmentIntensity=state.reflection;return {...state};
 }
 function frame(box){const center=box.getCenter(new THREE.Vector3()),radius=Math.max(1.5,box.getSize(new THREE.Vector3()).length()*.7);key.target.position.copy(center);key.position.copy(center).add(new THREE.Vector3(-2,4,5).normalize().multiplyScalar(radius*3));Object.assign(key.shadow.camera,{left:-radius,right:radius,top:radius,bottom:-radius,near:.1,far:radius*6});key.shadow.camera.updateProjectionMatrix();key.target.updateMatrixWorld();}
 return {set,frame,setBudget(value){
  const isPerf=value.mode==='quality'||value.mode==='performance';
  const isBattery=value.mode==='battery'||value.mode==='powersave';
  shadowCap=isPerf?(value.thermal==='critical'?1024:2048):isBattery?512:(value.thermal==='critical'?512:value.thermal==='serious'||value.lowPower?1024:2048);
  const desired=isPerf?2048:isBattery?512:state.shadowSize;
  resizeShadow(Math.min(desired,shadowCap));
 },snapshot:()=>({...state,environment:true,shadowMapSize:key.shadow.mapSize.x}),dispose(){scene.environment=null;environment.dispose();key.shadow.dispose();key.target.removeFromParent();for(const light of [hemi,key,fill,rim])light.removeFromParent();}};
}
