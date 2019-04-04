let fish = [];
let num_of_fish = 20;
let bg_color;

function setup() {
    // createCanvas(windowWidth, windowHeight);
    createCanvas(800, 800);
    bg_color = color('rgb(8, 10, 8)');

    for (let i = 0; i < num_of_fish; i++) {
        fish.push( new SwimmingFish() );
    }
}

function draw() {
    background(bg_color);

    for (var i = 0; i < fish.length; i++) {
        fish[i].frame();
    }
}
class SwimmingFish {

    constructor() {
        this.size_w = (20, 80);
        this.size_h = (10, 50);
        this.loc_x = random(width);
        this.loc_y = random(height);
        this.move_x = random(2, 2);
        this.move_y = random(-2, -2);
        this.body_color = color(random(255), random(255), random(255));
        this.size_w = this.size_w;
        this.size_h = this.size_h;
        this.fin_x = this.size_w * 0.4 + (this.size_w * 0.25);
        this.fin_y = this.size_h * 0.5;
        this.fin_w = this.size_w * 0.75;
        this.fin_h = this.size_h * 0.4;
        this.left_fin_angle = -20;
        this.right_fin_angle = 80;
        this.fin_angle_delta = random(5);
        this.fin_angle_max = -40;
        this.active_fin = 5;
    }
    frame() {
           this.feetAngle();
           this.display();
           this.move();
       }

       display() {

           push();

           translate(this.loc_x, this.loc_y);
           fill(this.body_color);

           ellipse(0, 0, this.size_w, this.size_h);

           // eyes
           fill(255);
           ellipse(15, 6, 6, 10);


           // feet
           push();
           fill('rgb(79, 38, 207)')
           rotate(PI * (this.right_fin_angle * 0.01));
           translate(this.fin_x, this.fin_y);
           scale(1, -1);
           arc(0, 5, this.fin_w, this.fin_h, 0, -PI, CHORD);
           pop();
           push();
           fill('rgb(145, 60, 241)')
           rotate(PI * -(this.left_fin_angle * 0.01));
           translate(-this.fin_x, this.fin_y);
           scale(-1, -1);
           arc(0, 0, this.fin_w, this.fin_h, 0, -PI, CHORD);
           pop();

           pop();
       }
       feetAngle() {

           if (this.active_fin === 0) {
               this.left_fin_angle -= this.fin_angle_delta;
               if (this.left_fin_angle <= this.fin_angle_max) {
                   this.fin_angle_delta *= -1;
               }
               if (this.left_fin_angle >= 0) {
                   this.active_fin = 1;
                   this.fin_angle_delta *= -1;
               }
           } else if (this.active_fin === 1) {
               this.right_fin_angle -= this.fin_angle_delta;
               if (this.right_fin_angle <= this.fin_angle_max) {
                   this.fin_angle_delta *= -1;
               }
               if (this.right_fin_angle >= 0) {
                   this.active_fin = 0;
                   this.fin_angle_delta *= -1;
               }
           }

           // console.log(this.left_foot_angle);
       }
       move() {
              this.loc_x += this.move_x;
              this.loc_y += this.move_y;

              if (this.loc_x >= width) {
                  this.move_x *= -1;
                  this.loc_x = width - abs(this.move_x);
              } else if (this.loc_x <= 0) {
                  this.move_x *= -1;
                  this.loc_x = abs(this.move_x);
              } else if (this.loc_y >= height) {
                  this.move_y *= -1;
                  this.loc_y = height - abs(this.move_y);
              } else if (this.loc_y <= 0) {
                  this.move_y *= -1;
                  this.loc_y = abs(this.move_y);
              }
          }
      }
