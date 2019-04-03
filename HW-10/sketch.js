//SUNSHINE SKETCH START/ everything
//the locations of the ray lines
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
//idx variable
let idx = 0;

function setup() {
  //canvas size
    createCanvas(600, 600);
  //color of background
    background(0);
  //speed of the rays
    frameRate(2);
}
//drawing time
function draw() {
  //placement of sunShine
    sunShine(300, 300, 2, 2);
  //start of the sunShine's rays
    translate( width/2, height/2 );

    //  adding to the idx
    let idxPlus = (idx + 1) % lineArr.length;

    //the points defining a line
    let x1 = lineArr[idx][0] * 10;
    let y1 = lineArr[idx][1] * 10;
    let x2 = lineArr[idxPlus][0] * 10;
    let y2 = lineArr[idxPlus][1] * 10;


    // draw the lines
    strokeWeight(18);
    stroke(random(255), random(255), random(255), 300);
    line(x1, y1, x2, y2);

    //the idx
    idx = (idx + 1) % lineArr.length;
}
//end of the rays
//drawing the sunShine
function sunShine( px, py, sx, sy ) {
// start of sunShine sandbox
    push();

    translate( px, py );
    scale( sx, sy );
//sunShine head
    noStroke();
    fill(random(255), random(255), random(255), 200);
    ellipse(0, 0, 100);
    noStroke();
//start of face
    fill(255);
//mouth
    arc( 0, 15, 75, 50, 0, PI );
//glasses
    arc( 25, -20, 30, 50, 0, PI );
    arc( -25, -20, 30, 50, 0, PI );
    stroke(255)
    strokeWeight(5)
    line(-20, -18, 20, -18 )

    pop();
//done drawing
//end of sunShine sandbox
}
//end of everything
