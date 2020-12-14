
//on scrollY the body background and color of buttons change
const allbtn = document.querySelectorAll('button');

window.addEventListener('scroll', () => {
     
  allbtn.forEach(function(btn){

    if (window.scrollY > 0.5) {
       body.style.backgroundColor = 'var(--bg-color-scroll)';
       btn.classList.add('button-on-Dark');      
    }
    else if (window.scrollY < 0.5) {
       body.style.backgroundColor = ''; 
       btn.classList.remove('button-on-Dark');
    }
  });
});

//creates a slideshow of gifs with navigation on clicks
function gifShow(){

  const container = document.querySelector('.container');
  const before = document.querySelector('.before');
  const slideForward = document.querySelector('.slide-forward');
  const slideBack = document.querySelector('.slide-back');
  
  slideForward.addEventListener('click', () => {
    let w = container.clientWidth;
    container.scrollLeft += w;
  })
  slideBack.addEventListener('click', () => {
    let w = container.clientWidth;
    container.scrollLeft -= w;
  })
  
  const gifs = [
    'https://media.giphy.com/media/ienko7tUwlgz86igqU/giphy.mp4',
    'https://media.giphy.com/media/r3jTnU6iEwpbO/giphy.mp4',
    'https://media.giphy.com/media/dB5cQcF3dCHdM2iz4h/giphy.mp4',
    'https://media.giphy.com/media/3oriOb1AHvsIj24On6/giphy.mp4', 
    'https://media.giphy.com/media/MrxXXBriEIKBO/giphy.mp4',
  ]
  
  gifs.forEach(function(gif){

    let template = `
      <video class="child" src="${gif}" autoplay loop muted playsinline>
      <source src="${gif}" type="video/mp4" >
      </video>
      `;
      container.innerHTML += template;
  })
}

//function that fades out the intro content and then romoves it from the dom
function fadeOut() {

  const slideShow = document.querySelector('.slide-show');
  const removeIntro = document.querySelector('.intro');

  setTimeout(function(){
    removeIntro.style.opacity = 0;
  }, 4000); 
  setTimeout(function(){
    slideShow.removeChild(removeIntro);
  }, 8000); 
}
fadeOut();

//fades in the slide button
setTimeout(function(){
  const slideButtons = document.querySelector('.btns'); 
  slideButtons.style.opacity = 1; 
}, 7000); 

//display the container for slideshow and call the function that creates gifs. 
setTimeout(function(){
  const container = document.querySelector('.container');
  container.style.display = 'flex';
  gifShow(); 
}, 4000);

//animates leef 3 seconds after page loaded 
setTimeout(function(){ 
  const leef = document.querySelector('.leef svg');
  leef.classList.add('animation-leef'); 
}, 3000);

setTimeout(function(){ 
  const leef = document.querySelector('.leef svg');
  leef.classList.remove('animation-leef'); 
}, 5000);

//animation of leef when mouse is over 
const leef = document.querySelector('.leef svg');

leef.addEventListener('mouseover', () => {
  leef.classList.add('animation-leef'); 

  setTimeout(function(){
    leef.classList.remove('animation-leef');
  }, 1000);
})





