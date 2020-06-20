import styled from "styled-components"
import { Section } from "../section"
import { ButtonLink } from "../../../elements/Links"
import { IconLocation } from "../../../../icons/index"
import React from "react"
import { colors } from "../../../theme"

const Intro = styled.p`
  color: ${colors.primary};
  align-self: flex-start;
  line-height: 1;
  margin-bottom: 0;
`

const HeroName = styled.h1`
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

const WhoAmI = () => (
  <Section>
    <div
      style={{
        paddingTop: "15vh",
        boxSizing: "border-box",
      }}
    >
      <Intro>Hello, my name is</Intro>
      <HeroName>Kavan Samra</HeroName>
      <About>
        I'm a software developer seeking a Junior Developer position.
      </About>

      <IconLocation />
      <ButtonLink
        internal={false}
        to={"mailto:samrakavan@gmail.com"}
        label="Contact"
      />
    </div>
  </Section>
)

export default WhoAmI
