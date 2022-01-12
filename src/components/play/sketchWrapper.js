import * as React from "react"

// workaround because 'window is not defined' and wrapper doesn't have default export...
const ReactP5Wrapper = React.lazy(() =>
  import("react-p5-wrapper").then(module => ({
    default: module.ReactP5Wrapper,
  }))
)

const SketchWrapper = props => {
  // if server-side rendering, don't run the code b/c window is undefined.
  const isSSR = typeof window === "undefined"
  const { sketch } = props

  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div>loading...</div>}>
          <ReactP5Wrapper sketch={sketch} className="unselectable" />
        </React.Suspense>
      )}
    </>
  )
}

export default SketchWrapper
