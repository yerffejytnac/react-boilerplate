// @flow

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import GlobalStyles from './styles/global-styles';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Fragment>
        <Component />
        <GlobalStyles />
      </Fragment>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}

registerServiceWorker();
