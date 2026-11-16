(() => {
  'use strict';

  const $ = s => document.querySelector(s),
    call = (command, fields = {}) => window.QibanAndroid.call({
      command,
      ...fields
    });
  document.addEventListener('submit', e => e.preventDefault(), true);
  const escape = s => String(s ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[c]);
  let state = null,
    archive = null,
    ready = false,
    busy = false,
    search = false,
    camera = false,
    listening = false,
    nonce = '',
    selected = '',
    readyData = null,
    bodyState = {},
    currentPane = '',
    editingMessage = null,
    timer;
  const labels = {
    turn_left: '向左转',
    turn_right: '向右转',
    turn_back: '转过身',
    face_front: '转回正面',
    raise_left_hand: '抬左手',
    raise_right_hand: '抬右手',
    raise_both_hands: '抬双手',
    lower_hands: '放下双手',
    close_eyes: '闭眼',
    open_eyes: '睁眼',
    raise_left_leg: '抬左腿',
    raise_right_leg: '抬右腿',
    spread_legs: '分开双腿',
    lower_legs: '恢复腿部',
    gesture_shy: '害羞',
    gesture_nod: '点头',
    gesture_shake: '摇头',
    gesture_tilt_left: '向左歪头',
    gesture_tilt_right: '向右歪头',
    gesture_look_left: '向左看',
    gesture_look_right: '向右看',
    gesture_bow: '鞠躬',
    gesture_open_arms: '张开双臂',
    gesture_wave_left: '左手挥手',
    gesture_wave_right: '右手挥手',
    head: '头部互动',
    left: '左手互动',
    right: '右手互动',
    home_login: '登录招呼',
    home_invite: '邀请互动',
    home_shy: '害羞',
    home_check: '检查动作',
    home_kiss: '亲吻',
    home_jealous: '吃醋',
    home_marry: '婚礼互动',
    home_sigh: '叹气',
    home_stage: '主页展示',
    home_stand: '站立待机',
    show_02: '展示02',
    show_03: '展示03',
    show_04: '展示04',
    show_05: '展示05',
    sequence: '完整展示',
    idle_01: '待机变化01',
    idle_02: '待机变化02'
  };
  const date = value => new Date((value + 978307200) * 1000).toLocaleString();
  const lib = () => archive.settings.personas,
    role = () => lib().cards.find(c => c.id === archive.personaSessionKey) || lib().cards[0];
  function notice(text) {
    clearTimeout(timer);
    $('#notice').textContent = text;
    $('#notice').style.display = 'block';
    timer = setTimeout(() => $('#notice').style.display = 'none', 6500);
  }
  function stage(value) {
    const win = $('#model').contentWindow;
    if (win) win.postMessage({
      qibanStageCommand: value
    }, location.origin);
  }
  function head(vectors) {
    return {
      duration: 3,
      poses: vectors.map((head, i) => ({
        time: i * 3 / (vectors.length - 1),
        head
      }))
    };
  }
  function gesture(id) {
    const vectors = {
      gesture_nod: [[0, 0, 0], [0, 12, 0], [0, -4, 0], [0, 8, 0], [0, 0, 0]],
      gesture_shake: [[0, 0, 0], [-18, 0, 0], [18, 0, 0], [-10, 0, 0], [0, 0, 0]],
      gesture_tilt_left: [[0, 0, 0], [0, 0, -12], [0, 0, -12], [0, 0, 0]],
      gesture_tilt_right: [[0, 0, 0], [0, 0, 12], [0, 0, 12], [0, 0, 0]],
      gesture_look_left: [[0, 0, 0], [-25, 0, 0], [-25, 0, 0], [0, 0, 0]],
      gesture_look_right: [[0, 0, 0], [25, 0, 0], [25, 0, 0], [0, 0, 0]]
    };
    if (vectors[id]) return head(vectors[id]);
    if (id === 'gesture_shy') return {
      duration: 4,
      poses: [{
        time: 0,
        head: [0, 0, 0],
        smile: 0
      }, {
        time: 1.2,
        head: [15, 8, -6],
        smile: .3
      }, {
        time: 2.8,
        head: [15, 8, -6],
        smile: .3
      }, {
        time: 4,
        head: [0, 0, 0],
        smile: 0
      }]
    };
    if (id === 'gesture_bow') return {
      duration: 3,
      poses: [{
        time: 0,
        head: [0, 0, 0],
        torso: [0, 0, 0]
      }, {
        time: 1.2,
        head: [0, 8, 0],
        torso: [0, 10, 0]
      }, {
        time: 3,
        head: [0, 0, 0],
        torso: [0, 0, 0]
      }]
    };
    if (id === 'gesture_open_arms') return {
      duration: 4,
      poses: [{
        time: 0,
        leftHand: [0, 0, 0],
        rightHand: [0, 0, 0]
      }, {
        time: 1.5,
        leftHand: [-.55, .4, .12],
        rightHand: [.55, .4, .12]
      }, {
        time: 2.5,
        leftHand: [-.55, .4, .12],
        rightHand: [.55, .4, .12]
      }, {
        time: 4,
        leftHand: [0, 0, 0],
        rightHand: [0, 0, 0]
      }]
    };
    if (id === 'gesture_wave_left' || id === 'gesture_wave_right') {
      const left = id.endsWith('left'),
        sign = left ? -1 : 1;
      return {
        duration: 4,
        poses: [[0, 0, 0], [sign * .3, .9, .15], [sign * .5, .85, .15], [sign * .2, .9, .15], [sign * .5, .85, .15], [0, 0, 0]].map((v, i) => ({
          time: i * .8,
          [left ? 'leftHand' : 'rightHand']: v
        }))
      };
    }
    return null;
  }
  function action(id, motion, automatic = false) {
    if(id==='stop')return stage({type:'stop'});
    if(id==='procedural')return stage({type:'gesture',id,plan:motion,automatic});
    if(id.startsWith('snowbreak_'))return stage({type:'sample',id:id.slice(10),withVoice:automatic?false:state.preferences?.snowbreakVoice!==false,automatic});
    if(id.startsWith('enya_yuki_'))return stage({type:'learned',id:id.slice(5),automatic});
    const variant=/^(?:enya|fenny)_(mode|outfit)_(.+)$/.exec(id);
    if(variant){const selection=readyData?.selection||{mode:'standing',outfit:'normal'},mode=variant[1]==='mode'?variant[2]:selection.mode,outfit=variant[1]==='outfit'?variant[2]:selection.outfit;const item=(readyData?.variants||[]).find(v=>v.mode===mode&&v.outfit===outfit);if(item)stage({type:'variant',id:item.id});return;}
    if((readyData?.samples||[]).includes(id))return stage({type:'sample',id,automatic});

    if (id.startsWith('variant:')) return stage({
      type: 'variant',
      id: id.slice(8)
    });
    if (id.startsWith('sample:')) return stage({
      type: 'sample',
      id: id.slice(7),
      withVoice:state.preferences?.snowbreakVoice!==false,
      automatic
    });
    if (id.startsWith('learned:')) return stage({
      type: 'learned',
      id: id.slice(8),
      automatic
    });
    const plan = gesture(id);
    stage(plan ? {
      type: 'gesture',
      id,
      plan,
      automatic
    } : {
      type: 'body',
      id,
      automatic
    });
  }
  async function refresh() {
    state = await call('bootstrap');
    archive = state.archive;
    render();
    return state;
  }
  const icon=window.QibanUI.icon;
  let personaDraft=null,personaID='',personaTab='AI 人设',attachedImage=null,voiceCall=false,visionTicket=0,visionBusy=false;
  const paneParents={api:'settings',services:'api',service:'services',persona:'settings',speech:'settings',history:'settings',messages:'settings',memories:'settings',diary:'settings',appearance:'settings',snowbreak:'settings',embodiment:'settings',assets:'settings',network:'settings',images:'',actions:'',mood:'actions','body-state':'actions',sources:'',greetings:'','edit-message':'messages','persona-transfer':'persona-return','prompt-preview':'persona-return','local-vision':'images'};
  function render() {
    if(!archive)return;
    const last=archive.messages.at(-1),reply=last?.role==='assistant'?last:null;
    $('#caption').hidden=!reply;$('#caption').textContent=display(reply);
    $('#thinking').hidden=!busy;$('#connect-api').hidden=busy||Boolean(archive.settings.endpoint);
    $('#search').hidden=!archive.settings.services?.search?.enabled;
    $('#greeting').hidden=archive.messages.length>0||!role().firstMessages?.length;
    $('#send').disabled=busy||(!$('#input').value.trim()&&!attachedImage);
    $('#sources').hidden=!reply?.sources?.length;$('#sources').textContent=`本轮检索来源（${reply?.sources?.length||0}）`;
    if(currentPane==='messages'&&document.activeElement?.id!=='history-input')messages();
  }
  function display(message){if(!message)return '';if(message.role==='assistant'){try{const raw=message.content.trim().replace(/^```(?:json)?\s*|\s*```$/g,'');const obj=JSON.parse(raw);if(typeof obj.reply==='string')return obj.reply;}catch{}}return message.content||'';}
  async function loadModel(file) {
    if (!file) return;
    selected = file;
    nonce = crypto.randomUUID();
    ready = false;
    await call('modelNonce', {
      nonce
    });
    $('#empty').hidden = true;
    $('#model').src = '/stage/' + (file.endsWith('.json') ? 'generic.html' : 'index.html');
  }
  function loadStage() {
    stage({
      type: 'touchPolicy',
      aiControlled: state.touchAI !== false && Boolean(archive.settings.endpoint)
    });
    stage({
      type: 'load',
      url: '/package/' + selected,
      nonce
    });
    stage({type:'voice',enabled:state.preferences?.snowbreakVoice!==false});
    stage({
      type: 'voiceLanguage',
      language: archive.settings.speech.language
    });
  }
  function button(id, text, cls = '') {
    return `<button type="button" data-do="${id}" class="${cls}">${escape(text)}</button>`;
  }
  function field(id, label, value, large = false, type = 'text') {
    return `<label>${escape(label)}${large ? `<textarea id="${id}" rows="5">${escape(value)}</textarea>` : `<input id="${id}" type="${type}" value="${escape(value)}">`}</label>`;
  }
  function check(id, label, value) {
    return `<label class="check"><span>${escape(label)}</span><input id="${id}" type="checkbox" ${value ? 'checked' : ''}></label>`;
  }
  function options(id, label, values, value) {
    return `<label>${escape(label)}<select id="${id}">${values.map(([v, t]) => `<option value="${escape(v)}" ${String(value) === String(v) ? 'selected' : ''}>${escape(t)}</option>`).join('')}</select></label>`;
  }
  function panel(title,html,pane){
    const menu=['actions','images','greetings','persona-transfer'].includes(pane);if(!menu)stage({type:'pause'});call('editing',{value:!menu}).catch(()=>{});call('homePage',{open:!menu}).catch(()=>{});restoreModel();currentPane=pane;
    $('#panel').dataset.pane=pane;$('#panel-title').textContent=title;$('#panel-content').innerHTML=html;
    $('#panel-back').hidden=!paneParents[pane];window.QibanUI.hydrate($('#panel-content'));
    if(!$('#panel').open)$('#panel').showModal();$('#panel').scrollTop=0;
  }
  function close(){visionTicket++;restoreModel();call('homePage',{open:false}).catch(()=>{});if($('#confirmation').open)$('#confirmation').close();$('#panel').close();currentPane='';personaDraft=null;stage({type:'resume'});call('editing',{value:false}).catch(()=>{});}
  function restoreModel(){const model=$('#model');if(model.parentElement!==document.body){document.body.prepend(model);model.removeAttribute('style');}}
  function nav(id,title,symbol,summary='',disabled=false){return `<button type="button" ${disabled?'disabled':`data-do="${id}"`} class="nav-row${disabled?' disabled':''}">${icon(symbol)}<span class="row-copy">${escape(title)}${summary?`<small>${escape(summary)}</small>`:''}</span>${disabled?'':icon('chevron.right','chevron')}</button>`;}
  function heading(title){return `<h3 class="section-title">${escape(title)}</h3>`;}
  function slider(id,label,value,min,max,step=.01){return `<label>${escape(label)}<span class="slider-value" data-value="${id}">${Number(value).toFixed(step===.1?1:2)}</span><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${Number(value)}"></label>`;}
  function confirm(title,description,label,work,danger=false){$('#confirmation-content').innerHTML=`<h3>${escape(title)}</h3><p>${escape(description)}</p><button id="confirm-go" class="${danger?'danger':''}">${escape(label)}</button><button id="confirm-cancel">取消</button>`;$('#confirmation').showModal();$('#confirm-cancel').onclick=()=>$('#confirmation').close();$('#confirm-go').onclick=()=>{$('#confirmation').close();run(work);};}
  async function preference(key,value){await call('preference',{key,value});state.preferences={...state.preferences,[key]:value};}
  function modelName(){return readyData?.displayName||({Enya:'恩雅护士',Fenny:'芬妮婚皮',generic:'本地伙伴'}[state.selectedModel]||'本地伙伴');}
  function settings(){
    const selected=state.selectedModel,prefs=state.preferences||{},snow=['Enya','Fenny'].includes(selected);
    panel('设置',`<button data-do="close" class="circle" aria-label="返回陪伴">${icon('chevron.left')}</button><h1 class="large-title">设置</h1><div class="grid settings-shortcuts settings-gap">${[['chat','通讯','bubble.left.and.bubble.right'],['game','游戏','suit.spade.fill']].map(([id,t,i])=>`<button data-do="${id}">${icon(i)}${t}</button>`).join('')}</div><button data-do="new-conversation" class="settings-link">${icon('plus.bubble')}开启新对话</button><button data-do="history" class="settings-link settings-gap">${icon('bubble.left.and.bubble.right')}历史对话／切换对话</button><div class="muted" style="margin:0 0 10px">我的伙伴</div><div class="section hero">${icon('person.crop.circle')}<h3>${escape(role().name||modelName())}</h3>${options('current-model','当前伙伴',state.models.map(m=>[m.id,m.id==='generic'?'本地伙伴':m.id==='Enya'?'恩雅护士':'芬妮婚皮']),selected)}${snow?check('source-voice',modelName()+'原声',prefs.snowbreakVoice!==false):''}<button data-do="appearance" class="switch-model full">${icon('arrow.triangle.2.circlepath')}切换 / 导入伙伴</button></div><div class="section group">${check('show-background','显示背景',prefs.showSceneBackground!==false)}${(readyData?.backgrounds||[]).length?options('background-name','场景',readyData.backgrounds.map(n=>[n,({Morning_BG:'清晨',SunnyDay_BG:'晴天',Night_BG:'夜晚'}[n]||n)]),prefs.sceneBackgroundName||'Morning_BG'):''}${nav('','画中画 · 接入中','pip','',true)}${nav('','音乐 · 接入中','music.note','',true)}</div><div class="section group">${nav('snowbreak','导入尘白角色','person.crop.rectangle.stack')}${!snow?nav('embodiment','身体、触碰与光照','sun.max'):`<p class="muted">角色沿用现有 iOS 项目的材质、原作动作与场景打光。</p>`}${nav('api','模型与自定义 API','slider.horizontal.3')}${nav('chat','通讯聊天 · 会话与群聊','bubble.left.and.bubble.right')}${nav('game','游戏 · 大富翁牌桌','suit.spade.fill')}${nav('persona','人设与陪伴','person.text.rectangle')}${nav('speech','离线语音与中／日配音','speaker.wave.2')}${nav('messages','聊天记录','bubble.left.and.bubble.right')}${nav('memories','记忆','heart.text.square')}${nav('diary','日记','book')}</div><p class="muted">本地保存 · 自定义服务<br>人设、聊天与记忆随角色卡保存。语音和后置识图按需开启。</p>`,'settings');
    $('#current-model').onchange=e=>selectModel(e.target.value);
    if($('#source-voice'))$('#source-voice').onchange=e=>run(async()=>{await preference('snowbreakVoice',e.target.checked);stage({type:'voice',enabled:e.target.checked});});
    $('#show-background').onchange=e=>run(async()=>{await preference('showSceneBackground',e.target.checked);stage({type:snow?'scene':'background',visible:e.target.checked,name:prefs.sceneBackgroundName||'Morning_BG'});});
    if($('#background-name'))$('#background-name').onchange=e=>run(async()=>{await preference('sceneBackgroundName',e.target.value);stage({type:'background',visible:$('#show-background').checked,name:e.target.value});});
  }
  function api(){const s=archive.settings;panel('设置',`<form id="api-form"><div class="section group">${nav('services','独立功能接口','network')}<p class="muted">分别配置识图、联网搜索、TTS 和语音识别。未启用的功能沿用原设置。</p></div>${heading('主对话 API')}<div class="section">${field('endpoint','HTTPS 接口地址',s.endpoint)}${field('main-key','API Key（留空保留本设备密钥）','',false,'password')}${field('model-name','模型名称',s.model)}${slider('temperature','温度',s.temperature,0,2,.1)}</div><p class="hint">支持 OpenAI 兼容的 Chat Completions。填写完整接口路径或以 /v1 结尾的地址；当前仅支持 HTTPS。密钥保存在本机安全存储，不包含在备份中。</p><div class="section"><p class="muted">系统提示词、用户身份、AI 角色卡与身体能力，请在主页设置 → 人设与陪伴中管理。</p></div><div class="section group"><button class="full" id="save-api">保存设置</button></div>${heading('数据')}<div class="section group">${button('native-backup','导出本地备份')}${button('restore','从备份恢复')}</div><p class="hint">备份包含聊天、记忆、日记、人设和接口地址，不含密钥。恢复前自动保留当前资料快照。备份文件为明文，请妥善保管。</p><p class="hint">仅在发起对话时连接你配置的服务。最近最多 30 条消息及人设、记忆用于上下文；日记不会自动发送。没有官方登录或自动更新。</p></form>`,'api');$('#api-form').onsubmit=e=>run(async()=>{e.preventDefault();const settings=structuredClone(archive.settings);Object.assign(settings,{endpoint:$('#endpoint').value.trim(),model:$('#model-name').value.trim(),temperature:Number($('#temperature').value)});await call('saveSettings',{settings,mainKey:$('#main-key').value});await refresh();$('#save-api').textContent='已保存';notice('设置已保存。');});}
  const serviceKinds={vision:['图片与镜头识别','photo','跟随主对话接口'],search:['联网搜索','globe','关闭'],tts:['语音合成 TTS','speaker.wave.2','使用本机音色'],asr:['语音识别 ASR','waveform','使用本机识别']};
  const serviceProtocols={vision:[['chatVision','Chat Completions 识图']],search:[['deepSeekSearch','DeepSeek 兼容搜索']],tts:[['deepSeekTTS','DeepSeek TTS'],['openAISpeech','OpenAI 兼容 TTS']],asr:[['deepSeekASR','DeepSeek ASR'],['openAITranscription','OpenAI 兼容 ASR']]};
  function services(){panel('独立功能接口',`<p class="hint">主对话继续负责角色、人设和动作决定。下面各项可分别使用不同服务和密钥。</p>${heading('按功能配置')}<div class="section group">${Object.entries(serviceKinds).map(([key,[name,symbol,fallback]])=>{const p=archive.settings.services?.[key];return nav('service-'+key,name,symbol,p?.enabled?(serviceProtocols[key].find(v=>v[0]===p.apiProtocol)?.[1]||p.apiProtocol):fallback);}).join('')}</div><p class="hint">未启用独立接口时，识图沿用主对话接口；搜索关闭；语音合成与识别使用原来的本机方案。云端接口需要符合所选协议，具体模型和音色由服务商提供。</p>`,'services');}
  function serviceEditor(kind){const p=archive.settings.services?.[kind]||{enabled:false,endpoint:'',model:'',voice:'stella',apiProtocol:serviceProtocols[kind][0][0]},explanation={vision:'启用后，照片、后摄画面和模型截图只发给此识图接口；观察结果交给主对话模型。图片不写入聊天备份。',search:'打开联网搜索开关的对话才检索；仅发送当前问题的前128字，不发送完整聊天、人设或记忆。回复下方可查看来源。',tts:'自动朗读、手动朗读和语音通话使用此接口。仅发送清理旁白后的台词；本机音色保留，关闭独立 TTS 后继续使用。',asr:'每段麦克风录音发送到此接口识别，每段最多30秒，停顿后上传。环境声音分类仍在本机运行。'}[kind];panel(serviceKinds[kind][0],`<form id="service-form"><div class="section">${check('service-on','使用独立接口',p.enabled)}<p class="muted">${explanation}</p></div>${heading('接口配置')}<div class="section">${button('deepseek-preset','填入 DeepSeek 配置')}${options('service-protocol','协议',serviceProtocols[kind],p.apiProtocol)}${field('service-endpoint','完整 HTTPS 接口地址',p.endpoint)}${field('service-key','此功能的 API Key（留空保留）','',false,'password')}<div id="service-model-field">${field('service-model','模型名称',p.model)}</div>${kind==='tts'?field('service-voice','云端音色 ID',p.voice):''}<p id="service-path" class="muted"></p></div><div class="section group"><button class="full" id="save-service">保存此功能</button>${kind!=='asr'?button('test-service','测试当前接口'):''}<div id="service-notice" class="muted"></div></div><p class="hint">每项密钥独立保存在本机，按协议和地址绑定，不会借用主对话密钥，也不进入备份。修改地址或协议后请重新填写此功能的密钥。</p></form>`,'service');const read=()=>({enabled:$('#service-on').checked,apiProtocol:$('#service-protocol').value,endpoint:$('#service-endpoint').value.trim(),model:$('#service-model').value.trim(),voice:$('#service-voice')?.value.trim()||'stella'});const paths={chatVision:'chat/completions',deepSeekSearch:'tools/search',deepSeekTTS:'tools/tts',openAISpeech:'audio/speech',deepSeekASR:'tools/asr',openAITranscription:'audio/transcriptions'};function protocol(){const value=$('#service-protocol').value;$('#service-model-field').hidden=!['chatVision','openAISpeech','openAITranscription'].includes(value);$('#service-path').textContent='当前协议默认路径：/v1/'+paths[value];}protocol();$('#service-protocol').onchange=()=>{protocol();$('#service-key').value='';};$('#service-endpoint').oninput=()=>{$('#service-key').value='';};$('[data-do=deepseek-preset]').onclick=()=>{const proto=serviceProtocols[kind][0][0];$('#service-protocol').value=proto;$('#service-endpoint').value='https://api.deepseek.com/v1/'+paths[proto];$('#service-model').value=kind==='vision'?'deepseek-flash':'';$('#service-key').value='';protocol();};$('#service-form').onsubmit=e=>run(async()=>{e.preventDefault();const settings=structuredClone(archive.settings);settings.services={...settings.services,[kind]:read()};await call('saveSettings',{settings,serviceKeys:{[kind]:$('#service-key').value}});await refresh();$('#service-notice').textContent='已保存：'+(read().enabled?serviceKinds[kind][0]+'使用独立接口':serviceKinds[kind][2]);});if($('[data-do=test-service]'))$('[data-do=test-service]').onclick=()=>run(async()=>{const b=$('[data-do=test-service]');b.disabled=true;$('#service-notice').textContent='正在测试…';try{const r=await call('testService',{kind,profile:read(),key:$('#service-key').value});$('#service-notice').textContent=r.message;}finally{b.disabled=false;}});}
  function emptyCard(){return {id:crypto.randomUUID().toUpperCase(),title:'新角色',name:'伙伴',description:'',personality:'',scenario:'',firstMessages:[],examples:'',systemRules:'',replyRules:'',userName:'',userDescription:'',notes:'',tags:[]};}
  function personas(){personaDraft=structuredClone(lib());personaID=archive.personaSessionKey;personaTab='AI 人设';personaEditor();}
  function globalPersona(){if(!personaDraft)personaDraft=structuredClone(lib());personaTab='用户人设';personaEditor();}
  function editPersona(id){if(!personaDraft)personaDraft=structuredClone(lib());if(id)personaID=id;else{if(personaDraft.cards.length>=50)throw Error('最多保存50张角色卡。');const c=emptyCard();c.title='新角色 '+(personaDraft.cards.length+1);personaDraft.cards.push(c);personaID=c.id;}personaTab='AI 人设';personaEditor();}
  function editor(id,title,value,hint=''){return `<div class="section editor-panel"><h3>${escape(title)}</h3><p class="hint">${escape(hint)}</p><textarea id="${id}" rows="5">${escape(value||'')}</textarea><span class="count" data-count="${id}">${String(value||'').length} 字</span></div>`;}
  function collectPersona(){if(!personaDraft||!$('#persona-form'))return;const card=personaDraft.cards.find(c=>c.id===personaID);for(const e of document.querySelectorAll('[data-card-field]'))card[e.dataset.cardField]=e.value;for(const e of document.querySelectorAll('[data-library-field]'))personaDraft[e.dataset.libraryField]=e.value;if($('#p-first'))card.firstMessages=$('#p-first').value.split(/\n---\n/).filter(v=>v.trim());}
  function personaEditor(){const c=personaDraft.cards.find(c=>c.id===personaID)||personaDraft.cards[0];personaID=c.id;const edit=(key,title,hint,global=false)=>editor((global?'l-':'p-')+key,title,global?personaDraft[key]:c[key],hint).replace('<textarea ',`<textarea data-${global?'library':'card'}-field="${key}" `);let fields='';if(personaTab==='AI 人设')fields=`<div class="section"><h3>角色身份</h3><p class="muted">名字用于 {{char}}，卡片标题方便管理。</p>${field('p-title','卡片标题',c.title)}${field('p-name','AI 的名字 / 自称',c.name)}</div>${edit('description','人物描述','身份、背景、与你的关系')}${edit('personality','性格与说话方式','她怎样倾听、说话与表达情绪')}${edit('scenario','场景','你们目前所处的情境与关系阶段')}${edit('examples','示例对话','支持 {{char}} 与 {{user}}；示例不会当作真实聊天经历。')}<details><summary>开场白与备注</summary>${editor('p-first','开场白',c.firstMessages.join('\n---\n'),'多条之间单独一行写 ---；每条最多8000字、最多20条，只在空对话中手动使用。')}${edit('notes','创作者备注','仅本地管理，不发给 AI。')}</details>`;else if(personaTab==='用户人设')fields=`<div class="section"><h3>全局用户身份</h3><p class="muted">没有专属覆盖时，对所有角色生效。</p>${field('l-userName','希望 AI 怎样称呼你',personaDraft.userName)}</div>${edit('userDescription','关于我','你的身份、偏好、边界与相处方式',true)}<details><summary>当前角色专属的「我」</summary>${field('p-userName','专属称呼，留空继承全局',c.userName)}${edit('userDescription','专属用户人设','留空继承全局；填写后替代全局用户描述。')}</details>`;else if(personaTab==='系统规则')fields=`${edit('systemPrompt','全局系统提示词','所有角色共用的语言、回复长度及相处规则。正文单字段最多100万字，当前人设拼接最多200万字。',true)}${edit('systemRules','当前角色补充规则','仅针对当前角色的特殊要求')}${edit('replyRules','回复补充规则','角色卡的 post_history_instructions 在此作为系统补充规则使用。')}${button('preview-prompt','预览实际发送的提示词','bordered')}`;else fields=`${edit('bodyStyle','陪伴动作风格','描述动作频率、表达方式和边界。App 会保留必要的身体控制协议。',true)}<div class="section"><h3>当前可用的身体映射</h3><p class="muted">由已加载模型决定，不能通过填写人设凭空增加骨骼能力。</p>${(readyData?.bodyActions||[]).map(id=>`<div>${escape(labels[id]||id)}<div class="muted">${escape(id)}</div></div>`).join('')||'<p class="muted">尚未加载可用动作，请返回主页加载伙伴。</p>'}</div>`;panel('人设与陪伴',`<form id="persona-form"><div class="section"><div class="row">${icon('person.text.rectangle')}<div><h3>${escape(c.title)}</h3><span class="muted">当前载体 · ${escape(modelName())}</span></div><button type="button" data-do="persona-transfer" aria-label="人设导入导出">${icon('square.and.arrow.up.on.square')}</button></div>${options('persona-card','角色卡',personaDraft.cards.map(c=>[c.id,c.title]),personaID)}<div class="row">${button('persona-new','＋ 新建')}${button('persona-copy','复制')}</div><p class="muted">为不同伙伴保存不同角色卡。切换人设时分别保留聊天、记忆和日记；编辑草稿不会立即改变正在使用的人设。</p></div><div class="segmented">${['AI 人设','用户人设','系统规则','身体能力'].map(t=>`<button type="button" data-persona-tab="${t}" class="${t===personaTab?'selected':''}">${t}</button>`).join('')}</div>${fields}<div id="persona-notice" class="package-notice"></div><div class="sticky-save"><button class="primary">${icon('checkmark.circle.fill')} 保存并应用到当前伙伴</button></div></form>`,'persona');for(const key of ['title','name','userName'])if($('#p-'+key))$('#p-'+key).dataset.cardField=key;if($('#l-userName'))$('#l-userName').dataset.libraryField='userName';$('#persona-card').onchange=e=>{collectPersona();personaID=e.target.value;personaEditor();};$('#persona-form').onsubmit=e=>run(async()=>{e.preventDefault();collectPersona();const settings=structuredClone(archive.settings);settings.personas=structuredClone(personaDraft);await call('saveSettings',{settings});state=await call('selectPersona',{id:personaID});archive=state.archive;render();$('#persona-notice').textContent='已保存并应用到'+modelName();});}
  function speech(){const p=archive.settings.speech,remote=archive.settings.services?.tts,voices=state.voices||[];panel('离线语音',`<form id="speech-form">${remote?.enabled?heading('当前发声来源')+`<div class="section">独立 TTS：${escape(remote.apiProtocol)} · ${escape(remote.voice)}</div>`:''}${heading('离线语音包')}<div class="section">${escape(state.voicePackageName||'尚未导入训练语音包')}${button('import','导入中／日离线语音包')}<p class="muted">选择本机 .qvoice 文件。导入后中、日配音都在手机本机合成，无需连接电脑。系统音色与训练音色分开标明。</p></div>${heading('全局配音')}<div class="section">${check('speech-on','启用 TTS 语音',p.enabled!==false)}<p id="tts-explanation" class="muted">${p.enabled!==false?'控制陪伴与通讯模式的所有 TTS 配音。':'TTS 已关闭，保留文字对话；可随时重新开启。'}</p>${options('speech-voice',remote?.enabled?'本机备用音色／语言':'音色',voices.map(v=>[v.id,v.title]),p.voiceID)}${check('auto-play','自动朗读 AI 回复',p.autoPlay)}<p class="muted">${p.language==='ja'?'角色说日语，聊天显示中文译文；日文原话可在聊天记录中查看。':'角色说中文。文字对话和语音通话使用同一套配音。'}</p>${slider('speech-speed','语速',p.speed,.7,1.3)}${slider('speech-volume','音量',p.volume,0,1)}<button class="full" id="save-speech">保存语音设置</button><div id="speech-settings-notice" class="package-notice"></div></div>${heading('安卓硬件加速')}<div class="section">${options('compute','本机合成后端',[['automatic','自动 · NNAPI 可用时加速'],['cpu','CPU · 兼容模式']],['automatic','cpu'].includes(p.computeMode)?p.computeMode:'automatic')}<p class="muted">分阶段加载模型，优先降低内存峰值；支持时使用 NNAPI，遇到不兼容运算回退 CPU。先优化骁龙，兼容天玑。首次出声可能较慢。</p><p class="muted">${escape(state.device)}</p></div>${heading('试听')}<div class="section group">${button('test-speech','试听当前音色')}${button('stop-speech','停止朗读')}</div>${heading('独立配音接口')}<div class="section group">${nav('services','配置独立 TTS 与其他接口','network')}</div><p class="hint">音色设置为全局设置。更换模型或人设不会自动改用另一种声音。原作互动原声片段由角色的“原声”开关单独控制；双语角色包原声跟随所选语言。</p></form>`,'speech');$('#speech-on').onchange=e=>run(async()=>{await call('setTTSEnabled',{enabled:e.target.checked});archive.settings.speech.enabled=e.target.checked;$('#tts-explanation').textContent=e.target.checked?'控制陪伴与通讯模式的所有 TTS 配音。':'TTS 已关闭，保留文字对话；可随时重新开启。';$('#auto-play').disabled=!e.target.checked;});$('#speech-form').onsubmit=e=>run(async()=>{e.preventDefault();const settings=structuredClone(archive.settings),id=$('#speech-voice').value;settings.speech={...settings.speech,enabled:$('#speech-on').checked,autoPlay:$('#auto-play').checked,voiceID:id,language:voices.find(v=>v.id===id)?.language||(id.endsWith('.ja')?'ja':'zh'),computeMode:$('#compute').value,speed:Number($('#speech-speed').value),volume:Number($('#speech-volume').value)};await call('saveSettings',{settings});await refresh();stage({type:'voiceLanguage',language:settings.speech.language});$('#speech-settings-notice').textContent='已保存，全局使用所选配音。';});}
  function history(){const active=archive.activeSessionIDs[archive.personaSessionKey],sessions=archive.conversationSessions.filter(s=>s.personaKey===archive.personaSessionKey).sort((a,b)=>b.updatedAt-a.updatedAt);panel('历史对话',`<div class="section group"><button data-do="new-conversation" class="nav-row">${icon('plus.bubble')}<span>开启新对话</span></button>${sessions.map(s=>{const contents=s.id===active?archive:archive.sessionHistories[s.id]||{},list=contents.messages||[];return `<div class="session-entry"><button data-session="${escape(s.id)}" class="card-choice"><span class="card-text"><b>${escape(s.title)}</b><span class="preview">${escape(display(list.at(-1))||'还没有消息')}</span><span>${escape(new Date((s.updatedAt+978307200)*1000).toLocaleDateString())}</span></span>${s.id===active?icon('checkmark.circle.fill','current-check'):''}</button><button class="rename" data-rename="${escape(s.id)}" aria-label="重命名对话">•••</button></div>`;}).join('')}</div>`,'history');}
  function messages(){const scroll=$('#panel').scrollTop,input=$('#history-input')?.value||'';panel('陪伴',`<div class="conversation-banner">${icon('sparkles')}<div><b>陪伴 · 开发预览</b>角色与动画迁移中，当前支持文字对话。</div></div><div class="inline">${button('new-conversation','开启新对话')}${button('history','历史对话')}</div>${!archive.messages.length?'<p class="muted" style="padding:32px 0">在设置中连接你的 API，再聊聊今天的事。</p>':''}${archive.messages.map(m=>`<article class="message ${m.role}" data-message="${escape(m.id)}"><div class="message-meta">${m.role==='user'?'你':'伴侣'}</div><div class="bubble" tabindex="0">${escape(display(m))}${m.spokenJapanese?`<p class="muted">${escape(m.spokenJapanese)}</p>`:''}</div>${(m.sources||[]).map(source=>`<a href="${escape(source.url)}" target="_blank">${escape(source.title)}</a>`).join('')}<div class="message-actions"><button data-regenerate="${escape(m.id)}" aria-label="重新生成">↻</button><button data-edit-message="${escape(m.id)}" aria-label="编辑或删除">•••</button>${m.role==='assistant'?`<button data-speak="${escape(m.id)}">${icon('speaker.wave.2')} 朗读</button>`:''}</div></article>`).join('')}${busy?button('cancel','停止回复'):archive.messages.at(-1)?.role==='user'?button('retry','重新请求回复'):''}<form id="history-composer" class="messages-composer"><textarea id="history-input" placeholder="想说点什么…" rows="1">${escape(input)}</textarea><button aria-label="发送" ${busy?'disabled':''}>${icon('arrow.up.circle.fill')}</button></form>`,'messages');$('#panel').scrollTop=scroll;let hold;for(const bubble of document.querySelectorAll('.bubble')){bubble.onpointerdown=()=>hold=setTimeout(()=>editMessage(bubble.closest('[data-message]').dataset.message),550);for(const key of ['onpointerup','onpointercancel','onpointermove'])bubble[key]=()=>clearTimeout(hold);bubble.oncontextmenu=e=>{e.preventDefault();editMessage(bubble.closest('[data-message]').dataset.message);};}$('#history-composer').onsubmit=e=>run(async()=>{e.preventDefault();await sendHome($('#history-input').value,false);});}
  function editMessage(id){const m=archive.messages.find(m=>m.id===id);if(!m)return;editingMessage=id;panel('编辑消息',`<div class="section">${field('message-text','消息正文',display(m),true)}${button('save-message','保存修改','primary')}${button('delete-message','删除该消息','danger')}${button('messages','取消')}</div><p class="muted">保存后可继续对话，或点击消息下的 ↻ 使用修改后的内容重新生成。</p>`,'edit-message');}
  function memories(){panel('记忆',`${heading('希望她记住的事')}<div class="section"><textarea id="memory-text" rows="12">${escape(archive.memories)}</textarea>${button('save-memory','保存记忆')}</div><p class="hint">保存的记忆会随对话发送给你配置的 API。当前由你手动编辑，不会自动提取。人设按人设页限制完整发送，保存的记忆最多注入12000字；实际总上下文容量取决于所选模型和接口。</p>`,'memories');}
  function diary(){panel('日记',`${heading('写下今天')}<div class="section"><textarea id="diary-text" rows="5"></textarea>${button('save-diary','保存日记')}</div>${heading('本地日记')}<div class="section">${archive.diary.map(d=>`<div><p class="muted">${escape(new Date((d.createdAt+978307200)*1000).toLocaleDateString())}</p><div style="white-space:pre-wrap">${escape(d.text)}</div></div>`).join('')||'<p class="muted">还没有日记</p>'}</div>`,'diary');}
  async function selectModel(id){state=await call('selectModel',{id});archive=state.archive;close();await loadModel(id==='generic'?'generic.json':id+'.snowbreak');}
  function appearance(){panel('角色预览',`<div class="character-preview">${icon('person.crop.rectangle.stack')}</div><p class="muted" style="text-align:center">${ready?escape(modelName()):'角色资源迁移预览'}</p><p style="text-align:center">导入角色包或单个网格 JSON。支持拖动旋转、双指缩放。</p>${state.models.length?`<div class="section group">${state.models.map(m=>`<button data-model="${escape(m.id)}" class="nav-row"><span class="row-copy">${escape(m.id==='Enya'?'恩雅护士':m.id==='Fenny'?'芬妮婚皮':'本地伙伴')}</span>${m.id===state.selectedModel?icon('checkmark.circle.fill'):icon('chevron.right')}</button>`).join('')}</div>`:''}${readyData?.frameCount?`<div class="inline">${button('idle-toggle','暂停待机')}${button('idle-rewind','回到开头')}<span class="muted" id="preview-frame">1/${readyData.frameCount}</span></div>`:''}${readyData?.morphs?`<div class="section">${check('expression-blink','自动眨眼',true)}${slider('expression-eyes','闭眼',0,0,1)}${slider('expression-mouth','张嘴',0,0,1)}${slider('expression-smile','微笑',0,0,1)}${button('expression-reset','重置表情')}</div>`:''}<div class="grid">${button('import','选择角色文件','primary')}${button('assets','App 文件夹','bordered')}</div><p class="muted" style="text-align:center">版本 ${escape(state.version)} · 已导入的素材保存在本机</p>`,'appearance');if(ready){const slot=$('.character-preview');slot.replaceChildren($('#model'));$('#model').style.cssText='position:relative;inset:0;width:100%;height:100%;';stage({type:'resume'});if($('#expression-blink'))$('#expression-blink').onchange=e=>stage({type:'expression',value:{autoBlink:e.target.checked}});}}
  function snowbreakImport(){panel('导入尘白角色',`${heading('尘白角色 · 本地移植')}<div class="section"><p>导入本地恩雅／芬妮 .snowbreak 整合包。可用模式、动作、场景和原声由素材包决定。</p>${button('import','选择角色素材包')}${button('assets','App 文件夹')}${state.models.some(m=>m.id!=='generic')?'<p>已保存角色素材，下次启动会从本机加载。</p>':''}</div>${heading('触碰')}<div class="section"><p>导入后可在动作菜单切换已保存的角色、陪伴模式和服饰。显示原作触点可查看当前场景已有的触点；也可通过精细触碰表面标注补充身体分区。</p><p>原 App 内保存的标注不会跨 App 自动读取；模型和原始互动资源可以沿用。</p></div>`,'snowbreak');}
  function embodiment(){const p=state.preferences||{};panel('身体与光照',`${heading('身体反馈')}<div class="section">${check('body-breathing','自然呼吸',p.bodyBreathing!==false)}${check('body-physics','胸部与臀部惯性',p.bodyPhysics!==false)}${slider('body-strength','物理强度',p.bodyStrength??.65,0,1.5)}${check('touch-ai','触碰时让 AI 回应',state.touchAI!==false)}${check('touch-haptics','手机轻振反馈',p.touchHaptics!==false)}<p class="muted">触碰额头、脸颊、手臂等位置可触发反馈。AI 回应使用你配置的 API。</p></div>${heading('打光与着色')}<div class="section"><div class="inline">${button('light-soft','柔和')}${button('light-sunset','夕阳')}${button('light-cool','清冷')}</div>${[['lightAzimuth','主光左右',34,-90,90],['lightElevation','主光高度',38,5,85],['lightKey','主光强度',1,0,1.8],['lightFill','环境补光',.7,.1,1.2],['lightWarmth','冷暖',.12,-1,1],['lightSoftness','阴影柔和度',.18,.02,.5],['lightRim','边缘光',.12,0,.5]].map(([k,t,d,min,max])=>slider(k,t,p[k]??d,min,max)).join('')}<p class="muted">返回主屏后应用。使用角色原贴图、MatCap 和脸部阴影，叠加可调卡通打光。</p>${button('save-embodiment','保存身体与光照','primary')}</div>`,'embodiment');}
  function images(){panel('图片与自身形象',`<div class="section group">${button('choose-photo','从相册发送图片')}${button('choose-photo','从文件发送图片')}${button('local-vision','本机识图（已选照片／后摄）')}${button('self-portrait','附上自身模型画面')}</div><div class="section">${options('self-image-policy','自身形象输入',[['off','仅身体状态文字'],['questions','问及外观时附模型画面'],['always','每轮附模型画面（需识图 API）']],state.preferences?.selfAppearanceImagePolicy||'questions')}</div>`,'images');$('#self-image-policy').onchange=e=>run(()=>preference('selfAppearanceImagePolicy',e.target.value));}
  function showAttachment(){const p=$('#image-preview');p.hidden=!attachedImage;p.innerHTML=attachedImage?`<img alt="待发送的图片" src="${attachedImage.dataURL}"><span>${attachedImage.source==='selfPortrait'?'自身模型截图':'用户附图'}\n发送时交给当前识图 API，不写入备份</span>${button('remove-image','移除')}`:'';render();}
  async function portrait(){if(!ready)throw Error('请先加载角色。');const dataURL=await new Promise((resolve,reject)=>{const ticket=crypto.randomUUID();const timeout=setTimeout(()=>{window.removeEventListener('message',receive);reject(Error('模型截图超时，请重试。'));},8000);function receive(e){if(e.origin!==location.origin||e.source!==$('#model').contentWindow||e.data?.qibanPortrait?.ticket!==ticket)return;clearTimeout(timeout);window.removeEventListener('message',receive);const r=e.data.qibanPortrait;if(r.error)reject(Error(r.error));else resolve(r.dataURL);}window.addEventListener('message',receive);stage({type:'androidPortrait',ticket});});if(!/^data:image\/jpeg;base64,/.test(dataURL)||dataURL.length>5e6)throw Error('模型截图无效。');return {dataURL,source:'selfPortrait'};}
  async function photo(file){if(!file)return;if(file.size>20e6)throw Error('图片超过20MB。');const bitmap=await createImageBitmap(file),ratio=Math.min(1,1024/Math.max(bitmap.width,bitmap.height)),canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(bitmap.width*ratio));canvas.height=Math.max(1,Math.round(bitmap.height*ratio));canvas.getContext('2d').drawImage(bitmap,0,0,canvas.width,canvas.height);bitmap.close();attachedImage={dataURL:canvas.toDataURL('image/jpeg',.78),source:'user'};close();showAttachment();}
  function mood(){const m=archive.moods?.[archive.personaSessionKey]||{emotion:'calm',intensity:.25,closeness:.25,reason:'初次见面，平静陪伴。'},name={calm:'平静',happy:'开心',shy:'害羞',affectionate:'亲近',curious:'好奇',sad:'低落',uncomfortable:'不自在'}[m.emotion]||'平静';panel('心情与行为状态',`<div class="section"><h3>${name}</h3><p>${escape(m.reason)}</p><label>心情强度 ${Math.round(m.intensity*100)}%<div class="mood-meter"><i style="width:${m.intensity*100}%"></i></div></label><label>亲近度 ${Math.round(m.closeness*100)}%<div class="mood-meter"><i style="width:${m.closeness*100}%"></i></div></label></div><p class="hint">心情由本轮对话决定，动作以播放器身体实况为准。每段对话分别保存状态。</p>`,'mood');}
  function bodyInspector(){stage({type:'bodyState'});panel('当前身体状态',`<pre id="body-inspector" class="preview-code">${escape(JSON.stringify(bodyState,null,2))}</pre>`,'body-state');}
  function actions(){const r=readyData||{},items=(ids)=>ids.map(id=>`<button data-action="${escape(id)}" class="full">${escape(labels[id]||id)}</button>`).join(''),body=r.bodyActions||[],gestures=body.filter(id=>id.startsWith('gesture_'));panel('动作',`<div class="section"><details><summary>身体控制</summary>${items(body.filter(id=>!id.startsWith('gesture_')))}</details><details><summary>更多肢体动作</summary>${items(gestures)}</details>${button('body-state','查看当前身体状态')}${button('mood','心情与行为状态')}${button('hearing',voiceCall?'停止环境聆听':'环境声音反馈（本机）')}</div>${state.models.filter(m=>m.id!==state.selectedModel).map(m=>`<div class="section group"><button data-model="${m.id}">切换到${escape(m.id==='Fenny'?'芬妮婚皮':m.id==='Enya'?'恩雅护士':'本地伙伴')}</button></div>`).join('')}${(r.variants||[]).length?heading('陪伴模式与服饰')+`<div class="section group">${r.variants.map(v=>`<button data-action="variant:${escape(v.id)}">${escape((r.selection?.mode===v.mode&&r.selection?.outfit===v.outfit?'✓ ':'')+(v.mode==='standing'?'看板娘（站立）':state.selectedModel==='Fenny'?'皮肤互动':'皮肤互动（坐姿）')+' · '+({normal:state.selectedModel==='Fenny'?'原婚纱':'正常服饰',nude:'果体版',underwear:'婚纱内衣版'}[v.outfit]||v.outfit))}</button>`).join('')}</div>`:''}<div class="section group">${(r.samples||[]).map(id=>`<button data-action="sample:${escape(id)}">${escape(labels[id]||id)}</button>`).join('')}${(r.learned||[]).map(id=>`<button data-action="learned:${escape(id)}">${escape(id.replace('yuki_',''))}</button>`).join('')}</div><div class="section group">${[['edit','精细触碰表面标注'],['officialTouchPoints','显示／隐藏原作触点'],['modelEdit','仅移动角色（场景不动）'],['frameEdit','整体场景与镜头编辑'],['lightingEdit','采光与材质'],['danceEdit','舞蹈幅度与节奏']].map(([id,t])=>button('stage-'+id,t)).join('')}${button('stage-stop','停止动作')}</div>`,'actions');}
  function assets() {
    panel('本地素材库', `<div class="section">${button('import', '导入素材包', 'primary')}<p class="muted">.snowbreak：完整角色、原作动作与录音<br>.qcards：原版牌桌视听包、尘白与自定义立绘<br>.qchat：完整通讯程序（${state.chatInstalled ? '已安装' : '待导入'}）<br>.qvoice：中文／日文离线克隆配音<br>.qbackup / JSON：恢复历史、人设与设置</p>${button('backup', '导出完整文字备份')}</div><div class="section">${button('chat', '打开完整通讯')}${button('game', '打开原版牌桌')}</div>`, 'assets');
  }
  function network() {
    panel('手机本地与 UU 联机', `<div class="section"><h3>iOS 与安卓共同牌桌</h3><p>1. 在各自手机的 UU 云联机进入同一个“通用联机房”。<br><br>2. 任一手机打开栖伴 → 游戏 → 手机开房。<br><br>3. 房主在游戏邀请里填入 UU 显示的虚拟 IP，复制游戏端口与游戏房间号。<br><br>4. 朋友在栖伴“通过 UU 加入”中填写房主 IP、游戏端口、游戏房间号。</p><p class="muted">UU 的通用房间号与栖伴游戏房间号各自使用。手机负责牌局，UU 负责网络通路。相同 Wi-Fi／热点也可以搜索附近房间。实际通路取决于 UU 是否转发本 App 的流量，两部真机需确认；不需要 PC。房主在后台设置 UU 时安卓会显示房间运行通知，打牌时保持 App 前台。</p>${button('game', '进入游戏', 'primary')}</div>`, 'network');
  }
  async function handle(id) {
    if(id.startsWith('service-'))return serviceEditor(id.slice(8));
    if (id.startsWith('stage-')) {
      close();
      stage({
        type: id.slice(6)
      });
      return;
    }
    switch (id) {
      case 'panel-back':return handle(paneParents[currentPane]||'settings');
      case 'persona-return':return personaEditor();
      case 'services':return services();
      case 'diary':return diary();
      case 'snowbreak':return snowbreakImport();
      case 'embodiment':return embodiment();
      case 'images':return images();
      case 'mood':return mood();
      case 'body-state':return bodyInspector();
      case 'choose-photo':$('#photo-file').value='';$('#photo-file').click();return;
      case 'self-portrait':attachedImage=await portrait();close();return showAttachment();
      case 'remove-image':attachedImage=null;return showAttachment();
      case 'local-vision':{if(visionBusy)return;visionBusy=true;const ticket=++visionTicket;notice('正在本机识图…');const control=$('[data-do=local-vision]');if(control)control.disabled=true;try{const result=await call('localVision',{image:attachedImage});if(ticket!==visionTicket||currentPane!=='images')return;panel('本机识图',`<p id="vision-result" style="white-space:pre-wrap">${escape(result.text)}</p>${button('attach-vision','附到聊天输入')}`,'local-vision');}finally{visionBusy=false;if(control?.isConnected)control.disabled=false;}return;}
      case 'attach-vision':$('#input').value+=($('#input').value?'\n':'')+$('#vision-result').textContent;close();return render();
      case 'sources':{const sources=archive.messages.at(-1)?.sources||[];return panel('本轮检索来源',sources.map(s=>`<div class="section"><a href="${escape(s.url)}" target="_blank">${escape(s.title)}</a><p>${escape(s.snippet)}</p></div>`).join(''),'sources');}
      case 'greetings':return panel('使用角色开场白',`<div class="section group">${role().firstMessages.map((text,i)=>`<button data-greeting="${i}">${escape(text.slice(0,60))}</button>`).join('')}</div>`,'greetings');
      case 'persona-new':collectPersona();return editPersona();
      case 'persona-copy':{collectPersona();if(personaDraft.cards.length>=50)throw Error('最多保存50张角色卡。');const c=structuredClone(personaDraft.cards.find(c=>c.id===personaID));c.id=crypto.randomUUID().toUpperCase();c.title+=' 副本';personaDraft.cards.push(c);personaID=c.id;return personaEditor();}
      case 'persona-transfer':collectPersona();return panel('人设导入导出',`<div class="section group">${button('import-personas','导入角色卡 / 人设库 JSON')}${button('export-personas','导出人设库 JSON')}</div>`,'persona-transfer');
      case 'import-personas':$('#persona-file').value='';$('#persona-file').click();return;
      case 'export-personas':return call('exportPersonas',{library:personaDraft||lib()});
      case 'preview-prompt':{collectPersona();const result=await call('promptPreview',{library:personaDraft,cardID:personaID});return panel('本轮提示词预览',`<pre class="preview-code">${escape(result.text)}</pre>`,'prompt-preview');}
      case 'save-diary':{const r=await call('addDiary',{text:$('#diary-text').value});archive=r.archive;return diary();}
      case 'native-backup':return call('nativeBackup');
      case 'restore':return confirm('从备份恢复','恢复将替换当前聊天、记忆、日记和设置。接口地址改变时需重新填写旧密钥，恢复前保留快照。','选择备份',()=>call('import'),true);
      case 'cancel':await call('cancel');busy=false;return render();
      case 'retry':{const r=await call('retry');archive=r.archive;busy=true;return render();}
      case 'save-embodiment':{const values={bodyBreathing:$('#body-breathing').checked,bodyPhysics:$('#body-physics').checked,bodyStrength:Number($('#body-strength').value),touchHaptics:$('#touch-haptics').checked};for(const key of ['lightAzimuth','lightElevation','lightKey','lightFill','lightWarmth','lightSoftness','lightRim'])values[key]=Number($('#'+key).value);await call('preferences',{values});state.preferences={...state.preferences,...values};await call('touchPolicy',{enabled:$('#touch-ai').checked});state.touchAI=$('#touch-ai').checked;applyStagePreferences();return notice('身体与光照设置已保存。');}
      case 'idle-toggle':{const b=$('[data-do=idle-toggle]'),paused=b.textContent==='暂停待机';b.textContent=paused?'播放待机':'暂停待机';return stage({type:'idlePause',paused});}
      case 'idle-rewind':return stage({type:'idleRewind'});
      case 'expression-reset':for(const id of ['expression-eyes','expression-mouth','expression-smile'])$('#'+id).value=0;$('#expression-blink').checked=false;return stage({type:'expression',value:{autoBlink:false,blink:0,mouth:0,smile:0}});
      case 'light-soft':case 'light-sunset':case 'light-cool':{const values=id==='light-soft'?[34,38,1,.7,.12,.18,.12]:id==='light-sunset'?[-55,18,1.15,.55,.8,.12,.3]:[55,50,.9,.65,-.7,.22,.2];['lightAzimuth','lightElevation','lightKey','lightFill','lightWarmth','lightSoftness','lightRim'].forEach((k,i)=>{$('#'+k).value=values[i];document.querySelector(`[data-value="${k}"]`).textContent=values[i].toFixed(2);});return;}
      case 'deepseek-preset':case 'test-service':return;
      case 'settings':
        return settings();
      case 'api':
        return api();
      case 'persona':
        return personas();
      case 'global-persona':
        return globalPersona();
      case 'new-persona':
        return editPersona();
      case 'speech':
        return speech();
      case 'history':
        return history();
      case 'messages':
        return messages();
      case 'memories':
        return memories();
      case 'appearance':
        return appearance();
      case 'actions':
        return actions();
      case 'assets':
        return assets();
      case 'network':
        return network();
      case 'close':
        return close();
      case 'chat':
      case 'game':
        close();
        return call('navigate', {
          page: id
        });
      case 'import':
        return call('import');
      case 'backup':
        return call('backup');
      case 'new-conversation':return confirm('开启一段新对话？','当前对话会保存在历史列表，随时可切换回来。新对话使用独立的消息、记忆与日记。','新建并保留当前对话',async()=>{state=await call('newConversation');archive=state.archive;$('#input').value='';attachedImage=null;render();close();notice('已开启新对话，之前的记录已保留。');});
      case 'save-message':
        {
          const r = await call('editMessage', {
            id: editingMessage,
            text: $('#message-text').value
          });
          archive = r.archive;
          render();
          return messages();
        }
      case 'delete-message':
        {
          const r = await call('deleteMessage', {
            id: editingMessage
          });
          archive = r.archive;
          render();
          return messages();
        }
      case 'save-memory':
        {
          const r = await call('saveMemory', {
            text: $('#memory-text').value
          });
          state = r;
          archive = r.archive;
          return notice('本段记忆已保存。');
        }
      case 'summarize':
        {
          notice('正在整理当前对话……');
          const r = await call('summarize');
          archive = r.archive;
          return memories();
        }
      case 'search':
        search = !search;
        $('#search').classList.toggle('on', search);$('#search span').textContent=search?'联网搜索已开启':'联网搜索';
        return notice(search ? '本轮开启联网搜索。' : '已关闭本轮联网搜索。');
      case 'camera':
        {
          const r = await call('camera');
          camera = r.enabled;
          $('#camera').classList.toggle('on',camera);$('#camera').innerHTML=icon(camera?'video.fill':'video.slash');$('#camera').ariaLabel=camera?'关闭后置视频':'开启后置视频';
          return;
        }
      case 'listen':if(!archive.settings.endpoint)return api();voiceCall=!voiceCall;return call('voiceCall',{enabled:voiceCall});
      case 'hearing':
        return call('hearing');
      case 'save-touch':
        await call('touchPolicy', {
          enabled: $('#touch-ai').checked
        });
        state.touchAI = $('#touch-ai').checked;
        stage({
          type: 'touchPolicy',
          aiControlled: state.touchAI && Boolean(archive.settings.endpoint)
        });
        return notice('触摸互动设置已保存。');
      case 'stop-speech':
        return call('stopSpeech');
      case 'test-speech':{const voiceID=$('#speech-voice')?.value||archive.settings.speech.voiceID,preferences={...archive.settings.speech,voiceID,language:state.voices.find(v=>v.id===voiceID)?.language||(voiceID.endsWith('.ja')?'ja':'zh'),speed:Number($('#speech-speed')?.value||1),volume:Number($('#speech-volume')?.value??1),computeMode:$('#compute')?.value||'automatic'};return call('previewVoice',{id:'preview',text:'下午好，我在这里陪着你。',spokenChinese:'下午好，我在这里陪着你。',spokenJapanese:'こんにちは。今日は何を話しましょうか。',preferences});}
      case 'toggle-scene':
        window.__qibanScene = !window.__qibanScene;
        stage({
          type: 'scene',
          visible: window.__qibanScene
        });
        return close();
      case 'toggle-room':
        window.__qibanRoom = !window.__qibanRoom;
        stage({
          type: 'room',
          visible: window.__qibanRoom
        });
        return close();
      case 'save-quality':
        await call('renderQuality', {
          value: $('#quality').value
        });
        return notice('功耗设置已应用。');
    }
  }
  function run(work) {
    Promise.resolve().then(work).catch(e => notice(e.message));
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b) return;
    if(b.dataset.personaTab){collectPersona();personaTab=b.dataset.personaTab;return personaEditor();}
    if(b.dataset.greeting!=null){run(async()=>{const r=await call('insertGreeting',{index:Number(b.dataset.greeting)});archive=r.archive;render();close();});return;}
    if (b.dataset.do) {
      e.preventDefault();
      run(() => handle(b.dataset.do));
    } else if(b.dataset.action){run(async()=>{await call('manualAction');close();action(b.dataset.action);});} else if (b.dataset.model) run(async () => {
      state = await call('selectModel', {
        id: b.dataset.model
      });
      archive = state.archive;
      close();
      await loadModel(b.dataset.model === 'generic' ? 'generic.json' : b.dataset.model + '.snowbreak');
    });else if (b.dataset.selectPersona) run(async () => {
      state = await call('selectPersona', {
        id: b.dataset.selectPersona
      });
      archive = state.archive;
      render();
      close();
    });else if (b.dataset.editPersona) editPersona(b.dataset.editPersona);else if (b.dataset.session) run(async () => {
      state = await call('selectConversation', {
        id: b.dataset.session
      });
      archive = state.archive;
      render();
      close();
    });else if (b.dataset.rename) {
      const id = b.dataset.rename,
        m = archive.conversationSessions.find(v => v.id === id);
      panel('重命名对话', `<div class="section">${field('rename-title', '对话名称', m.title)}<button id="rename-save" class="primary">保存</button></div>`, 'rename');
      $('#rename-save').onclick = () => run(async () => {
        state = await call('renameConversation', {
          id,
          title: $('#rename-title').value
        });
        archive = state.archive;
        history();
      });
    } else if (b.dataset.editMessage) editMessage(b.dataset.editMessage);else if (b.dataset.regenerate) run(async () => {
      const r = await call('refreshMessage', {
        id: b.dataset.regenerate
      });
      archive = r.archive;
      busy = true;
      render();
      messages();
    });else if (b.dataset.speak) run(async () => {
      const m = archive.messages.find(m => m.id === b.dataset.speak);
      await call('speak', {
        id: m.id,
        text: m.content,
        spokenChinese: m.spokenChinese,
        spokenJapanese: m.spokenJapanese
      });
    });
  });
  async function sendHome(value,fromHome=true){let text=value.trim();if(busy)return;const images=[];if(attachedImage)images.push(attachedImage);const policy=state.preferences?.selfAppearanceImagePolicy||'questions';if(ready&&(policy==='always'||policy==='questions'&&/(穿|衣服|外貌|样子|形象|头发|头髮|打扮|看.{0,4}你|你的.{0,5}(眼睛|身材|姿势))/.test(text))&&!images.some(i=>i.source==='selfPortrait'))images.push(await portrait());if(!text&&images.length)text=images[0].source==='selfPortrait'?'这是你自己的模型画面，看看你现在的样子。':'请看看这张图片，告诉我你看到了什么。';if(!text)return;const r=await call('send',{text,search,images});archive=r.archive;busy=true;attachedImage=null;$('#input').value='';if($('#history-input'))$('#history-input').value='';showAttachment();render();}
  $('#panel').addEventListener('click',e=>{if(e.target===$('#panel')&&['actions','images','greetings','persona-transfer'].includes(currentPane)){const r=$('#panel').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();}});
  $('#composer').onsubmit=e=>run(async()=>{e.preventDefault();await sendHome($('#input').value);});
  $('#input').oninput=()=>{const e=$('#input');e.style.height='50px';e.style.height=Math.min(126,Math.max(50,e.scrollHeight))+'px';render();};
  $('#photo-file').onchange=e=>run(()=>photo(e.target.files[0]));
  $('#persona-file').onchange=e=>run(async()=>{const file=e.target.files[0];if(!file)return;if(file.size>50e6)throw Error('角色卡 JSON 超过50MB。');const raw=JSON.parse(await file.text());if(raw.format==='qiban-personas/1'){personaDraft=raw.library;personaID=personaDraft.defaultCardID;}else{const objects=Array.isArray(raw)?raw:raw.cards||[raw];if((personaDraft?.cards.length||lib().cards.length)+objects.length>50)throw Error('角色卡数量超过50张。');if(!personaDraft)personaDraft=structuredClone(lib());for(const item of objects){const o=item.data||item;if(!o.name&&!o.title)throw Error('角色卡缺少 name 或 title。');const c=emptyCard();Object.assign(c,{name:o.name||o.title,title:o.title||o.name,description:o.description||'',personality:o.personality||'',scenario:o.scenario||'',examples:o.mes_example||o.examples||'',systemRules:o.system_prompt||o.systemRules||'',replyRules:o.post_history_instructions||o.replyRules||'',userName:o.userName||'',userDescription:o.userDesc||o.userDescription||'',notes:o.creator_notes||o.notes||'',tags:o.tags||[],firstMessages:o.first_messages||o.firstMessages||[o.first_mes,...(o.alternate_greetings||[])].filter(Boolean)});personaDraft.cards.push(c);personaID=c.id;}}personaTab='AI 人设';personaEditor();$('#persona-notice').textContent='已读入草稿，点击保存后生效。导入不会连接外部资源。';});
  document.addEventListener('input',e=>{if(['expression-eyes','expression-mouth','expression-smile'].includes(e.target.id))stage({type:'expression',value:{[{ 'expression-eyes':'blink','expression-mouth':'mouth','expression-smile':'smile'}[e.target.id]]:Number(e.target.value)}});if(e.target.type==='range'){const out=document.querySelector(`[data-value="${e.target.id}"]`);if(out)out.textContent=Number(e.target.value).toFixed(e.target.step==='.1'?1:2);}const count=document.querySelector(`[data-count="${e.target.id}"]`);if(count)count.textContent=e.target.value.length+' 字';});
  function applyStagePreferences(){stage({type:'androidPreferences',preferences:state.preferences||{}});stage({type:'voice',enabled:state.preferences?.snowbreakVoice!==false});}
  $('#input').onkeydown = e => {
    if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
      e.preventDefault();
      $('#composer').requestSubmit();
    }
  };
  window.addEventListener('message', e => {
    if (e.origin !== location.origin || e.source !== $('#model').contentWindow) return;
    const value = e.data?.qibanStageEvent;
    if (!value) return;
    if (value.type === 'pageReady') {
      loadStage();
      return;
    }
    if (value.nonce !== nonce) return;
    if (value.type === 'ready') {
      ready = true;
      readyData = value;applyStagePreferences();
      $('#model-label').textContent = (value.characterId === 'Enya' ? '恩雅' : value.characterId === 'Fenny' ? '芬妮' : value.displayName || value.characterId) + (value.selection?' · '+(value.selection.mode==='standing'?'看板娘':'皮肤互动')+' · '+({normal:value.characterId==='Fenny'?'原婚纱':'正常服饰',nude:'果体版',underwear:'婚纱内衣版'}[value.selection.outfit]||value.selection.outfit):'');
    }
    if(value.type==='previewFrame'&&$('#preview-frame'))$('#preview-frame').textContent=value.frame+'/'+value.total;
    if (value.type === 'selfState'){bodyState=value.state;if($('#body-inspector'))$('#body-inspector').textContent=JSON.stringify(bodyState,null,2);}
    if (value.type === 'notice' || value.type === 'error') notice(value.message);
    if(value.type==='playback'){$('#action-status').hidden=!value.active;$('#action-status').textContent='正在播放：'+(value.label||value.status||'动作')+' · 点击停止';}
    run(() => call('modelEvent', {
      event: value
    }));
  });
  window.QibanHome = {
    stage,
    receive: async event => {
      if (event.type === 'notice') notice(event.message);
      if (event.type === 'busy') {
        busy = event.value;
        render();
      }
      if (event.type === 'archive') {
        archive = event.archive;
        render();
      }
      if (event.type === 'refresh') await refresh();
      if (event.type === 'settings') {
        await refresh();
        close();
        ({
          persona: personas,
          speech,
          api
        }[event.pane] || settings)();
      }
      if (event.type === 'loadModel') await loadModel(event.file);
      if (event.type === 'reload') {
        await refresh();
        await loadModel(state.selectedModel === 'generic' ? 'generic.json' : state.selectedModel + '.snowbreak');
      }
      if (event.type === 'action') action(event.action, event.motion, true);
      if (event.type === 'hearing') {
        document.querySelector('[data-do=hearing]')?.classList.toggle('selected',event.enabled);
        notice(event.enabled ? '已开启本机环境听觉，不保存录音。' : '环境听觉已关闭。');
      }
      if (event.type === 'sound') {
        notice('听到：' + event.label);
      }
      if (event.type === 'camera') {
        camera = event.enabled;
        $('#camera').classList.toggle('on',camera);$('#camera').innerHTML=icon(camera?'video.fill':'video.slash');$('#camera').ariaLabel=camera?'关闭后置视频':'开启后置视频';
      }
      if (event.type === 'transcript') {
        $('#input').value = event.text;
        if(voiceCall)run(()=>sendHome(event.text));else notice('已填入识别结果，可编辑后发送。');
      }
      if (event.type === 'listening') {
        listening = event.value;
        $('#mic').classList.toggle('on',listening);$('#mic').innerHTML=icon(listening?'phone.down.fill':'mic');$('#sense-status').textContent=listening?(event.mode||'正在聆听，说完后会自动发送'):'';
        notice(listening ? event.mode : '语音输入已结束。');
      }
      if(event.type==='speech'){$('#speech-status').textContent=event.status||'';$('#stop-reading').hidden=!event.busy;}
      if (event.type === 'budget') stage({
        type: 'hardwareBudget',
        thermal: event.thermal,
        lowPower: event.lowPower
      });
      if (event.type === 'ttsState') {
        archive.settings.speech.enabled = event.enabled;
        stage({
          type: 'voice',
          enabled: event.enabled
        });
      }
      if(event.type==='voiceCall'){voiceCall=event.enabled;$('#mic').innerHTML=icon(voiceCall?'phone.down.fill':'mic');$('#mic').ariaLabel=voiceCall?'结束语音通话':'开始语音通话';}
      if(event.type==='voice')stage(event);
      if (event.type === 'touch') {
        const t = event.event;
        bodyState.lastTouch = t.label + ' · ' + t.gesture;
      }
    },
    suspend() {
      stage({
        type: 'pause'
      });
    },
    async resume() {
      if (state) {
        await refresh();
        if(!$('#panel').open)stage({type:'resume'});
      }
    },
    back() {
      if($('#confirmation').open)$('#confirmation').close();else if($('#panel').open){if(currentPane==='settings')close();else run(()=>handle(paneParents[currentPane]||'settings'));}else settings();
    }
  };
  run(async () => {
    await refresh();
    const file = state.selectedModel === 'generic' ? 'generic.json' : state.models.find(m => m.id === state.selectedModel)?.file || state.models[0]?.file;
    if (file) await loadModel(file);else $('#empty').hidden = false;
  });
})();
