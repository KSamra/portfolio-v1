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
        I've recently graduated from the University of California, Santa Cruz with
        a B.S in Computer Science and am looking to join a team of awesome developers. Most of my experience relates to the web and
        the M.E.R.N stack but I'm eager to learn any tech stack that is required.
      </Description>
      <ListArea>
        <ColumnFlex>
          <SubHeading>Languages</SubHeading>
          <List>
            <li>JavaScript</li>
            <li>Python</li>
            <li>C/C++</li>
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
