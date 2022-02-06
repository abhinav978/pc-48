


var bg;
var pc,pcImg;
var enemy1,enemy2,enemy3,enemy1img,enemy2img,enemy3img;

var diamond,gold,heart,goldimg,diamondimg,heartimg;

var enemyattack1,enemyattack2,enemyattack3,attackimg1,attackimg2,attackimg3

var pcattk,pcsuper,superimg,attkimg
var ground
var pcHealth =4
var enmHealth = 4
var resetbutton,resetimg
var gameState=PLAY
var PLAY = 1
var END = 0


function preload(){

  bg=loadImage("bg 3.jpeg")
  pcImg=loadImage("pc.png")
  enemy1img=loadImage("enemy 1 copy.png")
 // enemy2img=loadImage("assets/enemy2.png")
 // enemy3img=loadImage("assets/enemy3.png")
 // diamondimg=loadImage("assets/diamond.png")
 // goldimg=loadImage("assets/gold.png")
  heartimg=loadImage("heart.png")
  //attackimg1=loadImage("assets/enemy attack 1.png")
  //attackimg2=loadImage("assets/enemy attack 2.png")
  attackimg3=loadImage("enemy attack 3.png")
  attkimg=loadImage("pc slash.png")
 // superimg=loadImage("assets/pc super.png")
 resetimg= loadImage("r.png")

}
function setup(){
createCanvas(1000,500)
 pc = createSprite (100,500,200,200)
 pc . addImage (pcImg)
 pc.scale = 1.2
 pc.setCollider("rectangle",0,0,125,150)

 enemy1= createSprite (800,425,200,200)
 enemy1 . addImage (enemy1img)
 enemy1 . scale=0.8
 enemy1.setCollider("rectangle",0,0,125,200)

// enemy2= createSprite (8000,250,200,200)
 //enemy2 . addImage (enemy2img)
 //enemy2 . scale=0.8
 //enemy3= createSprite (8000,100,200,200)
 //enemy3 . addImage (enemy3img)
// enemy3 . scale=0.8

 //diamond = createSprite (3500,250,200,200)
 //diamond . addImage (diamondimg)
 //diamond . scale=0.5
 //gold = createSprite (3500,100,200,200)
 //gold . addImage (goldimg)
 //gold . scale=0.5
 heart= createSprite (3500,425,200,200)
 heart . addImage (heartimg)
 heart . scale=0.5

 enemyattack1 = createSprite (6000,425,200,200)
 enemyattack1 . addImage (attackimg3)
 enemyattack1 . scale=0.8
 //pc . debug=true
 //enemy1 . debug=true
 //enemyattack2 = createSprite (6000,250,200,200)
 //enemyattack2 . addImage (attackimg2)
 //enemyattack2 . scale=0.8
 //enemyattack3 = createSprite (6000,100,200,200)
 //enemyattack3 . addImage (attackimg1)
 //enemyattack3 . scale=0.8
 pcattk = createSprite  (10000,250,200,200)
 pcattk . addImage (attkimg)
 pcattk . scale=0.5
// pcsuper = createSprite (10000,100,200,200)
 //pcsuper . addImage (superimg)
 //pcsuper . scale=0.8

 ground = createSprite (100,500,2000,10)
  resetbutton = createSprite (500,50,20,20)
  resetbutton . addImage (resetimg)
  resetbutton . scale= 0.1

 Attackgroup = createGroup();
 enemyAttkgroup = createGroup();
}
function draw(){

  background(bg)


      
      if(keyDown("space")&& pc.y>=389.4){
      pc.velocityY=-10
      }

      pc.velocityY=pc.velocityY+0.2

      if(keyDown("shift")&& enemy1.y>=389.4){
        enemy1.velocityY=-10
        }
  
        enemy1.velocityY=enemy1.velocityY+0.2
     
    
      if (keyDown(LEFT_ARROW)){
        pc.x=pc.x-10
        }

      if  (keyDown(RIGHT_ARROW)){
        pc.x=pc.x+10
      }
      if (keyDown("A")){
        enemy1.x=enemy1.x-10
        }

      if  (keyDown("D")){
        enemy1.x=enemy1.x+10
      }
     
    
      console.log(pc.y)
      Attack();
      enemyAttk();

      
     if(Attackgroup.isTouching(enemy1)){
       enmHealth=enmHealth-1;
       Attackgroup.destroyEach()
     }
       if(enemyAttkgroup.isTouching(pc)){
        pcHealth=pcHealth-1;
        enemyAttkgroup.destroyEach()

     }
    


    
    if(enmHealth==0||pcHealth==0){
      textSize(40)
      fill("red")
      text("Game Over",500,300)
       pc.destroy();
      enemy1.destroy();
    
   if(keyDown("space")&& pc.y>=389.4){
      pc.velocityY=-10
      }

      pc.velocityY=pc.velocityY+0.2

      if(keyDown("shift")&& enemy1.y>=389.4){
        enemy1.velocityY=-10
        }
  
        enemy1.velocityY=enemy1.velocityY+0.2
     
    
      if (keyDown(LEFT_ARROW)){
        pc.x=pc.x-10
        }

      if  (keyDown(RIGHT_ARROW)){
        pc.x=pc.x+10
      }
      if (keyDown("A")){
        enemy1.x=enemy1.x-10
        }

      if  (keyDown("D")){
        enemy1.x=enemy1.x+10
      }
     
    
      console.log(pc.y)
      Attack();
      enemyAttk();

      
     if(Attackgroup.isTouching(enemy1)){
       enmHealth=enmHealth-1;
       Attackgroup.destroyEach()
     }
       if(enemyAttkgroup.isTouching(pc)){
        pcHealth=pcHealth-1;
        enemyAttkgroup.destroyEach()

     }
    
}
    
  
      drawSprites()
      textSize(20)
      fill ("RED")
      text("Player2 Health ="+enmHealth,800,50)
      textSize(20)
      fill ("RED")
      text("Player1 Health ="+pcHealth,100,50)

      pc.collide(ground)
      enemy1.collide(ground)

      if(mousePressedOver(resetbutton)){
        pc.destroy()
        enemy1.destroy()
        reset()
        pc = createSprite (100,500,200,200)
 pc . addImage (pcImg)
 pc.scale = 1.2
 pc.setCollider("rectangle",0,0,125,150)

 enemy1= createSprite (800,425,200,200)
 enemy1 . addImage (enemy1img)
 enemy1 . scale=0.8
 enemy1.setCollider("rectangle",0,0,125,200)
     
      }
      
  

  }
    function Attack(){
      
     
      if(keyWentDown(UP_ARROW)){

      
      attk= createSprite(pc.x,pc.y, 50,20)
    
      attk.addImage(attkimg)
      attk.scale=0.5
     // attk. debug=true
      attk.velocityX= 5
      Attackgroup.add(attk)
      }
     
         else if (keyWentUp(UP_ARROW)){
        

    }
   
    }
    function reset(){
      enmHealth=10;
      pcHealth =10;
      

   }

    function enemyAttk(){
      if(keyWentDown("W")){

      
      enemyattk= createSprite(enemy1.x,enemy1.y, 50,20)
    
      enemyattk.addImage(attackimg3)
      enemyattk.scale=0.5
      //enemyattk . debug=true
      enemyattk.velocityX= -5
      enemyAttkgroup.add(enemyattk)
      }
     
         else if (keyWentUp("W")){
        

    }
  
    
      
  }
  
  
   
        
      
    

    
  

  
 
    
    
  
    
    

  
  
  
 





