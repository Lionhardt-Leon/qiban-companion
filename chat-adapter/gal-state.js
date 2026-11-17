/* Local-only presentation state. Chat messages and model memory stay in the
 * existing conversation store; visiting a room never calls a model provider. */
export const WORLD_KEY='fritia_qiban_gal_world_v1';
export const ZONES=[['observation','B-01','观景区'],['archive','B-02','资料室'],['quarters','B-03','宿舍'],['lounge','B-04','休息区'],['canteen','B-05','食堂'],['training','B-06','训练区'],['medical','B-07','医疗室'],['corridor','B-08','走廊'],['terrace','EXT','露台']];
export function readWorld(storage=localStorage){try{const w=JSON.parse(storage.getItem(WORLD_KEY));if(w?.version===1)return {...emptyWorld(),...w};}catch{}return emptyWorld();}
export function emptyWorld(){return {version:1,bindings:{},scenes:{},locations:{},notes:[],plans:[],dorms:{},visits:[]};}
export function saveWorld(world,storage=localStorage){if(world.notes.length>500||world.plans.length>500||world.visits.length>300)throw Error('本机记录已满，请先整理记录。');storage.setItem(WORLD_KEY,JSON.stringify(world));}
export function matchingModel(character,models,world){const bound=world.bindings[character?.id];if(bound)return models.find(m=>m.id===bound)||null;const name=String(character?.name||'').normalize('NFKC').replace(/\s/g,'');const matches=models.filter(m=>[m.name,...m.aliases||[]].some(alias=>alias&&name.includes(alias.normalize('NFKC').replace(/\s/g,''))));return matches.length===1?matches[0]:null;}
export function localLocation(character,world,date=new Date()){
  if(world.locations[character.id])return world.locations[character.id];
  const hash=Array.from(character.id).reduce((a,c)=>(a*31+c.charCodeAt(0))>>>0,0),hour=date.getHours();let zone=hour<7||hour>=23?'quarters':hour<9||hour>=18&&hour<20?'canteen':hour<12?'archive':hour<14?'lounge':hour<18?'training':'observation';
  if(hash%3===1&&hour>=9&&hour<23)zone=ZONES[(Math.floor(hour/3)+hash)%ZONES.length][0];
  return {zone,activity:({quarters:'在房间休息',canteen:'准备吃点东西',archive:'翻阅资料',lounge:'稍作休息',training:'安排训练',observation:'看看窗外',medical:'整理药品',corridor:'在基地散步',terrace:'吹吹风'})[zone],source:'local-schedule'};
}
export function visit(world,character,zone,conversationId,now=Date.now()){
  if(!ZONES.some(z=>z[0]===zone))throw Error('场景不存在。');const next=structuredClone(world);next.locations[character.id]={zone,activity:'与你面对面',source:'user-visit',updatedAt:now};next.visits=[{id:crypto.randomUUID(),characterId:character.id,conversationId,zone,createdAt:now},...next.visits].slice(0,300);next.scenes[conversationId]=zone;return next;
}
export function addNote(world,{characterId,conversationId,kind='experience',text,sourceMessageId},now=Date.now()){
  text=String(text||'').trim();if(!text||text.length>2000||!['experience','promise','note'].includes(kind))throw Error('请输入2000字以内的有效记录。');
  if(sourceMessageId&&world.notes.some(n=>n.sourceMessageId===sourceMessageId&&n.characterId===characterId&&n.conversationId===conversationId&&n.kind===kind))return world;
  const next=structuredClone(world);next.notes.unshift({id:crypto.randomUUID(),characterId,conversationId,kind,text,sourceMessageId,createdAt:now});return next;
}
export function notesFor(world,characterId,conversationId){return world.notes.filter(n=>n.characterId===characterId&&n.conversationId===conversationId);}
export function messageMood(text){text=String(text||'');if(/惊讶|吃惊|吓一跳|诶[？！?]|怎么会/.test(text))return 'surprised';if(/思考|沉思|想了想|考虑/.test(text))return 'thinking';if(/生气|愤怒|恼火|哼[！!]/.test(text))return 'angry';if(/难过|伤心|失落|叹息|悲伤/.test(text))return 'sad';if(/害羞|脸红|羞涩/.test(text))return 'shy';if(/笑|开心|高兴|愉快|太好了/.test(text))return 'happy';return 'neutral';}
