"""Prepare pinned, patched C++ source only; never downloads a speaker model."""
import concurrent.futures,hashlib,io,re,runpy,tarfile,urllib.request
from pathlib import Path
root=Path(__file__).resolve().parents[1]
helper=runpy.run_path(str(root/'tools/probe-tts-ios.py'))
work=root/'android/.native';work.mkdir(exist_ok=True,parents=True)
source=work/'source';deps=work/'deps';deps.mkdir(exist_ok=True)
helper['download_zip']('https://codeload.github.com/GPT-SoVITS-Devel/GPT-SoVITS-cpp/zip/'+helper['GSV'],source)
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    list(pool.map(lambda item:helper['download_zip']('https://codeload.github.com/CppModules/'+item[0]+'/zip/'+item[1],deps/item[0]),helper['DEPS'].items()))
boost=Path('/usr/include')
if not (boost/'boost').exists():
    boost=work/'boost_1_88_0'
    if not boost.exists():
        raw=urllib.request.urlopen('https://archives.boost.io/release/1.88.0/source/boost_1_88_0.tar.gz',timeout=120).read()
        assert hashlib.sha256(raw).hexdigest()=='3621533e820dcab1e8012afd583c0c73cf0f77694952b81352bf38c1488f9cb4'
        with tarfile.open(fileobj=io.BytesIO(raw),mode='r:gz') as archive:archive.extractall(work,filter='data')
patcher=runpy.run_path(str(root/'tools/tts-native/patch_frontend.py'))
patcher['patch'](source,deps);patcher['patch_package_text'](source)
# Upstream mixed header casing works on default macOS/Windows volumes but fails
# when the NDK builds on Linux. Resolve only pinned project-local include names.
headers={p.relative_to(source/'include').as_posix().lower():p.relative_to(source/'include').as_posix() for p in (source/'include').rglob('*') if p.is_file()}
for p in (source/'src').rglob('*'):
    if p.suffix not in ['.cpp','.h','.hpp']:continue
    raw=p.read_bytes()
    fixed=re.sub(rb'(#\s*include\s*["<])(GPTSoVITS/[^">]+)([">])',lambda m:m[1]+headers.get(m[2].decode('ascii').lower(),m[2].decode('ascii')).encode('ascii')+m[3],raw)
    if fixed!=raw:p.write_bytes(fixed)
(work/'paths.cmake').write_text('\n'.join('set('+k+' "'+str(v.resolve()).replace('\\','/')+'")' for k,v in [('GSV',source),('DEPS',deps),('BOOST_HEADERS',boost)]))
notices=['Qiban Android speech: pinned GPT-SoVITS-cpp '+helper['GSV']+'; patches in tools/tts-native/patch_frontend.py. Corresponding source URLs and exact revisions follow.']
for name,folder in [('GPT-SoVITS-cpp',source),*[(k,deps/k) for k in helper['DEPS']]]:
    notices.append(name+' '+('https://github.com/GPT-SoVITS-Devel/GPT-SoVITS-cpp/tree/'+helper['GSV'] if name=='GPT-SoVITS-cpp' else 'https://github.com/CppModules/'+name+'/tree/'+helper['DEPS'][name]))
    for p in folder.glob('*'):
        if p.is_file() and p.name.lower().startswith(('license','copying','notice')):notices.append(p.read_text(encoding='utf-8',errors='replace'))
target=root/'android/app/src/main/assets/speech-notices.txt';target.parent.mkdir(exist_ok=True,parents=True);target.write_text('\n\n'.join(notices),encoding='utf-8')
print('Pinned text frontend prepared, safety revision 3; no voice weights included')
