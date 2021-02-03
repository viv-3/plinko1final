const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = []
var plinkos = []
var divisions = []

var particle
var score = 0
var turn = 0



var divisonHeight = 300


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(135,790,700,20);


 
  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new Division(k, height-divisonHeight/2, 10, divisonHeight))
  }

  for (var j = 40; j<=innerWidth; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }

 for (var j = 15; j<=width-10; j=j+50)
 {
   plinkos.push(new Plinko(j,175))
 }

 if(frameCount%60===0){
   particles.push(new Particle(random(width/2-10, width/2+10), 10,10))
 }
  
}

function draw() {
  background(0,0,0); 
  Engine.update(engine)
  for(var i = 0; i<plinkos.length;i++){plinkos[i].display()}

  for(var b = 0; b<particles.length;b++){particles[b].display()}

  for(var a = 0; a<divisions.length;a++){divisions[a].display()}
  
  ground.display();

  
  drawSprites();
}

