class Platform { //platform class vars for jumper.html x,y,w,h,c & platYspeed
  constructor(x, y, w, h, c, ySpeed) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.ySpeed = ySpeed;

  }

  draw() { //draws platforms calling platform class vars 
    canvasContext.fillStyle = this.c;
    canvasContext.fillRect(this.x, this.y, this.w, this.h);
  }

  Move() {
    this.y += this.ySpeed; // obstacles move down
    // this.x += this.xSpeed; // obstacles move across 

    if (this.x + this.w > canvas.width) {
      this.xSpeed *= -1;
    }
    if (this.x < 0) {
      this.xSpeed *= -1;
    }
    if (this.y > canvas.height) { //when platform reaches bottom of screen respawns at top
      this.w = 70; //platform width
      this.h = 10; //platform height
      this.x = Math.floor(Math.random() * (canvas.width - this.w)); //randomised platXpos spawn
      // this.xSpeed = Math.floor(Math.random()*(6 - 1) + 1);
      this.ySpeed = Math.floor(Math.random() * (3 - 1) + 2); //randomised platYspeed 

      this.y = 0 - this.h;
    }

  }

  hit() { //for platform collision of player

    if (this.y + this.h > player.y && this.y < player.y + player.h && this.x + this.w > player.x && this.x < player.x + player.w) {
      // spacePressed = true;
      player.y -= player.ySpeed;
      score += 1;

      if (player.y < canvas.height + player.h) { // stops player going above screen 
        ;
        player.ySpeed = 3;
        // player.y = 0; 
      } 
      else { // when not touching top screen run true 
        player.yVel = player.thrust;
        player.ySpeed = 5;
      }

      if (player.y > 0) {
        player.yVel = player.thrust;
      } else {
        player.yVel = 0;
      }
    }


  }



}