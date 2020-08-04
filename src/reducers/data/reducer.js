import {extend} from '../../utils/util.js';
import {hotelAdapter, hotelsAdapter, reviewsAdapter} from '../../adapters/adapters.js';
import {ActionCreator as ActionCreatorApplication} from '../application/reducer.js';

const initialState = {
  offers: [],
  favoriteOffers: [],
  commentsOffer: [],
  nearbyOffers: [],
};

const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  GET_FAVORITE_OFFERS: `GET_FAVORITE_OFFERS`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
  GET_COMMENTS_OFFER: `GET_COMMENTS_OFFER`,
  UPDATE_COMMENTS_OFFER: `UPDATE_COMMENTS_OFFER`,
  GET_NEARBY_OFFERS: `GET_NEARBY_OFFERS`,
  UPDATE_NEARBY_OFFERS: `UPDATE_NEARBY_OFFERS`,
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
  updateOffers: (offer) => ({
    type: ActionType.UPDATE_OFFERS,
    payload: offer,
  }),
  loadOfferComments: (comments) => ({
    type: ActionType.GET_COMMENTS_OFFER,
    payload: comments,
  }),
  updateCommentsOffer: (comments) => ({
    type: ActionType.UPDATE_COMMENTS_OFFER,
    payload: comments,
  }),
  loadNearbyOffers: (nearbyOffers) => ({
    type: ActionType.GET_NEARBY_OFFERS,
    payload: nearbyOffers,
  }),
  updateNearbyOffers: (nearbyOffer) => ({
    type: ActionType.UPDATE_NEARBY_OFFERS,
    payload: nearbyOffer,
  })
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
        dispatch(ActionCreatorApplication.changeActivePreloaderFavorite(getState().APPLICATION.isLoadingFavorite));

        return response;
      })
      .then((response) => {
        const offers = hotelsAdapter(response.data);
        dispatch(ActionCreator.loadFavoriteOffers(offers));
        dispatch(ActionCreatorApplication.changeActivePreloaderFavorite(getState().APPLICATION.isLoadingFavorite));
      });
  },
  setFavoriteOffer: (id, newStatus) => (dispatch, getState, api) => {
    return api.post(`/favorite/${id}/${newStatus}`)
      .then((response) => {
        const offer = hotelAdapter(response.data);
        dispatch(ActionCreator.updateOffers(offer));
        dispatch(ActionCreator.updateNearbyOffers(offer));
        dispatch(Operations.loadFavoriteOffers());
      });
  },
  loadOfferComments: (id) => (dispatch, getState, api) => {
    return api.get(`comments/${id}`)
      .then((response) => {
        const comments = reviewsAdapter(response.data);
        dispatch(ActionCreator.loadOfferComments(comments));
      });
  },
  addNewOfferComment: (id, commentPost, formElement) => (dispatch, getState, api) => {
    return api.post(`comments/${id}`, commentPost)
      .then((response) => {
        const comments = reviewsAdapter(response.data);
        const isDisabledFeedbackForm = getState().APPLICATION.isDisabledFeedbackForm;
        dispatch(ActionCreator.updateCommentsOffer(comments));
        dispatch(ActionCreatorApplication.changeDisabledFeedbackForm(isDisabledFeedbackForm));
        formElement.reset();
      });
  },
  loadNearbyOffers: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        const nearbyOffers = hotelsAdapter(response.data);
        dispatch(ActionCreator.loadNearbyOffers(nearbyOffers));
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
    case ActionType.GET_COMMENTS_OFFER:
      return extend(store, {
        commentsOffer: action.payload,
      });
    case ActionType.UPDATE_COMMENTS_OFFER:
      return extend(store, {
        commentsOffer: action.payload,
      });
    case ActionType.GET_NEARBY_OFFERS:
      return extend(store, {
        nearbyOffers: action.payload,
      });
    case ActionType.UPDATE_NEARBY_OFFERS:
      const indexNewNearbyOffer = store.nearbyOffers.findIndex((nearbyOffer) => nearbyOffer.id === action.payload.id);
      if (indexNewNearbyOffer !== -1) {
        return extend(store, {
          nearbyOffers: [].concat(store.nearbyOffers.slice(0, indexNewNearbyOffer), action.payload, store.nearbyOffers.slice(indexNewNearbyOffer + 1)),
        });
      }
  }

  return store;
};

export {reducer, Operations, ActionCreator};
