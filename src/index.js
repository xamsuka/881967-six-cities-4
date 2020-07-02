import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import leaflet from 'leaflet';
import {generateOffers} from './mock/mock.js';

const offers = generateOffers(50);

const rootElement = document.querySelector(`#root`);

const init = () => {
  ReactDom.render(
      <App citiesPlaces = {offers}/>,
      rootElement
  );
};

init();
