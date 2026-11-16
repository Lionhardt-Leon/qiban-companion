"""Bundle Google's public general sound classifier, never a user recording or speaker voice."""
import csv,hashlib,io,json,urllib.request
from pathlib import Path
root=Path(__file__).resolve().parents[1];out=root/'android/app/src/main/assets/senses';out.mkdir(exist_ok=True,parents=True)
revision='dfffd623b6be8d1d9744b8e261fbac370d17c46d'
for name,url,digest in [
 ('yamnet.tflite','https://storage.googleapis.com/audioset/yamnet.tflite','e193da5676a2fdb7a3702c10fba62aa27d76f64e4534467443811c1a2ff1667d'),
 ('classes.csv','https://raw.githubusercontent.com/tensorflow/models/'+revision+'/research/audioset/yamnet/yamnet_class_map.csv','cdf24d193e196d9e95912a2667051ae203e92a2ba09449218ccb40ef787c6df2')]:
    target=out/name
    if not target.exists():target.write_bytes(urllib.request.urlopen(url,timeout=90).read())
    assert hashlib.sha256(target.read_bytes()).hexdigest()==digest,name
labels=[r['display_name'] for r in csv.DictReader(io.StringIO((out/'classes.csv').read_text(encoding='utf-8')))];assert len(labels)==521
(out/'labels.json').write_text(json.dumps(labels,ensure_ascii=False),encoding='utf-8')
license=urllib.request.urlopen('https://raw.githubusercontent.com/tensorflow/models/'+revision+'/LICENSE',timeout=60).read().decode()
(out/'NOTICE.txt').write_text('Google YAMNet / AudioSet general event classifier. Model: https://tfhub.dev/google/yamnet/1\nSource: https://github.com/tensorflow/models/tree/'+revision+'/research/audioset/yamnet\nModel SHA256: e193da5676a2fdb7a3702c10fba62aa27d76f64e4534467443811c1a2ff1667d\n\n'+license,encoding='utf-8')
print('Verified public 521-class on-device sound classifier; no user audio included')
