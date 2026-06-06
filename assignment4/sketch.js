let pieces = [
  ["#D7263D", 0, 10],
  ["#F46036", 10, 20],
  ["#2E294E", 20, 30],
  ["#1B998B", 30, 40],
  ["#C5D86D", 40, 50],
  ["#FF9F1C", 50, 60],
  ["#A23E48", 60, 70],
  ["#3B60E4", 70, 80],
  ["#6A4C93", 80, 90],
  ["#1982C4", 90, 100],
  ["#8AC926", 100, 110],
  ["#FF595E", 110, 120],
  ["#8338EC", 120, 130],
  ["#FF006E", 130, 140],
  ["#FB5607", 140, 150],
  ["#3A86FF", 150, 160],
  ["#6D597A", 160, 170],
  ["#B56576", 170, 180],

  ["#355070", 210, 220],
  ["#6D597A", 220, 230],
  ["#B56576", 230, 240],
  ["#E56B6F", 240, 250],
  ["#FFB703", 250, 260],
  ["#219EBC", 260, 270],
  ["#023047", 270, 280],
  ["#8ECAE6", 280, 290],
  ["#FF006E", 290, 300],
  ["#8338EC", 300, 310],
  ["#3A86FF", 310, 320],
  ["#FB5607", 320, 330],
  ["#FFBE0B", 330, 340],
  ["#2EC4B6", 340, 350],
  ["#90DBF4", 350, 360],
];

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
  colorMode(RGB);
}

function draw() {
  background(245);
  noStroke();

  let rotationAmount = sin(frameCount * 0.7) * 8;
  let circleSize = 300 + sin(frameCount * 1.5) * 18;

  push();
  translate(300, 200);
  rotate(rotationAmount);

  for (let i = 0; i < pieces.length; i++) {
    let baseColor = color(pieces[i][0]);
    let targetColor = color(
      255 - red(baseColor),
      255 - green(baseColor),
      255 - blue(baseColor),
    );

    let colorAmt = (sin(frameCount * 1.2 + i * 15) + 1) / 2;
    let changingColor = lerpColor(baseColor, targetColor, colorAmt * 0.45);

    fill(changingColor);
    arc(0, 0, circleSize, circleSize, pieces[i][1], pieces[i][2], PIE);
  }

  fill(245);
  arc(0, 0, circleSize, circleSize, 180, 210, PIE);

  pop();

  stroke(30);
  strokeWeight(1.5 + sin(frameCount * 1.5) * 0.5);
  line(0, 0, 600, 400);
  line(600, 0, 0, 400);

  noStroke();

  let cornerMove = sin(frameCount * 1.2) * 5;

  fill("#2E294E");
  rect(35 + cornerMove, 35, 70, 70);

  fill("#D7263D");
  rect(495 - cornerMove, 295, 70, 70);

  fill("#1B998B");
  triangle(470, 30 + cornerMove, 590, 30, 590, 130);

  fill("#FF9F1C");
  triangle(10, 270, 10, 390, 130, 390 - cornerMove);
}

function keyPressed() {
  if (key === "s" || key === "S") {
    saveGif("assignment4_abstract", 5);
  }
}
