var tom,tom1,tom2,tom3;
var jerry,jerry1,jerry2,jerry3;
var garden,gardenImg;

function preload() {
    //load the images here
    jerry1 = loadAnimation("images/mouse1.png");
    jerry2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry3 = loadAnimation("images/mouse4.png");
    tom1 = loadAnimation("images/cat1.png")
    tom2 = loadAnimation("images/cat2.png","images/cat3.png");
    tom3 = loadAnimation("images/cat4.png");
gardenImg = loadAnimation("images/garden.png");

}

function setup(){
    createCanvas(600,400);
    //create tom and jerry sprites here
garden= createSprite(300,200);
garden.addAnimation("background",gardenImg);
garden.scale = 0.6;
tom = createSprite(450,320);
tom.addAnimation("sleeping",tom1);
tom.scale = 0.08;
jerry = createSprite(150,320);
jerry.addAnimation("eating",jerry1);
jerry.scale = 0.08;
}

function draw() {


    background(255);
  keyPressed();

    
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width + jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("catching",tom3);
        tom.changeAnimation("catching");
        jerry.addAnimation("caught",jerry3)
        jerry.changeAnimation("caught");
    }
    drawSprites();
}


function keyPressed(){
if (keyCode===LEFT_ARROW){
    tom.velocityX = -0.5;
    tom.addAnimation("walking",tom2);
    tom.changeAnimation("walking");
    jerry.addAnimation("gettingScared",jerry2)
    jerry.changeAnimation("gettingScared");
}
}
  //For moving and changing animation write code here


