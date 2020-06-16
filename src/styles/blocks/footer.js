import styled from 'styled-components';
import React from 'react';
import {breakpoints} from '../theme';

import TwitterIcon from '../../icons/twitter';
import GithubIcon from '../../icons/github';

const Footer = () => (
  <StyledFooter>
    <SiteDesc>
      <p>Built by Kavan Samra</p>
      <SourceLink href="https://github.com/KSamra/portfolio-v1">View Source</SourceLink>

    </SiteDesc>
    <TwitterIcon/>
    <GithubIcon/>

  </StyledFooter>

);

export default Footer;


const StyledFooter = styled.footer`

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  svg {
    margin-top: .5rem;
    width: 1.5rem;
    height: 1.5rem;
    fill: rgb(204, 214, 246);
    transition: fill-opacity 100ms ease-out;
    cursor: pointer;

    :hover {
      fill-opacity: .5;
    }
  }

`;

const SiteDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;

  p,a {
    font-size: 1.2rem;

    @media ${breakpoints.md} {
      font-size: 1.6rem;
    }
  }

  
`;

const SourceLink = styled.a`
  text-decoration: none;
  transition: color 100ms linear;
  cursor: pointer;
  color: palevioletred;
  

  :hover {
    border-bottom: 1px solid palevioletred;
  }
`;

  



