
var wrapper,canvas,ctx;//变量--html结构

var canWidth,canHeight,cellLength;//变量--画布宽高，地图单元格大小

var deltaTime,lateTime,loop;//变量--两次绘制的时间差，动画名

var block;//变量--blockObj类的对象实例

var hero;//变量--heroObj类的对象实例

var target;//变量--targetObj类的对象实例

var map = [];//变量--二维数组记录虚拟地图

var Level = 0;//变量--设定关卡难度

wrapper = document.getElementById("wrapper");//各变量初始化
canWidth = wrapper.clientWidth;
canHeight = wrapper.clientHeight;

canvas = document.createElement("canvas");
canvas.width = canWidth;
canvas.height = canHeight;
wrapper.appendChild(canvas);

ctx = canvas.getContext("2d");

cellLength = 20;

function init(){//画布初始化函数
    
    lateTime = Date.now();
    deltaTime = 0;
    
    block = new blockObj();
    block.init();
    block.buildMap();
    
    hero = new heroObj();
    hero.init();
    
    target = new targetObj();
    target.init();
    
    canvas.addEventListener("click",function(event){
        
        moveTo(event);
        
    });
    
}

function gameLoop(){//画布循环绘制函数
    
    deltaTime = Date.now() - lateTime;
    lateTime = Date.now();
    
    ctx.clearRect(0,0,canWidth,canHeight);
    
    block.draw();
    
    hero.draw();
    
    target.draw();
    
    loop = requestAnimationFrame(gameLoop);
    
}

function game(){//调用函数
    
    init();
    gameLoop();
    
}

function reset(){//重置函数
    
    cancelAnimationFrame(loop);
    Level = Level > 20 ? Level : Level + 1;
    game();
    
}

window.onload = game;