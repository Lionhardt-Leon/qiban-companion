/* Qiban iOS interoperability adapter. GPL-3.0-or-later when distributed with
 * Fritia Online Chat; upstream source and notices accompany the .qchat file. */
(() => {
  'use strict';
  const handler = window.webkit?.messageHandlers?.qibanChat;
  const available = Boolean(handler);
  const streams = new Map(), pending = new Map(), failures = new Map();
  let profile = null, speechState = { busy: false, id: '' };
  const rawFetch = window.fetch.bind(window);
  const base64 = bytes => {
    let result = '';
    for (let n = 0; n < bytes.length; n += 32768) result += String.fromCharCode(...bytes.subarray(n, n + 32768));
    return btoa(result);
  };
  const bytes = value => Uint8Array.from(atob(value), c => c.charCodeAt(0));
  async function call(command, fields = {}) {
    if (!available) throw new Error('此功能需要栖伴 iOS 本地容器。');
    return handler.postMessage({ command, ...fields });
  }
  function notice(text) {
    document.dispatchEvent(new CustomEvent('qiban-native-notice', { detail: String(text) }));
    let node = document.getElementById('qiban-native-notice');
    if (!node) { node = document.createElement('div'); node.id = 'qiban-native-notice'; document.body?.append(node); }
    node.textContent = String(text);node.hidden = false;clearTimeout(node._timer);node._timer = setTimeout(() => { node.hidden = true; }, 8000);
  }
  function installStorage(initial) {
    const storage = window.localStorage, proto = Storage.prototype;
    const get = proto.getItem, set = proto.setItem, remove = proto.removeItem, keyAt = proto.key, clear = proto.clear;
    const length = Object.getOwnPropertyDescriptor(proto, 'length').get;
    const cache = new Map(Object.entries(initial || {})), deleted = new Set(), revisions = new Map();
    const managed = key => key.startsWith('fritia_') || key.startsWith('fritia-');
    function keys() {
      const result = new Set(cache.keys());
      for (let n = 0; n < length.call(storage); n++) {const key = keyAt.call(storage, n);if (!deleted.has(key)) result.add(key);}
      return [...result];
    }
    function persist(key, value) {
      const revision = (revisions.get(key) || 0) + 1;revisions.set(key, revision);
      const task = (pending.get(key) || Promise.resolve()).catch(() => {}).then(() => call('persist', { key, value }))
        .then(result => {if (revision === revisions.get(key) && typeof result.value === 'string') cache.set(key, result.value);failures.delete(key);})
        .catch(error => {failures.set(key, { key, value, error });notice('通讯资料保存失败：' + error.message);throw error;});
      pending.set(key, task);task.catch(() => {});
    }
    proto.getItem = function(key) {key=String(key);if (this!==storage) return get.call(this,key);return deleted.has(key) ? null : cache.has(key) ? cache.get(key) : get.call(this,key);};
    proto.setItem = function(key,value) {
      key=String(key);value=String(value);if (this!==storage || !managed(key)) return set.call(this,key,value);
      cache.set(key,value);deleted.delete(key);remove.call(storage,key);persist(key,value);
    };
    proto.removeItem = function(key) {key=String(key);if(this!==storage || !managed(key)) return remove.call(this,key);cache.delete(key);deleted.add(key);remove.call(storage,key);persist(key,null);};
    proto.key = function(index) {return this===storage ? keys()[index] ?? null : keyAt.call(this,index);};
    Object.defineProperty(proto,'length',{configurable:true,get(){return this===storage ? keys().length : length.call(this);}});
    proto.clear = function(){if(this!==storage)return clear.call(this);for(const key of keys()) this.removeItem(key);};
    window.QibanNative.flushStorage = async () => {
      await Promise.allSettled([...pending.values()]);
      if (failures.size) {const retry=[...failures.values()];for(const item of retry) persist(item.key,item.value);await Promise.allSettled([...pending.values()]);}
      if (failures.size) throw [...failures.values()][0].error;
    };
  }
  async function nativeFetch(input, init = {}) {
    const req = input instanceof Request ? new Request(input, init) : new Request(new URL(String(input), location.href), init);
    const url = new URL(req.url);
    if (!['http:','https:'].includes(url.protocol) || url.origin === location.origin) return rawFetch(req);
    if (['127.0.0.1','localhost'].includes(url.hostname) && url.port === '17373') throw new Error('iOS 不运行 stdio／npx，请改填电脑或服务器上的远程 HTTP MCP 地址。');
    if (req.signal.aborted) throw new DOMException('Aborted','AbortError');
    const body = ['GET','HEAD'].includes(req.method) ? null : new Uint8Array(await req.arrayBuffer());
    if (body?.length > 32*1024*1024) throw new Error('单次上传超过32MB，请缩小附件或分批同步。');
    const id = crypto.randomUUID();
    return new Promise((resolve,reject) => {
      const state = {resolve,reject,controller:null,ended:false};streams.set(id,state);
      req.signal.addEventListener('abort',()=>{call('abort',{id}).catch(()=>{});state.resume?.();try{state.controller?.error(new DOMException('Aborted','AbortError'));}catch{}if(!state.controller) reject(new DOMException('Aborted','AbortError'));streams.delete(id);},{once:true});
      call('fetch',{id,url:req.url,method:req.method,headers:Object.fromEntries(req.headers),body:body ? base64(body) : ''})
        .catch(error=>{streams.delete(id);reject(error);});
    });
  }
  async function receive(event) {
    if (event.type==='speech') {
      speechState=event;
      if(event.status?.startsWith('语音失败'))notice(event.status);
      document.querySelectorAll('.voice-bubble').forEach(node=>node.classList.toggle('is-playing',event.busy && node.dataset.voiceMessageId===event.id));
      return;
    }
    if(event.type==='refresh') return;
    if(event.type==='ttsMode'){localStorage.setItem('fritia_qiban_use_app_tts',event.enabled ? 'true':'false');notice(event.enabled ? '通讯使用 App 全局配音。':'通讯使用原项目 MiMO 参考音色，需在通讯设置中配置提供商并开启语音回复。');return;}
    const state=streams.get(event.id);if(!state) return;
    if(event.type==='fetchHeaders') {
      const stream=new ReadableStream({start(controller){state.controller=controller;},pull(){state.resume?.();state.resume=null;},cancel(){state.resume?.();call('abort',{id:event.id}).catch(()=>{});streams.delete(event.id);}},{highWaterMark:512*1024,size:chunk=>chunk.byteLength});
      const empty=[204,205,304].includes(event.status);
      state.resolve(new Response(empty ? null:stream,{status:event.status,headers:event.headers}));
    } else if(event.type==='fetchChunk') {
      const drained=new Promise(resolve=>{state.resume=resolve;});state.controller?.enqueue(bytes(event.data));
      if(state.controller?.desiredSize<=0) await drained;else state.resume=null;
    }
    else if(event.type==='fetchEnd') {state.controller?.close();streams.delete(event.id);}
    else if(event.type==='fetchError') {const error=new Error(event.error);if(state.controller)state.controller.error(error);else state.reject(error);streams.delete(event.id);}
  }
  async function saveBlob(name,mime,blob) {
    const opened=await call('beginFile',{name,mime,size:blob.size});
    try {
      for(let offset=0;offset<blob.size;offset+=65536) {
        const data=new Uint8Array(await blob.slice(offset,offset+65536).arrayBuffer());
        const result=await call('fileChunk',{id:opened.id,offset,data:base64(data)});
        if(result.written!==offset+data.length) throw new Error('导出写入进度不一致。');
      }
      return await call('finishFile',{id:opened.id});
    }catch(error){await call('cancelFile',{id:opened.id}).catch(()=>{});throw error;}
  }
  async function speak(fields) {
    const result=await call('speak',fields);
    if(result.spokenJapanese) document.dispatchEvent(new CustomEvent('qiban-speech-translated',{detail:{...fields,spokenJapanese:result.spokenJapanese}}));
    return result;
  }
  window.QibanNative={available,call,receive,saveBlob,speak,notice,
    appSpeechEnabled(){return available && localStorage.getItem('fritia_qiban_use_app_tts')!=='false';},
    async initialize(){
      if(!available)return null;
      profile=await call('bootstrap');window.QibanProfile=profile;installStorage(profile.storage);
      window.fetch=nativeFetch;
      document.addEventListener('click',event=>{
        const link=event.target.closest?.('a[href]');if(!link || link.hasAttribute('download')) return;
        let url;try{url=new URL(link.href,location.href);}catch{return;}
        if(['http:','https:'].includes(url.protocol) && url.origin!==location.origin){event.preventDefault();call('openURL',{url:url.href}).catch(error=>notice(error.message));}
      },true);
      return profile;
    },
    async playVoice(id,attachment){
      if(speechState.busy && speechState.id===id){await call('stopSpeech');return;}
      const payload=JSON.parse(decodeURIComponent(attachment.path.slice('qiban-speech:'.length)));
      await speak({...payload,id,automatic:false});
    },
    voiceAttachment(text){return {id:'qiban-voice-'+crypto.randomUUID(),type:'audio',name:'App 全局配音',mime:'audio/x-qiban',path:'qiban-speech:'+encodeURIComponent(JSON.stringify({text})),source:'tts-reply',duration:Math.max(1,Math.ceil(text.length/5))};},
    characterPrompt(character){
      if(character?.qibanId && profile?.contacts?.some(item=>item.qibanId===character.qibanId))return (character.prompt || '')+(profile?.bodyNotice || '');
      return (profile?.globalPrompt || '')+'\n【当前角色】\n'+(character?.prompt || '');
    },
    nativeMemory(character,mode){if(mode!=='private')return '';const item=profile?.contacts?.find(item=>item.id===character?.id);return (item?.memories ? '【本体已有的本角色私聊记忆】\n'+item.memories : '')+(character?.id===profile?.activeId && profile?.appearance ? '\n【进入通讯时的载体状态，当前模型已暂停】\n'+profile.appearance : '');},
    async flush(){await window.QibanNative.flushStorage?.();},
  };
})();
