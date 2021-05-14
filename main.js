var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
setInterval(update, 10);

function update()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer(canvas.width/2, canvas.height/2, 10);
}

function drawPlayer(playerx, playery, radius)
{
    ctx.beginPath();
    ctx.arc(playerx, playery, radius, 0, 2*Math.PI);
    ctx.fillStyle("blue");
    ctx.endPath();
}

