import React from "react"
import { Global, css } from "@emotion/react"
import LayoutSketch from "../../../../components/layouts/layout-sketch"
import HotSpringsSketch from "../../../../sketches/hotSprings/sketch"
import Cta from "../../../../components/playgrounds/cta"
// workaround because 'window is not defined' and wrapper doesn't have default export...
const ReactP5Wrapper = React.lazy(() =>
  import("react-p5-wrapper").then(module => ({
    default: module.ReactP5Wrapper,
  }))
)

export default function HotSprings() {
  const isSSR = typeof window === "undefined"

  return (
    <LayoutSketch title="HashOctoz Play: Hot Springs">
      <div>
        <Global
          styles={css`
            /* latin */
            @font-face {
              font-family: "PressStart2P";
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/pressstart2p/v9/e3t4euO8T-267oIAQAu6jDQyK3nVivNm4I81.woff2)
                format("woff2");
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC,
                U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122,
                U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }

            html,
            body {
              background: darkslateblue;

              font-family: "PressStart2P", cursive;
            }

            canvas {
              image-rendering: pixelated;
              box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.4);
            }

            .unselectable {
              -webkit-touch-callout: none;
              -webkit-user-select: none;
              -khtml-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }
          `}
        />

        {!isSSR && (
          <React.Suspense fallback={<div>loading...</div>}>
            <ReactP5Wrapper
              sketch={HotSpringsSketch}
              className="unselectable"
            />
          </React.Suspense>
        )}

        <Cta className="unselectable" />
      </div>
    </LayoutSketch>
  )
}
