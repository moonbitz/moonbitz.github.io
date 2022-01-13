export default function BirthSketch(p) {
  p.setup = setup(p)
  p.draw = draw(p)
}

function setup(p) {
  return () => {
    p.createCanvas(200, 200)
  }
}

function draw(p) {
  return () => {
    p.background(200)
    p.fill(200, 0, 100)
    p.ellipse(100, 100, 100, 100)
  }
}
