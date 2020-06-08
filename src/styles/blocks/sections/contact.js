import styled from 'styled-components';
import React from 'react';
import {Section, SectionTitle} from './section';
import {ButtonLink} from '../../elements/Links';

const Contact = (props) => {
  return (
    <Section id="contact" child="last">
      <SectionTitle>
        Contact
        <SectionTitle.Line/>
      </SectionTitle>
      <h3>Let's get in touch!</h3>
      <Message>
        I am actively seeking a full time position and would love to hear from you about any opportunities.
        I'm also open to relocation so if you're in another city don't hesitate to write! 
      </Message>
      <Section.Spacer />
      <ButtonLink internal={false} to={"mailto:samrakavan@gmail.com"} label="Contact" />
    </Section>
    
)
};

export default Contact;


const Message = styled.p`
  max-width: 50%;
`;