import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/app/app.jsx';
import {reducer} from './reducer.js';

const rootElement = document.querySelector(`#root`);

const store = createStore(reducer);

const init = () => {
  ReactDom.render(
      <Provider store = {store}>
        <App />
      </Provider>,
      rootElement
  );
};

init();
