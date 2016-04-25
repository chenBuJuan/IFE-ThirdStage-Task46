
var wrapper,canvas,ctx;

var canWidth,canHeight,cellLength;

var deltaTime,lateTime,loop;

var block;

var hero;

var target;

var map = [];

var Level = 0;

wrapper = document.getElementById("wrapper");
canWidth = wrapper.clientWidth;
canHeight = wrapper.clientHeight;
canvas = document.createElement("canvas");
canvas.width = canWidth;
canvas.height = canHeight;
wrapper.appendChild(canvas);
ctx = canvas.getContext("2d");

cellLength = 20;

function init(){
    
    lateTime = Date.now();
    deltaTime = 0;
    
    block = new blockObj();
    block.init();
    block.buildMap();
    
    hero = new heroObj();
    hero.init();
    
    target = new targetObj();
    target.init();
    
    canvas.addEventListener("click",moveTo);
    
}

function gameLoop(){
    
    deltaTime = Date.now() - lateTime;
    lateTime = Date.now();
    
    ctx.clearRect(0,0,canWidth,canHeight);
    
    block.draw();
    
    hero.draw();
    
    target.draw();
    
    loop = requestAnimationFrame(gameLoop);
    
}

function game(){
    
    init();
    gameLoop();
    
}

function reset(){
    
    cancelAnimationFrame(loop);
    Level = Level > 20 ? Level : Level + 1;
    game();
    
}

window.onload = game;