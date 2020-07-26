import {combineReducers} from 'redux';
import {reducer as data} from './data/reducer.js';
import {reducer as application} from './application/reducer.js';
import {reducer as user} from './user/reducer.js';
import NameSpace from './name-space.js';

const reducer = combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APPLICATION]: application,
  [NameSpace.USER]: user,
});

export {reducer};
