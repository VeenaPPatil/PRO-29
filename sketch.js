const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;


var engine, world;
var ground,obj,stand;
var block1,block2,block3,block4;
var block5,block6,block7;
var block8,block9;
var block10;

function preload(){
   poly=loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world= engine.world;

  ground = new Ground(400,390,800,10);
  obj = Bodies.circle(50,200,20);
  World.add(world,obj);
  stand = new Ground(350,300,195,20);
 
  block1 = new Box(280,270,40,40);
  block2 = new Box(325,270,40,40);
  block3 = new Box(370,270,40,40);
  block4 = new Box(415,270,40,40);

  block5 = new Box(302,229,40,40);
  block6 = new Box(349,229,40,40);
  block7 = new Box(396,229,40,40);

  block8 = new Box(325,188,40,40);
  block9 = new Box(373,188,40,40);

  block10 = new Box(350,147,40,40);

  slingShot = new SlingShot(this.obj,{x:100,y:200});

}

function draw() {
  background(255,255,255);
  Engine.update(engine);

  imageMode(CENTER);
  image(poly,obj.position.x,obj.position.y,40,40);

  stand.display();
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  fill("pink");

  block5.display();
  block6.display();
  block7.display();
  fill("blue");

  block8.display();
  block9.display();
  fill("yellow");

  block10.display();
  fill("purple");

  slingShot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.obj,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}