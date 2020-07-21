import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.OFFER;

const getCurrentCity = (state) => {
  return state[NAME_SPACE].city;
};

const getCurrentSort = (state) => {
  return state[NAME_SPACE].currentSort;
};

export {getCurrentCity, getCurrentSort};
