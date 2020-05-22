import { css } from 'styled-components';

import RobotoMono_Regular_WOFF from '../fonts/roboto-mono-v7-latin-regular.woff';
import RobotoMono_Regular_WOFF2 from '../fonts/roboto-mono-v7-latin-regular.woff2';

import RobotoMono_Regular_Italic_WOFF from '../fonts/roboto-mono-v7-latin-italic.woff';
import RobotoMono_Regular_Italic_WOFF2 from '../fonts/roboto-mono-v7-latin-italic.woff2';

import RobotoMono_500_WOFF from '../fonts/roboto-mono-v7-latin-500.woff';
import RobotoMono_500_WOFF2 from '../fonts/roboto-mono-v7-latin-500.woff2';

import RobotoMono_500_Italic_WOFF from '../fonts/roboto-mono-v7-latin-500italic.woff';
import RobotoMono_500_Italic_WOFF2 from '../fonts/roboto-mono-v7-latin-500italic.woff2';

import RobotoMono_700_WOFF from '../fonts/roboto-mono-v7-latin-700.woff';
import RobotoMono_700_WOFF2 from '../fonts/roboto-mono-v7-latin-700.woff2';

const FontFaces = css`
    /* roboto-mono-italic - latin */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 400;
    src: local('Roboto Mono Italic'), local('RobotoMono-Italic'),
        url(${RobotoMono_Regular_Italic_WOFF2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${RobotoMono_Regular_Italic_WOFF}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* roboto-mono-regular - latin */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto Mono'), local('RobotoMono-Regular'),
        url(${RobotoMono_Regular_WOFF2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${RobotoMono_Regular_WOFF}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* roboto-mono-500 - latin */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 500;
    src: local('Roboto Mono Medium'), local('RobotoMono-Medium'),
        url(${RobotoMono_500_WOFF2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${RobotoMono_500_WOFF}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* roboto-mono-500italic - latin */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 500;
    src: local('Roboto Mono Medium Italic'), local('RobotoMono-MediumItalic'),
        url(${RobotoMono_500_Italic_WOFF2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${RobotoMono_500_Italic_WOFF}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* roboto-mono-700 - latin */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 700;
    src: local('Roboto Mono Bold'), local('RobotoMono-Bold'),
        url(${RobotoMono_700_WOFF2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${RobotoMono_700_WOFF}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
`;

export default FontFaces;