/////responsive initialization////////////////////////

function setButtons() {
    buttonX = canvas.width / 4;

    button1Y = canvas.height / 6;
    button2Y = canvas.height / 3;
    button3Y = canvas.height / 2;
    button4Y = canvas.height / 1.5;
    button5Y = canvas.height / 1.2;
    buttonsAnimSpeed = 30;
    buttonW = canvas.width / 2;
    buttonH = canvas.height / 8;

    buttonImg = new Image();
    buttonImg.src = 'img/button.png';
    buttonClk = new Image();
    buttonClk.src = 'img/buttonclicked.png';

    buttonfontSize = canvas.height / (canvas.height / canvas.width * 10);
    
    for(var i=0;i<=50;i++){
    particles[i]=new Particle;
}
   
}

///////////////////////////////MAIN MENU///////////////////////
function mainMenu() {
    napis = [];
    buttons = [];

    buttons[0] = new Button(-buttonW, button1Y, buttonW, buttonH, 'white', 0, 'New Game', buttonfontSize, function () {
        this.img=buttonClk;
        animation=true;
        this.animate = function () {
            if (this.x < canvas.width) {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].x += buttonsAnimSpeed;
                }
            } else {
                animation=false;
                newGame();
            }
        }

    })

    buttons[1] = new Button(-buttonW, button2Y, buttonW, buttonH, 'white', 0, 'Info', buttonfontSize, function () {
        this.img = buttonClk;
        animation=true;
        this.animate = function () {

            if (this.x < canvas.width) {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].x += buttonsAnimSpeed;
                }
            } else {
                animation=false;
                info();
            
            }
        };

    })

    buttons[2] = new Button(-buttonW, button3Y, buttonW, buttonH, 'white', 0, 'Scores', buttonfontSize, function () {
       
             this.img = buttonClk;
        animation=true;
        this.animate = function () {

            if (this.x < canvas.width) {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].x += buttonsAnimSpeed;
                }
            } else {
                animation=false;
               highScore();
            
            }
        };

    })

    buttons[3] = new Button(-buttonW, button4Y, buttonW, buttonH, 'white', 0, 'Settings', buttonfontSize, function () {

             this.img = buttonClk;
        animation=true;
        this.animate = function () {

            if (this.x < canvas.width) {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].x += buttonsAnimSpeed;
                }
            } else {
                animation=false;
                settings();
            
            }
        };


    })
    animation=true;
     for(var i=0;i<buttons.length;i++){
         buttons[i].animate=function(){
        if(this.x<buttonX)this.x+=buttonsAnimSpeed;
         else {
             animation=false;
            delete this.animate;
         }
         }
    }
    
    
    menu = true;
}

////////////////////////////////GAME CHOICE MENU//////////////////////
function newGame() {
    buttons = [];


    buttons[0] = new Button(canvas.width, button1Y, buttonW, buttonH, 'white', 0, 'Binary Game', canvas.width * 0.08, function () {
        animation=true;
        this.animate = function () {
            if (this.y < canvas.height) {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].y += buttonsAnimSpeed;
                }
            } else {
                animation=false;
                binaryGame();
            }
        }
    })

    if (localStorage.getItem('bin') > 300) {

        buttons[1] = new Button(canvas.width, button2Y, buttonW, buttonH, 'white', 0, 'Fibonacci', buttonfontSize, function () {
        animation=true;
        this.animate = function () {
            if (buttons[0].y < canvas.height) {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].y += buttonsAnimSpeed;
                }
            } else {
                animation=false;
                fibGame();
            }
        }
        })

    } else {

        buttons[1] = new Button(canvas.width, button2Y, buttonW, buttonH, 'white', 0, 'LOCKED', buttonfontSize, function () {
            navigator.vibrate(500);
            alert = new Alert('get 300 in binary to unlock', 'red', canvas.width * 0.08, 10);
        })

    }

    buttons[2] = new Button(canvas.width, button5Y, buttonW, buttonH, 'white', 0, '< Back', buttonfontSize, function () {
        this.img = buttonClk;
        animation=true;
        this.animate = function () {

            if (this.x + this.w > 0) {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].x -= buttonsAnimSpeed;
                }
            } else {
                animation=false;
                mainMenu()
            
            }
        };

    })
 animation=true;
     for(var i=0;i<buttons.length;i++){
         buttons[i].animate=function(){
        if(this.x>buttonX)this.x-=buttonsAnimSpeed;
         else {
             animation=false;
            delete this.animate;
         }
         }
    }

}

