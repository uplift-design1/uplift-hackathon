document.documentElement.classList.add('js-ready');
document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.querySelector('.hamburger'), nav=document.querySelector('nav');
  if(menu&&nav) menu.addEventListener('click',()=>nav.classList.toggle('mobile-open'));

  // Numbered image system: every image slot uses a number.
  // Example: images/1.jpeg OR images/1.jpg. The loader tries both.
  document.querySelectorAll('img[data-img]').forEach(img=>{
    const n=String(img.dataset.img).trim();
    const base=`images/${n}`;
    let triedJpg=false;
    img.onerror=()=>{
      if(!triedJpg){
        triedJpg=true;
        img.src=`${base}.jpg`;
      }else{
        img.classList.add('image-missing');
        img.setAttribute('aria-hidden','true');
        img.style.display='none';
      }
    };
    img.src=`${base}.jpeg`;
    img.alt = img.alt || `Uplift Hackathon photo ${n}`;
  });

  // Reveal sections safely. Without this, .reveal would remain hidden by CSS.
  const reveals=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const revealObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('show');
          revealObserver.unobserve(entry.target);
        }
      });
    },{threshold:.08});
    reveals.forEach(el=>revealObserver.observe(el));
  }else{
    reveals.forEach(el=>el.classList.add('show'));
  }

  const progress=document.querySelector('.progress');
  if(progress){
    window.addEventListener('scroll',()=>{
      const h=document.documentElement.scrollHeight-window.innerHeight;
      progress.style.width=h>0?`${(window.scrollY/h)*100}%`:'0%';
    });
  }

  const counters=document.querySelectorAll('[data-count]');
  counters.forEach(el=>{
    const target=Number(el.dataset.count)||0;
    let started=false;
    const run=()=>{
      if(started)return; started=true;
      const start=performance.now(), duration=900;
      const tick=now=>{
        const t=Math.min((now-start)/duration,1);
        el.textContent=Math.round(target*(1-Math.pow(1-t,3)));
        if(t<1)requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if('IntersectionObserver' in window){
      const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){run();io.disconnect();}}),{threshold:.3});
      io.observe(el);
    }else run();
  });
});
