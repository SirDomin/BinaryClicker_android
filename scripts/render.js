function render() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);


    if (game) {

        for (var i = 0; i < 5; i++) {

            for (var o = 0; o < 3; o++) {

                tiles[i][o].render();

            }

        }

        ////////////////POINT TABLE(IN GAME)/////////////////////////
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height / 10);
        ctx.fillStyle = "white";
        ctx.font = Math.floor(canvas.width*0.08)+"px "+currFont;
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
        ctx.fillStyle = 'white';

        ctx.font = Math.floor(canvas.width*0.1)+"px "+(localStorage.getItem('font') || 'burnstown')  ;
        ctx.fillText('BINARY CLICKER', canvas.width / 4-(localStorage.getItem('startfSize') || Math.floor(canvas.width*0.08)), canvas.height / 12);




        for (var i = 0; i < buttons.length; i++) {

            buttons[i].render();
            if(buttons[i].animate)buttons[i].animate();
            
        }

    }
    for (var i = 0; i < napis.length; i++) {
        napis[i].render();
        if (napis[i].animate) napis[i].animate();
    }
    if (alert)
        alert.render();
    if(animate)
        animate();
    //////////////////////////POINTS (DEBUGMODE)////////////////////////

    //for(var i=0;i<point.length;i++){
    //    point[i].render();
    //}


}
