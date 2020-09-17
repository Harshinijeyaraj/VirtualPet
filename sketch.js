//Create variables here

var dog,happydog,foodsupply;
var database;

function preload()
{
	//load images here
}

function setup() {
  database = firebase.database();
  createCanvas(500,500);
  dog = createSprite(250,250,20,20);
 

  var dogposition = database.ref('dog/position');
  dogposition.on("value",readposition,showError);
	
  
}

function draw(){
  background("lightblue");
  if(position!==undefined)
  

  if(keyDown(UP_ARROW)){
     foodsupply = foodsupply - 10; 
  }
   if(keyDown(DOWN_ARROW)){
     foodsupply = foodsupply + 10;
      
  }
  drawSprites();
}

function writePosition (x,y){
  
  database.ref('dog/position').set({
      'x':position.x + x,
      'y':position.y + y
  })
  

}

function readposition(data){
  position = data.val();
  dog.x = position.x,
  dog.y = position.y
}

function showError(){
  console.log("something went wrong");
}
