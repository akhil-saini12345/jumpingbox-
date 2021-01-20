var canvas;
var music;
var bluePad,greenPad,yellowPad,redPad,blackPad;
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
canvas = createCanvas(800,500);
bluePad = createSprite(240,480,160,50);
bluePad.shapeColor = "blue";
redPad = createSprite(80,480,160,50);
redPad.shapeColor = "red";
greenPad = createSprite(400,480,160,50);
greenPad.shapeColor = "green";
yellowPad = createSprite(720,480,160,50);
yellowPad.shapeColor = "yellow"
blackPad = createSprite(560,480,160,50);
blackPad.shapeColor = "black"
ball = createSprite(random(20,780),20,20,20);
ball.velocityX =10;
ball.velocityY =5;
}

function draw() {
background("purple")
createEdgeSprites();

ball.shapeColor = "white";

if (ball.x<10 || ball.x>790) {
ball.velocityX=-1*ball.velocityX;
}
if (ball.y<10) {
ball.velocityY=-1*ball.velocityY;
}

ball.isTouching(bluePad);
ball.isTouching(blackPad);
ball.isTouching(redPad);
ball.isTouching(greenPad);
ball.isTouching(yellowPad);

if (ball.bounceOff(bluePad)){
 ball.shapeColor = "blue";
 music.play();
}
if(ball.bounceOff(redPad)){
 ball.shapeColor = "red";
}
if(ball.bounceOff(greenPad)){
 ball.shapeColor = "green";
}


if(ball.bounceOff(yellowPad)){

 ball.shapeColor = "yellow";
}
if(ball.isTouching(blackPad)){

    ball.shapeColor = ("black");
    ball.velocityX = 0;
    ball.velocityY = 0;
    music.stop();
   }
    drawSprites();
}
