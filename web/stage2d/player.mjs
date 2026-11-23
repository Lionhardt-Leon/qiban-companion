import {Skeleton,parseAtlas,clipMesh} from './skeleton.mjs';
const cleanURL=(path,base)=>{const url=new URL(path,base);if(url.origin!==new URL(base).origin||url.pathname.includes('..'))throw Error('2D 资源必须来自本机素材库。');return url.href;};
const json=async url=>{const r=await fetch(url);if(!r.ok)throw Error('2D 资源读取失败（'+r.status+'）');return r.json();};
export class PortraitPlayer {
  constructor(canvas,{onStatus=()=>{},onReady=()=>{},maxFPS=30}={}){
    this.canvas=canvas;this.onStatus=onStatus;this.onReady=onReady;this.maxFPS=maxFPS;this.ticket=0;this.frame=0;this.paused=false;this.pauseAt=null;this.speech=0;this.lastLevel=0;this.lastTime=0;this.started=0;this.frames=0;this.gpu=null;
    this.resize=new ResizeObserver(()=>this.size());this.resize.observe(canvas);
    this.lost=e=>{e.preventDefault();this.stop();this.onStatus('2D 图形上下文已暂停，正在恢复…');};this.restored=()=>{this.gpu=null;if(this.model)this.load(this.model,this.base);};
    canvas.addEventListener('webglcontextlost',this.lost);canvas.addEventListener('webglcontextrestored',this.restored);
  }
  async load(model,base){
    const ticket=++this.ticket;this.stop();this.release();this.model=model;this.base=base;this.onStatus('正在加载 '+model.name+'…');
    try {
      if(model.renderer!=='spine-json')throw Error('此版本不支持该 2D 数据格式。');
      const skeletonURL=cleanURL(model.skeleton,base),atlasURL=cleanURL(model.atlas,base);
      const [data,atlasText]=await Promise.all([json(skeletonURL),fetch(atlasURL).then(r=>{if(!r.ok)throw Error('2D 图集缺失');return r.text();})]);
      if(ticket!==this.ticket)return;
      const atlas=parseAtlas(atlasText),skeleton=new Skeleton(data,atlas);this.skeleton=skeleton;
      this.images=new Map();for(const p of atlas.pages){
        if(!model.textures?.includes(p.name))throw Error('图页不在素材清单中：'+p.name);
        const image=new Image();image.decoding='async';image.src=cleanURL(p.name,skeletonURL);await image.decode();if(ticket!==this.ticket)return;
        if(image.width>8192||image.height>8192||image.width!==p.width||image.height!==p.height)throw Error('2D 图页尺寸不匹配。');this.images.set(p.name,image);
      }
      this.idle=model.idle||[...skeleton.animations.keys()].find(n=>n.endsWith('_stand'))||skeleton.animations.keys().next().value;
      this.animation=this.idle;this.animationStart=this.pauseAt ?? performance.now();this.oneShot=false;this.elapsed=0;this.smoothSpeech=0;
      skeleton.pose(this.idle,0);const points=skeleton.meshes().filter(m=>m.color[3]>.05).flatMap(m=>m.positions);
      const xs=points.filter((_,i)=>i%2===0),ys=points.filter((_,i)=>i%2===1);this.bounds=points.length?[Math.min(...xs),Math.min(...ys),Math.max(...xs),Math.max(...ys)]:[data.skeleton.x,data.skeleton.y,data.skeleton.x+data.skeleton.width,data.skeleton.y+data.skeleton.height];
      if(this.bounds.some(x=>!Number.isFinite(x))||this.bounds[2]-this.bounds[0]<1||this.bounds[3]-this.bounds[1]<1)throw Error('2D 模型边界无效。');
      this.initGPU();this.size();this.onStatus('');this.onReady({id:model.id,animations:[...skeleton.animations.keys()],bounds:this.bounds,renderer:this.renderer});this.tick(performance.now());
    }catch(e){if(ticket===this.ticket){this.onStatus('2D 角色加载失败：'+e.message);throw e;}}
  }
  initGPU(){
    const attributes={alpha:true,premultipliedAlpha:true,antialias:false,preserveDrawingBuffer:false,powerPreference:'low-power'};
    const legacy=this.canvas.getContext('webgl',attributes);
    const gl=legacy || this.canvas.getContext('webgl2',attributes);
    if(!gl)throw Error('设备暂时无法创建 2D 图形上下文。');
    this.renderer=legacy ? 'webgl1' : 'webgl2';
    this.gpu=gl;const shader=(type,source)=>{const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s;};
    const vs=shader(gl.VERTEX_SHADER,'attribute vec2 position;attribute vec2 uv;uniform vec4 camera;varying vec2 vUV;void main(){vUV=uv;gl_Position=vec4((position-camera.xy)*camera.zw,0.,1.);}');
    const fs=shader(gl.FRAGMENT_SHADER,'precision mediump float;uniform sampler2D image;uniform vec4 light;uniform vec3 dark;varying vec2 vUV;void main(){vec4 t=texture2D(image,vUV);float a=t.a*light.a;vec3 rgb=t.rgb*light.rgb+(vec3(1.)-t.rgb)*dark;gl_FragColor=vec4(rgb*a,a);}');
    const program=gl.createProgram();gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);gl.deleteShader(vs);gl.deleteShader(fs);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error('2D 着色器链接失败。');gl.useProgram(program);
    this.program=program;this.buffer=gl.createBuffer();this.indices=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,this.buffer);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.indices);
    for(const [name,offset] of [['position',0],['uv',8]]){const at=gl.getAttribLocation(program,name);gl.enableVertexAttribArray(at);gl.vertexAttribPointer(at,2,gl.FLOAT,false,16,offset);}
    this.uniforms=Object.fromEntries(['camera','image','light','dark'].map(k=>[k,gl.getUniformLocation(program,k)]));gl.uniform1i(this.uniforms.image,0);gl.enable(gl.BLEND);gl.disable(gl.DEPTH_TEST);gl.disable(gl.CULL_FACE);
    this.textures=new Map();for(const [name,img] of this.images){const tex=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,tex);gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,img);for(const axis of [gl.TEXTURE_WRAP_S,gl.TEXTURE_WRAP_T])gl.texParameteri(gl.TEXTURE_2D,axis,gl.CLAMP_TO_EDGE);for(const filter of [gl.TEXTURE_MIN_FILTER,gl.TEXTURE_MAG_FILTER])gl.texParameteri(gl.TEXTURE_2D,filter,gl.LINEAR);this.textures.set(name,tex);}
  }
  size(){const ratio=Math.min(devicePixelRatio||1,1.75),w=Math.max(1,Math.round(this.canvas.clientWidth*ratio)),h=Math.max(1,Math.round(this.canvas.clientHeight*ratio));if(this.canvas.width!==w||this.canvas.height!==h){this.canvas.width=w;this.canvas.height=h;}this.gpu?.viewport(0,0,w,h);}
  expression(name,oneShot=false){if(!this.skeleton?.animations.has(name))return false;if(this.animation!==name||oneShot){this.animation=name;this.animationStart=this.pauseAt ?? performance.now();this.oneShot=oneShot;}return true;}
  mood(mood){const key=this.model?.expressions?.[mood]||this.model?.expressions?.neutral||this.idle;return this.expression(key);}
  level(v){this.speech=Math.max(0,Math.min(1,Number(v)||0));this.lastLevel=performance.now();}
  pause(value=true){
    if(this.paused===value)return;
    const now=performance.now();
    this.paused=value;
    if(value){
      this.pauseAt=now;this.stop();this.level(0);
    }else{
      if(this.pauseAt!==null)this.animationStart+=now-this.pauseAt;
      this.pauseAt=null;this.lastTime=0;
      if(!this.frame&&this.gpu&&this.skeleton)this.tick(now);
    }
  }
  tick(now){
    this.frame=0;if(this.paused||!this.gpu||!this.skeleton)return;
    this.frame=requestAnimationFrame(t=>this.tick(t));if(now-this.lastTime<1000/this.maxFPS)return;
    const dt=this.lastTime?Math.min(.1,(now-this.lastTime)/1000):0;this.lastTime=now;this.elapsed+=dt;
    if(now-this.lastLevel>400)this.speech=0;this.smoothSpeech+=(this.speech-this.smoothSpeech)*(1-Math.exp(-dt*18));
    const animation=this.skeleton.animations.get(this.animation),duration=animation?.duration||1;let time=(now-this.animationStart)/1000;
    if(this.oneShot&&time>=duration){this.expression(this.idle);time=0;}else time%=Math.max(duration,.01);
    try{this.skeleton.pose(this.animation,time,this.smoothSpeech);this.draw();this.frames++;}catch(e){this.stop();this.onStatus('2D 动画中断：'+e.message);}
  }
  draw(){
    const gl=this.gpu;gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);gl.useProgram(this.program);
    const [x0,y0,x1,y1]=this.bounds,w=x1-x0,h=y1-y0,fit=this.model.fit||{},zoom=Math.max(.5,Math.min(2,fit.zoom||1));
    const scale=Math.min(this.canvas.width/(w*1.04),this.canvas.height/(h*1.04))*zoom,centerX=(x0+x1)/2+(fit.x||0)*w,centerY=(y0+y1)/2+(fit.y||0)*h;
    gl.uniform4f(this.uniforms.camera,centerX,centerY,2*scale/this.canvas.width,2*scale/this.canvas.height);
    let triangles=0;
    for(const source of this.skeleton.meshes()){
      const m=clipMesh(source);if(!m.triangles.length)continue;const n=m.positions.length/2;if(n>65535)throw Error('裁剪后的网格超过限制。');const data=new Float32Array(n*4);
      for(let i=0;i<n;i++){data[i*4]=m.positions[i*2];data[i*4+1]=m.positions[i*2+1];data[i*4+2]=m.uvs[i*2];data[i*4+3]=m.uvs[i*2+1];}
      gl.bindTexture(gl.TEXTURE_2D,this.textures.get(m.region.page.name));gl.uniform4fv(this.uniforms.light,m.color);gl.uniform3fv(this.uniforms.dark,m.dark.slice(0,3));
      if(m.blend==='additive')gl.blendFunc(gl.ONE,gl.ONE);else if(m.blend==='multiply')gl.blendFunc(gl.DST_COLOR,gl.ONE_MINUS_SRC_ALPHA);else if(m.blend==='screen')gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_COLOR);else gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);
      gl.bindBuffer(gl.ARRAY_BUFFER,this.buffer);gl.bufferData(gl.ARRAY_BUFFER,data,gl.DYNAMIC_DRAW);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.indices);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(m.triangles),gl.DYNAMIC_DRAW);gl.drawElements(gl.TRIANGLES,m.triangles.length,gl.UNSIGNED_SHORT,0);triangles+=m.triangles.length/3;
    }this.lastTriangles=triangles;
  }
  stop(){if(this.frame)cancelAnimationFrame(this.frame);this.frame=0;}
  release(){const gl=this.gpu;if(gl&&!gl.isContextLost()){for(const tex of this.textures?.values()||[])gl.deleteTexture(tex);if(this.program)gl.deleteProgram(this.program);if(this.buffer)gl.deleteBuffer(this.buffer);if(this.indices)gl.deleteBuffer(this.indices);}this.gpu=null;this.images?.clear();}
  dispose(){++this.ticket;this.stop();this.resize.disconnect();this.release();this.canvas.removeEventListener('webglcontextlost',this.lost);this.canvas.removeEventListener('webglcontextrestored',this.restored);this.skeleton=null;}
}
