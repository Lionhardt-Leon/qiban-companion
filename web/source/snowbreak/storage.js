const ID=/^[a-zA-Z0-9_-]{1,96}$/;
function identity(value){if(!ID.test(value?.characterId)||!ID.test(value?.skinId))throw new Error('Invalid skin identity');return value.characterId+':'+value.skinId;}
async function transaction(mode,work){
  const db=await new Promise((resolve,reject)=>{const r=indexedDB.open('kksnowbreak',1);r.onupgradeneeded=()=>r.result.createObjectStore('assets');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});
  try{return await new Promise((resolve,reject)=>{const tx=db.transaction('assets',mode);let result;work(tx.objectStore('assets'),value=>result=value);tx.oncomplete=()=>resolve(result);tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||new Error('保存失败'));});}finally{db.close();}
}
// Keep the legacy key so an update or rollback can load the selected skin.
export async function storedSkin(bytes,manifest){
  const key=manifest?identity(manifest):null;
  return transaction(bytes===undefined?'readonly':'readwrite',(store,done)=>{
    const r=bytes===undefined?store.get('last-package'):store.put(bytes,'last-package');r.onsuccess=()=>done(r.result);
    if(bytes!==undefined&&key){store.put(bytes,'skin:'+key);store.put({characterId:manifest.characterId,skinId:manifest.skinId},'skin-meta:'+key);store.put(key,'active-skin');}
  });
}
export async function listSkins(){
  return transaction('readonly',(store,done)=>{const rows=[],r=store.openCursor();r.onsuccess=()=>{const c=r.result;if(!c){done(rows);return;}if(String(c.key).startsWith('skin-meta:'))rows.push(c.value);c.continue();};});
}
export async function selectSkin(manifest){
  const key=identity(manifest);
  return transaction('readwrite',(store,done)=>{const r=store.get('skin:'+key);r.onsuccess=()=>{if(!r.result){done(false);return;}store.put(r.result,'last-package');store.put(key,'active-skin');done(true);};});
}
