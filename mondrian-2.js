function setLineColor(color) {
  switch(color) {
    case "yellow":
      stroke(251, 228, 0);
      break;
    case "blue":
      stroke(0, 129, 196);
      break;
    case "red":
      stroke(237, 28, 36);
      break;
    case "white":
      stroke(244, 244, 244);
      break;
    case "black":
      stroke(0, 0, 0);
      break;
    case "grey":
      stroke(62, 62, 62);
      break;
  }
}

function setFillColor(color) {
  switch(color) {
    case "yellow":
      fill(251, 228, 0);
      break;
    case "blue":
      fill(0, 129, 196);
      break;
    case "red":
      fill(237, 28, 36);
      break;
    case "white":
      fill(244, 244, 244);
      break;
    case "black":
      fill(0, 0, 0);
      break;
    case "grey":
      fill(62, 62, 62);
      break;
  }
}

function setup() {
  createCanvas(340, 340);
}


var weight = 5;
var colors = ["yellow", "blue", "red", "black"];
var color1 = colors[Math.floor(Math.random() * colors.length)];
var color2 = colors[Math.floor(Math.random() * colors.length)];
var color3 = colors[Math.floor(Math.random() * colors.length)];
var color4 = colors[Math.floor(Math.random() * colors.length)];
var triangle1Location = random(30, 270 - weight * 2);
var triangle2Location = random(50, 270 - weight * 2);
var triangle3Location = random(50, 270 - weight * 2);
var triangle4Location = random(50, 270 - weight * 2);

function draw() {
  noStroke();
  rect(0, 0, 340, 340);
  strokeWeight(weight);
  setLineColor("grey");
  setFillColor("white");
  rect(weight / 2, weight / 2, 330 - weight * 2, 330 - weight * 2);
  setFillColor(color1);
  triangle(mouseX, mouseY, weight / 2, weight / 2, weight / 2, triangle1Location);
  setFillColor(color2);
  triangle(mouseX, mouseY, 325 - weight / 2, weight / 2, triangle2Location, weight / 2);
  setFillColor(color3);
  triangle(mouseX, mouseY, 325 - weight / 2, 325 - weight / 2, 325 - weight / 2, triangle3Location);
  setFillColor(color4);
  triangle(mouseX, mouseY, weight / 2, 325 - weight / 2, triangle4Location, 325 - weight / 2);
  setFillColor("white");  
}

function mouseClicked() {
  color1 = colors[Math.floor(Math.random() * colors.length)];
  color2 = colors[Math.floor(Math.random() * colors.length)];
  color3 = colors[Math.floor(Math.random() * colors.length)];
  color4 = colors[Math.floor(Math.random() * colors.length)];
  triangle1Location = random(30, 270 - weight * 2);
  triangle2Location = random(50, 270 - weight * 2);
  triangle3Location = random(50, 270 - weight * 2);
  triangle4Location = random(50, 270 - weight * 2);
}
