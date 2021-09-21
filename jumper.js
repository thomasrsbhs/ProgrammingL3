class Player {
  constructor(x, y, w, h, c, xSpeed, ySpeed, yVel, thrust) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.yVel = yVel;
    this.thrust = thrust;

    // this.gravity = gravity;
    // this.gravitySpeed = gravitySpeed;
  } //end func

  gravity() {
    // this.gravitySpeed += this.y;
    // this.y += this.speedY + this.gravitySpeed;
  } //end func

  drawRect() {
    canvasContext.fillStyle = this.c;
    canvasContext.fillRect(this.x, this.y, this.w, this.h);
  } //end func

  

  playerMove() {

    this.y += this.yVel; //gravity
    this.thrust = -8;
    this.yVel += 0.25;
    // this.thrust += -5; //gravity
    // console.log(this.yVel)

    if(rightPressed) {
      this.x += this.xSpeed;
      if(this.x > canvas.width){ // once out of right screen wrap to left 
        this.x = 0;
      }
    }
    if(leftPressed){
      this.x -= this.xSpeed;
      if (this.x < 0) { // once out of left side of screen wrap to right
        this.x = canvas.width - this.w;
      }
    }
    if(spacePressed && this.y > 0) { // cant go out of top of screen
      // this.y -= this.ySpeed;
      this.yVel = this.thrust;
    }

    if(this.y > canvas.height){ //player fall loop
      this.y = 0 + this.h;
      this.x = canvas.width / 2 - this.h;
      // this.yVel = this.thrust;
      // this.ySpeed = 5;
    }
    // if(spacePressed = false && this.y <= this.h){
    //   this.ySpeed = 0;
    //   this.thrust = 0;
    //   this.yVel = 0;
    //   // this.y += this.ySpeed;
      
    // }

    if (this.y > canvas.height - this.h) {

      this.yVel = thrust;
      this.ySpeed = 3;
    }

  } //end func
}
