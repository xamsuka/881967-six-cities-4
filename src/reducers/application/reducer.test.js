import {reducer, ActionCreator} from './reducer.js';

describe(`Тестирование функции reducer`, () => {
  test(`Инициализация store.`, () => {
    expect(reducer(void 0, {}))
      .toEqual({
        city: `Paris`,
        currentSort: `Popular`,
        isLoadingOffers: false,
        isLoadingFavorite: false,
        isDisabledFeedbackForm: false,
      });
  });

  test(`Reducer смена города`, () => {
    expect(reducer({
      city: `Paris`,
      currentSort: `Popular`,
      isLoadingOffers: false,
      isLoadingFavorite: false,
      isDisabledFeedbackForm: false,
    }, {
      type: `CHANGE_CITIES`,
      payload: `Cologne`
    }))
      .toEqual({
        city: `Cologne`,
        currentSort: `Popular`,
        isLoadingOffers: false,
        isLoadingFavorite: false,
        isDisabledFeedbackForm: false,
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

const mockPreloader = true;

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

  test(`ActionCreator changeActivePreloaderOffers() `, () => {
    expect(ActionCreator.changeActivePreloaderOffers(mockPreloader)).toEqual({
      type: `CHANGE_STATUS_LOADING_OFFERS`,
      payload: !mockPreloader
    });
  });

  test(`ActionCreator changeActivePreloaderFavorite() `, () => {
    expect(ActionCreator.changeActivePreloaderFavorite(mockPreloader)).toEqual({
      type: `CHANGE_STATUS_LOADING_FAVORITE`,
      payload: !mockPreloader
    });
  });

  test(`ActionCreator changeDisabledFeedbackForm() `, () => {
    expect(ActionCreator.changeDisabledFeedbackForm(mockPreloader)).toEqual({
      type: `CHANGE_DISABLED_FEEDBACK_FORM`,
      payload: !mockPreloader
    });
  });
});
