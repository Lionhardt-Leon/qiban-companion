"""Build the GPL Fritia web program as a private, user-imported iOS module.

The public runtime snapshot contains this recipe and our interoperability code,
not upstream character artwork, voice samples or knowledge data. The output
contains the upstream license, attribution, full source and modified sources.
"""
import hashlib,json,re,urllib.request,zipfile
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
REVISION='7dfa8044dfef79c6c2876f69607c079218e723fb'
UPSTREAM='https://github.com/QingchenWait/Fritia_Online_CHAT'
archive=ROOT/'research'/('Fritia-source-'+REVISION[:8]+'.zip')
archive.parent.mkdir(parents=True,exist_ok=True)
if not archive.exists():
    urllib.request.urlretrieve('https://codeload.github.com/QingchenWait/Fritia_Online_CHAT/zip/'+REVISION,archive)
assert hashlib.sha256(archive.read_bytes()).hexdigest()=='185c658001ede06cc20ab8f34173eebd08bc1c71f4267b72454daa98764f9f71','Upstream source archive checksum mismatch'
with zipfile.ZipFile(archive) as source:
    prefix=source.namelist()[0].split('/')[0]+'/'
    files={n[len(prefix):]:source.read(n) for n in source.namelist() if not n.endswith('/')}

def patch(path,old,new,count=1):
    text=files[path].decode('utf-8')
    assert text.count(old)>=count,(path,old[:100])
    files[path]=text.replace(old,new,count).encode('utf-8')

patch('index.html','<script type="module" src="src/js/main.js"></script>',
'''<script src="qiban_bridge.js"></script>
  <script type="module" src="qiban_boot.js"></script>''')
patch('index.html','</head>','<link rel="stylesheet" href="qiban_ios.css">\n</head>')
patch('index.html','<strong>分析员</strong>','<strong id="qiban-user-name">分析员</strong>')
for old,new in [('maxlength="60000"','maxlength="4000000"'),('maxlength="30000"','maxlength="2000000"')]:
    files['index.html']=files['index.html'].replace(old.encode(),new.encode())
files['index.html']=files['index.html'].replace(b'maxlength="30"',b'maxlength="120"').replace(b'maxlength="50"',b'maxlength="260"')
patch('src/js/main.js',"import { ensurePresetCharacters }", "import { initQibanChat } from './qiban_native.js';\nimport { ensurePresetCharacters }")
patch('src/js/main.js','  initUi();','  await initQibanChat();\n  initUi();')
patch('src/js/main.js','  initOnboarding({',"  if(window.QibanNative?.available) await window.QibanNative.call('ready');\n  initOnboarding({")
patch('src/js/main.js','autoShow: true','autoShow: !window.QibanNative?.available')
patch('src/js/main.js',"if ('serviceWorker' in navigator", "if (!window.QibanNative?.available && 'serviceWorker' in navigator")
patch('src/js/runtime_env.js',"  const userAgent =", "  if (window.QibanNative?.available) return createRuntimeEnvironment(RUNTIME_ENV_TYPES.WEBVIEW, 'packaged', readLocationInfo());\n  const userAgent =")
patch('src/js/storage.js',"    source: clampText(raw.source || 'custom', 40),", "    source: clampText(raw.source || 'custom', 40),\n    qibanId: clampText(raw.qibanId, 80),")
patch('src/js/storage.js','    unread: Math.max(0, Math.floor(Number(raw.unread) || 0))', '''    unread: Math.max(0, Math.floor(Number(raw.unread) || 0)),
    qibanSessionId: clampText(raw.qibanSessionId,80),
    qibanThreadTitle: clampText(raw.qibanThreadTitle,120),
    qibanThreadRoot: clampText(raw.qibanThreadRoot,100)''')
patch('src/js/storage.js','export function ensurePrivateConversation(store, character) {', '''export function ensurePrivateConversation(store, character) {
  const preferred=window.QibanNative?.preferredConversation?.(store,character.id);if(preferred)return preferred;''')
