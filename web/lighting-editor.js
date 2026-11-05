export function createLightingEditor(display,key){
 const panel=document.createElement('section');panel.id='lightingEditor';panel.hidden=true;
 panel.style.cssText='position:fixed;left:5%;right:5%;bottom:21%;padding:18px;border-radius:20px;background:#211e29f5;color:white;z-index:10';
 const title=document.createElement('h3');title.textContent='采光与材质';panel.append(title);const inputs=new Map();
 const defaults={exposure:1.05,warmth:.5,reflection:1,shadows:true};
 let shadows;
 function sync(){const state=display.lightingState();for(const [key,input] of inputs)input.value=state[key];if(shadows)shadows.checked=state.shadows;}
 function apply(value){display.setLighting(value);localStorage.setItem(key,JSON.stringify(display.lightingState()));sync();}
 try{display.setLighting(JSON.parse(localStorage.getItem(key))||defaults);}catch{display.setLighting(defaults);}
 for(const [name,label,min,max] of [['exposure','画面亮度',.65,1.45],['warmth','冷暖采光',0,1],['reflection','材质高光',0,1.5]]){
  const row=document.createElement('label');row.textContent=label;const input=document.createElement('input');input.id='lighting_'+name;input.type='range';input.min=min;input.max=max;input.step='.01';input.style.width='100%';input.oninput=()=>apply({[name]:Number(input.value)});inputs.set(name,input);row.append(input);panel.append(row);
 }
 for(const [label,fn] of [['恢复柔光',()=>apply(defaults)],['完成',()=>{panel.hidden=true;}]]){const b=document.createElement('button');b.textContent=label;b.onclick=fn;panel.append(b);}
 const shadowLabel=document.createElement('label');shadowLabel.textContent='柔和投影';shadows=document.createElement('input');shadows.type='checkbox';shadows.id='lighting_shadows';shadows.checked=display.lightingState().shadows;shadows.onchange=()=>apply({shadows:shadows.checked});shadowLabel.append(shadows);panel.append(shadowLabel);
 const row=document.createElement('label');row.textContent='贴图清晰度（重新打开后生效）';const resolution=document.createElement('select');resolution.id='lighting_resolution';resolution.add(new Option('4K · 精细','4096'));resolution.add(new Option('2K · 节省显存','2048'));resolution.value=localStorage.getItem('snowTextureLimit')==='2048'?'2048':'4096';resolution.onchange=()=>localStorage.setItem('snowTextureLimit',resolution.value);row.append(resolution);panel.append(row);
 document.body.append(panel);sync();return {toggle(){panel.hidden=!panel.hidden;},close(){panel.hidden=true;},dispose(){panel.remove();}};
}
