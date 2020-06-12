import styled from 'styled-components';
import React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
/**
 * Layout for detailed project pages
 */

 export default function Project({ data }) {
  const post = data.markdownRemark;

   return (
     <Layout>
       <h1>{post.frontmatter.title}</h1>
       <div>Hello world!</div>
     </Layout>
   );
 };


 export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
    }
  }
`