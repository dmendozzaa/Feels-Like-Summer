var newString = "Rolling  faster,  faster";

var newString2 = "Not  a  chance  to  slow  down";

var waves


function preload() {
  font = loadFont('fonts/Alegreya-BlackItalic.ttf');
   waves = loadImage('img/waves.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  
}


function draw() {
  
  image(waves,0,0,width,height);
  textSize(width*(60/1440));
  strokeWeight(5);
  stroke('#1448A1');
  fill('#AEC8FF');
  
  textAlign(CENTER);
  
  // scales values from mouseX
  ////  width of canvas -----> length of string
  let revealText = map(mouseX, 0, width-25, 0, newString.length);
  let textPosition = (width/1.5) - (textWidth(newString)/2);
  
    let revealText2 = map(mouseX, 0, width-25, 0, newString2.length);
  let textPosition2 = (width/2) - (textWidth(newString2)/2);

  // Draw the letter to the screen
  text(newString.substring(0, revealText), textPosition, height/2);
  
   text(newString2.substring(0, revealText2), textPosition, height/1.6);
}
