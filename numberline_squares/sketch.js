let back;

function preload() {
  back = loadImage("background.png");
}

function setup() {
  // put setup code here
  createCanvas(700, 200);
}

function draw() {
  // put drawing code here
  background(back);
  stroke(0);
  circle(mouseX, height/2, 5);
  let old_n = map(mouseX, 0, width, -2.6, 2.6, true);
  for (i = 0; i < 8; i++) {
    new_n = old_n ** 2;
    let old_x_n = map(old_n, -2.6, 2.6, 0, width);
    let x_n = map(new_n, -2.6, 2.6, 0, width);

    push();
    stroke(255, 0, 0);
    fill(255, 0, 0);
    line(old_x_n, height/2, x_n, height/2);
    let middle = (old_x_n + x_n) / 2;
    if (x_n - old_x_n > 0) {
      triangle(middle, height/2 - 5, middle, height/2 + 5, middle + 5, height/2);
    } else {
      triangle(middle, height/2 - 5, middle, height/2 + 5, middle - 5, height/2);
    }
    pop();
    circle(x_n, height/2, 5);
    old_n = new_n;
  }
}
