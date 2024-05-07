let draft, ready;

function preload() {
  ready = loadImage('niner.png');
  draft = loadImage('nine.png');
}
function setup() {
  createCanvas(1200, 800);
  noCursor();
  cursor('assets/brush.png', 20, -10);
  image(ready, 0, 0);
  image(draft, 0, 0);

  fill('gray');
  textSize(20);
  text('color in the letters', 1000, 50);
}
function mouseDragged() {
  copy(ready, mouseX, mouseY, 20, 20, mouseX, mouseY, 20, 20);
}
