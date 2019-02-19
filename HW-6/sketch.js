let circle = {}

circle.size = 100
circle.min = 50;
circle.max = 150;
circle.color = 'rgb(22, 149, 219)';
circle.pos_x = 30;
circle.pos_y = 0;

function setup() {
  createCanvas( 800, 600 );
  background( 'rgb(52, 12, 57)' );

  circle.pos_x = width/4;
  circle.pos_y = height/5;
  circle.max = width - 20;
}

function draw() {

  let red = floor( random(256) );
  let green = floor( random(256) );
  let blue = floor( random(256) );

  translate( circle.pos_x, circle.pos_y);
  fill( red, green, blue );
  noStroke();
  ellipse( 0, 0, circle.size );

  circle.pos_x = circle.pos_y + 10;

  circle.pos_y = circle.pos_x % width;

  circle.pos_x = 10 * 10;
  circle.size =  map( mouseX, 0, width, circle.min, circle.max );

}
