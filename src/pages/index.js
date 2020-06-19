import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WhoAmI from '../styles/blocks/sections/hero/whoami';
import About from '../styles/blocks/sections/about';
import Projects from '../styles/blocks/sections/projects/projects';
import Contact from '../styles/blocks/sections/contact';


const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Kavan Samra" />

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
}
`