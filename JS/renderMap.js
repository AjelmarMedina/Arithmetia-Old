function createColliderWall(mapX, mapY) {
  this.div = document.createElement('div')
  container.appendChild(this.div)
  let style = this.div.style
  //style.background = 'url("Images/Wall.png")'
  
  this.div.id = mapX + '_' + mapY;
  style.zIndex = 0;
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
function createObjType3(mapX, mapY) {
  this.div = document.createElement('div')
  container.appendChild(this.div)
  let style = this.div.style
  style.background = 'yellow'
  style.width = '25px'
  style.height = '25px'
  style.top = (mapY * 25) + 'px'
  style.left = (mapX * 25) + 'px'
  style.position = 'absolute'
  style.border = '1px solid black'
  style.borderRadius = `13px`
};


window.onload = () => { 
  renderLevelSprites(spriteMap);
};
function renderLevelSprites(levelToRender) {
  for (let i in levelToRender) {
    levelToRender[i].forEach((val, indx) => {
      switch (val) {
        case 1:
          new createColliderWall(indx, i)
          break;
        case 2:
          new createObjType2(indx, i)
          break;
        case 3:
          new createObjType3(indx, i)
          break;
        
      };
    })
    };
  renderEntities(entityMainPlayer);
}

function renderEntities() {
  
  for (let yCoord = 0; yCoord < entityMap.length; yCoord++) {
    for (let xCoord = 0; xCoord < entityMap[yCoord].length; xCoord++) {
      switch (entityMap[yCoord][xCoord]) {
        case 1:
          entityMainPlayer.actXY[0] = xCoord;
          entityMainPlayer.actXY[1] = yCoord;
          entityMainPlayer.styleXY[0] = entityMainPlayer.actXY[0] * 25;
          entityMainPlayer.styleXY[1] = entityMainPlayer.actXY[1] * 25;
          entityMainPlayer.htmlStyleEquiv.style.top = (entityMainPlayer.styleXY[1] - 1) + 'px';
          entityMainPlayer.htmlStyleEquiv.style.left = (entityMainPlayer.styleXY[0] - 1) + 'px';
          break;
        
      }
    }
  }
  
  
}
