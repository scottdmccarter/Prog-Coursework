// let cube
class Component{
  constructor(Red,Green,Blue){
    this.particles=[];
    this.graphic = createGraphics();
    this.Red = Red;
    this.Green = Green;
    this.Blue = Blue;
    this.noParticles = 500;
    this.width = windowWidth;
    this.height = windowHeight;
  }
init(){
  createCanvas(this.width,this.height)
  // cube = createGraphics(400, 400);
  frameRate(60);
    for (let i=0; i<this.noParticles; i++){
    this.particles[i] = new Particle(this.width/2,this.height/2, this.Red, this.Green, this.Blue );
    }
  blendMode(ADD);
  }

draw(){
  clear()
  background(0);
  for (let i=0; i< this.particles.length; i++){
  this.particles[i].draw();
  this.particles[i].move();
  if(this.particles[i].offscreen){this.particles.splice(i,1)}
  if (this.particles.length < this.noParticles){
    for (let j=this.particles.length; j<this.noParticles; j++){
  this.particles[j] = new Particle(this.width/2,this.height/2, this.Red, this.Green, this.Blue );
  this.particles[j].move();

  // texture(cube);
  // box(200);
  // rotateZ(45);


              }
          }
        }
      }
}

///////////////////////////////////////////////////////////////
class Particle{
  constructor(x_pos, y_pos, red, green, blue){
    this.x_pos = x_pos
    this.y_pos = y_pos;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.bright= random(255);
    this.offscreen;
    this.width = windowWidth;
    this.height = windowHeight;
  }


draw(){
    noStroke();
    fill(this.bright*this.red/255, this.bright*this.green/255, this.bright*this.blue/255,150);
		// cube.ellipse(this.x_pos, this.y_pos, 50, 50);
    ellipse(this.x_pos, this.y_pos, 50, 50);
}
move(){
    this.x_pos += this.dx;
		this.y_pos += this.dy;
		this.bright--;
		if (	(this.bright <= 0) ||
					(this.x_pos < 0) ||
					(this.x_pos > this.width) ||
					(this.y_pos < 0) ||
					(this.y_pos > this.height) ){
            this.offscreen = true
	  }
}
}
