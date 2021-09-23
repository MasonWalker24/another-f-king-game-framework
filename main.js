var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
setInterval(update, 10);
function update() {
if(input.keyPressed == KeyCode.Space)
{
  alert("test");
}
  document.getElementById("text").innerHTML = input.keyPressed;
}
