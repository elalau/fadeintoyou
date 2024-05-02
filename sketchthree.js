function setup() {
    createCanvas(1200, 800);
    noStroke()
  }
  
  function draw() {
    background(0);
    fill(100,100,100,250);
    ellipse(mouseX, 190, 350, 350);    // Top circle
    
    fill(100,100,100,90);
    ellipse(mouseX+20, 700, 90, 90); // Middle circle
    
    fill(100,100,100,209);
    ellipse(mouseX-300,600, 300, 300); // Bottom circle
    
    fill(100, 100, 100, 40);
    ellipse(200, mouseY, 350, 350);    // Top circle
    
    fill(100, 100, 100, 105);
    ellipse(900, mouseY+20, 90, 90); // Middle circle
  
    fill(100, 100, 100, 80);
    ellipse(910, mouseX-300, 200, 200); // Bottom circle
    
    if (mouseX > 400 && mouseX < 700) {
      fill('white');
      textSize(30);
      text('i look to you and i see nothing.', 400, 400);
    }
    
  }