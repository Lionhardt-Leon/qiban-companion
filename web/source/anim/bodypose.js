/* anim/bodypose.js —— V3 自然语言肢体动作规划（纯逻辑）
 *
 * 原则：
 *   - AI/文本只给语义命令，不直接给参数/骨骼。
 *   - 先查模型能力（Live2D 参数链 / VRM Humanoid 骨骼），再生成可执行轨道。
 *   - 缺肢体能力时给明确的 degraded 降级（头/身体姿态），不假装能抬腿。
 *   - 所有目标值都夹在参数/关节范围内；纯函数，可 Node 测。
 */

export const BODY_POSE_SCHEMA = 'body-pose-plan/1';

/* 语义命令 -> 需要的能力 */
export const BODY_COMMANDS = {
  raise_right_hand: { label: '抬起右手', need: 'right_arm', duration: 2200, priority: 70 },
  raise_left_hand: { label: '抬起左手', need: 'left_arm', duration: 2200, priority: 70 },
  arms_up: { label: '双手举起', need: 'both_arms', duration: 2400, priority: 70 },
  wave: { label: '挥手', need: 'right_arm', duration: 2200, priority: 70 },
  hands_on_hips: { label: '叉腰', need: 'both_arms', duration: 1800, priority: 60 },
  bow: { label: '弯腰', need: 'spine', duration: 2000, priority: 65 },
  turn_left: { label: '向左转身', need: 'spine', duration: 1800, priority: 60 },
  turn_right: { label: '向右转身', need: 'spine', duration: 1800, priority: 60 },
  lean_left: { label: '向左靠', need: 'spine', duration: 1400, priority: 55 },
  lean_right: { label: '向右靠', need: 'spine', duration: 1400, priority: 55 },
  step_forward: { label: '向前靠近', need: 'spine', duration: 1400, priority: 55 },
  legs_apart: { label: '双腿分开', need: 'legs', duration: 2000, priority: 65 },
  leg_up_left: { label: '抬起左腿', need: 'left_leg', duration: 2000, priority: 65 },
  leg_up_right: { label: '抬起右腿', need: 'right_leg', duration: 2000, priority: 65 },
  sit: { label: '坐下', need: 'legs', duration: 2600, priority: 70 },
};

const BIG = 9e9;

export function parseBodyCommand(text) {
  const s = String(text || '').trim();
  if (!s) return null;
  const pick = (type, confidence = 0.9) => ({ type, ...BODY_COMMANDS[type], confidence, text: s });
  const table = [
    [/双手.{0,4}(举|抬|伸)|两只手.{0,4}(举|抬)|arms? up/i, 'arms_up'],
    [/(抬|举|伸).{0,5}(右手|右臂)|(右手|右臂).{0,5}(抬|举|伸)|right.{0,4}(hand|arm).{0,4}(up|raise)|(raise|lift|up).{0,8}right.{0,4}(hand|arm)/i, 'raise_right_hand'],
    [/(抬|举|伸).{0,5}(左手|左臂)|(左手|左臂).{0,5}(抬|举|伸)|left.{0,4}(hand|arm).{0,4}(up|raise)|(raise|lift|up).{0,8}left.{0,4}(hand|arm)/i, 'raise_left_hand'],
    [/(双手|两只手).{0,4}叉腰|叉腰|hands? on hips/i, 'hands_on_hips'],
    [/(挥|招|摆).{0,3}手|wave/i, 'wave'],
    [/(弯|低|鞠).{0,3}(腰|头|躬)|bow/i, 'bow'],
    [/(向|往)?左.{0,3}(转|转身)|turn left/i, 'turn_left'],
    [/(向|往)?右.{0,3}(转|转身)|turn right/i, 'turn_right'],
    [/(向|往)?左.{0,2}(靠|倾)|lean left/i, 'lean_left'],
    [/(向|往)?右.{0,2}(靠|倾)|lean right/i, 'lean_right'],
    [/(靠近|凑近|往前|向前|step forward)/i, 'step_forward'],
    [/(双腿|两腿|腿).{0,3}(分开|张开)|legs? apart/i, 'legs_apart'],
    [/(抬|举|伸).{0,4}左腿|left leg up/i, 'leg_up_left'],
    [/(抬|举|伸).{0,4}右腿|right leg up/i, 'leg_up_right'],
    [/(坐下|坐着|sit)/i, 'sit'],
  ];
  for (const [re, type] of table) if (re.test(s)) return pick(type, 0.92);
  return null;
}

