import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.APPLICATION;

const getCurrentCity = (state) => {
  return state[NAME_SPACE].city;
};

const getStatusLoadingOffers = (state) => {
  return state[NAME_SPACE].isLoadingOffers;
};

const getStatusLoadingFeatures = (state) => {
  return state[NAME_SPACE].isLoadingFeatures;
};

const getStatusLoadingComments = (state) => {
  return state[NAME_SPACE].isLoadingComments;
};

const getStatusLoadingOffersNearby = (state) => {
  return state[NAME_SPACE].isLoadingOffersNearby;
};

const getStatusLoadedOffersNearby = (state) => {
  return state[NAME_SPACE].isLoadedOffersNearby;
};

const getCurrentSort = (state) => {
  return state[NAME_SPACE].currentSort;
};

export {getCurrentCity, getCurrentSort,
  getStatusLoadingOffers, getStatusLoadingFeatures,
  getStatusLoadingComments, getStatusLoadingOffersNearby,
  getStatusLoadedOffersNearby};
