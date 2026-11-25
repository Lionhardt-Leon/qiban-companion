/* Local-only presentation state & 2D portrait semantic action mapping.
 * Chat messages and model memory stay in the existing conversation store. */
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

export const PORTRAIT_TERMS={
  aishang:['哀伤、悲伤','sad','sad'],beishang:['悲伤、难过','sad','sad'],buan:['不安、忐忑','anxious','troubled'],
  buman:['不满、抱怨','dissatisfied','angry'],bunai:['不耐烦','impatient','angry'],call_loop:['通话循环','calling','greet'],
  chenmo:['沉默、安静','silent','thinking'],chijing:['吃惊、惊讶','surprised','surprised'],chitai:['痴态、陶醉','infatuated','shy'],chixiao:['痴笑、忍不住笑','giggle','happy'],
  chuanqi:['喘气、疲惫','panting','troubled'],cry:['哭泣、流泪','crying','sad'],danxin:['担心、忧虑','worried','troubled'],
  daxiao:['大笑、开怀大笑','laughing','happy'],dazhaohu:['打招呼、问好','greeting','greet'],deyi:['得意、骄傲自信','proud','proud'],
  diluo:['低落、失落','downcast','sad'],duibuqi:['道歉、对不起','apologetic','troubled'],dushu_loop:['看书循环','reading','thinking'],
  duzui:['嘟嘴、撒娇不满','pouting','shy'],fanguang:['眼镜反光','glasses glint','thinking'],fennu:['愤怒、生气','furious','angry'],
  fufa:['抚发、撩发','brushing hair','shy'],ganga:['尴尬、不好意思','awkward','shy'],gaoao:['高傲、傲娇','haughty','proud'],
  gaxiao:['尬笑、勉强笑','awkward smile','shy'],guzhang:['鼓掌、喝彩','applauding','happy'],haixiu:['害羞、脸红','shy','shy'],
  hanhan:['憨憨、呆萌','goofy','happy'],huangrandawu:['恍然大悟','realization','surprised'],huangzhang:['慌张、手忙脚乱','flustered','surprised'],
  huanxi:['欢喜、喜悦','delighted','happy'],huanying:['欢迎、迎接','welcome','greet'],jiancha:['检查、端详','inspecting','thinking'],
  jianding:['坚定、决心','determined','thinking'],jiangshu:['讲述、说明','explaining','thinking'],jingjie:['警戒、戒备','alert','thinking'],
  jingti:['警惕、警觉','vigilant','thinking'],jingya:['惊讶、吃惊','surprised','surprised'],jinzhang:['紧张、不安','nervous','troubled'],
  kaixin:['开心、高兴','happy','happy'],kaixn:['开心、高兴','happy','happy'],kelian:['可怜、楚楚可怜','pitiful','sad'],
  knife:['危险警告','threatening','angry'],konghe:['恐吓、威慑','intimidating','angry'],kun:['困倦、犯困','sleepy','troubled'],
  kunhuo:['困惑、不解','confused','thinking'],kunrao:['困扰、发愁','troubled','troubled'],kuqi:['哭泣、落泪','crying','sad'],
  kuxiao:['苦笑、无奈地笑','bitter smile','troubled'],leida:['专注搜寻','scanning','thinking'],leiyan:['泪眼、含泪','teary','sad'],
  lengdan:['冷淡、平静','aloof','thinking'],lianhong:['脸红、害羞','blushing','shy'],luomo:['落寞、失落','lonely','sad'],
  meng:['懵懂、呆萌','blank','surprised'],mengdao:['吓一跳呆住','stunned','surprised'],nanshou:['难受、伤心','upset','sad'],
  naobieniu:['闹别扭、赌气','sulking','angry'],nu:['生气发火','angry','angry'],nuyi:['怒意、愠色','indignant','angry'],
  pose:['常驻造型','pose','greet'],qidai:['期待、期盼','expectant','happy'],qingsong:['轻松、舒展','relaxed','happy'],
  qinshi:['异化神态','intense','angry'],renzheng:['认真、专注','serious','thinking'],sad:['难过、悲伤','sad','sad'],
  shangxin:['伤心、难过','heartbroken','sad'],shaxiao:['傻笑、憨笑','silly smile','happy'],shayi:['冰冷震慑','menacing','angry'],
  shenge:['深沉冷峻','stern','thinking'],shengqi:['生气、发脾气','angry','angry'],shengzi:['束缚姿态','bound','troubled'],
  shengzion:['束缚动作','bound','troubled'],shihuai:['释怀、微笑','relieved','happy'],shikong:['情绪失控','losing control','angry'],
  shikong_hou:['失控后神态','after outburst','angry'],shikong_qian:['失控前兆','before outburst','angry'],shishen:['失神、愣住','stunned','surprised'],
  sikao:['思考、沉思','thinking','thinking'],smile:['微笑、浅笑','smile','happy'],stand:['默认待机站姿','idle','idle'],
  tanqi:['叹气、无奈','sighing','troubled'],tengtong:['疼痛、忍耐','in pain','troubled'],tiaokan:['调侃、打趣','teasing','proud'],
  tongku:['痛苦、悲痛','painful','sad'],watermelon:['吃瓜、悠闲','playful','happy'],weiqu:['委屈、可怜','aggrieved','sad'],
  weixiao:['微笑、温柔笑','gentle smile','happy'],wink:['眨眼、俏皮','wink','wink'],xianqi:['嫌弃、不满','annoyed','angry'],
  xiao:['笑、开心微笑','smile/happy','happy'],xiaohuahua:['心花怒放','blooming happy','happy'],xiaoji:['消极、低落','dejected','sad'],
  xiaolei:['笑泪、破涕为笑','tears of joy','happy'],xiexie:['谢谢、感激','thankful','greet'],xinfen:['兴奋、激动','excited','happy'],
  xingfen:['兴奋、激动','excited','happy'],xingxing:['星星眼、期待','starry-eyed','happy'],xingxingyan:['星星眼、惊喜','starry-eyed','happy'],
  xinxu:['心虚、闪躲','sheepish','shy'],xiu:['害羞、不好意思','shy','shy'],xiunao:['羞恼、又羞又气','flustered shy','shy'],
  xiunu:['羞怒、脸红生气','embarrassed anger','shy'],xuruo:['虚弱、疲倦','weak','troubled'],yanjing:['推眼镜','glasses','thinking'],
  yansu:['严肃、郑重','serious','thinking'],yansu_hou:['严肃后神态','serious','thinking'],yansu_qian:['严肃前神态','serious','thinking'],
  yanyi:['演绎神态','dramatic','proud'],yihuo:['疑惑、好奇','puzzled','thinking'],yiwen:['疑问、发问','questioning','thinking'],
  youchou:['忧愁、忧郁','melancholy','sad'],yuyue:['愉悦、明快','cheerful','happy'],zhamao:['炸毛、吓一跳','startled','surprised'],
  zhaoji:['着急、焦急','anxious','troubled'],zhaopaixiao:['招牌笑容','signature smile','happy'],zhishuang:['直爽、坦率','frank','proud'],
  zhiyi:['质疑、怀疑','skeptical','thinking'],zhuiyi:['追忆、感慨','reminiscing','sad']
};

