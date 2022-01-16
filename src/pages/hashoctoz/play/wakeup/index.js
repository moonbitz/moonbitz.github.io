import React from "react"
import LayoutPlaySketch from "../../../../components/layouts/layout-play-sketch"
import WakeupSketch from "../../../../sketches/wakeup/sketch"
import SketchWrapper from "../../../../components/play/sketchWrapper"

const Wakeup = () => {
  return (
    <LayoutPlaySketch title="HashOctoz Play: Wake Up" background="#333">
      <SketchWrapper sketch={WakeupSketch} />
    </LayoutPlaySketch>
  )
}

export default Wakeup
