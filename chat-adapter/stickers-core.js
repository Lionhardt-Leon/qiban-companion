/* Per-character AI sticker packs, streaming 1GB ZIP extraction, vision metadata & two-step follow-up decision. GPL-3.0-or-later. */

export const MAX_STICKERS_PER_CHARACTER = 500;
export const MAX_STICKER_IMAGE_BYTES = 20 * 1024 * 1024;
export const MAX_STICKER_ZIP_BYTES = 1024 * 1024 * 1024; // 1 GB
const MAX_ZIP_ENTRIES = 10000;
const MAX_CENTRAL_DIR_BYTES = 16 * 1024 * 1024;

export const STICKER_IMAGE_MIMES = {
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  webp: 'image/webp',
  gif: 'image/gif'
};

export function extensionOf(name = '') {
  const clean = String(name || '').split(/[\\/]/).pop() || '';
  const dot = clean.lastIndexOf('.');
  return dot > 0 ? clean.slice(dot + 1).toLowerCase() : '';
}

export function deriveStickerLabel(filename = '', fallbackIndex = 1) {
  const base = (String(filename || '').split(/[\\/]/).pop() || '').replace(/\.[^.]+$/, '');
  const cleaned = base
    .replace(/^\d+[\s._\-]+/, '')
    .replace(/_+/g, ' ')
    .trim();
  return (cleaned || `表情${fallbackIndex}`).slice(0, 40);
}

export function decodeZipFilename(bytes, utf8Flag = false) {
  if (utf8Flag) {
    try {
      return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
    } catch {}
  }
  try {
    return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
  } catch {}
  try {
    return new TextDecoder('gb18030').decode(bytes);
  } catch {}
  try {
    return new TextDecoder('latin1').decode(bytes);
  } catch {
    return String.fromCharCode(...bytes);
  }
}

function isSafeImageZipPath(rawName) {
  const normalized = String(rawName || '').replace(/\\/g, '/');
  if (!normalized || normalized.endsWith('/')) return false;
  const parts = normalized.split('/').filter(Boolean);
  if (!parts.length) return false;
  if (parts.some(part => part === '__MACOSX' || part === '..' || part.startsWith('.'))) return false;
  const base = parts[parts.length - 1];
  if (!base || base.startsWith('._') || base === '.DS_Store') return false;
  return Boolean(STICKER_IMAGE_MIMES[extensionOf(base)]);
}

function readUint16(view, offset) {
  return view.getUint16(offset, true);
}

function readUint32(view, offset) {
  return view.getUint32(offset, true);
}

/**
 * Streaming ZIP image extractor that reads only small byte ranges (safe for 1 GB ZIPs in WKWebView).
 * `readRange(start, end)` must resolve to a Uint8Array covering [start, end).
 */
