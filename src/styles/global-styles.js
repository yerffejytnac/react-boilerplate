// @flow

/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
// import "./fonts";

injectGlobal`
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
