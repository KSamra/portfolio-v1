import styled from 'styled-components';
import React from 'react';
import ExternalIcon from '../../icons/external';
import { ButtonLink } from '../elements/Links';
const Footer = () => (
  <StyledFooter>
    <SiteDesc>
      <p> Built by Kavan Samra</p>
      <ExternalIcon />
    </SiteDesc>

  </StyledFooter>

);

export default Footer;


const StyledFooter = styled.footer`

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

const SiteDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  p {
    font-size: 1.2rem;
    margin-right: 3rem;
  }

  svg {
    margin-top: .5rem;
    width: 1.5rem;
    height: 1.5rem;
    fill: rgb(204, 214, 246);
    transition: fill-opacity 100ms ease-out;

    :hover {
      fill-opacity: .5;
    }
  }
`;

const Button = styled(ButtonLink)`
  
`;



