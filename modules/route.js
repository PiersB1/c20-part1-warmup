(() => {
  const {el,button,play,time}=RRUI;
  const svgNS='http://www.w3.org/2000/svg';
  const svgNode=(tag,attrs={})=>{const node=document.createElementNS(svgNS,tag);Object.entries(attrs).forEach(([key,value])=>node.setAttribute(key,value));return node;};
  RRQuestionTypes.route={render(section,container){
    const entries=section.items.map((item,index)=>{
      let path=[item.start],started=false,checked=false;
      const nodes=new Map(item.map.nodes.map(node=>[node.id,node])),audio=new Audio(item.audio);audio.preload='metadata';
      const timing=window.RRSignalTimings[item.audio];
      const card=el('article','question-card route-card');card.dataset.questionId=item.id;
      const head=el('div','question-head');head.append(el('span','number',String(index+1)),el('h3','',item.title));
      const controls=el('div','audio-controls'),start=button('▶ 播放导览'),pause=button('暂停'),undo=button('退回一步');pause.disabled=true;
      const clock=el('span','audio-clock',`0:00 / ${time(timing?.duration||0)}`);controls.append(start,pause,undo,clock);
      const svg=svgNode('svg',{viewBox:`0 0 ${item.map.width} ${item.map.height}`,role:'img','aria-label':item.title+'，北向上'});
      const north=svgNode('text',{x:600,y:38,'text-anchor':'middle',class:'route-north'});north.textContent='N ↑';svg.append(north);
      const points=ids=>ids.map(id=>`${nodes.get(id).x},${nodes.get(id).y}`).join(' ');
      item.map.edges.forEach(edge=>svg.append(svgNode('polyline',{points:points(edge),class:'route-road'})));
      const standard=svgNode('polyline',{class:'route-standard',fill:'none'}),trail=svgNode('polyline',{class:'route-trail',fill:'none'});svg.append(standard,trail);
      item.map.nodes.forEach(node=>{
        svg.append(svgNode('circle',{cx:node.x,cy:node.y,r:6,class:'route-junction'}));
        const text=svgNode('text',{x:node.x,y:node.y+28,'text-anchor':'middle',class:'route-place'});text.textContent=node.label;svg.append(text);
      });
      const origin=nodes.get(item.start),startLabel=svgNode('text',{x:origin.x-24,y:origin.y-17,'text-anchor':'end',class:'route-start-label'});startLabel.textContent='START';svg.append(startLabel);
      const person=svgNode('g',{class:'route-person'});person.append(svgNode('circle',{cx:0,cy:-19,r:7}),svgNode('path',{d:'M0 -10 L0 6 M-10 -3 L0 -8 L10 -3 M0 6 L-8 17 M0 6 L8 17',fill:'none','stroke-width':5,'stroke-linecap':'round'}));svg.append(person);
      const map=el('div','route-map');map.append(svg);
      const navigation=el('div','route-navigation');navigation.setAttribute('aria-label','方向控制');const directionButtons={};
      const status=el('p','route-status');status.setAttribute('aria-live','polite');
      const directions={north:[0,-1],south:[0,1],west:[-1,0],east:[1,0]};
      function next(direction){const current=nodes.get(path.at(-1)),[dx,dy]=directions[direction];return item.map.edges.flatMap(edge=>edge[0]===current.id?[edge[1]]:edge[1]===current.id?[edge[0]]:[]).find(id=>{const node=nodes.get(id);return dx?node.y===current.y&&Math.sign(node.x-current.x)===dx:node.x===current.x&&Math.sign(node.y-current.y)===dy;});}
      const fb=el('div','feedback');fb.hidden=true;
      function draw(){
        const current=nodes.get(path.at(-1));person.setAttribute('transform',`translate(${current.x} ${current.y})`);trail.setAttribute('points',points(path));standard.setAttribute('points',checked?points(item.expectedPath):'');
        Object.entries(directionButtons).forEach(([direction,node])=>node.disabled=!next(direction));undo.disabled=path.length===1;
        status.textContent=`当前位置：${current.label} · 已走 ${path.length-1} 段${checked?' · 金色虚线为标准路线':''}`;
      }
      function change(){checked=false;fb.hidden=true;draw();}
      Object.keys(directions).forEach(direction=>{const node=button(item.buttonLabels[direction],`secondary direction-${direction}`);node.dataset.direction=direction;node.addEventListener('click',()=>{const destination=next(direction);if(destination){path.push(destination);change();}});directionButtons[direction]=node;navigation.append(node);});
      undo.addEventListener('click',()=>{if(path.length>1){path.pop();change();}});
      start.addEventListener('click',async()=>{audio.pause();audio.currentTime=0;path=[item.start];change();try{await play(audio);started=true;start.textContent='↻ 重听并回到起点';}catch{fb.textContent='音频暂时无法播放，请重试。';fb.hidden=false;}});
      pause.addEventListener('click',()=>{if(audio.paused)play(audio).catch(()=>{});else audio.pause();});
      audio.addEventListener('play',()=>{started=true;start.textContent='↻ 重听并回到起点';pause.disabled=false;pause.textContent='暂停';});audio.addEventListener('pause',()=>pause.textContent='继续');audio.addEventListener('ended',()=>pause.disabled=true);
      audio.addEventListener('timeupdate',()=>clock.textContent=`${time(audio.currentTime)} / ${time(Number.isFinite(audio.duration)?audio.duration:timing?.duration||0)}`);
      card.append(head,controls,map,navigation,status,fb);container.append(card);draw();
      function result(){return {id:item.id,question:item.title,played:started,response:{path:[...path],labels:path.map(id=>nodes.get(id).label),destination:nodes.get(path.at(-1)).label},expected:{path:[...item.expectedPath],labels:item.expectedPath.map(id=>nodes.get(id).label),destination:nodes.get(item.goal).label},correct:path.length===item.expectedPath.length&&path.every((id,i)=>id===item.expectedPath[i])};}
      return {result,check(){audio.pause();checked=true;draw();const score=result();fb.replaceChildren(el('strong','',score.correct?'路线正确。':'路线需调整。'),el('p','',`标准路线：${score.expected.labels.join(' → ')}`),el('p','',item.explanation));
        const transcript=el('details','route-transcript');transcript.append(el('summary','','查看导览原文与方向表达'),el('p','',item.transcript.join(' ')));item.vocabulary.forEach(([english,chinese])=>transcript.append(el('p','',`${english} — ${chinese}`)));fb.append(transcript);fb.className=`feedback ${score.correct?'good':'bad'}`;fb.hidden=false;}};
    });
    function getResult(){const details=entries.map(entry=>entry.result());return {id:section.id,type:section.type,title:section.title,correct:details.filter(item=>item.correct).length,total:details.length,details};}
    return {getResult,check(){entries.forEach(entry=>entry.check());return getResult();}};
  }};
})();
