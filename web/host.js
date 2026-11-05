import {createLightingEditor} from './lighting-editor.js';
import {openSkinArchive} from './source/snowbreak/archive.js';
import {createSnowbreakRenderer} from './source/snowbreak/renderer.js';
import {createSnowbreakSampleAdapter} from './source/snowbreak/action-adapter.js';
import {createOriginalVoiceCatalog} from './source/snowbreak/voice.js';
import {mountSurfaceEditor} from './source/snowbreak/surface-editor.js';
import {createTouchTracker} from './source/body/touch.js';
import {createPresentationEditor} from './presentation-editor.js';

let aiControlledTouch=true;
const canvas=document.querySelector('#stage'), status=document.querySelector('#status'), editorHost=document.querySelector('#editor');
let collection=null,pausedScene=null;
let generation=0,nonce='',runtime,display,adapter,voices,editor,presentation,lighting,learned,last=0,paused=false,voiceEnabled=true;
const finishPaint=document.createElement('button');finishPaint.id='finishPaint';finishPaint.hidden=true;
finishPaint.style.cssText='position:fixed;bottom:23%;left:8%;right:8%;z-index:5';document.body.appendChild(finishPaint);
function closeEditor(){
  const edit=document.querySelector('#snowSurfaceEdit'),show=document.querySelector('#snowSurfaceShow');
  if(edit){edit.checked=false;edit.dispatchEvent(new Event('change'));}
  if(show){show.checked=false;show.dispatchEvent(new Event('change'));}
  finishPaint.hidden=true;editorHost.classList.remove('open');
}
finishPaint.onclick=closeEditor;
const emit=message=>{
  const value={...message,nonce};
  window.webkit?.messageHandlers?.snowbreak?.postMessage(value);
  window.dispatchEvent(new CustomEvent('snowbreak-event',{detail:value}));
};
const text=value=>{status.textContent=value;status.hidden=!value;};
function cleanup(){learned=null;finishPaint.hidden=true;presentation?.dispose();lighting?.dispose();editor?.dispose();adapter?.stop('renderer-close');voices?.dispose();display?.dispose();void runtime?.dispose();lighting=presentation=editor=adapter=voices=display=runtime=null;editorHost.replaceChildren();}

