const allbtn = document.querySelectorAll('button');




window.addEventListener('scroll', () => {
     
  allbtn.forEach(function(btn){

    if (window.scrollY > 0.5){
       body.style.backgroundColor = '#101327';
       btn.classList.add('button-on-Dark');      
    }
    else if (window.scrollY < 0.5){
       body.style.backgroundColor = ''; 
       btn.classList.remove('button-on-Dark');
    }
  });
});




function gifShow(){

  const container = document.querySelector('.container');
  const before = document.querySelector('.before');
  const slideForward = document.querySelector('.slide-forward');
  const slideBack = document.querySelector('.slide-back');
  

  
  slideForward.addEventListener('click', () => {
    let w = container.clientWidth;
    container.scrollLeft += w;
  });
  slideBack.addEventListener('click', () => {
    let w = container.clientWidth;
    container.scrollLeft -= w;
  });
  
  
  const gifs = [
    'https://media.giphy.com/media/ienko7tUwlgz86igqU/giphy.mp4',
    'https://media.giphy.com/media/BhTVQbO9r0U6s/giphy.mp4',
    'https://media.giphy.com/media/dB5cQcF3dCHdM2iz4h/giphy.mp4',
    'https://media.giphy.com/media/3oriOb1AHvsIj24On6/giphy.mp4',
    'https://media.giphy.com/media/GyqAOTapPevwA/giphy.mp4', 
    'https://media.giphy.com/media/MrxXXBriEIKBO/giphy.mp4',
    'https://media.giphy.com/media/ahZZZZFGLGhvq/giphy.mp4',
    'https://media.giphy.com/media/6eEWybJorTCvK/giphy.mp4',
    'https://media.giphy.com/media/3lsNKXm6IUS3K/giphy.mp4',
    'https://media.giphy.com/media/9w475hDWEPVlu/giphy.mp4',
    'https://media.giphy.com/media/HBMCmtsPEUShG/giphy.mp4',
    'https://media.giphy.com/media/1dLMYg36TuESIdjnZT/giphy.mp4',

  ];
  
  
  gifs.forEach(function(gif){
    
    let template = `
      <video class="child" src="${gif}" autoplay loop muted playsinline>
      <source src="${gif}" type="video/mp4" >
      </video>
      `;
      container.innerHTML += template;
  });
};



function fadeOut() {

  const slideShow = document.querySelector('.slide-show');
  const removeIntro = document.querySelector('.intro');

  setTimeout(function(){
    removeIntro.style.opacity = 0;
  }, 5000); 
  setTimeout(function(){
    slideShow.removeChild(removeIntro);
  }, 8000); 
}


function fadeInButtons() {
  const slideButtons = document.querySelector('.btns'); 
  slideButtons.style.opacity = 1;  
};

fadeOut();

setTimeout(function(){
  const container = document.querySelector('.container');
  container.style.display = 'flex';
  gifShow(); 
}, 3000);

setTimeout(function(){
  fadeInButtons(); 
}, 7000); 




setTimeout(function(){ 
  const leef = document.querySelector('.leef svg');
  leef.classList.add('animation-leef'); 
}, 2500);

setTimeout(function(){ 
  const leef = document.querySelector('.leef svg');
  leef.classList.remove('animation-leef'); 
}, 4000);




const leef = document.querySelector('.leef svg');

leef.addEventListener('mouseover', () => {
  
  leef.classList.add('animation-leef'); 
  setTimeout(function(){
    leef.classList.remove('animation-leef');
  }, 1000);
});




