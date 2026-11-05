/* body/regions.js —— V3 统一身体区域标准（纯逻辑，可 Node 测）
 *
 * 约定：
 *   - 区域 id 使用“角色解剖学左右”：left_* 是角色的左手/左腿（画面上通常在右侧）。
 *   - 几何统一为归一化坐标 (x,y,w,h) 或 polygon [[x,y],...]，0..1，y 向下。
 *   - space='model' 时相对当前角色可见框；space='stage' 时相对整个画面。
 *     场景型 Live2D（整张 CG）用 stage，普通立绘/模型用 model。
 *   - 只是识别结果，不是事实；source/confidence 必须保留，允许手动覆盖。
 */

export const SCHEMA = 'body-regions/1';

const R = (id, label, group, side, priority, rect, sensitive = false) => ({
  id, label, group, side, priority, rect, sensitive,
});

/* 默认人体比例。数值仅用于“没有 HitArea 时的第一版推测”，全部可编辑。 */
export const REGION_CATALOG = [
  R('head_top', '头顶', 'head', '', 58, [0.30, 0.000, 0.40, 0.060]),
  R('hair', '头发', 'head', '', 40, [0.22, 0.015, 0.56, 0.100]),
  R('forehead', '额头', 'face', '', 64, [0.30, 0.080, 0.40, 0.060]),
  R('eyes', '眼睛', 'face', '', 76, [0.28, 0.150, 0.44, 0.060], true),
  R('left_cheek', '左脸颊', 'face', 'L', 72, [0.57, 0.175, 0.14, 0.065], true),
  R('right_cheek', '右脸颊', 'face', 'R', 72, [0.29, 0.175, 0.14, 0.065], true),
  R('left_ear', '左耳', 'face', 'L', 68, [0.72, 0.165, 0.060, 0.070], true),
  R('right_ear', '右耳', 'face', 'R', 68, [0.22, 0.165, 0.060, 0.070], true),
  R('mouth', '嘴部', 'face', '', 78, [0.43, 0.235, 0.14, 0.050], true),
  R('face', '面部（整体）', 'face', '', 22, [0.24, 0.070, 0.52, 0.220]),
  R('neck', '脖颈', 'neck', '', 62, [0.42, 0.285, 0.16, 0.055], true),
  R('left_shoulder', '左肩', 'arm', 'L', 60, [0.62, 0.315, 0.23, 0.065]),
  R('right_shoulder', '右肩', 'arm', 'R', 60, [0.15, 0.315, 0.23, 0.065]),
  R('chest', '胸前', 'torso', '', 54, [0.34, 0.350, 0.32, 0.120], true),
  R('belly', '腹部', 'torso', '', 52, [0.37, 0.460, 0.26, 0.095], true),
  R('waist', '腰部', 'torso', '', 56, [0.35, 0.545, 0.30, 0.065], true),
  R('hips', '臀部', 'torso', '', 58, [0.31, 0.600, 0.38, 0.090], true),
  R('left_upper_arm', '左上臂', 'arm', 'L', 66, [0.755, 0.340, 0.125, 0.280]),
  R('right_upper_arm', '右上臂', 'arm', 'R', 66, [0.120, 0.340, 0.125, 0.280]),
  R('left_hand', '左手', 'arm', 'L', 74, [0.790, 0.610, 0.120, 0.095], true),
  R('right_hand', '右手', 'arm', 'R', 74, [0.090, 0.610, 0.120, 0.095], true),
  R('left_thigh', '左大腿', 'leg', 'L', 62, [0.525, 0.675, 0.145, 0.135]),
  R('right_thigh', '右大腿', 'leg', 'R', 62, [0.330, 0.675, 0.145, 0.135]),
  R('left_knee', '左膝', 'leg', 'L', 64, [0.530, 0.800, 0.130, 0.055]),
  R('right_knee', '右膝', 'leg', 'R', 64, [0.340, 0.800, 0.130, 0.055]),
  R('left_calf', '左小腿', 'leg', 'L', 62, [0.535, 0.845, 0.115, 0.095]),
  R('right_calf', '右小腿', 'leg', 'R', 62, [0.350, 0.845, 0.115, 0.095]),
  R('left_foot', '左脚', 'foot', 'L', 68, [0.535, 0.930, 0.145, 0.070], true),
  R('right_foot', '右脚', 'foot', 'R', 68, [0.330, 0.930, 0.145, 0.070], true),
];

