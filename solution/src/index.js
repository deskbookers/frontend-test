import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import combinedReducers from './reducers';

import App from 'containers/App';

import './styles/styles.less';

const BASE_ELEMENT_SELECTOR = '.app';

let baseElement = document.querySelector(BASE_ELEMENT_SELECTOR);
const store = createStore(combinedReducers);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  baseElement
);
