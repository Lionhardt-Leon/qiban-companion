"""One focused macOS native regression: real loopback ports, art import, phone room TCP/JSC.
No simulator, game artwork, provider accounts, VPN or UU session are used.
"""
import base64,hashlib,json,socket,subprocess,sys,tempfile,zipfile
from pathlib import Path
root=Path(__file__).resolve().parents[1]
if sys.platform!='darwin':raise SystemExit('Native Network/ImageIO/JavaScriptCore probe requires macOS.')
with tempfile.TemporaryDirectory(prefix='qiban-phone-probe-') as tmp:
 work=Path(tmp);png=base64.b64decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=');image='images/test.png'
 manifest={'schema':'qiban-card-art/1','id':'native-probe','title':'Synthetic art probe','characters':[{'id':'test','name':'Test','group':'Probe','portrait':image}],'files':{image:hashlib.sha256(png).hexdigest()}}
 for name,bad in [('valid.qcards',False),('bad.qcards',True)]:
  m={**manifest,'files':{'index.html':hashlib.sha256(b'bad').hexdigest()}} if bad else manifest
  with zipfile.ZipFile(work/name,'w',compression=zipfile.ZIP_STORED) as z:z.writestr('catalog.json',json.dumps(m));z.writestr('index.html' if bad else image,b'bad' if bad else png)
 audio=base64.b64decode('AAAAHGZ0eXBNNEEgAAACAE00QSBpc29taXNvMgAAAwJtb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAD6AAAADIAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACLXRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAADIAAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAyAAAAQAAAEAAAAAAaVtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAAD6AAAAHIFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAFQbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAEUc3RibAAAAGpzdHNkAAAAAAAAAAEAAABabXA0YQAAAAAAAAABAAAAAAAAAAAAAQAQAAAAAD6AAAAAAAA2ZXNkcwAAAAADgICAJQABAASAgIAXQBUAAAAAAH0AAAAGTgWAgIAFFAhW5QAGgICAAQIAAAAgc3R0cwAAAAAAAAACAAAAAQAABAAAAAABAAADIAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAgAAAAEAAAAcc3RzegAAAAAAAAAAAAAAAgAAABMAAAAEAAAAFHN0Y28AAAAAAAAAAQAAAy4AAAAac2dwZAEAAAByb2xsAAAAAgAAAAH//wAAABxzYmdwAAAAAHJvbGwAAAABAAAAAgAAAAEAAABhdWR0YQAAAFltZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAACxpbHN0AAAAJKl0b28AAAAcZGF0YQAAAAEAAAAATGF2ZjYzLjEuMTAyAAAACGZyZWUAAAAfbWRhdNwATGF2YzYzLjEuMTAyAAIwQA4BGCAH');audio_path='audio/silent.m4a'
 roles=['table_bg','park','pass','hint','play','clock','player_title','seat_level3','seat_level3_base','remaining_caption','lobby_bg']
 theme_manifest={**manifest,'schema':'qiban-card-art/2','id':'original-probe','theme':{'id':'p5-original','revision':1,'width':1600,'height':900,'images':{role:image for role in roles},'audio':{'music/main':audio_path},'musicLoop':0},'files':{**manifest['files'],audio_path:hashlib.sha256(audio).hexdigest()}}
 with zipfile.ZipFile(work/'theme.qcards','w',compression=zipfile.ZIP_STORED) as z:
  z.writestr('catalog.json',json.dumps(theme_manifest));z.writestr(image,png);z.writestr(audio_path,audio)
 downgrade={**manifest,'id':'original-probe'}
 with zipfile.ZipFile(work/'downgrade.qcards','w',compression=zipfile.ZIP_STORED) as z:z.writestr('catalog.json',json.dumps(downgrade));z.writestr(image,png)
 cmd=['swiftc','-swift-version','5','-parse-as-library','-o',str(work/'probe'),'-framework','Network','-framework','JavaScriptCore','-framework','ImageIO','-framework','Security',str(root/'ios/Sources/ChatModuleServer.swift'),str(root/'ios/Sources/PhoneCardRooms.swift'),str(root/'ios/Sources/CardGameLibrary.swift'),str(root/'ios/Sources/VoicePackage.swift'),str(root/'tools/phone-room-probe/main.swift')]
 subprocess.run(cmd,check=True,cwd=root)
 # The build host may already use app-default ports; use two distinct OS-chosen free
 # ports. The old hard-coded Host check rejects both, so this still detects the bug.
 sockets=[socket.socket(),socket.socket()]
 for sock in sockets:sock.bind(('127.0.0.1',0))
 ports=[str(sock.getsockname()[1]) for sock in sockets]
 for sock in sockets:sock.close()
 subprocess.run([str(work/'probe'),str(root/'games/tycoon'),str(work/'valid.qcards'),str(work/'bad.qcards'),*ports,str(work/'theme.qcards'),str(work/'downgrade.qcards')],check=True,cwd=root,timeout=40)
