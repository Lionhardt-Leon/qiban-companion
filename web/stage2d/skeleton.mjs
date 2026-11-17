/* Independent reader for the documented Spine 3.8 JSON/atlas interchange format.
 * This does not contain or depend on Esoteric Software's Spine runtime SDK.
 * Rendering, constraint solving and timeline evaluation are implemented here.
 */
const RAD=Math.PI/180, EPS=1e-8;
const value=(o,k,d=0)=>Number.isFinite(o?.[k])?o[k]:d;
const wrap=x=>Math.atan2(Math.sin(x),Math.cos(x));
const color=s=>{s=(s||'ffffffff').padEnd(8,'f');return [0,2,4,6].map(i=>parseInt(s.slice(i,i+2),16)/255);};
export function parseAtlas(text){
  const regions=new Map(),pages=[];let page=null,region=null,blank=true;
  for(const raw of text.replace(/\r/g,'').split('\n')){
    const line=raw.trim();if(!line){blank=true;region=null;continue;}
    if(!line.includes(':')){
      if(blank||!page){page={name:line,width:0,height:0};pages.push(page);region=null;}
      else {region={name:line,page,rotate:0,offset:[0,0]};regions.set(line,region);}
      blank=false;continue;
    }
    const at=line.indexOf(':'),key=line.slice(0,at),str=line.slice(at+1).trim(),nums=str.split(',').map(Number),target=region||page;
    if(!target)throw Error('Atlas 属性缺少图页。');
    if(key==='size'){if(region)region.size=nums;else [page.width,page.height]=nums;}
    else if(key==='xy')target.xy=nums;
    else if(key==='orig')target.orig=nums;
    else if(key==='offset')target.offset=nums;
    else if(key==='bounds'){target.xy=nums.slice(0,2);target.size=nums.slice(2);}
    else if(key==='offsets'){target.offset=nums.slice(0,2);target.orig=nums.slice(2);}
    else if(key==='rotate')target.rotate=str==='true'?90:str==='false'?0:Number(str);
    else if(key==='pma')target.pma=str==='true';
  }
  for(const r of regions.values()){r.orig||=r.size;if(!r.xy||!r.size||!r.orig||!r.page.width||!r.page.height)throw Error('Atlas 尺寸缺失。');}
  return {regions,pages};
}
export function bezierMix(x,curve){
  if(curve==='stepped')return 0;if(!Array.isArray(curve))return x;
  const [x1,y1,x2,y2]=curve;let lo=0,hi=1;
  for(let n=0;n<13;n++){const t=(lo+hi)/2,u=1-t,px=3*u*u*t*x1+3*u*t*t*x2+t*t*t;if(px<x)lo=t;else hi=t;}
  const t=(lo+hi)/2,u=1-t;return 3*u*u*t*y1+3*u*t*t*y2+t*t*t;
}
function frameAt(frames,time){
  if(!frames?.length||time<value(frames[0],'time'))return null;
  let lo=0,hi=frames.length;while(lo+1<hi){const mid=(lo+hi)>>1;if(value(frames[mid],'time')<=time)lo=mid;else hi=mid;}
  const a=frames[lo],b=frames[lo+1];return {a,b,m:b?bezierMix((time-value(a,'time'))/(value(b,'time')-value(a,'time')||1),a.curve):0};
}
function sample(frames,time,key,def=0){const f=frameAt(frames,time);return !f?def:value(f.a,key,def)+(value(f.b,key,def)-value(f.a,key,def))*f.m;}
function duration(o){if(Array.isArray(o))return Math.max(0,...o.map(duration));if(!o||typeof o!=='object')return 0;return Math.max(value(o,'time'),...Object.values(o).filter(x=>typeof x==='object').map(duration));}
const transform=(m,x,y)=>[m.a*x+m.b*y+m.x,m.c*x+m.d*y+m.y];
function inverse(m,x,y){const det=m.a*m.d-m.b*m.c||EPS;return [(m.d*x-m.b*y)/det,(m.a*y-m.c*x)/det];}

