// @flow

/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
// import "./fonts";

const GlobalStyles = createGlobalStyle`
  ${normalize()}

  :root {
    box-sizing: border-box;
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }
`;

export default GlobalStyles;
