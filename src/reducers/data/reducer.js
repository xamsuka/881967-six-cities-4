import {extend} from '../../utils/util.js';

const initialState = {
  offers: [],
};

const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
};

const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.GET_OFFERS,
    payload: offers
  }),
};

const Operations = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        debugger
        dispatch(ActionCreator.loadOffers(response.data));
      });
  },
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

export {reducer, Operations, ActionCreator};
