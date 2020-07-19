import {CITIES} from './const.js';
import {extend} from './utils/util.js';
import {offers} from './mock/mock.js';
import {SortTypes} from './const.js';

const initialState = {
  city: CITIES[0],
  offers: [],
  currentSort: SortTypes.POPULAR,
};

const ActionType = {
  CHANGE_CITIES: `CHANGE_CITIES`,
  GET_OFFERS: `GET_OFFERS`,
  SORT_TYPE_CHANGE: `SORT_TYPE_CHANGE`,
};

const ActionCreator = {
  changeCities: (evt) => {
    if (evt.target.nodeName === `A` || evt.target.nodeName === `SPAN`) {
      return {
        type: ActionType.CHANGE_CITIES,
        payload: evt.target.textContent
      };
    }

    return {};
  },
  getOffers: () => ({
    type: ActionType.GET_OFFERS,
    payload: offers
  }),
  changeSortType: (evt) => {
    if (evt.target.className === `places__option`) {
      return {
        type: ActionType.SORT_TYPE_CHANGE,
        payload: evt.target.textContent
      };
    }

    return {};
  },
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
    case ActionType.SORT_TYPE_CHANGE:
      return extend(store, {
        currentSort: action.payload
      });
  }

  return store;
};

export {reducer, ActionCreator};
