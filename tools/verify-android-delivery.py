"""Inspect the actual APK, including every ELF LOAD page alignment, without a simulator."""
import argparse,hashlib,json,re,struct,zipfile
from pathlib import Path
p=argparse.ArgumentParser();p.add_argument('apk',type=Path);p.add_argument('--report',type=Path);args=p.parse_args()
root=Path(__file__).resolve().parents[1]
with zipfile.ZipFile(args.apk) as archive:
    assert archive.testzip() is None
    names=archive.namelist();assert 'classes.dex' in names and 'AndroidManifest.xml' in names
    for path in ['assets/mobile/home.js','assets/mobile/android-bridge.js','assets/mobile/generic.js','assets/game/room-runtime.js','assets/tycoon/app.mjs','assets/tycoon/original-table.mjs','assets/host.js']:
        assert path in names,path
    assert archive.read('assets/tycoon/app.mjs')==(root/'games/tycoon/app.mjs').read_bytes()
    assert archive.read('assets/tycoon/original-table.mjs')==(root/'games/tycoon/original-table.mjs').read_bytes()
    assert archive.read('assets/host.js')==(root/'ios/WebAssets/host.js').read_bytes()
    libraries={};required={'libqiban_g2p.so','libonnxruntime.so','libonnxruntime4j_jni.so'}
    for name in names:
        if not name.endswith('.so'):continue
        assert name.startswith('lib/arm64-v8a/'),name
        data=archive.read(name);assert data[:5]==b'\x7fELF\x02',name
        offset=struct.unpack_from('<Q',data,32)[0];size,count=struct.unpack_from('<HH',data,54);align=[]
        for i in range(count):
            position=offset+i*size;kind=struct.unpack_from('<I',data,position)[0]
            if kind==1:
                alignment=struct.unpack_from('<Q',data,position+48)[0];assert alignment>=16384,(name,alignment);align.append(alignment)
        assert align,name;libraries[name]={'sha256':hashlib.sha256(data).hexdigest(),'loadAlignment':min(align)};required.discard(name.rsplit('/',1)[-1])
    assert not required,required
    assert not any(n.endswith(('.qvoice','.qcards','.qchat','.snowbreak','.p12','.jks')) for n in names)
report={'apk':args.apk.name,'bytes':args.apk.stat().st_size,'sha256':hashlib.sha256(args.apk.read_bytes()).hexdigest(),'abi':'arm64-v8a','minimumAndroid':'11 / API 30','sharedOriginalTable':True,'sharedSnowbreakRenderer':True,'nativeLibraries':libraries,'speakerModelsAndGameArtIncluded':False,'publicPerceptionModelIncluded':True,'physicalDeviceVerified':False,'uuRoutingVerified':False}
if args.report:args.report.write_text(json.dumps(report,indent=2),encoding='utf-8')
print(json.dumps(report,ensure_ascii=False))
