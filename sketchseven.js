let font;
let points = [];
let r = 15; let angle = 0;

function preload() {
  font = loadFont("Roboto-Regular.ttf");
}

function setup() {
  createCanvas(1200, 800);
  points = font.textToPoints("and you'll go blind.", 80, 400, 130, {
    sampleFactor:0.1,
    simplifyThreshold: 0
  });
  angleMode(DEGREES);

}

function draw() {
  background('black');
  
  if (mouseY > 700) {
    background('red');
  }
  
  else { 
    background('black');  
  }
  
    for (let i=5; i<points.length; i++) {
    ellipse(points[i].x + r*sin(angle + i*mouseX), points[i].y, 5, 5);
  }
  angle += 10;
}