/* Recover Android 0.30.0 contact aliases without discarding the old messages. */
export const legacyContactID='9B583844-9F62-8EC4-CBB9-3C088982854E';
export const recoveredContactID='qiban_recovered_'+legacyContactID;
const broken=value=>typeof value==='string'&&[legacyContactID.toLowerCase(),'null'].includes(value.toLowerCase());
export function repairContactBindings(store,mirrors,{uuid=()=>crypto.randomUUID(),now=Date.now()}={}){
  const affected=new Set(store.characters.filter(c=>c.id!==recoveredContactID&&(broken(c.qibanId)||Object.values(mirrors).some(m=>m.cardID===c.id&&broken(m.qibanId)))).map(c=>c.id));
  if(!affected.size)return {changed:false,store,mirrors,selected:{},count:0};
  const cards=new Map(store.characters.map(c=>[c.id,c]));
  const owner=c=>[c.id,c.qibanThreadRoot].map(id=>store.characters.find(p=>id==='private:'+p.id)?.id).find(Boolean)
    || (cards.has(mirrors[c.id]?.cardID)?mirrors[c.id].cardID:c.memberIds[0]);
  const active=store.conversations.find(c=>c.id===store.activeConversationId),activeOwner=active?.type==='private'?owner(active):'';
  const nextMirrors={...mirrors},selected={};let activeID=store.activeConversationId;
  const conversations=store.conversations.map(c=>{
    if(c.type!=='private'||!affected.has(owner(c)))return c;
    const id=owner(c),card=cards.get(id);delete nextMirrors[c.id];
    return {...c,memberIds:[id],title:card.name,avatar:card.avatar,qibanSessionId:uuid(),qibanThreadTitle:('升级前记录 · '+(c.qibanThreadTitle||'原有对话')).slice(0,120)};
  });
  const messages={...store.messages};
  for(const id of affected){
    const card=cards.get(id),session=uuid(),conversationID='private:'+session;
    conversations.unshift({id:conversationID,type:'private',memberIds:[id],title:card.name,avatar:card.avatar,createdAt:now,updatedAt:now,unread:0,qibanSessionId:session,qibanThreadTitle:'新对话',qibanThreadRoot:'private:'+id});
    messages[conversationID]=[];selected['private:'+id]=conversationID;if(activeOwner===id)activeID=conversationID;
    delete nextMirrors[id];
  }
  return {changed:true,count:affected.size,selected,mirrors:nextMirrors,store:{...store,characters:store.characters.map(c=>affected.has(c.id)?{...c,qibanId:''}:c),conversations,messages,activeConversationId:activeID}};
}
