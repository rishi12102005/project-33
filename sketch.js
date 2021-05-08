const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;


function preload(){
snowFallBack = loadImage("snow3.jpg");
}
function setup(){
  var canvas = createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  snow = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),50,50,random(0.0004,0.5))
  snow2 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),45,45,random(0.0004,0.5));
  snow3 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),10,30,random(0.0004,0.5));
  snow4 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),20,30,random(0.0004,0.5));
snow5 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),50,50,random(0.0004,0.5));
snow6 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),60,60,random(0.0004,0.5));
snow7= new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),30,30,random(0.0004,0.5));
snow8 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),10,15,random(0.0004,0.5));
snow12 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),20,20,random(0.0004,0.5));
snow10 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),30,45,random(0.0004,0.5));
snow11 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),40,45,random(0.0004,0.5));
snow13 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),30,50,random(0.0004,0.5));
snow12 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),30,50,random(0.0004,0.5));
snow14 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),30,50,random(0.0004,0.5));
snow15 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),30,50,random(0.0004,0.5));
snow16 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),30,50,random(0.0004,0.5));

snow17 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),30,50,random(0.0004,0.5));
snow112 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),30,50,random(0.0004,0.5));

snow18 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),30,50,random(0.0004,0.5));
snow21 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),30,50,random(0.0004,0.5));
snow20 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),30,50,random(0.0004,0.5));
snow30 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),30,50,random(0.0004,0.5));
snow31 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),30,50,random(0.0004,0.5));
snow32 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),30,50,random(0.0004,0.5));
snow33 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),30,50,random(0.0004,0.5));
snow34 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),30,50,random(0.0004,0.5));
snow35 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),30,50,random(0.0004,0.5));
snow36 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),30,50,random(0.0004,0.5));
snow37 = new Snow(Math.round(random(0,1200)),Math.round(random(0,200)),30,50,random(0.0004,0.5));



}
function draw(){
  background(snowFallBack);
  Engine.update(engine);

  snow.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow12.display();
  snow10.display();
  snow11.display();
  snow12.display();
  snow13.display();
  snow14.display();
  snow15.display();
  snow16.display();
  snow17.display();
  snow18.display();
  snow112.display();
  snow20.display();
  snow21.display();
  snow30.display();
  snow31.display();
  snow32.display();
  snow33.display();
  snow34.display();
  snow35.display();
  snow36.display();
  snow37.display();




}