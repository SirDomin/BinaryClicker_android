var canvas = document.getElementById("canvas");



canvas.width = window.innerWidth;
canvas.height = window.innerHeight-(100);


/////////////////////////////////

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
currSpeed=speed;
    tiles = [];
    tiles[5] = [];

    for (var i = 0; i < 5; i++) {

        tiles[i] = [];

        for (var o = 0; o < 3; o++) {

            x = i + 3;
            tiles[i][o] = new Tile(o * canvas.width / 3, -x * canvas.height / 3, i, o,canvas.width*0.2,getColor());

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

    currSpeed=speed;
    for (var i = 0; i < 5; i++) {

        tiles[i] = [];

        for (var o = 0; o < 3; o++) {

            x = i + 1;
            tiles[i][o] = new Tile(o * canvas.width / 3, -x * canvas.height / 3, i, o,canvas.width*0.1,getColor());

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
    currSpeed=speed;
    points = 0;
    rows = 0;

    
    for (var i = 0; i < 5; i++) {

        tiles[i] = [];

        for (var o = 0; o < 3; o++) {

            x = i + 1;
            tiles[i][o] = new Tile(o * canvas.width / 3, -x * canvas.height / 3, i, o,canvas.width*0.1,getColor());

        }
       
        newValue(i, gamemode);

    }

    tiles[5] = [];
}


mainMenu();


document.addEventListener("pause", onPause, false);
document.addEventListener('deviceready',function(){
 //get the installed plugin instance
service = Cocoon.Ad;

//multiplatform default configuration
service.configure({
  ios: {
                      banner:"ca-app-pub-7686972479101507/8873903476",
                      interstitial:"ca-app-pub-7686972479101507/8873903476",
                 },
                 android: {
                      banner:"ca-app-pub-7686972479101507/4443703872",
                      interstitial:"ca-app-pub-7686972479101507/4443703872"
                 }
});

//Create banner: optional AdUnit and BannerSize arguments
 banner = service.createBanner();

//Configure banner listeners
banner.on("load", function(){
   console.log("Banner loaded " + banner.width, banner.height);
    baner=true;
   banner.show();
});

banner.on("fail", function(){
   console.log("Banner failed to load");
});

banner.on("show", function(){
   console.log("Banner shown a modal content");
});

banner.on("dismiss", function(){
   console.log("Banner dismissed the modal content");
});

banner.on("click", function(){
   console.log("Banner clicked");
});

 //load banner
banner.load();

//Show or hide banner
banner.show();
banner.hide();

//Automatic banner layout
banner.setLayout(Cocoon.Ad.BannerLayout.BOTTOM_CENTER);



});


document.addEventListener("backbutton",onBackKeyDown,false);

canvas.addEventListener('touchstart', function (e) {

    
    mouseX = e.changedTouches[0].pageX;
    mouseY = e.changedTouches[0].pageY + speed * 5;
    
   // particles[particles.length]=new Particle(mouseX,mouseY)
    
    if (game && mouseY > canvas.height / 10&&!animate) {
        
        lastSpeed=speed;
        
         longt=setTimeout(longtouch,200);
        
            for (var i = 0; i < 1; i++) {
            for (var o = 0; o < 3; o++) {

                if (mouseX >= tiles[i][o].x && mouseX <= tiles[i][o].x + canvas.width / 3 && mouseY >= tiles[i][o].y && mouseY <= tiles[i][o].y + canvas.height / 3){
                    clicks++;
                        if (spr(tiles[i][o])) {
                            tiles[i][o].color=getTileColor();
                            if(!tiles[i][o].animate){
                                points += 1;
                           tiles[i][o].animate=function(){
                               tiles[0][0].opacity-=.1;
                               tiles[0][1].opacity-=.1;
                               tiles[0][2].opacity-=.1;
                          
                             
                               if(this.opacity<=-0.1){
                                   
                                   
                         
                                   this.animate=false;
                                   this.clicked = 1; 
                              
                               } }
                            }
                            
                 
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

canvas.addEventListener('touchend',function(){
    if(game&&!animate){
        
        speed=currSpeed+(points-4)*(canvas.height / 45600);
        clearTimeout(longt);
    }
})
/////////////////////////////////////LOSE && SET DEFAULT SCORES////////////////////////////////////////////////////////////////////////
function lose(why,i,o,y) {
    
  if(parseInt(audioSound)){
    if(audio){
        //audio.pause();
        audio.currentTime=0;
       
    }

    
}
    
    
    if(why=='ooc'){
        navigator.vibrate(500);
        tiles[0][0].color='hsla(0, 100%, 39%, 1)';
        tiles[0][1].color='hsla(0, 100%, 39%, 1)';
        tiles[0][2].color='hsla(0, 100%, 39%, 1)';
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
        tiles[i][o].color='hsla(0, 100%, 39%, 1)';;
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


///////////////////////////////////////////////////////////////////////////////
main();
