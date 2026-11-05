/* anim/actionbus.js —— 语义动作调度器
 *
 * 职责：接收 SemanticAction + CharacterCapability，产出「每帧的通道值」，
 *       并管理动作的开始 / 淡入 / 打断 / 队列 / 结束。
 *
 * 边界：
 *   - 不直接写渲染器：通过 handlers 在动作开始时通知渲染器（motion/pose/expression/speech），
 *     每帧的通道值由调用方取走再写入模型。
 *   - 时钟可注入（now），便于单测。
 *   - 动作优先级：触摸(80) > AI 动作(50) > 待机(10)；高优先级可抢占，低优先级入队。
 */

import { resolve, normalizeAction } from './resolve.js';

export const DEFAULT_LAYERS = [
  { id: 'touch', priority: 80 },
  { id: 'action', priority: 50 },
  { id: 'emotion', priority: 40 },
];

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

function smooth(t) { return t * t * (3 - 2 * t); }

export function evalCurve(curve, p) {
  if (!Array.isArray(curve) || !curve.length) return 0;
  if (p <= curve[0][0]) return curve[0][1];
  for (let i = 1; i < curve.length; i++) {
    const [p1, v1] = curve[i];
    if (p <= p1) {
      const [p0, v0] = curve[i - 1];
      const t = p1 === p0 ? 0 : (p - p0) / (p1 - p0);
      return v0 + (v1 - v0) * smooth(clamp(t, 0, 1));
    }
  }
  return curve[curve.length - 1][1];
}

