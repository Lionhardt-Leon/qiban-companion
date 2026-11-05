/* anim/capability.js —— 模型能力识别（P0）
 *
 * 设计约束（本轮）：
 *   1. 只读：不写参数、不动动作、不改渲染顺序。
 *   2. 任何异常都不能影响调用方：buildCapability() 永不 throw，失败时返回 ok:false。
 *   3. 事实优先：先用 model3.json 声明的 Groups / HitAreas，再用 rig.js 的识别结果。
 *   4. 语义保守：动作组的语义一律标记 unknown，只提供 nameHint / tags 线索，
 *      绝不因为“下标第 3 个”就推断成摸头。
 *
 * 输出 schema: character-capability/1（见 docs/research/OPEN-SOURCE-STUDY-2026-10.md §6.1）
 */

export const SCHEMA = 'character-capability/1';

/* ---------------- 安全小工具 ---------------- */

const isObj = (v) => !!v && typeof v === 'object';
const asArray = (v) => (Array.isArray(v) ? v : []);
const str = (v) => (typeof v === 'string' ? v : '');

function tryFn(fn, fallback) {
  try { return fn(); } catch { return fallback; }
}

/* 参数名归一：ParamEyeLOpen / PARAM_EYE_L_OPEN / ParamMouthOpenY -> 小写紧凑串 */
export function normParam(id) {
  return String(id || '').replace(/^Param/i, '').replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '').toLowerCase();
}

/* ---------------- 参数表 ---------------- */

/* 0.4.0 的 getParameterIndex() 对不存在的参数不会返回 -1，
 * 而是分配一个 >= count 的虚拟下标（见 dist/index.es.js:5162-5178）。
 * 因此“存在性”必须用 index < getParameterCount() 判断。 */
export function listParameterIds(cm) {
  if (!isObj(cm)) return [];
  const fromIds = tryFn(() => {
    const ids = cm._parameterIds || (cm._model && cm._model.parameters && cm._model.parameters.ids);
    if (!ids) return null;
    return Array.from(ids).map((v) => (typeof v === 'string' ? v : (v && (v.s || v._$5S)) || '')).filter(Boolean);
  }, null);
  if (fromIds && fromIds.length) return fromIds;

  return tryFn(() => {
    const n = cm.getParameterCount ? cm.getParameterCount() : 0;
    const out = [];
    for (let i = 0; i < n; i++) {
      const id = cm.getParameterId ? cm.getParameterId(i) : '';
      if (id) out.push(id);
    }
    return out;
  }, []);
}

export function hasParameter(cm, id) {
  if (!id || !isObj(cm)) return false;
  if (typeof cm.getParameterIndex === 'function' && typeof cm.getParameterCount === 'function') {
    const n = tryFn(() => cm.getParameterCount(), 0);
    const idx = tryFn(() => cm.getParameterIndex(id), n);
    return idx >= 0 && idx < n;
  }
  const ids = listParameterIds(cm);
  return ids.includes(id);
}

/* ---------------- Groups ---------------- */

function readGroups(settings) {
  const raw = isObj(settings) ? settings.groups : null;
  const list = asArray(raw).filter(isObj).map((g) => {
    const name = str(g.Name || g.name);
    const ids = asArray(g.Ids || g.ids).map((x) => str(x)).filter(Boolean);
    return { name, ids };
  }).filter((g) => g.name);

  const find = (n) => list.find((g) => g.name.toLowerCase() === n.toLowerCase());
  return { list, lipSync: find('LipSync'), eyeBlink: find('EyeBlink') };
}

/* ---------------- HitAreas ---------------- */

function hitAreaNameId(def) {
  return {
    name: str(def.Name || def.name),
    id: str(def.Id || def.id),
  };
}

