import Octo from "./octo"
import { scaleUpAll, shuffle } from "../utils"

const bodyNums = 10
const extraNums = 6
const eyesNums = 24
const hairNums = 17
const mouthNums = 18

let dataIsLoaded = false

let scaleFactor = 1
let factor = 1 // used for resizing canvas

let octoz = []
let numOctoz = 10
let octoInitialized = false
let activeOcto = null

let displayDialogue = false

let positions = [
  [50, 34],
  [134, 46],
  [164, 56],
  [60, 74],
  [96, 72],
  [132, 78],
  [40, 92],
  [80, 96],
  [114, 98],
  [160, 92],
]

let saveImage = false

let collectionData = []

// static assets folder
const globalImagePath = `/assets`
const localImagePath = `/assets/images-hotsprings` // TODO: need to use local image directory such as ./images/hotsprings

const imageData = {
  body: [],
  bodyFill: [],
  eyes: [],
  mouth: [],
  hair: [],
  extra: [],
}

let pg

let bgImg // background
let fgImg // foreground
let starsImg // bg stars
let skyImg // sky bg
let rippleImg // update at interval
let steamImg
let fogImg

const origWidth = 200
const origHeight = 150

export default function HotSpringsSketch(p) {
  let state = {}

  p.updateWithProps = props => {
    // state = Object.assign(state, props)
  }

  p.preload = preload(p)
  p.setup = setup(p, state)
  p.draw = draw(p)

  p.mousePressed = mousePressed(p)
  p.keyTyped = keyTyped(p)
  p.windowResized = windowResized(p, state)
}

