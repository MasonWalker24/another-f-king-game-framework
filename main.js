var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var player = {x: 240, y: 160, r: 10};
var plat1 = {x: 380, y: 260, w: 100, h: 30};
var testText = document.getElementById("text");
setInterval(update, 10);
setInterval(hitDetection, 10);

function update()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer(player.x, player.y, player.r);
    //plat1
    drawRect(plat1.x, plat1.y, plat1.w, plat1.h);
    //plat2
    testText.innerHTML = grounded;
    movement();
    gravity();
}
//drawing gameObjects

function drawRect(rectx, recty, rectw, recth)
{
    ctx.beginPath();
    ctx.rect(rectx, recty, rectw, recth);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}
function drawPlayer(playerx, playery, radius)
{
    ctx.beginPath();
    ctx.arc(playerx, playery, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

//movement code
var rightArrowDown = false;
var leftArrowDown = false;
document.addEventListener("keydown", detectKey, false);
document.addEventListener("keyup", detectKeyUp, false);

function detectKey(event)
{
    var keyCode = event.keyCode;
    
    if(keyCode == 39)
    {
        rightArrowDown = true;
    }
    if(keyCode == 37)
    {
        leftArrowDown = true;
    }
}

function detectKeyUp(event)
{
    var keyCodeUp = event.keyCode;
    
    if(keyCodeUp == 39)
    {
        rightArrowDown = false;
    }
    if(keyCodeUp == 37)
    {
        leftArrowDown = false;
    }
}
function movement()
{
    if(rightArrowDown)
    {
        player.x = player.x + 2;
    }
    if(leftArrowDown)
    {
        player.x = player.x - 2;
    }
}

//gravity and hit detection

var grounded = false;

function gravity()
{
    if(!grounded)
    {
        player.y = player.y + 1;   
    }
}
function hitDetection()
{
    if(player.y >= canvas.height - player.r)
    {
        grounded = true;
    } else
    {
        grounded = false;
    }
}
