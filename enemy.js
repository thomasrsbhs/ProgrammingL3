class Enemy {
    constructor(x, y, w, h, c, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        
    }

    drawRect() {
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
      }
    
      enemyMove() {
        this.y += this.ySpeed; // obstacles move down
        this.x += this.xSpeed; // obstacles move across 
    
        if(this.x + this.w > canvas.width){
          this.xSpeed *= -1;
        }
        if(this.x < 0){
          this.xSpeed *= -1;
        }
        if(this.y > canvas.height){
          this.w = Math.floor(Math.random()*(40 - 10) + 10);
          this.h = this.w;
          this.x = Math.floor(Math.random()*(canvas.width - this.w));
          this.xSpeed = Math.floor(Math.random()*(6 - 1) + 1);
          this.ySpeed = Math.floor(Math.random()*(10 - 2) + 2);
    
          this.y = 0 - this.h;
        }
    
      }

      // playerDeath(){ //player collision
      //   return (this.x + this.w > player.x && this.x < player.x + player.w) && (this.y + this.h > player.y && this.y < player.y + player.h);
      // }
    






}
