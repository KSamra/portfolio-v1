import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle } from './section';
import { breakpoints } from '../../theme';


const About = () => {
  return (
    <Section id="about">
      <SectionTitle>
        About
        <SectionTitle.Line/>
      </SectionTitle>
      <Description>
        I am mostly a web programmer and have experience with 
        the following languages.I am mostly a web programmer and have experience with 
        the following languagesI am mostly a web programmer and have experience with 
        the following languages
      </Description>
      <List>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>GraphQL</li>
        <li>REST API</li>
        <li>C++</li>
        <li>MongoDB</li>
      </List>
    </Section>
  )
};

export default About;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 10rem;
  width: 30rem;
  box-sizing: border-box;
  color: white;
  li {
    margin: 0.5rem 1rem 0 0;
    font-size: 1.2rem;

    @media ${breakpoints.sm} {
      font-size: 1.6rem;   
    }
  }
`;

const Description = styled.p`
  width: 100%;

  @media ${breakpoints.md} {
    width: 70%;
  }
  
`;