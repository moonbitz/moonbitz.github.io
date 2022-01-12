/**
 * reusable Octo class
 * extend as necessary
 */
export default class Octo {
  constructor(p5, tokenData) {
    this.p5 = p5
    this.tokenData = tokenData
    this.hash = tokenData.generationHash
    this.owner = tokenData.owner
    this.name = tokenData.metadata.name
    this.rarity = tokenData.rarity
    this.createdAt = tokenData.createdAt
    this.thumb = tokenData.metadata.thumbnailUri

    this.origWidth = 36
    this.origHeight = 36
    this.width = this.origWidth
    this.height = this.origHeight
    this.x = 0
    this.y = 0
    this.direction = 1

    this.setupDialogues()
  }

  setImageData(imageData) {
    this.imageData = imageData
  }

  flipDirection() {
    this.direction *= -1
    setTimeout(this.flipDirection.bind(this), this.p5.random(4000, 8000))
  }

  setAttributes(attr) {
    this.attributes = attr
    this.setImages()
  }

  setImages() {
    let idx
    idx = this.attributes.findIndex(item => item.name === "body")
    this.bodyFill = this.imageData["bodyFill"][this.attributes[idx].value - 1]
    this.body = this.imageData["body"][this.attributes[idx].value - 1]
    idx = this.attributes.findIndex(item => item.name === "eyes")
    this.eyes = this.imageData["eyes"][this.attributes[idx].value - 1]
    idx = this.attributes.findIndex(item => item.name === "mouth")
    this.mouth = this.imageData["mouth"][this.attributes[idx].value - 1]
    idx = this.attributes.findIndex(item => item.name === "hair")
    this.hair = this.imageData["hair"][this.attributes[idx].value - 1]
    idx = this.attributes.findIndex(item => item.name === "extra")
    this.extra = this.imageData["extra"][this.attributes[idx].value - 1]
  }

  createOctoGraphics() {
    const pg = this.p5.createGraphics(this.origWidth, this.origHeight)
    pg.pixelDensity(1)
    pg.image(this.bodyFill, 0, 0)
    pg.image(this.body, 0, 0)
    pg.image(this.eyes, 0, 0)
    pg.image(this.mouth, 0, 0)
    if (this.hair) pg.image(this.hair, 0, 0)
    if (this.extra) pg.image(this.extra, 0, 0)
    this.pg = pg
  }

  createOctoImage() {
    const img = this.p5.createImage(this.pg.width, this.pg.height)
    img.copy(
      this.pg,
      0,
      0,
      this.pg.width,
      this.pg.height,
      0,
      0,
      img.width,
      img.height
    )
    this.img = img
  }

  isHovered(mx, my) {
    if (
      mx > this.x - this.width / 2 &&
      mx < this.x + this.width / 2 &&
      my > this.y - this.height / 2 &&
      my < this.y + this.height / 2
    ) {
      return true
    }
    return false
  }

  setPosition(x, y) {
    this.x = x
    this.y = y
  }

  display(pg) {
    pg.push()
    if (this.hover === true) {
      pg.tint(200, 255, 100)
    }
    pg.translate(this.x, this.y)
    pg.scale(this.direction, 1)
    pg.imageMode(this.p5.CENTER)
    pg.image(this.img, 0, 0)
    pg.pop()
  }
}
