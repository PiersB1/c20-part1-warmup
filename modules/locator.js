(() => {
  const {el, button, feedback, play} = RRUI;
  const tokenText = token => typeof token === 'string' ? token : token.text;
  const expected = tokens => tokens.flatMap((token, index) => token.key ? [index] : []);

  function pairedLines(item, onChange) {
    const sides = ['question', 'source'];
    const pairs = [];
    let pending = null, checked = false;
    const views = {};
    const capacity = expected(item.question).length;
    const same = (a, b) => a && b && a.side === b.side && a.index === b.index;
    const valid = pair => {
      const q = item.question[pair.question], s = item.source[pair.source];
      return q.key && s.key && q.pair === s.pair;
    };
    function update() {
      sides.forEach(side => views[side].buttons.forEach((node, index) => {
        const pairIndex = pairs.findIndex(pair => pair[side] === index);
        const waiting = same(pending, {side, index});
        const selected = pairIndex >= 0 || waiting;
        node.classList.toggle('selected', selected);
        node.classList.toggle('token-pending', waiting);
        node.setAttribute('aria-pressed', String(selected));
        node.disabled = !selected && (pairs.length >= capacity || pending?.side === side);
        node.classList.toggle('token-right', checked && pairIndex >= 0 && valid(pairs[pairIndex]));
        node.classList.toggle('token-wrong', checked && selected && (pairIndex < 0 || !valid(pairs[pairIndex])));
        node.classList.toggle('token-missed', checked && !selected && !!item[side][index].key);
        const number = selected ? String(pairIndex >= 0 ? pairIndex + 1 : pairs.length + 1) : '';
        node.querySelector('.pair-number').textContent = number;
        node.setAttribute('aria-label', tokenText(item[side][index]) + (number ? `，第 ${number} 对${waiting ? '，待配对' : ''}` : ''));
      }));
    }
    sides.forEach(side => {
      const node = el('div', 'token-line'), buttons = new Map();
      item[side].forEach((token, index) => {
        const text = tokenText(token);
        if (index && !/^[,.;:?!]/.test(text)) node.append(document.createTextNode(' '));
        if (text.includes('___')) node.append(el('span', 'question-blank', text.replace('___', '______')));
        else if (/^[,.;:?!]+$/.test(text)) node.append(document.createTextNode(text));
        else {
          const target = button('', 'token');
          const badge = el('span', 'pair-number'); badge.setAttribute('aria-hidden', 'true');
          target.append(badge, document.createTextNode(text));
          target.dataset.tokenIndex = index;
          target.addEventListener('click', () => {
            const point = {side, index}, existing = pairs.findIndex(pair => pair[side] === index);
            if (existing >= 0) pairs.splice(existing, 1);
            else if (same(pending, point)) pending = null;
            else if (pending && pending.side !== side) {
              pairs.push({[pending.side]: pending.index, [side]: index}); pending = null;
            } else if (!pending && pairs.length < capacity) pending = point;
            else return;
            checked = false; update(); onChange();
          });
          buttons.set(index, target); node.append(target);
        }
      });
      views[side] = {
        node, buttons, targetIndices: expected(item[side]),
        get selected() { return new Set([...pairs.map(pair => pair[side]), ...(pending?.side === side ? [pending.index] : [])]); },
        check() { checked = true; update(); },
        result() {
          return {selected: [...this.selected].map(i => tokenText(item[side][i])),
            expected: this.targetIndices.map(i => tokenText(item[side][i])),
            correct: pairs.filter(valid).length, total: capacity};
        }
      };
    });
    update();
    return {...views, result() {
      return {pairs: pairs.map((pair, i) => ({number: i + 1, question: tokenText(item.question[pair.question]), source: tokenText(item.source[pair.source]), correct: !!valid(pair)})),
        pending: pending ? {side: pending.side, text: tokenText(item[pending.side][pending.index]), number: pairs.length + 1} : null,
        expectedPairs: expected(item.question).map(index => ({question: tokenText(item.question[index]), source: tokenText(item.source.find(t => t.key && t.pair === item.question[index].pair))}))};
    }};
  }

  function line(tokens, onChange) {
    const selected = new Set();
    const targetIndices = expected(tokens);
    const node = el('div', 'token-line');
    const buttons = new Map();
    let checked = false;
    function update() {
      buttons.forEach((item, index) => {
        const isSelected = selected.has(index);
        item.classList.toggle('selected', isSelected);
        item.setAttribute('aria-pressed', String(isSelected));
        item.disabled = !isSelected && selected.size >= targetIndices.length;
        item.classList.toggle('token-right', checked && isSelected && targetIndices.includes(index));
        item.classList.toggle('token-wrong', checked && isSelected && !targetIndices.includes(index));
        item.classList.toggle('token-missed', checked && !isSelected && targetIndices.includes(index));
      });
    }
    tokens.forEach((token, index) => {
      const text = tokenText(token);
      if (text.includes('___')) node.append(el('span', 'question-blank', text.replace('___', '______')));
      else {
        const item = button(text, 'token');
        item.addEventListener('click', () => {
          if (selected.has(index)) selected.delete(index);
          else if (selected.size < targetIndices.length) selected.add(index);
          checked = false;
          update();
          onChange();
        });
        buttons.set(index, item);
        node.append(item);
      }
      if (index < tokens.length - 1) node.append(document.createTextNode(' '));
    });
    update();
    return {
      node, selected, targetIndices,
      check() { checked = true; update(); },
      result() {
        return {
          selected: [...selected].map(index => tokenText(tokens[index])),
          expected: targetIndices.map(index => tokenText(tokens[index])),
          correct: [...selected].filter(index => targetIndices.includes(index)).length,
          total: targetIndices.length
        };
      }
    };
  }

  RRQuestionTypes.locator = {
    render(section, container) {
      const items = section.items.map((item, index) => {
        if(section.map && index === section.mapBeforeIndex){
          const figure=el('figure','practice-map');figure.innerHTML=section.map.svg;
          figure.append(el('figcaption','',section.map.caption));container.append(figure);
        }
        const card = el('article', 'question-card locator-card');
        card.dataset.questionId = item.id;
        const head = el('div', 'question-head');
        const counts = el('span', 'count-label');
        head.append(el('span', 'number', String(index + 1)), counts);
        const fb = el('div', 'feedback'); fb.hidden = true;
        const updateCounts = () => {
          counts.textContent = `问题句 ${question.selected.size}/${question.targetIndices.length} · 原文句 ${source.selected.size}/${source.targetIndices.length}`;
          fb.hidden = true;
        };
        const paired = item.paired ? pairedLines(item, updateCounts) : null;
        const question = paired ? paired.question : line(item.question, updateCounts);
        const source = paired ? paired.source : line(item.source, updateCounts);
        updateCounts();
        const questionLabel = el('p', 'small-label', item.format ? `问题句 · ${item.format}` : '问题句');
        const sourceWrap = el('div', 'source-wrap'); sourceWrap.hidden = true;
        sourceWrap.append(el('p', 'small-label', '原文句'), source.node);
        const reveal = button('▶ 显示原文句', 'secondary reveal-source');
        const audio = new Audio(item.audio); audio.preload = 'none';
        let revealed = false;
        reveal.addEventListener('click', async () => {
          reveal.disabled = true;
          try {
            audio.currentTime = 0;
            await play(audio);
            revealed = true;
            sourceWrap.hidden = false;
            reveal.textContent = '▶ 重听原文句';
          } catch {
            feedback(fb, '音频暂时无法播放，请重试。', false);
          } finally { reveal.disabled = false; }
        });
        card.append(head, questionLabel, question.node, reveal, sourceWrap, fb);
        container.append(card);
        return {item, question, source, paired, fb, get revealed() {return revealed;}};
      });
      function getResult() {
        const details = items.map(({item, question, source, paired, revealed}) => {
          const q = question.result(), s = source.result();
          const matching = paired?.result();
          return {
            id: item.id, question: item.question.map(tokenText).join(' ').replace(/\s+([,.;:?!])/g,'$1'),
            source: item.source.map(tokenText).join(' ').replace(/\s+([,.;:?!])/g,'$1'), sourceRevealed: revealed,
            response: {question: q.selected, source: s.selected, ...(matching ? {pairs: matching.pairs, pending: matching.pending} : {})},
            expected: {question: q.expected, source: s.expected, ...(matching ? {pairs: matching.expectedPairs} : {})},
            correct: q.correct + s.correct, total: q.total + s.total
          };
        });
        return {id: section.id, type: section.type, title: section.title,
          correct: details.reduce((sum, item) => sum + item.correct, 0),
          total: details.reduce((sum, item) => sum + item.total, 0), details};
      }
      return {
        getResult,
        check() {
          items.forEach(({item, question, source, paired, fb}) => {
            question.check(); source.check();
            const q = question.result(), s = source.result();
            const ok = q.correct + s.correct === q.total + s.total;
            const standard = paired && !ok ? '对应表达：' + paired.result().expectedPairs.map(p => `${p.question} ↔ ${p.source}`).join('；') + '。' : '';
            feedback(fb, `${ok ? '✓ 定位正确。' : paired ? `配对正确 ${q.correct}/${q.total} 对。` : `命中 ${q.correct + s.correct}/${q.total + s.total} 处。`} ${standard} ${item.explanation}`, ok);
          });
          return getResult();
        }
      };
    }
  };
})();
