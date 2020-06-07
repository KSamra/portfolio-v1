import styled from 'styled-components';
import React from 'react';
import {Section, SectionTitle} from './section';
import {ButtonLink} from '../../elements/Links';

const Contact = (props) => {
  return (
    <Section>
      <SectionTitle>
        Contact
        <SectionTitle.Line/>
      </SectionTitle>
      <p>Let's get in touch!</p>
      <Section.Spacer />
      <ButtonLink internal={false} to={"mailto:samrakavan@gmail.com"} label="Contact" ></ButtonLink>
    </Section>
    
  )
};

export default Contact;


