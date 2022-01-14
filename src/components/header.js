import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  width: 100%;

  background: gold;
`

const SiteHeading = styled.h1`
  margin: 0;
  padding: 0;

  font-family: lores-12, sans-serif;
  font-size: 2rem;

  text-align: center;

  a {
    text-decoration: none;
    color: #333;
  }
`

const Header = () => {
  return (
    <Wrapper>
      <SiteHeading>
        <Link to="/">Moonbitz</Link>
      </SiteHeading>
    </Wrapper>
  )
}

export default Header
