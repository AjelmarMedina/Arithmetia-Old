function createColliderWall(mapX, mapY) {
  this.div = document.createElement('div')
  container.appendChild(this.div)
  let style = this.div.style
  //style.background = 'url("Images/Wall.png")'
  style.zIndex = 0
  style.backgroundColor = '#B8B8B8'
  style.width = '25px'
  style.height = '25px'
  style.top = (mapY * 25) + 'px'
  style.left = (mapX * 25) + 'px'
  style.position = 'absolute'
  style.border = '1px solid black'
};

function createObjType2(mapX, mapY) {
  this.div = document.createElement('div')
  container.appendChild(this.div)
  let style = this.div.style
  style.background = 'red'
  style.width = '25px'
  style.height = '25px'
  style.top = (mapY * 25) + 'px'
  style.left = (mapX * 25) + 'px'
  style.position = 'absolute'
  style.border = '1px solid black'
  style.borderRadius = `13px`
};

window.onload = () => {
  for (let i in levelMap) {
    levelMap[i].forEach((val, indx) => {
      switch (val) {
        case 1:
          new createColliderWall(indx, i)
          break;
        case 2:
          new createObjType2(indx, i)
          break;
      };
    })
    };
    
    // console.log(classControlButtonsArr);
    
  
  
};