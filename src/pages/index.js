import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layouts/layout"

const Home = ({ data }) => {
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
          <Link to="/hashoctoz/play/birth/">
            HashOctoz: Birth
          </Link>
        </li> */}
        <li>
          <Link to="/hashoctoz/play/hotsprings/">HashOctoz: Hot Springs</Link>
        </li>
      </ol>
    </Layout>
  )
}

export default Home

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
