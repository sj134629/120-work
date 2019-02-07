function setup(){
  //create canvas
  createCanvas( 800,800 );
}

function draw() {

  //background
  background('rgb(20, 215, 240)')

  /* ********************** */
  /* MAIN SANDBOX*/
  /* ********************** */
push();

//set grid center( x:0,y:0 )
// to canvas center
translate( 400, 500 );

/* ********************** */
/* HEAD */
/* ********************** */
push();
//back of hair
fill('rgb(41, 31, 11)')
rect(-230,-420,500,550,200,200,0,0);

//start of head
noStroke();
fill('rgb(210, 191, 163)');

rotate( radians(40));
rect(-300,-350,400,350,150,200,90,150);

//neck
rotate(radians(50));
rect(-110,-70,200,200,0,0,90,0);

//eyes
rotate(radians(45))
fill('rgb(245, 245, 251)');
rect(-150,80,80,80,0,90,0,90);
rect(-270,-40,80,80,0,90,0,90);

fill('rgb(96, 83, 8)')
ellipse(-110,110,60,60,0,90,0,90);
ellipse(-230,-10,60,60,0,90,0,90);

fill('rgb(7, 12, 13)')
ellipse(-110,110,30,30,0,90,0,90);
ellipse(-230,-10,30,30,0,90,0,90);
//mouth
fill('rgb(226, 150, 176)')
rect(-120,-40,60,60,0,90,0,90);
stroke('rgb(158, 75, 110)')
line(-60,20,-120,-40)

//front of hair
stroke('rgb(78, 52, 17)');
fill('rgb(41, 31, 11)');
triangle(-320,250,250,100,-220,350);
triangle(-320,250,200,180,-220,350);
triangle(-320,250,150,250,-220,350);
triangle(-120,-250,-350,150,-370,10);

//glasses
stroke('rgb(28, 19, 6)');
strokeWeight(3);
noFill();
ellipse(-110,110,110,90,0,90,0,90);
ellipse(-230,-10,110,90,0,90,0,90);
line(-160,90,-210,30);

//nose
stroke('rgb(175, 153, 107)');
line(-120,30,-170,30);

//signing it with my name
stroke('rgb(96, 83, 8)')
rotate(radians(225))
textSize(30);
textFont("Times New Roman");
text("A Self-Portrait, By Samantha Jacobson", -150,200)
pop();

}
