import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const CTAStyled = styled("div")`
  position: absolute;
  bottom: 0;
  right: 0;

  h2.title {
    padding: 1px 8px;
    font-size: 1.6rem;

    color: #8477b7;
  }

  a {
    text-decoration: none;
    color: #ccc;
  }
  a:hover {
    color: #eee;
  }
`

const Cta = () => {
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
    <CTAStyled>
      <h2 className="title">
        <a
          href={data.site.siteMetadata.fxhash}
          target="_blank"
          rel="noreferrer"
        >
          HashOctoz NFT
        </a>{" "}
        by{" "}
        <a
          href={data.site.siteMetadata.twitter}
          target="_blank"
          rel="noreferrer"
        >
          Moonbitz
        </a>
      </h2>
    </CTAStyled>
  )
}

export default Cta
