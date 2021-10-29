class Obstacle {
  constructor(ctx, posX, posY, width, height, speedX) {
    this.ctx = ctx

    this.pos = {
      x: posX,
      y: posY
    }

    this.size = {
      width: width,
      height: height
    }

    this.speed = {
      x: speedX
    }
  }

  draw() {
    this.ctx.fillRect(this.pos.x, this.pos.y, this.size.width, this.size.height)
  }

  move() {
    this.pos.x -= this.speed.x
  }
}