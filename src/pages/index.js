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

const ImageGrid = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;

  display: flex;
  flex-direction: row;
`

const CallOut = styled.a`
  padding: 12px 20px;

  display: block;
  background: gold;
  border-radius: 12px;

  text-align: center;
  font-size: ${props => props.theme.fontSizes.big};

  &:hover {
    background: #ffaa00;
  }
`

const Home = ({ data }) => {
  const metadata = data.site.siteMetadata

  return (
    <Layout title="We Are Moonbitz">
      <ImageGrid>
        <StaticImage
          src="../images/thumb-octoz/hashoctoz-16.png"
          alt="hashoctoz #35"
          css={css`
            width: 100%;
          `}
        />
        <StaticImage
          src="../images/thumb-octoz/hashoctoz-25.png"
          alt="hashoctoz #25"
          css={css`
            width: 100%;
          `}
        />
        <StaticImage
          src="../images/thumb-octoz/hashoctoz-61.png"
          alt="hashoctoz #36"
          css={css`
            width: 100%;
          `}
        />
        <StaticImage
          src="../images/thumb-octoz/hashoctoz-53.png"
          alt="hashoctoz #53"
          css={css`
            width: 100%;
          `}
        />
      </ImageGrid>

      <Wrapper>
        <section>
          <h2>What is HashOctoz?</h2>
          <p>
            HashOctoz is our first generative NFT series on the Tezos
            blockchain. There will be only 500 unique HashOctoz character NFTs.
          </p>

          <CallOut href={metadata.fxhash} target="_blank" rel="noreferrer">
            Buy your HashOctoz now at fxhash.xyz
          </CallOut>
        </section>

        <section>
          <h2>What can you do with HashOctoz?</h2>
          <p>
            Your HashOcto is immutably stored on the Tezos blockchain, so it is
            yours to keep. You can think of it like a collection card. The
            difference is that it can move and interact as a digital token. You
            can even sell the tokens you own. We are also developing bonus
            content and interactive experience for the HashOctoz holders to
            enjoy. We will create at least five HashOctoz Playground in the
            coming months. We also have bigger plans, which we described down
            below.
          </p>
        </section>
        <section>
          <h2>What is HashOctoz Playground?</h2>
          <p>
            HashOctoz Playground is a series of web experience. There are
            playgrounds that use HashOctoz NFT token data fetched from fxhash
            API. Others are Animated GIFs. This way, we can provide additional
            related content even after the token has been minted.
          </p>
          <ol>
            <li>
              <Link to={"/hashoctoz/play/hotsprings/"}>
                <p>Hot Springs</p>
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
              <Link to={"/hashoctoz/play/wakeup/"}>
                <p>Wake Up</p>
                <StaticImage
                  src="../images/wakeup.png"
                  alt="HashOctoz Wake Up"
                  css={css`
                    width: 100%;
                    height: 200px;
                  `}
                />
              </Link>
            </li>
            <li>
              <Link to={"/hashoctoz/play/busstop/"}>
                <p>Bus Stop</p>
                <StaticImage
                  src="../images/busstop.png"
                  alt="HashOctoz Bus Stop"
                  css={css`
                    width: 100%;
                    height: 200px;
                  `}
                />
              </Link>
            </li>
            <li>
              {" "}
              <a href="https://versum.xyz/token/versum/9201">
                <p>Octoz Room: Bathroom (We made it as an NFT on Versum!)</p>
                <StaticImage
                  src="../images/bathroom.png"
                  alt="Octoz Room: Bathroom"
                  css={css`
                    width: 100%;
                    height: 200px;
                  `}
                />
              </a>
            </li>
            <li>in early development stage</li>
            {/* <li>Swamp (why not?)</li> */}
          </ol>
        </section>
        <section>
          <h2>Who is Moonbitz?</h2>
          <p>
            We are a small team of designer/developer. We love cartoons and
            video games. We were very excited to learn about the generative
            NFTs, and decided to jump in, and the Tezos and fxhash seemed like a
            great choice for us. We want to stay here as long as we can, and
            hopefully, one day this will become our full time job.
          </p>
        </section>
        <section>
          <h2>What plans do you have?</h2>
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
