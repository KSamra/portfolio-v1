import styled from "styled-components";
import { Section } from "../section";
import { ButtonLink } from "../styles/elements/Links";
import { IconLocation } from "../../icons/index";
import React from "react";
import { fonts,colors, breakpoints } from "../styles/theme";

const Intro = styled.p`
  font-family: ${fonts.Roboto};
  color: ${colors.primary};
  align-self: flex-start;
  line-height: 1;
  margin-bottom: 0;
`

const HeroName = styled.h1`
  font-family: ${fonts.RobotoMono};
  font-weight: 700;
  color: white;
  margin: 1rem 0;
  font-size: 8rem;
  align-self: flex-start;
  line-height: 0.9;
`

const About = styled.h3`
  /* color: goldenrod; */
  align-self: flex-start;
  width: max(60%, 30rem);
  margin-bottom: 0;
`

const Padder = styled.div`
  padding-top: 5vh;
  box-sizing: border-box;

  @media ${breakpoints.md} {
    padding-top: 10vh;
  }
`

const WhoAmI = () => (
  <Section>
    <Padder>
      <Intro>Hello, my name is</Intro>
      <HeroName>Kavan Samra</HeroName>
      <About>
        I'm a Software Developer.
      </About>

      <IconLocation />
      <ButtonLink
        internal={false}
        to={"mailto:samrakavan@gmail.com"}
        label="Contact"
      />
    </Padder>
  </Section>
)

export default WhoAmI
