import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.APPLICATION;

const getCurrentCity = (state) => {
  return state[NAME_SPACE].city;
};

const getStatusLoading = (state) => {
  return state[NAME_SPACE].isLoading;
};

const getCurrentSort = (state) => {
  return state[NAME_SPACE].currentSort;
};

export {getCurrentCity, getCurrentSort, getStatusLoading};
