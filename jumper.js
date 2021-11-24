class Player {
  constructor(x, y, w, h, c, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;

    this.gravity = 0.05;
    this.gravitySpeed = 0;
  }
  
  this.newPos = function() {
    this.gravitySpeed += this.gravity;
    this.y += this.speedY + this.gravitySpeed;
  }

  drawRect() {
    canvasContext.fillStyle = this.c;
    canvasContext.fillRect(this.x, this.y, this.w, this.h);
  }


  playerMove() {

    if (rightPressed) {
      this.x += this.xSpeed;
      if (this.x > canvas.width) { // once out of right screen wrap to left 
        this.x = 0;
      }
    }
    if (leftPressed) {
      this.x -= this.xSpeed;
      if (this.x < 0) { // once out of left side of screen wrap to right
        this.x = canvas.width - this.w;
      }
    }
    if (spacePressed && this.y > 0) { // cant go out of top of screen
      this.y -= this.ySpeed;

      if (spacePressed = false && this.y > 0) {
        this.y += this.ySpeed;
      }
    }

}