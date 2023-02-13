var __canvas;
var __square=25;
var rows = 20,cols = 20;
var ctx;
var counter = 0;
var food = {x : 0,y : 0}
var snakeX = 5 * __square
var snakeY = 5 * __square
var snake = []
var move = {x:0,y:0}
window.onload = function(){
    __canvas = document.getElementById("Gameboard")
    __canvas.width = __square * cols
    __canvas.height = __square * rows
    ctx = __canvas.getContext("2d")
    foodCO()
    document.addEventListener('keyup',motion)
    updateCanvas()
    setInterval(updateCanvas,100)
}

function updateCanvas()
{
    //console.log('updating canvas...',counter++)
    //Creating Canvas
    //console.log(snake)
    if(counter>2000)
    {
        return
    }
    ctx.fillStyle = 'black'
    ctx.fillRect(0,0,__canvas.width,__canvas.height)
    //Create the food
    ctx.fillStyle = 'red'
    ctx.fillRect(food.x ,food.y ,__square,__square)
    //Create a snake
    //If snake eats grow
    if(snakeX == food.x  && snakeY == food.y )
    {
        console.log("pushing",JSON.stringify(food))
        snake.push({x:food.x,y:food.y})
        foodCO()
    }
    //Attch tail to head
    for(let i=snake.length-1;i>0;i--)
    {
        snake[i] = snake[i-1]
    }

    if(snake.length)
    {
        snake[0] = {x:snakeX,y:snakeY}
    }
    counter++;
    console.log(" - ",counter)
    console.log("S - ",snakeX)
    console.log("S - ",snakeY)
    console.log("S - ",JSON.stringify(snake))
    console.log("F - ",food)
    //Show Snake
    snakeX += move.x * __square
    snakeY += move.y * __square
    ctx.fillStyle = 'cyan'
    ctx.fillRect(snakeX , snakeY ,__square,__square)
    
    for(let i = 0;i<snake.length;i++)
    {
        ctx.fillStyle = 'blue'
        ctx.fillRect((snake[i].x),(snake[i].y),__square,__square)
    }

    //Kill Snake
    
}

function motion(e)
{
    if(e.code === 'ArrowUp' && move.y != 1)
    {
        move.x = 0;
        move.y = -1;
    }
    else if(e.code === 'ArrowDown' && move.y != -1)
    {
        move.x = 0;
        move.y = 1;
    }
    else if(e.code === 'ArrowLeft' && move.x != 1)
    {
        move.x = -1;
        move.y = 0;
    }
    else if(e.code === 'ArrowRight' && move.x != -1)
    {
        move.x = 1;
        move.y = 0;
    }
}

//Food Co-ordinates
function foodCO()
{
    food.x = getRandom(cols) * __square;
    food.y = getRandom(rows) * __square;
}

//Util
function getRandom(max)
{
    return Math.floor(Math.random()*max);
}