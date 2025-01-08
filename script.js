let GetStarted=document.querySelector('.div-wrapper-3')
let Header=document.querySelector('.header')
window.addEventListener('scroll',()=>{let scrollPosition=window.scrollY;if(scrollPosition>=420){Header.style.position='absolute';Header.style.top='420px';console.log('Header fixo na posição:',scrollPosition);}else{Header.style.position='fixed';Header.style.top='0px';}
console.log('Posição do scroll (em pixels):',scrollPosition);});GetStarted.onclick=()=>{console.log('Get Started button clicked');}