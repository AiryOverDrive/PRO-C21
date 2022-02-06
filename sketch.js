
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, wall;
var box1,box2,box3,box4;

function preload()
{
	
}

function setup() {

	createCanvas(1000,400);

	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.

	ground = new Ground(500,395,1000,10);
	box1 = new Ground(925,300,150,10);
	box2 = new Ground(850,280,10,50);
	box4 = new Ground(850,120,10,50);
	box3 = new Ground(925,100,150,10);
	wall = new Ground(995,200,10,400)

	var ball_options ={
	isstatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
	}
                                  
	ball = Bodies.circle(100,200,20,ball_options);
	World.add(world, ball)

	Engine.run(engine);

	ellipseMode(RADIUS);
	rectMode(CENTER);
  
}


function draw() {

	background(0);
	ground.show();
	box1.show()
	box2.show()
	box3.show()
	box4.show()
	wall.show()
	ellipse(ball.position.x,ball.position.y,20)
	drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:80,y:-75})
	}
}



