import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/react"

const LayoutSketch = ({ title, children }) => {
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

            position: relative;
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
        `}
      />
      <title>
        {title} | {data.site.siteMetadata.title}
      </title>
      <main>{children}</main>
    </>
  )
}
export default LayoutSketch
