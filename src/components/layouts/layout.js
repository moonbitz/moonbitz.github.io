import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/react"

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
          html,
          body {
            //
          }

          a {
            text-decoration: none;
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
export default Layout
