function checkColliders(objToCheck) {
  let playerMapCoords = objsMap[objToCheck.actXY[1]][objToCheck.actXY[0]];
  switch (playerMapCoords) {
    case 0:
      return true;
      break;
    case 1:
      if (objToCheck.interactionTypeFunc == interactObjType3) {
        return true
      } else {
        return false
      }
      break;
    case 2:
      objToCheck.interactionTypeFunc = interactObjType2
      return true;
      break;
    case 3:
      objToCheck.interactionTypeFunc = interactObjType3
      return true
      break;
    
    default:
      return true;
      break;
  };
};

function interactObject(objInteractor) {
  if (objInteractor.interactionTypeFunc != undefined) {
    objInteractor.interactionTypeFunc(objInteractor)
  }
}


function interactObjType2(objInteractor) {
  if (objsMap[objInteractor.actXY[1]][objInteractor.actXY[0]] == 0 ) {
    new createColliderWall(objInteractor.actXY[0], objInteractor.actXY[1])
    objsMap[objInteractor.actXY[1]][objInteractor.actXY[0]] = 1
  }
}
function interactObjType3(objInteractor) {
  if (objsMap[objInteractor.actXY[1]][objInteractor.actXY[0]] == 1) {
    objsMap[objInteractor.actXY[1]][objInteractor.actXY[0]] = 0;
    let objToRemove = document.getElementById(objInteractor.actXY[0] + '_' + objInteractor.actXY[1])
    container.removeChild(objToRemove)
  }
}



function setInteractionTypeDefault(obj) {
  obj.interactionTypeFunc = undefined;
};


//Movement





//Actions
//Actions

//Miscellaneous 
function alertInfo() {
  alert("No Copyright infringement intended; Programmed and designed by Lejionnaire (OmegaCool)")
};

function checkColliders(objToCheck) {
  let playerMapCoords = objsMap[objToCheck.actXY[1]][objToCheck.actXY[0]];
  switch (playerMapCoords) {
    case 0:
      return true;
      break;
    case 1:
      if (objToCheck.interactionTypeFunc == interactObjType3) {
        return true
      } else {
        return false
      }
      break;
    case 2:
      objToCheck.interactionTypeFunc = interactObjType2
      return true;
      break;
    case 3:
      objToCheck.interactionTypeFunc = interactObjType3
      return true
      break;
    
    default:
      return true;
      break;
  };
};

function interactObject(objInteractor) {
  if (objInteractor.interactionTypeFunc != undefined) {
    objInteractor.interactionTypeFunc(objInteractor)
  }
}
function interactObjType2(objInteractor) {
  if (objsMap[objInteractor.actXY[1]][objInteractor.actXY[0]] == 0 ) {
    new createColliderWall(objInteractor.actXY[0], objInteractor.actXY[1])
    objsMap[objInteractor.actXY[1]][objInteractor.actXY[0]] = 1
  }
  
}

function interactObjType3(objInteractor) {
  
  if (objsMap[objInteractor.actXY[1]][objInteractor.actXY[0]] == 1) {
    objsMap[objInteractor.actXY[1]][objInteractor.actXY[0]] = 0;
    let objToRemove = document.getElementById(objInteractor.actXY[0] + '_' + objInteractor.actXY[1])
    container.removeChild(objToRemove)
  }
}

//Movement





//Actions
//Actions

//Miscellaneous 
function alertInfo() {
  alert("No Copyright infringement intended; Programmed and designed by Lejionnaire (OmegaCool)")
};
