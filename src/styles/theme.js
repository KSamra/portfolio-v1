import styled from 'styled-components';


export const fonts = {
    RobotoMono: 'Roboto Mono, Lucida Console, Monaco, monospace'
  }

const points = {
  sm: `640px`,
  md: `768px`,
  lg: `1024px`,
  xl: `1280px`
}


export const breakpoints = {
  sm: `(min-width: ${points.sm})`,
  md: `(min-width: ${points.md})`,
  lg: `(min-width: ${points.lg})`,
  xl: `(min-width: ${points.xl})`,
};

export const Center = styled.div`
  margin: 0 auto;
  max-width: ${points.lg};
  padding: 0 5rem 5rem;

  @media ${breakpoints.lg} {
    padding: 0 1.0875rem 1.45rem;
  }
`;

export const colors = {
  button_primary: 'rgba(116, 70, 241, 1)',
  button_light: 'rgba(116, 70, 241, .05)'
};