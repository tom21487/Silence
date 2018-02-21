function drawRect(roomNumber, positionX, positionY)
{
	rect(positionX, positionY, 50, 50);
	fill(0);
	textSize(20);
	text(roomNumber, positionX+15, positionY+25);
}

var getRoomNumber = prompt("Enter your room number:");

function setup()
{
	createCanvas(800, 600);
	background(255);

	for (var i = 0; i < 4; i++)
	{
		if (i+1 == getRoomNumber)
		fill(0, 255, 0);
		else fill(255, 0, 0);
		drawRect(i+1, 10, 100*i);
		
		
		if (i+5 == getRoomNumber)
		fill(0, 255, 0);		
		else fill(255, 0, 0);
		drawRect(i+5, 100, 100*i)
	}
}
