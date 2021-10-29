const gravityGame = {
  title: 'Bouncing balls app yay',
  author: 'Teo',
  license: undefined,
  version: '1.0.0',
  desciption: 'Physics app',
  canvasDOM: undefined,
  ctx: undefined,
  canvasSize: { width: undefined, height: undefined },
  balls: [],
  keys: {
    SPACE: " "
  },

  init() {
    this.setContext()
    this.setDimensions()
    this.setListeners()

    this.start()
  },

  setContext() {
    this.canvasDOM = document.querySelector("#myCanvas")
    this.ctx = this.canvasDOM.getContext("2d")
  },

  setDimensions() {
    this.canvasSize.width = window.innerWidth
    this.canvasSize.height = window.innerHeight

    this.canvasDOM.setAttribute("width", this.canvasSize.width)
    this.canvasDOM.setAttribute("height", this.canvasSize.height)
  },

  start() {
    console.log("funcion entra")
    setInterval(() => {
      this.clearScreen()
      this.drawAll()
      this.moveAll()
      this.clearBalls()
    }, 1000 / 60)
  },

  createAll() {
    this.createBall()
  },

  createBall() {
    this.balls.push(new Ball(this.ctx, this.canvasSize, 100, 100, 40, 40, 10, 5, "basketball.png"))
  },

  drawAll() {
    this.drawBalls()
  },

  drawBalls() {
    this.balls.forEach(ball => ball.draw())
  },

  moveAll() {
    this.moveBalls()
  },

  moveBalls() {
    this.balls.forEach(ball => ball.move())
  },

  clearScreen() {
    this.ctx.clearRectconsole.log("funcion entra")(0, 0, this.canvasSize.width, this.canvasSize.height)
  },

  setListeners() {
    document.onkeyup = (e) => {
      if (e.key === this.keys.SPACE) {
        this.createBall()
      }
    }
  },

  clearBalls() {
    this.balls = this.balls.filter(ball => ball.pos.x > 0)
  }
}