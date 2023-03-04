let canvas,ctx;
let blockSize = 20
let rows = 20,cols = 20;
let X_food,Y_food;
let X_snakeHead,Y_snakeHead;
let snakeTail = []
let move = {x:0,y:0}
window.onload = function(){
    canvas = document.getElementById("Gameboard")
    canvas.width = blockSize * cols
    canvas.height = blockSize * rows
    ctx = canvas.getContext("2d")
    //Initial Place the Food and Snake Head
    FoodXY()
    SnakeHeadXY()
    updateCanvas()
    document.addEventListener('keyup',motion)
    console.log("Place Food For First Time")
    setInterval(updateCanvas,100)
   
    
}

function updateCanvas()
{
    //Update Canvas Layout
    console.log("Canvas Layout First")
    ctx.fillStyle = 'black'
    ctx.fillRect(0,0,canvas.width,canvas.height)

    //Food Create
    ctx.fillStyle = 'white'
    ctx.fillRect(X_food,Y_food,blockSize,blockSize)

    //Snake Eat food create new food
    if(X_snakeHead === X_food && Y_snakeHead === Y_food)
    {
        FoodXY()
        snakeTail.push({x:X_snakeHead,y:Y_snakeHead})
    }

    //Snake Head Place
    X_snakeHead += (move.x * blockSize)
    Y_snakeHead += (move.y * blockSize)
    ctx.fillStyle = 'red'
    ctx.fillRect(X_snakeHead,Y_snakeHead,blockSize,blockSize)
    snakeTail[0] = {x:X_snakeHead,y:Y_snakeHead}
    for(let i = 1; i<snakeTail.length;i++)
    {
        snakeTail[i].x +=  (move.x * blockSize)
        snakeTail[i].y +=  (move.y * blockSize)
        ctx.fillStyle = 'pink'
        ctx.fillRect(snakeTail[i].x ,snakeTail[i].y ,blockSize,blockSize)
    }
    
    
}

function motion(e)
{
    if(e.code === 'ArrowUp' && move.y != -1)
    {
        move.x = 0
        move.y = -1
    }
    else if(e.code === 'ArrowDown' && move.y != 1)
    {
        move.x = 0
        move.y = 1
    }
    else if(e.code === 'ArrowLeft' && move.x != -1)
    {
        move.x = -1
        move.y = 0
    }
    else if(e.code === 'ArrowRight' &&  move.x != 1)
    {
        move.x = 1
        move.y = 0
    }
}

function FoodXY()
{
    X_food = getRandom(cols) * blockSize
    Y_food = getRandom(rows) * blockSize
}
function SnakeHeadXY()
{
    X_snakeHead = getRandom(cols) * blockSize
    Y_snakeHead = getRandom(rows) * blockSize
}

//Util
function getRandom(max)
{
    return Math.floor(Math.random()*max);
}