async function load(url,id,variant){
  const ticket=++generation;nonce=id;paused=false;canvas.dataset.snowbreakPaused='false';cleanup();text('正在加载恩雅和病房…');
  let opened,nextDisplay,nextVoices;
  try{
    if(variant){if(!collection)throw new Error('请先导入恩雅整合包');opened=await collection.selectVariant(variant);}else{collection=null;const response=await fetch(url);if(!response.ok)throw new Error('本地角色包读取失败');opened=await openSkinArchive(new Uint8Array(await response.arrayBuffer()));}
    if(opened.manifest.characterId!=='Enya')throw new Error('此入口当前只支持恩雅护士包');
    nextDisplay=await createSnowbreakRenderer(canvas,opened.runtime);
    nextVoices=opened.runtime.getAsset('voiceCatalog')?await createOriginalVoiceCatalog(opened.runtime):{
      getAudio:()=>null,snapshot:()=>({available:[]}),dispose(){}
    };
    if(ticket!==generation){nextDisplay.dispose();nextVoices.dispose();void opened.runtime.dispose();return;}
    collection=opened.variants.length?opened:null;if(opened.selection)localStorage.setItem('enya-collection-selection',opened.selection.id);
    runtime=opened.runtime;display=nextDisplay;voices=nextVoices;
    const background=display.sceneState().available?'#201d29':'transparent';document.body.style.background=background;document.documentElement.style.background=background;
    adapter=createSnowbreakSampleAdapter(display,{audioForSample:sample=>voices.getAudio(sample)});
    display.sceneInteractions.configure({scene:()=>adapter.snapshot().sceneId,reaction:id=>{void adapter.playSceneReaction(id,{withVoice:voiceEnabled});},voice:id=>{if(voiceEnabled){const audio=voices.getAudio(id);if(audio){audio.currentTime=0;void audio.play().catch(()=>{});}}},event:emit});
    // The original body/face tracks, morph curves and scene transforms stay in the old renderer.
    display.showFaceCandidate(true);adapter.enterStandby();display.faceViewer();last=performance.now();
    presentation=createPresentationEditor(display,canvas,'presentation:'+(opened.selection?'enya-'+opened.selection.mode:opened.manifest.skinId),{
      initialFrame:display.presentationDefault,onEditing:editing=>{if(editing){adapter.stop('presentation-edit');closeEditor();}else if(!paused)adapter.enterStandby();}
    });
    lighting=createLightingEditor(display,'lighting:'+(opened.selection?'enya-'+opened.selection.mode:opened.manifest.skinId));
    let previousStatus='';
    display.setFrameHandler(()=>{
      const now=performance.now();if(!paused)adapter.tick(Math.min(100,Math.max(0,now-last)));last=now;
      if(!paused&&learned){
        const time=(now-learned.start)/1000,end=Math.min(learned.duration,learned.stop===undefined?Infinity:(learned.stop-learned.start)/1000+.3);
        if(time>=end){learned=null;}else{
          const ramp=Math.max(0,Math.min(1,time/.3,(end-time)/.3)),weight=ramp*ramp*(3-2*ramp);
          display.applyLearnedMotion(learned.id,time,weight);
        }
      }
      const state=adapter.snapshot(),playStatus=learned?'learned:'+learned.id:state.status;
      if(playStatus!==previousStatus){previousStatus=playStatus;emit({type:'selfState',state:inspect()});emit({type:'playback',active:!!learned||['playing','scene-preview','local-arm-preview'].includes(state.status),status:playStatus});}
    });
    const geometry=opened.manifest.resources.filter(r=>r.kind==='geometry').map(r=>r.assetId).join('-');
    const labelKey='surface:'+opened.manifest.skinId+':'+geometry;
    editor=mountSurfaceEditor(display,canvas,editorHost,{
      load:()=>JSON.parse(localStorage.getItem(labelKey)||'{}'),save:value=>localStorage.setItem(labelKey,JSON.stringify(value)),
      tracker:createTouchTracker({modelId:opened.manifest.skinId,source:'skinned-surface'}),enabled:()=>!paused,
      onEvent:async event=>{
        emit({type:'touch',region:event.region,label:event.regionLabel,gesture:event.gesture,confidence:event.confidence,source:event.regionSource,durationMs:event.durationMs,frequency:event.frequency,completed:true});
        if(!aiControlledTouch)await adapter.dispatchSurfaceTouch(event,{withVoice:voiceEnabled});
      }
    });
    const close=document.createElement('button');close.textContent='关闭工具';close.onclick=closeEditor;editorHost.prepend(close);
    const select=editorHost.querySelector('#snowSurfaceRegion'),edit=editorHost.querySelector('#snowSurfaceEdit');
    edit.addEventListener('change',()=>{if(edit.checked){editorHost.classList.remove('open');finishPaint.textContent='完成'+select.selectedOptions[0].textContent+'标注';finishPaint.hidden=false;}});
    text('');emit({type:'ready',bodyActions:display.embodiment.snapshot().available,selection:opened.selection,variants:opened.variants,characterId:opened.manifest.characterId,skinId:opened.manifest.skinId,
      stance:opened.runtime.getAsset('stateTransition')?.data.stance||'seated',samples:display.sampleOptions().map(x=>x.id),voices:voices.snapshot().available,learned:display.learnedOptions().map(x=>x.id)});
    window.__snowbreakMigration={display,adapter,editor,presentation,manifest:opened.manifest};
  }catch(error){
    if(ticket!==generation){nextDisplay?.dispose();nextVoices?.dispose();void opened?.runtime.dispose();return;}
    cleanup();nextDisplay?.dispose();nextVoices?.dispose();void opened?.runtime.dispose();
    text('恩雅加载失败：'+String(error.message||error));emit({type:'error',message:String(error.message||error)});
  }
}

