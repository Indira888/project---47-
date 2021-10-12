var pimg,mimg,nimg,simg,aimg,cimg,map;
var player,game1,game2,game3,game4,game5;
var game="";
//var flag=0;
function preload(){
  pimg=loadImage("Image/blank img.png");
  mimg=loadImage("Image/pingpong.jpeg");
  nimg=loadImage("Image/fruit cut.png");
  simg=loadImage("Image/sonic run.jfif");
  aimg=loadImage("Image/archery.jfif");
  cimg=loadImage("Image/contra.png");
  map=loadImage("Image/the map.png");
  //playerImg = loadAnimation("Image/Fox(1).png","Image/Fox(2).png","Image/Fox(3).png","Image/Fox(4).png","Image/Fox(5).png","Image/Fox(6).png","Image/Fox(7).png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  homepage=new Home();
  player=createSprite(700,700); 
  //player.addAnimation("fox",playerImg);
  game1=createSprite(700,0);
  game2=createSprite(100,300);
  game3=createSprite(100,700);
  game4=createSprite(1200,700);
  game5=createSprite(1200,200);
  game1.addImage(mimg);
  game1.scale=0.25;
  game2.addImage(simg);
  game2.scale=0.5;
  game3.addImage(aimg);
  game3.scale=1;
  game4.addImage(cimg);
  game4.scale=0.3;
  game5.addImage(nimg); 
  game5.scale=0.4;

}

function draw() {
  background(255,255,255);  
  homepage.display();
  if(game==='SonicRun'){
    game=""
    window.open('https://indira888.github.io/project---44-sonic-run-input-/index.html');
    player.x=600;
    player.y=600;
  }
  if(game==='PingPong'){
    game=""
    window.open('https://studio.code.org/projects/gamelab/zodatL7LeFInlMjuGkNICYzlgjY4uT3fZw3HfXrwZRw');
    player.x=600;
    player.y=600;

  }
  if(game==='Contra'){
    game=""
    window.open('https://studio.code.org/projects/gamelab/CQ6mLKANLv1crgYQYBp9nx4ipNjS1N7frs9n4iGRRwM');
    player.x=600;
    player.y=600;
  }
  if(game==='Archery'){
    game=""
    window.open('https://studio.code.org/projects/gamelab/qA7-ztrU2ZMtRMfeS2iRgC2jtdG2TA3zPIKY3vYhBfc');
     player.x=600;
    player.y=600;
  }
  if(game==='FruitCutter'){
    game=""
    window.open('https://editor.p5js.org/scs707464indira/full/sI7RXBajU');
    player.x=600;
    player.y=600;
  }

  drawSprites();
  
}