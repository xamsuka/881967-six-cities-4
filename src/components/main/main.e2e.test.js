import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

Enzyme.configure({
  Adapter: new Adapter(),
});

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
      avatart: `https://api.adorable.io/avatars/285/abott@adorable.png`,
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
      avatart: `https://api.adorable.io/avatars/285/abott@adorable.png`,
      name: `Vlad`,
      isSuper: false,
    }
  }
];

Enzyme.configure({adapter: new Adapter()});

describe(`<MainComponent />`, () => {
  test(`simulate click evets`, () => {
    const onSecltionCityChange = Main.prototype._sectionTypeChangeHandler = jest.fn();

    const three = shallow(<Main citiesPlaces = {citiesPlaces} />);

    const sectionTypesElement = three.find(`.locations__list`);

    sectionTypesElement.props().onClick();

    expect(onSecltionCityChange).toHaveBeenCalledTimes(1);
  });
});
