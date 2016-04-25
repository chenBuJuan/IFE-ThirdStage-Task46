var heroObj = function(){
    
    this.x;
    this.y;
    this.radius;
    
}

heroObj.prototype.init = function(){
    
    this.x = Math.floor( Math.random() * Math.floor(canWidth/cellLength) )* cellLength;
    this.y = Math.floor( Math.random() * Math.floor(canHeight/120) )* cellLength;
    this.radius = cellLength/2;
    
}

heroObj.prototype.draw = function(){
    
    ctx.save();
    ctx.fillStyle = "#44B811";
    ctx.beginPath();
    ctx.arc(this.x + cellLength/2,this.y + cellLength/2,this.radius,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    
}

heroObj.prototype.getX = function(){
    
    return this.x;
    
}

heroObj.prototype.getY = function(){
    
    return this.y;
    
}

heroObj.prototype.move = function(x,y){
    
    this.x = x * cellLength;
    this.y = y * cellLength;
    
}