export async function streamZipImageEntries(size, readRange, inflateRaw, onEntry) {
  if (!Number.isFinite(size) || size < 22 || size > MAX_STICKER_ZIP_BYTES) {
    throw new Error('表情包压缩文件大小无效或超过 1GB 上限。');
  }

  const tailSize = Math.min(size, 65557);
  const tailStart = size - tailSize;
  const tail = await readRange(tailStart, size);
  const tailView = new DataView(tail.buffer, tail.byteOffset, tail.byteLength);

  let eocd = -1;
  for (let offset = tail.byteLength - 22; offset >= 0; offset--) {
    if (readUint32(tailView, offset) === 0x06054b50) {
      const commentLen = readUint16(tailView, offset + 20);
      if (offset + 22 + commentLen === tail.byteLength) {
        eocd = offset;
        break;
      }
    }
  }
  if (eocd < 0) throw new Error('不是有效的 ZIP 表情包文件。');

  const entryCount = readUint16(tailView, eocd + 10);
  const centralSize = readUint32(tailView, eocd + 12);
  const centralOffset = readUint32(tailView, eocd + 16);
  if (entryCount === 0 || entryCount > MAX_ZIP_ENTRIES || centralSize > MAX_CENTRAL_DIR_BYTES || centralOffset + centralSize > size) {
    throw new Error('ZIP 目录无效或条目数量过多。');
  }

  const central = await readRange(centralOffset, centralOffset + centralSize);
  const centralView = new DataView(central.buffer, central.byteOffset, central.byteLength);

  const candidates = [];
  let cursor = 0;
  let skipped = 0;

  for (let i = 0; i < entryCount; i++) {
    if (cursor + 46 > central.byteLength || readUint32(centralView, cursor) !== 0x02014b50) {
      throw new Error('ZIP 目录已损坏。');
    }
    const flags = readUint16(centralView, cursor + 8);
    const method = readUint16(centralView, cursor + 10);
    const compressedSize = readUint32(centralView, cursor + 20);
    const uncompressedSize = readUint32(centralView, cursor + 24);
    const nameLen = readUint16(centralView, cursor + 28);
    const extraLen = readUint16(centralView, cursor + 30);
    const commentLen = readUint16(centralView, cursor + 32);
    const localOffset = readUint32(centralView, cursor + 42);
    const nextCursor = cursor + 46 + nameLen + extraLen + commentLen;
    if (nextCursor > central.byteLength) throw new Error('ZIP 条目长度无效。');

    const nameBytes = central.subarray(cursor + 46, cursor + 46 + nameLen);
    const rawName = decodeZipFilename(nameBytes, (flags & 0x0800) !== 0);
    cursor = nextCursor;

    if (!isSafeImageZipPath(rawName)) continue;
    if ((flags & 0x0001) !== 0 || (method !== 0 && method !== 8)) {
      skipped++;
      continue;
    }
    if (uncompressedSize <= 0 || uncompressedSize > MAX_STICKER_IMAGE_BYTES || compressedSize > MAX_STICKER_IMAGE_BYTES + 4096) {
      skipped++;
      continue;
    }
    candidates.push({ rawName, method, compressedSize, uncompressedSize, localOffset });
  }

  const total = candidates.length;
  let processed = 0;
  for (const item of candidates) {
    if (item.localOffset + 30 > size) {
      skipped++;
      continue;
    }
    const localHead = await readRange(item.localOffset, item.localOffset + 30);
    const localView = new DataView(localHead.buffer, localHead.byteOffset, localHead.byteLength);
    if (readUint32(localView, 0) !== 0x04034b50) {
      skipped++;
      continue;
    }
    const localNameLen = readUint16(localView, 26);
    const localExtraLen = readUint16(localView, 28);
    const dataStart = item.localOffset + 30 + localNameLen + localExtraLen;
    if (dataStart + item.compressedSize > size) {
      skipped++;
      continue;
    }
    const payload = await readRange(dataStart, dataStart + item.compressedSize);
    let data;
    if (item.method === 0) {
      data = payload;
    } else {
      if (typeof inflateRaw !== 'function') throw new Error('当前环境缺少 ZIP 解压函数。');
      data = inflateRaw(payload, item.uncompressedSize);
    }
    if (!data || !data.byteLength || data.byteLength > MAX_STICKER_IMAGE_BYTES) {
      skipped++;
      continue;
    }
    const fileName = item.rawName.replace(/\\/g, '/').split('/').pop() || 'sticker.png';
    const ext = extensionOf(fileName);
    processed++;
    const keepGoing = await onEntry({
      name: fileName,
      ext,
      mime: STICKER_IMAGE_MIMES[ext] || 'image/png',
      data
    }, processed, total);
    if (keepGoing === false) {
      skipped += Math.max(0, total - processed);
      break;
    }
  }

  return { total, processed, skipped };
}

/**
 * Synchronous in-memory ZIP helper for unit tests and small buffers.
 */
