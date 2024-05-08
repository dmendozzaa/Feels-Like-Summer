var climate;

//you forgot to declare this variable at the top of your code.
var rotation = 1.5;
var isRotating = false;

function preload(){

 font = loadFont('fonts/Alegreya-BlackItalic.ttf');
  climate = loadImage('img/climate.gif');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  textFont(font);
  
  
}

function rotateText(x, y, radius, txt, rotation) {

    // Split the chars so they can be printed one by one
    chars = txt.split("");

    // Decide an angle
    charSpacingAngleDeg = 8;

    // https://p5js.org/reference/#/p5/textAlign
    textAlign(CENTER,BASELINE);
    textSize(width*(50/1440));
  stroke('white');
    fill('#E23132');

    // https://p5js.org/reference/#/p5/push
    // Save the current translation matrix so it can be reset
    // before the end of the function
    push();

    // Let's first move to the center of the circle
    translate(x, y);

    // First rotate half back so that middle char will come in the center
    rotate(radians(-chars.length * charSpacingAngleDeg / rotation));

    for (let i = 0; i < chars.length; i++) {
        text(chars[i], 0, -radius);

        // Then keep rotating forward per character
        rotate(radians(charSpacingAngleDeg));
    }

    // Reset all translations we did since the last push() call
    // so anything we draw after this isn't affected
    pop();

}

function draw() {
  
  image(climate,0,0,width,height);
   
  if (mouseIsPressed){
    isRotating = true;
  }

  if (isRotating && rotation < 6) {
    rotation += .02;
  } else if (rotation > 0){
    rotation = 1.5
  }

    textToRotate = (" Seven billion souls that move around the sun");
    rotateText(700, 350, 310, textToRotate, rotation);
}

