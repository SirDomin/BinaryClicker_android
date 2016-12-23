var Tile = function (x, y, row_id, col_id, fSize,color) {
        
        this.x = x;
        this.y = y;
        this.row_id = row_id;
        this.col_id = col_id;
        this.clicked = 0;
        this.value = 1;
        this.ok = 0;
        this.fSize = Math.floor(fSize);
        this.opacity=1;
        this.color=color;
        this.w=canvas.width/3;
        this.h=canvas.height/3;
  
    this.color=this.color.split(',').splice(0,3);
     this.color[3]=" "+this.opacity+")";
    this.color=this.color.toString();
        this.render = function () {
            
          
           this.color=this.color.split(',').splice(0,3);
             this.color[3]=" "+this.opacity+")";
    this.color=this.color.toString();
                ctx.fillStyle="black";
                ctx.fillRect(this.x,this.y,this.w,this.h)
                ctx.fillStyle=this.color;
            ctx.fillRect(this.x+3,this.y+3,this.w-6,this.h-6);
            
    
            ctx.font = this.fSize + 'px '+currFont;
            ctx.fillStyle = 'black';
            if(gamemode=='bin'){
            ctx.fillText(this.value, this.x + canvas.width / 10, this.y + canvas.height / 5.1);
            }else 
                ctx.fillText(this.value, this.x + 20, this.y + canvas.height / 5.1);
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
    this.color = color || 'black';
    this.onclick = onclick;
    this.napis = napis;
    this.font=font;
    this.img=buttonImg;
    if(this.fSize>this.h)this.fSize=this.h;
    this.render = function () {
        if(this.font){
         ctx.font = this.fSize + "px "+this.font;
        }else ctx.font=this.fSize+"px "+currFont;
         
        ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
        
        
           
        
        ctx.fillStyle = this.color;
        ctx.fillText(this.napis, this.x +5, this.y +this.fSize*1.5);

    }
}

var Napis = function (x, y, color, napis, fSize) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.napis = napis;
    this.fSize = Math.floor(fSize);
    //if(this.napis.length>=14)this.fSize-=((this.napis.length-16)*this.fSize/30)
    this.render = function () {
       
        ctx.font = this.fSize + "px "+currFont;
        ctx.fillStyle = this.color;
        ctx.fillText(this.napis, this.x, this.y);
    }
}

var Alert = function (napisik, color,fSize,xPos,arg2,arg3,arg4) {
   
        this.fSize=Math.floor(fSize);
        this.napis = napisik;
        this.color = color;
        this.time = now;
        this.y = canvas.height / 2.04;
        this.x = xPos;
        this.napisId=napis.length
        this.napisId2=napis.length+1;       
        this.napisId3=napis.length+2;       
        this.napisId4=napis.length+3;       
        this.arg2=arg2 || ' ';
        this.arg3=arg3 || ' ';
        this.arg4=arg4 || ' ';
    
    
        napis[this.napisId] = new Napis(canvas.width/10, canvas.height / 1.2, 'hsla(110, 100%, 50%, 1) ','Tap to continue...');
        napis[this.napisId2] = new Napis(10, canvas.height / 5, 'white',this.arg2,this.fSize);
        napis[this.napisId3] = new Napis(10, canvas.height / 4, 'white',this.arg3,this.fSize);
        napis[this.napisId4] = new Napis(10, canvas.height / 3.3, 'white',this.arg4,this.fSize);
    
    
           
        
       
        this.render = function () {
            ctx.fillStyle='black';
            ctx.fillRect(0,0,canvas.width,canvas.height);
            
                
                napis[this.napisId].render();
                napis[this.napisId2].render();
                napis[this.napisId3].render();
                napis[this.napisId4].render();
               
                
            
            ctx.font=this.fSize+"px "+currFont;
            ctx.fillStyle = this.color;
            ctx.fillText(this.napis, this.x, this.y);
         
        }
    }


var Particle=function(x,y){
   
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
