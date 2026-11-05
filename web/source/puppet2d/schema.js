/* puppet2d/schema.js —— 小栞统一 Puppet2D 资产格式 `aicompanion-puppet/2`
 *
 * 这是资产导入/校验层，不解析 PSD。PSD/see-through 的产物应先转成该格式：
 * manifest + layers（PNG/WebP 或 data URL）+ pivots/mesh/physics/touch。
 * 所有路径必须位于资产包内；禁止 ../ / 绝对路径 / 反斜杠。
 */

export const PUPPET_SCHEMA = 'aicompanion-puppet/2';
export const PUPPET_ROLES = [
  'body', 'chest', 'waist', 'hips', 'arm_l', 'arm_r', 'leg_l', 'leg_r',
  'head', 'face', 'eye_l', 'eye_r', 'eye_close_l', 'eye_close_r',
  'iris_l', 'iris_r', 'brow_l', 'brow_r', 'mouth', 'mouth_open', 'mouth_close',
  'hair_back', 'hair_front', 'hair_side_l', 'hair_side_r', 'accessory', 'background',
];

const safeSrc = (s) => {
  s = String(s || '');
  if (!s) return false;
  if (/^data:image\/(png|webp|jpeg);base64,[a-z0-9+/=]+$/i.test(s)) return true;
  return safeArchivePath(s) && /\.(png|webp|jpg|jpeg)$/i.test(s);
};

export function validatePuppetAsset(asset) {
  const errors = [], warnings = [];
  if (!asset || typeof asset !== 'object') return { ok: false, errors: ['不是对象'], warnings };
  if (asset.schema !== PUPPET_SCHEMA) errors.push('schema 必须是 ' + PUPPET_SCHEMA);
  if (!asset.id || !/^[a-z0-9_.-]{1,64}$/i.test(asset.id)) errors.push('id 非法');
  const c = asset.canvas || {};
  if (!Number.isInteger(c.w) || !Number.isInteger(c.h) || c.w < 1 || c.h < 1 || c.w > 16384 || c.h > 16384 || c.w * c.h > 24000000) errors.push('canvas 尺寸非法');
  if (!Array.isArray(asset.layers) || !asset.layers.length) errors.push('没有 layers');
  const ids = new Set();
  if (asset.layers?.length > 200) errors.push('图层数量超过上限');
  for (const l of Array.isArray(asset.layers) ? asset.layers : []) {
    if (!l || typeof l !== 'object') { errors.push('layer 不是对象'); continue; }
    if (!l.id || ids.has(l.id)) errors.push('layer id 缺失/重复: ' + l.id);
    ids.add(l.id);
    if (!PUPPET_ROLES.includes(l.role)) warnings.push('未知 role: ' + l.role);
    if (!safeSrc(l.src)) errors.push('layer 路径不安全/不是图片: ' + l.id);
    if (l.parent && !ids.has(l.parent)) warnings.push('parent 尚未出现: ' + l.parent);
    if (l.z !== undefined && !Number.isFinite(l.z)) errors.push('z 非法: ' + l.id);
    for (const k of ['left', 'top', 'w', 'h']) if (l[k] !== undefined && !Number.isFinite(l[k])) errors.push(k + ' 非法: ' + l.id);
    if (!(l.w > 0 && l.h > 0) || l.w > 16384 || l.h > 16384 || l.w * l.h > 24000000) errors.push('图层尺寸非法: ' + l.id);
    if (l.pivot && (!Array.isArray(l.pivot) || l.pivot.length !== 2 || !l.pivot.every(Number.isFinite))) errors.push('pivot 非法: ' + l.id);
    if (l.mesh && (!Number.isInteger(l.mesh.cols) || !Number.isInteger(l.mesh.rows) || l.mesh.cols < 2 || l.mesh.rows < 2 || l.mesh.cols * l.mesh.rows > 4096)) errors.push('mesh 非法: ' + l.id);
  }
  const all = Array.isArray(asset.layers) ? asset.layers.filter(l=>l && typeof l === 'object') : [];
  const byId = new Map(all.map(l => [l.id, l]));
  for (const l of all) {
    if (l.parent && !ids.has(l.parent)) errors.push('parent 不存在: ' + l.parent);
    const seen = new Set([l.id]);
    let parent = l.parent;
    while (parent && byId.has(parent)) {
      if (seen.has(parent)) { errors.push('parent 循环: ' + l.id); break; }
      seen.add(parent); parent = byId.get(parent).parent;
    }
  }
  return { ok: errors.length === 0, errors, warnings };
}

export function normalizeAsset(asset) {
  const out = JSON.parse(JSON.stringify(asset));
  out.schema = PUPPET_SCHEMA;
  out.version = 2;
  out.layers = (out.layers || []).map((l, i) => ({
    ...l,
    id: String(l.id || 'layer' + i), role: l.role || 'body', src: l.src,
    z: Number(l.z || 0), left: Number(l.left || 0), top: Number(l.top || 0),
    w: Number(l.w || out.canvas.w), h: Number(l.h || out.canvas.h),
    pivot: Array.isArray(l.pivot) ? l.pivot.map(Number) : [0, 0],
    parent: l.parent || null, visible: l.visible !== false,
    variantOf: l.variantOf || null,
  }));
  out.capabilities = { head: false, eyes: false, mouth: false, arms: false, legs: false, hair: false, chest: false };
  for (const l of out.layers) {
    if (/^(head|face)$/.test(l.role)) out.capabilities.head = true;
    if (/^arm_/.test(l.role)) out.capabilities.arms = true;
    if (/^leg_/.test(l.role)) out.capabilities.legs = true;
    if (/^hair_/.test(l.role)) out.capabilities.hair = true;
    if (/^(chest|waist|body)$/.test(l.role)) out.capabilities.chest = true;
  }
  const roles = new Set(out.layers.map(l => l.role));
  out.capabilities.eyes = ['l','r'].some(s => roles.has('eye_' + s) && roles.has('eye_close_' + s));
  out.capabilities.mouth = roles.has('mouth_open') && (roles.has('mouth_close') || roles.has('mouth'));
  return out;
}

/* 安全的 ZIP 解压路径检查（P3 资产包导入用） */
export function safeArchivePath(name, root = '') {
  const n = String(name || '');
  if (!/^[a-z0-9_./-]+$/i.test(n) || n.startsWith('/') || n.includes('\\')) return false;
  if (n.split('/').some(p => !p || p === '.' || p === '..')) return false;
  if (root && !n.startsWith(root)) return false;
  return true;
}
