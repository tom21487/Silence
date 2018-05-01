var prevMouseX;
var prevMouseY;

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Room {
  constructor(){

  }
  draw(){
    fill(0, 256, 0, 50)
  }
}

class RoomSquare extends Room{
  constructor(top, bottom, left, right){
    this.x = left;
    this.y = top;
    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
    this.width = this.right - this.left;
    this.height = this.bottom - this.top;
  }
  draw(){
    super.draw();
    rect(this.x, this.y, this.width, this.height)
  }
}



class Button
{
	constructor(text, x, y, width, height)
	{
		this.text = text;
		this.x = x;
    this.y = y;
    this.isPressed = false;

		if (width == null)
			this.width = 90
		else
      this.width = width;

		if (height == null)
			this.height = 90;
		else
      this.height = height;
    
		this.left = this.x;
		this.top = this.y;
		this.right = this.x + this.width;
		this.bottom = this.y + this.height;
	}

	draw()
	{
		fill(200);
    if (this.isPressed)
      fill(100)
		rect(this.x, this.y, this.width, this.height);
    fill(0);
    if (this.text != undefined)
      text(this.text, this.x + 2, this.y + this.height / 2);
  }

  doesCollideWith(point) {
    console.log("didCall")
    if (point.x > this.left && point.x < this.right && point.y > this.top && point.y < this.bottom) {
      return true;
    }
    return false;
  }
}
var allButtons = [new Button("lineMode", 10, 10, 50, 50), new Button("dragMode", 70, 10, 50, 50), new Button("lineEditMode", 130, 10, 50, 50)];

var img;
var imgFloor1;
var imgFloor3;
var x = 0;
var y = 0;
var dragMode = true;
var lineMode = false;
var dragStartPoint = undefined;
var dragEndPoint = undefined;
var lineEditMode = false
var screenFloor1;
var screenFloor3;
var screenScreenShot;
/*
class Point extends Button
{
  constructor(x, y, R, G, B)
  {
  this.radius = 10;
  this.color = [R, G, B];
  this.connections = [];
  }

}
*/
function resetModes() {
  dragMode = false;
  lineMode = false;
  lineEditMode = false;
}
function modes() {
  if (dragMode)
  {
    if (mouseIsPressed)
    {
      //console.log(mouseX-prevMouseX);
      x += mouseX - prevMouseX;
      y += mouseY - prevMouseY;
    }

    prevMouseX = mouseX;
    prevMouseY = mouseY;
  } else if (lineMode) {
    if (dragStartPoint !== undefined && dragEndPoint !== undefined) {
      fill(0, 0, 255)
      line(dragStartPoint.x - x, dragStartPoint.y - y, dragEndPoint.x - x, dragEndPoint.y - y)

    }
  }
}

function resetScreen()
{
  screenFloor1 = false;
  screenFloor3 = false;
  screenScreenShot = false;
}
function screens() {
  if (screenFloor1){
    image(imgFloor1, x, y);
  }else if (screenFloor3){
    image(imgFloor3, x, y);
  }else if (screenScreenShot){
    image(img, x, y);
  }
}
function switchScreens(){
  console.log("THE COURAGE OF CHILDREN");
  if(screenFloor1){
    console.log("ps")
    resetScreen();
    screenFloor3 = true;
  }else if(screenFloor3){
    resetScreen();
    screenScreenShot= true;
  }else if(screenScreenShot){
    resetScreen();
    screenFloor1 = true;
  }
}

function preload()
{
  img = loadImage("Screen Shot 2018-02-25 at 5.18.35 PM.png");
  imgFloor1 = loadImage("Floor.1.png", console.log("YES"), console.log("NO"));
  imgFloor3 = loadImage("Floor.3.png", console.log("yes"), console.log("no"));
}

function setup()
{
  createCanvas(300, 600);
  screenFloor1 = true;
}


function draw()
{
  background(100);
  screens();  
  modes();
  for(Button in allButtons)
  {
    allButtons[Button].draw();
  }
}

function keyPressed() {
  if (keyCode === 32) {
    console.log("Dalglish");
    switchScreens();
  }
}

function mousePressed() {
  for (var index in allButtons) {
    if (allButtons[index].doesCollideWith(new Point(mouseX, mouseY))) {
      allButtons[index].isPressed = true;
      return;
    }
  }
  dragStartPoint = new Point(x + mouseX, y + mouseY)
}

function mouseDragged() {
  if (dragStartPoint !== undefined) {
    dragEndPoint = new Point(x + mouseX, y + mouseY)
  }
}

function mouseReleased() {
  for (var index in allButtons) {
    if (allButtons[index].doesCollideWith(new Point(mouseX, mouseY))) {
      if (allButtons[index].isPressed) {
        buttonIsClicked(allButtons[index])
      }
    }
    allButtons[index].isPressed = false;
  }
  if (lineMode) {
    // add a line object to the array
  }
  dragStartPoint = undefined;
  dragEndPoint = undefined;
}

function buttonIsClicked(button) {
  resetModes();
  if (button.text === "lineMode")
  {
    lineMode = true;
  }
  else if (button.text === "dragMode")
  {
    dragMode = true;
  }
  else if (button.text === "lineEditMode")
  {
    lineEditMode = true;
  }
}