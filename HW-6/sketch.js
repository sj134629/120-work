//main variable
let circle = {}
//inside js object variables
//helps the size,shape, and placement of circle
circle.size = 100
circle.min = 50;
circle.max = 150;
circle.color = 'rgb(22, 149, 219)';
circle.pos_x = 30;
circle.pos_y = 0;

function setup() {
  //canvas created
  createCanvas( 800, 600 );
  //background color
  background( 'rgb(52, 12, 57)' );
  //how much the circle will change
  circle.pos_x = width/4;
  circle.pos_y = height/5;
  circle.max = width - 20;
}

function draw() {
  /* ****************
  STROKING CIRCLE SANDBOX
  **************** */
  //stroking color variables
  let red = floor( random(256) );
  let green = floor( random(256) );
  let blue = floor( random(256) );

  translate( circle.pos_x, circle.pos_y);
  //color of the circle
  fill( red, green, blue );
  noStroke();
  ellipse( 0, 0, circle.size );
  //position and starting size of circle
  circle.pos_x = circle.pos_y + 10;
  circle.pos_y = circle.pos_x % width;
  //somewhere in here the circle is moving fast
  circle.pos_x = 10 * 10;
  //lets make that circle change size when you move the mouse
  circle.size =  map( mouseX, mouseY, width, circle.min, circle.max );

}
