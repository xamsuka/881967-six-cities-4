import {createSelector} from 'reselect';
import NameSpace from '../name-space.js';
import {SortTypes} from '../../const.js';
import {getCurrentSort} from '../offer/selectors.js';

const NAME_SPACE = NameSpace.DATA;

const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

const getSortedOffers = createSelector(
    getOffers,
    getCurrentSort,
    (offers, currentSort) => {
      const sortOffers = offers.slice();

      switch (currentSort) {
        case SortTypes.POPULAR:
          return offers;
        case SortTypes.PRICE_LOW_TO_HIGHT:
          return sortOffers.sort((a, b) => {
            return a.price - b.price;
          });
        case SortTypes.PRICE_HIGHT_TO_LOW:
          return sortOffers.sort((a, b) => {
            return b.price - a.price;
          });
        case SortTypes.TOP_RATED_FIRST:
          return sortOffers.sort((a, b) => {
            return a.rating - b.rating;
          });
      }

      return offers;
    }
);

export {getOffers, getSortedOffers};