export function parseZipImageEntries(input, inflateRaw) {
  const bytes = input instanceof Uint8Array ? input : new Uint8Array(input);
  if (bytes.byteLength < 22 || bytes.byteLength > MAX_STICKER_ZIP_BYTES) {
    throw new Error('表情包压缩文件大小无效或超过 1GB 上限。');
  }
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const minOffset = Math.max(0, bytes.byteLength - 65557);
  let eocd = -1;
  for (let offset = bytes.byteLength - 22; offset >= minOffset; offset--) {
    if (readUint32(view, offset) === 0x06054b50) {
      const commentLen = readUint16(view, offset + 20);
      if (offset + 22 + commentLen === bytes.byteLength) {
        eocd = offset;
        break;
      }
    }
  }
  if (eocd < 0) throw new Error('不是有效的 ZIP 表情包文件。');

  const entryCount = readUint16(view, eocd + 10);
  const centralSize = readUint32(view, eocd + 12);
  const centralOffset = readUint32(view, eocd + 16);
  if (entryCount === 0 || entryCount > MAX_ZIP_ENTRIES || centralSize > MAX_CENTRAL_DIR_BYTES || centralOffset + centralSize > bytes.byteLength) {
    throw new Error('ZIP 目录无效或条目数量过多。');
  }

  const results = [];
  let cursor = centralOffset;
  let skipped = 0;

  for (let i = 0; i < entryCount; i++) {
    if (cursor + 46 > centralOffset + centralSize || readUint32(view, cursor) !== 0x02014b50) {
      throw new Error('ZIP 目录已损坏。');
    }
    const flags = readUint16(view, cursor + 8);
    const method = readUint16(view, cursor + 10);
    const compressedSize = readUint32(view, cursor + 20);
    const uncompressedSize = readUint32(view, cursor + 24);
    const nameLen = readUint16(view, cursor + 28);
    const extraLen = readUint16(view, cursor + 30);
    const commentLen = readUint16(view, cursor + 32);
    const localOffset = readUint32(view, cursor + 42);
    const nextCursor = cursor + 46 + nameLen + extraLen + commentLen;
    if (nextCursor > bytes.byteLength) throw new Error('ZIP 条目长度无效。');

    const nameBytes = bytes.subarray(cursor + 46, cursor + 46 + nameLen);
    const rawName = decodeZipFilename(nameBytes, (flags & 0x0800) !== 0);
    cursor = nextCursor;

    if (!isSafeImageZipPath(rawName)) continue;
    if ((flags & 0x0001) !== 0 || (method !== 0 && method !== 8)) {
      skipped++;
      continue;
    }
    if (uncompressedSize <= 0 || uncompressedSize > MAX_STICKER_IMAGE_BYTES) {
      skipped++;
      continue;
    }
    if (results.length >= MAX_STICKERS_PER_CHARACTER) {
      skipped++;
      continue;
    }
    if (localOffset + 30 > bytes.byteLength || readUint32(view, localOffset) !== 0x04034b50) {
      skipped++;
      continue;
    }
    const localNameLen = readUint16(view, localOffset + 26);
    const localExtraLen = readUint16(view, localOffset + 28);
    const dataStart = localOffset + 30 + localNameLen + localExtraLen;
    if (dataStart + compressedSize > bytes.byteLength) {
      skipped++;
      continue;
    }
    const payload = bytes.subarray(dataStart, dataStart + compressedSize);
    let data;
    if (method === 0) {
      data = payload.slice();
    } else {
      if (typeof inflateRaw !== 'function') throw new Error('当前环境缺少 ZIP 解压函数。');
      data = inflateRaw(payload, uncompressedSize);
    }
    if (!data || !data.byteLength || data.byteLength > MAX_STICKER_IMAGE_BYTES) {
      skipped++;
      continue;
    }
    const fileName = rawName.replace(/\\/g, '/').split('/').pop() || 'sticker.png';
    const ext = extensionOf(fileName);
    results.push({
      name: fileName,
      ext,
      mime: STICKER_IMAGE_MIMES[ext] || 'image/png',
      data
    });
  }

  return { entries: results, skipped };
}

export function normalizeTags(raw) {
  const list = Array.isArray(raw)
    ? raw
    : typeof raw === 'string'
      ? raw.split(/[,，、;；/|\n]+/)
      : [];
  const seen = new Set();
  const out = [];
  for (const item of list) {
    const clean = String(item || '').trim().slice(0, 24);
    if (!clean || seen.has(clean.toLowerCase())) continue;
    seen.add(clean.toLowerCase());
    out.push(clean);
    if (out.length >= 12) break;
  }
  return out;
}

