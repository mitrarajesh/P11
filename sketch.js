var runner, running;
var track, trackImage;
var rightBoundary, leftBoundary;

createEdgeSprites();

function preload(){
  running = loadAnimation("Runner-1.png", "Runner-2.png");
  trackImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  
  track = createSprite(200,200);
  track.addImage(trackImage);
  track.velocityY = 4;
  track.scale = 1.2;

  rightBoundary = createSprite(370,200,20,400);
  leftBoundary = createSprite(34,200,22,400);
  rightBoundary.visible = false;
  leftBoundary.visible = false;

  runner = createSprite(210,360,10,10);
  runner.addAnimation("running", running);
  runner.scale = 0.06;
  runner.bounciness = 5;

}

function draw() {
  background(0);

  //leftBoundary.bounceOff(runner);
  //rightBoundary.bounceOff(runner);

  if(track.y > 400){
    track.y = height/2;
  }

  if (World.mouseX > leftBoundary.x && World.mouseX < rightBoundary.x)   {
    runner.x = World.mouseX;
  }

  //runner.bounceOff(leftBoundary);
  //runner.bounceOff(rightBoundary);

  //runner.bounceOff(leftEdge);
  //runner.bounceOff(rightEdge);

  //runner.x = World.mouseX;

  runner.collide(leftBoundary);
  runner.collide(rightBoundary);

  drawSprites();

}
