import styled from 'styled-components';
import { ListLink } from '../../elements/Links';
import React from 'react';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
`;

const NavList = styled.ul`
  list-style: none;
  font-size: 2rem;
`;




const Nav = () => (
  <NavWrapper>
    <NavList>
      <ListLink color='white' to="/#"> About</ListLink>
      <ListLink color='white' to="/#projects">Projects</ListLink>
      <ListLink color='white' to="/#">Resume</ListLink>
      <ListLink color='white' to="/#contact">Contact</ListLink>
    </NavList>
    
  </NavWrapper>
)

export default Nav;