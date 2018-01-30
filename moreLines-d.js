function setup() {
  createCanvas(340, 340);
}

function draw() {
  startX = random(width);
  startY = random(height);
  endX = random(width);
  endY = random(height);
  length = Math.sqrt(Math.pow((endY - endX), 2) + Math.pow((startY - startX), 2));
  colorMode(HSB);
  stroke(length, length, length);
  line(startX, startY, endX, endY);
}
