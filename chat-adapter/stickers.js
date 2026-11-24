/* Fritia UI & IndexedDB integration for per-character AI sticker packs. GPL-3.0-or-later. */
import { saveBlobAsMedia, getMediaDataUrl, deleteMedia } from './media_store.js';
import { inflateSync } from '../vendor/fflate/fflate.js';
import {
  MAX_STICKERS_PER_CHARACTER,
  MAX_STICKER_IMAGE_BYTES,
  STICKER_IMAGE_MIMES,
  extensionOf,
  deriveStickerLabel,
  parseZipImageEntries,
  primaryStickerKey,
  characterStickerKeys,
  resolveCharacterStickerPack,
  buildStickerCapabilityPrompt,
  extractStickerFromReply,
  formatHistoryStickerHint
} from './qiban_stickers_core.js';

const STORAGE_KEY = 'fritia_qiban_char_stickers';
let hooks = null;
let stagedCreatePack = { enabled: true, stickers: [] };
let activeModal = null;

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

async function ingestFilesIntoList(files, currentList = []) {
  const list = [...currentList];
  let added = 0;
  let skipped = 0;

  async function appendImage(name, mime, bytesOrBlob) {
    if (list.length >= MAX_STICKERS_PER_CHARACTER) {
      skipped++;
      return;
    }
    const blob = bytesOrBlob instanceof Blob ? bytesOrBlob : new Blob([bytesOrBlob], { type: mime });
    if (!blob.size || blob.size > MAX_STICKER_IMAGE_BYTES) {
      skipped++;
      return;
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
      width: dims.width,
      height: dims.height
    });
    added++;
  }

  for (const file of Array.from(files || [])) {
    const ext = extensionOf(file.name);
    if (ext === 'zip' || file.type === 'application/zip' || file.type === 'application/x-zip-compressed') {
      const buffer = await file.arrayBuffer();
      const parsed = parseZipImageEntries(new Uint8Array(buffer), (payload, expectedSize) =>
        inflateSync(payload, expectedSize > 0 ? { out: new Uint8Array(expectedSize) } : undefined)
      );
      skipped += parsed.skipped;
      if (!parsed.entries.length) {
        throw new Error(`压缩包「${file.name}」中没有找到 PNG / JPG / WEBP / GIF 表情图片。`);
      }
      for (const entry of parsed.entries) {
        await appendImage(entry.name, entry.mime, entry.data);
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
  return { store, key, pack: { enabled: true, stickers: [] } };
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
    stickers: Array.isArray(pack.stickers) ? pack.stickers : []
  };
  writeStore(store);
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

function renderStickerManager(container, options) {
  const { character = null, staged = false, onChanged } = options;
  container.innerHTML = '';

  const resolved = staged
    ? { enabled: stagedCreatePack.enabled, stickers: stagedCreatePack.stickers.map(item => ({ ...item, origin: 'web' })) }
    : resolveCharacterStickerPack(character, readStore(), nativeContacts());

  const header = document.createElement('div');
  header.className = 'qiban-sticker-header';

  const titleWrap = document.createElement('div');
  const title = document.createElement('strong');
  title.textContent = character
    ? `角色专属 AI 表情包（${character.name} · ${resolved.stickers.length} 张）`
    : `角色专属 AI 表情包（已暂存 ${resolved.stickers.length} 张）`;
  const desc = document.createElement('p');
  desc.className = 'qiban-sticker-hint';
  desc.textContent = '支持直接导入 .zip 表情包（自动解压到当前角色）或单张图片。AI 会根据对话语境自行决定是否发送，不会每句必发。';
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
  toggleText.textContent = '允许 AI 自主决定发送表情包';
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

  fileInput.addEventListener('change', async () => {
    if (!fileInput.files?.length) return;
    importBtn.disabled = true;
    const previousText = importBtn.textContent;
    importBtn.textContent = '正在解压导入…';
    try {
      if (staged) {
        const result = await ingestFilesIntoList(fileInput.files, stagedCreatePack.stickers);
        stagedCreatePack = { ...stagedCreatePack, stickers: result.stickers };
        notify(`已解压暂存 ${result.added} 张表情包，创建角色后自动绑定到该角色。`);
      } else if (character) {
        const { pack } = getWebPackForCharacter(character);
        const result = await ingestFilesIntoList(fileInput.files, pack.stickers);
        saveWebPackForCharacter(character, { enabled: pack.enabled !== false, stickers: result.stickers });
        notify(`已为「${character.name}」解压导入 ${result.added} 张表情包` + (result.skipped ? `（跳过 ${result.skipped} 项）` : '') + '。');
      }
      renderStickerManager(container, options);
      onChanged?.();
    } catch (error) {
      notify(error?.message || '表情包导入失败。');
    } finally {
      fileInput.value = '';
      importBtn.disabled = false;
      importBtn.textContent = previousText;
    }
  });

  btnRow.append(importBtn, fileInput);

  const webStickers = staged ? stagedCreatePack.stickers : getWebPackForCharacter(character).pack.stickers;
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

  controls.append(toggleLabel, btnRow);
  container.append(header, controls);

  if (!resolved.stickers.length) {
    const empty = document.createElement('div');
    empty.className = 'qiban-sticker-empty';
    empty.textContent = '尚未导入此角色的表情包。文件名会自动作为 AI 理解表情含义的标签（如“吃惊.png”→“吃惊”）。';
    container.appendChild(empty);
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'qiban-sticker-grid';

  for (const sticker of resolved.stickers) {
    const card = document.createElement('div');
    card.className = 'qiban-sticker-card';

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
    labelEl.title = `${sticker.id} · ${sticker.label}`;

    const actions = document.createElement('div');
    actions.className = 'qiban-sticker-card-actions';

    if (sticker.origin === 'web') {
      const renameBtn = document.createElement('button');
      renameBtn.type = 'button';
      renameBtn.textContent = '改标签';
      renameBtn.addEventListener('click', () => {
        const nextLabel = window.prompt('修改给 AI 识别的表情语义标签：', sticker.label);
        if (nextLabel == null) return;
        const trimmed = nextLabel.trim().slice(0, 40);
        if (!trimmed) return;
        if (staged) {
          stagedCreatePack.stickers = stagedCreatePack.stickers.map(item =>
            item.id === sticker.id ? { ...item, label: trimmed } : item
          );
        } else if (character) {
          const { pack } = getWebPackForCharacter(character);
          saveWebPackForCharacter(character, {
            ...pack,
            stickers: pack.stickers.map(item => item.id === sticker.id ? { ...item, label: trimmed } : item)
          });
        }
        renderStickerManager(container, options);
        onChanged?.();
      });

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
            stickers: pack.stickers.filter(item => item.id !== sticker.id)
          });
        }
        renderStickerManager(container, options);
        onChanged?.();
      });

      actions.append(renameBtn, removeBtn);
    } else {
      const badge = document.createElement('span');
      badge.className = 'qiban-sticker-native-badge';
      badge.textContent = 'App人设';
      actions.appendChild(badge);
    }

    meta.append(labelEl, actions);
    card.append(img, meta);
    grid.appendChild(card);
  }

  container.appendChild(grid);
}

function closeStickerModal() {
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