export function describePortraitAction(id){
  if(!id||typeof id!=='string'||!/^sp_[A-Za-z0-9_]{1,77}$/.test(id))return null;
  const parts=id.split('_');if(parts.length<3)return null;
  let rest=parts.slice(2);if(rest[0]==='00'&&rest.length>=2)rest=rest.slice(1);
  let isStand=false;if(rest[0]==='stand'){isStand=true;if(rest.length>=2)rest=rest.slice(1);}
  const raw=rest.join('_').toLowerCase(),base=raw.replace(/\d+$/,'');
  const term=PORTRAIT_TERMS[raw]||PORTRAIT_TERMS[base];
  if(term){
    const prefix=base==='stand'?'待机':isStand?'常驻':'动态';
    return {id,token:base,shortLabel:(isStand&&base!=='stand'?'常驻 · ':'')+term[0],meaning:`${prefix}：${term[0]} (${term[1]})`,intent:term[2],isStand};
  }
  return {id,token:base,shortLabel:(isStand?'常驻 · ':'')+raw,meaning:`${isStand?'常驻':'动态'}：${raw}`,intent:'custom',isStand};
}

export function buildGalActionPrompt(model){
  const anims=(model?.animations||[]).filter(id=>typeof id==='string');
  if(!anims.length)return '';
  const list=anims.map(id=>{const info=describePortraitAction(id);return `- ${id}：${info?info.meaning:id}`;}).join('\n');
  return [
    '【面对面 2D 立绘动作与表情能力映射】',
    '你当前屏幕上的 2D 立绘具备以下真实可播放的动作／表情：',
    list,
    '控制规则：当用户希望你做出某个表情／动作（如让你笑、吃惊、害羞、生气、思考、难过、得意、眨眼等），或你的回复伴随明显情绪变化时，请在回复文本的最末尾附带且仅附带一个标签：[expr:动作ID]（例如 [expr:'+anims[0]+']）。平静闲聊时可不附带。不要在正文中提及或解释该标签，也不要编造列表外的ID。'
  ].join('\n');
}

