var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var player = {x: 240, y: 160, r: 15, vx: 0, vy: 0};
var plat1 = {x: 380, y: 260, w: 100, h: 30, function test() {alert("test");}};
var testText = document.getElementById("text");
setInterval(update, 10);
setInterval(hitDetection, 10);
function update() {
  play1.test();
}
