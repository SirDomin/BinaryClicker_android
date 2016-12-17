var Tile = function (x, y, row_id, col_id, fSize) {
        
        
        this.x = x;
        this.y = y;
        this.row_id = row_id;
        this.col_id = col_id;
        this.clicked = 0;
        this.value = 1;
        this.ok = 0;
        this.fSize = Math.floor(fSize);
        this.image = tile1;

        this.render = function () {
            ctx.drawImage(this.image, this.x, this.y, canvas.width / 3, canvas.height / 3);
            ctx.font = this.fSize + 'px '+(localStorage.getItem('font') || 'burnstown')  ;
            ctx.fillStyle = 'black';

            ctx.fillText(this.value, this.x + canvas.width / 10, this.y + canvas.height / 5.1);

        }

        this.update = function () {
            this.y += speed;

        }


    }
    ///////////////////////////////BUTTON///////////////////////////
var Button = function (x, y, w, h, color, id, napis, fSize, onclick,font) {

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.fSize = Math.floor(fSize);
    this.id = id;
    this.color = color;
    this.onclick = onclick;
    this.napis = napis;
    this.font=font;
    this.img=buttonImg;
    this.render = function () {
        if(this.font){
         ctx.font = this.fSize + "px "+this.font;
        }else ctx.font=this.fSize+"px "+currFont;
         
        ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
        
        
           
   
        ctx.fillStyle = 'black';
        ctx.fillText(this.napis, this.x + this.w / 20, this.y + canvas.height / 12.8);

    }
}

var Napis = function (x, y, color, napis, fSize) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.napis = napis;
    this.fSize = Math.floor(fSize);
    this.render = function () {
        ctx.font = this.fSize + "px "+currFont;
        ctx.fillStyle = this.color;
        ctx.fillText(this.napis, this.x, this.y);
    }
}

var Alert = function (napis, color,fSize,xPos) {
   
        this.fSize=Math.floor(fSize);
        this.napis = napis;
        this.color = color;
        this.time = now;
        this.y = canvas.height / 2;
        this.x = xPos;
        this.render = function () {
            ctx.font=this.fSize+"px "+currFont;
            ctx.fillStyle = this.color;
            ctx.fillText(this.napis, this.x, this.y);
            if (now - this.time >= 1000) {
                alert = false;
            }
        }
    }

var Particle=function(x,y){
    console.log('created !');
    this.x=x || Math.random()*(canvas.width-20);
    this.y=y || 0-(Math.random()*canvas.height);
    this.value=Math.floor(Math.random()*2);
    this.fSize=Math.floor(Math.random()*20+30)
        this.render=function(){
          
            ctx.font=this.fSize+"px "+currFont;
            ctx.fillText(this.value,this.x,this.y);
            if(this.y<canvas.height)this.y+=this.fSize/5;
                else this.y=0;
        }

}

        
 //DEBUG MODE POINT
    //var Punkt=function(x,y){
    //    
    //    this.x=x;
    //    this.y=y;
    //    this.render=function(){
    //        
    //        ctx.fillStyle='red';
    //        ctx.fillRect(this.x-4,this.y-4,8,8);
    //        
    //    }
    //}
