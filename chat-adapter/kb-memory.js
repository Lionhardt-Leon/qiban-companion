import {
  KB_CATEGORIES,
  MEM_CATEGORIES,
  categoryMeta,
  loadStructuredItems,
  saveStructuredItems,
  normalizeItem,
  buildStructuredPromptBlock,
  splitTextChunks,
  buildAiOrganizePrompt,
  buildAiExtractMemoryPrompt,
  parseAiOrganizedItems,
  organizeTextLocally,
  mergeOrganizedItems,
  extractTextsFromZipBuffer
} from './qiban_kb_memory_core.js';

let hooks = null;
let overlay = null;
let activeTab = 'kb';
let filterCategory = 'all';
let filterScope = 'current';
let searchText = '';
let busyText = '';
let statusNote = '';
let editingId = null;

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function activeCharacter() {
  return hooks?.getActivePrivateCharacter?.() || null;
}

function activeConversation() {
  const store = hooks?.getStore?.();
  if (!store) return null;
  return store.conversations?.find(c => c.id === store.activeConversationId) || null;
}

async function callAiOrganize(messages) {
  const resp = await fetch('https://qiban.app/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'qiban-managed',
      messages,
      temperature: 0.2,
      max_tokens: 2400,
      stream: false
    })
  });
  if (!resp.ok) {
    const errText = await resp.text().catch(() => '');
    throw new Error(`HTTP ${resp.status}${errText ? '：' + errText.slice(0, 100) : ''}`);
  }
  const data = await resp.json();
  const choice = data?.choices?.[0];
  const msg = choice?.message || {};
  const content = String(msg.content || '').trim();
  const reasoning = String(msg.reasoning_content || '').trim();
  if (content) return content;
  if (reasoning) return reasoning;
  const reason = choice?.finish_reason ? `（finish_reason=${choice.finish_reason}）` : '';
  throw new Error('模型返回内容为空' + reason);
}

function readFileTexts(files) {
  return Promise.all([...files].map(async file => {
    if (/\.zip$/i.test(file.name)) {
      const ab = await file.arrayBuffer();
      return extractTextsFromZipBuffer(ab);
    }
    const text = await file.text();
    return text.trim() ? [{ name: file.name, text }] : [];
  })).then(groups => groups.flat());
}

async function runFileImport(files, kind, scope, useAi = false) {
  if (!files?.length || busyText) return;
  const ch = activeCharacter();
  const charName = scope === 'global' ? '' : (ch?.name || '');
  try {
    busyText = useAi ? '正在读取文件并准备 AI 分析…' : '正在极速本地解析并智能分类…';
    statusNote = '';
    renderModal();
    const docs = await readFileTexts(files);
    if (!docs.length) throw new Error('所选文件中没有可解析的文本（支持 .txt / .md / .json / .zip）。');

    if (!useAi) {
      let collected = [];
      for (const doc of docs) {
        collected.push(...organizeTextLocally(doc.text, {
          kind,
          fileName: doc.name,
          characterName: charName,
          scope,
          source: 'local-import'
        }));
      }
      const existing = loadStructuredItems(kind);
      const merged = mergeOrganizedItems(existing, collected, kind);
      saveStructuredItems(merged.items, kind);
      statusNote = `⚡ 极速智能导入完成：解析 ${docs.length} 个文件，新增 ${merged.added} 条、更新 ${merged.updated} 条（已自动分类、提炼关键词、设置权重与提示词映射）。`;
      return;
    }

    const tasks = [];
    for (const doc of docs) {
      for (const chunk of splitTextChunks(doc.text, 6000)) {
        tasks.push({ name: doc.name, text: chunk });
      }
    }
    const maxBatches = Math.min(tasks.length, 24);
    let collected = [];
    let aiSucceeded = 0;
    let fallbackCount = 0;
    let lastAiErr = '';

    // Run up to 2 chunks concurrently for faster multi-file AI analysis
    const concurrency = 2;
    let done = 0;
    let cursor = 0;
    const worker = async () => {
      while (cursor < maxBatches) {
        const idx = cursor++;
        const task = tasks[idx];
        busyText = `✨ AI 正在分析归纳「${task.name}」（已完成 ${done}/${maxBatches}）…`;
        renderModal();
        let parsed = [];
        try {
          const prompt = buildAiOrganizePrompt({ kind, fileName: task.name, characterName: charName, chunkText: task.text });
          const raw = await callAiOrganize(prompt);
          parsed = parseAiOrganizedItems(raw, { kind, scope, source: 'ai-import' });
          if (parsed.length) aiSucceeded++;
          else lastAiErr = '模型未返回标准 JSON 条目';
        } catch (err) {
          lastAiErr = err?.message || String(err);
        }
        if (!parsed.length) {
          parsed = organizeTextLocally(task.text, {
            kind,
            fileName: task.name,
            characterName: charName,
            scope,
            source: 'local-fallback'
          });
          fallbackCount++;
        }
        collected.push(...parsed);
        done++;
        busyText = `✨ AI 正在分析归纳（已完成 ${done}/${maxBatches}）…`;
        renderModal();
      }
    };
    await Promise.all(Array.from({ length: Math.min(concurrency, maxBatches) }, worker));

    const existing = loadStructuredItems(kind);
    const merged = mergeOrganizedItems(existing, collected, kind);
    saveStructuredItems(merged.items, kind);
    if (fallbackCount > 0 && aiSucceeded === 0) {
      statusNote = `已自动兜底入库：远端模型未返回有效条目（${lastAiErr || '可能触发接口审核或输出为空'}），已自动切换本机智能引擎完成整理，新增 ${merged.added} 条、更新 ${merged.updated} 条！`;
    } else if (fallbackCount > 0) {
      statusNote = `导入完成：共解析 ${docs.length} 个文件，新增 ${merged.added} 条、更新 ${merged.updated} 条（其中 ${fallbackCount} 段自动使用本机引擎兜底）。`;
    } else {
      statusNote = `✨ AI 深度整理完成：共解析 ${docs.length} 个文件，新增 ${merged.added} 条、更新 ${merged.updated} 条。`;
    }
  } catch (err) {
    statusNote = '导入失败：' + (err?.message || String(err));
  } finally {
    busyText = '';
    renderModal();
  }
}