async function command(value){
  if(value.type==='dispose'){generation++;cleanup();return;}
  if(value.type==='load')return load(value.url,value.nonce);
  if(value.type==='variant'){if(!collection?.variants.some(v=>v.id===value.id))return;return load(null,nonce,value.id);}
  if(!adapter)return;
  if(value.type==='body'){
    if(paused)throw new Error('模型暂停中');learned=null;if(!adapter.snapshot().sceneId){adapter.stop('body-command');adapter.enterStandby();}display.embodiment.command(value.id);
    await new Promise(resolve=>setTimeout(resolve,750));emit({type:'selfState',state:inspect(),requestId:value.requestId});return;
  }
  if(value.type==='gesture'){
    if(paused)throw new Error('模型暂停中');learned=null;if(!adapter.snapshot().sceneId){adapter.stop('ai-gesture');adapter.enterStandby();}display.embodiment.playGesture(value.id,value.plan);
    emit({type:'selfState',state:inspect()});return;
  }
  if(value.type==='touchPolicy'){aiControlledTouch=!!value.aiControlled;return;}
  if(value.type==='speechLevel'){display.embodiment.setSpeechLevel(value.value);return;}
  if(value.type==='gaze'){display.setGaze(value.x,value.y);return;}
  if(value.type==='pause'){pausedScene=adapter.snapshot().sceneId;display.sceneInteractions.cancel();display.embodiment.reset();display.resetSenses();learned=null;paused=true;lighting?.close();presentation?.close();canvas.dataset.snowbreakPaused='true';adapter.stop('background');closeEditor();return;}
  if(value.type==='resume'){paused=false;canvas.dataset.snowbreakPaused='false';last=performance.now();if(pausedScene){adapter.enterScene(pausedScene);pausedScene=null;}else adapter.enterStandby();return;}
  if(value.type==='stop'){display.embodiment.reset();if(learned){learned.stop=performance.now();return;}adapter.stop();adapter.enterStandby();return;}
  if(value.type==='officialTouchPoints'){const count=display.sceneInteractions.togglePoints();if(!count)emit({type:'notice',message:'当前包／场景没有已移植的原作触点；互动4、5需使用新版互动包。'});return;}
  if(value.type==='edit'){learned=null;presentation.close();if(editorHost.classList.contains('open')||!finishPaint.hidden)closeEditor();else editorHost.classList.add('open');return;}
  if(value.type==='lightingEdit'){presentation.close();closeEditor();lighting.toggle();return;}
  if(value.type==='frameEdit'){learned=null;presentation.toggle();return;}
  if(value.type==='scene')return display.setSceneVisible(!!value.visible);
  if(value.type==='room')return display.setRoomVisible(!!value.visible);
  if(value.type==='voice'){voiceEnabled=!!value.enabled;if(!voiceEnabled){const sceneId=adapter.snapshot().sceneId;adapter.stop('voice-disabled');if(sceneId)adapter.enterScene(sceneId);else adapter.enterStandby();}return;}
  if(value.type==='sample'&&display.sampleOptions().some(s=>s.id===value.id)){
    display.sceneInteractions.cancel();
    if(/^show_0[2345]$/.test(value.id)){learned=null;display.embodiment.reset();adapter.enterScene(value.id);emit({type:'selfState',state:inspect()});return;}
    if(adapter.snapshot().sceneId){const mapped=value.id==='head'?display.sceneInteractions.headReaction():null;await adapter.playSceneReaction(mapped||value.id,{withVoice:!!value.withVoice});return;}
    display.embodiment.releaseHands();
    learned=null;presentation.close();
    paused=false;adapter.stop();adapter.selectSample(value.id);adapter.setStandbyAfterSample(true);
    const result=value.withVoice&&voices.getAudio(value.id)?await adapter.playWithVoice():adapter.playSample();
    if(!result.accepted)emit({type:'notice',message:'动作或原声暂时无法播放，可关闭原声后重试。'});
  }
  if(value.type==='learned'){
    display.embodiment.releaseHands();
    const clip=display.learnedOptions().find(c=>c.id===value.id);if(!clip)return;
    presentation.close();adapter.stop('learned-motion');adapter.enterStandby();
    learned={id:clip.id,duration:clip.duration,start:performance.now()};
  }
}
function inspect(){return display?{...display.embodiment.snapshot(),interactionScene:adapter?.snapshot().sceneId||null,outfit:collection?.selection?.outfit||'unknown',mode:collection?.selection?.mode||'unknown'}:null;}
function portrait(){if(!display||paused)throw new Error('模型尚未就绪');const c=document.createElement('canvas'),ratio=1024/Math.max(canvas.width,canvas.height);c.width=Math.round(canvas.width*ratio);c.height=Math.round(canvas.height*ratio);const ctx=c.getContext('2d');ctx.fillStyle='#22202a';ctx.fillRect(0,0,c.width,c.height);display.drawSnapshot(ctx,c.width,c.height);return c.toDataURL('image/jpeg',.65);}
window.SnowbreakHost={inspect,portrait,receive:value=>{void command(value).catch(error=>emit({type:'notice',message:String(error.message||error)}));}};
addEventListener('pagehide',()=>{generation++;cleanup();});
emit({type:'pageReady'});
