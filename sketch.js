var ocean,person,rock,branch,end;
var oceanImg,personImg,rockImg,branchImg,emdImg;
var rockg,branchG;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  oceanImg = loadImage("ocean.jpg");
  personImg = loadImage("person.png")
  rockImg = loadImage("rock.png");
  branchImg = loadImage("branch.png");
  endImg =loadImage("gameOver.png");
}

function setup(){
  createCanvas(400, 600);
// Moving background
ocean=createSprite( 200,200);
ocean.addImage(oceanImg);
ocean.velocityY = 4;



//creating ocean running
person = createSprite( 200,520);
person.addImage(personImg);
person.scale=0.25;
  
  
branchG=new Group();
rockG=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  person.x = World.mouseX;
  
  edges= createEdgeSprites();
  person.collide(edges);
  
  //code to reset the background
  if(ocean.y > 400 ){
    ocean.y = height/2;
  }
  
    createRock();
    createBranch();

      if (rockG.isTouching(person)||branchG.isTouching(person)) {
        gameState=END;
        
        gameOver=createSprite(200, 300);
        gameOver.addImage(endImg)
        gameOver.scale=0.07;
        person.destroy();
       
        
        rockG.destroyEach();
        branchG.destroyEach();
        
        rockG.destroyEach();
        branchG.setVelocityYEach(0);
        
     
    }
  }
  
  drawSprites();
 
  }



function end(){
  if(gameState===END){
   
    ocean.velocity(0);
    person.velocity(0);
    rockG.setVelocityYEach(0);
    branchG.setVelocityYEach(0);
    

  }
}


function createRock() {
  if (World.frameCount % 200 == 0) {
  var rock = createSprite(Math.round(random(50, 350),40, 10, 10));
  rock.addImage(rockImg);
  rock.scale=0.4;
  rock.velocityY = 3;
  rock.lifetime = 150;
  rockG.add(rock);
  }
}

function createBranch() {
  if (World.frameCount % 320 == 0) {
  var branch = createSprite(Math.round(random(50, 350),40, 10, 10));
  branch.addImage(branchImg);
  branch.scale=0.15;
  branch.velocityY = 3;
  branch.lifetime = 150;
  branchG.add(branch)
}
}