export function createActionBus(options = {}) {
  const now = typeof options.now === 'function'
    ? options.now
    : () => (typeof performance !== 'undefined' ? performance.now() : Date.now());
  const handlers = options.handlers || {};
  const maxQueue = Number.isFinite(options.maxQueue) ? options.maxQueue : 2;

  const active = [];     // [{ plan, t0, done }]
  const queue = [];      // [{ plan, at }]
  const log = [];
  let lastFrame = { t: 0, channels: {}, actions: [], finished: [] };

  function note(kind, plan, extra) {
    log.push({ at: now(), kind, planId: plan.planId, type: plan.action.type, ...(extra || {}) });
    if (log.length > 40) log.shift();
  }

  function invoke(kind, fn, ...args) {
    if (typeof fn !== 'function') return;
    try { fn(...args); } catch (e) { /* 渲染器异常不能拖垮调度器 */ }
  }

  function begin(plan, t) {
    const entry = { plan, t0: t, done: false };
    active.push(entry);
    note('start', plan);

    // 一次性触发的轨道：动作组、姿态、表情、台词
    for (const track of plan.tracks) {
      if (track.ch === 'motion') {
        invoke('motion', handlers.onMotion, track.group, track.index, plan);
      } else if (track.ch === 'pose') {
        invoke('pose', handlers.onPose, track.name, plan);
      } else if (track.ch === 'expression') {
        invoke('expression', handlers.onExpression, track, plan);
      } else if (track.ch === 'speech') {
        invoke('speech', handlers.onSpeech, track.text, plan);
      }
    }
    return entry;
  }

  function finish(entry, t, reason) {
    if (entry.done) return;
    entry.done = true;
    const idx = active.indexOf(entry);
    if (idx >= 0) active.splice(idx, 1);
    note('end', entry.plan, { reason });
    invoke('end', handlers.onEnd, entry.plan, reason);
  }

  /** 派发一个语义动作；返回是否接受/是否入队 */
  function dispatch(action, capability, planOverride) {
    const t = now();
    const plan = planOverride || resolve(action, capability);
    if (!plan || plan.stopped || !plan.tracks.length) {
      return { accepted: false, reason: 'no-usable-plan', planId: plan && plan.planId };
    }
    const pri = Number.isFinite(plan.action.priority) ? plan.action.priority : 50;

    const current = active[0];
    if (current) {
      const curPri = Number.isFinite(current.plan.action.priority) ? current.plan.action.priority : 50;
      if (pri < curPri) {
        if (queue.length >= maxQueue) queue.shift();
        queue.push({ plan, at: t });
        note('queued', plan, { behind: current.plan.planId });
        return { accepted: true, queued: true, planId: plan.planId };
      }
      // 抢占：旧动作立即结束（渲染层靠淡出权重处理观感）
      finish(current, t, 'preempted');
    }

    begin(plan, t);
    return { accepted: true, queued: false, planId: plan.planId, plan };
  }

  function weightFor(plan, progress) {
    const dur = Math.max(1, plan.duration);
    const fadeIn = Math.max(0, Math.min(plan.fadeIn || 0, dur * 0.5));
    const fadeOut = Math.max(0, Math.min(plan.fadeOut || 0, dur * 0.5));
    const inMs = progress * dur;
    const outStart = dur - fadeOut;
    let w = 1;
    if (fadeIn > 0 && inMs < fadeIn) w = inMs / fadeIn;
    if (fadeOut > 0 && inMs > outStart) w = Math.min(w, (dur - inMs) / fadeOut);
    return clamp(w, 0, 1);
  }

  function accumulate(channels, plan, progress, weight) {
    for (const track of plan.tracks) {
      if (!track.curve || !track.id) continue;      // motion/pose/expression/speech 不是每帧通道
      const raw = evalCurve(track.curve, progress);
      const value = raw * (track.weight === undefined ? 1 : track.weight) * weight;
      const cur = channels[track.id];
      if (track.blend === 'set') {
        if (!cur || weight >= cur.weight) {
          channels[track.id] = { id: track.id, value, blend: 'set', weight, ch: track.ch };
        }
      } else if (cur && cur.blend === 'set') {
        // 已有 set 轨道时，add 叠加不覆盖
        cur.value += value;
      } else {
        channels[track.id] = {
          id: track.id,
          value: (cur ? cur.value : 0) + value,
          blend: 'add',
          weight: Math.max(cur ? cur.weight : 0, weight),
          ch: track.ch,
        };
      }
    }
  }

  /** 每帧推进；返回本帧应写入的通道值 */
  function tick(dtMs) {
    const t = now();
    const frame = { t, channels: {}, actions: [], finished: [] };

    for (const entry of active.slice()) {
      const progress = clamp((t - entry.t0) / Math.max(1, entry.plan.duration), 0, 1);
      const weight = weightFor(entry.plan, progress);
      if (weight > 0) accumulate(frame.channels, entry.plan, progress, weight);
      frame.actions.push({ planId: entry.plan.planId, type: entry.plan.action.type, progress, weight });
      if (progress >= 1) {
        frame.finished.push(entry.plan.planId);
        finish(entry, t, 'done');
      }
    }

    if (!active.length && queue.length) {
      const next = queue.shift();
      begin(next.plan, t);
      note('dequeued', next.plan);
    }

    lastFrame = frame;
    return frame;
  }

  function interrupt(planId, reason) {
    const entry = active.find((a) => a.plan.planId === planId);
    if (!entry) return false;
    finish(entry, now(), reason || 'interrupt');
    return true;
  }

  function clear(reason) {
    for (const entry of active.slice()) finish(entry, now(), reason || 'clear');
    queue.length = 0;
  }

  function snapshot() {
    return {
      active: active.map((a) => ({
        planId: a.plan.planId,
        type: a.plan.action.type,
        progress: clamp((now() - a.t0) / Math.max(1, a.plan.duration), 0, 1),
      })),
      queue: queue.map((q) => ({ planId: q.plan.planId, type: q.plan.action.type })),
      lastFrame: {
        channels: Object.keys(lastFrame.channels).length,
        actions: lastFrame.actions.length,
      },
      log: log.slice(-10),
    };
  }

  return {
    dispatch, tick, interrupt, clear, snapshot,
    get frame() { return lastFrame; },
    get activeCount() { return active.length; },
    get queuedCount() { return queue.length; },
  };
}

/* 把旧的动作名映射成语义动词（保持 AI JSON 协议兼容） */
export const LEGACY_ACTION_MAP = {
  invite_pet: 'pet_head',
  pet: 'pet_head',
  hips: 'hands_on_hips',
  look_media: 'look_at',
  close_eyes: 'close_eyes',
  smile: 'smile',
  nod: 'nod',
  shake: 'shake',
  tilt: 'tilt',
  hug: 'hug',
  wave: 'wave',
  stretch: 'stretch',
  laugh: 'laugh',
  shy: 'shy',
  think: 'think',
  lean_in: 'lean_in',
  lean_back: 'lean_back',
};

export function toSemanticAction(name, extra = {}) {
  const type = LEGACY_ACTION_MAP[name] || name;
  const a = normalizeAction({ type, ...extra });
  return a;
}
