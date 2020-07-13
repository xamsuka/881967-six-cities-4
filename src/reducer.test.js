import {reducer, ActionCreator} from './reducer.js';
import {offers} from './mock/mock.js';

describe(`Тестирование функции reducer`, () => {
  test(`Инициализация store. Offers ещё не загруженны`, () => {
    expect(reducer(void 0, {}))
      .toEqual({
        city: `Paris`,
        currentSort: `Popular`,
        offers: [],
      });
  });

  test(`Reducer смена города`, () => {
    expect(reducer({
      city: `Paris`,
      currentSort: `Popular`,
      offers,
    }, {
      type: `CHANGE_CITIES`,
      payload: `Cologne`
    }))
      .toEqual({
        city: `Cologne`,
        currentSort: `Popular`,
        offers,
      });
  });

  test(`Получение списка предложений`, () => {
    expect(reducer({
      city: `Paris`,
      currentSort: `Popular`,
      offers: [],
    }, {
      type: `GET_OFFERS`,
      payload: offers
    }))
      .toEqual({
        city: `Paris`,
        currentSort: `Popular`,
        offers,
      });
  });

});

const mockEvent = {
  target: {
    textContent: `Cologne`,
  }
};

const mockEventSort = {
  target: {
    textContent: `Popular`,
    className: `places__option`,
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

  test(`ActionCreator changeSortType() `, () => {
    expect(ActionCreator.changeSortType(mockEventSort)).toEqual({
      type: `SORT_TYPE_CHANGE`,
      payload: `Popular`
    });
  });
});
