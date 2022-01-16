import React from "react"
import LayoutPlaySketch from "../../../../components/layouts/layout-play-sketch"
import HotSpringsSketch from "../../../../sketches/hotSprings/sketch"
import SketchWrapper from "../../../../components/play/sketchWrapper"

export default function HotSprings() {
  return (
    <LayoutPlaySketch
      title="HashOctoz Play: Hot Springs"
      background="darkslateblue"
    >
      <SketchWrapper sketch={HotSpringsSketch} />
    </LayoutPlaySketch>
  )
}
