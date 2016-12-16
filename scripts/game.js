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

speed = 0;
ctx = canvas.getContext("2d");
ctx.font = Math.floor(canvas.width / 30) + "px foo";
    startfSize=localStorage.getItem('startfSize') || Math.floor(canvas.width*0.08);
    currFont=localStorage.getItem('font') || 'burnstown'  ;
font = canvas.width / 30;
///////////////////////////////////GAME CHOICE RENDERING////////////////////////
///////////////////////////////MAIN MENU///////////////////////
    function mainMenu() {
        napis = [];
        buttons = [];

        buttons[0] = new Button(canvas.width / 4, canvas.height / 6, canvas.width / 2, canvas.height / 8, 'white', 0, 'New Game',canvas.width*0.1, function() {
            newGame();
        })

        buttons[1] = new Button(canvas.width / 4, canvas.height / 3, canvas.width / 2, canvas.height / 8, 'white', 0, 'Info',canvas.width*0.1, function() {
            info();

        })

        buttons[2] = new Button(canvas.width / 4, canvas.height / 2, canvas.width / 2, canvas.height / 8, 'white', 0, 'Scores',canvas.width*0.1, function() {
            highScore();

        })
        
          buttons[3] = new Button(canvas.width / 4, canvas.height / 1.5, canvas.width / 2, canvas.height / 8, 'white', 0, 'Settings',canvas.width*0.1, function() {
            settings();

        })
        menu = true;
    }





function fonts(){
    buttons[0] = new Button(canvas.width / 4, canvas.height / 6, canvas.width / 2, canvas.height / 8, 'white', 0, 'test',canvas.width*0.14, function () {
        currFont='burnstown';
        localStorage.setItem('font','burnstown');
        startfSize=canvas.width*0.08;
        localStorage.setItem('startfSize',startfSize);
    },'burnstown');
    
    buttons[1] = new Button(canvas.width / 4, canvas.height / 3, canvas.width / 2, canvas.height / 8, 'white', 0, 'test',canvas.width*0.14, function () {
        currFont='foo';
        localStorage.setItem('font','foo');
        startfSize=canvas.width*0.12;
        localStorage.setItem('startfSize',startfSize);
    },'foo')
    
    buttons[2] = new Button(canvas.width / 4, canvas.height / 2, canvas.width / 2, canvas.height / 8, 'white', 0, 'test',canvas.width*0.14, function () {
        currFont='pricedown';
        localStorage.setItem('font','pricedown');
        startfSize=canvas.width*0.05;
        localStorage.setItem('startfSize',startfSize);
    },'pricedown')
        
    buttons[3] = new Button(canvas.width / 4, canvas.height / 1.5, canvas.width / 2, canvas.height / 8, 'white', 0, 'test',canvas.width*0.14, function () {
        currFont='Wunderbarch';
        localStorage.setItem('font','Wunderbarch');
        startfSize=canvas.width*0.15;
        localStorage.setItem('startfSize',startfSize);
    },'Wunderbarch')
        
    buttons[4] = new Button(canvas.width / 4, canvas.height / 1.2, canvas.width / 2, canvas.height / 8, 'white', 0, '< Back',canvas.width*0.14, function () {
        settings()
    })
}











//////////////////////////////////////////BINARY START///////////////////////////////////////////////////
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

    if (game && mouseY > canvas.height / 10) {

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

                    lose();

                }
            }
        }
    }
    if (menu) {

        for (var i = 0; i < buttons.length; i++) {

            if (mouseX >= buttons[i].x && mouseX <= buttons[i].x + buttons[i].w && mouseY >= buttons[i].y && mouseY <= buttons[i].y + buttons[i].h) {

                buttons[i].onclick();

            }
        }

    }
})

/////////////////////////////////////LOSE && SET DEFAULT SCORES////////////////////////////////////////////////////////////////////////
function lose() {

    speed = 0;

    game = false;

    tiles[0][0].image.src = "scripts/tile.png";
    tiles[0][1].image.src = "scripts/tile.png";
    tiles[0][2].image.src = "scripts/tile.png";

    //SET LAST SCORE TO CURRENT SCORE
    localStorage.setItem('lastScore', points);
    buttons.splice(1, 1);

    if (!localStorage.getItem(gamemode) || localStorage.getItem(gamemode) < points) {

        localStorage.setItem(gamemode, points);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setTimeout(mainMenu, 10);

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