export class Skeleton {
  constructor(data,atlas){
    if(!/^3\.8\./.test(data.skeleton?.spine||''))throw Error('目前支持 Spine 3.8 JSON 数据。');
    if(!Array.isArray(data.bones)||data.bones.length>1500||(data.slots?.length||0)>1200)throw Error('2D 骨骼规模超过限制。');
    this.data=data;this.atlas=atlas;this.bones=data.bones.map((s,index)=>({s,index,name:s.name,parent:null,a:1,b:0,c:0,d:1,x:0,y:0}));
    this.byBone=new Map(this.bones.map(b=>[b.name,b]));
    for(const b of this.bones){b.parent=this.byBone.get(b.s.parent)||null;if(b.s.parent&&(!b.parent||b.parent.index>=b.index))throw Error('骨骼层级无效。');}
    this.slots=(data.slots||[]).map((s,index)=>({s,index,bone:this.byBone.get(s.bone),name:s.name}));this.bySlot=new Map(this.slots.map(s=>[s.name,s]));
    this.skins=new Map((Array.isArray(data.skins)?data.skins:Object.entries(data.skins||{}).map(([name,attachments])=>({name,attachments}))).map(s=>[s.name,s.attachments]));
    this.skin=this.skins.get('default')||this.skins.values().next().value||{};
    this.animations=new Map(Object.entries(data.animations||{}).map(([name,raw])=>[name,{raw,duration:duration(raw)}]));
    this.constraints=['ik','transform','path'].flatMap(type=>(data[type]||[]).map(s=>({type,s,order:s.order||0}))).sort((a,b)=>a.order-b.order);
    this.attachmentCache=new WeakMap();this.deforms=new Map();this.order=this.slots.slice();this.speech=0;
    this.reset();this.world();
  }
  reset(){
    for(const b of this.bones){const s=b.s;b.lx=value(s,'x');b.ly=value(s,'y');b.rotation=value(s,'rotation');b.sx=value(s,'scaleX',1);b.sy=value(s,'scaleY',1);b.shx=value(s,'shearX');b.shy=value(s,'shearY');}
    for(const sl of this.slots){sl.attachment=sl.s.attachment??null;sl.color=color(sl.s.color);sl.dark=sl.s.dark?color(sl.s.dark):[0,0,0,1];}
    this.order=this.slots.slice();this.deforms.clear();
  }
  pose(name,time,speech=0){
    this.reset();const a=this.animations.get(name),t=a&&a.duration>0?Math.max(0,time)%a.duration:0,raw=a?.raw||{};
    for(const [name,tracks] of Object.entries(raw.bones||{})){
      const b=this.byBone.get(name);if(!b)continue;
      for(const [kind,frames] of Object.entries(tracks)){
        if(kind==='rotate')b.rotation+=sample(frames,t,'angle');
        else if(kind==='translate'){b.lx+=sample(frames,t,'x');b.ly+=sample(frames,t,'y');}
        else if(kind==='scale'){b.sx*=sample(frames,t,'x',1);b.sy*=sample(frames,t,'y',1);}
        else if(kind==='shear'){b.shx+=sample(frames,t,'x');b.shy+=sample(frames,t,'y');}
        else throw Error('尚不支持骨骼轨道：'+kind);
      }
    }
    for(const [name,tracks] of Object.entries(raw.slots||{})){
      const sl=this.bySlot.get(name);if(!sl)continue;
      for(const [kind,frames] of Object.entries(tracks)){
        const f=frameAt(frames,t);if(!f)continue;
        if(kind==='attachment')sl.attachment=f.a.name??null;
        else if(kind==='color'||kind==='twoColor'){
          const c=color(f.a.color||f.a.light),end=f.b?color(f.b.color||f.b.light):c;sl.color=c.map((v,i)=>v+(end[i]-v)*f.m);
          if(kind==='twoColor'){const d=color(f.a.dark),e=f.b?color(f.b.dark):d;sl.dark=d.map((v,i)=>v+(e[i]-v)*f.m);}
        }else throw Error('尚不支持插槽轨道：'+kind);
      }
    }
    for(const [skin,slots] of Object.entries(raw.deform||{}))for(const [slot,attachments] of Object.entries(slots))for(const [name,frames] of Object.entries(attachments)){
      const f=frameAt(frames,t);if(f)this.deforms.set(slot+'\0'+name,f);
    }
    const draw=frameAt(raw.drawOrder||raw.draworder,t);
    if(draw){const arr=new Array(this.slots.length),unchanged=[];let from=0;
      for(const offset of draw.a.offsets||[]){const sl=this.bySlot.get(offset.slot);if(!sl)continue;while(from<sl.index)unchanged.push(from++);arr[from+offset.offset]=this.slots[from++];}
      while(from<this.slots.length)unchanged.push(from++);for(let i=arr.length-1;i>=0;i--)if(!arr[i])arr[i]=this.slots[unchanged.pop()];this.order=arr;
    }
    // Official assets supply separate closed/talking mouth groups. Selecting
    // those groups keeps the original facial artwork and animation intact.
    for(const b of this.bones){if(b.name==='talk_bone')b.sx=b.sy=speech>.08?1:0;if(b.name==='close_bone')b.sx=b.sy=speech>.08?0:1;}
    this.world();
    for(const item of this.constraints){const track=(raw[item.type]||raw[item.type==='path'?'paths':item.type]||{})[item.s.name];
      const s={...item.s};if(track){if(Array.isArray(track)){for(const k of ['mix','softness','rotateMix','translateMix','scaleMix','shearMix'])if(track.some(f=>k in f))s[k]=sample(track,t,k,value(s,k,1));const f=frameAt(track,t);if(f)for(const k of ['bendPositive','compress','stretch'])if(k in f.a)s[k]=f.a[k];}
        else for(const [kind,frames] of Object.entries(track))if(kind==='mix'){s.rotateMix=sample(frames,t,'rotateMix',value(s,'rotateMix',1));s.translateMix=sample(frames,t,'translateMix',value(s,'translateMix',1));}else s[kind]=sample(frames,t,kind,value(s,kind));}
      if(item.type==='ik')this.ik(s);else if(item.type==='transform')this.constrainTransform(s);else this.path(s);
    }
    return this;
  }
  worldBone(b){
    const r=(b.rotation+b.shx)*RAD,q=(b.rotation+90+b.shy)*RAD,la=Math.cos(r)*b.sx,lc=Math.sin(r)*b.sx,lb=Math.cos(q)*b.sy,ld=Math.sin(q)*b.sy,p=b.parent;
    if(!p){b.a=la;b.b=lb;b.c=lc;b.d=ld;b.x=b.lx;b.y=b.ly;return;}
    [b.x,b.y]=transform(p,b.lx,b.ly);const mode=b.s.transform||'normal';let a=p.a,c=p.c,d=p.d,bb=p.b;
    if(mode==='onlyTranslation'){a=d=1;c=bb=0;}
    else if(mode==='noRotationOrReflection'){
      const len=Math.hypot(a,c)||EPS,co=a/len,si=c/len,det=a*d-bb*c;
      a=len;bb=co*bb+si*d;c=0;d=Math.abs(det)/len;
    }else if(mode==='noScale'||mode==='noScaleOrReflection'){
      const rot=b.rotation*RAD,co=Math.cos(rot),si=Math.sin(rot),x=a*co+bb*si,y=c*co+d*si,n=Math.hypot(x,y)||EPS;
      const sign=mode==='noScale'&&a*d-bb*c<0?-1:1,ax=x/n,ay=y/n,shx=b.shx*RAD,shy=(90+b.shy)*RAD;
      b.a=(ax*Math.cos(shx)-ay*sign*Math.sin(shx))*b.sx;b.c=(ay*Math.cos(shx)+ax*sign*Math.sin(shx))*b.sx;
      b.b=(ax*Math.cos(shy)-ay*sign*Math.sin(shy))*b.sy;b.d=(ay*Math.cos(shy)+ax*sign*Math.sin(shy))*b.sy;return;
    }
    b.a=a*la+bb*lc;b.b=a*lb+bb*ld;b.c=c*la+d*lc;b.d=c*lb+d*ld;
  }
  world(){for(const b of this.bones)this.worldBone(b);}
  descendants(root){for(const b of this.bones){if(b===root)continue;let p=b.parent;while(p&&p!==root)p=p.parent;if(p)this.worldBone(b);}}
  rotateWorld(b,angle){const co=Math.cos(angle),si=Math.sin(angle),{a,bb=b.b,c,d}=b;b.a=co*a-si*c;b.c=si*a+co*c;b.b=co*bb-si*d;b.d=si*bb+co*d;this.descendants(b);}
  ik(s){
    const target=this.byBone.get(s.target),bones=s.bones.map(n=>this.byBone.get(n));if(!target||bones.some(b=>!b))return;
    const mix=value(s,'mix',1);if(!mix)return;const last=bones[bones.length-1],length=value(last.s,'length');
    if(bones.length===1){const b=last,dx=target.x-b.x,dy=target.y-b.y,dist=Math.hypot(dx,dy),len=Math.hypot(b.a,b.c)*length;
      if(len>EPS&&(s.compress&&dist<len||s.stretch&&dist>len)){const fac=1+(dist/len-1)*mix;b.a*=fac;b.c*=fac;if(s.uniform){b.b*=fac;b.d*=fac;}}
      this.rotateWorld(b,wrap(Math.atan2(dy,dx)-Math.atan2(b.c,b.a))*mix);return;
    }
    // Solve a two-link chain analytically in world space, then correct residual
    // error for nonuniformly scaled parents. No SDK constraint code is used.
    const root=bones[0],dx=target.x-root.x,dy=target.y-root.y,dist=Math.hypot(dx,dy),l1=Math.hypot(last.x-root.x,last.y-root.y),l2=Math.hypot(last.a,last.c)*length;
    if(l1>EPS&&l2>EPS){let d=dist;const softness=value(s,'softness');if(softness>0&&d>l1+l2-softness){const x=Math.min(1,(d-(l1+l2-softness))/softness);d-=softness*x*x/2;}
      const cos=Math.min(1,Math.max(-1,(l1*l1+d*d-l2*l2)/(2*l1*(d||EPS)))),bend=s.bendPositive===false?-1:1;
      this.rotateWorld(root,wrap(Math.atan2(dy,dx)-bend*Math.acos(cos)-Math.atan2(last.y-root.y,last.x-root.x))*mix);
      this.rotateWorld(last,wrap(Math.atan2(target.y-last.y,target.x-last.x)-Math.atan2(last.c,last.a))*mix);
    }
  }
  constrainTransform(s){
    const target=this.byBone.get(s.target);if(!target)return;
    for(const name of s.bones||[s.bone]){const b=this.byBone.get(name);if(!b)continue;const rotation=value(s,'rotateMix',1),translation=value(s,'translateMix',1),scale=value(s,'scaleMix',1),shear=value(s,'shearMix',1);
      if(s.local){const relative=s.relative===true;for(const [k,source,mix,def] of [['rotation','rotation',rotation,0],['lx','x',translation,0],['ly','y',translation,0],['sx','scaleX',scale,0],['sy','scaleY',scale,0],['shy','shearY',shear,0]]){const v=target[k]+value(s,source,def);b[k]+=((relative?(k==='sx'||k==='sy'?b[k]*(v-1):v):v-b[k]))*mix;}this.worldBone(b);this.descendants(b);continue;}
      if(rotation)this.rotateWorld(b,wrap((s.relative?0:-Math.atan2(b.c,b.a))+Math.atan2(target.c,target.a)+value(s,'rotation')*RAD)*rotation);
      if(translation){const [x,y]=transform(target,value(s,'x'),value(s,'y'));b.x+=(x-(s.relative?0:b.x))*translation;b.y+=(y-(s.relative?0:b.y))*translation;}
      if(scale){const ax=Math.hypot(b.a,b.c),ay=Math.hypot(b.b,b.d),tx=Math.hypot(target.a,target.c)+value(s,'scaleX'),ty=Math.hypot(target.b,target.d)+value(s,'scaleY');const fx=s.relative?1+(tx-1)*scale:1+(tx/(ax||EPS)-1)*scale,fy=s.relative?1+(ty-1)*scale:1+(ty/(ay||EPS)-1)*scale;b.a*=fx;b.c*=fx;b.b*=fy;b.d*=fy;}
      if(shear){const len=Math.hypot(b.b,b.d),current=Math.atan2(b.d,b.b),delta=wrap(Math.atan2(target.d,target.b)-Math.atan2(target.c,target.a)-Math.PI/2+value(s,'shearY')*RAD);const angle=current+wrap(delta-(s.relative?0:wrap(current-Math.atan2(b.c,b.a)-Math.PI/2)))*shear;b.b=Math.cos(angle)*len;b.d=Math.sin(angle)*len;}
      this.descendants(b);
    }
  }
  attachment(sl,name=sl.attachment){return name==null?null:this.skin[sl.name]?.[name]||this.skins.get('default')?.[sl.name]?.[name];}
  geometry(sl,attachment){
    let a=attachment;if(a.type==='linkedmesh'){const skin=this.skins.get(a.skin)||this.skin;a=skin[sl.name]?.[a.parent];if(!a)throw Error('关联网格缺失。');}
    let cached=this.attachmentCache.get(a);if(cached)return cached;
    const count=a.uvs?a.uvs.length/2:a.vertexCount||0,source=a.vertices||[],weighted=source.length!==count*2,vertices=[];
    if(count>50000||source.length>1000000)throw Error('2D 网格规模超过限制。');
    let p=0,offset=0;
    for(let i=0;i<count;i++){
      const influences=[];if(weighted){const n=source[p++];if(!Number.isInteger(n)||n<1||n>64)throw Error('顶点权重无效。');for(let j=0;j<n;j++){const bone=source[p++],x=source[p++],y=source[p++],weight=source[p++];if(!this.bones[bone])throw Error('顶点骨骼无效。');influences.push({bone,x,y,weight,offset});offset+=2;}}
      else {influences.push({bone:sl.bone.index,x:source[p++],y:source[p++],weight:1,offset});offset+=2;}
      vertices.push(influences);
    }
    cached={vertices,weighted,deformLength:offset,source:a};this.attachmentCache.set(a,cached);return cached;
  }
  vertices(sl,a){
    const g=this.geometry(sl,a),f=this.deforms.get(sl.name+'\0'+sl.attachment),out=[];
    const deform=(frame,index)=>{if(!frame?.vertices)return 0;const n=index-value(frame,'offset');return n>=0&&n<frame.vertices.length?frame.vertices[n]:0;};
    for(const influences of g.vertices){let x=0,y=0;for(const v of influences){const dx=f?deform(f.a,v.offset)+(deform(f.b,v.offset)-deform(f.a,v.offset))*f.m:0,dy=f?deform(f.a,v.offset+1)+(deform(f.b,v.offset+1)-deform(f.a,v.offset+1))*f.m:0;const b=this.bones[v.bone];x+=(b.a*(v.x+dx)+b.b*(v.y+dy)+b.x)*v.weight;y+=(b.c*(v.x+dx)+b.d*(v.y+dy)+b.y)*v.weight;}out.push(x,y);}return out;
  }
  path(s){
    const sl=this.bySlot.get(s.target),a=sl&&this.attachment(sl);if(!a||a.type!=='path')return;
    const pts=this.vertices(sl,a),points=[];for(let i=0;i<pts.length;i+=2)points.push([pts[i],pts[i+1]]);
    // Open paths carry an unused tangent handle at each end. Closed paths wrap
    // the last two handles to the first knot.
    const controls=a.closed?[...points.slice(1),points[0],points[1]]:points.slice(1,-1);if(controls.length<4)return;
    const samples=[];let length=0,prev=null;
    for(let start=0;start+3<controls.length;start+=3){const p=controls.slice(start,start+4);for(let k=0;k<=32;k++){if(start&&k===0)continue;const t=k/32,u=1-t,x=u*u*u*p[0][0]+3*u*u*t*p[1][0]+3*u*t*t*p[2][0]+t*t*t*p[3][0],y=u*u*u*p[0][1]+3*u*u*t*p[1][1]+3*u*t*t*p[2][1]+t*t*t*p[3][1];if(prev)length+=Math.hypot(x-prev.x,y-prev.y);const dx=3*u*u*(p[1][0]-p[0][0])+6*u*t*(p[2][0]-p[1][0])+3*t*t*(p[3][0]-p[2][0]),dy=3*u*u*(p[1][1]-p[0][1])+6*u*t*(p[2][1]-p[1][1])+3*t*t*(p[3][1]-p[2][1]);prev={x,y,d:length,angle:Math.atan2(dy,dx)};samples.push(prev);}}
    const at=distance=>{if(a.closed)distance=((distance%length)+length)%length;if(distance<=0){const p=samples[0];return {...p,x:p.x+Math.cos(p.angle)*distance,y:p.y+Math.sin(p.angle)*distance};}if(distance>=length){const p=samples.at(-1);return {...p,x:p.x+Math.cos(p.angle)*(distance-length),y:p.y+Math.sin(p.angle)*(distance-length)};}let lo=0,hi=samples.length-1;while(lo+1<hi){const m=(lo+hi)>>1;if(samples[m].d<distance)lo=m;else hi=m;}const p=samples[lo],q=samples[hi],mix=(distance-p.d)/(q.d-p.d||1);return {x:p.x+(q.x-p.x)*mix,y:p.y+(q.y-p.y)*mix,angle:p.angle+wrap(q.angle-p.angle)*mix};};
    let position=value(s,'position')*(s.positionMode==='fixed'?1:length);
    for(const name of s.bones){const b=this.byBone.get(name);if(!b)continue;const p=at(position),nlen=Math.hypot(b.a,b.c)*value(b.s,'length'),spacing=value(s,'spacing')*(s.spacingMode==='percent'?length:1)+(s.spacingMode===undefined||s.spacingMode==='length'?nlen:0),q=at(position+spacing),mix=value(s,'translateMix',1),rot=value(s,'rotateMix',1);
      b.x+=(p.x-b.x)*mix;b.y+=(p.y-b.y)*mix;
      const angle=s.rotateMode==='chain'||s.rotateMode==='chainScale'?Math.atan2(q.y-p.y,q.x-p.x):p.angle;
      if(s.rotateMode==='chainScale'&&nlen>EPS){const factor=1+(Math.hypot(q.x-p.x,q.y-p.y)/nlen-1)*rot;b.a*=factor;b.c*=factor;}
      if(rot)this.rotateWorld(b,wrap(angle+value(s,'rotation')*RAD-Math.atan2(b.c,b.a))*rot);else this.descendants(b);position+=spacing;
    }
  }
  meshes(){
    const result=[];let clip=null,end=null;
    for(const sl of this.order){const a=this.attachment(sl);if(a){const type=a.type||'region';if(type==='clipping'){if(!clip){clip=this.vertices(sl,a);end=a.end;} }
      else if(type==='mesh'||type==='linkedmesh'||type==='region'){
        const path=a.path||sl.attachment,r=this.atlas.regions.get(path);if(!r)throw Error('图集缺少区域：'+path);
        let positions,uvs,triangles;if(type==='region'){const w=value(a,'width',r.orig[0]),h=value(a,'height',r.orig[1]),sx=value(a,'scaleX',1),sy=value(a,'scaleY',1),angle=value(a,'rotation')*RAD,co=Math.cos(angle),si=Math.sin(angle);positions=[];for(const [u,v] of [[0,1],[0,0],[1,0],[1,1]]){const x=(u-.5)*w*sx,y=(.5-v)*h*sy;positions.push(...transform(sl.bone,co*x-si*y+value(a,'x'),si*x+co*y+value(a,'y')));}uvs=[0,1,0,0,1,0,1,1];triangles=[0,1,2,2,3,0];}
        else {const g=this.geometry(sl,a);positions=this.vertices(sl,a);uvs=g.source.uvs;triangles=g.source.triangles;}
        if(sl.color[3]>0.001)result.push({slot:sl.name,positions,uvs:this.mapUVs(uvs,r),triangles,region:r,color:sl.color,dark:sl.dark,blend:sl.s.blend||'normal',clip});
      }else if(!['path','boundingbox','point'].includes(type))throw Error('尚不支持附件：'+type);
    }if(sl.name===end){clip=null;end=null;}}
    return result;
  }
  mapUVs(uvs,r){const out=[],[w,h]=r.size,[ow,oh]=r.orig,[ox,oy]=r.offset,[x,y]=r.xy;for(let i=0;i<uvs.length;i+=2){const u=(uvs[i]*ow-ox)/w,v=(uvs[i+1]*oh-(oh-h-oy))/h;let px,py;switch((r.rotate%360+360)%360){case 90:px=x+v*h;py=y+(1-u)*w;break;case 180:px=x+(1-u)*w;py=y+(1-v)*h;break;case 270:px=x+(1-v)*h;py=y+u*w;break;default:px=x+u*w;py=y+v*h;}out.push(px/r.page.width,py/r.page.height);}return out;}
}