export const REGION_BY_ID = Object.freeze(
  Object.fromEntries(REGION_CATALOG.map((r) => [r.id, Object.freeze({ ...r })])),
);

export const REGION_IDS = Object.freeze(REGION_CATALOG.map((r) => r.id));

const ALIASES = {
  head: 'head_top', headtop: 'head_top', top: 'head_top', hair: 'hair',
  forehead: 'forehead', face: 'face', eyes: 'eyes', eye: 'eyes', mouth: 'mouth',
  cheekl: 'left_cheek', cheekr: 'right_cheek', leftcheek: 'left_cheek', rightcheek: 'right_cheek',
  earl: 'left_ear', earr: 'right_ear', leftear: 'left_ear', rightear: 'right_ear',
  neck: 'neck', throat: 'neck',
  shoulderl: 'left_shoulder', shoulderr: 'right_shoulder', leftshoulder: 'left_shoulder',
  rightshoulder: 'right_shoulder', chest: 'chest', breast: 'chest', bust: 'chest',
  belly: 'belly', stomach: 'belly', abdomen: 'belly', waist: 'waist',
  hip: 'hips', hips: 'hips', butt: 'hips', buttocks: 'hips', pelvis: 'hips',
  arml: 'left_upper_arm', armr: 'right_upper_arm', leftarm: 'left_upper_arm',
  rightarm: 'right_upper_arm', upperarml: 'left_upper_arm', upperarmr: 'right_upper_arm',
  handl: 'left_hand', handr: 'right_hand', lefthand: 'left_hand', righthand: 'right_hand',
  thighl: 'left_thigh', thighr: 'right_thigh', leftthigh: 'left_thigh', rightthigh: 'right_thigh',
  kneel: 'left_knee', kneer: 'right_knee', leftknee: 'left_knee', rightknee: 'right_knee',
  calfl: 'left_calf', calfr: 'right_calf', leftcalf: 'left_calf', rightcalf: 'right_calf',
  footl: 'left_foot', footr: 'right_foot', leftfoot: 'left_foot', rightfoot: 'right_foot',
  legl: 'left_thigh', legr: 'right_thigh', leftleg: 'left_thigh', rightleg: 'right_thigh',
  // 中文常见标签
  '头顶': 'head_top', '头发': 'hair', '额头': 'forehead', '脸': 'face', '面部': 'face',
  '眼睛': 'eyes', '嘴': 'mouth', '嘴巴': 'mouth', '脖子': 'neck', '脖颈': 'neck',
  '左脸': 'left_cheek', '右脸': 'right_cheek', '左脸颊': 'left_cheek', '右脸颊': 'right_cheek',
  '左耳': 'left_ear', '右耳': 'right_ear', '左肩': 'left_shoulder', '右肩': 'right_shoulder',
  '胸': 'chest', '胸前': 'chest', '肚子': 'belly', '腹部': 'belly', '腰': 'waist', '腰部': 'waist',
  '屁股': 'hips', '臀部': 'hips', '左臂': 'left_upper_arm', '右臂': 'right_upper_arm',
  '左上臂': 'left_upper_arm', '右上臂': 'right_upper_arm', '左手': 'left_hand', '右手': 'right_hand',
  '左大腿': 'left_thigh', '右大腿': 'right_thigh', '左膝': 'left_knee', '右膝': 'right_knee',
  '左小腿': 'left_calf', '右小腿': 'right_calf', '左脚': 'left_foot', '右脚': 'right_foot',
};

