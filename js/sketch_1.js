var sunset;


let gradientStartOne, gradientEndOne, gradientStartTwo, gradientEndTwo, gradientStartThree, gradientEndThree, gradientStartFour, gradientEndFour, gradientStartFive, gradientEndFive;

function preload() {
  font = loadFont('fonts/Alegreya-BlackItalic.ttf');
   sunset = loadImage('img/sunset.gif');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textAlign(CENTER);
  
  gradientStartOne = color(255,90,95);
  gradientEndOne = color(255,69,50);
  
  gradientStartTwo = color(400, 100, 50);
  gradientEndTwo = color(200, 200, 300);
  
  gradientStartThree = color(253, 218, 13);
  gradientEndThree = color(255, 170, 51);
  
  gradientStartFour = color(500, 30, 50);
  gradientEndFour = color(255, 200, 300);

  gradientStartFive = color(150, 50,100);
  gradientEndFive = color(400,20,35);
   
}




function draw() {
  
  textSize(width*(135/1440));
  
  image(sunset,0,0,width,height);


  
   
  // Calculate the color for the gradient based on mouse position
  let lerpedColorOne = lerpColor(gradientStartOne, gradientEndOne, mouseX / width);
  
    let lerpedColorTwo = lerpColor(gradientStartTwo, gradientEndTwo, mouseX / width);
  
  let lerpedColorThree = lerpColor(gradientStartThree, gradientEndThree, mouseX / width);
  
  let lerpedColorFour = lerpColor(gradientStartFour, gradientEndFour, mouseX / width);
   
  let lerpedColorFive = lerpColor(gradientStartFive, gradientEndFive, mouseX / width);
  

  // Set text fill to the lerped color
  fill(lerpedColorOne);
  
  // Draw text at the center of the canvas
  
  stroke('#FFFDD0');
  strokeWeight(2);
  
  text("FEELS", width / 5.3, height / 2);
  
   fill(lerpedColorTwo);
  text("LIKE", width /2.2, height / 2)
  
  fill(lerpedColorThree);
  text("SUMMER", width / 1.28, height / 2);
  
  fill(lerpedColorFour);
  text("Childish", width / 3.3, height / 1.4);
  
  fill(lerpedColorFive);
  text("Gambino ", width/1.4, height/ 1.4)

  
  

}

