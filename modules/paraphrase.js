(() => {
  const {el, button, feedback} = RRUI;
  RRQuestionTypes.paraphrase = {
    render(section, container) {
      const items = section.items.map((item, index) => {
        const assignments = new Map(), slots = new Map(), choices = new Map();
        let picked = null;
        const card = el('article', 'question-card paraphrase-card');
        card.dataset.questionId = item.id;
        const head = el('div', 'question-head');
        const targets = item.segments.filter(segment => typeof segment !== 'string');
        const count = el('span', 'count-label');
        head.append(el('span', 'number', String(index + 1)), el('h3', '', item.title), count);
        const paragraph = el('div', 'matching-paragraph');
        const bank = el('div', 'word-bank');
        const fb = el('div', 'feedback'); fb.hidden = true;
        function update() {
          count.textContent = `${assignments.size}/${targets.length} 已匹配`;
          slots.forEach((slot, id) => {
            const choiceId = assignments.get(id);
            slot.textContent = choiceId ? item.choices.find(choice => choice.id === choiceId).text : '拖入';
            slot.classList.toggle('filled', Boolean(choiceId));
            slot.classList.remove('slot-right', 'slot-wrong');
          });
          choices.forEach((node, id) => {
            node.hidden = [...assignments.values()].includes(id);
            node.classList.toggle('picked', picked === id);
            node.setAttribute('aria-pressed', String(picked === id));
          });
          fb.hidden = true;
        }
        function place(slotId, choiceId) {
          if (!choices.has(choiceId)) return;
          assignments.forEach((value, key) => {if (value === choiceId) assignments.delete(key);});
          assignments.set(slotId, choiceId);
          picked = null;
          update();
        }
        item.segments.forEach(segment => {
          if (typeof segment === 'string') {paragraph.append(document.createTextNode(segment)); return;}
          const wrapper = el('span', 'match-target');
          const target = el('span', 'underlined-target', segment.text);
          const slot = button('拖入', 'drop-slot');
          slot.dataset.slotId = segment.id;
          slot.setAttribute('aria-label', `${segment.text} 的同义表达`);
          slot.addEventListener('dragover', event => {event.preventDefault();slot.classList.add('drag-over');});
          slot.addEventListener('dragleave', () => slot.classList.remove('drag-over'));
          slot.addEventListener('drop', event => {
            event.preventDefault();slot.classList.remove('drag-over');
            const value = event.dataTransfer.getData('text/plain').split('|');
            if (value[0] === item.id) place(segment.id, value[1]);
          });
          slot.addEventListener('click', () => {
            if (picked) place(segment.id, picked);
            else if (assignments.has(segment.id)) {assignments.delete(segment.id);update();}
          });
          wrapper.append(target, slot);paragraph.append(wrapper);slots.set(segment.id, slot);
        });
        item.choices.forEach(choice => {
          const node = button(choice.text, 'bank-choice');
          node.draggable = true;node.dataset.choiceId = choice.id;
          node.addEventListener('dragstart', event => {
            event.dataTransfer.setData('text/plain', `${item.id}|${choice.id}`);
            event.dataTransfer.effectAllowed = 'move';
          });
          node.addEventListener('click', () => {picked = picked === choice.id ? null : choice.id;update();});
          choices.set(choice.id, node);bank.append(node);
        });
        update();
        card.append(head, paragraph, el('p', 'small-label', '待匹配表达'), bank, fb);
        container.append(card);
        return {item, assignments, slots, targets, fb};
      });
      function getResult() {
        const details = items.flatMap(({item, assignments, targets}) => targets.map(target => ({
          id: target.id, question: target.text,
          response: item.choices.find(choice => choice.id === assignments.get(target.id))?.text || '',
          expected: item.choices.find(choice => choice.id === target.answer).text,
          correct: assignments.get(target.id) === target.answer
        })));
        return {id: section.id, type: section.type, title: section.title,
          correct: details.filter(item => item.correct).length, total: details.length, details};
      }
      return {getResult, check() {
        items.forEach(({item, assignments, slots, targets, fb}) => {
          let hits = 0;
          const explanations = [];
          targets.forEach(target => {
            const ok = assignments.get(target.id) === target.answer;
            slots.get(target.id).classList.toggle('slot-right', ok);
            slots.get(target.id).classList.toggle('slot-wrong', !ok);
            if (ok) hits++;
            explanations.push(target.explanation);
          });
          fb.replaceChildren(el('strong', '', `匹配正确 ${hits}/${targets.length}`));
          const list = el('ul', 'explanation-list');
          explanations.forEach(text => list.append(el('li', '', text)));
          fb.append(list);fb.hidden = false;fb.className = `feedback ${hits === targets.length ? 'good' : 'bad'}`;
        });
        return getResult();
      }};
    }
  };
})();
