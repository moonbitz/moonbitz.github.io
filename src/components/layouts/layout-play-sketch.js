import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/react"
import Header from "../header"
import Cta from "../play/cta"

const LayoutPlaySketch = ({ title, background, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteURL
          email
          twitter
          fxhash
        }
      }
    }
  `)

  return (
    <>
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
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          html,
          body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            // font-family: "PressStart2P", cursive;
            font-family: lores-12, sans-serif;
            // font-weight: 400;
            font-style: normal;
            font-size: 10px;

            position: relative;

            background: ${background};
          }

          a {
            text-decoration: none;
          }

          canvas {
            image-rendering: pixelated;
            box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.4);
          }

          #p5_loading {
            display: none;
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
      <title>
        {title} | {data.site.siteMetadata.title}
      </title>
      {/* <Header /> */}
      <main>{children}</main>
      <Cta className="unselectable" />
    </>
  )
}
export default LayoutPlaySketch
