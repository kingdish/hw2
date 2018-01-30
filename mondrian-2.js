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

var weight = 5;

strokeWeight(weight);
setLineColor("grey");

setFillColor("white");
rect(weight / 2, weight / 2, 330 - weight * 2, 330 - weight * 2);
setFillColor("red");
triangle(160, 160, weight / 2, weight / 2, weight / 2, 30 + random(0, 270 - weight * 2));
setFillColor("blue");
triangle(160, 160, 325 - weight / 2, weight / 2, random(50, 270 - weight * 2), weight / 2);
setFillColor("yellow");
triangle(160, 160, 325 - weight / 2, 325 - weight / 2, 325 - weight / 2, random(50, 270 - weight * 2));
setFillColor("black");
triangle(160, 160, weight / 2, 325 - weight / 2, random(50, 270 - weight * 2), 325 - weight / 2);
setFillColor("white");
