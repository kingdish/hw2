function setup() {
  createCanvas(340, 340);
}

function draw() {
  startX = random(width);
  startY = random(height);
  endX = random(width);
  endY = -2 * (endX - startX) + startY;
  line(startX, startY, endX, endY);
}
