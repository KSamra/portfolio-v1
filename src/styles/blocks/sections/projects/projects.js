import styled from 'styled-components';
import {Section, SectionTitle} from '../section';
import React from 'react';
import { breakpoints } from '../../../theme';
import GithubIcon from '../../../../icons/github';
import {ProjectImage} from './images';
import {ButtonLink} from '../../../elements/Links';
import { Link } from "gatsby";
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


const Projects = ({projects}) => {
  
  console.log(projects)

  const projectList = projects.map(element => {
    console.log(element.tech)
    return (
      <ProjectContainer key={element.id}>
        <Link to={`/${element.slug}`}>
          <ProjectTitle>{element.title}</ProjectTitle>
        </Link>
        <FlexContainer>
          <ImageContainer>
            {ProjectImage(element.image)}
          </ImageContainer>
          <Description>
            <p>{element.desc}</p>
            <TechContainer>
              <Tech tech={element.tech}/>
            </TechContainer>
            <GithubLink href={element.github}>
              <GithubIcon />
            </GithubLink>
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
      <div style={{content: 'none', marginBottom: '5rem'}}></div>
      <ButtonLink internal={false} to="https://github.com/KSamra" label={"See More"}/> 
      
    </Section>
  )
};

export default Projects;



const ProjectTitle = styled.h3`
  /* color: rgb(204, 214, 246); */
  color: palevioletred;
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

const GithubLink = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  background: transparent;
  
  svg {
    width: 2rem;
    height: 2rem;
    fill: rgb(204, 214, 246);
    transition: fill-opacity 100ms ease-out;

    :hover {
      fill-opacity: .5;
    }
  }

  h3 {
    color: white;
  }

  div {
    border: 1px solid rgb(100, 255, 218);
    background: transparent;
    padding: .5rem .5rem;
    width: fit-content;
    border-radius: 10px;
  }


`;

const TechContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    font-size: clamp(.8rem, 1.4vw, 1.2rem);
    color: whitesmoke;
  }
`;

const Tech = ({tech}) => {
  let id = 0;

  const techList = tech.map(e => (
    <p key={id++}>{e}</p>
  ))

  return techList;
}

