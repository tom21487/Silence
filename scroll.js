var X = 0;
var Y = 0;
var prevMouseX;
var prevMouseY;
/*
function screenDrag()
{
  var oriMX;
  var oriMY;
  var newMX;
  var newMY;
  function mousePressed()
  {
    oriMX = mouseX;
    oriMY = mouseY;
  }
  function mouseDragged()
  {
    newMX = mouseX;
    newMY = mouseY;
    X += oriMX - newMX;
    Y += oriMY - newMY;
    oriMX = newMX;
    oriMY = newMY;
  }
}

function setup() {
  createCanvas(640,480);
}

function draw() {
  background(0);
  screenDrag();
  console.log(X, Y)
}
*/

var img;
var x = 0;
var y = 0;
var enableDrag = false;
function setup()
{
  createCanvas(300, 600);
}

function preload()
{
  img = loadImage("Screen Shot 2018-02-25 at 5.18.35 PM.png");
}

function draw()
{
  background(100);
  image(img, x + 10, y+10);
  //x++;
  if (mouseIsPressed)
  {
    console.log(mouseX-prevMouseX);
    x += mouseX - prevMouseX;
    y += mouseY - prevMouseY;
  }

  prevMouseX = mouseX;
  prevMouseY = mouseY;
}
