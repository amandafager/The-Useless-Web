const snow = document.querySelector('.container-snow');
const body = document.querySelector('body');
const snowButton = document.querySelector('.lets-snow');

//add bounce effect on the lets snow button 
setTimeout(function(){
   snowButton.style.opacity = 1;
   snowButton.classList.add('bounce'); 
 }, 10000)
 
 //toggle between "let it snow" and "stop snow" buttons
 snowButton.addEventListener('click', () => {
    
   if (snow.style.display === "flex") {
      snow.style.display = "none";
      snowButton.textContent = "Let it snow!";
    }
    else {
       snow.style.display = "flex";
       snowButton.textContent = "Stop snow";
      }
 })

//function that creates snow 
 function createSnow(){
   
    let snowflakes = 100;
   
    for(let i = 0; i < snowflakes; i++ ) {

        let flake = document.createElement('div');
        flake.classList.add('snow-flake');
        flake.style.fontSize = Math.random() * 3 + 2 + "rem";
        flake.style.opacity = Math.random() * 0.9;
        flake.style.animationDuration = Math.random() * 10 + 9 + "s";
        flake.style.animationDelay = Math.random() * 10 +  "s";
        flake.textContent = "*";
        snow.appendChild(flake);
  }
 }
 createSnow();

 //add glow effect on snow flakes when mouse is over and removes the effect after 3 seconds
const snowflakes = document.querySelectorAll('.snow-flake');

snowflakes.forEach(snowflake => {
   
   snowflake.addEventListener('mouseover', () => {
      snowflake.classList.add('glow');
   })

   snowflake.addEventListener('mouseout', () => {
      setTimeout(function() {
         snowflake.classList.remove('glow');  
        }, 3000);
   })
})







