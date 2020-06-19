import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image'

const SYAImage = () => {
  const data = useStaticQuery(graphql`
    query{
      imageOne: file(relativePath: { eq: "SYA.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return <Img fluid={data.imageOne.childImageSharp.fluid} alt="SYA Project Image" />
}

export default SYAImage;