import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainComponent from './main';

Enzyme.configure({adapter: new Adapter()});

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

test(`Main render`, () => {
  // const tree = renderer
  //   .create(<MainComponent citiesPlaces = {citiesPlaces} />).toJSON();

  // expect(tree).toMatchSnapshot();

  const div = global.document.createElement(`div`);

  global.document.body.appendChild(div);

  const main = mount(<MainComponent citiesPlaces = {citiesPlaces} />, {attachTo: div});

  expect(main).toMatchSnapshot();

});
