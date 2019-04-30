let moles = [];
let mole_img;
let bg = 'rgb(42, 227, 48)';

function preload(){
    mole_img = loadImage('Images/mole.png');
}

function setup() {
    createCanvas( 600, 600 );
    background(bg);

    for (let i = 0; i < 5; i++) {
    moles[0] = new Mole3(45, 50, mole_img, 0);
    moles[1] = new Mole2(355, 50, mole_img, 1);
    moles[2] = new Mole(450, 50, mole_img, 2);
    moles[3] = new Mole2(45, 195, mole_img, 3);
    moles[4] = new Mole(250, 195, mole_img, 4);
    moles[5] = new Mole3(450, 195, mole_img, 5);
    moles[6] = new Mole3(45, 350, mole_img, 6);
    moles[7] = new Mole(250, 350, mole_img, 7);
    moles[8] = new Mole2(450, 350, mole_img, 8);


      }
    }

function mousePressed() {
  for (let i = 0; i < moles.length; i++) {
    let destroyMe = moles[i].clicked();
    if( destroyMe ) {
      moles.splice( i, 1);
    }

}
}

function draw() {
    background(bg);

    push();
    noStroke();
    fill('rgb(85, 62, 10)')
    ellipse(100,150,150,30);
    ellipse(300,150,150,30);
    ellipse(500,150,150,30);
    ellipse(100,300,150,30);
    ellipse(300,300,150,30);
    ellipse(500,300,150,30);
    ellipse(100,450,150,30);
    ellipse(300,450,150,30);
    ellipse(500,450,150,30);
    pop();

    for (let i = 0; i < moles.length; i++) {
      moles[i].frame();
    }
//hammer
    push();
    translate( mouseX, mouseY );
    rotate( radians(-60))
    noStroke();
    fill('rgb(159, 159, 152)')
    rect(0,-10,10,80)
    rect( -20,-20,50,40 )
    fill('rgb(111, 111, 115)');
    ellipse( -20,0,20,40 );
    ellipse( 30,0,20,40 );
    pop();
}



class Mole {
    constructor(init_x, init_y, img, orientation){
        this.pos = {
            x: init_x,
            y: init_y
        };

        this.orientation = orientation;

        // A reference to a pre-loaded image in memory
        this.image = img;
        // The speed at which to work through subrectangles
        this.speed = 9;
        // The size of our subrectangles
        // corresponds to sprite size
        this.size = {
            w: 128,
            h: 128
        };
        // The number of the sprite image we are on
        this.sprite_num = 0;
        // The top-left corner of each sub-rectangle
        this.subRect = [
            [0, 0],
            [128, 0],
            [0, 128],
            [128, 128],
            [0, 128],
            [128, 128],
            [0, 128],
            [128, 128],
        ];

    }
    clicked(){
      let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
      if (d < this.size.w, this.size.h) {
        return true;
      } else {
        return false;
      }
    }

    frame() {
        this.display();
        this.animate();
    }

    display() {
        push();

        translate(this.pos.x, this.pos.y);

        if (this.orientation === 0) {
            scale(1,1);
        } else if (this.orientation === 1) {
            scale(-1,1);
        }

        image(
            // reference to image in memory
            this.image,
            // placement of image on canvas
            // (handled by translate())
            0, 0,
            // The display size of the image
            this.size.w, this.size.h,
            // The top left corner of the sub rectangle
            this.subRect[this.sprite_num][0], this.subRect[this.sprite_num][1],
            // the size of the subrectangle
            this.size.w, this.size.h
        );

        pop();
    }

    animate() {
        // update the sprite num
        // This adjusts the subrectangle positions
        if (frameCount % this.speed === 0) {
            this.sprite_num++;
            this.sprite_num %= 6;
        }
    }


}

class Mole2 {
    constructor(init_x, init_y, img, orientation){
        this.pos = {
            x: init_x,
            y: init_y
        };

        this.orientation = orientation;

        // A reference to a pre-loaded image in memory
        this.image = img;
        // The speed at which to work through subrectangles
        this.speed = 15;
        // The size of our subrectangles
        // corresponds to sprite size
        this.size = {
            w: 128,
            h: 128
        };
        // The number of the sprite image we are on
        this.sprite_num = 0;
        // The top-left corner of each sub-rectangle
        this.subRect = [
            [0, 0],
            [128, 0],
            [0, 128],
            [128, 128],
            [0, 128],
            [128, 128],
            [0, 128],
            [128, 128],
        ];

    }
    clicked(){
      let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
      if (d < this.size.w, this.size.h) {
        return true;
      } else {
        return false;
      }
    }

    frame() {
        this.display();
        this.animate();
    }

    display() {
        push();

        translate(this.pos.x, this.pos.y);

        if (this.orientation === 0) {
            scale(1,1);
        } else if (this.orientation === 1) {
            scale(-1,1);
        }

        image(
            // reference to image in memory
            this.image,
            // placement of image on canvas
            // (handled by translate())
            0, 0,
            // The display size of the image
            this.size.w, this.size.h,
            // The top left corner of the sub rectangle
            this.subRect[this.sprite_num][0], this.subRect[this.sprite_num][1],
            // the size of the subrectangle
            this.size.w, this.size.h
        );

        pop();
    }

    animate() {
        // update the sprite num
        // This adjusts the subrectangle positions
        if (frameCount % this.speed === 0) {
            this.sprite_num++;
            this.sprite_num %= 6;
        }
    }


}
class Mole3 {
    constructor(init_x, init_y, img, orientation){
        this.pos = {
            x: init_x,
            y: init_y
        };

        this.orientation = orientation;

        // A reference to a pre-loaded image in memory
        this.image = img;
        // The speed at which to work through subrectangles
        this.speed = 20;
        // The size of our subrectangles
        // corresponds to sprite size
        this.size = {
            w: 128,
            h: 128
        };
        // The number of the sprite image we are on
        this.sprite_num = 0;
        // The top-left corner of each sub-rectangle
        this.subRect = [
            [0, 0],
            [128, 0],
            [0, 128],
            [128, 128],
            [0, 128],
            [128, 128],
            [0, 128],
            [128, 128],
        ];

    }
    clicked(){
      let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
      if (d < this.size.w, this.size.h) {
        return true;
      } else {
        return false;
      }
    }

    frame() {
        this.display();
        this.animate();
    }

    display() {
        push();

        translate(this.pos.x, this.pos.y);

        if (this.orientation === 0) {
            scale(1,1);
        } else if (this.orientation === 1) {
            scale(-1,1);
        }

        image(
            // reference to image in memory
            this.image,
            // placement of image on canvas
            // (handled by translate())
            0, 0,
            // The display size of the image
            this.size.w, this.size.h,
            // The top left corner of the sub rectangle
            this.subRect[this.sprite_num][0], this.subRect[this.sprite_num][1],
            // the size of the subrectangle
            this.size.w, this.size.h
        );

        pop();
    }

    animate() {
        // update the sprite num
        // This adjusts the subrectangle positions
        if (frameCount % this.speed === 0) {
            this.sprite_num++;
            this.sprite_num %= 6;
        }
    }


}
