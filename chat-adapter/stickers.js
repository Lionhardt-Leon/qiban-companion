/* Fritia UI, streaming 1GB ZIP import, AI vision recognition & two-step follow-up sticker delivery. GPL-3.0-or-later. */
import { saveBlobAsMedia, getMediaDataUrl, deleteMedia } from './media_store.js';
import { loadAppStore, saveAppStore, appendMessage, createId, now, getConversationMessages } from './storage.js';
import { getSettings } from './settings.js';
import { requestLlmCompletion } from './llm_request.js';
import { inflateSync } from '../vendor/fflate/fflate.js';
import {
  MAX_STICKERS_PER_CHARACTER,
  MAX_STICKER_IMAGE_BYTES,
  STICKER_IMAGE_MIMES,
  extensionOf,
  deriveStickerLabel,
  normalizeTags,
  parseVisionMetadata,
  streamZipImageEntries,
  primaryStickerKey,
  characterStickerKeys,
  resolveCharacterStickerPack,
  stickerToAttachment,
  buildStickerCapabilityPrompt,
  buildStickerDecisionMessages,
  parseStickerDecision,
  extractStickerFromReply,
  formatHistoryStickerHint
} from './qiban_stickers_core.js';

const STORAGE_KEY = 'fritia_qiban_char_stickers';
let hooks = null;
let stagedCreatePack = { enabled: true, stickers: [] };
let activeModal = null;
let activeAnalyzeAbort = null;

function readStore() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return raw && typeof raw === 'object' ? raw : {};
  } catch {
    return {};
  }
}

function writeStore(next) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next || {}));
}

function nativeContacts() {
  return Array.isArray(window.QibanProfile?.contacts) ? window.QibanProfile.contacts : [];
}

function notify(message) {
  if (hooks?.notice) hooks.notice(message);
  else if (window.QibanNative?.notice) window.QibanNative.notice(message);
}

export function buildCharacterStickerPrompt(character, options = {}) {
  return buildStickerCapabilityPrompt(character, readStore(), nativeContacts(), options);
}

export function applyCharacterStickerReply(text, character) {
  return extractStickerFromReply(text, character, readStore(), nativeContacts());
}

export function sanitizeHistoryForStickers(item) {
  return formatHistoryStickerHint(item);
}

/**
 * Two-step delivery: after the assistant's text reply is sent, decide autonomously whether to follow up
 * with ONE separate sticker message bubble, and append it after a short natural pause.
 */
export async function dispatchFollowUpSticker({
  store,
  conversation,
  character,
  userText = '',
  assistantText = '',
  presetSticker = null,
  chatSettings = null,
  onStore = null
}) {
  if (!conversation?.id || !character) return null;
  if (window.QibanNative?.isDraftStore?.(store)) return null;

  const pack = resolveCharacterStickerPack(character, readStore(), nativeContacts());
  if (!pack.enabled || !pack.stickers.length) return null;

  let chosen = presetSticker;
  if (!chosen) {
    try {
      const settings = chatSettings || getSettings();
      const recent = getConversationMessages(store || loadAppStore(), conversation.id)
        .filter(item => item.status !== 'typing' && item.status !== 'error')
        .slice(-6);
      const messages = buildStickerDecisionMessages({
        character,
        stickers: pack.stickers,
        recentMessages: recent,
        userText,
        assistantText
      });
      const rawDecision = await requestLlmCompletion({
        settings,
        messages,
        body: {
          temperature: 0.25,
          stream: false,
          max_tokens: 180
        }
      });
      const decision = parseStickerDecision(rawDecision, pack.stickers);
      if (!decision.send || !decision.sticker) return null;
      chosen = decision.sticker;
    } catch (error) {
      console.warn('[qiban-stickers] follow-up sticker decision skipped:', error);
      return null;
    }
  }

  // Brief natural pause so the sticker clearly arrives as a follow-up message after the text reply.
  await new Promise(resolve => setTimeout(resolve, 450));

  const latest = loadAppStore();
  if (!latest.conversations.some(item => item.id === conversation.id)) return null;
  const attachment = stickerToAttachment(chosen);
  const updated = appendMessage(latest, conversation.id, {
    id: createId('msg'),
    role: 'assistant',
    speakerId: character.id,
    speakerName: character.name,
    text: '',
    attachments: [attachment],
    createdAt: now(),
    status: 'sent',
    meta: {
      modelReplySucceeded: true,
      qibanStickerFollowUp: true,
      qibanStickerId: chosen.id
    }
  });
  saveAppStore(updated);
  onStore?.(updated);
  return chosen;
}

