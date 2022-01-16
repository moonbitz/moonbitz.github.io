// REVIEW: do i need async/await keywords her??
export async function fetchFxhashData(tokenId) {
  return await fetch("https://api.fxhash.xyz/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `{
      generativeToken(id: ${tokenId}) {
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
  }).then(r => {
    return r.json()
  })
}

export function loadOctoImages(p, globalImagePath) {
  const bodyNums = 10
  const extraNums = 6
  const eyesNums = 24
  const hairNums = 17
  const mouthNums = 18

  const imageData = {
    body: [],
    bodyFill: [],
    eyes: [],
    mouth: [],
    hair: [],
    extra: [],
  }

  // TODO: ideally code below should run after JSON has been loaded.
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

  return imageData
}

export function rectify(p, img, scaleFactor) {
  const pg = p.createGraphics(img.width * scaleFactor, img.height * scaleFactor)
  pg.noStroke()
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      pg.fill(img.get(x, y))
      pg.rect(x * scaleFactor, y * scaleFactor, scaleFactor, scaleFactor)
    }
  }
  return pg
}

export function scaleUpAll(
  p,
  arrayOfGraphics,
  scaleFactor,
  origWidth,
  origHeight
) {
  const pg = p.createGraphics(origWidth * scaleFactor, origHeight * scaleFactor)
  pg.colorMode(p.RGB)
  pg.noStroke()
  for (let j = 0; j < arrayOfGraphics.length; j++) {
    arrayOfGraphics[j].loadPixels()
    const sourcePixels = arrayOfGraphics[j].pixels
    for (let i = 0; i < sourcePixels.length; i += 4) {
      const r = sourcePixels[i]
      const g = sourcePixels[i + 1]
      const b = sourcePixels[i + 2]
      const a = sourcePixels[i + 3]
      const x = (i / 4) % arrayOfGraphics[j].width
      const y = Math.floor(i / 4 / arrayOfGraphics[j].width)
      pg.fill(r, g, b, a)
      pg.rect(x * scaleFactor, y * scaleFactor, scaleFactor, scaleFactor)
    }
  }
  return pg
}

export function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// easing euqations from https://easings.net/
export function ease(x, type) {
  switch (type) {
    case "easeInCubic":
      return x * x * x
    case "easeOutCubic":
      return 1 - Math.pow(1 - x, 3)
    case "easeInQuint":
      return x * x * x * x * x
    case null:
    default:
      return x
  }
}
