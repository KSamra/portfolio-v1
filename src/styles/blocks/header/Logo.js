import React from 'react';
import styled from 'styled-components';
import { IconKeyboard} from '../../../icons/index';
import {Link} from 'gatsby';

const StyledLogo = styled.div`
  margin-top: 1rem;

  svg {
    height: 5rem;
    width: 5rem;
  }
`;


const Logo = () => (
  <StyledLogo>
    <Link to="/">
      <IconKeyboard />
    </Link>
  </StyledLogo>
);

export default Logo;
