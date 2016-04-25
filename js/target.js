var targetObj = function(){//target类声明
    
    this.x;
    this.y;
    this.radius;
    
}

targetObj.prototype.init = function(){//成员函数--初始化
    
    this.x = Math.floor( Math.random() * Math.floor(canWidth/cellLength) )* cellLength;
    this.y = Math.floor( Math.random() * Math.floor(canHeight/120) + Math.floor(canHeight/24) )* cellLength;
    this.radius = cellLength/2;
    
}

targetObj.prototype.draw = function(){//成员函数--绘制
    
    ctx.save();
    ctx.fillStyle = "#F4AF29";
    ctx.beginPath();
    ctx.arc(this.x + cellLength/2,this.y + cellLength/2,this.radius,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    
}

targetObj.prototype.getX = function(){//成员函数--返回坐标值
    
    return this.x;
    
}

targetObj.prototype.getY = function(){//成员函数--返回坐标值
    
    return this.y;
    
}