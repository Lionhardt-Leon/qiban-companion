import {createActionBus,toSemanticAction} from '../anim/actionbus.js';
import {resolve} from '../anim/resolve.js';
import {matchSurfaceReaction} from './touch-reactions.js';
// Original samples and opt-in local semantic arm actions share one bus.
// Neither path claims an original interaction event.
export function createSnowbreakSampleAdapter(display,{now=()=>performance.now(),audio=null,audioForSample=null,beforeVoice=()=>{},onVoiceBusy=()=>{},onReactionEvent=()=>{}}={}){
  if(!Number.isFinite(display.duration)||display.duration<=0)throw new Error('Sample clip unavailable');
  let activeArm=null,scene=null,returnScene=null;
  let sequence=0,status='stopped',generation=0,voiceMode=false,standbyAfterSample=false;
  let voiceTail=null,activeReaction=null,lastReaction=null;
  const touchBindings=display.touchBindings?.()||[];
  const duration=()=>audio?Math.max(display.duration,audio.duration):display.duration;
  if(!Number.isFinite(duration())||duration()<=0)throw new Error('Audio metadata unavailable');
  const clock=()=>{
    if(!voiceMode)return now();
    if(!audio.ended)return audio.currentTime*1000;
    // A shorter voice must not terminate the remaining original animation.
    // This local sample policy is explicit, not claimed as native scheduling.
    if(audio.duration>=display.duration)return duration()*1000;
    if(!voiceTail)voiceTail={at:now(),time:audio.duration*1000};
    return Math.min(duration()*1000,voiceTail.time+Math.max(0,now()-voiceTail.at));
  };
  const capability={schema:'character-capability/1',ok:true,kind:'snowbreak',channels:{},motions:[],expressions:[],localActions:{raise_hand:{enabled:false,experimental:true,sides:['left','right'].filter(side=>(side==='left'?display.leftArmPreview:display.armPreview)?.snapshot().available)}}};
  const choices=display.sampleOptions?.()||[];
  capability.localActions.surface_reaction={enabled:touchBindings.length>0,bindings:Object.fromEntries(touchBindings.map(binding=>{
    const clip=choices.find(c=>c.id===binding.sampleId),voice=audioForSample?.(binding.sampleId);
    return [binding.region,{sampleId:binding.sampleId,animationDuration:(clip?.duration||0)*1000,voiceDuration:(voice?.duration||0)*1000,nativeTriggerVerified:false}];
  }))};
  function reactionEvent(kind,transaction,reason='',recovered=false){
    lastReaction={schema:'local-surface-reaction/1',id:transaction.id,kind,sampleId:transaction.sampleId,region:transaction.touch.region,touch:transaction.touch,withOriginalVoice:transaction.withVoice,recovered,reason,source:'local-confirmed-surface',nativeTriggerVerified:false};
    try{onReactionEvent(lastReaction);}catch{}
  }
  const bus=createActionBus({now:clock,handlers:{onMotion:group=>status=group==='local-arm-preview'?'local-arm-preview':(group==='standby-D'||group==='standby-local')?'standby-preview':'playing',onPose:(name,plan)=>{if(name!=='snowbreak-raise-hand')return;const arm=plan.action.target==='left'?display.leftArmPreview:display.armPreview;try{display.seek(0);arm.begin();activeArm=arm;status='local-arm-preview';}catch{arm?.restore();status='arm-failed';}},onEnd:(plan,reason)=>{
    generation++;
    if(plan.action.type==='surface_reaction'&&activeReaction?.id===plan.planId){
      const transaction=activeReaction;activeReaction=null;
      if(voiceMode){audio.pause();if(reason!=='done')audio.currentTime=0;voiceMode=false;voiceTail=null;onVoiceBusy(false);}
      if(reason==='done'){
        let recovered=false;try{recovered=!!enterStandby().accepted&&status==='standby-preview';}catch{bus.clear('restore-failed');status='restore-failed';}
        reactionEvent(recovered?'completed':'failed',transaction,recovered?'local-standby-restored':'local-standby-failed',recovered);
      }else reactionEvent(reason.startsWith('audio-')?'failed':'cancelled',transaction,reason);
      return;
    }
    if(plan.action.type==='snowbreak_standby'&&reason==='done'){enterStandby();return;}
    if((plan.action.type==='snowbreak_arm_preview'||plan.action.type==='raise_hand')){activeArm?.restore();activeArm=null;status='stopped';display.seek(0);if(reason==='done'&&display.startAsStandby)enterStandby();return;}
    if(voiceMode){audio.pause();if(reason!=='done')audio.currentTime=0;voiceMode=false;voiceTail=null;onVoiceBusy(false);}
    if(reason==='done'&&returnScene){const previous=returnScene;returnScene=null;enterScene(previous.id,previous.time);return;}
    status=reason==='done'?'sample-ended':'stopped';display.seek(reason==='done'?display.duration:0);
    if(reason==='done'&&(plan.action.type==='snowbreak_standby'||standbyAfterSample))enterStandby();
  }}});
  function playSample(){
    if(status==='standby-preview')stop();
    if(bus.activeCount)return {accepted:false,reason:'sample-busy'};
    const action={type:'snowbreak_sample',source:'manual-preview',priority:80};
    return bus.dispatch(action,capability,{schema:'action-plan/1',planId:'snowbreak-sample-'+(++sequence),action,duration:(voiceMode?duration():display.duration)*1000,fadeIn:0,fadeOut:0,tracks:[{ch:'motion',group:'sample-body-face',index:0}]});
  }
  function enterScene(id,time=0){stop();display.selectSample(id);scene={id,time};status='scene-preview';display.seek(Math.min(time,display.duration));return {accepted:true};}
  async function playSceneReaction(id,{withVoice=true}={}){const previous=scene||returnScene;if(!previous)return {accepted:false};stop();display.selectSample(previous.id);display.seek(previous.time%display.duration);display.selectSample(id);setAudio(audioForSample?.(id));returnScene=previous;standbyAfterSample=false;return withVoice&&audio?playWithVoice():playSample();}
  function tick(dt){if(scene&&status==='scene-preview'){scene.time+=Math.max(0,Math.min(100,dt))/1000;display.seek(scene.id==='show_03'?Math.min(scene.time,display.duration):scene.time%display.duration);return {actions:[]};}const mediaTime=voiceMode?clock()/1000:null;const frame=bus.tick(dt);if(status==='arm-failed'){stop();status='arm-failed';return frame;}if(frame.actions.length){const action=frame.actions[0];if((action.type==='snowbreak_arm_preview'||action.type==='raise_hand')){if(status==='local-arm-preview'){try{activeArm.apply(action.progress);}catch{stop();status='arm-failed';}}return frame;}if(action.type==='snowbreak_standby'&&status==='standby-preview')display.seekStandby(action.progress*display.standbyDuration);else if(status!=='standby-preview')display.seek(mediaTime===null?action.progress*display.duration:Math.min(display.duration,mediaTime));}return frame;}
  function enterStandby(){if(!(display.standbyDuration>0))return {accepted:false,reason:'standby-unavailable'};bus.clear('standby-switch');const action={type:'snowbreak_standby',source:'manual-preview',priority:10};display.seekStandby(0);return bus.dispatch(action,capability,{schema:'action-plan/1',planId:'snowbreak-standby-'+(++sequence),action,duration:display.standbyDuration*1000,tracks:[{ch:'motion',group:display.startAsStandby?'standby-local':'standby-D',index:0}]});}
  function stop(reason='sample-stop'){scene=null;returnScene=null;activeArm?.restore();activeArm=null;generation++;bus.clear(reason);if(audio){audio.pause();audio.currentTime=0;}voiceMode=false;voiceTail=null;onVoiceBusy(false);if(display.startAsStandby)display.seekStandby(0);else display.seek(0);status='stopped';}
  function playArmPreview(side='right'){
    if(!['left','right'].includes(side))return {accepted:false,reason:'invalid-arm-side'};
    const arm=side==='left'?display.leftArmPreview:display.armPreview;
    if(!arm?.snapshot().available)return {accepted:false,reason:'arm-chain-unavailable'};
    if(status==='standby-preview')stop();
    if(bus.activeCount)return {accepted:false,reason:'sample-busy'};
    display.seek(0);
    try{arm.begin();activeArm=arm;}catch{arm.restore();activeArm=null;return {accepted:false,reason:'arm-geometry-unavailable'};}
    const action={type:'snowbreak_arm_preview',side,source:'manual-preview',priority:80};
    return bus.dispatch(action,capability,{schema:'action-plan/1',planId:'snowbreak-arm-'+(++sequence),action,duration:3600,tracks:[{ch:'motion',group:'local-arm-preview',index:0}]});
  }
  function setLocalActionsEnabled(value){capability.localActions.raise_hand.enabled=!!value;if(!value&&activeArm)stop();}
  function dispatchSemantic(name,extra={}){
    const action=toSemanticAction(name,extra);if(action.type==='surface_reaction')return {accepted:false,reason:'surface-event-required'};const plan=resolve(action,capability);
    if(plan.stopped||!plan.tracks.length)return {accepted:false,reason:'unsupported-local-action',plan};
    if(status==='standby-preview')stop();
    if(bus.activeCount)return {accepted:false,reason:'sample-busy',plan};
    const result=bus.dispatch(action,capability,plan);
    if(status==='arm-failed'){stop();status='arm-failed';return {accepted:false,reason:'arm-geometry-unavailable',plan};}
    return result;
  }
  async function dispatchSurfaceTouch(event,{withVoice=true}={}){
    if(!touchBindings.length)return {accepted:false,handled:false,reason:'surface-binding-unavailable'};
    if(bus.activeCount&&status!=='standby-preview')return {accepted:false,handled:true,reason:'sample-busy'};
    const binding=matchSurfaceReaction(event,touchBindings);
    if(!binding)return {accepted:false,handled:false,reason:'unmapped-confirmed-surface'};
    if(!Number.isInteger(event.frequency)||event.frequency<1||event.frequency>=4)return {accepted:false,handled:true,reason:'touch-frequency'};
    const nextAudio=audioForSample?.(binding.sampleId)||null;
    if(withVoice&&!nextAudio)return {accepted:false,handled:false,reason:'voice-unavailable'};
    const action=toSemanticAction('surface_reaction',{target:binding.region,source:'confirmed-surface-touch',priority:80,withOriginalVoice:!!withVoice});
    const plan=resolve(action,capability,{planId:'surface-reaction-'+(++sequence)});
    if(plan.stopped||!plan.tracks.length)return {accepted:false,handled:false,reason:'unsupported-surface-reaction'};
    stop();
    try{display.selectSample(binding.sampleId);setAudio(nextAudio);}catch{try{enterStandby();}catch{}return {accepted:false,handled:false,reason:'sample-selection-failed'};}
    const transaction={id:plan.planId,sampleId:binding.sampleId,touch:event,withVoice:!!withVoice};
    const ticket=++generation;activeReaction=transaction;voiceTail=null;voiceMode=!!withVoice;
    if(withVoice){beforeVoice();audio.currentTime=0;onVoiceBusy(true);}
    const result=bus.dispatch(action,capability,plan);
    if(!result.accepted){activeReaction=null;voiceMode=false;onVoiceBusy(false);return {...result,handled:false};}
    reactionEvent('started',transaction);
    if(!withVoice)return {...result,handled:true};
    try{await audio.play();if(ticket!==generation)return {accepted:false,handled:true,reason:'superseded'};return {...result,handled:true};}
    catch{if(ticket===generation){stop('audio-play-failed');status='audio-failed';}return {accepted:false,handled:true,reason:'audio-play-failed'};}
  }
  function selectSample(id){
    if((audio&&!audioForSample)||!display.selectSample)return {accepted:false,reason:'sample-selection-unavailable'};
    stop();try{const selected=display.selectSample(id);if(audioForSample)setAudio(audioForSample(id));if(display.startAsStandby)enterStandby();return {accepted:true,...selected};}catch{return {accepted:false,reason:'unknown-sample'};}
  }
  async function playWithVoice(){if(!audio)return {accepted:false,reason:'voice-unavailable'};if(status==='standby-preview')stop();if(bus.activeCount||voiceMode)return {accepted:false,reason:'sample-busy'};
    const ticket=++generation;beforeVoice();audio.currentTime=0;voiceTail=null;voiceMode=true;onVoiceBusy(true);const result=playSample();
    try{await audio.play();if(ticket!==generation)return {accepted:false,reason:'superseded'};return result;}
    catch(e){if(ticket===generation){stop('audio-play-failed');status='audio-failed';}return {accepted:false,reason:'audio-play-failed'};}
  }
  const onAudioEnded=()=>{if(voiceMode)tick(0);};
  const onAudioError=()=>{if(voiceMode){stop('audio-error');status='audio-failed';}};
  function setAudio(next){
    if(next&&(!Number.isFinite(next.duration)||next.duration<=0))throw new Error('Audio metadata unavailable');
    audio?.removeEventListener('ended',onAudioEnded);audio?.removeEventListener('error',onAudioError);
    audio=next||null;voiceTail=null;
    audio?.addEventListener('ended',onAudioEnded);audio?.addEventListener('error',onAudioError);
  }
  setAudio(audio);
  return {bus,capability,enterScene,playSceneReaction,dispatchSurfaceTouch,selectSample,setLocalActionsEnabled,dispatchSemantic,playArmPreview,playSample,playWithVoice,tick,stop,enterStandby,setStandbyAfterSample:value=>standbyAfterSample=!!value,snapshot:()=>({sceneId:scene?.id||returnScene?.id||null,sceneTime:scene?.time||0,localReaction:lastReaction?{...lastReaction,touch:undefined}:null,sampleDuration:display.duration,status,active:bus.activeCount,voiceMode,standbyAfterSample,audioTime:audio?.currentTime||0,audioDuration:audio?.duration||0,audioTail:!!voiceTail,originalInteractionVerified:false})};
}