const GAL_EXPR_RE=/(?:\[|【)\s*(?:expr|action|mood|表情|动作)\s*[:：]\s*([^\]】\r\n]{1,80})\s*(?:\]|】)/gi;
const INTENT_ALIASES={
  '笑':'happy','微笑':'happy','开心':'happy','高兴':'happy','大笑':'happy','smile':'happy','happy':'happy','laugh':'happy',
  '吃惊':'surprised','惊讶':'surprised','震惊':'surprised','吓一跳':'surprised','surprised':'surprised','shocked':'surprised',
  '害羞':'shy','脸红':'shy','羞一下':'shy','shy':'shy','blush':'shy',
  '生气':'angry','愤怒':'angry','不满':'angry','angry':'angry','mad':'angry',
  '悲伤':'sad','难过':'sad','伤心':'sad','哭':'sad','委屈':'sad','sad':'sad','cry':'sad',
  '思考':'thinking','疑惑':'thinking','困惑':'thinking','严肃':'thinking','认真':'thinking','thinking':'thinking','serious':'thinking',
  '困扰':'troubled','担心':'troubled','苦笑':'troubled','叹气':'troubled','troubled':'troubled','worried':'troubled',
  '得意':'proud','骄傲':'proud','调侃':'proud','proud':'proud',
  '眨眼':'wink','wink':'wink','打招呼':'greet','欢迎':'greet','greet':'greet'
};

export function resolveGalExpression(token,model){
  const anims=(model?.animations||[]).filter(id=>typeof id==='string');
  if(!token||!anims.length)return null;
  const trimmed=String(token).trim(),lower=trimmed.toLowerCase();
  const direct=anims.find(id=>id.toLowerCase()===lower);
  if(direct)return direct;
  const infos=anims.map(id=>describePortraitAction(id)).filter(Boolean);
  const byToken=infos.find(x=>x.token===lower&&!x.isStand)||infos.find(x=>x.token===lower);
  if(byToken)return byToken.id;
  const intent=INTENT_ALIASES[trimmed]||INTENT_ALIASES[lower]||lower;
  const byIntent=infos.find(x=>x.intent===intent&&!x.isStand)||infos.find(x=>x.intent===intent);
  if(byIntent)return byIntent.id;
  const byMeaning=infos.find(x=>x.meaning.toLowerCase().includes(lower)&&!x.isStand)||infos.find(x=>x.meaning.toLowerCase().includes(lower));
  if(byMeaning)return byMeaning.id;
  return model?.expressions?.[intent]||null;
}

export function extractGalExpression(text,model){
  const raw=String(text??'');
  const tokens=[];
  const cleaned=raw.replace(GAL_EXPR_RE,(_,tok)=>{const v=String(tok||'').trim();if(v)tokens.push(v);return '';}).replace(/[ \t]+\n/g,'\n').replace(/\n{3,}/g,'\n\n').trim();
  if(!tokens.length)return {text:raw,expressionId:null};
  let expressionId=null;
  for(const tok of tokens){expressionId=resolveGalExpression(tok,model);if(expressionId)break;}
  return {text:cleaned||raw,expressionId};
}
