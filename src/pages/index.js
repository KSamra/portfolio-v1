import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WhoAmI from '../styles/blocks/sections/hero/whoami';
import Projects from '../styles/blocks/sections/projects/projects';
import Contact from '../styles/blocks/sections/contact';

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Kavan Samra | Software Developer" />

      <WhoAmI />
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
      }
    }
  }
}
`