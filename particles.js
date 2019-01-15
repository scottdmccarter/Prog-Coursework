class Particle{
  constructor(x_pos, y_pos, red, green, blue){
    this.x_pos = x_pos;
    this.y_pos = y_pos;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.bright= random(0,.5);
  }

draw(){
    noStroke();
		fill(this.bright*this.red, this.bright*this.green, this.bright*this.blue,150);
		ellipse(this.x_pos, this.y_pos, 50, 50);
}
move(){
      this.x_pos += this.dx;
		this.y_pos += this.dy;
		// this.bright--;
		if (	(this.bright <= 0) ||
					(this.x_pos < 0) ||
					(this.x_pos > windowWidth) ||
					(this.y_pos < 0) ||
					(this.y_pos > windowHeight) )
			{
			this.x_pos=windowWidth/2;
			this.y_pos=windowHeight/2;
      this.dx = random(-5, 5);
      this.dy = random(-5, 5);
			this.bright = random(0,1);
      fill(this.bright*this.red, this.bright*this.green, this.bright*this.blue,150);
  	 }
    }
  }
