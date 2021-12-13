//mouseTrap
//Joshua Linton - 3174195
//GDES3091 - Professor Qadeer
//OCADU - FALL2021
//


function setup(){
	createCanvas(1280, 640);
	background(40);
}

function draw(){
		rect(mouseX, mouseY, mouseX - pmouseX, mouseX - pmouseY);
		fill('lightgreen');
		stroke('darkblue');
}

function mousePressed(){
	saveCanvas()
}