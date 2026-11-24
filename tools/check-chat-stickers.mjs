import assert from 'node:assert/strict';
import zlib from 'node:zlib';
import {
  deriveStickerLabel,
  parseZipImageEntries,
  resolveCharacterStickerPack,
  buildStickerCapabilityPrompt,
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

// 1. ZIP extraction: Stored + Deflated + UTF-8 + GBK Chinese filename + skips __MACOSX and non-images
const fakePng = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 1, 2, 3, 4]);
// GBK bytes for "吃惊.png": 吃(0xB3,0xD4) 惊(0xBE,0xAA) .png
const gbkSurprised = Buffer.from([0xb3, 0xd4, 0xbe, 0xaa, 0x2e, 0x70, 0x6e, 0x67]);
const zip = buildZip([
  { name: '爱蜜莉雅表情包/01_开心.png', data: fakePng, deflate: true },
  { nameBytes: gbkSurprised, utf8Flag: false, data: fakePng, deflate: false },
  { name: '__MACOSX/._01_开心.png', data: fakePng, deflate: false },
  { name: '爱蜜莉雅表情包/readme.txt', data: 'ignore me', deflate: true }
]);

const parsed = parseZipImageEntries(zip, payload => new Uint8Array(zlib.inflateRawSync(payload)));
assert.equal(parsed.entries.length, 2);
assert.equal(parsed.entries[0].name, '01_开心.png');
assert.equal(deriveStickerLabel(parsed.entries[0].name, 1), '开心');
assert.equal(parsed.entries[1].name, '吃惊.png');
assert.equal(deriveStickerLabel(parsed.entries[1].name, 2), '吃惊');

// 2. Per-character isolation: Emilia has stickers, Enya has none
const emilia = { id: 'char_emilia', qibanId: 'uuid-emilia', name: '爱蜜莉雅' };
const enya = { id: 'char_enya', qibanId: 'uuid-enya', name: '恩雅' };
const webStore = {
  'qiban:uuid-emilia': {
    enabled: true,
    stickers: [
      { id: 'w1', label: '开心', name: '开心.png', mime: 'image/png', size: 12, dataRef: 'media:1' },
      { id: 'w2', label: '吃惊', name: '吃惊.png', mime: 'image/png', size: 12, dataRef: 'media:2' }
    ]
  }
};
const nativeContacts = [
  {
    id: 'qiban_uuid-emilia',
    qibanId: 'uuid-emilia',
    stickers: {
      enabled: true,
      items: [{ id: 's1', label: '害羞', name: '害羞.webp', mime: 'image/webp', size: 20, url: 'qiban-stickers/uuid-emilia/s1.webp' }]
    }
  }
];

const emiliaPack = resolveCharacterStickerPack(emilia, webStore, nativeContacts);
assert.equal(emiliaPack.stickers.length, 3);
const enyaPack = resolveCharacterStickerPack(enya, webStore, nativeContacts);
assert.equal(enyaPack.stickers.length, 0);

// 3. System capability prompt mapping (optional autonomous judgment, not mandatory every turn)
const emiliaPrompt = buildStickerCapabilityPrompt(emilia, webStore, nativeContacts);
assert.ok(emiliaPrompt.includes('爱蜜莉雅'));
assert.ok(emiliaPrompt.includes('s1：害羞'));
assert.ok(emiliaPrompt.includes('w2：吃惊'));
assert.ok(emiliaPrompt.includes('绝对不要每条消息都发表情包'));
assert.equal(buildStickerCapabilityPrompt(enya, webStore, nativeContacts), '');

// 4. Reply extraction: normal text without sticker, valid ID, valid label, fullwidth tag, invalid ID, sticker-only, disabled pack
const noSticker = extractStickerFromReply('今天天气真好呀。', emilia, webStore, nativeContacts);
assert.equal(noSticker.text, '今天天气真好呀。');
assert.equal(noSticker.attachments.length, 0);

const byId = extractStickerFromReply('欸？！真的吗！ [sticker:w2]', emilia, webStore, nativeContacts);
assert.equal(byId.text, '欸？！真的吗！');
assert.equal(byId.attachments.length, 1);
assert.equal(byId.attachments[0].source, 'sticker');
assert.equal(byId.attachments[0].dataRef, 'media:2');
assert.equal(byId.attachments[0].name, '吃惊');

const byNativeLabel = extractStickerFromReply('别这样看着我啦…【sticker:害羞】', emilia, webStore, nativeContacts);
assert.equal(byNativeLabel.text, '别这样看着我啦…');
assert.equal(byNativeLabel.attachments.length, 1);
assert.equal(byNativeLabel.attachments[0].url, 'qiban-stickers/uuid-emilia/s1.webp');

const unknownId = extractStickerFromReply('嗯嗯 [sticker:nonexistent]', emilia, webStore, nativeContacts);
assert.equal(unknownId.text, '嗯嗯');
assert.equal(unknownId.attachments.length, 0);

const crossChar = extractStickerFromReply('我也想用 [sticker:w2]', enya, webStore, nativeContacts);
assert.equal(crossChar.text, '我也想用');
assert.equal(crossChar.attachments.length, 0);

const stickerOnly = extractStickerFromReply('[sticker:w1]', emilia, webStore, nativeContacts);
assert.equal(stickerOnly.text, '');
assert.equal(stickerOnly.attachments.length, 1);

const disabled = extractStickerFromReply('开心！[sticker:w1]', emilia, { 'qiban:uuid-emilia': { enabled: false, stickers: webStore['qiban:uuid-emilia'].stickers } }, nativeContacts);
assert.equal(disabled.text, '开心！');
assert.equal(disabled.attachments.length, 0);

// 5. History hint avoids sending assistant image attachments back to strict text-only LLM APIs
const historyHint = formatHistoryStickerHint({
  role: 'assistant',
  text: '欸？！',
  attachments: [byId.attachments[0]]
});
assert.equal(historyHint.attachments.length, 0);
assert.ok(historyHint.text.includes('曾发送表情包：吃惊'));

console.log('Per-character AI sticker pack & ZIP checks passed.');
