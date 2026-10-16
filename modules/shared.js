window.RRQuestionTypes = {};
window.RRUI = (() => {
  let activeAudio = null;
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function button(text, className = 'secondary') {
    const node = el('button', className, text);
    node.type = 'button';
    return node;
  }
  function feedback(node, text, ok = true) {
    node.hidden = false;
    node.className = `feedback ${ok ? 'good' : 'bad'}`;
    node.textContent = text;
  }
  async function play(audio) {
    if (activeAudio && activeAudio !== audio) activeAudio.pause();
    activeAudio = audio;
    await audio.play();
  }
  function time(seconds) {
    return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;
  }
  return {el, button, feedback, play, time};
})();
