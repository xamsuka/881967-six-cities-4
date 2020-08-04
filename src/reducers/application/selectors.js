import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.APPLICATION;

const getCurrentCity = (state) => {
  return state[NAME_SPACE].city;
};

const getCurrentSort = (state) => {
  return state[NAME_SPACE].currentSort;
};

const getStatusLoadingOffers = (state) => {
  return state[NAME_SPACE].isLoadingOffers;
};

const getStatusLoadingFavorite = (state) => {
  return state[NAME_SPACE].isLoadingFavorite;
};

const getStatusFeedbackForm = (state) => {
  return state[NAME_SPACE].isDisabledFeedbackForm;
};

export {getCurrentCity, getCurrentSort,
  getStatusLoadingOffers, getStatusLoadingFavorite,
  getStatusFeedbackForm};
