import styled from 'styled-components';
import React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import { Section } from '../blocks/sections/section';
import { breakpoints } from '../theme';
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
        <p>{project.desc}</p>
        <a>{project.github}</a>
      </Section>
    </Layout>
  );
};



const Title = styled.h1`
  color: white;
  font-size: 3rem;

  @media ${breakpoints.lg} {
    font-size: 4rem;
  }
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