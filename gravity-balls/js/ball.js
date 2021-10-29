class Ball {
  constructor(ctx, canvasSize, posX, posY, width, height, speedX, speedY, imageName) {
    this.ctx = ctx
    this.canvasSize = canvasSize

    this.pos = {
      x: posX,
      y: posY
    }

    this.size = {
      width: width,
      height: height
    }

    this.speed = {
      x: speedX,
      y: speedY
    }

    this.ballImage = imageName

    this.imageInstance = undefined

    this.physics = {
      gravity: 0.4
    }

    this.init()
  }

  init() {
    this.imageInstance = new Image()
    this.imageInstance.src = `img/${this.ballImage}`
  }

  draw() {
    this.ctx.drawImage(this.imageInstance, this.pos.x, this.pos.y, this.size.width, this.size.height)
  }

  move() {
    this.pos.x += this.speed.x
    this.pos.y += this.speed.y

    //limites de la pantalla
    this.pos.y + this.size.height > this.canvasSize.height - 100 ? this.speed.y *= -1 : null
    this.pos.x + this.size.width > this.canvasSize.width ? this.speed.x *= -1 : null

    //gravedad / aceleración
    this.speed.y += this.physics.gravity
  }
}