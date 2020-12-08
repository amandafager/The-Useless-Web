

const slideForward = document.querySelector('.slide-forward');
const slideBack = document.querySelector('.slide-back');
const play = document.querySelector('.play');
const body = document.querySelector('body');


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


      container.addEventListener('touchstart', () => {
        slides.style.opacity = 1;
      });

      container.addEventListener('mouseover', () => {
        slides.style.opacity = 1;
      });

///hitta ett sätt att kunna trycka på body för att få opacity 0 men när man trycker på knapparna få 1
     /* body.addEventListener('click', () => {
        slides.style.opacity = 0;
      });*/
  
  }); 


  

 
 
 
/*
  const slidesLength = slides.length;
  slideBack.disabled = (slides.length === 0) ? true : false;
  slideForward.disabled = (slides.length === slidesLength - 1) ? true : false;
*/



/*
 const gifs = {
  
      src: 'https://media.giphy.com/media/ienko7tUwlgz86igqU/giphy.gif', 
      alt: 'frg4',
      src: 'https://media.giphy.com/media/r3jTnU6iEwpbO/giphy.gif',
      alt: 'frf',
      src: 'https://media.giphy.com/media/K2l8gFcatHmsE/giphy.gif', 
      alt: 'gt2t',
    };
*/





