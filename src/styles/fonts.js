// @flow

import { fontFace } from 'polished';
import { injectGlobal } from 'styled-components';

const { PUBLIC_URL } = process.env;
const FONT_FAMILY_NAME = `FontNameGoesHere`;

const fonts = [
  {
    family: `${FONT_FAMILY_NAME}`,
    path: `${PUBLIC_URL}/fonts/${FONT_FAMILY_NAME}`,
    formats: ['woff2', 'woff', 'ttf', 'eot', 'svg'],
    weight: 600,
  },
];

fonts.map(
  ({ family, path, formats, weight }) =>
    injectGlobal`${fontFace({
      fontFamily: family,
      fontFilePath: path,
      fileFormats: formats,
      fontWeight: weight,
    })}`,
);
