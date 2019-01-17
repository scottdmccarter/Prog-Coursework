# Particles()
Arguments: Particles(width, height, noParticles, graphic)

## Description
A class to generate a particle effect.
## Methods and Parameters
### Parameters
#### particles:
  Object array containing all instances of the Particle class
#### noParticles:*
  The maximum number of particles generated at any one time

#### width:*
 The width of the created canvas

#### height:*
The width of the created canvas

#### graphic:*
Determines how to render the Particles component; a value of *true* will render on rotating 3D cube, *false* or no input for this argument will render on 2D canvas


_\*Can be given as arguments when calling the class:_
### Methods

#### constructor()
constructor method to create and initialise objects created from class - contains all parameters listed above
#### init()
Initialises canvas and

#### draw()
text

## Example of usage

 ```javascript
function setup(){
	component = new Particles(500,500,500,false);
	component.init();
}

function draw(){
	component.draw();
}
```
<img src="images/example.png" alt="example image" width="150"/>




## Original Code
The original code for this piece can be found at: https://www.openprocessing.org/sketch/633781#

The original code has a Creative Commons Attribution ShareAlike Licence (https://creativecommons.org/licenses/by-sa/3.0)
