import {reducer, ActionCreator} from './reducer.js';

const offers = [
  {
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
    },
  },
  {
    id: 2,
    city: {
      location: {
        latitude: 52.374,
        longitude: 4.897976,
        zoom: 12,
      },
      name: `Paris`
    },
    previewPhoto: `https://canadskaya-izba.ru/img/doma/karkas2.jpg`,
    photos: [`https://canadskaya-izba.ru/img/doma/karkas2.jpg`, `https://www.krasdom.com/galfotobig/584.jpg`, `https://www.krasdom.com/galfotobig/561.jpg`, `https://www.artis21.ru/upload/iblock/f16/f164e862e34e212180e03f76c9226ee7.jpg`],
    title: `Просто хорошее место`,
    description: `Описание у всех одинаковое, потому что лень придумывать.`,
    isPremium: true,
    isFavorite: false,
    type: `Apartment`,
    rating: 5,
    countDedrooms: 4,
    maxGuests: 2,
    price: 200,
    features: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`, `Washing machine`],
    infoOwner: {
      id: `2`,
      name: `Vladislav Petrov`,
      avatar: `https://api.adorable.io/avatars/285/abott@adorable.png`,
      isPro: false,
    },
    coords: {
      latitude: 52.39,
      longitude: 4.8,
      zoom: 16,
    },
  },
];

const commentsMock = [{
  comment: `Бла бла бла`,
  date: `Ap 20`,
  id: 1,
  rating: 5,
  user: {
    avatarUrl: `link`,
    id: 1,
    isPro: false,
    name: `Vlad`,
  },
}];

describe(`Тестирование функции reducer`, () => {
  test(`Инициализация store. Offers ещё не загруженны`, () => {
    expect(reducer(void 0, {}))
      .toEqual({
        offers: [],
        favoriteOffers: [],
        commentsOffer: [],
        nearbyOffers: [],
      });
  });

  test(`Получение списка предложений`, () => {
    expect(reducer({
      offers: [],
      favoriteOffers: [],
      commentsOffer: [],
      nearbyOffers: [],
    }, {
      type: `GET_OFFERS`,
      payload: offers
    }))
      .toEqual({
        offers,
        favoriteOffers: [],
        commentsOffer: [],
        nearbyOffers: [],
      });
  });

});

describe(`Тестирование ActionCreator`, () => {
  test(`ActionCreator loadOffers() `, () => {
    expect(ActionCreator.loadOffers(offers)).toEqual({
      type: `GET_OFFERS`,
      payload: offers
    });
  });

  test(`ActionCreator loadFavoriteOffers() `, () => {
    expect(ActionCreator.loadFavoriteOffers(offers)).toEqual({
      type: `GET_FAVORITE_OFFERS`,
      payload: offers
    });
  });

  test(`ActionCreator updateOffers() `, () => {
    expect(ActionCreator.updateOffers(offers[0])).toEqual({
      type: `UPDATE_OFFERS`,
      payload: offers[0]
    });
  });

  test(`ActionCreator loadOfferComments() `, () => {
    expect(ActionCreator.loadOfferComments(commentsMock)).toEqual({
      type: `GET_COMMENTS_OFFER`,
      payload: commentsMock
    });
  });

  test(`ActionCreator updateCommentsOffer() `, () => {
    expect(ActionCreator.updateCommentsOffer(commentsMock)).toEqual({
      type: `UPDATE_COMMENTS_OFFER`,
      payload: commentsMock
    });
  });

  test(`ActionCreator loadNearbyOffers() `, () => {
    expect(ActionCreator.loadNearbyOffers(offers)).toEqual({
      type: `GET_NEARBY_OFFERS`,
      payload: offers
    });
  });

  test(`ActionCreator updateNearbyOffers() `, () => {
    expect(ActionCreator.updateNearbyOffers(offers[0])).toEqual({
      type: `UPDATE_NEARBY_OFFERS`,
      payload: offers[0]
    });
  });
});
