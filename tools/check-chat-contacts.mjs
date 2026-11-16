import assert from 'node:assert/strict';
import {repairContactBindings,legacyContactID,recoveredContactID} from '../chat-adapter/contact-repair.js';
import {listThreads,threadOwner} from '../chat-adapter/session-ops.js';
let number=0;const uuid=()=>`00000000-0000-0000-0000-${String(++number).padStart(12,'0')}`;
const characters=[{id:'fenny',name:'芬妮',prompt:'芬妮自己的性格',qibanId:legacyContactID},{id:'tess',name:'苔丝',prompt:'苔丝自己的性格',qibanId:legacyContactID.toLowerCase()},{id:'safe',name:'其他自建角色',qibanId:'valid-native-persona'},{id:recoveredContactID,name:'旧版混合记录',qibanId:legacyContactID}];
const store={characters,conversations:[{id:'private:fenny',type:'private',memberIds:['fenny'],qibanSessionId:'old-fenny',updatedAt:1},{id:'private:tess',type:'private',memberIds:['fenny'],qibanSessionId:'old-tess',updatedAt:2},{id:'private:another',qibanThreadRoot:'private:tess',type:'private',memberIds:['fenny'],updatedAt:3},{id:'private:safe',type:'private',memberIds:['safe'],updatedAt:4}],messages:{'private:fenny':[{id:'a',text:'芬妮的旧消息'}],'private:tess':[{id:'b',text:'可能混入的旧回复'}],'private:another':[{id:'c',text:'旧历史仍可打开'}],'private:safe':[{id:'d',text:'不受影响'}]},activeConversationId:'private:tess'};
const mirrors=Object.fromEntries(store.conversations.slice(0,3).map(c=>[c.id,{qibanId:legacyContactID,cardID:'fenny',sessionID:'bad-native-session'}]));
const before=JSON.stringify({store,mirrors}),result=repairContactBindings(store,mirrors,{uuid,now:100});
assert.equal(result.count,2);assert.equal(JSON.stringify({store,mirrors}),before,'repair does not mutate the backup snapshot');
assert.deepEqual(result.store.messages['private:tess'],store.messages['private:tess'],'old message bytes are retained');
assert.equal(result.store.conversations.find(c=>c.id==='private:tess').memberIds[0],'tess','canonical contact ID repairs the overwritten member');
assert.equal(result.store.conversations.find(c=>c.id==='private:another').memberIds[0],'tess','thread root repairs the overwritten history owner');
for(const id of ['fenny','tess']){
 const current=result.store.conversations.find(c=>c.id===result.selected['private:'+id]);
 assert.equal(threadOwner(current),'private:'+id);assert.deepEqual(result.store.messages[current.id],[],'future replies start with clean context');
 assert(listThreads(result.store,current).some(t=>t.id==='private:'+id),'old conversations remain reachable');
 assert.equal(result.store.characters.find(c=>c.id===id).prompt,characters.find(c=>c.id===id).prompt,'each original prompt is preserved');
 assert.equal(result.store.characters.find(c=>c.id===id).qibanId,'');
}
assert.equal(result.store.activeConversationId,result.selected['private:tess'],'clicking Tess stays on Tess');
assert.deepEqual(result.store.conversations.find(c=>c.id==='private:safe'),store.conversations.at(-1));
assert.equal(result.store.characters.find(c=>c.id===recoveredContactID).qibanId,legacyContactID,'native legacy archive remains accessible');
assert.equal(repairContactBindings(result.store,result.mirrors,{uuid}).changed,false,'repair is idempotent');
console.log(JSON.stringify({contactRepairChecks:18,passed:true,oldMessagesPreserved:true,independentNewContext:true}));
