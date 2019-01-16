let component
let Rslider = document.getElementById("Red");
let Routput = document.getElementById("RedD");
let Gslider = document.getElementById("Green");
let Goutput = document.getElementById("GreenD");
let Bslider = document.getElementById("Blue");
let Boutput = document.getElementById("BlueD");

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
  component = new Component(document.getElementById("Red").value,document.getElementById("Green").value,document.getElementById("Blue").value);
  component.init();
}
function draw(){
  component.draw()
}
