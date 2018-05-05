// @flow
import { shallow } from 'enzyme';
import 'jest-styled-components';
import puppeteer from 'puppeteer';
import React from 'react';
import App from './App';

const PROTOCOL = process.env.HTTPS === 'true' ? 'https' : 'http';
const PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const URL = `${PROTOCOL}://${HOST}:${PORT}`;

describe('<App />', () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  it('should match existing snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match existing image snapshot', async () => {
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });
    await page.goto(`${URL}`);
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot({
      customSnapshotIdentifier: 'App',
    });
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

  afterAll(async () => {
    await browser.close();
  });
});