/* 从 coreModel 直接算某个 drawable 的包围盒（getDrawableBounds 不可用时的兜底） */
function coreDrawableBounds(cm, index) {
  return tryFn(() => {
    const v = cm.getTransformedPoints
      ? cm.getTransformedPoints(index)
      : (cm.getDrawableVertices ? cm.getDrawableVertices(index) : null);
    if (!v || !v.length) return null;
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (let i = 0; i < v.length; i += 2) {
      const x = v[i], y = v[i + 1];
      if (!Number.isFinite(x) || !Number.isFinite(y)) continue;
      if (x < x0) x0 = x; if (x > x1) x1 = x;
      if (y < y0) y0 = y; if (y > y1) y1 = y;
    }
    if (!Number.isFinite(x0)) return null;
    return { x: x0, y: y0, width: x1 - x0, height: y1 - y0 };
  }, null);
}

/* 包围盒 -> 模型自身画布的 0..1 坐标。
 *
 * 注意（已在 0.4.0 实测）：Cubism4InternalModel 覆盖了 getDrawableVertices()，
 * 返回值已经换算成「原始画布像素」（dist/index.es.js:4803-4814：
 *   arr[i] = arr[i] * pixelsPerUnit + originalWidth / 2
 *   arr[i+1] = -arr[i+1] * pixelsPerUnit + originalHeight / 2）
 * 因此这里**不能**再乘 localTransform（那是把逻辑坐标映射到画布的变换）。
 * Cubism2 的 getDrawableVertices() 同样以画布像素为单位，所以统一用
 * originalWidth / originalHeight 归一化即可。 */
function toUnitRect(bounds, im) {
  if (!bounds || !isObj(im)) return null;
  const w = Number(im.originalWidth) || Number(im.width) || 0;
  const h = Number(im.originalHeight) || Number(im.height) || 0;
  if (!(w > 0) || !(h > 0)) return null;
  return {
    x: +(bounds.x / w).toFixed(4),
    y: +(bounds.y / h).toFixed(4),
    w: +(bounds.width / w).toFixed(4),
    h: +(bounds.height / h).toFixed(4),
  };
}

function resolveDrawIndex(im, cm, name, id) {
  // 1) 库已经建好的 hitAreas 表。
  //    实测 0.4.0：Cubism4InternalModel 覆盖了 getHitAreaDefs()（dist/index.es.js:4789-4796），
  //    用大写的 Id/Name 与 coreModel.getDrawableIndex()，所以这张表对 Cubism4 是可用的；
  //    基类版本（:1818-1825）读小写 id/name，那是 Cubism2 路径。
  const idxByLib = tryFn(() => {
    const rec = im.hitAreas && (im.hitAreas[name] || im.hitAreas[id]);
    return rec && Number.isInteger(rec.index) ? rec.index : -1;
  }, -1);
  if (idxByLib >= 0) return { index: idxByLib, via: 'lib' };

  // 2) 自己按 Id 解析。Cubism4 的 coreModel 没有 getDrawDataIndex，
  //    要用 getDrawableIndex（基类 getHitAreaDefs 里的 getDrawDataIndex 只适用于 Cubism2）。
  const idx = tryFn(() => {
    if (im && typeof im.getDrawableIndex === 'function') return im.getDrawableIndex(id);
    if (cm && typeof cm.getDrawableIndex === 'function') return cm.getDrawableIndex(id);
    if (cm && typeof cm.getDrawDataIndex === 'function') return cm.getDrawDataIndex(id);
    return -1;
  }, -1);
  if (Number.isInteger(idx) && idx >= 0) return { index: idx, via: 'id' };

  return { index: -1, via: 'none' };
}

