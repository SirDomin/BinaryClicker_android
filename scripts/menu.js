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
  currMenu='mainMenu';
    kolor=0;
    kolorek=0;
    
    napis = [];
    buttons = [];
    napis[0]=new Napis(canvas.width/6,canvas.height/7,'hsla(82, 0%, 51%, 1)',"Last Score: "+localStorage.getItem('lastScore'),canvas.height*0.06)
    buttons[0] = new Button(-buttonW, button1Y, buttonW, buttonH, 'black', 0, 'New Game', Math.floor(canvas.height *0.05), function () {
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

    buttons[1] = new Button(-buttonW, button2Y, buttonW, buttonH, 'black', 0, 'Info', buttonfontSize, function () {
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

    buttons[2] = new Button(-buttonW, button3Y, buttonW, buttonH, 'black', 0, 'Scores', buttonfontSize, function () {

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

    buttons[3] = new Button(-buttonW, button4Y, buttonW, buttonH, 'black', 0, 'Settings', buttonfontSize, function () {

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
    
if(localStorage.getItem('clicks')>3200){
buttons[4] = new Button(-buttonW, button5Y, buttonW, buttonH, 'black', 0, 'STATS', buttonfontSize, function () {

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
currMenu='newGame';

    buttons[buttons.length] = new Button(canvas.width, button1Y, buttonW, buttonH, 'black', 0, 'Binary Game', canvas.width * 0.08, function () {
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
    
    buttons[buttons.length] = new Button(canvas.width+1000, button1Y, buttonW/5, buttonH, 'black', 0, '?', canvas.width * 0.08, function () {
        alert = new Alert('', 'red', canvas.width * 0.08, 5,'BINARY','Dont tap 0 !');
    })
    buttons[buttons.length-1].type='help';
    


    if (localStorage.getItem('bin') >= 300) {

        buttons[buttons.length] = new Button(canvas.width, button2Y, buttonW, buttonH, 'black', 0, 'Fibonacci', buttonfontSize, function () {
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
            buttons[buttons.length] = new Button(canvas.width+1000, button2Y, buttonW/5, buttonH, 'black', 0, '?', canvas.width * 0.08, function () {
        alert = new Alert('', 'red', canvas.width * 0.05, 5,'Fibonacci: number after the first two ','is the sum of the two preceding ones','Example: 1+1=2 then 1+2=3 so 2+3=5');
    })
    buttons[buttons.length-1].type='help';

    } else {

        buttons[buttons.length] = new Button(canvas.width, button2Y, buttonW, buttonH, 'red', 0, 'LOCKED', buttonfontSize, function () {
            navigator.vibrate(500);
            alert = new Alert('', 'red', canvas.width * 0.08, 10,'get 300 in binary','to unlock this mode');
        })

    }
if(localStorage.getItem('bin')>=300){
    if(localStorage.getItem('fib')>=20||localStorage.getItem('bin')>=450){
        buttons[buttons.length] = new Button(canvas.width, button3Y, buttonW, buttonH, 'black', 0, 'Prime Numbers', canvas.width * 0.065, function () {
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
                    primGame();
                }
            }
            
        })
        
     buttons[buttons.length] = new Button(canvas.width+1000, button3Y, buttonW/5, buttonH, 'black', 0, '?', canvas.width * 0.08, function () {
        alert = new Alert('', 'red', canvas.width * 0.05, 5,'A PRIME NUMBER is a natural number','greater than 1 that has no positive','divisors other than 1 and itself');
    })
    buttons[buttons.length-1].type='help';
    }else {
        buttons[buttons.length] = new Button(canvas.width, button3Y, buttonW, buttonH, 'red', 0, 'LOCKED', buttonfontSize, function () {
            navigator.vibrate(500);
            alert = new Alert('', 'red', canvas.width * 0.07, 10,'get 20 in fibonacci ','or 450 in binary','to unlock this mode');
        })
    }
}
    
    
    buttons[buttons.length] = new Button(canvas.width, button5Y, buttonW, buttonH, 'black', 0, '< Back', buttonfontSize, function () {
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
        if(!buttons[i].type){
        buttons[i].animate = function () {
            if (this.x > buttonX) this.x -= buttonsAnimSpeed;
            else {
                animation = false;
                delete this.animate;
            }
        }
        }else if(buttons[i].type=='help'){
            
            buttons[i].animate = function () {
            if (this.x > buttonX+buttonW+buttonW/10) this.x -= buttonsAnimSpeed;
            else {
                animation = false;
                delete this.animate;
            }
        }
        }
        
    }

}

//////////////////////////////////////HIGHSCORE !/////////////////
function highScore() {
    buttons = [];
    napis = [];
    currMenu='highScore';

    buttons[buttons.length] = new Button(canvas.width, button5Y, buttonW, buttonH, 'black', 0, '< Back', buttonfontSize, function () {
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

    napis[0] = new Napis(canvas.width, canvas.height / 5, 'white', 'HIGHSCORES:', buttonfontSize);
    napis[1] = new Napis(canvas.width, canvas.height / 3.6, 'hsla(82, 0%, 51%, 1)', 'Binary game:');
    napis[2] = new Napis(canvas.width, canvas.height / 3, 'white', 'High Score: ' + localStorage.getItem('bin') || 0);
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
        napis[3] = new Napis(canvas.width, canvas.height / 2.4, 'hsla(82, 0%, 51%, 1)', 'Fibonacci:');
        napis[3].animate = function () {
            if (this.x > canvas.width / 5) this.x -= buttonsAnimSpeed;
        }
        napis[4] = new Napis(canvas.width, canvas.height / 2.1, 'white', 'High Score: ' + localStorage.getItem('fib'),buttonfontSize);
        napis[4].animate = function () {
            if (this.x > 50) this.x -= buttonsAnimSpeed;
        }
    }
    
      if (localStorage.getItem('prm') > 0) {
        napis[5] = new Napis(canvas.width, canvas.height / 1.8, 'hsla(82, 0%, 51%, 1)', 'Prime Numbers:');
        napis[5].animate = function () {
            if (this.x > canvas.width / 5) this.x -= buttonsAnimSpeed;
        }
        napis[6] = new Napis(canvas.width, canvas.height / 1.6, 'white', 'High Score: ' + localStorage.getItem('prm'),buttonfontSize);
        napis[6].animate = function () {
            if (this.x > 50) this.x -= buttonsAnimSpeed;
        }
    }


}
////////////////////////////////////INFO///////////////////////////////
function info() {
    buttons = [];
    napis = [];
    currMenu='info';
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
    buttons[buttons.length] = new Button(canvas.width, button5Y, buttonW, buttonH, 'black', 0, '< Back', buttonfontSize, function () {
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
    currMenu='settings';
    buttons[buttons.length] = new Button(canvas.width, button1Y, buttonW, buttonH, 'black', 0, 'Fonts', buttonfontSize, function () {
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


    buttons[buttons.length] = new Button(canvas.width, button2Y, buttonW, buttonH, 'black', 0, 'Particles', buttonfontSize, function () {
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
    
        buttons[2] = new Button(canvas.width, button3Y, buttonW, buttonH, 'black', 0, 'Music', buttonfontSize, function () {
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



    buttons[3] = new Button(canvas.width, button5Y, buttonW, buttonH, 'black', 0, '< Back', buttonfontSize, function () {
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
    currMenu='fonts';
    buttons[0] = new Button(canvas.width, button1Y, buttonW, buttonH, 'black', 0, 'test', buttonfontSize, function () {
        currFont = 'BalooThambi';
        localStorage.setItem('font', 'BalooThambi');
        startfSize = canvas.width * 0.13;
        localStorage.setItem('startfSize', startfSize);

        this.img = buttonClk;
        buttons[1].img = buttonImg;
        buttons[2].img = buttonImg;
        buttons[3].img = buttonImg;
    }, 'BalooThambi');

    buttons[1] = new Button(canvas.width, button2Y, buttonW, buttonH, 'black', 0, 'test', buttonfontSize, function () {
        currFont = 'IrishGrover';
        localStorage.setItem('font', 'IrishGrover');
        startfSize = canvas.width * 0.15;
        localStorage.setItem('startfSize', startfSize);

        buttons[0].img = buttonImg;
        buttons[1].img = buttonClk;
        buttons[2].img = buttonImg;
        buttons[3].img = buttonImg;
    }, 'IrishGrover')

    buttons[2] = new Button(canvas.width, button3Y, buttonW, buttonH, 'black', 0, 'test', buttonfontSize, function () {
        currFont = 'SourceSerifPro';
        localStorage.setItem('font', 'SourceSerifPro');
        startfSize = canvas.width * 0.15;
        localStorage.setItem('startfSize', startfSize);

        buttons[0].img = buttonImg;
        buttons[1].img = buttonImg;
        buttons[2].img = buttonClk;
        buttons[3].img = buttonImg;
    }, 'SourceSerifPro')

    buttons[3] = new Button(canvas.width, button4Y, buttonW, buttonH, 'black', 0, 'test', buttonfontSize, function () {
        currFont = 'PermanentMarker';
        localStorage.setItem('font', 'PermanentMarker');
        startfSize = canvas.width * 0.17;
        localStorage.setItem('startfSize', startfSize);

        buttons[0].img = buttonImg;
        buttons[1].img = buttonImg;
        buttons[2].img = buttonImg;
        buttons[3].img = buttonClk;
    }, 'PermanentMarker')

    buttons[4] = new Button(canvas.width, button5Y, buttonW, buttonH, 'black', 0, '< Back', buttonfontSize, function () {
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
        case "BalooThambi":
            buttons[0].img = buttonClk;
            break;

        case "IrishGrover":
            buttons[1].img = buttonClk;
            break;

        case "SourceSerifPro":
            buttons[2].img = buttonClk;
            break;

        case "PermanentMarker":
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
    currMenu='stats';
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
    
buttons[0] = new Button(canvas.width, button5Y, buttonW, buttonH, 'black', 0, '< Back', buttonfontSize, function () {
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
