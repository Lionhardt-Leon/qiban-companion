"""Fetch the verified code-only iOS SDK, or rebuild it from pinned public source."""
from pathlib import Path
import hashlib,io,json,os,shutil,subprocess,sys,tempfile,urllib.request,urllib.error,urllib.parse,zipfile,uuid

root=Path(__file__).resolve().parents[1];generated=root/'ios/Generated';target=generated/'QibanG2P.xcframework'
def notices():
    parts=[(target/'THIRD-PARTY-NOTICES.txt').read_text(encoding='utf-8')]
    for name in ['LICENSE','ThirdPartyNotices.txt']:
        url='https://raw.githubusercontent.com/microsoft/onnxruntime/v1.24.2/'+name
        with urllib.request.urlopen(url,timeout=60) as response:
            parts.append('\nMicrosoft ONNX Runtime 1.24.2 / '+name+'\n'+response.read().decode('utf-8'))
    (generated/'SPEECH-LICENSES.txt').write_text('\n\n'.join(parts),encoding='utf-8')
if target.exists():
    metadata=target/'BUILD-INFO.json'
    if metadata.exists() and json.loads(metadata.read_text(encoding='utf-8')).get('safetyRevision')==2:
        notices();print('Using verified safety-revision-2 QibanG2P SDK');raise SystemExit(0)
    stale=generated/('QibanG2P-obsolete-'+uuid.uuid4().hex+'.xcframework')
    assert target.resolve().parent==generated.resolve() and stale.resolve().parent==generated.resolve()
    target.rename(stale)
generated.mkdir(exist_ok=True,parents=True)
class SafeRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self,req,fp,code,msg,headers,newurl):
        result=super().redirect_request(req,fp,code,msg,headers,newurl)
        if result and urllib.parse.urlsplit(newurl).netloc!='api.github.com':result.remove_header('Authorization')
        return result
try:
    token=os.environ.get('GH_TOKEN','');headers={'Accept':'application/octet-stream','User-Agent':'Qiban-native-speech-build'}
    if token:headers['Authorization']='Bearer '+token
    request=urllib.request.Request('https://api.github.com/repos/Lionhardt-Leon/qiban-companion/releases/assets/713163445',headers=headers)
    with urllib.request.build_opener(SafeRedirect).open(request,timeout=60) as response:raw=response.read(20*1024*1024+1)
    assert len(raw)<=20*1024*1024 and hashlib.sha256(raw).hexdigest()=='d0ae54cc9008e53c28709ba42cffa2033823730c8857d4fd302fb8ff4f7c658d'
    with zipfile.ZipFile(io.BytesIO(raw)) as archive:
        assert archive.testzip() is None and sum(x.file_size for x in archive.infolist())<100*1024*1024
        for item in archive.infolist():
            destination=(generated/item.filename).resolve();assert generated.resolve() in destination.parents
            if item.is_dir():destination.mkdir(exist_ok=True,parents=True)
            else:destination.parent.mkdir(exist_ok=True,parents=True);destination.write_bytes(archive.read(item))
    assert (target/'Info.plist').exists() and json.loads((target/'BUILD-INFO.json').read_text(encoding='utf-8'))['safetyRevision']==2
    print('Verified safety-revision-2 QibanG2P SDK downloaded; no speaker models included')
except (urllib.error.URLError,AssertionError,zipfile.BadZipFile):
    # A fork or local checkout cannot read the author's draft release.
    # Building from the same pinned public code requires no account or voice data.
    work=Path(tempfile.mkdtemp(prefix='qiban-g2p-'))
    subprocess.run([sys.executable,str(root/'tools/probe-tts-ios.py'),'--work',str(work/'build'),'--output',str(work/'output')],check=True)
    shutil.copytree(work/'output/QibanG2P.xcframework',target)
notices()
