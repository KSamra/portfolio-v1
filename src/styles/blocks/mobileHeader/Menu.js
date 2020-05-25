import styled from 'styled-components';
import React from 'react';
import { ListLink } from '../../elements/Links'
import { Link } from "gatsby";

const Menu = ({isOpen}) => {
  return (
    <MenuLinks isOpen={isOpen}>
      <StyledList>
        <Link to="/#about">About</Link>
        <Link to="/#projects">Projects</Link>
        <Link to="/#contact">Contact</Link>
        <Link to="/resume">Resume</Link>
      </StyledList>
    </MenuLinks>
    
  )

};

export default Menu;

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50%;
  transition: transform 300ms;
  transform: ${({isOpen}) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  overflow-x: hidden;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;

  
`;