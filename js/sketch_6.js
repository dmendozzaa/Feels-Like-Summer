var car;

var words = ["Parents", "tryna tell", "the children please", "slow down", "Slow down", "I know"];

function preload() {
  font = loadFont('fonts/Alegreya-BlackItalic.ttf');
   car = loadImage('img/car.gif');
  
}


var wordIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textAlign(CENTER);
  textSize(width*(70/1440));
  strokeWeight(6);
  stroke('#D0F9E7');
  fill('#02CCFF');
}

function draw() {
  image(car,0,0,width,height);
  text(words[wordIndex],width/2,height/2)
}

function mousePressed(){
wordIndex = wordIndex +1;
  if(wordIndex >= words.length){
    wordIndex = 0;
  }
  
}