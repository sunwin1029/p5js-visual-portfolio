let tiltDirection = 0;
let tiltAngle = 0;

let noteX = 0;
let noteY = 0;
let noteA = 0;

function setup() {
  createCanvas(600, 400);
  angleMode(RADIANS);
}

function draw() {
  background(245, 244, 240);

  if (tiltDirection == -1) {
    tiltAngle = lerp(tiltAngle, -PI / 10, 0.12);
  } else if (tiltDirection == 1) {
    tiltAngle = lerp(tiltAngle, PI / 10, 0.12);
  } else {
    tiltAngle = lerp(tiltAngle, 0, 0.12);
  }

  noStroke();

  // 몸통
  fill(30);
  rect(150, 270, 300, 130, 4);

  // 머리와 목은 함께 기울어짐
  push();
  translate(300, 245);
  rotate(tiltAngle);
  translate(-300, -245);

  fill(255, 220, 200);
  rect(280, 230, 40, 40, 4);

  fill(255, 220, 200);
  ellipse(220, 155, 40, 40);
  ellipse(380, 155, 40, 40);

  fill(255, 220, 200);
  ellipse(300, 150, 180, 200);

  fill(255);
  ellipse(209, 155, 11, 16);
  rect(205, 160, 7, 16, 4);
  ellipse(392, 155, 11, 16);
  rect(388, 160, 7, 16, 4);

  stroke(60, 40, 30);
  strokeWeight(8);
  line(245, 142, 275, 142);
  line(325, 142, 355, 142);

  noStroke();
  fill(40, 30, 20);
  arc(300, 130, 200, 180, PI, TWO_PI);

  noFill();
  stroke(70, 55, 40);
  strokeWeight(3);
  bezier(286, 50, 205, 78, 210, 98, 228, 112);
  bezier(292, 50, 230, 78, 235, 96, 252, 111);
  bezier(297, 50, 260, 78, 262, 96, 278, 110);
  bezier(300, 50, 292, 78, 294, 96, 300, 110);
  bezier(303, 50, 340, 78, 338, 96, 322, 110);
  bezier(308, 50, 370, 78, 365, 96, 348, 111);
  bezier(314, 50, 395, 78, 390, 98, 372, 112);

  noStroke();
  fill(40, 30, 20);
  circle(260, 160, 10);
  circle(340, 160, 10);

  stroke(160, 130, 120);
  strokeWeight(2);
  line(300, 175, 295, 195);
  line(295, 195, 305, 198);

  noFill();
  stroke(150, 80, 80);
  strokeWeight(3);
  arc(300, 210, 50, 30, 0, PI);
  pop();

  // 마우스 클릭 위치에서 음표 1개가 나타남
  if (noteA > 0) {
    stroke(35, 35, 35, noteA);
    strokeWeight(4);
    line(noteX + 6, noteY - 8, noteX + 6, noteY - 54);
    noFill();
    bezier(
      noteX + 6,
      noteY - 54,
      noteX + 26,
      noteY - 50,
      noteX + 28,
      noteY - 30,
      noteX + 12,
      noteY - 22,
    );

    noStroke();
    fill(35, 35, 35, noteA);
    push();
    translate(noteX, noteY);
    rotate(-PI / 5);
    ellipse(0, 0, 20, 15);
    pop();

    noteY = noteY - 1.5;
    noteA = noteA - 4;
  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    tiltDirection = -1;
  }
  if (keyCode == RIGHT_ARROW) {
    tiltDirection = 1;
  }
}

function keyReleased() {
  if (keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW) {
    tiltDirection = 0;
  }
}

function mousePressed() {
  noteX = mouseX;
  noteY = mouseY;
  noteA = 255;
}
