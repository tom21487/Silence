var showCamera = true; //Uncomment to see map
var mapPic;
var mouseClicked;

if (showCamera)
{
	document.write("<div id=\"container\"><video autoplay=\"true\" id=\"videoElement\"></video></div>");

	var video = document.querySelector("#videoElement");

	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia ||  navigator.msGetUserMedia || navigator.oGetUserMedia;

	if (navigator.getUserMedia) 
	{       
  		navigator.getUserMedia({video: true}, handleVideo, videoError);
	}

	function handleVideo(stream) 
	{
  		video.src = window.URL.createObjectURL(stream);
	}

	function videoError(e) 
	{
  	console.log("Error!");
	}
}

class Button
{

	constructor(x, y)
	{
		this.x = x;
		this.y = y;

		this.width = 50;
		this.height = 50;
	}

	draw()
	{
		fill(255, 0 ,0);
		rect(this.x, this.y, this.width, this.height);
	}

	isClicked()
	{
		if (mouseX >= this.x && mouseX <= this.x+this.width && mouseY >= this.y && mouseY <= this.y+this.height)
		{
			console.log("Clicked! ");
		}
	}
}

class Room
{
	constructor(id, x, y)
	{
		this.id = id;
		this.x = x;
		this.y = y;
	}

	draw()
	{
		rect(x, y, 50, 50);
	}
}

function showGrid()
{
	for (var i = 0; i < 475; i += 30)
	{
		line(i, 0, i, 730);
	}

	for (var i = 0; i < 730; i += 30)
	{
		line(0, i, 475, i);
	}
}

//p5 functions
function preload(){mapPic = loadImage("PA.png");}
function mouseReleased(){mouseClicked = true;}
function setup(){createCanvas(475, 780);}

var switchModeButton = new Button(212.5, 730);

//document.write("<video></video>");
function draw()
{
	background(100);
	//Base
	image(mapPic, 0, 0);
	showGrid();
	//Panel
	fill(240);
	rect(0, 730, 475, 50);
	//Buttons
	switchModeButton.draw();
	if (switchModeButton.isClicked)
	{
		console.log("Hey");
	}
	rect(0, 0, 10, 10);
}
