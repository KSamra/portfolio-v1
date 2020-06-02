import styled from 'styled-components';
import React from 'react';
import { Link } from "gatsby";

const Menu = ({isOpen}) => {
  return (
    <MenuLinks isOpen={isOpen}>
      <StyledList>
        <NavListItem to="/#about">About</NavListItem>
        <NavListItem to="/#projects">Projects</NavListItem>
        <NavListItem to="/#contact">Contact</NavListItem>
        <NavListItem to="/page-2">Resume</NavListItem>
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
  background: #172a45;
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50%;
  transition: transform 300ms;
  transform: ${({isOpen}) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
`;

const StyledList = styled.ul`
  display: flex;
  height: 50%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  list-style: none;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  
`;

const NavListItem = styled(Link)`
  font-size: 2rem;
  /* margin-bottom: 2rem; */
  color: rgb(136, 146, 176);

`;