const clamp01 = (v) => Math.max(0, Math.min(1, Number(v) || 0));

export function normalizeRegionId(raw, side) {
  let s = String(raw || '').trim().toLowerCase();
  if (!s) return '';
  s = s.replace(/^(hitarea|touch|body|region)[_\-:/]*/i, '');
  s = s.replace(/[^a-z0-9\u4e00-\u9fa5]/g, '');
  if (REGION_BY_ID[s]) return s;
  if (ALIASES[s]) return ALIASES[s];
  // head01 / armr2 之类
  const numless = s.replace(/\d+$/, '');
  if (REGION_BY_ID[numless]) return numless;
  if (ALIASES[numless]) return ALIASES[numless];
  // left / right + 通用部位
  const sideKey = side === 'L' ? 'left' : side === 'R' ? 'right' : '';
  if (sideKey) {
    const withSide = sideKey + numless;
    if (REGION_BY_ID[withSide]) return withSide;
    if (ALIASES[withSide]) return ALIASES[withSide];
  }
  if (numless === 'arm') return side === 'L' ? 'left_upper_arm' : side === 'R' ? 'right_upper_arm' : '';
  if (numless === 'hand') return side === 'L' ? 'left_hand' : side === 'R' ? 'right_hand' : '';
  if (numless === 'thigh' || numless === 'leg') return side === 'L' ? 'left_thigh' : side === 'R' ? 'right_thigh' : '';
  if (numless === 'knee') return side === 'L' ? 'left_knee' : side === 'R' ? 'right_knee' : '';
  if (numless === 'calf') return side === 'L' ? 'left_calf' : side === 'R' ? 'right_calf' : '';
  if (numless === 'foot') return side === 'L' ? 'left_foot' : side === 'R' ? 'right_foot' : '';
  return '';
}

export function labelOf(id) {
  return (REGION_BY_ID[id] && REGION_BY_ID[id].label) || String(id || '身体');
}

export function groupOf(id) {
  return (REGION_BY_ID[id] && REGION_BY_ID[id].group) || 'custom';
}

export function isSensitive(id) {
  return !!(REGION_BY_ID[id] && REGION_BY_ID[id].sensitive);
}

function clampRect(rect) {
  if (!Array.isArray(rect) || rect.length < 4) return [0, 0, 0, 0];
  let [x, y, w, h] = rect.map((v) => Number(v) || 0);
  x = clamp01(x); y = clamp01(y);
  w = Math.max(0, Math.min(w, 1 - x));
  h = Math.max(0, Math.min(h, 1 - y));
  return [x, y, w, h].map((v) => +v.toFixed(4));
}

function clampPoly(points) {
  if (!Array.isArray(points)) return [];
  const out = [];
  for (const p of points) {
    if (!Array.isArray(p) || p.length < 2) continue;
    out.push([+clamp01(p[0]).toFixed(4), +clamp01(p[1]).toFixed(4)]);
  }
  return out.length >= 3 ? out : [];
}

export function makeRegion(id, shape, opts = {}) {
  const meta = REGION_BY_ID[id] || {};
  const isPoly = shape && shape.shape === 'poly';
  const points = isPoly ? clampPoly(shape.points) : null;
  const rect = isPoly ? null : clampRect(shape && (shape.rect || shape));
  const area = isPoly ? Math.abs(polyArea(points)) : (rect ? rect[2] * rect[3] : 0);
  if (!(area > 1e-6)) return null;
  return {
    id,
    label: opts.label || meta.label || '自定义区域',
    group: opts.group || meta.group || 'custom',
    side: opts.side !== undefined ? opts.side : (meta.side || ''),
    shape: isPoly ? 'poly' : 'rect',
    ...(isPoly ? { points } : { rect }),
    priority: Number.isFinite(Number(opts.priority)) ? Math.max(0, Math.min(100, Number(opts.priority))) : (meta.priority || 50),
    confidence: Number.isFinite(Number(opts.confidence)) ? clamp01(opts.confidence) : 1,
    source: opts.source || 'manual',
    visible: opts.visible !== false,
    sensitive: opts.sensitive !== undefined ? !!opts.sensitive : !!meta.sensitive,
  };
}