export function readHitAreas(model) {
  const out = [];
  const warnings = [];
  try {
    const im = isObj(model) ? model.internalModel : null;
    const cm = im && im.coreModel;
    const settings = im && im.settings;
    const defs = asArray(isObj(settings) ? (settings.hitAreas || settings.hit_areas) : null);

    for (const raw of defs) {
      if (!isObj(raw)) continue;
      const { name, id } = hitAreaNameId(raw);
      if (!name && !id) continue;

      const resolved = resolveDrawIndex(im, cm, name, id);
      let bounds = null;
      let geometrySource = 'none';

      if (resolved.index >= 0) {
        bounds = tryFn(() => (im.getDrawableBounds ? im.getDrawableBounds(resolved.index, {}) : null), null);
        if (bounds) geometrySource = 'computed';
        else {
          bounds = coreDrawableBounds(cm, resolved.index);
          if (bounds) geometrySource = 'computed';
        }
      }

      const unit = toUnitRect(bounds, im);

      let source;
      if (unit) source = 'computed';
      else if (resolved.index >= 0) source = 'estimated';  // 有 drawable 但算不出几何
      else source = 'declared';                            // 只有声明，没有几何

      if (!unit) {
        warnings.push('hitArea "' + (name || id) + '" 无法计算几何（drawable index=' + resolved.index + '）');
      }

      out.push({
        name: name || id,
        id: id || '',
        declared: true,
        source,
        geometrySource,
        drawIndex: resolved.index,
        resolvedVia: resolved.via,
        geometry: unit
          ? { unit, raw: { x: +bounds.x.toFixed(2), y: +bounds.y.toFixed(2), w: +bounds.width.toFixed(2), h: +bounds.height.toFixed(2) } }
          : null,
      });
    }
  } catch (e) {
    warnings.push('readHitAreas 异常: ' + (e && e.message));
  }
  return { hitAreas: out, warnings };
}

/* ---------------- Motions ---------------- */

function splitWords(name) {
  const s = String(name || '')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[^a-zA-Z0-9\u4e00-\u9fa5]+/g, ' ')
    .trim()
    .toLowerCase();
  return s ? s.split(/\s+/) : [];
}

export function readMotions(model) {
  const entries = [];
  const warnings = [];
  try {
    const im = isObj(model) ? model.internalModel : null;
    const defs = tryFn(() => (im.motionManager && im.motionManager.definitions) || (im.settings && im.settings.motions) || {}, {});
    const idleGroup = tryFn(() => im.motionManager.groups.idle, '');

    for (const group of Object.keys(defs || {})) {
      const list = asArray(defs[group]);
      const words = splitWords(group);
      const nameHint = words.join('');
      const isIdle = group === idleGroup || /^(idle|wait|loop)$/i.test(nameHint);
      for (let i = 0; i < list.length; i++) {
        const d = isObj(list[i]) ? list[i] : {};
        entries.push({
          group,
          index: i,
          file: str(d.File || d.file),
          idle: isIdle,
          nameHint,
          tags: words,
          // 语义一律 unknown：nameHint 只是线索，不能当成已确认语义
          semantic: 'unknown',
        });
      }
    }
  } catch (e) {
    warnings.push('readMotions 异常: ' + (e && e.message));
  }
  return { motions: entries, warnings };
}

/* --------- 用 motion3.json 的 Curves 反推参数写入集合（只读分析） --------- */

const FILE_CACHE = new Map();   // url -> string[] | null

async function defaultLoadJson(url, timeoutMs) {
  const ctrl = typeof AbortController === 'function' ? new AbortController() : null;
  const timer = ctrl ? setTimeout(() => ctrl.abort(), timeoutMs) : null;
  try {
    const r = await fetch(url, ctrl ? { signal: ctrl.signal } : undefined);
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return await r.json();
  } finally {
    if (timer) clearTimeout(timer);
  }
}

