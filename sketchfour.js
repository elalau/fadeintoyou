var eyeyball;
var eyeballImg;

function preload(){
   eyeball = loadImage("eyeball.gif"); 
}
  
    function setup() {
    createCanvas(1200, 800);
    background(0); 


}

function draw() { 
  if (mouseIsPressed) {
    fill('red');
    textSize(30);
    text('i look to you to see the truth', mouseX, mouseY);
  }
  else {
    fill('black');
    textSize(30);
    text('i look to you to see the truth', mouseX, mouseY);
  }
  image(eyeball, 350, 100, 600, 600);
  
}