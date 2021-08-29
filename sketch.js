//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var myengine,myworld;
var ground, ball;

function setup(){
    var canvas = createCanvas(800,400);
   
    myengine = Engine.create();
    myworld = myengine.world;

    //Code for brown ground
    var ground_options ={
        isStatic: true,
      
    }
    ground = Bodies.rectangle(400,390,800,20,ground_options);
    World.add(myworld,ground);
    console.log(ground);


    // Code for ball
    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(590,100,20, ball_options);
    World.add(myworld,ball);
    
}

function draw(){
    background("lightgreen");
    Engine.update(myengine);
    rectMode(CENTER);

    fill("brown")
    rect(ground.position.x,ground.position.y,800,20);
    
   
    fill("red")
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}