function nextStickerId(existing = []) {
  let maxNum = 0;
  for (const item of existing) {
    const match = /^w(\d+)$/.exec(String(item?.id || ''));
    if (match) maxNum = Math.max(maxNum, Number(match[1]) || 0);
  }
  return `w${maxNum + 1}`;
}

async function probeImageDimensions(blob) {
  try {
    if (typeof createImageBitmap === 'function') {
      const bitmap = await createImageBitmap(blob);
      const size = { width: bitmap.width || 256, height: bitmap.height || 256 };
      bitmap.close?.();
      return size;
    }
  } catch {}
  return new Promise(resolve => {
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve({ width: img.naturalWidth || 256, height: img.naturalHeight || 256 });
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve({ width: 256, height: 256 });
    };
    img.src = url;
  });
}

async function ingestFilesIntoList(files, currentList = [], onProgress = null) {
  const list = [...currentList];
  let added = 0;
  let skipped = 0;

  async function appendImage(name, mime, bytesOrBlob) {
    if (list.length >= MAX_STICKERS_PER_CHARACTER) {
      skipped++;
      return false;
    }
    const blob = bytesOrBlob instanceof Blob ? bytesOrBlob : new Blob([bytesOrBlob], { type: mime });
    if (!blob.size || blob.size > MAX_STICKER_IMAGE_BYTES) {
      skipped++;
      return true;
    }
    const saved = await saveBlobAsMedia(blob, { category: 'char-sticker', prefix: 'csticker', name });
    const dims = await probeImageDimensions(blob);
    const id = nextStickerId(list);
    list.push({
      id,
      label: deriveStickerLabel(name, list.length + 1),
      name: String(name || `${id}.png`).slice(0, 120),
      mime: blob.type || mime || 'image/png',
      size: blob.size,
      dataRef: saved.ref,
      tags: [],
      details: '',
      background: '',
      usage: '',
      analyzed: false,
      width: dims.width,
      height: dims.height
    });
    added++;
    return list.length < MAX_STICKERS_PER_CHARACTER;
  }

  for (const file of Array.from(files || [])) {
    const ext = extensionOf(file.name);
    if (ext === 'zip' || file.type === 'application/zip' || file.type === 'application/x-zip-compressed') {
      const readRange = async (start, end) => new Uint8Array(await file.slice(start, end).arrayBuffer());
      const inflateRaw = (payload, expectedSize) =>
        inflateSync(payload, expectedSize > 0 ? { out: new Uint8Array(expectedSize) } : undefined);
      const summary = await streamZipImageEntries(file.size, readRange, inflateRaw, async (entry, index, total) => {
        onProgress?.(`正在流式解压 ${index}/${total}…`);
        return appendImage(entry.name, entry.mime, entry.data);
      });
      skipped += summary.skipped;
      if (!summary.total) {
        throw new Error(`压缩包「${file.name}」中没有找到 PNG / JPG / WEBP / GIF 表情图片。`);
      }
    } else if (STICKER_IMAGE_MIMES[ext] || String(file.type || '').startsWith('image/')) {
      const mime = STICKER_IMAGE_MIMES[ext] || file.type || 'image/png';
      await appendImage(file.name, mime, file);
    } else {
      skipped++;
    }
  }

  if (!added) {
    throw new Error(list.length >= MAX_STICKERS_PER_CHARACTER
      ? `该角色表情包已达上限（${MAX_STICKERS_PER_CHARACTER} 张）。`
      : '未导入有效图片，请选择表情包 .zip 文件或 PNG / JPG / WEBP / GIF 图片。');
  }

  return { stickers: list, added, skipped };
}

function getWebPackForCharacter(character) {
  const store = readStore();
  const key = primaryStickerKey(character);
  for (const candidate of characterStickerKeys(character)) {
    if (store[candidate]) return { store, key: candidate, pack: store[candidate] };
  }
  return { store, key, pack: { enabled: true, stickers: [], nativeMeta: {} } };
}

