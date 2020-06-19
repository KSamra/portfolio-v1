import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image'

const StartupImage = () => {
  const data = useStaticQuery(graphql`
    query{
      imageOne: file(relativePath: { eq: "startup_analysis.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return <Img fluid={data.imageOne.childImageSharp.fluid} alt="Startup Analysis Image" />
}

export default StartupImage;