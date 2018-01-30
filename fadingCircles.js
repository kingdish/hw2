background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(60), 200 + random(55), 150+random(50));
  ellipse(random(width), random(height), random(20, 40));
}
