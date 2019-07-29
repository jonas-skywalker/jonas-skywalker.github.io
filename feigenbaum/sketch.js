const iterations = 1000;
let pop;
let mu_start = 2.5;
let mu_end = 4;
let steps = 0.001;

function setup() {
  // put setup code here
  createCanvas(displayWidth - 100, displayHeight - 200);
}

function draw() {
  // put drawing code here
  background(190);
  // translate(0, height);
  for (i = mu_start; i < mu_end; i += steps) {
    list = feigenbaum(i, pop);
    points = find_convergence(list);
    for (j = 0; j < points.length; j++) {
      let x = map(i, mu_start, mu_end, 0, width);
      let y = map(points[j], 0, 1, 0, height);
      point(x, y);
    }
  }
}

function feigenbaum(mu, pop) {
  // function to cumpute the next generation
  pop = 0.5;
  let points = new Array();

  for (k = 0; k < iterations; k++) {
    let newpop = (mu * pop * (1 - pop));
    points.push(newpop);
    pop = newpop;
  }

  return points
}

function find_convergence(list, n=iterations, b=0.0001) {
  // find convergence of a list of points and return only relevant points
  l = list;
	let v = l[l.length-1];
	for (let i = l.length-2; i > l.length-n/10; i--) {
		if (Math.abs(l[i] - v) < b) {
			return l.slice(i, l.length-1);
		}
	}
  return l
  // return list
}
