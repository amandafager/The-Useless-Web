
const container = document.querySelector('.container-snow');
let flake = document.querySelector('.snow-flake');
let section = document.querySelector('section');

let snow = 100; 

for(let i = 0; i < snow; i++ ){

  let moreflake = flake.cloneNode(true);
  moreflake.style.paddingLeft = Math.random() * 20 + "px";
  moreflake.style.animationDuration = Math.random() * 10 + 16 + "s";
  container.appendChild(moreflake); 
  
};