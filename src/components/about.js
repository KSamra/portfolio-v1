import React from "react";
import styled from "styled-components";
import { Section, SectionTitle } from "./section";
import { font_sizes, colors, breakpoints } from "./styles/theme";

const About = () => {
  return (
    <Section id="about" child="last">
      <SectionTitle>
        About
        <SectionTitle.Line />
      </SectionTitle>
      <Description>
      I began my programming journey in 2014 with an introductory course in Visual Basic where I discovered the power of programming: the ability to build something with seemingly nothing more than logical statements, control flow, and abstraction. 
      This interest in programming led me to the University of California, Santa Cruz where I pursued my studies in Computer Science, graduating with a B.S in 2019. During my time in University, I took a particular interest in backend development, system design, and statically typed languages.
      </Description>
      <Description>
      After graduation, I worked at 
      <ExternalLink href="https://abby.com/" rel="noreferrer noopener nofollow" aria-label="Abby Connect"> <span>Abby Connect</span> </ExternalLink>
      where I built backend systems to support business operations, rewrote legacy software with a focus on reliability and efficiency, and provided mentorship to others.
      </Description>
      <Description>
      Outside of programming my hobbies include photography, cars, competitive video games, and traveling.
      </Description>

      <ListArea>
        <ColumnFlex>
          <SubHeading>Languages</SubHeading>
          <List>
            <li>JavaScript</li>
            <li>Python</li>
            <li>C/C++</li>
            <li>Java</li>
            <li>Rust</li>
            <li>HTML</li>
            <li>CSS/Sass</li>
          </List>
        </ColumnFlex>

        <ColumnFlex>
          <SubHeading>Technologies</SubHeading>
          <List>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>GraphQL</li>
            <li>MongoDB</li>
            <li>AWS</li>
            <li>Firebase</li>
            <li>Pandas</li>
          </List>
        </ColumnFlex>
      </ListArea>
    </Section>
  )
}

export default About

const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 12rem;
  width: 30rem;
  box-sizing: border-box;
  list-style-position: inside;
  /* color: white; */
  li {
    margin: 0.5rem 2rem 0 0;
    font-size: ${font_sizes.mobile};

    @media ${breakpoints.sm} {
      font-size: ${font_sizes.desktop};
    }
  }
`

const Description = styled.p`
  width: 100%;
  font-size: ${font_sizes.mobile};

  @media ${breakpoints.md} {
    font-size: ${font_sizes.desktop};
    width: 70%;
  }
`

const SubHeading = styled.h3`
  color: ${colors.subtext};
`

const ListArea = styled.div`
  @media ${breakpoints.md} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ExternalLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${colors.primary};

  :hover span{
    border-bottom: 1px solid ${colors.primary};
  }
`
