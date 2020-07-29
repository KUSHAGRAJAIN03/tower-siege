const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,ground2,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var b17,b18,b19,b20,b21,b22,b23,b24,b25,polygon,polygonImg,slingShot;
var score =0;

function preload()
{
  polygonImg = loadImage("hexagan.png");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(380,380,230,10);
  b1 = new box(290,355,30,40);
  b2 = new box(320,355,30,40);
  b3 = new box(350,355,30,40);
  b4 = new box(380,355,30,40);
  b5 = new box(410,355,30,40);
  b6 = new box(440,355,30,40);
  b7 = new box(470,355,30,40);
  b8 = new box(320,315,30,40);
  b9 = new box(350,315,30,40);
  b10 = new box(380,315,30,40);
  b11 = new box(410,315,30,40);
  b12= new box(440,315,30,40);
  b13= new box(350,275,30,40);
  b14= new box(380,275,30,40);
  b15= new box(410,275,30,40);
  b16= new box(380,235,30,40);
  ground2=new Ground(600,200,190,10);
  b17= new box(540,175,30,40);
  b18= new box(570,175,30,40);
  b19= new box(600,175,30,40);
  b20= new box(630,175,30,40);
  b21= new box(660,175,30,40);
  b22= new box(570,135,30,40);
  b23= new box(600,135,30,40);
  b24= new box(630,135,30,40);
  b25= new box(600,95,30,40);



  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new Sling_shot(polygon,{x:100,y:200});
}

function draw() {

  if (background("black"))
  {
    background("black");
  }

  time();

  Engine.update(engine);
  text("Score : "+score,20,30);

  b1.Score();
  b2.Score();
  b3.Score();
  b4.Score();
  b5.Score();
  b6.Score();
  b7.Score();
  b8.Score();
  b9.Score();
  b10.Score();
  b11.Score();
  b12.Score();
  b13.Score();
  b14.Score();
  b15.Score();
  b16.Score();
  b17.Score();
  b18.Score();
  b19.Score();
  b20.Score();
  b21.Score();
  b22.Score();
  b23.Score();
  b24.Score();
  b25.Score();


  ground1.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  ground2.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();

  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,40,40)
  slingShot.display();
  fill("white");
  text("DRAG THE HEXAGON AND RELEASE TO LAUNCH IT TOWARDS BLOCKS",100,50);
  fill("white");
  text("PRESS SPACE TO TRY AGAIN :)",500,300);

  
}
function mouseDragged() {
	Body.setPosition(polygon,{x:mouseX,y:mouseY});
 }
 function mouseReleased() {
	slingShot.fly();
 }

 function keyPressed()
 {
   slingShot.attach(polygon);
 }

 async function time(){
  var time=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var time_json=await time.json();
  var date_time=time_json.datetime
  var hour = date_time.slice(11,13);
  if (hour<6 || hour>18)
  {
       background("yellow");
  }
  else{
        background("black");
  }
 // console.log(hour);
}