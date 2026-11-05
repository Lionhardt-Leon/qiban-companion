// Local bindings for confirmed surface labels, separate from native drag rules.
const REGIONS=new Set(['head','left_hand','right_hand']);
const GESTURES=new Set(['tap','double_tap','long_press','stroke']);
export function validateTouchBindings(catalog){
  if(catalog?.touchBindings===undefined)return [];
  if(!Array.isArray(catalog.touchBindings)||catalog.touchBindings.length>16)throw new Error('Invalid touch reaction bindings');
  const seen=new Set();
  return catalog.touchBindings.map(binding=>{
    const sample=catalog.samples.find(s=>s.id===binding.sampleId);
    if(!REGIONS.has(binding.region)||seen.has(binding.region)||!sample||binding.source!=='local-confirmed-surface'||binding.nativeTriggerVerified!==false||!Array.isArray(binding.gestures)||!binding.gestures.length||binding.gestures.some(g=>!GESTURES.has(g))||new Set(binding.gestures).size!==binding.gestures.length)throw new Error('Invalid confirmed surface binding');
    seen.add(binding.region);return {...binding,gestures:[...binding.gestures]};
  });
}
export function matchSurfaceReaction(event,bindings){
  if(event?.schema!=='body-touch/1'||event.source!=='skinned-surface'||!['manual-skinned-triangle','vision-reviewed-skinned-triangle'].includes(event.regionSource)||!Number.isFinite(event.confidence)||event.confidence<.7||event.confidence>1||event.surface?.alphaVerified!==true||!Number.isInteger(event.surface.triangle)||event.surface.triangle<0)return null;
  return bindings.find(b=>b.region===event.region&&b.gestures.includes(event.gesture))||null;
}
