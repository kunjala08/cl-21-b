var bullet,wall;
var speed,weight;
var wall,thicknesss;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(70, 200, 50, 20);
  bullet.shapeColor="white";

  thickness=random(22,83);

  speed=random(223,321);

  weight=random(30,52);

  bullet.velocityX=speed;

  wall=createSprite(1200,200,thicknesss,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background("black");  
  if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thicknesss*thicknesss*thicknesss);

  if ( damage>10 ){
  wall.shapeColor=color(255,0,0)
  }
  if( damage<10){
   wall.shapeColor=color(0,255,0)

  }
  }
  drawSprites();
}
function hasCollided(Lbullet,Lwall){
 bulletRightEdge=Lbullet.x+Lbullet.width;
 wallLeftEdge=Lwall.x;
 if(bulletRightEdge>=wallLeftEdge){
  return true;
 }
 return false;
}