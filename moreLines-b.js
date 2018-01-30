function setup() {
  createCanvas(340, 340);
}

function draw() {
  line(random(width), random(height), random(width / 2, width), random(height/2));
}
