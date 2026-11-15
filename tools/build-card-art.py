"""Build data-only ZIP_STORED .qcards from user-owned local UI artwork.

Reads the supplied Godot PCK directly. This does not execute its EXE or copy code.
Snowbreak input is a prior UI-texture extraction audit; models are never rendered.
Artwork is deliberately excluded from the public source tree and the IPA.
"""
import argparse,hashlib,json,re,struct,zipfile
from pathlib import Path

def sha(raw):return hashlib.sha256(raw).hexdigest()
def pck_index(source):
 with source.open('rb') as f:
  assert f.read(4)==b'GDPC','Not a Godot pack';version,major,minor,patch,flags=struct.unpack('<5I',f.read(20))
  assert version==4 and not flags&1,'Requires unencrypted format-4 directory'
  base,offset=struct.unpack('<QQ',f.read(16));f.seek(offset);count=struct.unpack('<I',f.read(4))[0];assert count<=20000
  entries={}
  for _ in range(count):
   length=struct.unpack('<I',f.read(4))[0];assert length<=4096
   path=f.read(length).rstrip(b'\0').decode();position,size=struct.unpack('<QQ',f.read(16));md5=f.read(16).hex();entry_flags=struct.unpack('<I',f.read(4))[0]
   assert not entry_flags&1;entries[path]=(position+(base if flags&2 else 0),size,md5)
 return entries

def pck_read(source,entries,path):
 position,size,md5=entries[path];assert size<=30*1024*1024
 with source.open('rb') as f:f.seek(position);raw=f.read(size)
 assert len(raw)==size and hashlib.md5(raw).hexdigest()==md5
 return raw

def image_bytes(raw):
 # Godot CTEX's lossless/lossy image payload is a complete WebP or PNG stream.
 at=raw.find(b'RIFF')
 if at>=0 and raw[at+8:at+12]==b'WEBP':
  size=struct.unpack_from('<I',raw,at+4)[0]+8;assert at+size<=len(raw);return raw[at:at+size],'webp'
 at=raw.find(b'\x89PNG\r\n\x1a\n')
 if at>=0:
  end=at+8
  while end+12<=len(raw):
   length=struct.unpack_from('>I',raw,end)[0];kind=raw[end+4:end+8];end+=12+length
   if kind==b'IEND':assert end<=len(raw);return raw[at:end],'png'
 raise ValueError('Unsupported CTEX payload; no pixel modification attempted')

P5_NAMES=dict(zip('ann yusuke futaba kasumi ryuji morgana makoto haru cattle closer soy luce anri fleuret yuki leo rin key moko puppet riddle sepia marian vino phoebe chord messa matoi turbo ange berry blitz hifumi joker wonder riko'.split(),
 '高卷杏 喜多川祐介 佐仓双叶 芳泽霞 坂本龙司 摩尔加纳 新岛真 奥村春 路菲尔 新井素羽 加纳骏 池波星辉 平野亚兰 白鸟诚司 藤川雪实 神山岭央 李瑶铃 黑谷清 野毛朋子 佐原海夕 西森阳菜 须见俊也 宫下美波 长尾千津子 椎名悠美 坂井绫香 北里基良 夏川澪 桥本麻由美 长尾爱歌 鹿野莓 片山久未 东乡一二三 Joker Wonder 多祢村理子'.split()))

def write_pack(out,pack_id,title,characters,files):
 manifest={'schema':'qiban-card-art/1','id':pack_id,'title':title,'characters':characters,'files':{n:sha(b) for n,b in files.items()}}
 assert characters and len(characters)<=200 and len(files)<=1800
 out.parent.mkdir(parents=True,exist_ok=True)
 with zipfile.ZipFile(out,'w',compression=zipfile.ZIP_STORED) as z:
  z.writestr('catalog.json',json.dumps(manifest,ensure_ascii=False,separators=(',',':')))
  for name,raw in sorted(files.items()):z.writestr(name,raw)
 report={'file':str(out.resolve()),'sha256':sha(out.read_bytes()),'bytes':out.stat().st_size,'characters':len(characters),'images':len(files),'codeIncluded':False}
 out.with_suffix('.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8');print(json.dumps(report,ensure_ascii=True))

