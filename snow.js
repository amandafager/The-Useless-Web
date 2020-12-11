const snow = document.querySelector('.container-snow');
const body = document.querySelector('body');
const snowButton = document.querySelector('.lets-snow');

createSnow();


snowButton.addEventListener('click', () => {


    if (snow.style.display === "flex") {
       snow.style.display = "none";
       snowButton.textContent = "Let it snow!";
    } 
    else {
       snow.style.display = "flex";
       snowButton.textContent = "Stop snow";
    }
 });

 function createSnow(){
   
    let snowflakes = 100;
   
    for(let i = 0; i < snowflakes; i++ ){

        let flake = document.createElement('div');
        flake.classList.add('snow-flake');
        flake.style.fontSize = Math.random() * 5 + "rem";
        flake.style.opacity = Math.random() * 0.9;
        flake.style.animationDuration = Math.random() * 2 + 10 + "s";
        flake.style.animationDelay = Math.random() * 10 +  "s";
        flake.textContent = "*";
        snow.appendChild(flake);
  };
 };


const snowflakes = document.querySelectorAll('.snow-flake');
snowflakes.forEach(snowflake => {

    snowflake.addEventListener('mouseover', (e) => {

        snowflake.classList.add('glow');
   });

   snowflake.addEventListener('touchstart', (e) => {
      
      snowflake.classList.add('glow');
      
      setTimeout(function(){
         snowflake.classList.remove('glow');
      }, 5000);
   });

   snowflake.addEventListener('mouseout', () => {
      
      setTimeout(function(){ 
           snowflake.classList.remove('glow');  
        }, 2500);
   });

});







