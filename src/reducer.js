import {combineReducers} from 'redux';
import {reducer as data} from './reducers/data/reducer.js';
import {reducer as offer} from './reducers/offer/reducer.js';
import {reducer as user} from './reducers/user/reducer.js';
import NameSpace from './reducers/name-space.js';

const reducer = combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.OFFER]: offer,
  [NameSpace.USER]: user,
});

export {reducer};
