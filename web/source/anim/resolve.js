/* anim/resolve.js —— 语义动作解析（纯函数，P1 设计稿）
 *
 * 纯解析层，由现有 ActionBus 及各模型 Adapter 调用。
 *
 * 输入：SemanticAction + CharacterCapability（buildCapability 的原始输出）
 * 输出：ActionPlan（轨道列表 + 通道所有权 + 降级记录 + 候选动作）
 *
 * 三条硬约束：
 *   1. 语义分级：confirmed（能力里明确声明）> inferred（组名含明确词）> 候选（通用组名，不得直接执行）。
 *      通用组名（TapBody / TapHead / TapSpecial …）**不得**被当成拥抱、点头、摸头。
 *   2. close_eyes 必须朝"闭眼"方向：读 channelMeta 的 min/default，用 set 而不是 add。
 *   3. 纯函数：不读时钟、不写模型、不生成随机数；planId 由输入内容决定，也可外部注入。
 */

export const SCHEMA = 'action-plan/1';

export const VERBS = [
  'nod', 'shake', 'tilt', 'look_at', 'wave', 'hug', 'stretch', 'hands_on_hips',
  'pet_head', 'lean_in', 'lean_back', 'laugh', 'shy', 'close_eyes', 'smile', 'think', 'raise_hand',
];

/* 语义动词 -> rig 姿态名（两个命名空间不同，必须显式映射） */
export const POSE_FOR_VERB = {
  wave: 'wave',
  hug: 'hug',
  stretch: 'stretch',
  hands_on_hips: 'hips',
};

/* 组名里带有明确语义的线索（只有这些才允许"按名字推断"） */
const STRONG_HINTS = {
  pet_head: ['headpat', 'pethead', 'pathead', 'petting', 'strokehead'],
  hug: ['hug', 'embrace'],
  wave: ['wave', 'handwave', 'bye'],
  stretch: ['stretch'],
  hands_on_hips: ['handsonhips', 'hips'],
  nod: ['nod'],
  shake: ['shake', 'deny'],
  laugh: ['laugh', 'giggle'],
  shy: ['shy', 'blush', 'embarrass'],
  smile: ['smile', 'grin'],
  tilt: ['tilt', 'headtilt'],
  close_eyes: ['closeeyes', 'eyesclose', 'blink'],
  think: ['think', 'ponder'],
  look_at: ['lookat', 'gaze'],
  lean_in: ['leanin'],
  lean_back: ['leanback'],
};

/* 通用/含糊组名：只能作为候选，绝不能直接映射到具体互动意图 */
const GENERIC_NAME_RE = /^(tap|touch|special|idle|wait|loop)(body|head|special|face|hair|hand|arm|chest|leg|foot)?\d*$/i;

/* 语义 -> 参数轨道（相对于参数默认值的增量；close_eyes 单独处理） */
const VERB_TRACKS = {
  nod: { headY: [[0, 0], [0.28, -7], [0.62, 4], [1, 0]], eyeSmile: [[0, 0], [0.5, 0.25], [1, 0]] },
  shake: { headX: [[0, 0], [0.2, 6], [0.45, -6], [0.7, 4], [1, 0]] },
  tilt: { headZ: [[0, 0], [0.4, 9], [0.8, 7], [1, 0]], browY: [[0, 0], [0.4, 0.2], [1, 0]] },
  pet_head: {
    headY: [[0, 0], [0.15, -8], [0.8, -6], [1, 0]],
    headZ: [[0, 0], [0.2, 5], [0.8, 4], [1, 0]],
    bodyX: [[0, 0], [0.2, 2.5], [0.8, 2], [1, 0]],
    cheek: [[0, 0], [0.2, 0.65], [1, 0]],
    eyeSmile: [[0, 0], [0.25, 0.5], [0.9, 0.45], [1, 0]],
  },
  hug: { bodyX: [[0, 0], [0.3, 4], [0.8, 3], [1, 0]], eyeSmile: [[0, 0], [0.4, 0.5], [1, 0]] },
  wave: { headZ: [[0, 0], [0.3, -6], [0.7, -5], [1, 0]], eyeSmile: [[0, 0], [0.3, 0.4], [1, 0]] },
  lean_in: { bodyX: [[0, 0], [0.4, 5], [1, 0]], headY: [[0, 0], [0.4, -3], [1, 0]] },
  lean_back: { bodyX: [[0, 0], [0.4, -5], [1, 0]], headY: [[0, 0], [0.4, 4], [1, 0]] },
  laugh: { eyeSmile: [[0, 0], [0.3, 0.85], [1, 0]], headY: [[0, 0], [0.25, -4], [0.7, 3], [1, 0]] },
  shy: { headZ: [[0, 0], [0.3, -8], [1, 0]], cheek: [[0, 0], [0.3, 1], [1, 0]] },
  smile: { eyeSmile: [[0, 0], [0.2, 0.9], [1, 0]], mouthForm: [[0, 0], [0.2, 0.8], [1, 0]] },
  think: { headY: [[0, 0], [0.4, 4], [1, 0]], headZ: [[0, 0], [0.5, 8], [1, 0]] },
  look_at: { gazeX: [[0, 0], [0.4, 0.6], [1, 0]], gazeY: [[0, 0], [0.4, -0.3], [1, 0]] },
};

