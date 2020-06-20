import styled from "styled-components"

export const fonts = {
  RobotoMono: "Roboto Mono, Lucida Console, Monaco, monospace",
}

const points = {
  sm: `640px`,
  md: `768px`,
  lg: `1024px`,
  xl: `1280px`,
}

export const breakpoints = {
  sm: `(min-width: ${points.sm})`,
  md: `(min-width: ${points.md})`,
  lg: `(min-width: ${points.lg})`,
  xl: `(min-width: ${points.xl})`,
}

export const Center = styled.div`
  margin: 0 auto;
  max-width: ${points.lg};
  padding: 0 5rem 5rem;

  @media ${breakpoints.lg} {
    padding: 0 1.0875rem 1.45rem;
  }
`

// blue: #00ECFF

export const colors = {
  button_primary: "rgba(116, 70, 241, 1)",
  // button_light: 'rgba(116, 70, 241, .05)',
  button_light: "rgba(255, 167, 196, .2)",
  // button_pink: 'rgba(219, 112, 147, 1)'
  button_pink: "#00ECFF",
  primary: "rgb(255, 167, 196)",
  subtext: "rgb(204, 214, 246)",
}


export const font_sizes = {
  mobile: '1.4rem',
  desktop: '1.6rem'
}