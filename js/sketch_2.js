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
  
  if (mouseX > 200 && mouseY > 100) {
   
    text("You can feel it", 60,100);
  } 
  textSize(width*(90/1440));
  if (mouseX > 300 && mouseY > 250) {
 
    text("In the streets", 300, 300);
  }
  
  textSize(width*(90/1440));
  if (mouseX > 500 && mouseY > 350) {
 
    text("On a day like this", 450, 500);
  }
  textSize(width*(120/1440));
  
  
  if (mouseX > 650 && mouseY > 600) {
   
    text("THE HEAT", 800, 650);
  }

 

}