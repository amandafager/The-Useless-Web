
gifShow();

function gifShow(){

const container = document.querySelector('.container');
const slideForward = document.querySelector('.slide-forward');
const slideBack = document.querySelector('.slide-back');



slideForward.addEventListener('click', () => {
  document.querySelector('.container').scrollLeft += 400;
  
});

slideBack.addEventListener('click', () => {
  document.querySelector('.container').scrollLeft -= 400;
  
});


const gifs = [
  'https://media.giphy.com/media/ienko7tUwlgz86igqU/giphy.gif',
  'https://media.giphy.com/media/r3jTnU6iEwpbO/giphy.gif',
  'https://media.giphy.com/media/dB5cQcF3dCHdM2iz4h/giphy.gif',  
];

    gifs.forEach(function(gif){
      const slides = document.createElement('img');
      container.appendChild(slides);
      slides.src = gif;
      slides.classList.add('child'); 
  
      slideForward.addEventListener('click', () => {
        //slides.style.opacity = 1;
        //slides.classList.add('animation'); 
        
      });

      /*container.addEventListener('touchstart', () => {
        slides.style.opacity = 1;
      });

      app.js:41 [Violation] Added non-passive event listener to a scroll-blocking 'touchstart' event. Consider marking event handler as 'passive' to make the page more responsive. See https://www.chromestatus.com/feature/5745543795965952
      */

      container.addEventListener('mouseover', () => {
        slides.style.opacity = 1;
      });
  
  }); 

};


  

 
 
 
/*
  const slidesLength = slides.length;
  slideBack.disabled = (slides.length === 0) ? true : false;
  slideForward.disabled = (slides.length === slidesLength - 1) ? true : false;
*/








