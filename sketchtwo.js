var img1;
var w = window.innerWidth;
var h = window.innerHeight;  
let y = -1200;
let snowflakes = 400;


function preload () {
img1 = loadImage('text_twooo.png');
}

function setup() {
	createCanvas(1200, 800);
    frameRate(5);
}

function draw() {
	background('black');
	noStroke();
  if (mouseX > 400 && mouseY > 400) {
    image(img1, 180, 300);
  } 
  
  noStroke();
  for (let s = 0; s < snowflakes; s++) {
    circle(random(width), y + random(1200), random(1, 6));
  }
  y += 20;

  if (y > 0) {
    y = -600;
  }
}