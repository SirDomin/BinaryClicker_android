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

    buttonfontSize = Math.floor(canvas.height *0.058);

    if (particles) {
        for (var i = 0; i <= 20; i++) {
            particles[i] = new Particle;
        }
    }
}

///////////////////////////////MAIN MENU///////////////////////
function mainMenu() {
  

    
    napis = [];
    buttons = [];
    napis[0]=new Napis(canvas.width/6,canvas.height/7,'hsla(82, 0%, 51%, 1)',"Last Score: "+localStorage.getItem('lastScore'),canvas.height*0.06)
    buttons[0] = new Button(-buttonW, button1Y, buttonW, buttonH, 'white', 0, 'New Game', buttonfontSize, function () {
        this.img = buttonClk;
        animation = true;
        this.animate = function () {
            if (this.x < canvas.width) {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].x += buttonsAnimSpeed;
                }
            } else {
                animation = false;
                newGame();
            }
        }

    })

    buttons[1] = new Button(-buttonW, button2Y, buttonW, buttonH, 'white', 0, 'Info', buttonfontSize, function () {
        this.img = buttonClk;
        animation = true;
        this.animate = function () {

            if (this.x < canvas.width) {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].x += buttonsAnimSpeed;
                }
            } else {
                animation = false;
                info();

            }
        };

    })

    buttons[2] = new Button(-buttonW, button3Y, buttonW, buttonH, 'white', 0, 'Scores', buttonfontSize, function () {

        this.img = buttonClk;
        animation = true;
        this.animate = function () {

            if (this.x < canvas.width) {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].x += buttonsAnimSpeed;
                }
            } else {
                animation = false;
                highScore();

            }
        };

    })

    buttons[3] = new Button(-buttonW, button4Y, buttonW, buttonH, 'white', 0, 'Settings', buttonfontSize, function () {

        this.img = buttonClk;
        animation = true;
        this.animate = function () {

            if (this.x < canvas.width) {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].x += buttonsAnimSpeed;
                }
                
                
            } else {
                animation = false;
                settings();

            }
        };


    })
    
if(localStorage.getItem('clicks')>1200){
buttons[4] = new Button(-buttonW, button5Y, buttonW, buttonH, 'white', 0, 'STATS', buttonfontSize, function () {

        this.img = buttonClk;
        animation = true;
        this.animate = function () {

            if (this.x < canvas.width) {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].x += buttonsAnimSpeed;
                }
            } else {
                animation = false;
                stats();

            }
        };


    })
}

    animation = true;
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].animate = function () {
            if (this.x < buttonX) this.x += buttonsAnimSpeed;
            else {
                animation = false;
                delete this.animate;
            }
        }
    }
    


    menu = true;
}

////////////////////////////////GAME CHOICE MENU//////////////////////
function newGame() {
    buttons = [];
    napis=[];


    buttons[0] = new Button(canvas.width, button1Y, buttonW, buttonH, 'white', 0, 'Binary Game', canvas.width * 0.08, function () {
        animation = true;
        this.img = buttonClk;
        this.animate = function () {
            if (this.y < canvas.height) {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].y += buttonsAnimSpeed;
                }
            } else {
                buttons=[];
                animation = false;
                binaryGame();
            }
        }
    })

    if (localStorage.getItem('bin') > 300) {

        buttons[1] = new Button(canvas.width, button2Y, buttonW, buttonH, 'white', 0, 'Fibonacci', buttonfontSize, function () {
            this.img = buttonClk;
            animation = true;
            this.animate = function () {
                if (buttons[0].y < canvas.height) {
                    for (var i = 0; i < buttons.length; i++) {
                        buttons[i].y += buttonsAnimSpeed;
                    }
                } else {
                    buttons=[];
                    animation = false;
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
        animation = true;
        this.animate = function () {

            if (this.x + this.w > 0) {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].x -= buttonsAnimSpeed;
                }
            } else {
                animation = false;
                mainMenu()

            }
        };

    })
    animation = true;
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].animate = function () {
            if (this.x > buttonX) this.x -= buttonsAnimSpeed;
            else {
                animation = false;
                delete this.animate;
            }
        }
        
    }

}