function saveWebPackForCharacter(character, pack) {
  const store = readStore();
  const key = primaryStickerKey(character);
  if (!key) return;
  for (const candidate of characterStickerKeys(character)) {
    if (candidate !== key) delete store[candidate];
  }
  store[key] = {
    enabled: pack.enabled !== false,
    stickers: Array.isArray(pack.stickers) ? pack.stickers : [],
    ...(pack.nativeMeta && Object.keys(pack.nativeMeta).length ? { nativeMeta: pack.nativeMeta } : {})
  };
  writeStore(store);
}

async function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('无法读取表情图片数据。'));
    reader.readAsDataURL(blob);
  });
}

async function resolveStickerDataUrl(sticker) {
  if (sticker.dataRef) {
    const url = await getMediaDataUrl(sticker.dataRef);
    if (url) return url;
  }
  if (sticker.dataUrl) return sticker.dataUrl;
  if (sticker.url) {
    const response = await fetch(sticker.url);
    if (response.ok) return blobToDataUrl(await response.blob());
  }
  return '';
}

async function analyzeSingleSticker(sticker, character) {
  const charName = character?.name || '当前角色';
  if (window.QibanNative?.available) {
    const payload = {
      name: sticker.name || sticker.label || '',
      label: sticker.label || '',
      characterName: charName
    };
    if (sticker.origin === 'native' && sticker.cardID) {
      payload.cardID = sticker.cardID;
      payload.stickerID = sticker.id;
    } else {
      payload.dataUrl = await resolveStickerDataUrl(sticker);
    }
    const result = await window.QibanNative.call('analyzeSticker', payload);
    return {
      label: String(result.label || sticker.label || '').slice(0, 40),
      tags: normalizeTags(result.tags),
      details: String(result.details || '').slice(0, 300),
      background: String(result.background || '').slice(0, 160),
      usage: String(result.usage || '').slice(0, 160),
      analyzed: true
    };
  }

  const dataUrl = await resolveStickerDataUrl(sticker);
  if (!dataUrl) throw new Error('无法读取图片内容。');
  const prompt = [
    `请仔细观察这张属于角色「${charName}」的聊天表情包或配图，为她建立图片内容档案。`,
    `原始文件名／当前标签参考：${sticker.label || sticker.name || '无'}（若原名含服装、材质或梗如“蕾丝”“吃惊”，请保留在 label 或 tags 中）。`,
    '只输出一个 JSON 对象：{"label":"简洁核心标题(2-10字)","tags":["关键词1","关键词2"],"details":"详细描述人物表情、姿势、服装与材质细节(30-90字)","background":"背景环境与氛围(15-40字)","usage":"适合什么聊天语境发送(15-40字)"}'
  ].join('\n');
  const raw = await requestLlmCompletion({
    settings: getSettings(),
    messages: [
      { role: 'system', content: '你是精确的图像识别与标注助手，只输出合法 JSON。' },
      { role: 'user', content: [{ type: 'text', text: prompt }, { type: 'image_url', image_url: { url: dataUrl } }] }
    ],
    body: { temperature: 0.2, stream: false, max_tokens: 600 }
  });
  return parseVisionMetadata(raw, sticker.label || sticker.name);
}

function applyMetadataToSticker(sticker, meta, { character, staged }) {
  if (staged) {
    stagedCreatePack.stickers = stagedCreatePack.stickers.map(item =>
      item.id === sticker.id ? { ...item, ...meta, analyzed: true } : item
    );
    return;
  }
  if (!character) return;
  const { pack } = getWebPackForCharacter(character);
  if (sticker.origin === 'native') {
    const nextNativeMeta = { ...(pack.nativeMeta || {}), [sticker.id]: { ...meta, analyzed: true } };
    saveWebPackForCharacter(character, { ...pack, nativeMeta: nextNativeMeta });
  } else {
    saveWebPackForCharacter(character, {
      ...pack,
      stickers: (pack.stickers || []).map(item =>
        item.id === sticker.id ? { ...item, ...meta, analyzed: true } : item
      )
    });
  }
}

async function loadThumbSrc(img, sticker) {
  if (sticker.dataRef) {
    try {
      const dataUrl = await getMediaDataUrl(sticker.dataRef);
      if (dataUrl) {
        img.src = dataUrl;
        return;
      }
    } catch {}
  }
  if (sticker.url) img.src = sticker.url;
  else if (sticker.dataUrl) img.src = sticker.dataUrl;
}

