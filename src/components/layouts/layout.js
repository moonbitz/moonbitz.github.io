import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/react"
import Header from "../header"

const Layout = ({ title, children }) => {
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
          /* 
          lores-9-wide 
          lores-9-plus-wide
          lores-12
          */
          html,
          body {
            font-family: lores-12, sans-serif;
            // font-weight: 400;
            font-style: normal;
            font-size: 10px;
          }

          a {
            text-decoration: none;
          }
        `}
      />
      <title>
        {title} | {data.site.siteMetadata.title}
      </title>
      <Header />
      <main>{children}</main>
    </>
  )
}
export default Layout
