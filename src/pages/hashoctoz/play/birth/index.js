import React from "react"
import LayoutPlaySketch from "../../../../components/layouts/layout-play-sketch"
import BirthSketch from "../../../../sketches/birth/sketch"
import SketchWrapper from "../../../../components/play/sketchWrapper"

const Birth = () => {
  return (
    <LayoutPlaySketch title="HashOctoz Play: Birth">
      <SketchWrapper sketch={BirthSketch} />
    </LayoutPlaySketch>
  )
}

export default Birth
