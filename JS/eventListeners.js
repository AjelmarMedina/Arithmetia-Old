

//SETUP

var eventListenerMovementInterval;
var btnMoveDownVar = document.querySelector('#btnMoveDown');
var btnMoveUpVar = document.querySelector('#btnMoveUp');
var btnMoveLeftVar = document.querySelector('#btnMoveLeft');
var btnMoveRightVar = document.querySelector('#btnMoveRight');

//CLICK

btnMoveUpVar.addEventListener('click',()=>{
  btnMoveUpVar.style.backgroundColor = 'orange';
  moveEntity(entityMainPlayer, 1, -1)
});
btnMoveLeftVar.addEventListener('click',()=>{
  btnMoveLeftVar.style.backgroundColor = 'orange';
  moveEntity(entityMainPlayer, 0, -1)
});
btnMoveDownVar.addEventListener('click',()=>{
  btnMoveDownVar.style.backgroundColor = 'orange';
  moveEntity(entityMainPlayer, 1, 1)
});
btnMoveRightVar.addEventListener('click',()=>{
  btnMoveUpVar.style.backgroundColor = 'orange';
  moveEntity(entityMainPlayer, 0, 1)
});


//TOUCHSTART

btnMoveDownVar.addEventListener('touchstart', (event) => {
  event.preventDefault();
  window.clearInterval(eventListenerMovementInterval);
    moveEntity(entityMainPlayer, 1, 1)
  eventListenerMovementInterval = setInterval(() => {
    moveEntity(entityMainPlayer, 1, 1)
  }, 180); 
  btnMoveDownVar.style.backgroundColor = 'orange';
});
btnMoveUpVar.addEventListener('touchstart', (event) => {
  event.preventDefault();
  window.clearInterval(eventListenerMovementInterval);
    moveEntity(entityMainPlayer, 1, -1)
  eventListenerMovementInterval = setInterval(() => {
    moveEntity(entityMainPlayer, 1, -1)
  }, 180);  
  btnMoveUpVar.style.backgroundColor = 'orange';
});
btnMoveLeftVar.addEventListener('touchstart', (event) => {
  event.preventDefault();
  window.clearInterval(eventListenerMovementInterval);
    moveEntity(entityMainPlayer, 0, -1)
  eventListenerMovementInterval = setInterval(() => {
    moveEntity(entityMainPlayer, 0, -1)
  }, 180);
  btnMoveLeftVar.style.backgroundColor = 'orange';
});
btnMoveRightVar.addEventListener('touchstart', (event) => {
  event.preventDefault();
  window.clearInterval(eventListenerMovementInterval);
    moveEntity(entityMainPlayer, 0, 1)
  eventListenerMovementInterval = setInterval(() => {
    moveEntity(entityMainPlayer, 0, 1)
  }, 180);
  btnMoveRightVar.style.backgroundColor = 'orange';
});

//TOUCHEND

btnMoveUpVar.addEventListener('touchend', (event) => {
  event.preventDefault();
  btnMoveUpVar.style.backgroundColor = 'white';
  window.clearInterval(eventListenerMovementInterval);
});
btnMoveLeftVar.addEventListener('touchend', (event) => {
  event.preventDefault();
  btnMoveLeftVar.style.backgroundColor = 'white';
  window.clearInterval(eventListenerMovementInterval);
});
btnMoveDownVar.addEventListener('touchend', (event) => {
  event.preventDefault();
  btnMoveDownVar.style.backgroundColor = 'white';
  window.clearInterval(eventListenerMovementInterval);
});
btnMoveRightVar.addEventListener('touchend', (event) => {
  event.preventDefault();
  btnMoveRightVar.style.backgroundColor = 'white';
  window.clearInterval(eventListenerMovementInterval);
});

//MISCELLANEOUS




/*for (var i = 0; i < classControlButtonsArr.length; i++) {
  classControlButtonsArr[i].addEventListener('touchend', (event) => {
    event.preventDefault();
    console.log(i);
    console.log(classControlButtonsArr[i]);
    // classControlButtonsArr[i].style.backgroundColor = 'white';
    window.clearInterval(eventListenerMovementInterval);
  });
} */

/*function touchStarted(directionToMove) {
  switch (directionToMove) {
    case 1:
      
      break;
    case 2:
      btnMoveLeftVar.style.backgroundColor = 'orange';
      eventListenerMovementInterval = setInterval(() => {
      }, 10);
      break;
    case 3:
      btnMoveDownVar.style.backgroundColor = 'orange';
      eventListenerMovementInterval = setInterval(() => {
      }, 10);
      break;
    case 4:
      btnMoveRightVar.style.backgroundColor = 'orange';
      eventListenerMovementInterval = setInterval(() => {
      }, 10);
      break;
  };
};*/
