//Game Utils.js
//
//Created by Corbbin Goldsmith
//
//Purpose:
//Adds common game objects.
//
//

function point(){
 
 this.x = 0;
 this.y = 0;
 
}

gfx = {};

gfx.drawLine = function(ctx, pt1, pt2, optColor){
  
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(pt1.x, pt1.y);
  ctx.moveTo(pt2.x, pt2.y);
  if (optColor != undefined){
    ctx.strokeStyle = optColor;
  }
  else{
    ctx.strokeStyle = "#000";
  }
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
  
}

gfx.drawPoint = function(ctx, pt, size, optColor){
  
  ctx.beginPath();
  ctx.arc(pt.x, pt.y, size, 0, Math.PI * 2, false);
  ctx.closePath();
  if (optColor != undefined){
    ctx.fillStyle = optColor;
  }
  else{
    ctx.fillStyle = "#000";
  }
  ctx.fill();
  
}

