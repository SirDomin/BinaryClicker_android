var canvas = document.getElementById("canvas");



canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//canvas.width =480
//canvas.height=640;
primNumbers=[];
primTab=[];
iter=0;
iterTab=0;



function Testuj(p)
{
  var i;

  i = 2;
  while(i < p) if(!(p % i++)) return 0;
  return 1;
}


  var s,ile,lp,p;

  ile = 105;

    lp = 0; p = 2;
    while(lp < ile)
    {
      if(Testuj(p))
      {
        primNumbers[lp]=p;
          
          lp++;
      }
      p++;
    }
  




currMenu='mainMenu';
prompt=false;
alert = false;
point = [];
buttons = [];
game = false;
menu = true;
tileRows=0;
speed = 0;
ctx = canvas.getContext("2d");

    startfSize=localStorage.getItem('startfSize') || Math.floor( canvas.width * 0.15);
    currFont=localStorage.getItem('font') || 'SourceSerifPro' ;
font = canvas.width / 30;

animation=false;


//music.loop=true;
//music.play();
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
            tiles[i][o] = new Tile(o * canvas.width / 3, -x * canvas.height / 3, i, o,canvas.width*0.2,'white');

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
            tiles[i][o] = new Tile(o * canvas.width / 3, -x * canvas.height / 3, i, o,canvas.width*0.1,'white');

        }
       
        newValue(i, gamemode);

    }

    tiles[5] = [];
}

//////////////////////////////////////////////////////////////////////////////////////////

primGame=function(){
    
    gamemode = 'prm';
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
            tiles[i][o] = new Tile(o * canvas.width / 3, -x * canvas.height / 3, i, o,canvas.width*0.1,'white');

        }
       
        newValue(i, gamemode);

    }

    tiles[5] = [];
}


mainMenu();


document.addEventListener("pause", onPause, false);



document.addEventListener("backbutton",onBackKeyDown,false);

canvas.addEventListener('touchstart', function (e) {

    mouseX = e.changedTouches[0].pageX;
    mouseY = e.changedTouches[0].pageY + speed * 5;
    
   // particles[particles.length]=new Particle(mouseX,mouseY)
    
    if (game && mouseY > canvas.height / 10&&!animate) {

        for (var i = 0; i < 1; i++) {
            for (var o = 0; o < 3; o++) {

                if (mouseX >= tiles[i][o].x && mouseX <= tiles[i][o].x + canvas.width / 3 && mouseY >= tiles[i][o].y && mouseY <= tiles[i][o].y + canvas.height / 3){
                    clicks++;
                        if (spr(tiles[i][o])) {
    
                        tiles[i][o].clicked = 1;
                        points += 1
                        if (gamemode == 'fib') {
                            tmpFib[0] = tmpFib[1];
                            tmpFib[1] = fibTxt = tiles[i][o].value;
                            fibTxt = tmpFib[0] + "+" + tmpFib[1] + "= ?";
                        }
    
                        if (rows >= 6) delete tablicaFib[tiles[i][o].value];
    
                    } else {
    
                        lose('click',i,o,tiles[i][o].y);
    
                    }
                }
            }
        }
    }
    if (menu&&!animation&&!alert) {

        for (var i = 0; i < buttons.length; i++) {

            if (mouseX >= buttons[i].x && mouseX <= buttons[i].x + buttons[i].w && mouseY >= buttons[i].y && mouseY <= buttons[i].y + buttons[i].h) {
                
                    
                        if(parseInt(buttonSound)){
                            var Baudio=new Audio("sound/button.ogg");
                            
                            Baudio.volume=0.3;
                            Baudio.play();
                        }
                        buttons[i].onclick();
             

            }
        }

    }else if(alert){
        delete napis[alert.napisId];
        delete napis[alert.napisId2];
        delete napis[alert.napisId4];
        delete napis[alert.napisId3];
        alert=false;
        
    }
})

/////////////////////////////////////LOSE && SET DEFAULT SCORES////////////////////////////////////////////////////////////////////////
function lose(why,i,o,y) {
    
  if(parseInt(audioSound)){
    if(audio)audio.pause();
    
    audio=new Audio("sound/Melodyjka.ogg");
    audio.loop=true;
    audio.volume=0.5;
    
    audio.play();
    
}
    
    
    if(why=='ooc'){
        navigator.vibrate(500);
        tiles[0][0].color='red';
        tiles[0][1].color='red';
        tiles[0][2].color='red';
            animate=function(){
                speed=-5;
                if(tiles[0][0].y<canvas.height-canvas.height/3){
                    speed=0;
                    menu=true;
                    if(!prompt){
                    animate=false;
                    game = false;
                        localStorage.setItem('lastScore', points);
                        
                        if (!localStorage.getItem(gamemode) || localStorage.getItem(gamemode) < points) {
                            localStorage.setItem(gamemode, points);
                        }
                    losuj=true;
                     
                    ms+=(now-then);
                        then=0;
                        localStorage.setItem('ms',ms);
                    mainMenu()
                    }
                }
            }
    }else if(why=='click'){
        navigator.vibrate(500);
        tiles[i][o].color='red';
        var y=y;
            animate=function(){
                speed=-5;
                if(tiles[i][o].y<y-(canvas.height/3)){
                    speed=0;
                    menu=true;
                    if(!prompt){
                    animate=false;
                    game = false;
                        localStorage.setItem('lastScore', points);
                        
                        if (!localStorage.getItem(gamemode) || localStorage.getItem(gamemode) < points) {
                            localStorage.setItem(gamemode, points);
                        }
                    losuj=true;
                        
                        ms+=(now-then);
                        then=0;
                        localStorage.setItem('ms',ms);
                    mainMenu()
                        
                        
                }
                }
            }
    }else{
      
        speed=0;
menu=true;
animate=false;
game = false;

        updating=true;
        then=0;
         mainMenu()
    }
    

    
    localStorage.setItem('clicks',clicks);
   
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
