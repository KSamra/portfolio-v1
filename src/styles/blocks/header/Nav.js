import styled from 'styled-components';
import { ListLink } from '../../elements/Links';
import React from 'react';
import Resume from '../../../../content/test.pdf';
import {colors} from '../../theme';

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

const StyledAchor = styled.a`
  text-decoration: none;
  color: white;
  transition: color 300ms ease;
  
  :hover {
    color: ${colors.primary};
  }
`;



const Nav = () => (
  <NavWrapper>
    <NavList>
      <ListLink color='white' to="/#about"> About</ListLink>
      <ListLink color='white' to="/#projects">Projects</ListLink>
      <ListLink color='white' to="/#contact">Contact</ListLink>
      <li style={{display: 'inline-block', fontSize: 'inherit'}}>
        <StyledAchor href={Resume} aria-label="Resume">Resume</StyledAchor>
      </li>
      

    </NavList>
    
  </NavWrapper>
)

export default Nav;