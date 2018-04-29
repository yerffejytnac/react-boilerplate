import React from 'react';
import { shallow, render } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('should match existing snapshot', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });

  it('renders a headline with correct copy', () => {
    const wrapper = shallow(<App />);
    const headline = <h1>Application</h1>;
    expect(wrapper).toContainReact(headline);
  });
});