patch('src/js/storage.js','prompt: clampText(raw.prompt, 60000)','prompt: clampText(raw.prompt, 4000000)')
patch('src/js/storage.js','examples: clampText(raw.examples, 30000)','examples: clampText(raw.examples, 2000000)')
patch('src/js/storage.js','text: clampText(raw.text, 12000)','text: clampText(raw.text, 100000)')
patch('src/js/storage.js','const name = clampText(raw.name, 80);','const name = clampText(raw.name, 120);')

patch('src/js/storage.js','  const normalized = normalizeAppStore({ ...store, updatedAt: now() });', """  store=window.QibanNative?.reconcileStore?.(store) || store;
  const normalized = normalizeAppStore({ ...store, updatedAt: now() });
  if(window.QibanNative?.saveDraftStore?.(store,normalized))return normalized;""")
for path in ['src/js/chat_engine.js','src/js/tool_chat_engine.js']:
    patch(path,'recordLongTermMemoryTurn({','if(!window.QibanNative?.isDraftStore?.(nextStore)) recordLongTermMemoryTurn({')
    patch(path,'markFailedTurn(conversation.id,','if(!window.QibanNative?.isDraftStore?.(nextStore)) markFailedTurn(conversation.id,')
    patch(path,'const memoryMessage = await buildLongTermMemoryMessage({','const memoryMessage = await buildLongTermMemoryMessage({\n    qibanMessageIds:window.QibanNative?.memoryIDs?.(store),')
patch('src/js/long_term_memory.js','    if (result.memories.length === 0 && result.edges.length === 0) return null;', '    const limited=window.QibanNative?.limitMemory?.(result,loadRawStore(),options.qibanMessageIds);\n    if(limited)Object.assign(result,limited);\n    if (result.memories.length === 0 && result.edges.length === 0) return null;')
patch('src/js/tts_engine.js','response = await fetch(request.url, request.init);',"response = await fetch(request.url,{...request.init,...(window.QibanNative?.available ? {signal:window.QibanNative.ttsSignal()}:{})});")
files['src/js/ui.js']=b"import {initQibanGal} from './qiban_gal.js';\nimport {initQibanSessions} from './qiban_sessions.js';\nimport {initQibanMessageActions,decorateQibanMessage} from './qiban_messages.js';\nimport {initQibanCharacterStickers,commitStagedStickersToCharacter,resetStagedStickers,refreshCharacterStickerEditPanel,updateDetailStickerButton} from './qiban_stickers.js';\n"+files['src/js/ui.js']
patch('src/js/ui.js','  state.store = loadAppStore();',"""  state.store = loadAppStore();
  initQibanGal({getStore:()=>state.store,isBusy:()=>pendingConversationReplies>0 || Boolean(state.activeToolRun),send:text=>{const committed=commitOutgoingMessage(text);if(!committed)return false;updateStore(committed.store);continueConversationAfterOutgoing(committed);return true;},selectCharacter:id=>{const card=getCharacterById(state.store.characters,id);if(!card)throw Error('角色不存在');const conversation=ensurePrivateConversation(state.store,card);updateStore(loadAppStore());selectConversation(conversation.id,true);return conversation;}});
  initQibanSessions({getStore:()=>state.store,isBusy:()=>pendingConversationReplies>0 || Boolean(state.activeToolRun),replace:updateStore,select:id=>selectConversation(id,true)});
  initQibanMessageActions({getStore:()=>state.store,isBusy:()=>pendingConversationReplies>0 || Boolean(state.activeToolRun),changeBusy:delta=>{pendingConversationReplies=Math.max(0,pendingConversationReplies+delta);},refresh:()=>renderAll(),stopPlayback:()=>stopVoicePlayback(),chatSettings:key=>buildCharacterChatSettings(key)});
  initQibanCharacterStickers({getStore:()=>state.store,getActivePrivateCharacter:()=>getActivePrivateCharacter(),notice:text=>window.QibanNative?.notice?.(text)});""")