const DEFAULT_DURATION = {
  nod: 900, shake: 1000, tilt: 1400, pet_head: 1800, hug: 2200, wave: 2000,
  stretch: 2200, hands_on_hips: 1600, laugh: 1500, shy: 1600, smile: 2000,
  close_eyes: 3000, think: 2000, look_at: 1200, lean_in: 1200, lean_back: 1200,
};

const EMOTION_HINTS = {
  shy: ['shy', 'embarrass', 'blush', 'hot'],
  happy: ['happy', 'smile', 'joy', 'fun'],
  warm: ['smile', 'gentle', 'warm', 'normal'],
  sad: ['sad', 'down', 'cry'],
  angry: ['angry', 'mad', 'anger'],
  surprised: ['surprise', 'shock'],
};

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/* ---------------- 确定性 ID ---------------- */

function hash32(s) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h.toString(36);
}

function capabilityKey(cap) {
  const ch = Object.keys(cap.channels || {}).sort().map((k) => k + '=' + cap.channels[k]).join('|');
  const mo = (cap.motions || []).map((m) => m.group + '#' + m.index).sort().join('|');
  const ex = (cap.expressions || []).map((e) => e.name).sort().join('|');
  return ch + '||' + mo + '||' + ex + '||' + JSON.stringify(cap.localActions || {});
}

function actionKey(a) {
  return [a.type, a.target, a.intensity, a.duration, a.priority, a.blend,
    a.emotion && a.emotion.name, a.emotion && a.emotion.intensity,
    a.speech && a.speech.text, ...(a.type==='surface_reaction'?[a.source,a.withOriginalVoice]:[])].join('~');
}

/* ---------------- 归一化 ---------------- */

export function normalizeAction(raw) {
  const a = raw && typeof raw === 'object' ? raw : {};
  let type = String(a.type || a.name || '').trim().toLowerCase();
  let target = String(a.target || '').trim().toLowerCase();
  if(type==='raise_left_hand'||type==='raise_right_hand'){target=type==='raise_left_hand'?'left':'right';type='raise_hand';}
  return {
    type,
    target,
    intensity: clamp(Number.isFinite(a.intensity) ? a.intensity : 0.7, 0, 1),
    duration: Number.isFinite(a.duration) && a.duration > 0 ? a.duration : 0,
    priority: Number.isFinite(a.priority) ? a.priority : 50,
    blend: a.blend === 'queue' || a.blend === 'additive' ? a.blend : 'replace',
    emotion: a.emotion && typeof a.emotion === 'object' ? a.emotion : null,
    speech: a.speech && typeof a.speech === 'object' ? a.speech : null,
    source: String(a.source || 'ai'),
    ...(typeof a.withOriginalVoice==='boolean'?{withOriginalVoice:a.withOriginalVoice}:{}),
  };
}

/* ---------------- 动作挑选（三级） ---------------- */

const isGenericName = (nameHint) => !!nameHint && GENERIC_NAME_RE.test(nameHint);

