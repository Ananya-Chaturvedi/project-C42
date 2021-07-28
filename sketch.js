var iss,issImg;
var sc,scImg,scImg1,scImg2,scImg3;
var hasDocked = false;
var space,backgroundImg;



function preload(){
issImg = loadImage("iss.png");
scImg = loadImage("spacecraft1.png");
scImg1 = loadImage("spacecraft2.png");
scImg2 = loadImage("spacecraft3.png");
scImg3 = loadImage("spacecraft4.png");
backgroundImg = loadImage("space.jpg");
   
}


function setup() {
createCanvas(600,350);

iss = createSprite(330,130);
iss.addImage(issImg);
iss.scale = 0.7;

sc = createSprite(285,240);
sc.addImage(scImg);
sc.scale = 0.2;


}

function draw() {
background(backgroundImg);

if(!hasDocked){
sc.x = sc.x + random(-1,1);
if(keyCode == RIGHT_ARROW){
sc.addImage(scImg2);
sc.x = sc.x + 1;
}

if(keyCode === LEFT_ARROW){
sc.addImage(scImg3);
sc.x = sc.x - 1;
}

if(keyCode === UP_ARROW){
sc.y = sc.y - 2;
}

if(keyCode === DOWN_ARROW){
sc.addImage(scImg1);
}
}

if(sc.y<=iss.y+70 && sc.x<=iss.x-10){
hasDocked = true;
textSize(25);
fill("white");
text("Docking Successful!",200,300);

}
drawSprites();
}
