import styled from 'styled-components';
import React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import { Section } from '../blocks/sections/section';
import { breakpoints } from '../theme';
import { ProjectImage } from '../blocks/sections/projects/images';
/**
 * Layout for detailed project pages
 */

export default function Project({ data }) {
console.log(data, null, 4);
const project = data.projectsJson;

  return (
    <Layout>
      <Section>

        <Title>{project.title}</Title>

        <ProjectImageContainer>
          {ProjectImage(project.image)}
        </ProjectImageContainer>

        <TextArea>
          <Excerpt>{project.desc}</Excerpt>
          <SubHeading> What I learned </SubHeading> 
          <TextContent>Completing this project taught me how to
            use React and setup a Apollo GraphQL Server. This is a cool project and I enjoyed
            wokrin on it without any help from anyone else
          </TextContent>
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
  /* max-width: 100%;
  font-size: 1rem;

  @media ${breakpoints.md} {
    width: 70%;
  } */

`;

const SubHeading = styled.h3`
  align-self: flex-start;
  color: white;
  font-size: 2rem;
  margin: 2rem 0;

  @media ${breakpoints.md}{
    font-size: 2.5rem;
  }
`;

const TextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.md} {
    width: 70%;
  }

  p {
    font-size: 1rem;

    @media ${breakpoints.md} {
      font-size: 1.6rem;
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