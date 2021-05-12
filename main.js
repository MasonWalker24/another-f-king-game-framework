var canvas = document.getElementById("myCanvas");
var text = document.getElementById("text");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height;
y = y/2;
var plat1x = canvas.width/2;
var plat1y = canvas.height;
plat1y = y/2;
var rightArrowDown = false;
var leftArrowDown = false;
var gravityForce = 2;
var grounded = false;
var dojump = false;
var isJumping = false;
var jumpInterval;
    
var speed = 2;
setInterval(update, 10);

function update()
{
    drawCircle();
    drawPlat1();
    if(y + 10 >= 320)
    {
        grounded = true;
    } else
    {
        grounded = false;
    }
    gravity();
    text.innerHTML = y;
}
function drawPlat1()
{
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(plat1x+100, plat1y, 200, 50);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}
    
function drawCircle()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
    if(rightArrowDown == true)
    {
        x = x + speed;
    } else if(leftArrowDown == true)
    {
        x = x - speed;
    }
}
    
document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);
    
    function keyDown(event)
    {
        if(event.keyCode == 39)
        {
            rightArrowDown = true;   
        } else if(event.keyCode == 37)
        {
            leftArrowDown = true;
        } else if(event.keyCode == 38)
        {
            if(isJumping == false)
            {
                if(grounded == true)
                {
                    jumpInterval = setInterval(jump, 25, 5);
                    isJumping = false;
                }
            }
        }
    }
    function keyUp(event)
    {
        if(event.keyCode == 39)
        {
            rightArrowDown = false;   
        } else if(event.keyCode == 37)
        {
            leftArrowDown = false;
        }
    }
    
    function gravity()
    {
        if(isJumping == false)
        {
            if(grounded == false)
            {
                y = y + gravityForce;
            }
        }
    }
let loopNum = 0;
function jump()
{
    //dojump = false;
    isJumping = true;
    y = y - 7;
    loopNum++;
    if(loopNum == 20)
    {
        clearInterval(jumpInterval);
        isJumping = false;
        loopNum = 0;
    }
}
    

