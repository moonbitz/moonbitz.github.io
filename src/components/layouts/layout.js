import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "@emotion/react"
import GlobalStyle from "../../styles/global-style"
import theme from "../../styles/theme"
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <title>
        {title} | {data.site.siteMetadata.title}
      </title>
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}
export default Layout
