import {extend} from '../../utils/util.js';
import {hotelsAdapter} from '../../adapters/adapters.js';

const initialState = {
  offers: [],
  isLoading: false,
};

const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_STATUS_LOADING: `CHANGE_STATUS_LOADING`,
};

const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.GET_OFFERS,
    payload: offers
  }),

  activatedPreloader: (isLoading) => ({
    type: ActionType.CHANGE_STATUS_LOADING,
    payload: !isLoading,
  }),

};

const Operations = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const isLoading = getState().DATA.isLoading;
        dispatch(ActionCreator.activatedPreloader(isLoading));

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
    case ActionType.CHANGE_STATUS_LOADING:
      return extend(store, {
        isLoading: action.payload
      });
  }

  return store;
};

export {reducer, Operations, ActionCreator};
