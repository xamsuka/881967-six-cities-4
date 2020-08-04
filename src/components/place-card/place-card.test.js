import React from 'react';
import renderer from 'react-test-renderer';
import {PlaceCard} from './place-card.jsx';

const offer = {
  id: 1,
  city: {
    location: {
      latitude: 52.374,
      longitude: 4.897976,
      zoom: 13,
    },
    name: `Paris`
  },
  previewPhoto: `https://canadskaya-izba.ru/img/doma/karkas2.jpg`,
  photos: [`https://canadskaya-izba.ru/img/doma/karkas2.jpg`, `https://www.krasdom.com/galfotobig/584.jpg`, `https://www.krasdom.com/galfotobig/561.jpg`, `https://www.artis21.ru/upload/iblock/f16/f164e862e34e212180e03f76c9226ee7.jpg`],
  title: `Очень красивый и уютный дом`,
  description: `Описание у всех одинаковое, потому что лень придумывать.`,
  isPremium: false,
  isFavorite: false,
  type: `Apartment`,
  rating: 4,
  countDedrooms: 3,
  maxGuests: 3,
  price: 500,
  features: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`, `Washing machine`],
  infoOwner: {
    id: 1,
    name: `Vladislav Kozlovsky`,
    avatar: `https://api.adorable.io/avatars/285/abott@adorable.png`,
    isPro: true,
  },
  coords: {
    latitude: 52.39,
    longitude: 4.8,
    zoom: 16,
  }
};

test(`<PlaceCard /> render`, () => {
  const three = renderer
    .create(<PlaceCard offer = {offer} onMouseOver = {() => {}} variant = {`cities`} onClickFavorite = {() => {}} />).toJSON();

  expect(three).toMatchSnapshot();
});
