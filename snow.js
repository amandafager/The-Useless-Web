const container = document.querySelector('.container-snow');
const body = document.querySelector('body');
const snowButton = document.querySelector('.lets-snow');
const snow = document.querySelector('.snow');

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

 function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
 }
 

 function createSnow(){
   
    let snow = 100;
   
    for(let i = 0; i < snow; i++ ){

        let flake = document.createElement('div');
        flake.classList.add('snow-flake');
        flake.style.fontSize = Math.random() * 2 + "rem";
        flake.style.opacity = Math.random() * 0.9;
        flake.style.animationDuration = Math.random() * 2 + 10 + "s";
        flake.style.animationDelay = Math.random() * 10 +  "s";
        flake.textContent = "❄";


          /*
            let xy = getRandomPosition(flake);
            flake.style.top = xy[0] + 'px';
            flake.style.left = xy[1] + 'px';*/
            

       
        container.appendChild(flake);
  };

 };

 function getRandomPosition(element) {
	let x = document.body.offsetHeight-element.clientHeight;
	let y = document.body.offsetWidth-element.clientWidth;
	let randomX = Math.floor(Math.random()*x);
	let randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}




const snowflakes = document.querySelectorAll('.snow-flake');

snowflakes.forEach(snowflake => {

    snowflake.addEventListener('mouseover', (e) => {

        e.preventDefault();

        snowflake.style.zindex = 1;

        snowflake.classList.add('glow');
        
        console.log(snowflake);
   });

   snowflake.addEventListener('touchstart', (e) => {

    e.preventDefault();

    snowflake.classList.add('glow');

    setTimeout(function(){ 
        snowflake.classList.remove('glow');  
     }, 5000);

   });

   snowflake.addEventListener('mouseout', () => {

    
       setTimeout(function(){ 
           snowflake.classList.remove('glow');  
        }, 3000);
   });

});


