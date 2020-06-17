import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle } from './section';
import { breakpoints } from '../../theme';


const About = () => {
  return (
    <Section id="about" child="last">
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
      <SubHeading>Languages</SubHeading>
      <List>
        <li>JavaScript</li>
        <li>Python</li>
        <li>C/C++</li>
        <li>HTML</li>
        <li>CSS/Sass</li>
      </List>
      <SubHeading>Technologies &amp; Frameworks </SubHeading>
      <List>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>GraphQL</li>
        <li>MongoDB</li>
        <li>AWS</li>
        <li>Firebase</li>
        
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
  /* color: white; */
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

const SubHeading = styled.h3`
  color: white;
`;