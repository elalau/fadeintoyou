let graphic
let font 

function preload() {
  font = loadFont("SpaceGrotesk-Medium.ttf");
}

function setup () {
  createCanvas(1200,800);
  
  graphic = createGraphics(1200, 800);
  
  graphic.textFont(font);
  graphic.fill("white");
  graphic.textSize(80); 
  graphic.textAlign(CENTER,CENTER);
  graphic.text("strange you never knew.", 600, 700);
}

function draw () {
  background("black");
 
  const tileSize = 200;
  
  for (let y = 0; y < 12; y = y + 1) {
    
    const distortion = sin(frameCount * 0.05 + y) * 50; 
    //let position = mouseX / windowHeight;
  
    
    const sx = 0; 
    const sy = y * tileSize + mouseY; 
    const sw = 1200; 
    const sh = tileSize * distortion + (800 - tileSize) * (1 - distortion); 
    
    const dx = 0; 
    const dy = y * tileSize; 
    const dw = 1200; 
    const dh = tileSize; 
    
    image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
  }
  
  
  //image(graphic, 0, 0, 1200, frameCount, 0, 0, 1200, 800); 
  
}