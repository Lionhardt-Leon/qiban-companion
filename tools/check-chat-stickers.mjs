import assert from 'node:assert/strict';
import zlib from 'node:zlib';
import {
  MAX_STICKER_ZIP_BYTES,
  MAX_STICKERS_PER_CHARACTER,
  deriveStickerLabel,
  parseZipImageEntries,
  streamZipImageEntries,
  parseVisionMetadata,
  resolveCharacterStickerPack,
  selectCandidateStickers,
  buildStickerCapabilityPrompt,
  buildStickerDecisionMessages,
  parseStickerDecision,
  extractStickerFromReply,
  formatHistoryStickerHint
} from '../chat-adapter/stickers-core.js';

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return (c ^ 0xffffffff) >>> 0;
}

function buildZip(entries) {
  const locals = [];
  const centrals = [];
  let offset = 0;
  for (const entry of entries) {
    const nameBytes = entry.nameBytes || Buffer.from(entry.name, 'utf-8');
    const raw = Buffer.from(entry.data);
    const method = entry.deflate ? 8 : 0;
    const payload = entry.deflate ? zlib.deflateRawSync(raw) : raw;
    const flags = entry.utf8Flag === false ? 0 : 0x0800;
    const crc = crc32(raw);

    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(flags, 6);
    local.writeUInt16LE(method, 8);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(payload.length, 18);
    local.writeUInt32LE(raw.length, 22);
    local.writeUInt16LE(nameBytes.length, 26);
    local.writeUInt16LE(0, 28);
    locals.push(local, nameBytes, payload);

    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(20, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(flags, 8);
    central.writeUInt16LE(method, 10);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(payload.length, 20);
    central.writeUInt32LE(raw.length, 24);
    central.writeUInt16LE(nameBytes.length, 28);
    central.writeUInt16LE(0, 30);
    central.writeUInt16LE(0, 32);
    central.writeUInt32LE(offset, 42);
    centrals.push(central, nameBytes);

    offset += local.length + nameBytes.length + payload.length;
  }

  const centralBuf = Buffer.concat(centrals);
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(entries.length, 8);
  eocd.writeUInt16LE(entries.length, 10);
  eocd.writeUInt32LE(centralBuf.length, 12);
  eocd.writeUInt32LE(offset, 16);
  return Buffer.concat([...locals, centralBuf, eocd]);
}

// 1. 1 GB ZIP limit + chunked streaming ZIP extraction (UTF-8 + GBK + skips __MACOSX & txt)
assert.equal(MAX_STICKER_ZIP_BYTES, 1024 * 1024 * 1024);
assert.ok(MAX_STICKERS_PER_CHARACTER >= 500);

const fakePng = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 1, 2, 3, 4]);
const gbkLace = Buffer.from([0xc0, 0xd9, 0xcb, 0xbf, 0x2e, 0x70, 0x6e, 0x67]); // "蕾丝.png" in GBK
const zip = buildZip([
  { name: '爱蜜莉雅表情包/01_开心.png', data: fakePng, deflate: true },
  { nameBytes: gbkLace, utf8Flag: false, data: fakePng, deflate: false },
  { name: '__MACOSX/._01_开心.png', data: fakePng, deflate: false },
  { name: '爱蜜莉雅表情包/readme.txt', data: 'ignore me', deflate: true }
]);

const parsed = parseZipImageEntries(zip, payload => new Uint8Array(zlib.inflateRawSync(payload)));
assert.equal(parsed.entries.length, 2);
assert.equal(deriveStickerLabel(parsed.entries[0].name, 1), '开心');
assert.equal(deriveStickerLabel(parsed.entries[1].name, 2), '蕾丝');

const streamed = [];
let rangeReads = 0;
const streamSummary = await streamZipImageEntries(
  zip.byteLength,
  async (start, end) => {
    rangeReads++;
    return new Uint8Array(zip.subarray(start, end));
  },
  payload => new Uint8Array(zlib.inflateRawSync(payload)),
  async entry => {
    streamed.push(entry.name);
    return true;
  }
);
assert.equal(streamSummary.total, 2);
assert.deepEqual(streamed, ['01_开心.png', '蕾丝.png']);
assert.ok(rangeReads >= 4);

// 2. AI vision metadata parser
const vision = parseVisionMetadata(
  '```json\n{"label":"蕾丝","tags":["蕾丝","睡衣","害羞"],"details":"身穿黑色蕾丝花边睡衣，微微低头微笑","background":"暖光卧室","usage":"对方想看蕾丝或晚上聊天时"}\n```',
  '蕾丝'
);
assert.equal(vision.label, '蕾丝');
assert.deepEqual(vision.tags, ['蕾丝', '睡衣', '害羞']);
assert.ok(vision.details.includes('蕾丝花边'));
assert.equal(vision.background, '暖光卧室');
assert.equal(vision.analyzed, true);

