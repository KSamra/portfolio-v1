import styled from 'styled-components';
import React from 'react';
import {breakpoints} from '../theme';

import {IconGithub, IconTwitter, IconLinkedIn} from '../../icons/index';

const Footer = () => (
  <StyledFooter>
    <SiteDesc>
      <p>Built by Kavan Samra</p>
      <SourceLink href="https://github.com/KSamra/portfolio-v1">View Source</SourceLink>

    </SiteDesc>
    <Flex>
      <IconTwitter/>
      <IconGithub />
      <IconLinkedIn />
    </Flex>
    
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

const Flex = styled.div`
  min-width: 10rem;
  margin: 2rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

`;
  