def main():
 p=argparse.ArgumentParser();p.add_argument('--pck',type=Path);p.add_argument('--snowbreak-audit',type=Path);p.add_argument('--out',type=Path,required=True);a=p.parse_args()
 if a.pck:
  index=pck_index(a.pck);files={};chars=[];unavailable=[]
  def extract(path):
   metadata=pck_read(a.pck,index,path+'.import').decode();match=re.search(r'path="res://([^\"]+\.ctex)"',metadata);assert match,path
   raw,ext=image_bytes(pck_read(a.pck,index,match[1]));name='images/'+sha(raw)+'.'+ext;files[name]=raw;return name
  for key,name in P5_NAMES.items():
   cid='p5-'+key;states={}
   for mood in ['Neutral','Thinking','Play','Pass','Win','Lose','Surprised','Confident']:
    path=f'skin/avatars/{cid}/{mood}.png'
    if path+'.import' not in index:continue
    try:states[mood]=extract(path)
    except ValueError as e:unavailable.append({'id':cid,'mood':mood,'reason':str(e)})
   if 'Neutral' in states:chars.append({'id':cid,'name':name,'group':'P5 / P5X','portrait':states['Neutral'],'states':states})
  profiles=json.loads(pck_read(a.pck,index,'skin/p5-theme/portrait-profiles.json'))
  for cid,profile in profiles.items():
   prefix='skin/p5-theme/portrait-layers/'+profile['Folder']+'/'
   state_layers={}
   for mood,frame in profile['Moods'].items():
    names=profile.get('Underlays',[])+[profile['Body'],frame['Eyes'],frame['Mouth']]+profile.get('Overlays',[])
    state_layers[mood]=[extract(prefix+n+'.png') for n in names if prefix+n+'.png.import' in index]
   layers=state_layers['Neutral'];assert layers
   chars.append({'id':cid,'name':P5_NAMES[cid.removeprefix('p5-')],'group':'P5 / P5X','portrait':layers[0],'layers':layers,'stateLayers':state_layers})
  # The remaining four party characters use original full-canvas UI layers.
  for key,prefix,body in [('ryuji','longsi-changfu','longsi-changfu-benti'),('morgana','mona-mao01','big-touxiang-mao01-mona'),('makoto','xindaozhen-changfu','xindaozhen-changfu-benti'),('haru','aocunchun-guaidaofu','aocunchun-guaidaofu-benti')]:
   folder='skin/p5-theme/portrait-layers/'+key+'/'
   neutral=[body,prefix+'-mu1',prefix+'-zui1'] if key=='morgana' else [body,prefix+'-tongchang-yan1',prefix+'-tongchang-zui1',prefix+'-yanjing',prefix+'-mianju1',prefix+'-benti-mianju']
   layers=[extract(folder+n+'.png') for n in neutral if folder+n+'.png.import' in index];assert layers
   chars.append({'id':'p5-'+key,'name':P5_NAMES[key],'group':'P5 / P5X','portrait':layers[0],'layers':layers})
  write_pack(a.out,'p5-local-v1','P5／P5X · 本地立绘',chars,files)
  a.out.with_suffix('.audit.json').write_text(json.dumps({'sourceSHA256':sha(a.pck.read_bytes()),'unavailable':unavailable},indent=2),encoding='utf-8')
 elif a.snowbreak_audit:
  audit=json.loads(a.snowbreak_audit.read_text(encoding='utf-8'));groups={};files={};chars=[]
  for r in audit['records']:
   if not r.get('success'):continue
   name=r['file'].replace('\\','/').split('/')[-1];file=a.snowbreak_audit.parent/name
   key=re.sub(r'_(800|1784)(_a)?$','',Path(name).stem);groups.setdefault(key,[]).append((r,file))
  for key,values in sorted(groups.items()):
   match=re.search(r'girl(\d+[a-z]?)(?:_fashion(\d+))?',key);assert match,key
   role,fashion=match.groups();base='恩雅' if role.startswith('011') else '芬妮' if role.startswith('008') else '尘白角色 '+role
   name=base+(' · 服饰 '+fashion if fashion else ' · '+role)
   # Full-height costume texture if available; otherwise use the original UI portrait.
   values.sort(key=lambda t:(t[0]['height'],t[0]['width']),reverse=True);r,file=values[0];raw=file.read_bytes();target='images/'+sha(raw)+'.png';files[target]=raw
   chars.append({'id':key.removeprefix('icon_'),'name':name,'group':'尘白','portrait':target})
  write_pack(a.out,'snowbreak-ui-v1','尘白 · 本地 UI 立绘',chars,files)
 else:p.error('Provide --pck or --snowbreak-audit')
if __name__=='__main__':main()
