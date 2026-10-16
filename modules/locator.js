(() => {
  const {el, button, feedback, play} = RRUI;
  const tokenText = token => typeof token === 'string' ? token : token.text;
  const expected = tokens => tokens.flatMap((token, index) => token.key ? [index] : []);

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
        const question = line(item.question, updateCounts);
        const source = line(item.source, updateCounts);
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
        return {item, question, source, fb, get revealed() {return revealed;}};
      });
      function getResult() {
        const details = items.map(({item, question, source, revealed}) => {
          const q = question.result(), s = source.result();
          return {
            id: item.id, question: item.question.map(tokenText).join(' '),
            source: item.source.map(tokenText).join(' '), sourceRevealed: revealed,
            response: {question: q.selected, source: s.selected},
            expected: {question: q.expected, source: s.expected},
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
          items.forEach(({item, question, source, fb}) => {
            question.check(); source.check();
            const q = question.result(), s = source.result();
            const ok = q.correct + s.correct === q.total + s.total;
            feedback(fb, `${ok ? '✓ 定位正确。' : `命中 ${q.correct + s.correct}/${q.total + s.total} 处。`} ${item.explanation}`, ok);
          });
          return getResult();
        }
      };
    }
  };
})();
