// Local camera framing only; never edits the skeleton or original animation.
export function mountFraming(display,canvas,host,load,save){
  host.hidden=false;host.replaceChildren();let editing=false;const points=new Map(),inputs={};let anchor=null;
  const heading=document.createElement('h3');heading.textContent='尘白模型构图';host.appendChild(heading);
  function sync(){const f=display.frameState();for(const k of Object.keys(inputs))inputs[k].value=f[k];}
  function update(next){const f=display.setFrame(next);save(f);sync();}
  try{display.setFrame(load()||{scale:1,x:0,y:0});}catch{display.setFrame({scale:1,x:0,y:0});}
  for(const [key,label,min,max] of [['scale','大小',.25,4],['x','左右位置',-1,1],['y','上下位置',-1,1],['yaw','左右转向（度）',-180,180]]){
    const row=document.createElement('label');row.textContent=label;const input=document.createElement('input');input.type='range';input.min=min;input.max=max;input.step='.01';input.id='snowFrame_'+key;input.oninput=()=>update({[key]:Number(input.value)});inputs[key]=input;row.appendChild(input);host.appendChild(row);
  }
  const toggle=document.createElement('button');toggle.type='button';toggle.id='snowFrameEdit';toggle.textContent='开启拖动 / 双指缩放';toggle.onclick=()=>{editing=!editing;canvas.dataset.snowbreakFrameEdit=String(editing);points.clear();anchor=null;toggle.textContent=editing?'结束构图调整':'开启拖动 / 双指缩放';};host.appendChild(toggle);
  const reset=document.createElement('button');reset.type='button';reset.id='snowFrameReset';reset.textContent='恢复完整显示';reset.onclick=()=>update({scale:1,x:0,y:0,yaw:0});host.appendChild(reset);
  const turn=document.createElement('div');turn.id='snowTurnControls';turn.style.cssText='position:fixed;left:16px;bottom:calc(env(safe-area-inset-bottom) + 76px);z-index:8;display:flex;gap:6px';
  for(const [id,text,fn] of [['snowTurnLeft','向左转',()=>update({yaw:display.frameState().yaw-30})],['snowFaceViewer','朝向我',()=>update(display.faceViewer())],['snowTurnRight','向右转',()=>update({yaw:display.frameState().yaw+30})]]){const b=document.createElement('button');b.id=id;b.textContent=text;b.type='button';b.style.cssText='padding:9px;color:white;background:#354357;border:1px solid #617087;border-radius:8px';b.onclick=fn;turn.appendChild(b);}document.body.appendChild(turn);
  function snapshot(){const p=[...points.values()],r=canvas.getBoundingClientRect();return {frame:display.frameState(),center:p.length?{x:p.reduce((s,q)=>s+q.x,0)/p.length,y:p.reduce((s,q)=>s+q.y,0)/p.length}:null,distance:p.length===2?Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y):0,width:r.width,height:r.height};}
  function down(e){if(!editing)return;e.preventDefault();e.stopPropagation();canvas.setPointerCapture(e.pointerId);points.set(e.pointerId,{x:e.clientX,y:e.clientY});anchor=snapshot();}
  function move(e){if(!editing||!points.has(e.pointerId))return;e.preventDefault();e.stopPropagation();points.set(e.pointerId,{x:e.clientX,y:e.clientY});const p=snapshot();if(!anchor?.center||!p.center)return;update({scale:anchor.distance&&p.distance?anchor.frame.scale*p.distance/anchor.distance:anchor.frame.scale,x:anchor.frame.x+(p.center.x-anchor.center.x)/anchor.width,y:anchor.frame.y+(p.center.y-anchor.center.y)/anchor.height});}
  function up(e){if(!points.has(e.pointerId))return;e.stopPropagation();points.delete(e.pointerId);anchor=snapshot();}
  for(const [name,fn] of [['pointerdown',down],['pointermove',move],['pointerup',up],['pointercancel',up]])canvas.addEventListener(name,fn);
  sync();return ()=>{turn.remove();for(const [name,fn] of [['pointerdown',down],['pointermove',move],['pointerup',up],['pointercancel',up]])canvas.removeEventListener(name,fn);points.clear();};
}
