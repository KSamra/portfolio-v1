import styled from 'styled-components';
import React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
/**
 * Layout for detailed project pages
 */

 export default function Project({ data }) {
  console.log(data, null, 4);
  const project = data.projectsJson;
  
   return (
     <Layout>
       <h1>{project.title}</h1>
       <p>{project.desc}</p>
       <a>{project.github}</a>

     </Layout>
   );
 };


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