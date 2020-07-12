import {CITIES} from './const.js';
import {extend} from './utils/util.js';
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

const initialState = {
  city: CITIES[0],
  offers: [],
  placeOffer,
};

const ActionType = {
  CHANGE_CITIES: `CHANGE_CITIES`,
  GET_OFFERS: `GET_OFFERS`,
};

const ActionCreator = {
  changeCities: (evt) => ({
    type: ActionType.CHANGE_CITIES,
    payload: evt.target.textContent
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS,
    payload: offers
  }),
};

const reducer = (store = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITIES:
      return extend(store, {
        city: action.payload
      });
    case ActionType.GET_OFFERS:
      return extend(store, {
        offers: action.payload
      });
  }

  return store;
};

export {reducer, ActionCreator};