//////////////////////////////////////HIGHSCORE !/////////////////
function highScore() {
    buttons = [];



    buttons[0] = new Button(canvas.width, button5Y, buttonW, buttonH, 'white', 0, '< Back', buttonfontSize, function () {
        this.img = buttonClk;
        animation=true;
        this.animate = function () {

            if (this.x + this.w > 0) {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].x -= buttonsAnimSpeed;
                }
                for(var i=0;i< napis.length;i++)
                    napis[i].x-=buttonsAnimSpeed;
            } else {
                animation=false;
                mainMenu()
            }
        };
    })
 animation=true;
     for(var i=0;i<buttons.length;i++){
         buttons[i].animate=function(){
        if(this.x>buttonX)this.x-=buttonsAnimSpeed;
         else {
             animation=false;
            delete this.animate;
         }
         }
    }   
    
    napis[0] = new Napis(canvas.width, canvas.height / 5, 'white', 'LEADERBOARDS', buttonfontSize);
    napis[1] = new Napis(canvas.width, button2Y, 'green', 'Binary game:');
    napis[2] = new Napis(canvas.width, canvas.height / 2.4, 'white', 'High Score: ' + localStorage.getItem('bin'));
    napis[2].animate=function(){
        if(this.x>canvas.width / 5.5)this.x-=buttonsAnimSpeed;
    }
    napis[1].animate=function(){
        if(this.x>canvas.width / 5)this.x-=buttonsAnimSpeed;
    }
    napis[0].animate=function(){
        if(this.x>canvas.width / 7)this.x-=buttonsAnimSpeed;
    }

    if (localStorage.getItem('fib') > 0) {
        napis[3] = new Napis(canvas.width, canvas.height / 1.8, 'green', 'Fibonacci:');
        napis[3].animate=function(){
        if(this.x>canvas.width / 5)this.x-=buttonsAnimSpeed;
    }
        napis[4] = new Napis(canvas.width, canvas.height / 1.56, 'white', 'High Score: ' + localStorage.getItem('fib'));
        napis[4].animate=function(){
        if(this.x>canvas.width / 6)this.x-=buttonsAnimSpeed;
    }
    }
   
    
}
////////////////////////////////////INFO///////////////////////////////
function info() {
    buttons = [];

    napis[0] = new Napis(canvas.width, canvas.height / 4, 'white', 'GAME BY:');
    napis[0].animate=function(){
        if(this.x>canvas.width/6)this.x-=buttonsAnimSpeed;
            else delete this.animate;
    }
    napis[1] = new Napis(canvas.width, button2Y, 'hsla(110, 100%, 50%, 1)', 'Dominik Garbulski', canvas.width * 0.08);
    napis[1].animate=function(){
        if(this.x>canvas.width/8)this.x-=buttonsAnimSpeed;
        else {
            this.animate = function () {
                if (!this.v) this.v = Round(canvas.width / 3273,1)
                this.x -= this.v * 2;
                this.fSize += this.v;
                if (this.fSize > buttonfontSize || this.fSize < canvas.width * 0.07) this.v = -this.v;
            }
        }
    }
   
    buttons[0] = new Button(canvas.width, button5Y, buttonW, buttonH, 'white', 0, '< Back', buttonfontSize, function () {
    this.img=buttonClk;
        animation=true;
            this.animate=function(){
                
                if(this.x+this.w>0){
                    
                    for(var i=0;i<buttons.length;i++)buttons[i].x-=buttonsAnimSpeed;
                    
                    for(var i=0;i<napis.length;i++)napis[i].x-=buttonsAnimSpeed;
                    
                }else {
                    animation=false;
                    mainMenu()
                }
            };
    })
    
     animation=true;
     for(var i=0;i<buttons.length;i++){
        buttons[i].animate=function(){
            if(this.x>buttonX)this.x-=buttonsAnimSpeed;
                else {
                    animation=false;
                   delete this.animate;
                }
         }
    }

}
////////////////////////////////////////SETTINGS////////////////////////////////
function settings() {
    buttons = [];

    buttons[0] = new Button(canvas.width, button1Y, buttonW, buttonH, 'white', 0, 'Fonts', buttonfontSize, function () {
    animation=true;
        this.animate=function(){
            
            if(this.x<canvas.width){
                for(var i=0;i<buttons.length;i++){
                    buttons[i].x+=buttonsAnimSpeed;
                }
            }else {
                animation=false;
                fonts();
                
            }
        };
    })


    buttons[1] = new Button(canvas.width, button5Y, buttonW, buttonH, 'white', 0, '< Back', buttonfontSize, function () {
    this.img=buttonClk;
        animation=true;
        this.animate=function(){
            
            if(this.x+this.w>0){
                for(var i=0;i<buttons.length;i++){
                    buttons[i].x-=buttonsAnimSpeed;
                }
            }else {
                animation=false;
                mainMenu()
                
            }
        };
    })
    
    animation=true;
     for(var i=0;i<buttons.length;i++){
        buttons[i].animate=function(){
            if(this.x>buttonX)this.x-=buttonsAnimSpeed;
                else {
                    animation=false;
                   delete this.animate;
                }
         }
    }

}
///////////////////////////////////FONTS/////////////////////////////

