var box


function setup() {
  createCanvas(800,400);
box=createSprite(400,200,50,50)
}

function draw() 
{
  background(30);

if(keyDown(RIGHT_ARROW)){
box.x=box.x+5
}

if(keyDown(LEFT_ARROW)){
  box.x-=5
  }






  drawSprites();





}




