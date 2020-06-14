import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import WhoAmI from '../styles/blocks/sections/hero/whoami';
import Projects from '../styles/blocks/sections/projects/projects';
import Contact from '../styles/blocks/sections/contact';

const projectData = [
  {
    id: 0,
    title: "Pokédex",
    desc: "A dashboard providing information on all generations of Pokemon. Search for any Pokemon and learn about their base stats, strengths, weaknesses and more.",
    image: "Pokedex.png",
    github: 'https://github.com/KSamra/pokedex',
    tech: [`React`, `Node.js`, `Express`, `Apollo GraphQL`, `MongoDB`],
    slug: 'pokedex'
  },
  {
    id: 2,
    title: "Bloop",
    desc: "This was the first solo project I made using React",
    image: "Pokedex.png",
    tech: [`React`, `Node.js`, `Express`, `Apollo GraphQL`, `MongoDB`],
    github: 'https://github.com/KSamra/pokedex',
    slug: 'pokedex'
  }
]

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Kavan Samra" />

    <WhoAmI />
    <Projects projects={projectData} />
    <Contact />

    <Link to="/page-2/">Go to page 2</Link>

  </Layout>
)

export default IndexPage


export const query = graphql`
query($slug: String!) {
  projectsJson(slug: { eq: $slug}) {
    title
    github
    slug
    image
    desc
    tech
  }
}
`