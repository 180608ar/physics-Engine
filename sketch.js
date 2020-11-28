const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;

function setup(){
  createCanvas(600,600);
   
  myEngine = Engine.create();
  myWorld = myEngine.world;
}

function draw(){
  Engine.update(myEngine)
}


