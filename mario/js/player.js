class Player {
  constructor(ctx, posX, posY, width, height, speedY, imageName) {
    this.ctx = ctx

    this.pos = {
      x: posX,
      y: posY,
      initialY: posY
    }

    this.size = {
      width: width,
      height: height
    }

    this.speed = {
      y: speedY
    }


    this.frames = 3
    this.framesIndex = 0

    this.imageInstance = undefined
    this.imageName = imageName

    this.bullets = []

    this.init()
  }

  init() {
    this.imageInstance = new Image()
    this.imageInstance.src = `img/${this.imageName}`
  }

  draw(framesCounter) {
    //ancho de un recorte this.imageInstance.width / this.frames
    this.ctx.drawImage(
      this.imageInstance,
      this.framesIndex * this.imageInstance.width / this.frames,  //inicio de recorte x
      0,                                                          //inicio de recorte y
      this.imageInstance.width / this.frames,                     //ancho de recorte
      this.imageInstance.height,                                  //alto de recorte
      this.pos.x,
      this.pos.y,
      this.size.width,
      this.size.height
    )

    if (framesCounter % 10 === 0) {
      this.animate()
    }
  }

  animate() {
    if (this.framesIndex === 2) {
      this.framesIndex = 0
    }
    this.framesIndex++
  }

  jump() {
    //Si estás en el suelo saltas!
    if (this.pos.y >= this.pos.initialY) {
      this.pos.y -= 30
      this.speed.y = -15
    }
  }

  move() {
    //Si no estás en el suelo cada vez caes más rápido
    if (this.pos.y < this.pos.initialY) {
      this.pos.y += this.speed.y
      this.speed.y += 0.6
    }
  }

  shoot() {
    this.bullets.push(new Bullet(this.ctx, this.pos.x, this.pos.y, this.pos.initialY, this.size.width, this.size.height))
  }


}