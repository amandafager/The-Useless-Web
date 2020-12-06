/*const button = document.getElementById('slide');
const container = document.querySelector('.container');

button.onclick = function () {
  container.scrollLeft += 20;
};*/

const button = document.getElementById('slide');

button.onclick = function () {
  document.getElementById('container').scrollLeft += 20;
};



const gifs = [
    'https://media.giphy.com/media/ienko7tUwlgz86igqU/giphy.gif',
    'https://media.giphy.com/media/r3jTnU6iEwpbO/giphy.gif',
    'https://media.giphy.com/media/K2l8gFcatHmsE/giphy.gif',
    
  ];
  
/*
  gifs.forEach(gif => {
      
    const images = document.createElement('img');
    images.src = "gif";

    container.appendChild(images);

  });
*/
