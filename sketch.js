
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(600,100,500);

	bob1 = new Bob(400,400);
	chain1 = new Chain(roof.body,bob1.body,-200);

	bob2 = new Bob(500,400);
	chain2 = new Chain(roof.body,bob2.body,-100);

	bob3 = new Bob(600,400);
	chain3 = new Chain(roof.body,bob3.body,0);

	bob4 = new Bob(700,400);
	chain4 = new Chain(roof.body,bob4.body,100);

	bob5 = new Bob(800,400);
	chain5 = new Chain(roof.body,bob5.body,200);

	Engine.run(engine);
  
	
}


function draw() {
//   rectMode(CENTER);
  background(0);

  fill("white");
  textSize(25);
  text("When The Balls Are Still Press Different Arrow Keys For Different Output",190,600);

  if(keyWentDown("left")){
	Body.applyForce( bob1.body, {x: bob1.body.position.x, y: bob1.body.position.y}, {x: -0.29, y: -0.45});
  }
  if(keyWentDown("right")){
	Body.applyForce( bob1.body, {x: bob1.body.position.x, y: bob1.body.position.y}, {x: -0.29, y: -0.45});
	Body.applyForce( bob2.body, {x: bob2.body.position.x, y: bob2.body.position.y}, {x: -0.29, y: -0.45});
  }
  if(keyWentDown("up")){
	Body.applyForce( bob1.body, {x: bob1.body.position.x, y: bob1.body.position.y}, {x: -0.29, y: -0.45});
	Body.applyForce( bob2.body, {x: bob2.body.position.x, y: bob2.body.position.y}, {x: -0.29, y: -0.45});
	Body.applyForce( bob3.body, {x: bob3.body.position.x, y: bob3.body.position.y}, {x: -0.29, y: -0.45});
  }
  if(keyWentDown("down")){
	Body.applyForce( bob1.body, {x: bob1.body.position.x, y: bob1.body.position.y}, {x: -0.29, y: -0.45});
	Body.applyForce( bob2.body, {x: bob2.body.position.x, y: bob2.body.position.y}, {x: -0.29, y: -0.45});
	Body.applyForce( bob3.body, {x: bob3.body.position.x, y: bob3.body.position.y}, {x: -0.29, y: -0.45});
	Body.applyForce( bob4.body, {x: bob4.body.position.x, y: bob4.body.position.y}, {x: -0.29, y: -0.45});
  }

  chain1.display();
  bob1.display();
  
  chain2.display();
  bob2.display();
  
  chain3.display();
  bob3.display();
  
  chain4.display();
  bob4.display();
  
  chain5.display();
  bob5.display();

  roof.display();
}



