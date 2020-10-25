// assigning variables:
var PLAY=1;
var END=0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  // creating sprites and giving animations or images:
  // monkey:
  monkey=createSprite(100,400,10,10);
  monkey.addAnimation("monkey running ",monkey_running);
  monkey.scale=0.1;
  
  // ground:
  ground=createSprite(300,440,600,10);
  ground.x=ground.width/2;
  console.log(ground.x);

  monkey.debug=false;
 //monkey.setCollider("circle",100,10,40)
  
  // creating groups:
  obstaclesGroup=createGroup();
  bananaGroup=createGroup();
  
}


function draw() {
  background("pink");
  
  // jumping monkey when space is pressed:
  if(keyDown("space") && monkey.y>=390){
    monkey.velocityY=-18;
  }
  // adding gravity to the monkey:
  monkey.velocityY=monkey.velocityY+0.8;
  
  
  
  
  // holding monkey to the ground:
  monkey.collide(ground);
  
  obstacles();
  food();
  drawSprites();
  
  var survivalTime=0;
//  stroke("black");
 // textSize(20);
 // fill("black")
 // text("Score:"+score,400,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime= Math.ceil (frameCount/frameRate());
  text("Survival Time:"+ survivalTime,100,50);
  
  
}

function food(){
// adding code for monkey's bananas:
if(World.frameCount%80 ===0){
   //generate random bananas:
    var rand = Math.round(random(120,200));
   console.log(rand);
  
  banana = createSprite(600,200,10,10);
  banana.addImage("banana",bananaImage);
  banana.scale=0.1;
  banana.velocityX=-10;
  banana.lifetime=60;
  
  banana.y=Math.round(random(150,300));
  bananaGroup.add(banana);
  
}
  
}

function obstacles(){
  
  if(World.frameCount%300===0){
 //   var rand=Math.round(random(300,500));
    obstacle=createSprite(200,410,10,10);
    obstacle.addImage("obstacles",obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX = -6;
    obstacle.lifetime=100;
  }
}






