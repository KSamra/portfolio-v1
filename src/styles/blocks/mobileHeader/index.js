import React, {useState} from 'react';
import styled from 'styled-components';
import {SLink} from '../../elements/Links';
import { breakpoints } from '../../theme';
import Hamburger from './Hamburger';
import Menu from './Menu';

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }
  console.log('Mobile nav open = ', menuOpen);
  return (
    <Header>
      <SLink to="/" color="white">Logo</SLink>
      <Hamburger menuOpen={menuOpen} clickHandler={handleClick}/>

      {/* Try with a conditional render but this may not be smooth enough.
          If so, let's adjust using css and hide it with some translations and perhaps the display property */}
      {menuOpen ? <Menu/> : null}
    </Header>
  )
}

export default MobileNav;

const Header = styled.header`
  @media ${breakpoints.lg} {
    display: none;
  }
  padding: 0 1rem;
  height: 3rem;
  /* position: fixed */
  width: 100%;
  /* background: pink; */
  border-bottom: blue;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
