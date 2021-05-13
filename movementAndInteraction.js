//Setup

var movementBoundaries = {
  minXY: [0, 0],
  maxXY: [12, 15],
}
let objMainPlayer = {
  actXY: [6, 1],
  styleXY: [150, 25],
  acting: false,
  interactionType: undefined,
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
        if ((objToMove.actXY[0] <= movementBoundaries.maxXY[0] && objToMove.actXY[0] >= movementBoundaries.minXY[0]) && (checkColliders(objToMove))) {
          animationInterval = setInterval(() => {
            objToMove.styleXY[0] += directionToMoveTo * 5;
            objToMove.htmlStyleEquiv.style.left = objToMove.styleXY[0] + 'px'
            if (objToMove.styleXY[0] == (objToMove.actXY[0] * 25)) {
              clearInterval(animationInterval)
              objToMove.htmlStyleEquiv.style.left = ((objToMove.actXY[0] * 25) - 1) + 'px'
              interactObject(objToMove)
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
        if ((objToMove.actXY[1] <= movementBoundaries.maxXY[1] && objToMove.actXY[1] >= movementBoundaries.minXY[1]) && (checkColliders(objToMove))) {
          animationInterval = setInterval(() => {
            objToMove.styleXY[1] += directionToMoveTo * 5;
            objToMove.htmlStyleEquiv.style.top = objToMove.styleXY[1] + 'px'
            if (objToMove.styleXY[1] == (objToMove.actXY[1] * 25)) {
              clearInterval(animationInterval)
              objToMove.htmlStyleEquiv.style.top = ((objToMove.actXY[1] * 25) - 1) + 'px'
              interactObject(objToMove)
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
function checkColliders(objToCheck) {
  let playerMapCoords = levelMap[objToCheck.actXY[1]][objToCheck.actXY[0]];
  switch (playerMapCoords) {
    case 0:
      return true;
      break;
    case 1:
      return false;
      break;
    case 2:
      objToCheck.interactionType = interactObjType2
      return true;
      break;
    case 3:
      objToCheck.interactionType = interactObjType3
      break;
    
    default:
      return true;
      break;
  };
};

function interactObject(objInteractor) {
  if (objInteractor.interactionType != undefined) {
    objInteractor.interactionType(objInteractor)
  }
}
function interactObjType2(objInteractor) {
  // objInteractor.testVariable = 'hello'
  new createColliderWall(objInteractor.actXY[0], objInteractor.actXY[1])
  levelMap[objInteractor.actXY[1]][objInteractor.actXY[0]] = 1
  // console.log(objInteractor.testVariable);
}


// function interactObjType3(objInteractor) {
//   new createColliderWall(objInteractor.actXY[0], objInteractor.actXY[1])
//   objInteractor.interactionType = undefined;
// }

//Movement





//Actions
//Actions

//Miscellaneous 
function alertInfo() {
  alert("No Copyright infringement intended; Programmed and designed by Lejionnaire (OmegaCool)")
};
//Miscellaneous 
//Logic
