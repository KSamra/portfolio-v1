import styled from "styled-components"
import { Section, SectionTitle } from "../section"
import React from "react"
import { colors, breakpoints } from "../../../theme"
import { IconGithub, IconExternal } from "../../../../icons/index"
import { ProjectImage } from "./images"
import { ButtonLink } from "../../../elements/Links"
import { Link } from "gatsby"
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

const Projects = ({ projects }) => {
  const projectList = projects.map(element => {
    return (
      <ProjectContainer key={element.node.id}>
        <Link to={`/${element.node.slug}`} aria-label="Go to Project Page">
          <ProjectTitle>{element.node.title}</ProjectTitle>
        </Link>
        <FlexContainer>
          <ImageContainer>
            <Link to={`/${element.node.slug}`} aria-label="Go to Project Page">
              {ProjectImage(element.node.image)}
            </Link>
          </ImageContainer>
          <Description>
            <p>{element.node.desc}</p>
            <TechContainer>
              <Tech tech={element.node.tech} />
            </TechContainer>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <IconLink
                href={element.node.github}
                aria-label="View Source Code for this project on Github"
                title="View Source"
              >
                <IconGithub />
              </IconLink>
              {element.node.link ? (
                <IconLink
                  href={element.node.link}
                  aria-label="View Live"
                  title="View Live"
                >
                  <IconExternal />
                </IconLink>
              ) : null}
            </div>
          </Description>
        </FlexContainer>
      </ProjectContainer>
    )
  })
  return (
    <Section id="projects">
      <SectionTitle>
        Projects
        <SectionTitle.Line />
      </SectionTitle>
      <p>Here are some of the projects I've built.</p>
      <Section.Spacer />

      {projectList}
      <div style={{ content: "none", marginBottom: "5rem" }}></div>
      <ButtonLink
        internal={false}
        to="https://github.com/KSamra"
        label={"More on Github"}
      />
    </Section>
  )
}

export default Projects

const ProjectTitle = styled.h3`
  /* color: rgb(204, 214, 246); */
  display: inline-flex;
  color: ${colors.subtext};
  font-weight: 500;
  transition: color 100ms ease;

  :hover {
    color: ${colors.primary};
  }
`

const ProjectContainer = styled.div`
  margin-bottom: 2rem;
  width: 100%;
`

const Description = styled.div`
  width: 100%;
  line-height: 1.5;

  @media ${breakpoints.lg} {
    width: 50%;
    margin-left: 5rem;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  align-self: center;

  @media ${breakpoints.lg} {
    width: 50%;
    align-self: center;
  }
`

const FlexContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${breakpoints.lg} {
    flex-direction: row;
  }
`

export const IconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: transparent;

  svg {
    margin: 0.5rem 2rem;
    width: 1.5rem;
    height: 1.5rem;
    fill: rgb(204, 214, 246);
    transition: fill-opacity 100ms ease-out;

    :hover {
      fill-opacity: 0.5;
    }

    @media ${breakpoints.sm} {
      width: 2rem;
      height: 2rem;
    }
  }

  h3 {
    color: white;
  }

  div {
    border: 1px solid rgb(100, 255, 218);
    background: transparent;
    padding: 0.5rem 0.5rem;
    width: fit-content;
    border-radius: 10px;
  }
`

const TechContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    font-size: 1rem;
    color: whitesmoke;

    @media ${breakpoints.md}{
      font-size: 1.2rem;
    }
  }
`

const Tech = ({ tech }) => {
  let id = 0

  const techList = tech.map(e => <p key={id++}>{e}</p>)

  return techList
}
