import {combineReducers} from 'redux';
import {reducer as data} from './data/reducer.js';
import {reducer as offer} from './application/reducer.js';
import {reducer as user} from './user/reducer.js';
import NameSpace from './name-space.js';

const reducer = combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.OFFER]: offer,
  [NameSpace.USER]: user,
});

export {reducer};
