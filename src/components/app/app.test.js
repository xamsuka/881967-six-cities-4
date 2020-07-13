import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from './app.jsx';

const mockStore = configureStore([]);

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
    },
    coords: [55, 20]
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
    },
    coords: [55, 20]
  }
];

test(`App render`, () => {
  const store = mockStore({
    city: `Paris`,
    currentSort: `Popular`,
    offers: citiesPlaces,
  });

  const app = renderer
    .create(
        <Provider store={store}>
          <App
            citiesPlaces = {citiesPlaces}
            currentCity = {`Paris`}
            currentSort = {`Popular`}
            onChangeCurrentCity = {() => {}}
            getOffers = {() => {}} />
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }}).toJSON();

  expect(app).toMatchSnapshot();

});
