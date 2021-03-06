import styled from "styled-components"
import { SLink } from "../styles/elements/Links"
import React from "react"

const Text = styled.h1`
  color: white;
  margin: 0;
`

const Title = ({ siteTitle }) => (
  <SLink to="/" aria-label="Home">
    <Text>{siteTitle}</Text>
  </SLink>
)

export default Title