patch('src/js/ui.js','    requestAnimationFrame(resetCharacterImportPreview);','    requestAnimationFrame(resetCharacterImportPreview);\n    resetStagedStickers();')
patch('src/js/ui.js','    const next = upsertCharacter(state.store, character);','    const next = upsertCharacter(state.store, character);\n    commitStagedStickersToCharacter(character);')
patch('src/js/ui.js',"  document.getElementById('character-edit-panel')?.classList.remove('hidden');","  refreshCharacterStickerEditPanel(character);\n  document.getElementById('character-edit-panel')?.classList.remove('hidden');")
patch('src/js/ui.js','  if (migrationCandidate) {\n    migrationButton.title = `迁移到内置角色「${migrationCandidate.targetCharacter.name}」`;\n    migrationButton.setAttribute(\'aria-label\', `迁移到内置角色「${migrationCandidate.targetCharacter.name}」`);\n  }\n}','  if (migrationCandidate) {\n    migrationButton.title = `迁移到内置角色「${migrationCandidate.targetCharacter.name}」`;\n    migrationButton.setAttribute(\'aria-label\', `迁移到内置角色「${migrationCandidate.targetCharacter.name}」`);\n  }\n  updateDetailStickerButton(character);\n}')
patch('src/js/ui.js','    content.classList.add(\'message-content--voice\');\n    content.appendChild(createVoiceBubble(message));','    content.classList.add(\'message-content--voice\');\n    content.appendChild(createVoiceBubble(message));\n    for (const [index, attachment] of attachments.entries()) {\n      if (attachment?.type === \'image\' && attachment?.source === \'sticker\') {\n        const node = createMessageAttachmentNode(message, attachment, index);\n        if (node) content.appendChild(node);\n      }\n    }')
patch('src/js/ui.js','function selectConversation(id) {', '''function selectConversation(id,qibanExact=false) {
  if(!qibanExact)id=window.QibanNative?.resolveConversation?.(state.store,id)||id;''')
patch('src/js/ui.js','const conversations = [...state.store.conversations].sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));','const conversations = [...(window.QibanNative?.visibleConversations?.(state.store) || state.store.conversations)].sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));')
patch('src/js/ui.js','  state.store = store || loadAppStore();\n  renderAll();','  state.store = store || loadAppStore();\n  window.QibanNative?.rememberConversation?.();\n  renderAll();')
patch('src/js/ui.js','function commitOutgoingMessage(text, attachments = []) {',"""function commitOutgoingMessage(text, attachments = []) {
  if(window.QibanNative?.available && pendingConversationReplies>0){window.QibanNative.notice('请等待当前回复完成，输入内容已保留。');return null;}""")
patch('src/js/ui.js',"    speakerName: '分析员',","    speakerName: window.QibanProfile?.userName || '你',")
patch('src/js/ui.js',"  name.textContent = message.speakerName || (message.role === 'user' ? '分析员' : '角色');","  name.textContent = message.role==='user' ? (window.QibanProfile?.userName || message.speakerName || '你') : (message.speakerName || '角色');")
patch('src/js/ui.js',"  return row;\n}\n\nfunction isActiveToolMessage", "  decorateQibanMessage(row,message,getActiveConversation());\n  return row;\n}\n\nfunction isActiveToolMessage")
patch('src/js/ui.js','const signature = JSON.stringify([message, activeToolMessage,','const signature = JSON.stringify([message, window.QibanNative?.ttsEnabled?.(), pendingConversationReplies>0, activeToolMessage,')
patch('src/js/ui.js','voiceReplyEnabled: conversation.voiceReplyEnabled === true,','voiceReplyEnabled: conversation.voiceReplyEnabled === true && (!window.QibanNative?.available || window.QibanNative.ttsEnabled()),')
patch('src/js/ui.js','function isVoiceReplyMessage(message) {',"function isVoiceReplyMessage(message) {\n  if(window.QibanNative?.available && !window.QibanNative.ttsEnabled())return false;")
patch('src/js/ui.js','  const attachments = message.attachments || [];',"  const attachments = (message.attachments || []).filter(item=>!window.QibanNative?.available || window.QibanNative.ttsEnabled() || item.source!=='tts-reply');")
patch('src/js/ui.js','function togglePrivateVoiceReply() {',"function togglePrivateVoiceReply() {\n  if(window.QibanNative?.available && !window.QibanNative.ttsEnabled()){window.QibanNative.notice('TTS 已关闭，可点击顶部 TTS 开关重新开启。');return;}")
patch('src/js/ui.js',"const enabled = Boolean(isPrivate && conversation?.voiceReplyEnabled === true);","const enabled = Boolean(isPrivate && conversation?.voiceReplyEnabled === true && (!window.QibanNative?.available || window.QibanNative.ttsEnabled()));")

