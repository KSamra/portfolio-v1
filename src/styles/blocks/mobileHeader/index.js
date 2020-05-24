import React, {useState} from 'react';
import styled from 'styled-components';
import {SLink} from '../../elements/Links';
import { breakpoints } from '../../theme';
import Hamburger from './Hamburger';


const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }
  console.log('Mobile nav open = ', menuOpen);
  return (
    <Header>
      <SLink to="/">Logo</SLink>
      <Hamburger menuOpen={menuOpen} clickHandler={handleClick}/>
    </Header>
  )
}

export default MobileNav;

const Header = styled.header`
  @media ${breakpoints.lg} {
    display: none;
  }

  height: 3rem;
  /* position: fixed */
  width: 100%;
  background: pink;
  border-bottom: blue;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

