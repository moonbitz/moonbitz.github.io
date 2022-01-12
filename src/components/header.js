import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  width: 100%;

  background: black;
`

const SiteHeading = styled.h1`
  font-family: lores-12, sans-serif;
  font-size: 2rem;

  a {
    text-decoration: none;
    color: #999;
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
