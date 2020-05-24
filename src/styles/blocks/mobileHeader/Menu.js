import styled from 'styled-components';
import React from 'react';
import { ListLink } from '../../elements/Links'
import { Link } from "gatsby";

const Menu = () => {
  return (
    <StyledList>
      <Link to="/#about">About</Link>
      <Link to="/#projects">Projects</Link>
      <Link to="/#contact">Contact</Link>
      <Link to="/resume">Resume</Link>
    </StyledList>
  )

};

export default Menu;

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  
`;