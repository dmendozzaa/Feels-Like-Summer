var heatwave;



function preload(){
  
  font = loadFont('fonts/Alegreya-BlackItalic.ttf');
  heatwave = loadImage('img/heat.gif');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);

}

function draw() {
     
  image(heatwave,0,0,width,height);

 

  textSize(width*(90/1440));
  strokeWeight(4);
	stroke(255, 204, 0);
  fill('#FF5349');
  
  if (mouseX > 200 && mouseY > 150) {
   
    text("You can feel it", 60,150);
  } 
  textSize(width*(90/1440));
  if (mouseX > 300 && mouseY > 300) {
 
    text("In the streets", 300, 380);
  }
  
  textSize(width*(90/1440));
  if (mouseX > 500 && mouseY > 500) {
 
    text("On a day like this", 500, 600);
  }
  textSize(width*(120/1440));
  
  
  if (mouseX > 750 && mouseY > 750) {
   
    text("THE HEAT", 950, 850);
  }

 

}