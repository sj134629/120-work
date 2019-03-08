
function setup() {
    createCanvas(600, 600);
}

function draw() {
    background('rgb(236, 149, 19)');
    stroke('255');
    strokeWeight(4);

    let x = 0;
    let y = 0;
    while (x <= width) {
      fill('rgb(40, 231, 23)');
      ellipse(x, 200, 25, 25);
      x = x + 50;
    }

    for (let x = 0; x <= width; x = x + 50) {
      fill('rgb(67, 15, 238)');
      ellipse(x, 400, 25, 25);
    }

    for (let y = 0; y <= width; y = y + 50) {
      fill('rgb(244, 11, 227)');
      ellipse(300, y, 25, 25);
      ellipse(300, y, 45, 45);
    }
  }
