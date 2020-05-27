import styled from 'styled-components';
import Section from '../section';
import React from 'react';

const Intro = styled.h2`
  color: palevioletred;
  font-size: 1.5rem;

`;

const HeroName = styled.h1`
  font-weight: 700;
  color: white;
  margin: 1rem 0;
  font-size: 4rem;

`;

const About = styled.h3`
  color: goldenrod;
`;


const WhoAmI = () => (
  <Section>
    <Intro>Hello My Name is</Intro>
    <HeroName>Kavan Samra</HeroName>
    <About>I build tings</About>
  </Section>
)


export default WhoAmI;