function polyArea(points) {
  let a = 0;
  for (let i = 0; i < points.length; i++) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[(i + 1) % points.length];
    a += x1 * y2 - x2 * y1;
  }
  return a / 2;
}

export function autoRegions(opts = {}) {
  const source = opts.source || 'auto';
  const conf = Number.isFinite(Number(opts.confidence)) ? Number(opts.confidence) : 0.34;
  return REGION_CATALOG.map((r) => makeRegion(r.id, {
    shape: 'rect', rect: r.rect,
  }, { priority: r.priority, confidence: conf, source, sensitive: r.sensitive })).filter(Boolean);
}

/* 把模型声明的 HitArea（unit 画布坐标）换算到角色可见框内的 0..1 坐标。
 * bbox 单位与 hitArea geometry 相同（模型原始画布像素），opts 提供画布尺寸。 */
export function mapHitArea(hit, bbox, opts = {}) {
  if (!hit || !hit.geometry || !hit.geometry.unit || !bbox) return null;
  const canvasW = Number(opts.canvasW || 0);
  const canvasH = Number(opts.canvasH || 0);
  if (!(canvasW > 0) || !(canvasH > 0)) return null;
  const u = hit.geometry.unit;
  const bx0 = bbox.x0 / canvasW;
  const by0 = bbox.y0 / canvasH;
  const bw = Math.max(1e-6, (bbox.x1 - bbox.x0) / canvasW);
  const bh = Math.max(1e-6, (bbox.y1 - bbox.y0) / canvasH);
  const name = String(hit.name || hit.id || '');
  const side = /left|_l$|l$/i.test(name) ? 'L' : (/right|_r$|r$/i.test(name) ? 'R' : '');
  const id = normalizeRegionId(name, side);
  if (!id) return null;
  const meta = REGION_BY_ID[id] || {};
  const rect = [
    (u.x - bx0) / bw,
    (u.y - by0) / bh,
    u.w / bw,
    u.h / bh,
  ];
  // 太宽的 HitArea（整头/全身）不直接当细区域，避免盖掉自动细分
  if (rect[2] > 0.75 && rect[3] > 0.30) return null;
  return makeRegion(id, { shape: 'rect', rect }, {
    priority: (meta.priority || 50) + 10,
    confidence: 0.85,
    source: 'hitarea',
  });
}

export function createConfig(opts = {}) {
  return {
    schema: SCHEMA,
    modelId: String(opts.modelId || ''),
    updatedAt: Date.now(),
    space: opts.space === 'stage' ? 'stage' : 'model',
    regions: Array.isArray(opts.regions) ? opts.regions.map((r) => normalizeRegion(r)).filter(Boolean) : [],
    hints: opts.hints && typeof opts.hints === 'object' ? opts.hints : {},
  };
}

export function normalizeRegion(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const id = normalizeRegionId(raw.id || raw.label, raw.side);
  if (!id && !raw.label) return null;
  const finalId = id || String(raw.id || 'custom').replace(/[^a-z0-9_\-]/gi, '').slice(0, 40) || 'custom';
  const shape = raw.shape === 'poly' || Array.isArray(raw.points)
    ? { shape: 'poly', points: raw.points }
    : { shape: 'rect', rect: raw.rect || raw.box || [raw.x, raw.y, raw.w, raw.h] };
  return makeRegion(finalId, shape, {
    label: raw.label,
    group: raw.group,
    side: raw.side,
    priority: raw.priority,
    confidence: raw.confidence,
    source: raw.source || 'manual',
    visible: raw.visible,
    sensitive: raw.sensitive,
  });
}