// 3. Per-character isolation + rich vision metadata + Step-1 awareness prompt
const emilia = { id: 'char_emilia', qibanId: 'uuid-emilia', name: '爱蜜莉雅', prompt: '温柔可爱的银发少女。' };
const enya = { id: 'char_enya', qibanId: 'uuid-enya', name: '恩雅' };
const webStore = {
  'qiban:uuid-emilia': {
    enabled: true,
    stickers: [
      { id: 'w1', label: '开心', name: '开心.png', mime: 'image/png', size: 12, dataRef: 'media:1', tags: ['开心', '微笑'], details: '双手托腮开心笑着', background: '明亮客厅', usage: '心情好时', analyzed: true },
      { id: 'w2', label: '蕾丝', name: '蕾丝.png', mime: 'image/png', size: 12, dataRef: 'media:2', tags: ['蕾丝', '睡衣', '害羞'], details: '身穿黑色蕾丝花边睡衣，眼神微羞', background: '暖光卧室', usage: '对方说想看蕾丝时', analyzed: true }
    ]
  }
};
const nativeContacts = [
  {
    id: 'qiban_uuid-emilia',
    qibanId: 'uuid-emilia',
    stickers: {
      enabled: true,
      items: [{ id: 's1', label: '吃惊', name: '吃惊.webp', mime: 'image/webp', size: 20, url: 'qiban-stickers/uuid-emilia/s1.webp', tags: ['吃惊', '惊讶'], details: '睁大眼睛一脸震惊', background: '简洁纯色背景', usage: '听到意外消息时', analyzed: true }]
    }
  }
];

const emiliaPack = resolveCharacterStickerPack(emilia, webStore, nativeContacts);
assert.equal(emiliaPack.stickers.length, 3);
assert.equal(resolveCharacterStickerPack(enya, webStore, nativeContacts).stickers.length, 0);

const awareness = buildStickerCapabilityPrompt(emilia, webStore, nativeContacts);
assert.ok(awareness.includes('蕾丝'));
assert.ok(awareness.includes('绝不要说“我发不了图片'));
assert.equal(buildStickerCapabilityPrompt(enya, webStore, nativeContacts), '');

// 4. Candidate ranking even with 200+ stickers ensures "想看蕾丝" ranks "蕾丝" #1
const hugeList = Array.from({ length: 200 }, (_, i) => ({
  id: `b${i}`,
  label: `日常${i}`,
  tags: ['日常'],
  details: '普通日常表情',
  background: '白底',
  usage: '普通聊天'
}));
hugeList.push(emiliaPack.stickers.find(s => s.id === 'w2'));
const ranked = selectCandidateStickers(hugeList, '我想看蕾丝呀', 80);
assert.equal(ranked.length, 80);
assert.equal(ranked[0].id, 'w2');

// 5. Step-2 follow-up decision prompt & parser
const decisionMsgs = buildStickerDecisionMessages({
  character: emilia,
  stickers: emiliaPack.stickers,
  recentMessages: [{ role: 'user', text: '晚上好' }],
  userText: '想看蕾丝',
  assistantText: '哼，真拿你没办法，给你看一眼好了～'
});
assert.equal(decisionMsgs.length, 2);
assert.ok(decisionMsgs[0].content.includes('明确命中必发'));
assert.ok(decisionMsgs[1].content.includes('身穿黑色蕾丝花边睡衣'));
assert.ok(decisionMsgs[1].content.includes('暖光卧室'));

const sendYes = parseStickerDecision('{"send":true,"stickerId":"w2"}', emiliaPack.stickers);
assert.equal(sendYes.send, true);
assert.equal(sendYes.sticker.id, 'w2');
assert.equal(sendYes.attachment.source, 'sticker');
assert.equal(sendYes.attachment.dataRef, 'media:2');

const sendByLabel = parseStickerDecision('```json\n{"send":true,"stickerId":"蕾丝"}\n```', emiliaPack.stickers);
assert.equal(sendByLabel.send, true);
assert.equal(sendByLabel.sticker.id, 'w2');

const sendNo = parseStickerDecision('{"send":false}', emiliaPack.stickers);
assert.equal(sendNo.send, false);
assert.equal(sendNo.attachment, null);

const sendInvalid = parseStickerDecision('{"send":true,"stickerId":"nonexistent"}', emiliaPack.stickers);
assert.equal(sendInvalid.send, false);

// 6. Inline tag fallback still strips cleanly from Step-1 text and preserves matched sticker for Step-2 follow-up
const inline = extractStickerFromReply('给你看一眼哦 [sticker:w2]', emilia, webStore, nativeContacts);
assert.equal(inline.text, '给你看一眼哦');
assert.equal(inline.matchedSticker.id, 'w2');

const historyHint = formatHistoryStickerHint({
  role: 'assistant',
  text: '',
  attachments: [sendYes.attachment]
});
assert.equal(historyHint.attachments.length, 0);
assert.ok(historyHint.text.includes('补发了表情包：蕾丝'));

console.log('Per-character AI sticker pack, 1GB streaming ZIP, vision metadata & two-step follow-up checks passed.');
