import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import {countPlaces} from './mock/mock.js';

const rootElement = document.querySelector(`#root`);

const init = () => {
  ReactDom.render(
      <App countPlaces = {countPlaces}/>,
      rootElement
  );
};

init();
