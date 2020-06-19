import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
// import styled from 'styled-components';
import SYAImage from './sya';
import StartupImage from './startups';

export const ProjectImage = (name) => {
  switch (name) {
    case 'Pokedex.png':
      return (
        <PokedexImage alt="Pokedex project image"/>
      ) 

    case 'SYA.png':
      return (<SYAImage alt="SYA project image"/>)

    case 'startup_analysis.png':
      return (<StartupImage alt="Starup project image"/>)
  
    default:
      console.error(`${name} is not an image found in the static image folder`);
      return null;
  }
}

//Place static queries here

const PokedexImage = () => {
  const data = useStaticQuery(graphql`
    query{
      imageOne: file(relativePath: { eq: "Pokedex.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return <Img fluid={data.imageOne.childImageSharp.fluid} alt="Project Image" />
}



// const StyledPokedexImage = styled(PokedexImage)`
//   object-fit: cover;
//   width: 50%;
// `;