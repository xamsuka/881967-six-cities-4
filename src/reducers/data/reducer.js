import {extend} from '../../utils/util.js';

const initialState = {
  offers: [],
};

const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
};

const ActionCreator = {
  getOffers: (offers) => ({
    type: ActionType.GET_OFFERS,
    payload: offers
  }),
};

const reducer = (store = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return extend(store, {
        offers: action.payload
      });
  }

  return store;
};

export {reducer, ActionCreator};
