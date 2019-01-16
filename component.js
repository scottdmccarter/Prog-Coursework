let g
class Component{
	constructor(graphic){
		this.particles=[];
		this.noParticles = 500;
		this.width = 500;
		this.height = 500;
		this.graphic=graphic;
	}

	init(){
		if(this.graphic){
			createCanvas(this.width,this.height,WEBGL);
			g = createGraphics(300,300);
			g.background(0);}
			else{
				createCanvas(this.width,this.height);
				blendMode(ADD);
			}

		frameRate(60);
		for (let i=0; i<this.noParticles; i++){
			this.particles[i] = new Particle(this.width/2,this.height/2,this.graphic);
		}

	}

	draw(){
		clear();
		background(0);
		for (let i=0; i< this.particles.length; i++){
			this.particles[i].draw();
			this.particles[i].move();
			if(this.particles[i].offscreen){
				this.particles.splice(i,1);}
			if (this.particles.length < this.noParticles){
				for (let j=this.particles.length; j<this.noParticles; j++){
					this.particles[j] = new Particle(this.width/2,this.height/2,this.graphic);
					this.particles[j].move();
				}
			}
		}

if(this.graphic){
		texture(g);
		rotateZ(frameCount * 0.02);
	  rotateX(frameCount * 0.02);
	  rotateY(frameCount * 0.02);
		box(this.width/2);

	}
}
}

///////////////////////////////////////////////////////////////
class Particle{
	constructor(x_pos, y_pos,graphic){
		this.x_pos = x_pos;
		this.y_pos = y_pos;
		this.dx = random(-5, 5);
		this.dy = random(-5, 5);
		this.red= rSlider.value;
		this.green = gSlider.value;
		this.blue = bSlider.value;
		this.bright= random(255);
		this.offscreen;
		this.width = 2*x_pos;
		this.height = 2*y_pos;
		this.graphic = graphic;
	}


	draw(){
		if(this.graphic){
		g.noStroke();
		g.fill(this.bright*this.red/255, this.bright*this.green/255, this.bright*this.blue/255,150);
		g.ellipse(this.x_pos/2, this.y_pos/2, 50, 50);
}
else{
		noStroke();
		fill(this.bright*this.red/255, this.bright*this.green/255, this.bright*this.blue/255,150);
		ellipse(this.x_pos, this.y_pos, 50, 50);
	}
	}

	move(){
		this.x_pos += this.dx;
		this.y_pos += this.dy;
		this.bright--;
		if (
			(this.bright <= 0) ||
					(this.x_pos < 0) ||
					(this.x_pos > this.width) ||
					(this.y_pos < 0) ||
					(this.y_pos > this.height)
		){this.offscreen = true;}
	}
}
