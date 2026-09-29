function previewImage(input){
  const box=input.closest('.upload-box') || input.closest('.medal')?.querySelector('.upload-label');
  if(!input.files || !input.files[0]) return;
  const file=input.files[0];
  if(!file.type.startsWith('image/')) return;
  const url=URL.createObjectURL(file);
  if(box && box.classList.contains('upload-box')){
    let img=box.querySelector('img');
    if(!img){img=document.createElement('img');box.appendChild(img);}
    img.src=url;
    const span=box.querySelector('span'); if(span) span.style.display='none';
  }
}
document.querySelector('.menu')?.addEventListener('click',()=>{
  const nav=document.querySelector('.nav nav');
  nav.style.display=nav.style.display==='flex'?'none':'flex';
  if(nav.style.display==='flex'){nav.style.position='absolute';nav.style.top='68px';nav.style.right='5%';nav.style.padding='18px';nav.style.flexDirection='column';nav.style.background='#0d1d19';nav.style.border='1px solid #24453a';nav.style.borderRadius='14px';}
});