patch('src/js/chat_engine.js','async function buildVoiceReplyAttachment(text, character) {', """export async function buildVoiceReplyAttachment(text, character) {
  if(!window.QibanNative?.available)return qibanOriginalVoiceAttachment(text,character);
  if(!window.QibanNative.ttsEnabled())return null;
  const ticket=window.QibanNative.speechTicket();
  try {
    const spoken=await window.QibanNative.spokenText(text);
    if(!spoken || !window.QibanNative.ttsEnabled() || ticket!==window.QibanNative.speechTicket())return null;
    if(window.QibanNative.appSpeechEnabled())return window.QibanNative.voiceAttachment(text);
    const attachment=await qibanOriginalVoiceAttachment(spoken,character);
    return window.QibanNative.ttsEnabled() && ticket===window.QibanNative.speechTicket() ? attachment:null;
  }catch(error){if(!window.QibanNative.ttsEnabled() || ticket!==window.QibanNative.speechTicket())return null;throw error;}
}
async function qibanOriginalVoiceAttachment(text, character) {""")
files['src/js/chat_engine.js']=b"import {buildCharacterStickerPrompt,applyCharacterStickerReply,sanitizeHistoryForStickers} from './qiban_stickers.js';\n"+files['src/js/chat_engine.js']
files['src/js/tool_chat_engine.js']=b"import {buildCharacterStickerPrompt,applyCharacterStickerReply,sanitizeHistoryForStickers} from './qiban_stickers.js';\n"+files['src/js/tool_chat_engine.js']
files['src/js/roundtable.js']=b"import {buildCharacterStickerPrompt,applyCharacterStickerReply} from './qiban_stickers.js';\n"+files['src/js/roundtable.js']
patch('src/js/chat_engine.js',"    const reply = typeof result === 'string' ? result : result.text;",'''    const rawReply = typeof result === 'string' ? result : result.text;
    const stickerParsed = applyCharacterStickerReply(rawReply, character);
    const reply = stickerParsed.text;
    const stickerAttachments = stickerParsed.attachments || [];''')
