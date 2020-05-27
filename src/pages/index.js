import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Section from '../styles/blocks/sections/section';
import WhoAmI from '../styles/blocks/sections/hero/whoami';


const IndexPage = () => (
  <Layout>
    <SEO title="Kavan Samra" />
    {/* <Section>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Section> */}

    <WhoAmI />
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
