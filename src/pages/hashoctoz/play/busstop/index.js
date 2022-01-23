import React from "react"
import LayoutPlaySketch from "../../../../components/layouts/layout-play-sketch"
import BusStopSketch from "../../../../sketches/busstop/sketch"
import SketchWrapper from "../../../../components/play/sketchWrapper"

const BusStop = () => {
  return (
    <LayoutPlaySketch title="HashOctoz Play: Bus Stop" background="#333">
      <SketchWrapper sketch={BusStopSketch} />
    </LayoutPlaySketch>
  )
}

export default BusStop
