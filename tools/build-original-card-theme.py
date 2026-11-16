"""Extract the supplied table's original media into a data-only local .qcards.

No program, script, HTML or original server address is copied. Images keep their
original bytes. Godot OggPacketSequence packets are remuxed without decoding,
then encoded to AAC for iOS 16 playback. The recipe contains no artwork.
Binary format reference: godotengine/godot core/io/resource_format_binary.cpp.
"""
import argparse, concurrent.futures, hashlib, importlib.util, json, re, struct, subprocess, zipfile
from pathlib import Path

spec=importlib.util.spec_from_file_location('card_art',Path(__file__).with_name('build-card-art.py'))
art=importlib.util.module_from_spec(spec);spec.loader.exec_module(art)
MOODS=['Neutral','Thinking','Play','Pass','Confident','Surprised','Win','Lose']
VOICE={'ann':'panther','yusuke':'fox','futaba':'navi','kasumi':'violet','ryuji':'skull','morgana':'mona','makoto':'queen','haru':'noir','riko':'wind'}

def ogg_stream(raw):
    """Recover the actual Vorbis packets, page boundaries and granule positions."""
    needle=struct.pack('<I',18)+b'OggPacketSequence\0'
    pos=raw.index(needle)+len(needle)
    def u32():
        nonlocal pos
        value=struct.unpack_from('<I',raw,pos)[0];pos+=4;return value
    def variant():
        nonlocal pos
        kind=u32()
        if kind==1:return None
        if kind in (2,3):return u32()
        if kind==4:
            value=struct.unpack_from('<f',raw,pos)[0];pos+=4;return value
        if kind==30:return [variant() for _ in range(u32()&0x7fffffff)]
        if kind==31:
            n=u32();value=raw[pos:pos+n];pos+=n+(-n%4);return value
        if kind==48:
            n=u32();value=list(struct.unpack_from('<'+'q'*n,raw,pos));pos+=8*n;return value
        raise ValueError('Unexpected Godot audio variant '+str(kind))
    props={}
    for _ in range(u32()):
        key=u32();props[key]=variant()
        if 2 in props and 3 in props:break
    pages,granules=props[2],props[3]
    assert len(pages)==len(granules) and pages and pages[0][0].startswith(b'\x01vorbis')
    def crc(data):
        value=0
        for b in data:
            value=((value<<8)^CRC[((value>>24)^b)&255])&0xffffffff
        return value
    out=bytearray();sequence=0
    for i,(packets,granule) in enumerate(zip(pages,granules)):
        laces=[];chunks=[]
        for packet in packets:
            laces.extend([255]*(len(packet)//255)+[len(packet)%255]);chunks.append(packet)
        assert len(laces)<=255,'Oversized Ogg page'
        flags=(2 if i==0 else 0)|(4 if i==len(pages)-1 else 0)
        header=b'OggS\0'+bytes([flags])+struct.pack('<qIII',granule,1,sequence,0)+bytes([len(laces)])+bytes(laces)
        page=bytearray(header+b''.join(chunks));struct.pack_into('<I',page,22,crc(page));out.extend(page);sequence+=1
    return bytes(out)

CRC=[]
for n in range(256):
    c=n<<24
    for _ in range(8):c=((c<<1)^(0x04c11db7 if c&0x80000000 else 0))&0xffffffff
    CRC.append(c)

def main():
    p=argparse.ArgumentParser();p.add_argument('--pck',type=Path,required=True);p.add_argument('--portraits',type=Path,required=True)
    p.add_argument('--ffmpeg',type=Path,required=True);p.add_argument('--cache',type=Path,required=True);p.add_argument('--out',type=Path,required=True)
    a=p.parse_args();index=art.pck_index(a.pck);a.cache.mkdir(parents=True,exist_ok=True)
    read=lambda path:art.pck_read(a.pck,index,path.removeprefix('res://'))
    with zipfile.ZipFile(a.portraits) as z:
        old=json.loads(z.read('catalog.json'));files={n:z.read(n) for n in old['files']};chars=old['characters']
    def extract(path):
        path=path.removeprefix('res://');meta=read(path+'.import').decode()
        target=re.search(r'path="res://([^\"]+\.ctex)"',meta).group(1)
        raw,ext=art.image_bytes(read(target));name='images/'+art.sha(raw)+'.'+ext;files[name]=raw;return name
    profiles=json.loads(read('skin/p5-theme/portrait-profiles.json'))
    cutins=json.loads(read('skin/p5-theme/portrait-cutin-profiles.json'))
    # The original eight party members also use layered expressions and blinks.
    party={'ann':('gaojuanxing-guaidao01','gaojuanxing-guaidao01-benti'),'yusuke':('youjie-changfu','youjie-changfu-0-benti'),
           'futaba':('zuocangshuangye-changfu','zuocangshuangye-changfu-benti'),'kasumi':('fangzexia-zhifu01','fangzexia-zhifu01-benti'),
           'ryuji':('longsi-changfu','longsi-changfu-benti'),'morgana':('mona-mao01','big-touxiang-mao01-mona'),
           'makoto':('xindaozhen-changfu','xindaozhen-changfu-benti'),'haru':('aocunchun-guaidaofu','aocunchun-guaidaofu-benti')}
    for c in chars:
        cid=c['id'];key=cid.removeprefix('p5-');c['voice']=VOICE.get(key,key) if key!='hifumi' else ''
        if cid in cutins:
            f=cutins[cid];c['cutin']={k:f[k] for k in ['Canvas','EyeCenter','EyeAngle','EyeWidth','FramingWidth'] if k in f}
        states={};closed={}
        if cid in profiles:
            pr=profiles[cid];prefix='skin/p5-theme/portrait-layers/'+pr['Folder']+'/'
            for mood,frame in pr['Moods'].items():
                common=pr.get('Underlays',[])+[pr['Body']]
                states[mood]=[extract(prefix+n+'.png') for n in common+[frame['Eyes'],frame['Mouth']]+pr.get('Overlays',[])]
                closed[mood]=[extract(prefix+n+'.png') for n in common+[frame['ClosedEyes'],frame['Mouth']]+pr.get('Overlays',[])]
        elif key in party:
            prefix='skin/p5-theme/portrait-layers/'+key+'/'
            stem,body=party[key]
            def exists(n):return prefix+n+'.png.import' in index
            for mood in MOODS:
                expression='xiao' if mood in ['Win','Confident'] else 'beiai' if mood in ['Pass','Lose'] else ('kongxu' if key=='kasumi' else 'jingya') if mood=='Surprised' else 'tongchang'
                if key=='morgana':
                    number={'Thinking':'07','Play':'04','Pass':'05','Confident':'02','Surprised':'10','Win':'09','Lose':'08'}.get(mood,'01')
                    eyes='mona-mao'+number+'-mu';mouth='mona-mao'+number+'-zui'+('3' if mood in ['Play','Win'] else '1')
                else:
                    eyes=stem+'-'+expression+'-yan';mouth=stem+'-'+expression+'-zui'+('2' if mood in ['Play','Win'] else '1')
                    if not exists(mouth):mouth=stem+'-'+expression+'-zui1'
                normal=eyes+'1';blink=eyes+('3' if exists(eyes+'3') else '2' if exists(eyes+'2') else '1')
                overlays=[stem+'-yanjing',stem+'-mianju1']+([stem+'-benti-mianju'] if key=='haru' else [])
                states[mood]=[extract(prefix+n+'.png') for n in [body,normal,mouth]+overlays if exists(n)]
                closed[mood]=[extract(prefix+n+'.png') for n in [body,blink,mouth]+overlays if exists(n)]
        if states:
            c['stateLayers']=states;c['blinkLayers']=closed;c['layers']=states['Neutral'];c['portrait']=c['layers'][0];c.pop('states',None)
        elif cid in cutins and cutins[cid].get('ClosedFrame'):
            c['blinkLayers']={'Play':[extract(cutins[cid]['ClosedFrame'])]}
    images={k:extract(path) for k,path in json.loads(read('skin/p5-theme/art/assets.json')).items()}
    audio_paths=json.loads(read('skin/p5-theme/audio/assets.json'));audio_paths['music/main']='res://skin/p5-theme/audio/music/no-more-what-ifs.ogg'
    unique=sorted(set(audio_paths.values()))
    def audio(path):
        meta=read(path+'.import').decode();target=re.search(r'path="res://([^\"]+\.oggvorbisstr)"',meta).group(1)
        raw=read(target);cache=a.cache/(art.sha(raw)+'.m4a')
        if not cache.exists():
            ogg=ogg_stream(raw)
            command=[str(a.ffmpeg),'-v','error','-nostdin','-i','pipe:0','-vn','-c:a','aac','-b:a','96k','-movflags','+faststart','-y',str(cache)]
            result=subprocess.run(command,input=ogg,stdout=subprocess.PIPE,stderr=subprocess.PIPE,creationflags=0x08000000)
            if result.returncode:raise ValueError(path+': '+result.stderr.decode(errors='replace'))
        data=cache.read_bytes();assert data[4:8]==b'ftyp';return path,'audio/'+art.sha(data)+'.m4a',data
    audio_map={}
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        for n,(path,name,raw) in enumerate(pool.map(audio,unique),1):
            audio_map[path]=name;files[name]=raw
            if n%50==0:print('Audio',n,'/',len(unique),flush=True)
    theme={'id':'p5-original','revision':1,'width':1600,'height':900,'images':images,'audio':{k:audio_map[v] for k,v in audio_paths.items()},'musicLoop':11.73075}
    # Remove images superseded by the corrected original expressions.
    keep=set(images.values())|set(audio_map.values())
    for c in chars:
        keep.add(c['portrait']);keep.update(c.get('states',{}).values());keep.update(c.get('layers',[]))
        for layers in list(c.get('stateLayers',{}).values())+list(c.get('blinkLayers',{}).values()):keep.update(layers)
    files={k:v for k,v in files.items() if k in keep}
    manifest={'schema':'qiban-card-art/2','id':old['id'],'title':'P5 Tycoon · 原版完整视听包','characters':chars,'theme':theme,'files':{n:art.sha(b) for n,b in files.items()}}
    assert len(files)<=1800
    a.out.parent.mkdir(parents=True,exist_ok=True)
    with zipfile.ZipFile(a.out,'w',compression=zipfile.ZIP_STORED) as z:
        z.writestr('catalog.json',json.dumps(manifest,ensure_ascii=False,separators=(',',':')))
        for name,raw in sorted(files.items()):z.writestr(name,raw)
    report={'file':str(a.out.resolve()),'sha256':art.sha(a.out.read_bytes()),'bytes':a.out.stat().st_size,'characters':len(chars),'images':sum(x.startswith('images/') for x in files),'audio':len(audio_map),'themeRoles':len(images),'sourceSHA256':art.sha(a.pck.read_bytes()),'codeIncluded':False}
    a.out.with_suffix('.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8');print(json.dumps(report,ensure_ascii=True))
if __name__=='__main__':main()
