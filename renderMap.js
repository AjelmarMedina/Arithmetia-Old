function createColliderWall(mapY, mapX) {
  this.div = document.createElement('div')
  container.appendChild(this.div)
  let style = this.div.style
  //style.background = 'url("Images/Wall.png")'
  style.backgroundColor = '#B8B8B8'
  style.width = '25px'
  style.height = '25px'
  style.top = (mapY * 25) + 'px'
  style.left = (mapX * 25) + 'px'
  style.position = 'absolute'
  style.border = '1px solid black'
};

function createObjType2(mapY, mapX) {
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
          new createColliderWall(i, indx)
          break;
        case 2:
          new createObjType2(i, indx)
          break;
      };
    })
  };
};