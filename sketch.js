var poetry = ["| i wanna hold the hand inside you", "| i wanna take the breath that's true", "| i look to you and i see nothing", "| i look to you to see the truth", "| you live your life", "| you go in shadows", "| you'll come apart", "| and you'll go blind", "| some kind of night into your darkness", "| colored your eyes","| with what's not there" , "| fade into you", "| strange you never knew."]; 

var index = 0;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background('black');
  
  textSize(24);
  fill('white');
  text(poetry[index], width/3, height/2);
  
} 

function mousePressed() {
  index = index + 1; 
  
  if (index == poetry.length) {
    index = 0;
  }
}