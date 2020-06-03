import React from 'react';
import Styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from 'styled-components';

export const ProjectImage = (name) => {
  switch (name) {
    case 'Pokedex.png':
      return (
        <StyledPokedexImage />
      ) 
      break;

    case 'astro':
      
  
    default:
      break;
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
  
  return <Img fluid={data.imageOne.childImageSharp.fluid} />
}

const StyledPokedexImage = styled(PokedexImage)`
  object-fit: cover;
  width: 50%;
`;