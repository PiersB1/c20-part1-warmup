(() => {
  const {el, button, feedback, play, time} = RRUI;
  function matchMarkers(markers, cues, tolerance) {
    const edges = [];
    markers.forEach((mark, markIndex) => cues.forEach((cue, cueIndex) => {
      const difference = Math.abs(mark - cue.start);
      if (difference <= tolerance) edges.push({markIndex, cueIndex, difference});
    }));
    edges.sort((a, b) => a.difference - b.difference);
    const usedMarks = new Set(), usedCues = new Set(), matches = [];
    edges.forEach(edge => {
      if (usedMarks.has(edge.markIndex) || usedCues.has(edge.cueIndex)) return;
      usedMarks.add(edge.markIndex);usedCues.add(edge.cueIndex);matches.push(edge);
    });
    return {matches, extras: markers.length - matches.length};
  }
  RRQuestionTypes.signal = {
    render(section, container) {
      const items = section.items.map((item, index) => {
        const timing = window.RRSignalTimings[item.audio];
        const cues = item.cues.map((cue, cueIndex) => ({...cue, start: timing.cues[cueIndex].start}));
        let markers = [], checked = false, started = false;
        const audio = new Audio(item.audio);audio.preload = 'metadata';
        const duration = () => Number.isFinite(audio.duration) ? audio.duration : timing.duration;
        const card = el('article', 'question-card signal-card');card.dataset.questionId = item.id;
        const head = el('div', 'question-head');
        head.append(el('span', 'number', String(index + 1)), el('h3', '', item.title), el('span', 'count-label', `约 ${Math.round(timing.duration)} 秒 · ${cues.length} 处考点`));
        const controls = el('div', 'audio-controls');
        const start = button('▶ 播放音频');
        const pause = button('暂停');pause.disabled = true;
        const mark = button('＋ 标记考点', 'primary mark-button');mark.disabled = true;
        const clock = el('span', 'audio-clock', `0:00 / ${time(timing.duration)}`);
        controls.append(start, pause, mark, clock);
        const timeline = el('div', 'timeline');timeline.setAttribute('aria-label', '音频时间轴');
        const fill = el('div', 'timeline-fill'), markerLayer = el('div', 'marker-layer');
        timeline.append(fill, markerLayer);
        const markerCount = el('p', 'marker-count', '已标记 0 处');
        const fb = el('div', 'feedback');fb.hidden = true;
        function drawMarkers() {
          markerLayer.replaceChildren();
          markers.forEach((seconds, markerIndex) => {
            const node = button('●', 'time-marker');
            node.style.left = `${Math.min(100, seconds / duration() * 100)}%`;
            node.title = `${time(seconds)} · 点击移除`;
            node.setAttribute('aria-label', `移除 ${time(seconds)} 的标记`);
            node.addEventListener('click', () => {markers.splice(markerIndex, 1);checked = false;fb.hidden = true;drawMarkers();});
            markerLayer.append(node);
          });
          if (checked) cues.forEach((cue, cueIndex) => {
            const standard = el('span', 'standard-marker', String(cueIndex + 1));
            standard.style.left = `${cue.start / duration() * 100}%`;standard.title = `标准位置 ${cue.start.toFixed(1)} 秒`;
            markerLayer.append(standard);
          });
          markerCount.textContent = `已标记 ${markers.length} 处${checked ? ' · 金色为标准位置' : ''}`;
        }
        start.addEventListener('click', async () => {
          audio.pause();audio.currentTime = 0;markers = [];checked = false;fb.hidden = true;
          drawMarkers();fill.style.width = '0%';
          try {await play(audio);started = true;start.textContent = '↻ 重听并清空标记';}
          catch {feedback(fb, '音频暂时无法播放，请重试。', false);}
        });
        pause.addEventListener('click', () => {
          if (audio.paused) play(audio).catch(() => feedback(fb, '音频暂时无法播放。', false));
          else audio.pause();
        });
        mark.addEventListener('click', () => {
          if (audio.paused || audio.ended) return;
          const current = audio.currentTime;
          if (markers.some(value => Math.abs(value - current) < 0.25)) return;
          markers.push(Math.round(current * 100) / 100);checked = false;fb.hidden = true;drawMarkers();
        });
        audio.addEventListener('timeupdate', () => {
          fill.style.width = `${audio.currentTime / duration() * 100}%`;
          clock.textContent = `${time(audio.currentTime)} / ${time(duration())}`;
        });
        audio.addEventListener('play', () => {pause.disabled = false;pause.textContent = '暂停';mark.disabled = false;});
        audio.addEventListener('pause', () => {pause.textContent = '继续';mark.disabled = true;});
        audio.addEventListener('ended', () => {pause.disabled = true;mark.disabled = true;});
        card.append(head, el('p', 'signal-focus', item.focus), controls, timeline, markerCount, fb);container.append(card);
        return {item, cues, fb, audio, get markers() {return markers;}, get started() {return started;},
          showAnswers() {checked = true;drawMarkers();}};
      });
      function getResult() {
        const details = items.map(({item, cues, markers, started}) => {
          const result = matchMarkers(markers, cues, item.tolerance);
          return {id:item.id, question:item.title, played:started, response:[...markers],
            expected:cues.map(cue=>({start:cue.start,signal:cue.signal,sentence:item.transcript[cue.sentence]})),
            tolerance:item.tolerance, correct:result.matches.length, total:cues.length,
            falsePositives:result.extras, matches:result.matches};
        });
        return {id:section.id,type:section.type,title:section.title,
          correct:details.reduce((sum,item)=>sum+item.correct,0),total:details.reduce((sum,item)=>sum+item.total,0),
          falsePositives:details.reduce((sum,item)=>sum+item.falsePositives,0),details};
      }
      return {getResult,check() {
        const result = getResult();
        items.forEach((entry,index) => {
          entry.audio.pause();entry.showAnswers();const score=result.details[index];
          entry.fb.replaceChildren(el('strong','',`命中 ${score.correct}/${score.total} 处；多标 ${score.falsePositives} 处。允许偏差 ±${entry.item.tolerance} 秒。`));
          const list=el('ol','explanation-list');
          entry.cues.forEach(cue=>list.append(el('li','',`${cue.start.toFixed(1)} 秒 · ${entry.item.transcript[cue.sentence]} ${cue.why}`)));
          entry.fb.append(list);entry.fb.hidden=false;entry.fb.className=`feedback ${score.correct===score.total&&!score.falsePositives?'good':'bad'}`;
        });return result;
      }};
    }
  };
})();
