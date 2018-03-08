var prevMouseX;
var prevMouseY;
var x = 0;
var y = 0;
var enableDrag = false;

function scroll()
{
  /*
  this is an explample of how to use the scroll function
  image(img, x + 10, y+10);
  */
  if (mouseIsPressed)
  {
    //console.log(mouseX-prevMouseX);
    x += mouseX - prevMouseX;
    y += mouseY - prevMouseY;
  }

  prevMouseX = mouseX;
  prevMouseY = mouseY;
}
