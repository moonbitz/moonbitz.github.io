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
