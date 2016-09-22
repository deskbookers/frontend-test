import { combineReducers } from 'redux';

import carousel from './carousel';
import search from './search';

const combinedReducers = combineReducers({
  carousel,
  search
});

export default combinedReducers;