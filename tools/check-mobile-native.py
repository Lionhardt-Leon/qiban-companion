"""Focused new-feature check: production Android archive/parser, JVM host and optional Swift peer."""
import argparse,hashlib,json,os,re,shutil,subprocess,sys,tempfile,urllib.request
from pathlib import Path
root=Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser();parser.add_argument('--with-swift',action='store_true');parser.add_argument('--java-home',type=Path);args=parser.parse_args()
java=str(args.java_home/'bin/java.exe') if args.java_home else shutil.which('java');javac=str(args.java_home/'bin/javac.exe') if args.java_home else shutil.which('javac');assert java and javac
work=root/'research/mobile-native-check';work.mkdir(exist_ok=True,parents=True)
deps={
 'rhino.jar':('https://repo.maven.apache.org/maven2/org/mozilla/rhino/1.9.1/rhino-1.9.1.jar','12dbb224cea124a5d32968722e8eb161c967bf15f3c9a795d1b05592b1147975'),
 'json.jar':('https://repo.maven.apache.org/maven2/org/json/json/20250517/json-20250517.jar','3ea61b2a06e31edf1c91134fe9106b0ebb16628be169f3db75bc7a2b06b45796')}
for name,(url,digest) in deps.items():
    path=work/name
    if not path.exists():urllib.request.urlretrieve(url,path)
    assert hashlib.sha256(path.read_bytes()).hexdigest()==digest
classes=work/'classes';classes.mkdir(exist_ok=True);package=root/'android/app/src/main/java/com/qiban/companion';cp=os.pathsep.join(str(work/name) for name in deps)
subprocess.run([javac,'-encoding','UTF-8','--release','17','-cp',cp,'-d',str(classes),*[str(package/name) for name in ['RoomEngine.java','PhoneRooms.java','ArchiveStore.java','FilesSupport.java','SpokenDialogue.java','PersonaPrompt.java','IOSPromptText.java','DialogueDecision.java']],str(root/'tools/mobile-probe/NativeProbe.java'),str(root/'tools/mobile-probe/NativePromptProbe.java')],check=True)
subprocess.run([java,'-cp',str(classes)+os.pathsep+cp,'com.qiban.companion.NativePromptProbe'],check=True)
sample=(root/'tools/tts-native/speech-dialogue-cases.swift').read_text(encoding='utf-8');legacy,explicit=sample.split('let explicitExamples:')
def extract(s):
    string=r'"(?:\\.|[^"\\])*"'
    return [[json.loads(a),json.loads(b)] for a,b in re.findall(r'^\s*\(('+string+'),('+string+r')\),?\s*$',s,re.M)]
cases={'legacy':extract(legacy),'explicit':extract(explicit)};cases['legacy'] += [['（'*1000+'她说：“你好。”',''],['“'*10000,'']]
assert sum(map(len,cases.values()))==45,[(k,len(v)) for k,v in cases.items()]
config={'java':[java,'-cp',str(classes)+os.pathsep+cp,'com.qiban.companion.NativeProbe',str(root/'android/app/src/main/assets/game/room-runtime.js')],'cases':cases}
if args.with_swift:
    assert sys.platform=='darwin','The actual Swift Network/JavaScriptCore peer requires macOS'
    swift=work/'swift-peer';subprocess.run(['swiftc','-swift-version','5','-parse-as-library','-o',str(swift),'-framework','Network','-framework','JavaScriptCore','-framework','Security',str(root/'ios/Sources/PhoneCardRooms.swift'),str(root/'tools/mobile-probe/SwiftProbe.swift')],check=True)
    config['swift']=[str(swift),str(root/'games/tycoon/native-runtime.js')]
path=work/'config.json';path.write_text(json.dumps(config),encoding='utf-8')
subprocess.run(['node',str(root/'tools/check-mobile-interop.mjs'),str(path)],check=True,cwd=root)
