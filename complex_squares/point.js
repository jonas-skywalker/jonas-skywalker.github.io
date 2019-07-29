class Point_Construct {
  constructor(x1, y1, r, c_r, c_g, c_b) {
    this.x = x1;
    this.y = y1;
    this.r = r;
    this.c = color(c_r, c_g, c_b);
  }

  interact() {
    if (((this.x - this.r) < mouseX < (this.x + this.r)) && ((this.y - this.r) < mouseY < (this.y + this.r))) {
      this.x = mouseX;
      this.y = mouseY;
    }
  }

  show() {
    push();
    fill(this.c);
    circle(this.x, this.y, this.r * 2);
    pop();

    push();
    fill(255);
    let result = [0, 0];
    let result_array = [];
    result_array.push(result);
    for (let i = 0; i < 40; i++) {
      let x = map(result[0], -2, 2, 0, width);
      let y = map(result[1], 2, -2, 0, height);
      circle(x, y, this.r/2);
      let const1 = map(this.x, 0, width, -2, 2);
      let const2 = map(this.y, 0, height, 2, -2);
      result = add_complex(square_complex(result), [const1, const2]);
      result_array.push(result);
    }

    pop();
  }
}


function square_complex(c) {
   return [(c[0] ** 2 - c[1] ** 2), (2 * c[0] * c[1])]
}

function add_complex(c1, c2) {
  return [(c1[0] + c2[0]),(c1[1] + c2[1])]
}
