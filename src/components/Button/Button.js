/* eslint-disable react/prop-types */
// @flow

import React from 'react';
import { Root } from './styled';

const Button = ({ children }) => <Root data-testid="Button">{children}</Root>;

export default Button;
