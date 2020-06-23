import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { breakpoints } from "../styles/theme";
import Hamburger from "./Hamburger"
import Menu from "./Menu"
import Backdrop from "./Backdrop"
import { IconLogo } from "../../icons/index";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = () => {
    setMenuOpen(isOpen => !isOpen)
  }

  return (
    <Header>
      <Logo>
        <Link to="/" aria-label="Logo link to Home">
          <IconLogo />
        </Link>
      </Logo>

      <Hamburger menuOpen={menuOpen} clickHandler={handleClick} />

      {/* Try with a conditional render but this may not be smooth enough.
          If so, let's adjust using css and hide it with some translations and perhaps the display property */}
      {/* {menuOpen ? <Menu isOpen={menuOpen}/> : null} */}
      <Menu isOpen={menuOpen} clickHandler={handleClick} />
      <Backdrop isOpen={menuOpen} clickHandler={handleClick} />
    </Header>
  )
}

export default MobileNav

const Header = styled.header`
  @media ${breakpoints.lg} {
    display: none;
  }
  padding: 0 2rem;
  height: 8rem;
  /* position: fixed */
  width: 100%;
  /* background: pink; */
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  margin-top: 0.5rem;

  svg {
    height: 5rem;
    width: 5rem;
  }
`
