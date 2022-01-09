var ball;
var database;
var position;
var  hynopticalBall;

function setup(){
 database = firebaase.database(); 
 console.log(database); 
 createCanvas(500,500); 
 hynopticalBall = createSprite(250,250,10,10); 
 hynopticalBall.shapeColor = "red";
var hynopticBallPosition = database.ref('ball/position');
hynopticBallPosition.on("value", readPosition, showError); 
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function writePosition(x,y){
    database.ref("ball/position").set({
        'x': position.x + x,
        'y': position.y + y
    })
    }
    
    function readPosition(data){
         position = data.val();
          hynopticalBall.x = position.x;
          hynopticalBall.y = position.y;0
        }