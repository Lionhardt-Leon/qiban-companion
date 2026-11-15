"""One focused macOS native regression: real loopback ports, art import, phone room TCP/JSC.
No simulator, game artwork, provider accounts, VPN or UU session are used.
"""
import base64,hashlib,json,subprocess,sys,tempfile,zipfile
from pathlib import Path
root=Path(__file__).resolve().parents[1]
if sys.platform!='darwin':raise SystemExit('Native Network/ImageIO/JavaScriptCore probe requires macOS.')
with tempfile.TemporaryDirectory(prefix='qiban-phone-probe-') as tmp:
 work=Path(tmp);png=base64.b64decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=');image='images/test.png'
 manifest={'schema':'qiban-card-art/1','id':'native-probe','title':'Synthetic art probe','characters':[{'id':'test','name':'Test','group':'Probe','portrait':image}],'files':{image:hashlib.sha256(png).hexdigest()}}
 for name,bad in [('valid.qcards',False),('bad.qcards',True)]:
  m={**manifest,'files':{'index.html':hashlib.sha256(b'bad').hexdigest()}} if bad else manifest
  with zipfile.ZipFile(work/name,'w',compression=zipfile.ZIP_STORED) as z:z.writestr('catalog.json',json.dumps(m));z.writestr('index.html' if bad else image,b'bad' if bad else png)
 cmd=['swiftc','-swift-version','5','-parse-as-library','-o',str(work/'probe'),'-framework','Network','-framework','JavaScriptCore','-framework','ImageIO','-framework','Security',str(root/'ios/Sources/ChatModuleServer.swift'),str(root/'ios/Sources/PhoneCardRooms.swift'),str(root/'ios/Sources/CardGameLibrary.swift'),str(root/'ios/Sources/VoicePackage.swift'),str(root/'tools/phone-room-probe/main.swift')]
 subprocess.run(cmd,check=True,cwd=root)
 subprocess.run([str(work/'probe'),str(root/'games/tycoon'),str(work/'valid.qcards'),str(work/'bad.qcards')],check=True,cwd=root,timeout=40)
