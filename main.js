let currentLang='zh',currentQ=0,sliderVal=50,flipLocked=false;
let scores={restrained:0,clingy:0,dominant:0,yandere:0};
const allQuestions=[...QUESTIONS,...QUESTIONS_PART2];
const allResults={...RESULTS,...RESULTS_PART2};

// === 粒子系统 ===
function initSparkles(){
  const container=document.getElementById('sparkles');
  if(!container)return;
  const types=['star5','star5','dot','bubble','star5','dot','moon'];
  for(let i=0;i<40;i++){
    const s=document.createElement('div');
    const t=types[i%types.length];
    s.className='sparkle '+t;
    s.style.left=Math.random()*100+'%';
    s.style.top=Math.random()*100+'%';
    if(t==='star5'){
      const sz=(4+Math.random()*6)+'px';
      s.style.width=sz;s.style.height=sz;
    }else if(t==='bubble'){
      const sz=(8+Math.random()*16)+'px';
      s.style.width=sz;s.style.height=sz;
    }else if(t==='moon'){
      s.style.width='18px';s.style.height='18px';
    }else{
      const sz=(2+Math.random()*3)+'px';
      s.style.width=sz;s.style.height=sz;
    }
    s.style.animationDuration=(2+Math.random()*5)+'s';
    s.style.animationDelay=(Math.random()*6)+'s';
    container.appendChild(s);
  }
}

function initCoverStars(){
  const box=document.getElementById('coverStars');
  if(!box)return;
  for(let i=0;i<25;i++){
    const st=document.createElement('div');
    st.className='star';
    st.style.left=Math.random()*100+'%';
    st.style.top=Math.random()*100+'%';
    if(i<3){
      st.style.width='14px';st.style.height='14px';
      st.style.borderRadius='50%';
      st.style.background='transparent';
      st.style.boxShadow='inset -4px 0 0 0 rgba(208,234,255,0.6)';
    }else{
      const sz=(1+Math.random()*3)+'px';
      st.style.width=sz;st.style.height=sz;
      st.style.clipPath='polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)';
      st.style.background='rgba(208,234,255,0.8)';
    }
    st.style.animationDuration=(1.5+Math.random()*3)+'s';
    st.style.animationDelay=(Math.random()*4)+'s';
    box.appendChild(st);
  }
}

initSparkles();
initCoverStars();

// === 语言切换 ===
function toggleLang(){
  currentLang=currentLang==='zh'?'en':'zh';
  document.getElementById('langBtn').textContent=currentLang==='zh'?'EN':'中';
  document.querySelectorAll('[data-zh]').forEach(el=>{
    const t=el.getAttribute('data-'+currentLang);
    if(t)el.innerHTML=t.replace(/\n/g,'<br>');
  });
  if(document.getElementById('quiz-page').classList.contains('active'))renderQuestion();
}

// === 页面导航 ===
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>{
    p.classList.remove('active');
    p.style.animation='none';
  });
  const pg=document.getElementById(id);
  void pg.offsetHeight;
  pg.style.animation='';
  pg.classList.add('active');
  window.scrollTo(0,0);
}

function goToIntro(){
  showPage('intro-page');
  startFog();
}

function startQuiz(){
  currentQ=0;
  scores={restrained:0,clingy:0,dominant:0,yandere:0};
  sliderVal=50;
  flipLocked=false;
  showPage('quiz-page');
  renderQuestion();
}

// === 答题逻辑 ===
function renderQuestion(){
  const q=allQuestions[currentQ];
  const total=allQuestions.length;
  document.getElementById('qNum').textContent=String(currentQ+1).padStart(2,'0');
  document.getElementById('qFill').style.width=((currentQ+1)/total*100)+'%';

  const area=document.getElementById('questionArea');
  let h=`<div class="q-label">${q.label[currentLang]}</div>`;
  h+=`<div class="q-text">${q.text[currentLang]}</div>`;

  if(q.type==='choice'){
    h+='<div class="opts">';
    q.options.forEach(o=>{
      h+=`<button class="opt" data-s="${o.s}" onclick="pick(this)">${o[currentLang]}</button>`;
    });
    h+='</div>';
  }else if(q.type==='slider'){
    h+=`<div class="slider-box">
      <div class="slider-labels"><span>${q.left[currentLang]}</span><span>${q.right[currentLang]}</span></div>
      <input type="range" class="s-range" min="0" max="100" value="50" id="sInput">
      <button class="s-confirm" onclick="confirmSlider()">${currentLang==='zh'?'确定':'Confirm'}</button>
    </div>`;
  }else if(q.type==='flip'){
    flipLocked=false;
    const icons=['✦','❋','✧','❖'];
    h+='<div class="flip-grid">';
    q.cards.forEach((c,i)=>{
      h+=`<div class="f-card" data-s="${c.s}" onclick="flip(this)">
        <div class="f-inner">
          <div class="f-front">${icons[i]}</div>
          <div class="f-back">${c[currentLang]}</div>
        </div>
      </div>`;
    });
    h+='</div>';
  }
  area.innerHTML=h;
}

function pick(btn){
  if(btn.classList.contains('picked'))return;
  document.querySelectorAll('.opt').forEach(b=>b.classList.remove('picked'));
  btn.classList.add('picked');
  scores[btn.dataset.s]++;
  burstEffect(btn);
  setTimeout(nextQuestion,700);
}

