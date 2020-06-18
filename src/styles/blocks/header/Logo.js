import React from 'react';
import styled from 'styled-components';
import { IconKeyboard} from '../../../icons/index';


const StyledLogo = styled.div`
  margin-top: 1rem;

  svg {
    height: 6rem;
    width: 6rem;
  }
`;


const Logo = () => (
  <StyledLogo>
    <IconKeyboard/>
  </StyledLogo>
);

export default Logo;