//////////////////////////////////////HIGHSCORE !/////////////////
function highScore() {
    buttons = [];
    napis = [];


    buttons[0] = new Button(canvas.width, button5Y, buttonW, buttonH, 'white', 0, '< Back', buttonfontSize, function () {
        this.img = buttonClk;
        animation = true;
        this.animate = function () {

            if (this.x + this.w > 0) {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].x -= buttonsAnimSpeed;
                }
                for (var i = 0; i < napis.length; i++)
                    napis[i].x -= buttonsAnimSpeed;
            } else {
                animation = false;
                mainMenu()
            }
        };
    })
    animation = true;
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].animate = function () {
            if (this.x > buttonX) this.x -= buttonsAnimSpeed;
            else {
                animation = false;
                delete this.animate;
            }
        }
    }

    napis[0] = new Napis(canvas.width, canvas.height / 5, 'white', 'LEADERBOARDS', buttonfontSize);
    napis[1] = new Napis(canvas.width, button2Y, 'hsla(82, 0%, 51%, 1)', 'Binary game:');
    napis[2] = new Napis(canvas.width, canvas.height / 2.4, 'white', 'High Score: ' + localStorage.getItem('bin') || 0);
    napis[2].animate = function () {
        if (this.x > 50) this.x -= buttonsAnimSpeed;
    }
    napis[1].animate = function () {
        if (this.x > canvas.width / 5) this.x -= buttonsAnimSpeed;
    }
    napis[0].animate = function () {
        if (this.x > canvas.width / 7) this.x -= buttonsAnimSpeed;
    }

    if (localStorage.getItem('fib') > 0) {
        napis[3] = new Napis(canvas.width, canvas.height / 1.8, 'hsla(82, 0%, 51%, 1)', 'Fibonacci:');
        napis[3].animate = function () {
            if (this.x > canvas.width / 5) this.x -= buttonsAnimSpeed;
        }
        napis[4] = new Napis(canvas.width, canvas.height / 1.56, 'white', 'High Score: ' + localStorage.getItem('fib'),buttonfontSize);
        napis[4].animate = function () {
            if (this.x > 50) this.x -= buttonsAnimSpeed;
        }
    }


}
////////////////////////////////////INFO///////////////////////////////
function info() {
    buttons = [];
    napis = [];
    napis[0] = new Napis(canvas.width, canvas.height / 4, 'white', 'GAME BY:');
    napis[0].animate = function () {
        if (this.x > canvas.width / 6) this.x -= buttonsAnimSpeed;
        else delete this.animate;
    }
    napis[1] = new Napis(canvas.width, button2Y, 'hsla(110, 100%, 50%, 1)', 'Dominik Garbulski', canvas.width * 0.08);
    napis[1].animate = function () {
        if (this.x > canvas.width / 8) this.x -= buttonsAnimSpeed;
        else {
            this.animate = function () {

                if (!this.v) this.v = 0.5
                this.x -= this.v * 4;
                this.fSize = Round(this.fSize + this.v, 2);
                if (this.fSize > buttonfontSize || this.fSize < canvas.width * 0.07) this.v = -this.v;

            }
        }
    }
    napis[3] = new Napis(canvas.width, canvas.height / 2.4, 'white', 'SOUNDS:',canvas.width * 0.08);
    napis[3].animate = function () {
        if (this.x > canvas.width / 6) this.x -= buttonsAnimSpeed;
        else delete this.animate;
    }
    napis[2]=new Napis(canvas.width, canvas.height / 2, 'hsla(110, 100%, 50%, 1)', 'Rafik');
    
    napis[2].animate = function () {
        if (this.x > canvas.width / 6) this.x -= buttonsAnimSpeed;
        else delete this.animate;
    }
    buttons[0] = new Button(canvas.width, button5Y, buttonW, buttonH, 'white', 0, '< Back', buttonfontSize, function () {
        this.img = buttonClk;
        animation = true;
        this.animate = function () {

            if (this.x + this.w > 0) {

                for (var i = 0; i < buttons.length; i++) buttons[i].x -= buttonsAnimSpeed;

                for (var i = 0; i < napis.length; i++) napis[i].x -= buttonsAnimSpeed;

            } else {
                animation = false;
                mainMenu()
            }
        };
    })

    animation = true;
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].animate = function () {
            if (this.x > buttonX) this.x -= buttonsAnimSpeed;
            else {
                animation = false;
                delete this.animate;
            }
        }
    }

}
////////////////////////////////////////SETTINGS////////////////////////////////
function settings() {
    buttons = [];
    napis = [];
    buttons[0] = new Button(canvas.width, button1Y, buttonW, buttonH, 'white', 0, 'Fonts', buttonfontSize, function () {
        animation = true;
        this.img = buttonClk;
        this.animate = function () {

            if (this.x < canvas.width) {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].x += buttonsAnimSpeed;
                }
            } else {
                animation = false;
                fonts();

            }
        };
    });


    buttons[1] = new Button(canvas.width, button2Y, buttonW, buttonH, 'white', 0, 'Particles', buttonfontSize, function () {
        if (particles) {

            buttons[1].img = buttonClk;
            particles = false;
            localStorage.setItem('particles', 0);
        } else {
            localStorage.setItem('particles', 1);
            this.img = buttonImg;
            particles = [];
            for (var i = 0; i <= 20; i++) {
                particles[i] = new Particle;
            }
        }

    })
    if (!particles) {
        buttons[1].img = buttonClk;
    } else buttons[1].img = buttonImg;
    
        buttons[2] = new Button(canvas.width, button3Y, buttonW, buttonH, 'white', 0, 'Music', buttonfontSize, function () {
        if (parseInt(buttonSound)) {

            buttons[2].img = buttonClk;
            buttonSound="0";
            audioSound="0";
            audio.pause();
            localStorage.setItem('buttonSound', 0);
            
        } else {
            localStorage.setItem('buttonSound', 1);
            this.img = buttonImg;
                buttonSound="1";
                audioSound="1";
                audio=new Audio("sound/Melodyjka.ogg");
                audio.loop=true;
                audio.volume=0.5;
    
                audio.play();
            
        }

    })
    if (!parseInt(buttonSound)) {
        buttons[2].img = buttonClk;
    } else buttons[2].img = buttonImg;



    buttons[3] = new Button(canvas.width, button5Y, buttonW, buttonH, 'white', 0, '< Back', buttonfontSize, function () {
        this.img = buttonClk;
        animation = true;
        this.animate = function () {

            if (this.x + this.w > 0) {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].x -= buttonsAnimSpeed;
                }
            } else {
                animation = false;
                mainMenu()

            }
        };
    })

    animation = true;
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].animate = function () {
            if (this.x > buttonX) this.x -= buttonsAnimSpeed;
            else {
                animation = false;
                delete this.animate;
            }
        }
    }

}
///////////////////////////////////FONTS/////////////////////////////

