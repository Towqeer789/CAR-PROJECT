var car,wall;

function setup() {
  createCanvas(800,400);
  
var car=createSprite(100,50,20,20);
car.shapeColor ="white"
var wall=createSprite(340,50,18,60);

var car2=createSprite(320,150,20,20);
car2.shapeColor="yellow"
var wall2=createSprite(340,150,18,60);

var car3=createSprite(320,250,20,20);
car3.shapeColor="red"
var wall3=createSprite(340,250,18,60);

var car4=createSprite(320,350,20,20);
car4.shapeColor="green"
var wall4=createSprite(340,350,18,60);
 
}


function draw() {
  background("black");  

  drawSprites();
}