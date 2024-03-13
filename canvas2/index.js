const canvas = document.getElementById('game');
canvas.width = 800;
canvas. height = 640;
const ctx = canvas.getContext('2d');

const street = new Image();
const tank =  new Image();
tank.src = 'police-car-siren-blue.png';
street.src = 'background-1_0.png'




let tankx= 600;
let tanky = 500;
let heighttank = 100;
let widthtank= 150;
var imgHeight = 0;
var scrollSpeed = 5;



const speed = 5;

const keys = {
    up: false,
    down : false,
    right : false,
    left : false,
};

window.addEventListener('keydown',function (event){
    switch(event.key){
        case 'ArrowLeft' : 
        keys.left = true;
        break;
        case 'ArrowRight':
        keys.right = true;
            break;
        case 'ArrowUp':
        keys.up = true;
                break;
        case 'ArrowDown':
        keys.down = true;
        break;


    }
});

window.addEventListener('keyup',function(event){
    switch(event.key){
        case'ArrowLeft':
        keys.left = false;
        break;
        case'ArrowRight':
        keys.right= false;
        break;
        case 'ArrowUp':
        keys.up = false;
            break;
        case'ArrowDown':
        keys.down = false;
        break;
    }
});


function update(){
    if (keys.left){
        tankx -= speed;
    }
    if(keys.right){
        tankx+= speed;
    }
    if(keys.up){
        tanky-= speed;
    }
    if(keys.down){
        tanky+=speed;
        
    }
    if(tankx<0){
        tankx=0
    }
    if(tanky<0){
        tanky=0
    }
    
    if (tankx + tank.width> canvas.width){  // 3shan ekun fe taked la etar el safha
        tankx = canvas.width - tank.width;

    }

    if (tanky + tank.height > canvas.height){
        tanky = canvas.height - tank.height;
    }

}
window.onload = function() {
    // the initial image height
    //var imgHeight = 0;

    // the scroll speed
    // an important thing to ensure here is that can.height
    // is divisible by scrollSpeed
    //var scrollSpeed = 5;

    // this is the primary animation loop that is called 60 times
    // per second
    function loop()
    {
        // draw image 1
      
        // update image height
        imgHeight += scrollSpeed;

        //resetting the images when the first image entirely exits the screen
        if (imgHeight == canvas.height)
            imgHeight = 0;

        // this function creates a 60fps animation by scheduling a
        // loop function call before the
        // next redraw every time it is called
        window.requestAnimationFrame(loop);
    }

    // this initiates the animation by calling the loop function
    // for the first time
    loop();

}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(street, 0, imgHeight);

    // draw image 2
    ctx.drawImage(street, 0, imgHeight - canvas.height);

    ctx.drawImage(tank,tankx,tanky);
    
}

function gameloop(){
    update();
    draw();
    requestAnimationFrame(gameloop);
}

tank.onload = () => {
    gameloop();
};
