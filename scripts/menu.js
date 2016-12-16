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

////////////////////////////////GAME CHOICE MENU//////////////////////
function newGame() {
buttons=[];


    buttons[0] = new Button(canvas.width / 4, canvas.height / 6, canvas.width / 2, canvas.height / 8, 'white', 0, 'Binary Game',canvas.width*0.08, function () {
        binaryGame();
    })

    if (localStorage.getItem('bin') > 300) {

        buttons[1] = new Button(canvas.width / 4, canvas.height / 3, canvas.width / 2, canvas.height / 8, 'white', 0, 'Fibonacci',canvas.width*0.11, function () {
            fibGame();
        })

    } else {

        buttons[1] = new Button(canvas.width / 4, canvas.height / 3, canvas.width / 2, canvas.height / 8, 'white', 0, 'LOCKED',canvas.width*0.12, function () {
            alert = new Alert('get 300 in binary to unlock', 'red');
        })

    }

    buttons[2] = new Button(canvas.width / 4, canvas.height / 1.2, canvas.width / 2, canvas.height / 8, 'white', 0, '< Back',canvas.width*0.14, function () {
        mainMenu()
    })


}

//////////////////////////////////////HIGHSCORE !/////////////////
function highScore() {
    buttons = [];



    buttons[0] = new Button(canvas.width / 4, canvas.height / 1.2, canvas.width / 2, canvas.height / 8, 'white', 0, '< Back',canvas.width*0.14, function () {
        mainMenu();
    })

    napis[0] = new Napis(canvas.width / 7, canvas.height / 5, 'white', 'LEADERBOARDS',canvas.width*0.1);
    napis[1] = new Napis(canvas.width / 5, canvas.height / 3, 'green', 'Binary game:');
    napis[2] = new Napis(canvas.width / 5.5, canvas.height / 2.4, 'white', 'High Score: ' + localStorage.getItem('bin'));

    if (localStorage.getItem('fib') > 0) {
    napis[3] = new Napis(canvas.width / 5, canvas.height / 1.8, 'green', 'Fibonacci:');
    napis[4] = new Napis(canvas.width / 6, canvas.height / 1.56, 'white', 'High Score: ' + localStorage.getItem('fib'));
    }
}
////////////////////////////////////INFO///////////////////////////////
function info() {
    buttons = [];

    napis[0] = new Napis(canvas.width / 5, canvas.height / 4, 'white', 'GAME BY:');
    napis[1] = new Napis(canvas.width / 7, canvas.height / 3, 'hsla(110, 100%, 50%, 1)', 'Dominik Garbulski',canvas.width*0.08);
    napis[1].animate = function () {
        if (!this.v) this.v = 0.8;

        this.fSize += this.v;
        if (this.fSize > canvas.width*0.1||this.fSize<canvas.width*0.08) this.v = -this.v;


    }

    buttons[0] = new Button(canvas.width / 4, canvas.height / 1.2, canvas.width / 2, canvas.height / 8, 'white', 0, '< Back',canvas.width*0.14, function () {
        mainMenu()
    })

}
////////////////////////////////////////SETTINGS////////////////////////////////
function settings(){
    buttons=[];
    
    buttons[0] = new Button(canvas.width / 4, canvas.height / 6, canvas.width / 2, canvas.height / 8, 'white', 0, 'Fonts',canvas.width*0.14, function () {
        fonts()
    })
        
        
    buttons[1] = new Button(canvas.width / 4, canvas.height / 1.2, canvas.width / 2, canvas.height / 8, 'white', 0, '< Back',canvas.width*0.14, function () {
        mainMenu()
    })
    
}
///////////////////////////////////FONTS/////////////////////////////

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




