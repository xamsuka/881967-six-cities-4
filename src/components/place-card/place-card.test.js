import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const place = {
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
};

test(`<PlaceCard /> render`, () => {
  const three = renderer
    .create(<PlaceCard place = {place} onMouseOver = {() => {}} variant = {`cities`} />).toJSON();

  expect(three).toMatchSnapshot();
});
