function draw_complex_grid() {
  push();

  // drawing the axes as arrows
  line(0, height/2, width, height/2);
  push();
  translate(width, height/2);
  fill(0);
  triangle(-8, -8, -8, 8, 0, 0);
  pop();
  line(width/2, height, width/2, 0);
  push();
  translate(width/2, 0);
  fill(0);
  triangle(-8, 8, 0, 0, 8, 8);
  pop();

  //drawing the coordinate labels
  // x axis
  push();
  translate(0, height/2);
  let x_val = -2.0;
  for (i = 0; i < 20; i++) {
    line(0, -8, 0, 8);
    text(str(round(x_val * 100) / 100), 0, -10);
    translate(width/20, 0);
    x_val += 0.2;
  }
  pop();
  // y axis
  push();
  translate(width/2, 0);
  let y_val = 2.0;
  for (i = 0; i < 20; i++) {
    text(str(round(y_val * 100) / 100) + "i", -40, 0);
    line(-8, 0, 8, 0);
    translate(0, height/20);
    y_val -= 0.2;
  }
  pop();

  pop();
}
