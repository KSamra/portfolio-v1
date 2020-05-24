import styled from 'styled-components';
import React from 'react';
import { ListLink } from '../../elements/Links'

const Menu = () => {
  return (
    <StyledList>
      <ListLink>About</ListLink>
      <ListLink>Projects</ListLink>
      <ListLink>Contact</ListLink>
      <ListLink>Resume</ListLink>
    </StyledList>
  )

};

export default Menu;

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  
`;