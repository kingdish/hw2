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
rect(weight / 2, weight / 2, 330 - weight * 2, 330 - weight * 2);
setFillColor("white");
rect(weight / 2, weight / 2, 150, 200);
setFillColor("red");
rect(weight / 2, weight / 2, 75, 200);
setFillColor("blue");
rect(75 + weight / 2, 130 + weight / 2, 75, 70);
setFillColor("yellow");
rect(90 + weight / 2, 200 + weight / 2, 140, 50);
setFillColor("white");
rect(0 + weight / 2, 200 + weight / 2, 90, 50);
setFillColor("blue");
rect(230 + weight / 2, 200 + weight / 2, 90, 80);
setFillColor("white");
rect(0 + weight / 2, 250 + weight / 2, 120, 35);
setFillColor("yellow");
rect(0 + weight / 2, 285 + weight / 2, 120, 35);
setFillColor("white");
rect(120 + weight / 2, 250 + weight / 2, 50, 70);
setFillColor("black");
rect(170 + weight / 2, 250 + weight / 2, 60, 70);
setFillColor("white");
rect(230 + weight / 2, 280 + weight / 2, 90, 40);
setFillColor("red");
rect(150 + weight / 2, 50 + weight / 2, 100, 100);
setFillColor("white");
rect(150 + weight / 2, 0 + weight / 2, 100, 50);
setFillColor("yellow");
rect(250 + weight / 2, 0 + weight / 2, 70, 70);
setFillColor("white");
rect(250 + weight / 2, 70 + weight / 2, 70, 130);
setFillColor("white");
rect(150 + weight / 2, 150 + weight / 2, 100, 50);