export async function scanMotionParameters(model, opts = {}) {
  const out = { byGroup: {}, byParam: {}, scanned: 0, failed: 0, skipped: 0, warnings: [] };
  const maxFiles = Number.isFinite(opts.maxMotionFiles) ? opts.maxMotionFiles : 40;
  const timeoutMs = Number.isFinite(opts.motionTimeoutMs) ? opts.motionTimeoutMs : 5000;
  const loadJson = typeof opts.loadMotionJson === 'function' ? opts.loadMotionJson : defaultLoadJson;

  try {
    const im = isObj(model) ? model.internalModel : null;
    const defs = tryFn(() => (im.motionManager && im.motionManager.definitions) || (im.settings && im.settings.motions) || {}, {});
    const resolveURL = (file) => tryFn(() => (im.settings.resolveURL ? im.settings.resolveURL(file) : file), file);

    const jobs = [];
    for (const group of Object.keys(defs || {})) {
      asArray(defs[group]).forEach((d, i) => {
        const file = str(isObj(d) ? (d.File || d.file) : '');
        if (file) jobs.push({ group, index: i, file, url: resolveURL(file) });
      });
    }

    if (jobs.length > maxFiles) {
      out.skipped = jobs.length - maxFiles;
      out.warnings.push('动作文件过多（' + jobs.length + '），只扫描前 ' + maxFiles + ' 个');
      jobs.length = maxFiles;
    }

    const results = new Array(jobs.length);
    let cursor = 0;
    const concurrency = Math.max(1, Math.min(4, Number(opts.concurrency) || 4));

    async function worker() {
      while (cursor < jobs.length) {
        const k = cursor++;
        const job = jobs[k];
        try {
          let params = FILE_CACHE.get(job.url);
          if (params === undefined) {
            const json = await loadJson(job.url, timeoutMs);
            const curves = asArray(json && json.Curves);
            params = curves
              .filter((c) => normTarget(c && c.Target) === 'parameter')
              .map((c) => str(c && c.Id))
              .filter(Boolean);
            FILE_CACHE.set(job.url, params);
          }
          results[k] = params;
        } catch (e) {
          results[k] = null;
          out.failed++;
          if (out.warnings.length < 8) out.warnings.push('motion 读取失败 ' + job.file + ': ' + (e && e.message));
        }
      }
    }

    await Promise.all(Array.from({ length: concurrency }, worker));

    jobs.forEach((job, k) => {
      const params = results[k];
      if (!params) return;
      out.scanned++;
      const key = job.group;
      out.byGroup[key] = out.byGroup[key] || {};
      out.byGroup[key][job.index] = params;
      for (const p of params) {
        out.byParam[p] = out.byParam[p] || [];
        if (!out.byParam[p].includes(key + '#' + job.index)) out.byParam[p].push(key + '#' + job.index);
      }
    });
  } catch (e) {
    out.warnings.push('scanMotionParameters 异常: ' + (e && e.message));
  }
  return out;
}

function normTarget(t) {
  return String(t || '').toLowerCase();
}

/* ---------------- 通道拼装 ---------------- */

const KNOWN_CHANNELS = [
  'headX', 'headY', 'headZ', 'bodyX', 'bodyY', 'bodyZ',
  'eyeL', 'eyeR', 'eyeSmile', 'browY', 'browAngle',
  'gazeX', 'gazeY', 'mouthOpen', 'mouthForm', 'mouthUp', 'mouthDown',
  'cheek', 'breath', 'angry', 'hair', 'armL', 'armR',
];

function classifyLipSyncId(id) {
  const n = normParam(id);
  if (/^(a|i|u|e|o)$/.test(n)) return { viseme: n.toUpperCase() };
  if (/mouthopen/.test(n)) return { channel: 'mouthOpen' };
  if (/mouthform/.test(n)) return { channel: 'mouthForm' };
  return {};
}

function classifyEyeBlinkId(id) {
  const n = normParam(id);
  if (/eyelopen|eyeleftopen/.test(n)) return 'eyeL';
  if (/eyeropen|eyerightopen/.test(n)) return 'eyeR';
  if (/eyeopen/.test(n)) return 'eyeL';
  return '';
}

/* 读取参数的取值范围/默认值：close_eyes 这类动作必须知道方向，
 * 不能一律"加正值"（EyeOpen 默认 1，闭嘴是 0）。 */
export function paramMeta(cm, id) {
  if (!id || !isObj(cm)) return null;
  return tryFn(() => {
    if (typeof cm.getParameterIndex !== 'function' || typeof cm.getParameterCount !== 'function') return null;
    const n = cm.getParameterCount();
    const idx = cm.getParameterIndex(id);
    // 0.4.0 对不存在的参数会返回 >= count 的虚拟下标，必须夹住
    if (!(idx >= 0 && idx < n)) return null;
    const min = cm.getParameterMinimumValue ? cm.getParameterMinimumValue(idx) : undefined;
    const max = cm.getParameterMaximumValue ? cm.getParameterMaximumValue(idx) : undefined;
    const def = cm.getParameterDefaultValue ? cm.getParameterDefaultValue(idx) : undefined;
    return {
      min: Number.isFinite(min) ? min : null,
      max: Number.isFinite(max) ? max : null,
      default: Number.isFinite(def) ? def : null,
    };
  }, null);
}

