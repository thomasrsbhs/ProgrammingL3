class Player { //player class vars for html
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
  } //end func


  draw() { // draws player square by, calls player vars from class into the html function
    canvasContext.fillStyle = this.c;
    canvasContext.fillRect(this.x, this.y, this.w, this.h);
  } //end func



  Move() { //player gravity and movement 
    // this.x = canvas.width / 2 - this.h;
    this.y += this.yVel; //gravity
    this.thrust = -5;
    this.yVel += 0.10; //bounce height & gravity strength
    // this.thrust += -5; //gravity
    // console.log(this.yVel)

    if (rightPressed) { //move right
      this.x += this.xSpeed;
      if (this.x > canvas.width) { // once out of right screen wrap to left 
        this.x = 0;
      }
    }
    if (leftPressed) { //move left
      this.x -= this.xSpeed;
      if (this.x < 0) { // once out of left side of screen wrap to right
        this.x = canvas.width - this.w;
      }
    }
    if (spacePressed && this.y > 0) { // cant go out of top of screen, jump
      // this.ySpeed = 3;
      this.yVel = this.thrust;
    }

    if (this.y > canvas.height) { //player fall loop
      this.y = 0 + this.h;
      this.x = canvas.width / 2 - this.h;
      lives -= 1; // loose lives when fall below screen
      deaths++;
      // this.yVel = this.thrust;
      // this.ySpeed = 5;
    }
    if (spacePressed == true && this.y <= 0) { //stops player bouncing out top of canvas (pYpos < canvas.height)
      this.ySpeed = 0;
      this.thrust = 0;
      this.yVel = 0;
      // this.y += this.ySpeed;
      spacePressed = false;
    }

    // if (this.y > canvas.height - this.h) { //stops player falling out the bottom of the screen (Bottom bounce)

    //   this.yVel = thrust;
    //   this.ySpeed = 3;
    // }

  } //end func
}