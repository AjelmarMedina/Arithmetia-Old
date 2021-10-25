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
  renderEntityObj(entityMainPlayer);
}

function renderEntityObj(entityObj) {
  entityObj.styleXY[0] = entityObj.actXY[0] * 25;
  entityObj.styleXY[1] = entityObj.actXY[1] * 25;
  entityObj.htmlStyleEquiv.style.top = (entityObj.styleXY[1] - 1) + 'px';
  entityObj.htmlStyleEquiv.style.left = (entityObj.styleXY[0] - 1) + 'px';
}