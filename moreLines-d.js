background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(60), 200 + random(55), 150+random(50));
  shapeWidth = random(20, 50);
  shapeHeight = random(20, 50);
  startX = random(width) - shapeWidth;
  startY = random(height) - shapeHeight;
  beginShape();
    vertex(startX, startY);
    vertex(startX + shapeWidth, startY);
 	  vertex(startX, startY + shapeHeight);
    vertex(startX + shapeWidth, startY + shapeHeight);
  endShape(CLOSE);
  //ellipse(random(width), random(height), random(20, 40));
}
