let dragX, dragY, moveX, moveY;
function setup() {
  createCanvas(1200, 800);
  noStroke();

}
function draw() {
  background('black');
  textSize(50);
  fill(53);
  text('you go in shadows.', moveX, moveY, 800, 800); // Gray circle
  fill('white');
  textSize(50);
  text('you live your life,', dragX, dragY, 800, 800); // Black circle
  
  //top circle
  fill(80);
  ellipse(100, 100, 50, 50);
  fill('white');
  ellipse(95, 95, 50, 50);

////big circle 
  fill(80);
  ellipse(1000, 600, 200, 200);
  fill('white');
  ellipse(990, 590, 200, 200)

  fill(45);
  textSize(30);
  text('hold down for your shadow', 820, 40); 
}

function mouseMoved() {   // Move gray circle
  dragX = mouseX;
  dragY = mouseY; 
}

function mouseDragged() { // Move black circle
  moveX = mouseX;
  moveY = mouseY;
  
}