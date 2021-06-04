var bgImg;
var cat,catimg1,catimg2,catimg3;
var mouse,mouseimg1,mouseimg2,mouseimg3;
function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    catimg1=loadAnimation("images/cat1.png");
    mouseimg1=loadAnimation("images/mouse1.png");
    catimg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseimg2=loadAnimation("images/mouse2.png"," images/mouse3.png");
    catimg3=loadAnimation("images/cat4.png");
    mouseimg3=loadAnimation("images/mouse4.png")
    
    
}

function setup(){
    createCanvas(600,400);
    //create tom and jerry sprites here
    cat=createSprite(500,300);
    cat.addAnimation("catSleeping",catimg1);
    cat.scale=0.1;
    cat.velocityX=0;
    cat.velocityY=0;

    

    mouse=createSprite(70,300);
    mouse.addAnimation("mouseStanding",mouseimg1);
    mouse.scale=0.1;
    mouse.velocityX=0;
    mouse.velocityY=0;

    
}

function draw() {

    background(bgImg);
    
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < (cat.width-mouse.width)/2){
    cat.velocityX=0;
    cat.addAnimation("catLastImage",catimg3);
    cat.x=130;
    cat.scale=0.1;
    cat.changeAnimation("catLastImage");

    mouse.addAnimation("mouseLastImage",mouseimg3);
    mouse.scale=0.1;
    mouse.changeAnimation("mouseLastImage");

    }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("catRunning",catimg2);
      cat.changeAnimation("catRunning");
      mouse.addAnimation("mouseTeasing",mouseimg2);
      mouse.frameDelay=25;
      mouse.changeAnimation("mouseTeasing");
      
  }


}
