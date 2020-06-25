import React from 'react';
import renderer from 'react-test-renderer';
import CitiesPlaces from './cities-places.jsx';

const citiesPlaces = [
  {
    id: 0,
    city: `Paris`,
    photos: [`https://canadskaya-izba.ru/img/doma/karkas2.jpg`],
    title: `Очень красивый и уютный дом`,
    description: `Описание у всех одинаковое, потому что лень придумывать.`,
    isPremium: false,
    isFavorite: false,
    type: `apartment`,
    rating: 5,
    countDedrooms: 4,
    maxGuests: 6,
    price: 250,
    features: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`, `Washing machine`],
    infoOwner: {
      avatar: `https://api.adorable.io/avatars/285/abott@adorable.png`,
      name: `Vladimir`,
      isSuper: false,
    }
  },
  {
    id: 1,
    city: `Paris`,
    photos: [`https://canadskaya-izba.ru/img/doma/karkas2.jpg`],
    title: `Обычный дом на ночь`,
    description: `Описание у всех одинаковое, потому что лень придумывать.`,
    isPremium: false,
    isFavorite: false,
    type: `apartment`,
    rating: 4,
    countDedrooms: 2,
    maxGuests: 3,
    price: 100,
    features: [`Wifi`, `Heating`, `Kitchen`],
    infoOwner: {
      avatar: `https://api.adorable.io/avatars/285/abott@adorable.png`,
      name: `Vlad`,
      isSuper: false,
    }
  }
];

const cityName = `Paris`;

test(`<CitiesPlaces /> render`, () => {
  const three = renderer
    .create(<CitiesPlaces citiesPlaces = {citiesPlaces} cityName = {cityName} />).toJSON();

  expect(three).toMatchSnapshot();
});
