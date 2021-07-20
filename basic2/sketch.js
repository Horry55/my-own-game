const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies
var g1
var engine,world,ground,ball;
var button3;

function preload(){
  b1I=loadImage("click.png")

}

function setup() {
  //Canvas
  createCanvas(displayWidth,displayHeight-140);
  //Matte.js
  engine=Engine.create();
  world=engine.world
  //Actor
  pc=new pc(-200,1300,20);
  //Npc grounds
  g1=new Bar(200,1400,1200,20);
  g2=new Bar(600,1000,350,20);
  g3=new  Bar(10,1200,800,10);
  g4=new  Bar(800,1400,110,20);
  g5=new  Bar(815,1325,80,10);
  g6=new Bar(2100,635,2500,10);
  g7=new Bar(2100,2080,2500,10);
  
  //Npc walls
  w1=new  Bar(795,980,10,700)
  w2=new  Bar(-400,1010,20,800)
  w3=new Bar(200,620,1200,20);
  w4=new  Bar(850,980,10,700)
  w5=new  Bar(850,1740,10,700)
  w6=new  Bar(1505,1880,300,790)
  w7=new  Bar(1505,975,300,720);
 //laser
  l1=new  Laser(10,1210,800,10)
  l2=new  Laser(785,980,10,700)
  l3=new  Laser(600,1400,370,20);
  l4=new  Laser(200,625,1200,10);
  l5=new  Laser(-395,1010,10,800);
  l6=new  Laser(905,985,100,690);
  l7=new  Laser(905,1775,100,600);
  l8=new  Laser(1005,965,100,650);
  l9=new  Laser(1005,1760,100,650);
  l10=new  Laser(1105,1785,100,560);
  l11=new  Laser(1105,985,100,720);
  l12=new  Laser(1205,1000,100,740);
  l13=new  Laser(1205,1900,100,740);
  l14=new  Laser(1305,975,100,720);
  l15=new  Laser(1305,1880,100,790);
  
//buttons
  b1=createSprite(600,750,350,20)
   //to draw sprite
  b1.addImage(b1I);
}

