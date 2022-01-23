import React from "react"
import { Global, css } from "@emotion/react"
import emotionNormalize from "emotion-normalize"

const GlobalStyle = props => {
  return (
    <Global
      styles={theme => css`
        ${emotionNormalize}

        *,
        :after,
        :before {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
        }

        html {
          font-size: 10px;
          line-height: ${theme.lineHeights.normal};
          overflow-y: scroll;
        }

        body {
          background: ${theme.colors.background};
          color: ${theme.colors.text};
          font-family: ${theme.fonts.bitmap};
          font-size: ${theme.fontSizes.medium};
        }

        a {
          color: ${theme.colors.link};
          text-underline-offset: 2px;
          // text-decoration: none;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${theme.fonts.bitmap};
          font-weight: ${theme.fontWeights.regular};
          margin: 0;
        }

        p {
          margin: 0;
          margin-bottom: 8px;
        }

        a {
          text-decoration: underline;
        }

        ol,
        ul {
          margin: 0;
          padding: 0;
        }

        canvas {
          image-rendering: pixelated;
        }
      `}
    />
  )
}

export default GlobalStyle