export function parseVisionMetadata(rawText, fallbackLabel = '') {
  const text = String(rawText || '').trim();
  let candidate = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();
  const start = candidate.indexOf('{');
  const end = candidate.lastIndexOf('}');
  if (start >= 0 && end > start) {
    try {
      const obj = JSON.parse(candidate.slice(start, end + 1));
      if (obj && typeof obj === 'object') {
        const label = String(obj.label || '').trim().slice(0, 40) || fallbackLabel;
        const tags = normalizeTags(obj.tags);
        const details = String(obj.details || obj.description || '').trim().slice(0, 300);
        const background = String(obj.background || '').trim().slice(0, 160);
        const usage = String(obj.usage || '').trim().slice(0, 160);
        return { label, tags, details, background, usage, analyzed: true };
      }
    } catch {}
  }
  return {
    label: fallbackLabel,
    tags: fallbackLabel ? [fallbackLabel] : [],
    details: text.slice(0, 300),
    background: '',
    usage: '',
    analyzed: Boolean(text)
  };
}

export function characterStickerKeys(character) {
  const keys = [];
  if (character?.qibanId) keys.push(`qiban:${character.qibanId}`);
  if (character?.id) keys.push(String(character.id));
  return [...new Set(keys)];
}

export function primaryStickerKey(character) {
  return character?.qibanId ? `qiban:${character.qibanId}` : String(character?.id || '');
}

export function resolveCharacterStickerPack(character, webStore = {}, nativeContacts = []) {
  if (!character) return { enabled: true, stickers: [], key: '' };
  const keys = characterStickerKeys(character);
  const key = primaryStickerKey(character);

  const webPacks = keys
    .map(k => webStore?.[k])
    .filter(item => item && typeof item === 'object');

  const nativeContact = Array.isArray(nativeContacts)
    ? nativeContacts.find(c =>
        (character.qibanId && c?.qibanId === character.qibanId) ||
        (character.id && c?.id === character.id)
      )
    : null;
  const nativePack = nativeContact?.stickers && typeof nativeContact.stickers === 'object'
    ? nativeContact.stickers
    : null;

  let enabled = nativePack?.enabled !== false;
  const nativeOverrides = {};
  for (const pack of webPacks) {
    if (typeof pack.enabled === 'boolean') enabled = pack.enabled;
    if (pack.nativeMeta && typeof pack.nativeMeta === 'object') {
      Object.assign(nativeOverrides, pack.nativeMeta);
    }
  }

  const merged = [];
  const seen = new Set();

  if (Array.isArray(nativePack?.items)) {
    for (const item of nativePack.items) {
      if (!item?.id || !item?.url) continue;
      const id = String(item.id);
      if (seen.has(id)) continue;
      seen.add(id);
      const override = nativeOverrides[id] || {};
      merged.push({
        id,
        label: String(override.label || item.label || deriveStickerLabel(item.name || id, merged.length + 1)).slice(0, 40),
        name: String(item.name || item.label || id),
        mime: String(item.mime || 'image/png'),
        size: Number(item.size) || 0,
        url: String(item.url),
        tags: normalizeTags(override.tags?.length ? override.tags : item.tags),
        details: String(override.details ?? item.details ?? '').slice(0, 300),
        background: String(override.background ?? item.background ?? '').slice(0, 160),
        usage: String(override.usage ?? item.usage ?? '').slice(0, 160),
        analyzed: Boolean(override.analyzed ?? item.analyzed),
        width: Number(item.width) || 256,
        height: Number(item.height) || 256,
        origin: 'native',
        cardID: nativeContact?.qibanId || character.qibanId || ''
      });
    }
  }

  for (const pack of webPacks) {
    for (const item of Array.isArray(pack.stickers) ? pack.stickers : []) {
      if (!item?.id || (!item.dataRef && !item.url && !item.dataUrl)) continue;
      const id = String(item.id);
      if (seen.has(id)) continue;
      seen.add(id);
      merged.push({
        id,
        label: String(item.label || deriveStickerLabel(item.name || id, merged.length + 1)).slice(0, 40),
        name: String(item.name || item.label || id),
        mime: String(item.mime || 'image/png'),
        size: Number(item.size) || 0,
        ...(item.dataRef ? { dataRef: String(item.dataRef) } : {}),
        ...(item.url ? { url: String(item.url) } : {}),
        ...(item.dataUrl ? { dataUrl: String(item.dataUrl) } : {}),
        tags: normalizeTags(item.tags),
        details: String(item.details || '').slice(0, 300),
        background: String(item.background || '').slice(0, 160),
        usage: String(item.usage || '').slice(0, 160),
        analyzed: Boolean(item.analyzed),
        width: Number(item.width) || 256,
        height: Number(item.height) || 256,
        origin: 'web'
      });
    }
  }

  return { enabled, stickers: merged.slice(0, MAX_STICKERS_PER_CHARACTER), key };
}

