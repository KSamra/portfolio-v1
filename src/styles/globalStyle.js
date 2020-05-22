import { createGlobalStyle } from 'styled-components';
import FontFaces from './fonts';
import theme from './theme';

const { fonts } = theme;

export const GlobalStyle = createGlobalStyle`
  
  ${FontFaces};

  html {
    box-sizing: border-box;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: rgb(10, 25, 47);
    color: rgb(136, 146, 176);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${fonts.RobotoMono};

    line-height: 1.3;
  }

  a {
    text-decoration: none;
    background-color: transparent;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
`;