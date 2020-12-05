
const container = document.querySelector('.container-snow');
let flake = document.querySelector('.snow-flake');
let section = document.querySelector('section');

let snow = 100; 

for(let i = 0; i < snow; i++ ){

  let moreflake = flake.cloneNode(true);
  moreflake.style.opacity = Math.random() * 1;
  moreflake.style.animationDuration = Math.random() * 20 + 30 + "s";
  container.appendChild(moreflake); 
  
};



const gifs = [
  'https://media.giphy.com/media/ienko7tUwlgz86igqU/giphy.gif',
  'https://media.giphy.com/media/r3jTnU6iEwpbO/giphy.gif',
  'https://media.giphy.com/media/K2l8gFcatHmsE/giphy.gif',
  
];
 
const slides = document.querySelector(".slider_slide");
const forwardButton = document.querySelector(".slider_nav_forward");
const backButton = document.querySelector(".slider_nav_back");


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

const _C = document.querySelector('.img-container'), 
      N = _C.children.length;

_C.style.setProperty('--n', N)

function lock(e) {};

function move(e) {};

_C.addEventListener('mousedown', lock, false);
_C.addEventListener('touchstart', lock, false);

_C.addEventListener('mouseup', move, false);
_C.addEventListener('touchend', move, false);

function unify(e) { return e.changedTouches ? e.changedTouches[0] : e };

let x0 = null;

function lock(e) { x0 = unify(e).clientX };

let i = 0;

function move(e) {
  if(x0 || x0 === 0) {
    let dx = unify(e).clientX - x0, s = Math.sign(dx);
  
    if((i > 0 || s < 0) && (i < N - 1 || s > 0))
      _C.style.setProperty('--i', i -= s);
	
    x0 = null
  }
};

_C.addEventListener('touchmove', e => {e.preventDefault()}, false);