function fonts() {
    buttons[0] = new Button(canvas.width, button1Y, buttonW, buttonH, 'white', 0, 'test', buttonfontSize, function () {
        currFont = 'burnstown';
        localStorage.setItem('font', 'burnstown');
        startfSize = canvas.width * 0.08;
        localStorage.setItem('startfSize', startfSize);

        this.img = buttonClk;
        buttons[1].img = buttonImg;
        buttons[2].img = buttonImg;
        buttons[3].img = buttonImg;
    }, 'burnstown');

    buttons[1] = new Button(canvas.width, button2Y, buttonW, buttonH, 'white', 0, 'test', buttonfontSize, function () {
        currFont = 'foo';
        localStorage.setItem('font', 'foo');
        startfSize = canvas.width * 0.12;
        localStorage.setItem('startfSize', startfSize);

        buttons[0].img = buttonImg;
        buttons[1].img = buttonClk;
        buttons[2].img = buttonImg;
        buttons[3].img = buttonImg;
    }, 'foo')

    buttons[2] = new Button(canvas.width, button3Y, buttonW, buttonH, 'white', 0, 'test', buttonfontSize, function () {
        currFont = 'pricedown';
        localStorage.setItem('font', 'pricedown');
        startfSize = canvas.width * 0.05;
        localStorage.setItem('startfSize', startfSize);

        buttons[0].img = buttonImg;
        buttons[1].img = buttonImg;
        buttons[2].img = buttonClk;
        buttons[3].img = buttonImg;
    }, 'pricedown')

    buttons[3] = new Button(canvas.width, button4Y, buttonW, buttonH, 'white', 0, 'test', buttonfontSize, function () {
        currFont = 'Wunderbarch';
        localStorage.setItem('font', 'Wunderbarch');
        startfSize = canvas.width * 0.15;
        localStorage.setItem('startfSize', startfSize);

        buttons[0].img = buttonImg;
        buttons[1].img = buttonImg;
        buttons[2].img = buttonImg;
        buttons[3].img = buttonClk;
    }, 'Wunderbarch')

    buttons[4] = new Button(canvas.width, button5Y, buttonW, buttonH, 'white', 0, '< Back', buttonfontSize, function () {
        this.img = buttonClk;
        animation = true;
        this.animate = function () {

            if (this.x + this.w > 0) {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].x -= buttonsAnimSpeed;
                }
            } else {
                animation = false;
                settings()

            }
        };
    })
    switch (currFont) {
        case "burnstown":
            buttons[0].img = buttonClk;
            break;

        case "foo":
            buttons[1].img = buttonClk;
            break;

        case "pricedown":
            buttons[2].img = buttonClk;
            break;

        case "Wunderbarch":
            buttons[3].img = buttonClk;
            break;

    }


    animation = true;
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].animate = function () {
            if (this.x > buttonX) this.x -= buttonsAnimSpeed;
            else {
                animation = false;
                delete this.animate;
            }
        }
    }
}
//////STATS


