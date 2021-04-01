//Setup
var playerMapCoords;
var actObject= [/*type, playerMapCoords*/];
var acting = false;
let player = {
  posX: 0,
  posY: 0,
  actX: 0,
  actY: 0
};
var interval;
var map = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,2,0], 
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,1,0,0,0,0,0], 
  [0,0,0,0,0,0,0]
  ];
//Setup

//Logic
  //Movement
function control(direction) { 
  if (acting == false) {
    acting = true
    switch (direction) {
      case 1:
        player.actY -= 40;
        if (player.posY > 0 && checkColliders()) {
          interval = setInterval(animatePlayerUp, 20);
        } else {
          player.actY += 40;
          acting = false;
        };
        break;
      case 2:
        player.actX -= 40;
        if (player.posX > 0 && checkColliders()) {
          interval = setInterval(animatePlayerLeft,20);
        } else {
          player.actX += 40;
          acting = false;
        };
        break;
      case 3:
        player.actY += 40;
        if (player.posY < 360 && checkColliders()) {
          interval = setInterval(animatePlayerDown,20);
        } else {
          player.actY -= 40;
          acting = false;
        };
        break;
      case 4:
        player.actX += 40;
        if (player.posX < 240 && checkColliders()) {
          interval = setInterval(animatePlayerRight,20);
        } else {
          player.actX -= 40;
          acting = false;
        };
        break;
    };
  };
};

function checkColliders() {
  playerMapCoords = map[player.actY/40][player.actX/40];
  switch (playerMapCoords) {
    case 0:
      return true;
      break;
    case 1:
      return false;
      break;
    case 2:
      actObject = [2,playerMapCoords];
      return true;
      break;
    
    default:
      return true;
      break;
  };
};
  //Movement
  
  //Actions
  function interactObject() {
    switch (actObject[0]) {
      case 2:
        map[player.actY/40][player.actX/40] = 1;
        new collider(player.actY/40,player.actX/40)
        break;
      default:
        break;
    }
  }
  //Actions
  
  //Miscellaneous 
function alertInfo() {
  alert("No Copyright infringement intended; Credits to Francis Aldave(Kiko) for sprites; Programmed and designed by Lejionnaire (OmegaCool)")
};
  //Miscellaneous 
//Logic

//Style
  //Animation
function animatePlayerDown() {
  if (player.posY < player.actY) {
    player.posY += 10;
    box.style.top = player.posY + 'px';
  } else {
    clearInterval(interval);
    acting = false;
    interactObject();
  };
};
function animatePlayerUp() {
  if (player.posY > player.actY) {
    player.posY -= 10;
    box.style.top = player.posY + 'px';
  } else {
    clearInterval(interval );
    acting = false;
    interactObject();
  };
};
function animatePlayerRight() {
  if (player.posX < player.actX ) {
    player.posX += 10;
    box.style.left = player.posX + 'px';
  } else {
    clearInterval(interval);
    acting = false;
    interactObject();
  };
};
function animatePlayerLeft() {
  if (player.posX > player.actX ) {
    player.posX -= 10;
    box.style.left = player.posX + 'px';
  } else {
    clearInterval(interval);
    acting = false;
    interactObject();
  };
};
  //Animations
  
  //Render
  function collider(mapY, mapX) {
    this.div = document.createElement('div')
    container.appendChild(this.div)
    let style = this.div.style
    //style.background = 'url("Images/images (55).jpeg")'
    style.backgroundColor = '#9F9F9F'
    style.width = '40px'
    style.height = '40px'
    style.top = (mapY * 40) + 'px'
    style.left = (mapX * 40) + 'px'
    style.position = 'absolute'
    style.border = '1px solid black'
  };
  
  
  
window.onload = () => {
  for (let i in map) {
    map[i].forEach((val, indx) => {
      switch (val) {
        case 1:
          new collider(i, indx)
          break;
        case 2:
          new function object() {
            this.div = document.createElement('div')
            container.appendChild(this.div)
            let style = this.div.style
            style.background = 'red'
            style.width = '40px'
            style.height = '40px'
            style.top = (i * 40) + 'px'
            style.left = (indx * 40) + 'px'
            style.position = 'absolute'
            style.border = '1px solid black'
          };
          break;  
      };
    }) 
  };
};
  //Render
//Style


