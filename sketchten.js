const numStars = 500;
let stars = [];
var poetry = ["click me", "fade into you", "تتلاشى فيك", "fade into you", "あなたの中に消えていきます", "మీలో మసకబారుతుంది", "fade into you", "mae aku ia oe", "fade into you", "너에게로 사라져라", "fade into you", "раствориться в тебе","fade into you", "se fondre en toi", "fade into you"];
var index = 0;

function setup() {
  createCanvas(1200, 800);
  stroke(255);
  strokeWeight(2);
  
  for(let i = 0; i < numStars; i ++) {
    stars.push(new Star(random(width), random(height)));
  }
}

function draw() {
  background(0, 50);

  
  textSize(30);
  fill('white');
  textAlign(CENTER);
  text(poetry[index], width/2, height/2);
  
  const acc = map(mouseX, 0, width, 0.005, 0.2);
  
  stars = stars.filter(star => {
    star.draw();
    star.update(acc);
    return star.isActive();
  });
  
  while(stars.length < numStars) {
    stars.push(new Star(random(width), random(height)));
  }
}

function mousePressed() {
  index = index + 1;

  if (index == poetry.length) {
    index = 0;
  }
}
 

class Star {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.prevPos = createVector(x, y);
    
    this.vel = createVector(0, 0);
    
    this.ang = atan2(y - (height/2), x - (width/2));
  }
  
  isActive() {
    return onScreen(this.prevPos.x, this.prevPos.y);
  }
  
  update(acc) {
    this.vel.x += cos(this.ang) * acc;
    this.vel.y += sin(this.ang) * acc;
    
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
    
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }
  
  draw() {
    const alpha = map(this.vel.mag(), 0, 3, 0, 255);
    stroke(255, alpha);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
  }
}

function onScreen(x, y) {
  return x >= 0 && x <= width && y >= 0 && y <= height;  
  
}