function openStickerMetaEditor(sticker, options, onSaved) {
  const overlay = document.createElement('div');
  overlay.className = 'qiban-message-overlay';
  const dialog = document.createElement('section');
  dialog.className = 'qiban-message-dialog qiban-sticker-editor-dialog';
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');

  const h3 = document.createElement('h3');
  h3.textContent = `编辑表情档案（${sticker.id}）`;

  const makeField = (title, value, multiline = false, placeholder = '') => {
    const wrap = document.createElement('label');
    wrap.className = 'qiban-sticker-field';
    const span = document.createElement('span');
    span.textContent = title;
    const input = document.createElement(multiline ? 'textarea' : 'input');
    input.value = value || '';
    input.placeholder = placeholder;
    if (multiline) input.rows = 2;
    wrap.append(span, input);
    return { wrap, input };
  };

  const labelField = makeField('核心名称 / 标签', sticker.label, false, '如：蕾丝、吃惊、害羞');
  const tagsField = makeField('关键词（逗号分隔）', (sticker.tags || []).join('、'), false, '如：蕾丝、黑丝、自拍、撒娇');
  const detailsField = makeField('画面内容与细节（AI 凭此了解图里有什么）', sticker.details, true, '描述人物表情、姿势、服装材质、动作等');
  const bgField = makeField('背景与氛围', sticker.background, false, '如：暖光卧室、海边日落、俏皮轻松');
  const usageField = makeField('适用聊天场景', sticker.usage, false, '如：对方想看蕾丝穿搭或晚安撒娇时');

  const actions = document.createElement('div');
  actions.className = 'qiban-sticker-dialog-footer';
  const cancelBtn = document.createElement('button');
  cancelBtn.type = 'button';
  cancelBtn.textContent = '取消';
  cancelBtn.addEventListener('click', () => overlay.remove());

  const saveBtn = document.createElement('button');
  saveBtn.type = 'button';
  saveBtn.className = 'is-primary';
  saveBtn.textContent = '保存档案';
  saveBtn.addEventListener('click', () => {
    const label = labelField.input.value.trim().slice(0, 40) || sticker.label;
    const meta = {
      label,
      tags: normalizeTags(tagsField.input.value),
      details: detailsField.input.value.trim().slice(0, 300),
      background: bgField.input.value.trim().slice(0, 160),
      usage: usageField.input.value.trim().slice(0, 160),
      analyzed: true
    };
    applyMetadataToSticker(sticker, meta, options);
    overlay.remove();
    onSaved?.();
  });

  actions.append(cancelBtn, saveBtn);
  dialog.append(h3, labelField.wrap, tagsField.wrap, detailsField.wrap, bgField.wrap, usageField.wrap, actions);
  overlay.appendChild(dialog);
  overlay.addEventListener('click', event => { if (event.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
}

function renderStickerManager(container, options) {
  const { character = null, staged = false, onChanged } = options;
  container.innerHTML = '';

  const resolved = staged
    ? { enabled: stagedCreatePack.enabled, stickers: stagedCreatePack.stickers.map(item => ({ ...item, origin: 'web' })) }
    : resolveCharacterStickerPack(character, readStore(), nativeContacts());

  const analyzedCount = resolved.stickers.filter(item => item.analyzed).length;
  const pendingCount = resolved.stickers.length - analyzedCount;

  const header = document.createElement('div');
  header.className = 'qiban-sticker-header';

  const titleWrap = document.createElement('div');
  const title = document.createElement('strong');
  title.textContent = character
    ? `角色专属 AI 表情包（${character.name} · ${resolved.stickers.length} 张 · 已识图 ${analyzedCount} 张）`
    : `角色专属 AI 表情包（已暂存 ${resolved.stickers.length} 张）`;
  const desc = document.createElement('p');
  desc.className = 'qiban-sticker-hint';
  desc.textContent = '支持最高 1GB 的 .zip 表情包流式解压到当前角色。建议导入后点「AI 识图打标」让 AI 看懂画面细节与背景；聊天时 AI 会在文字回复后自主决定是否补发一张表情包。';
  titleWrap.append(title, desc);
  header.appendChild(titleWrap);

  const controls = document.createElement('div');
  controls.className = 'qiban-sticker-controls';

  const toggleLabel = document.createElement('label');
  toggleLabel.className = 'qiban-sticker-toggle';
  const toggleInput = document.createElement('input');
  toggleInput.type = 'checkbox';
  toggleInput.checked = resolved.enabled !== false;
  toggleInput.addEventListener('change', () => {
    if (staged) {
      stagedCreatePack.enabled = toggleInput.checked;
    } else if (character) {
      const { pack } = getWebPackForCharacter(character);
      saveWebPackForCharacter(character, { ...pack, enabled: toggleInput.checked });
    }
    onChanged?.();
  });
  const toggleText = document.createElement('span');
  toggleText.textContent = '允许 AI 在文字回复后自主补发表情包';
  toggleLabel.append(toggleInput, toggleText);

  const btnRow = document.createElement('div');
  btnRow.className = 'qiban-sticker-btn-row';

  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = '.zip,application/zip,image/png,image/jpeg,image/webp,image/gif';
  fileInput.multiple = true;
  fileInput.hidden = true;

  const importBtn = document.createElement('button');
  importBtn.type = 'button';
  importBtn.className = 'btn character-secondary-btn qiban-sticker-import-btn';
  importBtn.textContent = '导入表情包 (.zip / 图片)';
  importBtn.addEventListener('click', () => fileInput.click());

  const statusLine = document.createElement('div');
  statusLine.className = 'qiban-sticker-status hidden';

  fileInput.addEventListener('change', async () => {
    if (!fileInput.files?.length) return;
    importBtn.disabled = true;
    const previousText = importBtn.textContent;
    importBtn.textContent = '正在解压导入…';
    statusLine.classList.remove('hidden');
    statusLine.textContent = '正在读取压缩包目录…';
    try {
      const onProgress = text => { statusLine.textContent = text; };
      if (staged) {
        const result = await ingestFilesIntoList(fileInput.files, stagedCreatePack.stickers, onProgress);
        stagedCreatePack = { ...stagedCreatePack, stickers: result.stickers };
        notify(`已解压暂存 ${result.added} 张表情包，创建角色后自动绑定并可一键 AI 识图打标。`);
      } else if (character) {
        const { pack } = getWebPackForCharacter(character);
        const result = await ingestFilesIntoList(fileInput.files, pack.stickers, onProgress);
        saveWebPackForCharacter(character, { ...pack, enabled: pack.enabled !== false, stickers: result.stickers });
        notify(`已为「${character.name}」解压导入 ${result.added} 张表情包` + (result.skipped ? `（跳过 ${result.skipped} 项）` : '') + '。建议点击「AI 识图打标」让 AI 了解画面细节。');
      }
      renderStickerManager(container, options);
      onChanged?.();
    } catch (error) {
      notify(error?.message || '表情包导入失败。');
      statusLine.classList.add('hidden');
    } finally {
      fileInput.value = '';
      importBtn.disabled = false;
      importBtn.textContent = previousText;
    }
  });

  btnRow.append(importBtn, fileInput);

  if (resolved.stickers.length) {
    const runAnalyze = async reanalyzeAll => {
      if (activeAnalyzeAbort) {
        activeAnalyzeAbort.aborted = true;
        activeAnalyzeAbort = null;
        renderStickerManager(container, options);
        return;
      }
      const targets = resolved.stickers.filter(item => reanalyzeAll || !item.analyzed);
      if (!targets.length) {
        notify('当前角色的表情包已全部完成 AI 识图打标。');
        return;
      }
      const token = { aborted: false };
      activeAnalyzeAbort = token;
      analyzeBtn.textContent = '停止识图';
      statusLine.classList.remove('hidden');
      let done = 0;
      let failed = 0;
      let firstError = '';
      for (const sticker of targets) {
        if (token.aborted) break;
        statusLine.textContent = `AI 正在识别「${sticker.label}」（${done + 1}/${targets.length}）…`;
        try {
          const meta = await analyzeSingleSticker(sticker, character);
          if (token.aborted) break;
          applyMetadataToSticker(sticker, meta, { character, staged });
          done++;
        } catch (error) {
          failed++;
          if (!firstError) firstError = error?.message || '识图失败';
        }
      }
      if (activeAnalyzeAbort === token) activeAnalyzeAbort = null;
      if (done > 0) {
        notify(`AI 识图打标完成：成功 ${done} 张` + (failed ? `，失败 ${failed} 张（${firstError}）` : '。现在 AI 已了解画面内容、细节与背景。'));
      } else if (firstError) {
        notify(`AI 识图打标失败：${firstError}`);
      }
      renderStickerManager(container, options);
      onChanged?.();
    };

    const analyzeBtn = document.createElement('button');
    analyzeBtn.type = 'button';
    analyzeBtn.className = 'btn character-secondary-btn qiban-sticker-vision-btn';
    analyzeBtn.textContent = activeAnalyzeAbort
      ? '停止识图'
      : pendingCount > 0
        ? `AI 识图打标 (${pendingCount})`
        : 'AI 重新识图';
    analyzeBtn.addEventListener('click', () => runAnalyze(pendingCount === 0));
    btnRow.appendChild(analyzeBtn);
  }

  const webStickers = staged ? stagedCreatePack.stickers : (getWebPackForCharacter(character).pack.stickers || []);
  if (webStickers.length) {
    const clearBtn = document.createElement('button');
    clearBtn.type = 'button';
    clearBtn.className = 'btn character-secondary-btn qiban-sticker-clear-btn';
    clearBtn.textContent = '清空已导入';
    clearBtn.addEventListener('click', async () => {
      for (const item of webStickers) {
        if (item.dataRef) await deleteMedia(item.dataRef).catch(() => {});
      }
      if (staged) {
        stagedCreatePack = { ...stagedCreatePack, stickers: [] };
      } else if (character) {
        const { pack } = getWebPackForCharacter(character);
        saveWebPackForCharacter(character, { ...pack, stickers: [] });
      }
      renderStickerManager(container, options);
      onChanged?.();
    });
    btnRow.appendChild(clearBtn);
  }

  controls.append(toggleLabel, btnRow, statusLine);
  container.append(header, controls);

  if (!resolved.stickers.length) {
    const empty = document.createElement('div');
    empty.className = 'qiban-sticker-empty';
    empty.textContent = '尚未导入此角色的表情包。支持直接导入最高 1GB 的 .zip 文件自动解压，再用「AI 识图打标」自动理解每张图的内容、服装细节和背景。';
    container.appendChild(empty);
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'qiban-sticker-grid';

  for (const sticker of resolved.stickers) {
    const card = document.createElement('div');
    card.className = 'qiban-sticker-card';
    if (sticker.analyzed) card.classList.add('is-analyzed');

    const img = document.createElement('img');
    img.className = 'qiban-sticker-thumb';
    img.alt = sticker.label;
    img.src = 'src/_logo/emoji/chat.svg';
    loadThumbSrc(img, sticker);

    const meta = document.createElement('div');
    meta.className = 'qiban-sticker-meta';

    const labelEl = document.createElement('span');
    labelEl.className = 'qiban-sticker-label';
    labelEl.textContent = sticker.label;
    labelEl.title = [sticker.id, sticker.label, sticker.details, sticker.background].filter(Boolean).join(' · ');

    if (sticker.details) {
      const detailEl = document.createElement('span');
      detailEl.className = 'qiban-sticker-detail-snippet';
      detailEl.textContent = sticker.details;
      meta.append(labelEl, detailEl);
    } else {
      meta.append(labelEl);
    }

    const actions = document.createElement('div');
    actions.className = 'qiban-sticker-card-actions';

    const editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.textContent = sticker.analyzed ? '档案' : '编辑';
    editBtn.addEventListener('click', () => {
      openStickerMetaEditor(sticker, { character, staged }, () => {
        renderStickerManager(container, options);
        onChanged?.();
      });
    });
    actions.appendChild(editBtn);

    if (sticker.origin === 'web') {
      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'is-danger';
      removeBtn.textContent = '删';
      removeBtn.addEventListener('click', async () => {
        if (sticker.dataRef) await deleteMedia(sticker.dataRef).catch(() => {});
        if (staged) {
          stagedCreatePack.stickers = stagedCreatePack.stickers.filter(item => item.id !== sticker.id);
        } else if (character) {
          const { pack } = getWebPackForCharacter(character);
          saveWebPackForCharacter(character, {
            ...pack,
            stickers: (pack.stickers || []).filter(item => item.id !== sticker.id)
          });
        }
        renderStickerManager(container, options);
        onChanged?.();
      });
      actions.appendChild(removeBtn);
    } else {
      const badge = document.createElement('span');
      badge.className = 'qiban-sticker-native-badge';
      badge.textContent = 'App';
      actions.appendChild(badge);
    }

    meta.appendChild(actions);
    card.append(img, meta);
    grid.appendChild(card);
  }

  container.appendChild(grid);
}

function closeStickerModal() {
  if (activeAnalyzeAbort) {
    activeAnalyzeAbort.aborted = true;
    activeAnalyzeAbort = null;
  }
  activeModal?.remove();
  activeModal = null;
}

export function openCharacterStickerModal(character) {
  if (!character) return;
  closeStickerModal();
  const overlay = document.createElement('div');
  overlay.className = 'qiban-message-overlay';
  const dialog = document.createElement('section');
  dialog.className = 'qiban-message-dialog qiban-sticker-dialog';
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-label', `${character.name} 的表情包`);

  const body = document.createElement('div');
  body.className = 'qiban-sticker-section';
  renderStickerManager(body, {
    character,
    onChanged: () => updateDetailStickerButton(character)
  });

  const footer = document.createElement('div');
  footer.className = 'qiban-sticker-dialog-footer';
  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'is-primary';
  closeBtn.textContent = '完成';
  closeBtn.addEventListener('click', closeStickerModal);
  footer.appendChild(closeBtn);

  dialog.append(body, footer);
  overlay.appendChild(dialog);
  overlay.addEventListener('click', event => {
    if (event.target === overlay) closeStickerModal();
  });
  document.body.appendChild(overlay);
  activeModal = overlay;
}

export function commitStagedStickersToCharacter(character) {
  if (!character || (!stagedCreatePack.stickers.length && stagedCreatePack.enabled === true)) return;
  saveWebPackForCharacter(character, stagedCreatePack);
  stagedCreatePack = { enabled: true, stickers: [] };
  const createMount = document.getElementById('qiban-char-create-stickers');
  if (createMount) renderStickerManager(createMount, { staged: true });
}

export function resetStagedStickers() {
  stagedCreatePack = { enabled: true, stickers: [] };
  const createMount = document.getElementById('qiban-char-create-stickers');
  if (createMount) renderStickerManager(createMount, { staged: true });
}

export function refreshCharacterStickerEditPanel(character) {
  const mount = document.getElementById('qiban-char-edit-stickers');
  if (!mount || !character) return;
  renderStickerManager(mount, {
    character,
    onChanged: () => updateDetailStickerButton(character)
  });
}

export function updateDetailStickerButton(character) {
  const btn = document.getElementById('qiban-detail-stickers-btn');
  if (!btn) return;
  if (!character) {
    btn.classList.add('hidden');
    return;
  }
  btn.classList.remove('hidden');
  const pack = resolveCharacterStickerPack(character, readStore(), nativeContacts());
  const label = btn.querySelector('span');
  if (label) {
    label.textContent = pack.stickers.length ? `角色表情包 (${pack.stickers.length})` : '导入角色表情包';
  }
}

export function initQibanCharacterStickers(context) {
  hooks = context;
  const createForm = document.getElementById('character-form');
  if (createForm && !document.getElementById('qiban-char-create-stickers')) {
    const mount = document.createElement('section');
    mount.id = 'qiban-char-create-stickers';
    mount.className = 'character-section qiban-sticker-section';
    const actions = createForm.querySelector('.character-import-actions');
    if (actions) actions.before(mount);
    else createForm.appendChild(mount);
    renderStickerManager(mount, { staged: true });
  }

  const editForm = document.getElementById('character-edit-form');
  if (editForm && !document.getElementById('qiban-char-edit-stickers')) {
    const mount = document.createElement('section');
    mount.id = 'qiban-char-edit-stickers';
    mount.className = 'character-section qiban-sticker-section';
    const actions = editForm.querySelector('.character-import-actions');
    if (actions) actions.before(mount);
    else editForm.appendChild(mount);
  }

  const detailAction = document.getElementById('detail-character-action');
  if (detailAction?.parentElement && !document.getElementById('qiban-detail-stickers-btn')) {
    const btn = document.createElement('button');
    btn.id = 'qiban-detail-stickers-btn';
    btn.type = 'button';
    btn.className = detailAction.className || 'btn';
    btn.innerHTML = '<span>角色表情包</span>';
    btn.addEventListener('click', () => {
      const current = hooks?.getActivePrivateCharacter?.();
      if (current) openCharacterStickerModal(current);
    });
    detailAction.after(btn);
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeStickerModal();
  });
}