patch('src/js/chat_engine.js','        const voiceAttachment = await buildVoiceReplyAttachment(reply, character);','        const voiceAttachment = reply.trim() ? await buildVoiceReplyAttachment(reply, character) : null;')
patch('src/js/chat_engine.js','attachments: [voiceAttachment]','attachments: [voiceAttachment, ...stickerAttachments].filter(Boolean)')
patch('src/js/chat_engine.js','voiceReply: true','voiceReply: Boolean(voiceAttachment)')
patch('src/js/chat_engine.js',"        nextStore = replaceMessage(nextStore, conversation.id, typingId, {\n          text: reply,\n          status: 'sent',\n          createdAt: now(),\n          meta: {\n            ...baseMeta,\n            voiceReplyFailed: true,","        nextStore = replaceMessage(nextStore, conversation.id, typingId, {\n          text: reply,\n          ...(stickerAttachments.length ? { attachments: stickerAttachments } : {}),\n          status: 'sent',\n          createdAt: now(),\n          meta: {\n            ...baseMeta,\n            voiceReplyFailed: true,")
patch('src/js/chat_engine.js',"    } else {\n      nextStore = replaceMessage(nextStore, conversation.id, typingId, {\n        text: reply,\n        status: 'sent',","    } else {\n      nextStore = replaceMessage(nextStore, conversation.id, typingId, {\n        text: reply,\n        ...(stickerAttachments.length ? { attachments: stickerAttachments } : {}),\n        status: 'sent',")
patch('src/js/chat_engine.js','      content: await buildModelMessageContent({\n        speakerName: item.speakerName || (item.role === \'user\' ? PLAYER_NAME : character.name),\n        text: item.text || \'\',\n        historical: true, attachmentIssues,\n        provider,\n        attachments: item.meta?.voiceReply === true ? [] : (item.attachments || [])\n      })','      content: await buildModelMessageContent((() => {\n        const safeItem = sanitizeHistoryForStickers(item);\n        return {\n          speakerName: item.speakerName || (item.role === \'user\' ? PLAYER_NAME : character.name),\n          text: safeItem.text,\n          historical: true, attachmentIssues,\n          provider,\n          attachments: item.meta?.voiceReply === true ? [] : safeItem.attachments\n        };\n      })())')
patch('src/js/tool_chat_engine.js','    const reply = sanitizeReply(finalText, character.name, { allowEmpty: finalAttachments.length > 0 });','    const rawToolReply = sanitizeReply(finalText, character.name, { allowEmpty: finalAttachments.length > 0 });\n    const toolStickerParsed = applyCharacterStickerReply(rawToolReply, character);\n    const reply = toolStickerParsed.text;\n    if (toolStickerParsed.attachments?.length) finalAttachments.push(...toolStickerParsed.attachments);')
patch('src/js/tool_chat_engine.js','      content: await buildModelMessageContent({\n        speakerName: item.speakerName || (item.role === \'user\' ? PLAYER_NAME : character.name),\n        text: item.text || \'\',\n        historical: true, attachmentIssues,\n        provider,\n        attachments: item.meta?.voiceReply === true || item.meta?.toolMode === true ? [] : (item.attachments || [])\n      })','      content: await buildModelMessageContent((() => {\n        const safeItem = sanitizeHistoryForStickers(item);\n        return {\n          speakerName: item.speakerName || (item.role === \'user\' ? PLAYER_NAME : character.name),\n          text: safeItem.text,\n          historical: true, attachmentIssues,\n          provider,\n          attachments: item.meta?.voiceReply === true || item.meta?.toolMode === true ? [] : safeItem.attachments\n        };\n      })())')
patch('src/js/roundtable.js',"  nextStore = replaceMessage(nextStore, conversation.id, typingId, {\n    role: 'assistant',\n    speakerId: speaker.id,\n    speakerName: speaker.name,\n    text: finalText,\n    createdAt: now(),\n    status,\n    ...(status === 'sent' && toolResult?.attachments?.length ? { attachments: toolResult.attachments } : {}),","  const rtSticker = status === 'sent' ? applyCharacterStickerReply(finalText, speaker) : { text: finalText, attachments: [] };\n  finalText = rtSticker.text;\n  const rtAttachments = [...(toolResult?.attachments || []), ...(rtSticker.attachments || [])];\n  nextStore = replaceMessage(nextStore, conversation.id, typingId, {\n    role: 'assistant',\n    speakerId: speaker.id,\n    speakerName: speaker.name,\n    text: finalText,\n    createdAt: now(),\n    status,\n    ...(status === 'sent' && rtAttachments.length ? { attachments: rtAttachments } : {}),")
patch('src/js/roundtable.js',"          '重要：人格设定只影响 JSON 的 text 字段语气与事实取材，不能覆盖本轮“只输出 JSON”的格式要求。即使人格设定要求自然对话，也必须保留外层 JSON。',","          '重要：人格设定只影响 JSON 的 text 字段语气与事实取材，不能覆盖本轮“只输出 JSON”的格式要求。即使人格设定要求自然对话，也必须保留外层 JSON。',\n          buildCharacterStickerPrompt(speaker, { roundtable: true }),")
for path in ['src/js/chat_engine.js','src/js/tool_chat_engine.js']:
    text=files[path].decode('utf-8')
    text=text.replace('character.prompt', '(window.QibanNative?.available ? window.QibanNative.characterPrompt(character) : character.prompt)')
    files[path]=text.encode('utf-8')
for path in ['src/js/chat_engine.js','src/js/tool_chat_engine.js','src/js/roundtable.js']:
    patch(path,"const PLAYER_NAME = '分析员';","const PLAYER_NAME = window.QibanProfile?.userName || '分析员';")