function buildChannels({ groups, rig, cm, warnings }) {
  const channels = {};
  const channelSources = {};
  const channelMeta = {};
  const visemes = {};
  let visemeSource = '';

  const set = (key, id, source) => {
    if (!id) return;
    if (!hasParameter(cm, id)) {
      warnings.push('通道 ' + key + ' 指向不存在的参数 "' + id + '"（来源 ' + source + '），已丢弃');
      return;
    }
    if (!channels[key]) {
      channels[key] = id;
      channelSources[key] = source;
      channelMeta[key] = paramMeta(cm, id);
    }
  };

  // 1) 声明优先：LipSync / EyeBlink
  if (groups.lipSync) {
    for (const id of groups.lipSync.ids) {
      const c = classifyLipSyncId(id);
      if (c.viseme) {
        // 音素参数同样要校验存在性：模型删过参数时不能把幽灵 ID 写进能力描述
        if (!hasParameter(cm, id)) {
          warnings.push('音素参数 "' + id + '" 不存在（来源 group:LipSync），已丢弃');
        } else if (!visemes[c.viseme]) {
          visemes[c.viseme] = id;
          visemeSource = visemeSource || 'group:LipSync';
        }
      }
      if (c.channel) set(c.channel, id, 'group:LipSync');
    }
    // 声明组里的第一个参数作为通用口型驱动（例：Mao 的 ParamA、Hiyori 的 ParamMouthOpenY）
    if (!channels.mouthOpen && groups.lipSync.ids.length) {
      set('mouthOpen', groups.lipSync.ids[0], 'group:LipSync');
    }
  }
  if (groups.eyeBlink) {
    for (const id of groups.eyeBlink.ids) {
      const ch = classifyEyeBlinkId(id);
      if (ch) set(ch, id, 'group:EyeBlink');
    }
  }

  // 2) rig.js 的识别结果补位
  const rigMap = isObj(rig) && isObj(rig.map) ? rig.map : {};
  for (const key of KNOWN_CHANNELS) {
    if (channels[key]) continue;
    const id = rigMap[key];
    if (typeof id === 'string' && id) {
      const how = (rig.report && Array.isArray(rig.report.details))
        ? (rig.report.details.find((d) => d && d.id === id) || {}).how
        : '';
      set(key, id, how ? 'rig:' + how : 'rig');
    }
  }
  if (!Object.keys(visemes).length && isObj(rigMap.visemes)) {
    for (const k of Object.keys(rigMap.visemes)) {
      const id = rigMap.visemes[k];
      if (id && hasParameter(cm, id)) { visemes[k] = id; visemeSource = visemeSource || 'rig:viseme'; }
    }
  }

  return {
    channels,
    channelSources,
    channelMeta,
    visemes: Object.keys(visemes).length ? visemes : null,
    visemeSource,
  };
}

/* ---------------- 主入口 ---------------- */

