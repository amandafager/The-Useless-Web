
const container = document.querySelector('.container-snow');
let flake = document.querySelector('.snow-flake');
let section = document.querySelector('section');

createSnow();

function createSnow() {
  let snow = 100; 
  for(let i = 0; i < snow; i++ ){
    let moreflake = flake.cloneNode(true);
    moreflake.style.opacity = Math.random() * 1;
    moreflake.style.animationDuration = Math.random() * 20 + 20 + "s";
    container.appendChild(moreflake); 

  };

  /*moreflake.addEventListener('mouseover', (e) => {
    moreflake.style.opacity = 0;
  });*/

};




const gifs = [
  'https://media.giphy.com/media/ienko7tUwlgz86igqU/giphy.gif',
  'https://media.giphy.com/media/r3jTnU6iEwpbO/giphy.gif',
  'https://media.giphy.com/media/K2l8gFcatHmsE/giphy.gif',
  
];
 
const slides = document.querySelector(".slider_slide");
const forwardButton = document.querySelector(".slider_nav_forward");
const backButton = document.querySelector(".slider_nav_back");
const body = document.querySelector("body");

slides.addEventListener('mouseover', (e) => {
  body.style.backgroundColor = 'black';
  body.style.transition = '0.3s ease'; 
});

slides.addEventListener('mouseout', (e) => {
  body.style.backgroundColor = '';
});





slides.style.display = "block";


var currentIndex = 0;
var newIndex = 0; // keep track of the new slide


function navigateSlider() {
   slides.src = gifs[newIndex];
   currentIndex = newIndex;
   forwardButton.disabled = (newIndex === gifs.length - 1) ? true : false;
   backButton.disabled = (newIndex === 0) ? true : false;
   
}

backButton.addEventListener('click', () => {
  newIndex--;
  navigateSlider();
});

forwardButton.addEventListener('click', () => {
  newIndex++;
  navigateSlider();
});

const card = document.querySelector(".card");






