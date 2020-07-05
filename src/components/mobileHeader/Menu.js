import styled from "styled-components"
import React from "react"
import { Link } from "gatsby"
import Resume from "../../../content/resume.pdf";
import { colors } from "../styles/theme";

const Menu = ({ isOpen, clickHandler }) => {
  return (
    <MenuLinks isOpen={isOpen}>
      <StyledList>
        <NavListItem onClick={clickHandler} to="/#about" aria-label="About">
          About
        </NavListItem>
        <NavListItem
          onClick={clickHandler}
          to="/#projects"
          aria-label="View Projects"
        >
          Projects
        </NavListItem>
        <NavListItem
          onClick={clickHandler}
          to="/#contact"
          aria-label="Contact Me"
        >
          Contact
        </NavListItem>
        <OtherLink
          onClick={clickHandler}
          href={Resume}
          aria-label="View Resume"
        >
          Resume
        </OtherLink>
      </StyledList>
    </MenuLinks>
  )
}

export default Menu

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #172a45;
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50%;
  transition: transform 300ms;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
`

const StyledList = styled.div`
  display: flex;
  height: 50%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
`

const NavListItem = styled(Link)`
  font-size: 2rem;
  /* margin-bottom: 2rem; */
  /* color: rgb(136, 146, 176); */
  color: white;
  z-index: 10;
  transition: color 100ms linear;
  :hover {
    color: ${colors.primary};
  }
`

const OtherLink = styled.a`
  font-size: 2rem;
  color: white;
  cursor: pointer;
  z-index: 10;

  transition: color 100ms linear;
  :hover {
    color: ${colors.primary};
  }
`
