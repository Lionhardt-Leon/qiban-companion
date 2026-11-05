import {classifySurface} from './surface.js';
const equal=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
export function createSurfaceLabels(initial={},limit=30000){
  const labels=new Map(),undo=[],redo=[];let transaction=null;
  function valid(key,value){const match=/^(surface_\d+):(\d+)$/.exec(key);return !!match&&!!classifySurface({mesh:match[1],triangle:Number(match[2]),alphaVerified:true},{[key]:value});}
  for(const [key,value] of Object.entries(initial||{})){if(labels.size>=limit)break;if(valid(key,value))labels.set(key,typeof value==='object'?Object.freeze({...value}):value);}
  function write(key,value){if(value===undefined)labels.delete(key);else labels.set(key,value);}
  function begin(){if(transaction)throw new Error('已有标注操作未结束');transaction=new Map();}
  function set(key,value){
    if(!transaction)throw new Error('标注操作尚未开始');
    if(value!==undefined&&!valid(key,value))throw new Error('无效表面标签');
    if(value!==undefined&&!labels.has(key)&&labels.size>=limit)throw new Error('标注数量达到上限');
    const current=labels.get(key);if(equal(current,value))return false;
    if(value&&typeof value==='object')value=Object.freeze({...value});
    if(!transaction.has(key))transaction.set(key,{key,before:current,after:value});else transaction.get(key).after=value;
    const entry=transaction.get(key);if(equal(entry.before,entry.after))transaction.delete(key);
    write(key,value);return true;
  }
  function commit(){if(!transaction)return false;const patch=[...transaction.values()];transaction=null;if(!patch.length)return false;undo.push(patch);if(undo.length>30)undo.shift();redo.length=0;return true;}
  function cancel(){if(!transaction)return;for(const entry of transaction.values())write(entry.key,entry.before);transaction=null;}
  function step(from,to,field){if(transaction)throw new Error('请先结束当前标注');const patch=from.pop();if(!patch)return false;for(const entry of patch)write(entry.key,entry[field]);to.push(patch);return true;}
  return {begin,set,commit,cancel,undo:()=>step(undo,redo,'before'),redo:()=>step(redo,undo,'after'),get:key=>labels.get(key),has:key=>labels.has(key),snapshot:()=>Object.fromEntries(labels),state:()=>({count:labels.size,undo:undo.length,redo:redo.length,editing:!!transaction})};
}
