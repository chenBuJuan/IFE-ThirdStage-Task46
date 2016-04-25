var blockObj = function(){//block类声明
    
    this.x = [];
    this.y = [];
    this.width = [];
    this.height = [];
    this.bool = [];
    this.num;
    
}

blockObj.prototype.num = 100;

blockObj.prototype.init = function(){//成员函数--初始化
    
    for(var i = 0 ; i < this.num ; i ++){
        
        this.x[i] = Math.floor( Math.random() * Math.floor(canWidth/cellLength) )* cellLength;
        this.y[i] = Math.floor( Math.random() * Math.floor(canHeight/40) + Math.floor(canHeight/120) )* cellLength;
        this.width[i] = Math.floor( Math.random() * 5 + 5 - Math.floor(Level/5) )* cellLength;
        this.height[i] = Math.floor( Math.random() * 5 + 5 - Math.floor(Level/5) )* cellLength;
        this.bool[i] = true;
        
        var nx1 = this.x[i];
        var nx2 = this.x[i] + this.width[i];
        var ny1 = this.y[i];
        var ny2 = this.y[i] + this.height[i];
        
        for(var j = 0 ; j < i ; j ++){
            
            var ox1 = this.x[j];
            var ox2 = this.x[j] + this.width[j];
            var oy1 = this.y[j];
            var oy2 = this.y[j] + this.height[j];
            
            if(nx1 <= ox1 && ny1 <= oy1 && ny2 >= oy1 && nx2 >= ox1 ||
            nx1 <= ox1 && ny1 >= oy1 && ny1 <= oy2 && nx2 >= ox1 ||
            nx1 >= ox1 && nx1 <= ox2 && ny1 <= oy1 && ny2 >= oy1 ||
            nx1 >= ox1 && nx1 <= ox2 || nx2 > canWidth || ny2 > 5*canHeight/6)
                
                this.bool[i] = false;
            
        }
        
    }
    
}

blockObj.prototype.draw = function(){//成员函数--绘制
    
    ctx.save();
    ctx.fillStyle = "#2E1E1E";
    
    for(var i = 0 ; i < this.num ; i ++){
        
        if(this.bool[i]){
            
            ctx.fillRect(this.x[i],this.y[i],this.width[i],this.height[i]);
            
        }
        
    }
    
    ctx.restore();
    
}

blockObj.prototype.buildMap = function(){//成员函数--生成虚拟地图
    
    for(var i = 0 ; i < Math.ceil(canHeight/cellLength) ; i ++){
        
        map[i] = [];
        
        for(var j = 0 ; j < Math.ceil(canWidth/cellLength) ; j ++){
            
            map[i][j] = true;
            
        }
        
    }
    
    for(var i = 0 ; i < this.num ; i ++){
        
        if(this.bool[i]){
            
            for(var j = this.y[i]/cellLength ; j < (this.y[i] + this.height[i])/cellLength ; j++){
                
                for(var k = this.x[i]/cellLength ; k < (this.x[i] + this.width[i])/cellLength ; k++){
                    
                    map[j][k] = false;
                    
                }
                
            }
            
        }
        
    }
    
}