function preload(p) {
  return () => {
    fetch("https://api.fxhash.xyz/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `{
        generativeToken(id: 5164) {
          entireCollection {
            createdAt
            iteration
            metadata
            owner {
              id
              name
            }
            rarity
            generationHash
          }
        }
      }
      `,
      }),
    })
      .then(r => {
        return r.json()
      })
      .then(r => {
        collectionData = r.data.generativeToken.entireCollection

        // const len = collectionData.length
        // collectionData = collectionData.slice(len - 10, len);
        collectionData = shuffle(collectionData)
        dataIsLoaded = true
        console.log("collectionData:", collectionData)
        console.log(`
============================================================
HashOctoz Playground: Hot Springs by Moonbitz

Mint your own HashOctoz NFT at https://www.fxhash.xyz/generative/5164
Check out our twitter at https://twitter.com/moonbitzzz
============================================================
      `)
      })

    // TODO:
    // ideally code below should run after JSON has been loaded.
    // had problem with async operation, so doing it manually for now.
    // Object.keys(imageData).length
    for (const [key] of Object.entries(imageData)) {
      if (key === "body") {
        for (let i = 0; i < bodyNums; i++) {
          imageData[key].push(
            p.loadImage(
              `${globalImagePath}/images-octo/${key}/${p.nf(i + 1, 2)}.png`
            )
          )
          imageData["bodyFill"].push(
            p.loadImage(
              `${globalImagePath}/images-octo/body-fill/${p.nf(i + 1, 2)}.png`
            )
          )
        }
      } else if (key === "eyes") {
        for (let i = 0; i < eyesNums; i++) {
          imageData[key].push(
            p.loadImage(
              `${globalImagePath}/images-octo/${key}/${p.nf(i + 1, 2)}.png`
            )
          )
        }
      } else if (key === "mouth") {
        for (let i = 0; i < mouthNums; i++) {
          imageData[key].push(
            p.loadImage(
              `${globalImagePath}/images-octo/${key}/${p.nf(i + 1, 2)}.png`
            )
          )
        }
      } else if (key === "hair") {
        for (let i = 0; i < hairNums; i++) {
          imageData[key].push(
            p.loadImage(
              `${globalImagePath}/images-octo/${key}/${p.nf(i + 1, 2)}.png`
            )
          )
        }
      } else if (key === "extra") {
        for (let i = 0; i < extraNums; i++) {
          imageData[key].push(
            p.loadImage(
              `${globalImagePath}/images-octo/${key}/${p.nf(i + 1, 2)}.png`
            )
          )
        }
      }
    }

    // bg images
    bgImg = p.loadImage(`${localImagePath}/bg/bg.png`)
    fgImg = p.loadImage(`${localImagePath}/bg/fg.png`)
    starsImg = p.loadImage(`${localImagePath}/bg/stars.png`)
    // extraStarsImg = p.createGraphics(origWidth, origHeight);
    skyImg = p.loadImage(`${localImagePath}/bg/sky.png`)
    rippleImg = p.createGraphics(origWidth, origHeight)
    rippleImg.pixelDensity(1)
    addRipple(p, rippleImg, 260)
    steamImg = p.loadImage(`${localImagePath}/bg/steam.png`)
    fogImg = p.createGraphics(origWidth, origHeight)
    fogImg.pixelDensity(1)
  }
}

function setup(p, props) {
  // const { windowWidth, windowHeight } = props

  return () => {
    // const dim = calculateCanvasSize(p, factor, origWidth, origHeight)
    const dim = calculateCanvasSize(
      p,
      origWidth,
      origHeight,
      p.windowWidth,
      p.windowHeight
    )
    p.createCanvas(dim.w, dim.h)

    // p.pixelDensity(1) // REVIEW: seems this doesn't matter
    p.noSmooth()

    pg = p.createGraphics(origWidth * scaleFactor, origHeight * scaleFactor)
    pg.pixelDensity(1)
    // pg.colorMode(HSB, 360, 100, 100, 100);
    pg.textFont("PressStart2P")
    pg.textSize(8)
  }
}

function windowResized(p, props) {
  // const { windowWidth, windowHeight } = props

  return () => {
    // const dim = calculateCanvasSize(p, factor, origWidth, origHeight)
    const dim = calculateCanvasSize(
      p,
      origWidth,
      origHeight,
      p.windowWidth,
      p.windowHeight
    )
    p.resizeCanvas(dim.w, dim.h)
  }
}

function draw(p) {
  return () => {
    p.background(0, 0, 0)
    p.fill(255)
    p.textFont("PressStart2P")
    p.textSize(p.width * 0.05)
    p.textAlign(p.CENTER)
    p.text("loading", p.width / 2, p.height / 2)

    p.cursor(p.ARROW)

    makeSureReady(p)
    if (!octoInitialized) return

    pg.background(0, 0, 0)
    pg.image(skyImg, 0, 0)

    // pg.blendMode(SCREEN);
    pg.image(starsImg, 0, 0)

    pg.blendMode(p.BLEND)
    pg.image(bgImg, 0, 0)

    if (p.frameCount % 30 === 0) {
      addRipple(p, rippleImg, 260)
    }
    pg.blendMode(p.SCREEN)
    pg.image(rippleImg, 0, 0)

    pg.blendMode(p.BLEND)

    // reset all hover state
    for (let i = 0; i < octoz.length; i++) {
      const octo = octoz[i]
      octo.hover = false
    }
    // which one is currently hovered?
    for (let i = octoz.length - 1; i >= 0; i--) {
      const octo = octoz[i]
      if (octo.isHovered(p.mouseX / factor, p.mouseY / factor)) {
        p.cursor(p.HAND)
        octo.hover = true
        break
      }
    }

    for (let i = 0; i < octoz.length; i++) {
      const octo = octoz[i]
      octo.display(pg)
    }

    pg.blendMode(p.SCREEN)
    addFog(p, fogImg, 0.01, p.frameCount / 100)
    pg.image(fogImg, 0, 0)

    pg.blendMode(p.ADD)
    const sy1 = ((p.frameCount / 10) % 30) * -1
    pg.tint(255, 50 * Math.sin((-sy1 / 30) * Math.PI))
    pg.image(steamImg, 0, sy1)

    const sy2 = ((p.frameCount / 20) % 20) * -1
    pg.tint(255, 30 * Math.sin((-sy2 / 20) * Math.PI))
    pg.image(steamImg, -20, sy2 + 20)

    pg.tint(180, 255)
    pg.blendMode(p.BLEND)
    pg.image(fgImg, 0, 0)

    // const pgScaled = rectify(p, pg, scaleFactor);
    // image(pgScaled, 0, 0, width, height);
    pg.tint(255, 255)
    p.image(pg, 0, 0, p.width, p.height)

    if (displayDialogue) {
      activeOcto.displayDialogue(pg)
    }

    if (saveImage) {
      const img = scaleUpAll(p, [pg], 8, origWidth, origHeight)
      img.save(`HashOctoz-Playground-HotSprings.png`)
      saveImage = false
    }
  }
}

function calculateCanvasSize(
  p,
  origWidth,
  origHeight,
  windowWidth,
  windowHeight
) {
  let w, h
  if (windowWidth > windowHeight) {
    factor = Math.floor((windowHeight / origHeight) * 1)
    h = origHeight * factor
    w = h * (origWidth / origHeight)
    // scaleFactor = hFactor;
  } else {
    factor = Math.floor((windowWidth / origWidth) * 1)
    w = origWidth * factor
    h = w * (origHeight / origWidth)
    // scalefactor = wFactor;
  }

  w = Math.max(w, origWidth)
  h = Math.max(h, origHeight)

  // console.log(windowWidth, windowHeight)

  return { w, h }
}

function mousePressed(p) {
  return () => {
    for (let i = octoz.length - 1; i >= 0; i--) {
      const octo = octoz[i]
      if (octo.isHovered(p.mouseX / factor, p.mouseY / factor)) {
        p.cursor(p.HAND)
        octo.hover = true
        activeOcto = octo
        break
      }
    }

    if (activeOcto && activeOcto.hover === true) {
      displayDialogue = true
      activeOcto.randomizeDialogueIndex()
    } else {
      displayDialogue = false
      activeOcto = null
    }
  }
}

function keyTyped(p) {
  return () => {
    if (p.key === "s") {
      saveImage = true
    }
  }
}

function makeSureReady(p) {
  if (!dataIsLoaded) return
  if (dataIsLoaded && !octoInitialized) {
    let numCounter = 0
    for (let i = 0; i < collectionData.length; i++) {
      if (
        collectionData[i].metadata &&
        collectionData[i].metadata.attributes &&
        numCounter < numOctoz
      ) {
        const octo = new Octo(p, collectionData[i])
        octo.setImageData(imageData)
        octo.flipDirection()
        octo.setAttributes(collectionData[i].metadata.attributes)
        const x = positions[numCounter][0] + Math.floor(p.random(-1, 1))
        const y = positions[numCounter][1] + Math.floor(p.random(-4, 4))
        octo.setPosition(x, y)
        octo.direction = p.random(1) < 0.5 ? -1 : 1
        octo.createOctoGraphics()
        octo.createOctoImage()

        octoz.push(octo)

        numCounter++
      }
    }
    // bgImgScaled = rectify(p, bgImg, scaleFactor);
    octoInitialized = true
  }
}

function addFog(p, pg, scale = 1, speed = 1) {
  pg.clear()
  pg.background(
    160 + Math.sin(p.frameCount / 80) * 90,
    180 + Math.sin(p.frameCount / 60) * 80,
    200 + Math.sin(p.frameCount / 50) * 50
  )
  pg.loadPixels()
  for (let y = 0; y < pg.height; y++) {
    for (let x = 0; x < pg.width; x++) {
      const idx = 4 * y * pg.width + x * 4
      pg.pixels[idx + 3] =
        p.noise(x * scale + speed, y * scale + speed, p.frameCount * 0.01) * 255
    }
  }
  pg.updatePixels()
  return pg
}

function addRipple(p, srcImg, num) {
  srcImg.clear()
  const center = { x: 100, y: 93 }
  for (let i = 0; i < num; i++) {
    const x = Math.floor(center.x + Math.cos(i) * p.random(70)) + 0.5
    const y = Math.floor(center.y + Math.sin(i) * p.random(20)) + 0.5
    srcImg.stroke(50, p.random(40, 170), 240, 80)
    srcImg.line(x, y, x + p.random(8), y)
  }
  return srcImg
}
