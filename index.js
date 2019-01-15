let particles=[]
let particleA
let particleB
var Rslider = document.getElementById("red");
var Routput = document.getElementById("redD");
var Gslider = document.getElementById("green");
var Goutput = document.getElementById("greenD");
var Bslider = document.getElementById("blue");
var Boutput = document.getElementById("blueD");

Routput.innerHTML = Rslider.value;
Rslider.oninput = function() {
  Routput.innerHTML = this.value;
}

Goutput.innerHTML = Gslider.value;
Gslider.oninput = function() {
  Goutput.innerHTML = this.value;
}

Boutput.innerHTML = Bslider.value;
Bslider.oninput = function() {
  Boutput.innerHTML = this.value;
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  for (let i=0; i<100; i++){
    particles[i] = new Particle(windowWidth/2,windowHeight/2,document.getElementById("red").value,document.getElementById("green").value,document.getElementById("blue").value);
  }
  blendMode();
}


function draw(){

  for (let k of particles) {
  k.draw();
  k.move();
  }
}
