import styled from 'styled-components';
import {Section, SectionTitle} from '../section';
import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { breakpoints } from '../../../theme';
import GithubIcon from '../../../../icons/github';
import {ProjectImage} from './images';
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

// const ProjectImage = ({image}) => {
//   const data = useStaticQuery(graphql`
//     query images($name: String){
//       imageOne: file(relativePath: { eq: $name }) {
//         childImageSharp {
//           fluid(maxWidth: 1080) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)
//   console.log(`Data: ${JSON.stringify(data, undefined, 2)}`)

//   return <Img fluid={data.imageOne.childImageSharp.fluid} />
// }


const ProjectTitle = styled.h3`
  color: goldenrod;
  font-weight: 500;

`;

const ProjectContainer = styled.div`
  margin-bottom: 2rem;
  width: 100%;
`;


const Description = styled.div`
  width: 100%;
  line-height: 1.5;

  @media ${breakpoints.lg} {
    width: 50%;  
    margin-left: 5rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  align-self: center;

  @media ${breakpoints.lg} {
   width: 50%;
   align-self: center; 
  }
`;

const FlexContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${breakpoints.lg} {
    flex-direction: row;
  }
`;

const IconLink = styled.a`
  svg {
    width: 2rem;
    height: 2rem;
  }
`;



const Projects = ({projects}) => {
  
  console.log(projects)

  const projectList = projects.map(element => {
    return (
      <ProjectContainer key={element.id}>
        <ProjectTitle>{element.title}</ProjectTitle>
        <FlexContainer>
          <ImageContainer>
            {ProjectImage(element.image)}
          </ImageContainer>
          <Description>
            <p>{element.desc}</p>
            <IconLink 
              href={element.github}
              target="_blank"
              rel="noreferrer noopener">
              <GithubIcon />
            </IconLink>
          </Description>
        </FlexContainer> 
      </ProjectContainer>
    )
  });
  return (
    <Section id="projects">
      <SectionTitle>
        Projects
        <SectionTitle.Line/>
      </SectionTitle>
      <p>
        Here are some things I've been working on recently.
      </p>
      <Section.Spacer />

      {projectList}
    </Section>
  )
};

export default Projects;
