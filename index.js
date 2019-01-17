let component;
let rSlider = document.getElementById("Red");
let Routput = document.getElementById("RedD");
let gSlider = document.getElementById("Green");
let Goutput = document.getElementById("GreenD");
let bSlider = document.getElementById("Blue");
let Boutput = document.getElementById("BlueD");

let vRed = rSlider.value;
let vGreen = gSlider.value;
let vBlue = bSlider.value;

Routput.innerHTML = rSlider.value;
rSlider.oninput = function() {
	Routput.innerHTML = this.value;
};

Goutput.innerHTML = gSlider.value;
gSlider.oninput = function() {
	Goutput.innerHTML = this.value;
};

Boutput.innerHTML = bSlider.value;
bSlider.oninput = function() {
	Boutput.innerHTML = this.value;
};
function setup(){
	component = new Particles(500,500,500,false);
	component.init();
}
function draw(){
	component.draw();
}