patch('src/js/roundtable.js', '${speaker.prompt || `你正在扮演 ${speaker.name}。`}', '${window.QibanNative?.available ? window.QibanNative.characterPrompt(speaker) : (speaker.prompt || `你正在扮演 ${speaker.name}。`)}')
for path in ['src/js/chat_engine.js','src/js/tool_chat_engine.js']:
    patch(path, '${character.examples}', r'${window.QibanNative?.available ? character.examples.replace(/\{\{\s*(char|user)\s*\}\}/gi, (_, name) => name.toLowerCase() === "char" ? character.name : PLAYER_NAME) : character.examples}')
patch('src/js/chat_engine.js','  const system = [','  const system = [\n    window.QibanNative?.available ? window.QibanNative.nativeMemory(character,mode) : \'\',\n    buildCharacterStickerPrompt(character, { roundtable: mode === \'roundtable\' && event?.expectsJson }),')
patch('src/js/tool_chat_engine.js','    `你的完整人格设定如下：','    buildCharacterStickerPrompt(character),\n    `你的完整人格设定如下：')
patch('src/js/ui.js','async function toggleVoicePlayback(messageId, attachment) {', '''async function toggleVoicePlayback(messageId, attachment) {
  if(window.QibanNative?.available && !window.QibanNative.ttsEnabled() && attachment?.source==='tts-reply'){window.QibanNative.notice('TTS 已关闭。');return;}
  if (attachment?.path?.startsWith('qiban-speech:') && window.QibanNative?.available) {
    try { await window.QibanNative.playVoice(messageId, attachment); }
    catch(error) {window.QibanNative.notice('App 配音：'+error.message);} return;
  }''')
patch('src/js/ui.js','    onDeleted: (id, result) => {','    onDeleted: (id, result) => {\n      window.QibanNative?.markDeletedContact?.(id);')
patch('src/js/ui.js','async function saveAttachmentToUserDevice(attachment = {}) {', '''async function saveAttachmentToUserDevice(attachment = {}) {
  if (window.QibanNative?.available) {
    const value=await resolveAttachmentDataUrl(attachment,{fetchRemote:true});
    if(!value)throw new Error('此附件没有可导出的音频／文件；App 本机配音在播放时重新合成。');
    const blob=await (await fetch(value)).blob();return window.QibanNative.saveBlob(attachment.name || 'attachment.bin',blob.type,blob);
  }''')
patch('src/js/ui.js','  button.append(icon, bars, duration);', '''  button.append(icon, bars, duration);
  if (attachment?.path?.startsWith('qiban-speech:') && message.text) {
    const caption=document.createElement('span');caption.className='qiban-voice-caption';caption.textContent=message.text;button.append(caption);
  }''')
patch('src/js/archive_io.js',"  const type = mime === 'application/zip'", "  if (window.QibanNative?.available) return blob => window.QibanNative.saveBlob(filename,mime,blob);\n  const type = mime === 'application/zip'")
patch('src/js/archive_io.js','export async function readClipboardText() {',"export async function readClipboardText() {\n  if(window.QibanNative?.available) return (await window.QibanNative.call('clipboard')).text;")
patch('src/js/archive_sync.js','export async function exportArchiveZip(options = {}) {','export async function exportArchiveZip(options = {}) {\n  await window.QibanNative?.flush?.();')
patch('src/js/archive_sync.js',"  setSyncStatus('idle', '存档导入完成', 1, options);","  await window.QibanNative?.restoreSnapshot?.();\n  setSyncStatus('idle', '存档导入完成', 1, options);")
patch('src/js/deepseek_web.js','export function isDeepSeekWebAvailable(provider) {',"export function isDeepSeekWebAvailable(provider) {\n  if(provider?.id==='qiban-app') return window.QibanProfile?.searchEnabled===true;")
patch('src/js/announcements.js',"export const ANNOUNCEMENT_URL = 'https://chat.fritia.online/api/downloads/fritia-online-source/public/announcement.json?token=cyandust_workshop';","export const ANNOUNCEMENT_URL = new URL('src/public/announcement.json',location.href).href;")
# The native container does not fetch upstream announcements or self-update.
files['src/public/announcement.json']=b'{}'
files['qiban_gal.css']=(ROOT/'chat-adapter/gal.css').read_bytes()
patch('index.html','</head>','<link rel="stylesheet" href="qiban_gal.css">\n</head>')
files['qiban_bridge.js']=(ROOT/'chat-adapter/bridge.js').read_bytes()
files['qiban_boot.js']="""try {await window.QibanNative.initialize(); await import('./src/js/main.js');}
catch(error) {document.body.textContent='通讯模块启动失败：'+error.message;if(window.QibanNative?.available)await window.QibanNative.call('pageError',{message:error.message});}
""".encode('utf-8')
files['src/js/qiban_native.js']=(ROOT/'chat-adapter/native.js').read_bytes()
for name,target in [('identity.js','qiban_identity.js'),('contact-repair.js','qiban_contact_repair.js'),('message-ops.js','qiban_message_ops.js'),('message-actions.js','qiban_messages.js'),('session-ops.js','qiban_session_ops.js'),('sessions.js','qiban_sessions.js'),('gal.js','qiban_gal.js'),('gal-state.js','qiban_gal_state.js'),('stickers-core.js','qiban_stickers_core.js'),('stickers.js','qiban_stickers.js')]:
    files['src/js/'+target]=(ROOT/'chat-adapter'/name).read_bytes()