function pickMotion(action, cap) {
  const motions = Array.isArray(cap && cap.motions) ? cap.motions : [];

  // 1) 能力描述里已确认语义（未来由人工确认表或模型元数据填充）
  const confirmed = motions.find((m) => m && m.semantic && m.semantic !== 'unknown' && m.semantic === action.type);
  if (confirmed) {
    return { motion: confirmed, tier: 'confirmed', matchedBy: 'semantic', confidence: 0.95 };
  }

  // 2) 组名里带明确语义词，且不是通用组名
  const hints = STRONG_HINTS[action.type] || [];
  for (const hint of hints) {
    const hit = motions.find((m) => {
      if (!m || !m.nameHint || isGenericName(m.nameHint)) return false;
      return m.nameHint === hint || m.nameHint.includes(hint);
    });
    if (hit) {
      return { motion: hit, tier: 'inferred', matchedBy: 'name-hint:' + hint, confidence: 0.75 };
    }
  }
  return null;
}

function collectCandidates(action, cap, chosen) {
  const motions = Array.isArray(cap && cap.motions) ? cap.motions : [];
  const out = [];
  for (const m of motions) {
    if (!m) continue;
    if (chosen && m.group === chosen.group && m.index === chosen.index) continue;
    if (m.idle) continue;
    const generic = isGenericName(m.nameHint);
    const reason = !m.nameHint ? 'unnamed-group' : (generic ? 'generic-group' : 'unconfirmed-name');
    out.push({
      group: m.group,
      index: m.index,
      nameHint: m.nameHint || '',
      reason,
      requiresConfirmation: true,
    });
    if (out.length >= 8) break;
  }
  return out;
}

/* ---------------- 表情 / 参数 ---------------- */

function findExpression(action, cap) {
  const defs = Array.isArray(cap && cap.expressions) ? cap.expressions : [];
  if (!defs.length) return null;
  const wanted = action.emotion && action.emotion.name ? [String(action.emotion.name).toLowerCase()] : [];
  const hints = [];
  for (const w of wanted) for (const h of (EMOTION_HINTS[w] || [])) hints.push(h);
  for (const h of (EMOTION_HINTS[action.type] || [])) hints.push(h);
  for (const h of hints) {
    const hit = defs.find((e) => {
      const n = String(e.name || '').toLowerCase();
      const tags = Array.isArray(e.tags) ? e.tags : [];
      return n.includes(h) || tags.includes(h);
    });
    if (hit) return hit;
  }
  return null;
}

function paramTracks(action, cap) {
  const channels = (cap && cap.channels) || {};
  const spec = VERB_TRACKS[action.type];
  if (!spec) return [];
  const tracks = [];
  for (const key of Object.keys(spec)) {
    const id = channels[key];
    if (!id) continue;
    tracks.push({
      ch: key,
      id,
      blend: 'add',
      weight: 1,
      curve: spec[key].map(([t, v]) => [t, +(v * action.intensity).toFixed(4)]),
    });
  }
  return tracks;
}

/* 摸头时的半闭眼：用 set 写入，按参数范围取"默认值到最小值之间"的某个开度 */
function eyeSquintTracks(cap, intensity) {
  const channels = (cap && cap.channels) || {};
  const metaAll = (cap && cap.channelMeta) || {};
  const amount = 0.35 + 0.35 * clamp(Number.isFinite(intensity) ? intensity : 0.7, 0, 1);
  const out = [];
  for (const key of ['eyeL', 'eyeR']) {
    const id = channels[key];
    if (!id) continue;
    const meta = metaAll[key] || null;
    const from = meta && Number.isFinite(meta.default) ? meta.default : 1;
    const min = meta && Number.isFinite(meta.min) ? meta.min : 0;
    const to = clamp(min + (from - min) * amount, Math.min(from, min), Math.max(from, min));
    out.push({
      ch: key, id, blend: 'set', weight: 1, from, to,
      curve: [[0, from], [0.18, to], [0.75, to], [1, from]],
    });
  }
  return out;
}