export async function buildCapability(model, rig, opts = {}) {
  const started = Date.now();
  const warnings = [];
  const errors = [];

  const cap = {
    schema: SCHEMA,
    ok: false,
    kind: 'live2d',
    model: { name: '', url: '', runtime: 'unknown' },
    channels: {},
    channelSources: {},
    channelMeta: {},
    visemes: null,
    visemeSource: '',
    expressions: [],
    motions: [],
    hitAreas: [],
    poses: {},
    physics: false,
    quality: null,
    touch: { source: 'none', count: 0 },
    parameterUsage: { byGroup: {}, byParam: {}, scanned: 0, failed: 0, skipped: 0 },
    diagnostics: { warnings, errors, ms: 0, options: { scanMotions: opts.scanMotions !== false } },
    generatedAt: new Date().toISOString(),
  };

  try {
    if (!isObj(model) || !isObj(model.internalModel)) {
      errors.push('model 无效：缺少 internalModel');
      cap.diagnostics.ms = Date.now() - started;
      return cap;
    }

    const im = model.internalModel;
    const cm = im.coreModel;
    const settings = im.settings;

    cap.model.name = str(settings && settings.name) || str(model.tag) || '';
    cap.model.url = str(settings && settings.url);
    cap.model.runtime = isObj(settings) && settings.groups ? 'cubism4' : (isObj(settings) && settings.hit_areas ? 'cubism2' : 'unknown');

    const groups = readGroups(settings);
    if (!groups.list.length) warnings.push('model3.json 未声明 Groups（LipSync/EyeBlink）');

    const { channels, channelSources, channelMeta, visemes, visemeSource } = buildChannels({ groups, rig, cm, warnings });
    cap.channels = channels;
    cap.channelSources = channelSources;
    cap.channelMeta = channelMeta;
    // 视线跟随能力：眼球优先，其次头部；都没有就明确告知（不再静默失败）
    cap.gaze = {
      eye: !!(channels.gazeX || channels.gazeY),
      head: !!(channels.headX || channels.headY || channels.headZ),
      mouth: !!channels.mouthOpen,
      mode: (channels.gazeX || channels.gazeY) ? 'eye'
        : ((channels.headX || channels.headY || channels.headZ) ? 'head' : 'none'),
    };
    cap.visemes = visemes;
    cap.visemeSource = visemeSource;

    // 表达式
    const exprDefs = asArray(settings && settings.expressions);
    cap.expressions = exprDefs.map((e, i) => ({
      name: str(e && (e.Name || e.name)),
      index: i,
      file: str(e && (e.File || e.file)),
      tags: splitWords(str(e && (e.Name || e.name))),
    })).filter((e) => e.name);
    if (!cap.expressions.length) warnings.push('模型没有表情文件');

    // 动作
    const mo = readMotions(model);
    cap.motions = mo.motions;
    warnings.push(...mo.warnings);
    if (!cap.motions.length) warnings.push('模型没有动作组');

    // 触摸区
    const ha = readHitAreas(model);
    cap.hitAreas = ha.hitAreas;
    warnings.push(...ha.warnings);
    cap.touch = ha.hitAreas.length
      ? { source: ha.hitAreas.some((h) => h.source === 'computed') ? 'hitarea' : 'declared', count: ha.hitAreas.length }
      : { source: 'none', count: 0 };

    // rig 结果（可缺省）
    // 姿态统一输出为对象（{wave:true, hug:true, ...}），与 resolve.js 的消费方式一致。
    // 之前输出数组，导致 resolve 里 Object.keys(poses) 变成 "0","1"，永远匹配不到。
    cap.poses = {};
    if (isObj(rig) && isObj(rig.poses)) {
      for (const key of Object.keys(rig.poses)) cap.poses[key] = true;
    }
    cap.physics = !!(im.physics);
    cap.quality = isObj(rig) && isObj(rig.health)
      ? { score: rig.health.score, items: rig.health.items, actions: rig.health.actions }
      : null;

    // 动作参数写入集合（只读分析，供未来仲裁）
    if (opts.scanMotions !== false) {
      const scan = await scanMotionParameters(model, opts);
      cap.parameterUsage = {
        byGroup: scan.byGroup,
        byParam: scan.byParam,
        scanned: scan.scanned,
        failed: scan.failed,
        skipped: scan.skipped,
      };
      warnings.push(...scan.warnings);
    }

    cap.ok = true;
  } catch (e) {
    errors.push('buildCapability 异常: ' + (e && e.message ? e.message : String(e)));
  }

  cap.diagnostics.warnings = warnings;
  cap.diagnostics.errors = errors;
  cap.diagnostics.ms = Date.now() - started;
  return cap;
}

/* 供日志/报告用的一行摘要 */
export function summarize(cap) {
  if (!cap) return 'capability: null';
  if (!cap.ok) return 'capability: FAILED (' + (cap.diagnostics.errors[0] || 'unknown') + ')';
  const ch = Object.keys(cap.channels).length;
  return [
    'capability ' + (cap.model.name || '?'),
    'channels=' + ch,
    'visemes=' + (cap.visemes ? Object.keys(cap.visemes).length : 0),
    'motions=' + cap.motions.length,
    'expressions=' + cap.expressions.length,
    'hitAreas=' + cap.hitAreas.length,
    'touch=' + cap.touch.source,
    'paramsScanned=' + cap.parameterUsage.scanned,
  ].join(' ');
}
