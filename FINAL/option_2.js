class Option_2 {
  constructor( x, y, color ) {
    this.posX = x;
    this.posY = y;
    this.color = color;
    this.size = size;
  }
  show() {
    push();
    noStroke();
    fill('rgb(132, 29, 232)');
    translate ( 20, 600 );
    rect( 0, 0, 250, 100);
    pop();
  }
}
