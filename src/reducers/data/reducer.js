import {extend} from '../../utils/util.js';
import {hotelsAdapter} from '../../adapters/adapters.js';
import {ActionCreator as ActionCreatorApplication} from '../application/reducer.js';

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
        const isLoading = getState().APPLICATION.isLoading;
        dispatch(ActionCreatorApplication.activatedPreloader(isLoading));

        return response;
      })
      .then((response) => {
        const offer = hotelsAdapter(response.data);
        dispatch(ActionCreator.loadOffers(offer));
        console.log(hotelsAdapter(response.data));
      })
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
