import BaseOcto from "../../classes/base-octo"

export default class Octo extends BaseOcto {
  constructor(p5, tokenData) {
    super(p5, tokenData)
    this.setupDialogues()
  }

  flipDirection() {
    this.direction *= -1
    setTimeout(this.flipDirection.bind(this), this.p5.random(4000, 8000))
  }

  setupDialogues() {
    this.dialogues = [
      this.owner.name !== null
        ? `My owner is ${this.owner.name}.`
        : `Does my owner have a name?`,
      this.rarity !== null
        ? `I am ${Math.floor(this.rarity * 100)}% rare, so they say.`
        : `Wait, I don't know my rarity?`,
      `My name is ${this.name}.`,
      `I was created by Moonbitz.`,
      `Check out twitter @moonbitzzz.`,
      `I love hot springs.`,
      `I am a generative NFT.`,
      `Mint your own HashOctoz at www.fxhash.xyz`,
      `We are HashOctoz!`,
      `We live on the Tezos blockchain.`,
      `There will be 500 unique HashOctoz when fully minted.`,
      `I was created on ${new Date(this.createdAt).toLocaleDateString()}.`,
    ]
  }

  randomizeDialogueIndex() {
    this.dialogueIndex = Math.floor(this.p5.random(this.dialogues.length))
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

    // create mask
    let startY = this.pg.height
    if (this.y > 90) {
      // bottom row
      startY = 24
    } else if (this.y > 65) {
      // middle row
      startY = 25
    }
    this.maskImg = this.generateMaskImg(startY)
    // apply mask
    this.img.mask(this.maskImg)
  }

  generateMaskImg(startY) {
    const y = startY + Math.floor(this.p5.random(-2, 2))
    const pg = this.p5.createGraphics(36, 36)
    pg.pixelDensity(1)
    pg.fill(255)
    pg.rect(0, 0, pg.width, y)
    pg.fill(0, 0, 200, 40)
    pg.rect(0, y, pg.width, pg.height)
    return pg
  }

  displayDialogue(pg) {
    this.p5.push()
    // translate(this.x * factor, this.y * factor);
    this.p5.translate(0, this.p5.height * 0.8)
    // flat black rect
    this.p5.fill(0)
    this.p5.rect(0, this.p5.height * 0.1, this.p5.width, this.p5.height * 0.1)
    // thumb
    this.p5.image(
      this.img,
      this.p5.width * 0.01,
      0,
      this.p5.width * 0.2,
      this.p5.width * 0.2
    )

    // bubble group
    this.p5.push()
    this.p5.translate(this.p5.width * 0.2, this.p5.height * -0.01)
    // bubble
    this.p5.fill(255)
    this.p5.noStroke()
    this.p5.rect(
      0,
      0,
      this.p5.width * 0.75,
      this.p5.height * 0.18,
      this.p5.width * 0.01
    )
    this.p5.beginShape()
    this.p5.vertex(-this.p5.width * 0.02, this.p5.height * 0.15)
    this.p5.vertex(0, this.p5.height * 0.12)
    this.p5.vertex(0, this.p5.height * 0.14)
    this.p5.endShape()
    // text
    this.p5.fill(0)
    this.p5.textSize(this.p5.height * 0.04)
    this.p5.textAlign(this.p5.LEFT)
    this.p5.text(
      this.dialogues[this.dialogueIndex],
      this.p5.width * 0.01,
      this.p5.height * 0.008,
      this.p5.width * 0.75,
      this.p5.height * 0.2
    )
    this.p5.pop()
    this.p5.pop()
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
