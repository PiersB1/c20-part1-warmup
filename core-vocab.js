window.RRVocab = (() => {
  const storageKey = 'rr:favorite-words:v1';
  const practiceId = 'c20-t1-listening-p1-restaurant';
  const words = [
    ['recommend', '推荐'],
    ['reserve a table', '预订餐位'],
    ['special occasion', '特别场合'],
    ['atmosphere', '氛围'],
    ['chef', '主厨'],
    ['dish', '菜品'],
    ['share', '分着吃'],
    ['deposit', '订金'],
    ['selection', '可选种类'],
    ['limited', '有限的'],
    ['set lunch', '午餐套餐'],
    ['per head', '每人'],
    ['portion', '一份菜的份量'],
    ['reasonable', '价格合理的'],
    ['quite reasonable', '价格相当合理'],
    ['quieter than', '比……更安静'],
    ['ingredients', '食材'],
    ['reviews', '评价']
  ].map(([english, chinese]) => ({
    id: `${practiceId}:${english}`,
    english,
    chinese,
    practiceId,
    practiceTitle: '餐厅对话'
  }));
  function getFavorites() {
    try {
      const data = JSON.parse(localStorage.getItem(storageKey) || '[]');
      return Array.isArray(data) ? data : [];
    } catch { return []; }
  }
  function toggleFavorite(word) {
    const current = getFavorites();
    const next = current.some(item => item.id === word.id)
      ? current.filter(item => item.id !== word.id)
      : [...current, word];
    localStorage.setItem(storageKey, JSON.stringify(next));
    return next.some(item => item.id === word.id);
  }
  return {words, getFavorites, toggleFavorite};
})();
