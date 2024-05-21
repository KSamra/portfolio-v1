import styled from "styled-components"
import React from "react"
import { Section, SectionTitle } from "./section"
import { ButtonLink } from "./styles/elements/Links";
import { colors, breakpoints } from "./styles/theme";

const Contact = props => {
  return (
    <Section id="contact" child="last">
      <SectionTitle>
        Contact
        <SectionTitle.Line />
      </SectionTitle>
      <h3 style={{ color: `${colors.subtext}` }}>Let's get in touch!</h3>
      <Message>
        I am actively seeking a full time position and would love to hear from
        you about any opportunities.
      </Message>
      <Section.Spacer />
      <ButtonLink
        internal={false}
        to={"mailto:samrakavan@gmail.com"}
        label="Contact"
      />
    </Section>
  )
}

export default Contact

const Message = styled.p`
  width: 100%;

  @media ${breakpoints.md} {
    max-width: 60%;
  }
`
