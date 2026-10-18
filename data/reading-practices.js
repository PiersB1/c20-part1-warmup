window.RRReadingPractices = {};
window.RRReadTokens = text => text.split('|').map(t => t.trim()).filter(Boolean);
window.RRAddReadingTopic = topic => {
  topic.practices.forEach((sections, index) => {
    const id = `${topic.id}-${index + 1}`;
    if (RRReadingPractices[id]) throw Error('Duplicate reading practice ' + id);
    RRReadingPractices[id] = {
      id, mode:'reading', title:topic.title, label:`练习 ${index + 1}`,
      location:topic.location, vocabId:topic.id, coreWords:topic.coreWords,
      preparationFocus:topic.focus, sections
    };
  });
};
