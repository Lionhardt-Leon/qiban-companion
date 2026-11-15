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
patch('src/js/storage.js','prompt: clampText(raw.prompt, 60000)','prompt: clampText(raw.prompt, 4000000)')
patch('src/js/storage.js','examples: clampText(raw.examples, 30000)','examples: clampText(raw.examples, 2000000)')
patch('src/js/storage.js','text: clampText(raw.text, 12000)','text: clampText(raw.text, 100000)')
patch('src/js/storage.js','const name = clampText(raw.name, 80);','const name = clampText(raw.name, 120);')
patch('src/js/chat_engine.js','async function buildVoiceReplyAttachment(text, character) {','async function buildVoiceReplyAttachment(text, character) {\n  if (window.QibanNative?.appSpeechEnabled()) return window.QibanNative.voiceAttachment(text);')
for path in ['src/js/chat_engine.js','src/js/tool_chat_engine.js']:
    text=files[path].decode('utf-8')
    text=text.replace('character.prompt', '(window.QibanNative?.available ? window.QibanNative.characterPrompt(character) : character.prompt)')
    files[path]=text.encode('utf-8')
for path in ['src/js/chat_engine.js','src/js/tool_chat_engine.js','src/js/roundtable.js']:
    patch(path,"const PLAYER_NAME = '分析员';","const PLAYER_NAME = window.QibanProfile?.userName || '分析员';")
patch('src/js/chat_engine.js','  const system = [','  const system = [\n    window.QibanNative?.available ? window.QibanNative.nativeMemory(character,mode) : \'\',')
patch('src/js/ui.js','async function toggleVoicePlayback(messageId, attachment) {', '''async function toggleVoicePlayback(messageId, attachment) {
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
files['qiban_bridge.js']=(ROOT/'chat-adapter/bridge.js').read_bytes()
files['qiban_boot.js']="""try {await window.QibanNative.initialize(); await import('./src/js/main.js');}
catch(error) {document.body.textContent='通讯模块启动失败：'+error.message;if(window.QibanNative?.available)await window.QibanNative.call('pageError',{message:error.message});}
""".encode('utf-8')
files['src/js/qiban_native.js']=(ROOT/'chat-adapter/native.js').read_bytes()
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
site['site/UPSTREAM.txt']=notice.encode('utf-8')
site['source/upstream.zip']=archive.read_bytes()
site['source/build-chat-module.py']=Path(__file__).read_bytes()
for path in (ROOT/'chat-adapter').glob('*'):
    if path.is_file():site['source/adapters/'+path.name]=path.read_bytes()
site['source/README.txt']=notice.encode('utf-8')
manifest={'schema':'qiban-chat-module/1','revision':REVISION,'upstream':UPSTREAM,'license':'GPL-3.0','files':{name:hashlib.sha256(data).hexdigest() for name,data in site.items()}}
out=ROOT/'dist/Fritia-Chat-iOS-v1.qchat'
out.parent.mkdir(parents=True,exist_ok=True)
with zipfile.ZipFile(out,'w',compression=zipfile.ZIP_STORED) as z:
    def write(name,data):
        info=zipfile.ZipInfo(name,date_time=(2026,11,15,0,0,0));info.external_attr=0o100644<<16
        z.writestr(info,data)
    write('module.json',json.dumps(manifest,ensure_ascii=False,sort_keys=True).encode('utf-8'))
    for name,data in sorted(site.items()):write(name,data)
digest=hashlib.sha256(out.read_bytes()).hexdigest()
native=ROOT/'ios/Sources/ChatModuleLibrary.swift'
native.write_text(re.sub(r'static let packageSHA256 = "[^"]+"','static let packageSHA256 = "'+digest+'"',native.read_text(encoding='utf-8')),encoding='utf-8')
report={'file':str(out),'bytes':out.stat().st_size,'sha256':digest,'files':len(site)+1,'upstreamRevision':REVISION,'upstreamZipSHA256':hashlib.sha256(archive.read_bytes()).hexdigest(),'originalAssetsPubliclyUploaded':False,'licenseAndSourceIncluded':True}
(ROOT/'dist/Chat-Module-v1-manifest.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(report,ensure_ascii=True))
