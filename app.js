






  




function gifShow(){

const container = document.querySelector('.container');
const before = document.querySelector('.before');
const slideForward = document.querySelector('.slide-forward');
const slideBack = document.querySelector('.slide-back');



slideForward.addEventListener('click', () => {
  document.querySelector('.container').scrollBy(300, 0);
  //document.querySelector('.container').scrollLeft += 350;
  
});

slideBack.addEventListener('click', () => {
  document.querySelector('.container').scrollLeft -= 300;
  
});


const gifs = [
  'https://media.giphy.com/media/ienko7tUwlgz86igqU/giphy.mp4',
  'https://media.giphy.com/media/r3jTnU6iEwpbO/giphy.mp4',
  'https://media.giphy.com/media/dB5cQcF3dCHdM2iz4h/giphy.mp4',
  'https://media.giphy.com/media/3oriOb1AHvsIj24On6/giphy.mp4', 
  'https://media.giphy.com/media/MrxXXBriEIKBO/giphy.mp4',
];

    gifs.forEach(function(gif){

      let template = `
      <video class="child" src="${gif}" autoplay loop muted playsinline>
      <source src="${gif}" type="video/mp4" >
      </video>
      `; 
    
      container.innerHTML += template;

      const slides = document.querySelectorAll('video');

      slides.forEach(function(slide){
        
      
      
      });


      

     

     

    

      /*
      const slides = document.createElement('video');
      container.appendChild(slides);
      slides.src = gif;
      slides.autoplay = true; 
      slides.muted =  
      slides.loop = true; 
      slides.play();
      slides.classList.add('child');*/ 
  
      slideForward.addEventListener('click', () => {
        //slides.style.opacity = 1;
        //slides.classList.add('animation'); 
        
      });

     container.addEventListener('touchstart', () => {
        slides.style.opacity = 1;
      });
 /*
      app.js:41 [Violation] Added non-passive event listener to a scroll-blocking 'touchstart' event. Consider marking event handler as 'passive' to make the page more responsive. See https://www.chromestatus.com/feature/5745543795965952
      */

      container.addEventListener('mouseover', () => {
        slides.style.opacity = 1;
      });
  
  });
  

};

function fadeOut() {

  const slideShow = document.querySelector('.slide-show');
  const removeFirst = document.querySelector('.first');

  setTimeout(function(){
    removeFirst.style.opacity = 0;
  }, 4000); 
  setTimeout(function(){
    slideShow.removeChild(removeFirst);
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
}, 4000);

setTimeout(function(){
  fadeInButtons(); 
}, 8000); 
  

 
 
 
/*
  const slidesLength = slides.length;
  slideBack.disabled = (slides.length === 0) ? true : false;
  slideForward.disabled = (slides.length === slidesLength - 1) ? true : false;
*/








