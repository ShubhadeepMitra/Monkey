var Monkey,Monkey_animation,jungle,jungle_animation,stone,banana_img,obstacle,img,back_img,invisible_ground,bananaGroup,score,stone_img,stoneGroup; 

function preload(){
  
  Monkey_animation=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  jungle_animation=loadImage("jungle.jpg");
  
  banana_img=loadImage("banana.png");
  
  stone_img=loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  
  Monkey = createSprite(50,360,1,1);
  Monkey.addAnimation("walking",Monkey_animation);
  Monkey.scale=0.1;
  
  Jungle=createSprite(200,200,1,400);
  Jungle.addImage("background",jungle_animation);
  Jungle.velocityX=-2;
  
  score=0;
  
  bananaGroup=createGroup();
  stoneGroup=createGroup();
  
  invisible_ground=createSprite(200,380,400,5);
  invisible_ground.visible=false;
    
}
function draw() {
  background(220);
  
  Monkey.depth=Jungle.depth+1;
  
 Monkey.collide( invisible_ground);
  
 //console.log(Monkey.y);
  
   if(keyDown("space") && Monkey.y >= 348){
      Monkey.velocityY = -15;
    }
  
  Monkey.velocityY = Monkey.velocityY + 0.8;
  
  if(Monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    score = score+2
  }
  
  if(stoneGroup.isTouching(Monkey)){
    Monkey.scale=0.08;
    stoneGroup.destroyEach();
  }
  
  banana();
  stones();
  
  if (Jungle.x<0){
      Jungle.x = Jungle.width/2;
  }
  drawSprites();
  
  stroke("white");
  textSize(10);
  fill("white");
  text("Score:"+score,300,40);
}

function banana(){
  if(World.frameCount % 100 === 0) {
  var banana=createSprite(400,Math.round(random(150,300)),1,1)
  banana.addImage(banana_img);
  banana.scale=0.05;
  banana.velocityX=-4;
  banana.depth=Monkey.depth+1;
  bananaGroup.add(banana);
    banana.lifetime=150;
}
}

function stones(){
  if(World.frameCount % 150 === 0) {
  var stone=createSprite(400,370,1,1)
  stone.addImage(stone_img);
  stone.scale=0.12;
  stone.velocityX=-4;
  stoneGroup.add(stone);
    stone.lifetime=150;
    
    switch(score){
       
       //defeing case 1
       case 10:Monkey.scale=0.12;
       break; 
       
       //defining case 2
       case 20:Monkey.scale=0.14;
       break;
       
       
       //defening case 3
       case 30:Monkey.scale=0.16;
       break;
       
       
       //defining case 4
       case 40:Monkey.scale=0.18;
       break;
       }
}
}
