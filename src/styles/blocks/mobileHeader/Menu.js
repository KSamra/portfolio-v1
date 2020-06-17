import styled from 'styled-components';
import React from 'react';
import { Link } from "gatsby";
import Resume from '../../../../content/test.pdf';
import { SLink } from '../../elements/Links';
import {colors } from '../../theme';

const Menu = ({isOpen, clickHandler}) => {
  return (
    <MenuLinks isOpen={isOpen}>
      <StyledList>
        <NavListItem onClick={clickHandler} to="/#about">About</NavListItem>
        <NavListItem onClick={clickHandler} to="/#projects">Projects</NavListItem>
        <NavListItem onClick={clickHandler} to="/#contact">Contact</NavListItem>
        <OtherLink onClick={clickHandler} href={Resume}>Resume</OtherLink>
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
  z-index: 10;
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
  /* color: rgb(136, 146, 176); */
  color: white;
  z-index: 10;
  transition: color 100ms linear; 
  :hover{
    color: ${colors.button_pink}
  }


`;

const OtherLink = styled.a`
  font-size: 2rem;
  color: white;
  cursor: pointer;
  z-index: 10;

  transition: color 100ms linear; 
  :hover{
    color: ${colors.button_pink}
  }
`;