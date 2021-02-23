
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bg = loadImage("GamingBackground.png")
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//ground = new Ground(width/2,height-5,width+10,10);
	platform = new Ground(width-650,height-250,width-300,10)
	roof = new Ground(width-650,height-height,width-300,10)
	hero = new Hero(200,150,200,100);
	fly = new Fly(hero.body,{x : 200, y : 50});
	monster = new Monster(600,200,100,100)

	block1 = new Block(350,200,50,50);
	block2 = new Block(350,230,50,50);
	block3 = new Block(350,240,50,50);
	block4 = new Block(350,250,50,50);
	block5 = new Block(350,260,50,50);
	block6 = new Block(350,150,50,50);

	block7 = new Block(400,200,50,50);
	block8 = new Block(400,230,50,50);
	block9 = new Block(400,240,50,50);
	block10 = new Block(400,250,50,50);
	block11= new Block(400,260,50,50);

	block12 = new Block(450,200,50,50);
	block13= new Block(450,230,50,50);
	block14 = new Block(450,240,50,50);
	block15 = new Block(450,250,50,50);
	block16 = new Block(450,260,50,50);
	block17 = new Block(450,150,50,50);
	block18 = new Block(450,100,50,50);

	block19 = new Block(500,200,50,50);
	block20 = new Block(500,230,50,50);
	block21 = new Block(500,240,50,50);
	block22 = new Block(500,250,50,50);


	
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);

  //ground.display();
  platform.display()
  roof.display()
  hero.display();
  fly.display();
  monster.display();
  drawSprites();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();

  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  block19.display();
  block20.display();
  block21.display();
  block22.display();

}

function mouseDragged() {
	Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
  }
  