async function runAiExtractChatMemory() {
  if (busyText) return;
  const ch = activeCharacter();
  const conv = activeConversation();
  const store = hooks?.getStore?.();
  if (!ch || !conv || !store) {
    statusNote = '请先打开一个角色的私聊，再从对话提炼长期记忆。';
    renderModal();
    return;
  }
  const msgs = (store.messages?.[conv.id] || []).filter(m => ['user', 'assistant'].includes(m.role) && m.text);
  if (!msgs.length) {
    statusNote = '当前对话暂无可提炼的聊天记录。';
    renderModal();
    return;
  }
  try {
    busyText = `AI 正在从「${ch.name}」的近期对话提炼长期记忆…`;
    statusNote = '';
    renderModal();
    const prompt = buildAiExtractMemoryPrompt({
      characterName: ch.name,
      userName: window.QibanProfile?.userName || '你',
      messages: msgs
    });
    const raw = await callAiOrganize(prompt);
    const scope = ch.qibanId || ch.id || 'global';
    const parsed = parseAiOrganizedItems(raw, { kind: 'memory', scope, source: 'ai-chat' });
    if (!parsed.length) {
      statusNote = '近期对话中未发现需要新增的长期记忆。';
    } else {
      const existing = loadStructuredItems('memory');
      const merged = mergeOrganizedItems(existing, parsed, 'memory');
      saveStructuredItems(merged.items, 'memory');
      statusNote = `已从对话自动提炼记忆：新增 ${merged.added} 条、更新 ${merged.updated} 条。`;
    }
  } catch (err) {
    statusNote = 'AI 提炼记忆失败：' + (err?.message || String(err));
  } finally {
    busyText = '';
    renderModal();
  }
}

function migrateLegacyMemories() {
  try {
    const raw = JSON.parse(localStorage.getItem('fritia_long_term_memory') || 'null');
    const list = Array.isArray(raw?.memories) ? raw.memories : [];
    if (!list.length) {
      statusNote = '旧版图谱记忆库中没有可迁移的文本记忆。';
      renderModal();
      return;
    }
    const ch = activeCharacter();
    const incoming = list.map(m => ({
      title: String(m.text || '').slice(0, 20) || '旧版记忆',
      category: 'experience',
      content: String(m.text || ''),
      keywords: Array.isArray(m.keywords) ? m.keywords : [],
      weight: 65,
      activation: 'keyword',
      scope: ch?.qibanId || ch?.id || 'global',
      source: 'migrated'
    }));
    const existing = loadStructuredItems('memory');
    const merged = mergeOrganizedItems(existing, incoming, 'memory');
    saveStructuredItems(merged.items, 'memory');
    statusNote = `已从旧版长期记忆迁移 ${merged.added} 条（更新 ${merged.updated} 条），旧版原数据保持完好。`;
  } catch (err) {
    statusNote = '迁移失败：' + (err?.message || String(err));
  }
  renderModal();
}

