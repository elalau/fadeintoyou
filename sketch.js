var img1;
var img3;
var img4;
var img5;

function preload () {
img1 = loadImage('baby.png');
img3 = loadImage('halfofmeres.png');
img4 = loadImage('textkatakana.png');
img5 = loadImage('text.png'); 
}


function setup() {
  createCanvas(1200, 800);
}

function draw() {
  background(255);
   
  if (mouseY > height/2) {
    image(img1, 100, 100);
  }
  
  else if(mouseX > width/2) {
    image(img5, 250, 350);
  }
  
  else if(mouseX > width/3) {
    image(img4, 350, 100);
  }
  
  else { 
   image(img3, 100, 0);
  }
}