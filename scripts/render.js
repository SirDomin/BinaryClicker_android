function render() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle="black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    if (game) {

        for (var i = 0; i < 5; i++) {

            for (var o = 0; o < 3; o++) {
                 if(updating)tiles[i][o].update();
                    else then=now;
                tiles[i][o].render();
                if(tiles[i][o].animate)tiles[i][o].animate();
            }

        }

        ////////////////POINT TABLE(IN GAME)/////////////////////////
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height / 10);
        ctx.fillStyle = "white";
        ctx.font = Math.floor(canvas.width*0.06)+"px "+currFont;
      
        ctx.fillText("POINTS: " + points, 20, canvas.height / 12);
            if(gamemode=='bin')
                ctx.fillText("Speed: "+Math.floor(speed),canvas.width / 1.7, canvas.height / 12)
        if (gamemode == 'fib') {
            
            ctx.fillText(fibTxt, canvas.width / 1.8, canvas.height / 12);
        }
        

    }

    if (menu) {
        //////////////////////RENDERING MENU///////////
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
          
            if(particles){
                ctx.fillStyle="hsla(110, 100%, 50%, 1)";
                for(var i=0;i<particles.length;i++)
                    particles[i].render();
            }
         
            
        
        ctx.fillStyle = 'white';

        ctx.font = Math.floor(canvas.width*0.1)+"px "+(localStorage.getItem('font') || 'SourceSerifPro')  ;
        ctx.fillText('BINARY CLICKER', canvas.width / 4-startfSize, canvas.height / 12);




        for (var i = 0; i < 7; i++) {
            if(buttons[i]){
                buttons[i].render();
                if(buttons[i].animate)buttons[i].animate();
            }
            if(napis[i]){
                napis[i].render();
                if (napis[i].animate) napis[i].animate();
            }
        }

    }

    if (alert)
        alert.render();
    if(animate)
        animate();
    if(prompt)
        prompt.render();
    //////////////////////////POINTS (DEBUGMODE)////////////////////////

    //for(var i=0;i<point.length;i++){
    //    point[i].render();
    //}


}
