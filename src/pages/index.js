import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Layout from "../components/layouts/layout"

const Wrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;

  ul {
    list-style: none;
  }

  section {
    margin: 3rem 0;
    font-size: 2rem;
  }

  h1,
  h2 {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }
`

const Home = ({ data }) => {
  const metadata = data.site.siteMetadata

  return (
    <Layout title="We Are Moonbitz">
      <Wrapper>
        <p
          css={css`
            border: 1px solid black;
            padding: 8px;
          `}
        >
          Thank you for visiting. The website is currently being designed. Come
          back again soon.
        </p>

        <section>
          <ul>
            <li>
              Buy HashOctoz at{" "}
              <a href={metadata.fxhash} target="_blank" rel="noreferrer">
                fxhash.xyz
              </a>
            </li>
            <li>
              Follow us on{" "}
              <a href={metadata.twitter} target="_blank" rel="noreferrer">
                Twitter
              </a>{" "}
              for updates.
            </li>
          </ul>
        </section>

        <section>
          <h2>HashOctoz Story</h2>
          <p>
            Experience HashOctoz story through our interactive storytelling.
          </p>
          <ol>
            <li>
              <p>HashOctoz: Birth (Coming Soon in early January 2022)</p>
              <StaticImage
                src="../images/birth.png"
                alt="HashOctoz Birth"
                css={css`
                  max-width: 320px;
                `}
              />
            </li>
            <li>
              <p>
                <Link to="/hashoctoz/play/hotsprings/">
                  HashOctoz: Hot Springs
                </Link>
              </p>
              <StaticImage
                src="../images/hotsprings.png"
                alt="HashOctoz Hot Springs"
                css={css`
                  max-width: 320px;
                `}
              />
            </li>
          </ol>
        </section>
      </Wrapper>
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
