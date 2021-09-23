var KeyCode = {Space: 32};
var input = {keyPressed: null};
document.addEventListener("keydown", setKey, "false");
function setKey(event)
{
  input.keyPressed = event.which;
}
