import {reducer, ActionCreator} from './reducer.js';

describe(`Тестирование функции reducer`, () => {
  test(`Инициализация store.`, () => {
    expect(reducer(void 0, {}))
      .toEqual({
        city: `Paris`,
        currentSort: `Popular`,
        isLoading: false,
      });
  });

  test(`Reducer смена города`, () => {
    expect(reducer({
      city: `Paris`,
      currentSort: `Popular`,
      isLoading: false,
    }, {
      type: `CHANGE_CITIES`,
      payload: `Cologne`
    }))
      .toEqual({
        city: `Cologne`,
        currentSort: `Popular`,
        isLoading: false,
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
      payload: `Cologne`,
    });
  });

  test(`ActionCreator changeSortType() `, () => {
    expect(ActionCreator.changeSortType(mockEventSort)).toEqual({
      type: `SORT_TYPE_CHANGE`,
      payload: `Popular`
    });
  });
});
