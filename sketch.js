var player, alien, alienGroup, score = 0

function setup() {
  createCanvas(800,400);
  player= createSprite(40, 200, 30, 30);
  alienGroup = new Group()
}

function draw() {
  background(0);
  text("Score:"+score,50,10)  
  if(keyDown("up")){
    player.y= player.y - 10
  }
  if(keyDown("down")){
    player.y= player.y + 10
  }
  if(player.x > 800 || player.x < 0){
    player.x = 40
    player.velocityX = 0
  }
  
  drawSprites();
  spawnAliens();
  for(var i=0;i<alienGroup.length;i++){
    if(alienGroup[i].isTouching(player)){
      alienGroup[i].destroy();
      score = score + 1
    }
  }
}
function spawnAliens(){
  if (frameCount % 15 === 0){
    var randX = Math.round(random(0,400));
   alien = createSprite(800,randX,20,20);
    
     //generate random obstacles                                                                                   
     
     alien.velocityX = -5 - score;
     alienGroup.add(alien); 
     alien.lifetime = 500
     }
    
    //add each obstacle to the group
     
  if (frameCount % 25 === 0){
    var randA = Math.round(random(500,800));
   alien = createSprite(randA,600,20,20);
    
     //generate random obstacles                                                                                   
     
     var randB = Math.round(random(-5,-15));
     alien.velocityB = randB;
     alienGroup.add(alien); 
     alien.lifetime = 500
     }
    
    //add each obstacle to the group
    }
  
     
 