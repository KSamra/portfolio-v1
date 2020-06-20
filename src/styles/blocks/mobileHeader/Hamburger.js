import styled from "styled-components"
import React from "react"
import { colors } from "../../theme"

const Hamburger = ({ menuOpen, clickHandler }) => {
  return (
    <HamburgerButton onClick={clickHandler} aria-label="Toggle Navigation Menu">
      <Icon menuOpen={menuOpen}>
        <div></div>
        <div></div>
        <div></div>
      </Icon>
    </HamburgerButton>
  )
}

export default Hamburger

const HamburgerButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  right: .5rem;
  top: 2.5rem;
  z-index: 12;

  :focus {
    outline: none;
  }
`

const Icon = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 2rem;
  z-index: 11;

  div {
    width: 2.5rem;
    height: 0.3rem;
    background: ${({ menuOpen }) => (menuOpen ? `${colors.primary}` : "white")};
    border-radius: 100px;
    transition: all 300ms;

    :first-child {
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
      transform: ${({ menuOpen }) =>
        menuOpen ? "translateX(-100%)" : "translateX(0)"};
    }

    :last-child {
      transform: ${({ menuOpen }) =>
        menuOpen ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
    }
  }
`
