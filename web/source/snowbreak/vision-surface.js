import {SURFACE_REGIONS,surfaceKey} from './surface.js';

export function parseSurfaceProposals(raw,points){
  if(raw?.error)throw new Error('识图接口返回错误');
  let data=raw;if(typeof data?.zh==='string')data=data.zh;
  if(typeof data==='string'){if(data.length>24000)throw new Error('候选回复过大');data=JSON.parse(data.trim().replace(/^```(?:json)?\s*/i,'').replace(/```\s*$/,''));}
  if(!data||!Array.isArray(data.labels)||data.labels.length>80)throw new Error('识图候选格式无效');
  const known=new Map(points.map(p=>[p.id,p])),seen=new Set(),result=[];
  for(const row of data.labels){
    if(!row||!Number.isInteger(row.point)||!known.has(row.point)||seen.has(row.point))throw new Error('候选编号重复或不属于本次截图');seen.add(row.point);
    if(!Object.hasOwn(SURFACE_REGIONS,row.region)||row.visible!==true||!Number.isFinite(row.confidence)||row.confidence<.7||row.confidence>1)continue;
    result.push({point:row.point,id:row.region,confidence:row.confidence,hit:known.get(row.point).hit});
  }
  return result;
}

export function mountSurfaceVision(display,canvas,host,{request,apply,model,beforeCapture}){
  const root=document.createElement('div'),button=document.createElement('button'),status=document.createElement('p'),image=document.createElement('img'),list=document.createElement('div'),accept=document.createElement('button');
  button.id='snowSurfaceVision';button.textContent='识图辅助标注（发送当前模型截图至所选AI）';
  status.id='snowSurfaceVisionStatus';status.textContent='AI只建议可见采样点的部位；逐项核对后采用，不覆盖已有标注。不是像素分割或生图。';
  image.id='snowSurfaceVisionImage';image.style.cssText='width:100%;height:auto;object-fit:contain';image.hidden=true;
  accept.id='snowSurfaceVisionAccept';accept.textContent='采用勾选的候选';accept.disabled=true;root.append(button,status,image,list,accept);host.appendChild(root);
  let disposed=false,generation=0,proposals=[],checks=[],lastPoints=[];
  button.onclick=async()=>{
    const ticket=++generation;button.disabled=true;accept.disabled=true;proposals=[];checks=[];list.replaceChildren();status.textContent='准备当前静止模型的编号截图…';
    try{
      beforeCapture?.();
      const rect=canvas.getBoundingClientRect(),cv=document.createElement('canvas');cv.width=640;cv.height=Math.max(1,Math.round(640*rect.height/rect.width));if(cv.height>1600)throw new Error('当前画布比例过大');
      const ctx=cv.getContext('2d');ctx.fillStyle='#626974';ctx.fillRect(0,0,cv.width,cv.height);display.drawSnapshot(ctx,cv.width,cv.height);
      const points=[],keys=new Set();
      // Sparse point suggestions: no polygon fill, nearest-bone labels or hidden-side guesses.
      for(let y=.15;y<.86;y+=.1)for(let x=.16;x<.85;x+=.085){const hit=display.pickSurface(rect.left+x*rect.width,rect.top+y*rect.height),key=surfaceKey(hit);if(!hit?.alphaVerified||!key||keys.has(key))continue;keys.add(key);points.push({id:points.length+1,hit,x:x*cv.width,y:y*cv.height});}
      if(!points.length)throw new Error('当前构图没有可核对的角色表面');
      ctx.font='bold 13px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';for(const p of points){ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(p.x,p.y,10,0,Math.PI*2);ctx.fill();ctx.fillStyle='#000';ctx.fillText(String(p.id),p.x,p.y);}
      lastPoints=points;const url=cv.toDataURL('image/jpeg',.88);image.src=url;image.hidden=false;
      const prompt='依据图片中编号圆点中心的真实可见角色表面，给出部位建议；不要把圆点覆盖的文字当角色。仅允许编号：'+points.map(p=>p.id).join(',')+'；部位字典：'+JSON.stringify(SURFACE_REGIONS)+'。不确定、遮挡或看不清的编号省略，禁止猜隐藏部位、左右或自动补全。不画图、不输出动作。只返回聊天JSON，action必须为空，zh字段必须为序列化的JSON字符串，内容为 {"labels":[{"point":编号,"region":"字典英文键","visible":true,"confidence":0到1}]}。';
      status.textContent=`正在请求所选识图模型，${points.length} 个可见采样点；尚未写入标注。`;
      const requestedModel=model();const response=await request(url,prompt);if(disposed||ticket!==generation)return;
      proposals=parseSurfaceProposals(response,points).map(p=>({...p,model:requestedModel}));
      for(const p of proposals){const label=document.createElement('label'),check=document.createElement('input');check.type='checkbox';check.dataset.point=String(p.point);label.append(check,document.createTextNode(`编号 ${p.point}：${SURFACE_REGIONS[p.id]}（模型置信度 ${Math.round(p.confidence*100)}%）`));label.style.display='block';list.appendChild(label);checks.push(check);}
      status.textContent=`收到 ${proposals.length} 个候选，请对照编号图逐项确认。未勾选不会采用；置信度不代表精度。`;accept.disabled=!proposals.length;
    }catch(error){if(!disposed&&ticket===generation)status.textContent='未生成标注：'+error.message;}
    finally{if(!disposed&&ticket===generation)button.disabled=false;}
  };
  accept.onclick=()=>{const chosen=proposals.filter((_,i)=>checks[i].checked);if(!chosen.length){status.textContent='请先对照编号图勾选确认的候选；尚未写入。';return;}const added=apply(chosen);status.textContent=`已采用 ${added} 个三角形；已有标签受保护，未选表面保持原状。`;accept.disabled=true;};
  return {snapshot:()=>({points:lastPoints,proposals,pending:button.disabled}),dispose(){disposed=true;generation++;root.remove();}};
}
