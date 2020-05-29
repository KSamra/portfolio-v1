import styled from 'styled-components';
import { Section }from '../section';
import React from 'react';

const Intro = styled.h2`
  color: palevioletred;
  font-size: 1.5rem;

`;

const HeroName = styled.h1`
  font-weight: 700;
  color: white;
  margin: 1rem 0;
  font-size: 8rem;

`;

const About = styled.h3`
  color: goldenrod;
`;

const MoreAbout = styled(About)`
  color: lightgoldenrodyellow;
`

const WhoAmI = () => (
  <Section>
    <Intro>Hello, My Name Is</Intro>
    <HeroName>Kavan Samra</HeroName>
    <About>I'm a software developer</About>
    <MoreAbout>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum."
    </MoreAbout>
  </Section>
)


export default WhoAmI;