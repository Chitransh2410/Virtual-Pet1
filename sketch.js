var dog, happyDog;
var database;
var food,foodStock;

function preload()
{
  dog = loadImage("images/dogimg.png");
  happyDog = loadImage("images/dogimg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage("normal",dog);
  dog.addImage("happy",happyDog);

  var foodstock = database.ref("food")
  foodstock.on("value",readstock)
  
}


function draw() {  
  background(46, 139, 87)
  if(keyDown(UP_ARROW)){
    
   dog.changeImage("happy",happyDog) 
    food = food -1;
    writeStock(foods);
}
  drawSprites();
  
  fill("white");
  text("Food Remaining:" + food ,140,400)

  fill("white");
  text("NOTE: PRESS UP_ARROW TO FEED FOOD TO DOG",140,50)

}

function readstock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x <= 0){
    x = 0;
  }else{
    x = x-1
  }

  database.ref('/').update({
    food:x
})

}
