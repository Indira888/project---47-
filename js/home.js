class Home{
  constructor(){
  
    }

  display(){
  camera.position.x=player.x;
  camera.position.y=player.y;


if(keyDown(LEFT_ARROW)){
  player.x-=4;
}
  
if(keyDown(RIGHT_ARROW)){
 player.x+=4;
}
if(keyDown(UP_ARROW)){
  player.y-=4;
}
if(keyDown(DOWN_ARROW)){
  player.y+=4;
}
if(player.isTouching(game1)){
  game='PingPong'
}
if(player.isTouching(game2)){
  game='SonicRun'
}
if(player.isTouching(game3)){
  game='Archery'
}
if(player.isTouching(game4)){
  game='Contra'
}
if(player.isTouching(game5)){
  game='FruitCutter'
}





  }
}