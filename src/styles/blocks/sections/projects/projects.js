import styled from 'styled-components';
import {Section, SectionTitle} from '../section';
import React from 'react';


const ProjectTitle = styled.h3`
  color: goldenrod;
  font-weight: 500;

`;

const ProjectImage = styled.img`
  width: 100%;
  :hover {
    transform: translateY(3px);
  }
`;

const Projects = () => {
  return (
    <Section>
      <SectionTitle>
        Projects
        <SectionTitle.Line/>
      </SectionTitle>
      <p>
      Here are some things I've been working on recently.
      </p>
      <Section.Spacer />

      <ProjectTitle>0.1 Pokedex</ProjectTitle>
    </Section>
  )
};

export default Projects;