files['qiban_ios.css']=(ROOT/'chat-adapter/ios.css').read_bytes()
files['LICENSE.txt']=files['LICENSE']
notice=f'''Fritia Online Chat / QingchenWait
Upstream: {UPSTREAM}
Pinned source tree: {REVISION}
License: GNU GPL version 3 (see LICENSE.txt)

Modified for private Qiban iOS interoperability: loopback static serving,
native persona/history exchange, device-only credentials, speech playback,
native file export, persistent storage and mobile shell adjustments.
Original runtime source is in source/upstream.zip. Modified browser source is
the site directory itself. Adapter sources and build recipe are in source/.
Character artwork and reference recordings retain their original rights.
This module is independent of the native renderer and does not relicense
third-party models or authorize redistribution of game resources.
'''
site={('site/'+name):data for name,data in files.items() if name in ['index.html','favicon.ico','manifest.webmanifest','LICENSE.txt'] or name.startswith('src/') or name.startswith('qiban_')}
for path in (ROOT/'web/stage2d').glob('*.mjs'):
    site['site/stage2d/'+path.name]=path.read_bytes()
    site['source/stage2d/'+path.name]=path.read_bytes()
site['site/UPSTREAM.txt']=notice.encode('utf-8')
site['source/upstream.zip']=archive.read_bytes()
site['source/build-chat-module.py']=Path(__file__).read_bytes()
for path in (ROOT/'chat-adapter').glob('*'):
    if path.is_file():site['source/adapters/'+path.name]=path.read_bytes()
site['source/README.txt']=notice.encode('utf-8')
manifest={'schema':'qiban-chat-module/1','revision':REVISION,'upstream':UPSTREAM,'license':'GPL-3.0','files':{name:hashlib.sha256(data).hexdigest() for name,data in site.items()}}
out=ROOT/'dist/Fritia-Chat-Mobile-v10.qchat'
out.parent.mkdir(parents=True,exist_ok=True)
with zipfile.ZipFile(out,'w',compression=zipfile.ZIP_STORED) as z:
    def write(name,data):
        info=zipfile.ZipInfo(name,date_time=(2026,11,17,0,0,0));info.external_attr=0o100644<<16
        z.writestr(info,data)
    write('module.json',json.dumps(manifest,ensure_ascii=False,sort_keys=True).encode('utf-8'))
    for name,data in sorted(site.items()):write(name,data)
digest=hashlib.sha256(out.read_bytes()).hexdigest()
native=ROOT/'ios/Sources/ChatModuleLibrary.swift'
native.write_text(re.sub(r'static let packageSHA256 = "[^"]+"','static let packageSHA256 = "'+digest+'"',native.read_text(encoding='utf-8')),encoding='utf-8')
report={'file':str(out),'bytes':out.stat().st_size,'sha256':digest,'files':len(site)+1,'upstreamRevision':REVISION,'upstreamZipSHA256':hashlib.sha256(archive.read_bytes()).hexdigest(),'originalAssetsPubliclyUploaded':False,'licenseAndSourceIncluded':True}
(ROOT/'dist/Chat-Module-v10-manifest.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(report,ensure_ascii=True))
