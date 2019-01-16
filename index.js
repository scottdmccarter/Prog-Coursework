
let particles=[]
var Rslider = document.getElementById("Red");
var Routput = document.getElementById("RedD");
var Gslider = document.getElementById("Green");
var Goutput = document.getElementById("GreenD");
var Bslider = document.getElementById("Blue");
var Boutput = document.getElementById("BlueD");

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
  frameRate(120);
    for (let i=0; i<500; i++){
    particles[i] = new Particle(windowWidth/2,windowHeight/2, document.getElementById("Red").value, document.getElementById("Green").value, document.getElementById("Blue").value);
  }
  blendMode(ADD);

}
function draw(){
  clear()
  background(0);
  for (let i=0; i< particles.length; i++){
  particles[i].draw();
  particles[i].move();
  if(particles[i].offscreen){particles.splice(i,1)}
  if (particles.length < 500){
    for (let j=particles.length; j<500; j++){
  particles[j] = new Particle(windowWidth/2,windowHeight/2, document.getElementById("Red").value, document.getElementById("Green").value, document.getElementById("Blue").value);
  particles[j].move();
              }
          }
        }
}
