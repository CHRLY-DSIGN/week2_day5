class Bullet {
  constructor(ctx, playerPosX, playerPosY, playerPosYInitial, playerWidth, playerHeight) {
    this.ctx = ctx;

    this.pos = {
      x: playerPosX + playerWidth,
      y: playerPosY + (playerHeight / 2),
      initialY: playerPosYInitial
    }

    this.playerHeight = playerHeight

    this.radius = 10;

    this.speed = {
      x: 10,
      y: 1
    }

    this.gravity = 1;
  }

  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.beginPath();
    this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.fillStyle = "black";

    this.move()
  }

  move() {
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;

    this.speed.y += this.gravity;


    if (this.pos.y >= this.pos.initialY + this.playerHeight) {
      this.speed.y *= -1;
    }
  }
}