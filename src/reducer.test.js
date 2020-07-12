import {reducer, ActionCreator} from './reducer.js';
import {offers} from './mock/mock.js';

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

describe(`Тестирование функции reducer`, () => {
  test(`Инициализация store. Offers ещё не загруженны`, () => {
    expect(reducer(void 0, {}))
      .toEqual({
        city: `Paris`,
        offers: [],
        placeOffer,
      });
  });

  test(`Reducer смена города`, () => {
    expect(reducer({
      city: `Paris`,
      offers,
      placeOffer,
    }, {
      type: `CHANGE_CITIES`,
      payload: `Cologne`
    }))
      .toEqual({
        city: `Cologne`,
        offers,
        placeOffer,
      });
  });

  test(`Получение списка предложений`, () => {
    expect(reducer({
      city: `Paris`,
      offers: [],
      placeOffer,
    }, {
      type: `GET_OFFERS`,
      payload: offers
    }))
      .toEqual({
        city: `Paris`,
        offers,
        placeOffer,
      });
  });

});

const mockEvent = {
  target: {
    textContent: `Cologne`,
  }
};

describe(`Тестирование Функций ActionCreator`, () => {
  test(`ActionCreator changeCities() `, () => {
    expect(ActionCreator.changeCities(mockEvent)).toEqual({
      type: `CHANGE_CITIES`,
      payload: `Cologne`
    });
  });

  test(`ActionCreator getOffers() `, () => {
    expect(ActionCreator.getOffers()).toEqual({
      type: `GET_OFFERS`,
      payload: offers
    });
  });
});
