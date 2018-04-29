// @flow
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import App from './App';

describe('<App />', () => {
  it('should match existing snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a headline with correct copy', () => {
    const wrapper = shallow(<App />);
    const headline = <h1>Application</h1>;
    expect(wrapper).toContainReact(headline);
  });

  it('renders with correct styles', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveStyleRule('border', '1px solid red');
  });
});
