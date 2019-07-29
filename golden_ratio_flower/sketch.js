let button_phi;
let button_pi;
let button_root;
let button_zero;
let button_plus;
let button_minus;
let button_start;
let button_stop;
let button_input;

const gold_ratio = 1.6180339887;
const pi = 3.14159265;
const root_2 = 2 ** (1/2);

let rot = 0;
let flow = false;
let inval = 0;

function setup() {
  createCanvas(500, 500);
  button_phi = createButton("golden ratio");
  button_phi.mousePressed(set_phi);
  button_pi = createButton("pi");
  button_pi.mousePressed(set_pi);
  button_root = createButton("root 2");
  button_root.mousePressed(set_root);
  button_zero = createButton("zero");
  button_zero.mousePressed(set_zero);
  button_plus = createButton("+");
  button_plus.mousePressed(set_plus);
  button_minus = createButton("-");
  button_minus.mousePressed(set_minus);
  button_start = createButton("start");
  button_start.mousePressed(set_start);
  button_stop = createButton("stop");
  button_stop.mousePressed(set_stop);
  button_input = createButton("input");
  button_input.mousePressed(set_input);
  let inp = createInput('');
  inp.input(input_value);
}

function draw() {
  background(100);
  translate(width/2, height/2);
  // rot = ang_slider.value();
  let pebbles = 150;
  let v = createVector(10, 0);
  for (let i = 0; i < pebbles; i++) {
    circle(v.x, v.y, 10);
    let point = rotate_angle(0, 0, v.x, v.y, rot);
    v.x = point[0];
    v.y = point[1];
    let vv = createVector(v.x, v.y);
    if (true) {
      vv.mult(0.02);
      v.add(vv);
    }
  }
  if (flow) {
    rot += 0.01;
  }

  text(str(1/(rot/360)), -width/2+20, -height/2 + 20);
}

function set_phi() {
  rot = 360 * 1/gold_ratio;
}

function set_pi() {
  rot = 360 * 1/pi;
}

function set_root() {
  rot = 360 * 1/root_2;
}

function set_zero() {
  rot = 0;
}

function set_plus() {
  rot += 0.05;
}

function set_minus() {
  rot -= 0.05;
}

function set_start() {
  flow = true;
}

function set_stop() {
  flow = false;
}

function set_input() {
  rot = 360 * 1/inval;
}

function input_value() {
  inval = this.value();
}

function rotate_angle(cx, cy, x, y, angle) {
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
}
