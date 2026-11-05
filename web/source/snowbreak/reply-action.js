// Preserve the explicit side across both native and desktop reply parsers.
// undefined means this is an existing action, to be handled by its old parser.
export function normalizeLocalArmReply(raw){
  const name=typeof raw==='string'?raw:raw?.name;
  if(name!=='raise_hand')return undefined;
  if(!raw||typeof raw!=='object'||!['left','right'].includes(raw.target))return '';
  return {name:'raise_hand',target:raw.target,seconds:3.6};
}
