//stereoDrain
//Joshua Linton - 3174195
//GDES3091 - Professor Qadeer
//OCADU - FALL2021
//


function setup(){
	createCanvas(1280, 640);
	background(40);
}

function draw(){
	bar = ['red', 'green'];
	chart = random(bar);
		rect(mouseX, mouseY, mouseX - pmouseX, mouseX - pmouseY);
		fill(chart);
		stroke('black');
}

function mousePressed(){
	saveCanvas()
}