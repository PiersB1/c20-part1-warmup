window.RRExerciseCatalog = [
  {
    id: 'c20-t1-p1-1', mode: 'listening', book: 20, test: 1, part: 1,
    title: '练习 1 · 词汇与句子听写', description: '餐厅对话', url: 'practice.html'
  },
  {
    id: 'c20-t1-p1-2', mode: 'listening', book: 20, test: 1, part: 1,
    title: '练习 2 · 定位与同义替换', description: '定位词标记 · 同义替换 · 信号词捕捉',
    url: 'listening.html?id=c20-t1-p1-2'
  }
];
[
  [1,2,'陶艺工坊'],[2,1,'照护者支持咨询'],[2,2,'社区志愿者安排'],
  [3,1,'家具租赁咨询'],[3,2,'考古遗址导览'],[4,1,'家庭出游规划'],[4,2,'球场导览与场馆变迁']
].forEach(([test,part,theme])=>{
  for(let exercise=1;exercise<=2;exercise++){
    const id=`c20-t${test}-p${part}-${exercise}`;
    RRExerciseCatalog.push({id,mode:'listening',book:20,test,part,
      title:`练习 ${exercise} · ${exercise===1?'词汇与句子听写':'定位与同义替换'}`,
      description:`${theme} · ${exercise===1?'词汇／语法 · 逐句听写':'定位词标记 · 同义替换 · 信号词捕捉'}`,
      url:`listening.html?id=${id}`});
  }
});
