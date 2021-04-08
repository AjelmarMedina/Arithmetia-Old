//Setup


var actObject = [ /*type, playerlevelMapCoords*/ ];

var movementBoundaries = {
  minXY: [0, 0],
  maxXY: [12, 15],
}
let objMainPlayer = {
  actXY: [6, 1],
  styleXY: [150, 25],
  acting: false,
  //objInteractionType: [],
  htmlStyleEquiv: divMainPlayer
};


//Setup

//Logic
//Movement
function moveObject(objToMove, axisToMoveOn, directionToMoveTo) {
  if (objToMove.acting == false) {
    objToMove.acting = true
    let animationInterval;
    switch (axisToMoveOn) {
      case 0:
        objToMove.actXY[0] += directionToMoveTo
        if ((objToMove.actXY[0] <= movementBoundaries.maxXY[0] && objToMove.actXY[0] >= movementBoundaries.minXY[0]) && (checkColliders(objToMove.actXY))) {
          animationInterval = setInterval(() => {
            objToMove.styleXY[0] += directionToMoveTo * 5;
            objToMove.htmlStyleEquiv.style.left = objToMove.styleXY[0] + 'px'
            if (objToMove.styleXY[0] == (objToMove.actXY[0] * 25)) {
              clearInterval(animationInterval)
              objToMove.htmlStyleEquiv.style.left = ((objToMove.actXY[0] * 25) - 2) + 'px'
              objToMove.acting = false
            }
          }, 20)
        } else {
          objToMove.actXY[0] -= directionToMoveTo
          objToMove.acting = false
        }
        break;
      case 1:
        objToMove.actXY[1] += directionToMoveTo
        if ((objToMove.actXY[1] <= movementBoundaries.maxXY[1] && objToMove.actXY[1] >= movementBoundaries.minXY[1]) && (checkColliders(objToMove.actXY))) {
          animationInterval = setInterval(() => {
            objToMove.styleXY[1] += directionToMoveTo * 5;
            objToMove.htmlStyleEquiv.style.top = objToMove.styleXY[1] + 'px'
            if (objToMove.styleXY[1] == (objToMove.actXY[1] * 25)) {
              clearInterval(animationInterval)
              objToMove.htmlStyleEquiv.style.top = ((objToMove.actXY[1] * 25) - 1) + 'px'
              objToMove.acting = false
            }
          }, 20)
        } else {
          objToMove.actXY[1] -= directionToMoveTo
          objToMove.acting = false
        }
        break;
    }
  }
}
function checkColliders(objActXY) {
  let playerMapCoords = levelMap[objActXY[1]][objActXY[0]];
  switch (playerMapCoords) {
    case 0:
      return true;
      break;
    case 1:
      return false;
      break;
    case 2:
      actObject = [2, playerMapCoords];
      return true;
      break;

    default:
      return true;
      break;
  };
};




/*function control(direction) { 
  if (acting == false) {
    acting = true
    switch (direction) {
      case 1:
        player.actY -= 25;
        if (player.posY > 0 && checkColliders()) {
          interval = setInterval(animatePlayerUp, 20);
        } else {
          player.actY += 25;
          acting = false;
        };
        break;
      case 2:
        player.actX -= 25;
        if (player.posX > 0 && checkColliders()) {
          interval = setInterval(animatePlayerLeft,20);
        } else {
          player.actX += 25;
          acting = false;
        };
        break;
      case 3:
        player.actY += 25;
        if (player.posY < 375 && checkColliders()) {
          interval = setInterval(animatePlayerDown,20);
        } else {
          player.actY -= 25;
          acting = false;
        };
        break;
      case 4:
        player.actX += 25;
        if (player.posX < 300 && checkColliders()) {
          interval = setInterval(animatePlayerRight,20);
        } else {
          player.actX -= 25;
          acting = false;
        };
        break;
    };
  };
};*/


//Movement

//Actions
function interactObject() {
  switch (actObject[0]) {
    case 2:
      levelMap[player.actY / 25][player.actX / 25] = 1;
      new createColliderWall(player.actY / 25, player.actX / 25)
      break;
    default:
      break;
  }
}
//Actions

//Miscellaneous 
function alertInfo() {
  alert("No Copyright infringement intended; Programmed and designed by Lejionnaire (OmegaCool)")
};
//Miscellaneous 
//Logic

//Style
//Animation
/*function animatePlayerDown() {
  if (player.posY < player.actY) {
    player.posY += 5;
    box.style.top = player.posY + 'px';
  } else {
    clearInterval(interval);
    acting = false;
    interactObject();
  };
};
function animatePlayerUp() {
  if (player.posY > player.actY) {
    player.posY -= 5;
    box.style.top = player.posY + 'px';
  } else {
    clearInterval(interval );
    acting = false;
    interactObject();
  };
};
function animatePlayerRight() {
  if (player.posX < player.actX ) {
    player.posX += 5;
    box.style.left = player.posX + 'px';
  } else {
    clearInterval(interval);
    acting = false;
    interactObject();
  };
};
function animatePlayerLeft() {
  if (player.posX > player.actX ) {
    player.posX -= 5;
    box.style.left = player.posX + 'px';
  } else {
    clearInterval(interval);
    acting = false;
    interactObject();
  };
};*/
//Animations

//Style