function fracValue(rec, frac) {
  if (!rec) return null;
  const min = Number(rec.min), max = Number(rec.max), def = Number(rec.def);
  if (!Number.isFinite(min) || !Number.isFinite(max)) return null;
  const target = frac >= 0 ? max : min;
  const base = Number.isFinite(def) ? def : 0;
  return +(base + (target - base) * Math.max(0, Math.min(1, Math.abs(frac)))).toFixed(4);
}

function detailMap(rig) {
  const out = new Map();
  for (const d of (rig && rig.report && rig.report.details) || []) {
    if (d && d.id) out.set(d.id, d);
  }
  return out;
}

function armTracks(rig, side, fracs, opts = {}) {
  const out = [];
  const limbs = rig && rig.limbs;
  if (!limbs || !limbs[side]) return out;
  for (const chain of ['A', 'B']) {
    const list = limbs[side].chains && limbs[side].chains[chain] || [];
    for (let i = 0; i < Math.min(fracs.length, list.length); i++) {
      const rec = list[i];
      const v = fracValue(rec, fracs[i]);
      if (v !== null) out.push({ id: rec.id, from: Number(rec.def) || 0, to: v, joint: side + 'Arm' + chain + (i + 1) });
    }
  }
  const sh = limbs[side].shoulder;
  if (sh && opts.shoulder !== false) {
    const v = fracValue(sh, opts.shoulderFrac === undefined ? 0.8 : opts.shoulderFrac);
    if (v !== null) out.push({ id: sh.id, from: Number(sh.def) || 0, to: v, joint: side + 'Shoulder' });
  }
  return out;
}

function mappedTrack(rig, channel, frac) {
  const id = rig && rig.map && rig.map[channel];
  if (!id) return null;
  const detail = detailMap(rig).get(id);
  const rec = detail || { id, min: -30, max: 30, def: 0 };
  const v = fracValue(rec, frac);
  return v === null ? null : { id, from: Number(rec.def) || 0, to: v, joint: channel };
}

function uniqueTracks(list) {
  const m = new Map();
  for (const t of list) if (t && t.id) m.set(t.id, t);
  return [...m.values()];
}

