import {CITIES} from '../../const.js';
import {extend} from '../../utils/util.js';
import {SortTypes} from '../../const.js';

const initialState = {
  city: CITIES[0],
  currentSort: SortTypes.POPULAR,
  isLoading: false,
};

const ActionType = {
  CHANGE_CITIES: `CHANGE_CITIES`,
  SORT_TYPE_CHANGE: `SORT_TYPE_CHANGE`,
  CHANGE_STATUS_LOADING: `CHANGE_STATUS_LOADING`,
};

const ActionCreator = {
  changeCities: (evt) => {
    return {
      type: ActionType.CHANGE_CITIES,
      payload: evt.target.textContent
    };
  },
  changeSortType: (evt) => {
    if (evt.target.className === `places__option`) {
      return {
        type: ActionType.SORT_TYPE_CHANGE,
        payload: evt.target.textContent
      };
    }

    return {};
  },
  changeActivePreloader: (isLoading) => ({
    type: ActionType.CHANGE_STATUS_LOADING,
    payload: !isLoading,
  }),
};

const reducer = (store = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITIES:
      return extend(store, {
        city: action.payload
      });

    case ActionType.SORT_TYPE_CHANGE:
      return extend(store, {
        currentSort: action.payload
      });

    case ActionType.CHANGE_STATUS_LOADING:
      return extend(store, {
        isLoading: action.payload
      });
  }

  return store;
};

export {reducer, ActionCreator};
