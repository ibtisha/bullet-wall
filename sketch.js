var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);

  bullet = createSprite(100,200,40,30);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  
 
  speed=random(223,321);
  weight = random(30,52);

  bullet.velocityX=speed;

  
 
}

function draw() {
  background("black"); 

  if (hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage=0.5 *weight * speed* speed/(thickness * thickness* thickness);
  
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }


  }

  drawSprites();
}

function hasCollided(){
  if (bullet.x - wall.x < wall.width/2 + bullet.width/2
    && wall.x - bullet.x < wall.width/2 + bullet.width/2
    && bullet.y - wall.y < wall.height/2 + bullet.height/2
    && wall.y - bullet.y < wall.height/2 + bullet.height/2) {
      return true;
    }
    else {
      return false;
    }
  } 