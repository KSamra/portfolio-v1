import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import WhoAmI from '../styles/blocks/sections/hero/whoami';
import Projects from '../styles/blocks/sections/projects/projects';

const projectData = [
  {
    id: 0,
    title: "Pokedex",
    desc: "This was the first solo project I made using React This was the first solo project I made using ReactThis was the first solo project I made using ReactThis was the first solo project I made using ReactThis was the first solo project I made using ReactThis was the first solo project I made using ReactThis was the first solo project I made using ReactThis was the first solo project I made using ReactThis was the first solo project I made using ReactThis was the first solo project I made using ReactThis was the first solo project I made using ReactThis was the first solo project I made using React",
    image: "Pokedex.png",
    github: 'https://github.com/KSamra/pokedex'
  },
  {
    id: 2,
    title: "Bloop",
    desc: "This was the first solo project I made using React",
    image: "Pokedex.png"
  }
]

const IndexPage = () => (
  <Layout>
    <SEO title="Kavan Samra" />
    {/* <Section>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Section> */}

    <WhoAmI />
    <Projects projects={projectData} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
