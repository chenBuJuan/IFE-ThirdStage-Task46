var heroObj = function(){//hero类声明
    
    this.x;
    this.y;
    this.radius;
    
}

heroObj.prototype.init = function(){//成员函数--初始化
    
    this.x = Math.floor( Math.random() * Math.floor(canWidth/cellLength) )* cellLength;
    this.y = Math.floor( Math.random() * Math.floor(canHeight/120) )* cellLength;
    this.radius = cellLength/2;
    
}

heroObj.prototype.draw = function(){//成员函数--绘制
    
    ctx.save();
    ctx.fillStyle = "#44B811";
    ctx.beginPath();
    ctx.arc(this.x + cellLength/2,this.y + cellLength/2,this.radius,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    
}

heroObj.prototype.getX = function(){//成员函数--返回坐标值
    
    return this.x;
    
}

heroObj.prototype.getY = function(){//成员函数--返回坐标值
    
    return this.y;
    
}

heroObj.prototype.move = function(x,y){//成员函数--更新坐标值
    
    this.x = x * cellLength;
    this.y = y * cellLength;
    
}