export function stickerToAttachment(sticker) {
  return {
    id: `aisticker_${sticker.id}_${Date.now().toString(36)}`,
    type: 'image',
    name: sticker.label || sticker.name || sticker.id,
    mime: sticker.mime || 'image/png',
    size: sticker.size || 0,
    ...(sticker.dataRef ? { dataRef: sticker.dataRef } : {}),
    ...(sticker.url ? { url: sticker.url } : {}),
    ...(sticker.dataUrl ? { dataUrl: sticker.dataUrl } : {}),
    source: 'sticker',
    width: sticker.width || 256,
    height: sticker.height || 256
  };
}

export function selectCandidateStickers(stickers = [], queryText = '', limit = 80) {
  if (!Array.isArray(stickers) || stickers.length <= limit) return [...(stickers || [])];
  const query = String(queryText || '').toLowerCase();
  const terms = new Set();
  for (const word of query.split(/[\s,，。！？!?、:：;；（）()【】\[\]"'“”‘’]+/)) {
    if (word.length >= 2) terms.add(word);
  }
  const cjk = query.replace(/[^\u4e00-\u9fff]/g, '');
  for (let i = 0; i + 1 < cjk.length; i++) {
    terms.add(cjk.slice(i, i + 2));
  }
  const scored = stickers.map((item, idx) => {
    const haystack = [item.label, ...(item.tags || []), item.details, item.background, item.usage, item.name]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    let score = 0;
    if (item.label && query.includes(item.label.toLowerCase())) score += 20;
    for (const tag of item.tags || []) {
      if (tag && query.includes(tag.toLowerCase())) score += 12;
    }
    for (const term of terms) {
      if (haystack.includes(term)) score += 3;
    }
    return { item, idx, score };
  });
  const topMatched = scored.filter(entry => entry.score > 0).sort((a, b) => b.score - a.score).slice(0, Math.min(60, limit));
  const picked = new Set(topMatched.map(e => e.item.id));
  const result = topMatched.map(e => e.item);
  const rest = stickers.filter(item => !picked.has(item.id));
  const remainingSlots = limit - result.length;
  if (remainingSlots > 0 && rest.length) {
    const step = Math.max(1, Math.floor(rest.length / remainingSlots));
    for (let i = 0; i < rest.length && result.length < limit; i += step) {
      result.push(rest[i]);
    }
  }
  return result;
}

export function formatStickerKnowledgeLine(item) {
  const parts = [`- ${item.id} | 名称：${item.label}`];
  if (item.tags?.length) parts.push(`关键词：${item.tags.join('、')}`);
  if (item.details) parts.push(`画面内容与细节：${item.details}`);
  if (item.background) parts.push(`背景氛围：${item.background}`);
  if (item.usage) parts.push(`适用场景：${item.usage}`);
  return parts.join(' | ');
}

/**
 * Compact awareness block placed at the END of the Step-1 reply system prompt so the roleplay model
 * knows it owns these stickers/photos and will respond naturally (never claiming "I cannot send images").
 */
export function buildStickerCapabilityPrompt(character, webStore = {}, nativeContacts = [], options = {}) {
  const pack = resolveCharacterStickerPack(character, webStore, nativeContacts);
  if (!pack.enabled || !pack.stickers.length) return '';
  const preview = pack.stickers
    .slice(0, 30)
    .map(item => (item.tags?.length ? `${item.label}(${item.tags.slice(0, 3).join('/')})` : item.label))
    .join('、');
  const more = pack.stickers.length > 30 ? ` 等共 ${pack.stickers.length} 张` : `（共 ${pack.stickers.length} 张）`;
  return [
    '【角色专属表情包／配图能力说明】',
    `你（${character?.name || '当前角色'}）拥有自己的专属表情包／配图库，涵盖：${preview}${more}。`,
    '你发完本条文字回复后，系统会由你自行判断并紧接着补发一张最合适的专属表情包／配图作为单独的下一条消息。',
    '因此：当用户想看你表情包里有的内容（例如提到某个标签、穿搭、表情、场景或风格）时，请按人设自然答应或回应，绝不要说“我发不了图片／我没有表情包”；本条只需输出自然的对话文字即可，无需在文字里写技术标签。'
  ].join('\n');
}

/**
 * Step-2 autonomous follow-up sticker decision prompt.
 * Runs right after the text message is committed so stickers are sent as a separate follow-up bubble.
 */
export function buildStickerDecisionMessages({
  character,
  stickers = [],
  recentMessages = [],
  userText = '',
  assistantText = ''
}) {
  const queryContext = [userText, assistantText, ...recentMessages.slice(-4).map(m => m.text || '')].join('\n');
  const candidates = selectCandidateStickers(stickers, queryContext, 80);
  const catalog = candidates.map(formatStickerKnowledgeLine).join('\n');
  const personaSnippet = String(character?.prompt || '').trim().slice(0, 600);

  const recentLines = recentMessages.slice(-6).map(item => {
    const who = item.role === 'user' ? '用户' : (item.speakerName || character?.name || '角色');
    const hint = formatHistoryStickerHint(item);
    return `${who}：${hint.text || '（无文字）'}`;
  });

  const system = [
    `你是聊天软件中的「角色表情包自主发送决策器」，当前服务于角色「${character?.name || '当前角色'}」。`,
    '刚才角色已经向用户发出了一条文字消息。现在请你站在该角色的视角，根据对话内容和下方完整的表情包内容档案（包含名称、关键词、画面细节、背景氛围、适用场景），自主决定是否紧接着补发**至多 1 张**表情包作为下一条消息。',
    '',
    '判断原则（请严格遵守）：',
    '1. 【明确命中必发】如果用户的发言或角色刚发的文字中，明确提到、想看、要求或强烈暗示了某张表情包的名称、关键词、服装材质、动作、神态或背景（例如用户说“想看蕾丝”“看看你的白丝”“发个吃惊的表情”等，而档案里有对应名称或细节的图），必须选择最匹配的那一张，返回 {"send":true,"stickerId":"对应ID"}。',
    '2. 【自然语境自主判断】如果用户没有直接点名，但当前对话情绪明显（如开心、害羞、撒娇、吃惊、吐槽、生气、晚安、委屈等）且档案中有高度契合的表情包，可以自主决定补发一张增强互动感。',
    '3. 【不要刷屏】如果只是平淡的日常问答、信息解释，或者聊天记录显示上一条刚刚发过表情包且用户没有继续要图，请返回 {"send":false}，不要每轮都发。',
    '4. 只能选择下方列表中真实存在的 ID，严禁编造。',
    '5. 只输出一行合法 JSON，不要任何解释或 Markdown：{"send":true,"stickerId":"ID"} 或 {"send":false}。'
  ].join('\n');

  const user = [
    personaSnippet ? `【角色简要人设】\n${personaSnippet}` : '',
    `【该角色专属表情包内容档案（共展示 ${candidates.length}/${stickers.length} 张）】\n${catalog}`,
    recentLines.length ? `【最近几条聊天记录】\n${recentLines.join('\n')}` : '',
    `【用户最新发言】\n${userText || '（无文字）'}`,
    `【角色刚刚发出的文字回复】\n${assistantText || '（无文字）'}`,
    '请决定现在是否紧接着补发一张表情包，并只输出 JSON：'
  ].filter(Boolean).join('\n\n');

  return [
    { role: 'system', content: system },
    { role: 'user', content: user }
  ];
}

export function matchStickerInList(token, stickers = []) {
  const value = String(token || '').trim();
  if (!value) return null;
  const lower = value.toLowerCase();
  return stickers.find(item => item.id.toLowerCase() === lower)
    || stickers.find(item => item.label.trim().toLowerCase() === lower)
    || stickers.find(item => (item.tags || []).some(tag => tag.trim().toLowerCase() === lower))
    || stickers.find(item => lower.length >= 2 && item.label.trim().toLowerCase().includes(lower))
    || null;
}

export function parseStickerDecision(rawText, stickers = []) {
  const text = String(rawText || '').trim();
  if (!text) return { send: false, sticker: null, attachment: null };

  const unfenced = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();
  const start = unfenced.indexOf('{');
  const end = unfenced.lastIndexOf('}');
  if (start >= 0 && end > start) {
    try {
      const obj = JSON.parse(unfenced.slice(start, end + 1));
      if (obj && typeof obj === 'object') {
        if (obj.send === false) return { send: false, sticker: null, attachment: null };
        const rawId = obj.stickerId || obj.sticker_id || obj.id || obj.sticker || '';
        const matched = matchStickerInList(rawId, stickers);
        if (matched && obj.send !== false) {
          return { send: true, sticker: matched, attachment: stickerToAttachment(matched) };
        }
        return { send: false, sticker: null, attachment: null };
      }
    } catch {}
  }

  const tagMatch = /(?:\[|【)\s*sticker\s*[:：]\s*([^\]】\r\n]{1,64})\s*(?:\]|】)/i.exec(unfenced)
    || /"sticker(?:Id|_id)?"\s*:\s*"([^"]+)"/i.exec(unfenced);
  if (tagMatch) {
    const matched = matchStickerInList(tagMatch[1], stickers);
    if (matched) return { send: true, sticker: matched, attachment: stickerToAttachment(matched) };
  }

  return { send: false, sticker: null, attachment: null };
}

