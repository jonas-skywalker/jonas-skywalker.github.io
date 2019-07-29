let x = 0;
let y = 0;
let dx = 0;
let dy = -1;
let num = 1;

function setup() {
  // put setup code here
  createCanvas(500, 500);
}

function draw() {
  // put drawing code here
  background(200);
  translate(width/2, height/2);

  push();
  fill(color(255, 0, 0));
  noStroke();
  rect(0, 0, 1, 1);
  pop();

  for (i = 0; i < width ** 2; i++) {
    if (check_prime(num)) {
      point(x, y);
    }
    // if ((int(num ** 0.5) ** 2 == int(num)) && (num !== 1) ) {
    //   push();
    //   fill(color(255, 255, 0));
    //   noStroke();
    //   rect(x, y, 1, 1);
    //   pop();
    // }
    num++;

    if ((x == y) || (x < 0 && x == -y) || (x > 0 && x == 1-y)) {
      let a = -dy;
      let b = dx;
      dx = a;
      dy = b;
    }

    x += dx;
    y += dy;
  }
  console.log("Im Here");
  noLoop();
}

function check_prime(n) {
  if (n == 1) {
    return false
  }
  for (i = 2; i < n; i++) {
    if (n % i !== 0) {
    } else {
      return false
    }
  }
  return true
}
