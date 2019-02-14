/**
 * Mermaid cat creature
 *
 */

function setup() {
    createCanvas( windowWidth, 800 );
    // createCanvas( windowWidth, windowHeight );
}

let headAngle = 0;
let headRotationRate = 0;
let armAngle = 0;
let headWidth = 80;
let headHeight = 80;

function draw() {
    //background color
    background( 'rgb(13, 237, 140)' );
    // cursor off
    noCursor();

    // base head rotation rate on mouseY pos
    headRotationRate = (mouseY * 0.1) - 20;
    //head angle,
    // I dont really want a rotating head just arms
    headAngle = headAngle + headRotationRate;
    // arm spin
    armAngle = armAngle - 3;
    // *****************************
    // CREATURE SANDBOX
    // *****************************
    push();

    //  please follow the mouse creature
    translate( mouseX, mouseY );



   // BODY
   // body color
   fill('rgb(255, 176, 59)');
   noStroke();
   ellipse( 0, 0, 100, 100 );
   // HEAD
   push();
   // EARS
   // ears and second body color
   fill('rgb(167, 122, 40)');
   noStroke();
   triangle( -100,-200,-15,15,25,-15 );
   triangle( 100,-200,15,15,-25,-15 );
   noStroke();
   // <- END EARS
   //head color
   fill( 'rgb(255, 176, 59)' );
   // move center
   translate( 0, -60 );
   // rotate head based on headAngle

   // head size
   ellipse( 0, 0, headWidth, headHeight );
    stroke(0);
    fill(255);
    // EYES
    strokeWeight(2);
    push();
    // eyes size
    translate( headWidth * -0.2, headHeight * -0.2 );
    ellipse( 0, 0, headWidth * 0.3, headHeight * 0.1 );
    noStroke();
    fill( 'rgb(255, 31, 111)' );
    ellipse( 0, 0, 10 );
    fill( 0 );
    ellipse( 0, 0, 5 );
    pop();
    push();
    translate( headWidth * 0.2, headHeight * -0.2 );
    ellipse( 0, 0, headWidth * 0.3, headHeight * 0.1 );
    noStroke();
    fill( 'rgb(255, 31, 111)' );
    ellipse( 0, 0, 10 );
    fill( 0 );
    ellipse( 0, 0, 5 );
    pop();
    // <- END EYES
    // MOUTH
       push();
       fill( 0 );
       arc( 0, headHeight * 0.2, 40, 10, 0, PI );
       line(0,0,0,15)
       pop();
       //nose color
       fill('rgb(126, 87, 38)')
       noStroke();
       rotate(radians(140));
       triangle(5,5,5,-5,-5,-5);
       pop();
       // <- END MOUTH
       // <- END HEAD

        // MERMAID TAIL
        fill( 'rgb(226, 18, 209)' );
        noStroke();
        triangle( 15, 135, -45, 35, 0, -10 );
        triangle( -15,135, 45, 35,0, -10 );
        // <- END TAIL

       // ARMS
       push();
       // right arm
       strokeWeight( 10 );
       stroke('rgb(167, 122, 40)');
       push();
       // placement of arms
       translate( 20, -20 );
       // time to rotate the arm
      rotate( radians( mouseX, mouseY ) );
       // draw the arm

       line( 0, 0, 50, 0 );

       // draw a hand-thing
       fill( 'rgb(167, 122, 40)' );
       noStroke();
       ellipse( 50, 0, 10 );
       pop();

       // left arm
      push();
      // placementof arm
      translate( -20, -20 );
      // rotate this arm too
      rotate( radians( mouseX) );
      // draw arm and hand
      line( 0, 0, 50, 0);
      fill( 'rgb(167, 122, 40)' );
      noStroke();
      ellipse( 50, 0, 10 );
      pop();

       pop(); // <- END MERMAID CAT CREATURE

   }