function stats(){
    buttons=[];
    napis=[];
    
    napis[0] = new Napis(canvas.width, canvas.height / 5, 'white', 'Statistics', buttonfontSize);
    napis[1] = new Napis(canvas.width, button2Y, 'hsla(82, 0%, 51%, 1)', 'You have clicked ');
    napis[2] = new Napis(canvas.width, canvas.height / 2.4, 'hsla(110, 100%, 50%, 1)', localStorage.getItem('clicks') || 0); 
    
    napis[3] = new Napis(canvas.width, canvas.height / 2, 'hsla(82, 0%, 51%, 1) ',"times");
    
    napis[4] = new Napis(canvas.width, canvas.height / 1.6, 'hsla(82, 0%, 51%, 1) ',"In game time: ");
    
    napis[5] = new Napis(canvas.width, canvas.height / 1.4, 'hsla(110, 100%, 50%, 1) ',getTime(ms));
    napis[6] = new Napis(canvas.width, canvas.height / 1.87, 'hsla(110, 100%, 50%, 1) ','________________________');

    
    napis[2].animate = function () {
        if (this.x > 50) this.x -= buttonsAnimSpeed;
    }
    napis[3].animate = function () {
        if (this.x > canvas.width / 5) this.x -= buttonsAnimSpeed;
    }  
    napis[4].animate = function () {
        if (this.x > canvas.width / 5) this.x -= buttonsAnimSpeed;
    }  
    napis[5].animate = function () {
        if (this.x > 50) this.x -= buttonsAnimSpeed;
    } 
    napis[6].animate = function () {
        if (this.x >= 0) this.x -= buttonsAnimSpeed;
    }
    
    
    napis[1].animate = function () {
        if (this.x > canvas.width / 5) this.x -= buttonsAnimSpeed;
    }
    
    napis[0].animate = function () {
        if (this.x > canvas.width / 7) this.x -= buttonsAnimSpeed;
    }
    
buttons[0] = new Button(canvas.width, button5Y, buttonW, buttonH, 'white', 0, '< Back', buttonfontSize, function () {
        this.img = buttonClk;
        animation = true;
        this.animate = function () {

            if (this.x + this.w > 0) {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].x -= buttonsAnimSpeed;
                }
                    for (var i = 0; i < napis.length; i++) napis[i].x -= buttonsAnimSpeed;

            } else {
                animation = false;
                mainMenu()

            }
        };
    })
    
    

    animation = true;
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].animate = function () {
            if (this.x > buttonX) this.x -= buttonsAnimSpeed;
            
            else {
                animation = false;
                delete this.animate;
            }
        }
        
    }
}
