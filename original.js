var x_pos = [];
var y_pos = [];
var dx = [];
var dy = [];
var bright = [];

function setup()
	{
	createCanvas(windowWidth, windowHeight);
	background(0);

	for (var i=0; i<500; i++)
		{
		x_pos[i] = windowWidth/2;
		y_pos[i] = windowHeight/2;
		dx[i] = random(-5, 5);
		dy[i] = random(-5, 5);
		bright[i] = random(255);
		}

	}



function draw()
	{
	clear();
	for (var i=0; i<500; i++)
		{
		fill(bright[i]*0.5, bright[i]*0.4, bright[i]);
		ellipse(x_pos[i], y_pos[i], 50, 50);
		x_pos[i] += dx[i];
		y_pos[i] += dy[i];
		bright[i]--;
		if (	(bright[i] <= 0) ||
					(x_pos[i] < 0) ||
					(x_pos[i] > windowWidth) ||
					(y_pos[i] < 0) ||
					(y_pos[i] > windowHeight) )
			{
			x_pos[i]=windowWidth/2;
			y_pos[i]=windowHeight/2;
			bright[i] = random(255);
			}
		}
	}
