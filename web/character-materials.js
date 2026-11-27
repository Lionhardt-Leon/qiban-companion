import * as THREE from 'three';

// Official-inspired Snowbreak hybrid Anime-PBR shading profiles (Ramp_skin SSS, Angel-Ring Hair,
// Wet-Cornea Eyes, Ramp_siwa_ui/whitesiwa Silk Stockings, Dual-Lobe Wet Latex & Chrome).
export function characterMaterial(name,map,normal,state,orm=null,extraMap=null){
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
 if(eye&&!eyeShadow){
  // Luminous wet-cornea anime eye: keeps full-brightness artist iris + live moving specular glint.
  material=new THREE.MeshBasicMaterial(shared);
  material.onBeforeCompile=shader=>{
   shader.vertexShader=shader.vertexShader
    .replace('#include <common>','#include <common>\nvarying vec3 vEyeNormal;\nvarying vec3 vEyeViewDir;')
    .replace('#include <beginnormal_vertex>','#include <beginnormal_vertex>\nvec3 eyeObjNormal=objectNormal;')
    .replace('#include <project_vertex>','#include <project_vertex>\nvEyeNormal=normalize(normalMatrix*eyeObjNormal);\nvEyeViewDir=normalize(-mvPosition.xyz);');
   shader.fragmentShader=shader.fragmentShader
    .replace('#include <common>','#include <common>\nvarying vec3 vEyeNormal;\nvarying vec3 vEyeViewDir;')
    .replace('#include <dithering_fragment>',`
     vec3 eN=normalize(vEyeNormal);
     vec3 eV=normalize(vEyeViewDir);
     vec3 eL1=normalize(vec3(-0.38,0.62,0.68));
     vec3 eL2=normalize(vec3(0.45,0.32,0.83));
     vec3 eH1=normalize(eL1+eV);
     vec3 eH2=normalize(eL2+eV);
     float wetGlint=pow(max(dot(eN,eH1),0.0),110.0)*0.65+pow(max(dot(eN,eH2),0.0),36.0)*0.16;
     float wetRim=pow(1.0-clamp(abs(dot(eN,eV)),0.0,1.0),4.2)*0.14;
     gl_FragColor.rgb+=vec3(1.0,0.98,0.96)*wetGlint+vec3(0.88,0.94,1.0)*wetRim;
     #include <dithering_fragment>
    `);
  };
  material.customProgramCacheKey=()=>'snowbreak-wet-eye-v1';
 }else if(eyeShadow){
  material=new THREE.MeshBasicMaterial(shared);
 }else{
  const nScale=face?.20:skin?.28:stocking?.34:.58;
  const props={
   ...shared,
   normalMap:normal||null,
   normalScale:new THREE.Vector2(nScale,-nScale),
  };
  if(hair){
   Object.assign(props,{roughness:.30,metalness:.05,clearcoat:.52,clearcoatRoughness:.22,sheen:.45,sheenRoughness:.40,sheenColor:new THREE.Color(0xffffff),envMapIntensity:1.15});
  }else if(face){
   Object.assign(props,{roughness:.48,metalness:0,clearcoat:.16,clearcoatRoughness:.38,sheen:.24,sheenRoughness:.52,sheenColor:new THREE.Color(0xffe6da),envMapIntensity:.48});
  }else if(skin){
   Object.assign(props,{roughness:.42,metalness:0,clearcoat:.28,clearcoatRoughness:.34,sheen:.32,sheenRoughness:.44,sheenColor:new THREE.Color(0xffe2d4),envMapIntensity:.68});
  }else if(blackStocking){
   Object.assign(props,{roughness:orm?.90:.34,metalness:orm?.30:.04,roughnessMap:orm||null,metalnessMap:orm||null,clearcoat:.42,clearcoatRoughness:.24,sheen:.75,sheenRoughness:.34,sheenColor:new THREE.Color(0xa8bce0),envMapIntensity:1.15});
  }else if(whiteStocking){
   Object.assign(props,{roughness:orm?.90:.32,metalness:orm?.18:.02,roughnessMap:orm||null,metalnessMap:orm||null,clearcoat:.44,clearcoatRoughness:.24,sheen:.78,sheenRoughness:.32,sheenColor:new THREE.Color(0xf6f8ff),envMapIntensity:1.15});
  }else if(orm){
   Object.assign(props,{roughness:.92,metalness:.98,roughnessMap:orm,metalnessMap:orm,clearcoat:.55,clearcoatRoughnessMap:orm,clearcoatRoughness:.52,envMapIntensity:1.55});
  }else{
   Object.assign(props,{roughness:.40,metalness:.12,clearcoat:.32,clearcoatRoughness:.32,envMapIntensity:1.05});
  }
  material=new THREE.MeshPhysicalMaterial(props);

  if(face||skin){
   const hasFaceShadow=!!(face&&extraMap);
   material.onBeforeCompile=shader=>{
    if(hasFaceShadow){
     shader.uniforms.uFaceShadowMap={value:extraMap};
     shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nuniform sampler2D uFaceShadowMap;');
    }
    // Broad, soft facial lighting avoids faceted nose/chin; subtle warm-rose Ramp_skin SSS terminator & backlit contour rim.
    shader.fragmentShader=shader.fragmentShader
     .replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>\nnormal=normalize(mix(normal,vec3(0.0,0.0,1.0),${face?'0.72':'0.22'}));`)
     .replace('#include <lights_fragment_end>',`#include <lights_fragment_end>
      {
       float dLuma=dot(reflectedLight.directDiffuse,vec3(0.299,0.587,0.114));
       float sssBand=smoothstep(0.02,0.40,dLuma)*(1.0-smoothstep(0.40,0.96,dLuma));
       // Official Snowbreak Ramp_skin warm peach-rose subsurface scatter along light-shadow terminator
       reflectedLight.directDiffuse+=diffuseColor.rgb*vec3(1.0,0.46,0.38)*sssBand*${face?'0.15':'0.26'};
       // Lift shadowed skin toward warm porcelain rose (never muddy cold grey)
       vec3 warmLift=mix(vec3(1.06,0.93,0.91),vec3(1.0),smoothstep(0.06,0.68,dLuma));
       reflectedLight.indirectDiffuse*=warmLift;
       // Delicate studio backlit skin contour rim (RimLightRange)
       float skinNdv=clamp(abs(dot(normalize(normal),normalize(vViewPosition))),0.0,1.0);
       float skinRim=pow(1.0-skinNdv,3.3)*smoothstep(-0.35,0.85,normal.y+0.35)*${face?'0.12':'0.24'};
       reflectedLight.indirectSpecular+=vec3(1.0,0.91,0.86)*skinRim;
       ${hasFaceShadow?`
       #ifdef USE_MAP
        vec3 fSdf=texture2D(uFaceShadowMap,vMapUv).rgb;
        float jawSoft=mix(0.92,1.0,smoothstep(0.0,0.65,1.0-fSdf.b));
        reflectedLight.indirectDiffuse*=jawSoft;
       #endif`:''}
      }`);
   };
   material.customProgramCacheKey=()=>face?(hasFaceShadow?'sb-face-sss-sdf-v3':'sb-face-sss-v3'):'sb-skin-sss-v3';
  }else if(hair){
   const hasHairHL=!!extraMap;
   material.onBeforeCompile=shader=>{
    if(hasHairHL){
     shader.uniforms.uHairHighlightMap={value:extraMap};
     shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nuniform sampler2D uHairHighlightMap;');
    }
    // Official Snowbreak shimmering Angel-Ring (matcap_hair01) + artist-painted highlight mask (*_hair01_highlight.png) + anime rim
    shader.fragmentShader=shader.fragmentShader.replace('#include <lights_fragment_end>',`#include <lights_fragment_end>
     {
      vec3 hN=normalize(normal);
      vec3 hV=normalize(vViewPosition);
      float hNdv=clamp(abs(dot(hN,hV)),0.0,1.0);
      // View-responsive Angel-Ring crown band (matches matcap_hair01.png)
      float bandPos=hN.y-0.36+hN.x*0.08;
      float ringWave=sin(hN.x*26.0+hN.z*14.0)*0.032;
      float angelRing=exp(-pow((bandPos+ringWave)*7.2,2.0))*smoothstep(0.15,0.65,hN.z+0.35)*smoothstep(0.08,0.45,hNdv);
      float hairPaint=0.0;
      ${hasHairHL?`
      #ifdef USE_MAP
       hairPaint=texture2D(uHairHighlightMap,vMapUv).r;
      #endif`:''}
      vec3 ringTint=mix(diffuseColor.rgb,vec3(1.0),0.62);
      float combinedSpec=angelRing*0.42+hairPaint*(0.38+angelRing*0.65);
      reflectedLight.directSpecular+=ringTint*combinedSpec*0.95;
      // Luminous anime hair rim backlight
      float hairRim=pow(1.0-hNdv,2.9)*smoothstep(-0.2,0.8,hN.y+0.4)*0.34;
      reflectedLight.indirectSpecular+=mix(diffuseColor.rgb,vec3(1.0,0.96,1.0),0.7)*hairRim;
     }`);
   };
   material.customProgramCacheKey=()=>hasHairHL?'sb-hair-angelring-hl-v1':'sb-hair-angelring-v1';
  }else if(blackStocking){
   material.onBeforeCompile=shader=>{
    // Exact 5-stop official UE4 Ramp_siwa_ui Fresnel sheer black nylon + vertical anisotropic silk highlight (MatCapCombineE512 tile 3,2)
    shader.fragmentShader=shader.fragmentShader
     .replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
      {
       vec3 sN=normalize(normal);
       vec3 sV=normalize(vViewPosition);
       float ndv=clamp(abs(dot(sN,sV)),0.0,1.0);
       // 5-stop Ramp_siwa_ui exact curve (linearized): velvety black edge -> charcoal navy -> warm skin peach center
       vec3 r0=vec3(0.002,0.003,0.006);
       vec3 r1=vec3(0.014,0.022,0.040);
       vec3 r2=vec3(0.240,0.185,0.168);
       vec3 r3=vec3(0.760,0.585,0.495);
       vec3 rampCol=ndv<0.45?mix(r0,r1,smoothstep(0.14,0.45,ndv)):(ndv<0.78?mix(r1,r2,smoothstep(0.45,0.78,ndv)):mix(r2,r3,smoothstep(0.78,1.0,ndv)));
       float baseLuma=dot(diffuseColor.rgb,vec3(0.299,0.587,0.114));
       // Preserve dark lace band texture while giving sheer nylon legs authentic deep 20D Ramp_siwa_ui skin-through depth
       vec3 sheerLeg=diffuseColor.rgb*0.18+rampCol*mix(0.16,0.34,smoothstep(0.03,0.28,baseLuma));
       diffuseColor.rgb=mix(diffuseColor.rgb*0.36,sheerLeg,smoothstep(0.02,0.16,baseLuma));
      }`)
     .replace('#include <lights_fragment_end>',`#include <lights_fragment_end>
      {
       vec3 sN=normalize(normal);
       vec3 sV=normalize(vViewPosition);
       float ndv=clamp(abs(dot(sN,sV)),0.0,1.0);
       // Vertical silky nylon shin/thigh sheen strip + delicate rim luster
       float silkStrip=pow(max(0.0,1.0-abs(sN.x+0.14)),9.0)*smoothstep(0.18,0.85,ndv)*0.24;
       float silkRim=pow(1.0-ndv,3.2)*0.18;
       reflectedLight.directSpecular+=vec3(0.95,0.92,0.98)*silkStrip+vec3(0.75,0.82,0.96)*silkRim;
      }`);
   };
   material.customProgramCacheKey=()=>'sb-black-stocking-v2';
  }else if(whiteStocking){
   material.onBeforeCompile=shader=>{
    // Exact official UE4 Ramp_whitesiwa curve: cool periwinkle-sky shadow edge -> warm pearlescent ivory center + silky vertical sheen
    shader.fragmentShader=shader.fragmentShader
     .replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
      {
       vec3 sN=normalize(normal);
       vec3 sV=normalize(vViewPosition);
       float ndv=clamp(abs(dot(sN,sV)),0.0,1.0);
       vec3 coolEdge=vec3(0.36,0.50,0.76);
       vec3 warmMid=vec3(0.98,0.90,0.87);
       vec3 whitePeak=vec3(1.0,0.99,0.99);
       vec3 tint=ndv<0.55?mix(coolEdge,warmMid,smoothstep(0.05,0.55,ndv)):mix(warmMid,whitePeak,smoothstep(0.55,1.0,ndv));
       diffuseColor.rgb*=mix(vec3(1.0),tint,0.48);
      }`)
     .replace('#include <lights_fragment_end>',`#include <lights_fragment_end>
      {
       vec3 sN=normalize(normal);
       vec3 sV=normalize(vViewPosition);
       float ndv=clamp(abs(dot(sN,sV)),0.0,1.0);
       float silkStrip=pow(max(0.0,1.0-abs(sN.x+0.12)),8.0)*smoothstep(0.2,0.9,ndv)*0.22;
       float silkRim=pow(1.0-ndv,3.0)*0.24;
       reflectedLight.directSpecular+=vec3(1.0,0.99,1.0)*(silkStrip+silkRim);
      }`);
   };
   material.customProgramCacheKey=()=>'sb-white-stocking-v2';
  }else{
   // Clothing, latex, patent leather, silk, and polished metal: Snowbreak Ramp_equip contrast + wet latex sheen + chrome sparkle + anime rim
   material.onBeforeCompile=shader=>{
    shader.fragmentShader=shader.fragmentShader.replace('#include <lights_fragment_end>',`#include <lights_fragment_end>
     {
      vec3 eN=normalize(normal);
      vec3 eV=normalize(vViewPosition);
      float ndv=clamp(abs(dot(eN,eV)),0.0,1.0);
      float isGlossy=smoothstep(0.42,0.16,roughnessFactor)*(1.0-smoothstep(0.2,0.5,metalnessFactor));
      float isMetal=smoothstep(0.25,0.65,metalnessFactor);
      // Wet latex / patent leather crisp dual Fresnel gleam (Mia suit, Cherno shoes/straps)
      float latexRim=pow(1.0-ndv,3.4)*isGlossy*0.48;
      // Polished metal & jewelry HDR highlight glint (triggers soft optical bloom)
      vec3 mH=normalize(normalize(vec3(-0.42,0.62,0.66))+eV);
      float metalSpark=pow(max(dot(eN,mH),0.0),72.0)*isMetal*1.15;
      // Delicate anime contour rim separation on outfits (RimLightRange)
      float clothRim=pow(1.0-ndv,3.5)*smoothstep(-0.3,0.8,eN.y+0.35)*0.22;
      reflectedLight.directSpecular+=vec3(1.0,0.97,0.95)*(latexRim+metalSpark)+vec3(0.92,0.94,1.0)*clothRim;
     }`);
   };
   material.customProgramCacheKey=()=>orm?'sb-equip-orm-v2':'sb-equip-v2';
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
 renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.06;
 // Official Snowbreak UE4 3-point portrait rig: warm 4500K key (-24 pitch, -35 yaw), cool sky fill, bright anime rim
 const hemi=new THREE.HemisphereLight(0xfff6f0,0x6e82a8,.94);scene.add(hemi);
 const key=new THREE.DirectionalLight(0xffedd9,2.25);key.position.set(-2.6,3.8,4.6);scene.add(key);
 scene.add(key.target);key.castShadow=true;key.shadow.mapSize.set(2048,2048);key.shadow.bias=-.00012;key.shadow.normalBias=.006;key.shadow.radius=2.2;
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
 const fill=new THREE.DirectionalLight(0xd0e2ff,.84);fill.position.set(3.6,1.8,3.8);scene.add(fill);
 const rim=new THREE.DirectionalLight(0xfff0ff,1.55);rim.position.set(1.2,3.4,-4.2);scene.add(rim);
 // High-contrast HDR Studio Reflection Dome (sharp softboxes + overhead hair-ring + rim strips for crisp chrome/latex/silk reflections)
 const studio=new THREE.Scene();studio.background=new THREE.Color(.07,.08,.11);
 const panelGeometry=new THREE.PlaneGeometry(1,1),panelMaterials=[];
 for(const [position,scale,color,intensity] of [
  [[-4.2,4.0,4.8],[3.8,7.2],0xfff2e2,7.5],  // Warm key softbox window
  [[5.0,2.2,3.4],[3.2,6.2],0xd6e8ff,4.8],   // Cool fill window
  [[0.0,6.2,1.6],[6.0,1.8],0xffffff,5.8],   // Overhead hair angel-ring strip
  [[-2.8,4.5,-4.6],[3.5,5.5],0xffe4f6,5.5], // Back-left anime rim strip
  [[3.2,4.2,-4.4],[3.5,5.5],0xe4eeff,5.2],  // Back-right anime rim strip
  [[0.0,-3.5,2.5],[9.0,9.0],0xffeae0,0.45], // Subtle warm floor bounce
 ]){
  const material=new THREE.MeshBasicMaterial({color,side:THREE.DoubleSide});material.color.multiplyScalar(intensity);panelMaterials.push(material);
  const panel=new THREE.Mesh(panelGeometry,material);panel.position.fromArray(position);panel.scale.set(scale[0],scale[1],1);panel.lookAt(0,1,0);studio.add(panel);
 }
 const generator=new THREE.PMREMGenerator(renderer),environment=generator.fromScene(studio,.025,.1,30);generator.dispose();panelGeometry.dispose();for(const m of panelMaterials)m.dispose();scene.environment=environment.texture;
 let shadowCap=2048;
 function resizeShadow(size){if(key.shadow.mapSize.x===size)return;key.shadow.mapSize.set(size,size);key.shadow.map?.dispose();key.shadow.map=null;key.shadow.needsUpdate=true;}
 let state={exposure:1.06,warmth:.5,reflection:1,shadows:true,shadowSize:2048,key:2.25,fill:.84,rim:1.55};
 function set(next){
  const value={...state,...next};if(![value.exposure,value.warmth,value.reflection].every(Number.isFinite)||typeof value.shadows!=='boolean'||value.exposure<.65||value.exposure>1.45||value.warmth<0||value.warmth>1||value.reflection<0||value.reflection>1.5)throw new Error('Invalid lighting settings');
  if(![512,1024,2048].includes(value.shadowSize)||![value.key,value.fill,value.rim].every(v=>Number.isFinite(v)&&v>=0&&v<=3))throw new Error('Invalid light quality');
  resizeShadow(Math.min(value.shadowSize,shadowCap));
  state={exposure:value.exposure,warmth:value.warmth,reflection:value.reflection,shadows:value.shadows,shadowSize:value.shadowSize,key:value.key,fill:value.fill,rim:value.rim};key.intensity=state.key;fill.intensity=state.fill;rim.intensity=state.rim;renderer.toneMappingExposure=state.exposure;renderer.shadowMap.enabled=state.shadows;
  key.color.set(0xe9f1ff).lerp(new THREE.Color(0xffe0be),state.warmth);scene.environmentIntensity=state.reflection;return {...state};
 }
 function frame(box){const center=box.getCenter(new THREE.Vector3()),radius=Math.max(1.5,box.getSize(new THREE.Vector3()).length()*.7);key.target.position.copy(center);key.position.copy(center).add(new THREE.Vector3(-2.6,3.8,4.6).normalize().multiplyScalar(radius*3));Object.assign(key.shadow.camera,{left:-radius,right:radius,top:radius,bottom:-radius,near:.1,far:radius*6});key.shadow.camera.updateProjectionMatrix();key.target.updateMatrixWorld();}
 return {set,frame,setBudget(value){
  const isPerf=value.mode==='quality'||value.mode==='performance';
  const isBattery=value.mode==='battery'||value.mode==='powersave';
  shadowCap=isPerf?2048:isBattery?512:(value.thermal==='critical'?512:value.thermal==='serious'||value.lowPower?1024:2048);
  const desired=isPerf?2048:isBattery?512:state.shadowSize;
  resizeShadow(Math.min(desired,shadowCap));
 },snapshot:()=>({...state,environment:true,shadowMapSize:key.shadow.mapSize.x}),dispose(){scene.environment=null;environment.dispose();key.shadow.dispose();key.target.removeFromParent();for(const light of [hemi,key,fill,rim])light.removeFromParent();}};
}
