var canvas = document.getElementById("canvas");
canvas.style.border = "solid 1px black";


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//canvas.width =480
//canvas.height=640;
alert = false;
point = [];
buttons = [];
game = false;
menu = true;
tileRows=0;
speed = 0;
ctx = canvas.getContext("2d");
ctx.font = Math.floor(canvas.width / 30) + "px foo";
    startfSize=localStorage.getItem('startfSize') || Math.floor(canvas.width*0.08);
    currFont=localStorage.getItem('font') || 'burnstown'  ;
font = canvas.width / 30;

animation=false;

tile=new Image();
tile.src="scripts/tile.png";

tile1=new Image();
tile1.src="scripts/tile1.png";

tile0=new Image();
tile0.src="scripts/tile0.png";

setButtons();
////////////////////////////BINARY START///////////////////////////////////////////////////
binaryGame = function () {

    game = true;
    menu = false;
    gamemode = 'bin';
    points = 0;
    rows = 0;
    speed = canvas.height / 96;

    tiles = [];
    tiles[5] = [];

    for (var i = 0; i < 5; i++) {

        tiles[i] = [];

        for (var o = 0; o < 3; o++) {

            x = i + 3;
            tiles[i][o] = new Tile(o * canvas.width / 3, -x * canvas.height / 3, i, o,canvas.width*0.2);

        }

        newValue(i, gamemode);

    }

}

/////////////////////////////////////// FIBONACCI START //////////////////////////////////////////////////////

fibGame = function () {
    tmpFib[0] = 0;
    tmpFib[1] = 0;
    fibTxt = '';
    tablicaFib = [false, true];
    fibo = 0;
    prawda = [1, 1];
    gamemode = 'fib';
    game = true;
    menu = false;
    tiles = [];
    speed = canvas.height / 450;
    points = 0;
    rows = 0;

    
    for (var i = 0; i < 5; i++) {

        tiles[i] = [];

        for (var o = 0; o < 3; o++) {

            x = i + 1;
            tiles[i][o] = new Tile(o * canvas.width / 3, -x * canvas.height / 3, i, o,canvas.width*0.1);

        }
       
        newValue(i, gamemode);

    }

    tiles[5] = [];
}

//////////////////////////////////////////////////////////////////////////////////////////




mainMenu();





canvas.addEventListener('touchstart', function (e) {

    mouseX = e.changedTouches[0].pageX;
    mouseY = e.changedTouches[0].pageY + speed * 5;

    if (game && mouseY > canvas.height / 10&&!animate) {

        for (var i = 0; i <= 4; i++) {
            for (var o = 0; o < 3; o++) {

                if (mouseX >= tiles[i][o].x && mouseX <= tiles[i][o].x + canvas.width / 3 && mouseY >= tiles[i][o].y && mouseY <= tiles[i][o].y + canvas.height / 3)

                    if (spr(tiles[i][o])) {

                    tiles[i][o].clicked = 1;
                    points += tiles[i][o].value
                    if (gamemode == 'fib') {
                        tmpFib[0] = tmpFib[1];
                        tmpFib[1] = fibTxt = tiles[i][o].value;
                        fibTxt = tmpFib[0] + "+" + tmpFib[1] + "= ?";
                    }

                    if (rows >= 1) delete tablicaFib[tiles[i][o].value];

                } else {

                    lose('click',i,o,tiles[i][o].y);

                }
            }
        }
    }
    if (menu&&!animation) {

        for (var i = 0; i < buttons.length; i++) {

            if (mouseX >= buttons[i].x && mouseX <= buttons[i].x + buttons[i].w && mouseY >= buttons[i].y && mouseY <= buttons[i].y + buttons[i].h) {

                buttons[i].onclick();

            }
        }

    }
})

/////////////////////////////////////LOSE && SET DEFAULT SCORES////////////////////////////////////////////////////////////////////////
function lose(why,i,o,y) {
    navigator.vibrate(500);
  
    
    if(why=='ooc'){
        tiles[0][0].image=tile0;
        tiles[0][1].image=tile0;
        tiles[0][2].image=tile0;
            animate=function(){
                speed=-5;
                if(tiles[0][0].y<canvas.height-canvas.height/3){
                    speed=0;
                    animate=false;
                    game = false;
                        localStorage.setItem('lastScore', points);
                        
                        if (!localStorage.getItem(gamemode) || localStorage.getItem(gamemode) < points) {
                            localStorage.setItem(gamemode, points);
                        }
                    losuj=true;
                    mainMenu()
                }
            }
    }else if(why=='click'){
        tiles[i][o].image=tile0;
        var y=y;
            animate=function(){
                speed=-5;
                if(tiles[i][o].y<y-(canvas.height/3)){
                    speed=0;
                    animate=false;
                    game = false;
                        localStorage.setItem('lastScore', points);
                        
                        if (!localStorage.getItem(gamemode) || localStorage.getItem(gamemode) < points) {
                            localStorage.setItem(gamemode, points);
                        }
                    losuj=true;
                    mainMenu()
                }
            }
    }
   
}



////////////////////////////////////GET FREE POINTS(DEBUG ONLY)/////////////////////////////////////
//function getFreePoint(){
//    
//    for(var i=0;i<=point.length;i++){
//        
//        if(!point[i])return i;
//        
//    }
//    
//}

main();
