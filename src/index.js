import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import {generateOffers, generateReviews} from './mock/mock.js';

const offers = generateOffers(50);
const reviews = generateReviews(10);

const rootElement = document.querySelector(`#root`);

const placeOffer = {
  id: 0,
  city: `Paris`,
  photos: [`https://canadskaya-izba.ru/img/doma/karkas2.jpg`, `https://www.krasdom.com/galfotobig/584.jpg`, `https://www.krasdom.com/galfotobig/561.jpg`, `https://www.artis21.ru/upload/iblock/f16/f164e862e34e212180e03f76c9226ee7.jpg`],
  title: `Очень красивый и уютный дом`,
  description: `Описание у всех одинаковое, потому что лень придумывать.`,
  isPremium: true,
  isFavorite: true,
  type: `Apartment`,
  rating: 5,
  countDedrooms: 4,
  maxGuests: 6,
  price: 250,
  features: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`, `Washing machine`],
  infoOwner: {
    avatar: `https://api.adorable.io/avatars/285/abott@adorable.png`,
    name: `Vladimir`,
    isSuper: true,
  }
};

const init = () => {
  ReactDom.render(
      <App citiesPlaces = {offers} placeOffer = {placeOffer} />,
      rootElement
  );
};

init();

export {reviews};
