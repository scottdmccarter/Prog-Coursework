class Particle{
  constructor(x_pos, y_pos, red, green, blue){
    this.x_pos = x_pos;
    this.y_pos = y_pos;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.bright= random(255);
    this.offscreen;
  }

  setRed(red){
    	this.red = (red);
        }

  setGreen(green){
    	this.green = (green);
        }

  setBlue(blue){
    	this.blue = (blue);
        }

draw(){
    noStroke();
    fill(this.bright*this.red/255, this.bright*this.green/255, this.bright*this.blue/255,150);
		ellipse(this.x_pos, this.y_pos, 50, 50);
}
move(){
    this.x_pos += this.dx;
		this.y_pos += this.dy;
		this.bright--;
		if (	(this.bright <= 0) ||
					(this.x_pos < 0) ||
					(this.x_pos > windowWidth) ||
					(this.y_pos < 0) ||
					(this.y_pos > windowHeight) ){
            this.offscreen = true
	  }
}
