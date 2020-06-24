
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin
var paper,ground
var line1,line2,line3,line4

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;
  paper = new Paper(200,400,5);
  ground = new Ground (600,height,1200,20)
	line1 = createSprite(600,650,150,10)
	line1.shapeColor=("red");
	line2 = createSprite(525,600,10,100)
	line2.shapeColor=("red");
	line3 = createSprite(675,600,10,100)
  line3.shapeColor=("red")
  
  line4 = createSprite(200,600,100,5)


	Engine.run(engine);
  
}


function draw() {

  function keyPressed (){
    if (keyCode === UP_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    }
  }

  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  paper.display();
  ground.display();
  drawSprites();
 
}



