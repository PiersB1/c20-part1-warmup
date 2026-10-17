(() => {
  const {el, button} = RRUI;
  const $ = selector => document.querySelector(selector);
  const id = new URLSearchParams(location.search).get('id') || Object.keys(window.RRListeningPractices)[0];
  const practice = window.RRListeningPractices[id];
  if (!practice) {
    $('#practice-title').textContent = '没有找到这个练习';
    $('#back-link').textContent = '← 返回主页';
    $('.top-actions').hidden = true;
    return;
  }
  document.title = `${practice.title} · ${practice.label}`;
  $('#practice-title').textContent = practice.title;
  $('#practice-label').textContent = `C${practice.location.book} · Test ${practice.location.test} · Part ${practice.location.part} · ${practice.label}`;
  $('#back-link').href = `select.html?mode=listening&book=${practice.location.book}&test=${practice.location.test}&part=${practice.location.part}`;
  const controllers = [];
  const sectionScores = [];
  practice.sections.forEach((section, index) => {
    const panel = el('section', 'practice-section');panel.id = section.id;
    const heading = el('div', 'section-heading');
    heading.append(el('h2', '', `${String(index + 1).padStart(2, '0')} · ${section.title}`), el('small', '', `${section.items.length} ${['locator','quiz','dictation','route'].includes(section.type) ? '题' : '段'}`));
    panel.append(heading, el('p', 'instruction', section.instruction));
    const questions = el('div', 'questions');panel.append(questions);
    const controller = RRQuestionTypes[section.type].render(section, questions);
    controllers.push(controller);
    const score = el('span', 'section-score');score.setAttribute('role', 'status');
    score.hidden = true;sectionScores.push(score);
    panel.append(score);$('#sections').append(panel);
    const link = el('a', '', `${String(index + 1).padStart(2, '0')} ${section.title}`);link.href = `#${section.id}`;$('#section-nav').append(link);
  });
  const submitArea = el('div', 'practice-submit');
  const checkPractice = button('完成练习并核对答案', 'primary');checkPractice.id = 'check-practice';
  const summary = el('p', 'practice-summary');summary.setAttribute('role', 'status');
  checkPractice.addEventListener('click', () => {
    const results = controllers.map(controller => controller.check());
    results.forEach((result, index) => {
      sectionScores[index].hidden = false;
      sectionScores[index].textContent = `${result.type === 'signal' ? '命中' : '正确'} ${result.correct}/${result.total}${result.type === 'signal' ? ` · 多标 ${result.falsePositives} 处` : ''}`;
    });
    summary.textContent = results.map(result => `${result.title} ${result.correct}/${result.total}${result.type === 'signal' ? `（多标 ${result.falsePositives} 处）` : ''}`).join(' · ');
    autoSave(results);
  });
  submitArea.append(checkPractice, summary);$('#sections').after(submitArea);

  const storageKey = 'rr:listening:records:v2';
  let activeRecordId = null, selectedRecord = null;
  function getAllRecords() {
    try {const value = JSON.parse(localStorage.getItem(storageKey) || '[]');return Array.isArray(value) ? value : [];}
    catch {return [];}
  }
  function getRecords() {return getAllRecords().filter(record => record.practiceId === practice.id);}
  function hasActivity(sections) {
    return sections.some(section => section.details.some(detail => {
      if (section.type === 'locator') return detail.response.question.length || detail.response.source.length;
      if (section.type === 'signal') return detail.played || detail.response.length;
      if (section.type === 'route') return detail.played || detail.response.path.length > 1;
      return Array.isArray(detail.response) ? detail.response.length : Boolean(detail.response);
    }));
  }
  function autoSave(sections) {
    if (!hasActivity(sections)) return;
    try {
      const records = getAllRecords(), existing = records.find(record => record.id === activeRecordId), now = new Date().toISOString();
      const record = {
        schemaVersion: 2, id: existing?.id || `${Date.now()}-${Math.random().toString(36).slice(2,8)}`,
        completedAt: existing?.completedAt || now, updatedAt: now,
        practiceId: practice.id, practiceTitle: practice.title, practiceLabel: practice.label,
        location: practice.location, sections
      };
      const index = records.findIndex(item => item.id === record.id);
      if (index >= 0) records.splice(index, 1);
      records.unshift(record);localStorage.setItem(storageKey, JSON.stringify(records));
      activeRecordId = record.id;$('#save-status').textContent = '已自动保存';
    } catch {$('#save-status').textContent = '保存失败，请检查浏览器的存储设置。';}
  }
  function exportRecord(record) {
    const url = URL.createObjectURL(new Blob([JSON.stringify(record, null, 2)], {type:'application/json;charset=utf-8'}));
    const link = el('a');link.href = url;link.download = `${practice.id}-${record.completedAt.slice(0,10)}-${record.id}.json`;
    document.body.append(link);link.click();link.remove();setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function showDetail(record) {
    const detail = $('#record-detail');detail.replaceChildren();
    detail.append(el('h3', '', record.practiceTitle), el('p', '', new Date(record.updatedAt).toLocaleString('zh-CN')));
    record.sections.forEach(section => {
      detail.append(el('h4', '', `${section.title} · ${section.correct}/${section.total}${section.type === 'signal' ? ` · 多标 ${section.falsePositives}` : ''}`));
      section.details.forEach((item, index) => {
        const box = el('div', 'record-question');box.append(el('strong', '', `${index + 1}. ${item.question}`));
        if (section.type === 'locator') {
          box.append(el('p', '', `问题句：${item.response.question.join(' / ') || '未标记'}`), el('p', '', `原文句：${item.response.source.join(' / ') || '未标记'}`), el('p', '', `标准定位：${item.expected.question.join(' / ')} ↔ ${item.expected.source.join(' / ')}`));
        } else if (section.type === 'signal') {
          box.append(el('p', '', `标记：${item.response.map(value => `${value.toFixed(1)} 秒`).join('、') || '无'}`), el('p', '', `标准：${item.expected.map(cue => `${cue.start.toFixed(1)} 秒`).join('、')}`));
        } else if (section.type === 'route') {
          box.append(el('p', '', `你的路线：${item.response.labels.join(' → ')}`),el('p', '', `标准路线：${item.expected.labels.join(' → ')}`),el('p', '', `终点：${item.response.destination} · ${item.correct?'路线正确':'路线需调整'}`));
        } else box.append(el('p', '', `作答：${item.response || '未匹配'} · 对应表达：${item.expected}`));
        detail.append(box);
      });
    });
    const actions = el('div', 'record-actions');
    const exportButton = button('导出这次记录 JSON', 'primary');exportButton.addEventListener('click', () => exportRecord(record));
    const remove = button('删除这次记录', 'secondary danger');remove.addEventListener('click', () => {
      if (!confirm('确定删除这次做题记录吗？')) return;
      try {
        localStorage.setItem(storageKey, JSON.stringify(getAllRecords().filter(item => item.id !== record.id)));
        if (activeRecordId === record.id) {activeRecordId = null;$('#save-status').textContent = '';}
        selectedRecord = null;renderRecords();
      } catch {alert('删除失败，请检查浏览器的存储设置。');}
    });actions.append(exportButton, remove);detail.append(actions);
  }
  function renderRecords() {
    const records = getRecords(), list = $('#record-list');list.replaceChildren();$('#record-detail').replaceChildren();
    if (!records.length) {$('#record-detail').append(el('p', 'empty-message', '还没有做题记录。'));return;}
    if (!records.some(record => record.id === selectedRecord)) selectedRecord = records[0].id;
    records.forEach(record => {
      const item = button('', `record-item${record.id === selectedRecord ? ' active' : ''}`);
      item.append(el('strong', '', new Date(record.updatedAt).toLocaleString('zh-CN')));
      record.sections.forEach(section => item.append(el('span', '', `${section.title} ${section.correct}/${section.total}`)));
      item.addEventListener('click', () => {selectedRecord = record.id;renderRecords();});list.append(item);
    });showDetail(records.find(record => record.id === selectedRecord));
  }
  function renderWords() {
    const box = $('#word-list');box.replaceChildren();
    practice.coreWords.forEach(([english, chinese]) => {
      const existing = RRVocab.words.find(item => item.english === english && item.chinese === chinese);
      const word = existing || {id:`${practice.vocabId||practice.id}:${english}`,english,chinese,practiceId:practice.id,practiceTitle:practice.title};
      const row = el('div', 'word-row'), pair = el('div', 'word-pair');pair.append(el('strong', '', english),el('span', '', chinese));
      const star = button('', 'word-star');
      function update() {const saved = RRVocab.getFavorites().some(item => item.id === word.id);star.textContent = saved ? '★' : '☆';star.setAttribute('aria-label', `${saved?'取消收藏':'收藏'} ${english}`);star.setAttribute('aria-pressed', String(saved));}
      update();star.addEventListener('click', () => {try{RRVocab.toggleFavorite(word);update();}catch{alert('收藏失败，请检查浏览器的存储设置。');}});
      row.append(pair,star);box.append(row);
    });
  }
  $('#open-records').addEventListener('click', () => {renderRecords();$('#records-dialog').showModal();});
  $('#open-words').addEventListener('click', () => {renderWords();$('#words-dialog').showModal();});
  document.querySelectorAll('[data-close]').forEach(node => node.addEventListener('click', () => document.getElementById(node.dataset.close).close()));
  window.RRPracticeSession = {practice, controllers};
})();
