import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import {generateOffers, generateReviews} from './mock/mock.js';

const offers = generateOffers(50);
export const reviews = generateReviews(10);

const rootElement = document.querySelector(`#root`);

const init = () => {
  ReactDom.render(
      <App citiesPlaces = {offers}/>,
      rootElement
  );
};

init();