function draw() {
  rectMode(CENTER);
  //background
  background(0);  
  //Engine
  Engine.update(engine);
  //Actor displayed
  pc.display();
  //Npc grounds Displayed
  g1.display();
  g2.display()
  g3.display()
  g4.display()
  g5.display()
  g6.display()
  g7.display()
  //Npc wall Displayed
  w1.display();
  w2.display();
  w3.display();
  w4.display();
  w5.display();
  w6.display();
  w7.display();
   //laser displayed
  l1.display();
  l2.display();
  l3.display();
  l4.display();
  l5.display();
  l6.display();
  l7.display();
  l8.display();
  l9.display();
  l10.display();
  l11.display();
  l12.display();
  l13.display();
  l14.display();
  l15.display();
  //l16.display();
 // l17.display();
  
  b1.scale=0.5;
  //text
   textSize(100)
   fill("grey")
   text(">>>>>>",430,1350)
   textSize(40)
   text("LEVEL:1-ESCAPE",-390,1250)
   textSize(30)
   text("INSTRUCTIONS:-",-390,1280)
   textSize(30)
   text("Press the button to escape",400,700)
   textSize(20)
   text("1-Up arrow to jump",-390,1300)
   text("2-left arrow to go left",-390,1320)
   text("3-Right arrow to go right",-390,1340)
   text("4-Beware of laser",-390,1360)
   text("Hint-Go up and again come down to escape",-390,1380)
   textSize(40)
   text("YOU WON level 3 comming soon....",1405,1400)

   //button 
   if(mousePressedOver(b1)){
    Matter.Body.setStatic(g2.body,false);
   }

  drawSprites();
  
  
  if(keyWentDown(UP_ARROW)){
    Matter.Body.applyForce(pc.body,pc.body.position,{x:0,y:-200});
  }

  if(keyDown(RIGHT_ARROW)){
    Matter.Body.applyForce(pc.body,pc.body.position,{x:10,y:0});
  }

  if(keyDown(LEFT_ARROW)){
    Matter.Body.applyForce(pc.body,pc.body.position,{x:-10,y:0});
  }
  //collide
  if(pc!==undefined&&l1!==undefined){ 
     var collision=Matter.SAT.collides(pc.body,l1.body); 
     if(collision.collided){ pc.remove(); } } if(pc!==undefined&&l1!==undefined) { 
         var collision=Matter.SAT.collides(pc.body,l1.body); 
         if(collision.collided){
             pc.remove(); } }

              if(pc!==undefined&&l2!==undefined){ 
                 var collision=Matter.SAT.collides(pc.body,l2.body); 
              if(collision.collided){ pc.remove(); } } if(pc!==undefined&&l2!==undefined) { 
             var collision=Matter.SAT.collides(pc.body,l2.body); 
             if(collision.collided){
                pc.remove(); } }

                if(pc!==undefined&&l3!==undefined){ 
                 var collision=Matter.SAT.collides(pc.body,l3.body); 
                   if(collision.collided){ pc.remove(); } } if(pc!==undefined&&l3!==undefined) { 
                     var collision=Matter.SAT.collides(pc.body,l3.body); 
                   if(collision.collided){
                       pc.remove(); } }

                      if(pc!==undefined&&l4!==undefined){ 
                       var collision=Matter.SAT.collides(pc.body,l4.body); 
                       if(collision.collided){ pc.remove(); } } if(pc!==undefined&&l1!==undefined) { 
                         var collision=Matter.SAT.collides(pc.body,l4.body); 
                         if(collision.collided){
                            pc.remove(); } }
 
                            if(pc!==undefined&&l5!==undefined){ 
                             var collision=Matter.SAT.collides(pc.body,l5.body); 
                             if(collision.collided){ pc.remove(); } } if(pc!==undefined&&l1!==undefined) { 
                                var collision=Matter.SAT.collides(pc.body,l5.body); 
                                if(collision.collided){
                                   pc.remove(); } }

                                   if(pc!==undefined&&l6!==undefined){ 
                                    var collision=Matter.SAT.collides(pc.body,l6.body); 
                                  if(collision.collided){ pc.remove(); } } if(pc!==undefined&&l6!==undefined) { 
                                      var collision=Matter.SAT.collides(pc.body,l6.body); 
                                      if(collision.collided){
                                         pc.remove(); } }

                                         if(pc!==undefined&&l7!==undefined){ 
                                          var collision=Matter.SAT.collides(pc.body,l7.body); 
                                        if(collision.collided){ pc.remove(); } } if(pc!==undefined&&l7!==undefined) { 
                                            var collision=Matter.SAT.collides(pc.body,l7.body); 
                                            if(collision.collided){
                                               pc.remove(); } }

                                               if(pc!==undefined&&l8!==undefined){ 
                                                var collision=Matter.SAT.collides(pc.body,l8.body); 
                                              if(collision.collided){ pc.remove(); } } if(pc!==undefined&&l8!==undefined) { 
                                                  var collision=Matter.SAT.collides(pc.body,l8.body); 
                                                  if(collision.collided){
                                                     pc.remove(); } }

                                                     if(pc!==undefined&&l9!==undefined){ 
                                                      var collision=Matter.SAT.collides(pc.body,l9.body); 
                                                    if(collision.collided){ pc.remove(); } } if(pc!==undefined&&l9!==undefined) { 
                                                        var collision=Matter.SAT.collides(pc.body,l9.body); 
                                                        if(collision.collided){
                                                           pc.remove(); } }

                                                           if(pc!==undefined&&l10!==undefined){ 
                                                            var collision=Matter.SAT.collides(pc.body,l10.body); 
                                                          if(collision.collided){ pc.remove(); } } if(pc!==undefined&&l10!==undefined) { 
                                                              var collision=Matter.SAT.collides(pc.body,l10.body); 
                                                              if(collision.collided){
                                                                 pc.remove(); } }

                                                                 if(pc!==undefined&&l11!==undefined){ 
                                                                  var collision=Matter.SAT.collides(pc.body,l11.body); 
                                                                if(collision.collided){ pc.remove(); } } if(pc!==undefined&&l11!==undefined) { 
                                                                    var collision=Matter.SAT.collides(pc.body,l11.body); 
                                                                    if(collision.collided){
                                                                       pc.remove(); } }

                                                                       if(pc!==undefined&&l12!==undefined){ 
                                                                        var collision=Matter.SAT.collides(pc.body,l12.body); 
                                                                      if(collision.collided){ pc.remove(); } } if(pc!==undefined&&l12!==undefined) { 
                                                                          var collision=Matter.SAT.collides(pc.body,l12.body); 
                                                                          if(collision.collided){
                                                                             pc.remove(); } }

                                                                             if(pc!==undefined&&l13!==undefined){ 
                                                                              var collision=Matter.SAT.collides(pc.body,l13.body); 
                                                                            if(collision.collided){ pc.remove(); } } if(pc!==undefined&&l13!==undefined) { 
                                                                                var collision=Matter.SAT.collides(pc.body,l13.body); 
                                                                                if(collision.collided){
                                                                                   pc.remove(); } }

                                                                                   if(pc!==undefined&&l14!==undefined){ 
                                                                                    var collision=Matter.SAT.collides(pc.body,l14.body); 
                                                                                  if(collision.collided){ pc.remove(); } } if(pc!==undefined&&l14!==undefined) { 
                                                                                      var collision=Matter.SAT.collides(pc.body,l14.body); 
                                                                                      if(collision.collided){
                                                                                         pc.remove(); } }

                                                                                         if(pc!==undefined&&l15!==undefined){ 
                                                                                          var collision=Matter.SAT.collides(pc.body,l15.body); 
                                                                                        if(collision.collided){ pc.remove(); } } if(pc!==undefined&&l15!==undefined) { 
                                                                                            var collision=Matter.SAT.collides(pc.body,l15.body); 
                                                                                            if(collision.collided){
                                                                                               pc.remove(); } }
                  }
            

      