const STICKER_TAG_RE = /(?:\[|【)\s*sticker\s*[:：]\s*([^\]】\r\n]{1,64})\s*(?:\]|】)/gi;

export function extractStickerFromReply(text, character, webStore = {}, nativeContacts = []) {
  const raw = String(text ?? '');
  const tokens = [];
  const cleaned = raw
    .replace(STICKER_TAG_RE, (_, token) => {
      const value = String(token || '').trim();
      if (value) tokens.push(value);
      return '';
    })
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  if (!tokens.length) {
    return { text: raw, attachments: [], matchedSticker: null, strippedCount: 0 };
  }

  const pack = resolveCharacterStickerPack(character, webStore, nativeContacts);
  if (!pack.enabled || !pack.stickers.length) {
    return { text: cleaned, attachments: [], matchedSticker: null, strippedCount: tokens.length };
  }

  let matched = null;
  for (const token of tokens) {
    matched = matchStickerInList(token, pack.stickers);
    if (matched) break;
  }

  if (!matched) {
    return { text: cleaned, attachments: [], matchedSticker: null, strippedCount: tokens.length };
  }

  return {
    text: cleaned,
    attachments: [stickerToAttachment(matched)],
    matchedSticker: matched,
    strippedCount: tokens.length
  };
}

export function formatHistoryStickerHint(item) {
  const text = String(item?.text || '');
  const attachments = Array.isArray(item?.attachments) ? item.attachments : [];
  if (item?.role !== 'assistant' || !attachments.length) {
    return { text, attachments };
  }
  const stickers = attachments.filter(att => att?.type === 'image' && att?.source === 'sticker');
  if (!stickers.length) return { text, attachments };
  const others = attachments.filter(att => !(att?.type === 'image' && att?.source === 'sticker'));
  const labels = stickers.map(att => att.name || '表情包').join('、');
  const suffix = `（补发了表情包：${labels}）`;
  return {
    text: text ? `${text}\n${suffix}` : suffix,
    attachments: others
  };
}
