// define locations of a star
let lineArr = [
  [0, -20],
  [15, 20],
  [-20, -10],
  [20, -7],
  [-15, 20],
  [0, -20],
  [0, 20],
  [20, -20],
  [-20, 12],
  [20, 10],
  [0,0]


];
let idx = 0;

function setup() {
    createCanvas(600, 600);
    background(0);
    frameRate(2);
}

function draw() {
    sunShine(300, 300, 2, 2);
    translate( width/2, height/2 );

    // create a modulus wrapped plus-one idx
    let idxPlus = (idx + 1) % lineArr.length;

    // grab the 2 points defining a line
    let x1 = lineArr[idx][0] * 10;
    let y1 = lineArr[idx][1] * 10;
    let x2 = lineArr[idxPlus][0] * 10;
    let y2 = lineArr[idxPlus][1] * 10;


    // draw the line
    strokeWeight(18);
    stroke(random(255), random(255), random(255), 300);
    line(x1, y1, x2, y2);

    // increment the idx
    idx = (idx + 1) % lineArr.length;
}
function sunShine( px, py, sx, sy ) {
    push();

    translate( px, py );
    scale( sx, sy );

    noStroke();
    fill(random(255), random(255), random(255), 200);
    ellipse(0, 0, 100);
    noStroke();
    fill(255);
    arc( 0, 15, 75, 50, 0, PI );
    arc( 25, -20, 30, 50, 0, PI );
    arc( -25, -20, 30, 50, 0, PI );
    stroke(255)
    strokeWeight(5)
    line(-20, -18, 20, -18 )

    pop();
}
