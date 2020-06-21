import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WhoAmI from "../styles/blocks/sections/hero/whoami"
import About from "../styles/blocks/sections/about"
import Projects from "../styles/blocks/sections/projects/projects"
import Contact from "../styles/blocks/sections/contact"

const IndexPage = ({ data }) => {
  const image = data.file.childImageSharp.resize.src

  return (
    <Layout>
      <SEO title="Kavan Samra" image={image} />

      <WhoAmI />
      <About />
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
          image
          github
          tech
          desc
          slug
          link
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
