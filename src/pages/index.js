import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Layout from "../components/layouts/layout"

const Wrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 36px;
  padding-bottom: 36px;

  section {
    margin: 3rem 0;
    font-size: 2rem;
  }

  h1,
  h2 {
    margin: 0;
    padding: 0;
  }
  h2 {
    text-decoration: underline;
  }

  p {
    margin: 0;
    margin-bottom: 8px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  ol li {
    margin-bottom: 12px;
  }
`

const Home = ({ data }) => {
  const metadata = data.site.siteMetadata

  return (
    <Layout title="We Are Moonbitz">
      <Wrapper>
        <p
          css={css`
            border: 2px solid black;
            padding: 12px;
            border-radius: 12px;
          `}
        >
          Thank you for visiting. The website is currently being updated. Please
          come back again soon. Follow us on{" "}
          <a href={metadata.twitter} target="_blank" rel="noreferrer">
            Twitter
          </a>{" "}
          for updates.
        </p>

        <section>
          <h2>Who is Moonbitz?</h2>
          <p>
            We are a small team of designer/developer. We love cartoons and
            video games. We were very excited to learn about the generative
            NFTs, and decided to jump in, and the Tezos and fxhash seemed like a
            great choice for us. We want to stay here as long as we can, and
            hopefully, this will become our full time job.
          </p>
        </section>

        <section>
          <h2>What is HashOctoz?</h2>
          <p>
            HashOctoz is our first generative NFT series on the Tezos
            blockchain. There will be only 500 unique HashOctoz character NFTs.
            Buy your HashOctoz now at{" "}
            <a href={metadata.fxhash} target="_blank" rel="noreferrer">
              fxhash.xyz
            </a>
            .
          </p>
        </section>

        <section>
          <h2>What can you do with HashOctoz?</h2>
          <p>
            We are developing bonus content and interactive experience for the
            HashOctoz holders to enjoy. We will create at least five HashOctoz
            Playground. We also have bigger plans, which we described down
            below.
          </p>
        </section>
        <section>
          <h2>What is HashOctoz Playground?</h2>
          <p>
            HashOctoz Playground is a series of interactive experience on the
            web that uses already minted HashOctoz NFT token data fetched from
            fxhash API. This way, we can provide additional content even after
            the token has been minted and stored immutably on the blockchain.
            Currently, there is already one playground for you to enjoy, and
            more are coming soon.
          </p>
          <ol>
            <li>
              <Link to="/hashoctoz/play/hotsprings/">
                <p>Hot Springs (Available now!)</p>
                <StaticImage
                  src="../images/hotsprings.png"
                  alt="HashOctoz Hot Springs"
                  css={css`
                    width: 100%;
                    height: 200px;
                  `}
                />
              </Link>
            </li>
            <li>
              <p>Birth (Coming Soon in January 2022)</p>
              <StaticImage
                src="../images/birth.png"
                alt="HashOctoz Birth"
                css={css`
                  width: 100%;
                  height: 200px;
                `}
              />
            </li>
            <li>Oasis (in early development stage)</li>
            <li>Volcano (in early development stage)</li>
            <li>Swamp (why not?)</li>
          </ol>
        </section>
        <section>
          <h2>What other plans do you have?</h2>
          <p>
            Well, we have so many exciting ideas in mind! Our goal is to build
            the OctoVerse with characters, items, stories and possibly games,
            too. To realize our goals, we need your support and the best way to
            support us now is to buy our <a href={metadata.fxhash}>HashOctoz</a>
            . And if you have any questions or want to just say hi, please visit
            our <a href={metadata.twitter}>Twitter</a>.
          </p>
          <p>Thank you!</p>
        </section>
        <section></section>
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
