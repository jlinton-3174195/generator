//squareBrush
//Joshua Linton - 3174195
//GDES3091 - Professor Qadeer
//OCADU - FALL2021
//


function setup(){
	createCanvas(1280, 640);
	background(40);
}

function draw(){
	five = ['red', 'blue', 'yellow', 'black', 'white'];
	mondrain = random(five);
		rect(mouseX, mouseY, mouseY - pmouseX, mouseX - pmouseY);
		fill(mondrain);
		stroke('black');
}

function mousePressed(){
	saveCanvas()
}