export function planLive2D(type, rig, opts = {}) {
  const meta = BODY_COMMANDS[type] || { label: type, duration: 1800, priority: 55 };
  const tracks = [];
  let degraded = false, reason = '';
  const hasArms = !!(rig && rig.limbs && ((rig.limbs.L && rig.limbs.L.chains.A.length) || (rig.limbs.R && rig.limbs.R.chains.A.length)));
  const addArm = (side, fracs) => {
    if (!hasArms) { degraded = true; reason = '模型没有可识别的手臂参数'; return; }
    tracks.push(...armTracks(rig, side, fracs));
  };
  switch (type) {
    case 'raise_right_hand': addArm('R', [1.0, 0.35, 0.2]); break;
    case 'raise_left_hand': addArm('L', [1.0, 0.35, 0.2]); break;
    case 'arms_up': addArm('L', [1.0, 0.3]); addArm('R', [1.0, 0.3]); break;
    case 'wave': addArm('R', [1.0, 0.25, 0.2]); break;
    case 'hands_on_hips': addArm('L', [0.15, -0.9]); addArm('R', [0.15, -0.9]); break;
    case 'bow': {
      const a = mappedTrack(rig, 'headY', -0.65);
      const b = mappedTrack(rig, 'bodyX', 0.55);
      if (a) tracks.push(a); if (b) tracks.push(b);
      if (!a && !b) { degraded = true; reason = '模型没有头部/身体俯仰参数'; }
      break;
    }
    case 'turn_left':
    case 'turn_right': {
      const dir = type === 'turn_right' ? 1 : -1;
      const h = mappedTrack(rig, 'headX', dir * 0.8);
      const b = mappedTrack(rig, 'bodyZ', dir * 0.45);
      if (h) tracks.push(h); if (b) tracks.push(b);
      if (!h && !b) { degraded = true; reason = '模型没有头部/身体转向参数'; }
      break;
    }
    case 'lean_left':
    case 'lean_right': {
      const dir = type === 'lean_right' ? 1 : -1;
      const b = mappedTrack(rig, 'bodyZ', dir * 0.7);
      if (b) tracks.push(b); else { degraded = true; reason = '模型没有身体侧倾参数'; }
      break;
    }
    case 'step_forward': {
      const b = mappedTrack(rig, 'bodyX', 0.45);
      const h = mappedTrack(rig, 'headY', -0.15);
      if (b) tracks.push(b); if (h) tracks.push(h);
      if (!b && !h) { degraded = true; reason = '模型没有身体前倾参数'; }
      break;
    }
    case 'legs_apart':
    case 'leg_up_left':
    case 'leg_up_right':
    case 'sit':
      degraded = true;
      reason = '模型没有可识别的腿部参数，已降级为身体前倾/低头';
      {
        const b = mappedTrack(rig, 'bodyX', 0.25);
        const h = mappedTrack(rig, 'headY', -0.30);
        if (b) tracks.push(b); if (h) tracks.push(h);
      }
      break;
    default: break;
  }
  const uniq = uniqueTracks(tracks);
  return {
    schema: BODY_POSE_SCHEMA,
    ok: uniq.length > 0,
    degraded,
    reason,
    type,
    label: meta.label,
    renderer: 'live2d',
    duration: Number(opts.duration) || meta.duration,
    priority: meta.priority,
    tracks: uniq,
    confidence: uniq.length ? (degraded ? 0.55 : 0.86) : 0,
    coverage: { arms: hasArms, legs: false, spine: !!(rig && rig.map && (rig.map.bodyX || rig.map.bodyZ)) },
  };
}

/* VRM Humanoid 计划：返回骨骼目标旋转（弧度，相对 rest） */
const VRM_BONE = {
  raise_right_hand: { rightUpperArm: { z: -1.25 }, rightLowerArm: { z: -0.45 } },
  raise_left_hand: { leftUpperArm: { z: 1.25 }, leftLowerArm: { z: 0.45 } },
  arms_up: { rightUpperArm: { z: -1.45 }, leftUpperArm: { z: 1.45 }, rightLowerArm: { z: -0.25 }, leftLowerArm: { z: 0.25 } },
  wave: { rightUpperArm: { z: -1.25 }, rightLowerArm: { z: -0.5 }, rightHand: { z: 0.25 } },
  hands_on_hips: { rightUpperArm: { z: -0.45, x: 0.25 }, leftUpperArm: { z: 0.45, x: 0.25 }, rightLowerArm: { z: -1.05 }, leftLowerArm: { z: 1.05 } },
  bow: { hips: { x: 0.22 }, chest: { x: 0.18 }, head: { x: 0.20 } },
  turn_left: { hips: { y: -0.30 }, chest: { y: -0.12 } },
  turn_right: { hips: { y: 0.30 }, chest: { y: 0.12 } },
  lean_left: { hips: { z: -0.12 }, chest: { z: -0.10 } },
  lean_right: { hips: { z: 0.12 }, chest: { z: 0.10 } },
  step_forward: { hips: { x: 0.06 }, spine: { x: 0.06 } },
  legs_apart: { leftUpperLeg: { z: 0.32 }, rightUpperLeg: { z: -0.32 } },
  leg_up_left: { leftUpperLeg: { x: -1.0 }, leftLowerLeg: { x: 0.5 } },
  leg_up_right: { rightUpperLeg: { x: -1.0 }, rightLowerLeg: { x: 0.5 } },
  sit: { hips: { x: 0.15 }, leftUpperLeg: { x: -1.15 }, rightUpperLeg: { x: -1.15 }, leftLowerLeg: { x: 1.0 }, rightLowerLeg: { x: 1.0 } },
};

