let spaceship = [];
const numOfShips = 10
//set it up
function setup() {
  createCanvas(windowWidth, 600);
  let s = new Ship(width/2, height/2, 10);
  spaceship.push(s);
  spaceshipTimer();

  let init_x = 60;
  let init_y = 60;
  for ( let i = 0; i < numOfShips; i++) {
    spaceship.push( new Ship( init_x, init_y ) );
    init_x += 100;
    if( init_x > width ){
      init_x = 60;
      init_y += 100;
    }
  }
}
// draws background color and inserts class variables
function draw() {
  background('rgb(12, 25, 117)');
  for (let i = 0; i < spaceship.length; i++) {
    spaceship[i].move();
    spaceship[i].show();
    spaceship[i].mouseCheck();
    spaceship[i].edgeCheck();
  }

}
//timer
function spaceshipTimer() {
  let s = new Ship(random(width), random(height), random(200));
  spaceship.push(s);
  setTimeout(spaceshipTimer, random(2000));
}
//the ablity to destory the spaceships
function mousePressed() {
  for (let i = spaceship.length - 1; i >= 0; i--)
  {
  let destoryMe = spaceship[i].mouseCheck();
  if (destoryMe) {
      spaceship.splice(i, 1);
    }
  }
}

//spaceship class
class Ship {
  constructor(x, y, size) {
    this.color = (random(255), random(255), random(255));
     this.size = random(20, 80);
     this.rad = this.size / 2;
     this.posX = x;
     this.posY = y;
     this.deltaX = random(-10, 10);
     this.deltaY = random(-10, 10);
  }
//gives spaceship movement
  move() {
    this.posX += this.deltaX;
    this.posY += this.deltaY;
  }
//boring rectangular spaceship
  show() {
    push();
    noStroke();
    fill(this.color);
    translate(this.posX, this.posY);
    rect(0, 0, this.size, this.size);
    pop();

  }
  //for some reason the spaceships are scared of the mouse
  mouseCheck() {
    let d = dist(this.posX, this.posY, mouseX, mouseY);
    if (d < this.size){
      return true;
    } else {
      return false;
    }
  }
  //it just make the spaceships bouce on the edge then go off screen when they appear

  edgeCheck() {
    if (this.posX + this.rad >= height || this.posY - this.rad <= 0) {
      this.deltaY *= -1;
    }
  }
}
