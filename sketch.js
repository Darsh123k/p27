var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
roof=new Roof(400,20,120,40)

bob1=new Bob(400,100,10,PI/2)
bob2=new Bob(410,100,10,PI/2)
bob3=new Bob(420,100,10,PI/2)
bob4=new Bob(430,100,10,PI/2)
bob5=new Bob(440,100,10,PI/2)

rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0)
rope2=new Rope(bob2.body,roof.body,-bobDiameter*2,0)
rope3=new Rope(bob3.body,roof.body,-bobDiameter*2,0)
rope4=new Rope(bob4.body,roof.body,-bobDiameter*2,0)

rope5=new Rope(bob5.body,roof.body,-bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3,display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



