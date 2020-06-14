import styled from 'styled-components';
import React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import { Section } from '../blocks/sections/section';
import { breakpoints } from '../theme';
import { ProjectImage } from '../blocks/sections/projects/images';
import { element } from 'prop-types';
/**
 * 
 * Layout for detailed project pages
 */

export default function Project({ data }) {

  const project = data.projectsJson;
  const tech = Array.from(project.tech);

  let id = 0;  
  let techList = tech.map(element => {
    return <li key={id++}>{element}</li>
  })

  return (
    <Layout>
      <Section>

        <Title>{project.title}</Title>

        <ProjectImageContainer>
          {ProjectImage(project.image)}
        </ProjectImageContainer>

        <TextArea>
          <Excerpt>{project.desc}</Excerpt>

          <SubHeading> What I Learned </SubHeading> 

          <TextContent>Completing this project taught me how to
            use React and setup a Apollo GraphQL Server. This is a cool project and I enjoyed
            working on it without any help from anyone else
          </TextContent>

          <SubHeading>Built With</SubHeading>
          <List>
            {techList}
          </List>

        </TextArea>

      </Section>
    </Layout>
  );
};



const Title = styled.h1`
  color: white;
  font-size: 3rem;
  align-self: center;

  @media ${breakpoints.lg} {
    font-size: 4rem;
  }
`;



const Excerpt = styled.p`

`;

const SubHeading = styled.h3`
  align-self: flex-start;
  color: white;
`;

const TextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.sm} {
    width: 70%;
  }

  p {
    font-size: 1rem;

    @media ${breakpoints.sm} {
      font-size: 1.6rem;
    }

  }

  h3 {
    font-size: 2rem;
    margin: 2rem 0;

    @media ${breakpoints.sm}{
      font-size: 2.5rem;
    }
  }


`;

const List = styled.ul`
  align-self: flex-start;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  list-style: none;
  padding-inline-start: 0;
  margin: 0;
  list-style-position: inside;
  box-sizing: border-box;
  
  li {
    font-size: 1rem;
    margin: 0 1.5rem 0 0;
    @media ${breakpoints.sm} {
      font-size: 1.6rem;
    }

    &:last-child{ 
      margin: 0;
    }
  }
`;

const TextContent = styled.p`
  align-self: flex-start;
  margin: 0;

`;

const ProjectImageContainer = styled.div`
  width: 100%;
`;

 export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug}) {
      title
      github
      slug
      image
      desc
      tech
    }
  }
`