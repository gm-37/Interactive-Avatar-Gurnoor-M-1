/* VARIABLES */
let eyeWidth = 50;
let eyeHeight = 40;
let pupilWidth = 22;
let pupilHeight = 25;
let toggle = false;

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400,400); 

  //sets the background color
  background(204,153,255); 
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);

  //Face
  fill(204,153,0);
  ellipse(width/2,height/2,175,200);

  //Eyes
  if (mouseIsPressed) {
     //Eyes closed
     fill(0);
     ellipse(170,170,eyeWidth,eyeHeight/8);
     ellipse(230,170,eyeWidth,eyeHeight/8);
   } else {
    //eyes open
  fill(255,255,255);
  ellipse(170,170,eyeWidth,eyeHeight);
  ellipse(230,170,eyeWidth,eyeHeight);
  //Pupils
  fill(102,51,0);
  ellipse(170,170,pupilWidth,pupilHeight);
  ellipse(230,170,pupilWidth,pupilHeight);
  }
  
  //Mouth
  fill(255,102,102);
  arc(200,230,50,50,0,180);

  //Text
  fill(0,0,0);
  textSize(15);
  text("We will customize this \ntext later on in the \nproject to reflect your avatar.", 25, 30);
  text("Click to see me \nwink and smile. \nClick again to make \nmy face neutral.", 260, 315);
}