function fonts() {
    buttons[0] = new Button(canvas.width    , button1Y, buttonW, buttonH, 'white', 0, 'test', canvas.width * 0.14, function () {
        currFont = 'burnstown';
        localStorage.setItem('font', 'burnstown');
        startfSize = canvas.width * 0.08;
        localStorage.setItem('startfSize', startfSize);
    }, 'burnstown');

    buttons[1] = new Button(canvas.width, button2Y, buttonW, buttonH, 'white', 0, 'test', canvas.width * 0.14, function () {
        currFont = 'foo';
        localStorage.setItem('font', 'foo');
        startfSize = canvas.width * 0.12;
        localStorage.setItem('startfSize', startfSize);
    }, 'foo')

    buttons[2] = new Button(canvas.width, button3Y, buttonW, buttonH, 'white', 0, 'test', canvas.width * 0.14, function () {
        currFont = 'pricedown';
        localStorage.setItem('font', 'pricedown');
        startfSize = canvas.width * 0.05;
        localStorage.setItem('startfSize', startfSize);
    }, 'pricedown')

    buttons[3] = new Button(canvas.width, button4Y, buttonW, buttonH, 'white', 0, 'test', canvas.width * 0.14, function () {
        currFont = 'Wunderbarch';
        localStorage.setItem('font', 'Wunderbarch');
        startfSize = canvas.width * 0.15;
        localStorage.setItem('startfSize', startfSize);
    }, 'Wunderbarch')

    buttons[4] = new Button(canvas.width, button5Y, buttonW, buttonH, 'white', 0, '< Back', buttonfontSize, function () {
    this.img=buttonClk;
        animation=true;
        this.animate=function(){
            
            if(this.x+this.w>0){
                for(var i=0;i<buttons.length;i++){
                    buttons[i].x-=buttonsAnimSpeed;
                }
            }else {
                animation=false;
                settings()
                
            }
        };
    })
    
    
    animation=true;
     for(var i=0;i<buttons.length;i++){
        buttons[i].animate=function(){
            if(this.x>buttonX)this.x-=buttonsAnimSpeed;
                else {
                    animation=false;
                   delete this.animate;
                }
         }
    }
}
