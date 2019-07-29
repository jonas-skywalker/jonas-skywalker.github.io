let A;
let back;
var checkbox_manbdelbrot;

function preload() {
  back = loadImage("mandelbrot.png");
}

function setup() {
  // put setup code here
  createCanvas(700, 700);
  A = new Point_Construct(width/2, height/2, 10, 255, 0, 0);
  checkbox_mandelbrot = createCheckbox("Draw Mandelbrot");
}

function draw() {
  // put drawing code here
  if (checkbox_mandelbrot.checked()) {
    background(back);
  } else {
    background(200);
  }

  A.show();
  draw_complex_grid();
}

function mouseDragged() {
  A.interact();
}
