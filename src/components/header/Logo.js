import React from "react"
import styled from "styled-components"
import { IconLogo } from "../../icons/index";
import { Link } from "gatsby"

const StyledLogo = styled.div`
  margin-top: 1rem;

  svg {
    height: 5rem;
    width: 5rem;
  }
`

const Logo = () => (
  <StyledLogo>
    <Link to="/" aria-label="Logo link home">
      <IconLogo />
    </Link>
  </StyledLogo>
)

export default Logo