export function normalizeConfig(raw, opts = {}) {
  const src = raw && typeof raw === 'object' ? raw : {};
  return {
    schema: SCHEMA,
    modelId: String(opts.modelId || src.modelId || ''),
    updatedAt: Number(src.updatedAt) || Date.now(),
    space: src.space === 'stage' ? 'stage' : 'model',
    regions: (Array.isArray(src.regions) ? src.regions : []).map((r) => normalizeRegion(r)).filter(Boolean),
    hints: src.hints && typeof src.hints === 'object' ? src.hints : {},
  };
}

export function pointInRegion(region, x, y) {
  if (!region || region.visible === false) return false;
  if (region.shape === 'poly' && Array.isArray(region.points)) {
    let inside = false;
    const pts = region.points;
    for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
      const [xi, yi] = pts[i], [xj, yj] = pts[j];
      if (((yi > y) !== (yj > y)) && (x < ((xj - xi) * (y - yi)) / (yj - yi) + xi)) inside = !inside;
    }
    return inside;
  }
  const r = region.rect;
  if (!Array.isArray(r)) return false;
  return x >= r[0] && x <= r[0] + r[2] && y >= r[1] && y <= r[1] + r[3];
}

export function regionArea(region) {
  if (!region) return 0;
  if (region.shape === 'poly') return Math.abs(polyArea(region.points || []));
  const r = region.rect || [0, 0, 0, 0];
  return r[2] * r[3];
}

export function hitTest(config, x, y, opts = {}) {
  const c = normalizeConfig(config);
  const list = c.regions.filter((r) => r.visible !== false && pointInRegion(r, x, y));
  list.sort((a, b) => {
    const sourceRank = (s) => s === 'manual' ? 2 : s === 'hitarea' ? 1 : 0;
    return (b.priority - a.priority) || (sourceRank(b.source) - sourceRank(a.source)) || (regionArea(a) - regionArea(b));
  });
  if (!list.length) {
    return { id: 'body', label: '身体', group: 'body', side: '', confidence: 0, source: 'fallback', priority: 0, shape: null };
  }
  const r = list[0];
  return { ...r, confidence: Number(r.confidence) || 0 };
}

/* 把 stage 坐标转为 config 空间坐标 */
export function toConfigPoint(config, point, frame, viewport) {
  const space = config && config.space === 'stage' ? 'stage' : 'model';
  if (space === 'stage') {
    const w = Math.max(1, (viewport && viewport.width) || 1);
    const h = Math.max(1, (viewport && viewport.height) || 1);
    return { x: point.x / w, y: point.y / h, space };
  }
  const f = frame || { x: 0, y: 0, w: viewport && viewport.width || 1, h: viewport && viewport.height || 1 };
  return { x: (point.x - f.x) / Math.max(1, f.w), y: (point.y - f.y) / Math.max(1, f.h), space };
}

/* 把 config 坐标转成 stage 坐标，供编辑器/遮罩绘制 */
export function toStagePoint(config, point, frame, viewport) {
  const space = config && config.space === 'stage' ? 'stage' : 'model';
  if (space === 'stage') {
    const w = Math.max(1, (viewport && viewport.width) || 1);
    const h = Math.max(1, (viewport && viewport.height) || 1);
    return { x: point[0] * w, y: point[1] * h };
  }
  const f = frame || { x: 0, y: 0, w: viewport && viewport.width || 1, h: viewport && viewport.height || 1 };
  return { x: f.x + point[0] * f.w, y: f.y + point[1] * f.h };
}

export function regionSummary(config) {
  const c = normalizeConfig(config);
  const byGroup = {};
  for (const r of c.regions) {
    const g = r.group || 'custom';
    byGroup[g] = (byGroup[g] || 0) + 1;
  }
  return {
    count: c.regions.length,
    visible: c.regions.filter((r) => r.visible !== false).length,
    groups: byGroup,
    space: c.space,
    source: (() => {
      const set = new Set(c.regions.map((r) => r.source || 'manual'));
      if (!set.size) return 'none';
      return set.size === 1 ? [...set][0] : 'mixed';
    })(),
  };
}