function confirmSlider(){
  sliderVal=parseInt(document.getElementById('sInput').value);
  nextQuestion();
}

function flip(el){
  if(flipLocked)return;
  flipLocked=true;
  el.classList.add('open');
  scores[el.dataset.s]++;
  setTimeout(nextQuestion,1500);
}

function nextQuestion(){
  currentQ++;
  if(currentQ>=allQuestions.length){
    goWait();
  }else{
    renderQuestion();
  }
}

// === 选中光点特效 ===
function burstEffect(el){
  const rect=el.getBoundingClientRect();
  const cx=rect.left+rect.width/2;
  const cy=rect.top+rect.height/2;
  for(let i=0;i<6;i++){
    const p=document.createElement('div');
    p.style.cssText=`position:fixed;width:4px;height:4px;border-radius:50%;background:#cce8ff;pointer-events:none;z-index:9999;left:${cx}px;top:${cy}px;transition:all .8s cubic-bezier(.4,0,.2,1);opacity:1;`;
    document.body.appendChild(p);
    requestAnimationFrame(()=>{
      p.style.left=(cx+(Math.random()-0.5)*80)+'px';
      p.style.top=(cy+(Math.random()-0.5)*60)+'px';
      p.style.opacity='0';
      p.style.transform='scale(0)';
    });
    setTimeout(()=>p.remove(),900);
  }
}

// === 等待 & 结果 ===
function goWait(){
  showPage('waiting-page');
  setTimeout(showResultPage,3000);
}

function getResult(){
  if(sliderVal<35){scores.clingy+=1;scores.restrained+=1;}
  else if(sliderVal>65){scores.dominant+=1;scores.yandere+=1;}

  const sorted=Object.entries(scores).sort((a,b)=>b[1]-a[1]);
  const topKey=sorted[0][0];
  const topScore=sorted[0][1];
  const variant=topScore>=4?'main':'sub';
  return allResults[topKey+'_'+variant]||allResults[topKey+'_main'];
}

function showResultPage(){
  const r=getResult();
  window._currentResult=r;
  showPage('result-page');
  const area=document.getElementById('resultArea');
  area.innerHTML=`
    <div class="res-img-box"><img class="res-img" src="${r.image}" alt="${r.typeName[currentLang]}"></div>
    <span class="res-badge">${r.typeName[currentLang]}</span>
    <h2 class="res-title">${r.title[currentLang]}</h2>
    <div class="res-story">${r.story[currentLang].replace(/\n/g,'<br>')}</div>
    <div class="res-quote">${r.quote[currentLang]}</div>
    <div class="res-daily">${r.daily[currentLang].replace(/\n/g,'<br>')}</div>
    <div class="res-tags">${r.tags[currentLang].map(t=>'<span class="res-tag">'+t+'</span>').join('')}</div>`;
}

function showResult(){showPage('result-page');}

function showShare(){
  const r=window._currentResult;
  if(!r)return;
  showPage('share-page');
  document.getElementById('shareArea').innerHTML=`
    <img src="${r.image}" alt="${r.typeName[currentLang]}">
    <div class="share-card-body">
      <div class="share-hint">${currentLang==='zh'?'你梦里的他 醒来后还记得吗':'Do you remember him from your dream?'}</div>
      <div class="share-qt">${r.quote[currentLang]}</div>
      <div class="share-tags">${r.tags[currentLang].map(t=>'<span class="res-tag">'+t+'</span>').join('')}</div>
    </div>`;
}

function restart(){
  currentQ=0;
  scores={restrained:0,clingy:0,dominant:0,yandere:0};
  sliderVal=50;
  flipLocked=false;
  showPage('cover-page');
}

// === Canvas 自然烟雾 ===
let fogRunning=false;
function startFog(){
  if(fogRunning)return;
  fogRunning=true;
  const canvas=document.getElementById('fogCanvas');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  canvas.classList.add('active');

  function resize(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
  }
  resize();
  window.addEventListener('resize',resize);

  const puffs=[];
  for(let i=0;i<45;i++){
    puffs.push({
      x:Math.random()*canvas.width,
      y:canvas.height*(0.4+Math.random()*0.6),
      r:60+Math.random()*120,
      vx:(Math.random()-0.5)*0.3,
      vy:-0.1-Math.random()*0.2,
      alpha:0,
      maxAlpha:0.03+Math.random()*0.045,
      growing:true,
      speed:0.0004+Math.random()*0.0006
    });
  }

  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(const p of puffs){
      if(p.growing){
        p.alpha+=p.speed;
        if(p.alpha>=p.maxAlpha)p.growing=false;
      }
      p.x+=p.vx;
      p.y+=p.vy;
      if(p.y<-p.r){p.y=canvas.height+p.r;p.x=Math.random()*canvas.width;}
      if(p.x<-p.r)p.x=canvas.width+p.r;
      if(p.x>canvas.width+p.r)p.x=-p.r;

      const grad=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r);
      grad.addColorStop(0,`rgba(180,223,255,${p.alpha})`);
      grad.addColorStop(0.5,`rgba(204,232,255,${p.alpha*0.6})`);
      grad.addColorStop(1,'rgba(180,223,255,0)');
      ctx.fillStyle=grad;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
}