export function planVRM(type, caps = {}, opts = {}) {
  const meta = BODY_COMMANDS[type] || { label: type, duration: 1800, priority: 55 };
  const bones = caps.bones || {};
  const want = VRM_BONE[type] || {};
  const targets = {};
  const missing = [];
  for (const [bone, rot] of Object.entries(want)) {
    if (!bones[bone]) { missing.push(bone); continue; }
    targets[bone] = rot;
  }
  const needsLegs = /^(legs_apart|leg_up_|sit)/.test(type);
  const degraded = missing.length > 0;
  let reason = missing.length ? ('缺少 VRM 骨骼：' + missing.join(', ')) : '';
  if (needsLegs && !bones.leftUpperLeg && !bones.rightUpperLeg) reason = '该 VRM 没有腿部 Humanoid 骨骼';
  return {
    schema: BODY_POSE_SCHEMA,
    ok: Object.keys(targets).length > 0,
    degraded,
    reason,
    type,
    label: meta.label,
    renderer: 'vrm',
    duration: Number(opts.duration) || meta.duration,
    priority: meta.priority,
    targets,
    tracks: Object.keys(targets).map((bone) => ({ id: bone, joint: bone })),
    confidence: Object.keys(targets).length ? (degraded ? 0.55 : 0.9) : 0,
    coverage: {
      arms: !!(bones.leftUpperArm && bones.rightUpperArm),
      legs: !!(bones.leftUpperLeg && bones.rightUpperLeg),
      spine: !!(bones.spine || bones.chest || bones.hips),
    },
  };
}

export function planSprite(type, opts = {}) {
  const meta = BODY_COMMANDS[type] || { label: type, duration: 1800, priority: 55 };
  const arms = /arm|hand|wave|hips/i.test(type);
  const legs = /leg|sit/i.test(type);
  const body = ['bow', 'lean_left', 'lean_right', 'turn_left', 'turn_right', 'step_forward'].includes(type);
  const limbs = {
    raise_right_hand: { armR: 1 }, raise_left_hand: { armL: 1 }, arms_up: { armL: 1, armR: 1 },
    wave: { armR: 1 }, hands_on_hips: { armL: 0.3, armR: 0.3 },
    legs_apart: { legL: 0.7, legR: 0.7 }, sit: { legL: 0.8, legR: 0.8 },
    leg_up_left: { legL: 0.8 }, leg_up_right: { legR: 0.8 },
  }[type] || null;
  return {
    schema: BODY_POSE_SCHEMA,
    ok: arms || legs || body || !!limbs,
    degraded: !!legs,
    reason: legs ? '单图立绘没有独立腿部骨骼，已降级为网格局部形变' : '',
    type, label: meta.label, renderer: 'sprite2d',
    duration: Number(opts.duration) || meta.duration, priority: meta.priority,
    tracks: body ? [{ id: 'bodySway', joint: 'body' }] : (arms ? [{ id: 'armReact', joint: 'arm' }] : []),
    limbs,
    confidence: legs ? 0.45 : 0.55,
    coverage: { arms: true, legs: true, spine: true },
  };
}

export function summarizePlan(plan) {
  if (!plan) return '没有可执行计划';
  const n = (plan.tracks || []).length;
  return `${plan.label || plan.type} · ${plan.renderer} · ${n} 轨${plan.degraded ? ' · 降级：' + (plan.reason || '部分能力缺失') : ''}`;
}
