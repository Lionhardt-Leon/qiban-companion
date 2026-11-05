import {openSkinArchive} from './archive.js';
import {storedSkin,listSkins,selectSkin} from './storage.js';
const file=document.querySelector('#file'),status=document.querySelector('#status'),use=document.querySelector('#use');let version=0;
const saved=document.querySelector('#saved'),choose=document.querySelector('#choose');let skins=[];
async function refreshSaved(){skins=await listSkins();saved.replaceChildren(...skins.map((s,i)=>new Option(s.characterId+' / '+s.skinId,String(i))));choose.disabled=!skins.length;}
choose.onclick=async()=>{try{if(await selectSkin(skins[Number(saved.value)])){status.textContent='已切换本地皮肤，角色人格与聊天记录保留。';use.disabled=false;}}catch(e){status.textContent='切换失败：'+e.message;}};
refreshSaved().catch(e=>{status.textContent='读取已存皮肤失败：'+e.message;});
file.onchange=async()=>{const ticket=++version;use.disabled=true;file.disabled=true;let opened;
  try{const selected=file.files[0];if(!selected)return;if(selected.size>64*1024*1024)throw new Error('资源包超过64MB');
    const bytes=new Uint8Array(await selected.arrayBuffer());opened=await openSkinArchive(bytes);if(ticket!==version)return;
    await storedSkin(bytes,opened.manifest);await refreshSaved();status.textContent=`已校验并保存 ${opened.manifest.characterId} / ${opened.manifest.skinId}。可查看模型与原动画样本，完整互动待接入。`;use.disabled=false;
  }catch(e){status.textContent='导入失败：'+e.message;}finally{await opened?.runtime.dispose();file.disabled=false;}};
use.onclick=()=>{localStorage.setItem('kk.avatar',JSON.stringify('snowbreak'));location.href='/?m=snowbreak';};
