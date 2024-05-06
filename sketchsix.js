var txt="you'll come apart";
var img1;

function preload () {
img1 = loadImage('coupleres.png');
}

function setup(){
  createCanvas(1200, 800);
  
  background('white');
  image(img1, 50, 50);  
  fill(0);
  noStroke();
}

function draw(){

  
  if (mouseIsPressed){
    fill('black');
    let s = random(150);
    ellipse(random(width), random(height), s, s);
  }
  else {
  fill('white');
  textSize(100);
  textAlign(CENTER, CENTER);
  text(txt, width / 2 - 13, height / 2);
  }
  
  fill('gray'); 
  textSize(20);
  text('press down to reveal', 1000, 700);

}