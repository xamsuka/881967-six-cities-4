import React from 'react';
import renderer from 'react-test-renderer';
import DetailedOffer from './detailed-offer.jsx';

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

const otherPlaces = [
  {
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
  },
  {
    id: 1,
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
  },
  {
    id: 2,
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
  }
];

const reviews = [
  {
    id: 0,
    user: {
      id: 0,
      userAvatar: `https://api.adorable.io/avatars/285/abott@adorable.png`,
      userName: `Vlad`,
    },
    rating: 5,
    text: `Всё очень круть!`,
    date: `April 2020`,
  },
  {
    id: 1,
    user: {
      id: 1,
      userAvatar: `https://api.adorable.io/avatars/285/abott@adorable.png`,
      userName: `Viktor`,
    },
    rating: 5,
    text: `Всё очень круть!`,
    date: `April 2020`,
  },
];

test(`DetailedOffer first render`, () => {
  const three = renderer
    .create(<DetailedOffer
      place = {placeOffer}
      otherPlaces = {otherPlaces}
      reviews = {reviews}
    />).toJSON();

  expect(three).toMatchSnapshot();
});
