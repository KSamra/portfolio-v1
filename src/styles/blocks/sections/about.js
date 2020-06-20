import React from "react"
import styled from "styled-components"
import { Section, SectionTitle } from "./section"
import { colors, breakpoints } from "../../theme"

const About = () => {
  return (
    <Section id="about" child="last">
      <SectionTitle>
        About
        <SectionTitle.Line />
      </SectionTitle>
      <Description>
        I recently graduated from the University of California, Santa Cruz with
        a B.S in Computer Science. Most of my experience relates to the web and
        the M.E.R.N stack but I'm eager to learn any tech stack that is
        required.
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
  height: 10rem;
  width: 30rem;
  box-sizing: border-box;
  list-style-position: inside;
  /* color: white; */
  li {
    margin: 0.5rem 1rem 0 0;
    font-size: 1.2rem;

    @media ${breakpoints.sm} {
      font-size: 1.6rem;
    }
  }
`

const Description = styled.p`
  width: 100%;

  @media ${breakpoints.md} {
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
