import styled from "styled-components"
import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import { Section } from "../blocks/sections/section"
import { colors, breakpoints } from "../theme"
import { ProjectImage } from "../blocks/sections/projects/images"
import SEO from "../../components/seo"

import { IconLink } from "../blocks/sections/projects/projects"

import { IconExternal, IconGithub } from "../../icons/index"

/**
 *
 * Layout for detailed project pages
 */

export default function Project({ data }) {
  const project = data.projectsJson
  const tech = Array.from(project.tech)
  const seoImage = data.imageSharp.resize.src
  let id = 0
  let techList = tech.map(element => {
    return <li key={id++}>{element}</li>
  })

  return (
    <Layout>
      <SEO
        title={`Kavan Samra | ${project.title}`}
        image={seoImage}
        path={project.slug}
        description={project.desc}
      />
      <Section>
        <Title>{project.title}</Title>

        <ProjectImageContainer>
          {ProjectImage(project.image)}
        </ProjectImageContainer>

        <TextArea>
          <Excerpt>{project.desc}</Excerpt>

          <div
            style={{
              display: "flex",
              width: "10rem",
              justifyContent: "space-evenly",
            }}
          >
            <IconLink
              href={project.github}
              aria-label="View Source Code on Github"
              title="Github Source"
            >
              <IconGithub />
            </IconLink>
            {project.link ? (
              <IconLink
                href={project.github}
                aria-label="View Live"
                title="View Live"
              >
                <IconExternal />
              </IconLink>
            ) : null}
          </div>
          <SubHeading>Built With</SubHeading>
          <List>{techList}</List>

          <SubHeading> What I Learned </SubHeading>

          <TextContent>{project.learned}</TextContent>
        </TextArea>
      </Section>
    </Layout>
  )
}

const Title = styled.h1`
  color: white;
  font-size: 4rem;
  align-self: center;

  @media ${breakpoints.lg} {
    font-size: 6rem;
  }
`

const Excerpt = styled.p``

const SubHeading = styled.h3`
  align-self: flex-start;
  color: ${colors.subtext};
`

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
    font-size: 1.4rem;

    @media ${breakpoints.sm} {
      font-size: 1.6rem;
    }
  }

  h3 {
    font-size: 3rem;
    margin: 2rem 0;

    @media ${breakpoints.sm} {
      font-size: 3.5rem;
    }
  }
`

const List = styled.ul`
  align-self: flex-start;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding-inline-start: 0;
  margin: 0;
  list-style-position: inside;
  box-sizing: border-box;

  li {
    font-size: 1.4rem;
    @media ${breakpoints.sm} {
      font-size: 1.6rem;
    }

    &:last-child {
      margin: 0;
    }
  }
`

const TextContent = styled.p`
  align-self: flex-start;
  margin: 0;
`

const ProjectImageContainer = styled.div`
  width: 90%;
`

export const query = graphql`
  query($slug: String!, $image: String) {
    projectsJson(slug: { eq: $slug }) {
      title
      github
      slug
      image
      desc
      tech
      link
      learned
    }

    imageSharp(resize: { originalName: { eq: $image } }) {
      resize(width: 1080) {
        src
        width
        height
      }
    }
  }
`
