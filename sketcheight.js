var img1; 
var img2; 
var stars = [];

function preload() {
  img1 = loadImage('SOME.png'); 
  img2 = loadImage('YOUR.png');
}

function setup() {
  createCanvas(1200, 800);
  
  for (var i = 0; i < 1000; i++) {
		stars[i] = new Star();
	}
}


function draw() {
  background('black');
  let x = mouseX;
  let y = mouseY;
  let ix = width - mouseX;  // Inverse X
  let iy = height - mouseY; // Inverse Y


  image(img2, ix, height/6, iy, iy);
  image(img1, x, height/6, y , y);

  
  for (var i = 0; i < stars.length; i++) {
		stars[i].draw();
	}
}

class Star {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = random(0.25, 3);
		this.t = random(TAU);
	}
	
	draw() {
		this.t += 0.1;
		var scale = this.size + sin(this.t) * 2;
		noStroke();
		ellipse(this.x, this.y, scale, scale);
	}
}

