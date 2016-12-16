/////responsive initialization////////////////////////

function setButtons() {
    buttonX = canvas.width / 4;

    button1Y = canvas.height / 6;
    button2Y = canvas.height / 3;
    button3Y = canvas.height / 2;
    button4Y = canvas.height / 1.5;
    button5Y = canvas.height / 1.2;

    buttonW = canvas.width / 2;
    buttonH = canvas.height / 8;

    buttonfontSize = canvas.height/ (canvas.height/canvas.width*10)
}

///////////////////////////////MAIN MENU///////////////////////
function mainMenu() {
    napis = [];
    buttons = [];

    buttons[0] = new Button(buttonX, button1Y, buttonW, buttonH, 'white', 0, 'New Game', buttonfontSize, function () {
        newGame();
    })

    buttons[1] = new Button(buttonX, button2Y, buttonW, buttonH, 'white', 0, 'Info', buttonfontSize, function () {
        info();

    })

    buttons[2] = new Button(buttonX, button3Y, buttonW, buttonH, 'white', 0, 'Scores', buttonfontSize, function () {
        highScore();

    })

    buttons[3] = new Button(buttonX, button4Y, buttonW, buttonH, 'white', 0, 'Settings', buttonfontSize, function () {
        settings();

    })
    menu = true;
}

////////////////////////////////GAME CHOICE MENU//////////////////////
function newGame() {
    buttons = [];


    buttons[0] = new Button(buttonX, button1Y, buttonW, buttonH, 'white', 0, 'Binary Game', canvas.width * 0.08, function () {
        binaryGame();
    })

    if (localStorage.getItem('bin') > 300) {

        buttons[1] = new Button(buttonX, button2Y, buttonW, buttonH, 'white', 0, 'Fibonacci', buttonfontSize, function () {
            fibGame();
        })

    } else {

        buttons[1] = new Button(buttonX, button2Y, buttonW, buttonH, 'white', 0, 'LOCKED', buttonfontSize, function () {
            navigator.vibrate(500);
            alert = new Alert('get 300 in binary to unlock', 'red',canvas.width * 0.08,10);
        })

    }

    buttons[2] = new Button(buttonX, button5Y, buttonW, buttonH, 'white', 0, '< Back', buttonfontSize, function () {
        mainMenu()
    })


}

//////////////////////////////////////HIGHSCORE !/////////////////
function highScore() {
    buttons = [];



    buttons[0] = new Button(buttonX, button5Y, buttonW, buttonH, 'white', 0, '< Back', buttonfontSize, function () {
        mainMenu();
    })

    napis[0] = new Napis(canvas.width / 7, canvas.height / 5, 'white', 'LEADERBOARDS', buttonfontSize);
    napis[1] = new Napis(canvas.width / 5, button2Y, 'green', 'Binary game:');
    napis[2] = new Napis(canvas.width / 5.5, canvas.height / 2.4, 'white', 'High Score: ' + localStorage.getItem('bin'));

    if (localStorage.getItem('fib') > 0) {
        napis[3] = new Napis(canvas.width / 5, canvas.height / 1.8, 'green', 'Fibonacci:');
        napis[4] = new Napis(canvas.width / 6, canvas.height / 1.56, 'white', 'High Score: ' + localStorage.getItem('fib'));
    }
}
////////////////////////////////////INFO///////////////////////////////
function info() {
    buttons = [];

    napis[0] = new Napis(canvas.width / 6, canvas.height / 4, 'white', 'GAME BY:');
    napis[1] = new Napis(canvas.width / 8, button2Y, 'hsla(110, 100%, 50%, 1)', 'Dominik Garbulski', canvas.width * 0.08);
    napis[1].animate = function () {
        if (!this.v) this.v = canvas.width/3273
        this.x-=this.v*2;
        this.fSize += this.v;
        if (this.fSize > buttonfontSize || this.fSize < canvas.width * 0.07) this.v = -this.v;


    }

    buttons[0] = new Button(buttonX, button5Y, buttonW, buttonH, 'white', 0, '< Back', buttonfontSize, function () {
        mainMenu()
    })

}
////////////////////////////////////////SETTINGS////////////////////////////////
function settings() {
    buttons = [];

    buttons[0] = new Button(buttonX, button1Y, buttonW, buttonH, 'white', 0, 'Fonts', buttonfontSize, function () {
        fonts()
    })


    buttons[1] = new Button(buttonX, button5Y, buttonW, buttonH, 'white', 0, '< Back', buttonfontSize, function () {
        mainMenu()
    })

}
///////////////////////////////////FONTS/////////////////////////////

function fonts() {
    buttons[0] = new Button(buttonX, button1Y, buttonW, buttonH, 'white', 0, 'test', canvas.width * 0.14, function () {
        currFont = 'burnstown';
        localStorage.setItem('font', 'burnstown');
        startfSize = canvas.width * 0.08;
        localStorage.setItem('startfSize', startfSize);
    }, 'burnstown');

    buttons[1] = new Button(buttonX, button2Y, buttonW, buttonH, 'white', 0, 'test', canvas.width * 0.14, function () {
        currFont = 'foo';
        localStorage.setItem('font', 'foo');
        startfSize = canvas.width * 0.12;
        localStorage.setItem('startfSize', startfSize);
    }, 'foo')

    buttons[2] = new Button(buttonX, button3Y, buttonW, buttonH, 'white', 0, 'test', canvas.width * 0.14, function () {
        currFont = 'pricedown';
        localStorage.setItem('font', 'pricedown');
        startfSize = canvas.width * 0.05;
        localStorage.setItem('startfSize', startfSize);
    }, 'pricedown')

    buttons[3] = new Button(buttonX, button4Y, buttonW, buttonH, 'white', 0, 'test', canvas.width * 0.14, function () {
        currFont = 'Wunderbarch';
        localStorage.setItem('font', 'Wunderbarch');
        startfSize = canvas.width * 0.15;
        localStorage.setItem('startfSize', startfSize);
    }, 'Wunderbarch')

    buttons[4] = new Button(buttonX, button5Y, buttonW, buttonH, 'white', 0, '< Back', buttonfontSize, function () {
        settings()
    })
}
