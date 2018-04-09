var mouseIsReleased = false;
var imgURL = "http://upload.wikimedia.org/wikipedia/commons/3/3c/Shaki_waterfall.jpg";
var imgCaption = "No analysis yet.";
var JSONData = "No data yet.";
class Button
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
		this.clicked = false;
	}

	draw()
	{
		rect(this.x, this.y, 50, 50);
		if (mouseX > this.x && mouseX < this.x+50 && mouseY > this.y && mouseY < this.y+50)
		{
			if (mouseIsPressed)
				fill(150);
			else fill(200);
			if (mouseIsReleased)
				this.clicked = true;
			else this.clicked = false;
		}
	}
}

function processImage() 
{
	var subscriptionKey = "98a8c00f57a5494689bc4a81512ca690";
	var uriBase = "https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze";

	var params = {
		"visualFeatures": "Categories,Description,Color",
		"details": "",
		"language": "en",
	};

	// Perform the REST API call.
	$.ajax({
		url: uriBase + "?" + $.param(params),
		// Request headers.
		beforeSend: function(xhrObj)
		{
			xhrObj.setRequestHeader("Content-Type","application/json");
			xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
		},
		type: "POST",
		// Request body.
		data: '{"url": ' + '"' + imgURL + '"}',
		})

	.done(function(data) //Store analysis values into things
	{
		JSONData = JSON.stringify(data, null, 2);
		if (data.description && data.description.captions)
		{
			var caption = data.description.captions[0];
			if (caption.text && caption.confidence)
			{
				var captionText = caption.text.charAt(0).toUpperCase() + caption.text.slice(1) + ". (Confidence: " + caption.confidence + ")";
				imgCaption = captionText;
			}
		}
	})
};

var img;
var imgFloor1;
var imgFloor3;
function preload()
{
	img = loadImage(imgURL);
	imgFloor1 = laodImage("Floor.1.pdf");
	imgFloor3 = loadImage("Floor.3.pdf");
}

var analyzeButton = new Button(10, 50);
function setup()
{
	var canvas = createCanvas(640, 480);
	canvas.parent('sketch');
	textSize(12);
}

function draw()
{
	background(230);
	fill(200);
	analyzeButton.draw();
	if (analyzeButton.clicked)
	{
		processImage();
	}
	image(img, 250, 200, 300, 200);
	fill(0);
	text("URL: " + imgURL, 10, 20);
	text("Click button to analyze image", 10, 40);
	text("Caption: " + imgCaption, 10, 130);
	text("JSON Data: " + JSONData, 10, 155);
	mouseIsReleased = false;
}

function mouseReleased(){mouseIsReleased = true;}
