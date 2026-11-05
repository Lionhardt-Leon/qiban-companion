"""Build an iOS C text front end from pinned public source; no voice assets."""
import argparse,concurrent.futures,hashlib,io,json,os,runpy,shutil,subprocess,tarfile,urllib.request,zipfile
from pathlib import Path

GSV='384a2f995c48ef1903373ac8814569a8925779ba'
DEPS={'cpp-pinyin':'fbaefc65818ed27c23c67678498f677b01c5097c','cppjieba':'16a3ec1adcbddfe9c24206fdbc6934b440b5cda9','SRELL':'3cd3f74357a8ecdd82f21eb9bad9ae399961e0c1','utfcpp':'70795627871251f6c57f952e667303a2381c2fc5','fmt':'f10b6dd8166d1b49e1b2e7511ceae063bb24edf7','json':'fbec662afab55019654e471b65a846a47a696722'}

def download_zip(url,dest):
    if dest.exists() and list(dest.iterdir()):return
    raw=urllib.request.urlopen(url,timeout=90).read()
    with zipfile.ZipFile(io.BytesIO(raw)) as archive:
        assert archive.testzip() is None
        for member in archive.infolist():
            parts=Path(member.filename).parts[1:]
            if not parts:continue
            target=(dest/Path(*parts)).resolve();assert dest.resolve() in target.parents
            if member.is_dir():target.mkdir(parents=True,exist_ok=True)
            else:target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(archive.read(member))

def main():
    parser=argparse.ArgumentParser();parser.add_argument('--work',type=Path,required=True);parser.add_argument('--output',type=Path,required=True);args=parser.parse_args();work=args.work.resolve();work.mkdir(exist_ok=True,parents=True);output=args.output.resolve();output.mkdir(exist_ok=True,parents=True)
    source=work/'source';deps=work/'deps';deps.mkdir(exist_ok=True)
    download_zip('https://codeload.github.com/GPT-SoVITS-Devel/GPT-SoVITS-cpp/zip/'+GSV,source)
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        list(pool.map(lambda item:download_zip('https://codeload.github.com/CppModules/'+item[0]+'/zip/'+item[1],deps/item[0]),DEPS.items()))
    boost=Path('/opt/homebrew/include')
    if not (boost/'boost').exists():
        boost=work/'boost_1_88_0'
        if not boost.exists():
            url='https://archives.boost.io/release/1.88.0/source/boost_1_88_0.tar.gz';raw=urllib.request.urlopen(url,timeout=90).read()
            assert hashlib.sha256(raw).hexdigest()=='3621533e820dcab1e8012afd583c0c73cf0f77694952b81352bf38c1488f9cb4'
            with tarfile.open(fileobj=io.BytesIO(raw),mode='r:gz') as archive:archive.extractall(work,filter='data')
    # Official v2 phoneme IDs are model data, not a neural checkpoint.
    symbol_file=work/'symbols2.py'
    if not symbol_file.exists():symbol_file.write_bytes(urllib.request.urlopen('https://raw.githubusercontent.com/RVC-Boss/GPT-SoVITS/04a44eb977586645f33594b72af13a035a2056c6/GPT_SoVITS/text/symbols2.py',timeout=30).read())
    symbols=runpy.run_path(str(symbol_file))['symbols'];config=work/'config.json';config.write_text(json.dumps({'symbol_to_id':dict(zip(symbols,range(len(symbols))))}),encoding='utf-8')
    native=Path(__file__).resolve().parent/'tts-native';common=['-DCMAKE_BUILD_TYPE=Release','-DCMAKE_POLICY_VERSION_MINIMUM=3.5','-DGSV='+str(source),'-DDEPS='+str(deps),'-DBOOST_HEADERS='+str(boost)]
    def run(cmd):print('Run:',cmd,flush=True);subprocess.run(cmd,check=True)
    host=work/'host';run(['cmake','-S',str(native),'-B',str(host),*common]);run(['cmake','--build',str(host),'--config','Release','-j','3'])
    result=[]
    for lang,text in [('zh','下午好，我在这里陪着你。'),('ja','こんにちは。今日は何を話しましょうか。')]:
        process=subprocess.run([str(host/'qiban-g2p-probe'),str(source/'res'),str(config),lang,text],check=True,capture_output=True,text=True)
        parsed=json.loads(process.stdout.strip().splitlines()[-1]);assert 'error' not in parsed and len(parsed['ids'])>5
        assert all(0<=x<len(symbols) for x in parsed['ids']);result.append({'language':lang,**parsed})
    libraries=[]
    for name,sdk in [('device','iphoneos'),('simulator','iphonesimulator')]:
        build=work/name
        run(['cmake','-S',str(native),'-B',str(build),'-G','Xcode',*common,'-DCMAKE_SYSTEM_NAME=iOS','-DCMAKE_OSX_SYSROOT='+sdk,'-DCMAKE_OSX_ARCHITECTURES=arm64','-DCMAKE_OSX_DEPLOYMENT_TARGET=16.0','-DCMAKE_XCODE_ATTRIBUTE_CODE_SIGNING_ALLOWED=NO'])
        run(['cmake','--build',str(build),'--target','QibanG2P','--config','Release','-j','3','--','CODE_SIGNING_ALLOWED=NO'])
        archives=[str(p) for p in build.rglob('*.a') if p.name in ['libQibanG2P.a','libcpp-pinyin.a','libopenjtalk.a','libhts_engine_API.a']]
        assert len(archives)==4,archives
        combined=work/('libQibanG2P-'+name+'.a');run(['xcrun','libtool','-static','-o',str(combined),*archives]);libraries.append(combined)
    headers=work/'Headers';headers.mkdir(exist_ok=True);shutil.copyfile(native/'QibanG2P.h',headers/'QibanG2P.h');(headers/'module.modulemap').write_text('module QibanG2P { header "QibanG2P.h" export * }\n',encoding='utf-8')
    run(['xcodebuild','-create-xcframework','-library',str(libraries[0]),'-headers',str(headers),'-library',str(libraries[1]),'-headers',str(headers),'-output',str(output/'QibanG2P.xcframework')])
    notices=[]
    for directory in [source,*[deps/name for name in DEPS],source/'src/g2p/open_jtalk',source/'src/g2p/hts_engine',boost]:
        for name in ['LICENSE','LICENSE.txt','COPYING','COPYRIGHT','COPYING.txt','LICENSE_1_0.txt']:
            p=directory/name
            if p.is_file():notices.append('=== '+directory.name+'/'+name+' ===\n'+p.read_text(encoding='utf-8',errors='replace'))
    (output/'QibanG2P.xcframework/THIRD-PARTY-NOTICES.txt').write_text('\n\n'.join(notices),encoding='utf-8')
    (output/'portability.json').write_text(json.dumps({'source':GSV,'dependencies':DEPS,'nativeTextTests':result,'iOSDevice':'arm64 compiled','iOSSimulator':'arm64 compiled','iPhoneAudioSynthesisVerified':False},ensure_ascii=False,indent=2),encoding='utf-8')
    shutil.make_archive(str(output/'QibanG2P-xcframework'),'zip',output,'QibanG2P.xcframework')

if __name__=='__main__':main()
