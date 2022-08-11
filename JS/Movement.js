//Setup

var movementBoundaries = {
  minXY: [0, 0],
  maxXY: [12, 15],
}
let entityMainPlayer = {
  actXY: [0, 0],
  styleXY: [0, 0],
  acting: false,
  interactionTypeFunc: undefined,
  htmlStyleEquiv: divMainPlayer
};




//Logic
//Movement
function moveEntity(objToMove, axisToMoveOn, directionToMoveTo) {
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



