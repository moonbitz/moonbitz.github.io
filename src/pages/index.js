import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layouts/layout"

export default function Home({ data }) {
  const metadata = data.site.siteMetadata

  return (
    <Layout title="Moonbitz">
      <h1>Moonbitz</h1>

      <p>The website is currently being designed. Come back again soon.</p>

      <ul>
        <li>
          <a href={metadata.fxhash} target="_blank" rel="noreferrer">
            Buy HashOctoz at fxhash
          </a>
        </li>
        <li>
          <a href={metadata.twitter} target="_blank" rel="noreferrer">
            Follow us on Twitter
          </a>
        </li>
      </ul>

      <ol>
        {/* <li>
          <Link to="/hashoctoz/playgrounds/birth/">
            HashOctoz: Birth
          </Link>
        </li> */}
        <li>
          <Link to="/hashoctoz/playgrounds/hotsprings/">
            HashOctoz: Hot Springs
          </Link>
        </li>
      </ol>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteURL
        twitter
        fxhash
      }
    }
  }
`
