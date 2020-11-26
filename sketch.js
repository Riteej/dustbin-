var Ground,papper,dustbin;





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world
	
	d=new dustbin(550,650)
p=new papper(200,650)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  d.display();
p.display();
  drawSprites();
 
}



