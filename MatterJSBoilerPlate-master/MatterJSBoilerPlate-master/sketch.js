
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2,
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	dustbin = new Dustbin(200,200, 100,100)
	paper = new PaperObject(200,200)
	gr = new Ground(600,390)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if(keyDown(UP_ARROW)){
	paper.velocityY = -5
}

paper.velocityY = paper.velocityY + 1


  drawSprites();
  dustbin.display()
  paper.display()
  gr.display();

//   if(keyDown(UP_ARROW)){
// 	  paper.velocityY = -5
//   }

//   paper.velocityY = paper.velocityY + 1

}



