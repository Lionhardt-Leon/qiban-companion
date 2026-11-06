export const FULL_FRAME=Object.freeze({scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1});
export const HOME_FRAME=Object.freeze({...FULL_FRAME,scale:3,x:-.12,y:-.02});
export function validPresentation(value){return value&&Object.keys(FULL_FRAME).every(k=>Number.isFinite(value[k]))&&value.scale>=.3&&value.scale<=4&&Math.abs(value.x)<=1.5&&Math.abs(value.y)<=1.5&&Math.abs(value.yaw)<=180&&Math.abs(value.pitch)<=65&&Math.abs(value.roll)<=45&&value.stretchX>=.65&&value.stretchX<=1.5&&value.stretchY>=.65&&value.stretchY<=1.5;}

export function createPresentationEditor(display,canvas,key,{onEditing=()=>{},initialFrame=HOME_FRAME,title="展示编辑",idPrefix="presentation",allowDepth=false,allowStretch=true,verticalSign=1,dragScale=()=>({x:1,y:1})}={}){
 let saved;try{saved=JSON.parse(localStorage.getItem(key));}catch{}
 display.setFrame(validPresentation(saved)&&(!allowDepth||Number.isFinite(saved.depth)&&Math.abs(saved.depth)<=1.5)?saved:(validPresentation(initialFrame)?initialFrame:HOME_FRAME));
 const panel=document.createElement('section');panel.id=idPrefix+'Editor';panel.hidden=true;
 panel.style.cssText='position:fixed;bottom:18%;left:4%;right:4%;max-height:28%;overflow:auto;background:#201e29f2;padding:12px;border:1px solid #777;border-radius:18px;z-index:8';
 const done=document.createElement('button');done.id=idPrefix==='presentation'?'finishPresentation':'finishModel';done.textContent='完成'+title+'调整';done.hidden=true;done.style.cssText='position:fixed;bottom:19%;left:10%;right:10%;z-index:7';
 document.body.append(panel,done);
 let active=false,before=null,scheduled=0,pending=null,drag=null;
 const pointers=new Map(),sliders=new Map();
 const mode=document.createElement('select');mode.id=idPrefix+'DragMode';mode.add(new Option('单指移动 / 双指缩放','move'));mode.add(new Option('单指自由旋转 / 双指缩放','rotate'));
 const heading=document.createElement('div');heading.textContent=title;panel.append(heading,mode);
 const button=(label,id,fn)=>{const b=document.createElement('button');b.textContent=label;b.id=id.replace('presentation',idPrefix);b.onclick=fn;panel.append(b);return b;};
 function save(){localStorage.setItem(key,JSON.stringify(display.frameState()));}
 function sync(){const state=display.frameState();for(const [k,input] of sliders)input.value=state[k];}
 function apply(value){display.setFrame({...display.frameState(),...value});sync();}
 function flush(){scheduled=0;if(pending){apply(pending);pending=null;}}
 function update(value){pending={...(pending||{}),...value};if(!scheduled)scheduled=requestAnimationFrame(flush);}
 function finish(commit){if(scheduled){cancelAnimationFrame(scheduled);flush();}if(!commit&&before)apply(before);save();active=false;panel.hidden=true;done.hidden=true;pointers.clear();drag=null;canvas.dataset.snowbreakFrameEdit='false';onEditing(false);}
 button('主页近景','presentationHome',()=>{apply(validPresentation(initialFrame)?initialFrame:HOME_FRAME);save();});button('完整入画','presentationFull',()=>{apply(FULL_FRAME);save();});
 button('收起工具，继续手势调整','presentationFold',()=>{panel.hidden=true;done.hidden=false;});
 button('保存并退出','presentationSave',()=>finish(true));button('取消本次调整','presentationCancel',()=>finish(false));done.onclick=()=>finish(true);
 for(const [key,label,min,max,step] of [['scale','大小',.3,4,.01],['x','左右位置',-1.5,1.5,.01],['y','上下位置',-1.5,1.5,.01],['yaw','左右转向',-180,180,1],['pitch','俯仰',-65,65,1],['roll','侧转',-45,45,1],...(allowDepth?[['depth','前后位移',-1.5,1.5,.01]]:[]),...(allowStretch?[['stretchX','横向拉伸',.65,1.5,.01],['stretchY','纵向拉伸',.65,1.5,.01]]:[])]){
  const row=document.createElement('label');row.textContent=label;const input=document.createElement('input');input.type='range';input.min=min;input.max=max;input.step=step;input.id=idPrefix+'_'+key;input.style.width='100%';input.oninput=()=>update({[key]:Number(input.value)});input.onchange=()=>{flush();save();};sliders.set(key,input);row.append(input);panel.append(row);
 }
 const position=e=>({x:e.clientX,y:e.clientY});
 function down(e){if(!active)return;e.preventDefault();e.stopImmediatePropagation();pointers.set(e.pointerId,position(e));canvas.setPointerCapture(e.pointerId);drag={frame:display.frameState(),points:[...pointers.values()]};}
 function move(e){if(!active||!pointers.has(e.pointerId)||!drag)return;e.preventDefault();e.stopImmediatePropagation();pointers.set(e.pointerId,position(e));const points=[...pointers.values()],start=drag.points,frame=drag.frame;
  if(points.length>=2&&start.length>=2){const distance=p=>Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y);update({scale:frame.scale*distance(points)/Math.max(5,distance(start))});}
  else if(points.length===1&&start.length===1){const dx=(points[0].x-start[0].x)/canvas.clientWidth,dy=(points[0].y-start[0].y)/canvas.clientHeight;update(mode.value==='rotate'?{yaw:frame.yaw+dx*300,pitch:frame.pitch+dy*100}:{x:frame.x+dx*dragScale().x,y:frame.y+dy*verticalSign*dragScale().y});}
 }
 function up(e){if(!active||!pointers.has(e.pointerId))return;e.preventDefault();e.stopImmediatePropagation();pointers.delete(e.pointerId);if(canvas.hasPointerCapture(e.pointerId))canvas.releasePointerCapture(e.pointerId);if(scheduled){cancelAnimationFrame(scheduled);flush();}save();drag={frame:display.frameState(),points:[...pointers.values()]};}
 const events=[['pointerdown',down],['pointermove',move],['pointerup',up],['pointercancel',up]];for(const [type,fn] of events)canvas.addEventListener(type,fn,true);
 return {get active(){return active;},toggle(){if(active){finish(true);return;}active=true;before=display.frameState();sync();panel.hidden=false;done.hidden=true;canvas.dataset.snowbreakFrameEdit='true';onEditing(true);},close:()=>{if(active)finish(true);},dispose(){if(active)finish(true);for(const [type,fn] of events)canvas.removeEventListener(type,fn,true);panel.remove();done.remove();},state:()=>display.frameState()};
}
