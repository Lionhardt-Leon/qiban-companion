/* Per-character AI sticker packs, ZIP extraction & system capability mapping. GPL-3.0-or-later. */

export const MAX_STICKERS_PER_CHARACTER = 120;
export const MAX_STICKER_IMAGE_BYTES = 5 * 1024 * 1024;
export const MAX_STICKER_ZIP_BYTES = 80 * 1024 * 1024;

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
 * Parse a standard single-disk ZIP archive and extract supported sticker images.
 * Supports Stored (0) and Deflated (8), bit-3 data descriptors, and UTF-8 / GB18030 filenames.
 */
export function parseZipImageEntries(input, inflateRaw) {
  const bytes = input instanceof Uint8Array ? input : new Uint8Array(input);
  if (bytes.byteLength < 22 || bytes.byteLength > MAX_STICKER_ZIP_BYTES) {
    throw new Error('表情包压缩文件大小无效或超过 80MB 上限。');
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
  if (entryCount === 0 || entryCount > 2048 || centralOffset + centralSize > bytes.byteLength) {
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
  for (const pack of webPacks) {
    if (typeof pack.enabled === 'boolean') enabled = pack.enabled;
  }

  const merged = [];
  const seen = new Set();

  if (Array.isArray(nativePack?.items)) {
    for (const item of nativePack.items) {
      if (!item?.id || !item?.url) continue;
      const id = String(item.id);
      if (seen.has(id)) continue;
      seen.add(id);
      merged.push({
        id,
        label: String(item.label || deriveStickerLabel(item.name || id, merged.length + 1)).slice(0, 40),
        name: String(item.name || item.label || id),
        mime: String(item.mime || 'image/png'),
        size: Number(item.size) || 0,
        url: String(item.url),
        width: Number(item.width) || 256,
        height: Number(item.height) || 256,
        origin: 'native'
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
        width: Number(item.width) || 256,
        height: Number(item.height) || 256,
        origin: 'web'
      });
    }
  }

  return { enabled, stickers: merged.slice(0, MAX_STICKERS_PER_CHARACTER), key };
}

export function buildStickerCapabilityPrompt(character, webStore = {}, nativeContacts = [], options = {}) {
  const pack = resolveCharacterStickerPack(character, webStore, nativeContacts);
  if (!pack.enabled || !pack.stickers.length) return '';
  const list = pack.stickers.map(item => `- ${item.id}：${item.label}`).join('\n');
  const formatHint = options.roundtable
    ? '决定发送时，请在 JSON 的 text 字段末尾附带且仅附带一个标签：[sticker:表情ID]（例如 [sticker:s1]），不要破坏 JSON 结构。'
    : '决定发送时，请在整条回复文本的最末尾附带且仅附带一个标签：[sticker:表情ID]（例如 [sticker:s1]），不要在正文中解释或提及该标签。';
  return [
    '【系统能力映射：角色专属表情包（自主判断、非必选）】',
    `你当前角色（${character?.name || '当前角色'}）拥有以下专属表情包能力（格式为 表情ID：语义含义）：`,
    list,
    '使用规则：',
    '1. 发表情包是完全可选的辅助表达，请结合当下语境、情绪和人设自主判断；绝对不要每条消息都发表情包，平时自然聊天即可，只在确实契合情绪、吐槽、撒娇、惊讶或氛围时发送。',
    `2. ${formatHint}`,
    '3. 若本轮不需要发表情包，正常回复即可，不要输出任何 [sticker:...] 标签。',
    '4. 严禁编造上方列表之外的表情ID。'
  ].join('\n');
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
    const lower = token.toLowerCase();
    matched = pack.stickers.find(item => item.id.toLowerCase() === lower)
      || pack.stickers.find(item => item.label.trim().toLowerCase() === lower)
      || pack.stickers.find(item => item.label.trim().toLowerCase().includes(lower) && lower.length >= 2);
    if (matched) break;
  }

  if (!matched) {
    return { text: cleaned, attachments: [], matchedSticker: null, strippedCount: tokens.length };
  }

  const attachment = {
    id: `aisticker_${matched.id}_${Date.now().toString(36)}`,
    type: 'image',
    name: matched.label || matched.name || matched.id,
    mime: matched.mime || 'image/png',
    size: matched.size || 0,
    ...(matched.dataRef ? { dataRef: matched.dataRef } : {}),
    ...(matched.url ? { url: matched.url } : {}),
    ...(matched.dataUrl ? { dataUrl: matched.dataUrl } : {}),
    source: 'sticker',
    width: matched.width || 256,
    height: matched.height || 256
  };

  return {
    text: cleaned,
    attachments: [attachment],
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
  const suffix = `（曾发送表情包：${labels}）`;
  return {
    text: text ? `${text}\n${suffix}` : suffix,
    attachments: others
  };
}
