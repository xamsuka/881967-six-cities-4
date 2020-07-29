import {extend} from '../../utils/util.js';
import {hotelAdapter, hotelsAdapter, reviewsAdapter} from '../../adapters/adapters.js';
import {ActionCreator as ActionCreatorApplication} from '../application/reducer.js';

const initialState = {
  offers: [],
  favoriteOffers: [],
};

const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  GET_FAVORITE_OFFERS: `GET_FAVORITE_OFFERS`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
};

const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.GET_OFFERS,
    payload: offers
  }),
  loadFavoriteOffers: (offers) => ({
    type: ActionType.GET_FAVORITE_OFFERS,
    payload: offers,
  }),
  updateOffers: (offer) => {
    return {
      type: ActionType.UPDATE_OFFERS,
      payload: offer,
    };
  },
};

const Operations = {
  loadOffers: () => (dispatch, getState, api) => {
    dispatch(ActionCreatorApplication.changeActivePreloaderOffers(getState().APPLICATION.isLoadingOffers));
    return api.get(`/hotels`)
      .then((response) => {
        const offers = hotelsAdapter(response.data);
        dispatch(ActionCreator.loadOffers(offers));
        dispatch(ActionCreatorApplication.changeActivePreloaderOffers(getState().APPLICATION.isLoadingOffers
        ));
      });
  },
  loadFavoriteOffers: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreatorApplication.changeActivePreloaderFeatures(getState().APPLICATION.isLoadingFeatures));

        return response;
      })
      .then((response) => {
        const offers = hotelsAdapter(response.data);
        dispatch(ActionCreator.loadFavoriteOffers(offers));
        dispatch(ActionCreatorApplication.changeActivePreloaderFeatures(getState().APPLICATION.isLoadingFeatures));
      });
  },
  setFavoriteOffer: (id, newStatus) => (dispatch, getState, api) => {
    return api.post(`/favorite/${id}/${newStatus}`)
      .then((response) => {
        const offer = hotelAdapter(response.data);
        dispatch(ActionCreator.updateOffers(offer));
        dispatch(Operations.loadFavoriteOffers());
      });
  },
  loadOfferComments: (id) => (dispatch, getState, api) => {
    return api.get(`comments/${id}`)
      .then((response) => {
        const reviews = reviewsAdapter(response.data);
        return reviews;
      });
  },
  addNewOfferComment: (id, commentPost) => (dispatch, getState, api) => {
    return api.post(`comments/${id}`, commentPost)
      .then((response) => {
        return response;
      });
  },
  getNearbyOffers: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        const nearbyOffers = hotelsAdapter(response.data);
        return nearbyOffers;
      });
  },
};

const reducer = (store = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return extend(store, {
        offers: action.payload
      });
    case ActionType.GET_FAVORITE_OFFERS:
      return extend(store, {
        favoriteOffers: action.payload
      });
    case ActionType.UPDATE_OFFERS:
      const indexNewOffer = store.offers.findIndex((offer) => offer.id === action.payload.id);
      return extend(store, {
        offers: [].concat(store.offers.slice(0, indexNewOffer), action.payload, store.offers.slice(indexNewOffer + 1)),
      });
  }

  return store;
};

export {reducer, Operations, ActionCreator};
