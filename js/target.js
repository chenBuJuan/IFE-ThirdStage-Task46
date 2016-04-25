var targetObj = function(){
    
    this.x;
    this.y;
    this.radius;
    
}

targetObj.prototype.init = function(){
    
    this.x = Math.floor( Math.random() * Math.floor(canWidth/cellLength) )* cellLength;
    this.y = Math.floor( Math.random() * Math.floor(canHeight/120) + Math.floor(canHeight/24) )* cellLength;
    this.radius = cellLength/2;
    
}

targetObj.prototype.draw = function(){
    
    ctx.save();
    ctx.fillStyle = "#F4AF29";
    ctx.beginPath();
    ctx.arc(this.x + cellLength/2,this.y + cellLength/2,this.radius,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    
}

targetObj.prototype.getX = function(){
    
    return this.x;
    
}

targetObj.prototype.getY = function(){
    
    return this.y;
    
}