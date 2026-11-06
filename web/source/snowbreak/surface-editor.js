import {SURFACE_REGIONS,surfaceKey,classifySurface} from './surface.js';
import {SURFACE_COLORS} from './surface-overlay.js';
import {createSurfaceLabels} from './surface-labels.js';
export function mountSurfaceEditor(display,canvas,host,{load,save,tracker,onEvent,enabled}){
  let stored={};try{stored=load();}catch{}const labels=createSurfaceLabels(stored);
  const title=document.createElement('h3');title.textContent='精细触碰表面标注';host.appendChild(title);
  const label=document.createElement('label'),edit=document.createElement('input');edit.type='checkbox';edit.id='snowSurfaceEdit';label.append(edit,document.createTextNode('标注模式：点按或拖过模型表面写入部位'));host.appendChild(label);
  const select=document.createElement('select');select.id='snowSurfaceRegion';for(const [id,name] of Object.entries(SURFACE_REGIONS))select.add(new Option(name,id));select.add(new Option('擦除标注',''));host.appendChild(select);
  const viewLabel=document.createElement('label'),view=document.createElement('input');view.type='checkbox';view.id='snowSurfaceShow';viewLabel.append(view,document.createTextNode('显示已标注表面颜色（仅本地编辑预览）'));host.appendChild(viewLabel);
  const legend=document.createElement('div');for(const [id,name] of Object.entries(SURFACE_REGIONS)){const item=document.createElement('span');item.textContent='■ '+name+' ';item.style.color='#'+SURFACE_COLORS[id].toString(16).padStart(6,'0');legend.appendChild(item);}host.appendChild(legend);
  const undo=document.createElement('button'),redo=document.createElement('button');undo.id='snowSurfaceUndo';redo.id='snowSurfaceRedo';undo.textContent='撤销标注';redo.textContent='重做标注';host.append(undo,redo);
  const overlayInfo=document.createElement('p');overlayInfo.id='snowSurfaceOverlayInfo';host.appendChild(overlayInfo);
  const reset=document.createElement('button');reset.id='snowSurfaceReset';reset.textContent='重新自动识别部位（可撤销）';host.append(reset);
  const status=document.createElement('p');status.id='snowSurfaceStatus';status.textContent='颜色只表示已确认标签，不代表自动识别正确；未标注表面按绑定姿态分区及蒙皮权重识别，不确定时保持未知。';host.appendChild(status);
  let active=null,scheduled=0,disposed=false;
  const classify=hit=>{const key=surfaceKey(hit);return classifySurface(hit,key?{[key]:labels.get(key)}:{});};
  function sync(){if(disposed)return;const state=labels.state();undo.disabled=!state.undo;redo.disabled=!state.redo;const overlay=display.setSurfaceLabels?.(labels.snapshot(),view.checked);overlayInfo.textContent=view.checked?`已显示 ${overlay?.triangles||0} 个标签三角形${overlay?.truncated?'（显示上限5000，其余标签仍保留）':''}；颜色不是自动识别准确率。`:'显示颜色默认关闭；撤销历史仅保留本次页面最近30次操作。';}
  function schedule(){if(!scheduled)scheduled=requestAnimationFrame(()=>{scheduled=0;sync();});}
  function persist(){save(labels.snapshot());sync();}
  function cancelActive(){if(!active)return;if(active.mode==='paint')labels.cancel();tracker.cancel();const id=active.id;active=null;if(canvas.hasPointerCapture(id))canvas.releasePointerCapture(id);sync();}
  edit.onchange=()=>{cancelActive();if(edit.checked)view.checked=true;sync();};select.onchange=cancelActive;view.onchange=sync;
  undo.onclick=()=>{cancelActive();if(labels.undo()){persist();status.textContent='已撤销一次标注操作。';}};redo.onclick=()=>{cancelActive();if(labels.redo()){persist();status.textContent='已重做一次标注操作。';}};
  reset.onclick=()=>{cancelActive();labels.begin();for(const key of Object.keys(labels.snapshot()))labels.set(key,undefined);if(labels.commit())persist();status.textContent='已移除当前模型的旧标注，改用绑定姿态分区；可撤销。';};
  function mark(hit){const key=surfaceKey(hit);if(!key||!hit.alphaVerified)return;labels.set(key,active.region||undefined);schedule();status.textContent=`当前共 ${labels.state().count} 个表面三角形；${SURFACE_REGIONS[active.region]||'擦除'}，松手保存。`;}
  function down(e){
    if(active||canvas.dataset.snowbreakFrameEdit==='true'||(!edit.checked&&!enabled()))return;e.stopPropagation();const hit=display.pickSurface(e.clientX,e.clientY);
    active={id:e.pointerId,mode:edit.checked?'paint':'touch',region:select.value};canvas.setPointerCapture(e.pointerId);
    if(active.mode==='paint'){labels.begin();try{mark(hit);}catch(err){status.textContent=err.message;}}
    else{const region=classify(hit);display.senseTouch?.(hit,region);if(region){tracker.begin({pointerId:e.pointerId,x:e.clientX,y:e.clientY,region,source:'skinned-surface'});active.known=true;active.hit=hit;}else if(hit?.alphaVerified){tracker.begin({pointerId:e.pointerId,x:e.clientX,y:e.clientY,region:{id:'body',label:'身体（具体部位未确认）',confidence:0,source:'unknown-skinned-triangle'},source:'skinned-surface'});active.known=true;active.hit=hit;}else status.textContent='背景：未命中角色。';}
  }
  function move(e){if(active?.id!==e.pointerId)return;if(canvas.dataset.snowbreakFrameEdit==='true'){cancelActive();return;}e.stopPropagation();if(active.mode==='paint'){try{mark(display.pickSurface(e.clientX,e.clientY));}catch(err){status.textContent=err.message;}}else if(active.known)tracker.move({pointerId:e.pointerId,x:e.clientX,y:e.clientY});}
  function up(e){
    if(active?.id!==e.pointerId)return;e.stopPropagation();const gesture=active;active=null;
    if(gesture.mode==='paint'){if(labels.commit())persist();status.textContent=`已保存 ${labels.state().count} 个表面三角形；可撤销本次笔划。`;}
    else if(gesture.known&&enabled()){const event=tracker.finish({pointerId:e.pointerId,x:e.clientX,y:e.clientY});if(event){event.surface=gesture.hit;status.textContent='命中已确认部位：'+event.regionLabel;onEvent(event);}}
    else tracker.cancel();if(canvas.hasPointerCapture(e.pointerId))canvas.releasePointerCapture(e.pointerId);
  }
  function cancel(e){if(active?.id===e.pointerId)cancelActive();}
  for(const [type,fn] of [['pointerdown',down],['pointermove',move],['pointerup',up],['pointercancel',cancel]])canvas.addEventListener(type,fn);
  function applyReviewed(entries){
    if(!Array.isArray(entries)||entries.length>80)throw new Error('候选数量无效');cancelActive();labels.begin();let added=0;
    try{for(const entry of entries){const key=surfaceKey(entry.hit);if(!key||!entry.hit.alphaVerified||labels.has(key)||labels.state().count>=30000)continue;
      const value={id:entry.id,source:'vision-reviewed',confidence:entry.confidence,model:String(entry.model||'').slice(0,128),visible:true};
      if(!classifySurface(entry.hit,{[key]:value}))continue;labels.set(key,value);added++;
    }if(labels.commit())persist();}catch(error){labels.cancel();sync();throw error;}
    status.textContent=`已采用 ${added} 个经确认的视觉候选；保留所有已有标注，可整批撤销。`;return added;
  }
  sync();
  return {applyReviewed,classify,state:labels.state,dispose(){cancelActive();disposed=true;if(scheduled)cancelAnimationFrame(scheduled);for(const [type,fn] of [['pointerdown',down],['pointermove',move],['pointerup',up],['pointercancel',cancel]])canvas.removeEventListener(type,fn);}};
}
