// Evidence comes from the hit triangle's actual skin weights, never screen height.
export function boneRegion(name=''){
 const n=name.toLowerCase();
 if(/breast|bust|tit(?:for|_|\b)|oppai/.test(n))return 'chest';
 if(/butt|glute/.test(n))return 'hips';
 if(/eye|jaw|cheek|face|lip/.test(n))return 'face';
 if(/head|hair/.test(n))return 'head';
 if(/neck/.test(n))return 'neck';
 if(/hand|finger|thumb|index|middle|ring|pinky/.test(n))return /(?:-l-|_l\b|left)/.test(n)?'left_hand':/(?:-r-|_r\b|right)/.test(n)?'right_hand':'hand';
 if(/upperarm|forearm|clavicle/.test(n))return 'arm';
 if(/foot|toe/.test(n))return 'foot';
 if(/thigh|calf|knee/.test(n))return 'leg';
 if(/spine|pelvis|hip/.test(n))return 'torso';
 return null;
}
export function weightedAnatomy(influences){
 const scores=new Map();let total=0;
 for(const {name,weight} of influences){if(!Number.isFinite(weight)||weight<=0)continue;total+=weight;const region=boneRegion(name);if(region)scores.set(region,(scores.get(region)||0)+weight);}
 const best=[...scores].sort((a,b)=>b[1]-a[1])[0];
 if(!best||total<=0||best[1]/total<.7)return null;
 return {id:best[0],confidence:Math.min(.95,best[1]/total),source:'weighted-skinned-triangle'};
}
