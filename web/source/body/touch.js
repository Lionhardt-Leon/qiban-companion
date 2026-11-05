/* body/touch.js —— 统一触碰手势识别（纯逻辑，可 Node 测）
 *
 * 输入是屏幕坐标上的 down/move/up（单位 px），输出结构化 body_touch 事件。
 * 不直接触发 AI / 渲染，便于单测和后续替换输入源（触摸、手柄、语音）。
 */

export const TOUCH_SCHEMA = 'body-touch/1';

import { labelOf } from './regions.js';

const DEFAULT = {
  tapMaxMs: 340,
  doubleGapMs: 320,
  longMinMs: 520,
  strokeMinPx: 42,
  strokeMinMs: 110,
  moveTolerancePx: 16,
  frequencyWindowMs: 1600,
  maxPath: 80,
};

export function createTouchTracker(opts = {}) {
  const now = typeof opts.now === 'function' ? opts.now : () => (typeof performance !== 'undefined' ? performance.now() : Date.now());
  const cfg = { ...DEFAULT, ...opts };
  let active = null;
  let lastTap = null;      // { at, region }
  let history = [];        // [{ at, region }]
  let modelId = opts.modelId || '';
  let source = opts.source || 'screen';

  function setModelId(id) { modelId = String(id || ''); }
  function setSource(s) { source = String(s || 'screen'); }

  function begin(p) {
    if (!p) return null;
    active = {
      pointerId: p.pointerId,
      x0: Number(p.x) || 0,
      y0: Number(p.y) || 0,
      x: Number(p.x) || 0,
      y: Number(p.y) || 0,
      t0: now(),
      path: [[Number(p.x) || 0, Number(p.y) || 0]],
      region: p.region || null,
      confidence: Number(p.confidence) || 0,
      source: p.source || source,
    };
    return { ...active };
  }

  function move(p) {
    if (!active || !p) return null;
    const x = Number(p.x) || 0, y = Number(p.y) || 0;
    active.x = x; active.y = y;
    if (active.path.length < cfg.maxPath) active.path.push([x, y]);
    return { x, y, moved: Math.hypot(x - active.x0, y - active.y0) };
  }

  function pathStats() {
    let len = 0;
    for (let i = 1; i < active.path.length; i++) {
      len += Math.hypot(active.path[i][0] - active.path[i - 1][0], active.path[i][1] - active.path[i - 1][1]);
    }
    return { length: len, points: active.path.length };
  }

  function finish(p, forcedGesture) {
    if (!active) return null;
    if (p) move(p);
    const t = now();
    const duration = Math.max(0, t - active.t0);
    const dx = active.x - active.x0;
    const dy = active.y - active.y0;
    const distance = Math.hypot(dx, dy);
    const ps = pathStats();
    let gesture = forcedGesture || '';
    if (!gesture) {
      if (duration >= cfg.longMinMs && distance <= cfg.moveTolerancePx) gesture = 'long_press';
      else if (distance >= cfg.strokeMinPx && duration >= cfg.strokeMinMs && ps.length >= cfg.strokeMinPx) gesture = 'stroke';
      else if (distance <= cfg.moveTolerancePx && duration <= cfg.tapMaxMs) {
        const rid = active.region && (active.region.id || active.region) || 'body';
        if (lastTap && t - lastTap.at <= cfg.doubleGapMs && lastTap.region === rid) {
          gesture = 'double_tap';
          lastTap = null;
        } else {
          gesture = 'tap';
          lastTap = { at: t, region: rid };
        }
      } else gesture = 'drag';
    }
    const region = active.region || { id: 'body', label: '身体', confidence: 0, source: 'fallback' };
    const regionId = typeof region === 'string' ? region : (region.id || 'body');
    history.push({ at: t, region: regionId });
    history = history.filter((h) => t - h.at <= cfg.frequencyWindowMs);
    const frequency = history.filter((h) => h.region === regionId).length;
    const event = {
      schema: TOUCH_SCHEMA,
      type: 'body_touch',
      modelId,
      region: regionId,
      regionLabel: region.label || labelOf(regionId),
      side: region.side || '',
      group: region.group || '',
      gesture,
      durationMs: Math.round(duration),
      confidence: Number(region.confidence) || 0,
      regionSource: region.source || 'fallback',
      source: active.source || source,
      frequency,
      start: { x: +active.x0.toFixed(1), y: +active.y0.toFixed(1) },
      end: { x: +active.x.toFixed(1), y: +active.y.toFixed(1) },
      delta: { x: +dx.toFixed(1), y: +dy.toFixed(1) },
      distance: +distance.toFixed(1),
      pathLength: +ps.length.toFixed(1),
      at: Math.round(t),
    };
    active = null;
    return event;
  }

  function cancel() { active = null; }
  function reset() { active = null; lastTap = null; history = []; }
  function state() {
    return {
      active: !!active,
      region: active && active.region && (active.region.id || active.region) || null,
      lastTap,
      history: history.slice(),
    };
  }

  return { begin, move, finish, cancel, reset, state, setModelId, setSource, config: cfg };
}

/* 本地即时反应档位：不等 LLM，也不直接决定台词 */
export function localReactionFor(event) {
  if (!event) return { intensity: 0, expression: 'neutral', motion: '' };
  const sensitive = /chest|waist|hips|belly|cheek|ear|neck|hand|foot|thigh|calf/i.test(event.region || '');
  const head = /head_top|hair|forehead|face|eyes|mouth/.test(event.region || '');
  if (event.frequency >= 4) return { intensity: 0.8, expression: 'angry', motion: 'shake' };
  if (event.gesture === 'double_tap') return { intensity: 0.7, expression: 'surprised', motion: 'shake' };
  if (event.gesture === 'long_press') return { intensity: 0.55, expression: head ? 'shy' : 'surprised', motion: head ? 'pet_head' : 'tilt' };
  if (event.gesture === 'stroke') return { intensity: 0.5, expression: head ? 'warm' : 'surprised', motion: head ? 'pet_head' : 'tilt' };
  if (sensitive) return { intensity: 0.65, expression: 'shy', motion: 'lean_back' };
  if (head) return { intensity: 0.45, expression: 'shy', motion: 'tilt' };
  return { intensity: 0.35, expression: 'warm', motion: 'nod' };
}
