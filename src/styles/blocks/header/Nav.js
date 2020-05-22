import styled from 'styled-components';
import { ListLink } from '../../elements/Links';
import React from 'react';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: palegoldenrod;
  flex-wrap: nowrap;
`;

const NavList = styled.ul`
  list-style: none;
`;



const Nav = () => (
  <NavWrapper>
    <NavList>
      <ListLink to="/#">0.1 About</ListLink>
      <ListLink to="/#">0.1 About</ListLink>
      <ListLink to="/#">0.1 About</ListLink>
      <ListLink to="/#">0.1 About</ListLink>
    </NavList>
    
  </NavWrapper>
)

export default Nav;