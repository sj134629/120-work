let option_1 = []
let option_2 = []

function setup() {
    createCanvas( 600, 600 );
    option_1 = new Option_1( width/2, height/2, 50, 'rgb(12, 170, 17)' );
  }


function draw() {
    background( 'rgb(161, 242, 244)' );

    option_1.show();
    option_1.show2();
}