// Triangulate a (possibly concave) clipping polygon, then clip each textured
// triangle against those convex triangles. UVs are interpolated at the edges.
export function triangulatePolygon(points){
  const p=[];for(let i=0;i<points.length;i+=2)p.push([points[i],points[i+1]]);let area=0;for(let i=0;i<p.length;i++){const q=p[(i+1)%p.length];area+=p[i][0]*q[1]-q[0]*p[i][1];}if(area<0)p.reverse();
  const indices=p.map((_,i)=>i),out=[],cross=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);let guard=0;
  while(indices.length>3&&guard++<p.length*p.length){let found=false;for(let k=0;k<indices.length;k++){const ai=indices[(k+indices.length-1)%indices.length],bi=indices[k],ci=indices[(k+1)%indices.length],a=p[ai],b=p[bi],c=p[ci];if(cross(a,b,c)<=EPS)continue;if(indices.some(j=>j!==ai&&j!==bi&&j!==ci&&cross(a,b,p[j])>=-EPS&&cross(b,c,p[j])>=-EPS&&cross(c,a,p[j])>=-EPS))continue;out.push([a,b,c]);indices.splice(k,1);found=true;break;}if(!found)break;}
  if(indices.length===3)out.push(indices.map(i=>p[i]));return out;
}
export function clipMesh(mesh){
  if(!mesh.clip)return mesh;const tris=triangulatePolygon(mesh.clip),positions=[],uvs=[],triangles=[];
  for(let n=0;n<mesh.triangles.length;n+=3){const source=mesh.triangles.slice(n,n+3).map(i=>[mesh.positions[i*2],mesh.positions[i*2+1],mesh.uvs[i*2],mesh.uvs[i*2+1]]);
    for(const clip of tris){let poly=source;for(let k=0;k<3&&poly.length;k++){const a=clip[k],b=clip[(k+1)%3],side=p=>(b[0]-a[0])*(p[1]-a[1])-(b[1]-a[1])*(p[0]-a[0]),next=[];let prev=poly.at(-1),pd=side(prev);for(const curr of poly){const d=side(curr);if((d>=-EPS)!==(pd>=-EPS)){const t=pd/(pd-d);next.push(prev.map((v,i)=>v+(curr[i]-v)*t));}if(d>=-EPS)next.push(curr);prev=curr;pd=d;}poly=next;}
      if(poly.length>=3){const base=positions.length/2;for(const p of poly){positions.push(p[0],p[1]);uvs.push(p[2],p[3]);}for(let j=1;j+1<poly.length;j++)triangles.push(base,base+j,base+j+1);}
    }
  }return {...mesh,positions,uvs,triangles};
}