function openManager(tab = 'kb') {
  activeTab = tab;
  filterCategory = 'all';
  editingId = null;
  statusNote = '';
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'qkb-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.addEventListener('click', e => {
      if (e.target === overlay && !busyText) closeManager();
    });
    document.body.appendChild(overlay);
  }
  renderModal();
}

function closeManager() {
  if (busyText) return;
  overlay?.remove();
  overlay = null;
}

function renderModal() {
  if (!overlay) return;
  const ch = activeCharacter();
  const charScope = ch?.qibanId || ch?.id || 'global';
  const charName = ch?.name || '当前角色';
  const kind = activeTab;
  const cats = kind === 'memory' ? MEM_CATEGORIES : KB_CATEGORIES;
  const allItems = loadStructuredItems(kind);

  const visible = allItems.filter(item => {
    if (filterCategory !== 'all' && item.category !== filterCategory) return false;
    if (filterScope === 'current' && ch) {
      if (item.scope !== 'global' && item.scope !== ch.id && item.scope !== ch.qibanId) return false;
    }
    if (searchText.trim()) {
      const q = searchText.trim().toLowerCase();
      const hay = `${item.title} ${item.content} ${(item.keywords || []).join(' ')} ${item.promptMapping}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  }).sort((a, b) => b.weight - a.weight || b.updatedAt - a.updatedAt);

  const editItem = editingId ? allItems.find(x => x.id === editingId) : null;

  overlay.innerHTML = `
    <div class="qkb-sheet">
      <header class="qkb-head">
        <div class="qkb-tabs">
          <button type="button" class="qkb-tab ${kind === 'kb' ? 'is-active' : ''}" data-tab="kb">智能知识库 (${loadStructuredItems('kb').length})</button>
          <button type="button" class="qkb-tab ${kind === 'memory' ? 'is-active' : ''}" data-tab="memory">智能长期记忆 (${loadStructuredItems('memory').length})</button>
        </div>
        <button type="button" class="qkb-close" data-close ${busyText ? 'disabled' : ''}>关闭</button>
      </header>

      <div class="qkb-actions">
        <label class="qkb-btn qkb-btn-primary ${busyText ? 'is-disabled' : ''}">
          ⚡ 极速智能导入 (.txt/.md/.zip 秒入库)
          <input type="file" class="qkb-file-input qkb-file-fast" multiple accept=".txt,.md,.markdown,.json,.zip,text/plain,application/zip" ${busyText ? 'disabled' : ''}>
        </label>
        <label class="qkb-btn qkb-btn-ai ${busyText ? 'is-disabled' : ''}">
          ✨ AI 深度整理 (自动兜底)
          <input type="file" class="qkb-file-input qkb-file-ai" multiple accept=".txt,.md,.markdown,.json,.zip,text/plain,application/zip" ${busyText ? 'disabled' : ''}>
        </label>
        ${kind === 'memory' ? `
          <button type="button" class="qkb-btn qkb-btn-accent" data-ai-extract ${busyText ? 'disabled' : ''}>🧠 从当前对话提炼</button>
          <button type="button" class="qkb-btn" data-migrate ${busyText ? 'disabled' : ''}>迁移旧版记忆</button>
        ` : ''}
        <button type="button" class="qkb-btn" data-new-item ${busyText ? 'disabled' : ''}>＋ 手动新建</button>
      </div>

      ${busyText ? `<div class="qkb-status is-busy">${esc(busyText)}</div>` : ''}
      ${statusNote ? `<div class="qkb-status">${esc(statusNote)}</div>` : ''}

      <div class="qkb-toolbar">
        <input type="search" class="qkb-search" placeholder="搜索标题、正文、关键词…" value="${esc(searchText)}">
        <select class="qkb-scope-filter">
          <option value="current" ${filterScope === 'current' ? 'selected' : ''}>当前角色 + 全局 (${esc(charName)})</option>
          <option value="all" ${filterScope === 'all' ? 'selected' : ''}>全部角色</option>
        </select>
      </div>

      <div class="qkb-cats">
        <button type="button" class="qkb-chip ${filterCategory === 'all' ? 'is-active' : ''}" data-cat="all">全部 (${visible.length})</button>
        ${cats.map(c => `<button type="button" class="qkb-chip ${filterCategory === c.id ? 'is-active' : ''}" data-cat="${c.id}">${esc(c.label)}</button>`).join('')}
      </div>

      ${editingId ? renderEditorHtml(editItem, kind, charScope, charName) : ''}

      <div class="qkb-list">
        ${visible.length ? visible.map(item => {
          const cat = categoryMeta(item.category, kind);
          const scopeLabel = item.scope === 'global' ? '全局' : (item.scope === ch?.id || item.scope === ch?.qibanId ? charName : '指定角色');
          return `
            <article class="qkb-card ${item.enabled ? '' : 'is-off'}">
              <div class="qkb-card-top">
                <span class="qkb-badge qkb-badge-cat">${esc(cat.label)}</span>
                <span class="qkb-badge ${item.activation === 'always' ? 'qkb-badge-always' : 'qkb-badge-kw'}">${item.activation === 'always' ? '常驻激活' : '关键词触发'}</span>
                <span class="qkb-badge">权重 ${item.weight}</span>
                <span class="qkb-badge">${esc(scopeLabel)}</span>
              </div>
              <h4 class="qkb-card-title">${esc(item.title)}</h4>
              <p class="qkb-card-body">${esc(item.content)}</p>
              <div class="qkb-card-meta">
                <div><b>提示词映射：</b>${esc(item.promptMapping)}</div>
                ${item.keywords?.length ? `<div><b>触发词：</b>${esc(item.keywords.join('、'))}</div>` : ''}
              </div>
              <div class="qkb-card-foot">
                <button type="button" class="qkb-mini" data-toggle="${esc(item.id)}">${item.enabled ? '已启用' : '已停用'}</button>
                <button type="button" class="qkb-mini" data-edit="${esc(item.id)}">编辑</button>
                <button type="button" class="qkb-mini is-danger" data-del="${esc(item.id)}">删除</button>
              </div>
            </article>
          `;
        }).join('') : `<div class="qkb-empty">暂无${kind === 'memory' ? '智能长期记忆' : '智能知识库'}条目。<br>点击上方「✨ AI 自动导入整理」可一次导入多个 .txt 或 .zip 文件，由 AI 自动分类（如身体描述归入身体与外貌）、设置权重、触发词与提示词映射。</div>`}
      </div>
    </div>
  `;

  overlay.querySelector('[data-close]')?.addEventListener('click', closeManager);
  overlay.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (busyText) return;
      activeTab = btn.dataset.tab;
      filterCategory = 'all';
      editingId = null;
      statusNote = '';
      renderModal();
    });
  });
  overlay.querySelector('.qkb-file-fast')?.addEventListener('change', e => {
    const files = e.target.files;
    if (files?.length) runFileImport(files, kind, filterScope === 'current' && ch ? charScope : 'global', false);
  });
  overlay.querySelector('.qkb-file-ai')?.addEventListener('change', e => {
    const files = e.target.files;
    if (files?.length) runFileImport(files, kind, filterScope === 'current' && ch ? charScope : 'global', true);
  });
  overlay.querySelector('[data-ai-extract]')?.addEventListener('click', runAiExtractChatMemory);
  overlay.querySelector('[data-migrate]')?.addEventListener('click', migrateLegacyMemories);
  overlay.querySelector('[data-new-item]')?.addEventListener('click', () => {
    editingId = '__new__';
    renderModal();
  });
  overlay.querySelector('.qkb-search')?.addEventListener('input', e => {
    searchText = e.target.value;
    renderModal();
  });
  overlay.querySelector('.qkb-scope-filter')?.addEventListener('change', e => {
    filterScope = e.target.value;
    renderModal();
  });
  overlay.querySelectorAll('[data-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
      filterCategory = btn.dataset.cat;
      renderModal();
    });
  });
  overlay.querySelectorAll('[data-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const next = allItems.map(x => x.id === btn.dataset.toggle ? { ...x, enabled: !x.enabled, updatedAt: Date.now() } : x);
      saveStructuredItems(next, kind);
      renderModal();
    });
  });
  overlay.querySelectorAll('[data-edit]').forEach(btn => {
    btn.addEventListener('click', () => {
      editingId = btn.dataset.edit;
      renderModal();
    });
  });
  overlay.querySelectorAll('[data-del]').forEach(btn => {
    btn.addEventListener('click', () => {
      const next = allItems.filter(x => x.id !== btn.dataset.del);
      saveStructuredItems(next, kind);
      if (editingId === btn.dataset.del) editingId = null;
      statusNote = '已删除该条目。';
      renderModal();
    });
  });

  const form = overlay.querySelector('.qkb-editor');
  if (form) {
    form.querySelector('[data-cancel-edit]')?.addEventListener('click', () => {
      editingId = null;
      renderModal();
    });
    form.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(form);
      const item = normalizeItem({
        id: editingId === '__new__' ? undefined : editingId,
        title: fd.get('title'),
        category: fd.get('category'),
        content: fd.get('content'),
        keywords: fd.get('keywords'),
        weight: Number(fd.get('weight')),
        activation: fd.get('activation'),
        scope: fd.get('scope'),
        promptMapping: fd.get('promptMapping'),
        enabled: true,
        source: editItem?.source || 'manual'
      }, kind);
      if (!item) {
        statusNote = '正文不能为空。';
        renderModal();
        return;
      }
      const next = editingId === '__new__'
        ? [item, ...allItems]
        : allItems.map(x => x.id === editingId ? item : x);
      saveStructuredItems(next, kind);
      editingId = null;
      statusNote = '条目已保存并生效。';
      renderModal();
    });
  }
}

function renderEditorHtml(item, kind, charScope, charName) {
  const cats = kind === 'memory' ? MEM_CATEGORIES : KB_CATEGORIES;
  const v = item || {
    title: '',
    category: cats[0].id,
    content: '',
    keywords: [],
    weight: 75,
    activation: 'keyword',
    scope: charScope,
    promptMapping: cats[0].defaultMapping
  };
  return `
    <form class="qkb-editor">
      <h4>${item ? '编辑条目' : '新建条目'}</h4>
      <input name="title" placeholder="标题（如：恩雅外貌与服饰特征）" value="${esc(v.title)}" required>
      <div class="qkb-row">
        <select name="category">
          ${cats.map(c => `<option value="${c.id}" ${v.category === c.id ? 'selected' : ''}>${esc(c.label)}</option>`).join('')}
        </select>
        <select name="activation">
          <option value="always" ${v.activation === 'always' ? 'selected' : ''}>常驻激活</option>
          <option value="keyword" ${v.activation === 'keyword' ? 'selected' : ''}>关键词/相关触发</option>
        </select>
      </div>
      <div class="qkb-row">
        <label>权重(1-100): <input type="number" name="weight" min="1" max="100" value="${v.weight}"></label>
        <select name="scope">
          <option value="${esc(charScope)}" ${v.scope !== 'global' ? 'selected' : ''}>绑定：${esc(charName)}</option>
          <option value="global" ${v.scope === 'global' ? 'selected' : ''}>全局生效</option>
        </select>
      </div>
      <input name="keywords" placeholder="触发关键词（逗号或空格分隔）" value="${esc((v.keywords || []).join('，'))}">
      <input name="promptMapping" placeholder="提示词映射（说明 AI 在什么场景使用此条）" value="${esc(v.promptMapping)}">
      <textarea name="content" rows="4" placeholder="条目正文内容…" required>${esc(v.content)}</textarea>
      <div class="qkb-row">
        <button type="submit" class="qkb-btn qkb-btn-primary">保存条目</button>
        <button type="button" class="qkb-btn" data-cancel-edit>取消</button>
      </div>
    </form>
  `;
}

function injectEntryButtons() {
  // 1. Inside chat head (compact quick entry)
  const head = document.querySelector('.chat-head');
  if (head && !head.querySelector('.qkb-head-btn')) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'qkb-head-btn';
    b.textContent = '知识/记忆';
    b.onclick = () => openManager('kb');
    head.appendChild(b);
  }
  // 2. Inside upstream KB modal (AI Auto-Import shortcut)
  const kbUpload = document.getElementById('kb-upload-btn');
  if (kbUpload?.parentElement && !kbUpload.parentElement.querySelector('.qkb-inline-entry')) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'qkb-inline-entry';
    b.textContent = '✨ 打开智能知识库（AI 自动导入 txt/zip、分类、权重、激活与提示词映射）';
    b.onclick = () => openManager('kb');
    kbUpload.parentElement.insertBefore(b, kbUpload);
  }
  // 3. Inside upstream Memory panel (Clean Structured Memory shortcut)
  const memTitle = document.getElementById('memory-node-title');
  if (memTitle?.parentElement && !memTitle.parentElement.querySelector('.qkb-mem-inline')) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'qkb-mem-inline';
    b.textContent = '🧠 切到智能结构化长期记忆';
    b.onclick = () => openManager('memory');
    memTitle.parentElement.appendChild(b);
  }
}

export function initQibanKbMemory(context) {
  hooks = context;
  if (window.QibanNative) {
    window.QibanNative.openSmartKB = () => openManager('kb');
    window.QibanNative.openSmartMemory = () => openManager('memory');
  }
  let scheduled = false;
  const obs = new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    queueMicrotask(() => {
      scheduled = false;
      injectEntryButtons();
    });
  });
  obs.observe(document.body, { childList: true, subtree: true });
  injectEntryButtons();
}

export function buildQibanKbMemoryPrompt(character, query, history) {
  return buildStructuredPromptBlock({ character, query, history });
}