/* close_eyes 必须"朝闭眼方向"，并且用 set：EyeOpen 默认 1，加正值只会更睁。 */
function eyeCloseTracks(cap) {
  const channels = (cap && cap.channels) || {};
  const metaAll = (cap && cap.channelMeta) || {};
  const tracks = [];
  for (const key of ['eyeL', 'eyeR']) {
    const id = channels[key];
    if (!id) continue;
    const meta = metaAll[key] || null;
    const from = meta && Number.isFinite(meta.default) ? meta.default : 1;
    const min = meta && Number.isFinite(meta.min) ? meta.min : 0;
    // 只有 min < default 才存在"闭合"方向；否则保持默认，避免反向睁眼
    const to = min < from ? min : from;
    tracks.push({
      ch: key,
      id,
      blend: 'set',
      weight: 1,
      from,
      to,
      curve: [[0, from], [0.12, to], [0.88, to], [1, from]],
    });
  }
  return tracks;
}

/* ---------------- 主入口 ---------------- */

export function resolve(rawAction, capability, opts = {}) {
  const action = normalizeAction(rawAction);
  const warnings = [];
  const degraded = [];
  const cap = capability && typeof capability === 'object' ? capability : null;

  const plan = {
    schema: SCHEMA,
    action,
    planId: '',
    tracks: [],
    owns: [],
    candidates: [],
    semanticStatus: 'none',
    duration: action.duration || DEFAULT_DURATION[action.type] || 1600,
    fadeIn: 150,
    fadeOut: 200,
    confidence: 0,
    stopped: false,
    warnings,
    degraded,
  };

  plan.planId = (typeof opts.planId === 'string' && opts.planId)
    ? opts.planId
    : 'plan-' + (action.type || 'none') + '-' + hash32(actionKey(action) + '||' + (cap ? capabilityKey(cap) : ''));

  if (!action.type) {
    warnings.push('动作类型为空');
    plan.stopped = true;
    return plan;
  }
  if (!VERBS.includes(action.type)&&action.type!=='surface_reaction') {
    warnings.push('未知语义动作 "' + action.type + '"');
    plan.stopped = true;
    return plan;
  }
  if (!cap || cap.ok === false) {
    warnings.push('能力描述不可用，降级为纯语音');
    degraded.push('speech-only');
    if (action.speech) plan.tracks.push({ ch: 'speech', text: action.speech.text || '', startAt: 0 });
    return plan;
  }

  plan.candidates = collectCandidates(action, cap, null);

  if(action.type==='surface_reaction'){
    const local=cap.localActions?.surface_reaction,binding=local?.bindings?.[action.target];
    if(cap.kind!=='snowbreak'||local?.enabled!==true||action.source!=='confirmed-surface-touch'||binding?.nativeTriggerVerified!==false||typeof binding.sampleId!=='string'||!Number.isFinite(binding.animationDuration)||binding.animationDuration<=0||binding.animationDuration>60000||!Number.isFinite(binding.voiceDuration)||binding.voiceDuration<0||binding.voiceDuration>60000){
      plan.stopped=true;warnings.push('缺少本地确认的表面反应能力或触碰来源');return plan;
    }
    plan.duration=action.withOriginalVoice===false?binding.animationDuration:Math.max(binding.animationDuration,binding.voiceDuration);
    plan.fadeIn=0;plan.fadeOut=0;plan.semanticStatus='local-confirmed-surface';plan.confidence=1;
    plan.localReaction={sampleId:binding.sampleId,nativeTriggerVerified:false};
    plan.owns=action.withOriginalVoice===false?['motion']:['motion','speech'];plan.tracks=[{ch:'motion',group:'surface-reaction',index:0}];return plan;
  }

  // A local procedural action is never inferred from an animation group name.
  if(action.type==='raise_hand'){
    const local=cap.localActions?.raise_hand;
    if(cap.kind!=='snowbreak'||local?.enabled!==true||local.experimental!==true||!['left','right'].includes(action.target)||!Array.isArray(local.sides)||!local.sides.includes(action.target)){
      plan.stopped=true;warnings.push('本地举手未启用、侧别不明确或原骨骼链缺失');return plan;
    }
    plan.duration=3600;plan.fadeIn=0;plan.fadeOut=0;
    plan.semanticStatus='experimental';plan.confidence=.6;plan.owns=['motion',action.target==='left'?'armL':'armR'];
    plan.tracks.push({ch:'pose',name:'snowbreak-raise-hand',side:action.target});
    return plan;
  }

  // 0) 闭眼是"设置到闭眼位置"，不走加法轨道
  if (action.type === 'close_eyes') {
    const tracks = eyeCloseTracks(cap);
    if (tracks.length) {
      degraded.push('param-set');
      plan.confidence = 0.6;
      plan.tracks.push(...tracks);
      plan.owns = tracks.map((t) => t.ch);
      if (action.speech && action.speech.text) {
        plan.tracks.push({ ch: 'speech', text: action.speech.text, startAt: action.speech.startAt || 0 });
      }
      return plan;
    }
    warnings.push('模型没有 eyeL/eyeR 通道，close_eyes 无法执行');
  }

  // 1) 原生动作组（confirmed / inferred；通用组名不参与）
  const picked = pickMotion(action, cap);
  if (picked) {
    plan.semanticStatus = picked.tier;
    plan.confidence = picked.confidence;
    degraded.push('motion');
    const owns = ['motion'];
    const usage = cap.parameterUsage && cap.parameterUsage.byGroup;
    const per = usage && usage[picked.motion.group] && usage[picked.motion.group][picked.motion.index];
    if (Array.isArray(per)) owns.push(...per);
    plan.tracks.push({
      ch: 'motion',
      group: picked.motion.group,
      index: picked.motion.index,
      weight: 1,
      fadeIn: plan.fadeIn,
      fadeOut: plan.fadeOut,
      matchedBy: picked.matchedBy,
      semanticTier: picked.tier,
    });
    plan.owns = Array.from(new Set(owns));
    plan.candidates = collectCandidates(action, cap, picked.motion);
  } else {
    // 2) 程序化手臂姿态（姿态名与语义动词是两个命名空间）
    const poseName = POSE_FOR_VERB[action.type];
    const poses = cap.poses || {};
    const hasPose = !!poseName && (
      poses[poseName] === true || (Array.isArray(poses) && poses.includes(poseName))
    );
    if (hasPose) {
      degraded.push('pose');
      plan.confidence = 0.6;
      plan.tracks.push({ ch: 'pose', name: poseName, weight: 1, fadeIn: 200, fadeOut: 260 });
      plan.owns = ['pose', 'armL', 'armR'];
    } else {
      // 3) 参数轨道
      const tracks = paramTracks(action, cap);
      if (tracks.length) {
        degraded.push('param-track');
        plan.confidence = 0.45;
        if (action.type === 'pet_head') {
          const squint = eyeSquintTracks(cap, action.intensity);
          if (squint.length) plan.tracks.push(...squint);
        }
        plan.tracks.push(...tracks);
        plan.owns = plan.tracks.filter((t) => t.id).map((t) => t.ch);
      } else {
        // 4) 表情文件
        const expr = findExpression(action, cap);
        if (expr) {
          degraded.push('expression');
          plan.confidence = 0.3;
          plan.tracks.push({
            ch: 'expression', name: expr.name, index: expr.index,
            weight: action.intensity, hold: plan.duration,
          });
          plan.owns = ['expression'];
        } else {
          degraded.push('speech-only');
          plan.confidence = 0.1;
        }
      }
    }
  }

  // 情绪叠加（动作层之上的表情）
  if (action.emotion && action.emotion.name && !plan.tracks.some((t) => t.ch === 'expression')) {
    const expr = findExpression(action, cap);
    if (expr) {
      plan.tracks.push({
        ch: 'expression', name: expr.name, index: expr.index,
        weight: clamp(Number(action.emotion.intensity) || 0.6, 0, 1),
        hold: Number(action.emotion.holdMs) || 2200,
        blend: 'additive',
      });
      if (!plan.owns.includes('expression')) plan.owns.push('expression');
    }
  }

  if (action.speech && action.speech.text) {
    plan.tracks.push({ ch: 'speech', text: action.speech.text, startAt: action.speech.startAt || 0 });
  }

  if (!plan.tracks.length) warnings.push('该能力下没有任何可用表现（只剩文本）');
  if (plan.candidates.length) {
    warnings.push('存在 ' + plan.candidates.length + ' 个未确认语义的动作组，未自动执行');
  }
  return plan;
}
