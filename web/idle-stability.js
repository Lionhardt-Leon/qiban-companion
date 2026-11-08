import * as THREE from 'three';

// A seated resting state owns its arm pose. Explicit source reactions and AI
// gestures are separate layers and still use their full authored motion.
export function stableSeatedTrack(track){
 if(/UpperArm|Forearm|Hand|Finger/.test(track.bone))return {...track,keys:track.keys.map(()=>track.keys[0])};
 return quietIdleTrack(track);
}

// Prepare once at import, never allocate filtering buffers in the frame loop.
// The final source key duplicates the first key; filter around that closed seam.
export function quietIdleTrack(track){
 const cycle=track.keys.length-1;if(cycle<3)return track;
 const amplitude=/BONE_(hari|hair|PD)_/.test(track.bone)?.22:.6,reference=track.keys[0];
 const keys=track.keys.map((key,index)=>{
  const previous=track.keys[(index-1+cycle)%cycle],current=track.keys[index%cycle],next=track.keys[(index+1)%cycle];
  const filtered=key.slice();
  for(let k=0;k<3;k++)filtered[k]=reference[k]+(.2*previous[k]+.6*current[k]+.2*next[k]-reference[k])*amplitude;
  const rotation=new THREE.Quaternion().fromArray(previous,3).slerp(new THREE.Quaternion().fromArray(current,3),.75).slerp(new THREE.Quaternion().fromArray(next,3),.2);
  new THREE.Quaternion().fromArray(reference,3).slerp(rotation,amplitude).normalize().toArray(filtered,3);
  return filtered;
 });
 keys[cycle]=keys[0].slice();return {...track,keys};
}
