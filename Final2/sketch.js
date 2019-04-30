let img;

function preload() {
    img = loadImage('mole/mole2.png');
}

function setup() {
    createCanvas( windowWidth, 600 );
}


function draw() {
    background( 'pink' );

    image(img, 10, 10);
}
