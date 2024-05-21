import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WhoAmI from "../components/hero/whoami";
import About from "../components/about";
import Projects from "../components/projects/projects";
import Contact from "../components/contact";
import WorkExperience from "../components/work_experience/work_experience";

const IndexPage = ({ data }) => {
  const image = data.file.childImageSharp.resize.src

  return (
    <Layout>
      <SEO title="Kavan Samra" image={image} />

      <WhoAmI />
      <About />
      <WorkExperience/>
      <Projects projects={data.allProjectsJson.edges} />
      <Contact />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          id
          title
          year
          image
          github
          tech
          desc
          slug
          link
        }
      }
    }


    allExperienceJson {
      edges {
        node {
          id
          company
          description
          month_end
          month_start
          slug
          title
          link
          year_end
          year_start
        }
      }
    }
 

    file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        resize(width: 1080) {
          src
          width
          height
        }
      }
    }
  }
`


