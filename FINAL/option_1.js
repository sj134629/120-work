class Option_1 {
  constructor( x, y, color ) {
    this.posX = x;
    this.posY = y;
    this.color = color;
    this.size = size;
  }
  show() {
    push();
    noStroke();
    fill('rgb(10, 238, 53)');
    translate ( 20, 475 );
    rect( 0, 0, 250, 100);
    pop();
  }
  show2() {
    push();
    noStroke();
    fill('rgb(181, 1, 238)');
    translate ( 20, 675 );
    rect( 0, 0, 250, 100);
    pop();
  }
}
