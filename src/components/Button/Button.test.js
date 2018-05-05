// @flow

import { mount, shallow } from 'enzyme';
import 'jest-styled-components';
import puppeteer from 'puppeteer';
import React from 'react';
import Button from './Button';

const PROTOCOL = process.env.HTTPS === 'true' ? 'https' : 'http';
const PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const URL = `${PROTOCOL}://${HOST}:${PORT}`;

describe('<Button />', () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  it('should match existing snapshot', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match existing image snapshot', async () => {
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });
    await page.goto(`${URL}`);
    const component = await page.$('[data-testid="Button"]');
    const image = await component.screenshot();

    expect(image).toMatchImageSnapshot({
      customSnapshotIdentifier: 'Button',
    });
  });

  xit('renders a button with correct copy', () => {
    const wrapper = mount(<Button>Super Awesome Button</Button>);
    const button = <button>Super Awesome Button</button>;
    expect(wrapper).toContainReact(button);
  });

  it('renders with correct styles', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toHaveStyleRule('background-color', '#000');
  });

  afterAll(async () => {
    await browser.close();
  });
});
