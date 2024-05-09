
function preload(){

  font = loadFont('fonts/Alegreya-BlackItalic.ttf');

  font2 = loadFont('fonts/Alegreya-BoldItalic.ttf');

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#FFFDD0');
    textAlign(CENTER);
    textFont(font);
    textSize(width*(50/1440));
    fill('#F04F5D');
    text('Every day gets hotter ', width/2.0, height/3.5);
   text('than the one before', width/2.03, height/2.5);
    text('It feel like summer', width/2.0, height/1.4);

    
  }

  
    

  
  
  function draw() {

    
    textFont(font2);
    textSize(width*(30/1440));
    fill('#FA6E0C');
    text('This feel like summer', mouseX,mouseY);
    fill('#FFFDD0');
    textAlign(CENTER);
    text("I feel like summer", width/2, height/2);
  }