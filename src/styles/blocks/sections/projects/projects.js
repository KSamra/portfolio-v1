import styled from 'styled-components';
import {Section, SectionTitle} from '../section';
import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ProjectImage = () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "Pokedex.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(`Data: ${JSON.stringify(data, undefined, 2)}`)

  return <Img fluid={data.imageOne.childImageSharp.fluid} />
}


const ProjectTitle = styled.h3`
  color: goldenrod;
  font-weight: 500;

`;


const Projects = ({projects}) => {
  
  console.log(projects)

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
      <div style={{ maxWidth: `1000px`, marginBottom: `1.45rem` }}>
        <ProjectImage />
      </div>
    </Section>
  )
};

export default Projects;
